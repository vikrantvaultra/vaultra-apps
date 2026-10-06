import { all, ageBetween, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Karnataka Widow Pension (Vidhava Vetana)", hi: "कर्नाटक विधवा पेंशन (विधवा वेतन)" },
  aka: ["Vidhava Vetana", "Widow Pension Karnataka"],
  shortDescription: {
    en: "Widows in Karnataka aged 18 to 64 with a yearly income below ₹32,000 get a pension of ₹800 every month.",
    hi: "कर्नाटक में 18 से 64 साल की विधवा महिलाओं को, जिनकी सालाना आय ₹32,000 से कम है, हर महीने ₹800 पेंशन मिलती है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Directorate of Social Security and Pensions, Revenue Department, Government of Karnataka",
    hi: "सामाजिक सुरक्षा और पेंशन निदेशालय, राजस्व विभाग, कर्नाटक सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["widow pension", "widow", "women", "pension", "karnataka"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 800, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 64 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("karnataka"),
    female(),
    when("marital", "eq", "widowed"),
    ...ageBetween(18, 64),
    labelled(incomeUpTo(32_000), { en: "Yearly income is below ₹32,000", hi: "सालाना आय ₹32,000 से कम हो" }),
  ),

  details: {
    en: [
      "The Karnataka Widow Pension gives a small monthly income to widows from poor households. It has run since 1984 and is managed by the Directorate of Social Security and Pensions.",
      "The pension continues until the woman remarries, her income goes above the limit, or she dies. At 65 she can move to an old age pension.",
    ],
    hi: [
      "कर्नाटक विधवा पेंशन ग़रीब परिवारों की विधवा महिलाओं को हर महीने थोड़ी आमदनी देती है। यह 1984 से चल रही है और सामाजिक सुरक्षा और पेंशन निदेशालय इसे चलाता है।",
      "पेंशन तब तक मिलती है जब तक महिला दोबारा शादी न करे, उसकी आय सीमा से ऊपर न जाए, या उसकी मृत्यु न हो। 65 साल पर वह वृद्धावस्था पेंशन में जा सकती है।",
    ],
  },
  benefits: {
    en: ["₹800 pension every month.", "Paid into your bank or post office account."],
    hi: ["हर महीने ₹800 पेंशन।", "पैसा आपके बैंक या डाकघर खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "A widow living in Karnataka (husband has died or is legally presumed dead).",
      "Aged 18 to 64 years.",
      "Yearly income below ₹32,000, in both rural and urban areas.",
    ],
    hi: [
      "कर्नाटक में रहने वाली विधवा (पति की मृत्यु हो चुकी हो या क़ानूनन मृत मान लिया गया हो)।",
      "उम्र 18 से 64 साल।",
      "सालाना आय ₹32,000 से कम, गाँव और शहर दोनों में।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at the Atalji Janasnehi Kendra (Nadakacheri) at your hobli or taluk office.",
        "Attach your husband's death certificate, residence and age proof, Aadhaar and bank details.",
        "After verification, the Tahsildar sanctions the pension.",
      ],
      hi: [
        "अपने होबली या तालुक दफ़्तर के अटलजी जनस्नेही केंद्र (नाडकचेरी) पर आवेदन करें।",
        "पति का मृत्यु प्रमाण पत्र, निवास और उम्र का सबूत, आधार और बैंक विवरण लगाएँ।",
        "जाँच के बाद तहसीलदार पेंशन मंज़ूर करते हैं।",
      ],
    },
  },
  documents: {
    en: ["Husband's death certificate", "Residence certificate", "Age proof", "Aadhaar card", "Bank or post office account details"],
    hi: ["पति का मृत्यु प्रमाण पत्र", "निवास प्रमाण पत्र", "उम्र का सबूत", "आधार कार्ड", "बैंक या डाकघर खाते का विवरण"],
  },

  officialUrl: "https://dssp.karnataka.gov.in/dssp/Widow_Scheme.aspx",
  sources: ["https://dssp.karnataka.gov.in/dssp/Widow_Scheme.aspx", "https://dssp.karnataka.gov.in/dssp/home_page.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 1984,
  status: "active",
};

export default scheme;
