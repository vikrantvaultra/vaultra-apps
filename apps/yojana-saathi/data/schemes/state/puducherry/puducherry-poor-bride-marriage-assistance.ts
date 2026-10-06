import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-poor-bride-marriage-assistance",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: {
    en: "Financial Assistance for Marriage of Poor Brides (Puducherry)",
    hi: "गरीब दुल्हनों की शादी के लिए आर्थिक सहायता (पुडुचेरी)",
  },
  aka: ["Puducherry poor bride marriage scheme", "BPL bride marriage assistance"],
  shortDescription: {
    en: "Poor families in Puducherry get a cash grant for a daughter's first marriage. The 2026-27 budget announced a big increase; check the current amount with the department.",
    hi: "पुडुचेरी के गरीब परिवारों को बेटी की पहली शादी के लिए नकद सहायता मिलती है। 2026-27 के बजट में इसे काफ़ी बढ़ाने की घोषणा हुई है; मौजूदा राशि विभाग से पता करें।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Department of Women and Child Development, Government of Puducherry",
    hi: "महिला एवं बाल विकास विभाग, पुडुचेरी सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "bride", "wedding assistance", "bpl", "daughter", "puducherry"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("puducherry"),
    labelled(incomeUpTo(75_000), { en: "Family income up to ₹75,000 a year", hi: "परिवार की सालाना आय ₹75,000 तक" }),
  ),

  details: {
    en: [
      "The Department of Women and Child Development gives poor families a grant to meet the expenses of a daughter's first marriage. The money is paid to the applicant's bank account.",
      "The amount is in flux. The department's page lists ₹25,000, and that was the amount paid in the May 2026 beneficiary list. The 2026-27 budget speech (August 2026) said the grant was ₹35,000 and would be raised to ₹75,000 from this financial year. Confirm the amount that applies to you with the department.",
    ],
    hi: [
      "महिला एवं बाल विकास विभाग गरीब परिवारों को बेटी की पहली शादी का खर्च उठाने के लिए अनुदान देता है। पैसा आवेदक के बैंक खाते में आता है।",
      "राशि अभी बदल रही है। विभाग के पेज पर ₹25,000 लिखा है, और मई 2026 की लाभार्थी सूची में भी यही राशि दी गई। 2026-27 के बजट भाषण (अगस्त 2026) में कहा गया कि अनुदान ₹35,000 है और इस वित्त वर्ष से इसे बढ़ाकर ₹75,000 किया जाएगा। आप पर कौन-सी राशि लागू होगी, यह विभाग से पक्का करें।",
    ],
  },
  benefits: {
    en: ["A one-time cash grant for the bride's first marriage, paid to the bank account."],
    hi: ["दुल्हन की पहली शादी के लिए एक बार नकद अनुदान, बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Annual income of the applicant not more than ₹75,000.",
      "The bride's parents or guardian are Indian citizens and natives of Puducherry by birth or by five or more years of residence.",
      "Only for the bride's first marriage, and for one daughter only; the bride must be at least 18 and the groom at least 21.",
    ],
    hi: [
      "आवेदक की सालाना आय ₹75,000 से ज़्यादा न हो।",
      "दुल्हन के माता-पिता या अभिभावक भारतीय नागरिक हों और जन्म से या पाँच साल या ज़्यादा समय से पुडुचेरी के निवासी हों।",
      "सिर्फ़ दुल्हन की पहली शादी के लिए, और सिर्फ़ एक बेटी के लिए; दुल्हन कम से कम 18 और दूल्हा कम से कम 21 साल का हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at least 30 days before the planned marriage to the Deputy Director (Women Development), Department of Women and Child Development, Puducherry; in Karaikal to the Child Development Project Officer; in Mahe or Yanam to the Welfare Officer.",
        "Attach income and residence certificates, the wedding invitation and the bride's age proof, and submit the marriage registration certificate within 30 days after the wedding.",
      ],
      hi: [
        "तय शादी से कम से कम 30 दिन पहले उप निदेशक (महिला विकास), महिला एवं बाल विकास विभाग, पुडुचेरी को आवेदन दें; कराईकल में बाल विकास परियोजना अधिकारी को और माहे या यानम में कल्याण अधिकारी को।",
        "आय और निवास प्रमाण पत्र, शादी का निमंत्रण-पत्र और दुल्हन की उम्र का सबूत लगाएँ, और शादी के 30 दिन के भीतर विवाह पंजीकरण प्रमाण पत्र जमा करें।",
      ],
    },
  },

  officialUrl: "https://wcd.py.gov.in/grant-financial-assistance-performance-marriage-poor-brides-living-below-poverty-line",
  sources: [
    "https://wcd.py.gov.in/grant-financial-assistance-performance-marriage-poor-brides-living-below-poverty-line",
    "https://wcd.py.gov.in/sites/default/files/poor-bride-may-2026.pdf",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
