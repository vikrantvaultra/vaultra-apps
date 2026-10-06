import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "manabik-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Manabik Pension (Disability Pension, West Bengal)", hi: "मानबिक पेंशन (दिव्यांग पेंशन, पश्चिम बंगाल)" },
  aka: ["Manabik", "Manabik Prakalpa", "Jai Bangla disability pension"],
  shortDescription: {
    en: "A monthly state pension for persons with disabilities in West Bengal who need support. The 2026-27 budget proposed a ₹500 monthly increase.",
    hi: "पश्चिम बंगाल के ज़रूरतमंद दिव्यांगजनों को राज्य की मासिक पेंशन। 2026-27 के बजट में दिव्यांग पेंशन ₹500 बढ़ाने का प्रस्ताव है।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Department of Women & Child Development and Social Welfare, Government of West Bengal",
    hi: "महिला एवं बाल विकास और समाज कल्याण विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "manabik", "divyang", "pwd", "jai bangla", "west bengal"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "health",
  eligibility: all(residentOf("west-bengal"), isTrue("disabled"), when("disabilityPct", "gte", 40)),

  details: {
    en: [
      "Manabik is West Bengal's monthly pension for persons with disabilities, part of the state's Jai Bangla umbrella of pension schemes. The central disability pension (IGNDPS) is run separately.",
      "The 2026-27 state budget said all existing social protection schemes will continue and proposed raising the monthly pension for persons with disabilities by ₹500. Confirm the current amount and conditions at your block or municipality office.",
    ],
    hi: [
      "मानबिक दिव्यांगजनों के लिए पश्चिम बंगाल की मासिक पेंशन है, जो राज्य की जय बांग्ला पेंशन योजनाओं का हिस्सा है। केंद्र की दिव्यांग पेंशन (IGNDPS) अलग से चलती है।",
      "2026-27 के राज्य बजट में कहा गया कि सभी मौजूदा सामाजिक सुरक्षा योजनाएँ जारी रहेंगी, और दिव्यांगजनों की मासिक पेंशन ₹500 बढ़ाने का प्रस्ताव रखा गया। अभी की राशि और शर्तें अपने ब्लॉक या नगरपालिका कार्यालय से पक्की करें।",
    ],
  },
  benefits: {
    en: ["A pension every month, paid into your bank account.", "The 2026-27 budget proposed a ₹500 increase in the monthly amount."],
    hi: ["हर महीने पेंशन, सीधे बैंक खाते में।", "2026-27 के बजट में मासिक राशि ₹500 बढ़ाने का प्रस्ताव है।"],
  },
  eligibilityText: {
    en: [
      "A person with a disability of 40% or more, living in West Bengal.",
      "Has a valid disability certificate.",
      "From a poor or needy family, as checked by local officials.",
      "Not getting another government pension.",
    ],
    hi: [
      "40% या उससे ज़्यादा दिव्यांगता वाला व्यक्ति, जो पश्चिम बंगाल में रहता हो।",
      "मान्य दिव्यांगता प्रमाण पत्र हो।",
      "ग़रीब या ज़रूरतमंद परिवार से, जिसकी जाँच स्थानीय अधिकारी करते हैं।",
      "कोई दूसरी सरकारी पेंशन न ले रहा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask for the Manabik pension form at your Block Development Office or municipality office.",
        "Attach your disability certificate, age and residence proof, Aadhaar and bank details.",
        "Submit it there and keep the receipt. The pension starts after verification.",
      ],
      hi: [
        "अपने ब्लॉक विकास कार्यालय या नगरपालिका कार्यालय से मानबिक पेंशन का फ़ॉर्म माँगें।",
        "दिव्यांगता प्रमाण पत्र, उम्र और निवास का सबूत, आधार और बैंक का ब्योरा लगाएँ।",
        "वहीं जमा करें और रसीद रखें। जाँच के बाद पेंशन शुरू होती है।",
      ],
    },
  },

  officialUrl: "https://wb.gov.in/government-schemes.aspx",
  sources: ["https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "check-status",
};

export default scheme;
