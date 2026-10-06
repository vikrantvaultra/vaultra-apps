import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ladakh-universal-healthcare",
  tier: "compact",
  overlapGroup: "health-cover",
  name: { en: "Universal Healthcare Scheme (Ladakh)", hi: "यूनिवर्सल हेल्थकेयर योजना (लद्दाख)" },
  aka: ["Ladakh universal health insurance", "Ladakh health cover"],
  shortDescription: {
    en: "Ladakh's own fully funded health insurance, run alongside Ayushman Bharat PM-JAY, so that every resident of the UT has hospital cover.",
    hi: "लद्दाख का अपना, पूरी तरह सरकारी पैसे से चलने वाला स्वास्थ्य बीमा, जो आयुष्मान भारत PM-JAY के साथ चलता है, ताकि UT के हर निवासी को अस्पताल का कवर मिले।",
  },
  level: "state",
  state: "ladakh",
  department: { en: "Health and Medical Education Department, UT Administration of Ladakh", hi: "स्वास्थ्य एवं चिकित्सा शिक्षा विभाग, केंद्र शासित प्रदेश लद्दाख प्रशासन" },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "universal health", "ayushman card", "free treatment", "ladakh"],
  benefitType: "insurance",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("ladakh")),

  details: {
    en: [
      "The Ladakh administration runs a Universal Healthcare scheme in addition to Ayushman Bharat PM-JAY. The administration pays for it in full, with the aim of giving every citizen of Ladakh health insurance, not just families on the PM-JAY list.",
      "Treatment is through the Ayushman card system at empanelled hospitals. Check with your nearest hospital's Ayushman desk or the Health Department for the current cover amount and how to enrol.",
    ],
    hi: [
      "लद्दाख प्रशासन आयुष्मान भारत PM-JAY के अलावा एक यूनिवर्सल हेल्थकेयर योजना चलाता है। इसका पूरा ख़र्च प्रशासन उठाता है, ताकि सिर्फ़ PM-JAY सूची वाले परिवारों को नहीं, बल्कि लद्दाख के हर नागरिक को स्वास्थ्य बीमा मिले।",
      "इलाज सूचीबद्ध अस्पतालों में आयुष्मान कार्ड से होता है। मौजूदा कवर राशि और जुड़ने का तरीक़ा अपने नज़दीकी अस्पताल के आयुष्मान डेस्क या स्वास्थ्य विभाग से पता करें।",
    ],
  },
  benefits: {
    en: ["Free, cashless hospital treatment at empanelled hospitals for residents of Ladakh not covered by PM-JAY."],
    hi: ["PM-JAY में न आने वाले लद्दाख निवासियों को सूचीबद्ध अस्पतालों में मुफ़्त, कैशलेस इलाज।"],
  },
  eligibilityText: {
    en: ["All residents of the UT of Ladakh.", "Families already on the PM-JAY list are covered under PM-JAY itself."],
    hi: ["केंद्र शासित प्रदेश लद्दाख के सभी निवासी।", "जो परिवार पहले से PM-JAY सूची में हैं, उन्हें PM-JAY से ही कवर मिलता है।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Take your Aadhaar and ration card to the Ayushman desk at a government hospital or to a common service centre.",
        "Ask them to check your family and create your Ayushman card.",
        "Show the card at the hospital when you need admission.",
      ],
      hi: [
        "आधार और राशन कार्ड लेकर किसी सरकारी अस्पताल के आयुष्मान डेस्क या कॉमन सर्विस सेंटर पर जाएँ।",
        "उनसे अपने परिवार की जाँच करवाकर आयुष्मान कार्ड बनवाएँ।",
        "भर्ती की ज़रूरत पड़ने पर अस्पताल में कार्ड दिखाएँ।",
      ],
    },
  },

  officialUrl: "https://ladakh.gov.in/health-department-2/",
  sources: ["https://ladakh.gov.in/health-department-2/"],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
