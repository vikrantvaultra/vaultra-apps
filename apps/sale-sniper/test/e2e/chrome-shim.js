// Minimal chrome.* stand-in so the *real* background.js, content scripts and dashboard run
// on localhost fixture pages. One browser tab plays the role of the extension's job tab:
// storage.local → localStorage, storage.session → sessionStorage (survives same-tab navigation),
// and the background worker is re-imported on every page load (like a worker restart).
(() => {
  const role = document.currentScript.dataset.role; // 'store' (content-script side) | 'page' (dashboard/popup)
  const TAB = { id: 1, windowId: 1 };
  const EXT = location.origin + '/__ext__/';

  const report = (kind, data) => {
    const body = JSON.stringify({ t: Date.now(), kind, path: location.pathname + location.search, ...data });
    navigator.sendBeacon('/__log', body);
  };
  window.__saleSniperReport = report;

  let bgReady;
  const bgLoaded = new Promise((r) => (bgReady = r));
  window.__bgReady = bgReady;

  const make = () => {
    const fns = [];
    return { fns, addListener: (f) => fns.push(f), removeListener: (f) => fns.splice(fns.indexOf(f), 1) };
  };
  const bgMessage = make();
  const csMessage = make();
  const changed = make();

  const area = (store, name) => ({
    async get(keys) {
      const all = JSON.parse(store.getItem('chrome.' + name) || '{}');
      if (!keys) return all;
      const out = {};
      for (const k of Array.isArray(keys) ? keys : [keys]) if (k in all) out[k] = all[k];
      return structuredClone(out);
    },
    async set(obj) {
      const all = JSON.parse(store.getItem('chrome.' + name) || '{}');
      const copy = JSON.parse(JSON.stringify(obj));
      Object.assign(all, copy);
      store.setItem('chrome.' + name, JSON.stringify(all));
      const changes = Object.fromEntries(Object.entries(copy).map(([k, v]) => [k, { newValue: v }]));
      for (const f of changed.fns) f(changes, name);
    },
  });

  const deliver = (target, msg, sender) =>
    new Promise((resolve) => {
      for (const f of target.fns) {
        const keep = f(msg, sender, resolve);
        if (keep === true) return;
      }
      resolve(undefined);
    });

  const alarms = new Map();
  const noopEvent = make();

  window.chrome = {
    runtime: {
      id: 'sale-sniper-shim',
      getURL: (p) => EXT + p.replace(/^\//, ''),
      async sendMessage(msg) {
        await bgLoaded;
        const sender = role === 'page' ? { id: 'sale-sniper-shim', url: EXT + 'src/dashboard/dashboard.html' } : { id: 'sale-sniper-shim', url: location.href, tab: TAB };
        const res = await deliver(bgMessage, msg, sender);
        report('msg', { from: role, type: msg.type, msg, res });
        return res;
      },
      onMessage: {
        // Classic content scripts register while document.currentScript is set; the module
        // background registers with currentScript === null. That's how we tell them apart.
        addListener: (f) => (document.currentScript ? csMessage : bgMessage).addListener(f),
      },
      onInstalled: noopEvent,
      onStartup: noopEvent,
      openOptionsPage: () => (location.href = EXT + 'src/dashboard/dashboard.html'),
    },
    storage: { local: area(localStorage, 'local'), session: area(sessionStorage, 'session'), onChanged: changed },
    tabs: {
      async create({ url }) {
        report('tabs.create', { url });
        return { ...TAB };
      },
      async update(id, props) {
        if (props.url && props.url !== 'about:blank') {
          // Search items start on the real store's search URL — keep them on the fixtures.
          const url = props.url.replace(/^https:\/\/(www\.)?(amazon\.in|flipkart\.com)/, location.origin);
          report('navigate', { url });
          setTimeout(() => (location.href = url), 50);
        }
        return { ...TAB };
      },
      async reload() {
        report('reload', {});
        location.reload();
      },
      async query() {
        return [{ ...TAB, url: location.href, title: document.title }];
      },
      async sendMessage(id, msg) {
        return deliver(csMessage, msg, { id: 'sale-sniper-shim' });
      },
      onRemoved: noopEvent,
      onUpdated: noopEvent,
    },
    windows: {
      async create(opts) {
        report('windows.create', {});
        return { id: 1, tabs: [{ ...TAB }] };
      },
      async update() {},
    },
    alarms: {
      async create(name, info) {
        clearTimeout(alarms.get(name)?.timer);
        alarms.set(name, { name, ...info });
      },
      async clear(name) {
        clearTimeout(alarms.get(name)?.timer);
        return alarms.delete(name);
      },
      async get(name) {
        return alarms.get(name);
      },
      onAlarm: noopEvent,
    },
    notifications: {
      async create(id, opts) {
        report('notify', { title: opts.title, message: opts.message });
      },
      clear() {},
      onClicked: noopEvent,
    },
    action: { setBadgeText() {}, setBadgeBackgroundColor() {} },
  };
})();
