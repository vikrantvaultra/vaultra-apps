import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-bhagyalakshmi",
  tier: "full",
  overlapGroup: "daughter-savings",
  name: { en: "Bhagyalakshmi (Sukanya Samriddhi) Scheme", hi: "भाग्यलक्ष्मी (सुकन्या समृद्धि) योजना" },
  aka: ["Bhagyalakshmi", "Bhagya Lakshmi Karnataka", "Bhagyalaxmi"],
  shortDescription: {
    en: "For up to two daughters in a BPL family, the Karnataka government puts ₹3,000 a year for 15 years into a Sukanya Samriddhi account, which matures at age 21.",
    hi: "BPL परिवार की दो बेटियों तक के लिए कर्नाटक सरकार 15 साल तक हर साल ₹3,000 सुकन्या समृद्धि खाते में जमा करती है, जो 21 साल पर परिपक्व होता है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Department of Women and Child Development, Government of Karnataka",
    hi: "महिला एवं बाल विकास विभाग, कर्नाटक सरकार",
  },
  categories: ["women-child", "energy-savings"],
  tags: ["girl child", "daughter", "bhagyalakshmi", "sukanya samriddhi", "bpl", "savings", "karnataka"],
  benefitType: "savings",
  isDBT: false,
  value: { amount: 3000, period: "yearly", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("karnataka"),
    isTrue("bpl"),
    labelled(isTrue("daughterUnder10"), {
      en: "You have a young daughter (she must be registered within 2 years of birth)",
      hi: "आपकी छोटी बेटी है (जन्म के 2 साल के अंदर पंजीकरण ज़रूरी)",
    }),
  ),

  details: {
    en: [
      "Bhagyalakshmi is Karnataka's savings scheme for girls born into poor (BPL) families. It started in 2006 and is now run through the Sukanya Samriddhi account at the post office.",
      "For each eligible girl, the government deposits ₹3,000 every year for 15 years, ₹45,000 in all, into a Sukanya Samriddhi account in her name. With interest, the account is expected to pay out about ₹1.27 lakh when she turns 21.",
      "The Department of Women and Child Development runs the scheme through Anganwadi centres. The family must register the girl within two years of her birth.",
    ],
    hi: [
      "भाग्यलक्ष्मी कर्नाटक की बचत योजना है, ग़रीब (BPL) परिवारों में जन्मी बेटियों के लिए। यह 2006 में शुरू हुई थी और अब डाकघर के सुकन्या समृद्धि खाते के ज़रिए चलती है।",
      "हर पात्र बेटी के लिए सरकार 15 साल तक हर साल ₹3,000, यानी कुल ₹45,000, उसके नाम के सुकन्या समृद्धि खाते में जमा करती है। ब्याज जोड़कर 21 साल की उम्र पर लगभग ₹1.27 लाख मिलने का अनुमान है।",
      "यह योजना महिला एवं बाल विकास विभाग आंगनवाड़ी केंद्रों के ज़रिए चलाता है। बेटी के जन्म के दो साल के अंदर पंजीकरण कराना ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "₹3,000 a year deposited by the government for 15 years (₹45,000 in total).",
      "The money earns Sukanya Samriddhi interest; the expected amount at age 21 is about ₹1.27 lakh.",
      "After she passes Class 10, up to 50% of the balance can be withdrawn for higher studies.",
    ],
    hi: [
      "सरकार 15 साल तक हर साल ₹3,000 जमा करती है (कुल ₹45,000)।",
      "इस पैसे पर सुकन्या समृद्धि का ब्याज मिलता है; 21 साल पर लगभग ₹1.27 लाख मिलने का अनुमान है।",
      "10वीं पास करने के बाद आगे की पढ़ाई के लिए जमा राशि का 50% तक निकाला जा सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The girl is born into a BPL family living in Karnataka.",
      "Only the first two girl children of a family are covered.",
      "The girl must be registered within two years of her birth.",
    ],
    hi: [
      "बेटी कर्नाटक में रहने वाले BPL परिवार में जन्मी हो।",
      "परिवार की सिर्फ़ पहली दो बेटियों को लाभ मिलता है।",
      "बेटी का पंजीकरण जन्म के दो साल के अंदर होना चाहिए।",
    ],
  },
  exclusions: {
    en: [
      "Families without a BPL card.",
      "A third or later daughter in the same family.",
      "Girls registered more than two years after birth.",
    ],
    hi: [
      "जिन परिवारों के पास BPL कार्ड नहीं है।",
      "एक ही परिवार की तीसरी या उसके बाद की बेटी।",
      "जिन बेटियों का पंजीकरण जन्म के दो साल बाद हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your local Anganwadi centre or the office of the Child Development Project Officer (CDPO).",
        "Fill in the Bhagyalakshmi form with the girl's and parents' details.",
        "Attach the BPL card and the girl's birth certificate, and submit.",
        "After approval, the Sukanya Samriddhi account is opened and the yearly deposits begin.",
      ],
      hi: [
        "अपने पास के आंगनवाड़ी केंद्र या बाल विकास परियोजना अधिकारी (CDPO) के दफ़्तर जाएँ।",
        "भाग्यलक्ष्मी फ़ॉर्म में बेटी और माता-पिता की जानकारी भरें।",
        "BPL कार्ड और बेटी का जन्म प्रमाण पत्र लगाकर जमा करें।",
        "मंज़ूरी के बाद सुकन्या समृद्धि खाता खुलता है और हर साल पैसा जमा होने लगता है।",
      ],
    },
  },
  documents: {
    en: ["BPL card", "Birth certificate of the girl", "Aadhaar of the parents", "Photograph of the girl and parents"],
    hi: ["BPL कार्ड", "बेटी का जन्म प्रमाण पत्र", "माता-पिता का आधार", "बेटी और माता-पिता की फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Is this the same as the central Sukanya Samriddhi Yojana?", hi: "क्या यह केंद्र की सुकन्या समृद्धि योजना जैसी ही है?" },
      a: {
        en: "It uses the same Sukanya Samriddhi account, but here the Karnataka government pays the yearly deposit for BPL girls. Parents can also add their own savings to the account.",
        hi: "इसमें वही सुकन्या समृद्धि खाता इस्तेमाल होता है, पर यहाँ BPL बेटियों के लिए सालाना जमा कर्नाटक सरकार करती है। माता-पिता अपनी बचत भी उसी खाते में डाल सकते हैं।",
      },
    },
    {
      q: { en: "My daughter is three years old. Can I still apply?", hi: "मेरी बेटी तीन साल की है। क्या अब भी आवेदन कर सकते हैं?" },
      a: {
        en: "The department's rules allow registration only within two years of birth, so a three-year-old usually cannot be added. Ask at your Anganwadi centre to be sure.",
        hi: "विभाग के नियम के अनुसार पंजीकरण सिर्फ़ जन्म के दो साल के अंदर होता है, इसलिए तीन साल की बेटी आमतौर पर नहीं जुड़ सकती। पक्का करने के लिए आंगनवाड़ी केंद्र में पूछें।",
      },
    },
  ],

  officialUrl: "https://dwcd.karnataka.gov.in/",
  sources: [
    "https://dwcd.karnataka.gov.in/uploads/media_to_upload1780130696.pdf",
    "https://dwcd.karnataka.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "active",
};

export default scheme;
