"use client";

import { useSyncExternalStore } from "react";

/**
 * A tiny localStorage-backed store for one JSON value, readable from many components.
 * Snapshots are cached by raw string so React sees a stable reference.
 */
export function createLocalStore<T>(key: string, event = `ys:${key}`) {
  let cachedRaw: string | null | undefined;
  let cachedValue: T | null = null;

  function read(): T | null {
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(key);
    } catch {}
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      try {
        cachedValue = raw ? (JSON.parse(raw) as T) : null;
      } catch {
        cachedValue = null;
      }
    }
    return cachedValue;
  }

  function write(value: T | null) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch {}
    window.dispatchEvent(new Event(event));
  }

  function subscribe(cb: () => void) {
    const onStorage = (e: StorageEvent) => e.key === key && cb();
    window.addEventListener(event, cb);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(event, cb);
      window.removeEventListener("storage", onStorage);
    };
  }

  function useValue(): T | null {
    return useSyncExternalStore(subscribe, read, () => null);
  }

  return { read, write, subscribe, useValue };
}
