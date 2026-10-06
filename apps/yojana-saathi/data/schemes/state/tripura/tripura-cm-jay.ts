import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tripura-cm-jay",
  overlapGroup: "health-cover",
  name: { en: "Chief Minister Jan Arogya Yojana (Tripura)", hi: "मुख्यमंत्री जन आरोग्य योजना (त्रिपुरा)" },
  aka: ["CM-JAY", "CMJAY", "Mukhyamantri Jan Arogya Yojana", "Tripura health insurance"],
  shortDescription: {
    en: "Free cashless hospital treatment up to ₹5 lakh a year per family for Tripura households not covered by Ayushman Bharat PM-JAY or another government health insurance scheme.",
    hi: "जो त्रिपुरा परिवार आयुष्मान भारत PM-JAY या किसी दूसरी सरकारी स्वास्थ्य बीमा योजना में नहीं हैं, उन्हें हर साल प्रति परिवार ₹5 लाख तक का मुफ़्त कैशलेस इलाज।",
  },
  level: "state",
  state: "tripura",
  department: { en: "Health & Family Welfare Department, Government of Tripura", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, त्रिपुरा सरकार" },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "free treatment", "hospital", "cashless", "5 lakh", "ayushman", "tripura"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("tripura")),

  details: {
    en: [
      "The Chief Minister Jan Arogya Yojana (CM-JAY) is Tripura's own health insurance scheme. It was launched on 15 February 2024 to give families left out of Ayushman Bharat PM-JAY the same kind of protection.",
      "Each covered family can get cashless, paperless hospital treatment worth up to ₹5 lakh a year. Treatment is available at government hospitals and at selected private hospitals inside Tripura that are empanelled under the scheme.",
      "The state pays for the scheme. It covers every household in Tripura that does not already come under PM-JAY, the construction workers' scheme, the CAPF scheme, PM-JANMAN or any other government health insurance.",
    ],
    hi: [
      "मुख्यमंत्री जन आरोग्य योजना (CM-JAY) त्रिपुरा की अपनी स्वास्थ्य बीमा योजना है। इसे 15 फ़रवरी 2024 को शुरू किया गया, ताकि आयुष्मान भारत PM-JAY से छूटे परिवारों को भी वैसी ही सुरक्षा मिले।",
      "हर कवर किए गए परिवार को साल में ₹5 लाख तक का कैशलेस और बिना काग़ज़ी झंझट वाला अस्पताल इलाज मिल सकता है। इलाज त्रिपुरा के सरकारी अस्पतालों और योजना से जुड़े चुनिंदा निजी अस्पतालों में मिलता है।",
      "योजना का ख़र्च राज्य सरकार उठाती है। इसमें त्रिपुरा के वे सभी परिवार आते हैं जो पहले से PM-JAY, निर्माण श्रमिक योजना, CAPF योजना, PM-JANMAN या किसी दूसरी सरकारी स्वास्थ्य बीमा योजना में नहीं हैं।",
    ],
  },
  benefits: {
    en: [
      "Health cover of up to ₹5 lakh per family per year for hospital admission.",
      "Cashless and paperless treatment at empanelled hospitals.",
      "Covers government hospitals and selected packages at empanelled private hospitals in Tripura.",
    ],
    hi: [
      "अस्पताल में भर्ती होने पर हर साल प्रति परिवार ₹5 लाख तक का स्वास्थ्य कवर।",
      "योजना से जुड़े अस्पतालों में कैशलेस और बिना काग़ज़ी झंझट इलाज।",
      "त्रिपुरा के सरकारी अस्पतालों और योजना से जुड़े निजी अस्पतालों में चुने हुए पैकेज शामिल।",
    ],
  },
  eligibilityText: {
    en: [
      "Your household lives in Tripura.",
      "Your household is not covered by Ayushman Bharat PM-JAY, the construction workers' (BoCW) health scheme, the CAPF scheme, PM-JANMAN or any other government health insurance scheme.",
    ],
    hi: [
      "आपका परिवार त्रिपुरा में रहता है।",
      "आपका परिवार आयुष्मान भारत PM-JAY, निर्माण श्रमिक (BoCW) स्वास्थ्य योजना, CAPF योजना, PM-JANMAN या किसी दूसरी सरकारी स्वास्थ्य बीमा योजना में शामिल नहीं है।",
    ],
  },
  exclusions: {
    en: [
      "Families already covered under PM-JAY or another government health insurance scheme (they use that scheme instead).",
      "Treatment outside Tripura is not covered; the scheme works at hospitals inside the state.",
      "Private hospitals cover only the packages selected for them under the scheme.",
    ],
    hi: [
      "जो परिवार पहले से PM-JAY या किसी दूसरी सरकारी स्वास्थ्य बीमा योजना में हैं (वे उसी योजना का लाभ लेंगे)।",
      "त्रिपुरा के बाहर का इलाज शामिल नहीं है; योजना राज्य के अंदर के अस्पतालों में ही चलती है।",
      "निजी अस्पतालों में सिर्फ़ उनके लिए चुने गए पैकेज ही मिलते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Visit abpmjay.tripura.gov.in and open the CM-JAY section.",
        "Use 'Create Your Card' and complete Aadhaar-based verification for each family member.",
        "Download or collect your CM-JAY card and show it at the hospital help desk when admitted.",
      ],
      hi: [
        "abpmjay.tripura.gov.in पर जाएँ और CM-JAY वाला हिस्सा खोलें।",
        "'Create Your Card' चुनें और परिवार के हर सदस्य की आधार से पुष्टि पूरी करें।",
        "अपना CM-JAY कार्ड डाउनलोड करें या ले लें, और भर्ती होते समय अस्पताल के हेल्प डेस्क पर दिखाएँ।",
      ],
    },
    offline: {
      en: [
        "Go to the Ayushman/CM-JAY help desk at a government hospital, or a Common Service Centre.",
        "Carry Aadhaar cards and your ration card for all family members.",
        "The operator checks that you are not covered by PM-JAY and makes your CM-JAY card.",
      ],
      hi: [
        "किसी सरकारी अस्पताल के आयुष्मान/CM-JAY हेल्प डेस्क या कॉमन सर्विस सेंटर पर जाएँ।",
        "परिवार के सभी सदस्यों के आधार कार्ड और राशन कार्ड साथ ले जाएँ।",
        "ऑपरेटर जाँच करेगा कि आप PM-JAY में नहीं हैं और आपका CM-JAY कार्ड बना देगा।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of each family member", "Ration card", "Mobile number linked to Aadhaar"],
    hi: ["परिवार के हर सदस्य का आधार कार्ड", "राशन कार्ड", "आधार से जुड़ा मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "I already have an Ayushman (PM-JAY) card. Do I need CM-JAY?", hi: "मेरे पास पहले से आयुष्मान (PM-JAY) कार्ड है। क्या मुझे CM-JAY चाहिए?" },
      a: {
        en: "No. CM-JAY is only for families that PM-JAY and other government health schemes leave out. Your PM-JAY card already gives you ₹5 lakh of cover.",
        hi: "नहीं। CM-JAY सिर्फ़ उन परिवारों के लिए है जो PM-JAY और दूसरी सरकारी स्वास्थ्य योजनाओं से बाहर हैं। आपके PM-JAY कार्ड से आपको पहले से ₹5 लाख का कवर मिलता है।",
      },
    },
    {
      q: { en: "Can I use CM-JAY at a hospital outside Tripura?", hi: "क्या मैं CM-JAY का इस्तेमाल त्रिपुरा के बाहर के अस्पताल में कर सकता हूँ?" },
      a: {
        en: "No. CM-JAY covers treatment at empanelled hospitals within Tripura.",
        hi: "नहीं। CM-JAY में सिर्फ़ त्रिपुरा के अंदर योजना से जुड़े अस्पतालों में इलाज मिलता है।",
      },
    },
  ],

  officialUrl: "https://abpmjay.tripura.gov.in/",
  sources: [
    "https://abpmjay.tripura.gov.in/",
    "https://panchayat.tripura.gov.in/sites/default/files/2024-09/Health%20Schemes.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
