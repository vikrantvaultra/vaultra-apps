import { all, minAge, incomeUpTo, isTrue, notGovtEmployee, residentOf, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tripura-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: {
    en: "Mukhyamantri Samajik Sahayata Prakalpa – Persons with Disabilities (Tripura)",
    hi: "मुख्यमंत्री सामाजिक सहायता प्रकल्प – दिव्यांगजन (त्रिपुरा)",
  },
  aka: ["MSSP disability", "Tripura disability pension", "divyang pension Tripura"],
  shortDescription: {
    en: "₹2,000 a month for persons with 60% or more disability, aged 10 or above, from Tripura families earning up to ₹1 lakh a year.",
    hi: "त्रिपुरा के 10 साल या उससे ज़्यादा उम्र के 60% या उससे ज़्यादा दिव्यांग लोगों को, जिनके परिवार की सालाना आय ₹1 लाख तक है, हर महीने ₹2,000।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Social Welfare & Social Education Department, Government of Tripura",
    hi: "समाज कल्याण एवं समाज शिक्षा विभाग, त्रिपुरा सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "divyang", "handicapped", "pension", "udid", "tripura"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  ageRange: { min: 10 },
  kundliHouse: "health",
  eligibility: all(
    residentOf("tripura"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 60),
    minAge(10),
    incomeUpTo(100_000),
    labelled(notGovtEmployee(), { en: "You are not a government employee", hi: "आप सरकारी कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "This is the 'Persons with Disabilities' category of Mukhyamantri Samajik Sahayata Prakalpa (MSSP), Tripura's state social assistance scheme started in 2022. It pays ₹2,000 a month by DBT to people with 60% or more of any of the 21 disabilities listed in the RPwD Act, 2016.",
      "Tripura's older disability pensions and allowances were also raised to ₹2,000 a month from September 2022. People with 60% or more intellectual disability, mental illness or cerebral palsy can instead get ₹5,000 a month under the Chief Minister's Scheme for Persons with Intellectual Disabilities.",
    ],
    hi: [
      "यह त्रिपुरा की राज्य सामाजिक सहायता योजना, मुख्यमंत्री सामाजिक सहायता प्रकल्प (MSSP), की 'दिव्यांगजन' श्रेणी है, जो 2022 में शुरू हुई। इसमें RPwD अधिनियम, 2016 में दी गई 21 तरह की दिव्यांगताओं में से किसी में 60% या उससे ज़्यादा दिव्यांगता वाले लोगों को DBT से हर महीने ₹2,000 मिलते हैं।",
      "त्रिपुरा की पुरानी दिव्यांग पेंशन और भत्ते भी सितंबर 2022 से ₹2,000 महीना कर दिए गए। 60% या उससे ज़्यादा बौद्धिक दिव्यांगता, मानसिक बीमारी या सेरेब्रल पाल्सी वाले लोग इसके बजाय मुख्यमंत्री बौद्धिक दिव्यांगजन योजना में ₹5,000 महीना ले सकते हैं।",
    ],
  },
  benefits: {
    en: ["₹2,000 every month, paid into your bank account by DBT."],
    hi: ["हर महीने ₹2,000, DBT से सीधे आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Tripura (PRTC), aged 10 or above.",
      "60% or more disability, with a UDID card or registration slip.",
      "Annual family income of ₹1 lakh or less.",
      "Not an income-tax payer or government employee, and not already getting another social pension.",
    ],
    hi: [
      "त्रिपुरा के स्थायी निवासी (PRTC), उम्र 10 साल या उससे ज़्यादा।",
      "60% या उससे ज़्यादा दिव्यांगता, UDID कार्ड या रजिस्ट्रेशन पर्ची के साथ।",
      "परिवार की सालाना आय ₹1 लाख या उससे कम।",
      "आयकरदाता या सरकारी कर्मचारी न हों, और पहले से कोई दूसरी सामाजिक पेंशन न ले रहे हों।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the free form at your CDPO office or from socialwelfare.tripura.gov.in.",
        "Attach the SDM income certificate, age proof, ration card, Aadhaar, PRTC, UDID card or slip, and a non-government-employee certificate.",
        "Submit at the CDPO or BDO office when applications are invited. After verification, the pension comes to your bank account.",
      ],
      hi: [
        "मुफ़्त फ़ॉर्म अपने CDPO कार्यालय या socialwelfare.tripura.gov.in से लें।",
        "SDM का आय प्रमाण पत्र, उम्र का सबूत, राशन कार्ड, आधार, PRTC, UDID कार्ड या पर्ची और 'सरकारी कर्मचारी नहीं' का प्रमाण पत्र लगाएँ।",
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
