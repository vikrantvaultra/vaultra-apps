import { all, female, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "muthulakshmi-reddy-maternity-benefit",
  tier: "compact",
  overlapGroup: "maternity-cash",
  name: { en: "Dr. Muthulakshmi Reddy Maternity Benefit Scheme", hi: "डॉ. मुतुलक्ष्मी रेड्डी मातृत्व लाभ योजना" },
  aka: ["MRMBS", "Muthulakshmi Reddy scheme", "PICME maternity benefit", "Tamil Nadu maternity benefit"],
  shortDescription: {
    en: "Pregnant women in Tamil Nadu who register their pregnancy get cash help in instalments plus nutrition kits during pregnancy and after delivery.",
    hi: "तमिलनाडु में गर्भ का पंजीकरण कराने वाली गर्भवती महिलाओं को गर्भावस्था और प्रसव के बाद किस्तों में नकद मदद और पोषण किट मिलती है।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Health and Family Welfare Department (Directorate of Public Health), Government of Tamil Nadu",
    hi: "स्वास्थ्य एवं परिवार कल्याण विभाग (जन स्वास्थ्य निदेशालय), तमिलनाडु सरकार",
  },
  categories: ["health", "women-child"],
  tags: ["maternity", "pregnant women", "picme", "nutrition kit", "delivery", "mother"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tamil-nadu"),
    female(),
    labelled(isTrue("pregnantOrLactating"), { en: "You are pregnant or have recently given birth", hi: "आप गर्भवती हैं या हाल ही में बच्चे को जन्म दिया है" }),
  ),

  details: {
    en: [
      "Tamil Nadu's own maternity scheme pays poor pregnant women in instalments so they can eat well, rest and attend check-ups. According to the last published rules, the total benefit is ₹18,000 per pregnancy for the first two deliveries: ₹14,000 in cash and two nutrition kits worth about ₹2,000 each.",
      "Each pregnancy must be registered with a 12-digit PICME (RCH) number through the Village or Urban Health Nurse, and the instalments are linked to check-ups, institutional delivery and the baby's vaccinations. The payments are made by DBT to the mother's bank account.",
    ],
    hi: [
      "तमिलनाडु की अपनी मातृत्व योजना गरीब गर्भवती महिलाओं को किस्तों में पैसा देती है, ताकि वे अच्छा खा सकें, आराम कर सकें और जाँच करवा सकें। पिछले प्रकाशित नियमों के अनुसार पहले दो प्रसव तक हर गर्भावस्था पर कुल ₹18,000 का लाभ है: ₹14,000 नकद और लगभग ₹2,000-₹2,000 की दो पोषण किट।",
      "हर गर्भावस्था का ग्राम या शहरी स्वास्थ्य नर्स के ज़रिए 12 अंकों के PICME (RCH) नंबर से पंजीकरण ज़रूरी है, और किस्तें जाँच, अस्पताल में प्रसव और बच्चे के टीकाकरण से जुड़ी हैं। पैसा DBT से माँ के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "Cash help in instalments during pregnancy and after delivery (₹14,000 in total under the last published rules).",
      "Two nutrition kits for the mother.",
      "Paid directly into the mother's bank account.",
    ],
    hi: [
      "गर्भावस्था के दौरान और प्रसव के बाद किस्तों में नकद मदद (पिछले प्रकाशित नियमों के अनुसार कुल ₹14,000)।",
      "माँ के लिए दो पोषण किट।",
      "पैसा सीधे माँ के बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a pregnant woman living in Tamil Nadu.",
      "Your pregnancy is registered and you have a PICME number.",
      "The benefit covers the first two deliveries.",
      "You attend the check-ups, deliver in a hospital and get the baby vaccinated on time to receive all instalments.",
    ],
    hi: [
      "आप तमिलनाडु में रहने वाली गर्भवती महिला हैं।",
      "आपकी गर्भावस्था पंजीकृत है और आपके पास PICME नंबर है।",
      "लाभ पहले दो प्रसव तक मिलता है।",
      "सभी किस्तें पाने के लिए जाँच करवाएँ, अस्पताल में प्रसव करवाएँ और बच्चे को समय पर टीके लगवाएँ।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register your pregnancy on the PICME portal (picme.tn.gov.in) with your Aadhaar and mobile number, or ask your health nurse to do it.",
        "Note your 12-digit PICME number; it is needed for every instalment.",
      ],
      hi: [
        "आधार और मोबाइल नंबर से PICME पोर्टल (picme.tn.gov.in) पर गर्भावस्था दर्ज करें, या अपनी स्वास्थ्य नर्स से करवाएँ।",
        "अपना 12 अंकों का PICME नंबर लिख लें; हर किस्त के लिए यह ज़रूरी है।",
      ],
    },
    offline: {
      en: [
        "Meet your Village Health Nurse (rural areas) or Urban Health Nurse, or visit the nearest Primary Health Centre, as soon as you know you are pregnant.",
        "Give your Aadhaar, bank account and mobile details so the instalments can be paid.",
      ],
      hi: [
        "गर्भ का पता चलते ही अपनी ग्राम स्वास्थ्य नर्स (गाँव में) या शहरी स्वास्थ्य नर्स से मिलें, या पास के प्राथमिक स्वास्थ्य केंद्र जाएँ।",
        "किस्तों के भुगतान के लिए आधार, बैंक खाता और मोबाइल नंबर की जानकारी दें।",
      ],
    },
  },

  officialUrl: "https://www.nhm.tn.gov.in/en/r-c-h/maternal-care",
  sources: [
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-tamil-nadu/dr-muthulakshmi-reddy-maternity-benefit-scheme?lgn=en",
    "https://www.nhm.tn.gov.in/en/r-c-h/maternal-care",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "check-status",
};

export default scheme;
