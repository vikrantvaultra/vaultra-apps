import { AREAS, BENEFIT_TYPES, CASTES, EMPLOYMENT, GENDERS, MARITAL } from "@/data/profile-labels";
import { CATEGORIES, MINISTRIES, OCCUPATIONS, STATES } from "@/data/taxonomy";
import type { FilterKey } from "./search";
import type { Locale, Localized } from "./types";

export interface Option {
  value: string;
  label: string;
}

const fromRecord = (rec: Record<string, Localized>, locale: Locale, sort = false): Option[] => {
  const out = Object.entries(rec).map(([value, l]) => ({ value, label: l[locale] }));
  return sort ? out.sort((a, b) => a.label.localeCompare(b.label, locale)) : out;
};

const named = (rec: Record<string, { name: Localized }>) =>
  Object.fromEntries(Object.entries(rec).map(([k, v]) => [k, v.name])) as Record<string, Localized>;

/** Choices for each enumerated filter, in the given language */
export function optionsFor(key: FilterKey, locale: Locale): Option[] {
  switch (key) {
    case "state":
      return fromRecord(named(STATES), locale, true);
    case "category":
      return fromRecord(named(CATEGORIES), locale);
    case "ministry":
      return fromRecord(named(MINISTRIES), locale, true);
    case "gender":
      return fromRecord(GENDERS, locale);
    case "caste":
      return fromRecord(CASTES, locale);
    case "area":
      return fromRecord(AREAS, locale);
    case "marital":
      return fromRecord(MARITAL, locale);
    case "employment":
      return fromRecord(EMPLOYMENT, locale);
    case "occupation":
      return fromRecord(OCCUPATIONS, locale);
    case "benefit":
      return fromRecord(BENEFIT_TYPES, locale);
    default:
      return [];
  }
}

/** "Ministry of Agriculture & Farmers Welfare" → "Agriculture & Farmers Welfare" for compact labels */
export function shortOrgName(name: string): string {
  return name.replace(/^(Ministry|Department) of /, "");
}
