import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mahatma-phule-mahamandal-direct-loan-yojana",
  tier: "compact",
  name: {
    en: "Mahatma Phule Mahamandal Direct Loan and Margin Money Schemes",
    hi: "महात्मा फुले महामंडल थेट कर्ज और मार्जिन मनी योजनाएँ",
  },
  aka: ["MPBCDC loan", "Mahatma Phule Magasvargiya Vikas Mahamandal", "Thet Karj Yojana"],
  shortDescription: {
    en: "Scheduled Caste entrepreneurs in Maharashtra can get a ₹1 lakh small-business loan at 4% interest that includes a ₹10,000 grant, or help with the margin money for a bank loan of up to ₹5 lakh.",
    hi: "महाराष्ट्र के अनुसूचित जाति के उद्यमियों को 4% ब्याज पर ₹1 लाख का छोटा व्यापार कर्ज़ (जिसमें ₹10,000 अनुदान शामिल) या ₹5 लाख तक के बैंक कर्ज़ के लिए मार्जिन मनी में मदद मिल सकती है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Mahatma Phule Backward Class Development Corporation, Social Justice Department, Government of Maharashtra",
    hi: "महात्मा फुले मागासवर्गीय विकास महामंडल, सामाजिक न्याय विभाग, महाराष्ट्र सरकार",
  },
  categories: ["business", "social-welfare"],
  tags: ["business loan", "sc", "self employment", "low interest", "margin money", "mahatma phule"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 100_000, period: "one-time", kind: "loan" },
  kundliHouse: "business",
  eligibility: all(residentOf("maharashtra"), when("caste", "eq", "sc")),

  details: {
    en: [
      "The Mahatma Phule Backward Class Development Corporation gives low-cost loans to Scheduled Caste and Neo-Buddhist people to start small businesses.",
      "Under the direct loan scheme, the Corporation itself lends up to ₹1 lakh. Under the margin money scheme, a bank lends most of a project of up to ₹5 lakh and the Corporation lends the 20% margin the bank asks you to bring.",
    ],
    hi: [
      "महात्मा फुले मागासवर्गीय विकास महामंडल अनुसूचित जाति और नवबौद्ध लोगों को छोटा व्यापार शुरू करने के लिए सस्ता कर्ज़ देता है।",
      "थेट (सीधा) कर्ज़ योजना में महामंडल ख़ुद ₹1 लाख तक का कर्ज़ देता है। मार्जिन मनी योजना में ₹5 लाख तक की परियोजना का ज़्यादातर हिस्सा बैंक देता है और बैंक जो 20% मार्जिन माँगता है, वह महामंडल कर्ज़ के रूप में देता है।",
    ],
  },
  benefits: {
    en: [
      "Direct loan of up to ₹1 lakh: ₹85,000 loan from the Corporation, a ₹10,000 grant, and ₹5,000 from you.",
      "Interest of 4% a year, repaid in 36 monthly instalments.",
      "Margin money scheme: for projects up to ₹5 lakh, the bank gives 75%, the Corporation 20% and you 5%.",
    ],
    hi: [
      "₹1 लाख तक का सीधा कर्ज़: ₹85,000 महामंडल का कर्ज़, ₹10,000 अनुदान और ₹5,000 आपका हिस्सा।",
      "सालाना 4% ब्याज, 36 मासिक किस्तों में वापसी।",
      "मार्जिन मनी योजना: ₹5 लाख तक की परियोजना में 75% बैंक, 20% महामंडल और 5% आप।",
    ],
  },
  eligibilityText: {
    en: [
      "Scheduled Caste or Neo-Buddhist resident of Maharashtra with a caste certificate.",
      "Family income and age within the limits set by the Corporation (check with the district office).",
      "Has a viable plan for a small business.",
    ],
    hi: [
      "जाति प्रमाण पत्र वाले महाराष्ट्र के अनुसूचित जाति या नवबौद्ध निवासी।",
      "परिवार की आय और उम्र महामंडल की तय सीमा में हो (ज़िला कार्यालय से पूछें)।",
      "छोटे व्यापार की व्यावहारिक योजना हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit the Corporation's district office (details on mpbcdc.maharashtra.gov.in) and get the form.",
        "Submit it with your caste and income certificates, address proof and business details.",
        "After verification of your home and business site, the loan is released in two parts (75% first, 25% after the business is checked).",
      ],
      hi: [
        "महामंडल के ज़िला कार्यालय (जानकारी mpbcdc.maharashtra.gov.in पर) जाएँ और फ़ॉर्म लें।",
        "जाति और आय प्रमाण पत्र, पते का प्रमाण और व्यापार की जानकारी के साथ जमा करें।",
        "घर और व्यापार की जगह की जाँच के बाद कर्ज़ दो हिस्सों में मिलता है (पहले 75%, व्यापार की जाँच के बाद 25%)।",
      ],
    },
  },

  officialUrl: "https://mpbcdc.maharashtra.gov.in/",
  sources: ["https://mpbcdc.maharashtra.gov.in/", "https://bankofmaharashtra.bank.in/state-government-sponsored-programmes"],
  lastVerified: "2026-10-06",
  launchedYear: 1978,
  status: "check-status",
};

export default scheme;
