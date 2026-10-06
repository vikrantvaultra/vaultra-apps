"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/** Counts from 0 to `value` once it scrolls into view. Server HTML already shows the final number. */
export function CountUp({ value, duration = 1.2, format }: { value: number; duration?: number; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const fmt = format ?? ((n: number) => Math.round(n).toLocaleString("en-IN"));

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = fmt(v);
      },
    });
    return () => controls.stop();
    // fmt is derived from props; re-running on identity change would restart the animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref}>
      {fmt(value)}
    </span>
  );
}
