import { SITES, formatINR, parseRecordedLine, splitRecording } from '../lib/store.js';
import { bindItemActions, esc, fromLocalInput, renderItems, send, watchState } from '../ui/shared.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
let state = null;

if (params.has('welcome')) $('welcome').classList.remove('hidden');

// ---------------------------------------------------------------------------
// Recording → drafts
// ---------------------------------------------------------------------------

let drafts = [];

function parseDrafts() {
  const site = state?.settings.defaultSite || 'amazon';
  drafts = splitRecording($('recordText').value).map((line) => parseRecordedLine(line, site));
  renderDrafts();
}

function renderDrafts() {
  $('addDrafts').disabled = !drafts.length;
  $('addDrafts').textContent = drafts.length ? `Add ${drafts.length} to sale list` : 'Add to sale list';
  if (!drafts.length) return ($('drafts').innerHTML = '');
  $('drafts').innerHTML =
    `<div class="draft draft-labels"><span>Store</span><span class="q">Product / link</span><span>Max ₹</span><span>Qty</span><span></span></div>` +
    drafts
      .map(
        (d, i) => `
      <div class="draft" data-i="${i}">
        <select class="input" data-k="site">${Object.entries(SITES).map(([k, s]) => `<option value="${k}" ${d.site === k ? 'selected' : ''}>${s.label}</option>`).join('')}</select>
        <input class="input q" data-k="${d.mode === 'url' ? 'url' : 'query'}" value="${esc(d.mode === 'url' ? d.url : d.query)}" ${d.mode === 'url' ? 'readonly' : ''}>
        <input class="input" data-k="maxPrice" type="number" min="1" value="${d.maxPrice ?? ''}" placeholder="max">
        <input class="input" data-k="quantity" type="number" min="1" max="10" value="${d.quantity}">
        <button class="btn sm ghost icon" data-drop="${i}" title="Remove">✕</button>
        ${!d.maxPrice ? '<div class="warn">No max price — Sale Sniper will stop at the final step instead of auto-paying.</div>' : ''}
      </div>`,
      )
      .join('');
}

$('recordText').addEventListener('input', parseDrafts);

$('drafts').addEventListener('input', (e) => {
  const row = e.target.closest('[data-i]');
  if (!row) return;
  const d = drafts[row.dataset.i];
  const k = e.target.dataset.k;
  d[k] = ['maxPrice', 'quantity'].includes(k) ? Number(e.target.value) || null : e.target.value;
});

$('drafts').addEventListener('click', (e) => {
  const i = e.target.closest('[data-drop]')?.dataset.drop;
  if (i == null) return;
  drafts.splice(Number(i), 1);
  renderDrafts();
});

$('addDrafts').addEventListener('click', async () => {
  const scheduleAt = fromLocalInput($('draftWhen').value);
  const res = await send('items:add', { items: drafts.map((d) => ({ ...d, scheduleAt })) });
  $('recordText').value = '';
  drafts = [];
  renderDrafts();
  if (res?.added === 0) alertInline('Nothing new was added (duplicates or empty lines).');
});

function alertInline(msg) {
  $('drafts').innerHTML = `<div class="muted small">${esc(msg)}</div>`;
}

// ---------------------------------------------------------------------------
// Voice (Web Speech API, en-IN handles Hinglish product names well)
// ---------------------------------------------------------------------------

const Speech = globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
let rec = null;

async function toggleMic() {
  if (rec) return rec.stop();
  if (!Speech) return alertInline('Voice input needs Chrome’s speech recognition — just type your list instead.');
  try {
    // Extension pages must ask for the mic explicitly before speech recognition can use it.
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach((t) => t.stop());
  } catch {
    return alertInline('Microphone blocked. Allow it from the 🔒 icon in the address bar, or type your list.');
  }
  rec = new Speech();
  rec.lang = 'en-IN';
  rec.continuous = true;
  rec.interimResults = true;
  const base = $('recordText').value.trim();
  const finals = [];
  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript.trim();
      if (e.results[i].isFinal) finals.push(t);
      else interim += t;
    }
    $('recordText').value = [base, ...finals, interim].filter(Boolean).join('\n');
    parseDrafts();
  };
  rec.onerror = (e) => e.error !== 'no-speech' && alertInline(`Voice error: ${e.error}`);
  rec.onend = () => {
    rec = null;
    $('mic').classList.remove('live');
    $('micLabel').textContent = 'Tap to record';
  };
  rec.start();
  $('mic').classList.add('live');
  $('micLabel').textContent = 'Listening… tap to stop';
}

$('mic').addEventListener('click', toggleMic);
if (params.has('record')) $('recordText').focus();

// ---------------------------------------------------------------------------
// List, settings, logs
// ---------------------------------------------------------------------------

$('startAll').addEventListener('click', () => send('run:start', {}));
$('stopAll').addEventListener('click', () => send('run:stop', {}));
$('clearDone').addEventListener('click', () => send('items:clearDone'));
$('clearLogs').addEventListener('click', () => send('logs:clear'));
$('autoPlace').addEventListener('change', (e) => {
  if (e.target.checked && !confirm('Auto place order ON: Sale Sniper will click the final Place Order button by itself when the total is within your max price. Continue?')) {
    e.target.checked = false;
    return;
  }
  send('settings:save', { patch: { autoPlaceOrder: e.target.checked } });
});

bindItemActions($('items'), { onIdle: () => state && renderItems($('items'), state, { editable: true }) });

let settingsFilled = false;
function fillSettings(s) {
  const f = $('settings').elements;
  for (const k of ['paymentPreference', 'defaultSite', 'dailyBudget', 'feeAllowance', 'refreshMs', 'preSaleRefreshMs', 'saleWaitMinutes', 'openLeadSeconds']) f[k].value = s[k];
  f.notify.checked = s.notify;
}

$('settings').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.target.elements;
  const patch = { notify: f.notify.checked, paymentPreference: f.paymentPreference.value, defaultSite: f.defaultSite.value };
  for (const k of ['dailyBudget', 'feeAllowance', 'refreshMs', 'preSaleRefreshMs', 'saleWaitMinutes', 'openLeadSeconds']) patch[k] = Number(f[k].value);
  const saved = await send('settings:save', { patch });
  fillSettings(saved);
  $('savedMsg').textContent = 'Saved ✓';
  setTimeout(() => ($('savedMsg').textContent = ''), 1800);
});

function renderLogs(logs) {
  $('logs').innerHTML = logs.length
    ? [...logs]
        .reverse()
        .slice(0, 200)
        .map(
          (l) => `<div class="log ${l.level}"><span class="muted">${new Date(l.t).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span><span class="who" title="${esc(l.label)}">${esc(l.label || '')}</span><span class="msg">${esc(l.msg)}</span></div>`,
        )
        .join('')
    : '<div class="muted">Nothing yet. Start an item and every step shows up here.</div>';
}

watchState((s) => {
  state = s;
  $('autoPlace').checked = s.settings.autoPlaceOrder;
  if (!settingsFilled) {
    fillSettings(s.settings);
    settingsFilled = true;
  }
  renderItems($('items'), s, { editable: true, emptyHint: 'Record your list on the left, or add products from the toolbar popup while browsing.' });
  renderLogs(s.logs);
  document.title = `Sale Sniper · ${s.items.filter((i) => i.status === 'ordered').length}/${s.items.length} ordered · ${formatINR(s.spent.amount || 0)} today`;
});
