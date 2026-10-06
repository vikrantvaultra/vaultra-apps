import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "msrtc-mahila-sanman-yojana",
  tier: "compact",
  name: { en: "Mahila Sanman Yojana (MSRTC half-fare for women)", hi: "महिला सन्मान योजना (ST बस में महिलाओं को आधा किराया)" },
  aka: ["ST bus half ticket women", "Mahila Samman Yojana MSRTC", "women 50% bus concession"],
  shortDescription: {
    en: "Women and girls travelling on Maharashtra State Transport (ST) buses within the state pay only half the fare.",
    hi: "महाराष्ट्र राज्य परिवहन (ST) की बसों में राज्य के भीतर यात्रा करने वाली महिलाओं और लड़कियों को सिर्फ़ आधा किराया देना होता है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Maharashtra State Road Transport Corporation (MSRTC), Transport Department, Government of Maharashtra",
    hi: "महाराष्ट्र राज्य मार्ग परिवहन महामंडल (MSRTC), परिवहन विभाग, महाराष्ट्र सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["bus", "travel concession", "women", "st bus", "msrtc", "half ticket"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("maharashtra"), female()),

  details: {
    en: [
      "Since March 2023, women and girls get a 50% concession on the fare in MSRTC (ST) buses for journeys within Maharashtra, under the Mahila Sanman Yojana. The state pays the difference to MSRTC.",
      "From September 2026, MSRTC issues concession tickets only through the National Common Mobility Card (NCMC), so get the card made at a depot and keep it topped up.",
    ],
    hi: [
      "मार्च 2023 से महिला सन्मान योजना में महिलाओं और लड़कियों को महाराष्ट्र के भीतर MSRTC (ST) बसों के किराए में 50% छूट मिलती है। बाक़ी पैसा राज्य सरकार MSRTC को देती है।",
      "सितंबर 2026 से MSRTC रियायती टिकट सिर्फ़ नेशनल कॉमन मोबिलिटी कार्ड (NCMC) से देता है, इसलिए डिपो पर कार्ड बनवाएँ और उसमें पैसे डालकर रखें।",
    ],
  },
  benefits: {
    en: [
      "Half fare on MSRTC buses for journeys within Maharashtra.",
      "Works on most ST bus types, ordinary and many premium services.",
    ],
    hi: [
      "महाराष्ट्र के भीतर MSRTC बसों में आधा किराया।",
      "ज़्यादातर ST बसों में लागू, साधारण और कई प्रीमियम सेवाओं में भी।",
    ],
  },
  eligibilityText: {
    en: [
      "Any woman or girl travelling on an MSRTC bus within Maharashtra.",
      "Concession tickets are now issued through an NCMC card registered in your name.",
    ],
    hi: [
      "MSRTC बस से महाराष्ट्र के भीतर यात्रा करने वाली कोई भी महिला या लड़की।",
      "रियायती टिकट अब आपके नाम से पंजीकृत NCMC कार्ड से मिलता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your nearest MSRTC bus depot with your Aadhaar and register for an NCMC card.",
        "Top up the card before travelling.",
        "Use the card when buying the ticket from the conductor to get the half fare.",
      ],
      hi: [
        "आधार लेकर नज़दीकी MSRTC बस डिपो पर जाएँ और NCMC कार्ड के लिए पंजीकरण कराएँ।",
        "यात्रा से पहले कार्ड में पैसे डालें।",
        "कंडक्टर से टिकट लेते समय कार्ड इस्तेमाल करें, आधा किराया लगेगा।",
      ],
    },
  },

  officialUrl: "https://msrtc.maharashtra.gov.in/",
  sources: [
    "https://msrtc.maharashtra.gov.in/",
    "https://www.freepressjournal.in/mumbai/msrtc-concession-tickets-for-women-senior-citizens-to-be-issued-only-through-ncmc-cards-from-september-1",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
