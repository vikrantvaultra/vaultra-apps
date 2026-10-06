import { all, incomeUpTo, isTrue } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "central-sector-scholarship-college",
  name: {
    en: "Central Sector Scheme of Scholarship for College and University Students",
    hi: "कॉलेज और विश्वविद्यालय छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति योजना",
  },
  aka: ["CSSS", "PM-USP CSSS", "Central Sector Scholarship"],
  shortDescription: {
    en: "₹12,000 a year in college and ₹20,000 a year at PG level for students who scored above the 80th percentile in class 12 and whose family earns up to ₹4.5 lakh a year.",
    hi: "कक्षा 12 में 80वें पर्सेंटाइल से ऊपर अंक लाने वाले और ₹4.5 लाख तक सालाना पारिवारिक आय वाले छात्रों को कॉलेज में हर साल ₹12,000 और PG में ₹20,000।",
  },
  level: "central",
  ministry: "education",
  categories: ["education"],
  tags: ["scholarship", "college", "graduation", "class 12", "merit", "nsp"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 12000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(isTrue("student"), incomeUpTo(450_000)),

  details: {
    en: [
      "This scholarship rewards students who did very well in their class 12 board exam and come from families with modest incomes. It is part of PM-USP (Pradhan Mantri Uchchatar Shiksha Protsahan) and is run by the Department of Higher Education, Ministry of Education.",
      "Up to 82,000 new scholarships are given every year. They are shared among the state boards, CBSE and ICSE, and split across Humanities, Science and Commerce. Half are kept for girls, and central reservation rules apply.",
      "You apply on the National Scholarship Portal in your first year of a regular degree course, then renew every year. The money is paid straight into your bank account.",
    ],
    hi: [
      "यह छात्रवृत्ति उन छात्रों के लिए है जिन्होंने कक्षा 12 की बोर्ड परीक्षा में बहुत अच्छा किया और जिनके परिवार की आय कम है। यह PM-USP (प्रधानमंत्री उच्चतर शिक्षा प्रोत्साहन) का हिस्सा है और शिक्षा मंत्रालय का उच्च शिक्षा विभाग इसे चलाता है।",
      "हर साल 82,000 तक नई छात्रवृत्तियाँ दी जाती हैं। ये राज्य बोर्डों, CBSE और ICSE में बाँटी जाती हैं और कला, विज्ञान और वाणिज्य में भी बँटती हैं। आधी लड़कियों के लिए रखी गई हैं और केंद्र के आरक्षण नियम लागू होते हैं।",
      "नियमित डिग्री कोर्स के पहले साल में नेशनल स्कॉलरशिप पोर्टल पर आवेदन करें और फिर हर साल नवीनीकरण करें। पैसा सीधे आपके बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹12,000 a year for the first three years of graduation.",
      "₹20,000 a year at post-graduation level.",
      "In 5-year integrated or professional courses, ₹20,000 a year in the 4th and 5th years. B.Tech/B.E. students get ₹20,000 in the 4th year.",
      "Paid by DBT into the student's own bank account.",
    ],
    hi: [
      "स्नातक के पहले तीन साल में हर साल ₹12,000।",
      "स्नातकोत्तर (PG) स्तर पर हर साल ₹20,000।",
      "5 साल के इंटीग्रेटेड या प्रोफ़ेशनल कोर्स में चौथे और पाँचवें साल ₹20,000 प्रति वर्ष। B.Tech/B.E. छात्रों को चौथे साल ₹20,000।",
      "DBT से सीधे छात्र के अपने बैंक खाते में भुगतान।",
    ],
  },
  eligibilityText: {
    en: [
      "Scored above the 80th percentile of successful students in your stream in the class 12 exam of your board.",
      "Gross family income up to ₹4.5 lakh a year.",
      "Studying a regular degree course (not distance or correspondence, not a diploma) at a recognised college or university.",
      "To renew: at least 50% marks in the yearly exam and at least 75% attendance.",
    ],
    hi: [
      "अपने बोर्ड की कक्षा 12 परीक्षा में अपनी स्ट्रीम के पास हुए छात्रों में 80वें पर्सेंटाइल से ऊपर अंक।",
      "परिवार की कुल सालाना आय ₹4.5 लाख तक।",
      "किसी मान्यता प्राप्त कॉलेज या विश्वविद्यालय में नियमित डिग्री कोर्स (दूरस्थ या पत्राचार नहीं, डिप्लोमा नहीं)।",
      "नवीनीकरण के लिए: सालाना परीक्षा में कम से कम 50% अंक और कम से कम 75% हाज़िरी।",
    ],
  },
  exclusions: {
    en: [
      "Students already getting another merit scholarship, a state scholarship, a fee waiver or fee reimbursement cannot take this one.",
      "Diploma, distance and correspondence courses are not covered.",
      "Indiscipline, criminal behaviour or ragging complaints lead to loss of the scholarship.",
    ],
    hi: [
      "जो छात्र पहले से कोई दूसरी मेरिट छात्रवृत्ति, राज्य की छात्रवृत्ति, फ़ीस माफ़ी या फ़ीस प्रतिपूर्ति ले रहे हैं, वे यह नहीं ले सकते।",
      "डिप्लोमा, दूरस्थ और पत्राचार कोर्स शामिल नहीं हैं।",
      "अनुशासनहीनता, आपराधिक व्यवहार या रैगिंग की शिकायत पर छात्रवृत्ति छिन जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the National Scholarship Portal (scholarships.gov.in) and complete One Time Registration with Aadhaar.",
        "Log in and pick 'Central Sector Scheme of Scholarship for College and University Students'.",
        "Fill in your class 12 details, college details and bank account, and upload the income certificate.",
        "Your college's nodal officer and then the state verify the form. Renew online every year before the deadline.",
      ],
      hi: [
        "नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर जाएँ और आधार से वन टाइम रजिस्ट्रेशन करें।",
        "लॉग इन करके 'कॉलेज और विश्वविद्यालय छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति योजना' चुनें।",
        "कक्षा 12, कॉलेज और बैंक खाते की जानकारी भरें और आय प्रमाण पत्र अपलोड करें।",
        "पहले कॉलेज के नोडल अधिकारी और फिर राज्य फ़ॉर्म की जाँच करते हैं। हर साल समय सीमा से पहले ऑनलाइन नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Class 12 mark sheet", "Family income certificate (for fresh applicants)", "College admission proof and fee receipt", "Bank account in the student's name", "Caste or disability certificate, if claiming reservation"],
    hi: ["आधार", "कक्षा 12 की अंकतालिका", "परिवार का आय प्रमाण पत्र (नए आवेदकों के लिए)", "कॉलेज में दाख़िले का प्रमाण और फ़ीस रसीद", "छात्र के नाम पर बैंक खाता", "आरक्षण माँगने पर जाति या दिव्यांगता प्रमाण पत्र"],
  },
  faqs: [
    {
      q: { en: "How do I know if I am in the top 20 percentile?", hi: "मुझे कैसे पता चलेगा कि मैं टॉप 20 पर्सेंटाइल में हूँ?" },
      a: {
        en: "Each board publishes the cut-off marks for the 80th percentile in each stream. The portal checks your class 12 marks against your board's cut-off.",
        hi: "हर बोर्ड हर स्ट्रीम के लिए 80वें पर्सेंटाइल के कट-ऑफ़ अंक जारी करता है। पोर्टल आपके कक्षा 12 के अंकों को आपके बोर्ड के कट-ऑफ़ से मिलाता है।",
      },
    },
    {
      q: { en: "I forgot to renew last year. Can I still continue?", hi: "पिछले साल नवीनीकरण भूल गया/गई। क्या अब भी जारी रख सकता/सकती हूँ?" },
      a: {
        en: "Yes. You lose that year's payment, but you can apply for renewal in the next year if you still meet the marks and attendance rules.",
        hi: "हाँ। उस साल का पैसा नहीं मिलेगा, लेकिन अगर आप अंकों और हाज़िरी की शर्त पूरी करते हैं तो अगले साल नवीनीकरण के लिए आवेदन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://scholarships.gov.in/",
  sources: [
    "https://scholarships.gov.in/public/schemeGuidelines/CSSS_GUIDLINES_07022024_updated.pdf",
    "https://scholarships.gov.in/public/schemeGuidelines/FAQ_DOHE_CSSS.pdf",
    "https://dip.goa.gov.in/central-sector-scheme-of-scholarship-for-college-and-university-students/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
