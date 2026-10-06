import { all, any, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-mukhyamantri-kanyadan-yojana",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Mukhyamantri Kanyadan Yojana (Rajasthan)", hi: "मुख्यमंत्री कन्यादान योजना (राजस्थान)" },
  aka: ["Hathlewa Yojana", "Sahyog evam Uphar Yojana", "Kanyadan Yojana"],
  shortDescription: {
    en: "Poor families in Rajasthan get ₹21,000 to ₹51,000 for a daughter's marriage at 18 or older, with more if she has passed Class 10 or graduated.",
    hi: "राजस्थान में ग़रीब परिवारों को 18 साल या उससे बड़ी बेटी की शादी पर ₹21,000 से ₹51,000 मिलते हैं, और बेटी 10वीं या स्नातक पास हो तो ज़्यादा।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Social Justice and Empowerment Department, Government of Rajasthan", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "daughter", "kanyadan", "hathlewa", "bpl", "rajasthan"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 21_000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("rajasthan"),
    labelled(any(isTrue("bpl"), isTrue("disabled")), {
      en: "BPL, Antyodaya or Astha card family (or another eligible group, such as a parent with a disability)",
      hi: "BPL, अंत्योदय या आस्था कार्ड वाला परिवार (या कोई दूसरा पात्र वर्ग, जैसे दिव्यांग माता-पिता)",
    }),
  ),

  details: {
    en: [
      "Mukhyamantri Kanyadan Yojana gives a marriage grant (hathlewa) to poor families in Rajasthan for the wedding of a daughter aged 18 or older. An extra incentive is added if the bride has passed Class 10 or graduated.",
      "The Social Justice and Empowerment Department runs the scheme. You apply online from one month before the wedding up to six months after it.",
    ],
    hi: [
      "मुख्यमंत्री कन्यादान योजना राजस्थान के ग़रीब परिवारों को 18 साल या उससे बड़ी बेटी की शादी पर हथलेवा राशि देती है। दुल्हन 10वीं या स्नातक पास हो तो अतिरिक्त प्रोत्साहन राशि जुड़ती है।",
      "यह योजना सामाजिक न्याय एवं अधिकारिता विभाग चलाता है। शादी से एक महीना पहले से लेकर शादी के छह महीने बाद तक ऑनलाइन आवेदन किया जा सकता है।",
    ],
  },
  benefits: {
    en: [
      "SC, ST and minority BPL families: ₹31,000; ₹41,000 if the bride passed Class 10; ₹51,000 if she is a graduate.",
      "Other BPL, Antyodaya and Astha card families, economically weak widows, parents with a disability, and girls in the Palanhar scheme: ₹21,000; ₹31,000 if Class 10 passed; ₹41,000 if a graduate.",
      "Women athletes who won a medal at state level get the same amounts for their own marriage.",
    ],
    hi: [
      "SC, ST और अल्पसंख्यक BPL परिवार: ₹31,000; दुल्हन 10वीं पास हो तो ₹41,000; स्नातक हो तो ₹51,000।",
      "बाक़ी BPL, अंत्योदय और आस्था कार्ड वाले परिवार, आर्थिक रूप से कमज़ोर विधवाएँ, दिव्यांग माता-पिता और पालनहार योजना की बेटियाँ: ₹21,000; 10वीं पास हो तो ₹31,000; स्नातक हो तो ₹41,000।",
      "राज्य स्तर पर पदक जीतने वाली महिला खिलाड़ियों को अपनी शादी पर यही राशि मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "The family lives in Rajasthan.",
      "The bride is 18 or older at the time of marriage.",
      "The family is BPL, Antyodaya or Astha card holding, or the mother is an economically weak widow, or a parent has 40% or more disability (and is not an income-tax payer), or the girl is a Palanhar beneficiary.",
    ],
    hi: [
      "परिवार राजस्थान में रहता हो।",
      "शादी के समय दुल्हन की उम्र 18 साल या ज़्यादा हो।",
      "परिवार BPL, अंत्योदय या आस्था कार्ड वाला हो, या माँ आर्थिक रूप से कमज़ोर विधवा हो, या माता-पिता में किसी की दिव्यांगता 40% या ज़्यादा हो (और वह आयकरदाता न हो), या बेटी पालनहार योजना की लाभार्थी हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to sso.rajasthan.gov.in (or visit an e-Mitra kiosk) between one month before and six months after the wedding.",
        "Fill in the Kanyadan form with your Jan Aadhaar and upload the BPL/category, age and marriage proofs and mark sheets.",
        "The block social security officer checks the application and the money is paid by DBT.",
      ],
      hi: [
        "शादी से एक महीना पहले से शादी के छह महीने बाद तक sso.rajasthan.gov.in पर लॉग इन करें (या ई-मित्र केंद्र जाएँ)।",
        "जन आधार से कन्यादान फ़ॉर्म भरें और BPL/श्रेणी, उम्र, शादी के प्रमाण और अंकतालिकाएँ अपलोड करें।",
        "ब्लॉक सामाजिक सुरक्षा अधिकारी आवेदन जाँचते हैं और पैसा DBT से मिलता है।",
      ],
    },
  },
  documents: {
    en: ["Jan Aadhaar card", "BPL/Antyodaya/Astha card or other category proof", "Bride's age proof", "Marriage proof or invitation card", "Class 10 or graduation mark sheet, for the incentive", "Bank account details"],
    hi: ["जन आधार कार्ड", "BPL/अंत्योदय/आस्था कार्ड या दूसरी श्रेणी का प्रमाण", "दुल्हन की उम्र का प्रमाण", "शादी का प्रमाण या निमंत्रण पत्र", "प्रोत्साहन राशि के लिए 10वीं या स्नातक की अंकतालिका", "बैंक खाते का विवरण"],
  },

  officialUrl: "https://sso.rajasthan.gov.in/",
  sources: [
    "https://sje.rajasthan.gov.in/siteadmin/Uploads/202308221032061543.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
