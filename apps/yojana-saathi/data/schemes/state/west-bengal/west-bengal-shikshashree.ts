import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-shikshashree",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Shikshashree Scholarship", hi: "शिक्षाश्री छात्रवृत्ति" },
  aka: ["Shikshashree", "Sikshashree", "Shikshasree"],
  shortDescription: {
    en: "₹800 a year for SC and ST students in Classes V to VIII in West Bengal, from families earning up to ₹2.5 lakh a year, paid into the student's bank account.",
    hi: "पश्चिम बंगाल में कक्षा 5 से 8 में पढ़ने वाले SC और ST छात्रों को, जिनके परिवार की सालाना आय ₹2.5 लाख तक है, हर साल ₹800, सीधे छात्र के बैंक खाते में।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Backward Classes Welfare Department and Tribal Development Department, Government of West Bengal",
    hi: "पिछड़ा वर्ग कल्याण विभाग और आदिवासी विकास विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "sc", "st", "school", "class 5 to 8", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 800, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("west-bengal"), when("caste", "in", ["sc", "st", "pvtg"]), isTrue("student"), incomeUpTo(250_000)),

  details: {
    en: [
      "Shikshashree helps SC and ST children stay in school in the middle classes. It pays a yearly amount to cover small costs such as books and uniforms.",
      "Schools identify eligible students and submit their details online; the money goes straight into the student's bank account.",
    ],
    hi: [
      "शिक्षाश्री SC और ST बच्चों को मिडिल कक्षाओं में स्कूल में बनाए रखने में मदद करती है। इसमें किताबों और वर्दी जैसे छोटे ख़र्चों के लिए हर साल पैसा मिलता है।",
      "स्कूल पात्र छात्रों की पहचान करके उनका ब्योरा ऑनलाइन भेजते हैं; पैसा सीधे छात्र के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹800 a year for each eligible student in Classes V to VIII.", "Paid by DBT into the student's bank account."],
    hi: ["कक्षा 5 से 8 के हर पात्र छात्र को हर साल ₹800।", "पैसा DBT से छात्र के बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Permanent resident of West Bengal.",
      "Belongs to a Scheduled Caste or Scheduled Tribe.",
      "Studying in Classes V to VIII in a government, government-aided or recognised school.",
      "Family income up to ₹2.5 lakh a year.",
      "Not getting another similar scholarship, and has a bank account.",
    ],
    hi: [
      "पश्चिम बंगाल का स्थायी निवासी।",
      "अनुसूचित जाति या अनुसूचित जनजाति से हो।",
      "सरकारी, सरकारी सहायता प्राप्त या मान्यता प्राप्त स्कूल में कक्षा 5 से 8 में पढ़ रहा हो।",
      "परिवार की सालाना आय ₹2.5 लाख तक हो।",
      "कोई दूसरी ऐसी छात्रवृत्ति न ले रहा हो, और बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Tell your headmaster or headmistress that you want to apply for Shikshashree.",
        "Give the school your caste certificate, income certificate, Aadhaar and bank details.",
        "The school submits your application online; after verification the money is sent to your account.",
      ],
      hi: [
        "अपने प्रधानाध्यापक को बताएँ कि आप शिक्षाश्री के लिए आवेदन करना चाहते हैं।",
        "स्कूल को जाति प्रमाण पत्र, आय प्रमाण पत्र, आधार और बैंक का ब्योरा दें।",
        "स्कूल आपका आवेदन ऑनलाइन भेजता है; जाँच के बाद पैसा आपके खाते में आता है।",
      ],
    },
  },

  officialUrl: "https://wb.gov.in/government-schemes-details-west-bengal-shikshasree-scheme.aspx",
  sources: [
    "https://wb.gov.in/government-schemes-details-west-bengal-shikshasree-scheme.aspx",
    "https://banglarshiksha.wb.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
