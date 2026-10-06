import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mahatma-jyotiba-phule-jan-arogya-yojana",
  name: { en: "Mahatma Jyotirao Phule Jan Arogya Yojana", hi: "महात्मा ज्योतिराव फुले जन आरोग्य योजना" },
  aka: ["MJPJAY", "MPJAY", "Jan Arogya Yojana"],
  shortDescription: {
    en: "Cashless hospital treatment of up to ₹5 lakh per family every year at listed hospitals, for every family in Maharashtra with a ration card or domicile certificate.",
    hi: "महाराष्ट्र के हर उस परिवार को, जिसके पास राशन कार्ड या अधिवास प्रमाण पत्र है, सूचीबद्ध अस्पतालों में हर साल ₹5 लाख तक का कैशलेस इलाज।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Public Health Department, Government of Maharashtra (State Health Assurance Society)",
    hi: "सार्वजनिक स्वास्थ्य विभाग, महाराष्ट्र सरकार (राज्य स्वास्थ्य आश्वासन सोसाइटी)",
  },
  categories: ["health"],
  tags: ["health insurance", "free treatment", "hospital", "cashless", "ayushman", "maharashtra"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500_000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("maharashtra")),

  details: {
    en: [
      "MJPJAY is Maharashtra's free health cover. Since 1 July 2024 it runs together with the central Ayushman Bharat PM-JAY, and the cover went up from ₹1.5 lakh to ₹5 lakh per family per year.",
      "Almost every family in the state is covered: yellow, orange and white ration card holders, and families without a ration card who have a Maharashtra domicile certificate. Road accident victims are also covered for emergency care.",
      "Treatment is cashless at government and private hospitals on the scheme's list. The hospital is paid directly by the State Health Assurance Society. In December 2025 the state said it was widening the list of covered procedures from about 1,356 to 2,399.",
    ],
    hi: [
      "MJPJAY महाराष्ट्र की मुफ़्त स्वास्थ्य बीमा योजना है। 1 जुलाई 2024 से यह केंद्र की आयुष्मान भारत PM-JAY के साथ मिलकर चलती है, और कवर ₹1.5 लाख से बढ़कर ₹5 लाख प्रति परिवार प्रति साल हो गया।",
      "राज्य के लगभग हर परिवार को कवर मिलता है: पीले, केसरी और सफ़ेद राशन कार्ड वाले, और वे परिवार भी जिनके पास राशन कार्ड नहीं पर महाराष्ट्र का अधिवास प्रमाण पत्र है। सड़क दुर्घटना के घायलों को भी आपात इलाज मिलता है।",
      "योजना की सूची वाले सरकारी और निजी अस्पतालों में इलाज कैशलेस होता है। अस्पताल को पैसा सीधे राज्य स्वास्थ्य आश्वासन सोसाइटी देती है। दिसंबर 2025 में राज्य ने कहा कि शामिल इलाजों की संख्या लगभग 1,356 से बढ़ाकर 2,399 की जा रही है।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹5 lakh per family per year, shared by all members.",
      "Covers surgeries, hospital stay, medicines, tests and food during admission for listed procedures.",
      "Some tests and medicines before admission and follow-up care after discharge are included.",
      "Road accident victims get emergency treatment up to ₹1 lakh per person.",
    ],
    hi: [
      "हर परिवार को साल में ₹5 लाख तक का कैशलेस इलाज, जिसे परिवार के सभी सदस्य मिलकर इस्तेमाल कर सकते हैं।",
      "सूची वाले इलाजों में ऑपरेशन, अस्पताल में भर्ती, दवाइयाँ, जाँचें और भर्ती के दौरान खाना शामिल है।",
      "भर्ती से पहले की कुछ जाँचें और दवाइयाँ, और छुट्टी के बाद का फ़ॉलो-अप भी शामिल है।",
      "सड़क दुर्घटना के घायलों को प्रति व्यक्ति ₹1 लाख तक का आपात इलाज।",
    ],
  },
  eligibilityText: {
    en: [
      "Families living in Maharashtra with a yellow, orange or white ration card.",
      "Families without a ration card who have a Maharashtra domicile certificate.",
      "Families already covered under Ayushman Bharat PM-JAY in Maharashtra.",
    ],
    hi: [
      "महाराष्ट्र में रहने वाले वे परिवार जिनके पास पीला, केसरी या सफ़ेद राशन कार्ड है।",
      "बिना राशन कार्ड वाले वे परिवार जिनके पास महाराष्ट्र का अधिवास प्रमाण पत्र है।",
      "महाराष्ट्र में आयुष्मान भारत PM-JAY में पहले से शामिल परिवार।",
    ],
  },
  exclusions: {
    en: [
      "Treatment at hospitals that are not on the scheme's list is not covered.",
      "Outpatient (OPD) visits that don't lead to admission or a listed procedure are not covered.",
      "Costs above the ₹5 lakh yearly family limit are not covered.",
    ],
    hi: [
      "योजना की सूची से बाहर के अस्पतालों में इलाज कवर नहीं होता।",
      "बिना भर्ती या सूची वाले इलाज के OPD में दिखाना कवर नहीं होता।",
      "परिवार की ₹5 लाख की सालाना सीमा से ऊपर का खर्च कवर नहीं होता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to a hospital on the MJPJAY list (check the list on the official website or call the toll-free helpline 155388 / 1800 233 2200).",
        "Meet the Arogya Mitra at the scheme help desk and show your ration card or domicile certificate and Aadhaar.",
        "The hospital gets online approval from the scheme and treats you without charging you.",
      ],
      hi: [
        "MJPJAY की सूची वाले अस्पताल में जाएँ (सूची आधिकारिक वेबसाइट पर देखें या टोल-फ़्री हेल्पलाइन 155388 / 1800 233 2200 पर पूछें)।",
        "योजना के हेल्प डेस्क पर आरोग्य मित्र से मिलें और राशन कार्ड या अधिवास प्रमाण पत्र और आधार दिखाएँ।",
        "अस्पताल योजना से ऑनलाइन मंज़ूरी लेता है और आपसे पैसे लिए बिना इलाज करता है।",
      ],
    },
  },
  documents: {
    en: [
      "Ration card (yellow, orange or white), or a Maharashtra domicile certificate",
      "Aadhaar card or another photo ID",
      "Ayushman card, if you have one",
      "Doctor's referral or reports, if any",
    ],
    hi: [
      "राशन कार्ड (पीला, केसरी या सफ़ेद), या महाराष्ट्र का अधिवास प्रमाण पत्र",
      "आधार कार्ड या कोई दूसरा फ़ोटो पहचान पत्र",
      "आयुष्मान कार्ड, अगर हो",
      "डॉक्टर की रेफ़रल पर्ची या रिपोर्ट, अगर हो",
    ],
  },
  faqs: [
    {
      q: { en: "Do I need to apply or enrol in advance?", hi: "क्या पहले से आवेदन या नामांकन करना होगा?" },
      a: {
        en: "No separate application is needed. You show your ration card or domicile certificate and Aadhaar at the hospital's scheme desk when you need treatment.",
        hi: "अलग से आवेदन नहीं करना होता। इलाज की ज़रूरत पड़ने पर अस्पताल के योजना डेस्क पर राशन कार्ड या अधिवास प्रमाण पत्र और आधार दिखाएँ।",
      },
    },
    {
      q: { en: "Are white ration card holders covered too?", hi: "क्या सफ़ेद राशन कार्ड वाले भी कवर हैं?" },
      a: {
        en: "Yes. Since the July 2024 expansion, white ration card families are covered as well, along with yellow and orange card holders.",
        hi: "हाँ। जुलाई 2024 के विस्तार के बाद पीले और केसरी कार्ड वालों के साथ सफ़ेद राशन कार्ड वाले परिवार भी कवर हैं।",
      },
    },
    {
      q: { en: "What if the hospital asks me to pay?", hi: "अगर अस्पताल पैसे माँगे तो?" },
      a: {
        en: "For a listed procedure at a listed hospital, you should not pay. Ask the Arogya Mitra for help or complain on the scheme's toll-free helpline.",
        hi: "सूची वाले अस्पताल में सूची वाले इलाज के लिए आपको पैसे नहीं देने चाहिए। आरोग्य मित्र से मदद लें या योजना की टोल-फ़्री हेल्पलाइन पर शिकायत करें।",
      },
    },
  ],

  officialUrl: "https://www.jeevandayee.gov.in/",
  sources: [
    "https://www.jeevandayee.gov.in/",
    "https://www.myscheme.gov.in/schemes/mjpjay",
    "https://www.thehitavada.com/Encyc/2025/12/11/state-to-provide-free-health-treatment-upto-rs-22-lakh-minister-abitkar.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
