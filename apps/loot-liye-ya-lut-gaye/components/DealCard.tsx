"use client";

import { useRef, type RefObject } from "react";
import { TRAP_TYPES, type TrapType } from "@/lib/deals";
import type { Card, Pick } from "@/lib/game";
import { inr, pctOff, signed } from "@/lib/format";
import { shotFor } from "@/lib/palette";
import Burst from "./Burst";
import css from "./card.module.css";

const SWIPE_PX = 80;

interface Props {
  card: Card;
  dealNo: number;
  total: number;
  pick?: Pick;
  newTrick: TrapType | null;
  dexCount: number;
  leaving: "left" | "right" | null;
  interactive: boolean;
  canBuy: boolean;
  onSwipe: (dir: "left" | "right") => void;
  onNext: () => void;
  barRef: RefObject<HTMLElement | null>;
  secRef: RefObject<HTMLElement | null>;
  cardRef: RefObject<HTMLDivElement | null>;
}

function verdict(pick: Pick) {
  const { card, outcome, action } = pick;
  const timeout = action === "timeout";
  switch (outcome) {
    case "loot":
      return { tone: "good", stamp: "Asli loot ✅", why: card.why, net: `${signed(pick.gain)} asli bachat` };
    case "trap":
      return { tone: "bad", stamp: `Jaal 🪤 ${card.trick}`, why: card.why, net: `${signed(pick.gain)} nuksaan` };
    case "dodge":
      return {
        tone: "good",
        stamp: timeout ? "Time khatam, bach gaye 😅" : "Bach gaye 🙌",
        why: `Ye ${card.trick} tha. ${card.why}`,
        net: "₹0 gaya. Paisa bacha 🛡️",
      };
    default:
      return {
        tone: "meh",
        stamp: timeout ? "Time khatam ⏰" : "Chhoot gaya 😩",
        why: `Ye asli deal thi. ${card.why}`,
        net: `${inr(card.v - card.p)} ki bachat chhoot gayi`,
      };
  }
}

export default function DealCard({ card, dealNo, total, pick, newTrick, dexCount, leaving, interactive, canBuy, onSwipe, onNext, barRef, secRef, cardRef }: Props) {
  const drag = useRef<{ id: number; x: number; dx: number } | null>(null);
  const [g1, g2] = shotFor(card.n);
  const v = pick ? verdict(pick) : null;
  const bought = pick?.action === "buy";

  const paint = (dx: number, animate: boolean) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = animate ? "transform .28s cubic-bezier(.3,1.4,.5,1)" : "none";
    el.style.transform = dx ? `translateX(${dx}px) rotate(${dx / 16}deg)` : "";
    const k = Math.min(1, Math.abs(dx) / SWIPE_PX);
    el.style.setProperty("--kb", dx > 0 ? String(k) : "0");
    el.style.setProperty("--ks", dx < 0 ? String(k) : "0");
  };

  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (!interactive && !pick) return;
    drag.current = { id: e.pointerId, x: e.clientX, dx: 0 };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    d.dx = e.clientX - d.x;
    if (interactive) paint(d.dx, false);
  };
  const onUp = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    const dx = d.dx;
    if (interactive) {
      paint(0, true);
      if (Math.abs(dx) >= SWIPE_PX) onSwipe(dx > 0 ? "right" : "left");
    } else if (pick && (Math.abs(dx) < 8 || Math.abs(dx) >= SWIPE_PX)) {
      onNext();
    }
  };

  const cls = [css.wrap, pick && css.flipped, leaving === "left" && css.leaveLeft, leaving === "right" && css.leaveRight, !canBuy && css.broke]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={cardRef}
      className={cls}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      role="group"
      aria-roledescription="deal card"
      aria-label={`Deal ${dealNo} of ${total}: ${card.n}`}
    >
      <div className={css.flipper}>
        {/* ── FRONT: the loud sale listing ── */}
        <div className={`${css.face} ${css.front}`} aria-hidden={!!pick}>
          <div className={css.shot} style={{ "--g1": g1, "--g2": g2 } as React.CSSProperties}>
            <span className={css.ribbon}>{card.b}</span>
            <Burst pct={pctOff(card.p, card.m)} className={css.burst} />
            <span className={css.emoji} aria-hidden="true">
              {card.e}
            </span>
            <span className={css.floor} aria-hidden="true" />
            <span className={css.secs} aria-hidden="true">
              ⏱ <b ref={secRef}>6</b>s
            </span>
          </div>
          <div className={css.info}>
            <h2 className={css.name}>{card.n}</h2>
            <div className={css.priceRow}>
              <span className={css.price}>{inr(card.p)}</span>
              <s className={css.mrp} aria-label={`MRP ${inr(card.m)}`}>
                {inr(card.m)}
              </s>
            </div>
            <div className={css.timer} aria-hidden="true">
              <i ref={barRef} />
            </div>
          </div>
          <span className={`${css.hint} ${css.hintBuy}`} aria-hidden="true">
            Buy
          </span>
          <span className={`${css.hint} ${css.hintSkip}`} aria-hidden="true">
            Skip
          </span>
        </div>

        {/* ── BACK: the honest receipt ── */}
        <div className={`${css.face} ${css.back}`} aria-hidden={!pick}>
          {pick && v && (
            <div className={`paper ${css.receipt}`}>
              <div className={css.rHead}>
                <b>Sach ka bill</b>
                <span>
                  #{String(dealNo).padStart(2, "0")}/{total}
                </span>
              </div>
              <p className={css.rItem}>
                <span aria-hidden="true">{card.e}</span> {card.n}
              </p>
              <dl className={css.rLines}>
                <div>
                  <dt>Sale price</dt>
                  <dd>{inr(card.p)}</dd>
                </div>
                {bought && card.fee ? (
                  <div className={css.rFee}>
                    <dt>Hidden fee 👀</dt>
                    <dd>+{inr(card.fee)}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Tumne diye</dt>
                  <dd>{inr(pick.paid)}</dd>
                </div>
                <div className={css.rTrue}>
                  <dt>Asli keemat</dt>
                  <dd>{inr(card.v)}</dd>
                </div>
              </dl>
              <div className={`ink ${css.stamp}`} data-tone={v.tone}>
                {v.stamp}
              </div>
              <p className={css.why}>{v.why}</p>
              <p className={css.net} data-tone={v.tone}>
                {v.net}
              </p>
              {newTrick && (
                <p className={css.newTrick}>
                  🆕 Trick pakdi: {TRAP_TYPES[newTrick].icon} {TRAP_TYPES[newTrick].label} · {dexCount}/10
                </p>
              )}
              <p className={css.tap}>
                Tap karo, agla deal
                <i className={css.auto} />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
