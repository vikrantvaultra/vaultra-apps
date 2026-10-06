import { all, isTrue, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mizoram-old-age-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Mizoram Old Age Pension (state top-up)", hi: "मिज़ोरम वृद्धावस्था पेंशन (राज्य की अतिरिक्त राशि)" },
  aka: ["Mizoram IGNOAPS", "Old age pension Mizoram"],
  shortDescription: {
    en: "Poor elderly people in Mizoram get ₹1,200 a month from age 60 (₹1,500 from 80), as the state adds ₹1,000 to the central old age pension.",
    hi: "मिज़ोरम में ग़रीब बुज़ुर्गों को 60 साल से हर महीने ₹1,200 (80 साल से ₹1,500) मिलते हैं, क्योंकि राज्य केंद्र की वृद्धावस्था पेंशन में ₹1,000 जोड़ता है।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Directorate of Social Welfare, Social Welfare, Tribal Affairs & WCD Department, Government of Mizoram",
    hi: "समाज कल्याण निदेशालय, समाज कल्याण, जनजातीय कार्य एवं महिला-बाल विकास विभाग, मिज़ोरम सरकार",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "senior citizen", "ignoaps", "bpl", "pension", "mizoram"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1200, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("mizoram"), minAge(60), isTrue("bpl")),

  details: {
    en: [
      "Mizoram pays the central Indira Gandhi National Old Age Pension (IGNOAPS) together with its own top-up. Since 1 April 2024 the state adds ₹1,000 a month to every beneficiary.",
      "So a pensioner aged 60 to 79 gets ₹1,200 a month (₹200 central + ₹1,000 state), and one aged 80 or above gets ₹1,500 (₹500 central + ₹1,000 state). About 24,500 people receive it.",
    ],
    hi: [
      "मिज़ोरम केंद्र की इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन (IGNOAPS) के साथ अपनी तरफ़ से अतिरिक्त राशि देता है। 1 अप्रैल 2024 से राज्य हर लाभार्थी को हर महीने ₹1,000 और देता है।",
      "इसलिए 60 से 79 साल के पेंशनभोगी को हर महीने ₹1,200 (₹200 केंद्र + ₹1,000 राज्य) और 80 साल या ज़्यादा वाले को ₹1,500 (₹500 केंद्र + ₹1,000 राज्य) मिलते हैं। लगभग 24,500 लोगों को यह मिलती है।",
    ],
  },
  benefits: {
    en: [
      "₹1,200 a month at age 60 to 79, and ₹1,500 a month from age 80.",
      "This includes the state's ₹1,000 monthly top-up on the central pension.",
    ],
    hi: [
      "60 से 79 साल पर हर महीने ₹1,200, और 80 साल से हर महीने ₹1,500।",
      "इसमें केंद्र की पेंशन पर राज्य की ₹1,000 मासिक अतिरिक्त राशि शामिल है।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Mizoram aged 60 or above.",
      "From a below poverty line (BPL) household, as required by IGNOAPS.",
    ],
    hi: [
      "60 साल या ज़्यादा उम्र के मिज़ोरम निवासी।",
      "IGNOAPS की शर्त के अनुसार गरीबी रेखा से नीचे (BPL) के परिवार से।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the application form from your District Social Welfare Officer or the Social Welfare Department website.",
        "Fill it in and attach proof of age, BPL status, Aadhaar and bank details.",
        "Submit it to the District Social Welfare Officer, who verifies and forwards it for sanction.",
      ],
      hi: [
        "ज़िला समाज कल्याण अधिकारी के दफ़्तर या समाज कल्याण विभाग की वेबसाइट से आवेदन फ़ॉर्म लें।",
        "फ़ॉर्म भरें और उम्र का सबूत, BPL का सबूत, आधार और बैंक विवरण लगाएँ।",
        "ज़िला समाज कल्याण अधिकारी के पास जमा करें, जो जाँच करके मंज़ूरी के लिए आगे भेजते हैं।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.mizoram.gov.in/page/old-age-pension-old-age-home",
  sources: [
    "https://socialwelfare.mizoram.gov.in/page/old-age-pension-old-age-home",
    "https://socialwelfare.mizoram.gov.in/page/nsap",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
