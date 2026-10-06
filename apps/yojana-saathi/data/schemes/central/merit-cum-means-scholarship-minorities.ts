import { all, incomeUpTo, isTrue, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "merit-cum-means-scholarship-minorities",
  name: { en: "Merit-cum-Means Scholarship for Minorities", hi: "अल्पसंख्यकों के लिए मेरिट-कम-मीन्स छात्रवृत्ति" },
  aka: ["MCM scholarship", "Merit cum Means minority", "MoMA MCM"],
  shortDescription: {
    en: "Scholarship for minority students in technical and professional degree courses, with family income up to ₹2.5 lakh a year. Payments have been frozen since 2022-23 and its budget is now a token amount.",
    hi: "तकनीकी और प्रोफ़ेशनल डिग्री कोर्स के अल्पसंख्यक छात्रों के लिए छात्रवृत्ति, परिवार की आय ₹2.5 लाख सालाना तक। 2022-23 से भुगतान रुका है और अब इसका बजट नाममात्र है।",
  },
  level: "central",
  ministry: "minority-affairs",
  categories: ["education", "minority"],
  tags: ["scholarship", "minority", "engineering", "professional course", "technical", "nsp", "mcm"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    labelled(isTrue("minority"), { en: "You belong to a notified minority community", hi: "आप अधिसूचित अल्पसंख्यक समुदाय से हैं" }),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप छात्र हैं" }),
    incomeUpTo(250_000),
  ),

  details: {
    en: [
      "The Merit-cum-Means Scholarship of the Ministry of Minority Affairs helped students from the six notified minorities pay for technical and professional courses at undergraduate and postgraduate level, such as engineering, medicine and management.",
      "Important: along with the pre- and post-matric minority scholarships, it has not been approved beyond 2021-22 and nothing has been paid since 2022-23. Its budget was cut to about ₹6 lakh for 2026-27, which effectively means no new awards. It has not been formally closed.",
      "If it reopens, applications will be on the National Scholarship Portal (scholarships.gov.in).",
    ],
    hi: [
      "अल्पसंख्यक कार्य मंत्रालय की मेरिट-कम-मीन्स छात्रवृत्ति छह अधिसूचित अल्पसंख्यकों के छात्रों को ग्रेजुएशन और पोस्ट-ग्रेजुएशन के तकनीकी और प्रोफ़ेशनल कोर्स, जैसे इंजीनियरिंग, मेडिकल और मैनेजमेंट की पढ़ाई में मदद करती थी।",
      "ज़रूरी: प्री- और पोस्ट-मैट्रिक अल्पसंख्यक छात्रवृत्तियों के साथ यह भी 2021-22 के बाद मंज़ूर नहीं हुई और 2022-23 से कोई भुगतान नहीं हुआ। 2026-27 के लिए इसका बजट घटाकर लगभग ₹6 लाख कर दिया गया, यानी असल में नई छात्रवृत्तियाँ नहीं। इसे औपचारिक रूप से बंद नहीं किया गया है।",
      "अगर यह फिर खुलती है, तो आवेदन नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर होगा।",
    ],
  },
  benefits: {
    en: [
      "Course fee support for technical and professional courses.",
      "A maintenance allowance for day scholars and hostellers.",
      "Payment by DBT into the student's bank account.",
    ],
    hi: [
      "तकनीकी और प्रोफ़ेशनल कोर्स की फ़ीस में मदद।",
      "डे-स्कॉलर और हॉस्टल में रहने वाले छात्रों के लिए रखरखाव भत्ता।",
      "पैसा DBT से छात्र के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a notified minority: Muslim, Christian, Sikh, Buddhist, Jain or Parsi.",
      "Admitted to a technical or professional UG or PG course at a recognised institution.",
      "Scored at least 50% in the previous final exam.",
      "Annual family income from all sources up to ₹2.5 lakh.",
    ],
    hi: [
      "अधिसूचित अल्पसंख्यक हों: मुस्लिम, ईसाई, सिख, बौद्ध, जैन या पारसी।",
      "मान्य संस्थान में तकनीकी या प्रोफ़ेशनल UG या PG कोर्स में दाख़िला हो।",
      "पिछली अंतिम परीक्षा में कम से कम 50% अंक हों।",
      "परिवार की कुल सालाना आय ₹2.5 लाख तक हो।",
    ],
  },
  exclusions: {
    en: [
      "General (non-professional) degree courses such as BA or BSc are not covered.",
      "You cannot hold another scholarship for the same course at the same time.",
    ],
    hi: [
      "BA या BSc जैसे सामान्य (गैर-प्रोफ़ेशनल) डिग्री कोर्स शामिल नहीं हैं।",
      "उसी कोर्स के लिए एक साथ दूसरी छात्रवृत्ति नहीं ले सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check scholarships.gov.in to see whether the Merit-cum-Means scheme is open this year.",
        "If it is, complete One Time Registration (OTR) and fill in the application.",
        "Upload your documents and get your institution to verify the form.",
      ],
      hi: [
        "scholarships.gov.in पर देखें कि मेरिट-कम-मीन्स योजना इस साल खुली है या नहीं।",
        "अगर खुली है, तो वन टाइम रजिस्ट्रेशन (OTR) करें और आवेदन भरें।",
        "दस्तावेज़ अपलोड करें और संस्थान से फ़ॉर्म का सत्यापन करवाएँ।",
      ],
    },
  },
  documents: {
    en: ["Self-declaration of minority community", "Family income certificate", "Previous year's marksheet", "Admission and fee receipt", "Aadhaar and bank account"],
    hi: ["अल्पसंख्यक समुदाय का स्व-घोषणा पत्र", "परिवार का आय प्रमाणपत्र", "पिछले साल की मार्कशीट", "दाख़िले और फ़ीस की रसीद", "आधार और बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "Has this scholarship been closed?", hi: "क्या यह छात्रवृत्ति बंद हो गई है?" },
      a: {
        en: "Not formally, but no awards have been paid since 2022-23 and the 2026-27 budget is only a token amount. Don't count on it this year.",
        hi: "औपचारिक रूप से नहीं, पर 2022-23 से कोई भुगतान नहीं हुआ और 2026-27 का बजट नाममात्र है। इस साल इस पर भरोसा न करें।",
      },
    },
    {
      q: { en: "What can I apply for instead?", hi: "इसकी जगह किसके लिए आवेदन करूँ?" },
      a: {
        en: "Look at your state's minority or professional-course scholarships, AICTE scholarships for technical students, and central scholarships based on caste, disability or merit.",
        hi: "अपने राज्य की अल्पसंख्यक या प्रोफ़ेशनल कोर्स छात्रवृत्तियाँ, तकनीकी छात्रों के लिए AICTE छात्रवृत्तियाँ, और जाति, दिव्यांगता या मेरिट पर आधारित केंद्रीय छात्रवृत्तियाँ देखें।",
      },
    },
  ],

  officialUrl: "https://scholarships.gov.in/",
  sources: [
    "https://scholarships.gov.in/public/schemeGuidelines/MoMA_MCM_2018-20.pdf",
    "https://m.thewire.in/article/government/minority-scholarship-schemes-frozen-for-over-3-years-due-to-irregularities-parliamentary-panel-flags-concern/amp",
    "https://news.careers360.com/minority-scholarship-scheme-revive-state-no-irregularity-rs-3400-crore-unspent-pms-merit-cum-means-fake-institute-panel-report",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "check-status",
};

export default scheme;
