import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-one-girl-child-assistance",
  tier: "compact",
  overlapGroup: "daughter-savings",
  name: {
    en: "Financial Assistance to Poor Parents with Only One Girl Child Studying in Class 8 to 10 (Puducherry)",
    hi: "कक्षा 8 से 10 में पढ़ रही इकलौती बेटी वाले गरीब माता-पिता को आर्थिक सहायता (पुडुचेरी)",
  },
  aka: ["Puducherry single girl child scheme", "One girl child incentive Puducherry"],
  shortDescription: {
    en: "Poor parents in Puducherry whose only child is a daughter studying in Class 8, 9 or 10 get a one-time grant (₹40,000 in the May 2026 list) for the girl.",
    hi: "पुडुचेरी के वे गरीब माता-पिता जिनकी इकलौती संतान बेटी है और वह कक्षा 8, 9 या 10 में पढ़ रही है, बेटी के लिए एक बार अनुदान पाते हैं (मई 2026 की सूची में ₹40,000)।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Department of Women and Child Development, Government of Puducherry",
    hi: "महिला एवं बाल विकास विभाग, पुडुचेरी सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "daughter", "only child", "small family", "nsc", "puducherry"],
  benefitType: "savings",
  isDBT: false,
  value: { amount: 40000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(residentOf("puducherry"), labelled(incomeUpTo(75_000), { en: "Parents' annual income up to ₹75,000", hi: "माता-पिता की सालाना आय ₹75,000 तक" })),

  details: {
    en: [
      "This Puducherry scheme rewards small families and treats the girl child as an asset. Parents whose only child is a daughter studying in Class 8 to 10 get a grant meant to ease the cost of her future, including her marriage.",
      "The department's page describes the money as a Post Office deposit (National Savings Certificate) in the girl's name that matures when she turns 18. The page still lists ₹25,000, but the May 2026 beneficiary list for Puducherry region shows ₹40,000 per girl.",
    ],
    hi: [
      "पुडुचेरी की यह योजना छोटे परिवार को बढ़ावा देती है और बेटी को परिवार की पूँजी मानती है। जिन माता-पिता की इकलौती संतान बेटी है और वह कक्षा 8 से 10 में पढ़ रही है, उन्हें उसके भविष्य, शादी समेत, के खर्च में मदद के लिए अनुदान मिलता है।",
      "विभाग के पेज के अनुसार यह पैसा बेटी के नाम डाकघर में राष्ट्रीय बचत पत्र (NSC) के रूप में जमा होता है, जो 18 साल की उम्र पर पकता है। पेज पर अभी भी ₹25,000 लिखा है, पर पुडुचेरी क्षेत्र की मई 2026 की लाभार्थी सूची में हर बेटी के आगे ₹40,000 दिखाए गए हैं।",
    ],
  },
  benefits: {
    en: ["A one-time grant for the girl (₹40,000 per girl in the May 2026 list), kept as a savings deposit in her name until she turns 18."],
    hi: ["बेटी के लिए एक बार अनुदान (मई 2026 की सूची में हर बेटी के लिए ₹40,000), जो 18 साल की होने तक उसके नाम बचत के रूप में जमा रहता है।"],
  },
  eligibilityText: {
    en: [
      "Parents with only one child, a girl, who is studying in Class 8, 9 or 10.",
      "Annual income of the parents from all sources not more than ₹75,000.",
      "Parents are Indian nationals and natives of Puducherry for at least five years.",
    ],
    hi: [
      "ऐसे माता-पिता जिनकी केवल एक संतान है, बेटी, और वह कक्षा 8, 9 या 10 में पढ़ रही है।",
      "माता-पिता की सभी स्रोतों से सालाना आय ₹75,000 से ज़्यादा न हो।",
      "माता-पिता भारतीय नागरिक हों और कम से कम पाँच साल से पुडुचेरी के निवासी हों।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply to the Deputy Director (Women Development), Department of Women and Child Development, Puducherry; in Karaikal to the Child Development Project Officer; in Mahe or Yanam to the Welfare Officer.",
        "Attach income and residence certificates, the girl's birth certificate, a study certificate and forwarding letter from her school, the ration card, the parents' voter IDs and a certificate that she is your only child.",
      ],
      hi: [
        "उप निदेशक (महिला विकास), महिला एवं बाल विकास विभाग, पुडुचेरी को आवेदन दें; कराईकल में बाल विकास परियोजना अधिकारी को और माहे या यानम में कल्याण अधिकारी को।",
        "आय और निवास प्रमाण पत्र, बेटी का जन्म प्रमाण पत्र, स्कूल का अध्ययन प्रमाण पत्र और अग्रेषण पत्र, राशन कार्ड, माता-पिता के वोटर ID और यह प्रमाण पत्र लगाएँ कि वह आपकी इकलौती संतान है।",
      ],
    },
  },

  officialUrl: "https://wcd.py.gov.in/grant-financial-assistance-poor-parents-having-only-one-girl-child-who-studying-8th-10th-standard",
  sources: [
    "https://wcd.py.gov.in/grant-financial-assistance-poor-parents-having-only-one-girl-child-who-studying-8th-10th-standard",
    "https://wcd.py.gov.in/sites/default/files/8-10-may-2026.pdf",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
