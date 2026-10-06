import { all, female, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "assam-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Indira Miri Universal Widow Pension Scheme", hi: "इंदिरा मिरी सार्वभौमिक विधवा पेंशन योजना" },
  aka: ["Assam widow pension", "IMUWPS", "Orunodoi Plus widow pension"],
  shortDescription: {
    en: "Widows in Assam get a monthly state widow pension, now paid through Orunodoi Plus.",
    hi: "असम की विधवा महिलाओं को राज्य की मासिक विधवा पेंशन मिलती है, जो अब ओरुणोदोई प्लस के ज़रिए दी जाती है।",
  },
  level: "state",
  state: "assam",
  department: { en: "Government of Assam (paid through Orunodoi Plus)", hi: "असम सरकार (ओरुणोदोई प्लस के ज़रिए भुगतान)" },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "widow", "pension", "women", "orunodoi plus", "assam"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(residentOf("assam"), female(), when("marital", "eq", "widowed")),

  details: {
    en: [
      "Assam's widow pension, known as the Indira Miri Universal Widow Pension Scheme, gives widows a monthly pension. The 2026-27 budget says the widow pension will continue and will be paid through 'Orunodoi Plus', the same DBT system used for Orunodoi.",
      "The current monthly amount and the exact eligibility rules were not available on an official page we could reach, so please confirm them with your block or circle office.",
    ],
    hi: [
      "असम की विधवा पेंशन, जिसे इंदिरा मिरी सार्वभौमिक विधवा पेंशन योजना कहते हैं, विधवा महिलाओं को हर महीने पेंशन देती है। 2026-27 के बजट के अनुसार विधवा पेंशन जारी रहेगी और 'ओरुणोदोई प्लस' के ज़रिए दी जाएगी, यानी उसी DBT व्यवस्था से जिससे ओरुणोदोई का पैसा आता है।",
      "मौजूदा मासिक राशि और सही पात्रता नियम किसी सरकारी पेज पर नहीं मिल सके, इसलिए अपने ब्लॉक या सर्कल कार्यालय से पुष्टि करें।",
    ],
  },
  benefits: {
    en: ["A monthly pension paid by DBT into your bank account.", "The current amount is not confirmed; ask your block or circle office."],
    hi: ["बैंक खाते में DBT से हर महीने पेंशन।", "मौजूदा राशि की पुष्टि नहीं हुई है; अपने ब्लॉक या सर्कल कार्यालय से पूछें।"],
  },
  eligibilityText: {
    en: [
      "A widow living in Assam.",
      "Has an Aadhaar-linked bank account in her own name.",
      "Age limits and other conditions are set by the scheme rules; confirm locally.",
    ],
    hi: [
      "असम में रहने वाली विधवा महिला।",
      "उसके अपने नाम पर आधार से जुड़ा बैंक खाता हो।",
      "उम्र की सीमा और बाकी शर्तें योजना के नियमों में तय हैं; स्थानीय स्तर पर पुष्टि करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask at your Gaon Panchayat, block development office or circle office when applications are open.",
        "Submit the form with your husband's death certificate, Aadhaar and bank details.",
        "Once approved, the pension comes to your bank account every month.",
      ],
      hi: [
        "आवेदन खुलने पर अपनी गाँव पंचायत, ब्लॉक विकास कार्यालय या सर्कल कार्यालय में पूछें।",
        "पति का मृत्यु प्रमाण पत्र, आधार और बैंक की जानकारी के साथ फ़ॉर्म जमा करें।",
        "मंज़ूरी के बाद हर महीने पेंशन आपके बैंक खाते में आएगी।",
      ],
    },
  },

  officialUrl: "https://aladigitallibrary.in/handle/123456789/4238",
  sources: ["https://aladigitallibrary.in/handle/123456789/4238"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
