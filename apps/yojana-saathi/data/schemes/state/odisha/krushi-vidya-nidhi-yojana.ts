import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "krushi-vidya-nidhi-yojana",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Krushi Vidya Nidhi Yojana (CM-KISAN Scholarship)", hi: "कृषि विद्या निधि योजना (सीएम-किसान छात्रवृत्ति)" },
  aka: ["Krishi Vidya Nidhi", "CM-KISAN scholarship", "farmer children scholarship Odisha"],
  shortDescription: {
    en: "Children of CM-KISAN farmer families in Odisha studying medical, engineering, agriculture, nursing, diploma or ITI courses get their course fees plus ₹1,000–₹1,200 a month for hostel and mess.",
    hi: "ओडिशा के सीएम-किसान परिवारों के जो बच्चे मेडिकल, इंजीनियरिंग, कृषि, नर्सिंग, डिप्लोमा या ITI पढ़ते हैं, उन्हें कोर्स फ़ीस और हॉस्टल-मेस के लिए हर महीने ₹1,000–₹1,200।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Agriculture and Farmers' Empowerment, Government of Odisha",
    hi: "कृषि एवं किसान सशक्तिकरण विभाग, ओडिशा सरकार",
  },
  categories: ["education", "agriculture"],
  tags: ["scholarship", "farmer children", "engineering", "medical", "iti", "cm kisan", "odisha"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    labelled(when("occupation", "in", ["farmer", "agri-labourer"]), {
      en: "Your family is a CM-KISAN beneficiary (small/marginal farmer or landless farm household)",
      hi: "आपका परिवार सीएम-किसान लाभार्थी है (छोटा/सीमांत किसान या भूमिहीन खेतिहर परिवार)",
    }),
    labelled(isTrue("student"), {
      en: "You are studying a technical or professional course",
      hi: "आप कोई तकनीकी या प्रोफ़ेशनल कोर्स पढ़ रहे हैं",
    }),
  ),

  details: {
    en: [
      "Krushi Vidya Nidhi Yojana is the education part of Odisha's CM-KISAN scheme. It helps the children of CM-KISAN farmer families pay for technical and professional courses, so that families don't fall into debt to educate them.",
      "Covered courses include medical, engineering, agriculture and allied, nursing, diploma and ITI trades, in government, private and premier institutions inside or outside Odisha. Students apply on the common State Scholarship Portal.",
    ],
    hi: [
      "कृषि विद्या निधि योजना ओडिशा की सीएम-किसान योजना का शिक्षा वाला हिस्सा है। यह सीएम-किसान किसान परिवारों के बच्चों को तकनीकी और प्रोफ़ेशनल कोर्स का खर्च उठाने में मदद करती है, ताकि परिवार पढ़ाई के लिए कर्ज़ में न डूबें।",
      "इसमें मेडिकल, इंजीनियरिंग, कृषि और संबंधित विषय, नर्सिंग, डिप्लोमा और ITI ट्रेड शामिल हैं, ओडिशा के अंदर या बाहर के सरकारी, निजी और प्रमुख संस्थानों में। विद्यार्थी साझा राज्य छात्रवृत्ति पोर्टल पर आवेदन करते हैं।",
    ],
  },
  benefits: {
    en: [
      "Government institutions: tuition and other fees (except caution money and refundable deposits) paid to your account.",
      "Private institutions with an AISHE code in Odisha: fees as per the government-approved fee structure.",
      "Premier government institutes: actual fees up to ₹1 lakh.",
      "Mess / hostel charges for 10 months: ₹1,200 a month for UG, PG, PhD and premier-institute students; ₹1,000 a month for diploma, polytechnic and ITI students.",
    ],
    hi: [
      "सरकारी संस्थान: ट्यूशन और दूसरी फ़ीस (कॉशन मनी और लौटने वाली जमा राशि छोड़कर) आपके खाते में।",
      "ओडिशा के AISHE कोड वाले निजी संस्थान: सरकार के तय फ़ीस ढाँचे के हिसाब से फ़ीस।",
      "प्रमुख सरकारी संस्थान: असली फ़ीस, अधिकतम ₹1 लाख।",
      "10 महीने का मेस / हॉस्टल खर्च: UG, PG, PhD और प्रमुख संस्थानों के विद्यार्थियों को ₹1,200 महीना; डिप्लोमा, पॉलिटेक्निक और ITI विद्यार्थियों को ₹1,000 महीना।",
    ],
  },
  eligibilityText: {
    en: [
      "Your parent is a CM-KISAN beneficiary (small/marginal farmer, sharecropper or landless agricultural household) in Odisha.",
      "You are studying a technical or professional course such as medical, engineering, agriculture, nursing, diploma or an ITI trade.",
    ],
    hi: [
      "आपके माता या पिता ओडिशा में सीएम-किसान लाभार्थी (छोटे/सीमांत किसान, बटाईदार या भूमिहीन खेतिहर परिवार) हैं।",
      "आप मेडिकल, इंजीनियरिंग, कृषि, नर्सिंग, डिप्लोमा या ITI ट्रेड जैसा कोई तकनीकी या प्रोफ़ेशनल कोर्स पढ़ रहे हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the State Scholarship Portal (scholarship.odisha.gov.in) under Krushi Vidya Nidhi.",
        "Give your parent's CM-KISAN details and upload your admission, fee and bank documents.",
        "Your institution verifies the application before the money is released by DBT.",
      ],
      hi: [
        "राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) पर कृषि विद्या निधि में आवेदन करें।",
        "माता-पिता की सीएम-किसान जानकारी दें और दाखिले, फ़ीस और बैंक के दस्तावेज़ अपलोड करें।",
        "पैसा DBT से आने से पहले आपका संस्थान आवेदन की जाँच करता है।",
      ],
    },
  },

  officialUrl: "https://scholarship.odisha.gov.in/",
  sources: ["https://cmkisan.odisha.gov.in/pdf/CM-KISAN-Guideline.pdf", "https://cmkisan.odisha.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
