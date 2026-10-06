import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karpoori-thakur-kisan-samman-nidhi",
  tier: "compact",
  overlapGroup: "farmer-income",
  name: { en: "Jannayak Karpoori Thakur Kisan Samman Nidhi Yojana", hi: "जननायक कर्पूरी ठाकुर किसान सम्मान निधि योजना" },
  aka: ["Karpoori Thakur Kisan Samman Nidhi", "Bihar 3000 farmers"],
  shortDescription: {
    en: "A new Bihar top-up to PM-KISAN announced in the 2026–27 budget: farmers are to get ₹3,000 a year more from the state, taking their total to ₹9,000.",
    hi: "2026–27 के बजट में घोषित PM-KISAN पर बिहार की नई अतिरिक्त राशि: किसानों को राज्य से साल में ₹3,000 और मिलने हैं, जिससे कुल ₹9,000 हो जाएँगे।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Agriculture Department, Government of Bihar", hi: "कृषि विभाग, बिहार सरकार" },
  categories: ["agriculture"],
  tags: ["farmer", "pm kisan", "income support", "3000", "kisan samman nidhi", "bihar"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("bihar"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "In its 2026–27 budget, the Bihar government announced the Jannayak Karpoori Thakur Kisan Samman Nidhi Yojana. It adds ₹3,000 a year from the state on top of the ₹6,000 farmers get from the central PM-KISAN scheme.",
      "Payments are expected to go by DBT to farmers already on the PM-KISAN list, without a separate form. Detailed rules and the first payment date had not been officially announced when we last checked.",
    ],
    hi: [
      "बिहार सरकार ने 2026–27 के बजट में जननायक कर्पूरी ठाकुर किसान सम्मान निधि योजना की घोषणा की। इसमें केंद्र की PM-KISAN योजना से मिलने वाले ₹6,000 के ऊपर राज्य सरकार साल में ₹3,000 और देगी।",
      "उम्मीद है कि पैसा DBT से उन किसानों को मिलेगा जो पहले से PM-KISAN सूची में हैं, अलग फ़ॉर्म के बिना। हमारी पिछली जाँच तक विस्तृत नियम और पहली किस्त की तारीख आधिकारिक रूप से घोषित नहीं हुई थी।",
    ],
  },
  benefits: {
    en: ["₹3,000 a year from the state, as announced in the budget.", "Together with PM-KISAN, ₹9,000 a year in total."],
    hi: ["बजट में घोषित, राज्य की ओर से साल में ₹3,000।", "PM-KISAN के साथ मिलाकर साल में कुल ₹9,000।"],
  },
  eligibilityText: {
    en: [
      "Farmer in Bihar.",
      "Expected to cover farmers who already get PM-KISAN; final rules are awaited.",
      "Registered on the Bihar Agriculture Department's DBT portal with an Aadhaar-linked bank account.",
    ],
    hi: [
      "बिहार के किसान।",
      "उम्मीद है कि इसमें वे किसान शामिल होंगे जिन्हें पहले से PM-KISAN मिलता है; अंतिम नियमों का इंतज़ार है।",
      "बिहार कृषि विभाग के DBT पोर्टल पर आधार से जुड़े बैंक खाते के साथ रजिस्टर हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Make sure you are registered on pmkisan.gov.in and on dbtagriculture.bihar.gov.in, with e-KYC done.",
        "Watch the Agriculture Department's notices for the start of payments and any extra steps.",
      ],
      hi: [
        "पक्का करें कि आप pmkisan.gov.in और dbtagriculture.bihar.gov.in पर रजिस्टर हैं और e-KYC पूरी है।",
        "भुगतान शुरू होने और किसी अतिरिक्त प्रक्रिया के लिए कृषि विभाग की सूचनाएँ देखते रहें।",
      ],
    },
  },

  officialUrl: "https://dbtagriculture.bihar.gov.in/",
  sources: [
    "https://prsindia.org/budgets/states/bihar-budget-analysis-2026-27",
    "https://dbtagriculture.bihar.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
