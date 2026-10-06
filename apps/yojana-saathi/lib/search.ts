/**
 * Search & filter: URL <-> filter codec, fuzzy index, and the filtering itself.
 * Pure (no React) so it's testable and shared by /search and the browse pages.
 */
import Fuse, { type IFuseOptions } from "fuse.js";
import { AREAS, BENEFIT_TYPES, CASTES, EMPLOYMENT, GENDERS, MARITAL } from "@/data/profile-labels";
import { CATEGORIES, MINISTRIES, OCCUPATIONS, STATES, type CategorySlug, type MinistrySlug, type Occupation, type StateSlug } from "@/data/taxonomy";
import { evaluate } from "@/lib/engine/evaluate";
import type { SchemeCard } from "@/lib/schemes";
import type { Area, BenefitType, Caste, Employment, Gender, Locale, Marital, Profile } from "@/lib/types";

export type SortKey = "relevance" | "newest" | "az";

export interface Filters {
  q?: string;
  state?: StateSlug;
  level?: "central" | "state";
  category?: CategorySlug;
  ministry?: MinistrySlug;
  gender?: Gender;
  age?: number;
  caste?: Caste;
  area?: Area;
  minority?: boolean;
  disabled?: boolean;
  marital?: Marital;
  student?: boolean;
  employment?: Employment;
  occupation?: Occupation;
  bpl?: boolean;
  benefit?: BenefitType;
  dbt?: boolean;
  /** Only schemes the saved profile is eligible for (applied in the UI, which owns the profile) */
  mine?: boolean;
  sort?: SortKey;
}

export type FilterKey = Exclude<keyof Filters, "q" | "sort">;

/* ------------------------------------------------------------------ */
/* URL codec                                                           */
/* ------------------------------------------------------------------ */

const ENUMS = {
  state: Object.keys(STATES),
  level: ["central", "state"],
  category: Object.keys(CATEGORIES),
  ministry: Object.keys(MINISTRIES),
  gender: Object.keys(GENDERS),
  caste: Object.keys(CASTES),
  area: Object.keys(AREAS),
  marital: Object.keys(MARITAL),
  employment: Object.keys(EMPLOYMENT),
  occupation: Object.keys(OCCUPATIONS),
  benefit: Object.keys(BENEFIT_TYPES),
  sort: ["relevance", "newest", "az"],
} as const;

const BOOLS = ["minority", "disabled", "student", "bpl", "dbt", "mine"] as const;

/** Order of keys in URLs and in the active-chip row */
export const FILTER_ORDER: FilterKey[] = [
  "mine",
  "state",
  "level",
  "category",
  "ministry",
  "benefit",
  "dbt",
  "gender",
  "age",
  "caste",
  "area",
  "minority",
  "disabled",
  "marital",
  "student",
  "employment",
  "occupation",
  "bpl",
];

type ParamsLike = { get(name: string): string | null };

export function parseFilters(params: ParamsLike): Filters {
  const f: Filters = {};
  const q = params.get("q")?.trim();
  if (q) f.q = q.slice(0, 100);

  for (const [key, allowed] of Object.entries(ENUMS)) {
    const v = params.get(key);
    if (v && (allowed as readonly string[]).includes(v)) (f as Record<string, unknown>)[key] = v;
  }
  for (const key of BOOLS) {
    const v = params.get(key);
    if (v === "yes" || v === "no") f[key] = v === "yes";
  }
  const age = Number(params.get("age"));
  if (Number.isInteger(age) && age > 0 && age < 120) f.age = age;
  return f;
}

export function serializeFilters(f: Filters): string {
  const p = new URLSearchParams();
  if (f.q) p.set("q", f.q);
  for (const key of FILTER_ORDER) {
    const v = f[key];
    if (v === undefined) continue;
    p.set(key, typeof v === "boolean" ? (v ? "yes" : "no") : String(v));
  }
  if (f.sort && f.sort !== "relevance") p.set("sort", f.sort);
  return p.toString();
}

export const activeFilterKeys = (f: Filters, locked: Partial<Filters> = {}) =>
  FILTER_ORDER.filter((k) => f[k] !== undefined && locked[k] === undefined);

/* ------------------------------------------------------------------ */
/* Fuzzy index (both languages at once)                                */
/* ------------------------------------------------------------------ */

interface Doc {
  card: SchemeCard;
  nameEn: string;
  nameHi: string;
  aka: string;
  descEn: string;
  descHi: string;
  tags: string;
  org: string;
}

const FUSE_OPTIONS: IFuseOptions<Doc> = {
  includeScore: true,
  ignoreLocation: true,
  threshold: 0.34,
  minMatchCharLength: 2,
  keys: [
    { name: "nameEn", weight: 3 },
    { name: "nameHi", weight: 3 },
    { name: "aka", weight: 3 },
    { name: "tags", weight: 2 },
    { name: "descEn", weight: 1 },
    { name: "descHi", weight: 1 },
    { name: "org", weight: 1 },
  ],
};

export function buildIndex(cards: SchemeCard[]) {
  const docs: Doc[] = cards.map((card) => {
    const ministry = card.ministry ? MINISTRIES[card.ministry].name : undefined;
    const state = card.state ? STATES[card.state].name : undefined;
    return {
      card,
      nameEn: card.name.en,
      nameHi: card.name.hi,
      aka: (card.aka ?? []).join(" "),
      descEn: card.shortDescription.en,
      descHi: card.shortDescription.hi,
      tags: card.tags.join(" "),
      org: [ministry?.en, ministry?.hi, state?.en, state?.hi, card.department?.en, card.department?.hi].filter(Boolean).join(" "),
    };
  });
  return new Fuse(docs, FUSE_OPTIONS);
}

export type SearchIndex = ReturnType<typeof buildIndex>;

/* ------------------------------------------------------------------ */
/* Filtering                                                           */
/* ------------------------------------------------------------------ */

/** The person-describing filters, as a partial profile the rules engine understands */
export function filtersToProfile(f: Filters): Profile {
  const p: Profile = {};
  if (f.state) p.state = f.state;
  if (f.gender) p.gender = f.gender;
  if (f.age !== undefined) p.age = f.age;
  if (f.caste) p.caste = f.caste;
  if (f.area) p.area = f.area;
  if (f.minority !== undefined) p.minority = f.minority;
  if (f.disabled !== undefined) p.disabled = f.disabled;
  if (f.marital) p.marital = f.marital;
  if (f.student !== undefined) p.student = f.student;
  if (f.employment) p.employment = f.employment;
  if (f.occupation) p.occupation = f.occupation;
  if (f.bpl !== undefined) p.bpl = f.bpl;
  return p;
}

export function applyFilters(cards: SchemeCard[], f: Filters, index: SearchIndex | null, locale: Locale): SchemeCard[] {
  let list: SchemeCard[];
  if (f.q && index) list = index.search(f.q).map((r) => r.item.card);
  else list = cards;

  const partial = filtersToProfile(f);
  const describesPerson = Object.keys(partial).length > 0;

  list = list.filter((c) => {
    if (f.state && c.level === "state" && c.state !== f.state) return false;
    if (f.level && c.level !== f.level) return false;
    if (f.category && !c.categories.includes(f.category)) return false;
    if (f.ministry && c.ministry !== f.ministry) return false;
    if (f.benefit && c.benefitType !== f.benefit) return false;
    if (f.dbt !== undefined && c.isDBT !== f.dbt) return false;
    // Person filters keep schemes such a person could still qualify for (unknowns stay in)
    if (describesPerson && evaluate(c.eligibility, partial).outcome === "fail") return false;
    return true;
  });

  const sort = f.sort ?? "relevance";
  if (sort === "newest") return [...list].sort((a, b) => b.launchedYear - a.launchedYear || a.name[locale].localeCompare(b.name[locale], locale));
  if (sort === "az" || !f.q) return [...list].sort((a, b) => a.name[locale].localeCompare(b.name[locale], locale));
  return list; // relevance with a query: Fuse order
}
