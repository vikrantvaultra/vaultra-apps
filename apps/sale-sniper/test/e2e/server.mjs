// Local e2e harness: serves the extension under /__ext__/ (with the chrome shim injected into
// its pages) plus fixture pages that mirror real Amazon.in / Flipkart markup.
// Nothing here talks to the real stores.
//
//   node test/e2e/server.mjs [port] [logfile]
//   open http://localhost:4317/__reset  → clean state, lands on the dashboard
import { createServer } from 'node:http';
import { readFile, appendFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const PORT = Number(process.argv[2] || 4317);
const LOG = process.argv[3] || new URL('./e2e.log', import.meta.url).pathname;
const ROOT = new URL('../../', import.meta.url).pathname;
const hits = new Map(); // path → count, for "sale goes live after N refreshes"
const orders = [];

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.json': 'application/json' };

const BOOT = (role) => `<script src="/__ext__/test/e2e/chrome-shim.js" data-role="${role}"></script>`;
const BG = `<script type="module">import '/__ext__/src/background.js'; window.__bgReady();</script>`;
const store = (site) => `${BOOT('store')}<script src="/__ext__/src/content/common.js"></script><script src="/__ext__/src/content/${site}.js"></script>${BG}`;

const page = (title, body, site, css = '') => `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<style>body{font:15px/1.4 Arial,sans-serif;margin:24px;max-width:900px}
.fx{background:#fffbe6;border:1px dashed #c90;padding:6px 10px;font-size:12px;margin-bottom:16px}
${css}</style></head><body><div class="fx">FIXTURE (localhost) — mimics ${site === 'amazon' ? 'Amazon.in' : 'Flipkart'} markup. No real store involved.</div>
${body}${store(site)}</body></html>`;

// ---------------------------------------------------------------- Amazon fixtures
const AMZ_CSS = `.a-button{position:relative;display:inline-block;padding:8px 22px;background:#ffd814;border-radius:20px;margin:6px 0}
.a-button-input{position:absolute;inset:0;width:100%;height:100%;opacity:.01;cursor:pointer;margin:0}
.a-offscreen{position:absolute;left:-9999px}
.a-box{border:1px solid #ccc;border-radius:8px;margin:8px 0;padding:8px}
.a-accordion-inner{display:none}.a-accordion-active .a-accordion-inner{display:block}
.a-accordion-row{font-weight:bold;cursor:pointer;display:block;color:#111;text-decoration:none}`;

const amzButton = (id, name, label, attrs = '') =>
  `<span class="a-button" id="${id}"><span class="a-button-inner"><input class="a-button-input" type="submit" name="${name}" aria-labelledby="${id}-announce" ${attrs}><span class="a-button-text" id="${id}-announce">${label}</span></span></span>`;

function amazonProduct(asin, { live = true, price = 799, title = 'boAt Airdopes 141 Gen 2, 4 Mics ENx Tech, 48 Hrs Playback (Fixture)' } = {}) {
  const buyRow = live
    ? `<form action="/checkout/entry/buynow" method="get"><input type="hidden" name="asin" value="${asin}">
         Quantity: <select id="quantity" name="quantity"><option>1</option><option>2</option><option>3</option></select><br>
         <span class="a-button" id="submit.add-to-cart"><span class="a-button-inner"><input id="add-to-cart-button" class="a-button-input" type="button" name="submit.add-to-cart"><span class="a-button-text">Add to Cart</span></span></span><br>
         <span class="a-button" id="submit.buy-now"><span class="a-button-inner"><input id="buy-now-button" class="a-button-input" type="submit" name="submit.buy-now"><span class="a-button-text">Buy Now</span></span></span>
       </form>`
    : `<div>Deal starts soon</div>`;
  return page(
    title,
    `<span id="productTitle">${title}</span>
     <div id="corePriceDisplay_desktop_feature_div"><span class="a-price priceToPay"><span class="a-offscreen">₹${price}.00</span><span aria-hidden="true" style="font-size:28px">₹${price}</span></span></div>
     <div id="availability"><span>${live ? 'In stock' : 'Currently unavailable.'}</span> {"isInternal":false,"isRobot":false}</div>
     <img id="landingImage" src="/__ext__/icons/icon-128.png" width="128">
     <div id="buybox">
       <div class="a-box a-accordion-active celwidget accordion-row"><div class="a-box-inner a-accordion-row-container">
         <a class="a-accordion-row a-declarative" href="#" data-action="a-accordion">Amazon Now ₹${price}</a>
         <div class="a-accordion-inner accordion-row-content">10-minute delivery · <span class="a-button"><span class="a-button-inner"><input class="a-button-input" type="button"><span class="a-button-text">Add to cart</span></span></span></div>
       </div></div>
       <div class="a-box celwidget accordion-row"><div class="a-box-inner a-accordion-row-container">
         <a class="a-accordion-row a-declarative" href="#" data-action="a-accordion">One-time purchase ₹${price} · FREE delivery tomorrow</a>
         <div class="a-accordion-inner accordion-row-content">${buyRow}</div>
       </div></div>
     </div>
     <script>document.querySelectorAll('.a-accordion-row').forEach(h=>h.addEventListener('click',e=>{e.preventDefault();
       document.querySelectorAll('#buybox > .a-box').forEach(b=>b.classList.remove('a-accordion-active'));h.closest('#buybox > .a-box').classList.add('a-accordion-active')}))</script>`,
    'amazon',
    AMZ_CSS,
  );
}

const amazonSearch = (q) =>
  page(
    'Amazon.in : ' + q,
    [
      ['B0SPONSOR1', 'Sponsored boAt Airdopes 141 Pro with ANC', 699, true],
      ['B0PLUSXXXX', 'boAt Airdopes 141 Plus, 60H Playtime', 1499, false],
      ['B0RIGHT141', 'boAt Airdopes 141 Gen 2, 4 Mics ENx Tech, 48 Hrs Playback', 799, false],
    ]
      .map(
        ([asin, t, p, ad]) => `<div data-component-type="s-search-result" data-asin="${asin}" class="a-box">
        ${ad ? '<span class="puis-sponsored-label-text">Sponsored</span>' : ''}
        <div data-cy="title-recipe"><a href="/dp/${asin}"><h2><span>${t.replace('Sponsored ', '')}</span></h2></a></div>
        <span class="a-price"><span class="a-offscreen">₹${p}.00</span><span aria-hidden="true">₹${p}</span></span></div>`,
      )
      .join(''),
    'amazon',
    AMZ_CSS,
  );

const qtyOf = (u) => Math.max(1, Number(u.searchParams.get('quantity') || u.searchParams.get('qty') || 1));

const amazonAddress = (u) =>
  page('Select a delivery address', `<h2>Select a delivery address</h2><form action="/checkout/p/p-FX/pay" method="get"><input type="hidden" name="qty" value="${qtyOf(u)}"><input type="hidden" name="price" value="${u.searchParams.get('price') || 799}">
    <label><input type="radio" name="addr" checked> Test User, 12 MG Road, Bengaluru 560001</label><br>${amzButton('shipToThisAddressButton', 'ship', 'Use this address')}</form>`, 'amazon', AMZ_CSS);

const amazonPay = (u) =>
  page('Select a payment method', `<h2>Payment method</h2><form action="/checkout/p/p-FX/spc" method="get"><input type="hidden" name="qty" value="${qtyOf(u)}"><input type="hidden" name="price" value="${u.searchParams.get('price') || 799}">
    <label><input type="radio" name="ppw-instrumentRowSelection" checked> Amazon Pay UPI</label><br>
    <label><input type="radio" name="ppw-instrumentRowSelection"> Cash on Delivery/Pay on Delivery</label><br>
    ${amzButton('pmt-continue', 'ppw-widgetEvent:SetPaymentPlanSelectContinueEvent', 'Use this payment method')}</form>`, 'amazon', AMZ_CSS);

function amazonSpc(u) {
  const qty = qtyOf(u);
  const price = Number(u.searchParams.get('price') || 799);
  const total = (price * qty).toFixed(2);
  return page('Place Your Order - Amazon.in Checkout', `<h2>Review your order</h2>
    <div>Delivering to Test User · Paying with Amazon Pay UPI · Qty ${qty}</div>
    <form action="/gp/buy/thankyou/handlers/display.html" method="get"><input type="hidden" name="total" value="${total}">
      <table id="subtotals-marketplace-table"><tr><td>Items:</td><td>₹${total}</td></tr><tr><td>Delivery:</td><td>₹0.00</td></tr>
      <tr class="grand-total-price"><td>Order Total:</td><td>₹${total}</td></tr></table>
      ${amzButton('submitOrderButtonId', 'placeYourOrder1', 'Place your order')}
    </form>`, 'amazon', AMZ_CSS);
}

const amazonThanks = (u) => {
  orders.push({ site: 'amazon', total: u.searchParams.get('total'), t: Date.now() });
  return page('Amazon.in Thanks You', `<h2>Order placed, thank you!</h2><p>Confirmation will be sent to your email.</p><p>Order number 404-1234567-7654321</p>`, 'amazon');
};

// ---------------------------------------------------------------- Flipkart fixtures
const FK_CSS = `button{background:#fb641b;color:#fff;border:0;padding:12px 28px;font-weight:600;cursor:pointer;margin:4px}
.card{border:1px solid #ddd;padding:10px;margin:8px 0}`;

function flipkartProduct(id, { live = true, price = 1099, cod = 1 } = {}) {
  const fmt = price.toLocaleString('en-IN');
  return page(
    'boAt Airdopes 141 (Flipkart fixture)',
    `<h1><span>boAt Airdopes 141 with 42 Hours Playback Bluetooth (Bold Black, True Wireless)</span></h1>
     <div><div style="font-size:28px;font-weight:600">₹${fmt}</div><div style="text-decoration:line-through;font-size:16px;color:#888">₹4,490</div><div>75% off</div></div>
     <img src="/__ext__/icons/icon-128.png" width="128">
     <div>${
       live
         ? // Mirrors flipkart.com (Oct 2026): plain divs, React-style delegated click handler, odometer price.
           `<div class="ctas" style="display:flex;gap:8px">
              <div class="cta" data-href="/cart" style="border:1px solid #ccc;padding:10px 24px;border-radius:8px"><div><div>Add to cart</div></div></div>
              <div class="cta" data-href="/viewcheckout?otracker=fx&price=${price}&cod=${cod}" style="background:#ffc200;padding:10px 24px;border-radius:8px">
                <div><div>Buy now</div><div>a t ₹ <span style="display:inline-block;height:1em;overflow:hidden;vertical-align:bottom">0 1 2 3 4 5 6 7 8 9 0 1 2</span></div></div></div>
            </div>
            <script>
              // React Native Web Pressable semantics: a click only "presses" after a pointerdown on it.
              // ...and like the live site, handlers only attach ~3s after load (hydration), so early clicks are lost.
              setTimeout(() => {
                let downOn = null;
                document.addEventListener('pointerdown', (e) => (downOn = e.target.closest('.cta')));
                document.addEventListener('click', (e) => { const c = e.target.closest('.cta'); if (c && c === downOn) location.href = c.dataset.href; downOn = null; });
              }, 3000);
            </script>`
         : `<div style="color:#c00;font-weight:600">Coming Soon</div><button>NOTIFY ME</button>`
     }</div>`,
    'flipkart',
    FK_CSS,
  );
}

const flipkartSearch = (q) =>
  page(
    q + ' - Buy Products Online',
    [
      ['ad1', 'boAt Airdopes 141 ANC', 899, true],
      ['pro', 'boAt Airdopes 141 Pro 50H', 1599, false],
      ['itmFXLIVE', 'boAt Airdopes 141 with 42 Hours Playback Bluetooth', 1099, false],
    ]
      .map(
        ([id, t, p, ad]) => `<div data-id="${id}" class="card"><a href="/boat-airdopes/p/${id.startsWith('itm') ? id : 'itm' + id}?pid=X${id}" title="${t}">${t}</a>
          <div>₹${p.toLocaleString('en-IN')}</div><div style="text-decoration:line-through">₹4,490</div>${ad ? '<span>Ad</span>' : ''}</div>`,
      )
      .join(''),
    'flipkart',
    FK_CSS,
  );

// Mirrors flipkart.com/viewcheckout + /payments as of Oct 2026: address pre-selected, "Qty: 1 ▾" dropdown,
// div-only CTAs whose React handlers attach late, ₹299 Protect Promise Fee in "Total Amount".
const FEE = 299;
const fkPressable = (id, label, style = 'background:#ffc200;padding:12px 40px;border-radius:6px;display:inline-block;font-weight:600') =>
  `<div class="cta" id="${id}" style="${style}"><div><div>${label}</div></div></div>`;
const fkWire = (handlers) => `<script>
  setTimeout(() => {
    let downOn = null;
    document.addEventListener('pointerdown', (e) => (downOn = e.target.closest('.cta')));
    document.addEventListener('click', (e) => { const c = e.target.closest('.cta'); if (c && c === downOn) (${handlers})[c.id]?.(); downOn = null; });
  }, 1500);
</script>`;

const flipkartCheckout = (u) => {
  const price = Number(u.searchParams.get('price') || 1099);
  const cod = u.searchParams.get('cod') ?? '1';
  return page('Flipkart.com: Secure Payment', `
    <div>✓ Address — <b>② Order Summary</b> — ③ Payment</div>
    <div class="card"><div>Deliver to:</div><b>Test User</b> HOME · 12 MG Road, Bengaluru 560001 ${fkPressable('change', 'Change', 'border:1px solid #ccc;padding:4px 10px;display:inline-block')}</div>
    <div class="card"><div>Qty: 1 ▾</div><div>boAt Airdopes 141 (fixture)</div><div>₹${price.toLocaleString('en-IN')}</div><div>+ ₹${FEE} Protect Promise Fee</div></div>
    <div class="card"><div>Price Details</div><div><span>Fees</span> <span>₹${FEE}</span></div>
      <div><div>Total Amount</div><div>₹${(price + FEE).toLocaleString('en-IN')}</div></div>
      ${fkPressable('continue', 'Continue')}</div>
    ${fkWire(`{ continue: () => location.href = '/payments?isRevampedDesktopView=true&token=fx&amount=${price + FEE}&cod=${cod}', change: () => {} }`)}`, 'flipkart', FK_CSS);
};

const flipkartPayments = (u) => {
  const amount = Number(u.searchParams.get('amount') || 1099 + FEE);
  const codOk = u.searchParams.get('cod') !== '0';
  const opt = (id, label, sub = '') => `<div class="card cta" id="${id}"><div><div>${label}</div><div style="font-size:12px;color:#666">${sub}</div></div></div>`;
  return page('Flipkart Payments Page', `<h3>Complete Payment</h3>
    <div style="display:flex;gap:16px"><div style="width:280px">
      ${opt('upi', 'UPI', 'Pay by any UPI app')}${opt('card', 'Credit / Debit / ATM Card')}${opt('emi', 'EMI')}${opt('nb', 'Net Banking')}
      ${codOk ? opt('cod', 'Cash on Delivery') : `<div class="card" style="color:#999"><div><div>Cash on Delivery</div></div><div>Unavailable</div></div>`}
    </div><div style="flex:1">
      <div id="pane" class="card">Scan QR and Pay · AMOUNT ₹${amount.toLocaleString('en-IN')}</div>
      <div id="codPane" style="display:none">${fkPressable('confirm', 'Confirm order', 'background:#fb641b;color:#fff;padding:12px 40px;display:inline-block')}</div>
    </div><div class="card" style="width:240px"><div><span>Protect Promise Fee</span> <span>₹${FEE}</span></div><div><div>Total Amount</div><div>₹${amount.toLocaleString('en-IN')}</div></div></div></div>
    ${fkWire(`{ cod: () => { document.getElementById('pane').style.display='none'; document.getElementById('codPane').style.display='block'; },
               confirm: () => location.href = '/orderresponse?reference_id=OD330012345678901234&amount=${amount}' }`)}`, 'flipkart', FK_CSS);
};

const flipkartDone = (u) => {
  orders.push({ site: 'flipkart', total: u.searchParams.get('amount'), t: Date.now() });
  return page('Order Confirmation', `<h2>Order placed successfully!</h2><p>Order ID: OD330012345678901234</p>`, 'flipkart');
};

// ---------------------------------------------------------------- routing
function route(u) {
  const p = u.pathname;
  // "Sale" products: unavailable until the 3rd load.
  const n = (hits.get(p) || 0) + 1;
  hits.set(p, n);
  if (p === '/dp/B0RIGHT141' || p === '/dp/B0LIVE0001') return amazonProduct(p.slice(4));
  if (p === '/dp/B0SALE0001') return amazonProduct('B0SALE0001', { live: n >= 3 });
  if (p === '/dp/B0PRICEY01') return amazonProduct('B0PRICEY01', { price: 1299 });
  if (p.startsWith('/dp/')) return amazonProduct(p.slice(4));
  if (p === '/s') return amazonSearch(u.searchParams.get('k'));
  if (p === '/checkout/entry/buynow') return { redirect: `/checkout/p/p-FX/address?qty=${qtyOf(u)}&price=${u.searchParams.get('asin') === 'B0PRICEY01' ? 1299 : 799}` };
  if (p === '/checkout/p/p-FX/address') return amazonAddress(u);
  if (p === '/checkout/p/p-FX/pay') return amazonPay(u);
  if (p === '/checkout/p/p-FX/spc') return amazonSpc(u);
  if (p === '/gp/buy/thankyou/handlers/display.html') return amazonThanks(u);
  if (/\/p\/itmFXSALE/.test(p)) return flipkartProduct('itmFXSALE', { live: n >= 3 });
  if (/\/p\/itmFXNOCOD/.test(p)) return flipkartProduct('itmFXNOCOD', { price: 40999, cod: 0 });
  if (/\/p\/itm/.test(p)) return flipkartProduct(p);
  if (p === '/search') return flipkartSearch(u.searchParams.get('q'));
  if (p === '/viewcheckout') return flipkartCheckout(u);
  if (p === '/payments') return flipkartPayments(u);
  if (p === '/orderresponse') return flipkartDone(u);
  return null;
}

createServer(async (req, res) => {
  const u = new URL(req.url, `http://localhost:${PORT}`);
  try {
    if (u.pathname === '/__log' && req.method === 'POST') {
      let body = '';
      for await (const c of req) body += c;
      await appendFile(LOG, body + '\n');
      return res.end('ok');
    }
    if (u.pathname === '/__orders') {
      res.setHeader('content-type', 'application/json');
      return res.end(JSON.stringify(orders));
    }
    if (u.pathname === '/__reset') {
      hits.clear();
      orders.length = 0;
      await writeFile(LOG, '');
      res.setHeader('content-type', 'text/html');
      return res.end(`<script>localStorage.clear();sessionStorage.clear();location.replace('/__ext__/src/dashboard/dashboard.html${u.search}')</script>`);
    }
    if (u.pathname.startsWith('/__ext__/')) {
      const file = normalize(join(ROOT, u.pathname.slice('/__ext__/'.length)));
      if (!file.startsWith(ROOT)) throw Object.assign(new Error('nope'), { code: 'ENOENT' });
      let data = await readFile(file);
      if (extname(file) === '.html') data = String(data).replace('<head>', `<head>${BOOT('page')}${BG}`);
      res.setHeader('content-type', TYPES[extname(file)] || 'application/octet-stream');
      return res.end(data);
    }
    const out = route(u);
    if (out?.redirect) {
      res.writeHead(302, { location: out.redirect });
      return res.end();
    }
    if (out) {
      res.setHeader('content-type', 'text/html; charset=utf-8');
      return res.end(out);
    }
    res.statusCode = 404;
    res.end('not found');
  } catch (e) {
    res.statusCode = e.code === 'ENOENT' ? 404 : 500;
    res.end(String(e));
  }
}).listen(PORT, () => console.log(`sale-sniper e2e fixtures on http://localhost:${PORT}  (log: ${LOG})`));
