import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cm-breakfast-scheme",
  name: { en: "Perunthalaivar Kamarajar Breakfast Scheme (formerly CM's Breakfast Scheme)", hi: "पेरुंतलैवर कामराजर नाश्ता योजना (पहले मुख्यमंत्री नाश्ता योजना)" },
  aka: ["Chief Minister's Breakfast Scheme", "CM Breakfast Scheme", "Kamarajar Breakfast Scheme", "Mudhalvarin Kaalai Unavu Thittam"],
  shortDescription: {
    en: "Free hot breakfast every school day for students of classes 1 to 8 in Tamil Nadu government and government-aided schools.",
    hi: "तमिलनाडु के सरकारी और सरकारी सहायता प्राप्त स्कूलों में कक्षा 1 से 8 के बच्चों को हर स्कूल के दिन मुफ़्त गरम नाश्ता।",
  },
  level: "state",
  state: "tamil-nadu",
  department: { en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu", hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार" },
  categories: ["education", "women-child"],
  tags: ["breakfast", "school", "children", "nutrition", "free food", "government school"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(isTrue("student"), {
      en: "Your child studies in classes 1 to 8 in a government or government-aided school",
      hi: "आपका बच्चा सरकारी या सहायता प्राप्त स्कूल में कक्षा 1 से 8 में पढ़ता है",
    }),
  ),

  details: {
    en: [
      "Tamil Nadu began serving free breakfast in government primary schools in September 2022, so that children don't start class hungry. It was later extended to all government primary schools and to aided schools.",
      "The government elected in 2026 renamed it the Perunthalaivar Kamarajar Breakfast Scheme and, from 22 September 2026, extended it to classes 6 to 8. It now covers about 34 lakh children in classes 1 to 8 across some 45,000 government and aided schools.",
      "Meals are cooked fresh each morning, by women's self-help groups in rural areas and town panchayats and through central kitchens in cities. There is nothing to apply for: every enrolled child in a covered school gets breakfast.",
    ],
    hi: [
      "तमिलनाडु ने सितंबर 2022 में सरकारी प्राथमिक स्कूलों में मुफ़्त नाश्ता शुरू किया, ताकि बच्चे भूखे पेट पढ़ाई शुरू न करें। बाद में इसे सभी सरकारी प्राथमिक स्कूलों और सहायता प्राप्त स्कूलों तक बढ़ाया गया।",
      "2026 में चुनी गई सरकार ने इसका नाम 'पेरुंतलैवर कामराजर नाश्ता योजना' रखा और 22 सितंबर 2026 से इसे कक्षा 6 से 8 तक बढ़ा दिया। अब लगभग 45,000 सरकारी और सहायता प्राप्त स्कूलों में कक्षा 1 से 8 के लगभग 34 लाख बच्चे इसमें शामिल हैं।",
      "खाना हर सुबह ताज़ा बनता है: गाँवों और नगर पंचायतों में महिला स्वयं सहायता समूह बनाते हैं और शहरों में केंद्रीय रसोई से आता है। आवेदन की ज़रूरत नहीं: शामिल स्कूल में दाख़िल हर बच्चे को नाश्ता मिलता है।",
    ],
  },
  benefits: {
    en: [
      "A free, hot breakfast on every school working day.",
      "Covers classes 1 to 8 in government and government-aided schools.",
      "Menu rotates through the week (such as upma, kichadi or pongal with vegetable sambar).",
    ],
    hi: [
      "हर स्कूल वाले दिन मुफ़्त गरम नाश्ता।",
      "सरकारी और सहायता प्राप्त स्कूलों में कक्षा 1 से 8 शामिल।",
      "हफ़्ते भर मेन्यू बदलता रहता है (जैसे सब्ज़ी सांबर के साथ उपमा, खिचड़ी या पोंगल)।",
    ],
  },
  eligibilityText: {
    en: [
      "Your child is enrolled in classes 1 to 8 in a government or government-aided school in Tamil Nadu.",
      "The school is covered by the scheme (rollout to classes 6–8 was delayed in a few districts with by-elections).",
    ],
    hi: [
      "आपका बच्चा तमिलनाडु के किसी सरकारी या सहायता प्राप्त स्कूल में कक्षा 1 से 8 में दाख़िल है।",
      "स्कूल योजना में शामिल है (उपचुनाव वाले कुछ ज़िलों में कक्षा 6–8 के लिए शुरुआत टली थी)।",
    ],
  },
  exclusions: {
    en: [
      "Students of private (unaided) schools are not covered.",
      "Students of classes 9 and above are not covered by the breakfast scheme.",
    ],
    hi: [
      "निजी (ग़ैर-सहायता प्राप्त) स्कूलों के विद्यार्थी शामिल नहीं हैं।",
      "कक्षा 9 और उससे ऊपर के विद्यार्थी नाश्ता योजना में शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Enrol your child in a government or government-aided school in Tamil Nadu.",
        "Breakfast is served automatically at school before classes; no form is needed.",
        "For any problem with the food or service, speak to the headmaster.",
      ],
      hi: [
        "बच्चे का दाख़िला तमिलनाडु के सरकारी या सहायता प्राप्त स्कूल में कराएँ।",
        "क्लास से पहले स्कूल में अपने-आप नाश्ता मिलता है; कोई फ़ॉर्म नहीं भरना।",
        "खाने या सेवा में कोई दिक़्क़त हो तो प्रधानाध्यापक से बात करें।",
      ],
    },
  },
  documents: {
    en: ["No documents needed beyond the child's school enrolment"],
    hi: ["बच्चे के स्कूल में दाख़िले के अलावा किसी काग़ज़ की ज़रूरत नहीं"],
  },
  faqs: [
    {
      q: { en: "Is this the same as the midday meal?", hi: "क्या यह मिड-डे मील जैसा ही है?" },
      a: {
        en: "No. Breakfast is served in the morning before classes. The midday (noon) meal continues separately.",
        hi: "नहीं। नाश्ता सुबह क्लास से पहले मिलता है। दोपहर का भोजन (मिड-डे मील) अलग से जारी है।",
      },
    },
    {
      q: { en: "Is the CM Breakfast Scheme closed?", hi: "क्या मुख्यमंत्री नाश्ता योजना बंद हो गई?" },
      a: {
        en: "No. It continues under a new name, the Perunthalaivar Kamarajar Breakfast Scheme, and now also covers classes 6 to 8.",
        hi: "नहीं। यह नए नाम 'पेरुंतलैवर कामराजर नाश्ता योजना' से जारी है और अब कक्षा 6 से 8 भी इसमें शामिल हैं।",
      },
    },
  ],

  officialUrl: "https://www.tnsocialwelfare.tn.gov.in/en",
  sources: [
    "https://tiruvarur.nic.in/honble-cm-inaugurates-extension-of-perunthalaivar-kamarajar-breakfast-scheme/",
    "https://www.dtnext.in/news/tamilnadu/kamarajar-breakfast-scheme-expanded-to-classes-6-8-across-tamil-nadu",
    "https://www.tnsocialwelfare.tn.gov.in/en",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
