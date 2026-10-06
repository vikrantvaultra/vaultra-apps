import type { Area, BenefitType, Caste, Employment, Gender, Localized, Marital } from "@/lib/types";

/** Labels for the enumerated profile answers, shared by the questionnaire, filters and rule explanations. */

export const GENDERS: Record<Gender, Localized> = {
  male: { en: "Male", hi: "पुरुष" },
  female: { en: "Female", hi: "महिला" },
  transgender: { en: "Transgender", hi: "ट्रांसजेंडर" },
};

export const AREAS: Record<Area, Localized> = {
  urban: { en: "Urban", hi: "शहरी" },
  rural: { en: "Rural", hi: "ग्रामीण" },
};

export const CASTES: Record<Caste, Localized> = {
  general: { en: "General", hi: "सामान्य" },
  obc: { en: "OBC", hi: "अन्य पिछड़ा वर्ग (OBC)" },
  sc: { en: "SC", hi: "अनुसूचित जाति (SC)" },
  st: { en: "ST", hi: "अनुसूचित जनजाति (ST)" },
  pvtg: { en: "PVTG", hi: "विशेष रूप से कमज़ोर जनजातीय समूह (PVTG)" },
};

export const MARITAL: Record<Marital, Localized> = {
  "never-married": { en: "Never married", hi: "अविवाहित" },
  married: { en: "Married", hi: "विवाहित" },
  widowed: { en: "Widowed", hi: "विधवा / विधुर" },
  divorced: { en: "Divorced", hi: "तलाक़शुदा" },
  separated: { en: "Separated", hi: "अलग रह रहे" },
};

export const EMPLOYMENT: Record<Employment, Localized> = {
  employed: { en: "Employed (salaried)", hi: "नौकरीपेशा (वेतनभोगी)" },
  "self-employed": { en: "Self-employed", hi: "स्वरोज़गार" },
  unemployed: { en: "Not working / looking for work", hi: "काम नहीं कर रहे / काम की तलाश में" },
  retired: { en: "Retired", hi: "सेवानिवृत्त" },
};

export const BENEFIT_TYPES: Record<BenefitType, Localized> = {
  cash: { en: "Cash", hi: "नकद" },
  "in-kind": { en: "In-kind", hi: "वस्तु/सेवा के रूप में" },
  composite: { en: "Cash + in-kind", hi: "नकद + वस्तु" },
  loan: { en: "Loan", hi: "ऋण" },
  insurance: { en: "Insurance", hi: "बीमा" },
  pension: { en: "Pension", hi: "पेंशन" },
  savings: { en: "Savings", hi: "बचत" },
};
