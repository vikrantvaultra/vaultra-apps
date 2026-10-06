import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajiv-yuva-vikasam",
  tier: "compact",
  name: { en: "Rajiv Yuva Vikasam", hi: "राजीव युवा विकासम" },
  aka: ["Rajiv Yuva Vikasam Scheme", "RYV", "Telangana self employment scheme youth"],
  shortDescription: {
    en: "Telangana helps unemployed SC, ST, BC, minority and other weaker-section youth start a small business, with a large share of the unit cost given as a government subsidy.",
    hi: "तेलंगाना सरकार बेरोज़गार SC, ST, BC, अल्पसंख्यक और दूसरे कमज़ोर वर्गों के युवाओं को छोटा कारोबार शुरू करने में मदद करती है, जिसमें यूनिट की लागत का बड़ा हिस्सा सरकारी सब्सिडी के रूप में मिलता है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "SC Development, Tribal Welfare, BC Welfare and Minorities Welfare Departments (through their finance corporations), Government of Telangana",
    hi: "SC विकास, आदिवासी कल्याण, BC कल्याण और अल्पसंख्यक कल्याण विभाग (अपने वित्त निगमों के ज़रिए), तेलंगाना सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["self employment", "subsidy", "youth", "business loan", "unemployed", "sc st bc", "telangana"],
  benefitType: "loan",
  isDBT: true,
  kundliHouse: "business",
  eligibility: all(residentOf("telangana")),

  details: {
    en: [
      "Rajiv Yuva Vikasam is Telangana's self-employment scheme for unemployed youth from SC, ST, BC, minority and economically weaker families. Units are funded through the SC, ST, BC and minority finance corporations, with a government subsidy and a bank loan for the rest.",
      "It is one of the state's biggest schemes: the 2026-27 budget set aside ₹5,800 crore for it, plus ₹200 crore for converting auto-rickshaws in the Hyderabad core area to electric.",
    ],
    hi: [
      "राजीव युवा विकासम तेलंगाना की स्वरोज़गार योजना है, जो SC, ST, BC, अल्पसंख्यक और आर्थिक रूप से कमज़ोर परिवारों के बेरोज़गार युवाओं के लिए है। यूनिट का पैसा SC, ST, BC और अल्पसंख्यक वित्त निगमों के ज़रिए मिलता है, जिसमें सरकारी सब्सिडी होती है और बाक़ी बैंक लोन।",
      "यह राज्य की सबसे बड़ी योजनाओं में से एक है: 2026-27 के बजट में इसके लिए ₹5,800 करोड़ रखे गए, और हैदराबाद के कोर इलाक़े में ऑटो-रिक्शा को इलेक्ट्रिक बनाने के लिए ₹200 करोड़ अलग से।",
    ],
  },
  benefits: {
    en: [
      "Government subsidy on the cost of a self-employment unit (small business, trade, service or farm-related unit).",
      "Bank loan for the remaining cost, arranged through the welfare corporation.",
    ],
    hi: [
      "स्वरोज़गार यूनिट (छोटा कारोबार, व्यापार, सेवा या खेती से जुड़ी यूनिट) की लागत पर सरकारी सब्सिडी।",
      "बाक़ी लागत के लिए बैंक लोन, कल्याण निगम के ज़रिए।",
    ],
  },
  eligibilityText: {
    en: [
      "You are an unemployed young person from Telangana belonging to SC, ST, BC, minority or an economically weaker section.",
      "Your family income and age must be within the limits in the scheme guidelines.",
      "You have not taken a similar subsidy unit from a welfare corporation recently.",
    ],
    hi: [
      "आप तेलंगाना के बेरोज़गार युवा हैं और SC, ST, BC, अल्पसंख्यक या आर्थिक रूप से कमज़ोर वर्ग से हैं।",
      "आपके परिवार की आय और आपकी उम्र योजना के दिशानिर्देशों की सीमा में होनी चाहिए।",
      "आपने हाल में किसी कल्याण निगम से ऐसी सब्सिडी यूनिट नहीं ली है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When applications are open, apply online on the Telangana OBMMS portal (tgobmms.cgg.gov.in) under your community's corporation.",
        "Choose your unit, upload documents, and attend the verification and bank interview when called.",
      ],
      hi: [
        "आवेदन खुलने पर तेलंगाना OBMMS पोर्टल (tgobmms.cgg.gov.in) पर अपने समुदाय के निगम के तहत ऑनलाइन आवेदन करें।",
        "अपनी यूनिट चुनें, दस्तावेज़ अपलोड करें, और बुलाए जाने पर जाँच और बैंक इंटरव्यू में जाएँ।",
      ],
    },
  },

  officialUrl: "https://tgobmms.cgg.gov.in/",
  sources: [
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
    "https://prsindia.org/files/budget/budget_state/telangana/2026/Budget_Analysis_2026-27-TS.pdf",
    "https://tgobmms.cgg.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
