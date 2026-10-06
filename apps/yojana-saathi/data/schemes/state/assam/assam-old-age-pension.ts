import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "assam-old-age-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Swahid Kushal Konwar Sarbajanin Briddha Pension Achoni", hi: "स्वाहिद कुशल कोंवर सर्वजनीन वृद्धा पेंशन आसोनी" },
  aka: ["Assam old age pension", "SKKSBPA", "Orunodoi Plus pension"],
  shortDescription: {
    en: "Elderly people in Assam get a monthly state old age pension, now paid through Orunodoi Plus.",
    hi: "असम के बुज़ुर्गों को राज्य की मासिक वृद्धावस्था पेंशन मिलती है, जो अब ओरुणोदोई प्लस के ज़रिए दी जाती है।",
  },
  level: "state",
  state: "assam",
  department: { en: "Government of Assam (paid through Orunodoi Plus)", hi: "असम सरकार (ओरुणोदोई प्लस के ज़रिए भुगतान)" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "pension", "elderly", "orunodoi plus", "assam"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("assam"), minAge(60)),

  details: {
    en: [
      "Swahid Kushal Konwar Sarbajanin Briddha Pension Achoni is Assam's state old age pension. The 2026-27 budget says it will continue and will be paid through 'Orunodoi Plus', the same DBT system used for Orunodoi.",
      "The current monthly amount and the exact eligibility rules were not available on an official page we could reach, so please confirm them with your block or circle office.",
    ],
    hi: [
      "स्वाहिद कुशल कोंवर सर्वजनीन वृद्धा पेंशन आसोनी असम की राज्य वृद्धावस्था पेंशन है। 2026-27 के बजट के अनुसार यह जारी रहेगी और 'ओरुणोदोई प्लस' के ज़रिए दी जाएगी, यानी उसी DBT व्यवस्था से जिससे ओरुणोदोई का पैसा आता है।",
      "मौजूदा मासिक राशि और सही पात्रता नियम किसी सरकारी पेज पर नहीं मिल सके, इसलिए अपने ब्लॉक या सर्कल कार्यालय से पुष्टि करें।",
    ],
  },
  benefits: {
    en: ["A monthly pension paid by DBT into your bank account.", "The current amount is not confirmed; ask your block or circle office."],
    hi: ["बैंक खाते में DBT से हर महीने पेंशन।", "मौजूदा राशि की पुष्टि नहीं हुई है; अपने ब्लॉक या सर्कल कार्यालय से पूछें।"],
  },
  eligibilityText: {
    en: [
      "An elderly resident of Assam (usually 60 years or older; confirm locally).",
      "Has an Aadhaar-linked bank account.",
      "Other conditions are set by the scheme rules; confirm them locally.",
    ],
    hi: [
      "असम का बुज़ुर्ग निवासी (आम तौर पर 60 साल या उससे ज़्यादा; स्थानीय स्तर पर पुष्टि करें)।",
      "आधार से जुड़ा बैंक खाता हो।",
      "बाकी शर्तें योजना के नियमों में तय हैं; स्थानीय स्तर पर पुष्टि करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask at your Gaon Panchayat, block development office or circle office when applications are open.",
        "Submit the form with proof of age, Aadhaar and bank details.",
        "Once approved, the pension comes to your bank account every month.",
      ],
      hi: [
        "आवेदन खुलने पर अपनी गाँव पंचायत, ब्लॉक विकास कार्यालय या सर्कल कार्यालय में पूछें।",
        "उम्र का सबूत, आधार और बैंक की जानकारी के साथ फ़ॉर्म जमा करें।",
        "मंज़ूरी के बाद हर महीने पेंशन आपके बैंक खाते में आएगी।",
      ],
    },
  },

  officialUrl: "https://aladigitallibrary.in/handle/123456789/4238",
  sources: ["https://aladigitallibrary.in/handle/123456789/4238"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
