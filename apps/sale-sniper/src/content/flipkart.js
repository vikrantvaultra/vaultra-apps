// Flipkart adapter: product → (Buy Now) → /viewcheckout (address, order summary → Continue) → /payments.
// Flipkart's class names are hashed and change every few weeks, so this file is text-driven.
(() => {
  const J = globalThis.SaleSniper;

  function product() {
    const title = J.text(document.querySelector('h1'));
    const price = J.biggestRupee(document, 900);
    const buy =
      J.findClickable([/^buy now$/i, /^buy now (at )?₹/i, /^pre-?book now$/i]) ||
      // flipkart.com (2026) renders the CTA as plain divs with a delegated React click handler;
      // clicking the inner "Buy now" div bubbles up to it.
      J.findClickable([/^buy now$/i], { selector: 'div, span' });
    let reason = null;
    if (!buy) {
      const m = J.bodyText().match(/sold out|currently unavailable|coming soon|notify me|out of stock/i);
      reason = m ? m[0][0].toUpperCase() + m[0].slice(1).toLowerCase() : 'Buy Now not live yet';
    }
    const image = [...document.querySelectorAll('img')].find((img) => img.src.includes('rukminim') && img.width > 200)?.src || null;
    return { title, price, buy, canBuy: !!buy, reason, image };
  }

  // Flipkart's checkout CTAs ("Continue", "Confirm order", …) are plain divs with a React onClick.
  const press = (patterns) => J.findClickable(patterns) || J.findClickable(patterns, { selector: 'div, span' });

  /** True when the option's row says it can't be used (e.g. "Cash on Delivery  Unavailable"). */
  const unavailable = (el) => {
    for (let n = el, i = 0; n && i < 4; n = n.parentElement, i++) if (/\b(unavailable|not available)\b/i.test(J.text(n).slice(0, 120))) return true;
    return false;
  };

  const paymentVisible = () => J.bodyMatches(/payment options|complete payment|cash on delivery|net banking|credit \/ debit/i) && !!J.findText(/^(upi|cash on delivery|net banking|wallets?|credit \/ debit \/ atm card)/i);

  function payableTotal() {
    return J.amountNear(/^(total payable|amount payable|total amount|amount to be paid|total)$/i) || J.amountNear(/^price details$/i);
  }

  async function payment(ctx) {
    const total = payableTotal();
    if (!ctx.autoPlace) return ctx.attention(`Reached payment · ${J.format(total)} — pay to complete`, 'payment');
    if (ctx.settings.paymentPreference !== 'cod') {
      return ctx.attention(`Reached payment · ${J.format(total)}. Flipkart auto-order works with Cash on Delivery only — pay here to finish.`, 'payment');
    }

    const cod = J.findText(/^cash on delivery$/i);
    if (!cod || unavailable(cod)) return ctx.attention(`Cash on Delivery isn’t available for this item · ${J.format(total)} — pay here to finish`, 'payment');
    const confirm = press([/^confirm order$/i, /^place order$/i, /^confirm$/i]);
    if (!confirm) {
      // "Confirm order" only appears once COD is selected. Keep selecting: like every Flipkart
      // CTA, the option ignores clicks until the page's JS has attached its handlers.
      const radio = cod.closest('label, [role="radio"], div')?.querySelector('input[type="radio"]');
      if (!radio?.checked) ctx.act('cod', () => J.click(radio || cod), 2000);
      ctx.progress('Selecting Cash on Delivery');
      return;
    }

    if (document.querySelector('input[name*="captcha" i], img[src*="captcha" i]') || J.bodyMatches(/enter the characters|type the text/i)) {
      return ctx.attention('Flipkart wants a captcha for COD — type it and click Confirm', 'payment');
    }
    const res = await J.send({ type: 'placing', total });
    if (!res?.ok) {
      J.highlight(confirm);
      return ctx.attention((res?.reason || 'Safety check blocked auto-order.') + ' Confirm it yourself if it looks right.', 'payment');
    }
    ctx.state.placed = true;
    J.ui.set(`Placing COD order · ${J.format(total)}`, 'info');
    J.click(confirm);
    return 'passive';
  }

  const handlers = {
    signin: (ctx) => ctx.attention('Log in to Flipkart in this tab — I’ll continue right after', 'login'),

    async product(ctx) {
      const { item, state } = ctx;
      if (state.buyClickedAt) {
        const since = Date.now() - state.buyClickedAt;
        if (since > 15_000) {
          return ctx.attention('Clicked Buy Now but nothing happened — pick size/colour/pincode if asked, then click Buy Now', 'product');
        }
        // Flipkart server-renders "Buy now" seconds before its JS attaches the click handler,
        // so an early click is silently lost. Still on this page → press again.
        if (state.buyClicks < 5 && since > 1500 * state.buyClicks) {
          const again = product().buy;
          if (again) {
            state.buyClicks++;
            ctx.lastAction = 'buy-retry' + state.buyClicks;
            J.ui.set(`Buy Now! ⚡ (try ${state.buyClicks})`, 'info');
            J.click(again);
          }
        }
        return;
      }

      const p = product();
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

      ctx.act('buy-now', () => {
        state.buyClickedAt = Date.now();
        state.buyClicks = 1;
        J.ui.set('Buy Now! ⚡', 'info');
        J.send({ type: 'progress', text: `Clicked Buy Now at ${J.format(p.price)}`, log: true });
        J.click(p.buy);
      });
    },

    search(ctx) {
      const { item } = ctx;
      if (item.mode !== 'search') return ctx.attention('Landed on a search page — open the product and I’ll take it from there', 'product');
      const cards = [...document.querySelectorAll('div[data-id]')].filter((c) => c.querySelector('a[href*="/p/"]'));
      if (!cards.length) return;
      const rows = cards.map((card) => {
        const link = card.querySelector('a[href*="/p/"]');
        const title = card.querySelector('a[title]')?.title || card.querySelector('img[alt]')?.alt || J.text(card).slice(0, 160);
        return {
          title,
          price: J.firstRupee(card),
          href: link?.href,
          sponsored: /\b(Sponsored)\b/.test(J.text(card)) || [...card.querySelectorAll('span, div')].some((el) => !el.children.length && J.text(el) === 'Ad'),
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
      const { item, state } = ctx;

      const deliver = press([/^deliver here$/i, /^deliver to this address$/i]);
      if (deliver) {
        ctx.act('deliver', () => J.click(deliver), 2000); // lost early clicks retry quickly
        ctx.progress('Confirmed delivery address');
        return;
      }

      // Order summary: bump quantity once, then continue.
      if (item.quantity > 1 && !state.qtyDone && J.bodyMatches(/order summary/i)) {
        const plus = press([/^\+$/]);
        if (!plus && J.bodyMatches(/\bqty:/i)) {
          // Current checkout uses a custom "Qty: 1 ▾" dropdown — leave that to the human.
          state.qtyDone = true;
          return ctx.attention(`Set Qty to ${item.quantity} here, then click Continue — I’ll pick it up on the payment page`, 'qty');
        }
        if (plus) {
          state.qtyDone = true;
          ctx.lastAction = 'qty' + Date.now();
          for (let i = 1; i < item.quantity; i++) {
            J.click(plus);
            await J.sleep(1200);
          }
          ctx.progress(`Quantity set to ${item.quantity}`);
          return;
        }
      }

      const cont = press([/^continue$/i, /^accept (&|and) continue$/i, /^proceed$/i, /^proceed to pay(ment)?$/i]);
      if (cont) {
        ctx.act('continue', () => J.click(cont), 2000);
        ctx.progress('Order summary confirmed');
        return;
      }

      if (paymentVisible()) return payment(ctx);
      ctx.progress('Loading checkout…');
    },

    payment,
  };

  J.run({
    detect() {
      const p = location.pathname;
      const h = location.href;
      if (/^\/account\/login/.test(p)) return 'signin';
      if (/orderresponse|ordersuccess|order-confirmation|thankyou/i.test(h)) return 'success';
      if (/checkout|payments?\b/i.test(p) && J.bodyMatches(/order (has been )?placed|order confirmed|your order is confirmed/i)) return 'success';
      if (/^\/payments?\b/.test(p)) return 'payment';
      if (/checkout/i.test(p)) return 'checkout';
      if (p === '/viewcart') return 'cart';
      if (p === '/search' || p.startsWith('/search')) return 'search';
      if (/\/p\/itm/i.test(p)) return 'product';
      return 'other';
    },

    success() {
      const m = J.bodyText().match(/order id[:\s#]*(OD\d{10,})/i) || J.bodyText().match(/\b(OD\d{12,})\b/);
      return { orderId: m?.[1] || null };
    },

    scrape() {
      const isProduct = this.detect() === 'product';
      const p = isProduct ? product() : {};
      return { site: 'flipkart', isProduct, url: location.href, title: p.title || document.title, price: p.price ?? null, image: p.image ?? null };
    },

    handlers,
  });
})();
