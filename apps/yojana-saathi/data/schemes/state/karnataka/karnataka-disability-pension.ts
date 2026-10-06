import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Karnataka Disability Pension (Angavikala Masashana)", hi: "कर्नाटक दिव्यांग पेंशन (अंगविकल मासाशन)" },
  aka: ["Angavikala Masashana", "Handicapped pension Karnataka", "PH pension"],
  shortDescription: {
    en: "People in Karnataka with 40% or more disability and yearly income below ₹32,000 get ₹800 a month, rising to ₹1,400 (75%+) or ₹2,000 (75%+ mental disability).",
    hi: "कर्नाटक में 40% या ज़्यादा दिव्यांगता वाले और ₹32,000 से कम सालाना आय वाले लोगों को हर महीने ₹800 मिलते हैं; 75%+ पर ₹1,400 और 75%+ मानसिक दिव्यांगता पर ₹2,000।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Directorate of Social Security and Pensions, Revenue Department, Government of Karnataka",
    hi: "सामाजिक सुरक्षा और पेंशन निदेशालय, राजस्व विभाग, कर्नाटक सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "handicapped", "divyang", "pension", "karnataka"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 800, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("karnataka"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(incomeUpTo(32_000), { en: "Yearly income is below ₹32,000", hi: "सालाना आय ₹32,000 से कम हो" }),
  ),

  details: {
    en: [
      "This monthly pension supports people with disabilities from poor households in Karnataka, including children born with a disability and people disabled in accidents.",
      "The amount depends on how severe the disability is, as certified by a medical board. The Directorate of Social Security and Pensions pays it every month.",
    ],
    hi: [
      "यह मासिक पेंशन कर्नाटक के ग़रीब परिवारों के दिव्यांग लोगों की मदद करती है, जिनमें जन्म से दिव्यांग बच्चे और दुर्घटना में दिव्यांग हुए लोग भी शामिल हैं।",
      "राशि इस पर निर्भर करती है कि मेडिकल बोर्ड ने दिव्यांगता कितनी प्रमाणित की है। सामाजिक सुरक्षा और पेंशन निदेशालय हर महीने इसका भुगतान करता है।",
    ],
  },
  benefits: {
    en: [
      "₹800 a month for 40% or more disability.",
      "₹1,400 a month for 75% or more disability.",
      "₹2,000 a month for 75% or more mental disability.",
    ],
    hi: [
      "40% या ज़्यादा दिव्यांगता पर हर महीने ₹800।",
      "75% या ज़्यादा दिव्यांगता पर हर महीने ₹1,400।",
      "75% या ज़्यादा मानसिक दिव्यांगता पर हर महीने ₹2,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Karnataka with a disability of at least 40%, certified by a medical authority.",
      "Covers blindness, low vision, cured leprosy, hearing impairment, locomotor disability, intellectual disability and mental illness.",
      "Yearly income below ₹32,000, in both rural and urban areas.",
    ],
    hi: [
      "कर्नाटक के निवासी, जिनकी कम से कम 40% दिव्यांगता मेडिकल अधिकारी ने प्रमाणित की हो।",
      "इसमें अंधापन, कम दिखना, ठीक हुआ कुष्ठ रोग, सुनने में दिक़्क़त, चलने-फिरने की दिव्यांगता, बौद्धिक दिव्यांगता और मानसिक बीमारी शामिल हैं।",
      "सालाना आय ₹32,000 से कम, गाँव और शहर दोनों में।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at the Atalji Janasnehi Kendra (Nadakacheri) at your hobli or taluk office.",
        "Attach the disability certificate from the medical board, residence proof, Aadhaar and bank details.",
        "After verification, the Tahsildar sanctions the pension.",
      ],
      hi: [
        "अपने होबली या तालुक दफ़्तर के अटलजी जनस्नेही केंद्र (नाडकचेरी) पर आवेदन करें।",
        "मेडिकल बोर्ड का दिव्यांगता प्रमाण पत्र, निवास का सबूत, आधार और बैंक विवरण लगाएँ।",
        "जाँच के बाद तहसीलदार पेंशन मंज़ूर करते हैं।",
      ],
    },
  },
  documents: {
    en: ["Disability certificate from the medical board", "Residence certificate", "Aadhaar card", "Bank or post office account details"],
    hi: ["मेडिकल बोर्ड का दिव्यांगता प्रमाण पत्र", "निवास प्रमाण पत्र", "आधार कार्ड", "बैंक या डाकघर खाते का विवरण"],
  },

  officialUrl: "https://dssp.karnataka.gov.in/dssp/handicap_scheme.aspx",
  sources: ["https://dssp.karnataka.gov.in/dssp/handicap_scheme.aspx", "https://dssp.karnataka.gov.in/dssp/home_page.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 1984,
  status: "active",
};

export default scheme;
