/**
 * Typed helpers for writing eligibility rules in scheme files.
 * Misspelt fields, states, castes or occupations fail type-checking.
 */
import type { IncomeRange, Localized, Profile, ProfileField, Rule, LeafRule, StateSlug } from "@/lib/types";

type Val<F extends ProfileField> = NonNullable<Profile[F]>;
type NumericField = "age" | "disabilityPct" | "birthYear";

export function when<F extends ProfileField>(field: F, op: "eq" | "neq", value: Val<F>, label?: Localized): LeafRule;
export function when<F extends ProfileField>(field: F, op: "in" | "notIn", value: Val<F>[], label?: Localized): LeafRule;
export function when(field: NumericField, op: "gte" | "lte", value: number, label?: Localized): LeafRule;
export function when(field: ProfileField, op: LeafRule["op"], value: unknown, label?: Localized): LeafRule {
  return label ? { field, op, value, label } : { field, op, value };
}

export const all = (...rules: Rule[]): Rule => ({ all: rules });
export const any = (...rules: Rule[]): Rule => ({ any: rules });
export const not = (rule: Rule): Rule => ({ not: rule });
/** Attach plain-language wording to any rule (shown in the ✓/✗ checklist) */
export const labelled = <R extends Rule>(rule: R, label: Localized): R => ({ ...rule, label });

/* Shorthands for the most common conditions -------------------------- */

export const minAge = (n: number) => when("age", "gte", n);
export const maxAge = (n: number) => when("age", "lte", n);
/** Two separate leaves, so the checklist can say which side failed */
export const ageBetween = (min: number, max: number): Rule[] => [minAge(min), maxAge(max)];

export const residentOf = (state: StateSlug) => when("state", "eq", state);
export const female = () => when("gender", "eq", "female");

/** Annual family income at or below a rupee cap (compared against the user's income band) */
export const incomeUpTo = (rupees: number): LeafRule => ({ field: "income", op: "lte", value: rupees });
export const incomeIn = (ranges: IncomeRange[]) => when("income", "in", ranges);

export const notTaxPayer = () => when("taxPayer", "eq", false);
export const notGovtEmployee = () => when("govtEmployee", "eq", false);
export const isTrue = (field: "student" | "disabled" | "minority" | "bpl" | "daughterUnder10" | "pregnantOrLactating" | "govtEmployee" | "taxPayer" | "pucca") =>
  when(field, "eq", true);
export const isFalse = (field: "student" | "disabled" | "minority" | "bpl" | "daughterUnder10" | "pregnantOrLactating" | "govtEmployee" | "taxPayer" | "pucca") =>
  when(field, "eq", false);

/** No conditions at all (open to every resident) */
export const everyone = (): Rule => ({ all: [] });
