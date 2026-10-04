// Shared toolkit for the Amazon/Flipkart content scripts (classic script, no imports).
// Store markup changes constantly, so everything here prefers *visible text* over class names.

(() => {
  const J = (globalThis.SaleSniper = globalThis.SaleSniper || {});

  const TICK_MS = 700;
  const STUCK_MS = 45_000;

  J.sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  J.send = async (msg) => {
    try {
      return await chrome.runtime.sendMessage(msg);
    } catch {
      return null; // extension reloaded / worker restarting
    }
  };

  J.text = (el) => (el ? (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim() : '');

  J.visible = (el) => {
    // Amazon's real <input> is a transparent overlay; its .a-button wrapper is what's on screen.
    if (el?.classList?.contains('a-button-input')) el = el.closest('.a-button') || el;
    if (!el || !el.getClientRects().length) return false;
    const view = el.ownerDocument.defaultView;
    const s = view.getComputedStyle(el);
    return s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) > 0.05;
  };

  J.enabled = (el) => !el.disabled && el.getAttribute('aria-disabled') !== 'true' && !el.classList.contains('a-button-disabled') && !el.closest('.a-button-disabled');

  J.parsePrice = (str) => {
    if (str == null) return null;
    const m = String(str).replace(/ /g, ' ').match(/(?:₹|rs\.?|inr)\s*([\d,]+(?:\.\d{1,2})?)/i) || String(str).match(/^\s*([\d,]+(?:\.\d{1,2})?)\s*$/);
    if (!m) return null;
    const n = parseFloat(m[1].replace(/,/g, ''));
    return Number.isFinite(n) && n > 0 ? n : null;
  };

  J.allRupees = (str) => [...String(str).matchAll(/₹\s*([\d,]+(?:\.\d{1,2})?)/g)].map((m) => parseFloat(m[1].replace(/,/g, ''))).filter((n) => n > 0);

  J.format = (n) => (n == null ? '?' : '₹' + Number(n).toLocaleString('en-IN'));

  const CLICKABLE = 'button, input[type="submit"], input[type="button"], a, [role="button"], [role="radio"], label, span.a-button-text';

  const labelOf = (el) => {
    if (el.tagName !== 'INPUT') return J.text(el) || el.getAttribute('aria-label') || '';
    const ref = el.getAttribute('aria-labelledby') && el.ownerDocument.getElementById(el.getAttribute('aria-labelledby').split(' ')[0]);
    return el.value || (ref && J.text(ref)) || el.getAttribute('aria-label') || '';
  };

  // Clicking Amazon's visible label <span> does nothing; the transparent <input> over it is the real button.
  const target = (el) => (el.matches('span.a-button-text') && el.closest('.a-button')?.querySelector('input, button')) || el;

  /**
   * First visible, enabled element whose label fully matches one of `patterns`.
   * Patterns earlier in the list win; within a pattern, page order wins.
   * Wrappers often share their button's exact text ("Confirm order" panel around the
   * "Confirm order" div), so take the innermost match: a click bubbles *up* to whichever
   * ancestor owns the handler, never down.
   */
  J.findClickable = (patterns, { root = document, selector = CLICKABLE } = {}) => {
    const els = [...root.querySelectorAll(selector)].filter((el) => J.visible(el));
    for (const re of patterns) {
      const hits = els.filter((el) => {
        const label = labelOf(el).slice(0, 80);
        return label && re.test(label) && J.enabled(target(el));
      });
      const innermost = hits.find((el) => !hits.some((other) => other !== el && el.contains(other)));
      if (innermost) return target(innermost);
    }
    return null;
  };

  /** Smallest visible element whose own full text matches `re` (for labels/rows). */
  J.findText = (re, root = document) => {
    let best = null;
    for (const el of root.querySelectorAll('span, div, label, td, th, p, h1, h2, h3, h4, strong, b')) {
      if (el.children.length > 4) continue;
      const t = J.text(el);
      if (t.length > 80 || !re.test(t) || !J.visible(el)) continue;
      if (!best || best.contains(el)) best = el;
    }
    return best;
  };

  // Replay what a real mouse click produces. Flipkart's buttons are React Native Web
  // "Pressables" that only fire after pointerdown/pointerup — a bare el.click() is ignored.
  J.click = (el) => {
    try {
      el.scrollIntoView({ block: 'center', behavior: 'instant' });
    } catch {}
    const r = el.getBoundingClientRect();
    const view = el.ownerDocument.defaultView;
    const at = { bubbles: true, cancelable: true, composed: true, view, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2, button: 0 };
    const ptr = { ...at, pointerId: 1, pointerType: 'mouse', isPrimary: true };
    el.dispatchEvent(new view.PointerEvent('pointerover', ptr));
    el.dispatchEvent(new view.PointerEvent('pointerenter', { ...ptr, bubbles: false }));
    el.dispatchEvent(new view.PointerEvent('pointerdown', { ...ptr, buttons: 1 }));
    el.dispatchEvent(new view.MouseEvent('mousedown', { ...at, buttons: 1 }));
    el.dispatchEvent(new view.PointerEvent('pointerup', { ...ptr, buttons: 0 }));
    el.dispatchEvent(new view.MouseEvent('mouseup', { ...at, buttons: 0 }));
    el.click();
  };

  J.highlight = (el) => {
    if (!el) return;
    if (el.classList.contains('a-button-input')) el = el.closest('.a-button') || el;
    el.style.outline = '4px solid #FF6B1A';
    el.style.outlineOffset = '3px';
    el.style.boxShadow = '0 0 0 9999px rgba(0,0,0,.25)';
    try {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } catch {}
  };

  J.setSelect = (select, value) => {
    const opt = [...select.options].find((o) => o.value === String(value) || J.text(o) === String(value));
    if (!opt) return false;
    select.value = opt.value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    select.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  };

  let bodyCache = { t: 0, text: '' };
  J.bodyText = () => {
    if (Date.now() - bodyCache.t > 300) bodyCache = { t: Date.now(), text: document.body ? document.body.innerText : '' };
    return bodyCache.text;
  };
  J.bodyMatches = (re) => re.test(J.bodyText());

  const struck = (el) => {
    for (let n = el, i = 0; n && i < 3; n = n.parentElement, i++) {
      if (/line-through/.test(n.ownerDocument.defaultView.getComputedStyle(n).textDecorationLine)) return true;
    }
    return false;
  };

  /** The visually biggest "₹1,23,456" on screen near the top — the selling price on most layouts. */
  J.biggestRupee = (root = document, maxTop = 1100) => {
    let best = null;
    for (const el of root.querySelectorAll('div, span, strong, b, p')) {
      if (el.children.length > 2) continue;
      const t = J.text(el);
      if (t.length > 20 || !/^₹\s?[\d,]+(\.\d+)?$/.test(t)) continue;
      const r = el.getBoundingClientRect();
      if (!r.width || r.top + window.scrollY > maxTop || struck(el)) continue;
      const size = parseFloat(el.ownerDocument.defaultView.getComputedStyle(el).fontSize);
      if (!best || size > best.size) best = { size, value: J.parsePrice(t) };
    }
    return best?.value ?? null;
  };

  /** First non-struck price inside a container (search result cards). */
  J.firstRupee = (root) => {
    for (const el of root.querySelectorAll('div, span')) {
      if (el.children.length > 1) continue;
      const t = J.text(el);
      if (/^₹\s?[\d,]+(\.\d+)?$/.test(t) && !struck(el)) return J.parsePrice(t);
    }
    return null;
  };

  /** Amount on the same row as a label like "Order Total". */
  J.amountNear = (labelRe, root = document) => {
    const label = J.findText(labelRe, root);
    if (!label) return null;
    for (let n = label, i = 0; n && i < 5; n = n.parentElement, i++) {
      const amounts = J.allRupees(J.text(n));
      if (amounts.length) return amounts[amounts.length - 1];
    }
    return null;
  };

  J.hasSecretPaymentField = () =>
    [...document.querySelectorAll('input[autocomplete="cc-csc"], input[autocomplete="one-time-code"], input[name*="cvv" i], input[id*="cvv" i], input[placeholder*="cvv" i], input[name*="otp" i], input[placeholder*="otp" i]')].some(J.visible);

  // -------------------------------------------------------------------------
  // Search-result matching: only buy a result whose title contains every word you said.
  // -------------------------------------------------------------------------

  const STOP = new Set(['the', 'a', 'an', 'for', 'with', 'and', 'of', 'in', 'to', 'new', 'latest', 'original']);
  J.normalize = (s) =>
    String(s)
      .toLowerCase()
      .replace(/(\d+)\s+(gb|tb|mb|inch|inches|in|mp|mah|w|kg|g|ml|l|cm|mm|hz|pcs|pack)\b/g, '$1$2')
      .replace(/[^a-z0-9.+]+/g, ' ')
      .trim();
  J.tokens = (s) => J.normalize(s).split(' ').filter((t) => t && !STOP.has(t));

  J.pickResult = (query, maxPrice, rows) => {
    const want = J.tokens(query);
    if (!want.length) return null;
    return (
      rows.find((r) => {
        if (!r.href || r.sponsored || !r.price) return false;
        if (maxPrice && r.price > maxPrice) return false;
        const have = new Set(J.tokens(r.title));
        const haveJoined = J.normalize(r.title).replace(/ /g, '');
        return want.every((w) => have.has(w) || haveJoined.includes(w));
      }) || null
    );
  };

  // -------------------------------------------------------------------------
  // On-page status pill (shadow DOM so the store's CSS can't touch it).
  // -------------------------------------------------------------------------

  J.ui = (() => {
    let host, msgEl, titleEl;
    const tones = { info: '#FF6B1A', warn: '#F4B400', alert: '#E5383B', good: '#2BB673' };
    return {
      mount(item) {
        if (host) return;
        host = document.createElement('div');
        host.style.cssText = 'position:fixed;z-index:2147483647;top:12px;right:12px;';
        const root = host.attachShadow({ mode: 'open' });
        root.innerHTML = `
          <style>
            .p{font:600 13px/1.35 system-ui,-apple-system,Segoe UI,sans-serif;background:#16110D;color:#FFF5EC;border-radius:14px;
               padding:10px 12px;box-shadow:0 10px 30px rgba(0,0,0,.35);max-width:320px;border:2px solid var(--c,#FF6B1A);display:flex;gap:10px;align-items:flex-start}
            .b{font-size:18px;line-height:1}
            .t{font-size:11px;opacity:.7;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px}
            .m{margin-top:2px}
            button{all:unset;cursor:pointer;font-size:11px;padding:3px 8px;border-radius:8px;background:#2A221C;color:#FFB48A;margin-left:auto}
            button:hover{background:#3A2E25}
          </style>
          <div class="p"><div class="b">⚡</div><div><div class="t"></div><div class="m"></div></div><button title="Stop Sale Sniper on this item">Stop</button></div>`;
        titleEl = root.querySelector('.t');
        msgEl = root.querySelector('.m');
        titleEl.textContent = 'Sale Sniper · ' + (item.title || item.query || 'item');
        root.querySelector('button').addEventListener('click', () => {
          J.send({ type: 'stop' });
          J.ui.remove();
        });
        document.documentElement.appendChild(host);
      },
      set(text, tone = 'info') {
        if (!host) return;
        msgEl.textContent = text;
        host.shadowRoot.querySelector('.p').style.setProperty('--c', tones[tone] || tones.info);
      },
      remove() {
        host?.remove();
        host = null;
      },
    };
  })();

  // -------------------------------------------------------------------------
  // The observe → act loop. Each site adapter supplies detect() + handlers.
  // A handler may return:
  //   'halt'    stop the loop (page is about to reload / navigate, or we're done)
  //   'passive' stop acting, only watch for the order-success page
  //   anything else → keep ticking
  // -------------------------------------------------------------------------

  J.run = async (adapter) => {
    if (window.top !== window) return;
    let stopped = false;

    chrome.runtime.onMessage.addListener((msg, _sender, reply) => {
      if (msg?.type === 'page:scrape') {
        try {
          reply(adapter.scrape());
        } catch (e) {
          reply({ error: String(e) });
        }
      }
      if (msg?.type === 'job:stopped') {
        stopped = true;
        J.ui.remove();
      }
    });

    const job = await J.send({ type: 'job:get' });
    if (!job?.item) return;

    const { item, settings } = job;
    let passive = job.passive;
    J.ui.mount(item);

    let lastText = '';
    const ctx = {
      item,
      settings,
      state: {},
      acted: {},
      lastAction: '',
      autoPlace: item.autoPlace == null ? !!settings.autoPlaceOrder : !!item.autoPlace,
      progress(text, extra = {}) {
        J.ui.set(text, 'info');
        if (text === lastText && !extra.force) return;
        lastText = text;
        J.send({ type: 'progress', text, ...extra });
      },
      act(key, fn, cooldown = 6000) {
        const now = Date.now();
        if (ctx.acted[key] && now - ctx.acted[key] < cooldown) return false;
        ctx.acted[key] = now;
        ctx.lastAction = key + now;
        fn();
        return true;
      },
      async wait(text, extra = {}) {
        J.ui.set(text + ' — refreshing…', 'warn');
        await J.send({ type: 'wait', text, ...extra });
        return 'halt';
      },
      async attention(text, stage) {
        J.ui.set(text, 'alert');
        await J.send({ type: 'attention', text, stage });
        return ['final', 'payment', 'checkout'].includes(stage) ? 'passive' : 'hold';
      },
      async fail(text) {
        J.ui.set(text, 'alert');
        await J.send({ type: 'failed', text });
        return 'halt';
      },
    };

    let sig = '';
    let sigSince = Date.now();
    let holding = false; // waiting for the human on a non-final hiccup (login, captcha, variant)

    while (!stopped) {
      const page = adapter.detect();

      if (page === 'success') {
        const info = adapter.success?.() || {};
        J.ui.set('Order placed! 🎉', 'good');
        await J.send({ type: 'ordered', ...info });
        return;
      }

      if (passive || holding) {
        if (passive) J.ui.set(ctx.state.placed ? 'Placing order… waiting for confirmation' : 'Your turn — finish here and I’ll log the order', ctx.state.placed ? 'info' : 'alert');
        await J.sleep(1200);
        continue;
      }

      if (page !== 'product' && page !== 'search' && J.hasSecretPaymentField()) {
        await ctx.attention('Bank needs your OTP/CVV — I never type those. Finish it here.', 'payment');
        passive = true;
        continue;
      }

      const handler = adapter.handlers[page];
      const result = handler ? await handler(ctx) : undefined;
      if (result === 'halt') return;
      if (result === 'passive') {
        passive = true;
        continue;
      }
      if (result === 'hold') {
        holding = true;
        continue;
      }

      const now = Date.now();
      const nextSig = `${page}|${location.href}|${ctx.lastAction}`;
      if (nextSig !== sig) {
        sig = nextSig;
        sigSince = now;
      } else if (now - sigSince > STUCK_MS) {
        const stage = page === 'checkout' || page === 'payment' ? 'checkout' : 'product';
        const r = await ctx.attention(`Stuck on this ${page} page — please take over`, stage);
        if (r === 'passive') passive = true;
        else holding = true;
      }
      await J.sleep(TICK_MS);
    }
  };
})();
