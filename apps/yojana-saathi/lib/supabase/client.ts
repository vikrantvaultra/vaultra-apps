"use client";

import type { Session, SupabaseClient } from "@supabase/supabase-js";
import { useSyncExternalStore } from "react";
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from "./env";

let clientPromise: Promise<SupabaseClient> | null = null;

/**
 * The browser client, or null when Supabase isn't configured.
 * supabase-js is loaded on demand, so pages never pay for it unless sync is set up.
 */
export function getSupabase(): Promise<SupabaseClient | null> {
  if (!isSupabaseConfigured() || typeof window === "undefined") return Promise.resolve(null);
  clientPromise ??= import("@supabase/supabase-js").then(({ createClient }) =>
    createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, storageKey: "ys-auth" },
    }),
  );
  return clientPromise;
}

/* Session store ------------------------------------------------------ */

let session: Session | null = null;
let started = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function start() {
  if (started || !isSupabaseConfigured()) return;
  started = true;
  getSupabase().then((sb) => {
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => {
      session = data.session;
      emit();
    });
    sb.auth.onAuthStateChange((_event, s) => {
      session = s;
      emit();
    });
  });
}

function subscribe(cb: () => void) {
  start();
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useSession(): Session | null {
  return useSyncExternalStore(subscribe, () => session, () => null);
}

export async function signOut() {
  const sb = await getSupabase();
  await sb?.auth.signOut();
}
