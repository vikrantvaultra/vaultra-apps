import { all, female, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-farmer-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Karnataka Farmer Widow Pension", hi: "कर्नाटक किसान विधवा पेंशन" },
  aka: ["Raitha widow pension", "farmer suicide widow pension"],
  shortDescription: {
    en: "The wife of a Karnataka farmer who died by suicide, in a case recognised and compensated by the Agriculture Department, gets a pension of ₹2,000 a month.",
    hi: "कर्नाटक के जिस किसान ने आत्महत्या की और कृषि विभाग ने उस मामले को मानकर मुआवज़ा दिया, उसकी पत्नी को हर महीने ₹2,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Directorate of Social Security and Pensions, Revenue Department, Government of Karnataka",
    hi: "सामाजिक सुरक्षा और पेंशन निदेशालय, राजस्व विभाग, कर्नाटक सरकार",
  },
  categories: ["pension-insurance", "agriculture", "women-child"],
  tags: ["farmer widow", "widow pension", "farmer suicide", "pension", "karnataka"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("karnataka"), female(), when("marital", "eq", "widowed")),

  details: {
    en: [
      "This Karnataka pension supports the widows of farmers who took their own lives because of debt or crop loss.",
      "It is only for families whose case the Agriculture Department has already recognised as a farmer suicide and paid compensation for. The Directorate of Social Security and Pensions pays the pension every month.",
    ],
    hi: [
      "कर्नाटक की यह पेंशन उन किसानों की विधवाओं की मदद करती है जिन्होंने क़र्ज़ या फ़सल नुक़सान की वजह से अपनी जान ले ली।",
      "यह सिर्फ़ उन परिवारों के लिए है जिनके मामले को कृषि विभाग ने पहले ही किसान आत्महत्या माना है और मुआवज़ा दिया है। सामाजिक सुरक्षा और पेंशन निदेशालय हर महीने पेंशन देता है।",
    ],
  },
  benefits: {
    en: ["₹2,000 pension every month.", "Paid into your bank or post office account."],
    hi: ["हर महीने ₹2,000 पेंशन।", "पैसा आपके बैंक या डाकघर खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "Wife of a Karnataka farmer who died by suicide.",
      "The Agriculture Department has recognised the death as a farmer suicide case and paid compensation to the family.",
    ],
    hi: [
      "कर्नाटक के उस किसान की पत्नी जिसने आत्महत्या की।",
      "कृषि विभाग ने मृत्यु को किसान आत्महत्या का मामला माना हो और परिवार को मुआवज़ा दिया हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply in the prescribed form at the Atalji Janasnehi Kendra (Nadakacheri) at your hobli or taluk office.",
        "Attach proof of the compensation paid by the Agriculture Department, Aadhaar and bank details.",
        "After verification, the Tahsildar sanctions the pension.",
      ],
      hi: [
        "अपने होबली या तालुक दफ़्तर के अटलजी जनस्नेही केंद्र (नाडकचेरी) पर तय फ़ॉर्म में आवेदन करें।",
        "कृषि विभाग से मिले मुआवज़े का सबूत, आधार और बैंक विवरण लगाएँ।",
        "जाँच के बाद तहसीलदार पेंशन मंज़ूर करते हैं।",
      ],
    },
  },

  officialUrl: "https://dssp.karnataka.gov.in/dssp/Farmerwidowpension.aspx",
  sources: ["https://dssp.karnataka.gov.in/dssp/Farmerwidowpension.aspx", "https://dssp.karnataka.gov.in/dssp/home_page.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
