"use client";

import type { Profile } from "@/lib/types";
import { createLocalStore } from "./local";

/** The saved eligibility profile. Lives in this browser; Phase 6 adds optional cloud sync on top. */
const store = createLocalStore<Profile>("ys-profile-v1");

export const useProfile = store.useValue;
export const readProfile = store.read;

export function saveProfile(next: Profile) {
  store.write(next);
}

export function updateProfile(patch: Partial<Profile>) {
  store.write({ ...(store.read() ?? {}), ...patch });
}

export function clearProfile() {
  store.write(null);
}

/** A profile counts as "set" once the core questions are answered */
export const hasProfile = (p: Profile | null): p is Profile => !!p && p.age !== undefined && p.state !== undefined;

export const subscribeProfile = store.subscribe;
