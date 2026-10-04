// Shared, side-effect-free helpers used by the background worker, popup and dashboard.
// All *writes* to items/settings go through the background worker (see background.js)
// so two pages can never clobber each other's changes.

export const DEFAULT_SETTINGS = {
  autoPlaceOrder: false, // master switch: click the final "Place Order" button by itself
  paymentPreference: 'default', // 'default' = keep the site's saved method, 'cod' = pick Cash/Pay on Delivery
  refreshMs: 1500, // reload interval once the sale time has passed
  preSaleRefreshMs: 5000, // reload interval while the sale hasn't started yet
  saleWaitMinutes: 15, // keep trying this long after the sale time (or after Start)
  openLeadSeconds: 60, // open the tab this early before a scheduled sale
  dailyBudget: 0, // 0 = no limit; auto-orders stop once today's spend would cross it
  feeAllowance: 500, // ₹ on top of max × qty for delivery/platform fees (e.g. Flipkart's ₹299 Protect Promise Fee)
  defaultSite: 'amazon',
  notify: true,
};

export const SITES = {
  amazon: {
    label: 'Amazon',
    home: 'https://www.amazon.in/',
    search: (q) => `https://www.amazon.in/s?k=${encodeURIComponent(q)}`,
    orders: 'https://www.amazon.in/gp/css/order-history',
  },
  flipkart: {
    label: 'Flipkart',
    home: 'https://www.flipkart.com/',
    search: (q) => `https://www.flipkart.com/search?q=${encodeURIComponent(q)}`,
    orders: 'https://www.flipkart.com/account/orders',
  },
};

export const STATUS = {
  queued: { label: 'Queued', tone: 'muted' },
  scheduled: { label: 'Scheduled', tone: 'info' },
  running: { label: 'Running', tone: 'info' },
  waiting: { label: 'Waiting for sale', tone: 'warn' },
  attention: { label: 'Needs you', tone: 'alert' },
  placing: { label: 'Placing order', tone: 'info' },
  ordered: { label: 'Ordered', tone: 'good' },
  failed: { label: 'Failed', tone: 'alert' },
  stopped: { label: 'Stopped', tone: 'muted' },
};

// Statuses where a tab is (or should be) actively working on the item.
export const ACTIVE = new Set(['running', 'waiting', 'attention', 'placing']);

export function siteFromUrl(url) {
  try {
    const host = new URL(url).hostname;
    if (/(^|\.)amazon\.in$/.test(host)) return 'amazon';
    if (/(^|\.)flipkart\.com$/.test(host)) return 'flipkart';
  } catch {}
  return null;
}

export function isShopUrl(url) {
  return siteFromUrl(url) !== null;
}

/** Strip tracking junk so the same product isn't added twice. */
export function cleanProductUrl(url) {
  try {
    const u = new URL(url);
    const site = siteFromUrl(url);
    if (site === 'amazon') {
      const asin = u.pathname.match(/\/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})/i);
      if (asin) return `https://www.amazon.in/dp/${asin[1].toUpperCase()}`;
    }
    if (site === 'flipkart') {
      const pid = u.searchParams.get('pid');
      return `https://www.flipkart.com${u.pathname}${pid ? `?pid=${pid}` : ''}`;
    }
    return u.href;
  } catch {
    return url;
  }
}

export function startUrl(item) {
  return item.mode === 'url' ? item.url : SITES[item.site].search(item.query);
}

export function formatINR(n) {
  if (n == null || Number.isNaN(Number(n))) return '—';
  return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

export function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function itemLabel(item) {
  return item.title || item.query || item.url || 'Untitled item';
}

export function effectiveAutoPlace(item, settings) {
  return item.autoPlace == null ? !!settings.autoPlaceOrder : !!item.autoPlace;
}

// ---------------------------------------------------------------------------
// "Record" parsing: turn a spoken / typed line into an item draft.
//   "iPhone 15 128GB under 70k on Flipkart"
//   "boAt Airdopes 141 1500 tak amazon se 2 piece"
//   "https://www.amazon.in/dp/B0CHX1W1XY max 999"
// ---------------------------------------------------------------------------

const MULT = { k: 1e3, thousand: 1e3, hazaar: 1e3, hazar: 1e3, hajar: 1e3, lakh: 1e5, lac: 1e5, lakhs: 1e5 };
const NUM_WORDS = { one: 1, ek: 1, two: 2, do: 2, three: 3, teen: 3, four: 4, char: 4, chaar: 4, five: 5, paanch: 5, panch: 5 };

function toAmount(num, unit) {
  const n = parseFloat(String(num).replace(/,/g, ''));
  if (!Number.isFinite(n)) return null;
  return Math.round(n * (MULT[(unit || '').toLowerCase()] || 1));
}

export function parseRecordedLine(raw, defaultSite = 'amazon') {
  let text = ` ${String(raw).trim()} `;
  const draft = { site: null, mode: 'search', query: '', url: null, maxPrice: null, quantity: 1 };

  // A product link anywhere in the line wins over search.
  const link = text.match(/https?:\/\/\S+/);
  if (link) {
    const site = siteFromUrl(link[0]);
    if (site) {
      draft.site = site;
      draft.mode = 'url';
      draft.url = cleanProductUrl(link[0]);
    }
    text = text.replace(link[0], ' ');
  }

  const unit = '(k|thousand|hazaar|hazar|hajar|lakhs?|lac)?';
  const money = `(?:rs\\.?|inr|₹|rupees?)?\\s*([\\d,]+(?:\\.\\d+)?)\\s*${unit}\\s*(?:rs\\.?|rupees?|only)?`;
  const before = new RegExp(`\\b(?:under|below|max(?:imum)?|upto|up to|less than|within|budget(?: of)?|at most|price)\\s*${money}`, 'i');
  const after = new RegExp(`${money}\\s*(?:tak|se kam|ke andar|ke neeche|max|or less|budget)\\b`, 'i');
  const priceMatch = text.match(before) || text.match(after);
  if (priceMatch) {
    draft.maxPrice = toAmount(priceMatch[1], priceMatch[2]);
    text = text.replace(priceMatch[0], ' ');
  }

  const qtyMatch =
    text.match(/\b(\d{1,2})\s*(?:pieces?|pcs|units?|nos|qty|items?|piece)\b/i) ||
    text.match(/\b(?:qty|quantity)\s*[:=]?\s*(\d{1,2})\b/i) ||
    text.match(/\bx\s?(\d{1,2})\b/i) ||
    text.match(/\b(one|ek|two|do|three|teen|four|char|chaar|five|paanch|panch)\s+(?:pieces?|pcs|units?|nos)\b/i);
  if (qtyMatch) {
    const q = NUM_WORDS[qtyMatch[1].toLowerCase()] ?? parseInt(qtyMatch[1], 10);
    if (q >= 1 && q <= 10) draft.quantity = q;
    text = text.replace(qtyMatch[0], ' ');
  }

  const siteMatch = text.match(/\b(?:on|from|par|pe|se)?\s*(amazon|flipkart)\b(?:\s*(?:se|pe|par|on))?/i);
  if (siteMatch) {
    draft.site = draft.site || siteMatch[1].toLowerCase();
    text = text.replace(siteMatch[0], ' ');
  }
  draft.site = draft.site || defaultSite;

  if (draft.mode === 'search') {
    draft.query = text
      .replace(/\b(please|pls|buy|order|add|get me|i want|i need|mujhe|chahiye|khareedna|kharidna|lena|hai|lao|le lo|dilao)\b/gi, ' ')
      .replace(/[,;]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return draft;
}

/** Split a recording/transcript into separate item lines. */
export function splitRecording(text) {
  return String(text)
    .split(/\n|;|\s+(?:aur|and also|and then|phir|then)\s+/i)
    .map((s) => s.trim())
    .filter((s) => s.length > 1);
}
