import { all, ageBetween, any, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "manav-kalyan-yojana",
  name: { en: "Manav Kalyan Yojana", hi: "मानव कल्याण योजना" },
  aka: ["Manav Kalyan toolkit", "e-Kutir Manav Kalyan", "Gujarat toolkit scheme"],
  shortDescription: {
    en: "People aged 18 to 60 in Gujarat with family income up to ₹6 lakh (or a BPL card) get a free toolkit for one of 10 small trades, like beauty parlour, plumbing or tailoring work.",
    hi: "गुजरात में 18 से 60 साल के लोगों को, जिनकी पारिवारिक आय ₹6 लाख तक है (या BPL कार्ड है), ब्यूटी पार्लर, प्लंबिंग जैसे 10 छोटे कामों में से एक के लिए मुफ़्त औज़ार किट मिलती है।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Commissioner of Cottage and Rural Industries, Industries and Mines Department, Government of Gujarat", hi: "कुटीर एवं ग्रामोद्योग आयुक्तालय, उद्योग एवं खान विभाग, गुजरात सरकार" },
  categories: ["business", "skills-employment"],
  tags: ["toolkit", "self employment", "manav kalyan", "e-kutir", "artisan", "gujarat"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 18, max: 60 },
  kundliHouse: "business",
  eligibility: all(
    residentOf("gujarat"),
    ...ageBetween(18, 60),
    labelled(any(incomeUpTo(600_000), isTrue("bpl")), {
      en: "Family income up to ₹6 lakh a year, or a BPL card (score 0 to 16)",
      hi: "परिवार की सालाना आय ₹6 लाख तक हो, या BPL कार्ड (स्कोर 0 से 16) हो",
    }),
  ),

  details: {
    en: [
      "Manav Kalyan Yojana gives free tools and equipment to people from poorer families so they can earn through small self-employment. It is run by the Commissioner of Cottage and Rural Industries through the e-Kutir portal.",
      "Toolkits are given for 10 trades: milk and curd selling, embroidery, beauty parlour, papad making, vehicle servicing and repair, plumbing, centring work, electric appliance repair, pickle making and puncture repair. Selected applicants get an e-voucher (QR code) to collect the kit from an empanelled dealer.",
      "Applications open once a year on e-kutir.gujarat.gov.in; for 2026-27 the portal opened on 17 June 2026. Beneficiaries are picked by a draw when there are more applicants than kits.",
    ],
    hi: [
      "मानव कल्याण योजना गरीब परिवारों के लोगों को मुफ़्त औज़ार और उपकरण देती है, ताकि वे छोटा स्वरोज़गार करके कमा सकें। इसे कुटीर एवं ग्रामोद्योग आयुक्तालय ई-कुटीर पोर्टल से चलाता है।",
      "10 कामों के लिए किट मिलती है: दूध-दही बेचना, कढ़ाई, ब्यूटी पार्लर, पापड़ बनाना, वाहन सर्विसिंग और मरम्मत, प्लंबिंग, सेंटरिंग का काम, बिजली उपकरण मरम्मत, अचार बनाना और पंक्चर ठीक करना। चुने गए लोगों को ई-वाउचर (QR कोड) मिलता है, जिससे वे सूचीबद्ध डीलर से किट ले सकते हैं।",
      "आवेदन साल में एक बार e-kutir.gujarat.gov.in पर खुलते हैं; 2026-27 के लिए पोर्टल 17 जून 2026 को खुला। आवेदक किट से ज़्यादा हों तो लाभार्थी ड्रॉ से चुने जाते हैं।",
    ],
  },
  benefits: {
    en: [
      "A free toolkit for one of 10 small trades.",
      "The kit is collected from an empanelled dealer using a QR-code e-voucher.",
      "Only one toolkit per family.",
    ],
    hi: [
      "10 छोटे कामों में से एक के लिए मुफ़्त औज़ार किट।",
      "किट QR कोड वाले ई-वाउचर से सूचीबद्ध डीलर से ली जाती है।",
      "एक परिवार को एक ही किट मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 to 60 and living in Gujarat.",
      "Family income up to ₹6 lakh a year (same in villages and cities), or a BPL card with a score of 0 to 16.",
      "No income limit for the 12 most backward castes among Scheduled Castes, and for the most backward and nomadic or denotified groups among SEBC.",
      "No one in your family has received a Manav Kalyan toolkit before.",
    ],
    hi: [
      "उम्र 18 से 60 साल और गुजरात में रहते हों।",
      "परिवार की सालाना आय ₹6 लाख तक (गाँव और शहर दोनों में), या 0 से 16 स्कोर वाला BPL कार्ड।",
      "अनुसूचित जाति की 12 सबसे पिछड़ी जातियों, और SEBC में सबसे पिछड़ी व घुमंतू-विमुक्त जातियों पर आय सीमा लागू नहीं।",
      "आपके परिवार में किसी को पहले मानव कल्याण की किट न मिली हो।",
    ],
  },
  exclusions: {
    en: ["Under 18 or over 60.", "Family income above ₹6 lakh (unless exempt).", "Families that have already received a toolkit."],
    hi: ["उम्र 18 से कम या 60 से ज़्यादा।", "परिवार की आय ₹6 लाख से ज़्यादा (छूट वाले वर्ग को छोड़कर)।", "जिन परिवारों को पहले किट मिल चुकी है।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to e-kutir.gujarat.gov.in and register as a new individual. Your user ID and password come by SMS.",
        "Log in, complete your profile, choose Manav Kalyan Yojana and pick your trade.",
        "Upload photos of the original documents (PDF or JPEG) and submit. You can apply in Gujarati too.",
        "If selected, download the QR code from the e-Kutir app and collect your kit from a listed dealer.",
      ],
      hi: [
        "e-kutir.gujarat.gov.in पर जाएँ और नए व्यक्ति के रूप में रजिस्टर करें। यूज़र ID और पासवर्ड SMS से आएगा।",
        "लॉगिन करें, प्रोफ़ाइल पूरी करें, मानव कल्याण योजना चुनें और अपना काम चुनें।",
        "असली दस्तावेज़ों की फ़ोटो (PDF या JPEG) अपलोड करके जमा करें। गुजराती में भी आवेदन हो सकता है।",
        "चुने जाने पर ई-कुटीर ऐप से QR कोड डाउनलोड करें और सूचीबद्ध डीलर से किट लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Income certificate or BPL card", "Age proof", "Caste certificate, if claiming an income exemption", "Proof of experience or training in the trade, if any", "Ration card"],
    hi: ["आधार कार्ड", "आय प्रमाण पत्र या BPL कार्ड", "उम्र का प्रमाण", "जाति प्रमाण पत्र, अगर आय सीमा में छूट चाहते हैं", "काम का अनुभव या प्रशिक्षण का प्रमाण, अगर हो", "राशन कार्ड"],
  },
  faqs: [
    {
      q: { en: "When can I apply?", hi: "आवेदन कब कर सकते हैं?" },
      a: {
        en: "Applications open once a year on the e-Kutir portal. Check the News section of e-kutir.gujarat.gov.in for the current window.",
        hi: "आवेदन साल में एक बार ई-कुटीर पोर्टल पर खुलते हैं। अभी की तारीख़ों के लिए e-kutir.gujarat.gov.in का News हिस्सा देखें।",
      },
    },
    {
      q: { en: "Can two people from my family apply?", hi: "क्या मेरे परिवार के दो लोग आवेदन कर सकते हैं?" },
      a: {
        en: "No. Only one toolkit is given per family.",
        hi: "नहीं। एक परिवार को एक ही किट दी जाती है।",
      },
    },
  ],

  officialUrl: "https://e-kutir.gujarat.gov.in/",
  sources: [
    "https://cottage.gujarat.gov.in/Eng/HomeGuj-28247221713D5B5D2D262A74-262A74-5E25725B5D2D-2824725B5D2D",
    "https://e-kutir.gujarat.gov.in/NewsAndNotification.aspx",
    "https://dbt.gujarat.gov.in/mainpageschemelist",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1995,
  status: "active",
};

export default scheme;
