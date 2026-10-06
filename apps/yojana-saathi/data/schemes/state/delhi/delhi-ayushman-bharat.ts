import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-ayushman-bharat",
  name: { en: "Ayushman Bharat in Delhi (₹10 lakh health cover)", hi: "दिल्ली में आयुष्मान भारत (₹10 लाख स्वास्थ्य बीमा)" },
  aka: ["Ayushman Bharat Delhi", "PM-JAY Delhi", "Ayushman card Delhi", "Delhi health top-up"],
  shortDescription: {
    en: "Free hospital treatment up to ₹10 lakh per family per year in Delhi: ₹5 lakh from Ayushman Bharat PM-JAY plus a ₹5 lakh top-up from the Delhi government.",
    hi: "दिल्ली में हर परिवार को हर साल ₹10 लाख तक मुफ़्त अस्पताल इलाज: आयुष्मान भारत PM-JAY से ₹5 लाख और दिल्ली सरकार की ओर से ₹5 लाख अतिरिक्त।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Health & Family Welfare, Govt. of NCT of Delhi", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, दिल्ली सरकार" },
  categories: ["health"],
  tags: ["ayushman card", "health insurance", "pmjay", "free treatment", "hospital", "delhi"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 1000000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("delhi")),

  details: {
    en: [
      "Delhi joined Ayushman Bharat PM-JAY in 2025 after the new government signed an agreement with the Union Health Ministry on 5 April 2025. Ayushman cards have been issued since 10 April 2025.",
      "Eligible families get the national cover of ₹5 lakh a year, and the Delhi government adds another ₹5 lakh, so the total is ₹10 lakh per family per year for hospital treatment.",
      "Families are picked using National Food Security Act (ration card) and SECC 2011 data, or as decided by the Delhi Cabinet. Senior citizens aged 70+ are also covered. Treatment is cashless at empanelled hospitals across India.",
    ],
    hi: [
      "नई सरकार ने 5 अप्रैल 2025 को केंद्रीय स्वास्थ्य मंत्रालय के साथ समझौता किया, जिसके बाद दिल्ली 2025 में आयुष्मान भारत PM-JAY से जुड़ी। 10 अप्रैल 2025 से आयुष्मान कार्ड बन रहे हैं।",
      "पात्र परिवारों को देश भर वाला ₹5 लाख सालाना बीमा मिलता है, और दिल्ली सरकार ₹5 लाख और जोड़ती है, यानी अस्पताल इलाज के लिए हर परिवार को हर साल कुल ₹10 लाख।",
      "परिवार राष्ट्रीय खाद्य सुरक्षा अधिनियम (राशन कार्ड) और SECC 2011 के आँकड़ों से, या दिल्ली कैबिनेट के फ़ैसले से चुने जाते हैं। 70+ उम्र के बुज़ुर्ग भी शामिल हैं। देश भर के सूचीबद्ध अस्पतालों में इलाज कैशलेस है।",
    ],
  },
  benefits: {
    en: [
      "Up to ₹10 lakh per family per year for hospital treatment (₹5 lakh central + ₹5 lakh Delhi top-up).",
      "Cashless treatment at empanelled government and private hospitals, including outside Delhi.",
      "Covers hospital stay, surgery, medicines and tests linked to the treatment.",
    ],
    hi: [
      "अस्पताल इलाज के लिए हर परिवार को हर साल ₹10 लाख तक (₹5 लाख केंद्र + ₹5 लाख दिल्ली सरकार)।",
      "सूचीबद्ध सरकारी और निजी अस्पतालों में कैशलेस इलाज, दिल्ली के बाहर भी।",
      "अस्पताल में भर्ती, सर्जरी, दवाइयाँ और इलाज से जुड़ी जाँचें शामिल।",
    ],
  },
  eligibilityText: {
    en: [
      "A family in Delhi listed as eligible under PM-JAY, based on NFSA ration card data, SECC 2011 data, or categories approved by the Delhi Cabinet.",
      "Any Delhi resident aged 70 or above (through the Ayushman Vay Vandana card).",
      "Has an Ayushman card linked to Aadhaar.",
    ],
    hi: [
      "दिल्ली का परिवार जो NFSA राशन कार्ड, SECC 2011 के आँकड़ों, या दिल्ली कैबिनेट की मंज़ूर श्रेणियों के आधार पर PM-JAY में पात्र हो।",
      "70 साल या उससे ज़्यादा उम्र का कोई भी दिल्ली निवासी (आयुष्मान वय वंदना कार्ड से)।",
      "आधार से जुड़ा आयुष्मान कार्ड हो।",
    ],
  },
  exclusions: {
    en: [
      "Families not on the eligible list (being a Delhi resident alone is not enough).",
      "Outpatient (OPD) visits that don't need hospital admission are not covered.",
    ],
    hi: [
      "जो परिवार पात्र सूची में नहीं हैं (सिर्फ़ दिल्ली का निवासी होना काफ़ी नहीं)।",
      "बिना भर्ती वाले OPD इलाज शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to beneficiary.nha.gov.in or open the Ayushman app and log in with your mobile number.",
        "Search for your name by state (Delhi) and Aadhaar or ration card number.",
        "If listed, complete Aadhaar e-KYC and download your Ayushman card.",
      ],
      hi: [
        "beneficiary.nha.gov.in पर जाएँ या आयुष्मान ऐप खोलें और मोबाइल नंबर से लॉग इन करें।",
        "राज्य (दिल्ली) और आधार या राशन कार्ड नंबर से अपना नाम खोजें।",
        "नाम हो तो आधार e-KYC पूरा करें और आयुष्मान कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit an Ayushman card camp, Ayushman Arogya Mandir, empanelled hospital or Common Service Centre in Delhi.",
        "Show your Aadhaar and ration card; the operator checks the list and makes your card.",
      ],
      hi: [
        "दिल्ली में आयुष्मान कार्ड शिविर, आयुष्मान आरोग्य मंदिर, सूचीबद्ध अस्पताल या कॉमन सर्विस सेंटर पर जाएँ।",
        "आधार और राशन कार्ड दिखाएँ; ऑपरेटर सूची जाँच कर कार्ड बनाता है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Ration card (NFSA)", "Mobile number linked to Aadhaar"],
    hi: ["आधार", "राशन कार्ड (NFSA)", "आधार से जुड़ा मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Can I use the ₹10 lakh cover outside Delhi?", hi: "क्या ₹10 लाख का बीमा दिल्ली के बाहर इस्तेमाल हो सकता है?" },
      a: {
        en: "The ₹5 lakh PM-JAY cover works at empanelled hospitals across India. Ask the hospital's Ayushman desk whether the Delhi top-up applies there before admission.",
        hi: "PM-JAY का ₹5 लाख बीमा देश भर के सूचीबद्ध अस्पतालों में चलता है। भर्ती से पहले अस्पताल के आयुष्मान डेस्क से पूछ लें कि दिल्ली का अतिरिक्त ₹5 लाख वहाँ लागू है या नहीं।",
      },
    },
    {
      q: { en: "My parents are over 70. Do they need a ration card?", hi: "मेरे माता-पिता 70 से ऊपर हैं। क्या उन्हें राशन कार्ड चाहिए?" },
      a: {
        en: "No. Everyone aged 70+ can get an Ayushman Vay Vandana card with just Aadhaar, whatever their income.",
        hi: "नहीं। 70+ उम्र का हर व्यक्ति आय कुछ भी हो, सिर्फ़ आधार से आयुष्मान वय वंदना कार्ड बनवा सकता है।",
      },
    },
  ],

  officialUrl: "https://beneficiary.nha.gov.in/",
  sources: [
    "https://www.newsonair.gov.in/delhi-joins-ayushman-bharat-doubles-health-cover-to-%E2%82%B910-lakh-per-family",
    "https://newsonair.gov.in/delhi-govt-to-implement-ayushman-bharat-scheme-with-%E2%82%B95-lakh-top-up/",
    "https://www.business-standard.com/health/delhi-ayushman-bharat-implementation-110-hospitals-health-scheme-125041800768_1.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
