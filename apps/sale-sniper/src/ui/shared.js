import { ACTIVE, DEFAULT_SETTINGS, SITES, STATUS, effectiveAutoPlace, formatINR, itemLabel } from '../lib/store.js';

export const send = (type, payload = {}) => chrome.runtime.sendMessage({ type, ...payload });

export async function loadState() {
  const s = await chrome.storage.local.get(['settings', 'items', 'logs', 'spent']);
  return { settings: { ...DEFAULT_SETTINGS, ...s.settings }, items: s.items || [], logs: s.logs || [], spent: s.spent || { amount: 0 } };
}

/** Calls `cb(state)` now and whenever the background worker writes. */
export function watchState(cb) {
  const run = () => loadState().then(cb);
  chrome.storage.onChanged.addListener((_c, area) => area === 'local' && run());
  run();
}

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function toLocalInput(ms) {
  if (!ms) return '';
  const d = new Date(ms - new Date().getTimezoneOffset() * 60_000);
  return d.toISOString().slice(0, 16);
}
export const fromLocalInput = (v) => (v ? new Date(v).getTime() : null);

function when(ms) {
  const d = new Date(ms);
  const sameDay = d.toDateString() === new Date().toDateString();
  return d.toLocaleString('en-IN', sameDay ? { hour: 'numeric', minute: '2-digit' } : { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
}

export function itemRow(item, settings, { editable = false } = {}) {
  const st = STATUS[item.status] || STATUS.queued;
  const active = ACTIVE.has(item.status);
  const auto = effectiveAutoPlace(item, settings);
  const meta = [
    `<span class="site ${item.site}">${SITES[item.site].label}</span>`,
    item.maxPrice ? `max ${formatINR(item.maxPrice)}` : '<span title="Without a max price Sale Sniper will never auto-pay">no max</span>',
    item.quantity > 1 ? `× ${item.quantity}` : '',
    item.lastPrice ? `now ${formatINR(item.lastPrice)}` : '',
    item.scheduleAt ? `⏰ ${when(item.scheduleAt)}` : '',
    auto ? '<span title="Will click Place Order by itself">⚡ auto-pay</span>' : '<span title="Stops at the final step for you to confirm">✋ confirm</span>',
  ].filter(Boolean);

  const actions = [];
  if (active) actions.push(['focus', 'Show', ''], ['stop', 'Stop', '']);
  else if (item.status === 'scheduled') actions.push(['start', 'Start now', 'primary'], ['stop', 'Cancel', '']);
  else if (item.status === 'ordered') actions.push(['reset', 'Buy again', '']);
  else actions.push(['start', 'Start', 'primary']);
  if (!active && ['failed', 'stopped'].includes(item.status)) actions.push(['reset', 'Reset', 'ghost']);
  if (editable && !active) actions.push(['edit', 'Edit', 'ghost']);
  actions.push(['remove', '✕', 'ghost icon']);

  return `
    <div class="item card tone-${st.tone}" data-id="${item.id}">
      <div class="item-img">${item.image ? `<img src="${esc(item.image)}" alt="">` : item.mode === 'search' ? '🔎' : '🛍️'}</div>
      <div class="grow">
        <div class="item-title ellipsis" title="${esc(itemLabel(item))}">${esc(itemLabel(item))}</div>
        <div class="item-meta">${meta.join(' · ')}</div>
        <div class="item-status row"><span class="chip tone-${st.tone}">${st.label}</span><span class="ellipsis" title="${esc(item.statusText)}">${esc(item.statusText || '')}</span></div>
        ${editable ? editForm(item) : ''}
      </div>
      <div class="item-actions">${actions.map(([a, label, cls]) => `<button class="btn sm ${cls}" data-action="${a}">${label}</button>`).join('')}</div>
    </div>`;
}

function editForm(item) {
  const auto = item.autoPlace == null ? 'default' : item.autoPlace ? 'on' : 'off';
  return `
    <form class="edit hidden" data-id="${item.id}">
      ${item.mode === 'search' ? `<label class="field"><span>Search for</span><input class="input" name="query" value="${esc(item.query)}"></label>` : ''}
      <label class="field"><span>Max price ₹</span><input class="input" name="maxPrice" type="number" min="1" value="${item.maxPrice ?? ''}"></label>
      <label class="field"><span>Qty</span><input class="input" name="quantity" type="number" min="1" max="10" value="${item.quantity}"></label>
      <label class="field"><span>Sale starts</span><input class="input" name="scheduleAt" type="datetime-local" value="${toLocalInput(item.scheduleAt)}"></label>
      <label class="field"><span>Place order</span>
        <select class="input" name="autoPlace">
          <option value="default" ${auto === 'default' ? 'selected' : ''}>Use global setting</option>
          <option value="on" ${auto === 'on' ? 'selected' : ''}>Automatically</option>
          <option value="off" ${auto === 'off' ? 'selected' : ''}>Ask me first</option>
        </select>
      </label>
      <div class="row"><button class="btn sm primary" type="submit">Save</button><button class="btn sm ghost" type="button" data-action="edit">Cancel</button></div>
    </form>`;
}

export function renderItems(container, state, opts = {}) {
  const { items, settings } = state;
  // Don't blow away an edit form the user is typing in; it re-renders after Save/Cancel.
  if (container.querySelector('form.edit:not(.hidden)')) return;
  if (!items.length) {
    container.innerHTML = `<div class="empty"><b>Your sale list is empty</b>${opts.emptyHint || 'Open a product on Amazon or Flipkart and add it, or record your list.'}</div>`;
    return;
  }
  const order = { attention: 0, placing: 1, running: 2, waiting: 3, scheduled: 4, queued: 5, failed: 6, stopped: 7, ordered: 8 };
  const sorted = [...items].sort((a, b) => (order[a.status] ?? 9) - (order[b.status] ?? 9) || b.createdAt - a.createdAt);
  container.innerHTML = sorted.map((i) => itemRow(i, settings, opts)).join('');
}

/** Wire item buttons once (event delegation survives re-renders). */
export function bindItemActions(container, opts = {}) {
  container.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const row = btn.closest('[data-id]');
    const id = row?.dataset.id;
    if (!id) return;
    const action = btn.dataset.action;
    if (action === 'edit') {
      row.querySelector('form.edit')?.classList.toggle('hidden');
      opts.onIdle?.();
      return;
    }
    btn.disabled = true;
    try {
      if (action === 'start') await send('run:start', { ids: [id], force: true });
      if (action === 'stop') await send('run:stop', { ids: [id] });
      if (action === 'focus') await send('run:focus', { id });
      if (action === 'reset') await send('items:reset', { id });
      if (action === 'remove') await send('items:remove', { id });
    } finally {
      btn.disabled = false;
    }
  });

  container.addEventListener('submit', async (e) => {
    const form = e.target.closest('form.edit');
    if (!form) return;
    e.preventDefault();
    const f = new FormData(form);
    const patch = {
      maxPrice: f.get('maxPrice') ? Number(f.get('maxPrice')) : null,
      quantity: Number(f.get('quantity')) || 1,
      scheduleAt: fromLocalInput(f.get('scheduleAt')),
      autoPlace: { default: null, on: true, off: false }[f.get('autoPlace')],
    };
    if (f.has('query')) patch.query = String(f.get('query')).trim();
    form.classList.add('hidden');
    await send('items:update', { id: form.dataset.id, patch });
  });
}
