import { all, isFalse, labelled, notTaxPayer, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pmay-gramin",
  name: { en: "Pradhan Mantri Awas Yojana – Gramin", hi: "प्रधानमंत्री आवास योजना – ग्रामीण" },
  aka: ["PMAY-G", "PMAY Gramin", "Awas Yojana"],
  shortDescription: {
    en: "Get ₹1.20 lakh (₹1.30 lakh in hilly and North-East states) to build a pucca house in your village if your family is homeless or lives in a kutcha house.",
    hi: "अगर आपका परिवार बेघर है या कच्चे घर में रहता है, तो गाँव में पक्का घर बनाने के लिए ₹1.20 लाख (पहाड़ी और पूर्वोत्तर राज्यों में ₹1.30 लाख) पाएँ।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["housing"],
  tags: ["house", "awas", "rural housing", "pucca house", "kutcha house", "village"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 120000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    labelled(when("area", "eq", "rural"), { en: "You live in a village (rural area)", hi: "आप गाँव (ग्रामीण क्षेत्र) में रहते हैं" }),
    labelled(isFalse("pucca"), { en: "Your family does not own a pucca house", hi: "आपके परिवार के पास पक्का घर नहीं है" }),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
  ),

  details: {
    en: [
      "PMAY-Gramin helps poor families in villages build a safe, pucca house of at least 25 square metres with a kitchen. It is run by the Ministry of Rural Development together with state governments.",
      "The money is paid straight into the beneficiary's bank account in instalments as construction moves ahead, and each stage is checked with geo-tagged photos. On top of the housing grant, you can get 90 to 95 days of paid work under MGNREGA for building your own house, and help for a toilet under Swachh Bharat Mission.",
      "The scheme has been extended from 2024-25 to 2028-29 to build 2 crore more houses. New families are being added through the Awaas+ 2024 survey, and the list is checked by the Gram Sabha.",
    ],
    hi: [
      "PMAY-ग्रामीण गाँव के गरीब परिवारों को कम से कम 25 वर्ग मीटर का पक्का और सुरक्षित घर, रसोई के साथ, बनाने में मदद करती है। इसे ग्रामीण विकास मंत्रालय राज्य सरकारों के साथ मिलकर चलाता है।",
      "पैसा किस्तों में सीधे लाभार्थी के बैंक खाते में आता है, जैसे-जैसे घर बनता जाता है। हर चरण की जाँच जियो-टैग फ़ोटो से होती है। आवास राशि के अलावा, अपना घर बनाने के लिए मनरेगा में 90 से 95 दिन की मज़दूरी और स्वच्छ भारत मिशन से शौचालय के लिए मदद भी मिल सकती है।",
      "योजना को 2024-25 से 2028-29 तक बढ़ाया गया है ताकि 2 करोड़ और घर बनें। नए परिवारों को आवास+ 2024 सर्वे से जोड़ा जा रहा है और सूची की जाँच ग्राम सभा करती है।",
    ],
  },
  benefits: {
    en: [
      "₹1.20 lakh per house in plain areas.",
      "₹1.30 lakh per house in North-Eastern states, Himachal Pradesh, Uttarakhand, Jammu & Kashmir and Ladakh.",
      "90 days of unskilled wage work under MGNREGA for building your house (95 days in hilly and difficult areas).",
      "Help to build a toilet through Swachh Bharat Mission (Gramin) or other schemes.",
      "Money goes directly into your bank or post office account in instalments.",
    ],
    hi: [
      "मैदानी इलाकों में हर घर के लिए ₹1.20 लाख।",
      "पूर्वोत्तर राज्यों, हिमाचल प्रदेश, उत्तराखंड, जम्मू-कश्मीर और लद्दाख में हर घर के लिए ₹1.30 लाख।",
      "अपना घर बनाने के लिए मनरेगा में 90 दिन की मज़दूरी (पहाड़ी और कठिन इलाकों में 95 दिन)।",
      "स्वच्छ भारत मिशन (ग्रामीण) या दूसरी योजनाओं से शौचालय बनाने में मदद।",
      "पैसा किस्तों में सीधे आपके बैंक या डाकघर खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Family lives in a rural area and is homeless, or lives in a kutcha or broken-down house.",
      "Family is found eligible in the SECC 2011 data or the Awaas+ survey, and is approved by the Gram Sabha.",
      "Family does not own a pucca house anywhere.",
      "Family does not fall under any of the exclusion rules listed below.",
    ],
    hi: [
      "परिवार गाँव में रहता है और बेघर है, या कच्चे या टूटे-फूटे घर में रहता है।",
      "परिवार SECC 2011 के आँकड़ों या आवास+ सर्वे में पात्र पाया गया है और ग्राम सभा ने मंज़ूरी दी है।",
      "परिवार के पास कहीं भी पक्का घर नहीं है।",
      "परिवार नीचे दिए गए किसी भी बाहर रखने वाले नियम में नहीं आता।",
    ],
  },
  exclusions: {
    en: [
      "Families owning a motorised three- or four-wheeler, or a mechanised three- or four-wheel farm machine.",
      "Families with a Kisan Credit Card limit of ₹50,000 or more.",
      "Families where any member is a government employee, earns more than ₹15,000 a month, or pays income tax or professional tax.",
      "Families running a non-farm business registered with the government.",
      "Families owning large irrigated land above the limits set in the scheme rules (for example, 2.5 acres or more of irrigated land with irrigation equipment).",
    ],
    hi: [
      "जिन परिवारों के पास मोटर वाला तीन या चार पहिया वाहन, या तीन या चार पहिया खेती मशीन है।",
      "जिन परिवारों के किसान क्रेडिट कार्ड की सीमा ₹50,000 या उससे ज़्यादा है।",
      "जिस परिवार का कोई सदस्य सरकारी कर्मचारी है, हर महीने ₹15,000 से ज़्यादा कमाता है, या आयकर या प्रोफ़ेशनल टैक्स देता है।",
      "जो परिवार सरकार में पंजीकृत गैर-कृषि कारोबार चलाते हैं।",
      "जिन परिवारों के पास योजना के नियमों से ज़्यादा सिंचित ज़मीन है (जैसे सिंचाई साधन के साथ 2.5 एकड़ या उससे ज़्यादा सिंचित ज़मीन)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Download the Awaas+ 2024 app on an Android phone (it is also used by survey staff).",
        "Use the self-survey option, verify with Aadhaar face authentication, and fill in your family and house details with photos.",
        "Your entry is checked by the block office and placed before the Gram Sabha. Track your status on pmayg.nic.in.",
      ],
      hi: [
        "Android फ़ोन पर आवास+ 2024 ऐप डाउनलोड करें (सर्वे करने वाले कर्मचारी भी यही ऐप इस्तेमाल करते हैं)।",
        "सेल्फ़-सर्वे विकल्प चुनें, आधार फ़ेस ऑथेंटिकेशन से पुष्टि करें और फ़ोटो के साथ परिवार और घर की जानकारी भरें।",
        "आपकी जानकारी की जाँच ब्लॉक ऑफ़िस करता है और फिर ग्राम सभा में रखी जाती है। अपनी स्थिति pmayg.nic.in पर देखें।",
      ],
    },
    offline: {
      en: [
        "Contact your Gram Panchayat, Gram Rozgar Sahayak or block office and ask to be included in the Awaas+ survey.",
        "Give your Aadhaar, bank account and job card details to the surveyor.",
        "Once the Gram Sabha approves the list and the house is sanctioned, start building; instalments are released as each stage is completed.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, ग्राम रोज़गार सहायक या ब्लॉक ऑफ़िस से संपर्क करें और आवास+ सर्वे में नाम जुड़वाने को कहें।",
        "सर्वे करने वाले को आधार, बैंक खाता और जॉब कार्ड की जानकारी दें।",
        "ग्राम सभा से सूची पास होने और घर मंज़ूर होने के बाद निर्माण शुरू करें; हर चरण पूरा होने पर किस्त मिलती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card (with consent to use it)", "Bank or post office account linked to Aadhaar", "MGNREGA job card", "Swachh Bharat Mission (SBM) number, if any", "Mobile number"],
    hi: ["आधार कार्ड (इस्तेमाल की सहमति के साथ)", "आधार से जुड़ा बैंक या डाकघर खाता", "मनरेगा जॉब कार्ड", "स्वच्छ भारत मिशन (SBM) नंबर, अगर हो", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "My name is not on the PMAY-G list. What can I do?", hi: "मेरा नाम PMAY-G सूची में नहीं है। क्या करूँ?" },
      a: {
        en: "Ask your Gram Panchayat to add your family in the Awaas+ 2024 survey, or do a self-survey on the Awaas+ 2024 app. The final list is approved by the Gram Sabha, so you can also raise it there.",
        hi: "अपनी ग्राम पंचायत से आवास+ 2024 सर्वे में परिवार का नाम जोड़ने को कहें, या आवास+ 2024 ऐप पर सेल्फ़-सर्वे करें। अंतिम सूची ग्राम सभा मंज़ूर करती है, इसलिए वहाँ भी बात रख सकते हैं।",
      },
    },
    {
      q: { en: "How do I know if my instalment has been paid?", hi: "कैसे पता करूँ कि मेरी किस्त आ गई है?" },
      a: {
        en: "Each instalment is paid by DBT after the stage of your house is checked with geo-tagged photos. You can see your sanction and payment details on pmayg.nic.in using your registration number, or ask at the block office.",
        hi: "घर के हर चरण की जियो-टैग फ़ोटो से जाँच के बाद किस्त DBT से आती है। अपने पंजीकरण नंबर से pmayg.nic.in पर मंज़ूरी और भुगतान की जानकारी देख सकते हैं, या ब्लॉक ऑफ़िस में पूछ सकते हैं।",
      },
    },
  ],

  officialUrl: "https://pmayg.nic.in/",
  sources: [
    "https://pmayg.nic.in/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc2025924644801.pdf",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/nov/doc20241119437801.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
