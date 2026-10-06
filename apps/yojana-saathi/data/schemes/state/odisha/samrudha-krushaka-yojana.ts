import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "samrudha-krushaka-yojana",
  tier: "compact",
  name: { en: "Samrudha Krushaka Yojana (Paddy at ₹3,100)", hi: "समृद्ध कृषक योजना (₹3,100 पर धान)" },
  aka: ["Samrudh Krushak Yojana", "Samruddha Krushak", "paddy 3100 Odisha", "Odisha paddy bonus"],
  shortDescription: {
    en: "Odisha buys paddy from registered farmers at ₹3,100 a quintal, more than the central MSP, with payment straight to the farmer's bank account.",
    hi: "ओडिशा पंजीकृत किसानों से धान ₹3,100 प्रति क्विंटल पर खरीदता है, जो केंद्र के MSP से ज़्यादा है; भुगतान सीधे किसान के बैंक खाते में आता है।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Agriculture and Farmers' Empowerment, with the Food Supplies and Consumer Welfare Department, Government of Odisha",
    hi: "कृषि एवं किसान सशक्तिकरण विभाग, खाद्य आपूर्ति एवं उपभोक्ता कल्याण विभाग के साथ, ओडिशा सरकार",
  },
  categories: ["agriculture"],
  tags: ["paddy", "msp", "farmer", "procurement", "3100", "odisha"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("odisha"),
    labelled(when("occupation", "in", ["farmer"]), {
      en: "You grow paddy and are registered to sell it at government procurement centres",
      hi: "आप धान उगाते हैं और सरकारी खरीद केंद्रों पर बेचने के लिए पंजीकृत हैं",
    }),
  ),

  details: {
    en: [
      "Samrudha Krushaka Yojana is the Odisha government's promise of a fair paddy price. Since 2024 the state has bought paddy from farmers at ₹3,100 per quintal, higher than the central minimum support price (MSP), with added state input support.",
      "Payment goes directly into the farmer's bank account; the government aims to pay within 48 hours of purchase for farmers who choose DBT. The 2026-27 budget provides ₹6,088 crore for the scheme and a ₹5,000 crore revolving fund so payments are not delayed.",
    ],
    hi: [
      "समृद्ध कृषक योजना ओडिशा सरकार का धान के सही दाम का वादा है। 2024 से राज्य किसानों से धान ₹3,100 प्रति क्विंटल पर खरीदता है, जो केंद्र के न्यूनतम समर्थन मूल्य (MSP) से ज़्यादा है, साथ में राज्य की इनपुट सहायता भी।",
      "पैसा सीधे किसान के बैंक खाते में जाता है; DBT चुनने वाले किसानों को खरीद के 48 घंटे के अंदर भुगतान का लक्ष्य है। 2026-27 के बजट में इस योजना के लिए ₹6,088 करोड़ और भुगतान में देरी न हो इसके लिए ₹5,000 करोड़ का रिवॉल्विंग फ़ंड रखा गया है।",
    ],
  },
  benefits: {
    en: [
      "₹3,100 per quintal for paddy sold at government procurement centres (MSP plus state input assistance).",
      "Payment by DBT into your bank account, targeted within 48 hours of purchase.",
    ],
    hi: [
      "सरकारी खरीद केंद्रों पर बेचे गए धान के लिए ₹3,100 प्रति क्विंटल (MSP और राज्य की इनपुट सहायता मिलाकर)।",
      "DBT से आपके बैंक खाते में भुगतान, खरीद के 48 घंटे के अंदर का लक्ष्य।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a paddy farmer in Odisha.",
      "You register as a paddy seller for the season and sell your paddy at a government procurement centre (mandi).",
    ],
    hi: [
      "आप ओडिशा के धान किसान हैं।",
      "आप सीज़न के लिए धान विक्रेता के रूप में पंजीकरण कराते हैं और सरकारी खरीद केंद्र (मंडी) पर धान बेचते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register as a paddy seller when farmer registration opens for the season; ask at your PACS / LAMPCS or block agriculture office.",
        "Keep your land records, Aadhaar and bank details ready, and choose DBT payment.",
        "Sell paddy at the procurement centre on your allotted date; payment comes to your bank account.",
      ],
      hi: [
        "सीज़न में किसान पंजीकरण खुलने पर धान विक्रेता के रूप में पंजीकरण कराएँ; अपनी PACS / LAMPCS या ब्लॉक कृषि कार्यालय में पूछें।",
        "ज़मीन के कागज़, आधार और बैंक की जानकारी तैयार रखें, और DBT भुगतान चुनें।",
        "अपनी तय तारीख पर खरीद केंद्र पर धान बेचें; पैसा आपके बैंक खाते में आता है।",
      ],
    },
  },

  officialUrl: "https://foododisha.in/",
  sources: [
    "https://finance.odisha.gov.in/sites/default/files/2025-08/02-BUDGET_SPEECH_ENGLISH-PART-1.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2024-07/02-BUDGET_SPEECH_ENGLISH-PART-1.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
