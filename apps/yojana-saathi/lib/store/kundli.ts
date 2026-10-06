"use client";

import { createLocalStore } from "./local";

export interface KundliState {
  /** Schemes the person ticked as "Already receiving" (drives the Saathi Score) */
  claimed: string[];
  /** Optional, only ever shown on the share card */
  firstName?: string;
}

const store = createLocalStore<KundliState>("ys-kundli-v1");
const EMPTY: KundliState = { claimed: [] };

export const useKundliState = () => store.useValue() ?? EMPTY;
export const readKundliState = () => store.read() ?? EMPTY;
export const writeKundliState = (k: KundliState) => store.write(k);
export const subscribeKundli = store.subscribe;

export function toggleClaimed(slug: string) {
  const k = readKundliState();
  const claimed = k.claimed.includes(slug) ? k.claimed.filter((s) => s !== slug) : [...k.claimed, slug];
  store.write({ ...k, claimed });
}

export function clearKundliState() {
  store.write(null);
}
