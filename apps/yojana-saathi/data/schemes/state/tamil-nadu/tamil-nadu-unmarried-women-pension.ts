import { all, female, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-unmarried-women-pension",
  tier: "compact",
  name: { en: "Tamil Nadu Pension for Poor Unmarried Women above 50", hi: "तमिलनाडु 50 साल से ऊपर की गरीब अविवाहित महिलाओं की पेंशन" },
  aka: ["unmarried women pension Tamil Nadu", "spinster pension"],
  shortDescription: {
    en: "Destitute unmarried women aged 50 and above in Tamil Nadu get ₹1,200 every month.",
    hi: "तमिलनाडु में 50 साल या उससे ज़्यादा उम्र की बेसहारा अविवाहित महिलाओं को हर महीने ₹1,200 मिलते हैं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Revenue and Disaster Management Department (Commissionerate of Revenue Administration), Government of Tamil Nadu",
    hi: "राजस्व एवं आपदा प्रबंधन विभाग (राजस्व प्रशासन आयुक्तालय), तमिलनाडु सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["unmarried women", "single women", "women pension", "destitute", "1200 rupees"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1200, period: "monthly", kind: "pension" },
  ageRange: { min: 50 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tamil-nadu"),
    female(),
    minAge(50),
    labelled(when("marital", "eq", "never-married"), { en: "You have never married", hi: "आपकी शादी नहीं हुई है" }),
  ),

  details: {
    en: [
      "Tamil Nadu pays ₹1,200 a month to poor unmarried women aged 50 and above who have no one to support them. The state pays the full amount.",
      "The Revenue Department runs the scheme through the Special Tahsildar (Social Security Scheme) at the taluk office.",
    ],
    hi: [
      "तमिलनाडु 50 साल या उससे ज़्यादा उम्र की उन गरीब अविवाहित महिलाओं को हर महीने ₹1,200 देता है, जिनका कोई सहारा नहीं है। पूरा पैसा राज्य देता है।",
      "राजस्व विभाग तालुका कार्यालय के विशेष तहसीलदार (सामाजिक सुरक्षा योजना) के ज़रिए यह योजना चलाता है।",
    ],
  },
  benefits: {
    en: ["₹1,200 every month.", "A free saree twice a year, at Pongal and Deepavali."],
    hi: ["हर महीने ₹1,200।", "साल में दो बार, पोंगल और दीपावली पर, मुफ़्त साड़ी।"],
  },
  eligibilityText: {
    en: [
      "You are an unmarried woman living in Tamil Nadu, aged 50 or older.",
      "You are destitute, with no regular means of support.",
      "Any property you own is worth no more than ₹1 lakh (a free house from a government scheme is not counted).",
    ],
    hi: [
      "आप तमिलनाडु में रहने वाली 50 साल या उससे ज़्यादा उम्र की अविवाहित महिला हैं।",
      "आप बेसहारा हैं, आपके पास गुज़ारे का कोई नियमित सहारा नहीं है।",
      "आपकी संपत्ति ₹1 लाख से ज़्यादा की नहीं है (सरकारी योजना में मिला मुफ़्त घर नहीं गिना जाता)।",
    ],
  },
  exclusions: {
    en: ["You can get only one social security pension at a time, so you cannot also take the old age pension."],
    hi: ["एक समय में सिर्फ़ एक सामाजिक सुरक्षा पेंशन मिलती है, इसलिए वृद्धावस्था पेंशन साथ में नहीं मिलेगी।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply at an e-Sevai centre or on the TN e-Sevai portal (tnesevai.tn.gov.in) under social security pensions.",
        "Upload your Aadhaar, age proof, ration card and bank details.",
        "After verification, the Special Tahsildar (Social Security Scheme) sanctions the pension.",
      ],
      hi: [
        "किसी ई-सेवै केंद्र पर या TN ई-सेवै पोर्टल (tnesevai.tn.gov.in) पर सामाजिक सुरक्षा पेंशन में आवेदन करें।",
        "आधार, उम्र का सबूत, राशन कार्ड और बैंक विवरण अपलोड करें।",
        "जाँच के बाद विशेष तहसीलदार (सामाजिक सुरक्षा योजना) पेंशन मंज़ूर करते हैं।",
      ],
    },
  },

  officialUrl: "https://www.cra.tn.gov.in/about_schemes_t.php",
  sources: ["https://www.cra.tn.gov.in/about_schemes_t.php", "https://www.cra.tn.gov.in/eleg_schemes_t.php"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
