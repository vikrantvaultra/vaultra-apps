import { all, isFalse, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indiramma-indlu",
  name: { en: "Indiramma Indlu (Indiramma Housing Scheme)", hi: "इंदिरम्मा इंड्लु (इंदिरम्मा आवास योजना)" },
  aka: ["Indiramma Houses", "Indiramma Housing", "Indiramma Illu", "Telangana housing scheme"],
  shortDescription: {
    en: "Poor houseless families in Telangana who own a house site get ₹5 lakh in stages to build their own pucca house, with the house in the woman's name.",
    hi: "तेलंगाना के जिन ग़रीब बेघर परिवारों के पास घर के लिए अपनी ज़मीन है, उन्हें अपना पक्का घर बनाने के लिए किस्तों में ₹5 लाख मिलते हैं, घर महिला के नाम पर होता है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Housing Department (Weaker Section Housing Programme), Government of Telangana",
    hi: "आवास विभाग (कमज़ोर वर्ग आवास कार्यक्रम), तेलंगाना सरकार",
  },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "house", "pucca house", "5 lakh", "indiramma", "homeless", "telangana"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 500000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    residentOf("telangana"),
    labelled(isFalse("pucca"), { en: "Family does not own a pucca house", hi: "परिवार के पास पक्का घर न हो" }),
    labelled(isTrue("bpl"), { en: "Family is poor (white ration card / BPL)", hi: "परिवार ग़रीब हो (सफ़ेद राशन कार्ड / BPL)" }),
  ),

  details: {
    en: [
      "Indiramma Indlu is Telangana's housing scheme for houseless poor families, started in March 2024 under G.O.Ms.No.7. It is one of the government's six guarantees.",
      "Families who own a house site get ₹5 lakh to build their own house of about 400 sq. ft. with an RCC roof, a kitchen and a toilet. The money is released in stages as construction progresses, and the house is sanctioned in the woman's name.",
      "In the first phase 4.5 lakh houses were sanctioned and a second phase of 2.5 lakh houses followed. Beneficiaries are chosen through Indiramma Committees at the village and ward level.",
    ],
    hi: [
      "इंदिरम्मा इंड्लु तेलंगाना की बेघर ग़रीब परिवारों के लिए आवास योजना है, जो मार्च 2024 में G.O.Ms.No.7 के तहत शुरू हुई। यह सरकार की छह गारंटियों में से एक है।",
      "जिन परिवारों के पास घर के लिए अपनी ज़मीन है, उन्हें लगभग 400 वर्ग फ़ुट का घर (RCC छत, रसोई और शौचालय के साथ) बनाने के लिए ₹5 लाख मिलते हैं। पैसा निर्माण के अलग-अलग चरणों पर किस्तों में आता है, और घर महिला के नाम पर मंज़ूर होता है।",
      "पहले चरण में 4.5 लाख घर मंज़ूर हुए और दूसरे चरण में 2.5 लाख और। लाभार्थियों का चुनाव गाँव और वार्ड स्तर की इंदिरम्मा समितियाँ करती हैं।",
    ],
  },
  benefits: {
    en: [
      "₹5 lakh to build your own house on your own site.",
      "Paid into your bank account in stages, linked to construction progress.",
      "A pucca house with an RCC roof, kitchen and toilet.",
    ],
    hi: [
      "अपनी ज़मीन पर अपना घर बनाने के लिए ₹5 लाख।",
      "पैसा निर्माण की प्रगति के हिसाब से किस्तों में बैंक खाते में आता है।",
      "RCC छत, रसोई और शौचालय वाला पक्का घर।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family lives in Telangana and is poor (white ration card / BPL).",
      "You do not own a pucca house.",
      "You own a house site (plot) to build on.",
      "The house is sanctioned in the name of the woman of the family.",
    ],
    hi: [
      "आपका परिवार तेलंगाना में रहता है और ग़रीब है (सफ़ेद राशन कार्ड / BPL)।",
      "आपके पास पक्का घर नहीं है।",
      "घर बनाने के लिए आपकी अपनी ज़मीन (प्लॉट) है।",
      "घर परिवार की महिला के नाम पर मंज़ूर होता है।",
    ],
  },
  exclusions: {
    en: ["Families who already own a pucca house.", "Families not in the poor (white ration card) category."],
    hi: ["जिन परिवारों के पास पहले से पक्का घर है।", "जो परिवार ग़रीब (सफ़ेद राशन कार्ड) श्रेणी में नहीं हैं।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Applications were taken during Praja Palana. If you applied then, your application is checked by officials and the Indiramma Committee.",
        "If selected, your name appears in the beneficiary list in the Gram Sabha / ward meeting.",
        "Start construction after sanction and upload stage photos through the officials to get each instalment.",
      ],
      hi: [
        "आवेदन प्रजा पालना के दौरान लिए गए थे। अगर आपने तब आवेदन किया था, तो अधिकारी और इंदिरम्मा समिति उसकी जाँच करते हैं।",
        "चुने जाने पर आपका नाम ग्राम सभा / वार्ड बैठक में लाभार्थी सूची में आता है।",
        "मंज़ूरी के बाद निर्माण शुरू करें और हर किस्त के लिए अधिकारियों के ज़रिए चरण की फ़ोटो अपलोड कराएँ।",
      ],
    },
    online: {
      en: ["Check your application status on indirammaindlu.telangana.gov.in or call the helpline 1800 599 5991."],
      hi: ["indirammaindlu.telangana.gov.in पर आवेदन की स्थिति देखें या हेल्पलाइन 1800 599 5991 पर फ़ोन करें।"],
    },
  },
  documents: {
    en: ["Aadhaar card", "White ration card (Food Security Card)", "Proof of ownership of the house site", "Bank passbook of the woman beneficiary"],
    hi: ["आधार कार्ड", "सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड)", "घर की ज़मीन के मालिकाना हक़ का सबूत", "महिला लाभार्थी की बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "I don't have my own plot. Can I still get a house?", hi: "मेरे पास अपना प्लॉट नहीं है। क्या फिर भी घर मिल सकता है?" },
      a: {
        en: "The ₹5 lakh support is for families who own a site. In Hyderabad, the government has started Indiramma towers for urban poor; ask your local office about other options.",
        hi: "₹5 लाख की मदद उन परिवारों के लिए है जिनके पास अपनी ज़मीन है। हैदराबाद में सरकार ने शहरी ग़रीबों के लिए इंदिरम्मा टावर शुरू किए हैं; दूसरे विकल्पों के लिए अपने स्थानीय दफ़्तर से पूछें।",
      },
    },
    {
      q: { en: "How do I check my status?", hi: "अपनी स्थिति कैसे देखूँ?" },
      a: {
        en: "Use the 'application status' link on indirammaindlu.telangana.gov.in with your application details, or call 1800 599 5991.",
        hi: "indirammaindlu.telangana.gov.in पर 'application status' लिंक में अपने आवेदन की जानकारी डालें, या 1800 599 5991 पर फ़ोन करें।",
      },
    },
  ],

  officialUrl: "https://indirammaindlu.telangana.gov.in/",
  sources: [
    "https://indirammaindlu.telangana.gov.in/",
    "https://www.telangana.gov.in/news/press-releases/2024/07/deputy-cm-presents-budget-for-the-year-2024-25/",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
