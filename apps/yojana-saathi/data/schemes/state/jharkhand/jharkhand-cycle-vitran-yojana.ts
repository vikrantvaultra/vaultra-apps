import { all, any, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jharkhand-cycle-vitran-yojana",
  tier: "compact",
  name: { en: "Jharkhand Cycle Vitran Yojana (Class 8 students)", hi: "झारखंड साइकिल वितरण योजना (कक्षा 8 के छात्र-छात्राएँ)" },
  aka: ["Jharkhand free cycle", "Jharkhand bicycle scheme", "cycle yojana Jharkhand"],
  shortDescription: {
    en: "SC, ST, minority and Backward Class students in Class 8 of Jharkhand government schools get a bicycle, so they keep going to school.",
    hi: "झारखंड के सरकारी स्कूलों में कक्षा 8 में पढ़ने वाले SC, ST, अल्पसंख्यक और पिछड़ा वर्ग के छात्र-छात्राओं को साइकिल मिलती है, ताकि वे स्कूल जाते रहें।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Scheduled Tribe, Scheduled Caste, Minority and Backward Class Welfare, Government of Jharkhand",
    hi: "अनुसूचित जनजाति, अनुसूचित जाति, अल्पसंख्यक एवं पिछड़ा वर्ग कल्याण विभाग, झारखंड सरकार",
  },
  categories: ["education"],
  tags: ["bicycle", "cycle", "free cycle", "class 8", "school", "jharkhand"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("jharkhand"),
    isTrue("student"),
    labelled(any(when("caste", "in", ["sc", "st", "pvtg", "obc"]), isTrue("minority")), {
      en: "Belongs to SC, ST, Backward Class or a minority community",
      hi: "SC, ST, पिछड़ा वर्ग या अल्पसंख्यक समुदाय से हों",
    }),
  ),

  details: {
    en: [
      "To cut school dropouts, the Jharkhand Welfare Department gives bicycles to Scheduled Caste, Scheduled Tribe, minority and Backward Class students studying in Class 8 in government schools.",
      "The 2026-27 budget provides ₹136 crore for the scheme. The distribution schedule is set each year by the department.",
    ],
    hi: [
      "स्कूल छोड़ने वाले बच्चों की संख्या घटाने के लिए झारखंड का कल्याण विभाग सरकारी स्कूलों की कक्षा 8 में पढ़ने वाले अनुसूचित जाति, अनुसूचित जनजाति, अल्पसंख्यक और पिछड़ा वर्ग के छात्र-छात्राओं को साइकिल देता है।",
      "2026-27 के बजट में इसके लिए ₹136 करोड़ रखे गए हैं। वितरण का समय विभाग हर साल तय करता है।",
    ],
  },
  benefits: {
    en: ["A bicycle for the trip to school.", "Given once, in Class 8."],
    hi: ["स्कूल आने-जाने के लिए साइकिल।", "एक बार, कक्षा 8 में।"],
  },
  eligibilityText: {
    en: [
      "Studying in Class 8 in a government school in Jharkhand.",
      "Belongs to a Scheduled Caste, Scheduled Tribe, Backward Class or minority community.",
    ],
    hi: ["झारखंड के किसी सरकारी स्कूल में कक्षा 8 में पढ़ रहे हों।", "अनुसूचित जाति, अनुसूचित जनजाति, पिछड़ा वर्ग या अल्पसंख्यक समुदाय से हों।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "You don't apply on your own. Your school sends the list of eligible Class 8 students to the district welfare office.",
        "Make sure your school has your correct caste details and Aadhaar.",
      ],
      hi: [
        "आपको ख़ुद आवेदन नहीं करना है। आपका स्कूल कक्षा 8 के पात्र छात्रों की सूची ज़िला कल्याण कार्यालय को भेजता है।",
        "ध्यान रखें कि स्कूल के पास आपकी सही जाति और आधार की जानकारी हो।",
      ],
    },
  },

  officialUrl: "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
  sources: ["https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf", "https://cm.jharkhand.gov.in/node/15921"],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "check-status",
};

export default scheme;
