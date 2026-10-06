/**
 * The eligibility questionnaire, defined once and used by /find, the per-scheme
 * "Check eligibility" flow, and the Kundli. One question per profile field.
 */
import { AREAS, CASTES, EMPLOYMENT, GENDERS, MARITAL } from "@/data/profile-labels";
import { INCOME_RANGES, OCCUPATIONS, STATES } from "@/data/taxonomy";
import type { Localized, Profile, ProfileField } from "./types";

export interface ChoiceOption {
  value: string | boolean;
  label: Localized;
  hint?: Localized;
}

export interface Question {
  field: ProfileField;
  /** choice: big tappable cards (auto-advance); select: long searchable list; number: numeric input */
  kind: "choice" | "select" | "number";
  title: Localized;
  help?: Localized;
  options?: ChoiceOption[];
  min?: number;
  max?: number;
  /** Ask only when this returns true */
  showIf?: (p: Profile) => boolean;
  /** When skipped, the answer that follows from earlier ones (so rules can still decide) */
  inferWhenSkipped?: (p: Profile) => Profile[ProfileField] | undefined;
}

const YES_NO: ChoiceOption[] = [
  { value: true, label: { en: "Yes", hi: "हाँ" } },
  { value: false, label: { en: "No", hi: "नहीं" } },
];

const fromRecord = (rec: Record<string, Localized>): ChoiceOption[] => Object.entries(rec).map(([value, label]) => ({ value, label }));

export const QUESTIONS: Question[] = [
  {
    field: "gender",
    kind: "choice",
    title: { en: "What is your gender?", hi: "आपका लिंग क्या है?" },
    options: fromRecord(GENDERS),
  },
  {
    field: "age",
    kind: "number",
    title: { en: "How old are you?", hi: "आपकी उम्र कितनी है?" },
    help: { en: "In completed years.", hi: "पूरे हुए सालों में।" },
    min: 1,
    max: 110,
  },
  {
    field: "state",
    kind: "select",
    title: { en: "Which state or UT do you live in?", hi: "आप किस राज्य या केंद्रशासित प्रदेश में रहते हैं?" },
    options: Object.entries(STATES)
      .map(([value, s]) => ({ value, label: s.name }))
      .sort((a, b) => a.label.en.localeCompare(b.label.en)),
  },
  {
    field: "area",
    kind: "choice",
    title: { en: "Do you live in a rural or urban area?", hi: "आप ग्रामीण क्षेत्र में रहते हैं या शहरी?" },
    help: { en: "Rural means a village; urban means a town or city.", hi: "ग्रामीण यानी गाँव; शहरी यानी कस्बा या शहर।" },
    options: fromRecord(AREAS),
  },
  {
    field: "caste",
    kind: "choice",
    title: { en: "Which social category do you belong to?", hi: "आप किस सामाजिक वर्ग से हैं?" },
    help: {
      en: "Many scholarships and loans are reserved for specific categories. We never show this on anything you share.",
      hi: "कई छात्रवृत्तियाँ और ऋण कुछ खास वर्गों के लिए होते हैं। आप जो भी शेयर करें, उसमें यह कभी नहीं दिखेगा।",
    },
    options: fromRecord(CASTES),
  },
  {
    field: "minority",
    kind: "choice",
    title: { en: "Do you belong to a notified minority community?", hi: "क्या आप किसी अधिसूचित अल्पसंख्यक समुदाय से हैं?" },
    help: {
      en: "Muslim, Christian, Sikh, Buddhist, Jain or Parsi.",
      hi: "मुस्लिम, ईसाई, सिख, बौद्ध, जैन या पारसी।",
    },
    options: YES_NO,
  },
  {
    field: "disabled",
    kind: "choice",
    title: { en: "Are you a person with a disability?", hi: "क्या आप दिव्यांग हैं?" },
    options: YES_NO,
  },
  {
    field: "disabilityPct",
    kind: "number",
    title: { en: "What is your disability percentage?", hi: "आपकी दिव्यांगता कितने प्रतिशत है?" },
    help: { en: "As written on your disability certificate or UDID card.", hi: "जैसा आपके दिव्यांगता प्रमाणपत्र या UDID कार्ड पर लिखा है।" },
    min: 1,
    max: 100,
    showIf: (p) => p.disabled === true,
  },
  {
    field: "marital",
    kind: "choice",
    title: { en: "What is your marital status?", hi: "आपकी वैवाहिक स्थिति क्या है?" },
    options: fromRecord(MARITAL),
    showIf: (p) => p.age === undefined || p.age >= 15,
    inferWhenSkipped: () => "never-married",
  },
  {
    field: "student",
    kind: "choice",
    title: { en: "Are you currently studying?", hi: "क्या आप अभी पढ़ाई कर रहे हैं?" },
    help: { en: "In school, college, ITI or any course.", hi: "स्कूल, कॉलेज, ITI या किसी भी कोर्स में।" },
    options: YES_NO,
  },
  {
    field: "employment",
    kind: "choice",
    title: { en: "What best describes your work?", hi: "आपके काम के बारे में सबसे सही क्या है?" },
    options: fromRecord(EMPLOYMENT),
    showIf: (p) => p.age === undefined || p.age >= 15,
    inferWhenSkipped: () => "unemployed",
  },
  {
    field: "occupation",
    kind: "select",
    title: { en: "What is your main occupation?", hi: "आपका मुख्य पेशा क्या है?" },
    help: { en: "Pick the closest one. Choose 'None of these' if nothing fits.", hi: "सबसे करीब वाला चुनें। कुछ न मिले तो 'इनमें से कोई नहीं' चुनें।" },
    options: fromRecord(OCCUPATIONS),
    showIf: (p) => p.age === undefined || p.age >= 15,
    inferWhenSkipped: () => "none",
  },
  {
    field: "govtEmployee",
    kind: "choice",
    title: { en: "Are you (or were you) a government employee?", hi: "क्या आप सरकारी कर्मचारी हैं (या रहे हैं)?" },
    help: { en: "Central, state, PSU or local body. Retired government staff count as yes.", hi: "केंद्र, राज्य, सार्वजनिक उपक्रम या स्थानीय निकाय। सेवानिवृत्त सरकारी कर्मचारी भी 'हाँ' चुनें।" },
    options: YES_NO,
    showIf: (p) => p.employment === undefined || p.employment === "employed" || p.employment === "retired",
    inferWhenSkipped: () => false,
  },
  {
    field: "bpl",
    kind: "choice",
    title: { en: "Is your family in the BPL list?", hi: "क्या आपका परिवार BPL सूची में है?" },
    help: {
      en: "Below Poverty Line, Antyodaya (AAY) or priority-household ration card.",
      hi: "गरीबी रेखा से नीचे (BPL), अंत्योदय (AAY) या प्राथमिकता वाले परिवार का राशन कार्ड।",
    },
    options: YES_NO,
  },
  {
    field: "income",
    kind: "choice",
    title: { en: "What is your family's total yearly income?", hi: "आपके परिवार की कुल सालाना आय कितनी है?" },
    help: { en: "A rough range is enough. Include everyone who lives with you.", hi: "मोटा अंदाज़ा काफ़ी है। साथ रहने वाले सभी लोगों की आय जोड़ें।" },
    options: Object.entries(INCOME_RANGES).map(([value, r]) => ({ value, label: r.label })),
  },
  {
    field: "taxPayer",
    kind: "choice",
    title: { en: "Does anyone in your family pay income tax?", hi: "क्या आपके परिवार में कोई आयकर देता है?" },
    options: YES_NO,
    showIf: (p) => p.income === undefined || p.income !== "upto-1l",
    inferWhenSkipped: () => false,
  },
  {
    field: "pucca",
    kind: "choice",
    title: { en: "Does your family own a pucca house?", hi: "क्या आपके परिवार के पास पक्का मकान है?" },
    help: { en: "A permanent house with brick or concrete walls and roof.", hi: "ईंट या कंक्रीट की दीवारों और छत वाला पक्का घर।" },
    options: YES_NO,
  },
  {
    field: "daughterUnder10",
    kind: "choice",
    title: { en: "Do you have a daughter under 10 years old?", hi: "क्या आपकी 10 साल से कम उम्र की बेटी है?" },
    options: YES_NO,
    showIf: (p) => p.age === undefined || p.age >= 18,
    inferWhenSkipped: () => false,
  },
  {
    field: "pregnantOrLactating",
    kind: "choice",
    title: { en: "Are you pregnant or breastfeeding a baby?", hi: "क्या आप गर्भवती हैं या शिशु को दूध पिला रही हैं?" },
    options: YES_NO,
    showIf: (p) => p.gender === "female" && (p.age === undefined || (p.age >= 15 && p.age <= 55)),
    inferWhenSkipped: () => false,
  },
];

export const QUESTION_BY_FIELD = new Map(QUESTIONS.map((q) => [q.field, q]));

/** The questions to show for a profile, in order, skipping irrelevant ones */
export const visibleQuestions = (p: Profile) => QUESTIONS.filter((q) => !q.showIf || q.showIf(p));

/** Fills in answers implied by skipped questions (e.g. a man is not pregnant) */
export function withInferred(p: Profile): Profile {
  const out: Profile = { ...p };
  for (const q of QUESTIONS) {
    if (out[q.field] !== undefined || !q.showIf || q.showIf(out) || !q.inferWhenSkipped) continue;
    (out as Record<string, unknown>)[q.field] = q.inferWhenSkipped(out);
  }
  return out;
}

/** True once every visible question has an answer */
export const isComplete = (p: Profile) => visibleQuestions(p).every((q) => p[q.field] !== undefined);
