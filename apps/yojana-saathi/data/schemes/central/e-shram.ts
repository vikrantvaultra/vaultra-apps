import { all, ageBetween, when } from "@/lib/engine/build";
import { UNORGANISED_OCCUPATIONS } from "@/data/taxonomy";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "e-shram",
  name: { en: "e-Shram Card (National Database of Unorganised Workers)", hi: "ई-श्रम कार्ड (असंगठित कामगारों का राष्ट्रीय डेटाबेस)" },
  aka: ["e-Shram", "eShram card", "UAN card"],
  shortDescription: {
    en: "Free registration for unorganised workers aged 16 to 59 that gives you an e-Shram card with a lifelong UAN number and a single window to social security schemes.",
    hi: "16 से 59 साल के असंगठित कामगारों के लिए मुफ़्त पंजीकरण, जिससे जीवन भर का UAN नंबर वाला ई-श्रम कार्ड और सामाजिक सुरक्षा योजनाओं तक एक ही जगह से पहुँच मिलती है।",
  },
  level: "central",
  ministry: "labour-employment",
  categories: ["social-welfare", "skills-employment"],
  tags: ["e-shram", "labour card", "unorganised worker", "uan", "daily wage", "registration"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 16, max: 59 },
  kundliHouse: "career",
  eligibility: all(...ageBetween(16, 59), when("occupation", "in", UNORGANISED_OCCUPATIONS)),

  details: {
    en: [
      "e-Shram is the government's national register of unorganised workers: people like construction workers, domestic workers, farm labourers, street vendors, gig and platform workers, drivers and helpers. Crores of workers have already registered.",
      "When you register, you get an e-Shram card with a 12-digit Universal Account Number (UAN) that stays with you for life, even if you change work or move to another state.",
      "The portal is run by the Ministry of Labour and Employment. It works as a one-stop window: from your e-Shram account you can see and apply for linked central schemes for workers, such as pension, insurance, ration and housing schemes. Governments also use the database to reach workers during emergencies.",
    ],
    hi: [
      "ई-श्रम सरकार का असंगठित कामगारों का राष्ट्रीय रजिस्टर है: जैसे निर्माण मज़दूर, घरेलू कामगार, खेतिहर मज़दूर, रेहड़ी-पटरी वाले, गिग और प्लेटफ़ॉर्म वर्कर, ड्राइवर और हेल्पर। करोड़ों कामगार इसमें पंजीकरण करा चुके हैं।",
      "पंजीकरण पर आपको 12 अंकों के यूनिवर्सल अकाउंट नंबर (UAN) वाला ई-श्रम कार्ड मिलता है, जो जीवन भर आपके साथ रहता है, चाहे आप काम बदलें या दूसरे राज्य में जाएँ।",
      "यह पोर्टल श्रम एवं रोज़गार मंत्रालय चलाता है। यह एक ही जगह की खिड़की की तरह काम करता है: अपने ई-श्रम खाते से आप कामगारों के लिए जुड़ी केंद्र की योजनाएँ, जैसे पेंशन, बीमा, राशन और आवास योजनाएँ देख और उनमें आवेदन कर सकते हैं। आपदा के समय सरकारें भी इसी डेटाबेस से कामगारों तक पहुँचती हैं।",
    ],
  },
  benefits: {
    en: [
      "e-Shram card with a lifelong 12-digit UAN that works across India.",
      "One place to find and apply for central social security and welfare schemes linked to e-Shram.",
      "Your details help governments send benefits to you during disasters and emergencies.",
      "Registration and updating your details are completely free.",
    ],
    hi: [
      "जीवन भर का 12 अंकों का UAN वाला ई-श्रम कार्ड, जो पूरे भारत में मान्य है।",
      "ई-श्रम से जुड़ी केंद्र की सामाजिक सुरक्षा और कल्याण योजनाओं को एक ही जगह खोजने और आवेदन करने की सुविधा।",
      "आपकी जानकारी से सरकारें आपदा और संकट के समय आप तक मदद पहुँचा पाती हैं।",
      "पंजीकरण और जानकारी अपडेट करना पूरी तरह मुफ़्त है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 16 to 59 years.",
      "Works in the unorganised sector: home-based, self-employed or wage worker, including gig and platform workers.",
      "Not a member of EPFO or ESIC.",
      "Not an income-tax payer yourself.",
    ],
    hi: [
      "16 से 59 साल की उम्र।",
      "असंगठित क्षेत्र में काम करते हों: घर से काम, स्व-रोज़गार या मज़दूरी, गिग और प्लेटफ़ॉर्म वर्कर भी।",
      "EPFO या ESIC के सदस्य न हों।",
      "ख़ुद आयकर न भरते हों।",
    ],
  },
  exclusions: {
    en: [
      "Members of EPFO (provident fund) or ESIC are not eligible.",
      "People who pay income tax cannot register.",
      "People below 16 or above 59 years cannot register.",
    ],
    hi: [
      "EPFO (भविष्य निधि) या ESIC के सदस्य पात्र नहीं हैं।",
      "आयकर भरने वाले पंजीकरण नहीं करा सकते।",
      "16 साल से कम या 59 साल से ज़्यादा उम्र के लोग पंजीकरण नहीं करा सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to eshram.gov.in and choose 'Register on e-Shram'.",
        "Enter your Aadhaar-linked mobile number and verify it with an OTP, then complete Aadhaar e-KYC.",
        "Fill in your address, education, occupation and bank details, and submit.",
        "Download your e-Shram card with your UAN.",
      ],
      hi: [
        "eshram.gov.in पर जाकर 'ई-श्रम पर पंजीकरण' चुनें।",
        "आधार से जुड़ा मोबाइल नंबर डालकर OTP से सत्यापित करें, फिर आधार e-KYC पूरा करें।",
        "पता, पढ़ाई, काम और बैंक की जानकारी भरकर जमा करें।",
        "UAN वाला अपना ई-श्रम कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest Common Service Centre (CSC) or State Seva Kendra.",
        "Take your Aadhaar, mobile number and bank passbook.",
        "The operator registers you with biometric verification and prints your e-Shram card. It is free.",
      ],
      hi: [
        "नज़दीकी कॉमन सर्विस सेंटर (CSC) या राज्य सेवा केंद्र जाएँ।",
        "आधार, मोबाइल नंबर और बैंक पासबुक साथ ले जाएँ।",
        "संचालक बायोमेट्रिक सत्यापन से आपका पंजीकरण करके ई-श्रम कार्ड प्रिंट कर देगा। यह मुफ़्त है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Mobile number linked to Aadhaar (for self-registration)", "Bank account details"],
    hi: ["आधार कार्ड", "आधार से जुड़ा मोबाइल नंबर (ख़ुद पंजीकरण के लिए)", "बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "Does the e-Shram card give me money every month?", hi: "क्या ई-श्रम कार्ड से हर महीने पैसे मिलते हैं?" },
      a: {
        en: "No. e-Shram is a registration, not a cash scheme. Messages promising monthly payments for e-Shram card holders are usually fake. The card helps you get into schemes such as PM-SYM pension.",
        hi: "नहीं। ई-श्रम एक पंजीकरण है, नक़द पैसे वाली योजना नहीं। ई-श्रम कार्ड वालों को हर महीने पैसे देने वाले संदेश आमतौर पर झूठे होते हैं। यह कार्ड आपको पीएम-एसवाईएम पेंशन जैसी योजनाओं से जुड़ने में मदद करता है।",
      },
    },
    {
      q: { en: "Do I have to pay to register?", hi: "क्या पंजीकरण के लिए पैसे देने होंगे?" },
      a: {
        en: "No. Registration is free on the portal and at CSCs. Do not pay any agent.",
        hi: "नहीं। पोर्टल और CSC पर पंजीकरण मुफ़्त है। किसी एजेंट को पैसे न दें।",
      },
    },
  ],

  officialUrl: "https://eshram.gov.in/",
  sources: ["https://eshram.gov.in/", "https://static.pib.gov.in/WriteReadData/userfiles/file/e-ShramPortal3NCD.pdf", "https://indbiz.gov.in/around-270-million-unorganized-sector-workers-join-the-e-shram-portal"],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
