import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-disability-marriage-incentive",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: {
    en: "Incentive for Marriage Between a Differently Abled Person and a Non-Disabled Person (Puducherry)",
    hi: "दिव्यांग और गैर-दिव्यांग व्यक्ति के बीच विवाह पर प्रोत्साहन (पुडुचेरी)",
  },
  aka: ["Puducherry disability marriage incentive"],
  shortDescription: {
    en: "When a person with 40% or more disability marries a non-disabled person in Puducherry, the couple gets ₹1.5 lakh: ₹30,000 in cash and ₹1.2 lakh in National Savings Certificates.",
    hi: "पुडुचेरी में जब 40% या ज़्यादा दिव्यांगता वाला व्यक्ति किसी गैर-दिव्यांग व्यक्ति से शादी करता है, तो जोड़े को ₹1.5 लाख मिलते हैं: ₹30,000 नकद और ₹1.2 लाख राष्ट्रीय बचत पत्र (NSC) में।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Directorate of Social Welfare, Government of Puducherry",
    hi: "समाज कल्याण निदेशालय, पुडुचेरी सरकार",
  },
  categories: ["disability", "social-welfare"],
  tags: ["marriage", "disability", "differently abled", "incentive", "nsc", "puducherry"],
  benefitType: "composite",
  isDBT: false,
  value: { amount: 150000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("puducherry"), labelled(incomeUpTo(75_000), { en: "Annual income up to ₹75,000", hi: "सालाना आय ₹75,000 तक" })),

  details: {
    en: [
      "This Puducherry Social Welfare scheme encourages marriages between persons with disabilities and non-disabled persons. The couple receives ₹1,50,000: ₹30,000 in cash and ₹1,20,000 as National Savings Certificates.",
    ],
    hi: [
      "पुडुचेरी समाज कल्याण विभाग की यह योजना दिव्यांग और गैर-दिव्यांग व्यक्तियों के बीच शादी को बढ़ावा देती है। जोड़े को ₹1,50,000 मिलते हैं: ₹30,000 नकद और ₹1,20,000 राष्ट्रीय बचत पत्र के रूप में।",
    ],
  },
  benefits: {
    en: ["₹30,000 in cash.", "₹1,20,000 in National Savings Certificates (NSC)."],
    hi: ["₹30,000 नकद।", "₹1,20,000 राष्ट्रीय बचत पत्र (NSC) में।"],
  },
  eligibilityText: {
    en: [
      "One spouse has a disability of 40% or more; the bride is above 18 and the groom above 21.",
      "Annual income not more than ₹75,000.",
      "It must be the first marriage, and the marriage must be registered.",
      "Residents of Puducherry; apply within 120 days of the marriage.",
    ],
    hi: [
      "एक जीवनसाथी की दिव्यांगता 40% या ज़्यादा हो; दुल्हन 18 साल से और दूल्हा 21 साल से ऊपर हो।",
      "सालाना आय ₹75,000 से ज़्यादा न हो।",
      "यह पहली शादी हो और शादी पंजीकृत हो।",
      "पुडुचेरी के निवासी हों; शादी के 120 दिन के भीतर आवेदन करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register your marriage, then get the form from the Social Welfare Department website ('Differently Abled Persons - Download Forms') or its office.",
        "Submit it within 120 days of the marriage with the marriage registration, disability, income and residence certificates.",
      ],
      hi: [
        "शादी पंजीकृत कराएँ, फिर समाज कल्याण विभाग की वेबसाइट ('Differently Abled Persons - Download Forms') या दफ़्तर से फ़ॉर्म लें।",
        "शादी के 120 दिन के भीतर विवाह पंजीकरण, दिव्यांगता, आय और निवास प्रमाण पत्र के साथ जमा करें।",
      ],
    },
  },

  officialUrl: "https://socwelfare.py.gov.in/grant-incentive-marriage-between-differently-abled-person-and-normal-persons",
  sources: ["https://socwelfare.py.gov.in/grant-incentive-marriage-between-differently-abled-person-and-normal-persons"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
