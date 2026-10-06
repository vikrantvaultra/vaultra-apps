import { all, female, isTrue, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mizoram-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Mizoram Widow Pension (state top-up)", hi: "मिज़ोरम विधवा पेंशन (राज्य की अतिरिक्त राशि)" },
  aka: ["Mizoram IGNWPS", "Widow pension Mizoram"],
  shortDescription: {
    en: "Poor widows in Mizoram aged 40 and above get ₹1,300 a month (₹1,500 from 80), as the state adds ₹1,000 to the central widow pension.",
    hi: "मिज़ोरम में 40 साल या ज़्यादा उम्र की ग़रीब विधवाओं को हर महीने ₹1,300 (80 साल से ₹1,500) मिलते हैं, क्योंकि राज्य केंद्र की विधवा पेंशन में ₹1,000 जोड़ता है।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Directorate of Social Welfare, Social Welfare, Tribal Affairs & WCD Department, Government of Mizoram",
    hi: "समाज कल्याण निदेशालय, समाज कल्याण, जनजातीय कार्य एवं महिला-बाल विकास विभाग, मिज़ोरम सरकार",
  },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow pension", "ignwps", "bpl", "women", "pension", "mizoram"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1300, period: "monthly", kind: "pension" },
  ageRange: { min: 40 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("mizoram"), female(), when("marital", "eq", "widowed"), minAge(40), isTrue("bpl")),

  details: {
    en: [
      "Mizoram pays the central Indira Gandhi National Widow Pension (IGNWPS) together with a state top-up of ₹1,000 a month.",
      "A widow aged 40 to 79 gets ₹1,300 a month (₹300 central + ₹1,000 state). From age 80 the total is ₹1,500 (₹500 central + ₹1,000 state).",
    ],
    hi: [
      "मिज़ोरम केंद्र की इंदिरा गांधी राष्ट्रीय विधवा पेंशन (IGNWPS) के साथ राज्य की ओर से हर महीने ₹1,000 और देता है।",
      "40 से 79 साल की विधवा को हर महीने ₹1,300 (₹300 केंद्र + ₹1,000 राज्य) मिलते हैं। 80 साल से कुल ₹1,500 (₹500 केंद्र + ₹1,000 राज्य) मिलते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1,300 a month at age 40 to 79, and ₹1,500 a month from age 80.",
      "This includes the state's ₹1,000 monthly top-up.",
    ],
    hi: [
      "40 से 79 साल पर हर महीने ₹1,300, और 80 साल से हर महीने ₹1,500।",
      "इसमें राज्य की ₹1,000 मासिक अतिरिक्त राशि शामिल है।",
    ],
  },
  eligibilityText: {
    en: [
      "A widow living in Mizoram, aged 40 or above.",
      "From a below poverty line (BPL) household, as required by IGNWPS.",
    ],
    hi: [
      "मिज़ोरम में रहने वाली विधवा, उम्र 40 साल या ज़्यादा।",
      "IGNWPS की शर्त के अनुसार गरीबी रेखा से नीचे (BPL) के परिवार से।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the application form from your District Social Welfare Officer or the Social Welfare Department website.",
        "Attach your husband's death certificate, age proof, BPL proof, Aadhaar and bank details.",
        "Submit it to the District Social Welfare Officer for verification and sanction.",
      ],
      hi: [
        "ज़िला समाज कल्याण अधिकारी के दफ़्तर या समाज कल्याण विभाग की वेबसाइट से आवेदन फ़ॉर्म लें।",
        "पति का मृत्यु प्रमाण पत्र, उम्र का सबूत, BPL का सबूत, आधार और बैंक विवरण लगाएँ।",
        "जाँच और मंज़ूरी के लिए ज़िला समाज कल्याण अधिकारी के पास जमा करें।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.mizoram.gov.in/page/ignwp-scheme",
  sources: [
    "https://socialwelfare.mizoram.gov.in/page/ignwp-scheme",
    "https://socialwelfare.mizoram.gov.in/page/old-age-pension-old-age-home",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
