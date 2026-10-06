import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mizoram-universal-health-care-scheme",
  overlapGroup: "health-cover",
  name: { en: "Mizoram Universal Health Care Scheme (MUHCS)", hi: "मिज़ोरम यूनिवर्सल हेल्थ केयर योजना (MUHCS)" },
  aka: ["MUHCS", "MUHCS 2.0", "Mizoram State Health Care Scheme", "MSHCS"],
  shortDescription: {
    en: "Cashless hospital treatment up to ₹5 lakh a year per family in Mizoram. General families join by paying a yearly fee of ₹2,500, ₹5,000 or ₹10,000.",
    hi: "मिज़ोरम में हर परिवार को साल में ₹5 लाख तक का कैशलेस अस्पताल इलाज। आम परिवार ₹2,500, ₹5,000 या ₹10,000 की सालाना फ़ीस देकर जुड़ते हैं।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Mizoram State Health Care Society, Health & Family Welfare Department, Government of Mizoram",
    hi: "मिज़ोरम स्टेट हेल्थ केयर सोसाइटी, स्वास्थ्य एवं परिवार कल्याण विभाग, मिज़ोरम सरकार",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "cashless treatment", "hospital", "muhcs", "family health cover", "mizoram"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500_000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("mizoram")),

  details: {
    en: [
      "The Mizoram Universal Health Care Scheme (MUHCS) is the state's health cover for every family. It replaced the older Mizoram State Health Care Scheme and is run by the Mizoram State Health Care Society. The current policy year runs from 1 April 2026 to 31 March 2027.",
      "An enrolled family gets cashless treatment of up to ₹5 lakh a year at empanelled hospitals. General families pay a yearly enrolment fee and can choose one of three levels: ₹2,500, ₹5,000 or ₹10,000.",
      "State government employees, civil pensioners and families covered by Ayushman Bharat PM-JAY (Golden Card) are covered through their own categories and don't need to enrol as paying general members.",
    ],
    hi: [
      "मिज़ोरम यूनिवर्सल हेल्थ केयर योजना (MUHCS) राज्य के हर परिवार के लिए स्वास्थ्य कवर है। इसने पुरानी मिज़ोरम स्टेट हेल्थ केयर योजना की जगह ली है और इसे मिज़ोरम स्टेट हेल्थ केयर सोसाइटी चलाती है। मौजूदा पॉलिसी साल 1 अप्रैल 2026 से 31 मार्च 2027 तक है।",
      "जुड़े परिवार को सूचीबद्ध अस्पतालों में साल में ₹5 लाख तक का कैशलेस इलाज मिलता है। आम परिवार सालाना नामांकन फ़ीस देते हैं और तीन में से एक स्तर चुन सकते हैं: ₹2,500, ₹5,000 या ₹10,000।",
      "राज्य सरकारी कर्मचारी, सिविल पेंशनभोगी और आयुष्मान भारत PM-JAY (गोल्डन कार्ड) वाले परिवार अपनी अलग श्रेणी से कवर होते हैं, उन्हें फ़ीस देकर आम सदस्य के रूप में जुड़ने की ज़रूरत नहीं है।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment of up to ₹5 lakh per family per year.",
      "Treatment at empanelled hospitals in Mizoram, and outside the state with an approved referral.",
      "Choice of three yearly fee levels for general families: ₹2,500, ₹5,000 or ₹10,000.",
    ],
    hi: [
      "हर परिवार को साल में ₹5 लाख तक का कैशलेस इलाज।",
      "मिज़ोरम के सूचीबद्ध अस्पतालों में, और मंज़ूर रेफ़रल के साथ राज्य के बाहर भी इलाज।",
      "आम परिवारों के लिए तीन सालाना फ़ीस स्तर: ₹2,500, ₹5,000 या ₹10,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Any family living in Mizoram can enrol as a general member by paying the yearly fee during the enrolment window.",
      "State government employees and civil pensioners are covered through their own MUHCS categories.",
      "Families eligible for AB PM-JAY (Golden Card) are covered without paying the general fee.",
    ],
    hi: [
      "मिज़ोरम में रहने वाला कोई भी परिवार नामांकन की अवधि में सालाना फ़ीस देकर आम सदस्य बन सकता है।",
      "राज्य सरकारी कर्मचारी और सिविल पेंशनभोगी MUHCS की अपनी श्रेणियों से कवर होते हैं।",
      "AB PM-JAY (गोल्डन कार्ड) के पात्र परिवार बिना आम फ़ीस दिए कवर होते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Families who did not enrol (or pay the fee) during the enrolment window are not covered for that policy year.",
      "Treatment above ₹5 lakh in a year has to be paid by the family.",
      "Treatment outside Mizoram needs an approved referral, except as the scheme's emergency rules allow.",
    ],
    hi: [
      "जो परिवार नामांकन अवधि में नहीं जुड़े (या फ़ीस नहीं दी), वे उस पॉलिसी साल में कवर नहीं होते।",
      "साल में ₹5 लाख से ज़्यादा का इलाज परिवार को ख़ुद भरना होता है।",
      "मिज़ोरम के बाहर इलाज के लिए मंज़ूर रेफ़रल ज़रूरी है, सिवाय उन आपात मामलों के जिनकी योजना में छूट है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "During the enrolment window (for 2026-27 it opened on 16 February 2026), go to the MUHCS enrolment portal (muhcs.mizoram.gov.in).",
        "Enter your family details, choose the ₹2,500, ₹5,000 or ₹10,000 level and pay the fee online.",
        "Download your MUHCS card and show it at the hospital when you need treatment.",
      ],
      hi: [
        "नामांकन अवधि में (2026-27 के लिए यह 16 फ़रवरी 2026 को खुली) MUHCS नामांकन पोर्टल (muhcs.mizoram.gov.in) पर जाएँ।",
        "परिवार का ब्योरा भरें, ₹2,500, ₹5,000 या ₹10,000 का स्तर चुनें और फ़ीस ऑनलाइन भरें।",
        "अपना MUHCS कार्ड डाउनलोड करें और इलाज के समय अस्पताल में दिखाएँ।",
      ],
    },
    offline: {
      en: [
        "In villages chosen for offline enrolment, enrolment camps are held (for 2026-27, from 1 March 2026).",
        "For help, call the MUHCS call centre on +91 80652 93906 or 0389 2328223.",
      ],
      hi: [
        "ऑफ़लाइन नामांकन के लिए चुने गए गाँवों में नामांकन कैंप लगते हैं (2026-27 के लिए 1 मार्च 2026 से)।",
        "मदद के लिए MUHCS कॉल सेंटर +91 80652 93906 या 0389 2328223 पर फ़ोन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar of family members", "Proof of residence in Mizoram", "Mobile number and a way to pay the enrolment fee"],
    hi: ["परिवार के सदस्यों का आधार", "मिज़ोरम में रहने का सबूत", "मोबाइल नंबर और नामांकन फ़ीस भरने का ज़रिया"],
  },
  faqs: [
    {
      q: { en: "I missed the enrolment window. Can I join now?", hi: "मेरी नामांकन की तारीख़ निकल गई। क्या अभी जुड़ सकते हैं?" },
      a: {
        en: "General enrolment is open only for a fixed period before each policy year (around February to April). Watch the Mizoram State Health Care Society website for the next window.",
        hi: "आम नामांकन हर पॉलिसी साल से पहले सिर्फ़ एक तय अवधि (लगभग फ़रवरी से अप्रैल) में खुलता है। अगली अवधि के लिए मिज़ोरम स्टेट हेल्थ केयर सोसाइटी की वेबसाइट देखते रहें।",
      },
    },
    {
      q: { en: "We have an Ayushman Bharat Golden Card. Do we need to pay?", hi: "हमारे पास आयुष्मान भारत गोल्डन कार्ड है। क्या हमें फ़ीस देनी होगी?" },
      a: {
        en: "No. Golden Card families are covered without enrolling as paying general members.",
        hi: "नहीं। गोल्डन कार्ड वाले परिवार बिना फ़ीस वाले आम सदस्य बने कवर होते हैं।",
      },
    },
  ],

  officialUrl: "https://mshcs.mizoram.gov.in/",
  sources: [
    "https://mshcs.mizoram.gov.in/post/muhcs-20-enrolment-16-feb-2026-aangin",
    "https://mshcs.mizoram.gov.in/",
    "https://muhcs.mizoram.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
