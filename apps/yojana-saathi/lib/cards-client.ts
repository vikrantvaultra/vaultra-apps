"use client";

import { useEffect, useState } from "react";
import type { StateSlug } from "@/data/taxonomy";
import type { SchemeCard } from "./schemes";
import { BASE_PATH } from "./site";

export type CardScope = "all" | "central" | StateSlug;

const cache = new Map<CardScope, Promise<SchemeCard[]>>();

/** Fetches a static card index once per session (shared by every component that asks) */
export function loadCards(scope: CardScope): Promise<SchemeCard[]> {
  let p = cache.get(scope);
  if (!p) {
    p = fetch(`${BASE_PATH}/api/cards/${scope}`).then((r) => {
      if (!r.ok) throw new Error(`cards ${scope}: ${r.status}`);
      return r.json() as Promise<SchemeCard[]>;
    });
    p.catch(() => cache.delete(scope));
    cache.set(scope, p);
  }
  return p;
}

/** Cards for a scope; null while loading (or when scope is null) */
export function useCards(scope: CardScope | null): { cards: SchemeCard[] | null; error: boolean } {
  const [state, setState] = useState<{ scope: CardScope | null; cards: SchemeCard[] | null; error: boolean }>({ scope: null, cards: null, error: false });
  useEffect(() => {
    if (!scope) return;
    let live = true;
    loadCards(scope).then(
      (cards) => live && setState({ scope, cards, error: false }),
      () => live && setState({ scope, cards: null, error: true }),
    );
    return () => {
      live = false;
    };
  }, [scope]);
  return state.scope === scope ? { cards: state.cards, error: state.error } : { cards: null, error: false };
}
