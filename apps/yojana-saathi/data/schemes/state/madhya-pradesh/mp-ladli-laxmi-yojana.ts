import { all, isTrue, labelled, notTaxPayer, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-ladli-laxmi-yojana",
  overlapGroup: "daughter-savings",
  name: { en: "Ladli Laxmi Yojana 2.0 (Madhya Pradesh)", hi: "लाड़ली लक्ष्मी योजना 2.0 (मध्य प्रदेश)" },
  aka: ["Ladli Laxmi", "Ladli Lakshmi Yojana", "Laadli Laxmi"],
  shortDescription: {
    en: "Daughters in Madhya Pradesh get ₹1.43 lakh in stages: school payments in Classes 6, 9, 11 and 12, ₹25,000 for college, and ₹1 lakh at age 21.",
    hi: "मध्य प्रदेश की बेटियों को कुल ₹1.43 लाख किस्तों में मिलते हैं: कक्षा 6, 9, 11 और 12 में राशि, कॉलेज के लिए ₹25,000 और 21 साल की उम्र पर ₹1 लाख।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Women and Child Development Department, Government of Madhya Pradesh",
    hi: "महिला एवं बाल विकास विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "daughter", "ladli laxmi", "anganwadi", "education", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 143000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("madhya-pradesh"),
    labelled(isTrue("daughterUnder10"), { en: "You have a young daughter", hi: "आपकी एक छोटी बेटी है" }),
    labelled(notTaxPayer(), { en: "The girl's parents don't pay income tax", hi: "बेटी के माता-पिता आयकर न देते हों" }),
  ),

  details: {
    en: [
      "Ladli Laxmi Yojana is Madhya Pradesh's long-running scheme for daughters. The girl is registered through the local Anganwadi, and the state issues an assurance certificate of ₹1,43,000 in her name.",
      "The money is released step by step as she moves through school and college, and the last ₹1 lakh comes when she turns 21, provided she has passed Class 12 and is not married before the legal age.",
      "Under the updated version (Ladli Laxmi 2.0) the government also pays the tuition fee when she joins a graduation course. The Women and Child Development Department runs the scheme through ladlilaxmi.mp.gov.in.",
    ],
    hi: [
      "लाड़ली लक्ष्मी योजना मध्य प्रदेश सरकार की बेटियों के लिए पुरानी और बड़ी योजना है। बेटी का पंजीयन पास की आंगनवाड़ी से होता है और सरकार उसके नाम ₹1,43,000 का आश्वासन प्रमाण पत्र देती है।",
      "पैसा पढ़ाई के अलग-अलग पड़ाव पर किस्तों में मिलता है, और आख़िरी ₹1 लाख 21 साल की उम्र पर मिलते हैं, बशर्ते उसने 12वीं पास की हो और कानूनी उम्र से पहले शादी न हुई हो।",
      "नए रूप (लाड़ली लक्ष्मी 2.0) में स्नातक में दाख़िला लेने पर सरकार उसकी ट्यूशन फ़ीस भी भरती है। योजना महिला एवं बाल विकास विभाग ladlilaxmi.mp.gov.in से चलाता है।",
    ],
  },
  benefits: {
    en: [
      "₹2,000 on joining Class 6.",
      "₹4,000 on joining Class 9.",
      "₹6,000 on joining Class 11 and ₹6,000 on joining Class 12.",
      "₹25,000 for a graduation or professional course of at least two years, paid in two equal parts in the first and last year.",
      "₹1,00,000 at age 21, if she has passed Class 12 and did not marry before the legal age.",
      "Tuition fee paid by the government for graduation-level study.",
    ],
    hi: [
      "कक्षा 6 में दाख़िले पर ₹2,000।",
      "कक्षा 9 में दाख़िले पर ₹4,000।",
      "कक्षा 11 में दाख़िले पर ₹6,000 और कक्षा 12 में दाख़िले पर ₹6,000।",
      "कम से कम दो साल के स्नातक या प्रोफ़ेशनल कोर्स के लिए ₹25,000, पहले और आख़िरी साल में दो बराबर हिस्सों में।",
      "21 साल की उम्र पर ₹1,00,000, अगर उसने 12वीं पास की है और कानूनी उम्र से पहले शादी नहीं हुई।",
      "स्नातक स्तर की पढ़ाई की ट्यूशन फ़ीस सरकार भरती है।",
    ],
  },
  eligibilityText: {
    en: [
      "The girl was born on or after 1 January 2006.",
      "Her parents live in Madhya Pradesh.",
      "Her parents do not pay income tax.",
      "She is registered at the local Anganwadi centre.",
      "For a second daughter, the family has adopted family planning after her birth. The first daughter does not need this.",
    ],
    hi: [
      "बेटी का जन्म 1 जनवरी 2006 या उसके बाद हुआ हो।",
      "माता-पिता मध्य प्रदेश के निवासी हों।",
      "माता-पिता आयकर न देते हों।",
      "बेटी का पंजीयन पास के आंगनवाड़ी केंद्र में हो।",
      "दूसरी बेटी के लिए, उसके जन्म के बाद परिवार ने परिवार नियोजन अपनाया हो। पहली बेटी के लिए यह शर्त नहीं है।",
    ],
  },
  exclusions: {
    en: [
      "Parents who pay income tax.",
      "Families with more than two children (except in the special cases listed in the rules, such as orphaned girls).",
      "The final ₹1 lakh is not paid if she marries before the legal age or has not passed Class 12.",
    ],
    hi: [
      "जिन माता-पिता पर आयकर लगता है।",
      "दो से ज़्यादा बच्चों वाले परिवार (नियमों में दिए विशेष मामलों को छोड़कर, जैसे अनाथ बेटियाँ)।",
      "कानूनी उम्र से पहले शादी होने या 12वीं पास न होने पर आख़िरी ₹1 लाख नहीं मिलते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to ladlilaxmi.mp.gov.in and choose the application type (normal or special case).",
        "Enter your mobile number, verify the OTP and fill in the form with the girl's and parents' details.",
        "Upload the documents and submit. The Anganwadi worker and project office verify it.",
      ],
      hi: [
        "ladlilaxmi.mp.gov.in पर जाएँ और आवेदन का प्रकार चुनें (सामान्य या विशेष मामला)।",
        "मोबाइल नंबर डालें, OTP से पुष्टि करें और बेटी व माता-पिता की जानकारी भरें।",
        "दस्तावेज़ अपलोड करके जमा करें। आंगनवाड़ी कार्यकर्ता और परियोजना कार्यालय इसकी जाँच करते हैं।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest Anganwadi centre or the Women and Child Development project office.",
        "The Anganwadi worker will help fill in and submit the form online.",
      ],
      hi: [
        "पास के आंगनवाड़ी केंद्र या महिला एवं बाल विकास परियोजना कार्यालय जाएँ।",
        "आंगनवाड़ी कार्यकर्ता फ़ॉर्म भरकर ऑनलाइन जमा करने में मदद करेंगी।",
      ],
    },
  },
  documents: {
    en: [
      "Girl's birth certificate",
      "Samagra ID of the family",
      "Parents' Aadhaar",
      "Photo of the parents with the girl",
      "Family planning certificate (for a second daughter)",
    ],
    hi: [
      "बेटी का जन्म प्रमाण पत्र",
      "परिवार की समग्र ID",
      "माता-पिता का आधार",
      "बेटी के साथ माता-पिता की फ़ोटो",
      "परिवार नियोजन प्रमाण पत्र (दूसरी बेटी के लिए)",
    ],
  },
  faqs: [
    {
      q: { en: "Is the money given all at once?", hi: "क्या पूरा पैसा एक साथ मिलता है?" },
      a: {
        en: "No. It is paid in parts when she joins Classes 6, 9, 11 and 12 and college, and the biggest part, ₹1 lakh, at age 21.",
        hi: "नहीं। कक्षा 6, 9, 11, 12 और कॉलेज में दाख़िले पर किस्तें मिलती हैं, और सबसे बड़ी किस्त ₹1 लाख 21 साल की उम्र पर।",
      },
    },
    {
      q: { en: "Can both my daughters be registered?", hi: "क्या मेरी दोनों बेटियों का पंजीयन हो सकता है?" },
      a: {
        en: "Yes, if the family has adopted family planning after the second child. The first daughter is eligible without that condition.",
        hi: "हाँ, अगर दूसरे बच्चे के बाद परिवार ने परिवार नियोजन अपनाया है। पहली बेटी इस शर्त के बिना पात्र है।",
      },
    },
  ],

  officialUrl: "https://ladlilaxmi.mp.gov.in/",
  sources: [
    "https://ladlilaxmi.mp.gov.in/",
    "https://www.drishtiias.com/state-pcs-current-affairs/madhya-pradesh-budget-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
