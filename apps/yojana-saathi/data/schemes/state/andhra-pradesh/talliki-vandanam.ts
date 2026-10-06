import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "talliki-vandanam",
  name: { en: "Talliki Vandanam", hi: "तल्लिकी वंदनम" },
  aka: ["Thalliki Vandanam", "Amma Vodi successor", "AP mother 15000 per child"],
  shortDescription: {
    en: "Mothers in poor Andhra Pradesh families get ₹15,000 a year for every child studying in Class 1 to 12. ₹13,000 goes to the mother's bank account and ₹2,000 to the school.",
    hi: "आंध्र प्रदेश के गरीब परिवारों की माताओं को कक्षा 1 से 12 में पढ़ रहे हर बच्चे के लिए साल में ₹15,000 मिलते हैं। ₹13,000 माँ के बैंक खाते में और ₹2,000 स्कूल को जाते हैं।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "School Education Department, Government of Andhra Pradesh",
    hi: "स्कूल शिक्षा विभाग, आंध्र प्रदेश सरकार",
  },
  categories: ["education", "women-child"],
  tags: ["school", "mother", "talliki vandanam", "15000", "student", "amma vodi", "andhra pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("andhra-pradesh"),
    labelled(isTrue("bpl"), { en: "Your family has a rice card", hi: "आपके परिवार के पास राइस कार्ड है" }),
  ),

  details: {
    en: [
      "Talliki Vandanam is Andhra Pradesh's yearly support to mothers for their children's schooling. It replaced the earlier Amma Vodi scheme and started paying in 2025. Unlike Amma Vodi, it covers every school-going child in the family, not just one.",
      "For each eligible child the state sanctions ₹15,000 a year. ₹13,000 is paid by DBT to the mother's (or guardian's) Aadhaar-linked bank account, and ₹2,000 is kept for school upkeep such as toilets and maintenance.",
      "For the 2026-27 school year, payments began on 22 July 2026 for about 67 lakh students. The scheme is run by the School Education Department with the village and ward secretariats.",
    ],
    hi: [
      "तल्लिकी वंदनम आंध्र प्रदेश की माताओं को बच्चों की पढ़ाई के लिए दी जाने वाली सालाना मदद है। इसने पुरानी अम्मा वोडी योजना की जगह ली और 2025 से पैसा मिल रहा है। अम्मा वोडी से अलग, इसमें परिवार के हर स्कूल जाने वाले बच्चे को लाभ मिलता है, सिर्फ़ एक को नहीं।",
      "हर पात्र बच्चे के लिए राज्य साल में ₹15,000 मंज़ूर करता है। ₹13,000 DBT से माँ (या अभिभावक) के आधार से जुड़े बैंक खाते में आते हैं, और ₹2,000 स्कूल के रख-रखाव, जैसे शौचालय और मरम्मत, के लिए रखे जाते हैं।",
      "2026-27 सत्र के लिए 22 जुलाई 2026 से लगभग 67 लाख छात्रों के लिए पैसा भेजा जाने लगा। योजना स्कूल शिक्षा विभाग, गाँव और वार्ड सचिवालयों के साथ मिलकर चलाता है।",
    ],
  },
  benefits: {
    en: [
      "₹15,000 a year for each school-going child in Class 1 to 12 (including Intermediate).",
      "₹13,000 of this is paid straight to the mother's bank account.",
      "₹2,000 goes to the school for upkeep.",
      "Every eligible child in the family is covered.",
    ],
    hi: [
      "कक्षा 1 से 12 (इंटरमीडिएट समेत) में पढ़ रहे हर बच्चे के लिए साल में ₹15,000।",
      "इसमें से ₹13,000 सीधे माँ के बैंक खाते में आते हैं।",
      "₹2,000 स्कूल को रख-रखाव के लिए जाते हैं।",
      "परिवार के हर पात्र बच्चे को लाभ मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The child lives in Andhra Pradesh and studies in Class 1 to 12 or Intermediate at a recognised government, aided or private school or college in the state.",
      "The child has at least 75% attendance.",
      "The family has a rice card, and income is up to ₹10,000 a month in a village or ₹12,000 a month in a town.",
      "The mother or guardian has an Aadhaar-linked, NPCI-mapped bank account.",
    ],
    hi: [
      "बच्चा आंध्र प्रदेश में रहता है और राज्य के किसी मान्यता प्राप्त सरकारी, सहायता प्राप्त या निजी स्कूल या कॉलेज में कक्षा 1 से 12 या इंटरमीडिएट में पढ़ता है।",
      "बच्चे की हाज़िरी कम से कम 75% हो।",
      "परिवार के पास राइस कार्ड हो, और आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक हो।",
      "माँ या अभिभावक का बैंक खाता आधार से जुड़ा और NPCI से मैप हो।",
    ],
  },
  exclusions: {
    en: [
      "Attendance below 75%.",
      "Family without a rice card or above the income limit.",
      "Children not studying in a recognised school or junior college in Andhra Pradesh.",
    ],
    hi: [
      "हाज़िरी 75% से कम हो।",
      "परिवार के पास राइस कार्ड न हो या आय सीमा से ज़्यादा हो।",
      "बच्चा आंध्र प्रदेश के किसी मान्यता प्राप्त स्कूल या जूनियर कॉलेज में न पढ़ता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "There is usually no separate form. Eligible students are picked from school records and the rice card database.",
        "Check the draft eligible list put up at your village or ward secretariat (Swarna Grama / Swarna Wardu).",
        "If your child is missing, raise a grievance at the secretariat with the student's and mother's Aadhaar, rice card and bank details.",
        "Make sure the mother's bank account is linked to Aadhaar and NPCI so the money can be credited.",
      ],
      hi: [
        "आम तौर पर अलग से फ़ॉर्म नहीं भरना होता। पात्र छात्रों को स्कूल के रिकॉर्ड और राइस कार्ड के डेटा से चुना जाता है।",
        "अपने गाँव या वार्ड सचिवालय (स्वर्ण ग्राम / स्वर्ण वार्ड) पर लगी पात्र छात्रों की सूची देखें।",
        "अगर बच्चे का नाम नहीं है, तो सचिवालय में छात्र और माँ के आधार, राइस कार्ड और बैंक की जानकारी के साथ शिकायत दर्ज करें।",
        "ध्यान रखें कि माँ का बैंक खाता आधार और NPCI से जुड़ा हो, ताकि पैसा आ सके।",
      ],
    },
  },
  documents: {
    en: ["Student's Aadhaar", "Mother's or guardian's Aadhaar", "Rice card", "Aadhaar-linked bank account of the mother or guardian"],
    hi: ["छात्र का आधार", "माँ या अभिभावक का आधार", "राइस कार्ड", "माँ या अभिभावक का आधार से जुड़ा बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "Why did I get ₹13,000 and not ₹15,000?", hi: "मुझे ₹15,000 की जगह ₹13,000 क्यों मिले?" },
      a: {
        en: "₹2,000 of the ₹15,000 for each child is kept for the upkeep of schools. The remaining ₹13,000 is paid to the mother.",
        hi: "हर बच्चे के ₹15,000 में से ₹2,000 स्कूलों के रख-रखाव के लिए रखे जाते हैं। बाकी ₹13,000 माँ को मिलते हैं।",
      },
    },
    {
      q: { en: "I have three children in school. Will all of them be covered?", hi: "मेरे तीन बच्चे स्कूल में हैं। क्या तीनों को लाभ मिलेगा?" },
      a: {
        en: "Yes. Every eligible school-going child in the family is covered, as long as each meets the attendance rule.",
        hi: "हाँ। परिवार के हर पात्र स्कूल जाने वाले बच्चे को लाभ मिलता है, बशर्ते हर बच्चा हाज़िरी की शर्त पूरी करे।",
      },
    },
  ],

  officialUrl: "https://apseva.ap.gov.in/",
  sources: [
    "https://prsindia.org/budgets/states/andhra-pradesh-budget-analysis-2026-27",
    "https://www.thenewsminute.com/andhra-pradesh/andhra-pradesh-presents-rs-332-lakh-crore-budget-for-2026-27",
    "https://kpiasacademy.com/appsc-current-affairs-july-23rd-2026/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
