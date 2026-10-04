# Sale Sniper ⚡ — auto-buy the moment Buy Now goes live (Chrome extension)

Record what you want ("iPhone 15 128GB under 65k on Flipkart"). When the sale opens, Sale Sniper refreshes the
product page until **Buy Now** goes live, clicks it and goes through checkout on **Amazon.in** and **Flipkart**.
It then either places the order itself (only within your max price) or stops at the final button for you.

Plain Manifest V3 with no build step and no dependencies.

## Install (developer mode)

1. `chrome://extensions` → turn on **Developer mode** → **Load unpacked** → pick this folder (`apps/sale-sniper`).
2. Log in to Amazon.in and Flipkart in the same Chrome profile. Set a default delivery address and a saved
   payment method (or plan to use Cash on Delivery).
3. Pin the ⚡ icon.

## Use

- **On a product page:** click ⚡ → set your max price (and the sale start time, if known) → *Add to sale list*.
- **Record a list:** ⚡ → 🎙 opens the dashboard. Speak or type one item per line, in English or Hinglish:
  - `boAt Airdopes 141 under 1200 on amazon`
  - `Samsung 55 inch TV 42,999 tak flipkart se`
  - `pigeon kettle 2 pieces below 900`
  - `https://www.amazon.in/dp/B0CHX1W1XY max 999`

  Search items pick the first **non-sponsored** result whose title contains **every** word you said and whose price
  is within your max. If nothing matches, Sale Sniper asks you to open the right product, then continues from there.
- **Start:** *Start now* runs an item immediately. Items with a sale time open `openLeadSeconds` before it,
  refresh slowly (`preSaleRefreshMs`) until the sale time, then fast (`refreshMs`) until Buy Now is live or
  `saleWaitMinutes` runs out.

Each running item gets its own small Chrome window. **Keep those windows uncovered during a sale**, because Chrome
throttles pages it thinks nobody can see.

## How it works

```
popup / dashboard ──messages──► background.js (state, timing, safety gate, tabs)
                                     ▲
             content/common.js ──────┘  observe → act loop, on-page status pill
             content/amazon.js           product → Buy Now → address → payment → Place order
             content/flipkart.js         product → Buy Now → Deliver here → Continue → payment
```

- Content scripts only read the page and click. The background worker decides whether a tab has a job,
  when to reload and whether an order may be placed. A page reload can't double-order.
- Store pages change markup often, so selectors favour visible button text (`Buy Now`, `Use this address`,
  `Deliver Here`, `Place your order`) over class names.

## Safety rails

| Rail | Where |
|---|---|
| Auto place order is **off by default**: it stops at the final button and highlights it | settings / per item |
| Never auto-pays without a **max price**; order total must be ≤ max × qty + fee allowance (default ₹500, covers Flipkart's ₹299 fee) | `background.js` → `placing` |
| **Daily budget** across all auto orders | settings |
| Never types OTP, CVV, card numbers or UPI PIN. Bank/UPI pages hand control back to you | `common.js`, `tabs.onUpdated` |
| Only uses **Buy Now**, so your existing cart is never checked out | adapters |
| One checkout per store at a time; an item is never clicked "place" twice | locks + `placing` status |
| No confirmation within 90s → "check Your Orders before retrying" | watchdog alarm |

**Payments, honestly:** Indian cards need an OTP and UPI needs approval in your app, so a prepaid order always
ends with you approving it. Sale Sniper gets you to that step in seconds. Fully hands-free works only with:
Amazon using a saved method that needs no OTP (e.g. Amazon Pay balance, or Pay on Delivery), and
Flipkart using Cash on Delivery (Flipkart sometimes asks for a captcha, and then Sale Sniper pings you).

## Develop

```bash
npm run icons   # regenerate icons/*.png (no deps)
npm run check   # manifest paths exist + every script parses
npm test        # voice/typed-line parser + search-result matcher
npm run zip     # sale-sniper.zip for the Chrome Web Store
npm run e2e     # localhost fixture stores → open http://localhost:4317/__reset
```

### End-to-end harness (`test/e2e/`)

`server.mjs` serves fake Amazon/Flipkart pages that copy the live markup: Amazon's collapsed "One-time purchase"
buy-box row and transparent `a-button-input` overlays, and Flipkart's div-only, pointer-event "Buy now". A
`chrome.*` shim runs the **real** `background.js`, content scripts and dashboard on localhost, and every message,
reload and order is logged to `test/e2e/e2e.log`. `GET /__orders` lists the orders the fake stores received.
Products: `/dp/B0LIVE0001` (live), `/dp/B0SALE0001` (live on 3rd load), `/dp/B0PRICEY01` (₹1,299),
`/s?k=…`, `/boat-airdopes/p/itmFXLIVE`, `/boat-airdopes/p/itmFXSALE`, `/search?q=…`.

After editing, hit ↻ on the extension card in `chrome://extensions` and reload the store tabs.

Automated purchasing may go against Amazon's and Flipkart's terms of use. Use it for your own shopping, at
human-ish refresh rates (the minimum refresh is clamped to 800 ms).
