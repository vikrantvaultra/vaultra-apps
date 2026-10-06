import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "birsa-munda-krishi-kranti-yojana",
  tier: "compact",
  name: { en: "Birsa Munda Krishi Kranti Yojana", hi: "बिरसा मुंडा कृषि क्रांति योजना" },
  aka: ["Birsa Munda Krushi Kranti", "ST farmer well subsidy"],
  shortDescription: {
    en: "Scheduled Tribe farmers in Maharashtra get grants of up to ₹4 lakh for a new well, plus help for well repair, farm-pond lining, pumps, drip and sprinkler sets and farm tools.",
    hi: "महाराष्ट्र के अनुसूचित जनजाति किसानों को नए कुएँ के लिए ₹4 लाख तक और कुआँ मरम्मत, खेत-तालाब की लाइनिंग, पंप, ड्रिप-स्प्रिंकलर और खेती के औज़ारों के लिए अनुदान मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Agriculture Department, Government of Maharashtra", hi: "कृषि विभाग, महाराष्ट्र सरकार" },
  categories: ["agriculture", "social-welfare"],
  tags: ["tribal farmer", "st farmer", "well subsidy", "irrigation", "mahadbt", "adivasi"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("maharashtra"), when("caste", "in", ["st", "pvtg"]), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Birsa Munda Krishi Kranti Yojana helps tribal farmers in Maharashtra, both inside and outside tribal sub-plan areas, build irrigation on their land and raise their farm income.",
      "Farmers apply on the MahaDBT portal and are selected by lottery within the yearly budget. A fixed grant per item is paid by DBT after the work is checked. The ₹1.5 lakh income limit was removed from 2024-25.",
    ],
    hi: [
      "बिरसा मुंडा कृषि क्रांति योजना महाराष्ट्र के आदिवासी किसानों (आदिवासी उपयोजना क्षेत्र के अंदर और बाहर, दोनों) को अपनी ज़मीन पर सिंचाई बनाने और खेती की कमाई बढ़ाने में मदद करती है।",
      "किसान MahaDBT पोर्टल पर आवेदन करते हैं और सालाना बजट के भीतर लॉटरी से चुने जाते हैं। हर चीज़ के लिए तय अनुदान काम की जाँच के बाद DBT से मिलता है। ₹1.5 लाख की आय सीमा 2024-25 से हटा दी गई है।",
    ],
  },
  benefits: {
    en: [
      "New well: up to ₹4 lakh; old well repair: up to ₹1 lakh.",
      "Plastic lining for a farm pond: 90%, up to ₹2 lakh.",
      "In-well boring: up to ₹40,000; borewell: up to ₹50,000.",
      "Electric pump: 90%, up to ₹40,000; solar pump: 90%, up to ₹50,000.",
      "Drip set: 90%, up to ₹97,000; sprinkler set: 90%, up to ₹47,000; pipes: up to ₹50,000.",
      "Farm tools: up to ₹50,000; kitchen garden: ₹5,000.",
    ],
    hi: [
      "नया कुआँ: ₹4 लाख तक; पुराने कुएँ की मरम्मत: ₹1 लाख तक।",
      "खेत-तालाब की प्लास्टिक लाइनिंग: 90%, ₹2 लाख तक।",
      "कुएँ में बोरिंग: ₹40,000 तक; बोरवेल: ₹50,000 तक।",
      "बिजली पंप: 90%, ₹40,000 तक; सोलर पंप: 90%, ₹50,000 तक।",
      "ड्रिप सेट: 90%, ₹97,000 तक; स्प्रिंकलर सेट: 90%, ₹47,000 तक; पाइप: ₹50,000 तक।",
      "खेती के औज़ार: ₹50,000 तक; किचन गार्डन: ₹5,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Scheduled Tribe farmer with a valid caste certificate.",
      "Owns 0.40 to 6 hectares of farmland in their name (7/12 and 8-A); the upper limit does not apply to BPL farmers, and small holders can apply together as a group.",
      "Has Aadhaar and an Aadhaar-linked bank account.",
    ],
    hi: [
      "वैध जाति प्रमाण पत्र वाला अनुसूचित जनजाति किसान।",
      "अपने नाम पर 0.40 से 6 हेक्टेयर खेती की ज़मीन हो (7/12 और 8-अ); BPL किसानों पर ऊपरी सीमा लागू नहीं, और छोटे किसान मिलकर समूह में आवेदन कर सकते हैं।",
      "आधार और आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the MahaDBT farmer portal (mahadbt.maharashtra.gov.in) with your Aadhaar.",
        "Fill in your land details and choose the items you need under Birsa Munda Krishi Kranti Yojana.",
        "If selected, upload documents, complete the work in time and claim the grant.",
      ],
      hi: [
        "आधार से MahaDBT किसान पोर्टल (mahadbt.maharashtra.gov.in) पर रजिस्टर करें।",
        "ज़मीन की जानकारी भरें और बिरसा मुंडा कृषि क्रांति योजना में ज़रूरी चीज़ें चुनें।",
        "चुने जाने पर दस्तावेज़ अपलोड करें, समय पर काम पूरा करें और अनुदान का दावा करें।",
      ],
    },
  },
  documents: {
    en: ["Caste certificate", "7/12 and 8-A land extracts", "Aadhaar card", "Bank passbook"],
    hi: ["जाति प्रमाण पत्र", "7/12 और 8-अ ज़मीन के उतारे", "आधार कार्ड", "बैंक पासबुक"],
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/Farmer/Login/Login",
  sources: [
    "https://www.zpsatara.gov.in/?p=7367",
    "https://nagarzp.gov.in/en/scheme/department-of-agriculture-zilla-parishad-ahilyanagar/",
    "https://mahadbt.maharashtra.gov.in/Farmer/SchemeData/SchemeData",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
