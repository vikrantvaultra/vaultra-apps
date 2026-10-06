import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-free-bicycle-scheme",
  tier: "compact",
  name: { en: "Tamil Nadu Free Bicycle Scheme for Class 11 Students", hi: "तमिलनाडु कक्षा 11 के विद्यार्थियों के लिए मुफ़्त साइकिल योजना" },
  aka: ["free cycle Tamil Nadu", "Vilaiyilla Mithivandi", "bicycle scheme Class 11"],
  shortDescription: {
    en: "Every Class 11 student in Tamil Nadu government and government-aided schools gets a free branded bicycle with a helmet and water bottle.",
    hi: "तमिलनाडु के सरकारी और सरकारी सहायता प्राप्त स्कूलों में कक्षा 11 के हर विद्यार्थी को हेलमेट और पानी की बोतल के साथ मुफ़्त ब्रांडेड साइकिल।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "School Education Department, Government of Tamil Nadu",
    hi: "स्कूल शिक्षा विभाग, तमिलनाडु सरकार",
  },
  categories: ["education"],
  tags: ["free bicycle", "cycle", "students", "class 11", "school", "girls"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(isTrue("student"), {
      en: "You are studying in Class 11 in a government or government-aided school",
      hi: "आप सरकारी या सरकारी सहायता प्राप्त स्कूल में कक्षा 11 में पढ़ते हैं",
    }),
  ),

  details: {
    en: [
      "Tamil Nadu has long given free bicycles to Class 11 students so they can reach higher secondary school easily. The 2026-27 revised budget continues it with ₹277 crore for about 5.32 lakh students, now with modern branded bicycles that come with a helmet and a water bottle.",
      "Bicycles are handed out through the schools during the academic year, so students do not need to apply separately.",
    ],
    hi: [
      "तमिलनाडु लंबे समय से कक्षा 11 के विद्यार्थियों को मुफ़्त साइकिल देता है, ताकि वे आसानी से हायर सेकेंडरी स्कूल पहुँच सकें। 2026-27 के संशोधित बजट में लगभग 5.32 लाख विद्यार्थियों के लिए ₹277 करोड़ रखे गए हैं, और अब हेलमेट व पानी की बोतल के साथ आधुनिक ब्रांडेड साइकिलें दी जाएँगी।",
      "साइकिलें शैक्षणिक वर्ष में स्कूलों के ज़रिए बाँटी जाती हैं, इसलिए विद्यार्थियों को अलग से आवेदन नहीं करना पड़ता।",
    ],
  },
  benefits: {
    en: ["A free branded bicycle.", "A helmet and a water bottle with it."],
    hi: ["एक मुफ़्त ब्रांडेड साइकिल।", "साथ में हेलमेट और पानी की बोतल।"],
  },
  eligibilityText: {
    en: [
      "You are studying in Class 11 in a government or government-aided school in Tamil Nadu.",
      "Both boys and girls are covered.",
    ],
    hi: [
      "आप तमिलनाडु के किसी सरकारी या सरकारी सहायता प्राप्त स्कूल में कक्षा 11 में पढ़ते हैं।",
      "लड़के और लड़कियाँ दोनों शामिल हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed; your school prepares the list of Class 11 students.",
        "Collect the bicycle at the distribution event in your school. Ask your headmaster if you have not received it.",
      ],
      hi: [
        "आवेदन की ज़रूरत नहीं; आपका स्कूल कक्षा 11 के विद्यार्थियों की सूची बनाता है।",
        "स्कूल में होने वाले वितरण कार्यक्रम में साइकिल लें। न मिले तो प्रधानाध्यापक से पूछें।",
      ],
    },
  },

  officialUrl: "https://tamildigitallibrary.in/Marc-Articles/004866_Tamil_Nadu_Budget_2026_2027",
  sources: ["https://tamildigitallibrary.in/Marc-Articles/004866_Tamil_Nadu_Budget_2026_2027"],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
