import { all, incomeUpTo, isTrue, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "post-matric-scholarship-minorities",
  name: { en: "Post-Matric Scholarship for Minorities", hi: "अल्पसंख्यकों के लिए पोस्ट-मैट्रिक छात्रवृत्ति" },
  aka: ["PMS Minorities", "MoMA post-matric scholarship", "NSP minority scholarship"],
  shortDescription: {
    en: "Scholarship for minority students from Class 11 to PhD whose family earns up to ₹2 lakh a year. New awards have been on hold since 2022-23, so check before applying.",
    hi: "कक्षा 11 से PhD तक के अल्पसंख्यक छात्रों के लिए छात्रवृत्ति, जिनके परिवार की आय ₹2 लाख सालाना तक है। 2022-23 से नई छात्रवृत्तियाँ रुकी हुई हैं, इसलिए आवेदन से पहले जाँच लें।",
  },
  level: "central",
  ministry: "minority-affairs",
  categories: ["education", "minority"],
  tags: ["scholarship", "minority", "muslim", "christian", "sikh", "nsp", "post-matric"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    labelled(isTrue("minority"), { en: "You belong to a notified minority community", hi: "आप अधिसूचित अल्पसंख्यक समुदाय से हैं" }),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप छात्र हैं" }),
    incomeUpTo(200_000),
  ),

  details: {
    en: [
      "The Post-Matric Scholarship of the Ministry of Minority Affairs was meant for students from the six notified minorities (Muslims, Christians, Sikhs, Buddhists, Jains and Parsis) studying from Class 11 up to PhD, including ITI and vocational courses. 30% of awards are earmarked for girls.",
      "Important: a parliamentary committee reported in March 2026 that the scheme has not been approved beyond 2021-22 and no scholarships have been paid since 2022-23, after an inquiry found fake institutions on the portal. The 2026-27 budget still sets aside money for it, but the scheme has not restarted.",
      "If it reopens, applications will be on the National Scholarship Portal (scholarships.gov.in).",
    ],
    hi: [
      "अल्पसंख्यक कार्य मंत्रालय की पोस्ट-मैट्रिक छात्रवृत्ति छह अधिसूचित अल्पसंख्यकों (मुस्लिम, ईसाई, सिख, बौद्ध, जैन और पारसी) के उन छात्रों के लिए थी जो कक्षा 11 से PhD तक, ITI और व्यावसायिक कोर्स समेत, पढ़ रहे हैं। 30% छात्रवृत्तियाँ लड़कियों के लिए तय हैं।",
      "ज़रूरी: मार्च 2026 में एक संसदीय समिति ने बताया कि यह योजना 2021-22 के बाद मंज़ूर नहीं हुई और 2022-23 से कोई छात्रवृत्ति नहीं दी गई, क्योंकि जाँच में पोर्टल पर फ़र्ज़ी संस्थान मिले थे। 2026-27 के बजट में इसके लिए पैसा रखा गया है, पर योजना फिर से शुरू नहीं हुई है।",
      "अगर यह फिर खुलती है, तो आवेदन नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर होगा।",
    ],
  },
  benefits: {
    en: [
      "Admission and tuition fee support for the course.",
      "A monthly maintenance allowance, higher for hostel students.",
      "Payment by DBT into the student's bank account.",
    ],
    hi: [
      "कोर्स की प्रवेश और ट्यूशन फ़ीस में मदद।",
      "मासिक रखरखाव भत्ता, हॉस्टल में रहने वालों के लिए ज़्यादा।",
      "पैसा DBT से छात्र के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a notified minority: Muslim, Christian, Sikh, Buddhist, Jain or Parsi.",
      "Studying in Class 11 or above at a recognised institution.",
      "Scored at least 50% in the previous final exam.",
      "Annual family income from all sources up to ₹2 lakh.",
    ],
    hi: [
      "अधिसूचित अल्पसंख्यक हों: मुस्लिम, ईसाई, सिख, बौद्ध, जैन या पारसी।",
      "मान्य संस्थान में कक्षा 11 या उससे ऊपर पढ़ रहे हों।",
      "पिछली अंतिम परीक्षा में कम से कम 50% अंक हों।",
      "परिवार की कुल सालाना आय ₹2 लाख तक हो।",
    ],
  },
  exclusions: {
    en: [
      "Only two students from the same family can get the scholarship.",
      "You cannot hold another scholarship for the same course at the same time.",
    ],
    hi: [
      "एक परिवार के सिर्फ़ दो छात्रों को छात्रवृत्ति मिल सकती है।",
      "उसी कोर्स के लिए एक साथ दूसरी छात्रवृत्ति नहीं ले सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check scholarships.gov.in to see whether the Ministry of Minority Affairs post-matric scheme is open this year.",
        "If it is, complete One Time Registration (OTR) and fill in the application.",
        "Upload your community, income and marks documents and get your institution to verify the form.",
      ],
      hi: [
        "scholarships.gov.in पर देखें कि अल्पसंख्यक कार्य मंत्रालय की पोस्ट-मैट्रिक योजना इस साल खुली है या नहीं।",
        "अगर खुली है, तो वन टाइम रजिस्ट्रेशन (OTR) करें और आवेदन भरें।",
        "समुदाय, आय और अंकों के दस्तावेज़ अपलोड करें और संस्थान से फ़ॉर्म का सत्यापन करवाएँ।",
      ],
    },
  },
  documents: {
    en: ["Self-declaration of minority community", "Family income certificate", "Previous year's marksheet", "Fee receipt and institution details", "Aadhaar and Aadhaar-linked bank account"],
    hi: ["अल्पसंख्यक समुदाय का स्व-घोषणा पत्र", "परिवार का आय प्रमाणपत्र", "पिछले साल की मार्कशीट", "फ़ीस रसीद और संस्थान का विवरण", "आधार और आधार से जुड़ा बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "Is this scholarship open right now?", hi: "क्या यह छात्रवृत्ति अभी खुली है?" },
      a: {
        en: "Not as far as we can confirm. Payments stopped from 2022-23 and the scheme is awaiting fresh approval. Check the NSP portal or ask your institution before relying on it.",
        hi: "जितना हम पुष्टि कर पाए, नहीं। 2022-23 से भुगतान रुका है और योजना नई मंज़ूरी का इंतज़ार कर रही है। भरोसा करने से पहले NSP पोर्टल देखें या अपने संस्थान से पूछें।",
      },
    },
    {
      q: { en: "Are there other options meanwhile?", hi: "तब तक और क्या विकल्प हैं?" },
      a: {
        en: "Yes. Look at your state's own minority or post-matric scholarships, and central schemes based on caste, disability or merit that you may qualify for.",
        hi: "हाँ। अपने राज्य की अल्पसंख्यक या पोस्ट-मैट्रिक छात्रवृत्तियाँ देखें, और जाति, दिव्यांगता या मेरिट पर आधारित केंद्रीय योजनाएँ भी, जिनके आप पात्र हो सकते हैं।",
      },
    },
  ],

  officialUrl: "https://scholarships.gov.in/",
  sources: [
    "https://www.minorityaffairs.gov.in/show_content.php?lang=1&level=2&ls_id=661&lid=823",
    "https://theprint.in/india/education/govts-minority-scholarship-scheme-frozen-3-yrs-as-probe-into-fraud-meanders-students-pay-price/2877988/",
    "https://news.careers360.com/minority-scholarship-scheme-revive-state-no-irregularity-rs-3400-crore-unspent-pms-merit-cum-means-fake-institute-panel-report",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "check-status",
};

export default scheme;
