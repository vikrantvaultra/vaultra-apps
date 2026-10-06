import { all, isFalse, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vetri-veedu-thittam",
  tier: "compact",
  name: { en: "Vetri Veedu Thittam", hi: "वेट्री वीडु तिट्टम (ग्रामीण पक्का घर योजना)" },
  aka: ["Vetri Veedu", "Vetri housing scheme", "Kalaignar Kanavu Illam", "kutcha hut housing Tamil Nadu"],
  shortDescription: {
    en: "Rural families in Tamil Nadu living in kutcha huts get ₹5 lakh from the state to build a pucca house. 70,000 houses are planned in the first year.",
    hi: "तमिलनाडु के गाँवों में कच्ची झोपड़ी में रहने वाले परिवारों को पक्का घर बनाने के लिए राज्य से ₹5 लाख। पहले साल 70,000 घर बनाने की योजना है।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Rural Development and Panchayat Raj Department, Government of Tamil Nadu",
    hi: "ग्रामीण विकास एवं पंचायती राज विभाग, तमिलनाडु सरकार",
  },
  categories: ["housing"],
  tags: ["housing", "pucca house", "kutcha hut", "rural", "free house", "5 lakh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 500_000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("area", "eq", "rural"), { en: "You live in a village (rural area)", hi: "आप गाँव (ग्रामीण क्षेत्र) में रहते हैं" }),
    labelled(isFalse("pucca"), { en: "Your family lives in a kutcha hut, not a pucca house", hi: "आपका परिवार पक्के घर में नहीं, कच्ची झोपड़ी में रहता है" }),
  ),

  details: {
    en: [
      "Vetri Veedu Thittam is the new state housing scheme announced in the 2026-27 revised budget, only for rural families who still live in kutcha huts. The previous government's state rural housing scheme was called Kalaignar Kanavu Illam.",
      "The government raised the amount for each house from ₹3.1 lakh to ₹5 lakh, so that the poorest families, who could not add money of their own, can also build a house. 70,000 houses will be sanctioned in the first year at a cost of ₹3,500 crore.",
      "The Rural Development Department will run a fresh door-to-door survey to find eligible families. There is no application form yet; families are picked from the survey.",
    ],
    hi: [
      "वेट्री वीडु तिट्टम 2026-27 के संशोधित बजट में घोषित नई राज्य आवास योजना है, जो सिर्फ़ उन ग्रामीण परिवारों के लिए है जो अब भी कच्ची झोपड़ियों में रहते हैं। पिछली सरकार की राज्य ग्रामीण आवास योजना का नाम कलैञर कनवु इल्लम था।",
      "सरकार ने हर घर की राशि ₹3.1 लाख से बढ़ाकर ₹5 लाख कर दी, ताकि सबसे गरीब परिवार भी, जो अपनी तरफ़ से पैसा नहीं लगा पाते, घर बना सकें। पहले साल ₹3,500 करोड़ की लागत से 70,000 घर मंज़ूर होंगे।",
      "ग्रामीण विकास विभाग पात्र परिवारों को खोजने के लिए घर-घर नया सर्वे करेगा। अभी कोई आवेदन फ़ॉर्म नहीं है; परिवार सर्वे से चुने जाएँगे।",
    ],
  },
  benefits: {
    en: ["₹5 lakh to build a pucca house in place of your kutcha hut."],
    hi: ["आपकी कच्ची झोपड़ी की जगह पक्का घर बनाने के लिए ₹5 लाख।"],
  },
  eligibilityText: {
    en: [
      "Your family lives in a kutcha hut in a rural area of Tamil Nadu.",
      "You are identified as eligible in the Rural Development Department's door-to-door survey.",
    ],
    hi: [
      "आपका परिवार तमिलनाडु के ग्रामीण क्षेत्र में कच्ची झोपड़ी में रहता है।",
      "ग्रामीण विकास विभाग के घर-घर सर्वे में आपको पात्र पाया जाता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Make sure your family is counted when survey staff visit your village.",
        "If you are missed, contact your village panchayat president or the Block Development Office.",
      ],
      hi: [
        "जब सर्वे टीम आपके गाँव आए, तो पक्का करें कि आपका परिवार गिना जाए।",
        "अगर छूट जाएँ, तो अपने ग्राम पंचायत अध्यक्ष या ब्लॉक विकास कार्यालय से संपर्क करें।",
      ],
    },
  },

  officialUrl: "https://tnrd.tn.gov.in/",
  sources: ["https://tamildigitallibrary.in/Marc-Articles/004866_Tamil_Nadu_Budget_2026_2027"],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
