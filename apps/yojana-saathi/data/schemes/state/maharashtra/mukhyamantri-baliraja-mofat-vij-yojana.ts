import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-baliraja-mofat-vij-yojana",
  tier: "full",
  name: { en: "Mukhyamantri Baliraja Mofat Vij Yojana", hi: "मुख्यमंत्री बळीराजा मोफत वीज योजना" },
  aka: ["Baliraja free electricity", "Baliraja Vij Savlat Yojana", "free farm pump electricity"],
  shortDescription: {
    en: "Farmers in Maharashtra get free electricity for farm pumps of up to 7.5 HP; the state pays the power bill to Mahavitaran on their behalf.",
    hi: "महाराष्ट्र के किसानों को 7.5 HP तक के खेती पंप के लिए मुफ़्त बिजली मिलती है; बिजली का बिल राज्य सरकार महावितरण को भरती है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Energy Department, Government of Maharashtra (implemented by MSEDCL / Mahavitaran)",
    hi: "ऊर्जा विभाग, महाराष्ट्र सरकार (महावितरण के ज़रिए)",
  },
  categories: ["agriculture", "energy-savings"],
  tags: ["free electricity", "farm pump", "farmer", "mahavitaran", "agriculture pump", "maharashtra"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("maharashtra"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Under Mukhyamantri Baliraja Mofat Vij Yojana, farmers with agricultural pump connections of up to 7.5 HP do not pay for the electricity their pumps use. The state government pays Mahavitaran instead.",
      "The scheme started in April 2024 and is set to run until March 2029. It covers most small and medium farmers who irrigate with electric pumps.",
      "There is no separate application. If your farm pump connection is in the agriculture category and its load is 7.5 HP or less, the benefit applies to that connection.",
    ],
    hi: [
      "मुख्यमंत्री बळीराजा मोफत वीज योजना में 7.5 HP तक के कृषि पंप कनेक्शन वाले किसानों को पंप की बिजली का पैसा नहीं देना पड़ता। इसका भुगतान राज्य सरकार महावितरण को करती है।",
      "यह योजना अप्रैल 2024 से शुरू हुई है और मार्च 2029 तक चलनी है। इसमें बिजली के पंप से सिंचाई करने वाले ज़्यादातर छोटे और मध्यम किसान आते हैं।",
      "अलग से आवेदन नहीं करना होता। अगर आपका पंप कनेक्शन कृषि श्रेणी में है और उसका लोड 7.5 HP या उससे कम है, तो लाभ उसी कनेक्शन पर लागू होता है।",
    ],
  },
  benefits: {
    en: [
      "Free electricity for agricultural pumps of up to 7.5 HP.",
      "No monthly pump electricity bill to pay while the scheme runs (till March 2029).",
      "The state pays the bill directly to Mahavitaran.",
    ],
    hi: [
      "7.5 HP तक के कृषि पंप के लिए मुफ़्त बिजली।",
      "योजना चलने तक (मार्च 2029 तक) पंप की बिजली का मासिक बिल नहीं भरना।",
      "बिल का पैसा राज्य सरकार सीधे महावितरण को देती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in Maharashtra with a Mahavitaran agricultural pump connection.",
      "The sanctioned load of the pump is 7.5 HP or less.",
      "The electricity is used for farming, not for commercial or other purposes.",
    ],
    hi: [
      "महाराष्ट्र का किसान जिसके पास महावितरण का कृषि पंप कनेक्शन हो।",
      "पंप का मंज़ूर लोड 7.5 HP या उससे कम हो।",
      "बिजली खेती के लिए इस्तेमाल हो, व्यावसायिक या दूसरे काम के लिए नहीं।",
    ],
  },
  exclusions: {
    en: [
      "Pumps with a load above 7.5 HP.",
      "Connections used for commercial or non-farm purposes.",
      "Non-agricultural connections such as your home's electricity bill.",
    ],
    hi: [
      "7.5 HP से ज़्यादा लोड वाले पंप।",
      "व्यावसायिक या खेती के अलावा दूसरे काम में इस्तेमाल होने वाले कनेक्शन।",
      "गैर-कृषि कनेक्शन, जैसे घर का बिजली बिल।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed: eligible agricultural connections are covered automatically.",
        "If you still get a bill for a pump of 7.5 HP or less, contact your Mahavitaran section office with your consumer number.",
        "If you don't yet have a pump connection, apply for a new agricultural connection with Mahavitaran.",
      ],
      hi: [
        "आवेदन की ज़रूरत नहीं: पात्र कृषि कनेक्शन अपने-आप शामिल हैं।",
        "अगर 7.5 HP या उससे कम के पंप का बिल फिर भी आए, तो उपभोक्ता नंबर के साथ महावितरण के सेक्शन ऑफ़िस से संपर्क करें।",
        "अगर अभी पंप कनेक्शन नहीं है, तो महावितरण में नए कृषि कनेक्शन के लिए आवेदन करें।",
      ],
    },
  },
  documents: {
    en: ["Mahavitaran consumer number of the agricultural pump connection", "7/12 extract (for a new connection)", "Aadhaar card"],
    hi: ["कृषि पंप कनेक्शन का महावितरण उपभोक्ता नंबर", "7/12 उतारा (नए कनेक्शन के लिए)", "आधार कार्ड"],
  },
  faqs: [
    {
      q: { en: "What about my old unpaid pump bills?", hi: "पंप के पुराने बकाया बिलों का क्या होगा?" },
      a: {
        en: "The free power covers usage from April 2024. In July 2026 the government announced a waiver of old pump bill arrears for pumps up to 7.5 HP; ask your Mahavitaran office how it applies to your connection.",
        hi: "मुफ़्त बिजली अप्रैल 2024 से होने वाले इस्तेमाल पर है। जुलाई 2026 में सरकार ने 7.5 HP तक के पंपों के पुराने बकाया बिल माफ़ करने की घोषणा की है; अपने कनेक्शन पर यह कैसे लागू होगा, यह महावितरण कार्यालय से पूछें।",
      },
    },
    {
      q: { en: "My pump is 10 HP. Do I get anything?", hi: "मेरा पंप 10 HP का है। क्या मुझे कुछ मिलेगा?" },
      a: {
        en: "No. Only pumps of 7.5 HP or less get free power. Larger pumps continue on the normal agricultural tariff.",
        hi: "नहीं। सिर्फ़ 7.5 HP या उससे कम के पंप को मुफ़्त बिजली मिलती है। बड़े पंपों पर सामान्य कृषि दर लागू रहती है।",
      },
    },
  ],

  officialUrl: "https://www.mahadiscom.in/",
  sources: [
    "https://www.mahadiscom.in/",
    "https://www.theweek.in/wire-updates/national/2025/09/03/bes12-mh-power-scheme-funds.html",
    "https://www.theweek.in/news/india/2026/07/16/maharashtra-farmer-electricity-bill-waiver.amp.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
