// Sale Sniper install page: theme toggle, copy buttons, phone handoff, sale countdown. No deps, no tracking.

const $ = (s, el = document) => el.querySelector(s);
const statusEl = $('#status');
const announce = (msg) => {
  statusEl.textContent = '';
  setTimeout(() => (statusEl.textContent = msg), 30);
};

// --- theme -----------------------------------------------------------------------
const root = document.documentElement;
const themeBtn = $('#themeBtn');
const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
const syncThemeBtn = () => themeBtn.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
themeBtn.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {}
  syncThemeBtn();
  announce(next === 'dark' ? 'Dark theme' : 'Light theme');
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncThemeBtn);
syncThemeBtn();

// --- copy buttons --------------------------------------------------------------------
const pageUrl = location.origin + location.pathname;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers / non-secure contexts.
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.append(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {}
    ta.remove();
    return ok;
  }
}

document.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-copy], [data-copy-url]');
  if (!btn) return;
  const text = btn.hasAttribute('data-copy-url') ? pageUrl : btn.dataset.copy;
  const ok = await copyText(text);
  const label = btn.dataset.label || (btn.dataset.label = btn.textContent);
  btn.textContent = ok ? 'Copied ✓' : 'Copy nahi hua';
  btn.dataset.copied = ok ? 'yes' : 'no';
  announce(ok ? 'Copied to clipboard' : 'Copy failed — select and copy manually');
  clearTimeout(btn._t);
  btn._t = setTimeout(() => {
    btn.textContent = label;
    delete btn.dataset.copied;
  }, 2000);
});

// --- phone handoff --------------------------------------------------------------------
// Extensions can't be installed on phones/tablets, so offer to send the link to a laptop instead.
const ua = navigator.userAgent;
const isPhone =
  navigator.userAgentData?.mobile === true ||
  /Android|iPhone|iPad|iPod|Windows Phone|Mobile/i.test(ua) ||
  (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1); // iPadOS pretends to be a Mac
if (isPhone) {
  $('#handoff').hidden = false;
  $('#waSelf').href = 'https://wa.me/?text=' + encodeURIComponent(`Sale Sniper laptop pe install karna hai: ${pageUrl}`);
}
root.dataset.device = isPhone ? 'phone' : 'desktop';

// --- sale countdown (IST) -------------------------------------------------------------
const IST = 5.5 * 3600_000;
const DAY = 86_400_000;
const istDay = (ms) => Math.floor((ms + IST) / DAY);
const pad = (n) => String(n).padStart(2, '0');
const sales = [...document.querySelectorAll('[data-sale]')].map((el) => ({ el: $('.count', el), at: Date.parse(el.dataset.sale) }));

function tick() {
  const now = Date.now();
  let soon = false;
  for (const { el, at } of sales) {
    const left = at - now;
    let text;
    if (left <= 0) {
      text = 'Sale live hai 🔥';
      el.classList.add('live');
    } else if (left < DAY) {
      soon = true;
      const s = Math.floor(left / 1000);
      text = `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)} baaki`;
    } else {
      const days = istDay(at) - istDay(now);
      text = days === 1 ? 'Kal hai!' : `${days} din baaki`;
    }
    if (el.textContent !== text) el.textContent = text;
  }
  setTimeout(tick, soon ? 1000 : 30_000);
}
tick();
