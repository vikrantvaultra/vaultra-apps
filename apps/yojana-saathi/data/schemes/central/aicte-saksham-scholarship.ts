import { all, incomeUpTo, isTrue, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "aicte-saksham-scholarship",
  name: { en: "AICTE Saksham Scholarship for Students with Disabilities", hi: "AICTE सक्षम छात्रवृत्ति (दिव्यांग छात्रों के लिए)" },
  aka: ["Saksham Scholarship", "AICTE Saksham"],
  shortDescription: {
    en: "₹50,000 every year for students with 40% or more disability who join a technical degree or diploma at an AICTE-approved college, if the family earns up to ₹8 lakh a year.",
    hi: "AICTE से मान्यता प्राप्त कॉलेज में तकनीकी डिग्री या डिप्लोमा में दाख़िला लेने वाले 40% या ज़्यादा दिव्यांगता वाले छात्रों को हर साल ₹50,000, अगर परिवार की आय ₹8 लाख तक है।",
  },
  level: "central",
  ministry: "education",
  categories: ["education", "disability"],
  tags: ["scholarship", "disability", "divyang", "engineering", "diploma", "aicte"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 50000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(isTrue("disabled"), when("disabilityPct", "gte", 40), isTrue("student"), incomeUpTo(800_000)),

  details: {
    en: [
      "Saksham helps students with disabilities pursue technical education. It is a Ministry of Education scheme run by the All India Council for Technical Education (AICTE) since 2014-15.",
      "There is no fixed number of seats and no reservation split: every eligible student who applies and is verified gets the scholarship.",
      "You get ₹50,000 a year as a lump sum for college fees, a computer, books, stationery, equipment and software. Apply and renew on the National Scholarship Portal. The money is paid by DBT into your own bank account.",
    ],
    hi: [
      "सक्षम योजना दिव्यांग छात्रों को तकनीकी शिक्षा पाने में मदद करती है। यह शिक्षा मंत्रालय की योजना है, जिसे 2014-15 से अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE) चलाती है।",
      "इसमें सीटों की कोई तय संख्या या आरक्षण बँटवारा नहीं है: आवेदन करने और जाँच में सही पाए जाने वाले हर पात्र छात्र को छात्रवृत्ति मिलती है।",
      "हर साल ₹50,000 एकमुश्त मिलते हैं, कॉलेज फ़ीस, कंप्यूटर, किताबें, स्टेशनरी, उपकरण और सॉफ़्टवेयर के लिए। आवेदन और नवीनीकरण नेशनल स्कॉलरशिप पोर्टल पर होता है। पैसा DBT से आपके अपने बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹50,000 a year as a lump sum for study costs.",
      "Up to 4 years for degree students (3 years if joined through lateral entry).",
      "Up to 3 years for diploma students (2 years if joined through lateral entry).",
      "Open to every eligible student; no merit cut-off between applicants.",
    ],
    hi: [
      "पढ़ाई के ख़र्चों के लिए हर साल ₹50,000 एकमुश्त।",
      "डिग्री छात्रों को अधिकतम 4 साल (लेटरल एंट्री से आने पर 3 साल)।",
      "डिप्लोमा छात्रों को अधिकतम 3 साल (लेटरल एंट्री से आने पर 2 साल)।",
      "हर पात्र छात्र के लिए; आवेदकों के बीच कोई मेरिट कट-ऑफ़ नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Has a disability of 40% or more, certified by a competent authority.",
      "Family income less than ₹8 lakh a year.",
      "Admitted to the first year of a degree or diploma course (or second year through lateral entry) at an AICTE-approved institution.",
      "To renew, you must pass and be promoted to the next year.",
    ],
    hi: [
      "सक्षम अधिकारी से प्रमाणित 40% या उससे ज़्यादा दिव्यांगता हो।",
      "परिवार की सालाना आय ₹8 लाख से कम हो।",
      "AICTE से मान्यता प्राप्त संस्थान में डिग्री या डिप्लोमा के पहले साल (या लेटरल एंट्री से दूसरे साल) में दाख़िला हो।",
      "नवीनीकरण के लिए पास होकर अगले साल में जाना ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "Students already getting another central, state or AICTE scholarship (for example PMSSS) are not eligible.",
      "Postgraduate and dual-degree students, and students of courses not approved by AICTE, are not covered.",
      "Students in the third year or later at the time of first application cannot apply.",
    ],
    hi: [
      "जो छात्र पहले से केंद्र, राज्य या AICTE की कोई दूसरी छात्रवृत्ति (जैसे PMSSS) ले रहे हैं, वे पात्र नहीं हैं।",
      "पोस्टग्रेजुएट और डुअल डिग्री वाले छात्र, और AICTE से मान्यता न रखने वाले कोर्स के छात्र शामिल नहीं हैं।",
      "पहली बार आवेदन के समय तीसरे या उससे आगे के साल वाले छात्र आवेदन नहीं कर सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the National Scholarship Portal (scholarships.gov.in) and complete One Time Registration with Aadhaar.",
        "Log in and choose 'AICTE Saksham Scholarship Scheme' (degree or diploma).",
        "Fill in the form and upload the disability certificate, income certificate and admission proof.",
        "Ask your college's nodal officer to verify it. Renew every year with your promotion certificate.",
      ],
      hi: [
        "नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर जाएँ और आधार से वन टाइम रजिस्ट्रेशन करें।",
        "लॉग इन करके 'AICTE सक्षम छात्रवृत्ति योजना' (डिग्री या डिप्लोमा) चुनें।",
        "फ़ॉर्म भरें और दिव्यांगता प्रमाण पत्र, आय प्रमाण पत्र और दाख़िले का प्रमाण अपलोड करें।",
        "कॉलेज के नोडल अधिकारी से इसकी जाँच करवाएँ। हर साल प्रमोशन सर्टिफ़िकेट के साथ नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Disability certificate (40% or more) or UDID card", "Family income certificate for the current year", "Qualifying exam mark sheets", "Admission letter and fee receipt", "Aadhaar-linked savings account in the student's name"],
    hi: ["आधार", "दिव्यांगता प्रमाण पत्र (40% या ज़्यादा) या UDID कार्ड", "चालू वर्ष का पारिवारिक आय प्रमाण पत्र", "योग्यता परीक्षा की अंकतालिका", "दाख़िला पत्र और फ़ीस रसीद", "छात्र के नाम पर आधार से जुड़ा बचत खाता"],
  },
  faqs: [
    {
      q: { en: "Is there a limit on the number of Saksham scholarships?", hi: "क्या सक्षम छात्रवृत्ति की संख्या सीमित है?" },
      a: {
        en: "No. AICTE gives it to all eligible degree and diploma students whose applications are verified.",
        hi: "नहीं। AICTE जाँच में सही पाए गए सभी पात्र डिग्री और डिप्लोमा छात्रों को यह देता है।",
      },
    },
    {
      q: { en: "Who issues the disability certificate?", hi: "दिव्यांगता प्रमाण पत्र कौन देता है?" },
      a: {
        en: "A medical board or competent authority under the Rights of Persons with Disabilities Act. A UDID card from swavlambancard.gov.in shows your certified disability percentage.",
        hi: "दिव्यांगजन अधिकार अधिनियम के तहत मेडिकल बोर्ड या सक्षम अधिकारी। swavlambancard.gov.in से मिलने वाले UDID कार्ड में आपकी प्रमाणित दिव्यांगता का प्रतिशत लिखा होता है।",
      },
    },
  ],

  officialUrl: "https://www.aicte-india.org/schemes/students-development-schemes/Saksham/General-Instructions",
  sources: [
    "https://www.aicte-india.org/schemes/students-development-schemes/Saksham/General-Instructions",
    "https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2013_F.pdf",
    "https://www.thapar.edu/upload/files/NOTICE-AICTE%20PRAGATI,%20SAKSHAM%20&%20SWANATH%20%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
