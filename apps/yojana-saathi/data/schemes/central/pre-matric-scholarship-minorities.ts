import { all, incomeUpTo, isTrue, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pre-matric-scholarship-minorities",
  name: { en: "Pre-Matric Scholarship for Minorities", hi: "अल्पसंख्यकों के लिए प्री-मैट्रिक छात्रवृत्ति" },
  aka: ["Pre-matric minority scholarship", "MoMA pre-matric scholarship", "NSP minority scholarship"],
  shortDescription: {
    en: "Scholarship for minority students in Classes 9 and 10 whose family earns up to ₹1 lakh a year. New awards have been on hold since 2022-23, so check before applying.",
    hi: "कक्षा 9 और 10 के अल्पसंख्यक छात्रों के लिए छात्रवृत्ति, जिनके परिवार की आय ₹1 लाख सालाना तक है। 2022-23 से नई छात्रवृत्तियाँ रुकी हुई हैं, इसलिए आवेदन से पहले जाँच लें।",
  },
  level: "central",
  ministry: "minority-affairs",
  categories: ["education", "minority"],
  tags: ["scholarship", "minority", "class 9", "class 10", "nsp", "pre-matric", "school"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    labelled(isTrue("minority"), { en: "You belong to a notified minority community", hi: "आप अधिसूचित अल्पसंख्यक समुदाय से हैं" }),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप छात्र हैं" }),
    incomeUpTo(100_000),
  ),

  details: {
    en: [
      "The Pre-Matric Scholarship of the Ministry of Minority Affairs supported school students from the six notified minorities. Since 2022-23 it covers only Classes 9 and 10, in line with other ministries' pre-matric schemes; Classes 1 to 8 are no longer covered.",
      "Important: a parliamentary committee reported in March 2026 that the scheme has not been approved beyond 2021-22 and no scholarships have been paid since 2022-23, after an inquiry into fake institutions. The 2026-27 budget sets aside money for it, but it has not restarted.",
      "If it reopens, applications will be on the National Scholarship Portal (scholarships.gov.in), with 30% of awards kept for girls.",
    ],
    hi: [
      "अल्पसंख्यक कार्य मंत्रालय की प्री-मैट्रिक छात्रवृत्ति छह अधिसूचित अल्पसंख्यकों के स्कूली छात्रों की मदद करती थी। 2022-23 से यह दूसरे मंत्रालयों की प्री-मैट्रिक योजनाओं की तरह सिर्फ़ कक्षा 9 और 10 के लिए है; कक्षा 1 से 8 अब शामिल नहीं हैं।",
      "ज़रूरी: मार्च 2026 में एक संसदीय समिति ने बताया कि यह योजना 2021-22 के बाद मंज़ूर नहीं हुई और 2022-23 से कोई छात्रवृत्ति नहीं दी गई, क्योंकि फ़र्ज़ी संस्थानों की जाँच चल रही थी। 2026-27 के बजट में इसके लिए पैसा रखा गया है, पर यह फिर से शुरू नहीं हुई है।",
      "अगर यह फिर खुलती है, तो आवेदन नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर होगा, और 30% छात्रवृत्तियाँ लड़कियों के लिए रहेंगी।",
    ],
  },
  benefits: {
    en: [
      "Yearly scholarship towards school fees and study costs.",
      "Extra support for students living in a hostel.",
      "Payment by DBT into the student's or parent's bank account.",
    ],
    hi: [
      "स्कूल की फ़ीस और पढ़ाई के ख़र्च के लिए सालाना छात्रवृत्ति।",
      "हॉस्टल में रहने वाले छात्रों के लिए अतिरिक्त मदद।",
      "पैसा DBT से छात्र या अभिभावक के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a notified minority: Muslim, Christian, Sikh, Buddhist, Jain or Parsi.",
      "Studying in Class 9 or 10 at a government or recognised private school.",
      "Scored at least 50% in the previous final exam.",
      "Annual family income from all sources up to ₹1 lakh.",
    ],
    hi: [
      "अधिसूचित अल्पसंख्यक हों: मुस्लिम, ईसाई, सिख, बौद्ध, जैन या पारसी।",
      "सरकारी या मान्य निजी स्कूल में कक्षा 9 या 10 में पढ़ रहे हों।",
      "पिछली अंतिम परीक्षा में कम से कम 50% अंक हों।",
      "परिवार की कुल सालाना आय ₹1 लाख तक हो।",
    ],
  },
  exclusions: {
    en: [
      "Students in Classes 1 to 8 (no longer covered since 2022-23).",
      "Only two students from the same family can get the scholarship.",
    ],
    hi: [
      "कक्षा 1 से 8 के छात्र (2022-23 से शामिल नहीं)।",
      "एक परिवार के सिर्फ़ दो छात्रों को छात्रवृत्ति मिल सकती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check scholarships.gov.in to see whether the Ministry of Minority Affairs pre-matric scheme is open this year.",
        "If it is, complete One Time Registration (OTR) and fill in the application.",
        "Upload the documents and get the school to verify the form on the portal.",
      ],
      hi: [
        "scholarships.gov.in पर देखें कि अल्पसंख्यक कार्य मंत्रालय की प्री-मैट्रिक योजना इस साल खुली है या नहीं।",
        "अगर खुली है, तो वन टाइम रजिस्ट्रेशन (OTR) करें और आवेदन भरें।",
        "दस्तावेज़ अपलोड करें और स्कूल से पोर्टल पर फ़ॉर्म का सत्यापन करवाएँ।",
      ],
    },
  },
  documents: {
    en: ["Self-declaration of minority community", "Family income certificate or self-declaration", "Previous year's marksheet", "School details", "Aadhaar and bank account"],
    hi: ["अल्पसंख्यक समुदाय का स्व-घोषणा पत्र", "परिवार का आय प्रमाणपत्र या स्व-घोषणा", "पिछले साल की मार्कशीट", "स्कूल का विवरण", "आधार और बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "My child is in Class 6. Can we apply?", hi: "मेरा बच्चा कक्षा 6 में है। क्या आवेदन कर सकते हैं?" },
      a: {
        en: "No. Since 2022-23 this scholarship is only for Classes 9 and 10. Check your state's own scholarships for younger children.",
        hi: "नहीं। 2022-23 से यह छात्रवृत्ति सिर्फ़ कक्षा 9 और 10 के लिए है। छोटे बच्चों के लिए अपने राज्य की छात्रवृत्तियाँ देखें।",
      },
    },
    {
      q: { en: "Is it open right now?", hi: "क्या यह अभी खुली है?" },
      a: {
        en: "Not as far as we can confirm. Payments stopped from 2022-23 and the scheme is awaiting fresh approval. Check the NSP portal before applying.",
        hi: "जितना हम पुष्टि कर पाए, नहीं। 2022-23 से भुगतान रुका है और योजना नई मंज़ूरी का इंतज़ार कर रही है। आवेदन से पहले NSP पोर्टल देखें।",
      },
    },
  ],

  officialUrl: "https://scholarships.gov.in/",
  sources: [
    "https://www.minorityaffairs.gov.in/show_content.php?lang=1&level=2&ls_id=661&lid=823",
    "https://theprint.in/india/education/govts-minority-scholarship-scheme-frozen-3-yrs-as-probe-into-fraud-meanders-students-pay-price/2877988/",
    "https://en.vikaspedia.in/viewcontent/schemesall/schemes-for-students/scholarship/scholarship-to-minority-students/pre-matric-scholarships-scheme-for-minorities",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "check-status",
};

export default scheme;
