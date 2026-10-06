import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-senior-citizen-bus-concession",
  tier: "compact",
  name: { en: "Haryana Roadways Senior Citizen Bus Fare Concession", hi: "हरियाणा रोडवेज़ वरिष्ठ नागरिक किराया छूट" },
  aka: ["Senior citizen bus pass Haryana", "Haryana Roadways half fare"],
  shortDescription: {
    en: "Haryana residents aged 60 or more pay half fare in Haryana Roadways buses, including on routes outside the state.",
    hi: "60 साल या उससे ज़्यादा उम्र के हरियाणा निवासियों को हरियाणा रोडवेज़ की बसों में आधा किराया लगता है, राज्य के बाहर के रूटों पर भी।",
  },
  level: "state",
  state: "haryana",
  department: { en: "Transport Department, Haryana (Haryana Roadways)", hi: "परिवहन विभाग, हरियाणा (हरियाणा रोडवेज़)" },
  categories: ["social-welfare"],
  tags: ["bus", "senior citizen", "concession", "half fare", "travel", "haryana roadways"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("haryana"), minAge(60)),

  details: {
    en: [
      "Haryana Roadways gives a 50% fare concession to senior citizens who live in Haryana. Women have had it from 60. From 1 April 2023 it was extended to men from 60 instead of 65.",
      "The concession also applies on Haryana Roadways buses running outside the state. Men aged 60 to 65 need a senior citizen bus pass, which is issued after an automatic check of Family ID data.",
    ],
    hi: [
      "हरियाणा रोडवेज़ हरियाणा में रहने वाले वरिष्ठ नागरिकों को किराये में 50% छूट देती है। महिलाओं को यह 60 साल से मिलती थी। 1 अप्रैल 2023 से पुरुषों को भी 65 की जगह 60 साल से यह छूट मिलने लगी।",
      "यह छूट राज्य के बाहर चलने वाली हरियाणा रोडवेज़ की बसों में भी मिलती है। 60 से 65 साल के पुरुषों को वरिष्ठ नागरिक बस पास चाहिए, जो परिवार पहचान पत्र डेटा की अपने-आप जाँच के बाद बनता है।",
    ],
  },
  benefits: {
    en: ["50% off the bus fare in Haryana Roadways buses.", "Valid on Haryana Roadways buses outside Haryana too."],
    hi: ["हरियाणा रोडवेज़ की बसों में किराये पर 50% छूट।", "हरियाणा से बाहर जाने वाली हरियाणा रोडवेज़ बसों में भी मान्य।"],
  },
  eligibilityText: {
    en: [
      "A resident of Haryana, with proof of residence.",
      "Women aged 60 or more; men aged 60 or more.",
      "Men aged 60 to 65 must carry the senior citizen bus pass issued by Haryana Roadways.",
    ],
    hi: [
      "हरियाणा के निवासी, निवास के प्रमाण के साथ।",
      "60 साल या उससे ज़्यादा उम्र की महिलाएँ; 60 साल या उससे ज़्यादा उम्र के पुरुष।",
      "60 से 65 साल के पुरुषों को हरियाणा रोडवेज़ का वरिष्ठ नागरिक बस पास साथ रखना होगा।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Men aged 60–65: apply online for the senior citizen bus pass on the Haryana Roadways/SARAL portal.",
        "Your Family ID (PPP) data is checked automatically; the General Manager of your depot then issues the pass.",
      ],
      hi: [
        "60–65 साल के पुरुष: हरियाणा रोडवेज़/SARAL पोर्टल पर वरिष्ठ नागरिक बस पास के लिए ऑनलाइन आवेदन करें।",
        "आपके परिवार पहचान पत्र (PPP) डेटा की अपने-आप जाँच होती है; फिर डिपो के महाप्रबंधक पास जारी करते हैं।",
      ],
    },
    offline: {
      en: ["Others: show age and Haryana residence proof (such as Aadhaar) to the conductor when buying the ticket."],
      hi: ["बाकी लोग: टिकट लेते समय कंडक्टर को उम्र और हरियाणा निवास का प्रमाण (जैसे आधार) दिखाएँ।"],
    },
  },

  officialUrl: "https://hartrans.gov.in/free-concessional-travelling/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s314ea0d5b0cf49525d1866cb1e95ada5d/uploads/2024/03/20240319546450580.pdf",
    "https://hartrans.gov.in/free-concessional-travelling/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
