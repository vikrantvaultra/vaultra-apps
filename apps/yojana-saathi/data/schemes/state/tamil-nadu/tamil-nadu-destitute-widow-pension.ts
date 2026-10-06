import { all, female, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-destitute-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Tamil Nadu Destitute Widow Pension", hi: "तमिलनाडु निराश्रित विधवा पेंशन" },
  aka: ["DWP Tamil Nadu", "widow pension Tamil Nadu", "Aadharavatra Vidhavai Oyvoothiyam"],
  shortDescription: {
    en: "Destitute widows aged 18 and above in Tamil Nadu get ₹1,200 every month.",
    hi: "तमिलनाडु में 18 साल या उससे ज़्यादा उम्र की बेसहारा विधवाओं को हर महीने ₹1,200 मिलते हैं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Revenue and Disaster Management Department (Commissionerate of Revenue Administration), Government of Tamil Nadu",
    hi: "राजस्व एवं आपदा प्रबंधन विभाग (राजस्व प्रशासन आयुक्तालय), तमिलनाडु सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["widow pension", "widow", "destitute", "women", "pension", "1200 rupees"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1200, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tamil-nadu"),
    female(),
    minAge(18),
    labelled(when("marital", "eq", "widowed"), { en: "You are a widow", hi: "आप विधवा हैं" }),
  ),

  details: {
    en: [
      "Tamil Nadu pays ₹1,200 a month to destitute widows. The state runs its own Destitute Widow Pension, fully paid by the state, for widows aged 18 and above.",
      "Widows aged 40 and above from BPL families are covered under the central Indira Gandhi widow pension, where the Centre pays ₹300 and the state ₹900, so the amount is the same ₹1,200. The Revenue Department handles both through the taluk office.",
    ],
    hi: [
      "तमिलनाडु बेसहारा विधवाओं को हर महीने ₹1,200 देता है। 18 साल या उससे ज़्यादा उम्र की विधवाओं के लिए राज्य की अपनी निराश्रित विधवा पेंशन है, जिसका पूरा पैसा राज्य देता है।",
      "BPL परिवारों की 40 साल या उससे ज़्यादा उम्र की विधवाएँ केंद्र की इंदिरा गांधी विधवा पेंशन में आती हैं, जिसमें केंद्र ₹300 और राज्य ₹900 देता है, यानी राशि वही ₹1,200 है। दोनों का काम तालुका कार्यालय के ज़रिए राजस्व विभाग देखता है।",
    ],
  },
  benefits: {
    en: ["₹1,200 every month.", "A free saree twice a year, at Pongal and Deepavali."],
    hi: ["हर महीने ₹1,200।", "साल में दो बार, पोंगल और दीपावली पर, मुफ़्त साड़ी।"],
  },
  eligibilityText: {
    en: [
      "You are a widow living in Tamil Nadu, aged 18 or older.",
      "You are destitute, with no regular means of support.",
      "Any property you own is worth no more than ₹1 lakh (a free house from a government scheme is not counted).",
    ],
    hi: [
      "आप तमिलनाडु में रहने वाली विधवा हैं और आपकी उम्र 18 साल या उससे ज़्यादा है।",
      "आप बेसहारा हैं, आपके पास गुज़ारे का कोई नियमित सहारा नहीं है।",
      "आपकी संपत्ति ₹1 लाख से ज़्यादा की नहीं है (सरकारी योजना में मिला मुफ़्त घर नहीं गिना जाता)।",
    ],
  },
  exclusions: {
    en: ["Widows who have remarried.", "You can get only one social security pension at a time."],
    hi: ["जिन विधवाओं ने दोबारा शादी कर ली है।", "एक समय में सिर्फ़ एक सामाजिक सुरक्षा पेंशन मिलती है।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply at an e-Sevai centre or on the TN e-Sevai portal (tnesevai.tn.gov.in) under social security pensions.",
        "Upload your husband's death certificate, Aadhaar, ration card and bank details.",
        "After revenue officials verify it, the Special Tahsildar (Social Security Scheme) sanctions the pension.",
      ],
      hi: [
        "किसी ई-सेवै केंद्र पर या TN ई-सेवै पोर्टल (tnesevai.tn.gov.in) पर सामाजिक सुरक्षा पेंशन में आवेदन करें।",
        "पति का मृत्यु प्रमाण पत्र, आधार, राशन कार्ड और बैंक विवरण अपलोड करें।",
        "राजस्व अधिकारियों की जाँच के बाद विशेष तहसीलदार (सामाजिक सुरक्षा योजना) पेंशन मंज़ूर करते हैं।",
      ],
    },
  },
  documents: {
    en: ["Husband's death certificate", "Aadhaar card", "Ration card / smart card", "Bank passbook"],
    hi: ["पति का मृत्यु प्रमाण पत्र", "आधार कार्ड", "राशन कार्ड / स्मार्ट कार्ड", "बैंक पासबुक"],
  },

  officialUrl: "https://www.cra.tn.gov.in/about_schemes_t.php",
  sources: ["https://www.cra.tn.gov.in/about_schemes_t.php", "https://www.cra.tn.gov.in/eleg_schemes_t.php"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
