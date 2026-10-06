import { all, isFalse, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "modi-awas-gharkul-yojana",
  tier: "compact",
  name: { en: "Modi Awas Gharkul Yojana", hi: "मोदी आवास घरकुल योजना" },
  aka: ["Modi Awaas", "OBC gharkul", "OBC housing Maharashtra"],
  shortDescription: {
    en: "Homeless OBC families in rural Maharashtra get ₹1.2 lakh from the state to build a pucca house of at least 269 sq ft on their own land.",
    hi: "ग्रामीण महाराष्ट्र के बेघर OBC परिवारों को अपनी ज़मीन पर कम से कम 269 वर्ग फ़ुट का पक्का घर बनाने के लिए राज्य से ₹1.2 लाख मिलते हैं।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Other Backward Bahujan Welfare Department, Government of Maharashtra",
    hi: "इतर मागास बहुजन कल्याण विभाग, महाराष्ट्र सरकार",
  },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "gharkul", "obc", "house construction", "rural housing"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 120_000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    residentOf("maharashtra"),
    when("area", "eq", "rural"),
    when("caste", "eq", "obc"),
    labelled(isFalse("pucca"), { en: "The family does not own a pucca house", hi: "परिवार के पास पक्का घर न हो" }),
  ),

  details: {
    en: [
      "Modi Awas Gharkul Yojana is a Maharashtra housing scheme for OBC families in rural areas who are not covered by PM Awas Yojana. It was launched in 2024 with a target of 10 lakh houses over 2023-24 to 2025-26.",
      "Selected families get ₹1.2 lakh in instalments into their bank account to build a house of at least 269 sq ft, or to replace a kutcha house with a pucca one.",
    ],
    hi: [
      "मोदी आवास घरकुल योजना ग्रामीण क्षेत्र के उन OBC परिवारों के लिए महाराष्ट्र की आवास योजना है जो PM आवास योजना में नहीं आते। यह 2024 में शुरू हुई और 2023-24 से 2025-26 तक 10 लाख घरों का लक्ष्य रखा गया।",
      "चुने गए परिवारों को कम से कम 269 वर्ग फ़ुट का घर बनाने, या कच्चे घर की जगह पक्का घर बनाने के लिए ₹1.2 लाख किस्तों में बैंक खाते में मिलते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1.2 lakh grant, paid in instalments to your bank account, to build a pucca house.",
      "The house must be at least 269 sq ft.",
    ],
    hi: [
      "पक्का घर बनाने के लिए ₹1.2 लाख का अनुदान, किस्तों में बैंक खाते में।",
      "घर कम से कम 269 वर्ग फ़ुट का होना चाहिए।",
    ],
  },
  eligibilityText: {
    en: [
      "OBC family living in a rural area of Maharashtra for at least 15 years.",
      "Annual family income up to ₹1.2 lakh.",
      "No pucca house owned by you or your family anywhere in the state.",
      "Owns a plot of land to build on.",
    ],
    hi: [
      "कम से कम 15 साल से महाराष्ट्र के ग्रामीण क्षेत्र में रह रहा OBC परिवार।",
      "परिवार की सालाना आय ₹1.2 लाख तक।",
      "राज्य में कहीं भी आपके या परिवार के नाम पक्का घर न हो।",
      "घर बनाने के लिए अपना प्लॉट हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your Gram Panchayat or the Panchayat Samiti (Block Development Office) whether new names are being taken.",
        "Submit the form with your caste, income and land documents; the Gram Sabha recommends the list.",
        "Once sanctioned, the money comes in instalments as the house is built.",
      ],
      hi: [
        "अपनी ग्राम पंचायत या पंचायत समिति (खंड विकास कार्यालय) से पूछें कि नए नाम लिए जा रहे हैं या नहीं।",
        "जाति, आय और ज़मीन के दस्तावेज़ों के साथ फ़ॉर्म जमा करें; ग्राम सभा सूची की सिफ़ारिश करती है।",
        "मंज़ूरी के बाद घर बनने के साथ किस्तों में पैसा आता है।",
      ],
    },
  },

  officialUrl: "https://obcbahujankalyan.maharashtra.gov.in/",
  sources: [
    "https://obcbahujankalyan.maharashtra.gov.in/",
    "https://housing.com/news/pm-launches-modi-awaas-gharkul-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
