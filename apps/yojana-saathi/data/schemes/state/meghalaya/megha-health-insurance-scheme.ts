import { all, notGovtEmployee, residentOf, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "megha-health-insurance-scheme",
  overlapGroup: "health-cover",
  name: { en: "Megha Health Insurance Scheme (MHIS)", hi: "मेघा हेल्थ इंश्योरेंस स्कीम (MHIS)" },
  aka: ["MHIS", "Meghalaya Health Insurance Scheme", "MHIS-PMJAY", "MHIS VI"],
  shortDescription: {
    en: "Free cashless hospital treatment up to ₹5.3 lakh a year per family for every citizen of Meghalaya, except state and central government employees.",
    hi: "मेघालय के हर नागरिक को, राज्य और केंद्र सरकार के कर्मचारियों को छोड़कर, हर साल प्रति परिवार ₹5.3 लाख तक का मुफ़्त कैशलेस अस्पताल इलाज।",
  },
  level: "state",
  state: "meghalaya",
  department: {
    en: "Health & Family Welfare Department, Government of Meghalaya (MHIS State Nodal Agency)",
    hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, मेघालय सरकार (MHIS राज्य नोडल एजेंसी)",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "free treatment", "hospital", "cashless", "mhis", "ayushman", "meghalaya"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 530000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("meghalaya"),
    labelled(notGovtEmployee(), { en: "You are not a state or central government employee", hi: "आप राज्य या केंद्र सरकार के कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "The Megha Health Insurance Scheme (MHIS) is Meghalaya's universal health insurance scheme. It started in 2012 and now runs together with Ayushman Bharat PM-JAY as 'MHIS-PMJAY'. The current phase is MHIS VI.",
      "Every citizen of Meghalaya can enrol, except state and central government employees, who are covered by their own medical reimbursement rules. There is no limit on family size or age.",
      "A family gets cover of up to ₹5.3 lakh a year on a floater basis, which means one member or the whole family can use the full amount. Registration is free and happens all year at district kiosks and empanelled hospitals.",
    ],
    hi: [
      "मेघा हेल्थ इंश्योरेंस स्कीम (MHIS) मेघालय की सबके लिए स्वास्थ्य बीमा योजना है। यह 2012 में शुरू हुई और अब आयुष्मान भारत PM-JAY के साथ मिलकर 'MHIS-PMJAY' के रूप में चलती है। अभी इसका छठा चरण (MHIS VI) चल रहा है।",
      "मेघालय का हर नागरिक इसमें जुड़ सकता है, सिवाय राज्य और केंद्र सरकार के कर्मचारियों के, जिन्हें अपने मेडिकल प्रतिपूर्ति नियमों के तहत इलाज मिलता है। परिवार के सदस्यों की संख्या या उम्र पर कोई रोक नहीं है।",
      "हर परिवार को साल में ₹5.3 लाख तक का फ़्लोटर कवर मिलता है, यानी पूरी राशि परिवार का एक सदस्य या सब मिलकर इस्तेमाल कर सकते हैं। पंजीकरण मुफ़्त है और पूरे साल ज़िला कियोस्क और योजना से जुड़े अस्पतालों में होता है।",
    ],
  },
  benefits: {
    en: [
      "Health cover of up to ₹5.3 lakh per family per year, on a floater basis.",
      "Cashless treatment at empanelled hospitals, including critical care, cancer treatment and other tertiary care packages.",
      "No limit on family size or age.",
      "Each member gets an individual MHIS/PMJAY card; registration is free.",
    ],
    hi: [
      "हर साल प्रति परिवार ₹5.3 लाख तक का फ़्लोटर स्वास्थ्य कवर।",
      "योजना से जुड़े अस्पतालों में कैशलेस इलाज, जिसमें गंभीर बीमारी, कैंसर और दूसरे बड़े इलाज के पैकेज शामिल हैं।",
      "परिवार के आकार या उम्र की कोई सीमा नहीं।",
      "हर सदस्य को अलग MHIS/PMJAY कार्ड मिलता है; पंजीकरण मुफ़्त है।",
    ],
  },
  eligibilityText: {
    en: [
      "Citizen of Meghalaya.",
      "Not a state or central government employee.",
      "Any age and any family size.",
    ],
    hi: [
      "मेघालय के नागरिक।",
      "राज्य या केंद्र सरकार के कर्मचारी न हों।",
      "कोई भी उम्र और परिवार का कोई भी आकार।",
    ],
  },
  exclusions: {
    en: [
      "State and central government employees (they use their government medical reimbursement instead).",
      "Treatments and items listed in the scheme's exclusion list (see the 'Exclusion' page on mhis.org.in).",
    ],
    hi: [
      "राज्य और केंद्र सरकार के कर्मचारी (वे सरकारी मेडिकल प्रतिपूर्ति का लाभ लेते हैं)।",
      "योजना की बहिष्कार सूची में दिए इलाज और चीज़ें (mhis.org.in पर 'Exclusion' पेज देखें)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to mhis.org.in and use 'Am I Eligible' to check whether your family is already registered.",
        "If you are not listed, visit a kiosk to register (see the offline steps).",
      ],
      hi: [
        "mhis.org.in पर जाएँ और 'Am I Eligible' से देखें कि आपका परिवार पहले से पंजीकृत है या नहीं।",
        "अगर नाम नहीं है, तो पंजीकरण के लिए कियोस्क पर जाएँ (ऑफ़लाइन तरीक़ा देखें)।",
      ],
    },
    offline: {
      en: [
        "Visit the MHIS kiosk in your district (usually at the civil hospital or the DM&HO office) or the registration desk at an empanelled hospital.",
        "Show a government photo ID for yourself, and proof of relationship to add family members.",
        "Collect your individual MHIS/PMJAY card and show it at the hospital when you need treatment.",
      ],
      hi: [
        "अपने ज़िले के MHIS कियोस्क (आम तौर पर सिविल अस्पताल या DM&HO कार्यालय में) या योजना से जुड़े अस्पताल के पंजीकरण डेस्क पर जाएँ।",
        "अपना सरकारी फ़ोटो पहचान पत्र दिखाएँ, और परिवार के सदस्य जोड़ने के लिए रिश्ते का सबूत दें।",
        "अपना MHIS/PMJAY कार्ड लें और इलाज के समय अस्पताल में दिखाएँ।",
      ],
    },
  },
  documents: {
    en: [
      "Government photo ID: Voter ID, Aadhaar, MGNREGA job card, ration card or similar",
      "Proof of family relationship: ration card, birth or marriage certificate, or headman's certificate",
      "Old RSBY/MHIS card, if you have one",
    ],
    hi: [
      "सरकारी फ़ोटो पहचान पत्र: वोटर ID, आधार, मनरेगा जॉब कार्ड, राशन कार्ड या ऐसा ही कोई",
      "परिवार के रिश्ते का सबूत: राशन कार्ड, जन्म या विवाह प्रमाण पत्र, या मुखिया (हेडमैन) का प्रमाण पत्र",
      "पुराना RSBY/MHIS कार्ड, अगर हो",
    ],
  },
  faqs: [
    {
      q: { en: "Do I have to pay anything to join?", hi: "क्या जुड़ने के लिए कुछ पैसा देना होगा?" },
      a: {
        en: "No. Registration under MHIS-PMJAY is free.",
        hi: "नहीं। MHIS-PMJAY में पंजीकरण मुफ़्त है।",
      },
    },
    {
      q: { en: "What does 'floater' cover mean?", hi: "'फ़्लोटर' कवर का क्या मतलब है?" },
      a: {
        en: "The ₹5.3 lakh is shared by the whole family for the year. One person can use all of it, or several members can use parts of it.",
        hi: "₹5.3 लाख पूरे परिवार के लिए साल भर का साझा कवर है। एक व्यक्ति पूरा इस्तेमाल कर सकता है, या कई सदस्य हिस्सों में।",
      },
    },
    {
      q: { en: "Where can I register?", hi: "पंजीकरण कहाँ होता है?" },
      a: {
        en: "At the district MHIS kiosks and at empanelled hospital registration centres, all year round. The helpline is 1800 102 4762.",
        hi: "ज़िला MHIS कियोस्क और योजना से जुड़े अस्पतालों के पंजीकरण केंद्रों पर, पूरे साल। हेल्पलाइन नंबर 1800 102 4762 है।",
      },
    },
  ],

  officialUrl: "https://mhis.org.in/",
  sources: [
    "https://mhis.org.in/faq/",
    "https://mhis.org.in/",
    "https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "active",
};

export default scheme;
