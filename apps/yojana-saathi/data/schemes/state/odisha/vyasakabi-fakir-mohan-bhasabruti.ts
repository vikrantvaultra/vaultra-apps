import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vyasakabi-fakir-mohan-bhasabruti",
  tier: "compact",
  name: { en: "Vyasakabi Fakir Mohan Bhasabruti (Odia Language Scholarship)", hi: "व्यासकवि फ़कीर मोहन भाषाबृत्ति (ओड़िया भाषा छात्रवृत्ति)" },
  aka: ["VFMB", "Fakir Mohan scholarship", "Odia honours scholarship", "Bhasabruti"],
  shortDescription: {
    en: "Odisha students studying Odia get ₹20,000 for +3 Odia Honours and ₹30,000 for an Odia PG course, on top of any other scholarship.",
    hi: "ओड़िया पढ़ने वाले ओडिशा के विद्यार्थियों को +3 ओड़िया ऑनर्स के लिए ₹20,000 और ओड़िया PG के लिए ₹30,000, किसी भी दूसरी छात्रवृत्ति के अलावा।",
  },
  level: "state",
  state: "odisha",
  department: { en: "Higher Education Department, Government of Odisha", hi: "उच्च शिक्षा विभाग, ओडिशा सरकार" },
  categories: ["education"],
  tags: ["scholarship", "odia", "honours", "language", "college", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 20000, period: "one-time", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    labelled(isTrue("student"), {
      en: "You are studying +3 Arts with Odia Honours, or MA in Odia",
      hi: "आप +3 आर्ट्स में ओड़िया ऑनर्स या ओड़िया में MA पढ़ रहे हैं",
    }),
  ),

  details: {
    en: [
      "This scholarship encourages good students to take up higher studies in the Odia language. It is run by the Higher Education Department as part of the Mukhyamantri Medhabi Chhatra Protsahan Yojana.",
      "The 2026-27 budget sets the award at ₹20,000 per student for +3 Odia Honours and ₹30,000 per student at the Odia postgraduate level. Under the guidelines, 1,200 UG and 300 PG students are chosen on merit each year, and it can be taken over and above any other scholarship.",
    ],
    hi: [
      "यह छात्रवृत्ति अच्छे विद्यार्थियों को ओड़िया भाषा में उच्च शिक्षा लेने के लिए प्रोत्साहित करती है। इसे उच्च शिक्षा विभाग मुख्यमंत्री मेधावी छात्र प्रोत्साहन योजना के हिस्से के रूप में चलाता है।",
      "2026-27 के बजट में +3 ओड़िया ऑनर्स के लिए ₹20,000 और ओड़िया PG स्तर के लिए ₹30,000 प्रति विद्यार्थी तय किए गए हैं। गाइडलाइन के अनुसार हर साल 1,200 UG और 300 PG विद्यार्थी मेरिट पर चुने जाते हैं, और यह किसी भी दूसरी छात्रवृत्ति के अलावा मिलती है।",
    ],
  },
  benefits: {
    en: ["₹20,000 per student for +3 Odia Honours.", "₹30,000 per student for MA in Odia.", "Can be received along with other scholarships."],
    hi: ["+3 ओड़िया ऑनर्स के लिए प्रति विद्यार्थी ₹20,000।", "ओड़िया में MA के लिए प्रति विद्यार्थी ₹30,000।", "दूसरी छात्रवृत्तियों के साथ भी मिल सकती है।"],
  },
  eligibilityText: {
    en: [
      "You are a permanent resident of Odisha.",
      "UG: you are in +3 Arts with Odia Honours (in Odisha or outside) and scored at least 60% in the CHSE +2 exam.",
      "PG: you are in MA (Odia) and scored at least 60% in Odia Honours in your +3 course.",
      "Selection is by merit; distance and correspondence students are not eligible.",
    ],
    hi: [
      "आप ओडिशा के स्थायी निवासी हैं।",
      "UG: आप +3 आर्ट्स में ओड़िया ऑनर्स (ओडिशा में या बाहर) पढ़ रहे हैं और CHSE +2 परीक्षा में कम से कम 60% अंक पाए हैं।",
      "PG: आप MA (ओड़िया) में हैं और +3 में ओड़िया ऑनर्स में कम से कम 60% अंक पाए हैं।",
      "चयन मेरिट से होता है; दूरस्थ और पत्राचार कोर्स के विद्यार्थी पात्र नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the State Scholarship Portal (scholarship.odisha.gov.in) under Vyasakabi Fakir Mohan Bhasabruti.",
        "Upload your mark sheets, resident certificate, college ID and bank details.",
        "Your college verifies the application and the department selects students on merit.",
      ],
      hi: [
        "राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) पर व्यासकवि फ़कीर मोहन भाषाबृत्ति में आवेदन करें।",
        "अंकतालिकाएँ, निवास प्रमाण पत्र, कॉलेज ID और बैंक की जानकारी अपलोड करें।",
        "आपका कॉलेज आवेदन जाँचता है और विभाग मेरिट पर विद्यार्थियों को चुनता है।",
      ],
    },
  },

  officialUrl: "https://scholarship.odisha.gov.in/",
  sources: [
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://dhe.odisha.gov.in/sites/default/files/2024-10/Guidelines%20for%20scholarship%20under%20Mukhyamantri%20medhabi%20chhatra%20protsahan%20yojana%20for%20the%20AY%202023-24.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
