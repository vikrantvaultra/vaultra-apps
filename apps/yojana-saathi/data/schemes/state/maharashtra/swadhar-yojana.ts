import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "swadhar-yojana",
  overlapGroup: "scholarship",
  name: {
    en: "Bharatratna Dr. Babasaheb Ambedkar Swadhar Yojana",
    hi: "भारतरत्न डॉ. बाबासाहेब आंबेडकर स्वाधार योजना",
  },
  aka: ["Swadhar", "Swadhar Yojana", "Ambedkar Swadhar"],
  shortDescription: {
    en: "SC and Neo-Buddhist students in Maharashtra who couldn't get a government hostel seat get ₹38,000 to ₹60,000 a year for food and lodging, if family income is up to ₹2.5 lakh.",
    hi: "महाराष्ट्र के SC और नवबौद्ध छात्रों को, जिन्हें सरकारी हॉस्टल में जगह नहीं मिली, खाने और रहने के लिए हर साल ₹38,000 से ₹60,000 मिलते हैं, अगर परिवार की आय ₹2.5 लाख तक है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Social Justice and Special Assistance Department, Government of Maharashtra",
    hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["swadhar", "hostel allowance", "sc", "neo buddhist", "scholarship", "dbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 38000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), {
      en: "Belongs to a Scheduled Caste or is Neo-Buddhist",
      hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो",
    }),
    incomeUpTo(250_000),
  ),

  details: {
    en: [
      "Swadhar Yojana is for Scheduled Caste and Neo-Buddhist students who are eligible for a government hostel of the Social Justice Department but could not get a seat. Instead of a hostel room, the student gets money to pay for food, rent and other living costs.",
      "It covers students in class 11 and 12 and in professional or non-professional diploma, degree and postgraduate courses who have to live away from home to study.",
      "The amount depends on the city where you study and is paid by DBT into your Aadhaar-linked bank account. Applications are made on the department's hostel management portal.",
    ],
    hi: [
      "स्वाधार योजना अनुसूचित जाति और नवबौद्ध छात्रों के लिए है, जो सामाजिक न्याय विभाग के सरकारी हॉस्टल के पात्र हैं पर उन्हें जगह नहीं मिली। हॉस्टल के कमरे की जगह छात्र को खाने, किराए और दूसरे ख़र्च के लिए पैसा मिलता है।",
      "इसमें कक्षा 11 और 12 के छात्र, और प्रोफ़ेशनल या नॉन-प्रोफ़ेशनल डिप्लोमा, डिग्री और पोस्ट-ग्रेजुएट कोर्स के वे छात्र आते हैं जिन्हें पढ़ने के लिए घर से दूर रहना पड़ता है।",
      "राशि पढ़ाई वाले शहर पर निर्भर है और DBT से आपके आधार से जुड़े बैंक खाते में आती है। आवेदन विभाग के हॉस्टल मैनेजमेंट पोर्टल पर होता है।",
    ],
  },
  benefits: {
    en: [
      "₹60,000 a year if you study in Mumbai city or suburbs, Navi Mumbai, Thane, Pune, Pimpri-Chinchwad or Nagpur.",
      "₹51,000 a year in other divisional cities and Class C municipal corporations.",
      "₹43,000 a year in other district towns.",
      "₹38,000 a year at taluka level.",
      "The money covers meals, lodging and other everyday study costs.",
    ],
    hi: [
      "मुंबई शहर या उपनगर, नवी मुंबई, ठाणे, पुणे, पिंपरी-चिंचवड या नागपुर में पढ़ने पर ₹60,000 सालाना।",
      "दूसरे संभागीय शहरों और 'C' श्रेणी महानगरपालिकाओं में ₹51,000 सालाना।",
      "दूसरे ज़िला शहरों में ₹43,000 सालाना।",
      "तालुका स्तर पर ₹38,000 सालाना।",
      "यह पैसा खाने, रहने और पढ़ाई के दूसरे रोज़ के ख़र्च के लिए है।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a Scheduled Caste or the Neo-Buddhist community and lives in Maharashtra.",
      "Eligible for a government hostel but did not get admission.",
      "Not a local resident of the city or town where the college is.",
      "At least 50% marks in the last examination.",
      "Family income up to ₹2.5 lakh a year.",
    ],
    hi: [
      "अनुसूचित जाति या नवबौद्ध समुदाय से हो और महाराष्ट्र में रहता हो।",
      "सरकारी हॉस्टल का पात्र हो, पर दाख़िला न मिला हो।",
      "जिस शहर या कस्बे में कॉलेज है, वहाँ का स्थानीय निवासी न हो।",
      "पिछली परीक्षा में कम से कम 50% अंक हों।",
      "परिवार की सालाना आय ₹2.5 लाख तक हो।",
    ],
  },
  exclusions: {
    en: [
      "Students who already live in a government hostel.",
      "Students who study in their own home town.",
      "Family income above ₹2.5 lakh a year.",
    ],
    hi: [
      "जो छात्र पहले से सरकारी हॉस्टल में रहते हैं।",
      "जो छात्र अपने ही शहर/कस्बे में पढ़ते हैं।",
      "परिवार की सालाना आय ₹2.5 लाख से ज़्यादा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Social Justice Department's hostel portal (hmas.mahait.org, which now redirects to hmasnew.mahait.org) and register.",
        "Fill in the Swadhar form with your course, college, marks and bank details, and upload your documents.",
        "Submit and keep the application number. The district Assistant Commissioner of Social Welfare checks and approves it.",
      ],
      hi: [
        "सामाजिक न्याय विभाग के हॉस्टल पोर्टल (hmas.mahait.org, जो अब hmasnew.mahait.org पर ले जाता है) पर जाएँ और रजिस्टर करें।",
        "स्वाधार फ़ॉर्म में अपना कोर्स, कॉलेज, अंक और बैंक की जानकारी भरें, और दस्तावेज़ अपलोड करें।",
        "जमा करें और आवेदन नंबर संभाल कर रखें। ज़िले के सहायक आयुक्त, समाज कल्याण इसकी जाँच करके मंज़ूरी देते हैं।",
      ],
    },
    offline: {
      en: [
        "For help, visit the office of the Assistant Commissioner, Social Welfare in your district.",
        "They can guide you on the form and tell you which documents to attach.",
      ],
      hi: [
        "मदद के लिए अपने ज़िले के सहायक आयुक्त, समाज कल्याण के दफ़्तर जाएँ।",
        "वे फ़ॉर्म भरने और कौन-से दस्तावेज़ लगाने हैं, इसमें मार्गदर्शन करेंगे।",
      ],
    },
  },
  documents: {
    en: [
      "Caste certificate",
      "Family income certificate",
      "Mark sheet of the last examination",
      "College admission receipt or bonafide certificate",
      "Rent agreement or proof of where you are staying",
      "Aadhaar card and Aadhaar-linked bank passbook",
    ],
    hi: [
      "जाति प्रमाण पत्र",
      "पारिवारिक आय प्रमाण पत्र",
      "पिछली परीक्षा की मार्कशीट",
      "कॉलेज की दाख़िला रसीद या बोनाफ़ाइड प्रमाण पत्र",
      "किराया अनुबंध या आप कहाँ रह रहे हैं इसका सबूत",
      "आधार कार्ड और आधार से जुड़ी बैंक पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "Can I get Swadhar along with the post-matric scholarship?", hi: "क्या स्वाधार पोस्ट-मैट्रिक छात्रवृत्ति के साथ मिल सकता है?" },
      a: {
        en: "Yes. The post-matric scholarship covers your fees, while Swadhar covers food and lodging for students who did not get a hostel seat.",
        hi: "हाँ। पोस्ट-मैट्रिक छात्रवृत्ति से फ़ीस मिलती है, जबकि स्वाधार उन छात्रों के खाने और रहने के लिए है जिन्हें हॉस्टल में जगह नहीं मिली।",
      },
    },
    {
      q: { en: "Is Swadhar applied for on MahaDBT?", hi: "क्या स्वाधार का आवेदन MahaDBT पर होता है?" },
      a: {
        en: "No. Swadhar has its own application on the Social Justice Department's hostel management portal, not on MahaDBT.",
        hi: "नहीं। स्वाधार का आवेदन सामाजिक न्याय विभाग के हॉस्टल मैनेजमेंट पोर्टल पर अलग से होता है, MahaDBT पर नहीं।",
      },
    },
  ],

  officialUrl: "https://sjsa.maharashtra.gov.in/en/scheme/bharatratna-dr-babasaheb-ambedkar-swadhar-yojana/",
  sources: [
    "https://sjsa.maharashtra.gov.in/en/scheme/bharatratna-dr-babasaheb-ambedkar-swadhar-yojana/",
    "https://hmas.mahait.org/",
    "https://navbharatlive.com/maharashtra/bhandara/bhandara-swadhar-yojana-benefits-for-sc-students-1506997.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
