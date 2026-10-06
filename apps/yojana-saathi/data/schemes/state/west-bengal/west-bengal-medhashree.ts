import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-medhashree",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Medhashree Scholarship", hi: "मेधाश्री छात्रवृत्ति" },
  aka: ["Medhashree", "Medhasree"],
  shortDescription: {
    en: "₹800 a year for OBC students in Classes V to VIII in West Bengal, from families earning up to ₹2.5 lakh a year, paid into the student's bank account.",
    hi: "पश्चिम बंगाल में कक्षा 5 से 8 में पढ़ने वाले OBC छात्रों को, जिनके परिवार की सालाना आय ₹2.5 लाख तक है, हर साल ₹800, सीधे छात्र के बैंक खाते में।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Backward Classes Welfare Department, Government of West Bengal", hi: "पिछड़ा वर्ग कल्याण विभाग, पश्चिम बंगाल सरकार" },
  categories: ["education"],
  tags: ["scholarship", "obc", "school", "class 5 to 8", "medhashree", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 800, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("west-bengal"), when("caste", "eq", "obc"), isTrue("student"), incomeUpTo(250_000)),

  details: {
    en: [
      "Medhashree is the OBC counterpart of Shikshashree. It gives OBC students in the middle classes a small yearly amount so they don't drop out of school.",
      "Schools identify eligible students and submit their details online; the money is paid by DBT into the student's bank account.",
    ],
    hi: [
      "मेधाश्री, शिक्षाश्री जैसी ही योजना है, पर OBC छात्रों के लिए। इसमें मिडिल कक्षाओं के OBC छात्रों को हर साल थोड़ी राशि मिलती है ताकि वे स्कूल न छोड़ें।",
      "स्कूल पात्र छात्रों की पहचान करके उनका ब्योरा ऑनलाइन भेजते हैं; पैसा DBT से छात्र के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹800 a year for each eligible student in Classes V to VIII.", "Paid by DBT into the student's bank account."],
    hi: ["कक्षा 5 से 8 के हर पात्र छात्र को हर साल ₹800।", "पैसा DBT से छात्र के बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Permanent resident of West Bengal.",
      "Belongs to the OBC category.",
      "Studying in Classes V to VIII in a government, government-aided or recognised school.",
      "Family income up to ₹2.5 lakh a year.",
      "Not getting another similar scholarship, and has a bank account.",
    ],
    hi: [
      "पश्चिम बंगाल का स्थायी निवासी।",
      "OBC वर्ग से हो।",
      "सरकारी, सरकारी सहायता प्राप्त या मान्यता प्राप्त स्कूल में कक्षा 5 से 8 में पढ़ रहा हो।",
      "परिवार की सालाना आय ₹2.5 लाख तक हो।",
      "कोई दूसरी ऐसी छात्रवृत्ति न ले रहा हो, और बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your headmaster or headmistress to include you for Medhashree.",
        "Give the school your OBC certificate, income certificate, Aadhaar and bank details.",
        "The school uploads your details; after verification the money is sent to your account.",
      ],
      hi: [
        "अपने प्रधानाध्यापक से मेधाश्री में नाम जोड़ने को कहें।",
        "स्कूल को OBC प्रमाण पत्र, आय प्रमाण पत्र, आधार और बैंक का ब्योरा दें।",
        "स्कूल आपका ब्योरा अपलोड करता है; जाँच के बाद पैसा आपके खाते में आता है।",
      ],
    },
  },

  officialUrl: "https://wb.gov.in/government-schemes-details-west-bengal-medhashree-scheme.aspx",
  sources: [
    "https://wb.gov.in/government-schemes-details-west-bengal-medhashree-scheme.aspx",
    "https://banglarshiksha.wb.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
