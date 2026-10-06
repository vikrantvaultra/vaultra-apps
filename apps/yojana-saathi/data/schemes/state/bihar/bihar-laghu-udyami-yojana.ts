import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-laghu-udyami-yojana",
  tier: "compact",
  name: { en: "Bihar Laghu Udyami Yojana", hi: "बिहार लघु उद्यमी योजना" },
  aka: ["BLUY", "Laghu Udyami", "Bihar 2 lakh scheme"],
  shortDescription: {
    en: "Very poor families in Bihar earning up to ₹6,000 a month can get a grant of up to ₹2 lakh, in three instalments, to start a small business.",
    hi: "बिहार के बहुत गरीब परिवार, जिनकी मासिक आय ₹6,000 तक है, छोटा काम-धंधा शुरू करने के लिए तीन किस्तों में ₹2 लाख तक का अनुदान पा सकते हैं।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Industries Department, Government of Bihar", hi: "उद्योग विभाग, बिहार सरकार" },
  categories: ["business", "social-welfare"],
  tags: ["business grant", "poor families", "self employment", "2 lakh", "small business", "bihar"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "business",
  eligibility: all(residentOf("bihar"), incomeUpTo(72_000)),

  details: {
    en: [
      "Bihar Laghu Udyami Yojana was started in 2024 for families found to be very poor in the state's caste-based survey. It gives one member of each such family a grant, not a loan, to set up a small unit such as tailoring, a salon, a food stall or a handicraft workshop.",
      "The Industries Department runs it through the Udyami portal. Applicants are picked by computerised lottery, attend a short entrepreneurship training at the District Industries Centre, and then get the money in three stages.",
    ],
    hi: [
      "बिहार लघु उद्यमी योजना 2024 में उन परिवारों के लिए शुरू हुई जिन्हें राज्य के जाति आधारित सर्वेक्षण में बहुत गरीब पाया गया। ऐसे हर परिवार के एक सदस्य को सिलाई, सैलून, खाने की दुकान या हस्तशिल्प जैसा छोटा काम शुरू करने के लिए अनुदान मिलता है, कर्ज़ नहीं।",
      "उद्योग विभाग इसे उद्यमी पोर्टल के ज़रिए चलाता है। आवेदकों का चयन कंप्यूटर लॉटरी से होता है, फिर ज़िला उद्योग केंद्र में छोटी उद्यमिता ट्रेनिंग होती है, और उसके बाद तीन चरणों में पैसा मिलता है।",
    ],
  },
  benefits: {
    en: [
      "A grant of up to ₹2 lakh that you don't repay.",
      "Paid in three stages: ₹50,000, then ₹1 lakh, then ₹50,000, as the unit is set up.",
      "Short entrepreneurship training before the first payment.",
    ],
    hi: [
      "₹2 लाख तक का अनुदान, जिसे लौटाना नहीं होता।",
      "तीन चरणों में भुगतान: पहले ₹50,000, फिर ₹1 लाख, फिर ₹50,000, जैसे-जैसे काम खड़ा होता है।",
      "पहली किस्त से पहले उद्यमिता की छोटी ट्रेनिंग।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Bihar.",
      "Family income of ₹6,000 a month or less (₹72,000 a year), as found in the state's caste-based survey.",
      "One member per family.",
      "Chooses one of the small business types listed on the portal.",
    ],
    hi: [
      "बिहार के निवासी।",
      "परिवार की मासिक आय ₹6,000 या उससे कम (साल में ₹72,000), जैसा राज्य के जाति आधारित सर्वेक्षण में पाया गया।",
      "एक परिवार से एक सदस्य।",
      "पोर्टल पर दिए गए छोटे कामों में से कोई एक चुनें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When applications open, go to udyami.bihar.gov.in and choose Bihar Laghu Udyami Yojana.",
        "Fill in the form with your income certificate and family details and pick a business type.",
        "If selected in the lottery, attend the training at the District Industries Centre to get the first instalment.",
      ],
      hi: [
        "आवेदन खुलने पर udyami.bihar.gov.in पर जाएँ और बिहार लघु उद्यमी योजना चुनें।",
        "आय प्रमाण पत्र और परिवार के विवरण के साथ फ़ॉर्म भरें और काम का प्रकार चुनें।",
        "लॉटरी में चुने जाने पर पहली किस्त के लिए ज़िला उद्योग केंद्र में ट्रेनिंग में जाएँ।",
      ],
    },
  },

  officialUrl: "https://udyami.bihar.gov.in/",
  sources: [
    "https://udyami.bihar.gov.in/",
    "https://patnapress.com/bihars-small-enterprise-scheme-brings-hope-for-economically-weaker-sections-says-minister/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
