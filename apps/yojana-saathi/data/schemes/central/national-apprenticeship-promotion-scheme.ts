import { all, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "national-apprenticeship-promotion-scheme",
  name: { en: "National Apprenticeship Promotion Scheme", hi: "राष्ट्रीय प्रशिक्षुता संवर्धन योजना" },
  aka: ["NAPS", "NAPS-2", "PM-NAPS", "Apprenticeship India"],
  shortDescription: {
    en: "Learn a trade on the job as a paid apprentice in a company, with a monthly stipend and the government paying 25% of it (up to ₹1,500) straight to you.",
    hi: "किसी कंपनी में पेड अप्रेंटिस बनकर काम करते हुए हुनर सीखें, हर महीने वज़ीफ़ा मिलेगा और उसका 25% (₹1,500 तक) सरकार सीधे आपको देगी।",
  },
  level: "central",
  ministry: "skill-development-entrepreneurship",
  categories: ["skills-employment"],
  tags: ["apprenticeship", "stipend", "on the job training", "iti", "youth", "job"],
  benefitType: "cash",
  isDBT: true,
  ageRange: { min: 14 },
  kundliHouse: "career",
  eligibility: all(minAge(14)),

  details: {
    en: [
      "Under NAPS, companies and other establishments take on apprentices and train them on the job for a fixed period. You earn a monthly stipend while you learn, and get a national apprenticeship certificate at the end.",
      "The government shares the stipend cost: it pays 25% of the stipend, up to ₹1,500 a month, directly into your bank account by Direct Benefit Transfer. The employer pays the rest. Minimum stipend rates were raised in September 2025 and now range from ₹6,800 to ₹12,300 a month depending on your education.",
      "The scheme is run by the Ministry of Skill Development and Entrepreneurship through the Apprenticeship India portal. It began in 2016 and continues as NAPS-2 since 2022-23.",
    ],
    hi: [
      "NAPS के तहत कंपनियाँ और दूसरे संस्थान अप्रेंटिस रखते हैं और तय समय तक काम पर ही प्रशिक्षण देते हैं। सीखते हुए आपको हर महीने वज़ीफ़ा मिलता है और आख़िर में राष्ट्रीय अप्रेंटिसशिप प्रमाण पत्र मिलता है।",
      "वज़ीफ़े का ख़र्च सरकार बाँटती है: वह वज़ीफ़े का 25%, ₹1,500 महीने तक, डायरेक्ट बेनिफ़िट ट्रांसफ़र से सीधे आपके बैंक खाते में देती है। बाक़ी पैसा नियोक्ता देता है। सितंबर 2025 में न्यूनतम वज़ीफ़ा बढ़ाया गया और अब यह आपकी पढ़ाई के हिसाब से ₹6,800 से ₹12,300 महीना है।",
      "यह योजना कौशल विकास एवं उद्यमशीलता मंत्रालय अप्रेंटिसशिप इंडिया पोर्टल के ज़रिए चलाता है। यह 2016 में शुरू हुई और 2022-23 से NAPS-2 के रूप में चल रही है।",
    ],
  },
  benefits: {
    en: [
      "Paid on-the-job training in a real workplace.",
      "Monthly stipend of at least ₹6,800 to ₹12,300, depending on your qualification.",
      "Government pays 25% of your stipend, up to ₹1,500 a month, directly to your bank account.",
      "National apprenticeship certificate after you pass the final assessment.",
    ],
    hi: [
      "असली कार्यस्थल पर काम करते हुए पेड प्रशिक्षण।",
      "आपकी पढ़ाई के हिसाब से हर महीने कम से कम ₹6,800 से ₹12,300 तक वज़ीफ़ा।",
      "वज़ीफ़े का 25%, ₹1,500 महीने तक, सरकार सीधे आपके बैंक खाते में देती है।",
      "अंतिम परीक्षा पास करने पर राष्ट्रीय अप्रेंटिसशिप प्रमाण पत्र।",
    ],
  },
  eligibilityText: {
    en: [
      "At least 14 years old (18 for apprenticeships in hazardous industries).",
      "Meets the minimum education for the chosen trade: from Class 5–9 for some trades, up to ITI, diploma or a degree for others.",
      "Has an Aadhaar-linked bank account to receive the government's share of the stipend.",
    ],
    hi: [
      "कम से कम 14 साल की उम्र (ख़तरनाक उद्योगों में अप्रेंटिसशिप के लिए 18 साल)।",
      "चुने गए काम के लिए ज़रूरी पढ़ाई हो: कुछ कामों के लिए 5वीं से 9वीं, दूसरों के लिए ITI, डिप्लोमा या डिग्री।",
      "सरकार का हिस्सा पाने के लिए आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Apprentices under 18 cannot be placed in hazardous industries.",
      "The government's share is paid only after the employer has paid its part of the stipend for that month.",
    ],
    hi: [
      "18 साल से कम उम्र के अप्रेंटिस को ख़तरनाक उद्योगों में नहीं रखा जा सकता।",
      "सरकार का हिस्सा तभी मिलता है जब नियोक्ता उस महीने अपना हिस्सा दे चुका हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to apprenticeshipindia.gov.in and register as a candidate with your Aadhaar and mobile number.",
        "Complete your profile with education details and bank account.",
        "Search apprenticeship openings by trade and location, and apply.",
        "When an establishment accepts you, sign the contract online. Your stipend starts from the joining date.",
      ],
      hi: [
        "apprenticeshipindia.gov.in पर जाकर आधार और मोबाइल नंबर से उम्मीदवार के रूप में पंजीकरण करें।",
        "पढ़ाई और बैंक खाते की जानकारी के साथ प्रोफ़ाइल पूरी करें।",
        "काम और जगह के हिसाब से अप्रेंटिसशिप की जगहें खोजें और आवेदन करें।",
        "कोई संस्थान आपको चुने तो ऑनलाइन अनुबंध पर हस्ताक्षर करें। जॉइन करने की तारीख़ से वज़ीफ़ा शुरू होता है।",
      ],
    },
    offline: {
      en: [
        "Visit a Pradhan Mantri National Apprenticeship Mela, held regularly in many districts.",
        "Carry your certificates and Aadhaar, and meet the companies offering apprenticeships.",
        "If selected, complete your registration on the portal with help from the mela staff.",
      ],
      hi: [
        "प्रधानमंत्री राष्ट्रीय अप्रेंटिसशिप मेले में जाएँ, जो कई ज़िलों में नियमित रूप से लगता है।",
        "प्रमाण पत्र और आधार साथ ले जाएँ, और अप्रेंटिसशिप देने वाली कंपनियों से मिलें।",
        "चुने जाने पर मेले के कर्मचारियों की मदद से पोर्टल पर पंजीकरण पूरा करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Education certificates (school, ITI, diploma or degree)", "Aadhaar-linked bank account details", "Mobile number and email", "Passport-size photo"],
    hi: ["आधार कार्ड", "शैक्षिक प्रमाण पत्र (स्कूल, ITI, डिप्लोमा या डिग्री)", "आधार से जुड़े बैंक खाते का विवरण", "मोबाइल नंबर और ईमेल", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Is an apprenticeship the same as a job?", hi: "क्या अप्रेंटिसशिप नौकरी जैसी ही है?" },
      a: {
        en: "No. You are a trainee for a fixed period and get a stipend, not a salary. The employer is not bound to hire you afterwards, but many apprentices do get jobs.",
        hi: "नहीं। आप तय समय के लिए प्रशिक्षु होते हैं और वेतन की जगह वज़ीफ़ा मिलता है। नियोक्ता बाद में नौकरी देने के लिए बाध्य नहीं है, पर कई अप्रेंटिस को नौकरी मिल जाती है।",
      },
    },
    {
      q: { en: "How long does an apprenticeship last?", hi: "अप्रेंटिसशिप कितने समय की होती है?" },
      a: {
        en: "It depends on the trade, usually from 6 months to 3 years. The period is written in your apprenticeship contract.",
        hi: "यह काम पर निर्भर करता है, आमतौर पर 6 महीने से 3 साल तक। यह अवधि आपके अप्रेंटिसशिप अनुबंध में लिखी होती है।",
      },
    },
  ],

  officialUrl: "https://www.apprenticeshipindia.gov.in/",
  sources: [
    "https://www.apprenticeshipindia.gov.in/",
    "https://msde.gov.in/schemes-initiatives/apprenticeship-training/naps",
    "https://rdsdewestbengal.dgt.gov.in/sites/default/files/2026-01/20250915_Upward%20revision_15.09.25.PDF",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
