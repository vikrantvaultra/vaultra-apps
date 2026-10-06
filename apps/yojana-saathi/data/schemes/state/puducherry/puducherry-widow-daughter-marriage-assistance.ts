import { all, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-widow-daughter-marriage-assistance",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: {
    en: "Marriage Allowance for Daughters of Widows (Puducherry)",
    hi: "विधवा की बेटी की शादी के लिए भत्ता (पुडुचेरी)",
  },
  aka: ["Puducherry widow daughter marriage scheme"],
  shortDescription: {
    en: "Widows in Puducherry with low income get a cash grant for their daughter's first marriage. The 2026-27 budget announced a big increase; check the current amount.",
    hi: "पुडुचेरी में कम आय वाली विधवाओं को अपनी बेटी की पहली शादी के लिए नकद अनुदान मिलता है। 2026-27 के बजट में इसे काफ़ी बढ़ाने की घोषणा हुई है; मौजूदा राशि पता करें।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Department of Women and Child Development, Government of Puducherry",
    hi: "महिला एवं बाल विकास विभाग, पुडुचेरी सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "widow", "daughter", "wedding assistance", "puducherry"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("puducherry"),
    female(),
    labelled(when("marital", "eq", "widowed"), { en: "You are a widow", hi: "आप विधवा हैं" }),
    labelled(incomeUpTo(75_000), { en: "Annual income up to ₹75,000", hi: "सालाना आय ₹75,000 तक" }),
  ),

  details: {
    en: [
      "The Department of Women and Child Development helps widows and destitute women pay for their daughter's marriage. The grant is paid to the bank account.",
      "The department's page lists ₹30,000, which is also what was paid in the May 2026 beneficiary list. The 2026-27 budget speech said the grant (stated there as ₹40,000) would be raised to ₹1,00,000 from this financial year. Confirm the amount that applies to you with the department.",
    ],
    hi: [
      "महिला एवं बाल विकास विभाग विधवा और निराश्रित महिलाओं को उनकी बेटी की शादी का खर्च उठाने में मदद करता है। अनुदान बैंक खाते में आता है।",
      "विभाग के पेज पर ₹30,000 लिखा है, और मई 2026 की लाभार्थी सूची में भी यही राशि दी गई। 2026-27 के बजट भाषण में कहा गया कि अनुदान (वहाँ ₹40,000 बताया गया) इस वित्त वर्ष से बढ़ाकर ₹1,00,000 किया जाएगा। आप पर कौन-सी राशि लागू होगी, यह विभाग से पक्का करें।",
    ],
  },
  benefits: {
    en: ["A one-time cash grant for the daughter's first marriage, paid to the bank account."],
    hi: ["बेटी की पहली शादी के लिए एक बार नकद अनुदान, बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "A widow whose annual income is not more than ₹75,000.",
      "An Indian citizen and a native of Puducherry by birth or by five or more years of residence.",
      "Only for the daughter's first marriage, and for one daughter only; the bride must be above 18 and the groom above 21.",
    ],
    hi: [
      "ऐसी विधवा जिसकी सालाना आय ₹75,000 से ज़्यादा न हो।",
      "भारतीय नागरिक हो और जन्म से या पाँच साल या ज़्यादा समय से पुडुचेरी की निवासी हो।",
      "सिर्फ़ बेटी की पहली शादी के लिए, और सिर्फ़ एक बेटी के लिए; दुल्हन 18 साल से और दूल्हा 21 साल से ऊपर हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at least 30 days before the planned marriage to the Deputy Director (Women Development), Department of Women and Child Development, Puducherry; in Karaikal to the Child Development Project Officer; in Mahe or Yanam to the Welfare Officer.",
        "Attach income and residence certificates, the wedding invitation, age proof and the death certificate of the bride's father.",
      ],
      hi: [
        "तय शादी से कम से कम 30 दिन पहले उप निदेशक (महिला विकास), महिला एवं बाल विकास विभाग, पुडुचेरी को आवेदन दें; कराईकल में बाल विकास परियोजना अधिकारी को और माहे या यानम में कल्याण अधिकारी को।",
        "आय और निवास प्रमाण पत्र, शादी का निमंत्रण-पत्र, उम्र का सबूत और दुल्हन के पिता का मृत्यु प्रमाण पत्र लगाएँ।",
      ],
    },
  },

  officialUrl: "https://wcd.py.gov.in/grant-marriage-allowances-widows-daughter",
  sources: [
    "https://wcd.py.gov.in/grant-marriage-allowances-widows-daughter",
    "https://wcd.py.gov.in/sites/default/files/wdm-may-2026.pdf",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
