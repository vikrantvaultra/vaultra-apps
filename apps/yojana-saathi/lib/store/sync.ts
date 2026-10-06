"use client";

/**
 * Optional cloud sync for signed-in users. localStorage stays the source the UI reads;
 * this mirrors it to Supabase and pulls newer copies on sign-in.
 *   profile, kundli: last write wins (by timestamp)
 *   bookmarks: union on first sync, then mirrored
 */
import { useEffect } from "react";
import { getSupabase, useSession } from "@/lib/supabase/client";
import type { Profile } from "@/lib/types";
import { readBookmarks, subscribeBookmarks, writeBookmarks } from "./bookmarks";
import { readKundliState, subscribeKundli, writeKundliState, type KundliState } from "./kundli";
import { readProfile, saveProfile, subscribeProfile } from "./profile";

const META_KEY = "ys-sync-meta";
type Meta = { profile?: string; kundli?: string };

function readMeta(): Meta {
  try {
    return JSON.parse(localStorage.getItem(META_KEY) ?? "{}") as Meta;
  } catch {
    return {};
  }
}
function touch(key: keyof Meta, at = new Date().toISOString()) {
  try {
    localStorage.setItem(META_KEY, JSON.stringify({ ...readMeta(), [key]: at }));
  } catch {}
}

/** Set while we write remote data into local stores, so those writes aren't pushed straight back */
let applyingRemote = false;
function applyRemote(fn: () => void) {
  applyingRemote = true;
  try {
    fn();
  } finally {
    applyingRemote = false;
  }
}

async function initialSync(userId: string) {
  const sb = await getSupabase();
  if (!sb) return;
  const meta = readMeta();

  const [{ data: p }, { data: k }, { data: b }] = await Promise.all([
    sb.from("profiles").select("data, updated_at").eq("user_id", userId).maybeSingle(),
    sb.from("kundli").select("data, updated_at").eq("user_id", userId).maybeSingle(),
    sb.from("bookmarks").select("slug").eq("user_id", userId),
  ]);

  // Profile
  const localProfile = readProfile();
  if (p && (!meta.profile || p.updated_at > meta.profile || !localProfile)) {
    applyRemote(() => saveProfile(p.data as Profile));
    touch("profile", p.updated_at);
  } else if (localProfile) {
    await pushProfile(userId);
  }

  // Kundli
  const localKundli = readKundliState();
  if (k && (!meta.kundli || k.updated_at > meta.kundli)) {
    applyRemote(() => writeKundliState(k.data as KundliState));
    touch("kundli", k.updated_at);
  } else if (localKundli.claimed.length || localKundli.firstName) {
    await pushKundli(userId);
  }

  // Bookmarks: union
  const remote = (b ?? []).map((r) => r.slug as string);
  const local = readBookmarks();
  const merged = [...local, ...remote.filter((s) => !local.includes(s))];
  if (merged.length !== local.length) applyRemote(() => writeBookmarks(merged));
  const missingRemote = merged.filter((s) => !remote.includes(s));
  if (missingRemote.length) await sb.from("bookmarks").upsert(missingRemote.map((slug) => ({ user_id: userId, slug })));
}

async function pushProfile(userId: string) {
  const sb = await getSupabase();
  const data = readProfile();
  if (!sb) return;
  if (!data) {
    await sb.from("profiles").delete().eq("user_id", userId);
    return;
  }
  const at = new Date().toISOString();
  await sb.from("profiles").upsert({ user_id: userId, data, updated_at: at });
  touch("profile", at);
}

async function pushKundli(userId: string) {
  const sb = await getSupabase();
  if (!sb) return;
  const at = new Date().toISOString();
  await sb.from("kundli").upsert({ user_id: userId, data: readKundliState(), updated_at: at });
  touch("kundli", at);
}

async function pushBookmarks(userId: string) {
  const sb = await getSupabase();
  if (!sb) return;
  const slugs = readBookmarks();
  if (slugs.length) {
    await sb.from("bookmarks").upsert(slugs.map((slug) => ({ user_id: userId, slug })));
    await sb.from("bookmarks").delete().eq("user_id", userId).not("slug", "in", `(${slugs.map((s) => `"${s}"`).join(",")})`);
  } else {
    await sb.from("bookmarks").delete().eq("user_id", userId);
  }
}

/** Mount once (in Providers). Does nothing unless Supabase is configured and someone is signed in. */
export function useCloudSync() {
  const session = useSession();
  const userId = session?.user.id;

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    const timers: Record<string, ReturnType<typeof setTimeout>> = {};
    const debounce = (key: string, fn: () => Promise<void>) => () => {
      if (applyingRemote) return;
      if (key !== "bookmarks") touch(key as keyof Meta);
      clearTimeout(timers[key]);
      timers[key] = setTimeout(() => !cancelled && fn().catch(() => {}), 800);
    };

    initialSync(userId).catch(() => {});
    const offs = [
      subscribeProfile(debounce("profile", () => pushProfile(userId))),
      subscribeKundli(debounce("kundli", () => pushKundli(userId))),
      subscribeBookmarks(debounce("bookmarks", () => pushBookmarks(userId))),
    ];
    return () => {
      cancelled = true;
      offs.forEach((off) => off());
      Object.values(timers).forEach(clearTimeout);
    };
  }, [userId]);
}

/** Deletes the account and every synced row (cascade), then signs out */
export async function deleteAccount() {
  const sb = await getSupabase();
  if (!sb) return;
  const { error } = await sb.rpc("delete_my_account");
  if (error) throw error;
  await sb.auth.signOut();
}

/** Clears everything this site stored in the browser */
export function clearLocalData() {
  try {
    for (const key of Object.keys(localStorage)) if (key.startsWith("ys-")) localStorage.removeItem(key);
  } catch {}
  for (const e of ["ys:ys-profile-v1", "ys:ys-bookmarks-v1", "ys:ys-kundli-v1"]) window.dispatchEvent(new Event(e));
}
