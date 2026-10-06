import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cmaay",
  overlapGroup: "health-cover",
  name: { en: "Chief Minister Arogya Arunachal Yojana (CMAAY)", hi: "मुख्यमंत्री आरोग्य अरुणाचल योजना (CMAAY)" },
  aka: ["CMAAY", "Arogya Arunachal", "Arunachal health card"],
  shortDescription: {
    en: "Cashless hospital treatment worth up to ₹5 lakh a year per family for APST families, state government employees and some other residents of Arunachal Pradesh.",
    hi: "अरुणाचल प्रदेश के APST परिवारों, राज्य सरकारी कर्मचारियों और कुछ अन्य निवासियों को हर साल प्रति परिवार ₹5 लाख तक का कैशलेस अस्पताल इलाज।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Chief Minister Arogya Arunachal Society, Department of Health & Family Welfare, Government of Arunachal Pradesh",
    hi: "मुख्यमंत्री आरोग्य अरुणाचल सोसाइटी, स्वास्थ्य एवं परिवार कल्याण विभाग, अरुणाचल प्रदेश सरकार",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "cashless treatment", "hospital", "cmaay", "apst", "arunachal"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500_000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("arunachal-pradesh")),

  details: {
    en: [
      "CMAAY is Arunachal Pradesh's own health assurance scheme. It pays for hospital treatment directly to the hospital, so an enrolled family does not have to pay out of pocket for covered procedures.",
      "Each enrolled family gets cover of up to ₹5 lakh a year: up to ₹1 lakh for secondary care and up to ₹4 lakh for tertiary (specialist) care. The two limits cannot be combined. More than 1,300 procedures across 23 specialities are covered, and illnesses you already have are covered from day one.",
      "The scheme is run by the Chief Minister Arogya Arunachal Society under the Health & Family Welfare Department, alongside Ayushman Bharat PM-JAY. Treatment is available at empanelled government and private hospitals inside and outside the state.",
    ],
    hi: [
      "CMAAY अरुणाचल प्रदेश की अपनी स्वास्थ्य योजना है। इसमें अस्पताल के इलाज का पैसा सीधे अस्पताल को दिया जाता है, इसलिए जुड़े हुए परिवार को शामिल इलाज के लिए अपनी जेब से पैसा नहीं देना पड़ता।",
      "हर जुड़े परिवार को साल में ₹5 लाख तक का कवर मिलता है: सामान्य (सेकेंडरी) इलाज के लिए ₹1 लाख तक और विशेषज्ञ (टर्शियरी) इलाज के लिए ₹4 लाख तक। ये दोनों सीमाएँ आपस में जोड़ी नहीं जा सकतीं। 23 विशेषज्ञताओं की 1,300 से ज़्यादा प्रक्रियाएँ शामिल हैं, और पहले से मौजूद बीमारियाँ भी पहले दिन से कवर होती हैं।",
      "यह योजना स्वास्थ्य एवं परिवार कल्याण विभाग के तहत मुख्यमंत्री आरोग्य अरुणाचल सोसाइटी चलाती है, आयुष्मान भारत PM-JAY के साथ। इलाज राज्य के अंदर और बाहर के सूचीबद्ध सरकारी और निजी अस्पतालों में मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Cashless cover of up to ₹5 lakh per family per year (₹1 lakh for secondary care, ₹4 lakh for tertiary care).",
      "Covers bed charges in the general ward, doctors' and surgeons' fees, tests, medicines, implants and food during the hospital stay.",
      "Medicines and tests for the same illness are covered for 3 days before admission and up to 10 days after discharge.",
      "Pre-existing illnesses are covered from the first day, with no age limit for family members.",
    ],
    hi: [
      "हर परिवार को साल में ₹5 लाख तक का कैशलेस कवर (सेकेंडरी इलाज के लिए ₹1 लाख, टर्शियरी इलाज के लिए ₹4 लाख)।",
      "जनरल वार्ड का बेड, डॉक्टर और सर्जन की फ़ीस, जाँच, दवाइयाँ, इम्प्लांट और भर्ती रहने के दौरान खाना शामिल है।",
      "उसी बीमारी की दवाइयाँ और जाँच भर्ती से 3 दिन पहले और छुट्टी के 10 दिन बाद तक कवर होती हैं।",
      "पहले से मौजूद बीमारियाँ पहले दिन से कवर होती हैं, परिवार के सदस्यों के लिए कोई उम्र सीमा नहीं है।",
    ],
  },
  eligibilityText: {
    en: [
      "All Arunachal Pradesh Scheduled Tribe (APST) residents and their families.",
      "Regular Arunachal Pradesh government employees and pensioners, with their dependent family members.",
      "Non-APST permanent residents of Changlang, Lohit and Namsai districts who hold a Resident Certificate (RC).",
      "State-accredited working journalists registered with APUWJ or the Arunachal Press Club.",
    ],
    hi: [
      "अरुणाचल प्रदेश के सभी अनुसूचित जनजाति (APST) निवासी और उनके परिवार।",
      "अरुणाचल प्रदेश सरकार के नियमित कर्मचारी और पेंशनभोगी, अपने आश्रित परिवार के साथ।",
      "चांगलांग, लोहित और नामसाई ज़िलों के गैर-APST स्थायी निवासी जिनके पास निवास प्रमाण पत्र (RC) है।",
      "APUWJ या अरुणाचल प्रेस क्लब में पंजीकृत राज्य-मान्यता प्राप्त पत्रकार।",
    ],
  },
  exclusions: {
    en: [
      "Central government and PSU employees cannot enrol.",
      "OPD consultations, treatment that doesn't need admission, and admission only for tests are not covered.",
      "Cosmetic dental work, fertility treatment, vaccination and illness caused by drugs or alcohol are not covered.",
      "Travel to and from the hospital is not paid, and money is not reimbursed to you directly.",
    ],
    hi: [
      "केंद्र सरकार और सरकारी उपक्रमों (PSU) के कर्मचारी इसमें नहीं जुड़ सकते।",
      "OPD परामर्श, बिना भर्ती वाला इलाज और सिर्फ़ जाँच के लिए भर्ती शामिल नहीं है।",
      "सौंदर्य के लिए दाँतों का इलाज, संतान से जुड़ा इलाज, टीकाकरण और नशे या शराब से हुई बीमारी शामिल नहीं है।",
      "अस्पताल आने-जाने का किराया नहीं मिलता, और पैसा सीधे आपको वापस नहीं दिया जाता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Enrol on the CMAAY website (cmaay.arunachal.gov.in) or the Arogya Arunachal app.",
        "Verify with Aadhaar and upload your APST certificate, RC or employee details and family details.",
        "Download and print your e-card once enrolment is approved.",
      ],
      hi: [
        "CMAAY वेबसाइट (cmaay.arunachal.gov.in) या आरोग्य अरुणाचल ऐप पर नामांकन करें।",
        "आधार से पुष्टि करें और अपना APST प्रमाण पत्र, RC या कर्मचारी विवरण और परिवार का ब्योरा अपलोड करें।",
        "नामांकन मंज़ूर होने के बाद अपना ई-कार्ड डाउनलोड करके प्रिंट कर लें।",
      ],
    },
    offline: {
      en: [
        "Visit the CMAAY kiosk at your district hospital or an empanelled hospital, or a Common Service Centre.",
        "Show your Aadhaar, APST certificate or RC, and family details (family tree certificate or ration card). Enrolment is free.",
        "At the hospital, the Arogya Mitra helps you start cashless treatment. For treatment outside Arunachal, you need a referral from a government hospital, except in an emergency.",
      ],
      hi: [
        "अपने ज़िला अस्पताल या किसी सूचीबद्ध अस्पताल के CMAAY कियोस्क पर, या कॉमन सर्विस सेंटर पर जाएँ।",
        "आधार, APST प्रमाण पत्र या RC, और परिवार का ब्योरा (फ़ैमिली ट्री प्रमाण पत्र या राशन कार्ड) दिखाएँ। नामांकन मुफ़्त है।",
        "अस्पताल में आरोग्य मित्र कैशलेस इलाज शुरू करवाने में मदद करते हैं। अरुणाचल के बाहर इलाज के लिए सरकारी अस्पताल से रेफ़रल ज़रूरी है, आपात स्थिति को छोड़कर।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "APST certificate issued by the Government of Arunachal Pradesh, or a Resident Certificate (Changlang, Lohit, Namsai)",
      "Family tree certificate or ration card",
      "For state employees and pensioners: employee ID card or PPO, with the family declaration countersigned by the DDO",
    ],
    hi: [
      "आधार कार्ड",
      "अरुणाचल प्रदेश सरकार का APST प्रमाण पत्र, या निवास प्रमाण पत्र (चांगलांग, लोहित, नामसाई)",
      "फ़ैमिली ट्री प्रमाण पत्र या राशन कार्ड",
      "राज्य कर्मचारियों और पेंशनभोगियों के लिए: कर्मचारी पहचान पत्र या PPO, DDO के हस्ताक्षर वाली परिवार घोषणा के साथ",
    ],
  },
  faqs: [
    {
      q: { en: "If my secondary care limit of ₹1 lakh runs out, can I use the ₹4 lakh tertiary limit?", hi: "अगर सेकेंडरी इलाज की ₹1 लाख की सीमा ख़त्म हो जाए, तो क्या ₹4 लाख वाली टर्शियरी सीमा इस्तेमाल कर सकते हैं?" },
      a: {
        en: "No. The two limits are separate and cannot be combined. Both are shared by the whole family for the year.",
        hi: "नहीं। दोनों सीमाएँ अलग हैं और जोड़ी नहीं जा सकतीं। दोनों पूरे परिवार के लिए साल भर की साझा सीमा हैं।",
      },
    },
    {
      q: { en: "Can I get treatment in a hospital outside Arunachal?", hi: "क्या अरुणाचल के बाहर के अस्पताल में इलाज करा सकते हैं?" },
      a: {
        en: "Yes, at empanelled hospitals, but you need a referral from a government hospital first. State employees posted outside, students studying outside and emergencies don't need the referral.",
        hi: "हाँ, सूचीबद्ध अस्पतालों में, पर पहले सरकारी अस्पताल से रेफ़रल लेना होगा। बाहर तैनात राज्य कर्मचारियों, बाहर पढ़ रहे विद्यार्थियों और आपात स्थिति में रेफ़रल ज़रूरी नहीं है।",
      },
    },
    {
      q: { en: "Is there a fee to enrol?", hi: "क्या नामांकन के लिए कोई फ़ीस है?" },
      a: {
        en: "No, enrolment is free, and you can enrol on any working day at the district kiosk.",
        hi: "नहीं, नामांकन मुफ़्त है, और आप किसी भी कामकाजी दिन ज़िला कियोस्क पर नामांकन करा सकते हैं।",
      },
    },
  ],

  officialUrl: "https://cmaay.arunachal.gov.in/",
  sources: [
    "https://cmaay.arunachal.gov.in/CMAAYscheme.aspx",
    "https://cmaay.arunachal.gov.in/CMAAYeligibility.aspx",
    "https://cmaay.arunachal.gov.in/CMAAYFAQ.aspx",
    "https://tawang.nic.in/scheme/chief-ministers-arogya-arunachal-yojana-cmaay/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
