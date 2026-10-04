// Amazon.in adapter: product → (Buy Now) → checkout → place order.
(() => {
  const J = globalThis.SaleSniper;
  const $ = (sel, root = document) => root.querySelector(sel);

  const PRICE_SELECTORS = [
    '#corePriceDisplay_desktop_feature_div .priceToPay .a-offscreen',
    '#corePriceDisplay_desktop_feature_div .apexPriceToPay .a-offscreen',
    '#corePrice_feature_div .a-price .a-offscreen',
    '#corePrice_desktop .a-price .a-offscreen',
    '#tp_price_block_total_price_ww .a-offscreen',
    '#priceblock_dealprice',
    '#priceblock_ourprice',
    '#apex_desktop .a-price .a-offscreen',
  ];

  function product() {
    const title = J.text($('#productTitle'));
    let price = null;
    for (const sel of PRICE_SELECTORS) {
      price = J.parsePrice($(sel)?.textContent);
      if (price) break;
    }
    price = price || J.biggestRupee();
    const inputs = [...document.querySelectorAll('#buy-now-button, input[name="submit.buy-now"]')].filter((el) => J.enabled(el));
    const buy = inputs.find(J.visible);
    // Amazon often pre-selects another buy-box row (e.g. "Amazon Now"), leaving the regular
    // "One-time purchase" row with Buy Now collapsed. Its header expands it.
    const collapsed = !buy && inputs.map((el) => el.closest('.a-accordion-inner')?.parentElement?.closest('.a-accordion-row-container, .a-box')?.querySelector('.a-accordion-row, [data-action="a-accordion"]')).find((h) => h && J.visible(h));
    const availability = J.text($('#availability')).split('{')[0].trim();
    const unavailable = !!$('#outOfStock') || /currently unavailable|out of stock|not available|temporarily out/i.test(availability);
    let reason = null;
    if (unavailable) reason = availability || 'Out of stock';
    else if (!buy && !collapsed) reason = $('#add-to-cart-button') ? 'Only Add to Cart is live, waiting for Buy Now' : 'Buy Now not live yet';
    return { title, price, buy, collapsed, canBuy: !!buy && !unavailable, reason, image: $('#landingImage')?.src || $('#imgTagWrapperId img')?.src || null };
  }

  // Buy Now on many listings opens an in-page "turbo checkout" sheet in a same-origin iframe.
  function turbo() {
    const frame = $('#turbo-checkout-iframe');
    let doc = null;
    try {
      doc = frame?.contentDocument;
    } catch {}
    if (!doc || !J.visible(frame)) return null;
    const btn = doc.querySelector('#turbo-checkout-pyo-button, input#turbo-checkout-place-order-button, [name="placeYourOrder1"]');
    if (!btn || !J.visible(btn)) return null;
    const amounts = J.allRupees(doc.body?.innerText || '');
    return { btn, total: amounts.length ? Math.max(...amounts) : null, done: /order placed|thank you/i.test(doc.body?.innerText || '') };
  }

  function placeButton() {
    const sel = ['#placeOrder', '#submitOrderButtonId input', 'input[name="placeYourOrder1"]', '#bottomSubmitOrderButtonId input', '#placeYourOrder input'];
    for (const s of sel) {
      const el = $(s);
      if (el && J.visible(el) && J.enabled(el)) return el;
    }
    return J.findClickable([/^place (your )?order( and pay)?$/i]);
  }

  function orderTotal() {
    const direct = J.parsePrice(J.text($('#subtotals-marketplace-table .grand-total-price')) || J.text($('.order-summary-grand-total .a-color-price')));
    return direct || J.amountNear(/^order total:?$/i) || J.amountNear(/^(total|amount payable):?$/i);
  }

  async function finalStep(ctx, btn, total) {
    if (!ctx.autoPlace) {
      J.highlight(btn);
      return ctx.attention(`Ready at ${J.format(total)} — review & click Place Order`, 'final');
    }
    const res = await J.send({ type: 'placing', total });
    if (!res?.ok) {
      J.highlight(btn);
      return ctx.attention((res?.reason || 'Safety check blocked auto-order.') + ' Place it yourself if it looks right.', 'final');
    }
    ctx.state.placed = true;
    J.ui.set(`Placing order · ${J.format(total)}`, 'info');
    J.click(btn);
    return 'passive';
  }

  function choosePayment(ctx) {
    if (ctx.settings.paymentPreference === 'cod') {
      const cod = J.findText(/^(cash on delivery|pay on delivery)/i);
      const radio = cod?.closest('label, .a-radio, .pmts-instrument-box, [role="radio"], div')?.querySelector('input[type="radio"]');
      if (radio && !radio.checked) {
        ctx.act('cod', () => J.click(radio));
        return 'acted';
      }
      if (!radio) return 'missing';
    }
    return document.querySelector('input[type="radio"]:checked') ? 'ok' : 'missing';
  }

  const handlers = {
    signin: (ctx) => ctx.attention('Log in to Amazon in this tab — I’ll continue right after', 'login'),
    captcha: (ctx) => ctx.attention('Amazon wants a captcha — solve it and I’ll continue', 'captcha'),

    async product(ctx) {
      const { item, state } = ctx;

      if (state.buyClickedAt) {
        const t = turbo();
        if (t?.done) return 'halt';
        if (t) return finalStep(ctx, t.btn, t.total);
        const skip = J.findClickable([/^no,? thanks$/i, /^skip$/i, /^continue without/i, /^not now$/i]);
        if (skip) ctx.act('skip-addon', () => J.click(skip), 3000);
        if (Date.now() - state.buyClickedAt > 15_000) {
          return ctx.attention('Clicked Buy Now but nothing happened — pick size/colour if needed and click Buy Now', 'product');
        }
        return;
      }

      const p = product();
      if (p.collapsed && !p.reason) {
        if (ctx.acted['expand-row'] && Date.now() - ctx.acted['expand-row'] > 5000) return ctx.attention('Couldn’t open the “One-time purchase” option — select it and I’ll continue', 'product');
        ctx.act('expand-row', () => J.click(p.collapsed), 60_000);
        ctx.progress('Switching to the regular Buy Now option');
        return;
      }
      ctx.progress(p.canBuy ? `Live at ${J.format(p.price)}` : p.reason, { title: p.title, price: p.price, image: p.image });
      if (!p.canBuy) return ctx.wait(p.reason, { price: p.price, title: p.title });
      if (item.maxPrice && p.price && p.price > item.maxPrice) {
        return ctx.wait(`Price ${J.format(p.price)} is above your max ${J.format(item.maxPrice)}`, { price: p.price, title: p.title });
      }

      const lock = await J.send({ type: 'lock' });
      if (!lock?.ok) {
        ctx.progress(`In queue behind “${(lock?.holder || 'another item').slice(0, 40)}”`);
        ctx.lastAction = 'lock' + Date.now();
        return;
      }

      if (item.quantity > 1) {
        const qty = $('#quantity') || $('select[name="quantity"]');
        if (qty && !J.setSelect(qty, item.quantity)) ctx.progress(`Only ${qty.options.length} allowed per order — buying max`);
      }
      ctx.act('buy-now', () => {
        state.buyClickedAt = Date.now();
        J.ui.set('Buy Now! ⚡', 'info');
        J.send({ type: 'progress', text: `Clicked Buy Now at ${J.format(p.price)}`, log: true });
        J.click(p.buy);
      });
    },

    search(ctx) {
      const { item } = ctx;
      if (item.mode !== 'search') return ctx.attention('Landed on a search page — open the product and I’ll take it from there', 'product');
      const cards = [...document.querySelectorAll('div[data-component-type="s-search-result"]')];
      if (!cards.length) return;
      const rows = cards.map((card) => {
        const titleEl = card.querySelector('[data-cy="title-recipe"]') || card.querySelector('h2');
        const link = card.querySelector('h2')?.closest('a') || card.querySelector('h2 a') || card.querySelector('a[href*="/dp/"]');
        return {
          title: J.text(titleEl),
          price: J.parsePrice(card.querySelector('.a-price:not(.a-text-price) .a-offscreen')?.textContent),
          href: link?.href,
          sponsored: !!card.querySelector('.puis-sponsored-label-text, .s-sponsored-label-text, [aria-label="View Sponsored information or leave ad feedback"]') || /\bSponsored\b/.test(J.text(card).slice(0, 200)),
        };
      });
      const pick = J.pickResult(item.query, item.maxPrice, rows);
      if (!pick) {
        return ctx.attention(`No exact match for “${item.query}”${item.maxPrice ? ' under ' + J.format(item.maxPrice) : ''} — open the right one and I’ll buy it`, 'product');
      }
      ctx.act('open-result', () => {
        J.send({ type: 'progress', text: `Picked: ${pick.title.slice(0, 60)} · ${J.format(pick.price)}`, log: true });
        location.href = pick.href;
      });
    },

    cart: (ctx) => ctx.attention('Ended up in the cart — I only use Buy Now so your cart isn’t touched. Take over here.', 'checkout'),

    async checkout(ctx) {
      // Interstitials first (Prime upsell, protection plans).
      const decline = J.findClickable([/^no,? thanks$/i, /^not now$/i, /^continue without prime/i, /^skip$/i]);
      if (decline && !placeButton()) {
        ctx.act('decline', () => J.click(decline));
        return;
      }

      const address = J.findClickable([/^use this address$/i, /^deliver to this address$/i, /^use selected address$/i]);
      if (address) {
        ctx.act('address', () => J.click(address));
        ctx.progress('Confirmed delivery address');
        return;
      }

      const usePayment = J.findClickable([/^use this payment method$/i, /^continue$/i]);
      if (usePayment) {
        const state = choosePayment(ctx);
        if (state === 'acted') return;
        if (state === 'missing') return ctx.attention(ctx.settings.paymentPreference === 'cod' ? 'Pay on Delivery isn’t offered — choose a payment method' : 'Choose a payment method', 'checkout');
        ctx.act('payment', () => J.click(usePayment));
        ctx.progress('Payment method selected');
        return;
      }

      const place = placeButton();
      if (place) return finalStep(ctx, place, orderTotal());

      ctx.progress('Loading checkout…');
    },
  };

  J.run({
    detect() {
      const p = location.pathname;
      const h = location.href;
      if (/\/errors\/validatecaptcha/i.test(p) || $('form[action*="validateCaptcha"]')) return 'captcha';
      if (/^\/ap\/(signin|mfa|cvf)/.test(p) || $('form[name="signIn"]')) return 'signin';
      if (/thankyou|order-confirmation|\/buy\/thankyou/i.test(h)) return 'success';
      if (/\/(gp\/buy|checkout)\//.test(p)) {
        return J.bodyMatches(/order placed,? thank you|thank you,? your order has been placed/i) ? 'success' : 'checkout';
      }
      if (/^\/gp\/cart\//.test(p) || p === '/cart') return 'cart';
      if (p === '/s' || p.startsWith('/s/')) return 'search';
      if ($('#productTitle') || /\/(dp|gp\/product)\//.test(p)) return 'product';
      return 'other';
    },

    success() {
      const m = J.bodyText().match(/order (?:number|#|id)[:\s#]*([0-9]{3}-[0-9]{7}-[0-9]{7})/i);
      return { orderId: m?.[1] || null, total: orderTotal() };
    },

    scrape() {
      const isProduct = this.detect() === 'product';
      const p = isProduct ? product() : {};
      return { site: 'amazon', isProduct, url: location.href, title: p.title || document.title, price: p.price ?? null, image: p.image ?? null };
    },

    handlers,
  });
})();
