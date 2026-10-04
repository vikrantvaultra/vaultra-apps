import { SITES, cleanProductUrl, formatINR, parseRecordedLine, siteFromUrl, splitRecording } from '../lib/store.js';
import { PUBLIC_BUILD } from '../lib/build.js';
import { bindItemActions, esc, fromLocalInput, renderItems, send, watchState } from '../ui/shared.js';

const $ = (id) => document.getElementById(id);
let state = null;
let page = null;

// ---- Current tab: offer to add the product you're looking at ----
async function detectPage() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url || !siteFromUrl(tab.url)) return;
  try {
    page = await chrome.tabs.sendMessage(tab.id, { type: 'page:scrape' });
  } catch {
    // Page was open before the extension loaded — fall back to what the URL tells us.
    const looksLikeProduct = /\/(dp|gp\/product)\/|\/p\/itm/i.test(tab.url);
    page = { site: siteFromUrl(tab.url), isProduct: looksLikeProduct, url: tab.url, title: tab.title, price: null, image: null };
  }
  if (!page?.isProduct) return;
  $('pageCard').classList.remove('hidden');
  $('pageSite').textContent = SITES[page.site].label;
  $('pageSite').className = `site ${page.site}`;
  $('pageTitle').textContent = page.title;
  $('pagePrice').textContent = page.price ? `now ${formatINR(page.price)}` : '';
  if (page.image) $('pageImg').innerHTML = `<img src="${esc(page.image)}" alt="">`;
  const max = $('pageForm').elements.maxPrice;
  if (page.price) max.value = Math.round(page.price);
  max.focus();
  max.select();
}

$('pageForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  await send('items:add', {
    items: [
      {
        site: page.site,
        mode: 'url',
        url: cleanProductUrl(page.url),
        title: page.title,
        image: page.image,
        price: page.price,
        maxPrice: Number(f.get('maxPrice')),
        quantity: Number(f.get('quantity')) || 1,
        scheduleAt: fromLocalInput(f.get('scheduleAt')),
      },
    ],
  });
  $('pageCard').classList.add('hidden');
});

// ---- Quick add: type it like you'd say it ----
$('quickText').addEventListener('input', (e) => {
  const lines = splitRecording(e.target.value);
  if (!lines.length) return ($('quickHint').textContent = '');
  const d = parseRecordedLine(lines[0], state?.settings.defaultSite);
  $('quickHint').textContent = `→ ${SITES[d.site].label}: “${d.mode === 'url' ? 'product link' : d.query}”${d.maxPrice ? ` · max ${formatINR(d.maxPrice)}` : ' · add “under ₹…” to set a max'}${d.quantity > 1 ? ` · ×${d.quantity}` : ''}${lines.length > 1 ? ` (+${lines.length - 1} more)` : ''}`;
});

$('quickForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const items = splitRecording($('quickText').value).map((l) => parseRecordedLine(l, state?.settings.defaultSite));
  if (!items.length) return;
  await send('items:add', { items });
  $('quickText').value = '';
  $('quickHint').textContent = '';
});

// Popups can't ask for the microphone, so recording happens in the dashboard tab.
$('micBtn').addEventListener('click', () => chrome.tabs.create({ url: chrome.runtime.getURL('src/dashboard/dashboard.html?record=1') }));
$('openDash').addEventListener('click', () => chrome.runtime.openOptionsPage());
$('startAll').addEventListener('click', () => send('run:start', {}));
$('stopAll').addEventListener('click', () => send('run:stop', {}));
if (PUBLIC_BUILD) $('autoPlace').closest('label').hidden = true;
$('autoPlace').addEventListener('change', (e) => send('settings:save', { patch: { autoPlaceOrder: e.target.checked } }));

bindItemActions($('items'));
watchState((s) => {
  state = s;
  $('autoPlace').checked = s.settings.autoPlaceOrder;
  renderItems($('items'), s, { emptyHint: 'Open a product on Amazon.in or Flipkart and add it here, or type/record what you want above.' });
  const ordered = s.items.filter((i) => i.status === 'ordered').length;
  $('foot').textContent = `${s.items.length} item${s.items.length === 1 ? '' : 's'} · ${ordered} ordered · spent today ${formatINR(s.spent.amount || 0)}${s.settings.dailyBudget ? ' of ' + formatINR(s.settings.dailyBudget) : ''}`;
});
detectPage();
