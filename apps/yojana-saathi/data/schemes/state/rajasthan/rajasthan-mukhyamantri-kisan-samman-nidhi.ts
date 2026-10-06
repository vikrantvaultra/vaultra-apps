import { all, labelled, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-mukhyamantri-kisan-samman-nidhi",
  overlapGroup: "farmer-income",
  name: { en: "Mukhyamantri Kisan Samman Nidhi (Rajasthan)", hi: "मुख्यमंत्री किसान सम्मान निधि (राजस्थान)" },
  aka: ["CM Kisan Samman Nidhi", "Rajasthan Kisan Samman Nidhi"],
  shortDescription: {
    en: "Rajasthan farmers who get PM-KISAN receive an extra ₹3,000 a year from the state, on top of the Centre's ₹6,000, straight into their bank account.",
    hi: "PM-KISAN पाने वाले राजस्थान के किसानों को केंद्र के ₹6,000 के अलावा राज्य से हर साल ₹3,000 और सीधे बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Agriculture Department, Government of Rajasthan", hi: "कृषि विभाग, राजस्थान सरकार" },
  categories: ["agriculture"],
  tags: ["farmer", "kisan", "pm kisan", "income support", "dbt", "rajasthan"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 3000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("rajasthan"),
    when("occupation", "in", ["farmer"]),
    labelled(notTaxPayer(), { en: "No one in the family paid income tax (a PM-KISAN condition)", hi: "परिवार में कोई आयकर न भरता हो (PM-KISAN की शर्त)" }),
  ),

  details: {
    en: [
      "Mukhyamantri Kisan Samman Nidhi is the Rajasthan government's top-up to the central PM-KISAN scheme. It started in 2024 with ₹2,000 a year and the state later raised it to ₹3,000 a year.",
      "Farmers who are active PM-KISAN beneficiaries in Rajasthan get the state amount in instalments by DBT. Together with PM-KISAN, a farmer gets ₹9,000 a year.",
      "There is no separate form. The state uses the PM-KISAN list, so your PM-KISAN registration, e-KYC and land details must be in order.",
    ],
    hi: [
      "मुख्यमंत्री किसान सम्मान निधि, केंद्र की PM-KISAN योजना पर राजस्थान सरकार की अतिरिक्त राशि है। यह 2024 में ₹2,000 सालाना से शुरू हुई और बाद में राज्य ने इसे ₹3,000 सालाना कर दिया।",
      "राजस्थान में PM-KISAN के सक्रिय लाभार्थी किसानों को राज्य की राशि किस्तों में DBT से मिलती है। PM-KISAN के साथ मिलाकर किसान को साल में ₹9,000 मिलते हैं।",
      "अलग से कोई फ़ॉर्म नहीं है। राज्य PM-KISAN की सूची का इस्तेमाल करता है, इसलिए आपका PM-KISAN पंजीकरण, e-KYC और ज़मीन का विवरण सही होना चाहिए।",
    ],
  },
  benefits: {
    en: [
      "₹3,000 a year from the Rajasthan government, paid in instalments.",
      "This is in addition to ₹6,000 a year from PM-KISAN, making ₹9,000 in total.",
      "Money goes straight to your Aadhaar-linked bank account.",
    ],
    hi: [
      "राजस्थान सरकार से हर साल ₹3,000, किस्तों में।",
      "यह PM-KISAN के ₹6,000 सालाना के अलावा है, यानी कुल ₹9,000।",
      "पैसा सीधे आपके आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a farmer in Rajasthan with cultivable land recorded in your name.",
      "You are an active PM-KISAN beneficiary with e-KYC done.",
      "PM-KISAN exclusions apply, such as income-tax payers, government employees and professionals.",
    ],
    hi: [
      "आप राजस्थान के किसान हैं और खेती की ज़मीन आपके नाम पर दर्ज है।",
      "आप PM-KISAN के सक्रिय लाभार्थी हैं और आपकी e-KYC पूरी है।",
      "PM-KISAN वाली अपात्रताएँ लागू हैं, जैसे आयकरदाता, सरकारी कर्मचारी और पेशेवर।",
    ],
  },
  exclusions: {
    en: [
      "Farmers not registered under PM-KISAN or whose PM-KISAN payments have stopped.",
      "Families where someone paid income tax, and serving or retired government employees (as under PM-KISAN).",
      "Institutional landholders.",
    ],
    hi: [
      "जो किसान PM-KISAN में पंजीकृत नहीं हैं या जिनकी PM-KISAN किस्त रुकी हुई है।",
      "जिन परिवारों में किसी ने आयकर भरा हो, और सेवारत या सेवानिवृत्त सरकारी कर्मचारी (PM-KISAN की तरह)।",
      "संस्थागत ज़मीन मालिक।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register for PM-KISAN at pmkisan.gov.in if you have not already.",
        "Complete e-KYC with your Aadhaar OTP or at a CSC, and make sure your bank account is linked to Aadhaar.",
        "Once your PM-KISAN is active, the state amount comes automatically. Check your status on the PM-KISAN portal.",
      ],
      hi: [
        "अगर पहले नहीं किया है, तो pmkisan.gov.in पर PM-KISAN में पंजीकरण करें।",
        "आधार OTP से या CSC पर e-KYC पूरी करें और देखें कि बैंक खाता आधार से जुड़ा है।",
        "PM-KISAN सक्रिय होने पर राज्य की राशि अपने-आप आती है। स्थिति PM-KISAN पोर्टल पर देखें।",
      ],
    },
    offline: {
      en: [
        "Visit an e-Mitra kiosk or your local agriculture supervisor with your documents.",
        "Ask them to check or fix your PM-KISAN registration, land seeding and e-KYC.",
      ],
      hi: [
        "दस्तावेज़ लेकर ई-मित्र केंद्र या अपने कृषि पर्यवेक्षक के पास जाएँ।",
        "उनसे अपना PM-KISAN पंजीकरण, ज़मीन का जुड़ाव और e-KYC जाँचने या ठीक करने को कहें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Land records (jamabandi) in your name", "Aadhaar-linked bank account", "Jan Aadhaar card"],
    hi: ["आधार कार्ड", "आपके नाम की ज़मीन का रिकॉर्ड (जमाबंदी)", "आधार से जुड़ा बैंक खाता", "जन आधार कार्ड"],
  },
  faqs: [
    {
      q: { en: "Do I need to apply separately for the state amount?", hi: "क्या राज्य की राशि के लिए अलग से आवेदन करना होगा?" },
      a: {
        en: "No. If you get PM-KISAN in Rajasthan and your e-KYC and land details are complete, the state amount is paid automatically.",
        hi: "नहीं। अगर आपको राजस्थान में PM-KISAN मिल रहा है और e-KYC व ज़मीन का विवरण पूरा है, तो राज्य की राशि अपने-आप मिलती है।",
      },
    },
    {
      q: { en: "My PM-KISAN instalment stopped. Will this stop too?", hi: "मेरी PM-KISAN किस्त रुक गई है। क्या यह भी रुकेगी?" },
      a: {
        en: "Most likely yes, because the state pays only active PM-KISAN beneficiaries. Fix the PM-KISAN problem first, usually e-KYC or land seeding.",
        hi: "ज़्यादातर हाँ, क्योंकि राज्य सिर्फ़ सक्रिय PM-KISAN लाभार्थियों को पैसा देता है। पहले PM-KISAN की समस्या ठीक कराएँ, आमतौर पर e-KYC या ज़मीन का जुड़ाव।",
      },
    },
  ],

  officialUrl: "https://rajkisan.rajasthan.gov.in/",
  sources: [
    "https://x.com/RajCMO/status/1973933522063700261",
    "https://pmkisan.gov.in/",
    "https://www.patrika.com/jaipur-news/in-the-chief-minister-kisan-samman-nidhi-scheme-instead-of-rs-2000-an-additional-amount-of-rs-3000-will-be-given-19444219",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
