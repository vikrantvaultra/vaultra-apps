import { all, ageBetween, isFalse, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kushal-yuva-program",
  tier: "compact",
  name: { en: "Kushal Yuva Program", hi: "कुशल युवा कार्यक्रम" },
  aka: ["KYP", "Bihar KYP", "7 Nischay skill training"],
  shortDescription: {
    en: "Bihar youth aged 15 to 25 who have passed Class 10 or 12 and left formal study get 240 hours of training in communication, soft skills and basic computers.",
    hi: "10वीं या 12वीं पास करके पढ़ाई छोड़ चुके 15 से 25 साल के बिहार के युवाओं को बातचीत, व्यवहार कौशल और कंप्यूटर की 240 घंटे की ट्रेनिंग मिलती है।",
  },
  level: "state",
  state: "bihar",
  department: {
    en: "Bihar Skill Development Mission, Youth, Employment and Skill Development Department, Government of Bihar",
    hi: "बिहार कौशल विकास मिशन, युवा, रोज़गार एवं कौशल विकास विभाग, बिहार सरकार",
  },
  categories: ["skills-employment"],
  tags: ["skill training", "computer course", "spoken english", "soft skills", "youth", "kyp", "bihar"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 15, max: 25 },
  kundliHouse: "career",
  eligibility: all(residentOf("bihar"), ...ageBetween(15, 25), isFalse("student")),

  details: {
    en: [
      "Kushal Yuva Program is a 240-hour (about three months) course run by the Bihar Skill Development Mission at centres across the state. It teaches communication in Hindi and English, soft skills for the workplace and basic computer use.",
      "It is part of the Saat Nischay youth programme. Youth aged 20 to 25 who want the Swayam Sahayata Bhatta (₹1,000 a month) must complete this training.",
    ],
    hi: [
      "कुशल युवा कार्यक्रम बिहार कौशल विकास मिशन का 240 घंटे (लगभग तीन महीने) का कोर्स है, जो पूरे राज्य के केंद्रों पर चलता है। इसमें हिंदी और अंग्रेज़ी में बातचीत, काम की जगह के व्यवहार कौशल और कंप्यूटर चलाना सिखाया जाता है।",
      "यह सात निश्चय युवा कार्यक्रम का हिस्सा है। 20 से 25 साल के जो युवा स्वयं सहायता भत्ता (₹1,000 महीना) चाहते हैं, उन्हें यह ट्रेनिंग पूरी करनी होती है।",
    ],
  },
  benefits: {
    en: [
      "240 hours of training in communication skills (Hindi and English).",
      "Soft skills for interviews and the workplace.",
      "Basic computer skills.",
    ],
    hi: [
      "बातचीत के कौशल (हिंदी और अंग्रेज़ी) की 240 घंटे की ट्रेनिंग।",
      "इंटरव्यू और काम की जगह के लिए व्यवहार कौशल।",
      "कंप्यूटर की बुनियादी जानकारी।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Bihar.",
      "Aged 15 to 25 years.",
      "Passed Class 10 or Class 12.",
      "Not continuing in formal education.",
    ],
    hi: [
      "बिहार के निवासी।",
      "उम्र 15 से 25 साल।",
      "10वीं या 12वीं पास।",
      "अभी नियमित पढ़ाई जारी न हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on 7nishchay-yuvaupmission.bihar.gov.in (choose Kushal Yuva Program).",
        "Within 60 days, visit your District Registration and Counselling Centre (DRCC) with original documents for verification.",
        "Pick a nearby KYP training centre and join the next batch.",
      ],
      hi: [
        "7nishchay-yuvaupmission.bihar.gov.in पर आवेदन करें (कुशल युवा कार्यक्रम चुनें)।",
        "60 दिनों के अंदर मूल दस्तावेज़ों के साथ अपने ज़िला निबंधन एवं परामर्श केंद्र (DRCC) पर जाँच के लिए जाएँ।",
        "पास का KYP ट्रेनिंग केंद्र चुनें और अगले बैच में जुड़ें।",
      ],
    },
  },

  officialUrl: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
  sources: ["https://www.7nishchay-yuvaupmission.bihar.gov.in/", "https://betastate.bihar.gov.in/yesd/"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
