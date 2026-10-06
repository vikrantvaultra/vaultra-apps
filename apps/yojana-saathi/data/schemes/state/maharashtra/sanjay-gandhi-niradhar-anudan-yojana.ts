import { all, ageBetween, labelled, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sanjay-gandhi-niradhar-anudan-yojana",
  tier: "full",
  overlapGroup: "widow-pension",
  name: { en: "Sanjay Gandhi Niradhar Anudan Yojana", hi: "संजय गांधी निराधार अनुदान योजना" },
  aka: ["Sanjay Gandhi Niradhar Yojana", "Niradhar Pension", "SGNY"],
  shortDescription: {
    en: "Destitute people in Maharashtra aged 18 to 65, such as widows, deserted women, orphans and people with disabilities or serious illness, get ₹1,500 a month.",
    hi: "महाराष्ट्र में 18 से 65 साल के निराधार लोगों, जैसे विधवा, परित्यक्ता महिलाएँ, अनाथ, दिव्यांग या गंभीर बीमारी वाले लोगों को हर महीने ₹1,500 मिलते हैं।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Social Justice and Special Assistance Department (through district Collectorates), Government of Maharashtra",
    hi: "सामाजिक न्याय एवं विशेष सहायता विभाग (ज़िला कलेक्टर कार्यालयों के ज़रिए), महाराष्ट्र सरकार",
  },
  categories: ["social-welfare", "women-child", "disability"],
  tags: ["pension", "widow", "destitute", "disability", "niradhar", "orphan", "maharashtra"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 65 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("maharashtra"),
    ...ageBetween(18, 65),
    labelled(incomeUpTo(21_000), { en: "Family income up to ₹21,000 a year", hi: "परिवार की सालाना आय ₹21,000 तक" }),
  ),

  details: {
    en: [
      "Sanjay Gandhi Niradhar Anudan Yojana is Maharashtra's monthly support for people who have no one to depend on and cannot earn enough to live.",
      "It covers people under 65 in several groups: widows, divorced or deserted women without maintenance, orphans, persons with disabilities, transgender persons, and people who cannot work because of serious illness such as TB, cancer, AIDS, leprosy or sickle cell disease.",
      "Each beneficiary gets ₹1,500 a month by DBT into their bank account. Applications are handled by the Sanjay Gandhi Yojana branch at the tehsil office.",
    ],
    hi: [
      "संजय गांधी निराधार अनुदान योजना महाराष्ट्र सरकार की मासिक मदद है, उन लोगों के लिए जिनका कोई सहारा नहीं और जो गुज़ारे लायक कमा नहीं पाते।",
      "इसमें 65 साल से कम उम्र के कई तरह के लोग आते हैं: विधवा, बिना गुज़ारा भत्ते वाली तलाकशुदा या परित्यक्ता महिलाएँ, अनाथ, दिव्यांग, ट्रांसजेंडर, और वे लोग जो TB, कैंसर, AIDS, कुष्ठ रोग या सिकल सेल जैसी गंभीर बीमारी के कारण काम नहीं कर सकते।",
      "हर लाभार्थी को हर महीने ₹1,500 DBT से बैंक खाते में मिलते हैं। आवेदन तहसील कार्यालय की संजय गांधी योजना शाखा देखती है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month, paid into your bank account.",
      "Support continues as long as you stay eligible (for example, until children start earning or you turn 65).",
      "At 65 you can move to the Shravanbal old-age pension if you still qualify.",
    ],
    hi: [
      "हर महीने ₹1,500, सीधे बैंक खाते में।",
      "जब तक आप पात्र रहते हैं, मदद मिलती रहती है (जैसे बच्चों के कमाने लगने तक या 65 साल की उम्र तक)।",
      "65 साल के बाद, पात्र होने पर, आप श्रावणबाळ वृद्धावस्था पेंशन में जा सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Maharashtra, aged 18 to 65.",
      "Belongs to a destitute group: widow, divorced or deserted woman without maintenance, orphan, person with 40% or more disability, transgender person, or someone unable to work due to serious illness (TB, paralysis, cancer, AIDS, leprosy, sickle cell and similar).",
      "Other covered groups include wives of prisoners serving long sentences, women freed from prostitution, devadasis and unmarried women over 35 with no support.",
      "Annual family income up to ₹21,000.",
    ],
    hi: [
      "महाराष्ट्र के निवासी, उम्र 18 से 65 साल।",
      "निराधार समूह में हों: विधवा, बिना गुज़ारा भत्ते वाली तलाकशुदा या परित्यक्ता महिला, अनाथ, 40% या उससे ज़्यादा दिव्यांगता वाले व्यक्ति, ट्रांसजेंडर, या गंभीर बीमारी (TB, लकवा, कैंसर, AIDS, कुष्ठ रोग, सिकल सेल आदि) के कारण काम न कर पाने वाले लोग।",
      "लंबी सज़ा काट रहे कैदियों की पत्नियाँ, वेश्यावृत्ति से मुक्त कराई गई महिलाएँ, देवदासी और 35 साल से ज़्यादा उम्र की बेसहारा अविवाहित महिलाएँ भी शामिल हैं।",
      "परिवार की सालाना आय ₹21,000 तक हो।",
    ],
  },
  exclusions: {
    en: [
      "Family income above ₹21,000 a year.",
      "People aged 65 or more (they apply for the Shravanbal pension instead).",
      "Payments stop when the reason for support ends, for example when a widow remarries or the family income rises above the limit.",
    ],
    hi: [
      "परिवार की सालाना आय ₹21,000 से ज़्यादा हो।",
      "65 साल या उससे ज़्यादा उम्र के लोग (वे श्रावणबाळ पेंशन के लिए आवेदन करते हैं)।",
      "मदद का कारण ख़त्म होने पर पैसा रुक जाता है, जैसे विधवा के दोबारा शादी करने पर या परिवार की आय सीमा से ऊपर जाने पर।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Aaple Sarkar portal (aaplesarkar.mahaonline.gov.in) and register.",
        "Choose the Sanjay Gandhi Niradhar Anudan Yojana service under the Social Justice department, fill the form and upload documents.",
        "Track the application online. After approval, the monthly amount comes to your bank account.",
      ],
      hi: [
        "आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in) पर जाएँ और रजिस्टर करें।",
        "सामाजिक न्याय विभाग में संजय गांधी निराधार अनुदान योजना की सेवा चुनें, फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "आवेदन की स्थिति ऑनलाइन देखें। मंज़ूरी के बाद हर महीने की राशि बैंक खाते में आएगी।",
      ],
    },
    offline: {
      en: [
        "Get the form from the Sanjay Gandhi Yojana branch at your tehsil office, the Talathi office or an Aaple Sarkar Seva Kendra.",
        "Fill it in and attach the documents.",
        "Submit it at the tehsil office and keep the receipt. A committee at the taluka level approves the cases.",
      ],
      hi: [
        "तहसील कार्यालय की संजय गांधी योजना शाखा, तलाठी कार्यालय या आपले सरकार सेवा केंद्र से फ़ॉर्म लें।",
        "फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "तहसील कार्यालय में जमा करें और रसीद लें। तालुका स्तर की समिति मामलों को मंज़ूरी देती है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Proof of residence in Maharashtra",
      "Age proof (school leaving certificate, birth certificate or similar)",
      "Income certificate from the Tehsildar",
      "Proof of your category: husband's death certificate, disability certificate, medical certificate from a government hospital, or similar",
      "Bank passbook of an Aadhaar-linked account",
    ],
    hi: [
      "आधार कार्ड",
      "महाराष्ट्र में निवास का प्रमाण",
      "उम्र का प्रमाण (स्कूल छोड़ने का प्रमाण पत्र, जन्म प्रमाण पत्र आदि)",
      "तहसीलदार का आय प्रमाण पत्र",
      "आपकी श्रेणी का सबूत: पति का मृत्यु प्रमाण पत्र, दिव्यांगता प्रमाण पत्र, सरकारी अस्पताल का मेडिकल प्रमाण पत्र आदि",
      "आधार से जुड़े बैंक खाते की पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "Can I get this along with the central widow or disability pension?", hi: "क्या यह केंद्र की विधवा या दिव्यांग पेंशन के साथ मिल सकती है?" },
      a: {
        en: "In Maharashtra the central pensions for BPL widows and disabled people are paid together with the state share, so the total you receive is the state rate. You don't get two separate full pensions.",
        hi: "महाराष्ट्र में BPL विधवाओं और दिव्यांगों की केंद्रीय पेंशन राज्य के हिस्से के साथ जोड़कर दी जाती है, इसलिए आपको कुल राशि राज्य की दर से मिलती है। दो अलग-अलग पूरी पेंशन नहीं मिलतीं।",
      },
    },
    {
      q: { en: "What happens when I turn 65?", hi: "65 साल का होने पर क्या होगा?" },
      a: {
        en: "This scheme is for people under 65. After that, you can apply for the Shravanbal Seva Rajya Nivruttivetan Yojana, the state's old-age pension, at the same office.",
        hi: "यह योजना 65 साल से कम उम्र वालों के लिए है। उसके बाद आप उसी कार्यालय में श्रावणबाळ सेवा राज्य निवृत्तिवेतन योजना (राज्य की वृद्धावस्था पेंशन) के लिए आवेदन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://aaplesarkar.mahaonline.gov.in/",
  sources: [
    "https://gadchiroli.gov.in/sanjay-gandhi-yojana/",
    "https://latur.gov.in/en/sgy/",
    "https://sas.mahait.org/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1980,
  status: "active",
};

export default scheme;
