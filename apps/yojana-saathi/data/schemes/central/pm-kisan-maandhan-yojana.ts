import { all, ageBetween, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-kisan-maandhan-yojana",
  name: { en: "PM Kisan Maan-Dhan Yojana", hi: "प्रधानमंत्री किसान मानधन योजना" },
  aka: ["PM-KMY", "PMKMY", "Kisan Pension Yojana"],
  shortDescription: {
    en: "Small and marginal farmers aged 18–40 pay ₹55–₹200 a month, the government matches it, and you get a pension of ₹3,000 a month from age 60.",
    hi: "18–40 साल के छोटे और सीमांत किसान हर महीने ₹55–₹200 जमा करें, सरकार उतना ही मिलाती है, और 60 साल से हर महीने ₹3,000 पेंशन पाएँ।",
  },
  level: "central",
  ministry: "agriculture-farmers-welfare",
  categories: ["agriculture", "pension-insurance"],
  tags: ["farmer pension", "kisan pension", "maandhan", "old age", "small farmer"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 3000, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 40 },
  kundliHouse: "retirement",
  eligibility: all(
    when("occupation", "in", ["farmer"], { en: "You are a small or marginal farmer", hi: "आप छोटे या सीमांत किसान हैं" }),
    ...ageBetween(18, 40),
  ),

  details: {
    en: [
      "PM Kisan Maan-Dhan Yojana is a voluntary pension scheme for small and marginal farmers who own up to 2 hectares of cultivable land.",
      "You join between 18 and 40 and pay a small monthly amount (₹55 to ₹200, depending on your joining age) until you turn 60. The Central Government puts the same amount into your pension account.",
      "From 60, you get an assured pension of ₹3,000 a month. The fund is managed by LIC. PM-KISAN beneficiaries can choose to have their contribution deducted from their PM-KISAN money.",
    ],
    hi: [
      "प्रधानमंत्री किसान मानधन योजना 2 हेक्टेयर तक खेती की ज़मीन वाले छोटे और सीमांत किसानों के लिए स्वैच्छिक पेंशन योजना है।",
      "आप 18 से 40 साल के बीच जुड़ते हैं और 60 साल तक हर महीने थोड़ी रकम (जुड़ने की उम्र के हिसाब से ₹55 से ₹200) जमा करते हैं। केंद्र सरकार भी उतनी ही रकम आपके पेंशन खाते में डालती है।",
      "60 साल से आपको हर महीने ₹3,000 की पक्की पेंशन मिलती है। फ़ंड का प्रबंधन LIC करती है। PM-KISAN लाभार्थी अपना अंशदान PM-KISAN के पैसे से कटवाने का विकल्प चुन सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Assured pension of ₹3,000 a month from age 60.",
      "The government matches your monthly contribution rupee for rupee.",
      "If you die after pension starts, your spouse gets a family pension of 50% (₹1,500 a month).",
      "If you die before 60, your spouse can continue paying and get the pension, or take back the money with interest.",
    ],
    hi: [
      "60 साल से हर महीने ₹3,000 की पक्की पेंशन।",
      "आपके मासिक अंशदान के बराबर रकम सरकार भी जमा करती है।",
      "पेंशन शुरू होने के बाद मृत्यु होने पर जीवनसाथी को 50% (₹1,500 महीना) पारिवारिक पेंशन मिलती है।",
      "60 से पहले मृत्यु होने पर जीवनसाथी योजना जारी रखकर पेंशन ले सकता है, या जमा रकम ब्याज सहित वापस ले सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Small or marginal farmer owning up to 2 hectares of cultivable land as per state land records.",
      "Aged 18 to 40 years at the time of joining.",
      "Has a savings bank account (or PM-KISAN account) and Aadhaar.",
    ],
    hi: [
      "राज्य के भूमि रिकॉर्ड के अनुसार 2 हेक्टेयर तक खेती की ज़मीन वाला छोटा या सीमांत किसान।",
      "जुड़ते समय उम्र 18 से 40 साल।",
      "बचत बैंक खाता (या PM-KISAN खाता) और आधार हो।",
    ],
  },
  exclusions: {
    en: [
      "Farmers covered by NPS, ESIC or EPFO, or enrolled in PM Shram Yogi Maan-dhan or PM Laghu Vyapari Maan-dhan.",
      "Farmers in the higher-income groups excluded under PM-KISAN: income-tax payers, serving or retired government employees, constitutional post holders, and practising professionals.",
      "Institutional landholders.",
    ],
    hi: [
      "NPS, ESIC या EPFO में शामिल किसान, या PM श्रम योगी मानधन या PM लघु व्यापारी मानधन में जुड़े किसान।",
      "PM-KISAN में बाहर रखे गए ऊँची आय वाले किसान: आयकरदाता, मौजूदा या रिटायर्ड सरकारी कर्मचारी, संवैधानिक पद वाले और प्रैक्टिस करने वाले पेशेवर।",
      "संस्थागत ज़मीन मालिक।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to maandhan.in and choose self-enrolment for PM-KMY.",
        "Verify your mobile number with OTP and fill in Aadhaar, bank, land and nominee details.",
        "Approve the auto-debit (or deduction from PM-KISAN) and download your pension card.",
      ],
      hi: [
        "maandhan.in पर जाएँ और PM-KMY के लिए खुद नामांकन (self-enrolment) चुनें।",
        "OTP से मोबाइल नंबर की पुष्टि करें और आधार, बैंक, ज़मीन और नामांकित व्यक्ति की जानकारी भरें।",
        "ऑटो-डेबिट (या PM-KISAN से कटौती) को मंज़ूरी दें और पेंशन कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest Common Service Centre (CSC) with Aadhaar and bank passbook. Enrolment is free.",
        "The CSC operator registers you, and you pay the first contribution in cash.",
        "Sign the auto-debit mandate and collect your Kisan Pension Card.",
      ],
      hi: [
        "आधार और बैंक पासबुक लेकर नज़दीकी जन सेवा केंद्र (CSC) जाएँ। नामांकन मुफ़्त है।",
        "CSC संचालक आपका पंजीकरण करता है और पहला अंशदान नकद जमा होता है।",
        "ऑटो-डेबिट फ़ॉर्म पर हस्ताक्षर करें और किसान पेंशन कार्ड लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Savings bank account passbook or PM-KISAN account details", "Land records", "Mobile number"],
    hi: ["आधार कार्ड", "बचत खाते की पासबुक या PM-KISAN खाते का विवरण", "ज़मीन के कागज़", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Can I leave the scheme early?", hi: "क्या मैं योजना बीच में छोड़ सकता/सकती हूँ?" },
      a: {
        en: "Yes. If you leave within 10 years, you get back your own contributions with savings bank interest. After 10 years but before 60, you get your share with the interest the fund earned.",
        hi: "हाँ। 10 साल के भीतर छोड़ने पर आपका अपना अंशदान बचत खाते के ब्याज के साथ वापस मिलता है। 10 साल बाद पर 60 से पहले छोड़ने पर आपका हिस्सा फ़ंड की कमाई वाले ब्याज के साथ मिलता है।",
      },
    },
    {
      q: { en: "How much do I pay each month?", hi: "हर महीने कितना देना होगा?" },
      a: {
        en: "It depends on your age when you join: ₹55 a month at 18, rising to ₹200 a month at 40. The government adds the same amount.",
        hi: "यह जुड़ने की उम्र पर निर्भर है: 18 साल पर ₹55 महीना, जो 40 साल पर ₹200 महीना तक जाता है। सरकार भी उतनी ही रकम जोड़ती है।",
      },
    },
  ],

  officialUrl: "https://maandhan.in/",
  sources: [
    "https://maandhan.in/",
    "https://www.myscheme.gov.in/schemes/pm-kmy",
    "https://vikaspedia.in/schemesall/schemes-for-farmers/pm-kisan-maan-dhan-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
