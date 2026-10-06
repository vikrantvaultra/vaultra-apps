import { all, female, incomeUpTo, isTrue } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "aicte-pragati-scholarship",
  name: { en: "AICTE Pragati Scholarship for Girls", hi: "AICTE प्रगति छात्रवृत्ति (छात्राओं के लिए)" },
  aka: ["Pragati Scholarship", "AICTE Pragati"],
  shortDescription: {
    en: "₹50,000 every year for girls starting a technical degree or diploma at an AICTE-approved college, if the family earns up to ₹8 lakh a year.",
    hi: "AICTE से मान्यता प्राप्त कॉलेज में तकनीकी डिग्री या डिप्लोमा शुरू करने वाली छात्राओं को हर साल ₹50,000, अगर परिवार की सालाना आय ₹8 लाख तक है।",
  },
  level: "central",
  ministry: "education",
  categories: ["education", "women-child"],
  tags: ["scholarship", "girls", "engineering", "diploma", "aicte", "technical education"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 50000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(female(), isTrue("student"), incomeUpTo(800_000)),

  details: {
    en: [
      "Pragati encourages more girls to study engineering and other technical courses. It is a Ministry of Education scheme run by the All India Council for Technical Education (AICTE) since 2014.",
      "About 10,000 scholarships are given each year, 5,000 for degree courses and 5,000 for diploma courses. Selection is on merit, based on the marks of the qualifying exam used for admission.",
      "The scholarship is a lump sum of ₹50,000 a year that you can use for college fees, a laptop, books, equipment or software. You apply and renew on the National Scholarship Portal, and the money comes straight to your bank account.",
    ],
    hi: [
      "प्रगति योजना ज़्यादा लड़कियों को इंजीनियरिंग और दूसरे तकनीकी कोर्स पढ़ने के लिए प्रोत्साहित करती है। यह शिक्षा मंत्रालय की योजना है, जिसे 2014 से अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE) चलाती है।",
      "हर साल लगभग 10,000 छात्रवृत्तियाँ दी जाती हैं, 5,000 डिग्री और 5,000 डिप्लोमा कोर्स के लिए। चयन मेरिट पर होता है, यानी दाख़िले के लिए हुई परीक्षा के अंकों के आधार पर।",
      "छात्रवृत्ति हर साल ₹50,000 की एकमुश्त राशि है, जिसे कॉलेज फ़ीस, लैपटॉप, किताबें, उपकरण या सॉफ़्टवेयर पर ख़र्च कर सकती हैं। आवेदन और नवीनीकरण नेशनल स्कॉलरशिप पोर्टल पर होता है और पैसा सीधे बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹50,000 a year as a lump sum, for college fees, laptop, books, equipment and similar costs.",
      "Up to 4 years for degree students (3 years if joined through lateral entry).",
      "Up to 3 years for diploma students (2 years if joined through lateral entry).",
      "Paid directly to the student's bank account by DBT.",
    ],
    hi: [
      "हर साल ₹50,000 एकमुश्त, कॉलेज फ़ीस, लैपटॉप, किताबें, उपकरण जैसे ख़र्चों के लिए।",
      "डिग्री छात्राओं को अधिकतम 4 साल (लेटरल एंट्री से आने पर 3 साल)।",
      "डिप्लोमा छात्राओं को अधिकतम 3 साल (लेटरल एंट्री से आने पर 2 साल)।",
      "DBT से सीधे छात्रा के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Girl student admitted to the first year of a degree or diploma course (or second year through lateral entry) at an AICTE-approved institution.",
      "Family income less than ₹8 lakh a year.",
      "At most two girls from the same family can get it.",
      "To renew, you must pass and be promoted to the next year.",
    ],
    hi: [
      "AICTE से मान्यता प्राप्त संस्थान में डिग्री या डिप्लोमा के पहले साल (या लेटरल एंट्री से दूसरे साल) में दाख़िला लेने वाली छात्रा।",
      "परिवार की सालाना आय ₹8 लाख से कम हो।",
      "एक परिवार की अधिकतम दो बेटियों को मिल सकती है।",
      "नवीनीकरण के लिए पास होकर अगले साल में जाना ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "Students in the third year or later at the time of first application cannot apply.",
      "Students already getting another central, state or AICTE scholarship are not eligible.",
      "Failing or dropping out ends the scholarship.",
    ],
    hi: [
      "पहली बार आवेदन के समय तीसरे या उससे आगे के साल वाली छात्राएँ आवेदन नहीं कर सकतीं।",
      "जो छात्राएँ पहले से केंद्र, राज्य या AICTE की कोई दूसरी छात्रवृत्ति ले रही हैं, वे पात्र नहीं हैं।",
      "फ़ेल होने या पढ़ाई छोड़ने पर छात्रवृत्ति बंद हो जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the National Scholarship Portal (scholarships.gov.in) and complete One Time Registration with Aadhaar.",
        "Log in and choose 'AICTE Pragati Scholarship Scheme' (degree or diploma).",
        "Fill in admission and bank details and upload the income certificate and mark sheets.",
        "Ask your college's nodal officer to verify the form. For renewal, upload your promotion certificate every year.",
      ],
      hi: [
        "नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर जाएँ और आधार से वन टाइम रजिस्ट्रेशन करें।",
        "लॉग इन करके 'AICTE प्रगति छात्रवृत्ति योजना' (डिग्री या डिप्लोमा) चुनें।",
        "दाख़िले और बैंक की जानकारी भरें और आय प्रमाण पत्र व अंकतालिका अपलोड करें।",
        "कॉलेज के नोडल अधिकारी से फ़ॉर्म की जाँच करवाएँ। नवीनीकरण के लिए हर साल प्रमोशन सर्टिफ़िकेट अपलोड करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Class 10 and 12 (or qualifying exam) mark sheets", "Family income certificate for the current year", "Admission letter and fee receipt", "Aadhaar-linked savings account in the student's name", "Parent's declaration"],
    hi: ["आधार", "कक्षा 10 और 12 (या योग्यता परीक्षा) की अंकतालिका", "चालू वर्ष का पारिवारिक आय प्रमाण पत्र", "दाख़िला पत्र और फ़ीस रसीद", "छात्रा के नाम पर आधार से जुड़ा बचत खाता", "माता-पिता का घोषणा पत्र"],
  },
  faqs: [
    {
      q: { en: "Can I use the money for things other than fees?", hi: "क्या पैसा फ़ीस के अलावा दूसरी चीज़ों पर ख़र्च कर सकती हूँ?" },
      a: {
        en: "Yes. It is meant for study costs such as college fees, a laptop or computer, books, stationery, equipment and software.",
        hi: "हाँ। यह पढ़ाई के ख़र्चों के लिए है, जैसे कॉलेज फ़ीस, लैपटॉप या कंप्यूटर, किताबें, स्टेशनरी, उपकरण और सॉफ़्टवेयर।",
      },
    },
    {
      q: { en: "When does the portal open?", hi: "पोर्टल कब खुलता है?" },
      a: {
        en: "Usually in the middle of the year. For 2026-27, AICTE opened applications on NSP with a last date of 31 October 2026.",
        hi: "आमतौर पर साल के बीच में। 2026-27 के लिए AICTE ने NSP पर आवेदन खोले, जिनकी आख़िरी तारीख़ 31 अक्टूबर 2026 है।",
      },
    },
  ],

  officialUrl: "https://www.aicte-india.org/schemes/students-development-schemes/Pragati/General-Instructions",
  sources: [
    "https://www.aicte-india.org/schemes/students-development-schemes/Pragati/General-Instructions",
    "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1985065",
    "https://www.thapar.edu/upload/files/NOTICE-AICTE%20PRAGATI,%20SAKSHAM%20&%20SWANATH%20%202026-27.pdf",
    "https://iust.ac.in/Notifications/General/250922102747.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
