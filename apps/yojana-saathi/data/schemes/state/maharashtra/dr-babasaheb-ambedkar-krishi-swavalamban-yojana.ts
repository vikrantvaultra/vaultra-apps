import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dr-babasaheb-ambedkar-krishi-swavalamban-yojana",
  tier: "compact",
  name: { en: "Dr. Babasaheb Ambedkar Krishi Swavalamban Yojana", hi: "डॉ. बाबासाहेब आंबेडकर कृषि स्वावलंबन योजना" },
  aka: ["Ambedkar Krishi Swavalamban", "SC farmer well subsidy"],
  shortDescription: {
    en: "Scheduled Caste and Neo-Buddhist farmers in Maharashtra get grants of up to ₹4 lakh for a new well, plus help for well repair, pumps, drip and sprinkler sets, pipes and farm tools.",
    hi: "महाराष्ट्र के अनुसूचित जाति और नवबौद्ध किसानों को नए कुएँ के लिए ₹4 लाख तक और कुआँ मरम्मत, पंप, ड्रिप-स्प्रिंकलर, पाइप और खेती के औज़ारों के लिए अनुदान मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Agriculture Department, Government of Maharashtra", hi: "कृषि विभाग, महाराष्ट्र सरकार" },
  categories: ["agriculture", "social-welfare"],
  tags: ["sc farmer", "well subsidy", "irrigation", "drip", "mahadbt", "neo buddhist"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("maharashtra"), when("caste", "eq", "sc"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "This scheme helps Scheduled Caste and Neo-Buddhist farmers in Maharashtra get assured irrigation and become self-reliant. It is run by the Agriculture Department through the Zilla Parishads.",
      "You apply on the MahaDBT farmer portal and choose the items you need. Selected farmers get a fixed grant per item, paid by DBT after the work is checked. The income limit of ₹1.5 lakh was removed from 2024-25.",
    ],
    hi: [
      "यह योजना महाराष्ट्र के अनुसूचित जाति और नवबौद्ध किसानों को पक्की सिंचाई दिलाकर आत्मनिर्भर बनाने में मदद करती है। इसे कृषि विभाग ज़िला परिषदों के ज़रिए चलाता है।",
      "आप MahaDBT किसान पोर्टल पर आवेदन करके ज़रूरी चीज़ें चुनते हैं। चुने गए किसानों को हर चीज़ के लिए तय अनुदान, काम की जाँच के बाद DBT से मिलता है। ₹1.5 लाख की आय सीमा 2024-25 से हटा दी गई है।",
    ],
  },
  benefits: {
    en: [
      "New well: up to ₹4 lakh.",
      "Old well repair: up to ₹1 lakh.",
      "Drip set: 90% of cost, up to ₹97,000; sprinkler set: 90%, up to ₹47,000.",
      "Electric pump: 90%, up to ₹40,000; solar pump: 90%, up to ₹50,000.",
      "HDPE/PVC pipes: up to ₹50,000; farm tools: up to ₹50,000; kitchen garden: ₹5,000.",
    ],
    hi: [
      "नया कुआँ: ₹4 लाख तक।",
      "पुराने कुएँ की मरम्मत: ₹1 लाख तक।",
      "ड्रिप सेट: लागत का 90%, ₹97,000 तक; स्प्रिंकलर सेट: 90%, ₹47,000 तक।",
      "बिजली पंप: 90%, ₹40,000 तक; सोलर पंप: 90%, ₹50,000 तक।",
      "HDPE/PVC पाइप: ₹50,000 तक; खेती के औज़ार: ₹50,000 तक; किचन गार्डन: ₹5,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Scheduled Caste or Neo-Buddhist farmer with a valid caste certificate.",
      "Owns 0.40 to 6 hectares of farmland in their name (7/12 and 8-A); the upper limit does not apply to BPL farmers.",
      "Has Aadhaar and an Aadhaar-linked bank account.",
    ],
    hi: [
      "वैध जाति प्रमाण पत्र वाला अनुसूचित जाति या नवबौद्ध किसान।",
      "अपने नाम पर 0.40 से 6 हेक्टेयर खेती की ज़मीन हो (7/12 और 8-अ); BPL किसानों पर ऊपरी सीमा लागू नहीं।",
      "आधार और आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the MahaDBT farmer portal (mahadbt.maharashtra.gov.in) with your Aadhaar.",
        "Fill in your land details and choose the items you need under this scheme.",
        "If selected in the lottery, upload documents, finish the work within the time given and claim the grant.",
      ],
      hi: [
        "आधार से MahaDBT किसान पोर्टल (mahadbt.maharashtra.gov.in) पर रजिस्टर करें।",
        "ज़मीन की जानकारी भरें और इस योजना में ज़रूरी चीज़ें चुनें।",
        "लॉटरी में चुने जाने पर दस्तावेज़ अपलोड करें, तय समय में काम पूरा करें और अनुदान का दावा करें।",
      ],
    },
  },
  documents: {
    en: ["Caste certificate", "7/12 and 8-A land extracts", "Aadhaar card", "Bank passbook"],
    hi: ["जाति प्रमाण पत्र", "7/12 और 8-अ ज़मीन के उतारे", "आधार कार्ड", "बैंक पासबुक"],
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/Farmer/Login/Login",
  sources: [
    "https://www.zpsatara.gov.in/?p=7345",
    "https://chanda.nic.in/en/scheme/dr-babasaheb-ambedkar-agricultural-self-reliance-scheme",
    "https://mahadbt.maharashtra.gov.in/Farmer/SchemeData/SchemeData",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
