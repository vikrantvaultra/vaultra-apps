import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-abhyudaya-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Abhyudaya Yojana (Free Coaching)", hi: "मुख्यमंत्री अभ्युदय योजना (मुफ़्त कोचिंग)" },
  aka: ["Abhyudaya Yojana", "Abhyuday", "UP free coaching"],
  shortDescription: {
    en: "Free coaching in all 75 districts of Uttar Pradesh for UPSC, UPPSC, JEE, NEET, NDA and CDS, with classroom and online classes and guidance from officers.",
    hi: "उत्तर प्रदेश के सभी 75 ज़िलों में UPSC, UPPSC, JEE, NEET, NDA और CDS की मुफ़्त कोचिंग, कक्षा और ऑनलाइन दोनों तरह, और अफ़सरों से मार्गदर्शन।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Social Welfare Department, Government of Uttar Pradesh",
    hi: "समाज कल्याण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["education", "skills-employment"],
  tags: ["free coaching", "upsc", "neet", "jee", "competitive exams", "uttar pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "career",
  eligibility: all(residentOf("uttar-pradesh")),

  details: {
    en: [
      "Mukhyamantri Abhyudaya Yojana gives free coaching to young people in Uttar Pradesh who are preparing for competitive exams. It started in February 2021 and the 2026-27 session began on 1 July 2026.",
      "Centres run in all 75 districts and mix classroom teaching with online classes. Serving officers and subject experts teach and mentor students. There is no fee.",
    ],
    hi: [
      "मुख्यमंत्री अभ्युदय योजना उत्तर प्रदेश के उन युवाओं को मुफ़्त कोचिंग देती है जो प्रतियोगी परीक्षाओं की तैयारी कर रहे हैं। यह फ़रवरी 2021 में शुरू हुई और 2026-27 का सत्र 1 जुलाई 2026 से शुरू हुआ।",
      "सभी 75 ज़िलों में केंद्र चलते हैं, जहाँ कक्षा की पढ़ाई और ऑनलाइन क्लास दोनों होती हैं। कार्यरत अफ़सर और विषय विशेषज्ञ पढ़ाते और मार्गदर्शन करते हैं। कोई फ़ीस नहीं लगती।",
    ],
  },
  benefits: {
    en: [
      "Free coaching for UPSC Civil Services, UPPSC, JEE, NEET, NDA and CDS.",
      "Classroom teaching at district centres plus online classes.",
      "Mentoring and guidance from officers and subject experts.",
    ],
    hi: [
      "UPSC सिविल सेवा, UPPSC, JEE, NEET, NDA और CDS की मुफ़्त कोचिंग।",
      "ज़िला केंद्रों पर कक्षा में पढ़ाई और साथ में ऑनलाइन क्लास।",
      "अफ़सरों और विषय विशेषज्ञों से मार्गदर्शन।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Uttar Pradesh.",
      "Preparing for one of the covered exams and meeting that exam's basic education requirement.",
      "Registered on the Abhyudaya portal during the open registration window.",
    ],
    hi: [
      "उत्तर प्रदेश के निवासी।",
      "किसी शामिल परीक्षा की तैयारी कर रहे हों और उस परीक्षा की बुनियादी शिक्षा योग्यता रखते हों।",
      "रजिस्ट्रेशन खुला होने पर अभ्युदय पोर्टल पर रजिस्टर किया हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to abhyuday.up.gov.in when registration is open.",
        "Register with your details, education, district and the exam you are preparing for.",
        "Follow the portal or your district Social Welfare office for the centre allotment and class timetable.",
      ],
      hi: [
        "रजिस्ट्रेशन खुलने पर abhyuday.up.gov.in पर जाएँ।",
        "अपनी जानकारी, पढ़ाई, ज़िला और जिस परीक्षा की तैयारी कर रहे हैं, वह भरकर रजिस्टर करें।",
        "केंद्र और क्लास का टाइम-टेबल जानने के लिए पोर्टल या ज़िला समाज कल्याण कार्यालय से जुड़े रहें।",
      ],
    },
  },

  officialUrl: "https://abhyuday.up.gov.in/",
  sources: [
    "https://abhyuday.up.gov.in/",
    "https://indianmasterminds.com/news/mukhyamantri-abhyudaya-yojana-free-coaching-upsc-jee-neet-75-districts-235092/",
    "https://news.careers360.com/neet-jee-free-coaching-registration-for-up-cms-abhyudaya-scheme-begins-today/amp",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
