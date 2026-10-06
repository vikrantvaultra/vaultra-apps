import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-antyodaya-parivar-utthan-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Antyodaya Parivar Utthan Yojana", hi: "मुख्यमंत्री अंत्योदय परिवार उत्थान योजना" },
  aka: ["MMAPUY", "Antyodaya Parivar Utthan", "Antyodaya Mela"],
  shortDescription: {
    en: "Haryana identifies its poorest families through Family ID data and links them to loans, self-employment, skill training and jobs to raise their income.",
    hi: "हरियाणा सरकार परिवार पहचान पत्र डेटा से सबसे गरीब परिवारों की पहचान करती है और उनकी आय बढ़ाने के लिए उन्हें कर्ज़, स्वरोज़गार, कौशल प्रशिक्षण और नौकरी से जोड़ती है।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Government of Haryana (multiple departments, coordinated through Antyodaya/Family ID)",
    hi: "हरियाणा सरकार (कई विभाग, अंत्योदय/परिवार पहचान पत्र के ज़रिए समन्वय)",
  },
  categories: ["social-welfare", "business", "skills-employment"],
  tags: ["antyodaya", "poor families", "self employment", "loan", "skill training", "haryana"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "business",
  eligibility: all(
    residentOf("haryana"),
    labelled(isTrue("bpl"), {
      en: "Your family is among the poorest (Antyodaya) families in Family ID data",
      hi: "आपका परिवार परिवार पहचान पत्र डेटा में सबसे गरीब (अंत्योदय) परिवारों में है",
    }),
  ),

  details: {
    en: [
      "Mukhyamantri Antyodaya Parivar Utthan Yojana aims to lift the poorest families in Haryana out of poverty. Families are picked from verified Family ID (Parivar Pehchan Patra) income data and offered help from different departments, such as bank loans for self-employment, skill training and job placement.",
      "The 2026-27 budget gives these families priority for new Har Hith retail stores, and announces a Mukhyamantri Apprenticeship Promotion Scheme that adds ₹1,500 a month to the apprenticeship stipend for Antyodaya families.",
    ],
    hi: [
      "मुख्यमंत्री अंत्योदय परिवार उत्थान योजना का मकसद हरियाणा के सबसे गरीब परिवारों को गरीबी से बाहर निकालना है। परिवारों को परिवार पहचान पत्र (PPP) के सत्यापित आय डेटा से चुना जाता है और अलग-अलग विभागों से मदद दी जाती है, जैसे स्वरोज़गार के लिए बैंक कर्ज़, कौशल प्रशिक्षण और नौकरी।",
      "2026-27 के बजट में इन परिवारों को नए हर हित स्टोर खोलने में प्राथमिकता दी गई है, और मुख्यमंत्री अप्रेंटिसशिप प्रोत्साहन योजना की घोषणा है, जिसमें अंत्योदय परिवारों को अप्रेंटिसशिप स्टाइपेंड के ऊपर ₹1,500 महीना अतिरिक्त मिलेगा।",
    ],
  },
  benefits: {
    en: [
      "Help to get bank loans and subsidies for self-employment.",
      "Skill training and job placement support.",
      "Priority for Har Hith store franchises (2026-27 budget).",
    ],
    hi: ["स्वरोज़गार के लिए बैंक कर्ज़ और सब्सिडी दिलाने में मदद।", "कौशल प्रशिक्षण और नौकरी दिलाने में सहायता।", "हर हित स्टोर फ़्रेंचाइज़ में प्राथमिकता (2026-27 बजट)।"],
  },
  eligibilityText: {
    en: [
      "A Haryana family with a Family ID (Parivar Pehchan Patra).",
      "Verified family income in the lowest bracket set by the state (check the current limit at a SARAL Kendra).",
    ],
    hi: ["परिवार पहचान पत्र (PPP) वाला हरियाणा का परिवार।", "परिवार की सत्यापित आय राज्य की तय सबसे निचली श्रेणी में हो (मौजूदा सीमा SARAL केंद्र से पता करें)।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Make sure your family's income is verified in the Family ID.",
        "Attend the Antyodaya camp or mela in your block when announced, or visit a SARAL Kendra, and choose the help you want (loan, training or job).",
      ],
      hi: [
        "पक्का करें कि परिवार पहचान पत्र में आपके परिवार की आय सत्यापित है।",
        "घोषणा होने पर अपने ब्लॉक के अंत्योदय शिविर या मेले में जाएँ, या SARAL केंद्र जाएँ, और अपनी ज़रूरत की मदद (कर्ज़, प्रशिक्षण या नौकरी) चुनें।",
      ],
    },
  },

  officialUrl: "https://saralharyana.gov.in/",
  sources: ["https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2026/03/202603201031104005.pdf", "https://saralharyana.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "check-status",
};

export default scheme;
