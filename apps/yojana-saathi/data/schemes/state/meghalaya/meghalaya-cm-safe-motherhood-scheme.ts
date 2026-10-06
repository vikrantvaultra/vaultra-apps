import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "meghalaya-cm-safe-motherhood-scheme",
  tier: "compact",
  name: { en: "Chief Minister's Safe Motherhood Scheme (Meghalaya)", hi: "मुख्यमंत्री सुरक्षित मातृत्व योजना (मेघालय)" },
  aka: ["CM-SMS", "CM Safe Motherhood", "MOTHER programme Meghalaya"],
  shortDescription: {
    en: "Meghalaya's state programme to keep mothers and newborns safe, supporting pregnant women through check-ups and safe delivery.",
    hi: "माँ और नवजात को सुरक्षित रखने के लिए मेघालय का राज्य कार्यक्रम, जो गर्भवती महिलाओं को जाँच और सुरक्षित प्रसव में मदद देता है।",
  },
  level: "state",
  state: "meghalaya",
  department: { en: "Health & Family Welfare Department, Government of Meghalaya", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, मेघालय सरकार" },
  categories: ["health", "women-child"],
  tags: ["pregnant women", "maternity", "safe delivery", "mother", "newborn", "meghalaya"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("meghalaya"), female(), isTrue("pregnantOrLactating")),

  details: {
    en: [
      "The Chief Minister's Safe Motherhood Scheme (CM-SMS) is the Meghalaya government's programme to reduce the deaths of mothers and babies. The 2026-27 budget credits it with bringing maternal deaths down from 244 in 2020-21 to about 103 in 2025-26, and allocates ₹140 crore to it.",
      "We could not find an official page that lists what a mother receives under CM-SMS (cash, transport or other support) or how to enrol, so please ask your ASHA, ANM or nearest health centre.",
    ],
    hi: [
      "मुख्यमंत्री सुरक्षित मातृत्व योजना (CM-SMS) माँ और बच्चे की मौतें कम करने के लिए मेघालय सरकार का कार्यक्रम है। 2026-27 के बजट के अनुसार इससे मातृ मृत्यु 2020-21 में 244 से घटकर 2025-26 में लगभग 103 रह गई, और इसके लिए ₹140 करोड़ रखे गए हैं।",
      "हमें कोई सरकारी पेज नहीं मिला जो बताए कि CM-SMS में माँ को क्या मिलता है (नक़द, परिवहन या कोई और मदद) या नाम कैसे जुड़वाएँ, इसलिए अपनी आशा, ANM या नज़दीकी स्वास्थ्य केंद्र से पूछें।",
    ],
  },
  benefits: {
    en: [
      "State support for pregnant women and new mothers for check-ups and safe delivery.",
      "The exact benefits are not confirmed; ask your ASHA, ANM or health centre.",
    ],
    hi: [
      "गर्भवती महिलाओं और नई माताओं को जाँच और सुरक्षित प्रसव के लिए राज्य की मदद।",
      "सही लाभों की पुष्टि नहीं हुई है; अपनी आशा, ANM या स्वास्थ्य केंद्र से पूछें।",
    ],
  },
  eligibilityText: {
    en: ["A pregnant woman or new mother living in Meghalaya.", "Other conditions are not confirmed; ask at your health centre."],
    hi: ["मेघालय में रहने वाली गर्भवती महिला या नई माँ।", "बाकी शर्तों की पुष्टि नहीं हुई है; स्वास्थ्य केंद्र पर पूछें।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register your pregnancy early with your ASHA, ANM or the nearest health sub-centre or PHC.",
        "Ask them about CM-SMS support and keep your MHIS card and bank details ready.",
        "Attend your check-ups and plan the delivery at a health facility.",
      ],
      hi: [
        "अपनी गर्भावस्था का पंजीकरण जल्दी अपनी आशा, ANM या नज़दीकी स्वास्थ्य उप-केंद्र या PHC में कराएँ।",
        "उनसे CM-SMS की मदद के बारे में पूछें और अपना MHIS कार्ड व बैंक की जानकारी तैयार रखें।",
        "अपनी जाँचें समय पर कराएँ और प्रसव स्वास्थ्य केंद्र में कराने की योजना बनाएँ।",
      ],
    },
  },

  officialUrl: "https://meghealth.gov.in/",
  sources: ["https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
