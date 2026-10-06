import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "msrtc-senior-citizen-travel-concession",
  tier: "compact",
  name: {
    en: "ST Bus Travel for Senior Citizens (Amrut Jyeshtha Nagrik Yojana)",
    hi: "बुज़ुर्गों के लिए ST बस यात्रा (अमृत ज्येष्ठ नागरिक योजना)",
  },
  aka: ["Amrut Jyeshtha Nagrik", "free ST bus 75 years", "senior citizen bus concession Maharashtra"],
  shortDescription: {
    en: "Senior citizens travel free on Maharashtra ST buses from age 75, and pay half the fare between 65 and 75.",
    hi: "महाराष्ट्र की ST बसों में 75 साल से ज़्यादा उम्र के बुज़ुर्ग मुफ़्त यात्रा करते हैं, और 65 से 75 साल वाले आधा किराया देते हैं।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Maharashtra State Road Transport Corporation (MSRTC), Transport Department, Government of Maharashtra",
    hi: "महाराष्ट्र राज्य मार्ग परिवहन महामंडल (MSRTC), परिवहन विभाग, महाराष्ट्र सरकार",
  },
  categories: ["social-welfare"],
  tags: ["senior citizen", "free bus", "st bus", "msrtc", "travel concession", "amrut"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 65 },
  kundliHouse: "senior",
  eligibility: all(residentOf("maharashtra"), minAge(65)),

  details: {
    en: [
      "Maharashtra gives two travel benefits to senior citizens on MSRTC (ST) buses within the state. Under the Amrut Jyeshtha Nagrik Yojana, people above 75 travel free. Those aged 65 to 75 get a 50% concession on the fare.",
      "From September 2026, the 50% concession is issued only through the National Common Mobility Card (NCMC). People above 75 have been exempted from this card requirement for now and can show their age proof.",
    ],
    hi: [
      "महाराष्ट्र राज्य के भीतर MSRTC (ST) बसों में बुज़ुर्गों को दो तरह की छूट देता है। अमृत ज्येष्ठ नागरिक योजना में 75 साल से ज़्यादा उम्र वाले मुफ़्त यात्रा करते हैं। 65 से 75 साल वालों को किराए में 50% छूट मिलती है।",
      "सितंबर 2026 से 50% छूट सिर्फ़ नेशनल कॉमन मोबिलिटी कार्ड (NCMC) से मिलती है। 75 साल से ज़्यादा उम्र वालों को अभी इस कार्ड की शर्त से छूट है और वे उम्र का प्रमाण दिखा सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Above 75: free travel on MSRTC buses within Maharashtra.",
      "65 to 75: half fare on MSRTC buses within Maharashtra.",
    ],
    hi: [
      "75 साल से ज़्यादा: महाराष्ट्र के भीतर MSRTC बसों में मुफ़्त यात्रा।",
      "65 से 75 साल: महाराष्ट्र के भीतर MSRTC बसों में आधा किराया।",
    ],
  },
  eligibilityText: {
    en: [
      "Senior citizen aged 65 or more, travelling within Maharashtra.",
      "Age proof such as Aadhaar; those aged 65 to 75 need an NCMC card for the concession.",
    ],
    hi: [
      "65 साल या उससे ज़्यादा उम्र के बुज़ुर्ग, जो महाराष्ट्र के भीतर यात्रा करें।",
      "आधार जैसा उम्र का प्रमाण; 65 से 75 साल वालों को छूट के लिए NCMC कार्ड चाहिए।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Aged 65 to 75: register for an NCMC card at your nearest MSRTC depot with your Aadhaar, and top it up before travel.",
        "Above 75: show your Aadhaar or other age proof to the conductor to get a free ticket.",
      ],
      hi: [
        "65 से 75 साल: आधार लेकर नज़दीकी MSRTC डिपो पर NCMC कार्ड के लिए पंजीकरण कराएँ और यात्रा से पहले उसमें पैसे डालें।",
        "75 साल से ज़्यादा: कंडक्टर को आधार या उम्र का दूसरा प्रमाण दिखाकर मुफ़्त टिकट लें।",
      ],
    },
  },

  officialUrl: "https://msrtc.maharashtra.gov.in/",
  sources: [
    "https://msrtc.maharashtra.gov.in/",
    "https://www.freepressjournal.in/mumbai/msrtc-concession-tickets-for-women-senior-citizens-to-be-issued-only-through-ncmc-cards-from-september-1",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
