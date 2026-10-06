import { all, isTrue, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-garib-kalyan-anna-yojana",
  name: { en: "Pradhan Mantri Garib Kalyan Anna Yojana", hi: "प्रधानमंत्री गरीब कल्याण अन्न योजना" },
  aka: ["PMGKAY", "Free ration scheme", "NFSA ration"],
  shortDescription: {
    en: "Get free foodgrains every month from your ration shop: 5 kg per person for priority households and 35 kg per family for Antyodaya (AAY) cards, until December 2028.",
    hi: "राशन की दुकान से हर महीने मुफ़्त अनाज पाएँ: प्राथमिकता वाले परिवारों को हर व्यक्ति 5 किलो और अंत्योदय (AAY) कार्ड पर हर परिवार 35 किलो, दिसंबर 2028 तक।",
  },
  level: "central",
  ministry: "consumer-affairs-food-public-distribution",
  categories: ["social-welfare"],
  tags: ["ration", "free ration", "food", "wheat", "rice", "ration card", "nfsa"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    labelled(isTrue("bpl"), {
      en: "Your family has an NFSA ration card (Antyodaya or priority household)",
      hi: "आपके परिवार के पास NFSA राशन कार्ड है (अंत्योदय या प्राथमिकता वाला परिवार)",
    }),
  ),

  details: {
    en: [
      "PMGKAY gives free foodgrains to about 81 crore people covered under the National Food Security Act (NFSA). It is run by the Department of Food and Public Distribution with state governments, through more than 5 lakh fair price (ration) shops.",
      "Earlier, NFSA grains were sold at ₹1 to ₹3 a kg. Since 1 January 2024, they are completely free under PMGKAY. The Union Cabinet has approved this for five years, up to 31 December 2028.",
      "You collect your grains (rice, wheat or coarse grains/millets, depending on your state) at the ration shop using your ration card and Aadhaar-based biometric check. With One Nation One Ration Card, you can collect your share from any ration shop in India.",
    ],
    hi: [
      "PMGKAY राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) में शामिल लगभग 81 करोड़ लोगों को मुफ़्त अनाज देती है। इसे खाद्य और सार्वजनिक वितरण विभाग राज्य सरकारों के साथ 5 लाख से ज़्यादा उचित मूल्य (राशन) दुकानों के ज़रिए चलाता है।",
      "पहले NFSA का अनाज ₹1 से ₹3 किलो पर मिलता था। 1 जनवरी 2024 से PMGKAY में यह पूरी तरह मुफ़्त है। केंद्रीय मंत्रिमंडल ने इसे पाँच साल, 31 दिसंबर 2028 तक के लिए मंज़ूरी दी है।",
      "आप राशन कार्ड और आधार से बायोमेट्रिक जाँच करवाकर राशन की दुकान से अनाज (राज्य के हिसाब से चावल, गेहूँ या मोटा अनाज/श्री अन्न) लेते हैं। वन नेशन वन राशन कार्ड से आप भारत की किसी भी राशन दुकान से अपना हिस्सा ले सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Priority household (PHH) cards: 5 kg of free foodgrains per person every month.",
      "Antyodaya Anna Yojana (AAY) cards: 35 kg of free foodgrains per family every month.",
      "No money to pay at the ration shop for these grains.",
      "Collect your ration from any ration shop in India under One Nation One Ration Card.",
    ],
    hi: [
      "प्राथमिकता वाले परिवार (PHH) कार्ड: हर व्यक्ति को हर महीने 5 किलो मुफ़्त अनाज।",
      "अंत्योदय अन्न योजना (AAY) कार्ड: हर परिवार को हर महीने 35 किलो मुफ़्त अनाज।",
      "इस अनाज के लिए राशन दुकान पर कोई पैसा नहीं देना।",
      "वन नेशन वन राशन कार्ड से भारत की किसी भी राशन दुकान से राशन लें।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family must have a ration card under NFSA: either an Antyodaya (AAY) card or a priority household (PHH) card.",
      "Who gets these cards is decided by your state government using its own criteria for poor and vulnerable families.",
      "Family members should be linked to the ration card and Aadhaar (e-KYC).",
    ],
    hi: [
      "आपके परिवार के पास NFSA राशन कार्ड होना चाहिए: अंत्योदय (AAY) कार्ड या प्राथमिकता वाला परिवार (PHH) कार्ड।",
      "ये कार्ड किसे मिलेंगे, यह राज्य सरकार गरीब और कमज़ोर परिवारों के लिए अपने नियमों से तय करती है।",
      "परिवार के सदस्य राशन कार्ड और आधार (e-KYC) से जुड़े होने चाहिए।",
    ],
  },
  exclusions: {
    en: [
      "Families without an NFSA ration card (state-only or non-priority cards are not covered by PMGKAY).",
      "Members whose names are not on the ration card or whose e-KYC is not done may not get their share.",
    ],
    hi: [
      "जिन परिवारों के पास NFSA राशन कार्ड नहीं है (सिर्फ़ राज्य के या गैर-प्राथमिकता वाले कार्ड PMGKAY में नहीं आते)।",
      "जिन सदस्यों का नाम राशन कार्ड में नहीं है या जिनका e-KYC नहीं हुआ है, उन्हें हिस्सा नहीं मिल सकता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "To get a new NFSA ration card, visit your state's food and civil supplies portal (links are on nfsa.gov.in).",
        "Fill in the new ration card form with details of all family members and upload documents.",
        "After the state approves it, collect free grains every month from your ration shop. You can check your entitlement on the Mera Ration app.",
      ],
      hi: [
        "नया NFSA राशन कार्ड बनवाने के लिए अपने राज्य के खाद्य और नागरिक आपूर्ति पोर्टल पर जाएँ (लिंक nfsa.gov.in पर हैं)।",
        "परिवार के सभी सदस्यों की जानकारी के साथ नया राशन कार्ड फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "राज्य की मंज़ूरी के बाद हर महीने राशन दुकान से मुफ़्त अनाज लें। अपना हक़ Mera Ration ऐप पर देख सकते हैं।",
      ],
    },
    offline: {
      en: [
        "Apply for an NFSA ration card at the block, tehsil or food supply office (or through a CSC).",
        "If you already have an AAY or PHH card, go to your ration shop each month.",
        "Give your ration card number and do the fingerprint or eye scan to get your free grains.",
      ],
      hi: [
        "NFSA राशन कार्ड के लिए ब्लॉक, तहसील या खाद्य आपूर्ति कार्यालय (या CSC) में आवेदन करें।",
        "अगर आपके पास पहले से AAY या PHH कार्ड है, तो हर महीने राशन दुकान पर जाएँ।",
        "राशन कार्ड नंबर बताएँ और अंगूठे या आँख की स्कैनिंग करवाकर मुफ़्त अनाज लें।",
      ],
    },
  },
  documents: {
    en: ["NFSA ration card (AAY or PHH)", "Aadhaar of family members (for e-KYC)", "Address proof and income details (for a new card)", "Passport-size photo of the head of family (for a new card)"],
    hi: ["NFSA राशन कार्ड (AAY या PHH)", "परिवार के सदस्यों का आधार (e-KYC के लिए)", "पते का सबूत और आय की जानकारी (नए कार्ड के लिए)", "परिवार के मुखिया की पासपोर्ट साइज़ फ़ोटो (नए कार्ड के लिए)"],
  },
  faqs: [
    {
      q: { en: "I have moved to another state for work. Can I still get my ration?", hi: "मैं काम के लिए दूसरे राज्य आ गया/गई हूँ। क्या फिर भी राशन मिलेगा?" },
      a: {
        en: "Yes. Under One Nation One Ration Card, you can take your share of free grains from any ration shop in India using your ration card number and Aadhaar authentication.",
        hi: "हाँ। वन नेशन वन राशन कार्ड से आप राशन कार्ड नंबर और आधार से पहचान करवाकर भारत की किसी भी राशन दुकान से अपने हिस्से का मुफ़्त अनाज ले सकते हैं।",
      },
    },
    {
      q: { en: "The ration shop is asking for money. What should I do?", hi: "राशन दुकान वाला पैसे माँग रहा है। क्या करूँ?" },
      a: {
        en: "NFSA grains are free under PMGKAY. Complain to your state food department helpline or the national toll-free number 1967 (or your state's number).",
        hi: "PMGKAY में NFSA का अनाज मुफ़्त है। अपने राज्य के खाद्य विभाग हेल्पलाइन या टोल-फ़्री नंबर 1967 (या अपने राज्य के नंबर) पर शिकायत करें।",
      },
    },
  ],

  officialUrl: "https://nfsa.gov.in/",
  sources: [
    "https://www.pmindia.gov.in/en/news_updates/free-foodgrains-for-81-35-crore-beneficiaries-for-five-years-cabinet-decision/",
    "https://nfsa.gov.in/",
    "https://dfpd.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
