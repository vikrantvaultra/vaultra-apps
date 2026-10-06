/**
 * The eligibility engine. Pure functions only: no I/O, no React, no locale.
 *
 * Every rule evaluates to one of three outcomes:
 *   pass    – the profile satisfies it
 *   fail    – the profile definitely does not
 *   unknown – the profile is missing the answer (or an income band straddles the cap)
 */
import { INCOME_RANGES, type IncomeRange } from "@/data/taxonomy";
import type { LeafRule, Profile, ProfileField, Rule, Scheme } from "@/lib/types";

export type Outcome = "pass" | "fail" | "unknown";

export interface Evaluation {
  rule: Rule;
  outcome: Outcome;
  children?: Evaluation[];
}

export const isLeaf = (rule: Rule): rule is LeafRule => "field" in rule;

/* ------------------------------------------------------------------ */
/* Leaves                                                              */
/* ------------------------------------------------------------------ */

function compareIncome(band: IncomeRange, op: LeafRule["op"], cap: unknown): Outcome {
  const range = INCOME_RANGES[band];
  if (!range || typeof cap !== "number") return "unknown";
  // A band is (min, max]: every income in it is > min and ≤ max
  if (op === "lte") {
    if (range.max <= cap) return "pass";
    if (range.min >= cap) return "fail";
    return "unknown";
  }
  // Income floors in scheme rules mean "above ₹X" (e.g. MIG: above ₹6 lakh), so gte is strict here
  if (op === "gte") {
    if (range.min >= cap) return "pass";
    if (range.max <= cap) return "fail";
    return "unknown";
  }
  return "unknown";
}

export function evaluateLeaf(rule: LeafRule, profile: Profile): Outcome {
  const actual = profile[rule.field];
  if (actual === undefined || actual === null) return "unknown";

  const { op, value } = rule;

  // Income is stored as a band; numeric caps are compared against the band's bounds
  if (rule.field === "income" && typeof value === "number") {
    return compareIncome(actual as IncomeRange, op, value);
  }

  switch (op) {
    case "eq":
      return actual === value ? "pass" : "fail";
    case "neq":
      return actual !== value ? "pass" : "fail";
    case "gte":
      return typeof actual === "number" && typeof value === "number" ? (actual >= value ? "pass" : "fail") : "unknown";
    case "lte":
      return typeof actual === "number" && typeof value === "number" ? (actual <= value ? "pass" : "fail") : "unknown";
    case "in":
      return Array.isArray(value) && value.includes(actual) ? "pass" : "fail";
    case "notIn":
      return Array.isArray(value) && !value.includes(actual) ? "pass" : "fail";
  }
}

/* ------------------------------------------------------------------ */
/* Trees                                                               */
/* ------------------------------------------------------------------ */

export function evaluate(rule: Rule, profile: Profile): Evaluation {
  if (isLeaf(rule)) return { rule, outcome: evaluateLeaf(rule, profile) };

  if ("all" in rule) {
    const children = rule.all.map((r) => evaluate(r, profile));
    const outcome: Outcome = children.some((c) => c.outcome === "fail")
      ? "fail"
      : children.some((c) => c.outcome === "unknown")
        ? "unknown"
        : "pass";
    return { rule, outcome, children };
  }

  if ("any" in rule) {
    const children = rule.any.map((r) => evaluate(r, profile));
    const outcome: Outcome = children.some((c) => c.outcome === "pass")
      ? "pass"
      : children.some((c) => c.outcome === "unknown")
        ? "unknown"
        : children.length === 0
          ? "pass"
          : "fail";
    return { rule, outcome, children };
  }

  const child = evaluate(rule.not, profile);
  const outcome: Outcome = child.outcome === "pass" ? "fail" : child.outcome === "fail" ? "pass" : "unknown";
  return { rule, outcome, children: [child] };
}

/** Fields whose answers would resolve the unknown parts of an evaluation */
export function missingFields(ev: Evaluation, profile: Profile): ProfileField[] {
  if (ev.outcome !== "unknown") return [];
  const out = new Set<ProfileField>();
  const walk = (e: Evaluation) => {
    if (e.outcome !== "unknown") return;
    if (isLeaf(e.rule)) {
      if (profile[e.rule.field] === undefined) out.add(e.rule.field);
      return;
    }
    e.children?.forEach(walk);
  };
  walk(ev);
  return [...out];
}

/* ------------------------------------------------------------------ */
/* Scheme-level results                                                */
/* ------------------------------------------------------------------ */

export type SchemeStatus = "eligible" | "almost" | "ineligible" | "incomplete";

export interface SchemeCheck {
  status: SchemeStatus;
  /** Every rule passes */
  eligible: boolean;
  /** Exactly one requirement fails and nothing is unknown */
  almostEligible: boolean;
  /** Top-level requirements, each shown as one ✓/✗ line */
  criteria: Evaluation[];
  failed: Evaluation[];
  missing: ProfileField[];
}

/** The top-level requirements of a scheme: the children of a root `all`, or the root itself */
function topLevel(ev: Evaluation): Evaluation[] {
  return "all" in ev.rule && !ev.rule.label && ev.children ? ev.children : [ev];
}

export function checkScheme(scheme: Pick<Scheme, "eligibility">, profile: Profile): SchemeCheck {
  const root = evaluate(scheme.eligibility, profile);
  const criteria = topLevel(root);
  const failed = criteria.filter((c) => c.outcome === "fail");
  const unknown = criteria.filter((c) => c.outcome === "unknown");

  const eligible = root.outcome === "pass";
  const almostEligible = !eligible && failed.length === 1 && unknown.length === 0;
  const status: SchemeStatus = eligible
    ? "eligible"
    : almostEligible
      ? "almost"
      : failed.length > 0
        ? "ineligible"
        : "incomplete";

  return { status, eligible, almostEligible, criteria, failed, missing: missingFields(root, profile) };
}

/** Re-runs the rules as if the person were `age` years old. Powers the Kundli timeline. */
export function eligibleAtAge(scheme: Pick<Scheme, "eligibility">, profile: Profile, age: number): boolean {
  return checkScheme(scheme, { ...profile, age }).eligible;
}

/** Every profile field a rule tree mentions (used to ask only the questions a scheme needs) */
export function fieldsUsed(rule: Rule): ProfileField[] {
  const out = new Set<ProfileField>();
  const walk = (r: Rule) => {
    if (isLeaf(r)) out.add(r.field);
    else if ("all" in r) r.all.forEach(walk);
    else if ("any" in r) r.any.forEach(walk);
    else walk(r.not);
  };
  walk(rule);
  return [...out];
}
