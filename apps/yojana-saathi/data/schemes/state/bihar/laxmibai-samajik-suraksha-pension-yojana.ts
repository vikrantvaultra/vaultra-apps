import { all, female, incomeUpTo, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "laxmibai-samajik-suraksha-pension-yojana",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Laxmibai Samajik Suraksha Pension Yojana", hi: "लक्ष्मीबाई सामाजिक सुरक्षा पेंशन योजना" },
  aka: ["LBSSPY", "Bihar widow pension", "Vidhwa pension Bihar"],
  shortDescription: {
    en: "Widows in Bihar aged 18 or above from families earning up to ₹60,000 a year get a pension of ₹1,100 a month.",
    hi: "बिहार में 18 साल या उससे ज़्यादा उम्र की उन विधवाओं को, जिनके परिवार की सालाना आय ₹60,000 तक है, हर महीने ₹1,100 पेंशन मिलती है।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Social Welfare Department, Government of Bihar", hi: "समाज कल्याण विभाग, बिहार सरकार" },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "vidhwa pension", "women", "1100", "monthly pension", "bihar"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1100, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("bihar"), female(), when("marital", "eq", "widowed"), minAge(18), incomeUpTo(60_000)),

  details: {
    en: [
      "Laxmibai Samajik Suraksha Pension Yojana is Bihar's own pension for widows who are not covered by the central Indira Gandhi widow pension. The Social Welfare Department runs it through the Directorate of Social Security.",
      "Since June 2025 the pension is ₹1,100 a month, up from ₹400. It is paid by DBT into the widow's bank account.",
    ],
    hi: [
      "लक्ष्मीबाई सामाजिक सुरक्षा पेंशन योजना बिहार सरकार की अपनी विधवा पेंशन है, उन विधवाओं के लिए जिन्हें केंद्र की इंदिरा गांधी विधवा पेंशन नहीं मिलती। समाज कल्याण विभाग इसे सामाजिक सुरक्षा निदेशालय के ज़रिए चलाता है।",
      "जून 2025 से पेंशन ₹400 से बढ़कर ₹1,100 महीना हो गई है। यह DBT से विधवा के बैंक खाते में आती है।",
    ],
  },
  benefits: {
    en: ["₹1,100 every month.", "Paid by DBT straight into your bank account."],
    hi: ["हर महीने ₹1,100।", "पैसा DBT से सीधे आपके बैंक खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "A widow who is a resident of Bihar.",
      "Aged 18 years or more.",
      "Annual family income of ₹60,000 or less.",
      "Not getting the Indira Gandhi widow pension or another social security pension.",
    ],
    hi: [
      "बिहार की निवासी विधवा महिला।",
      "उम्र 18 साल या उससे ज़्यादा।",
      "परिवार की सालाना आय ₹60,000 या उससे कम।",
      "इंदिरा गांधी विधवा पेंशन या कोई दूसरी सामाजिक सुरक्षा पेंशन न मिलती हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to the RTPS counter at your block office.",
        "Fill in the widow pension form and attach your documents.",
        "After verification by the block, the pension starts in your bank account.",
      ],
      hi: [
        "अपने प्रखंड कार्यालय के RTPS काउंटर पर जाएँ।",
        "विधवा पेंशन का फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "प्रखंड की जाँच के बाद पेंशन आपके बैंक खाते में आने लगेगी।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Husband's death certificate", "Income certificate", "Proof of age", "Bank passbook", "Passport-size photograph"],
    hi: ["आधार कार्ड", "पति का मृत्यु प्रमाण पत्र", "आय प्रमाण पत्र", "उम्र का सबूत", "बैंक पासबुक", "पासपोर्ट साइज़ फ़ोटो"],
  },

  officialUrl: "https://serviceonline.bihar.gov.in/",
  sources: [
    "https://saran.nic.in/social-welfare-department/",
    "https://betastate.bihar.gov.in/SocialWelfare/",
    "https://scroll.in/latest/1083726/ahead-of-bihar-polls-cm-nitish-kumar-hikes-social-security-pension-to-rs-1100",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
