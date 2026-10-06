import { all, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "taposili-bandhu",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Taposili Bandhu (SC Old Age Pension)", hi: "तपसिली बंधु (SC वृद्धावस्था पेंशन)" },
  aka: ["Taposili Bandhu", "Tapasili Bandhu", "Jai Bangla"],
  shortDescription: {
    en: "A monthly pension of ₹1,000 for Scheduled Caste people in West Bengal aged 60 or more who don't get any other government pension.",
    hi: "पश्चिम बंगाल में 60 साल या उससे ज़्यादा उम्र के अनुसूचित जाति के लोगों को, जिन्हें कोई दूसरी सरकारी पेंशन नहीं मिलती, हर महीने ₹1,000 पेंशन।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Backward Classes Welfare Department, Government of West Bengal", hi: "पिछड़ा वर्ग कल्याण विभाग, पश्चिम बंगाल सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "sc", "scheduled caste", "senior citizen", "taposili bandhu", "west bengal"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("west-bengal"), when("caste", "eq", "sc"), minAge(60)),

  details: {
    en: [
      "Taposili Bandhu gives a monthly pension to elderly people from Scheduled Caste communities in West Bengal who need financial support. It is part of the state's Jai Bangla family of pension schemes.",
      "The pension is ₹1,000 a month, paid by DBT. The 2026-27 state budget proposed raising pensions for the elderly by ₹500 a month; check with your block or municipality office whether the higher amount has started.",
    ],
    hi: [
      "तपसिली बंधु पश्चिम बंगाल में अनुसूचित जाति के ज़रूरतमंद बुज़ुर्गों को हर महीने पेंशन देती है। यह राज्य की जय बांग्ला पेंशन योजनाओं का हिस्सा है।",
      "पेंशन हर महीने ₹1,000 है, जो DBT से मिलती है। राज्य के 2026-27 के बजट में बुज़ुर्गों की पेंशन ₹500 बढ़ाने का प्रस्ताव है; बढ़ी राशि शुरू हुई या नहीं, यह अपने ब्लॉक या नगरपालिका कार्यालय से पूछें।",
    ],
  },
  benefits: {
    en: ["₹1,000 pension every month.", "Paid directly into your bank account."],
    hi: ["हर महीने ₹1,000 पेंशन।", "पैसा सीधे आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Permanent resident of West Bengal.",
      "Belongs to a Scheduled Caste.",
      "Aged 60 years or more.",
      "Not getting any other government pension.",
      "Has a bank account for DBT.",
    ],
    hi: [
      "पश्चिम बंगाल का स्थायी निवासी।",
      "अनुसूचित जाति से हो।",
      "उम्र 60 साल या उससे ज़्यादा।",
      "कोई दूसरी सरकारी पेंशन न ले रहा हो।",
      "DBT के लिए बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Collect the form from your Block Development Office (BDO) or municipality office.",
        "Fill it in and attach proof of age, SC caste certificate, residence proof and bank details.",
        "Submit it to the same office. After local verification, the pension is credited to your account.",
      ],
      hi: [
        "अपने ब्लॉक विकास कार्यालय (BDO) या नगरपालिका कार्यालय से फ़ॉर्म लें।",
        "फ़ॉर्म भरें और उम्र का सबूत, SC जाति प्रमाण पत्र, निवास का सबूत और बैंक का ब्योरा लगाएँ।",
        "उसी कार्यालय में जमा करें। स्थानीय जाँच के बाद पेंशन आपके खाते में आने लगती है।",
      ],
    },
  },
  documents: {
    en: ["Proof of age", "SC caste certificate", "Proof of residence", "Bank account details"],
    hi: ["उम्र का सबूत", "SC जाति प्रमाण पत्र", "निवास का सबूत", "बैंक खाते का ब्योरा"],
  },

  officialUrl: "https://wb.gov.in/government-schemes-details-taposili-bandhu-scheme.aspx",
  sources: [
    "https://wb.gov.in/government-schemes-details-taposili-bandhu-scheme.aspx",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
