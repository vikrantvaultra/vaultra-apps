// Sale Sniper background worker — owns all state, tabs, timing and safety checks.
//
// Content scripts on Amazon/Flipkart pages only *observe and click*. Every decision
// that matters (is this tab working on an item? may it place an order? reload now?)
// is made here, so a crashed/reloaded page can never double-order.

import {
  ACTIVE,
  DEFAULT_SETTINGS,
  SITES,
  cleanProductUrl,
  effectiveAutoPlace,
  formatINR,
  isShopUrl,
  itemLabel,
  startUrl,
  todayKey,
} from './lib/store.js';
import { PUBLIC_BUILD } from './lib/build.js';

const LOCK_MS = 3 * 60_000; // a checkout lock lapses if its tab goes quiet this long
const ATTENTION_LOCK_MS = 5 * 60_000;
const PLACING_CONFIRM_MS = 90_000; // no thank-you page within this → ask the human
const WAIT_STALE_MS = 20_000; // waiting tab that hasn't pinged → watchdog reloads it

// ---------------------------------------------------------------------------
// State: chrome.storage.local (items, settings, logs, spend) +
//        chrome.storage.session (tab→item jobs, per-site checkout locks).
// All mutations are serialised through one promise chain.
// ---------------------------------------------------------------------------

let chain = Promise.resolve();
function serial(fn) {
  const p = chain.then(() => fn());
  chain = p.catch(() => {});
  return p;
}

async function load() {
  const [local, session] = await Promise.all([
    chrome.storage.local.get(['settings', 'items', 'logs', 'spent']),
    chrome.storage.session.get(['jobs', 'locks']),
  ]);
  const spent = local.spent?.date === todayKey() ? local.spent : { date: todayKey(), amount: 0 };
  return {
    settings: { ...DEFAULT_SETTINGS, ...local.settings },
    items: local.items || [],
    logs: local.logs || [],
    spent,
    jobs: session.jobs || {},
    locks: session.locks || {},
  };
}

function mutate(fn) {
  return serial(async () => {
    const st = await load();
    const result = await fn(st);
    await Promise.all([
      chrome.storage.local.set({ settings: st.settings, items: st.items, logs: st.logs.slice(-400), spent: st.spent }),
      chrome.storage.session.set({ jobs: st.jobs, locks: st.locks }),
    ]);
    updateBadge(st.items);
    return result;
  });
}

const findItem = (st, id) => st.items.find((i) => i.id === id);
const tabOf = (st, id) => {
  const entry = Object.entries(st.jobs).find(([, itemId]) => itemId === id);
  return entry ? Number(entry[0]) : null;
};

function log(st, item, level, msg) {
  st.logs.push({ t: Date.now(), itemId: item?.id ?? null, label: item ? itemLabel(item) : null, level, msg });
}

function setStatus(st, item, status, statusText, extra = {}) {
  Object.assign(item, { status, statusText, updatedAt: Date.now() }, extra);
}

function releaseLock(st, item) {
  if (st.locks[item.site]?.id === item.id) delete st.locks[item.site];
}

function detach(st, item) {
  const tabId = tabOf(st, item.id);
  if (tabId != null) delete st.jobs[tabId];
  releaseLock(st, item);
  return tabId;
}

// ---------------------------------------------------------------------------
// UI side effects
// ---------------------------------------------------------------------------

function updateBadge(items) {
  const attention = items.some((i) => i.status === 'attention');
  const live = items.filter((i) => ACTIVE.has(i.status)).length;
  chrome.action.setBadgeText({ text: attention ? '!' : live ? String(live) : '' });
  chrome.action.setBadgeBackgroundColor({ color: attention ? '#E5383B' : '#FF6B1A' });
}

async function notify(settings, title, message, tabId) {
  if (!settings.notify) return;
  try {
    await chrome.notifications.create(`salesniper:${tabId ?? 'none'}:${Date.now()}`, {
      type: 'basic',
      iconUrl: chrome.runtime.getURL('icons/icon-128.png'),
      title,
      message,
      priority: 2,
      requireInteraction: tabId != null,
    });
  } catch {}
}

async function focusTab(tabId) {
  try {
    const tab = await chrome.tabs.update(tabId, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  } catch {}
}

chrome.notifications.onClicked.addListener((id) => {
  const tabId = Number(id.split(':')[1]);
  if (Number.isFinite(tabId)) focusTab(tabId);
  chrome.notifications.clear(id);
});

// ---------------------------------------------------------------------------
// Scheduling
// ---------------------------------------------------------------------------

async function scheduleAlarm(item, settings) {
  await chrome.alarms.clear(`item:${item.id}`);
  if (item.scheduleAt && item.status === 'scheduled') {
    const when = Math.max(Date.now() + 1000, item.scheduleAt - settings.openLeadSeconds * 1000);
    await chrome.alarms.create(`item:${item.id}`, { when });
  }
}

/** Open a tab for an item and bind it. Must run inside mutate(). */
async function launch(st, item) {
  const now = Date.now();
  const base = item.scheduleAt && item.scheduleAt > now ? item.scheduleAt : now;
  // Each item gets its own small, unfocused window: background *tabs* are hidden, and hidden
  // pages get throttled and skip layout, which breaks reading the buy box.
  // Bind the tab to the item *before* navigating so the first page load already finds its job.
  const n = Object.keys(st.jobs).length;
  const win = await chrome.windows.create({ url: 'about:blank', focused: false, width: 1100, height: 820, left: 40 + (n % 6) * 40, top: 40 + (n % 6) * 40 });
  const tab = win.tabs[0];
  st.jobs[tab.id] = item.id;
  setStatus(st, item, 'running', 'Opening ' + SITES[item.site].label + '…', {
    startedAt: now,
    deadline: base + st.settings.saleWaitMinutes * 60_000,
    attentionStage: null,
    placingAt: null,
    reloads: 0,
  });
  log(st, item, 'info', `Started — will keep trying until ${new Date(item.deadline).toLocaleTimeString('en-IN')}`);
  return { tabId: tab.id, url: startUrl(item) };
}

async function startItems(ids, { force = false } = {}) {
  const launches = await mutate(async (st) => {
    const out = [];
    for (const item of st.items) {
      if (ids && !ids.includes(item.id)) continue;
      if (item.status === 'ordered' || ACTIVE.has(item.status)) continue;
      if (!force && item.scheduleAt && item.scheduleAt - st.settings.openLeadSeconds * 1000 > Date.now()) {
        setStatus(st, item, 'scheduled', 'Opens at ' + new Date(item.scheduleAt - st.settings.openLeadSeconds * 1000).toLocaleString('en-IN'));
        await scheduleAlarm(item, st.settings);
        continue;
      }
      out.push(await launch(st, item));
    }
    return out;
  });
  for (const { tabId, url } of launches) await chrome.tabs.update(tabId, { url }).catch(() => {});
  return launches.length;
}

async function stopItems(ids, why = 'Stopped by you') {
  const tabs = await mutate(async (st) => {
    const out = [];
    for (const item of st.items) {
      if (ids && !ids.includes(item.id)) continue;
      await chrome.alarms.clear(`item:${item.id}`);
      if (!ACTIVE.has(item.status) && item.status !== 'scheduled') continue;
      const tabId = detach(st, item);
      if (tabId != null) out.push(tabId);
      setStatus(st, item, 'stopped', why);
      log(st, item, 'info', why);
    }
    return out;
  });
  for (const tabId of tabs) chrome.tabs.sendMessage(tabId, { type: 'job:stopped' }).catch(() => {});
}

function scheduleReload(tabId, delay) {
  const jitter = delay * (0.85 + Math.random() * 0.3);
  setTimeout(() => chrome.tabs.reload(tabId, { bypassCache: true }).catch(() => {}), jitter);
}

// ---------------------------------------------------------------------------
// Messages from content scripts (sender.tab set) and extension pages.
// ---------------------------------------------------------------------------

const fromTab = {
  async 'job:get'(msg, tabId) {
    const st = await load();
    const item = findItem(st, st.jobs[tabId]);
    if (!item || !ACTIVE.has(item.status)) return null;
    const passive = item.status === 'placing' || (item.status === 'attention' && ['final', 'payment', 'checkout'].includes(item.attentionStage));
    // Content scripts read autoPlace straight from the job, so the public build hands them "off".
    if (PUBLIC_BUILD) return { item: { ...item, autoPlace: false }, settings: { ...st.settings, autoPlaceOrder: false }, passive };
    return { item, settings: st.settings, passive };
  },

  progress: (msg, tabId) =>
    mutate((st) => {
      const item = findItem(st, st.jobs[tabId]);
      if (!item) return null;
      const extra = {};
      if (msg.title && !item.title) extra.title = msg.title;
      if (msg.image && !item.image) extra.image = msg.image;
      if (msg.price != null) extra.lastPrice = msg.price;
      extra.lastPing = Date.now();
      if (st.locks[item.site]?.id === item.id) st.locks[item.site].until = Date.now() + LOCK_MS;
      // A login/captcha/product hiccup that the user has fixed → back to running.
      const status = item.status === 'placing' ? 'placing' : item.status === 'attention' && ['final', 'payment', 'checkout'].includes(item.attentionStage) ? 'attention' : 'running';
      if (msg.text !== item.statusText || status !== item.status) {
        setStatus(st, item, status, msg.text ?? item.statusText, extra);
        if (msg.log) log(st, item, 'info', msg.text);
      } else Object.assign(item, extra);
      return true;
    }),

  wait: (msg, tabId) =>
    mutate(async (st) => {
      const item = findItem(st, st.jobs[tabId]);
      if (!item) return null;
      const now = Date.now();
      if (msg.price != null) item.lastPrice = msg.price;
      if (msg.title && !item.title) item.title = msg.title;
      if (now > item.deadline) {
        detach(st, item);
        setStatus(st, item, 'failed', `Gave up: ${msg.text}`);
        log(st, item, 'warn', `Timed out waiting — last state: ${msg.text}`);
        await notify(st.settings, 'Sale Sniper: gave up', `${itemLabel(item)} — ${msg.text}`, tabId);
        return { reload: false };
      }
      releaseLock(st, item);
      const preSale = item.scheduleAt && now < item.scheduleAt;
      const delay = preSale ? st.settings.preSaleRefreshMs : st.settings.refreshMs;
      item.reloads = (item.reloads || 0) + 1;
      setStatus(st, item, 'waiting', `${msg.text} · refresh #${item.reloads}`, { lastPing: now });
      if (item.reloads === 1 || item.reloads % 50 === 0) log(st, item, 'info', msg.text);
      scheduleReload(tabId, delay);
      return { reload: true, delay };
    }),

  lock: (msg, tabId) =>
    mutate((st) => {
      const item = findItem(st, st.jobs[tabId]);
      if (!item) return { ok: false };
      const held = st.locks[item.site];
      if (held && held.id !== item.id && held.until > Date.now() && findItem(st, held.id) && ACTIVE.has(findItem(st, held.id).status)) {
        return { ok: false, holder: itemLabel(findItem(st, held.id)) };
      }
      st.locks[item.site] = { id: item.id, until: Date.now() + LOCK_MS };
      return { ok: true };
    }),

  // The last gate before a real order. Everything that could cost money is checked here.
  placing: (msg, tabId) =>
    mutate((st) => {
      const item = findItem(st, st.jobs[tabId]);
      if (!item) return { ok: false, reason: 'This tab is no longer running an item.' };
      if (item.status === 'placing' || item.status === 'ordered') return { ok: false, reason: 'Order already being placed for this item — not clicking twice.' };
      if (!effectiveAutoPlace(item, st.settings)) return { ok: false, reason: 'Auto place order is off.' };
      const total = Number(msg.total);
      if (!item.maxPrice) return { ok: false, reason: 'No max price set, so I won’t auto-pay.' };
      const cap = item.maxPrice * (item.quantity || 1) + (st.settings.feeAllowance || 0);
      if (!(total > 0)) return { ok: false, reason: 'Couldn’t read the order total.' };
      if (total > cap) return { ok: false, reason: `Total ${formatINR(total)} is above your cap ${formatINR(cap)} (max × qty + ${formatINR(st.settings.feeAllowance || 0)} fees).` };
      if (st.settings.dailyBudget > 0 && st.spent.amount + total > st.settings.dailyBudget) {
        return { ok: false, reason: `Would cross today’s budget (${formatINR(st.spent.amount)} of ${formatINR(st.settings.dailyBudget)} used).` };
      }
      setStatus(st, item, 'placing', `Placing order · ${formatINR(total)}`, { placingAt: Date.now(), placingTotal: total });
      log(st, item, 'info', `Clicking Place Order for ${formatINR(total)}`);
      return { ok: true };
    }),

  ordered: (msg, tabId) =>
    mutate(async (st) => {
      const item = findItem(st, st.jobs[tabId]);
      if (!item || item.status === 'ordered') return null;
      const total = Number(msg.total) > 0 ? Number(msg.total) : item.placingTotal || 0;
      detach(st, item);
      st.spent.amount += total;
      setStatus(st, item, 'ordered', `Ordered${total ? ' · ' + formatINR(total) : ''}${msg.orderId ? ' · #' + msg.orderId : ''}`, {
        orderedAt: Date.now(),
        orderTotal: total || null,
        orderId: msg.orderId || null,
      });
      log(st, item, 'good', item.statusText);
      await notify(st.settings, 'Sale Sniper: order placed 🎉', `${itemLabel(item)} ${total ? '· ' + formatINR(total) : ''}`, tabId);
      return true;
    }),

  attention: (msg, tabId) =>
    mutate(async (st) => {
      const item = findItem(st, st.jobs[tabId]);
      if (!item) return null;
      if (item.status === 'attention' && item.statusText === msg.text) return true;
      setStatus(st, item, 'attention', msg.text, { attentionStage: msg.stage || 'product' });
      const lock = st.locks[item.site];
      if (lock?.id === item.id) {
        // Keep the checkout to ourselves while the human finishes it; otherwise let others go.
        if (['final', 'payment', 'checkout'].includes(msg.stage)) lock.until = Date.now() + ATTENTION_LOCK_MS;
        else releaseLock(st, item);
      }
      log(st, item, 'warn', msg.text);
      await notify(st.settings, 'Sale Sniper needs you', `${itemLabel(item)} — ${msg.text}`, tabId);
      await focusTab(tabId);
      return true;
    }),

  failed: (msg, tabId) =>
    mutate((st) => {
      const item = findItem(st, st.jobs[tabId]);
      if (!item) return null;
      detach(st, item);
      setStatus(st, item, 'failed', msg.text);
      log(st, item, 'warn', msg.text);
      return true;
    }),

  async stop(msg, tabId) {
    const st = await load();
    const id = st.jobs[tabId];
    if (id) await stopItems([id]);
    return true;
  },
};

const fromPage = {
  'items:add': ({ items }) =>
    mutate(async (st) => {
      const added = [];
      for (const draft of items) {
        if (!SITES[draft.site]) continue;
        if (draft.mode === 'url' && !draft.url) continue;
        if (draft.mode !== 'url' && !draft.query) continue;
        const url = draft.mode === 'url' ? cleanProductUrl(draft.url) : null;
        if (url && st.items.some((i) => i.url === url && i.status !== 'ordered')) continue;
        const item = {
          id: crypto.randomUUID(),
          site: draft.site,
          mode: draft.mode === 'url' ? 'url' : 'search',
          url,
          query: draft.mode === 'url' ? null : draft.query.trim(),
          title: draft.title || null,
          image: draft.image || null,
          maxPrice: Number(draft.maxPrice) > 0 ? Number(draft.maxPrice) : null,
          quantity: Math.min(10, Math.max(1, parseInt(draft.quantity, 10) || 1)),
          scheduleAt: draft.scheduleAt ? Number(draft.scheduleAt) : null,
          autoPlace: draft.autoPlace ?? null,
          lastPrice: draft.price ?? null,
          status: 'queued',
          statusText: 'Ready',
          createdAt: Date.now(),
        };
        if (item.scheduleAt && item.scheduleAt > Date.now()) {
          item.status = 'scheduled';
          item.statusText = 'Sale at ' + new Date(item.scheduleAt).toLocaleString('en-IN');
          await scheduleAlarm(item, st.settings);
        }
        st.items.push(item);
        log(st, item, 'info', `Added (${item.mode === 'url' ? 'product link' : 'search'}${item.maxPrice ? ', max ' + formatINR(item.maxPrice) : ''})`);
        added.push(item.id);
      }
      return { added: added.length };
    }),

  'items:update': ({ id, patch }) =>
    mutate(async (st) => {
      const item = findItem(st, id);
      if (!item) return null;
      const allowed = ['maxPrice', 'quantity', 'scheduleAt', 'autoPlace', 'query', 'title'];
      for (const k of allowed) if (k in patch) item[k] = patch[k];
      if (item.maxPrice != null) item.maxPrice = Number(item.maxPrice) > 0 ? Number(item.maxPrice) : null;
      item.quantity = Math.min(10, Math.max(1, parseInt(item.quantity, 10) || 1));
      if ('scheduleAt' in patch && !ACTIVE.has(item.status) && item.status !== 'ordered') {
        const future = item.scheduleAt && item.scheduleAt > Date.now();
        setStatus(st, item, future ? 'scheduled' : 'queued', future ? 'Sale at ' + new Date(item.scheduleAt).toLocaleString('en-IN') : 'Ready');
        await scheduleAlarm(item, st.settings);
      }
      return true;
    }),

  'items:remove': async ({ id }) => {
    await stopItems([id], 'Removed');
    return mutate(async (st) => {
      st.items = st.items.filter((i) => i.id !== id);
      await chrome.alarms.clear(`item:${id}`);
      return true;
    });
  },

  'items:reset': ({ id }) =>
    mutate(async (st) => {
      const item = findItem(st, id);
      if (!item || ACTIVE.has(item.status)) return null;
      const future = item.scheduleAt && item.scheduleAt > Date.now();
      setStatus(st, item, future ? 'scheduled' : 'queued', future ? 'Sale at ' + new Date(item.scheduleAt).toLocaleString('en-IN') : 'Ready', {
        orderedAt: null,
        orderTotal: null,
        orderId: null,
      });
      await scheduleAlarm(item, st.settings);
      return true;
    }),

  'items:clearDone': () =>
    mutate((st) => {
      st.items = st.items.filter((i) => i.status !== 'ordered');
      return true;
    }),

  'run:start': ({ ids, force }) => startItems(ids, { force }),
  'run:stop': ({ ids }) => stopItems(ids),
  'run:focus': async ({ id }) => {
    const st = await load();
    const tabId = tabOf(st, id);
    if (tabId != null) await focusTab(tabId);
    return tabId != null;
  },

  'settings:save': ({ patch }) =>
    mutate(async (st) => {
      const s = st.settings;
      for (const [k, v] of Object.entries(patch)) if (k in DEFAULT_SETTINGS) s[k] = v;
      s.refreshMs = Math.max(800, Number(s.refreshMs) || DEFAULT_SETTINGS.refreshMs);
      s.preSaleRefreshMs = Math.max(2000, Number(s.preSaleRefreshMs) || DEFAULT_SETTINGS.preSaleRefreshMs);
      s.saleWaitMinutes = Math.min(120, Math.max(1, Number(s.saleWaitMinutes) || DEFAULT_SETTINGS.saleWaitMinutes));
      s.openLeadSeconds = Math.min(600, Math.max(15, Number(s.openLeadSeconds) || DEFAULT_SETTINGS.openLeadSeconds));
      s.dailyBudget = Math.max(0, Number(s.dailyBudget) || 0);
      s.feeAllowance = Math.min(5000, Math.max(0, Number(s.feeAllowance) || 0));
      for (const item of st.items) if (item.status === 'scheduled') await scheduleAlarm(item, s);
      return s;
    }),

  'logs:clear': () =>
    mutate((st) => {
      st.logs = [];
      return true;
    }),
};

chrome.runtime.onMessage.addListener((msg, sender, reply) => {
  // Our own popup/dashboard (even when the dashboard is open in a tab) vs. a store page.
  const ownPage = sender.url?.startsWith(chrome.runtime.getURL(''));
  const tabId = sender.tab?.id;
  const handler = ownPage ? fromPage[msg?.type] : tabId != null ? fromTab[msg?.type] : null;
  if (!handler) return false;
  Promise.resolve(handler(msg, tabId))
    .then(reply)
    .catch((e) => reply({ error: String(e?.message || e) }));
  return true;
});

// ---------------------------------------------------------------------------
// Tabs, alarms, lifecycle
// ---------------------------------------------------------------------------

chrome.tabs.onRemoved.addListener((tabId) =>
  mutate((st) => {
    const item = findItem(st, st.jobs[tabId]);
    if (!item) return;
    detach(st, item);
    if (item.status === 'placing') {
      setStatus(st, item, 'attention', 'Tab closed while placing — check your orders before retrying', { attentionStage: 'final' });
    } else if (ACTIVE.has(item.status)) {
      setStatus(st, item, 'stopped', 'Tab closed');
    }
    log(st, item, 'info', 'Tab closed');
  }),
);

// Bank OTP / UPI pages live off-site where our content scripts can't run.
chrome.tabs.onUpdated.addListener((tabId, change) => {
  if (!change.url || /^(about|chrome|chrome-extension):/.test(change.url) || isShopUrl(change.url)) return;
  mutate(async (st) => {
    const item = findItem(st, st.jobs[tabId]);
    if (!item || !ACTIVE.has(item.status) || item.status === 'attention') return;
    setStatus(st, item, 'attention', 'Complete the payment (OTP / UPI) in this tab', { attentionStage: 'payment' });
    log(st, item, 'warn', 'Left the store for payment — waiting for you to approve it');
    await notify(st.settings, 'Sale Sniper: approve payment', `${itemLabel(item)} — finish OTP/UPI in the open tab`, tabId);
    await focusTab(tabId);
  });
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name.startsWith('item:')) {
    await startItems([alarm.name.slice(5)], { force: true });
    return;
  }
  if (alarm.name !== 'watchdog') return;
  const reloads = await mutate(async (st) => {
    const now = Date.now();
    const out = [];
    for (const item of st.items) {
      const tabId = tabOf(st, item.id);
      if (item.status === 'placing' && now - (item.placingAt || now) > PLACING_CONFIRM_MS) {
        setStatus(st, item, 'attention', 'Couldn’t confirm the order — check Your Orders before retrying', { attentionStage: 'final' });
        log(st, item, 'warn', item.statusText);
        await notify(st.settings, 'Sale Sniper: please verify', `${itemLabel(item)} — order confirmation not seen`, tabId);
      }
      // Service worker may have been suspended mid-wait and lost its reload timer.
      if (item.status === 'waiting' && tabId != null && now - (item.lastPing || 0) > WAIT_STALE_MS) out.push(tabId);
      if (ACTIVE.has(item.status) && tabId == null && item.status !== 'attention') {
        setStatus(st, item, 'stopped', 'Lost its tab');
      }
    }
    return out;
  });
  for (const tabId of reloads) chrome.tabs.reload(tabId).catch(() => {});
});

async function ensureWatchdog() {
  if (!(await chrome.alarms.get('watchdog'))) await chrome.alarms.create('watchdog', { periodInMinutes: 0.5 });
}

chrome.runtime.onInstalled.addListener(async ({ reason }) => {
  await ensureWatchdog();
  await mutate(() => {}); // writes defaults
  if (reason === 'install') chrome.tabs.create({ url: chrome.runtime.getURL('src/dashboard/dashboard.html?welcome=1') });
});

chrome.runtime.onStartup.addListener(async () => {
  await ensureWatchdog();
  // Session storage (jobs/locks) is gone after a browser restart; nothing is running any more.
  await mutate(async (st) => {
    for (const item of st.items) {
      if (ACTIVE.has(item.status)) setStatus(st, item, 'stopped', 'Browser restarted');
      if (item.status === 'scheduled') await scheduleAlarm(item, st.settings);
    }
  });
});
