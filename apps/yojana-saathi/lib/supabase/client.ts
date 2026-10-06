"use client";

import { createClient, type Session, type SupabaseClient } from "@supabase/supabase-js";
import { useSyncExternalStore } from "react";
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from "./env";

let client: SupabaseClient | null = null;

/** The browser client, or null when Supabase isn't configured */
export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured() || typeof window === "undefined") return null;
  client ??= createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, storageKey: "ys-auth" },
  });
  return client;
}

/* Session store ------------------------------------------------------ */

let session: Session | null = null;
let started = false;
const listeners = new Set<() => void>();

function start() {
  if (started) return;
  started = true;
  const sb = getSupabase();
  if (!sb) return;
  sb.auth.getSession().then(({ data }) => {
    session = data.session;
    listeners.forEach((l) => l());
  });
  sb.auth.onAuthStateChange((_event, s) => {
    session = s;
    listeners.forEach((l) => l());
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
