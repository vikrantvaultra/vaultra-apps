import { all, incomeUpTo, labelled, maxAge, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "national-overseas-scholarship-sc",
  name: { en: "National Overseas Scholarship for SC and Other Eligible Candidates", hi: "SC और अन्य पात्र उम्मीदवारों के लिए राष्ट्रीय विदेश छात्रवृत्ति" },
  aka: ["NOS", "National Overseas Scholarship"],
  shortDescription: {
    en: "Full tuition, yearly living allowance (US$15,400 or £9,900), air fare and visa costs for SC and other eligible students doing a master's or PhD at a top-500 QS-ranked university abroad.",
    hi: "विदेश की टॉप-500 QS रैंक वाली यूनिवर्सिटी से मास्टर्स या PhD करने वाले SC और अन्य पात्र छात्रों को पूरी ट्यूशन फ़ीस, सालाना रहने का भत्ता (US$15,400 या £9,900), हवाई किराया और वीज़ा ख़र्च।",
  },
  level: "central",
  ministry: "social-justice-empowerment",
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "study abroad", "masters", "phd", "sc", "overseas"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { max: 35 },
  kundliHouse: "education",
  eligibility: all(
    labelled(when("caste", "eq", "sc"), {
      en: "Belongs to a Scheduled Caste (some seats are also for DNT, landless farm labourer and traditional artisan families)",
      hi: "अनुसूचित जाति से हों (कुछ सीटें DNT, भूमिहीन खेतिहर मज़दूर और पारंपरिक कारीगर परिवारों के लिए भी हैं)",
    }),
    maxAge(35),
    incomeUpTo(800_000),
  ),

  details: {
    en: [
      "The National Overseas Scholarship helps students from low-income Scheduled Caste families, and a few other groups, do a master's degree or PhD at a good university abroad. It is a central sector scheme of the Ministry of Social Justice & Empowerment.",
      "125 new awards are given each selection year (April to March): 115 for Scheduled Castes, 6 for Denotified, Nomadic and Semi-Nomadic Tribes, and 4 for landless agricultural labourers and traditional artisans. 30% are kept for women, and no state can take more than 10% of the slots in the first round.",
      "From 2026-27, you must have an unconditional offer from a university in the top 500 of the QS World University Rankings. Candidates are ranked by the QS rank of the university that admitted them. Payments abroad are made through the Indian Mission in that country.",
    ],
    hi: [
      "राष्ट्रीय विदेश छात्रवृत्ति कम आय वाले अनुसूचित जाति परिवारों और कुछ दूसरे वर्गों के छात्रों को विदेश की अच्छी यूनिवर्सिटी से मास्टर्स या PhD करने में मदद करती है। यह सामाजिक न्याय और अधिकारिता मंत्रालय की केंद्रीय योजना है।",
      "हर चयन वर्ष (अप्रैल से मार्च) में 125 नए अवॉर्ड दिए जाते हैं: 115 अनुसूचित जाति के लिए, 6 विमुक्त, घुमंतू और अर्ध-घुमंतू जनजातियों के लिए, और 4 भूमिहीन खेतिहर मज़दूरों व पारंपरिक कारीगरों के लिए। 30% महिलाओं के लिए हैं, और पहले दौर में कोई राज्य 10% से ज़्यादा सीटें नहीं ले सकता।",
      "2026-27 से QS वर्ल्ड यूनिवर्सिटी रैंकिंग की टॉप 500 यूनिवर्सिटी से बिना शर्त ऑफ़र होना ज़रूरी है। उम्मीदवारों की रैंकिंग उस यूनिवर्सिटी की QS रैंक से होती है जहाँ दाख़िला मिला है। विदेश में भुगतान उस देश के भारतीय दूतावास के ज़रिए होता है।",
    ],
  },
  benefits: {
    en: [
      "Full tuition fees as charged by the university.",
      "Yearly maintenance allowance of US$15,400 (USA and other countries) or £9,900 (UK).",
      "Yearly contingency allowance of US$1,500 or £1,100 for books, laptop, conferences and thesis costs.",
      "Economy air fare to the university and back, actual visa fee and medical insurance premium.",
      "Support for up to 3 years for a master's and up to 4 years for a PhD.",
    ],
    hi: [
      "यूनिवर्सिटी की पूरी ट्यूशन फ़ीस।",
      "सालाना रखरखाव भत्ता US$15,400 (अमेरिका और दूसरे देश) या £9,900 (ब्रिटेन)।",
      "किताबें, लैपटॉप, सम्मेलन और थीसिस ख़र्च के लिए सालाना US$1,500 या £1,100 आकस्मिक भत्ता।",
      "यूनिवर्सिटी तक जाने और लौटने का इकॉनमी हवाई किराया, असली वीज़ा फ़ीस और मेडिकल बीमा प्रीमियम।",
      "मास्टर्स के लिए अधिकतम 3 साल और PhD के लिए अधिकतम 4 साल तक मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a Scheduled Caste, a Denotified/Nomadic/Semi-Nomadic Tribe, or a landless agricultural labourer or traditional artisan family.",
      "Not more than 35 years old on 1 April of the selection year.",
      "Gross family income up to ₹8 lakh in the last financial year.",
      "At least 60% marks in the qualifying degree (bachelor's for a master's, master's for a PhD).",
      "Has an unconditional admission offer for a master's or PhD from a top-500 QS-ranked university.",
    ],
    hi: [
      "अनुसूचित जाति, विमुक्त/घुमंतू/अर्ध-घुमंतू जनजाति, या भूमिहीन खेतिहर मज़दूर या पारंपरिक कारीगर परिवार से हों।",
      "चयन वर्ष की 1 अप्रैल को उम्र 35 साल से ज़्यादा न हो।",
      "पिछले वित्त वर्ष में परिवार की कुल आय ₹8 लाख तक हो।",
      "योग्यता डिग्री में कम से कम 60% अंक (मास्टर्स के लिए स्नातक, PhD के लिए मास्टर्स)।",
      "टॉप-500 QS रैंक वाली यूनिवर्सिटी से मास्टर्स या PhD के लिए बिना शर्त दाख़िले का ऑफ़र हो।",
    ],
  },
  exclusions: {
    en: [
      "Bachelor's courses are not covered.",
      "Anyone already living, studying or who has studied abroad (on any scholarship or own funds) cannot apply.",
      "Not more than two children of the same parents can get it, and a person can get it only once.",
      "Courses or research on Indian culture, heritage, history or India-based social studies are not covered.",
      "In the USA, you must study on a J-1 visa. Candidates on an F-1 visa are not eligible.",
    ],
    hi: [
      "स्नातक (बैचलर) कोर्स शामिल नहीं हैं।",
      "जो पहले से विदेश में रह रहे हैं, पढ़ रहे हैं या पढ़ चुके हैं (किसी भी छात्रवृत्ति या अपने पैसे से), वे आवेदन नहीं कर सकते।",
      "एक ही माता-पिता के दो से ज़्यादा बच्चों को नहीं मिलती, और एक व्यक्ति को सिर्फ़ एक बार मिलती है।",
      "भारतीय संस्कृति, विरासत, इतिहास या भारत पर आधारित सामाजिक अध्ययन वाले कोर्स या शोध शामिल नहीं हैं।",
      "अमेरिका में J-1 वीज़ा पर ही पढ़ना होगा। F-1 वीज़ा वाले उम्मीदवार पात्र नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Get an unconditional admission offer from a university in the latest QS top 500.",
        "When the first round opens (April/May) or the second round (September/October), apply on the NOS portal (nosmsje.gov.in).",
        "Upload your caste certificate, income documents, mark sheets of all semesters, admission offer and Aadhaar. There is a 4-day window afterwards to correct mistakes.",
        "If selected, you get a provisional award letter. Submit the remaining documents, bond and passport to get the final award.",
      ],
      hi: [
        "नई QS टॉप 500 सूची की किसी यूनिवर्सिटी से बिना शर्त दाख़िले का ऑफ़र लें।",
        "पहला दौर (अप्रैल/मई) या दूसरा दौर (सितंबर/अक्टूबर) खुलने पर NOS पोर्टल (nosmsje.gov.in) पर आवेदन करें।",
        "जाति प्रमाण पत्र, आय के दस्तावेज़, सभी सेमेस्टर की अंकतालिका, दाख़िले का ऑफ़र और आधार अपलोड करें। बाद में ग़लतियाँ सुधारने के लिए 4 दिन मिलते हैं।",
        "चयन होने पर अस्थायी अवॉर्ड पत्र मिलता है। अंतिम अवॉर्ड के लिए बाकी दस्तावेज़, बॉन्ड और पासपोर्ट जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Class 10 certificate", "Caste certificate", "Bachelor's/master's degree and mark sheets of all semesters", "Unconditional admission offer from the foreign university", "Family income certificate and ITRs (if family income is above ₹2.5 lakh old regime / ₹3 lakh new regime)", "Aadhaar", "Employer NOC if working"],
    hi: ["कक्षा 10 का प्रमाण पत्र", "जाति प्रमाण पत्र", "स्नातक/स्नातकोत्तर डिग्री और सभी सेमेस्टर की अंकतालिका", "विदेशी यूनिवर्सिटी का बिना शर्त दाख़िला ऑफ़र", "परिवार का आय प्रमाण पत्र और ITR (अगर आय पुरानी व्यवस्था में ₹2.5 लाख / नई व्यवस्था में ₹3 लाख से ज़्यादा है)", "आधार", "नौकरी करने पर नियोक्ता का NOC"],
  },
  faqs: [
    {
      q: { en: "I am an ST student. Is there a similar scheme for me?", hi: "मैं ST छात्र हूँ। क्या मेरे लिए भी ऐसी योजना है?" },
      a: {
        en: "Yes. The Ministry of Tribal Affairs runs a separate National Overseas Scholarship for ST students. Check tribal.nic.in for details.",
        hi: "हाँ। जनजातीय कार्य मंत्रालय ST छात्रों के लिए अलग राष्ट्रीय विदेश छात्रवृत्ति चलाता है। जानकारी के लिए tribal.nic.in देखें।",
      },
    },
    {
      q: { en: "How are candidates ranked?", hi: "उम्मीदवारों की रैंकिंग कैसे होती है?" },
      a: {
        en: "By the QS world rank of the university that gave you the offer: a higher-ranked university puts you higher. If two candidates tie, marks in the qualifying degree decide.",
        hi: "ऑफ़र देने वाली यूनिवर्सिटी की QS वर्ल्ड रैंक से: बेहतर रैंक वाली यूनिवर्सिटी से आप ऊपर आते हैं। बराबरी होने पर योग्यता डिग्री के अंकों से फ़ैसला होता है।",
      },
    },
  ],

  officialUrl: "https://socialjustice.gov.in/schemes/28",
  sources: [
    "https://socialjustice.gov.in/public/ckeditor/upload/71651776927568.pdf",
    "https://socialjustice.gov.in/schemes/28",
    "https://nosmsje.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1954,
  status: "active",
};

export default scheme;
