import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-mukhyamantri-cycle-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Balak/Balika Cycle Yojana", hi: "मुख्यमंत्री बालक/बालिका साइकिल योजना" },
  aka: ["Bihar cycle yojana", "Balika cycle", "Free cycle Bihar"],
  shortDescription: {
    en: "Students who join Class 9 in Bihar government schools get money by DBT to buy a bicycle, so they can reach high school.",
    hi: "बिहार के सरकारी स्कूलों में 9वीं कक्षा में दाखिला लेने वाले छात्र-छात्राओं को साइकिल खरीदने के लिए DBT से पैसा मिलता है, ताकि वे हाई स्कूल तक पहुँच सकें।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Education Department, Government of Bihar", hi: "शिक्षा विभाग, बिहार सरकार" },
  categories: ["education", "women-child"],
  tags: ["bicycle", "cycle", "class 9", "school", "girl student", "bihar"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 3000, period: "one-time", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("bihar"), isTrue("student")),

  details: {
    en: [
      "The Mukhyamantri Cycle Yojana began in 2006 for girls and was later extended to boys. It helps children, especially girls in villages, travel to secondary school instead of dropping out after Class 8.",
      "The Education Department pays the money by DBT into the student's (or parent's) bank account, along with other school benefits such as the uniform (poshak) grant.",
    ],
    hi: [
      "मुख्यमंत्री साइकिल योजना 2006 में लड़कियों के लिए शुरू हुई और बाद में लड़कों को भी इसमें शामिल किया गया। इससे बच्चों, ख़ासकर गाँव की लड़कियों, को 8वीं के बाद पढ़ाई छोड़ने की बजाय हाई स्कूल तक जाने में मदद मिलती है।",
      "शिक्षा विभाग यह पैसा पोशाक जैसी दूसरी स्कूल सहायता के साथ DBT से छात्र (या अभिभावक) के बैंक खाते में भेजता है।",
    ],
  },
  benefits: {
    en: ["₹3,000 one-time to buy a bicycle, paid by DBT.", "Available to both girls and boys in Class 9."],
    hi: ["साइकिल खरीदने के लिए एक बार ₹3,000, DBT से।", "9वीं कक्षा के लड़के और लड़कियाँ दोनों पात्र।"],
  },
  eligibilityText: {
    en: [
      "Student enrolled in Class 9 in a government or government-aided school in Bihar.",
      "Meets the attendance requirement set by the school for the year.",
      "Has an Aadhaar-linked bank account (own or parent's).",
    ],
    hi: [
      "बिहार के सरकारी या सरकारी सहायता प्राप्त स्कूल में 9वीं कक्षा में नामांकित।",
      "स्कूल द्वारा तय साल की उपस्थिति की शर्त पूरी हो।",
      "आधार से जुड़ा बैंक खाता हो (अपना या अभिभावक का)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate form. Give your Aadhaar and bank details to your school.",
        "The school enters eligible students on the Education Department's DBT system.",
        "The money comes by DBT. Ask your headmaster if it is delayed.",
      ],
      hi: [
        "अलग से कोई फ़ॉर्म नहीं। अपना आधार और बैंक विवरण स्कूल में दें।",
        "स्कूल पात्र छात्रों का विवरण शिक्षा विभाग के DBT सिस्टम पर डालता है।",
        "पैसा DBT से आता है। देर होने पर प्रधानाध्यापक से पूछें।",
      ],
    },
  },

  officialUrl: "https://betastate.bihar.gov.in/educationbihar/",
  sources: [
    "https://www.newsonair.gov.in/bihar-cm-nitish-kumar-transfers-%e2%82%b92920-crore-to-students-via-dbt",
    "https://betastate.bihar.gov.in/champainDowry.aspx",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "active",
};

export default scheme;
