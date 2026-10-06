import { all, female, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-deserted-women-pension",
  tier: "compact",
  name: { en: "Tamil Nadu Pension for Destitute and Deserted Women", hi: "तमिलनाडु बेसहारा और परित्यक्त महिला पेंशन" },
  aka: ["DDWP Tamil Nadu", "deserted wife pension", "divorced women pension Tamil Nadu"],
  shortDescription: {
    en: "Destitute women aged 30 and above in Tamil Nadu who are divorced, legally separated or deserted by their husband for 5+ years get ₹1,200 a month.",
    hi: "तमिलनाडु में 30 साल या उससे ज़्यादा उम्र की बेसहारा महिलाएँ, जो तलाकशुदा हैं, क़ानूनी रूप से अलग हैं या 5 साल से ज़्यादा से पति ने छोड़ रखा है, उन्हें हर महीने ₹1,200।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Revenue and Disaster Management Department (Commissionerate of Revenue Administration), Government of Tamil Nadu",
    hi: "राजस्व एवं आपदा प्रबंधन विभाग (राजस्व प्रशासन आयुक्तालय), तमिलनाडु सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["deserted women", "divorced", "separated", "women pension", "destitute", "1200 rupees"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1200, period: "monthly", kind: "pension" },
  ageRange: { min: 30 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tamil-nadu"),
    female(),
    minAge(30),
    labelled(when("marital", "in", ["divorced", "separated"]), {
      en: "You are divorced, legally separated or deserted by your husband",
      hi: "आप तलाकशुदा हैं, क़ानूनी रूप से अलग हैं या पति ने आपको छोड़ दिया है",
    }),
  ),

  details: {
    en: [
      "This Tamil Nadu pension, fully paid by the state, supports women who have been left without support after the end of their marriage. It pays ₹1,200 a month.",
      "It covers women who are legally divorced, who hold a legal separation certificate from a court, or who have been deserted by their husband for at least 5 years. The Revenue Department runs it through the taluk office.",
    ],
    hi: [
      "तमिलनाडु की यह पेंशन, जिसका पूरा पैसा राज्य देता है, उन महिलाओं के लिए है जो शादी टूटने के बाद बेसहारा रह गई हैं। इसमें हर महीने ₹1,200 मिलते हैं।",
      "इसमें क़ानूनी तलाक पा चुकी महिलाएँ, अदालत से क़ानूनी अलगाव का प्रमाण पत्र रखने वाली महिलाएँ, या कम से कम 5 साल से पति द्वारा छोड़ी गई महिलाएँ आती हैं। राजस्व विभाग तालुका कार्यालय के ज़रिए इसे चलाता है।",
    ],
  },
  benefits: {
    en: ["₹1,200 every month.", "A free saree twice a year, at Pongal and Deepavali."],
    hi: ["हर महीने ₹1,200।", "साल में दो बार, पोंगल और दीपावली पर, मुफ़्त साड़ी।"],
  },
  eligibilityText: {
    en: [
      "You are a woman living in Tamil Nadu, aged 30 or older, and destitute.",
      "You are legally divorced, or have a court certificate of legal separation, or your husband has deserted you for at least 5 years.",
      "Any property you own is worth no more than ₹1 lakh (a free house from a government scheme is not counted).",
    ],
    hi: [
      "आप तमिलनाडु में रहने वाली 30 साल या उससे ज़्यादा उम्र की बेसहारा महिला हैं।",
      "आपका क़ानूनी तलाक हुआ है, या अदालत से क़ानूनी अलगाव का प्रमाण पत्र है, या पति ने कम से कम 5 साल से आपको छोड़ रखा है।",
      "आपकी संपत्ति ₹1 लाख से ज़्यादा की नहीं है (सरकारी योजना में मिला मुफ़्त घर नहीं गिना जाता)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply at an e-Sevai centre or on the TN e-Sevai portal (tnesevai.tn.gov.in) under social security pensions.",
        "Upload proof of divorce, separation or desertion, with your Aadhaar, ration card and bank details.",
        "After verification, the Special Tahsildar (Social Security Scheme) sanctions the pension.",
      ],
      hi: [
        "किसी ई-सेवै केंद्र पर या TN ई-सेवै पोर्टल (tnesevai.tn.gov.in) पर सामाजिक सुरक्षा पेंशन में आवेदन करें।",
        "तलाक, अलगाव या छोड़ दिए जाने का सबूत, आधार, राशन कार्ड और बैंक विवरण के साथ अपलोड करें।",
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
