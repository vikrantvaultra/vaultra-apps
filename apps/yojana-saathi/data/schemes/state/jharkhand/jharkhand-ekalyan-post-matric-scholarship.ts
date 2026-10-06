import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jharkhand-ekalyan-post-matric-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Jharkhand e-Kalyan Post-Matric Scholarship (SC, ST and BC)", hi: "झारखंड ई-कल्याण पोस्ट-मैट्रिक छात्रवृत्ति (SC, ST और पिछड़ा वर्ग)" },
  aka: ["e-Kalyan scholarship", "Jharkhand post matric scholarship", "ekalyan"],
  shortDescription: {
    en: "SC, ST and Backward Class students of Jharkhand studying after Class 10, from families earning up to ₹2.5 lakh a year, get a scholarship through the e-Kalyan portal.",
    hi: "10वीं के बाद पढ़ने वाले झारखंड के SC, ST और पिछड़ा वर्ग के छात्र-छात्राओं को, जिनके परिवार की सालाना आय ₹2.5 लाख तक है, ई-कल्याण पोर्टल से छात्रवृत्ति मिलती है।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Scheduled Tribe, Scheduled Caste, Minority and Backward Class Welfare, Government of Jharkhand",
    hi: "अनुसूचित जनजाति, अनुसूचित जाति, अल्पसंख्यक एवं पिछड़ा वर्ग कल्याण विभाग, झारखंड सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "post matric", "e-kalyan", "sc st obc", "college", "jharkhand"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(residentOf("jharkhand"), isTrue("student"), when("caste", "in", ["sc", "st", "pvtg", "obc"]), incomeUpTo(250_000)),

  details: {
    en: [
      "Jharkhand pays post-matric scholarships to Scheduled Caste, Scheduled Tribe and Backward Class students for any course after Class 10, from Class 11 and ITI up to degree, professional and PhD courses. Everything is done online on the e-Kalyan portal.",
      "The amount depends on the course group and the college's rating. The state also runs pre-matric scholarships on the same portal for SC, ST and BC students in Classes 1 to 10 of government schools. The 2026-27 budget provides about ₹1,216 crore for these scholarships.",
    ],
    hi: [
      "झारखंड सरकार अनुसूचित जाति, अनुसूचित जनजाति और पिछड़ा वर्ग के छात्र-छात्राओं को 10वीं के बाद के किसी भी कोर्स के लिए पोस्ट-मैट्रिक छात्रवृत्ति देती है, 11वीं और ITI से लेकर डिग्री, प्रोफ़ेशनल और PhD तक। सारा काम ई-कल्याण पोर्टल पर ऑनलाइन होता है।",
      "राशि कोर्स के समूह और कॉलेज की रेटिंग पर निर्भर करती है। इसी पोर्टल पर सरकारी स्कूलों की कक्षा 1 से 10 के SC, ST और पिछड़ा वर्ग छात्रों के लिए प्री-मैट्रिक छात्रवृत्ति भी चलती है। 2026-27 के बजट में इन छात्रवृत्तियों के लिए लगभग ₹1,216 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "A yearly scholarship for your course, paid into your Aadhaar-linked bank account.",
      "Covers Class 11-12, ITI, polytechnic, graduate, postgraduate and professional courses.",
      "Pre-matric scholarship for Classes 1 to 10 on the same portal.",
    ],
    hi: [
      "आपके कोर्स के लिए सालाना छात्रवृत्ति, आधार से जुड़े बैंक खाते में।",
      "11वीं-12वीं, ITI, पॉलिटेक्निक, स्नातक, स्नातकोत्तर और प्रोफ़ेशनल कोर्स शामिल।",
      "इसी पोर्टल पर कक्षा 1 से 10 के लिए प्री-मैट्रिक छात्रवृत्ति।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Jharkhand belonging to a Scheduled Caste, Scheduled Tribe or Backward Class.",
      "Studying a course after Class 10 at an institution registered on the e-Kalyan portal.",
      "Parents' or guardian's total family income is up to ₹2.5 lakh a year.",
      "Not getting another scholarship or government financial help for the same studies.",
    ],
    hi: [
      "झारखंड के निवासी, जो अनुसूचित जाति, अनुसूचित जनजाति या पिछड़ा वर्ग से हों।",
      "ई-कल्याण पोर्टल पर पंजीकृत संस्थान में 10वीं के बाद का कोर्स कर रहे हों।",
      "माता-पिता या अभिभावक की कुल पारिवारिक सालाना आय ₹2.5 लाख तक हो।",
      "उसी पढ़ाई के लिए कोई दूसरी छात्रवृत्ति या सरकारी आर्थिक मदद न मिल रही हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to ekalyan.cgg.gov.in and register as a student using your Aadhaar.",
        "Fill in your academic and bank details, and upload your online residence, caste and income certificates.",
        "Submit, then make sure your college verifies the application on the portal. Help: 1800-599-1289.",
      ],
      hi: [
        "ekalyan.cgg.gov.in पर जाएँ और आधार से छात्र के रूप में रजिस्टर करें।",
        "पढ़ाई और बैंक की जानकारी भरें, और ऑनलाइन बने निवास, जाति और आय प्रमाण पत्र अपलोड करें।",
        "आवेदन जमा करें, फिर ध्यान रखें कि आपका कॉलेज पोर्टल पर उसकी जाँच कर दे। मदद: 1800-599-1289।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Residence, caste and income certificates (issued online)", "Bank account in your own name", "Previous mark sheets and admission details"],
    hi: ["आधार कार्ड", "निवास, जाति और आय प्रमाण पत्र (ऑनलाइन जारी)", "आपके अपने नाम का बैंक खाता", "पिछली मार्कशीट और दाख़िले की जानकारी"],
  },

  officialUrl: "https://ekalyan.cgg.gov.in/",
  sources: [
    "https://ekalyan.cgg.gov.in/",
    "https://ekalyan.cgg.gov.in/downloads/Post_Matric_Scholarship_sankalp_2022.pdf",
    "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
