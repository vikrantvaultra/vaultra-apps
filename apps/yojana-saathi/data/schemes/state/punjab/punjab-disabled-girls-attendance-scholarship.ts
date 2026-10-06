import { all, female, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-disabled-girls-attendance-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Attendance Scholarship for Rural Girls with Disabilities (Punjab)", hi: "ग्रामीण दिव्यांग छात्राओं के लिए हाज़िरी छात्रवृत्ति (पंजाब)" },
  aka: ["Punjab disabled girls scholarship", "attendance scholarship Punjab"],
  shortDescription: {
    en: "Girls with disabilities in rural Punjab studying in government schools get ₹2,500 a year up to Class 10 and ₹3,000 a year from Class 11 onwards.",
    hi: "ग्रामीण पंजाब के सरकारी स्कूलों में पढ़ने वाली दिव्यांग छात्राओं को कक्षा 10 तक ₹2,500 सालाना और कक्षा 11 से ₹3,000 सालाना मिलते हैं।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["education", "disability", "women-child"],
  tags: ["scholarship", "disabled girls", "rural", "divyang", "school", "punjab"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2500, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("punjab"), female(), isTrue("disabled"), when("area", "eq", "rural"), isTrue("student")),

  details: {
    en: [
      "This fully state-funded scheme, running since 2005, pays an attendance scholarship to girls with disabilities in rural areas so they stay in school and become self-reliant.",
      "The money is paid by DBT into the student's bank account. The 2026-27 state gender budget lists the rates below.",
    ],
    hi: [
      "पूरी तरह राज्य के पैसे से चलने वाली यह योजना 2005 से चल रही है। इसमें ग्रामीण इलाक़ों की दिव्यांग छात्राओं को हाज़िरी छात्रवृत्ति दी जाती है, ताकि वे स्कूल में पढ़ती रहें और आत्मनिर्भर बनें।",
      "पैसा DBT से छात्रा के बैंक खाते में आता है। राज्य के 2026-27 के जेंडर बजट में नीचे दी गई दरें दर्ज हैं।",
    ],
  },
  benefits: {
    en: ["₹2,500 a year for girls up to Class 10.", "₹3,000 a year for girls in Class 11 and above."],
    hi: ["कक्षा 10 तक की छात्राओं को ₹2,500 सालाना।", "कक्षा 11 और उससे ऊपर की छात्राओं को ₹3,000 सालाना।"],
  },
  eligibilityText: {
    en: [
      "A girl with a disability living in a rural area of Punjab.",
      "Studying in a government school.",
      "Has a disability certificate and a bank account.",
    ],
    hi: [
      "पंजाब के ग्रामीण इलाक़े में रहने वाली दिव्यांग छात्रा।",
      "सरकारी स्कूल में पढ़ती हो।",
      "उसके पास दिव्यांगता प्रमाण पत्र और बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask the school head or your District Social Security Officer about the application.",
        "Submit the form with the disability certificate and the student's bank details.",
      ],
      hi: [
        "आवेदन के बारे में स्कूल के प्रमुख या ज़िला सामाजिक सुरक्षा अधिकारी से पूछें।",
        "दिव्यांगता प्रमाण पत्र और छात्रा के बैंक का ब्योरा लगाकर फ़ॉर्म जमा करें।",
      ],
    },
  },

  officialUrl: "https://sswcd.punjab.gov.in/en/wcd/state-schemes",
  sources: [
    "https://sswcd.punjab.gov.in/en/wcd/state-schemes",
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2005,
  status: "active",
};

export default scheme;
