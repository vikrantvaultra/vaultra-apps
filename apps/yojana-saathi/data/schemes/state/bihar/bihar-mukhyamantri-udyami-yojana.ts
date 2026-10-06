import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-mukhyamantri-udyami-yojana",
  tier: "full",
  name: { en: "Mukhyamantri Udyami Yojana (Bihar)", hi: "मुख्यमंत्री उद्यमी योजना (बिहार)" },
  aka: ["MMUY", "Udyami Yojana", "Bihar 10 lakh business scheme"],
  shortDescription: {
    en: "Bihar residents aged 18 to 50 with Class 12 or ITI can get up to ₹10 lakh to start a business: up to ₹5 lakh as a grant and up to ₹5 lakh as a soft loan.",
    hi: "18 से 50 साल के 12वीं या ITI पास बिहार निवासी नया उद्योग शुरू करने के लिए ₹10 लाख तक पा सकते हैं: ₹5 लाख तक अनुदान और ₹5 लाख तक आसान कर्ज़।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Industries Department, Government of Bihar", hi: "उद्योग विभाग, बिहार सरकार" },
  categories: ["business", "skills-employment"],
  tags: ["business loan", "subsidy", "startup", "self employment", "10 lakh", "udyami", "bihar"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 500000, period: "one-time", kind: "loan" },
  ageRange: { min: 18, max: 50 },
  kundliHouse: "business",
  eligibility: all(residentOf("bihar"), ...ageBetween(18, 50)),

  details: {
    en: [
      "Mukhyamantri Udyami Yojana helps people in Bihar set up a new small manufacturing or service unit. It has been run by the Industries Department since 2018 and has separate parts for SC/ST, Extremely Backward Classes, women of all categories, young men from general and backward classes, minorities and persons with disabilities.",
      "A selected applicant can get up to ₹10 lakh: half as a grant that is not repaid, and half as a soft loan at little or no interest, repaid in 84 monthly instalments. The money is released in three instalments as the unit is set up.",
      "Applications are invited once a year on the Udyami portal. Because there are more applicants than seats, beneficiaries are picked by a computerised lottery in each district and category, and must complete training before money is released.",
    ],
    hi: [
      "मुख्यमंत्री उद्यमी योजना बिहार के लोगों को नया छोटा उत्पादन या सेवा उद्योग लगाने में मदद करती है। उद्योग विभाग इसे 2018 से चला रहा है, और इसके अलग-अलग हिस्से अनुसूचित जाति/जनजाति, अति पिछड़ा वर्ग, सभी वर्गों की महिलाओं, सामान्य और पिछड़ा वर्ग के युवा पुरुषों, अल्पसंख्यकों और दिव्यांगजनों के लिए हैं।",
      "चुने गए आवेदक को ₹10 लाख तक मिल सकते हैं: आधा अनुदान, जो लौटाना नहीं होता, और आधा बहुत कम या बिना ब्याज का आसान कर्ज़, जो 84 मासिक किस्तों में चुकाना होता है। पैसा उद्योग लगने के साथ तीन किस्तों में जारी होता है।",
      "हर साल उद्यमी पोर्टल पर आवेदन माँगे जाते हैं। आवेदक सीटों से ज़्यादा होते हैं, इसलिए हर ज़िले और वर्ग में कंप्यूटर लॉटरी से लाभार्थी चुने जाते हैं, और पैसा मिलने से पहले ट्रेनिंग पूरी करनी होती है।",
    ],
  },
  benefits: {
    en: [
      "Up to ₹10 lakh in total for a new business.",
      "Up to ₹5 lakh of it is a grant you don't repay.",
      "Up to ₹5 lakh is a soft loan at little or no interest, repaid in 84 monthly instalments.",
      "Money released in three instalments as your unit is set up.",
      "Entrepreneurship training before the money is released.",
    ],
    hi: [
      "नए काम के लिए कुल ₹10 लाख तक।",
      "इसमें से ₹5 लाख तक अनुदान है जिसे लौटाना नहीं होता।",
      "₹5 लाख तक बहुत कम या बिना ब्याज का आसान कर्ज़ है, जो 84 मासिक किस्तों में चुकाना होता है।",
      "उद्योग लगने के साथ पैसा तीन किस्तों में मिलता है।",
      "पैसा मिलने से पहले उद्यमिता की ट्रेनिंग।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Bihar.",
      "Aged 18 to 50 years.",
      "Passed Class 12, ITI, polytechnic diploma or an equivalent.",
      "Apply under the part that fits you: SC/ST, Extremely Backward Class, women, youth (general and backward class men), minority or disability.",
      "The business must be a new unit in one of the project types listed on the portal, registered as a proprietorship, partnership or company.",
    ],
    hi: [
      "बिहार के स्थायी निवासी।",
      "उम्र 18 से 50 साल।",
      "12वीं, ITI, पॉलिटेक्निक डिप्लोमा या उसके बराबर पास।",
      "अपने लिए सही हिस्से में आवेदन करें: अनुसूचित जाति/जनजाति, अति पिछड़ा वर्ग, महिला, युवा (सामान्य और पिछड़ा वर्ग के पुरुष), अल्पसंख्यक या दिव्यांग।",
      "काम नया हो और पोर्टल पर दी गई परियोजनाओं की सूची में से हो, और प्रोपराइटरशिप, साझेदारी या कंपनी के रूप में पंजीकृत हो।",
    ],
  },
  exclusions: {
    en: [
      "People who have already got benefit under this scheme in an earlier year.",
      "Existing businesses looking to expand (the scheme is for new units).",
      "Applicants not picked in the lottery for that year.",
    ],
    hi: [
      "जिन्हें पिछले किसी साल इस योजना का लाभ मिल चुका है।",
      "पहले से चल रहे काम का विस्तार (योजना नए उद्योग के लिए है)।",
      "जो आवेदक उस साल की लॉटरी में नहीं चुने गए।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch for the yearly notice on udyami.bihar.gov.in (the last window was February–March 2026).",
        "Register, choose your category and project, fill in the form and upload your documents.",
        "If you are selected in the computerised lottery, upload the remaining documents by the given date and complete the training.",
        "Open a current account for your firm. The grant and loan are then released in instalments.",
      ],
      hi: [
        "udyami.bihar.gov.in पर हर साल आने वाली सूचना देखते रहें (पिछली बार आवेदन फ़रवरी–मार्च 2026 में हुए थे)।",
        "रजिस्टर करें, अपना वर्ग और परियोजना चुनें, फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "कंप्यूटर लॉटरी में चुने जाने पर तय तारीख तक बाकी दस्तावेज़ अपलोड करें और ट्रेनिंग पूरी करें।",
        "अपनी फ़र्म का चालू खाता खोलें। इसके बाद अनुदान और कर्ज़ किस्तों में जारी होते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card and PAN card",
      "Residence certificate of Bihar",
      "Caste certificate (for SC/ST, EBC and backward class parts)",
      "Class 12, ITI or diploma certificate",
      "Bank account details and a cancelled cheque",
      "Passport-size photograph and signature",
    ],
    hi: [
      "आधार कार्ड और पैन कार्ड",
      "बिहार का निवास प्रमाण पत्र",
      "जाति प्रमाण पत्र (अनुसूचित जाति/जनजाति, अति पिछड़ा और पिछड़ा वर्ग वाले हिस्सों के लिए)",
      "12वीं, ITI या डिप्लोमा का प्रमाण पत्र",
      "बैंक खाते का विवरण और रद्द किया हुआ चेक",
      "पासपोर्ट साइज़ फ़ोटो और हस्ताक्षर",
    ],
  },
  faqs: [
    {
      q: { en: "Is selection guaranteed if I am eligible?", hi: "क्या पात्र होने पर चयन पक्का है?" },
      a: {
        en: "No. Each district and category has a fixed number of seats, and selection is by computerised lottery. In 2025–26 about 9,300 people were selected.",
        hi: "नहीं। हर ज़िले और वर्ग में सीटें तय होती हैं, और चयन कंप्यूटर लॉटरी से होता है। 2025–26 में लगभग 9,300 लोगों का चयन हुआ।",
      },
    },
    {
      q: { en: "How is this different from Bihar Laghu Udyami Yojana?", hi: "यह बिहार लघु उद्यमी योजना से कैसे अलग है?" },
      a: {
        en: "Udyami Yojana is for people with at least Class 12 or ITI and gives up to ₹10 lakh (half grant, half loan). Laghu Udyami Yojana is for very poor families and gives a grant of up to ₹2 lakh with no loan.",
        hi: "उद्यमी योजना कम से कम 12वीं या ITI पास लोगों के लिए है और ₹10 लाख तक (आधा अनुदान, आधा कर्ज़) देती है। लघु उद्यमी योजना बहुत गरीब परिवारों के लिए है और बिना कर्ज़ के ₹2 लाख तक का अनुदान देती है।",
      },
    },
  ],

  officialUrl: "https://udyami.bihar.gov.in/",
  sources: [
    "https://udyami.bihar.gov.in/",
    "https://betastate.bihar.gov.in/industries/",
    "https://patnapress.com/bihar-udyami-yojana-9347-beneficiaries-selected-2025-26/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
