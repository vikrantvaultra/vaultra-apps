import { all, ageBetween } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "atal-pension-yojana",
  name: { en: "Atal Pension Yojana", hi: "अटल पेंशन योजना" },
  aka: ["APY"],
  shortDescription: {
    en: "Save a small amount every month from your bank account and get a guaranteed pension of ₹1,000 to ₹5,000 a month from age 60.",
    hi: "हर महीने बैंक खाते से थोड़ी बचत करें और 60 साल की उम्र से हर महीने ₹1,000 से ₹5,000 तक की पक्की पेंशन पाएँ।",
  },
  level: "central",
  ministry: "finance",
  categories: ["pension-insurance"],
  tags: ["pension", "old age", "unorganised sector", "savings", "retirement"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 40 },
  kundliHouse: "retirement",
  eligibility: all(...ageBetween(18, 40)),

  details: {
    en: [
      "Atal Pension Yojana is a pension scheme for people who don't have a pension from their job, especially workers in the unorganised sector.",
      "You choose the monthly pension you want at 60 (₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000). Your monthly contribution depends on that choice and the age at which you join. The earlier you join, the less you pay.",
      "Contributions are auto-debited from your savings bank account until you turn 60. The scheme is regulated by the Pension Fund Regulatory and Development Authority (PFRDA).",
    ],
    hi: [
      "अटल पेंशन योजना उन लोगों के लिए है जिन्हें नौकरी से पेंशन नहीं मिलती, ख़ासकर असंगठित क्षेत्र में काम करने वालों के लिए।",
      "आप 60 साल पर मिलने वाली मासिक पेंशन चुनते हैं (₹1,000, ₹2,000, ₹3,000, ₹4,000 या ₹5,000)। आपका मासिक अंशदान इसी पर और जुड़ने की उम्र पर निर्भर करता है। जितनी जल्दी जुड़ेंगे, उतना कम देना होगा।",
      "60 साल की उम्र तक अंशदान आपके बचत खाते से अपने-आप कटता है। यह योजना पेंशन फ़ंड नियामक और विकास प्राधिकरण (PFRDA) के तहत चलती है।",
    ],
  },
  benefits: {
    en: [
      "Guaranteed monthly pension of ₹1,000 to ₹5,000 from age 60, for life.",
      "After the subscriber's death, the spouse receives the same pension for life.",
      "After both have died, the nominee receives the accumulated pension wealth (about ₹1.7 lakh to ₹8.5 lakh depending on the pension chosen).",
      "Small contributions: for example, joining at 18 for a ₹1,000 pension costs ₹42 a month.",
    ],
    hi: [
      "60 साल की उम्र से जीवन भर ₹1,000 से ₹5,000 तक की पक्की मासिक पेंशन।",
      "सदस्य की मृत्यु के बाद जीवनसाथी को जीवन भर वही पेंशन मिलती है।",
      "दोनों की मृत्यु के बाद नामांकित व्यक्ति को जमा पेंशन राशि मिलती है (चुनी गई पेंशन के अनुसार लगभग ₹1.7 लाख से ₹8.5 लाख)।",
      "छोटा अंशदान: जैसे 18 साल की उम्र में ₹1,000 पेंशन के लिए हर महीने सिर्फ़ ₹42।",
    ],
  },
  eligibilityText: {
    en: ["Indian citizen aged 18 to 40 years.", "Has a savings bank account or post office savings account.", "Is not, and has never been, an income-tax payer (for those joining on or after 1 October 2022)."],
    hi: ["18 से 40 साल की उम्र के भारतीय नागरिक।", "बैंक या डाकघर में बचत खाता हो।", "आयकरदाता न हों और पहले कभी न रहे हों (1 अक्टूबर 2022 या उसके बाद जुड़ने वालों के लिए)।"],
  },
  exclusions: {
    en: [
      "Anyone who is or has been an income-tax payer cannot join from 1 October 2022. If such a person joins anyway, the account is closed and the money saved so far is returned.",
      "People above 40 years cannot join.",
    ],
    hi: [
      "1 अक्टूबर 2022 से जो व्यक्ति आयकरदाता है या रहा है, वह नहीं जुड़ सकता। फिर भी जुड़ने पर खाता बंद कर दिया जाता है और तब तक जमा राशि लौटा दी जाती है।",
      "40 साल से अधिक उम्र के लोग नहीं जुड़ सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to your bank's internet or mobile banking app.",
        "Find Atal Pension Yojana (usually under 'Insurance & Pension' or 'Social Security Schemes').",
        "Choose your pension amount and nominee, and confirm the auto-debit.",
      ],
      hi: [
        "अपने बैंक की इंटरनेट बैंकिंग या मोबाइल ऐप में लॉग इन करें।",
        "अटल पेंशन योजना चुनें (आमतौर पर 'बीमा और पेंशन' या 'सामाजिक सुरक्षा योजनाएँ' में मिलती है)।",
        "पेंशन राशि और नामांकित व्यक्ति चुनें और ऑटो-डेबिट की पुष्टि करें।",
      ],
    },
    offline: {
      en: [
        "Visit the bank branch or post office where you have your savings account.",
        "Fill in the APY registration form with your pension choice and nominee details.",
        "Submit it with your Aadhaar and mobile number. Keep the acknowledgement slip.",
      ],
      hi: [
        "जिस बैंक शाखा या डाकघर में आपका बचत खाता है, वहाँ जाएँ।",
        "APY पंजीकरण फ़ॉर्म में पेंशन राशि और नामांकित व्यक्ति की जानकारी भरें।",
        "आधार और मोबाइल नंबर के साथ फ़ॉर्म जमा करें। पावती पर्ची संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Savings bank or post office account details", "Aadhaar (used for KYC)", "Mobile number", "Nominee and spouse details"],
    hi: ["बैंक या डाकघर बचत खाते का विवरण", "आधार (KYC के लिए)", "मोबाइल नंबर", "नामांकित व्यक्ति और जीवनसाथी का विवरण"],
  },
  faqs: [
    {
      q: { en: "Can I change my pension amount later?", hi: "क्या मैं बाद में पेंशन राशि बदल सकता/सकती हूँ?" },
      a: {
        en: "Yes. You can increase or decrease the pension amount once a year, and your monthly contribution changes accordingly.",
        hi: "हाँ। साल में एक बार पेंशन राशि बढ़ा या घटा सकते हैं, और उसी हिसाब से मासिक अंशदान बदल जाता है।",
      },
    },
    {
      q: { en: "What happens if I miss a contribution?", hi: "अगर अंशदान छूट जाए तो क्या होगा?" },
      a: {
        en: "Your bank charges a small overdue fee. Keep enough balance on the debit date to avoid it. Long gaps can lead to the account being frozen.",
        hi: "बैंक थोड़ा विलंब शुल्क लेता है। कटौती की तारीख पर खाते में पर्याप्त राशि रखें। लंबे समय तक भुगतान न होने पर खाता रुक सकता है।",
      },
    },
  ],

  officialUrl: "https://www.pfrda.org.in/",
  sources: [
    "https://www.pfrda.org.in/",
    "https://www.myscheme.gov.in/schemes/apy",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc202558551701.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
