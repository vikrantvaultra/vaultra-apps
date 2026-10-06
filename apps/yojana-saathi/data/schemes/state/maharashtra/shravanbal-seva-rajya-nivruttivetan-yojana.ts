import { all, any, isTrue, labelled, incomeUpTo, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shravanbal-seva-rajya-nivruttivetan-yojana",
  tier: "full",
  overlapGroup: "old-age-pension",
  name: { en: "Shravanbal Seva Rajya Nivruttivetan Yojana", hi: "श्रावणबाळ सेवा राज्य निवृत्तिवेतन योजना" },
  aka: ["Shravanbal Yojana", "Shravan Bal Pension", "Maharashtra old age pension"],
  shortDescription: {
    en: "Elderly people in Maharashtra aged 65 or more who are BPL or have family income up to ₹21,000 a year get an old-age pension of ₹1,500 a month.",
    hi: "महाराष्ट्र में 65 साल या उससे ज़्यादा उम्र के बुज़ुर्गों को, जो BPL हैं या जिनके परिवार की सालाना आय ₹21,000 तक है, हर महीने ₹1,500 की वृद्धावस्था पेंशन मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Social Justice and Special Assistance Department (through district Collectorates), Government of Maharashtra",
    hi: "सामाजिक न्याय एवं विशेष सहायता विभाग (ज़िला कलेक्टर कार्यालयों के ज़रिए), महाराष्ट्र सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "pension", "bpl", "shravanbal", "maharashtra"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { min: 65 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("maharashtra"),
    minAge(65),
    labelled(any(isTrue("bpl"), incomeUpTo(21_000)), {
      en: "Family is BPL, or family income is up to ₹21,000 a year",
      hi: "परिवार BPL हो, या परिवार की सालाना आय ₹21,000 तक हो",
    }),
  ),

  details: {
    en: [
      "Shravanbal Seva Rajya Nivruttivetan Yojana is Maharashtra's old-age pension for poor senior citizens. It is named after Shravan, the son in the old story who looked after his aged parents.",
      "It has two groups. Group A is for seniors not on the BPL list whose family income is up to ₹21,000 a year; the state pays the full pension. Group B is for seniors from BPL families; here the central old-age pension (IGNOAPS) is paid together with the state's share.",
      "Either way, the total you get is ₹1,500 a month, paid by DBT into your bank account.",
    ],
    hi: [
      "श्रावणबाळ सेवा राज्य निवृत्तिवेतन योजना ग़रीब बुज़ुर्गों के लिए महाराष्ट्र की वृद्धावस्था पेंशन है। इसका नाम पुरानी कथा के श्रवण कुमार पर है, जिन्होंने अपने बूढ़े माता-पिता की सेवा की थी।",
      "इसके दो समूह हैं। समूह A उन बुज़ुर्गों के लिए है जो BPL सूची में नहीं हैं और जिनके परिवार की सालाना आय ₹21,000 तक है; इन्हें पूरी पेंशन राज्य देता है। समूह B, BPL परिवारों के बुज़ुर्गों के लिए है; इसमें केंद्र की वृद्धावस्था पेंशन (IGNOAPS) राज्य के हिस्से के साथ जोड़कर दी जाती है।",
      "दोनों में कुल मिलाकर हर महीने ₹1,500 मिलते हैं, जो DBT से बैंक खाते में आते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 pension every month for life.",
      "Paid directly into your Aadhaar-linked bank account.",
      "For BPL seniors, the central old-age pension is included in this amount, so you don't need to apply for it separately.",
    ],
    hi: [
      "जीवन भर हर महीने ₹1,500 की पेंशन।",
      "पैसा सीधे आधार से जुड़े बैंक खाते में।",
      "BPL बुज़ुर्गों के लिए केंद्र की वृद्धावस्था पेंशन इसी राशि में शामिल है, इसलिए अलग से आवेदन नहीं करना पड़ता।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Maharashtra.",
      "Aged 65 years or more.",
      "Either the family is on the BPL list, or the annual family income is up to ₹21,000.",
    ],
    hi: [
      "महाराष्ट्र के निवासी हों।",
      "उम्र 65 साल या उससे ज़्यादा हो।",
      "परिवार BPL सूची में हो, या परिवार की सालाना आय ₹21,000 तक हो।",
    ],
  },
  exclusions: {
    en: [
      "People under 65 (destitute people under 65 can apply for the Sanjay Gandhi Niradhar Anudan Yojana).",
      "Families not on the BPL list with income above ₹21,000 a year.",
      "People already getting a government pension from service.",
    ],
    hi: [
      "65 साल से कम उम्र के लोग (65 से कम उम्र के निराधार लोग संजय गांधी निराधार अनुदान योजना में आवेदन कर सकते हैं)।",
      "BPL सूची से बाहर वे परिवार जिनकी सालाना आय ₹21,000 से ज़्यादा है।",
      "जिन्हें पहले से सरकारी नौकरी की पेंशन मिलती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Aaple Sarkar portal (aaplesarkar.mahaonline.gov.in) and register.",
        "Choose the Shravanbal Seva Rajya Nivruttivetan Yojana service, fill the form and upload documents.",
        "Track your application online.",
      ],
      hi: [
        "आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in) पर जाएँ और रजिस्टर करें।",
        "श्रावणबाळ सेवा राज्य निवृत्तिवेतन योजना की सेवा चुनें, फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "अपने आवेदन की स्थिति ऑनलाइन देखें।",
      ],
    },
    offline: {
      en: [
        "Visit the Sanjay Gandhi Yojana branch at your tehsil office, the Talathi office or an Aaple Sarkar Seva Kendra.",
        "Fill in the form and attach your documents.",
        "Submit it and keep the receipt. The taluka committee approves the pension.",
      ],
      hi: [
        "तहसील कार्यालय की संजय गांधी योजना शाखा, तलाठी कार्यालय या आपले सरकार सेवा केंद्र पर जाएँ।",
        "फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "जमा करें और रसीद रखें। तालुका समिति पेंशन मंज़ूर करती है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Age proof (birth certificate, school leaving certificate or a medical age certificate)",
      "Proof of residence in Maharashtra",
      "BPL card, or an income certificate from the Tehsildar",
      "Bank passbook of an Aadhaar-linked account",
    ],
    hi: [
      "आधार कार्ड",
      "उम्र का प्रमाण (जन्म प्रमाण पत्र, स्कूल छोड़ने का प्रमाण पत्र या उम्र का मेडिकल प्रमाण पत्र)",
      "महाराष्ट्र में निवास का प्रमाण",
      "BPL कार्ड, या तहसीलदार का आय प्रमाण पत्र",
      "आधार से जुड़े बैंक खाते की पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "Can both husband and wife get this pension?", hi: "क्या पति और पत्नी दोनों को यह पेंशन मिल सकती है?" },
      a: {
        en: "Yes, if both are 65 or older and the family meets the BPL or income condition, each can apply.",
        hi: "हाँ, अगर दोनों 65 साल या उससे ज़्यादा उम्र के हैं और परिवार BPL या आय की शर्त पूरी करता है, तो दोनों आवेदन कर सकते हैं।",
      },
    },
    {
      q: { en: "Do I also need to apply for the central old-age pension?", hi: "क्या मुझे केंद्र की वृद्धावस्था पेंशन के लिए अलग से आवेदन करना होगा?" },
      a: {
        en: "No. In Maharashtra, BPL seniors get the central pension as part of this scheme. One application at the tehsil office covers both.",
        hi: "नहीं। महाराष्ट्र में BPL बुज़ुर्गों को केंद्र की पेंशन इसी योजना के हिस्से के रूप में मिलती है। तहसील कार्यालय में एक ही आवेदन काफ़ी है।",
      },
    },
  ],

  officialUrl: "https://aaplesarkar.mahaonline.gov.in/",
  sources: [
    "https://gadchiroli.gov.in/sanjay-gandhi-yojana/",
    "https://latur.gov.in/en/sgy/",
    "https://nashik.gov.in/scheme/shravan-bal-seva-rajya-nivruttivetan-yojana/",
    "https://nagpur.gov.in/scheme/shravan-bal-seva-rajya-nivruttivetan-yojana/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
