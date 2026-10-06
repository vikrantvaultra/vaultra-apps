import { all, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ayushman-vay-vandana",
  name: { en: "Ayushman Vay Vandana Card", hi: "आयुष्मान वय वंदना कार्ड" },
  aka: ["Ayushman 70+", "Vay Vandana", "PM-JAY senior citizens"],
  shortDescription: {
    en: "Free hospital cover of up to ₹5 lakh a year for every Indian aged 70 or above, whatever their income, under Ayushman Bharat PM-JAY.",
    hi: "70 साल या उससे अधिक उम्र के हर भारतीय के लिए, आय चाहे जो हो, आयुष्मान भारत PM-JAY के तहत हर साल ₹5 लाख तक का मुफ़्त अस्पताल इलाज।",
  },
  level: "central",
  ministry: "health-family-welfare",
  categories: ["health", "pension-insurance"],
  tags: ["senior citizen", "70 plus", "health insurance", "ayushman card", "free treatment", "elderly"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  ageRange: { min: 70 },
  kundliHouse: "senior",
  eligibility: all(minAge(70)),

  details: {
    en: [
      "Since October 2024, everyone aged 70 or above can join Ayushman Bharat PM-JAY, with no income test. They get a separate Ayushman Vay Vandana card.",
      "If your family is already covered by PM-JAY, members aged 70+ get an extra top-up of up to ₹5 lakh a year just for themselves, which they don't share with younger family members. If your family is not covered, the 70+ members get a fresh ₹5 lakh cover each year, shared between them (for example, husband and wife).",
      "The card is free and works at all PM-JAY empanelled hospitals across India. The only check is age, taken from your Aadhaar.",
    ],
    hi: [
      "अक्टूबर 2024 से 70 साल या उससे अधिक उम्र का हर व्यक्ति आयुष्मान भारत PM-JAY से जुड़ सकता है, आय की कोई शर्त नहीं है। उन्हें अलग से आयुष्मान वय वंदना कार्ड मिलता है।",
      "अगर आपका परिवार पहले से PM-JAY में है, तो 70+ सदस्यों को सिर्फ़ अपने लिए हर साल ₹5 लाख तक का अतिरिक्त कवर मिलता है, जो परिवार के कम उम्र वाले सदस्यों के साथ नहीं बँटता। अगर परिवार PM-JAY में नहीं है, तो 70+ सदस्यों को हर साल ₹5 लाख का नया कवर मिलता है, जो उनके बीच बँटता है (जैसे पति-पत्नी)।",
      "कार्ड मुफ़्त है और पूरे भारत के सभी PM-JAY सूचीबद्ध अस्पतालों में चलता है। सिर्फ़ उम्र देखी जाती है, जो आधार से ली जाती है।",
    ],
  },
  benefits: {
    en: [
      "Cashless hospital treatment up to ₹5 lakh a year.",
      "Extra ₹5 lakh top-up for 70+ members of families already in PM-JAY.",
      "Existing illnesses covered from the first day.",
      "Tests and medicines from 3 days before to 15 days after admission are covered.",
    ],
    hi: [
      "हर साल ₹5 लाख तक का कैशलेस अस्पताल इलाज।",
      "जो परिवार पहले से PM-JAY में हैं, उनके 70+ सदस्यों को ₹5 लाख का अतिरिक्त कवर।",
      "पुरानी बीमारियाँ पहले दिन से कवर।",
      "भर्ती से 3 दिन पहले से 15 दिन बाद तक की जाँच और दवाएँ कवर।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian citizen aged 70 years or above, as per Aadhaar.",
      "No income limit. People with private health insurance or ESIC cover can also enrol.",
      "People covered by CGHS, ECHS or CAPF health schemes must choose either their existing scheme or this one.",
    ],
    hi: [
      "आधार के अनुसार 70 साल या उससे अधिक उम्र के भारतीय नागरिक।",
      "आय की कोई सीमा नहीं। निजी स्वास्थ्य बीमा या ESIC वाले भी जुड़ सकते हैं।",
      "CGHS, ECHS या CAPF स्वास्थ्य योजना वाले लोगों को अपनी मौजूदा योजना या यह योजना, दोनों में से एक चुननी होगी।",
    ],
  },
  exclusions: {
    en: [
      "People below 70 years cannot get this card (they may still be covered under regular PM-JAY).",
      "Outpatient (OPD) treatment without admission is generally not covered.",
    ],
    hi: [
      "70 साल से कम उम्र के लोग यह कार्ड नहीं बनवा सकते (वे सामान्य PM-JAY में शामिल हो सकते हैं)।",
      "बिना भर्ती के OPD इलाज आमतौर पर कवर नहीं होता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Install the Ayushman app or open beneficiary.nha.gov.in and log in with a mobile number and OTP.",
        "Choose the option for people aged 70 and above, and enter the senior's Aadhaar.",
        "Complete Aadhaar e-KYC (OTP or face authentication), add a recent photo, and download the card.",
      ],
      hi: [
        "आयुष्मान ऐप डाउनलोड करें या beneficiary.nha.gov.in खोलें और मोबाइल नंबर व OTP से लॉग इन करें।",
        "70 साल और उससे अधिक उम्र वालों का विकल्प चुनें और बुज़ुर्ग का आधार नंबर डालें।",
        "आधार e-KYC (OTP या चेहरे से) पूरा करें, हाल की फ़ोटो लगाएँ और कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit a Common Service Centre or the Ayushman Mitra desk at an empanelled hospital with the senior's Aadhaar.",
        "They will complete e-KYC and generate the Vay Vandana card free of cost.",
      ],
      hi: [
        "बुज़ुर्ग का आधार लेकर नज़दीकी जन सेवा केंद्र या सूचीबद्ध अस्पताल के आयुष्मान मित्र डेस्क पर जाएँ।",
        "वे e-KYC पूरा करके मुफ़्त में वय वंदना कार्ड बना देंगे।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of the senior citizen", "Mobile number", "Recent photograph (taken during enrolment)"],
    hi: ["बुज़ुर्ग का आधार कार्ड", "मोबाइल नंबर", "हाल की फ़ोटो (नामांकन के समय ली जाती है)"],
  },
  faqs: [
    {
      q: { en: "My parents are both over 70. Do they get ₹5 lakh each?", hi: "मेरे माता-पिता दोनों 70 से ऊपर हैं। क्या दोनों को ₹5-5 लाख मिलेंगे?" },
      a: {
        en: "No. The ₹5 lakh a year is shared between the 70+ members of the same family.",
        hi: "नहीं। ₹5 लाख सालाना का कवर एक ही परिवार के 70+ सदस्यों के बीच बँटता है।",
      },
    },
    {
      q: { en: "I am a rich senior citizen. Can I still get the card?", hi: "मैं आर्थिक रूप से संपन्न बुज़ुर्ग हूँ। क्या मुझे भी कार्ड मिल सकता है?" },
      a: {
        en: "Yes. Income does not matter for this card. Age 70+ on Aadhaar is the only condition.",
        hi: "हाँ। इस कार्ड के लिए आय मायने नहीं रखती। आधार पर 70+ उम्र ही एकमात्र शर्त है।",
      },
    },
  ],

  officialUrl: "https://beneficiary.nha.gov.in/",
  sources: [
    "https://beneficiary.nha.gov.in/",
    "https://pmjay.gov.in/",
    "https://www.civilsdaily.com/news/pib-ayushman-vay-vandana-yojana/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
