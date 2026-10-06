/**
 * The only module that reads scheme data. Today it wraps the generated file index;
 * swapping it for Postgres later means re-implementing these functions, nothing else.
 */
import { SCHEME_FILES } from "@/data/schemes/_generated";
import { CATEGORIES, MINISTRIES, STATES, type CategorySlug, type MinistrySlug, type StateSlug } from "@/data/taxonomy";
import type { Locale, Localized, Scheme } from "./types";

export const SCHEMES: readonly Scheme[] = [...SCHEME_FILES].sort((a, b) => a.name.en.localeCompare(b.name.en));

const BY_SLUG = new Map(SCHEMES.map((s) => [s.slug, s]));

export const getScheme = (slug: string) => BY_SLUG.get(slug);
export const allSlugs = () => SCHEMES.map((s) => s.slug);

export const t = <T>(value: Localized<T>, locale: Locale): T => value[locale] ?? value.en;

/* ------------------------------------------------------------------ */
/* Card projection: what lists, search and the Kundli need on the      */
/* client. Leaves out the long-form content to keep bundles small.     */
/* ------------------------------------------------------------------ */

export type SchemeCard = Pick<
  Scheme,
  | "slug"
  | "name"
  | "aka"
  | "shortDescription"
  | "level"
  | "state"
  | "ministry"
  | "department"
  | "categories"
  | "tags"
  | "benefitType"
  | "isDBT"
  | "value"
  | "ageRange"
  | "kundliHouse"
  | "eligibility"
  | "launchedYear"
  | "status"
>;

export function toCard(s: Scheme): SchemeCard {
  return {
    slug: s.slug,
    name: s.name,
    aka: s.aka,
    shortDescription: s.shortDescription,
    level: s.level,
    state: s.state,
    ministry: s.ministry,
    department: s.department,
    categories: s.categories,
    tags: s.tags,
    benefitType: s.benefitType,
    isDBT: s.isDBT,
    value: s.value,
    ageRange: s.ageRange,
    kundliHouse: s.kundliHouse,
    eligibility: s.eligibility,
    launchedYear: s.launchedYear,
    status: s.status,
  };
}

export const allCards = (): SchemeCard[] => SCHEMES.map(toCard);

/* ------------------------------------------------------------------ */
/* Groupings and counts                                                */
/* ------------------------------------------------------------------ */

export const schemesInCategory = (c: CategorySlug) => SCHEMES.filter((s) => s.categories.includes(c));
/** State page: the state's own schemes (central schemes apply everywhere and are shown separately) */
export const schemesInState = (st: StateSlug) => SCHEMES.filter((s) => s.state === st);
export const schemesByMinistry = (m: MinistrySlug) => SCHEMES.filter((s) => s.ministry === m);

function countBy<K extends string>(keys: K[], pick: (s: Scheme) => K[]): Record<K, number> {
  const out = Object.fromEntries(keys.map((k) => [k, 0])) as Record<K, number>;
  for (const s of SCHEMES) for (const k of pick(s)) if (k in out) out[k]++;
  return out;
}

export const categoryCounts = () => countBy(Object.keys(CATEGORIES) as CategorySlug[], (s) => s.categories);
export const stateCounts = () => countBy(Object.keys(STATES) as StateSlug[], (s) => (s.state ? [s.state] : []));
export const ministryCounts = () => countBy(Object.keys(MINISTRIES) as MinistrySlug[], (s) => (s.ministry ? [s.ministry] : []));

export function stats() {
  const central = SCHEMES.filter((s) => s.level === "central").length;
  return {
    total: SCHEMES.length,
    central,
    state: SCHEMES.length - central,
    categories: Object.values(categoryCounts()).filter((n) => n > 0).length,
    statesCovered: Object.values(stateCounts()).filter((n) => n > 0).length,
  };
}

/** Related schemes: same primary category first, then shared categories/tags, preferring the same state */
export function relatedSchemes(scheme: Scheme, limit = 3): Scheme[] {
  const score = (o: Scheme) =>
    (o.categories[0] === scheme.categories[0] ? 4 : 0) +
    o.categories.filter((c) => scheme.categories.includes(c)).length * 2 +
    o.tags.filter((t) => scheme.tags.includes(t)).length +
    (scheme.state && o.state === scheme.state ? 2 : 0) +
    (o.kundliHouse === scheme.kundliHouse ? 1 : 0);
  return SCHEMES.filter((o) => o.slug !== scheme.slug && (!o.state || !scheme.state || o.state === scheme.state))
    .map((o) => [o, score(o)] as const)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1] || a[0].name.en.localeCompare(b[0].name.en))
    .slice(0, limit)
    .map(([o]) => o);
}
