import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-mukhyamantri-jan-arogya-yojana",
  tier: "compact",
  overlapGroup: "health-cover",
  name: { en: "Mukhyamantri Jan Arogya Yojana (Bihar)", hi: "मुख्यमंत्री जन आरोग्य योजना (बिहार)" },
  aka: ["MMJAY", "Bihar Ayushman card", "Jan Arogya Bihar"],
  shortDescription: {
    en: "Bihar ration-card families not covered by Ayushman Bharat PM-JAY get free hospital treatment of up to ₹5 lakh a year, paid for by the state.",
    hi: "बिहार के जो राशन कार्ड वाले परिवार आयुष्मान भारत PM-JAY में शामिल नहीं हैं, उन्हें राज्य सरकार की ओर से हर साल ₹5 लाख तक का मुफ़्त अस्पताल इलाज मिलता है।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Health Department, Government of Bihar (Bihar Swasthya Suraksha Samiti)", hi: "स्वास्थ्य विभाग, बिहार सरकार (बिहार स्वास्थ्य सुरक्षा समिति)" },
  categories: ["health"],
  tags: ["health insurance", "ayushman card", "free treatment", "5 lakh", "ration card", "bihar"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("bihar")),

  details: {
    en: [
      "Mukhyamantri Jan Arogya Yojana is Bihar's own health cover for families who hold a ration card under the food security law but were left out of the central PM-JAY list. It works the same way as PM-JAY and uses the same Ayushman card and hospital network.",
      "The state pays the full cost. Families get cashless treatment of up to ₹5 lakh a year at empanelled government and private hospitals.",
    ],
    hi: [
      "मुख्यमंत्री जन आरोग्य योजना बिहार सरकार का अपना स्वास्थ्य कवर है, उन परिवारों के लिए जिनके पास खाद्य सुरक्षा कानून वाला राशन कार्ड है पर जो केंद्र की PM-JAY सूची में नहीं हैं। यह PM-JAY की तरह ही काम करती है और उसी आयुष्मान कार्ड और अस्पतालों का इस्तेमाल होता है।",
      "पूरा खर्च राज्य सरकार देती है। परिवारों को सूचीबद्ध सरकारी और निजी अस्पतालों में हर साल ₹5 लाख तक का कैशलेस इलाज मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Free, cashless hospital treatment of up to ₹5 lakh per family per year.",
      "Works at the same empanelled hospitals as Ayushman Bharat.",
      "No premium to pay.",
    ],
    hi: [
      "हर परिवार को हर साल ₹5 लाख तक का मुफ़्त, कैशलेस अस्पताल इलाज।",
      "आयुष्मान भारत वाले सूचीबद्ध अस्पतालों में ही इलाज।",
      "कोई प्रीमियम नहीं देना।",
    ],
  },
  eligibilityText: {
    en: [
      "Family lives in Bihar and holds a ration card under the National Food Security Act.",
      "The family is not already covered under PM-JAY.",
      "Each member needs an Ayushman card made with Aadhaar e-KYC.",
    ],
    hi: [
      "परिवार बिहार में रहता हो और राष्ट्रीय खाद्य सुरक्षा कानून वाला राशन कार्ड हो।",
      "परिवार पहले से PM-JAY में शामिल न हो।",
      "हर सदस्य का आधार e-KYC से आयुष्मान कार्ड बना हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Take your ration card and Aadhaar to a Common Service Centre, PDS ration shop camp or an empanelled hospital's Ayushman desk.",
        "Get your Ayushman card made with Aadhaar e-KYC.",
        "Show the card at an empanelled hospital for cashless treatment.",
      ],
      hi: [
        "राशन कार्ड और आधार लेकर कॉमन सर्विस सेंटर, राशन दुकान पर लगे कैंप या सूचीबद्ध अस्पताल के आयुष्मान डेस्क पर जाएँ।",
        "आधार e-KYC से अपना आयुष्मान कार्ड बनवाएँ।",
        "कैशलेस इलाज के लिए सूचीबद्ध अस्पताल में कार्ड दिखाएँ।",
      ],
    },
  },

  officialUrl: "https://beneficiary.nha.gov.in/",
  sources: [
    "https://www.drishtiias.com/state-pcs-current-affairs/ayushman-bharat-cards-issued-in-bihar",
    "https://beneficiary.nha.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
