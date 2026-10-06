import { all, isTrue, maxAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-student-credit-card",
  tier: "full",
  name: { en: "West Bengal Student Credit Card Scheme", hi: "पश्चिम बंगाल स्टूडेंट क्रेडिट कार्ड योजना" },
  aka: ["WBSCC", "Student Credit Card"],
  shortDescription: {
    en: "Students from West Bengal up to age 40 can get an education loan of up to ₹10 lakh without collateral, at 4% simple interest, for courses in India or abroad.",
    hi: "पश्चिम बंगाल के 40 साल तक के छात्र भारत या विदेश में पढ़ाई के लिए बिना गारंटी ₹10 लाख तक का शिक्षा ऋण 4% साधारण ब्याज पर ले सकते हैं।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Higher Education Department, Government of West Bengal",
    hi: "उच्च शिक्षा विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["education"],
  tags: ["education loan", "student credit card", "wbscc", "college", "coaching", "west bengal"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 1000000, period: "one-time", kind: "loan" },
  ageRange: { max: 40 },
  kundliHouse: "education",
  eligibility: all(residentOf("west-bengal"), maxAge(40), isTrue("student")),

  details: {
    en: [
      "The Student Credit Card Scheme gives students from West Bengal an education loan of up to ₹10 lakh with no collateral. It is run by the state's Higher Education Department.",
      "The loan can be used for school (from Class X), higher secondary, madrasah, undergraduate, postgraduate, professional and research courses, in India or abroad. Students preparing for competitive exams at coaching centres can also apply.",
      "Loans are given by the West Bengal State Cooperative Bank and its affiliated banks, and by public and private sector banks. The state keeps the interest rate low at 4% simple interest a year.",
    ],
    hi: [
      "स्टूडेंट क्रेडिट कार्ड योजना पश्चिम बंगाल के छात्रों को बिना गारंटी ₹10 लाख तक का शिक्षा ऋण देती है। इसे राज्य का उच्च शिक्षा विभाग चलाता है।",
      "यह ऋण स्कूल (कक्षा 10 से), उच्च माध्यमिक, मदरसा, स्नातक, स्नातकोत्तर, प्रोफ़ेशनल और शोध कोर्स के लिए, भारत या विदेश में, लिया जा सकता है। कोचिंग में प्रतियोगी परीक्षाओं की तैयारी करने वाले छात्र भी आवेदन कर सकते हैं।",
      "ऋण पश्चिम बंगाल राज्य सहकारी बैंक और उससे जुड़े बैंक, और सरकारी व निजी बैंक देते हैं। राज्य सरकार ब्याज दर कम रखती है, सालाना 4% साधारण ब्याज।",
    ],
  },
  benefits: {
    en: [
      "Education loan of up to ₹10 lakh with no collateral.",
      "Interest of 4% a year (simple interest).",
      "1% interest concession if you pay the interest in full during your study period.",
      "Repayment over up to 15 years, starting after the course plus one year.",
      "No margin money for loans up to ₹4 lakh.",
      "Can cover course fees, hostel, books, a laptop and other study costs.",
    ],
    hi: [
      "बिना गारंटी ₹10 लाख तक का शिक्षा ऋण।",
      "सालाना 4% ब्याज (साधारण ब्याज)।",
      "पढ़ाई के दौरान पूरा ब्याज चुकाने पर ब्याज में 1% की छूट।",
      "15 साल तक में चुकाने की सुविधा, कोर्स ख़त्म होने के एक साल बाद से।",
      "₹4 लाख तक के ऋण पर मार्जिन मनी नहीं।",
      "कोर्स की फ़ीस, हॉस्टल, किताबें, लैपटॉप और पढ़ाई के दूसरे ख़र्च शामिल हो सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Has lived in West Bengal for at least 10 years.",
      "40 years old or younger when applying.",
      "Has passed at least Class IX and has admission in an eligible course or coaching programme.",
      "Has a co-borrower, usually a parent or guardian.",
      "Neither the student nor the co-borrower has defaulted on a bank loan.",
    ],
    hi: [
      "कम से कम 10 साल से पश्चिम बंगाल में रह रहे हों।",
      "आवेदन के समय उम्र 40 साल या उससे कम।",
      "कम से कम कक्षा 9 पास हो और किसी योग्य कोर्स या कोचिंग में दाख़िला हो।",
      "एक सह-ऋणी हो, आमतौर पर माता-पिता या अभिभावक।",
      "छात्र या सह-ऋणी किसी बैंक ऋण का डिफ़ॉल्टर न हो।",
    ],
  },
  exclusions: {
    en: [
      "Applicants above 40 years of age.",
      "Students who have lived in West Bengal for less than 10 years.",
      "A student who already has a Student Credit Card (only one per student).",
      "Applicants or co-borrowers who have defaulted on a bank loan.",
    ],
    hi: [
      "40 साल से ज़्यादा उम्र के आवेदक।",
      "जो छात्र 10 साल से कम समय से पश्चिम बंगाल में रह रहे हैं।",
      "जिसके पास पहले से स्टूडेंट क्रेडिट कार्ड है (एक छात्र को एक ही कार्ड मिलता है)।",
      "जिस आवेदक या सह-ऋणी ने किसी बैंक ऋण में डिफ़ॉल्ट किया है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on wbscc.wb.gov.in (or the WBSCC app) and note your Application ID.",
        "Fill in your personal, academic and course details, upload your documents and submit.",
        "Your institution and the Higher Education Department verify it and send it to the bank.",
        "The bank does its own check, sanctions the loan and pays it to you or your institution.",
      ],
      hi: [
        "wbscc.wb.gov.in (या WBSCC ऐप) पर रजिस्टर करें और अपना Application ID नोट करें।",
        "अपनी निजी, पढ़ाई और कोर्स की जानकारी भरें, दस्तावेज़ अपलोड करें और जमा करें।",
        "आपका संस्थान और उच्च शिक्षा विभाग जाँच करके इसे बैंक को भेजते हैं।",
        "बैंक अपनी जाँच करके ऋण मंज़ूर करता है और पैसा आपको या आपके संस्थान को देता है।",
      ],
    },
  },
  documents: {
    en: [
      "Identity proof (such as Aadhaar)",
      "Proof of address showing residence in West Bengal",
      "Proof of admission to the course",
      "Mark sheets of previous exams",
      "Co-borrower's identity and bank details",
    ],
    hi: [
      "पहचान का सबूत (जैसे आधार)",
      "पश्चिम बंगाल में रहने का पता बताने वाला सबूत",
      "कोर्स में दाख़िले का सबूत",
      "पिछली परीक्षाओं की मार्कशीट",
      "सह-ऋणी की पहचान और बैंक का ब्योरा",
    ],
  },
  faqs: [
    {
      q: { en: "Can I use it for coaching for JEE, NEET or WBCS?", hi: "क्या इसे JEE, NEET या WBCS की कोचिंग के लिए ले सकते हैं?" },
      a: {
        en: "Yes. Students at coaching institutes preparing for exams such as engineering, medical, law, IAS, IPS or WBCS can apply.",
        hi: "हाँ। इंजीनियरिंग, मेडिकल, लॉ, IAS, IPS या WBCS जैसी परीक्षाओं की कोचिंग कर रहे छात्र आवेदन कर सकते हैं।",
      },
    },
    {
      q: { en: "When do I have to start repaying?", hi: "ऋण कब से चुकाना शुरू करना होगा?" },
      a: {
        en: "Repayment starts after your course ends plus one more year. You then have up to 15 years to repay.",
        hi: "कोर्स ख़त्म होने के एक साल बाद से चुकाना शुरू होता है। उसके बाद चुकाने के लिए 15 साल तक का समय मिलता है।",
      },
    },
    {
      q: { en: "Where do I get help?", hi: "मदद कहाँ मिलेगी?" },
      a: {
        en: "Call the state helpline 1800-102-8014 or email support-wbscc@bangla.gov.in.",
        hi: "राज्य हेल्पलाइन 1800-102-8014 पर फ़ोन करें या support-wbscc@bangla.gov.in पर ईमेल करें।",
      },
    },
  ],

  officialUrl: "https://wbscc.wb.gov.in/",
  sources: [
    "https://wbscc.wb.gov.in/About",
    "https://wb.gov.in/government-schemes-details-west-bengal-student-credit-card-scheme.aspx",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
