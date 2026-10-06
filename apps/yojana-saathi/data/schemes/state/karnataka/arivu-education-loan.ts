import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "arivu-education-loan",
  tier: "compact",
  name: { en: "Arivu Education Loan", hi: "अरिवु शिक्षा ऋण योजना" },
  aka: ["Arivu", "KMDC Arivu", "minority education loan Karnataka"],
  shortDescription: {
    en: "Minority students in Karnataka from families earning up to ₹8 lakh get a yearly loan of ₹50,000 to ₹5 lakh for professional courses like MBBS, BE, BDS, MBA and LLB, with only a 2% charge.",
    hi: "कर्नाटक के अल्पसंख्यक छात्रों को, जिनके परिवार की आय ₹8 लाख तक है, MBBS, BE, BDS, MBA, LLB जैसे प्रोफ़ेशनल कोर्स के लिए हर साल ₹50,000 से ₹5 लाख तक का लोन मिलता है, सिर्फ़ 2% शुल्क पर।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Karnataka Minorities Development Corporation, Minority Welfare Department",
    hi: "कर्नाटक अल्पसंख्यक विकास निगम, अल्पसंख्यक कल्याण विभाग",
  },
  categories: ["education", "minority"],
  tags: ["education loan", "minority", "professional course", "mbbs", "engineering", "arivu", "karnataka"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 50000, period: "yearly", kind: "loan" },
  kundliHouse: "education",
  eligibility: all(residentOf("karnataka"), isTrue("minority"), isTrue("student"), incomeUpTo(800_000)),

  details: {
    en: [
      "Arivu is a low-cost education loan from the Karnataka Minorities Development Corporation for Muslim, Christian, Jain, Buddhist, Sikh and Parsi students in professional courses.",
      "The loan is given every year of the course and covers fees. Repayment starts six months after you finish, with only a 2% service charge.",
    ],
    hi: [
      "अरिवु कर्नाटक अल्पसंख्यक विकास निगम का कम लागत वाला शिक्षा ऋण है, मुस्लिम, ईसाई, जैन, बौद्ध, सिख और पारसी छात्रों के लिए जो प्रोफ़ेशनल कोर्स कर रहे हैं।",
      "लोन कोर्स के हर साल दिया जाता है और फ़ीस में मदद करता है। पढ़ाई पूरी होने के छह महीने बाद चुकाना शुरू होता है, सिर्फ़ 2% सेवा शुल्क के साथ।",
    ],
  },
  benefits: {
    en: [
      "MBBS, MD or MS: up to ₹5 lakh a year.",
      "BDS or MDS: up to ₹1 lakh a year.",
      "AYUSH, engineering, architecture, MBA, MCA, LLB and similar courses: up to ₹50,000 a year.",
      "Only a 2% service charge; repayment starts 6 months after the course ends.",
    ],
    hi: [
      "MBBS, MD या MS: हर साल ₹5 लाख तक।",
      "BDS या MDS: हर साल ₹1 लाख तक।",
      "आयुष, इंजीनियरिंग, आर्किटेक्चर, MBA, MCA, LLB जैसे कोर्स: हर साल ₹50,000 तक।",
      "सिर्फ़ 2% सेवा शुल्क; कोर्स ख़त्म होने के 6 महीने बाद चुकाना शुरू।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a religious minority (Muslim, Christian, Jain, Buddhist, Sikh or Parsi) and is a permanent resident of Karnataka.",
      "Family income up to ₹8 lakh a year.",
      "Admitted to an eligible professional course at a recognised college.",
      "To renew each year, you must repay 12% of the previous year's loan.",
    ],
    hi: [
      "धार्मिक अल्पसंख्यक (मुस्लिम, ईसाई, जैन, बौद्ध, सिख या पारसी) हो और कर्नाटक का स्थायी निवासी हो।",
      "परिवार की सालाना आय ₹8 लाख तक।",
      "किसी मान्य कॉलेज में पात्र प्रोफ़ेशनल कोर्स में दाख़िला हो।",
      "हर साल नवीनीकरण के लिए पिछले साल के लोन का 12% चुकाना होता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When applications open, apply on the KMDC online portal (kmdconline.karnataka.gov.in).",
        "Upload your admission and fee details, income and caste/religion certificates, Aadhaar and bank details.",
        "The district KMDC office verifies the application and the loan is released to the college or your account.",
      ],
      hi: [
        "जब आवेदन खुलें, KMDC ऑनलाइन पोर्टल (kmdconline.karnataka.gov.in) पर आवेदन करें।",
        "दाख़िले और फ़ीस की जानकारी, आय और धर्म/जाति प्रमाण पत्र, आधार और बैंक विवरण अपलोड करें।",
        "ज़िला KMDC दफ़्तर आवेदन जाँचता है और लोन कॉलेज या आपके खाते में भेजा जाता है।",
      ],
    },
  },

  officialUrl: "https://kmdc.karnataka.gov.in/4/arivu-education-loan-scheme/kn",
  sources: ["https://kmdc.karnataka.gov.in/4/arivu-education-loan-scheme/kn", "https://kmdconline.karnataka.gov.in/Portal/home"],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "check-status",
};

export default scheme;
