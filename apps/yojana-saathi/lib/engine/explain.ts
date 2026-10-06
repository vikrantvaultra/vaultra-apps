/**
 * Turns rules into plain-language lines for the ✓/✗ eligibility checklist.
 * A rule's own `label` always wins; otherwise a sentence is generated from the field and operator.
 */
import { AREAS, CASTES, EMPLOYMENT, GENDERS, MARITAL } from "@/data/profile-labels";
import { INCOME_RANGES, OCCUPATIONS, STATES } from "@/data/taxonomy";
import { formatINRShort } from "@/lib/format";
import type { LeafRule, Locale, Localized, ProfileField, Rule } from "@/lib/types";
import { isLeaf, type Evaluation } from "./evaluate";

type BoolField =
  | "minority"
  | "disabled"
  | "student"
  | "govtEmployee"
  | "bpl"
  | "taxPayer"
  | "pucca"
  | "daughterUnder10"
  | "pregnantOrLactating"
  | "planningBusiness"
  | "planningHome";

const BOOL_PHRASES: Record<BoolField, { yes: Localized; no: Localized }> = {
  minority: {
    yes: { en: "Belongs to a notified minority community", hi: "किसी अधिसूचित अल्पसंख्यक समुदाय से हों" },
    no: { en: "Does not belong to a notified minority community", hi: "अधिसूचित अल्पसंख्यक समुदाय से न हों" },
  },
  disabled: {
    yes: { en: "Is a person with disability", hi: "दिव्यांग हों" },
    no: { en: "Is not a person with disability", hi: "दिव्यांग न हों" },
  },
  student: {
    yes: { en: "Is currently a student", hi: "अभी पढ़ाई कर रहे हों" },
    no: { en: "Is not currently a student", hi: "अभी पढ़ाई न कर रहे हों" },
  },
  govtEmployee: {
    yes: { en: "Is a government employee", hi: "सरकारी कर्मचारी हों" },
    no: { en: "Is not a government employee", hi: "सरकारी कर्मचारी न हों" },
  },
  bpl: {
    yes: { en: "Family is below the poverty line (BPL)", hi: "परिवार गरीबी रेखा से नीचे (BPL) हो" },
    no: { en: "Family is not in the BPL list", hi: "परिवार BPL सूची में न हो" },
  },
  taxPayer: {
    yes: { en: "Someone in the family pays income tax", hi: "परिवार में कोई आयकर देता हो" },
    no: { en: "No one in the family pays income tax", hi: "परिवार में कोई भी आयकर न देता हो" },
  },
  pucca: {
    yes: { en: "Family owns a pucca house", hi: "परिवार के पास पक्का मकान हो" },
    no: { en: "Family does not own a pucca house", hi: "परिवार के पास पक्का मकान न हो" },
  },
  daughterUnder10: {
    yes: { en: "Has a daughter under 10 years", hi: "10 साल से कम उम्र की बेटी हो" },
    no: { en: "Has no daughter under 10 years", hi: "10 साल से कम उम्र की बेटी न हो" },
  },
  pregnantOrLactating: {
    yes: { en: "Is pregnant or breastfeeding", hi: "गर्भवती हों या शिशु को दूध पिला रही हों" },
    no: { en: "Is not pregnant or breastfeeding", hi: "गर्भवती या स्तनपान कराने वाली न हों" },
  },
  planningBusiness: {
    yes: { en: "Plans to start a business", hi: "व्यवसाय शुरू करने की योजना हो" },
    no: { en: "Has no plan to start a business", hi: "व्यवसाय शुरू करने की योजना न हो" },
  },
  planningHome: {
    yes: { en: "Plans to build or buy a house", hi: "घर बनाने या खरीदने की योजना हो" },
    no: { en: "Has no plan to build or buy a house", hi: "घर बनाने या खरीदने की योजना न हो" },
  },
};

export const FIELD_NAMES: Record<ProfileField, Localized> = {
  gender: { en: "Gender", hi: "लिंग" },
  age: { en: "Age", hi: "उम्र" },
  state: { en: "State of residence", hi: "निवास का राज्य" },
  area: { en: "Area of residence", hi: "निवास का क्षेत्र" },
  caste: { en: "Social category", hi: "सामाजिक वर्ग" },
  minority: { en: "Minority community", hi: "अल्पसंख्यक समुदाय" },
  disabled: { en: "Disability", hi: "दिव्यांगता" },
  disabilityPct: { en: "Disability percentage", hi: "दिव्यांगता प्रतिशत" },
  marital: { en: "Marital status", hi: "वैवाहिक स्थिति" },
  student: { en: "Student", hi: "विद्यार्थी" },
  employment: { en: "Employment status", hi: "रोज़गार की स्थिति" },
  occupation: { en: "Occupation", hi: "पेशा" },
  govtEmployee: { en: "Government employee", hi: "सरकारी कर्मचारी" },
  bpl: { en: "BPL status", hi: "BPL स्थिति" },
  income: { en: "Annual family income", hi: "परिवार की सालाना आय" },
  taxPayer: { en: "Income-tax payer in family", hi: "परिवार में आयकरदाता" },
  pucca: { en: "Pucca house", hi: "पक्का मकान" },
  daughterUnder10: { en: "Daughter under 10", hi: "10 साल से कम उम्र की बेटी" },
  pregnantOrLactating: { en: "Pregnant or breastfeeding", hi: "गर्भवती या स्तनपान" },
  birthYear: { en: "Year of birth", hi: "जन्म का वर्ष" },
  planningBusiness: { en: "Planning a business", hi: "व्यवसाय की योजना" },
  planningHome: { en: "Planning a house", hi: "घर की योजना" },
};

/** Human label for one enumerated answer value */
export function valueLabel(field: ProfileField, value: unknown, locale: Locale): string {
  const pick = (table: Record<string, Localized>) => table[String(value)]?.[locale] ?? String(value);
  switch (field) {
    case "gender":
      return pick(GENDERS);
    case "area":
      return pick(AREAS);
    case "caste":
      return pick(CASTES);
    case "marital":
      return pick(MARITAL);
    case "employment":
      return pick(EMPLOYMENT);
    case "occupation":
      return (OCCUPATIONS as Record<string, Localized>)[String(value)]?.[locale] ?? String(value);
    case "state":
      return (STATES as Record<string, { name: Localized }>)[String(value)]?.name[locale] ?? String(value);
    case "income":
      return (INCOME_RANGES as Record<string, { label: Localized }>)[String(value)]?.label[locale] ?? String(value);
    default:
      return String(value);
  }
}

function joinOr(items: string[], locale: Locale) {
  if (items.length <= 1) return items.join("");
  const or = locale === "hi" ? " या " : " or ";
  return `${items.slice(0, -1).join(", ")}${or}${items[items.length - 1]}`;
}

function explainLeaf(rule: LeafRule, locale: Locale): string {
  if (rule.label) return rule.label[locale];
  const { field, op, value } = rule;
  const hi = locale === "hi";

  if (field in BOOL_PHRASES && (op === "eq" || op === "neq") && typeof value === "boolean") {
    const positive = op === "eq" ? value : !value;
    const p = BOOL_PHRASES[field as BoolField];
    return (positive ? p.yes : p.no)[locale];
  }

  if (field === "income" && typeof value === "number") {
    const amt = formatINRShort(value, locale);
    if (op === "lte") return hi ? `परिवार की सालाना आय ${amt} या उससे कम हो` : `Annual family income is ${amt} or less`;
    if (op === "gte") return hi ? `परिवार की सालाना आय ${amt} से अधिक हो` : `Annual family income is above ${amt}`;
  }

  if (field === "age" && typeof value === "number") {
    if (op === "gte") return hi ? `उम्र ${value} साल या उससे अधिक हो` : `Age is ${value} or above`;
    if (op === "lte") return hi ? `उम्र ${value} साल या उससे कम हो` : `Age is ${value} or below`;
  }

  if (field === "disabilityPct" && typeof value === "number") {
    if (op === "gte") return hi ? `दिव्यांगता ${value}% या उससे अधिक हो` : `Disability is ${value}% or more`;
    if (op === "lte") return hi ? `दिव्यांगता ${value}% या उससे कम हो` : `Disability is ${value}% or less`;
  }

  const name = FIELD_NAMES[field][locale];
  const values = (Array.isArray(value) ? value : [value]).map((v) => valueLabel(field, v, locale));
  const list = joinOr(values, locale);

  if (field === "state" && (op === "eq" || op === "in")) return hi ? `${list} के निवासी हों` : `Lives in ${list}`;

  if (op === "eq" || op === "in") return hi ? `${name}: ${list}` : `${name}: ${list}`;
  if (op === "neq" || op === "notIn") return hi ? `${name}: ${list} नहीं` : `${name}: not ${list}`;
  return `${name} ${op} ${String(value)}`;
}

/** One readable line for any rule (composites join their parts) */
export function explainRule(rule: Rule, locale: Locale): string {
  if (rule.label) return rule.label[locale];
  if (isLeaf(rule)) return explainLeaf(rule, locale);
  if ("all" in rule) return rule.all.map((r) => explainRule(r, locale)).join(locale === "hi" ? " और " : " and ");
  if ("any" in rule) return joinOr(rule.any.map((r) => explainRule(r, locale)), locale);
  return (locale === "hi" ? "यह शर्त लागू न हो: " : "Not the case that: ") + explainRule(rule.not, locale);
}

/** The reason shown for "almost eligible": the one failing requirement */
export function explainFailure(ev: Evaluation, locale: Locale): string {
  return explainRule(ev.rule, locale);
}
