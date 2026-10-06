import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-old-age-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "West Bengal Old Age Pension (Jai Bangla)", hi: "पश्चिम बंगाल वृद्धावस्था पेंशन (जय बांग्ला)" },
  aka: ["Bardhakya Bhata", "Jai Bangla old age pension"],
  shortDescription: {
    en: "A monthly state pension for elderly people in West Bengal aged 60 or more who need support. The 2026-27 budget proposed a ₹500 monthly increase.",
    hi: "पश्चिम बंगाल में 60 साल या उससे ज़्यादा उम्र के ज़रूरतमंद बुज़ुर्गों को राज्य की मासिक पेंशन। 2026-27 के बजट में पेंशन ₹500 बढ़ाने का प्रस्ताव है।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Department of Women & Child Development and Social Welfare, Government of West Bengal",
    hi: "महिला एवं बाल विकास और समाज कल्याण विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "bardhakya bhata", "jai bangla", "elderly", "west bengal"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("west-bengal"), minAge(60)),

  details: {
    en: [
      "West Bengal pays a monthly pension to elderly people under its Jai Bangla umbrella of pension schemes, alongside the central old age pension (IGNOAPS). Separate pensions exist for SC (Taposili Bandhu) and ST (Jai Johar) elders and for older farmers, fishers and artisans.",
      "In its 2026-27 budget the new state government said all existing social protection schemes will continue and proposed raising the monthly pension for the elderly by ₹500. The exact amount and income rules should be confirmed at your block or municipality office.",
    ],
    hi: [
      "पश्चिम बंगाल अपनी जय बांग्ला पेंशन योजनाओं के तहत, केंद्र की वृद्धावस्था पेंशन (IGNOAPS) के साथ, बुज़ुर्गों को हर महीने पेंशन देता है। SC (तपसिली बंधु) और ST (जय जोहार) बुज़ुर्गों, और बुज़ुर्ग किसानों, मछुआरों व कारीगरों के लिए अलग पेंशन हैं।",
      "2026-27 के बजट में नई राज्य सरकार ने कहा कि सभी मौजूदा सामाजिक सुरक्षा योजनाएँ जारी रहेंगी और बुज़ुर्गों की मासिक पेंशन ₹500 बढ़ाने का प्रस्ताव रखा। सही राशि और आय की शर्तें अपने ब्लॉक या नगरपालिका कार्यालय से पक्की करें।",
    ],
  },
  benefits: {
    en: ["A pension every month, paid into your bank account.", "The 2026-27 budget proposed a ₹500 increase in the monthly amount."],
    hi: ["हर महीने पेंशन, सीधे बैंक खाते में।", "2026-27 के बजट में मासिक राशि ₹500 बढ़ाने का प्रस्ताव है।"],
  },
  eligibilityText: {
    en: [
      "Resident of West Bengal.",
      "Aged 60 years or more.",
      "From a poor or needy family, as checked by local officials.",
      "Not getting another government pension.",
    ],
    hi: [
      "पश्चिम बंगाल का निवासी।",
      "उम्र 60 साल या उससे ज़्यादा।",
      "ग़रीब या ज़रूरतमंद परिवार से, जिसकी जाँच स्थानीय अधिकारी करते हैं।",
      "कोई दूसरी सरकारी पेंशन न ले रहा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask for the old age pension form at your Gram Panchayat, Block Development Office or municipality office.",
        "Fill it in and attach proof of age, residence proof, Aadhaar and bank details.",
        "Submit it there and keep the receipt. The pension starts after verification.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, ब्लॉक विकास कार्यालय या नगरपालिका कार्यालय से वृद्धावस्था पेंशन का फ़ॉर्म माँगें।",
        "फ़ॉर्म भरें और उम्र का सबूत, निवास का सबूत, आधार और बैंक का ब्योरा लगाएँ।",
        "वहीं जमा करें और रसीद रखें। जाँच के बाद पेंशन शुरू होती है।",
      ],
    },
  },

  officialUrl: "https://wb.gov.in/government-schemes.aspx",
  sources: [
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026-2027_English_I.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
