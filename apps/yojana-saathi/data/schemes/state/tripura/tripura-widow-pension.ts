import { all, any, ageBetween, female, incomeUpTo, minAge, notGovtEmployee, residentOf, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tripura-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: {
    en: "Mukhyamantri Samajik Sahayata Prakalpa – Vulnerable Women (Tripura)",
    hi: "मुख्यमंत्री सामाजिक सहायता प्रकल्प – असहाय महिलाएँ (त्रिपुरा)",
  },
  aka: ["MSSP vulnerable women", "Tripura widow pension", "deserted women pension Tripura"],
  shortDescription: {
    en: "₹2,000 a month for widows, legally divorced women and unmarried women over 45 in Tripura, aged up to 59, whose family earns up to ₹1 lakh a year.",
    hi: "त्रिपुरा की 59 साल तक की विधवा, क़ानूनी रूप से तलाकशुदा और 45 साल से ऊपर की अविवाहित महिलाओं को, जिनके परिवार की सालाना आय ₹1 लाख तक है, हर महीने ₹2,000।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Social Welfare & Social Education Department, Government of Tripura",
    hi: "समाज कल्याण एवं समाज शिक्षा विभाग, त्रिपुरा सरकार",
  },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "divorced women", "single women", "pension", "women", "tripura"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 59 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("tripura"),
    female(),
    ...ageBetween(18, 59),
    labelled(
      any(when("marital", "in", ["widowed", "divorced"]), all(when("marital", "eq", "never-married"), minAge(45))),
      {
        en: "You are a widow, legally divorced, or unmarried and over 45",
        hi: "आप विधवा हैं, क़ानूनी रूप से तलाकशुदा हैं, या 45 साल से ऊपर की अविवाहित हैं",
      },
    ),
    incomeUpTo(100_000),
    labelled(notGovtEmployee(), { en: "You are not a government employee", hi: "आप सरकारी कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "This is the 'Vulnerable Women' category of Mukhyamantri Samajik Sahayata Prakalpa (MSSP), Tripura's state social assistance scheme started in 2022. It pays ₹2,000 a month by DBT.",
      "It covers widows who have not remarried, legally divorced women and unmarried women above 45 years, aged 18 to 59, from families earning up to ₹1 lakh a year. Tripura's older widow and deserted-women pensions were also raised to ₹2,000 a month from September 2022.",
    ],
    hi: [
      "यह त्रिपुरा की राज्य सामाजिक सहायता योजना, मुख्यमंत्री सामाजिक सहायता प्रकल्प (MSSP), की 'असहाय महिलाएँ' श्रेणी है, जो 2022 में शुरू हुई। इसमें DBT से हर महीने ₹2,000 मिलते हैं।",
      "इसमें 18 से 59 साल की वे विधवाएँ जिन्होंने दोबारा शादी नहीं की, क़ानूनी रूप से तलाकशुदा महिलाएँ और 45 साल से ऊपर की अविवाहित महिलाएँ आती हैं, जिनके परिवार की सालाना आय ₹1 लाख तक है। त्रिपुरा की पुरानी विधवा और परित्यक्ता पेंशन भी सितंबर 2022 से ₹2,000 महीना कर दी गई।",
    ],
  },
  benefits: {
    en: ["₹2,000 every month, paid into your bank account by DBT."],
    hi: ["हर महीने ₹2,000, DBT से सीधे आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Tripura (PRTC), aged 18 to 59.",
      "A widow who has not remarried, a legally divorced woman, or an unmarried woman above 45.",
      "Annual family income of ₹1 lakh or less.",
      "Not an income-tax payer or government employee, and not already getting another social pension.",
    ],
    hi: [
      "त्रिपुरा की स्थायी निवासी (PRTC), उम्र 18 से 59 साल।",
      "विधवा जिसने दोबारा शादी नहीं की, क़ानूनी रूप से तलाकशुदा महिला, या 45 साल से ऊपर की अविवाहित महिला।",
      "परिवार की सालाना आय ₹1 लाख या उससे कम।",
      "आयकरदाता या सरकारी कर्मचारी न हों, और पहले से कोई दूसरी सामाजिक पेंशन न ले रही हों।",
    ],
  },
  exclusions: {
    en: ["The pension stops if a widow remarries."],
    hi: ["विधवा के दोबारा शादी करने पर पेंशन बंद हो जाती है।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the free form at your CDPO office or from socialwelfare.tripura.gov.in.",
        "Attach the income certificate, age proof, Aadhaar, PRTC, ration card and a non-government-employee certificate, plus your husband's death certificate, the court divorce order or an unmarried certificate from the GP/NP chairman, as applicable.",
        "Submit at the CDPO or BDO office when applications are invited. After verification, the pension comes to your bank account.",
      ],
      hi: [
        "मुफ़्त फ़ॉर्म अपने CDPO कार्यालय या socialwelfare.tripura.gov.in से लें।",
        "आय प्रमाण पत्र, उम्र का सबूत, आधार, PRTC, राशन कार्ड और 'सरकारी कर्मचारी नहीं' का प्रमाण पत्र लगाएँ; साथ में ज़रूरत के हिसाब से पति का मृत्यु प्रमाण पत्र, कोर्ट का तलाक़ आदेश या ग्राम/नगर पंचायत अध्यक्ष से अविवाहित होने का प्रमाण पत्र।",
        "आवेदन माँगे जाने पर CDPO या BDO कार्यालय में जमा करें। जाँच के बाद पेंशन आपके बैंक खाते में आएगी।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.tripura.gov.in/",
  sources: [
    "https://tripura.gov.in/sites/default/files/Notification_M.pdf",
    "https://socialwelfare.tripura.gov.in/sites/default/files/1.%20Notification%20of%20Rs.%202000.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
