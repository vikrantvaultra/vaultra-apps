import { all, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-ayushman-arogya-yojana",
  overlapGroup: "health-cover",
  name: { en: "Mukhyamantri Ayushman Arogya (MAA) Yojana", hi: "मुख्यमंत्री आयुष्मान आरोग्य (मा) योजना" },
  aka: ["MAA Yojana", "MAAY", "Chiranjeevi Yojana", "Chiranjeevi"],
  shortDescription: {
    en: "Cashless hospital treatment worth up to ₹25 lakh a year for your whole family in Rajasthan, free for poor families and low-cost for others.",
    hi: "राजस्थान में पूरे परिवार के लिए हर साल ₹25 लाख तक का कैशलेस अस्पताल इलाज, ग़रीब परिवारों के लिए मुफ़्त और बाक़ी के लिए कम प्रीमियम पर।",
  },
  level: "state",
  state: "rajasthan",
  department: {
    en: "Medical, Health and Family Welfare Department (Rajasthan State Health Assurance Agency), Government of Rajasthan",
    hi: "चिकित्सा, स्वास्थ्य एवं परिवार कल्याण विभाग (राजस्थान स्टेट हेल्थ एश्योरेंस एजेंसी), राजस्थान सरकार",
  },
  categories: ["health"],
  tags: ["health insurance", "free treatment", "hospital", "chiranjeevi", "maa yojana", "rajasthan"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 2_500_000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("rajasthan"),
    labelled(notGovtEmployee(), {
      en: "You are not a state government employee or pensioner (they are covered by RGHS instead)",
      hi: "आप राज्य सरकार के कर्मचारी या पेंशनभोगी नहीं हैं (उनके लिए RGHS है)",
    }),
  ),

  details: {
    en: [
      "Mukhyamantri Ayushman Arogya Yojana (MAA Yojana) is Rajasthan's family health cover. It started in 2021 as the Chiranjeevi scheme and was renamed after the change of government. It works together with the central Ayushman Bharat PM-JAY.",
      "An enrolled family can get cashless treatment worth up to ₹25 lakh a year in government hospitals and empanelled private hospitals. A separate accident cover is also part of the scheme.",
      "Families in the free categories, such as NFSA ration card holders, SECC 2011 families, small and marginal farmers and contract workers of state departments, are enrolled without any premium. Other families of the state can join by paying a yearly premium.",
    ],
    hi: [
      "मुख्यमंत्री आयुष्मान आरोग्य योजना (मा योजना) राजस्थान की पारिवारिक स्वास्थ्य बीमा योजना है। यह 2021 में चिरंजीवी योजना के नाम से शुरू हुई थी और सरकार बदलने के बाद इसका नाम बदला गया। यह केंद्र की आयुष्मान भारत PM-JAY के साथ मिलकर चलती है।",
      "जुड़े हुए परिवार को सरकारी और सूचीबद्ध निजी अस्पतालों में हर साल ₹25 लाख तक का कैशलेस इलाज मिलता है। योजना में अलग से दुर्घटना बीमा भी शामिल है।",
      "मुफ़्त श्रेणी वाले परिवार, जैसे NFSA राशन कार्ड वाले, SECC 2011 वाले परिवार, लघु और सीमांत किसान और राज्य विभागों के संविदा कर्मी, बिना प्रीमियम के जुड़ते हैं। राज्य के बाक़ी परिवार सालाना प्रीमियम देकर जुड़ सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹25 lakh per family per year.",
      "Covers a long list of treatment packages, including surgery, cancer care, dialysis and heart treatment.",
      "Tests and medicines for a few days before admission and after discharge are included.",
      "Accident cover for the insured family.",
      "Works in government hospitals and empanelled private hospitals.",
    ],
    hi: [
      "हर परिवार को हर साल ₹25 लाख तक का कैशलेस इलाज।",
      "ऑपरेशन, कैंसर, डायलिसिस और दिल के इलाज समेत बहुत से इलाज पैकेज शामिल।",
      "भर्ती से कुछ दिन पहले और छुट्टी के बाद की जाँच और दवाइयाँ भी शामिल।",
      "बीमित परिवार के लिए दुर्घटना बीमा।",
      "सरकारी और सूचीबद्ध निजी अस्पतालों में इलाज।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family lives in Rajasthan and has a Jan Aadhaar card.",
      "Free enrolment: NFSA (food security) families, SECC 2011 families, small and marginal farmers, contract workers of state departments, boards and corporations, and some other notified groups.",
      "Any other family of the state can join by paying the yearly premium.",
    ],
    hi: [
      "आपका परिवार राजस्थान में रहता हो और उसके पास जन आधार कार्ड हो।",
      "मुफ़्त पंजीकरण: NFSA (खाद्य सुरक्षा) वाले परिवार, SECC 2011 वाले परिवार, लघु और सीमांत किसान, राज्य के विभागों, बोर्डों और निगमों के संविदा कर्मी और कुछ अन्य अधिसूचित वर्ग।",
      "राज्य का कोई भी दूसरा परिवार सालाना प्रीमियम देकर जुड़ सकता है।",
    ],
  },
  exclusions: {
    en: [
      "State government employees and pensioners, who are covered under the Rajasthan Government Health Scheme (RGHS).",
      "Families that are not in a free category and have not paid the premium for the year.",
    ],
    hi: [
      "राज्य सरकार के कर्मचारी और पेंशनभोगी, जो राजस्थान गवर्नमेंट हेल्थ स्कीम (RGHS) में आते हैं।",
      "वे परिवार जो मुफ़्त श्रेणी में नहीं हैं और जिन्होंने साल का प्रीमियम नहीं भरा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to maayojana.rajasthan.gov.in or log in to the Rajasthan SSO portal.",
        "Enter your Jan Aadhaar number to check whether your family is already enrolled.",
        "If you are not in a free category, pay the premium online to activate the cover.",
      ],
      hi: [
        "maayojana.rajasthan.gov.in पर जाएँ या राजस्थान SSO पोर्टल पर लॉग इन करें।",
        "जन आधार नंबर डालकर देखें कि आपका परिवार पहले से जुड़ा है या नहीं।",
        "अगर आप मुफ़्त श्रेणी में नहीं हैं, तो कवर चालू करने के लिए ऑनलाइन प्रीमियम भरें।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest e-Mitra kiosk with your Jan Aadhaar and Aadhaar cards.",
        "The operator will check or complete your family's registration.",
        "At the hospital, show your Jan Aadhaar or Aadhaar at the scheme help desk to get cashless treatment.",
      ],
      hi: [
        "जन आधार और आधार कार्ड लेकर नज़दीकी ई-मित्र केंद्र पर जाएँ।",
        "ऑपरेटर आपके परिवार का पंजीकरण जाँचेगा या पूरा करेगा।",
        "अस्पताल में योजना के हेल्प डेस्क पर जन आधार या आधार दिखाकर कैशलेस इलाज लें।",
      ],
    },
  },
  documents: {
    en: ["Jan Aadhaar card", "Aadhaar card of each family member", "Mobile number linked to Jan Aadhaar"],
    hi: ["जन आधार कार्ड", "परिवार के हर सदस्य का आधार कार्ड", "जन आधार से जुड़ा मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Is this the same as the old Chiranjeevi scheme?", hi: "क्या यह पुरानी चिरंजीवी योजना ही है?" },
      a: {
        en: "Yes. Chiranjeevi was renamed Mukhyamantri Ayushman Arogya Yojana. Families already enrolled stay covered as long as they are in a free category or keep paying the premium.",
        hi: "हाँ। चिरंजीवी योजना का नाम बदलकर मुख्यमंत्री आयुष्मान आरोग्य योजना किया गया है। जो परिवार पहले से जुड़े हैं, वे मुफ़्त श्रेणी में होने या प्रीमियम भरते रहने तक कवर रहते हैं।",
      },
    },
    {
      q: { en: "How much is the premium for families not in a free category?", hi: "जो परिवार मुफ़्त श्रेणी में नहीं हैं, उनका प्रीमियम कितना है?" },
      a: {
        en: "It has been about ₹850 a year per family, with the state paying the rest. Check the current amount on the MAA Yojana portal before paying.",
        hi: "यह लगभग ₹850 प्रति परिवार प्रति वर्ष रहा है, बाक़ी हिस्सा राज्य सरकार देती है। भरने से पहले मा योजना पोर्टल पर मौजूदा राशि देख लें।",
      },
    },
  ],

  officialUrl: "https://maayojana.rajasthan.gov.in/",
  sources: [
    "https://maayojana.rajasthan.gov.in/",
    "https://righttoinformation.wiki/yojana/chiranjeevi-rajasthan",
    "https://currentaffairs.adda247.com/rajasthan-mukhyamantri-ayushman-arogya-yojana-maay-eligibility-benefits-coverage-and-how-to-apply/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
