"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { ICONS } from "@/components/icons";
import { KUNDLI_HOUSES, type KundliHouse } from "@/data/taxonomy";
import type { HouseSummary } from "@/lib/kundli/compute";

/* North-Indian-style diamond chart, drawn on a 400×400 grid (+10 margin).
   House 1 is the top rhombus; houses run counter-clockwise. */
type Pt = [number, number];
const A: Pt = [0, 0], B: Pt = [400, 0], C: Pt = [400, 400], D: Pt = [0, 400];
const T: Pt = [200, 0], R: Pt = [400, 200], Bo: Pt = [200, 400], L: Pt = [0, 200];
const O: Pt = [200, 200], P1: Pt = [100, 100], P2: Pt = [300, 100], P3: Pt = [300, 300], P4: Pt = [100, 300];

const SHAPES: Record<number, Pt[]> = {
  1: [T, P2, O, P1],
  2: [A, T, P1],
  3: [A, P1, L],
  4: [L, P1, O, P4],
  5: [L, P4, D],
  6: [D, P4, Bo],
  7: [Bo, P4, O, P3],
  8: [Bo, P3, C],
  9: [C, P3, R],
  10: [R, P3, O, P2],
  11: [R, P2, B],
  12: [B, P2, T],
};

const M = 10;
const pts = (p: Pt[]) => p.map(([x, y]) => `${x + M},${y + M}`).join(" ");
const centroid = (p: Pt[]): Pt => [p.reduce((s, q) => s + q[0], 0) / p.length + M, p.reduce((s, q) => s + q[1], 0) / p.length + M];

const LINES = [
  `M${M} ${M}H${400 + M}V${400 + M}H${M}Z`, // frame
  `M${M} ${M}L${400 + M} ${400 + M}`, // diagonals
  `M${400 + M} ${M}L${M} ${400 + M}`,
  `M${200 + M} ${M}L${400 + M} ${200 + M}L${200 + M} ${400 + M}L${M} ${200 + M}Z`, // diamond
];

export const HOUSE_ORDER = (Object.keys(KUNDLI_HOUSES) as KundliHouse[]).sort((a, b) => KUNDLI_HOUSES[a].n - KUNDLI_HOUSES[b].n);

const LINES_S = 1.1;
const HOUSES_AT = 1.0;
const HOUSE_STEP = 0.12;
const TOTAL_AT = HOUSES_AT + 12 * HOUSE_STEP + 0.15;
export const REVEAL_MS = (TOTAL_AT + 1.1) * 1000;

export function KundliChart({
  houses,
  totalAmount,
  formatTotal,
  estimateLabel,
  houseLabel,
  chartLabel,
  revealing = false,
  onHouse,
  interactive = true,
  className,
}: {
  houses: HouseSummary[];
  /** Lifetime cash estimate in rupees, shown in the centre */
  totalAmount: number;
  formatTotal: (n: number) => string;
  estimateLabel: string;
  houseLabel: (h: HouseSummary) => string;
  chartLabel: string;
  revealing?: boolean;
  onHouse?: (h: KundliHouse) => void;
  interactive?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const play = revealing && !reduce;
  const byHouse = useMemo(() => new Map(houses.map((h) => [h.house, h])), [houses]);
  const totalRef = useRef<SVGTSpanElement>(null);
  const total = formatTotal(totalAmount);

  // Count the centre total up once the houses have lit
  useEffect(() => {
    const el = totalRef.current;
    if (!play || !el) return;
    el.textContent = formatTotal(0);
    const c = animate(0, totalAmount, {
      delay: TOTAL_AT,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = formatTotal(v)),
      onComplete: () => (el.textContent = formatTotal(totalAmount)),
    });
    return () => c.stop();
  }, [play, totalAmount, formatTotal]);

  const sparks = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => {
        const angle = (i / 26) * Math.PI * 2 + (i % 3) * 0.2;
        const dist = 70 + ((i * 37) % 60);
        return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, color: i % 3 === 0 ? "#34D399" : i % 3 === 1 ? "#F8CB6B" : "#FFFFFF", r: 2 + (i % 3) };
      }),
    [],
  );

  return (
    <svg viewBox={`0 0 ${400 + 2 * M} ${400 + 2 * M}`} role="group" aria-label={chartLabel} className={className}>
      <defs>
        <radialGradient id="ys-house-glow" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#F8CB6B" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#F5B83D" stopOpacity="0.25" />
        </radialGradient>
        <linearGradient id="ys-gold-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E79D1C" />
          <stop offset="50%" stopColor="#FFF1C9" />
          <stop offset="100%" stopColor="#F5B83D" />
          {play && <animate attributeName="x1" values="-1;1" dur="1.6s" begin={`${TOTAL_AT}s`} repeatCount="2" />}
        </linearGradient>
        <filter id="ys-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Houses */}
      {HOUSE_ORDER.map((key, i) => {
        const meta = KUNDLI_HOUSES[key];
        const shape = SHAPES[meta.n];
        const h = byHouse.get(key);
        const intensity = h?.intensity ?? 0;
        const [cx, cy] = centroid(shape);
        const isTri = shape.length === 3;
        const Icon = ICONS[meta.icon];
        const size = isTri ? 18 : 24;
        const count = h?.count ?? 0;
        const content = (
          <>
            {intensity > 0 && <polygon points={pts(shape)} fill="url(#ys-house-glow)" opacity={intensity * 0.55} filter="url(#ys-glow)" />}
            <polygon
              points={pts(shape)}
              fill={intensity > 0 ? "url(#ys-house-glow)" : "rgba(255,255,255,0.02)"}
              fillOpacity={intensity > 0 ? 0.12 + intensity * 0.3 : 1}
              stroke="transparent"
              strokeWidth={3}
              className="transition-[stroke] duration-150"
            />
            <text x={cx} y={cy - (isTri ? 20 : 30)} textAnchor="middle" fontSize={isTri ? 9 : 10} fill="rgba(255,255,255,0.45)" fontWeight={600}>
              {meta.n}
            </text>
            {Icon && <Icon x={cx - size / 2} y={cy - size / 2 - (isTri ? 2 : 4)} width={size} height={size} color={count > 0 ? "#FFF1C9" : "rgba(255,255,255,0.35)"} strokeWidth={1.75} aria-hidden />}
            <text x={cx} y={cy + (isTri ? 22 : 30)} textAnchor="middle" fontSize={isTri ? 13 : 16} fontWeight={800} fill={count > 0 ? "#FFFFFF" : "rgba(255,255,255,0.4)"}>
              {count}
            </text>
          </>
        );
        const motionProps = {
          initial: play ? { opacity: 0 } : false,
          animate: { opacity: 1 },
          transition: { delay: play ? HOUSES_AT + i * HOUSE_STEP : 0, duration: 0.45 },
        } as const;
        if (!interactive || !h) return <motion.g key={key} {...motionProps}>{content}</motion.g>;
        return (
          <motion.g
            key={key}
            {...motionProps}
            role="button"
            tabIndex={0}
            aria-label={houseLabel(h)}
            onClick={() => onHouse?.(key)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onHouse?.(key);
              }
            }}
            className="cursor-pointer outline-none [&:focus-visible>polygon:nth-of-type(2)]:stroke-white [&:hover>polygon:nth-of-type(2)]:stroke-[#F8CB6B]"
          >
            {content}
          </motion.g>
        );
      })}

      {/* Gold lines */}
      {LINES.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="#F5B83D"
          strokeWidth={i === 0 ? 2.5 : 1.75}
          strokeLinejoin="round"
          initial={play ? { pathLength: 0, opacity: 0.4 } : false}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: play ? LINES_S : 0, delay: play ? i * 0.08 : 0, ease: "easeInOut" }}
          pointerEvents="none"
        />
      ))}

      {/* Centre medallion with the lifetime total */}
      <motion.g
        initial={play ? { opacity: 0, scale: 0.6 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: play ? TOTAL_AT - 0.2 : 0, type: "spring", stiffness: 160, damping: 14 }}
        style={{ transformOrigin: `${200 + M}px ${200 + M}px` }}
        pointerEvents="none"
      >
        <circle cx={200 + M} cy={200 + M} r={60} fill="#0B0D17" stroke="#F5B83D" strokeWidth={2} />
        <circle cx={200 + M} cy={200 + M} r={53} fill="none" stroke="rgba(245,184,61,0.35)" strokeWidth={1} strokeDasharray="2 4" />
        <text x={200 + M} y={200 + M + 8} textAnchor="middle" fontSize={total.length > 8 ? 20 : 24} fontWeight={800} fill="url(#ys-gold-shimmer)">
          <tspan ref={totalRef}>{total}</tspan>
        </text>
        <text x={200 + M} y={200 + M + 28} textAnchor="middle" fontSize={10} fontWeight={600} fill="rgba(255,255,255,0.65)" letterSpacing={1}>
          {estimateLabel.toUpperCase()}
        </text>
      </motion.g>

      {/* Light confetti */}
      {play &&
        sparks.map((s, i) => (
          <motion.circle
            key={i}
            cx={200 + M}
            cy={200 + M}
            r={s.r}
            fill={s.color}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], cx: [200 + M, 200 + M + s.x], cy: [200 + M, 200 + M + s.y] }}
            transition={{ delay: TOTAL_AT + 0.35, duration: 1.1, ease: "easeOut" }}
            pointerEvents="none"
          />
        ))}
    </svg>
  );
}
