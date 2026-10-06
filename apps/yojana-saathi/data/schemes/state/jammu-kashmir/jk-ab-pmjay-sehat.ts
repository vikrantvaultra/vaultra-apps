import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-ab-pmjay-sehat",
  overlapGroup: "health-cover",
  name: { en: "Ayushman Bharat PM-JAY SEHAT (Jammu & Kashmir)", hi: "आयुष्मान भारत PM-JAY सेहत (जम्मू-कश्मीर)" },
  aka: ["SEHAT", "PMJAY SEHAT", "AB-PMJAY SEHAT", "Golden Card J&K"],
  shortDescription: {
    en: "Every family living in Jammu & Kashmir, including government employees and pensioners, gets free cashless hospital treatment up to ₹5 lakh a year.",
    hi: "जम्मू-कश्मीर में रहने वाले हर परिवार को, सरकारी कर्मचारियों और पेंशनभोगियों समेत, हर साल ₹5 लाख तक का मुफ़्त कैशलेस अस्पताल इलाज मिलता है।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "State Health Agency, Health and Medical Education Department, Jammu and Kashmir", hi: "राज्य स्वास्थ्य एजेंसी, स्वास्थ्य एवं चिकित्सा शिक्षा विभाग, जम्मू और कश्मीर" },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "sehat", "golden card", "ayushman card", "free treatment", "jammu kashmir"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("jammu-kashmir")),

  details: {
    en: [
      "SEHAT (Social Endeavour for Health and Telemedicine) extends Ayushman Bharat PM-JAY to every resident of Jammu & Kashmir. Families that are not on the central PM-JAY list are covered at the cost of the J&K government, so the whole population gets the same ₹5 lakh cover.",
      "The cover is a family floater: one member or all members together can use up to ₹5 lakh a year for hospital treatment. It works at government hospitals and empanelled private hospitals across India, using your Ayushman (Golden) card.",
      "The scheme is run by the State Health Agency of J&K. The current policy term began on 17 April 2025, and more than 3.5 lakh hospital treatments were approved by February 2026.",
    ],
    hi: [
      "सेहत (सोशल एंडेवर फ़ॉर हेल्थ एंड टेलीमेडिसिन) आयुष्मान भारत PM-JAY को जम्मू-कश्मीर के हर निवासी तक पहुँचाता है। जो परिवार केंद्र की PM-JAY सूची में नहीं हैं, उनका ख़र्च जम्मू-कश्मीर सरकार उठाती है, ताकि सबको ₹5 लाख का एक जैसा कवर मिले।",
      "यह फ़ैमिली फ़्लोटर कवर है: परिवार का एक सदस्य या सभी मिलकर साल में ₹5 लाख तक का अस्पताल इलाज ले सकते हैं। आयुष्मान (गोल्डन) कार्ड से यह पूरे भारत के सरकारी और सूचीबद्ध निजी अस्पतालों में काम करता है।",
      "यह योजना जम्मू-कश्मीर की राज्य स्वास्थ्य एजेंसी चलाती है। मौजूदा पॉलिसी अवधि 17 अप्रैल 2025 से शुरू हुई, और फ़रवरी 2026 तक 3.5 लाख से ज़्यादा इलाज मंज़ूर हो चुके थे।",
    ],
  },
  benefits: {
    en: [
      "Free, cashless hospital treatment up to ₹5 lakh per family per year.",
      "Covers serious care such as cancer, heart and kidney treatment.",
      "Includes up to 3 days before and 15 days after hospitalisation, such as tests and medicines.",
      "Usable at government and empanelled private hospitals anywhere in India.",
    ],
    hi: [
      "हर परिवार को हर साल ₹5 लाख तक का मुफ़्त, कैशलेस अस्पताल इलाज।",
      "कैंसर, दिल और किडनी जैसी गंभीर बीमारियों का इलाज शामिल।",
      "भर्ती से 3 दिन पहले और 15 दिन बाद तक के जाँच और दवा जैसे ख़र्च शामिल।",
      "भारत में कहीं भी सरकारी और सूचीबद्ध निजी अस्पतालों में इस्तेमाल हो सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "All residents of Jammu & Kashmir.",
      "Includes serving and retired government employees and their families.",
      "No income limit.",
    ],
    hi: ["जम्मू-कश्मीर के सभी निवासी।", "सरकारी कर्मचारी, सेवानिवृत्त कर्मचारी और उनके परिवार भी शामिल।", "कोई आय सीमा नहीं।"],
  },
  exclusions: {
    en: [
      "Outpatient (OPD) visits that don't need hospital admission are not covered.",
      "Treatment at hospitals that are not empanelled under PM-JAY.",
    ],
    hi: ["जिन OPD इलाजों में भर्ती की ज़रूरत नहीं होती, वे कवर नहीं हैं।", "PM-JAY में सूचीबद्ध न होने वाले अस्पतालों में इलाज।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Download the Ayushman app or go to beneficiary.nha.gov.in and log in with your mobile number.",
        "Search your family using your ration card or Aadhaar, select Jammu & Kashmir, and complete Aadhaar e-KYC for each member.",
        "Download your Ayushman (Golden) card once it is approved.",
      ],
      hi: [
        "आयुष्मान ऐप डाउनलोड करें या beneficiary.nha.gov.in पर जाकर मोबाइल नंबर से लॉग इन करें।",
        "राशन कार्ड या आधार से अपना परिवार खोजें, जम्मू-कश्मीर चुनें और हर सदस्य का आधार e-KYC पूरा करें।",
        "मंज़ूरी के बाद अपना आयुष्मान (गोल्डन) कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit a common service centre or the Ayushman Mitra desk at an empanelled hospital with your Aadhaar and ration card.",
        "They will verify your family and issue the Golden card.",
        "When you need treatment, show the card at the hospital's Ayushman desk; you don't pay for covered care.",
      ],
      hi: [
        "आधार और राशन कार्ड लेकर कॉमन सर्विस सेंटर या किसी सूचीबद्ध अस्पताल के आयुष्मान मित्र डेस्क पर जाएँ।",
        "वे आपके परिवार की पुष्टि करके गोल्डन कार्ड बना देंगे।",
        "इलाज के समय अस्पताल के आयुष्मान डेस्क पर कार्ड दिखाएँ; कवर वाले इलाज का पैसा नहीं देना होता।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of each family member", "Ration card", "Mobile number"],
    hi: ["परिवार के हर सदस्य का आधार कार्ड", "राशन कार्ड", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "I'm a government employee. Am I covered?", hi: "मैं सरकारी कर्मचारी हूँ। क्या मुझे कवर मिलेगा?" },
      a: {
        en: "Yes. In J&K, SEHAT covers serving and retired employees and their families too, unlike PM-JAY in most states.",
        hi: "हाँ। ज़्यादातर राज्यों की PM-JAY से अलग, जम्मू-कश्मीर में सेहत योजना सेवारत और सेवानिवृत्त कर्मचारियों और उनके परिवारों को भी कवर करती है।",
      },
    },
    {
      q: { en: "Do I pay any premium?", hi: "क्या कोई प्रीमियम देना होता है?" },
      a: {
        en: "No. The cover is free; the central and J&K governments pay for it.",
        hi: "नहीं। कवर मुफ़्त है; इसका ख़र्च केंद्र और जम्मू-कश्मीर सरकार उठाती है।",
      },
    },
  ],

  officialUrl: "https://beneficiary.nha.gov.in/",
  sources: [
    "https://dipr.jk.gov.in/Prnv?n=24779",
    "https://shopian.nic.in/ayushman-bharat-pradhan-mantri-jan-arogya-yojana-ab-pmjay-sehat-scheme/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2022/may/doc202251656301.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
