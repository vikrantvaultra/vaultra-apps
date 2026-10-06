import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-ashirwad-scheme",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Ashirwad Scheme (Punjab)", hi: "आशीर्वाद योजना (पंजाब)" },
  aka: ["Ashirwad", "Aashirwad Scheme", "Shagun Scheme Punjab", "marriage grant Punjab"],
  shortDescription: {
    en: "₹51,000 for the marriage of a daughter from a poor SC, BC, Christian or economically weaker family in Punjab, for up to two daughters per family.",
    hi: "पंजाब के ग़रीब अनुसूचित जाति, पिछड़ा वर्ग, ईसाई या आर्थिक रूप से कमज़ोर परिवार की बेटी की शादी पर ₹51,000, एक परिवार की ज़्यादा से ज़्यादा दो बेटियों के लिए।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Justice, Empowerment and Minorities, Government of Punjab",
    hi: "सामाजिक न्याय, अधिकारिता और अल्पसंख्यक विभाग, पंजाब सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "shagun", "daughter", "sc", "bc", "ashirwad", "punjab"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 51_000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(residentOf("punjab")),

  details: {
    en: [
      "Ashirwad (earlier called the Shagun scheme) gives money to poor families in Punjab for a daughter's marriage. It has run under this name since 2004.",
      "The state's 2026-27 gender budget lists the amount as ₹51,000 per marriage. The money goes straight into the beneficiary's bank account. The 2026-27 budget set aside ₹360 crore for the scheme.",
      "Since 28 January 2026, applications are accepted only through Sewa Kendras. The department does not accept forms submitted any other way.",
    ],
    hi: [
      "आशीर्वाद योजना (पहले शगुन योजना) पंजाब के ग़रीब परिवारों को बेटी की शादी के लिए पैसा देती है। यह 2004 से इसी नाम से चल रही है।",
      "राज्य के 2026-27 के जेंडर बजट में इसकी राशि ₹51,000 प्रति शादी बताई गई है। पैसा सीधे लाभार्थी के बैंक खाते में आता है। 2026-27 के बजट में इस योजना के लिए ₹360 करोड़ रखे गए हैं।",
      "28 जनवरी 2026 से आवेदन सिर्फ़ सेवा केंद्र के ज़रिए लिए जाते हैं। किसी और तरीक़े से दिए गए फ़ॉर्म विभाग नहीं लेता।",
    ],
  },
  benefits: {
    en: [
      "₹51,000 for the daughter's marriage, paid into the bank account.",
      "Available for up to two daughters in a family.",
      "Scheduled Caste widows and divorced women can also get it when they remarry.",
    ],
    hi: [
      "बेटी की शादी के लिए ₹51,000, सीधे बैंक खाते में।",
      "एक परिवार की ज़्यादा से ज़्यादा दो बेटियों के लिए।",
      "अनुसूचित जाति की विधवा और तलाक़शुदा महिलाओं को दोबारा शादी पर भी मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The family is a permanent resident of Punjab.",
      "The bride is from a Scheduled Caste, Backward Class, Christian or economically weaker section family, or is the daughter of a widow of any caste.",
      "The family is poor: the department asks for a BPL card and has used a family income cap (₹32,790 a year in its published guidelines).",
      "The bride is at least 18 years old.",
      "Apply before the marriage or within 30 days after it.",
    ],
    hi: [
      "परिवार पंजाब का स्थायी निवासी हो।",
      "दुल्हन अनुसूचित जाति, पिछड़ा वर्ग, ईसाई या आर्थिक रूप से कमज़ोर वर्ग के परिवार से हो, या किसी भी जाति की विधवा की बेटी हो।",
      "परिवार ग़रीब हो: विभाग BPL कार्ड माँगता है और पारिवारिक आय की सीमा रखता है (प्रकाशित दिशा-निर्देशों में ₹32,790 सालाना)।",
      "दुल्हन की उम्र कम से कम 18 साल हो।",
      "शादी से पहले या शादी के 30 दिन के अंदर आवेदन करें।",
    ],
  },
  exclusions: {
    en: [
      "Brides younger than 18.",
      "A third or later daughter from the same family.",
      "Applications made more than 30 days after the marriage.",
      "Applications not submitted through a Sewa Kendra.",
    ],
    hi: [
      "18 साल से कम उम्र की दुल्हन।",
      "एक ही परिवार की तीसरी या उसके बाद की बेटी।",
      "शादी के 30 दिन से ज़्यादा बाद किया गया आवेदन।",
      "सेवा केंद्र के ज़रिए न दिया गया आवेदन।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to your nearest Sewa Kendra before the wedding, or within 30 days after it.",
        "Fill in the Ashirwad form and submit it with the documents the Sewa Kendra asks for.",
        "Keep the receipt. After verification by the District Welfare Officer, the money is sent to the bank account.",
      ],
      hi: [
        "शादी से पहले या शादी के 30 दिन के अंदर नज़दीकी सेवा केंद्र जाएँ।",
        "आशीर्वाद योजना का फ़ॉर्म भरें और सेवा केंद्र के माँगे दस्तावेज़ों के साथ जमा करें।",
        "रसीद संभाल कर रखें। ज़िला कल्याण अधिकारी की जाँच के बाद पैसा बैंक खाते में भेजा जाता है।",
      ],
    },
  },
  faqs: [
    {
      q: { en: "Can I apply online?", hi: "क्या मैं ऑनलाइन आवेदन कर सकता/सकती हूँ?" },
      a: {
        en: "No. Since 28 January 2026 the department accepts Ashirwad applications only through Sewa Kendras.",
        hi: "नहीं। 28 जनवरी 2026 से विभाग आशीर्वाद योजना के आवेदन सिर्फ़ सेवा केंद्र के ज़रिए लेता है।",
      },
    },
    {
      q: { en: "We are a general-category family. Can we apply?", hi: "हम सामान्य वर्ग के हैं। क्या हम आवेदन कर सकते हैं?" },
      a: {
        en: "Yes, if your family belongs to the economically weaker section and meets the income condition, or if the bride is the daughter of a widow.",
        hi: "हाँ, अगर आपका परिवार आर्थिक रूप से कमज़ोर वर्ग में आता है और आय की शर्त पूरी करता है, या दुल्हन किसी विधवा की बेटी है।",
      },
    },
  ],

  officialUrl: "https://ashirwad.punjab.gov.in/ashirwad/",
  sources: [
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
    "https://ashirwad.punjab.gov.in/ashirwad/",
    "https://welfare.punjab.gov.in/Static/Scschemes.html",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2004,
  status: "active",
};

export default scheme;
