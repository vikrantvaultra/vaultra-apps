import { all, female, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-annapurna-yojana",
  name: { en: "Mukhyamantri Annapurna Yojana (Maharashtra)", hi: "मुख्यमंत्री अन्नपूर्णा योजना (महाराष्ट्र)" },
  aka: ["Annapurna Yojana", "free LPG cylinder Maharashtra"],
  shortDescription: {
    en: "Three free LPG cylinder refills a year for women in Maharashtra who get Ladki Bahin or PM Ujjwala benefits: you buy the cylinder and the cost comes back to your bank account.",
    hi: "महाराष्ट्र में लाडकी बहिण या PM उज्ज्वला का लाभ लेने वाली महिलाओं को साल में तीन LPG सिलेंडर रिफ़िल मुफ़्त: सिलेंडर आप ख़रीदें, पैसा बैंक खाते में वापस आता है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Food, Civil Supplies and Consumer Protection Department, Government of Maharashtra",
    hi: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता संरक्षण विभाग, महाराष्ट्र सरकार",
  },
  categories: ["energy-savings", "women-child"],
  tags: ["lpg", "gas cylinder", "free cylinder", "ujjwala", "ladki bahin", "maharashtra"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "energy-savings",
  eligibility: all(
    residentOf("maharashtra"),
    labelled(female(), { en: "The LPG connection is in a woman's name", hi: "LPG कनेक्शन महिला के नाम पर हो" }),
  ),

  details: {
    en: [
      "Mukhyamantri Annapurna Yojana was announced in Maharashtra's 2024–25 budget and notified in July 2024 to ease the cost of cooking gas for poorer families.",
      "Eligible families get the cost of three 14.2 kg domestic LPG refills a year back. You pay the market price at the time of refill, and the subsidy is sent to your Aadhaar-linked bank account, usually within a month.",
      "Women who get Majhi Ladki Bahin Yojana, and households with a PM Ujjwala connection, are covered. Only one person per family can benefit, and the gas connection must be in a woman's name.",
    ],
    hi: [
      "मुख्यमंत्री अन्नपूर्णा योजना की घोषणा महाराष्ट्र के 2024–25 के बजट में हुई और जुलाई 2024 में इसकी अधिसूचना आई, ताकि गरीब परिवारों पर रसोई गैस का बोझ कम हो।",
      "पात्र परिवारों को साल में 14.2 किलो के तीन घरेलू LPG रिफ़िल का पैसा वापस मिलता है। रिफ़िल के समय आप बाज़ार भाव देते हैं, और सब्सिडी आमतौर पर एक महीने में आधार से जुड़े बैंक खाते में आ जाती है।",
      "माझी लाडकी बहिण योजना की लाभार्थी महिलाएँ और PM उज्ज्वला कनेक्शन वाले परिवार इसमें आते हैं। एक परिवार से एक ही व्यक्ति को लाभ मिलता है, और गैस कनेक्शन महिला के नाम पर होना चाहिए।",
    ],
  },
  benefits: {
    en: [
      "Cost of three domestic LPG refills a year paid back to your bank account.",
      "Ladki Bahin beneficiaries get back the full price of each of the three refills.",
      "PM Ujjwala households get the central ₹300 subsidy plus a state top-up (₹530 when the scheme began) on each of the three refills.",
    ],
    hi: [
      "साल में तीन घरेलू LPG रिफ़िल का पैसा बैंक खाते में वापस।",
      "लाडकी बहिण लाभार्थियों को तीनों रिफ़िल की पूरी कीमत वापस मिलती है।",
      "PM उज्ज्वला वाले परिवारों को तीनों रिफ़िल पर केंद्र की ₹300 सब्सिडी के साथ राज्य की अतिरिक्त मदद (योजना शुरू होते समय ₹530) मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman in Maharashtra who is a beneficiary of Majhi Ladki Bahin Yojana, or a household with a PM Ujjwala Yojana connection.",
      "The domestic LPG connection is in her name.",
      "Only 14.2 kg domestic cylinders count.",
      "One beneficiary per family (per ration card).",
    ],
    hi: [
      "महाराष्ट्र की वह महिला जो माझी लाडकी बहिण योजना की लाभार्थी है, या PM उज्ज्वला योजना कनेक्शन वाला परिवार।",
      "घरेलू LPG कनेक्शन उसके नाम पर हो।",
      "सिर्फ़ 14.2 किलो के घरेलू सिलेंडर पर लाभ।",
      "एक परिवार (एक राशन कार्ड) से एक ही लाभार्थी।",
    ],
  },
  exclusions: {
    en: [
      "Commercial LPG connections.",
      "Connections in a man's name (transfer it to a woman in the family first).",
      "More than three refills a year.",
    ],
    hi: [
      "कमर्शियल LPG कनेक्शन।",
      "पुरुष के नाम वाले कनेक्शन (पहले इसे परिवार की किसी महिला के नाम कराएँ)।",
      "साल में तीन से ज़्यादा रिफ़िल।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Make sure your LPG connection is in your name and linked to your Aadhaar and bank account. Your gas agency can help transfer it.",
        "Ladki Bahin and Ujjwala beneficiaries are matched automatically. If your name is missing, ask your gas distributor or the local supply (tehsil) office.",
        "Book and pay for a refill as usual. The subsidy is then credited to your bank account.",
      ],
      hi: [
        "पक्का करें कि LPG कनेक्शन आपके नाम पर है और आधार व बैंक खाते से जुड़ा है। गैस एजेंसी नाम बदलने में मदद कर सकती है।",
        "लाडकी बहिण और उज्ज्वला लाभार्थियों का मिलान अपने-आप होता है। नाम न हो तो गैस वितरक या तहसील के आपूर्ति कार्यालय से पूछें।",
        "हमेशा की तरह रिफ़िल बुक करें और पैसे दें। फिर सब्सिडी आपके बैंक खाते में आ जाती है।",
      ],
    },
  },
  documents: {
    en: ["LPG consumer number / gas book in your name", "Aadhaar card", "Aadhaar-linked bank account", "Ration card"],
    hi: ["आपके नाम का LPG उपभोक्ता नंबर / गैस बुक", "आधार कार्ड", "आधार से जुड़ा बैंक खाता", "राशन कार्ड"],
  },
  faqs: [
    {
      q: { en: "Will I get the cylinder without paying?", hi: "क्या सिलेंडर बिना पैसे दिए मिलेगा?" },
      a: {
        en: "No. You pay the normal price at refill time, and the money comes back to your Aadhaar-linked bank account.",
        hi: "नहीं। रिफ़िल के समय सामान्य कीमत देनी होती है, और पैसा आधार से जुड़े बैंक खाते में वापस आता है।",
      },
    },
    {
      q: { en: "The gas connection is in my husband's name. What can I do?", hi: "गैस कनेक्शन पति के नाम पर है। क्या करूँ?" },
      a: {
        en: "Ask your gas agency to transfer the connection to your name. The benefit is given only on connections held by women.",
        hi: "गैस एजेंसी से कनेक्शन अपने नाम ट्रांसफ़र कराएँ। लाभ सिर्फ़ महिलाओं के नाम वाले कनेक्शन पर मिलता है।",
      },
    },
  ],

  officialUrl: "https://mahafood.gov.in/",
  sources: [
    "https://mahafood.gov.in/",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-maharashtra/mukhyamantri-annapurna-yojana",
    "https://www.tribuneindia.com/news/india/maharashtra-budget-2024-25-rs-1-500-monthly-allowance-for-women-stipend-of-rs-10-000-month-for-youth-3-free-cylinders-per-household-a-year-634904/amp",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
