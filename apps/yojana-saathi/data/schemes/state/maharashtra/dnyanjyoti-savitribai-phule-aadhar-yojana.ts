import { all, incomeUpTo, isTrue, labelled, maxAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dnyanjyoti-savitribai-phule-aadhar-yojana",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Dnyanjyoti Savitribai Phule Aadhar Yojana", hi: "ज्ञानज्योति सावित्रीबाई फुले आधार योजना" },
  aka: ["Gyanjyoti Savitribai Phule Aadhar Yojana", "Savitribai Phule Aadhar Yojana", "OBC Swadhar"],
  shortDescription: {
    en: "OBC, VJNT, NT and SBC students in Maharashtra who couldn't get a government hostel seat get ₹38,000 to ₹60,000 a year for food and lodging, if family income is up to ₹2.5 lakh.",
    hi: "महाराष्ट्र के OBC, VJNT, NT और SBC छात्रों को, जिन्हें सरकारी हॉस्टल में जगह नहीं मिली, खाने और रहने के लिए ₹38,000 से ₹60,000 सालाना मिलते हैं, अगर परिवार की आय ₹2.5 लाख तक है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["hostel allowance", "obc", "vjnt", "sbc", "swadhar", "dbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 38000, period: "yearly", kind: "cash" },
  ageRange: { max: 30 },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "obc"), { en: "Belongs to the OBC, VJNT, NT or SBC category", hi: "OBC, VJNT, NT या SBC वर्ग से हो" }),
    incomeUpTo(250_000),
    maxAge(30),
  ),

  details: {
    en: ["This scheme does for OBC, VJNT, NT and SBC students what Swadhar does for SC students. If you study after class 12 and could not get into a government hostel, the state pays you a yearly amount for food, lodging and daily expenses.", "It was approved by a government resolution in March 2024 and is run by the OBC Bahujan Welfare Department through its district offices. The money goes by DBT to your Aadhaar-linked bank account."],
    hi: ["यह योजना OBC, VJNT, NT और SBC छात्रों के लिए वैसी ही है जैसी SC छात्रों के लिए स्वाधार। अगर आप कक्षा 12 के बाद पढ़ रहे हैं और सरकारी हॉस्टल में जगह नहीं मिली, तो राज्य सरकार खाने, रहने और रोज़ के ख़र्च के लिए सालाना राशि देती है।", "इसे मार्च 2024 के सरकारी निर्णय से मंज़ूरी मिली और इतर मागास बहुजन कल्याण विभाग अपने ज़िला कार्यालयों से इसे चलाता है। पैसा DBT से आपके आधार से जुड़े बैंक खाते में आता है।"],
  },
  benefits: {
    en: ["₹60,000 a year in Mumbai and suburbs, Navi Mumbai, Thane, Pune, Pimpri-Chinchwad and Nagpur.", "₹51,000 a year in other divisional cities and Class C municipal areas.", "₹43,000 a year in other districts and ₹38,000 a year at taluka level.", "Covers food, residence and subsistence allowances."],
    hi: ["मुंबई व उपनगर, नवी मुंबई, ठाणे, पुणे, पिंपरी-चिंचवड और नागपुर में ₹60,000 सालाना।", "दूसरे संभागीय शहरों और 'C' श्रेणी नगर क्षेत्रों में ₹51,000 सालाना।", "दूसरे ज़िलों में ₹43,000 और तालुका स्तर पर ₹38,000 सालाना।", "इसमें भोजन, निवास और निर्वाह भत्ता शामिल है।"],
  },
  eligibilityText: {
    en: ["Belongs to the OBC, VJNT, NT or SBC category and lives in Maharashtra.", "Studying a professional or non-professional course of at least 2 years after class 12.", "At least 60% marks in the last exam (50% for students with disabilities) and 75% attendance.", "Family income up to ₹2.5 lakh a year; age up to 30 years.", "Not a resident of the town or taluka where the college is, and not in a government hostel."],
    hi: ["OBC, VJNT, NT या SBC वर्ग से हो और महाराष्ट्र में रहता हो।", "कक्षा 12 के बाद कम से कम 2 साल का प्रोफ़ेशनल या नॉन-प्रोफ़ेशनल कोर्स कर रहा हो।", "पिछली परीक्षा में कम से कम 60% अंक (दिव्यांग छात्रों के लिए 50%) और 75% हाज़िरी।", "परिवार की सालाना आय ₹2.5 लाख तक; उम्र 30 साल तक।", "कॉलेज वाले शहर या तालुका का निवासी न हो, और सरकारी हॉस्टल में न रहता हो।"],
  },
  applicationProcess: {
    online: { en: ["Apply on the OBC Bahujan Welfare Department's hostel management portal when applications open, or ask your district Assistant Director, OBC Bahujan Welfare office for the current process.", "Fill in your course, college, marks and bank details and upload documents.", "Keep the application number; the district office verifies and approves it."], hi: ["आवेदन खुलने पर इतर मागास बहुजन कल्याण विभाग के हॉस्टल मैनेजमेंट पोर्टल पर आवेदन करें, या मौजूदा प्रक्रिया के लिए अपने ज़िले के सहायक संचालक, इतर मागास बहुजन कल्याण कार्यालय से पूछें।", "अपने कोर्स, कॉलेज, अंक और बैंक की जानकारी भरें और दस्तावेज़ अपलोड करें।", "आवेदन नंबर संभाल कर रखें; ज़िला कार्यालय इसकी जाँच करके मंज़ूरी देता है।"] },
  },

  officialUrl: "https://washim.gov.in/en/other-backward-bahujan-welfare-department-2/",
  sources: ["https://washim.gov.in/en/other-backward-bahujan-welfare-department-2/"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
