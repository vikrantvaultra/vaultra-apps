import { all, female, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-acid-attack-victim-assistance",
  tier: "compact",
  name: { en: "Punjab Financial Assistance to Acid Attack Victims", hi: "पंजाब तेज़ाब हमला पीड़ित वित्तीय सहायता" },
  aka: ["acid victim pension Punjab", "acid attack survivor scheme Punjab"],
  shortDescription: {
    en: "₹8,000 a month for women in Punjab who have been left with 40% or more disability after an acid attack.",
    hi: "पंजाब की उन महिलाओं को हर महीने ₹8,000, जो तेज़ाब हमले के बाद 40% या ज़्यादा दिव्यांग हो गई हैं।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["women-child", "disability", "social-welfare"],
  tags: ["acid attack", "survivor", "women", "disability", "monthly assistance", "punjab"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 8000, period: "monthly", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("punjab"),
    female(),
    labelled(isTrue("disabled"), { en: "Left with 40% or more disability after an acid attack", hi: "तेज़ाब हमले के बाद 40% या ज़्यादा दिव्यांगता" }),
  ),

  details: {
    en: [
      "This fully state-funded scheme started in 2017 to help women who were disabled by an acid attack rebuild their lives and become self-reliant.",
      "Eligible women get ₹8,000 every month. The 2026-27 state gender budget lists the scheme with this amount.",
    ],
    hi: [
      "पूरी तरह राज्य के पैसे से चलने वाली यह योजना 2017 में शुरू हुई, ताकि तेज़ाब हमले से दिव्यांग हुई महिलाएँ फिर से अपनी ज़िंदगी खड़ी कर सकें और आत्मनिर्भर बनें।",
      "पात्र महिलाओं को हर महीने ₹8,000 मिलते हैं। राज्य के 2026-27 के जेंडर बजट में यह योजना इसी राशि के साथ दर्ज है।",
    ],
  },
  benefits: {
    en: ["₹8,000 every month."],
    hi: ["हर महीने ₹8,000।"],
  },
  eligibilityText: {
    en: [
      "A woman in Punjab who survived an acid attack.",
      "The attack has left her with a disability of 40% or more, shown by a disability certificate.",
    ],
    hi: [
      "पंजाब की वह महिला जो तेज़ाब हमले में बची है।",
      "हमले से उसे 40% या ज़्यादा दिव्यांगता हुई हो, जो दिव्यांगता प्रमाण पत्र से साबित हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your District Social Security Officer or District Programme Officer.",
        "Submit the application with your disability certificate and bank details.",
      ],
      hi: [
        "अपने ज़िला सामाजिक सुरक्षा अधिकारी या ज़िला प्रोग्राम अधिकारी से संपर्क करें।",
        "दिव्यांगता प्रमाण पत्र और बैंक का ब्योरा लगाकर आवेदन जमा करें।",
      ],
    },
  },

  officialUrl: "https://sswcd.punjab.gov.in/en/wcd/state-schemes",
  sources: [
    "https://sswcd.punjab.gov.in/en/wcd/state-schemes",
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
