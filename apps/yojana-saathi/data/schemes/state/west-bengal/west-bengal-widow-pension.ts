import { all, female, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "West Bengal Widow Pension (Jai Bangla)", hi: "पश्चिम बंगाल विधवा पेंशन (जय बांग्ला)" },
  aka: ["Bidhaba Bhata", "Jai Bangla widow pension"],
  shortDescription: {
    en: "A monthly state pension for widows in West Bengal who need support. The 2026-27 budget proposed a ₹500 monthly increase.",
    hi: "पश्चिम बंगाल की ज़रूरतमंद विधवा महिलाओं को राज्य की मासिक पेंशन। 2026-27 के बजट में विधवा पेंशन ₹500 बढ़ाने का प्रस्ताव है।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Department of Women & Child Development and Social Welfare, Government of West Bengal",
    hi: "महिला एवं बाल विकास और समाज कल्याण विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "bidhaba bhata", "women", "jai bangla", "pension", "west bengal"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("west-bengal"), female(), when("marital", "eq", "widowed"), minAge(18)),

  details: {
    en: [
      "West Bengal pays a monthly pension to widows in need under its Jai Bangla umbrella of pension schemes, alongside the central widow pension (IGNWPS).",
      "The 2026-27 state budget said all existing social protection schemes will continue and proposed raising the monthly pension for widows by ₹500. A review of beneficiary lists was also announced. Confirm the current amount and conditions at your block or municipality office.",
    ],
    hi: [
      "पश्चिम बंगाल अपनी जय बांग्ला पेंशन योजनाओं के तहत, केंद्र की विधवा पेंशन (IGNWPS) के साथ, ज़रूरतमंद विधवाओं को हर महीने पेंशन देता है।",
      "2026-27 के राज्य बजट में कहा गया कि सभी मौजूदा सामाजिक सुरक्षा योजनाएँ जारी रहेंगी, और विधवाओं की मासिक पेंशन ₹500 बढ़ाने का प्रस्ताव रखा गया। लाभार्थी सूची की जाँच की भी घोषणा हुई। अभी की राशि और शर्तें अपने ब्लॉक या नगरपालिका कार्यालय से पक्की करें।",
    ],
  },
  benefits: {
    en: ["A pension every month, paid into your bank account.", "The 2026-27 budget proposed a ₹500 increase in the monthly amount."],
    hi: ["हर महीने पेंशन, सीधे बैंक खाते में।", "2026-27 के बजट में मासिक राशि ₹500 बढ़ाने का प्रस्ताव है।"],
  },
  eligibilityText: {
    en: [
      "A widow living in West Bengal, aged 18 or more.",
      "From a poor or needy family, as checked by local officials.",
      "Not getting another government pension.",
    ],
    hi: [
      "पश्चिम बंगाल में रहने वाली विधवा महिला, उम्र 18 साल या उससे ज़्यादा।",
      "ग़रीब या ज़रूरतमंद परिवार से, जिसकी जाँच स्थानीय अधिकारी करते हैं।",
      "कोई दूसरी सरकारी पेंशन न ले रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask for the widow pension form at your Gram Panchayat, Block Development Office or municipality office.",
        "Attach your husband's death certificate, age proof, residence proof, Aadhaar and bank details.",
        "Submit it there and keep the receipt. The pension starts after verification.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, ब्लॉक विकास कार्यालय या नगरपालिका कार्यालय से विधवा पेंशन का फ़ॉर्म माँगें।",
        "पति का मृत्यु प्रमाण पत्र, उम्र का सबूत, निवास का सबूत, आधार और बैंक का ब्योरा लगाएँ।",
        "वहीं जमा करें और रसीद रखें। जाँच के बाद पेंशन शुरू होती है।",
      ],
    },
  },

  officialUrl: "https://wb.gov.in/government-schemes.aspx",
  sources: ["https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
