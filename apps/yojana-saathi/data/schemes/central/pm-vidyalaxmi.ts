import { all, isTrue } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-vidyalaxmi",
  name: { en: "PM Vidyalaxmi", hi: "पीएम विद्यालक्ष्मी" },
  aka: ["PM-Vidyalaxmi", "Vidyalaxmi education loan"],
  shortDescription: {
    en: "Education loans with no collateral and no guarantor for students admitted to top-ranked colleges, plus 3% interest subsidy for families earning up to ₹8 lakh a year.",
    hi: "टॉप रैंक वाले कॉलेजों में दाख़िला पाने वाले छात्रों को बिना गिरवी और बिना गारंटर शिक्षा ऋण, और ₹8 लाख तक सालाना आय वाले परिवारों को ब्याज में 3% छूट।",
  },
  level: "central",
  ministry: "education",
  categories: ["education"],
  tags: ["education loan", "loan", "college", "collateral free", "interest subsidy", "nirf"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(isTrue("student")),

  details: {
    en: [
      "PM Vidyalaxmi helps meritorious students pay for higher education when money is the only thing stopping them. It is a central scheme of the Department of Higher Education, Ministry of Education, approved in November 2024.",
      "It covers Quality Higher Education Institutions (QHEIs): government and private institutions in the NIRF top 100 (overall, category or domain rankings), state government institutions ranked 101–200, and all institutions run by the central government. The list is updated every year from the latest NIRF ranking.",
      "Students at these institutions can get a bank loan for the full tuition fee and other course costs without collateral or a guarantor. Students apply for the loan and the interest subsidy on a single portal used by all banks.",
    ],
    hi: [
      "पीएम विद्यालक्ष्मी उन होनहार छात्रों की मदद करती है जिनकी उच्च शिक्षा में सिर्फ़ पैसा रुकावट है। यह शिक्षा मंत्रालय के उच्च शिक्षा विभाग की केंद्रीय योजना है, जिसे नवंबर 2024 में मंज़ूरी मिली।",
      "इसमें गुणवत्तापूर्ण उच्च शिक्षा संस्थान (QHEI) आते हैं: NIRF के टॉप 100 (कुल, श्रेणी या विषय रैंकिंग) में शामिल सरकारी और निजी संस्थान, 101–200 रैंक वाले राज्य सरकार के संस्थान और केंद्र सरकार के सभी संस्थान। यह सूची हर साल नई NIRF रैंकिंग से अपडेट होती है।",
      "इन संस्थानों के छात्र पूरी ट्यूशन फ़ीस और कोर्स के बाकी खर्च के लिए बिना गिरवी और बिना गारंटर बैंक ऋण ले सकते हैं। ऋण और ब्याज छूट दोनों के लिए एक ही पोर्टल पर आवेदन होता है, जिसे सभी बैंक इस्तेमाल करते हैं।",
    ],
  },
  benefits: {
    en: [
      "Collateral-free, guarantor-free education loan covering the full tuition fee and other course expenses.",
      "For loans up to ₹7.5 lakh, the government guarantees 75% of any default, which makes banks more willing to lend.",
      "Families earning up to ₹8 lakh a year: 3% interest subsidy during the moratorium period on loans up to ₹10 lakh (for up to 1 lakh students a year, with preference for government institutions and technical/professional courses).",
      "Families earning up to ₹4.5 lakh a year in technical/professional courses can get full interest subsidy during the moratorium under the separate PM-USP CSIS scheme.",
    ],
    hi: [
      "पूरी ट्यूशन फ़ीस और कोर्स के बाकी खर्च के लिए बिना गिरवी, बिना गारंटर शिक्षा ऋण।",
      "₹7.5 लाख तक के ऋण पर डिफ़ॉल्ट की 75% गारंटी सरकार देती है, जिससे बैंक आसानी से ऋण देते हैं।",
      "₹8 लाख तक सालाना आय वाले परिवार: ₹10 लाख तक के ऋण पर मोरेटोरियम अवधि में 3% ब्याज छूट (हर साल 1 लाख छात्रों तक, सरकारी संस्थानों और तकनीकी/प्रोफ़ेशनल कोर्स को प्राथमिकता)।",
      "तकनीकी/प्रोफ़ेशनल कोर्स में ₹4.5 लाख तक आय वाले परिवारों को अलग PM-USP CSIS योजना से मोरेटोरियम में पूरी ब्याज छूट मिल सकती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Has taken admission in a Quality Higher Education Institution on the PM Vidyalaxmi list (based on NIRF rankings).",
      "Admission must be on merit, through the institution's normal selection process.",
      "For the 3% interest subsidy: family income up to ₹8 lakh a year and not getting any other government scholarship or interest subsidy.",
    ],
    hi: [
      "पीएम विद्यालक्ष्मी सूची (NIRF रैंकिंग पर आधारित) के किसी गुणवत्तापूर्ण उच्च शिक्षा संस्थान में दाख़िला लिया हो।",
      "दाख़िला मेरिट पर, संस्थान की सामान्य चयन प्रक्रिया से हुआ हो।",
      "3% ब्याज छूट के लिए: परिवार की सालाना आय ₹8 लाख तक हो और कोई दूसरी सरकारी छात्रवृत्ति या ब्याज छूट न मिल रही हो।",
    ],
  },
  exclusions: {
    en: [
      "Students at institutions outside the QHEI list cannot use this scheme.",
      "The 75% credit guarantee applies only to loans up to ₹7.5 lakh.",
      "Students already getting another government scholarship or interest subsidy cannot get the 3% subsidy.",
      "The loan must still be repaid. Only the interest subsidy is a grant.",
    ],
    hi: [
      "QHEI सूची से बाहर के संस्थानों के छात्र इस योजना का लाभ नहीं ले सकते।",
      "75% क्रेडिट गारंटी सिर्फ़ ₹7.5 लाख तक के ऋण पर है।",
      "जो छात्र पहले से कोई दूसरी सरकारी छात्रवृत्ति या ब्याज छूट ले रहे हैं, उन्हें 3% छूट नहीं मिलेगी।",
      "ऋण चुकाना ही होगा। सिर्फ़ ब्याज छूट मुफ़्त मदद है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the PM Vidyalaxmi portal (pmvidyalaxmi.co.in) and register with your mobile number and email.",
        "Fill in the Common Education Loan Application Form with your admission and course details.",
        "Choose up to three banks and apply. Track the status on the portal.",
        "If your family earns up to ₹8 lakh, apply for the interest subsidy on the same portal.",
      ],
      hi: [
        "पीएम विद्यालक्ष्मी पोर्टल (pmvidyalaxmi.co.in) पर जाएँ और मोबाइल नंबर व ईमेल से रजिस्टर करें।",
        "दाख़िले और कोर्स की जानकारी के साथ कॉमन एजुकेशन लोन एप्लीकेशन फ़ॉर्म भरें।",
        "तीन बैंक तक चुनकर आवेदन करें। पोर्टल पर स्थिति देखें।",
        "परिवार की आय ₹8 लाख तक है तो इसी पोर्टल पर ब्याज छूट के लिए भी आवेदन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar and PAN", "Admission letter from the institution", "Fee structure of the course", "Class 10, 12 and latest mark sheets", "Family income certificate (for interest subsidy)", "Bank account details"],
    hi: ["आधार और PAN", "संस्थान का दाख़िला पत्र", "कोर्स की फ़ीस का विवरण", "कक्षा 10, 12 और ताज़ा अंकतालिका", "परिवार का आय प्रमाण पत्र (ब्याज छूट के लिए)", "बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "How do I know if my college is covered?", hi: "मुझे कैसे पता चलेगा कि मेरा कॉलेज शामिल है?" },
      a: {
        en: "The PM Vidyalaxmi portal lists the eligible institutions. The list changes every year with the new NIRF rankings, so check it for your admission year.",
        hi: "पीएम विद्यालक्ष्मी पोर्टल पर पात्र संस्थानों की सूची है। यह सूची हर साल नई NIRF रैंकिंग के साथ बदलती है, इसलिए अपने दाख़िले के साल की सूची देखें।",
      },
    },
    {
      q: { en: "What is the moratorium period?", hi: "मोरेटोरियम अवधि क्या है?" },
      a: {
        en: "It is the time when you don't have to repay yet: the length of your course plus one year. The 3% subsidy covers interest for this period.",
        hi: "यह वह समय है जब आपको अभी ऋण नहीं चुकाना होता: कोर्स की अवधि और उसके बाद एक साल। 3% छूट इसी अवधि के ब्याज पर मिलती है।",
      },
    },
  ],

  officialUrl: "https://pmvidyalaxmi.co.in/",
  sources: [
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2071131",
    "https://pmvidyalaxmi.co.in/",
    "https://education.gov.in/sites/upload_files/mhrd/files/document-reports/PM_Vidyalaxmi_Scheme_Guidelines.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
