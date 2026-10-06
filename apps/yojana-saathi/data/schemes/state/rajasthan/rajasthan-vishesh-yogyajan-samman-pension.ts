import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-vishesh-yogyajan-samman-pension",
  overlapGroup: "disability-pension",
  name: { en: "Mukhyamantri Vishesh Yogyajan Samman Pension Yojana", hi: "मुख्यमंत्री विशेष योग्यजन सम्मान पेंशन योजना" },
  aka: ["Rajasthan disability pension", "Divyang pension", "Viklang pension"],
  shortDescription: {
    en: "People in Rajasthan with 40% or more disability and family income up to ₹60,000 a year get a monthly pension.",
    hi: "राजस्थान में 40% या उससे ज़्यादा दिव्यांगता वाले लोगों को, जिनके परिवार की सालाना आय ₹60,000 तक है, हर महीने पेंशन मिलती है।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Social Justice and Empowerment Department, Government of Rajasthan", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान सरकार" },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "divyang", "viklang", "pension", "rajssp", "rajasthan"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "health",
  eligibility: all(
    residentOf("rajasthan"),
    isTrue("disabled"),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "40% या उससे ज़्यादा दिव्यांगता" }),
    labelled(incomeUpTo(60_000), { en: "Family income up to ₹60,000 a year", hi: "परिवार की सालाना आय ₹60,000 तक" }),
  ),

  details: {
    en: [
      "This is Rajasthan's monthly pension for persons with disabilities (vishesh yogyajan). There is no lower age limit, so children and adults with a qualifying disability can both get it.",
      "It is run by the Social Justice and Empowerment Department under the Rajasthan Social Security Pension Rules. News reports say the minimum rises to ₹1,350 a month from July 2026 and ₹1,450 from January 2027; we haven't seen the official order yet, so check the current amount on the SSP portal. Some groups, such as leprosy-cured persons and silicosis patients, get a higher rate.",
      "The pension is paid into your bank account by DBT after yearly verification.",
    ],
    hi: [
      "यह राजस्थान में दिव्यांगजनों (विशेष योग्यजन) की मासिक पेंशन है। इसमें उम्र की कोई न्यूनतम सीमा नहीं है, इसलिए पात्र दिव्यांगता वाले बच्चे और बड़े दोनों इसे पा सकते हैं।",
      "इसे सामाजिक न्याय एवं अधिकारिता विभाग राजस्थान सामाजिक सुरक्षा पेंशन नियमों के तहत चलाता है। जुलाई 2026 से हर पात्र पेंशनभोगी को महीना मिलता है, और जनवरी 2027 से ₹1,450 करने की घोषणा हुई है। कुष्ठ रोग मुक्त और सिलिकोसिस पीड़ित जैसे कुछ वर्गों को ज़्यादा दर मिलती है।",
      "सालाना सत्यापन के बाद पेंशन DBT से आपके बैंक खाते में आती है।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension paid into your bank account (the amount is set by the state; see the SSP portal).",
      "Higher rates for leprosy-cured persons and silicosis patients.",
      "Paid by DBT into your bank account.",
    ],
    hi: [
      "हर महीने पेंशन सीधे बैंक खाते में (राशि राज्य तय करता है; SSP पोर्टल देखें)।",
      "कुष्ठ रोग मुक्त और सिलिकोसिस पीड़ितों के लिए ज़्यादा दर।",
      "पैसा DBT से आपके बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Rajasthan.",
      "You have a disability certificate showing 40% or more disability (or are a leprosy-cured person or silicosis patient).",
      "Your family's income is up to ₹60,000 a year.",
    ],
    hi: [
      "आप राजस्थान में रहते हों।",
      "आपके पास 40% या उससे ज़्यादा दिव्यांगता का प्रमाण पत्र हो (या आप कुष्ठ रोग मुक्त या सिलिकोसिस पीड़ित हों)।",
      "आपके परिवार की सालाना आय ₹60,000 तक हो।",
    ],
  },
  exclusions: {
    en: [
      "You, your spouse or your son is a government employee or government pensioner.",
      "Family income above ₹60,000 a year.",
    ],
    hi: [
      "आप, आपका जीवनसाथी या बेटा सरकारी कर्मचारी या सरकारी पेंशनभोगी हो।",
      "परिवार की सालाना आय ₹60,000 से ज़्यादा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to sso.rajasthan.gov.in and open the Social Security Pension (RajSSP) app.",
        "Choose the Vishesh Yogyajan pension, fill in the form with your Jan Aadhaar and upload your disability certificate.",
        "Track the status on ssp.rajasthan.gov.in.",
      ],
      hi: [
        "sso.rajasthan.gov.in पर लॉग इन करें और सामाजिक सुरक्षा पेंशन (RajSSP) ऐप खोलें।",
        "विशेष योग्यजन पेंशन चुनें, जन आधार से फ़ॉर्म भरें और दिव्यांगता प्रमाण पत्र अपलोड करें।",
        "ssp.rajasthan.gov.in पर स्थिति देखें।",
      ],
    },
    offline: {
      en: [
        "Visit an e-Mitra kiosk with your documents.",
        "The operator will submit the form; it is approved by the SDM (urban) or BDO (rural).",
      ],
      hi: [
        "दस्तावेज़ लेकर ई-मित्र केंद्र पर जाएँ।",
        "ऑपरेटर फ़ॉर्म जमा करेगा; मंज़ूरी उपखंड अधिकारी (शहर) या विकास अधिकारी (गाँव) देते हैं।",
      ],
    },
  },
  documents: {
    en: ["Jan Aadhaar card", "Aadhaar card", "Disability certificate or UDID card (40% or more)", "Income self-declaration", "Bank account details"],
    hi: ["जन आधार कार्ड", "आधार कार्ड", "दिव्यांगता प्रमाण पत्र या UDID कार्ड (40% या ज़्यादा)", "आय का स्व-घोषणा पत्र", "बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "Is there a minimum age?", hi: "क्या कोई न्यूनतम उम्र है?" },
      a: {
        en: "No. A person of any age with a qualifying disability and income within the limit can apply.",
        hi: "नहीं। पात्र दिव्यांगता और आय सीमा के अंदर वाला किसी भी उम्र का व्यक्ति आवेदन कर सकता है।",
      },
    },
    {
      q: { en: "Can I get this and the old age pension together?", hi: "क्या यह और वृद्धावस्था पेंशन दोनों एक साथ मिल सकती हैं?" },
      a: {
        en: "No. You can get only one social security pension at a time. Choose the one that suits you.",
        hi: "नहीं। एक समय में एक ही सामाजिक सुरक्षा पेंशन मिलती है। जो आपके लिए ठीक हो, वह चुनें।",
      },
    },
  ],

  officialUrl: "https://ssp.rajasthan.gov.in/",
  sources: [
    "https://ssp.rajasthan.gov.in/",
    "https://dainiknavajyoti.com/rajasthan/jaipur/social-security-pension-amount-proposed-to-increase-from-july-1350/article-163585",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "check-status",
};

export default scheme;
