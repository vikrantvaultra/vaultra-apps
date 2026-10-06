import { all, any, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-shadi-anudan-yojana",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Shadi Anudan Yojana (Uttar Pradesh)", hi: "शादी अनुदान योजना (उत्तर प्रदेश)" },
  aka: ["UP shadi anudan", "Vivah anudan", "UP marriage grant"],
  shortDescription: {
    en: "Poor families in Uttar Pradesh get ₹20,000 for a daughter's marriage. Apply online within 90 days before or after the wedding.",
    hi: "उत्तर प्रदेश के गरीब परिवारों को बेटी की शादी के लिए ₹20,000 मिलते हैं। शादी से 90 दिन पहले से 90 दिन बाद तक ऑनलाइन आवेदन करें।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Backward Classes Welfare, Social Welfare and Tribal Development Departments, Government of Uttar Pradesh",
    hi: "पिछड़ा वर्ग कल्याण, समाज कल्याण और जनजाति विकास विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["social-welfare", "women-child"],
  tags: ["marriage", "daughter", "shadi anudan", "obc", "sc", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 20_000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(
      any(
        all(when("caste", "eq", "obc"), incomeUpTo(100_000)),
        all(when("caste", "in", ["general", "sc", "st", "pvtg"]), incomeUpTo(56_460)),
      ),
      {
        en: "Family income up to ₹1 lakh (OBC) or up to ₹56,460 in towns and a lower limit in villages (SC, ST, General)",
        hi: "परिवार की आय ₹1 लाख तक (OBC) या शहर में ₹56,460 और गाँव में इससे कम सीमा तक (SC, ST, सामान्य)",
      },
    ),
  ),

  details: {
    en: [
      "Shadi Anudan Yojana gives ₹20,000 to poor families in Uttar Pradesh for the marriage of a daughter. The Backward Classes Welfare Department handles OBC families, the Social Welfare Department handles SC and General families, and the Tribal Development Department handles ST families.",
      "All applications go through one portal, shadianudan.upsdc.gov.in. The money is paid by DBT after the block or SDM office verifies the application.",
    ],
    hi: [
      "शादी अनुदान योजना उत्तर प्रदेश के गरीब परिवारों को बेटी की शादी के लिए ₹20,000 देती है। OBC परिवारों के आवेदन पिछड़ा वर्ग कल्याण विभाग, SC और सामान्य वर्ग के समाज कल्याण विभाग, और ST परिवारों के जनजाति विकास विभाग देखते हैं।",
      "सभी आवेदन एक ही पोर्टल shadianudan.upsdc.gov.in पर होते हैं। ब्लॉक या SDM कार्यालय की जाँच के बाद पैसा DBT से मिलता है।",
    ],
  },
  benefits: {
    en: ["₹20,000 for a daughter's marriage.", "Available for up to two daughters per family."],
    hi: ["बेटी की शादी के लिए ₹20,000।", "एक परिवार की अधिकतम दो बेटियों के लिए।"],
  },
  eligibilityText: {
    en: [
      "Family lives in Uttar Pradesh.",
      "OBC families: income from all sources up to ₹1 lakh a year, in towns and villages alike.",
      "SC, ST and General families: income up to ₹56,460 a year in towns and a lower limit in villages, as set by the Social Welfare Department.",
      "The bride must be at least 18 and the groom at least 21 on the wedding date.",
      "Apply online between 90 days before and 90 days after the wedding.",
    ],
    hi: [
      "परिवार उत्तर प्रदेश में रहता हो।",
      "OBC परिवार: सभी स्रोतों से सालाना आय ₹1 लाख तक, शहर और गाँव दोनों में।",
      "SC, ST और सामान्य वर्ग के परिवार: शहर में सालाना आय ₹56,460 तक और गाँव में समाज कल्याण विभाग की तय की हुई कम सीमा तक।",
      "शादी की तारीख़ पर दुल्हन की उम्र कम से कम 18 और दूल्हे की कम से कम 21 साल हो।",
      "शादी से 90 दिन पहले से 90 दिन बाद तक ऑनलाइन आवेदन करें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to shadianudan.upsdc.gov.in and register.",
        "Fill in the form for your category and upload the income, caste and age documents and the wedding card.",
        "Submit and print the form. Give a copy to the block office (villages) or the SDM office (towns) for verification.",
      ],
      hi: [
        "shadianudan.upsdc.gov.in पर जाएँ और रजिस्टर करें।",
        "अपने वर्ग का फ़ॉर्म भरें और आय, जाति, उम्र के दस्तावेज़ और शादी का कार्ड अपलोड करें।",
        "फ़ॉर्म जमा करके प्रिंट निकालें। जाँच के लिए एक कॉपी ब्लॉक (गाँव) या SDM (शहर) कार्यालय में दें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Income certificate", "Caste certificate", "Age proof of bride and groom", "Wedding card", "Bank passbook"],
    hi: ["आधार कार्ड", "आय प्रमाण पत्र", "जाति प्रमाण पत्र", "दुल्हन और दूल्हे की उम्र का सबूत", "शादी का कार्ड", "बैंक पासबुक"],
  },

  officialUrl: "https://shadianudan.upsdc.gov.in/",
  sources: [
    "https://shadianudan.upsdc.gov.in/",
    "https://www.drishtiias.com/statepcs/23-05-2025/uttar-pradesh/print",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
