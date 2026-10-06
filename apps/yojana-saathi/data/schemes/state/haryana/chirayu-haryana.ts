import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chirayu-haryana",
  tier: "compact",
  overlapGroup: "health-cover",
  name: { en: "Ayushman Bharat – Chirayu Haryana", hi: "आयुष्मान भारत – चिरायु हरियाणा" },
  aka: ["Chirayu", "Ayushman Chirayu", "Chirayu Haryana Yojana"],
  shortDescription: {
    en: "Haryana extends Ayushman Bharat cashless hospital cover to more low- and middle-income families, using Family ID income data, so they get free treatment in empanelled hospitals.",
    hi: "हरियाणा सरकार परिवार पहचान पत्र की आय के आधार पर आयुष्मान भारत का कैशलेस अस्पताल इलाज ज़्यादा कम और मध्यम आय वाले परिवारों तक बढ़ाती है, ताकि सूचीबद्ध अस्पतालों में मुफ़्त इलाज मिले।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Health Department, Haryana (State Health Agency)",
    hi: "स्वास्थ्य विभाग, हरियाणा (राज्य स्वास्थ्य एजेंसी)",
  },
  categories: ["health"],
  tags: ["health insurance", "ayushman", "chirayu", "free treatment", "hospital", "haryana"],
  benefitType: "insurance",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("haryana")),

  details: {
    en: [
      "Chirayu Haryana is the state's extension of Ayushman Bharat PM-JAY. Families that are not on the central PM-JAY list but meet the state's income rules (checked through the Family ID, or Parivar Pehchan Patra) are given Ayushman cards and get the same cashless treatment in empanelled public and private hospitals.",
      "The state budget for 2025-26 named Ayushman Chirayu among the schemes that free Haryana families from worry about treatment costs. The exact income limits and any yearly contribution for higher-income families should be checked with the State Health Agency before you apply.",
    ],
    hi: [
      "चिरायु हरियाणा, आयुष्मान भारत PM-JAY का राज्य का विस्तार है। जो परिवार केंद्र की PM-JAY सूची में नहीं हैं पर राज्य की आय शर्तें (परिवार पहचान पत्र से जाँची गई) पूरी करते हैं, उन्हें आयुष्मान कार्ड मिलता है और सूचीबद्ध सरकारी व निजी अस्पतालों में वही कैशलेस इलाज मिलता है।",
      "2025-26 के राज्य बजट में आयुष्मान चिरायु को उन योजनाओं में गिना गया जो हरियाणा के परिवारों को इलाज के ख़र्च की चिंता से मुक्त करती हैं। सही आय सीमा और ज़्यादा आय वाले परिवारों से लिया जाने वाला सालाना अंशदान, आवेदन से पहले राज्य स्वास्थ्य एजेंसी से पता कर लें।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment in empanelled hospitals, on the same terms as Ayushman Bharat PM-JAY.",
      "Covers hospital stays, surgeries and listed treatment packages for the whole family.",
    ],
    hi: ["सूचीबद्ध अस्पतालों में कैशलेस इलाज, आयुष्मान भारत PM-JAY जैसी ही शर्तों पर।", "पूरे परिवार के लिए अस्पताल में भर्ती, ऑपरेशन और तय इलाज पैकेज शामिल।"],
  },
  eligibilityText: {
    en: [
      "A Haryana family with a Family ID (Parivar Pehchan Patra) and verified income.",
      "Not already covered under the central Ayushman Bharat PM-JAY list.",
      "Family income within the limit set by the state (check the current limit with the State Health Agency).",
    ],
    hi: [
      "परिवार पहचान पत्र (PPP) और सत्यापित आय वाला हरियाणा का परिवार।",
      "जो पहले से केंद्र की आयुष्मान भारत PM-JAY सूची में न हो।",
      "परिवार की आय राज्य की तय सीमा के अंदर हो (मौजूदा सीमा राज्य स्वास्थ्य एजेंसी से पता करें)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check that your Family ID income is verified.",
        "Check your eligibility and make your Ayushman card on the official Ayushman portal or app using Aadhaar e-KYC.",
        "Show the card at any empanelled hospital for cashless treatment.",
      ],
      hi: [
        "पक्का करें कि परिवार पहचान पत्र में आपकी आय सत्यापित है।",
        "आधिकारिक आयुष्मान पोर्टल या ऐप पर आधार e-KYC से पात्रता देखें और आयुष्मान कार्ड बनाएँ।",
        "कैशलेस इलाज के लिए किसी भी सूचीबद्ध अस्पताल में कार्ड दिखाएँ।",
      ],
    },
    offline: {
      en: ["Visit a government hospital's Ayushman help desk, a CSC or a SARAL Kendra with your Family ID and Aadhaar."],
      hi: ["परिवार पहचान पत्र और आधार लेकर सरकारी अस्पताल की आयुष्मान हेल्प डेस्क, CSC या SARAL केंद्र जाएँ।"],
    },
  },

  officialUrl: "https://beneficiary.nha.gov.in/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2025/03/202503221525770346.pdf",
    "https://haryanahealth.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
