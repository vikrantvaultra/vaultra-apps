import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-mahalakshmi-kit-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Mahalakshmi Kit Yojana", hi: "मुख्यमंत्री महालक्ष्मी किट योजना" },
  aka: ["Mahalakshmi Kit", "Mahalaxmi Kit Yojana"],
  shortDescription: {
    en: "Pregnant women and new mothers in Uttarakhand get a free Mahalakshmi kit with nutrition supplements and care items for mother and newborn, through their Anganwadi centre.",
    hi: "उत्तराखंड में गर्भवती और नई माताओं को आंगनवाड़ी केंद्र से मुफ़्त महालक्ष्मी किट मिलती है, जिसमें माँ और नवजात के लिए पोषण पूरक और देखभाल का सामान होता है।",
  },
  level: "state",
  state: "uttarakhand",
  department: {
    en: "Women Empowerment and Child Development Department, Government of Uttarakhand",
    hi: "महिला सशक्तिकरण एवं बाल विकास विभाग, उत्तराखंड सरकार",
  },
  categories: ["women-child", "health"],
  tags: ["pregnant women", "mother", "newborn", "kit", "anganwadi", "uttarakhand"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttarakhand"),
    labelled(isTrue("pregnantOrLactating"), { en: "You are pregnant or breastfeeding", hi: "आप गर्भवती हों या शिशु को दूध पिला रही हों" }),
  ),

  details: {
    en: [
      "Mukhyamantri Mahalakshmi Kit Yojana gives pregnant women and breastfeeding mothers a special kit to look after the mother and the newborn baby, to improve the health of both.",
      "It is distributed through Anganwadi centres. The department publishes quarterly beneficiary lists, and the 2026-27 state budget set aside ₹30 crore for the scheme.",
    ],
    hi: [
      "मुख्यमंत्री महालक्ष्मी किट योजना गर्भवती और दूध पिलाने वाली माताओं को माँ और नवजात शिशु की देखभाल के लिए एक ख़ास किट देती है, ताकि दोनों की सेहत बेहतर हो।",
      "किट आंगनवाड़ी केंद्रों से बाँटी जाती है। विभाग हर तिमाही लाभार्थियों की सूची जारी करता है, और 2026-27 के राज्य बजट में इसके लिए ₹30 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "A free kit for the care of the mother and the newborn.",
      "Nutrition supplements for the mother, such as iron, calcium and protein powder.",
    ],
    hi: [
      "माँ और नवजात की देखभाल के लिए मुफ़्त किट।",
      "माँ के लिए पोषण पूरक, जैसे आयरन, कैल्शियम और प्रोटीन पाउडर।",
    ],
  },
  eligibilityText: {
    en: ["Pregnant women and breastfeeding mothers in Uttarakhand.", "Registered at the local Anganwadi centre."],
    hi: ["उत्तराखंड की गर्भवती महिलाएँ और दूध पिलाने वाली माताएँ।", "स्थानीय आंगनवाड़ी केंद्र में पंजीकरण हो।"],
  },
  applicationProcess: {
    offline: {
      en: ["Visit the Anganwadi centre in your area and register your pregnancy.", "The Anganwadi worker will tell you when the kit is ready to collect."],
      hi: ["अपने इलाक़े के आंगनवाड़ी केंद्र जाकर गर्भावस्था का पंजीकरण कराएँ।", "किट मिलने का समय आंगनवाड़ी कार्यकर्त्री बताएँगी।"],
    },
  },

  officialUrl: "https://wecd.uk.gov.in/scheme/chief-minister-mahalakshmi-kit-scheme/",
  sources: [
    "https://wecd.uk.gov.in/scheme/chief-minister-mahalakshmi-kit-scheme/",
    "https://cdnbbsr.s3waas.gov.in/s3c65d7bd70fe3e5e3a2f3de681edc193d/uploads/2026/03/2026030981807180.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
