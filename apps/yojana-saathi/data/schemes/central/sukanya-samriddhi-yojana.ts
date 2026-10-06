import { all, isTrue, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sukanya-samriddhi-yojana",
  name: { en: "Sukanya Samriddhi Yojana", hi: "सुकन्या समृद्धि योजना" },
  aka: ["SSY", "Sukanya Samriddhi Account"],
  shortDescription: {
    en: "Open a tax-free savings account for your daughter under 10 with just ₹250 a year and earn one of the highest small-savings interest rates (8.2% for Oct–Dec 2026).",
    hi: "10 साल से कम उम्र की बेटी के लिए सिर्फ़ ₹250 सालाना से टैक्स-फ़्री बचत खाता खोलें और छोटी बचत योजनाओं में सबसे ऊँची ब्याज दरों में से एक पाएँ (अक्टूबर–दिसंबर 2026 के लिए 8.2%)।",
  },
  level: "central",
  ministry: "finance",
  categories: ["women-child", "energy-savings"],
  tags: ["daughter", "girl child", "savings", "sukanya", "post office", "tax saving"],
  benefitType: "savings",
  isDBT: false,
  kundliHouse: "daughter",
  eligibility: all(
    labelled(isTrue("daughterUnder10"), { en: "You have a daughter under 10 years of age", hi: "आपकी 10 साल से कम उम्र की बेटी है" }),
  ),

  details: {
    en: [
      "Sukanya Samriddhi Yojana is a small savings scheme of the Government of India, under the Ministry of Finance, to help parents save for a daughter's education and marriage. It is part of the Beti Bachao Beti Padhao campaign.",
      "A parent or legal guardian opens the account in the girl's name at a post office or an authorised bank before she turns 10. You deposit for 15 years from the date of opening, and the account matures 21 years after opening.",
      "The government sets the interest rate every quarter. It is 8.2% a year for October–December 2026. Interest is added every year, and the deposit, interest and maturity amount are all tax-free.",
    ],
    hi: [
      "सुकन्या समृद्धि योजना वित्त मंत्रालय के तहत भारत सरकार की छोटी बचत योजना है, जो माता-पिता को बेटी की पढ़ाई और शादी के लिए बचत में मदद करती है। यह बेटी बचाओ बेटी पढ़ाओ अभियान का हिस्सा है।",
      "माता-पिता या कानूनी अभिभावक बेटी के 10 साल की होने से पहले डाकघर या अधिकृत बैंक में उसके नाम पर खाता खोलते हैं। खाता खुलने से 15 साल तक पैसा जमा करना होता है, और खाता खुलने के 21 साल बाद पूरा (मैच्योर) होता है।",
      "सरकार हर तिमाही ब्याज दर तय करती है। अक्टूबर–दिसंबर 2026 के लिए यह 8.2% सालाना है। ब्याज हर साल जुड़ता है, और जमा, ब्याज और मैच्योरिटी की रकम तीनों टैक्स-फ़्री हैं।",
    ],
  },
  benefits: {
    en: [
      "Interest of 8.2% a year (rate for October–December 2026; reviewed every quarter).",
      "Deposit as little as ₹250 or as much as ₹1.5 lakh in a financial year.",
      "Deposits qualify for tax deduction under Section 80C (old tax regime), and interest and maturity amount are tax-free.",
      "Up to 50% of the balance can be withdrawn for higher education after the girl turns 18 or passes Class 10.",
      "The whole amount is paid to the daughter when the account matures after 21 years.",
    ],
    hi: [
      "8.2% सालाना ब्याज (अक्टूबर–दिसंबर 2026 की दर; हर तिमाही समीक्षा होती है)।",
      "एक वित्त वर्ष में कम से कम ₹250 और ज़्यादा से ज़्यादा ₹1.5 लाख जमा करें।",
      "जमा राशि पर धारा 80C में टैक्स छूट (पुरानी टैक्स व्यवस्था), और ब्याज व मैच्योरिटी राशि टैक्स-फ़्री।",
      "बेटी के 18 साल की होने या 10वीं पास करने के बाद उच्च शिक्षा के लिए बैलेंस का 50% तक निकाला जा सकता है।",
      "21 साल बाद खाता पूरा होने पर पूरी रकम बेटी को मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "The girl must be an Indian resident and below 10 years of age when the account is opened.",
      "The account is opened by her parent or legal guardian.",
      "Only one account per girl, and at most two accounts per family (one more is allowed when twins or triplets are born).",
    ],
    hi: [
      "खाता खुलते समय बेटी भारत की निवासी हो और 10 साल से कम उम्र की हो।",
      "खाता उसके माता-पिता या कानूनी अभिभावक खोलते हैं।",
      "हर बेटी का सिर्फ़ एक खाता, और एक परिवार में ज़्यादा से ज़्यादा दो खाते (जुड़वाँ या तीन बच्चे होने पर एक और खाता खुल सकता है)।",
    ],
  },
  exclusions: {
    en: [
      "Girls aged 10 or above cannot have a new account opened.",
      "Boys are not covered.",
      "A family cannot open more than two accounts, except in the case of twins or triplets.",
    ],
    hi: [
      "10 साल या उससे बड़ी बेटी के नाम पर नया खाता नहीं खुल सकता।",
      "लड़कों के लिए यह योजना नहीं है।",
      "जुड़वाँ या तीन बच्चों को छोड़कर, एक परिवार दो से ज़्यादा खाते नहीं खोल सकता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Some banks let existing customers open an SSY account through net banking or their mobile app; check with your bank.",
        "Once the account is open, you can deposit online through the India Post Payments Bank (IPPB) app or your bank's net banking.",
      ],
      hi: [
        "कुछ बैंक अपने ग्राहकों को नेट बैंकिंग या मोबाइल ऐप से SSY खाता खोलने देते हैं; अपने बैंक से पूछें।",
        "खाता खुलने के बाद आप इंडिया पोस्ट पेमेंट्स बैंक (IPPB) ऐप या बैंक की नेट बैंकिंग से ऑनलाइन पैसा जमा कर सकते हैं।",
      ],
    },
    offline: {
      en: [
        "Visit any post office or an authorised bank branch.",
        "Fill in the Sukanya Samriddhi account opening form.",
        "Submit it with the girl's birth certificate, your ID and address proof, and the first deposit of at least ₹250. You will get a passbook.",
      ],
      hi: [
        "किसी भी डाकघर या अधिकृत बैंक शाखा में जाएँ।",
        "सुकन्या समृद्धि खाता खोलने का फ़ॉर्म भरें।",
        "बेटी का जन्म प्रमाण पत्र, अपनी पहचान और पते का सबूत, और कम से कम ₹250 की पहली जमा के साथ फ़ॉर्म दें। आपको पासबुक मिलेगी।",
      ],
    },
  },
  documents: {
    en: ["Birth certificate of the girl", "Aadhaar and PAN of the parent or guardian", "Address proof of the parent or guardian", "Passport-size photos", "Initial deposit of at least ₹250"],
    hi: ["बेटी का जन्म प्रमाण पत्र", "माता-पिता या अभिभावक का आधार और PAN", "माता-पिता या अभिभावक के पते का सबूत", "पासपोर्ट साइज़ फ़ोटो", "कम से कम ₹250 की पहली जमा राशि"],
  },
  faqs: [
    {
      q: { en: "What if I miss the minimum deposit in a year?", hi: "अगर किसी साल न्यूनतम राशि जमा न कर पाएँ तो?" },
      a: {
        en: "The account becomes inactive (default). You can restart it by paying ₹250 for each missed year plus a penalty of ₹50 per year, before the 15-year deposit period ends.",
        hi: "खाता बंद (डिफ़ॉल्ट) हो जाता है। 15 साल की जमा अवधि ख़त्म होने से पहले, छूटे हर साल के ₹250 और हर साल ₹50 का जुर्माना देकर इसे फिर से चालू कर सकते हैं।",
      },
    },
    {
      q: { en: "Can the account be closed early?", hi: "क्या खाता समय से पहले बंद हो सकता है?" },
      a: {
        en: "Yes, for the daughter's marriage after she turns 18, or in special cases like death of the account holder or serious hardship, as allowed by the rules.",
        hi: "हाँ, बेटी के 18 साल की होने के बाद शादी के लिए, या खाताधारक की मृत्यु या गंभीर परेशानी जैसे ख़ास मामलों में, नियमों के अनुसार।",
      },
    },
  ],

  officialUrl: "https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89",
  sources: [
    "https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89",
    "https://www.indiapost.gov.in/",
    "https://www.angelone.in/news/personal-finance/finance-minister-announces-small-savings-interest-rates-for-october-december-2026-quarter",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
