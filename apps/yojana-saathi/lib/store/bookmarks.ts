"use client";

import { createLocalStore } from "./local";

/** Bookmarked scheme slugs, newest first. Lives in this browser; Phase 6 adds optional cloud sync. */
const store = createLocalStore<string[]>("ys-bookmarks-v1");

const EMPTY: string[] = [];

export const useBookmarks = () => store.useValue() ?? EMPTY;
export const readBookmarks = () => store.read() ?? EMPTY;
export const writeBookmarks = (slugs: string[]) => store.write(slugs);

export function toggleBookmark(slug: string): boolean {
  const current = readBookmarks();
  const on = !current.includes(slug);
  store.write(on ? [slug, ...current] : current.filter((s) => s !== slug));
  return on;
}

export const subscribeBookmarks = store.subscribe;
