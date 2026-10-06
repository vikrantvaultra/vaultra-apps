import { all, incomeUpTo, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pandit-deendayal-upadhyay-awas-yojana-gujarat",
  tier: "compact",
  name: { en: "Pandit Deendayal Upadhyay Awas Yojana (Gujarat)", hi: "पंडित दीनदयाल उपाध्याय आवास योजना (गुजरात)" },
  aka: ["PDU Awas Gujarat", "Deendayal Awas Gujarat", "OBC housing Gujarat"],
  shortDescription: {
    en: "SEBC (OBC), EWS and nomadic or denotified tribe families in Gujarat with income up to ₹6 lakh who own a plot get money to build a house.",
    hi: "गुजरात के SEBC (OBC), EWS और घुमंतू-विमुक्त जाति के परिवारों को, जिनकी आय ₹6 लाख तक है और जिनके पास अपना प्लॉट है, घर बनाने के लिए पैसा मिलता है।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department (Director, Developing Castes Welfare), Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग (विकसती जाति कल्याण निदेशालय), गुजरात सरकार" },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "house construction", "obc", "ews", "nomadic tribes", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "home",
  eligibility: all(residentOf("gujarat"), when("caste", "in", ["obc", "general"]), incomeUpTo(600_000)),

  details: {
    en: [
      "Pandit Deendayal Upadhyay Awas Yojana is Gujarat's house-building grant for Socially and Educationally Backward Classes (SEBC/OBC), Economically Weaker Sections (EWS) and nomadic and denotified tribes. The most backward nomadic and denotified groups get first priority.",
      "The department's scheme page lists help of up to ₹1,20,000 for building a house. The amount may have been revised along with the Dr. Ambedkar Awas grant, so confirm the current figure with your district office before planning.",
    ],
    hi: [
      "पंडित दीनदयाल उपाध्याय आवास योजना गुजरात की मकान बनाने की सहायता है, जो सामाजिक-शैक्षणिक रूप से पिछड़े वर्ग (SEBC/OBC), आर्थिक रूप से कमज़ोर वर्ग (EWS) और घुमंतू-विमुक्त जातियों के लिए है। सबसे पिछड़ी घुमंतू-विमुक्त जातियों को पहली प्राथमिकता मिलती है।",
      "विभाग के योजना पेज पर घर बनाने के लिए ₹1,20,000 तक की मदद लिखी है। हो सकता है डॉ. आंबेडकर आवास की राशि के साथ यह राशि भी बदली हो, इसलिए योजना बनाने से पहले ज़िला कार्यालय से मौजूदा राशि पक्की कर लें।",
    ],
  },
  benefits: {
    en: ["A grant to build a house on your own plot (listed as up to ₹1,20,000; confirm the current amount).", "Paid into your bank account in stages as the house is built."],
    hi: ["अपने प्लॉट पर घर बनाने के लिए अनुदान (₹1,20,000 तक लिखा है; मौजूदा राशि पक्की कर लें)।", "घर बनने के साथ-साथ किस्तों में बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Your family is SEBC (OBC), EWS or a nomadic or denotified tribe and lives in Gujarat.",
      "Family income up to ₹6 lakh a year.",
      "You own the plot of land where the house will be built.",
    ],
    hi: [
      "आपका परिवार SEBC (OBC), EWS या घुमंतू-विमुक्त जाति का हो और गुजरात में रहता हो।",
      "परिवार की सालाना आय ₹6 लाख तक हो।",
      "जिस प्लॉट पर घर बनेगा, वह आपके नाम हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch for the yearly advertisement, then apply on esamajkalyan.gujarat.gov.in.",
        "Upload your caste or EWS certificate, income certificate and plot papers.",
      ],
      hi: [
        "हर साल आने वाले विज्ञापन पर नज़र रखें, फिर esamajkalyan.gujarat.gov.in पर आवेदन करें।",
        "जाति या EWS प्रमाण पत्र, आय प्रमाण पत्र और प्लॉट के काग़ज़ अपलोड करें।",
      ],
    },
  },

  officialUrl: "https://esamajkalyan.gujarat.gov.in/",
  sources: [
    "https://sje.gujarat.gov.in/ddcw/showpage.aspx?contentid=1536",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "check-status",
};

export default scheme;
