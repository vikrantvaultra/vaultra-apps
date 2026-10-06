"use client";

import { useSyncExternalStore } from "react";
import { TEXT_SIZE_KEY } from "./text-size-boot";

export const TEXT_SIZES = [-1, 0, 1, 2] as const;
export type TextSize = (typeof TEXT_SIZES)[number];

const EVENT = "ys:text-size";

function read(): TextSize {
  const v = Number(document.documentElement.dataset.textSize ?? 0);
  return (TEXT_SIZES as readonly number[]).includes(v) ? (v as TextSize) : 0;
}

export function setTextSize(size: TextSize) {
  const el = document.documentElement;
  if (size === 0) delete el.dataset.textSize;
  else el.dataset.textSize = String(size);
  try {
    localStorage.setItem(TEXT_SIZE_KEY, String(size));
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}

/** Re-applies the saved size when the root <html> is re-created on a client-side locale switch. */
export function restoreTextSize() {
  try {
    const saved = Number(localStorage.getItem(TEXT_SIZE_KEY) ?? 0);
    if ((TEXT_SIZES as readonly number[]).includes(saved) && saved !== read()) setTextSize(saved as TextSize);
  } catch {}
}

export function useTextSize() {
  return useSyncExternalStore(subscribe, read, () => 0 as TextSize);
}
