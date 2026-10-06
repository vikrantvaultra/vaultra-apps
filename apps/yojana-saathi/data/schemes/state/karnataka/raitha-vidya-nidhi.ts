import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "raitha-vidya-nidhi",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Mukhyamantri Raitha Vidya Nidhi", hi: "मुख्यमंत्री रैता विद्या निधि" },
  aka: ["Raitha Vidya Nidhi", "CM farmer scholarship", "Raita Vidya Nidhi"],
  shortDescription: {
    en: "Children of Karnataka farmers and landless farm labourers get a yearly scholarship of ₹2,000 to ₹11,000 for PUC, ITI, diploma, degree, professional and PG courses.",
    hi: "कर्नाटक के किसानों और भूमिहीन खेतिहर मज़दूरों के बच्चों को PUC, ITI, डिप्लोमा, डिग्री, प्रोफ़ेशनल और PG कोर्स के लिए हर साल ₹2,000 से ₹11,000 तक छात्रवृत्ति मिलती है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Department of Agriculture, Government of Karnataka",
    hi: "कृषि विभाग, कर्नाटक सरकार",
  },
  categories: ["education", "agriculture"],
  tags: ["scholarship", "farmer children", "farm labourer", "student", "ssp", "karnataka"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(residentOf("karnataka"), isTrue("student")),

  details: {
    en: [
      "Raitha Vidya Nidhi is a Karnataka scholarship for the children of farmers, started in 2021. Since 2022–23 it also covers children of landless farm labourers who hold an MGNREGA job card.",
      "Students apply through the State Scholarship Portal (SSP). The farmer family is checked against the state's FRUITS farmer database and the Kutumba family database, and approved amounts are paid by DBT into the student's bank account. Girls get a slightly higher amount.",
    ],
    hi: [
      "रैता विद्या निधि कर्नाटक की छात्रवृत्ति है, किसानों के बच्चों के लिए, जो 2021 में शुरू हुई। 2022–23 से इसमें उन भूमिहीन खेतिहर मज़दूरों के बच्चे भी शामिल हैं जिनके पास MGNREGA जॉब कार्ड है।",
      "छात्र राज्य छात्रवृत्ति पोर्टल (SSP) से आवेदन करते हैं। किसान परिवार की जाँच राज्य के FRUITS किसान डेटाबेस और कुटुंब परिवार डेटाबेस से होती है, और मंज़ूर राशि DBT से छात्र के बैंक खाते में आती है। लड़कियों को थोड़ी ज़्यादा राशि मिलती है।",
    ],
  },
  benefits: {
    en: [
      "High school (girls only): ₹2,000 a year.",
      "PUC, ITI or diploma: ₹2,500 for boys, ₹3,000 for girls.",
      "BA, BSc, BCom and other degree courses (not professional): ₹5,000 for boys, ₹5,500 for girls.",
      "LLB, paramedical, B.Pharm, nursing and similar professional courses: ₹7,500 for boys, ₹8,000 for girls.",
      "MBBS, BE, BTech and all postgraduate courses: ₹10,000 for boys, ₹11,000 for girls.",
    ],
    hi: [
      "हाई स्कूल (सिर्फ़ लड़कियाँ): हर साल ₹2,000।",
      "PUC, ITI या डिप्लोमा: लड़कों को ₹2,500, लड़कियों को ₹3,000।",
      "BA, BSc, BCom और दूसरे डिग्री कोर्स (प्रोफ़ेशनल नहीं): लड़कों को ₹5,000, लड़कियों को ₹5,500।",
      "LLB, पैरामेडिकल, B.Pharm, नर्सिंग जैसे प्रोफ़ेशनल कोर्स: लड़कों को ₹7,500, लड़कियों को ₹8,000।",
      "MBBS, BE, BTech और सभी PG कोर्स: लड़कों को ₹10,000, लड़कियों को ₹11,000।",
    ],
  },
  eligibilityText: {
    en: [
      "The student's parent is a farmer registered in Karnataka's FRUITS database, or a landless farm labourer with an MGNREGA job card.",
      "The student studies after Class 10 (or in high school, for girls) at a recognised institution in Karnataka.",
      "The student does not already get a state or central scholarship that the guidelines don't allow together with this one.",
    ],
    hi: [
      "छात्र के माता-पिता कर्नाटक के FRUITS डेटाबेस में दर्ज किसान हों, या MGNREGA जॉब कार्ड वाले भूमिहीन खेतिहर मज़दूर हों।",
      "छात्र 10वीं के बाद (लड़कियों के लिए हाई स्कूल में भी) कर्नाटक के किसी मान्य संस्थान में पढ़ रहा हो।",
      "छात्र को पहले से ऐसी कोई राज्य या केंद्र की छात्रवृत्ति न मिल रही हो जिसके साथ नियम यह लाभ नहीं देते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Make sure the parent's land and Aadhaar are registered in FRUITS (ask at the Raitha Samparka Kendra if not).",
        "Apply for the post-matric scholarship on the State Scholarship Portal (ssp.karnataka.gov.in) with the student's Aadhaar.",
        "The portal checks the farmer link automatically; eligible students are approved and paid by DBT.",
      ],
      hi: [
        "पक्का करें कि माता-पिता की ज़मीन और आधार FRUITS में दर्ज हैं (न हों तो रैता संपर्क केंद्र पर पूछें)।",
        "छात्र के आधार से राज्य छात्रवृत्ति पोर्टल (ssp.karnataka.gov.in) पर पोस्ट-मैट्रिक छात्रवृत्ति के लिए आवेदन करें।",
        "पोर्टल किसान वाला लिंक अपने-आप जाँचता है; पात्र छात्रों को मंज़ूरी मिलती है और पैसा DBT से आता है।",
      ],
    },
  },

  officialUrl: "https://raitamitra.karnataka.gov.in/104/chief-minister-raitha-vidya-nidhi/kn",
  sources: [
    "https://raitamitra.karnataka.gov.in/uploads/2026-27gud_1788854334.pdf",
    "https://raitamitra.karnataka.gov.in/104/chief-minister-raitha-vidya-nidhi/kn",
    "https://ssp.karnataka.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
