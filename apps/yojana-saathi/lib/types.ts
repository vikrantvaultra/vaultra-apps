import type { CategorySlug, IncomeRange, KundliHouse, MinistrySlug, Occupation, StateSlug } from "@/data/taxonomy";

export type { CategorySlug, IncomeRange, KundliHouse, MinistrySlug, Occupation, StateSlug };

export type Locale = "en" | "hi";
export type Localized<T = string> = { en: T; hi: T };

/* ------------------------------------------------------------------ */
/* Profile: everything the questionnaire can ask. All optional:        */
/* an unanswered field is "unknown", never a guess.                    */
/* ------------------------------------------------------------------ */

export type Gender = "male" | "female" | "transgender";
export type Area = "urban" | "rural";
export type Caste = "general" | "obc" | "sc" | "st" | "pvtg";
export type Marital = "never-married" | "married" | "widowed" | "divorced" | "separated";
export type Employment = "employed" | "self-employed" | "unemployed" | "retired";

export interface Profile {
  gender?: Gender;
  age?: number;
  state?: StateSlug;
  area?: Area;
  caste?: Caste;
  minority?: boolean;
  disabled?: boolean;
  /** Only asked when disabled is true */
  disabilityPct?: number;
  marital?: Marital;
  student?: boolean;
  employment?: Employment;
  occupation?: Occupation;
  govtEmployee?: boolean;
  bpl?: boolean;
  /** A band, never an exact figure */
  income?: IncomeRange;
  /** Anyone in the family pays income tax */
  taxPayer?: boolean;
  /** Family owns a pucca (permanent) house */
  pucca?: boolean;
  daughterUnder10?: boolean;
  pregnantOrLactating?: boolean;

  /* Sarkari Kundli only */
  birthYear?: number;
  planningBusiness?: boolean;
  planningHome?: boolean;
}

export type ProfileField = keyof Profile;

/* ------------------------------------------------------------------ */
/* Eligibility rules                                                   */
/* ------------------------------------------------------------------ */

export type RuleOp = "eq" | "neq" | "gte" | "lte" | "in" | "notIn";

export interface LeafRule {
  field: ProfileField;
  op: RuleOp;
  value: unknown;
  /** Optional plain-language wording shown in the ✓/✗ checklist; otherwise generated */
  label?: Localized;
}

export type Rule =
  | LeafRule
  | { all: Rule[]; label?: Localized }
  | { any: Rule[]; label?: Localized }
  | { not: Rule; label?: Localized };

/* ------------------------------------------------------------------ */
/* Scheme                                                              */
/* ------------------------------------------------------------------ */

export type BenefitType = "cash" | "in-kind" | "composite" | "loan" | "insurance" | "pension" | "savings";

export interface SchemeValue {
  /** Rupees. Where the official benefit is a range, this is the lower bound (conservative). */
  amount: number;
  period: "one-time" | "monthly" | "yearly";
  /** cash and pension count toward the Kundli cash total; cover and loan are shown separately */
  kind: "cash" | "cover" | "loan" | "pension";
  /** For fixed-length benefits (stipends, allowances): the most months it is paid in total */
  maxMonths?: number;
}

export interface FAQ {
  q: Localized;
  a: Localized;
}

/**
 * Schemes a person can't hold together (or that a state scheme already includes, like a state pension
 * that contains the central share). The Kundli counts only the largest in a group each year.
 */
export type OverlapGroup =
  | "contributory-pension"
  | "old-age-pension"
  | "widow-pension"
  | "disability-pension"
  | "women-monthly"
  | "scholarship"
  | "health-cover"
  | "daughter-savings"
  | "maternity-cash"
  | "farmer-income"
  | "unemployment-allowance"
  | "marriage-assistance";

export interface Scheme {
  slug: string;
  /**
   * full: all eight sections. compact: summary, benefits, eligibility, how to apply, official link and
   * sources (exclusions, documents and FAQs optional). Used for long-tail state schemes.
   */
  tier?: "full" | "compact";
  overlapGroup?: OverlapGroup;
  name: Localized;
  /** Short name or acronym people search for, e.g. "PM-KISAN" */
  aka?: string[];
  shortDescription: Localized;
  level: "central" | "state";
  state?: StateSlug;
  ministry?: MinistrySlug;
  /** Implementing department, mainly for state schemes */
  department?: Localized;
  categories: CategorySlug[];
  tags: string[];
  benefitType: BenefitType;
  isDBT: boolean;
  value?: SchemeValue;
  ageRange?: { min?: number; max?: number };
  kundliHouse: KundliHouse;
  eligibility: Rule;

  details: Localized<string[]>;
  benefits: Localized<string[]>;
  eligibilityText: Localized<string[]>;
  /** Required for full-tier schemes */
  exclusions?: Localized<string[]>;
  applicationProcess: {
    online?: Localized<string[]>;
    offline?: Localized<string[]>;
  };
  /** Required for full-tier schemes */
  documents?: Localized<string[]>;
  /** Required for full-tier schemes */
  faqs?: FAQ[];

  officialUrl: string;
  sources: string[];
  /** ISO date (YYYY-MM-DD) the facts were last checked against sources */
  lastVerified: string;
  /** Year the scheme (or its current version) launched; powers "newest" sort */
  launchedYear: number;
  status: "active" | "pilot" | "check-status";
}
