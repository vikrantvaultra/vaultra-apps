import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-free-electricity-300-units",
  name: { en: "300 Units Free Electricity for Homes (Punjab)", hi: "घरों के लिए 300 यूनिट मुफ़्त बिजली (पंजाब)" },
  aka: ["Punjab free bijli", "600 units free bi-monthly", "zero bill Punjab", "PSPCL free electricity"],
  shortDescription: {
    en: "Every home electricity connection in Punjab gets up to 300 units a month (600 units per two-month bill) free, including fixed charges, meter rent and government levies.",
    hi: "पंजाब में हर घरेलू बिजली कनेक्शन को हर महीने 300 यूनिट (दो महीने के बिल में 600 यूनिट) तक बिजली मुफ़्त मिलती है, फ़िक्स्ड चार्ज, मीटर किराया और सरकारी शुल्क समेत।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Power, Government of Punjab (through PSPCL)",
    hi: "बिजली विभाग, पंजाब सरकार (PSPCL के ज़रिए)",
  },
  categories: ["energy-savings", "social-welfare"],
  tags: ["free electricity", "300 units", "zero bill", "bijli", "pspcl", "punjab"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(residentOf("punjab")),

  details: {
    en: [
      "The Punjab government pays for the first 300 units a month of electricity used by every domestic connection. PSPCL bills every two months, so this works out to 600 units per bill.",
      "The rules for 2026-27 are set out in the state electricity regulator's tariff order, based on the government's decision of 4 March 2026. About 90% of domestic consumers get a zero bill.",
      "What happens above the limit depends on your category. Scheduled Caste, non-SC BPL, Backward Class and freedom fighter households pay only for the units above 600. All other households pay for their full use if they cross 600 units in a bill.",
    ],
    hi: [
      "पंजाब सरकार हर घरेलू कनेक्शन की हर महीने की पहली 300 यूनिट बिजली का पैसा भरती है। PSPCL दो महीने में बिल देता है, इसलिए यह एक बिल में 600 यूनिट होती है।",
      "2026-27 के नियम राज्य बिजली नियामक आयोग के टैरिफ़ ऑर्डर में हैं, जो सरकार के 4 मार्च 2026 के फ़ैसले पर आधारित है। लगभग 90% घरेलू उपभोक्ताओं का बिल शून्य आता है।",
      "सीमा से ज़्यादा बिजली पर क्या होगा, यह आपकी श्रेणी पर निर्भर है। अनुसूचित जाति, ग़ैर-SC BPL, पिछड़ा वर्ग और स्वतंत्रता सेनानी परिवार सिर्फ़ 600 से ऊपर की यूनिट का पैसा देते हैं। बाक़ी सभी घरों को एक बिल में 600 यूनिट पार होने पर पूरी खपत का पैसा देना होता है।",
    ],
  },
  benefits: {
    en: [
      "Up to 300 units a month (600 units per two-month bill) free.",
      "Fixed charges, meter rent and government taxes are also waived within the limit.",
      "SC, BPL, BC and freedom fighter households keep the 600 free units even if they use more.",
    ],
    hi: [
      "हर महीने 300 यूनिट (दो महीने के बिल में 600 यूनिट) तक मुफ़्त।",
      "सीमा के अंदर फ़िक्स्ड चार्ज, मीटर किराया और सरकारी टैक्स भी माफ़।",
      "SC, BPL, BC और स्वतंत्रता सेनानी परिवारों को ज़्यादा खपत पर भी 600 यूनिट मुफ़्त मिलती हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A domestic (home) electricity connection from PSPCL in Punjab.",
      "The electricity is used for residential purposes only.",
    ],
    hi: [
      "पंजाब में PSPCL का घरेलू बिजली कनेक्शन।",
      "बिजली सिर्फ़ रहने के लिए इस्तेमाल होती हो।",
    ],
  },
  exclusions: {
    en: [
      "Commercial, industrial and other non-domestic connections.",
      "General-category households lose the free units for that bill if they use more than 600 units in two months.",
    ],
    hi: [
      "व्यावसायिक, औद्योगिक और दूसरे ग़ैर-घरेलू कनेक्शन।",
      "सामान्य वर्ग के घर अगर दो महीने में 600 यूनिट से ज़्यादा इस्तेमाल करें, तो उस बिल में मुफ़्त यूनिट नहीं मिलतीं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate application is needed. The benefit is applied to your PSPCL bill automatically.",
        "If you belong to the SC, BPL, BC or freedom fighter category, contact your PSPCL sub-division office to make sure your category is recorded on your connection.",
        "Keep your use within 600 units per bill to get a zero bill.",
      ],
      hi: [
        "अलग से आवेदन की ज़रूरत नहीं। यह लाभ आपके PSPCL बिल में अपने-आप लग जाता है।",
        "अगर आप SC, BPL, BC या स्वतंत्रता सेनानी श्रेणी में आते हैं, तो PSPCL के सब-डिवीज़न दफ़्तर से संपर्क करके पक्का करें कि आपके कनेक्शन पर यह श्रेणी दर्ज हो।",
        "शून्य बिल के लिए एक बिल में खपत 600 यूनिट के अंदर रखें।",
      ],
    },
  },
  documents: {
    en: ["Your PSPCL electricity bill or account number"],
    hi: ["आपका PSPCL बिजली बिल या खाता नंबर"],
  },
  faqs: [
    {
      q: { en: "I used 650 units in two months. What will I pay?", hi: "मैंने दो महीने में 650 यूनिट ख़र्च कीं। मुझे कितना देना होगा?" },
      a: {
        en: "If your connection is in the SC, BPL, BC or freedom fighter category, you pay only for the 50 extra units plus fixed charges. Otherwise you pay for all 650 units at normal rates.",
        hi: "अगर आपका कनेक्शन SC, BPL, BC या स्वतंत्रता सेनानी श्रेणी में है, तो आप सिर्फ़ 50 अतिरिक्त यूनिट और फ़िक्स्ड चार्ज देंगे। वरना पूरी 650 यूनिट का पैसा सामान्य दर पर देना होगा।",
      },
    },
    {
      q: { en: "Do tenants get it?", hi: "क्या किराएदारों को भी मिलता है?" },
      a: {
        en: "The benefit goes to the domestic connection. If you have your own residential meter, it applies to that bill.",
        hi: "यह लाभ घरेलू कनेक्शन पर मिलता है। अगर आपके पास अपना घरेलू मीटर है, तो उसी बिल पर लागू होता है।",
      },
    },
  ],

  officialUrl: "https://pspcl.in/",
  sources: [
    "https://pserc.punjab.gov.in/pages/Chapter%206%20TO-2026-27.pdf",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
