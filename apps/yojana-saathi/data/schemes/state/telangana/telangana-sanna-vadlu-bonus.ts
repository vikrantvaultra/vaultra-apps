import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-sanna-vadlu-bonus",
  tier: "compact",
  name: { en: "₹500 Bonus on Fine Paddy (Sanna Vadlu)", hi: "बारीक धान (सन्न वड्लु) पर ₹500 बोनस" },
  aka: ["Sanna vadlu bonus", "fine rice bonus Telangana", "paddy bonus 500"],
  shortDescription: {
    en: "Telangana pays farmers a bonus of ₹500 per quintal, on top of the MSP, for notified fine (sanna) paddy varieties sold at government procurement centres.",
    hi: "तेलंगाना सरकार किसानों को सरकारी ख़रीद केंद्रों पर बेचे गए अधिसूचित बारीक (सन्न) धान पर MSP के ऊपर ₹500 प्रति क्विंटल बोनस देती है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Consumer Affairs, Food and Civil Supplies Department, Government of Telangana",
    hi: "उपभोक्ता मामले, खाद्य एवं नागरिक आपूर्ति विभाग, तेलंगाना सरकार",
  },
  categories: ["agriculture"],
  tags: ["paddy", "bonus", "fine rice", "sanna", "msp", "procurement", "telangana"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("telangana"), when("occupation", "in", ["farmer"])),

  details: {
    en: [
      "To encourage fine rice (sanna vadlu), the Telangana government pays a bonus of ₹500 per quintal over the minimum support price for 33 notified fine paddy varieties. It was announced in the 2024-25 budget.",
      "The bonus is paid to the farmer's bank account for paddy sold at government paddy procurement centres. The government confirmed in September 2026 that the bonus is being paid, and the 2026-27 budget set aside ₹3,500 crore for crop bonuses.",
    ],
    hi: [
      "बारीक चावल (सन्न वड्लु) की खेती बढ़ाने के लिए तेलंगाना सरकार 33 अधिसूचित बारीक धान किस्मों पर न्यूनतम समर्थन मूल्य से ऊपर ₹500 प्रति क्विंटल बोनस देती है। इसकी घोषणा 2024-25 के बजट में हुई।",
      "सरकारी धान ख़रीद केंद्रों पर बेचे गए धान का बोनस किसान के बैंक खाते में आता है। सितंबर 2026 में सरकार ने बताया कि बोनस दिया जा रहा है, और 2026-27 के बजट में फ़सल बोनस के लिए ₹3,500 करोड़ रखे गए।",
    ],
  },
  benefits: {
    en: ["₹500 extra per quintal of notified fine paddy, over the MSP.", "Paid into your bank account after the sale."],
    hi: ["अधिसूचित बारीक धान पर MSP के ऊपर ₹500 प्रति क्विंटल ज़्यादा।", "बिक्री के बाद पैसा बैंक खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "You are a farmer in Telangana growing one of the notified fine paddy varieties.",
      "You sell the paddy at a government paddy procurement centre (PPC).",
    ],
    hi: [
      "आप तेलंगाना के किसान हैं और अधिसूचित बारीक धान की किसी किस्म की खेती करते हैं।",
      "आप धान सरकारी धान ख़रीद केंद्र (PPC) पर बेचते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Bring your fine paddy to the nearest government procurement centre during the procurement season.",
        "Give your pattadar passbook, Aadhaar and bank details at the centre.",
        "The MSP and the ₹500 bonus are paid to your bank account.",
      ],
      hi: [
        "ख़रीद के मौसम में अपना बारीक धान नज़दीकी सरकारी ख़रीद केंद्र पर लाएँ।",
        "केंद्र पर अपनी पट्टादार पासबुक, आधार और बैंक की जानकारी दें।",
        "MSP और ₹500 बोनस आपके बैंक खाते में आता है।",
      ],
    },
  },

  officialUrl: "https://www.telangana.gov.in/departments/consumer-affairs-food-civil-supplies/",
  sources: [
    "https://www.telangana.gov.in/news/press-releases/2024/07/deputy-cm-presents-budget-for-the-year-2024-25/",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
