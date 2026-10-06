import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-mukhyamantri-vidyarthi-pratibha-yojana",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Mukhyamantri Vidyarthi Pratibha Yojana (Delhi)", hi: "मुख्यमंत्री विद्यार्थी प्रतिभा योजना (दिल्ली)" },
  aka: ["MVPY Delhi", "Vidyarthi Pratibha Yojana", "Delhi SC ST OBC scholarship class 9 to 12"],
  shortDescription: {
    en: "SC, ST and OBC students in Classes 9 to 12 in Delhi get ₹5,000 a year (Classes 9–10) or ₹10,000 a year (Classes 11–12) if they scored well in the previous class.",
    hi: "दिल्ली में कक्षा 9 से 12 के SC, ST और OBC छात्रों को पिछली कक्षा में अच्छे अंक लाने पर हर साल ₹5,000 (कक्षा 9–10) या ₹10,000 (कक्षा 11–12) मिलते हैं।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department for the Welfare of SC/ST/OBC, Govt. of NCT of Delhi", hi: "SC/ST/OBC कल्याण विभाग, दिल्ली सरकार" },
  categories: ["education"],
  tags: ["scholarship", "sc", "st", "obc", "class 9", "class 11", "merit", "delhi"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("delhi"), when("caste", "in", ["sc", "st", "pvtg", "obc"]), isTrue("student")),

  details: {
    en: [
      "Mukhyamantri Vidyarthi Pratibha Yojana is a Delhi government scholarship for Scheduled Caste, Scheduled Tribe and OBC students in Classes 9 to 12. It rewards good marks in the previous class.",
      "It covers students of government, aided and recognised schools in Delhi, including Kendriya Vidyalayas, NIOS and schools run by NDMC, the Delhi Cantonment Board and the municipal corporations. The money goes to the student's Aadhaar-seeded bank account.",
    ],
    hi: [
      "मुख्यमंत्री विद्यार्थी प्रतिभा योजना कक्षा 9 से 12 के अनुसूचित जाति, अनुसूचित जनजाति और OBC छात्रों के लिए दिल्ली सरकार की छात्रवृत्ति है। यह पिछली कक्षा में अच्छे अंकों का इनाम है।",
      "इसमें दिल्ली के सरकारी, सहायता प्राप्त और मान्यता प्राप्त स्कूलों के छात्र आते हैं, जिनमें केंद्रीय विद्यालय, NIOS और NDMC, दिल्ली छावनी बोर्ड व नगर निगमों के स्कूल भी शामिल हैं। पैसा छात्र के आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹5,000 a year for students in Classes 9 and 10.", "₹10,000 a year for students in Classes 11 and 12."],
    hi: ["कक्षा 9 और 10 के छात्रों को हर साल ₹5,000।", "कक्षा 11 और 12 के छात्रों को हर साल ₹10,000।"],
  },
  eligibilityText: {
    en: [
      "Resident of Delhi and belongs to SC, ST or OBC, with a caste certificate from the Delhi Revenue Department (or a Delhi domicile certificate if the SC certificate is from another state).",
      "Studying in Class 9 to 12 in a recognised school in Delhi; repeaters in the same class are not eligible.",
      "At least 50% marks in the previous class for Classes 9–10, and at least 60% for Classes 11–12.",
      "Family income up to ₹8 lakh a year (EWS certificate from the Delhi government). No income limit if you scored 75% or more in the previous class.",
      "Bank account in the student's name (joint with a parent allowed), active and seeded with the student's Aadhaar.",
    ],
    hi: [
      "दिल्ली का निवासी हो और SC, ST या OBC वर्ग से हो, दिल्ली राजस्व विभाग से जारी जाति प्रमाण पत्र के साथ (SC प्रमाण पत्र दूसरे राज्य का हो तो दिल्ली का अधिवास प्रमाण पत्र)।",
      "दिल्ली के मान्यता प्राप्त स्कूल में कक्षा 9 से 12 में पढ़ रहा हो; एक ही कक्षा दोहराने वाले पात्र नहीं हैं।",
      "कक्षा 9–10 के लिए पिछली कक्षा में कम से कम 50% अंक, और कक्षा 11–12 के लिए कम से कम 60% अंक।",
      "परिवार की सालाना आय ₹8 लाख तक (दिल्ली सरकार का EWS प्रमाण पत्र)। पिछली कक्षा में 75% या ज़्यादा अंक हों तो आय की कोई सीमा नहीं।",
      "छात्र के नाम पर बैंक खाता (माता-पिता के साथ संयुक्त खाता भी चलेगा), चालू और छात्र के आधार से जुड़ा।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register or log in on the Delhi e-District portal (edistrict.delhigovt.nic.in).",
        "Choose 'Mukhyamantri Vidyarthi Pratibha Yojana Scholarship Scheme' under the Department of Welfare of SC/ST.",
        "Upload the caste certificate, income or EWS certificate, school proof and last year's mark sheet, and submit.",
      ],
      hi: [
        "दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर रजिस्टर या लॉग इन करें।",
        "SC/ST कल्याण विभाग में 'Mukhyamantri Vidyarthi Pratibha Yojana Scholarship Scheme' चुनें।",
        "जाति प्रमाण पत्र, आय या EWS प्रमाण पत्र, स्कूल का प्रमाण और पिछले साल की मार्कशीट अपलोड करके जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Caste certificate issued by the Delhi Revenue Department", "Family income or EWS certificate from the Delhi Revenue Department", "Proof of studying in Class 9 to 12 in Delhi", "Previous year's mark sheet", "Student's Aadhaar-seeded bank account details"],
    hi: ["दिल्ली राजस्व विभाग से जारी जाति प्रमाण पत्र", "दिल्ली राजस्व विभाग से परिवार की आय या EWS प्रमाण पत्र", "दिल्ली में कक्षा 9 से 12 में पढ़ने का प्रमाण", "पिछले साल की मार्कशीट", "छात्र के आधार से जुड़े बैंक खाते का विवरण"],
  },

  officialUrl: "https://scstwelfare.delhi.gov.in/scstwelfare/services-schemes",
  sources: [
    "https://scstwelfare.delhi.gov.in/sites/default/files/scstwelfare/circulars-orders/scholarship_schemes_2025-26_guidelines.pdf",
    "https://scstwelfare.delhi.gov.in/scstwelfare/services-schemes",
    "https://edistrict.delhigovt.nic.in/in/en/Public/Services.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
