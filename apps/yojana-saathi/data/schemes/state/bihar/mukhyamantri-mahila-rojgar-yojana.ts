import { all, ageBetween, female, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-mahila-rojgar-yojana",
  tier: "full",
  name: { en: "Mukhyamantri Mahila Rojgar Yojana", hi: "मुख्यमंत्री महिला रोज़गार योजना" },
  aka: ["MMRY", "Mahila Rozgar Yojana", "Bihar 10000 women scheme"],
  shortDescription: {
    en: "One woman from each Bihar family gets ₹10,000 to start a small business of her choice, with further help of up to ₹2 lakh if the business is running well.",
    hi: "बिहार में हर परिवार की एक महिला को अपनी पसंद का छोटा काम-धंधा शुरू करने के लिए ₹10,000 मिलते हैं, और काम ठीक चलने पर आगे ₹2 लाख तक की मदद मिल सकती है।",
  },
  level: "state",
  state: "bihar",
  department: {
    en: "Rural Development Department (JEEViKA) and Urban Development & Housing Department, Government of Bihar",
    hi: "ग्रामीण विकास विभाग (जीविका) और नगर विकास एवं आवास विभाग, बिहार सरकार",
  },
  categories: ["women-child", "business"],
  tags: ["women", "self employment", "business grant", "jeevika", "self help group", "10000", "bihar"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 10000, period: "one-time", kind: "cash" },
  ageRange: { min: 18, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("bihar"),
    female(),
    ...ageBetween(18, 60),
    labelled(notGovtEmployee(), { en: "You are not in government service (regular or contract)", hi: "आप सरकारी सेवा (नियमित या संविदा) में न हों" }),
  ),

  details: {
    en: [
      "Mukhyamantri Mahila Rojgar Yojana helps women in Bihar start their own small business. It began in September 2025 and is meant for one woman from every family.",
      "The first instalment of ₹10,000 is sent straight to the woman's Aadhaar-linked bank account. About six months after she starts her work, it is assessed, and she can then get further support of up to ₹2 lakh in instalments, based on need.",
      "In villages the scheme runs through JEEViKA, Bihar's self-help group network, under the Rural Development Department. In towns the Urban Development & Housing Department runs it. Women need to be, or become, members of a self-help group.",
    ],
    hi: [
      "मुख्यमंत्री महिला रोज़गार योजना बिहार की महिलाओं को अपना छोटा काम-धंधा शुरू करने में मदद करती है। यह सितंबर 2025 में शुरू हुई और हर परिवार की एक महिला के लिए है।",
      "पहली किस्त के ₹10,000 सीधे महिला के आधार से जुड़े बैंक खाते में भेजे जाते हैं। काम शुरू करने के लगभग छह महीने बाद उसका आकलन होता है, और फिर ज़रूरत के हिसाब से किस्तों में ₹2 लाख तक की और मदद मिल सकती है।",
      "गाँवों में यह योजना ग्रामीण विकास विभाग के तहत जीविका (स्वयं सहायता समूह नेटवर्क) के ज़रिए चलती है। शहरों में नगर विकास एवं आवास विभाग इसे चलाता है। महिला का स्वयं सहायता समूह से जुड़ा होना या जुड़ना ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "₹10,000 as the first instalment to start a business of your choice.",
      "After an assessment about six months into the business, further help of up to ₹2 lakh, paid in instalments as needed.",
      "Money is paid by DBT into your own Aadhaar-linked bank account.",
      "Guidance and support from your self-help group network to run the business.",
    ],
    hi: [
      "अपनी पसंद का काम शुरू करने के लिए पहली किस्त में ₹10,000।",
      "काम शुरू होने के करीब छह महीने बाद आकलन के बाद, ज़रूरत के हिसाब से किस्तों में ₹2 लाख तक की और मदद।",
      "पैसा DBT से आपके अपने आधार से जुड़े बैंक खाते में आता है।",
      "काम चलाने के लिए स्वयं सहायता समूह नेटवर्क से मार्गदर्शन और सहयोग।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman who is a permanent resident of Bihar.",
      "Aged 18 to 60 years.",
      "Only one woman per family can get the benefit.",
      "She is a member of a self-help group (JEEViKA in villages), or agrees to join one.",
      "She has a bank account in her own name linked to Aadhaar.",
    ],
    hi: [
      "बिहार की स्थायी निवासी महिला।",
      "उम्र 18 से 60 साल।",
      "एक परिवार से केवल एक महिला को लाभ मिलता है।",
      "वह स्वयं सहायता समूह (गाँव में जीविका) की सदस्य हो, या जुड़ने को तैयार हो।",
      "उसके अपने नाम पर आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "The woman or her husband pays income tax.",
      "The woman or her husband is in government service, whether regular or on contract.",
      "Another woman from the same family has already received the benefit.",
    ],
    hi: [
      "महिला या उसके पति आयकर देते हों।",
      "महिला या उसके पति सरकारी सेवा में हों, चाहे नियमित हों या संविदा पर।",
      "परिवार की किसी दूसरी महिला को पहले ही लाभ मिल चुका हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "In a village, contact your JEEViKA self-help group, village organisation or community mobiliser. If you are not in a group yet, they will help you join.",
        "Fill in the application form through the group and attach your documents.",
        "In a town, contact the city's urban livelihood or self-help group office run under the Urban Development & Housing Department.",
        "Track your form and payment status on the JEEViKA website (brlps.in) using your Aadhaar or application number, or ask your group.",
      ],
      hi: [
        "गाँव में अपने जीविका स्वयं सहायता समूह, ग्राम संगठन या सामुदायिक कार्यकर्ता से संपर्क करें। अगर आप अभी किसी समूह में नहीं हैं, तो वे जुड़ने में मदद करेंगे।",
        "समूह के ज़रिए आवेदन फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "शहर में नगर विकास एवं आवास विभाग के तहत चलने वाले शहरी आजीविका या स्वयं सहायता समूह कार्यालय से संपर्क करें।",
        "अपने आधार या आवेदन नंबर से जीविका की वेबसाइट (brlps.in) पर फ़ॉर्म और भुगतान की स्थिति देखें, या अपने समूह से पूछें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Bank passbook of an Aadhaar-linked account in your name", "Self-help group membership details", "Passport-size photograph", "Mobile number"],
    hi: ["आधार कार्ड", "आपके नाम के आधार से जुड़े बैंक खाते की पासबुक", "स्वयं सहायता समूह की सदस्यता का विवरण", "पासपोर्ट साइज़ फ़ोटो", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay back the ₹10,000?", hi: "क्या ₹10,000 वापस करने होंगे?" },
      a: {
        en: "No. The ₹10,000 is help to start your work, not a loan. Use it for the business you said you would start, because further help depends on how that business is doing.",
        hi: "नहीं। ₹10,000 काम शुरू करने के लिए मदद है, कर्ज़ नहीं। इसे उसी काम में लगाएँ जो आपने बताया था, क्योंकि आगे की मदद इस पर निर्भर करती है कि काम कैसा चल रहा है।",
      },
    },
    {
      q: { en: "How do I get the extra money up to ₹2 lakh?", hi: "₹2 लाख तक की अतिरिक्त राशि कैसे मिलेगी?" },
      a: {
        en: "About six months after you start, your business is assessed. If it is running and needs more capital, further help of up to ₹2 lakh can be given in instalments.",
        hi: "काम शुरू करने के करीब छह महीने बाद उसका आकलन होता है। अगर काम चल रहा है और उसे और पूँजी चाहिए, तो किस्तों में ₹2 लाख तक की मदद दी जा सकती है।",
      },
    },
  ],

  officialUrl: "https://brlps.in/",
  sources: [
    "https://betastate.bihar.gov.in/MMRY",
    "https://brlps.in/",
    "https://prsindia.org/budgets/states/bihar-budget-analysis-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
