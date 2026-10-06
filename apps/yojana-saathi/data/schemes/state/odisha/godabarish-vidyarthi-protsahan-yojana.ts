import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "godabarish-vidyarthi-protsahan-yojana",
  tier: "compact",
  name: { en: "Godabarish Vidyarthi Protsahan Yojana (Laptop Assistance)", hi: "गोदाबरीश विद्यार्थी प्रोत्साहन योजना (लैपटॉप सहायता)" },
  aka: ["Odisha laptop scheme", "Laptop DBT Odisha", "Godabarisha laptop yojana", "free laptop Odisha"],
  shortDescription: {
    en: "15,000 top-performing students who pass +2 in Odisha each get ₹30,000 by DBT to buy a laptop.",
    hi: "ओडिशा में +2 पास करने वाले 15,000 सबसे अच्छे अंक पाने वाले विद्यार्थियों को लैपटॉप खरीदने के लिए DBT से ₹30,000-₹30,000।",
  },
  level: "state",
  state: "odisha",
  department: { en: "Higher Education Department, Government of Odisha", hi: "उच्च शिक्षा विभाग, ओडिशा सरकार" },
  categories: ["education"],
  tags: ["laptop", "free laptop", "+2", "class 12", "merit", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 30000, period: "one-time", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    labelled(isTrue("student"), {
      en: "You have just passed +2 (Class 12) and are among the top-ranked students",
      hi: "आपने अभी +2 (कक्षा 12) पास की है और आप सबसे ऊँची रैंक वाले विद्यार्थियों में हैं",
    }),
  ),

  details: {
    en: [
      "Odisha gives meritorious students who pass the +2 (Class 12) exam money to buy a laptop for higher studies. Under the current government the scheme is called the Godabarish Vidyarthi Protsahan Yojana.",
      "The 2026-27 budget supports 15,000 students completing +2, each getting ₹30,000 for a laptop. The money is paid by DBT, and students are selected on merit from the +2 results.",
    ],
    hi: [
      "ओडिशा +2 (कक्षा 12) परीक्षा पास करने वाले मेधावी विद्यार्थियों को आगे की पढ़ाई के लिए लैपटॉप खरीदने के पैसे देता है। मौजूदा सरकार में इस योजना का नाम गोदाबरीश विद्यार्थी प्रोत्साहन योजना है।",
      "2026-27 के बजट में +2 पूरी करने वाले 15,000 विद्यार्थियों के लिए प्रावधान है, हर एक को लैपटॉप के लिए ₹30,000। पैसा DBT से मिलता है, और विद्यार्थियों का चयन +2 के नतीजों में मेरिट से होता है।",
    ],
  },
  benefits: {
    en: ["₹30,000 one time to buy a laptop.", "Paid by DBT into your Aadhaar-linked bank account."],
    hi: ["लैपटॉप खरीदने के लिए एक बार ₹30,000।", "DBT से आपके आधार से जुड़े बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "You have passed the +2 exam in Odisha in the relevant year.",
      "You are among the 15,000 top-ranked students selected on merit.",
      "You have Aadhaar and a bank account linked to it.",
    ],
    hi: [
      "आपने उस साल ओडिशा में +2 परीक्षा पास की है।",
      "आप मेरिट पर चुने गए 15,000 सबसे ऊँची रैंक वाले विद्यार्थियों में हैं।",
      "आपके पास आधार और उससे जुड़ा बैंक खाता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch for the Higher Education Department's notice and merit list after the +2 results.",
        "If you are on the list, apply on the State Scholarship Portal (scholarship.odisha.gov.in) for the laptop assistance with your Aadhaar and bank details.",
        "Make sure your bank account is linked to Aadhaar so the DBT payment does not fail.",
      ],
      hi: [
        "+2 के नतीजों के बाद उच्च शिक्षा विभाग की सूचना और मेरिट सूची देखें।",
        "सूची में नाम हो तो राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) पर आधार और बैंक की जानकारी के साथ लैपटॉप सहायता के लिए आवेदन करें।",
        "ध्यान रखें कि बैंक खाता आधार से जुड़ा हो, ताकि DBT भुगतान अटके नहीं।",
      ],
    },
  },

  officialUrl: "https://dhe.odisha.gov.in/en/schemes-&-scholarship/laptop-distribution/guidelines-circulars",
  sources: [
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2024-07/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://dhe.odisha.gov.in/en/schemes-&-scholarship/laptop-distribution/guidelines-circulars",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
