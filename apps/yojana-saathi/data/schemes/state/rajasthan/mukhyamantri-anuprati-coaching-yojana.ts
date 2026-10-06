import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-anuprati-coaching-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Anuprati Coaching Yojana", hi: "मुख्यमंत्री अनुप्रति कोचिंग योजना" },
  aka: ["Anuprati Coaching", "Anuprati Yojana", "Anupriti"],
  shortDescription: {
    en: "Free coaching for UPSC, RPSC, engineering, medical and other competitive exams for SC, ST, OBC, MBC, EWS and minority students in Rajasthan with family income below ₹8 lakh.",
    hi: "राजस्थान के SC, ST, OBC, MBC, EWS और अल्पसंख्यक छात्रों के लिए, जिनके परिवार की आय ₹8 लाख से कम है, UPSC, RPSC, इंजीनियरिंग, मेडिकल और दूसरी प्रतियोगी परीक्षाओं की मुफ़्त कोचिंग।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Social Justice and Empowerment Department, Government of Rajasthan", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान सरकार" },
  categories: ["education", "skills-employment"],
  tags: ["coaching", "free coaching", "upsc", "rpsc", "neet", "jee", "competitive exam", "rajasthan"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("rajasthan"),
    labelled(incomeUpTo(800_000), { en: "Family income below ₹8 lakh a year", hi: "परिवार की सालाना आय ₹8 लाख से कम" }),
  ),

  details: {
    en: [
      "Under Mukhyamantri Anuprati Coaching Yojana, the Rajasthan government pays empanelled coaching institutes to prepare selected students for competitive exams, so the coaching is free for the student.",
      "It covers exams such as UPSC civil services, RPSC (RAS and others), other state government recruitment exams, and entrance exams for engineering and medical courses. Seats are shared across categories, districts and exams, with half for girls. Students are chosen on merit through an online process.",
    ],
    hi: [
      "मुख्यमंत्री अनुप्रति कोचिंग योजना में राजस्थान सरकार सूचीबद्ध कोचिंग संस्थानों को पैसा देती है ताकि चुने गए छात्रों की प्रतियोगी परीक्षाओं की तैयारी मुफ़्त हो।",
      "इसमें UPSC सिविल सेवा, RPSC (RAS और दूसरी), राज्य की दूसरी भर्ती परीक्षाएँ और इंजीनियरिंग व मेडिकल प्रवेश परीक्षाएँ शामिल हैं। सीटें वर्ग, ज़िले और परीक्षा के हिसाब से बँटी होती हैं और आधी सीटें लड़कियों के लिए हैं। छात्रों का चयन ऑनलाइन प्रक्रिया से मेरिट पर होता है।",
    ],
  },
  benefits: {
    en: [
      "Free coaching at an empanelled institute for your chosen exam.",
      "The institute may not charge you anything extra.",
      "Students who have to live away from home for coaching may get help with lodging, as notified each year.",
    ],
    hi: [
      "आपकी चुनी परीक्षा के लिए सूचीबद्ध संस्थान में मुफ़्त कोचिंग।",
      "संस्थान आपसे कोई अतिरिक्त फ़ीस नहीं ले सकता।",
      "कोचिंग के लिए घर से दूर रहने वाले छात्रों को हर साल की अधिसूचना के अनुसार रहने के ख़र्च में मदद मिल सकती है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a domicile of Rajasthan.",
      "You belong to SC, ST, OBC, MBC, EWS or a minority community.",
      "Your parents' or guardian's annual income (including yours) is below ₹8 lakh.",
      "You have not taken the benefit of an earlier Anuprati scheme, and you meet the academic conditions for the exam you choose.",
    ],
    hi: [
      "आप राजस्थान के मूल निवासी हों।",
      "आप SC, ST, OBC, MBC, EWS या अल्पसंख्यक वर्ग से हों।",
      "आपके माता-पिता या अभिभावक की सालाना आय (आपकी आय मिलाकर) ₹8 लाख से कम हो।",
      "आपने पहले अनुप्रति योजना का लाभ न लिया हो और आप चुनी परीक्षा की शैक्षणिक शर्तें पूरी करते हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch for the yearly notification from the Social Justice and Empowerment Department.",
        "Apply through your SSO ID or an e-Mitra kiosk using your Jan Aadhaar, and pick your exam and an empanelled institute.",
        "If selected on merit, join the institute; attendance is recorded with Aadhaar.",
      ],
      hi: [
        "सामाजिक न्याय एवं अधिकारिता विभाग की सालाना अधिसूचना पर नज़र रखें।",
        "जन आधार से अपनी SSO ID या ई-मित्र केंद्र के ज़रिए आवेदन करें और परीक्षा व सूचीबद्ध संस्थान चुनें।",
        "मेरिट में चयन होने पर संस्थान में दाख़िला लें; हाज़िरी आधार से लगती है।",
      ],
    },
  },

  officialUrl: "https://sso.rajasthan.gov.in/",
  sources: [
    "https://sje.rajasthan.gov.in/siteadmin/Uploads/202107061215060698.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
