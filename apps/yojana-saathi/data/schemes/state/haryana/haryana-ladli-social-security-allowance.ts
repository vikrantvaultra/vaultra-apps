import { all, ageBetween, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-ladli-social-security-allowance",
  tier: "compact",
  name: { en: "Ladli Social Security Allowance (Haryana)", hi: "लाडली सामाजिक सुरक्षा भत्ता (हरियाणा)" },
  aka: ["Ladli Pension", "Ladli Bhatta"],
  shortDescription: {
    en: "Haryana parents who have only daughters and no son get ₹3,200 a month for 15 years once either parent turns 45, if family income is up to ₹2 lakh a year.",
    hi: "हरियाणा के जिन माता-पिता की सिर्फ़ बेटियाँ हैं और कोई बेटा नहीं, उन्हें किसी एक के 45 साल का होने पर 15 साल तक हर महीने ₹3,200 मिलते हैं, अगर परिवार की आय ₹2 लाख तक है।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Social Justice, Empowerment, Welfare of SCs & BCs and Antyodaya (SEWA) Department, Haryana",
    hi: "सामाजिक न्याय, अधिकारिता, अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण तथा अंत्योदय (सेवा) विभाग, हरियाणा",
  },
  categories: ["social-welfare", "women-child"],
  tags: ["ladli", "daughters", "girl child", "parents", "allowance", "haryana"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 3200, period: "monthly", kind: "pension", maxMonths: 180 },
  ageRange: { min: 45, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("haryana"), ...ageBetween(45, 60), incomeUpTo(200_000)),

  details: {
    en: [
      "The Ladli Social Security Allowance supports parents who have only daughters. It started in 2006 and is now paid at ₹3,200 a month (from 1 November 2025), the same rate as other Haryana social security pensions.",
      "Payment starts when either parent turns 45 and continues for 15 years. It is paid to the mother; if she has died, to the father.",
    ],
    hi: [
      "लाडली सामाजिक सुरक्षा भत्ता उन माता-पिता की मदद करता है जिनकी सिर्फ़ बेटियाँ हैं। यह 2006 में शुरू हुआ और अब ₹3,200 महीना (1 नवंबर 2025 से) मिलता है, जो हरियाणा की दूसरी सामाजिक सुरक्षा पेंशनों के बराबर है।",
      "माता या पिता में से किसी एक के 45 साल का होने पर भुगतान शुरू होता है और 15 साल तक चलता है। पैसा माँ को मिलता है; माँ न हों तो पिता को।",
    ],
  },
  benefits: {
    en: ["₹3,200 a month for 15 years, starting when either parent turns 45.", "Paid to the mother, or to the father if the mother is not alive."],
    hi: ["माता या पिता में से किसी के 45 साल होने से 15 साल तक हर महीने ₹3,200।", "पैसा माँ को मिलता है, माँ जीवित न हों तो पिता को।"],
  },
  eligibilityText: {
    en: [
      "The family has only daughters and no son (biological or adopted).",
      "The biological parent(s) are domicile of Haryana or work for the Haryana Government.",
      "Total family income from all sources is up to ₹2 lakh a year.",
      "Either parent has turned 45.",
    ],
    hi: [
      "परिवार में सिर्फ़ बेटियाँ हों, कोई बेटा (अपना या गोद लिया) न हो।",
      "जैविक माता-पिता हरियाणा के अधिवासी हों या हरियाणा सरकार में काम करते हों।",
      "सभी स्रोतों से परिवार की कुल सालाना आय ₹2 लाख तक हो।",
      "माता या पिता में से कोई 45 साल का हो गया हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Make sure your Family ID (PPP) shows all children, income and bank account correctly.",
        "Apply on saralharyana.gov.in or at a SARAL Kendra / CSC, or contact the District Social Welfare Officer.",
      ],
      hi: [
        "पक्का करें कि परिवार पहचान पत्र (PPP) में सभी बच्चे, आय और बैंक खाता सही दर्ज हों।",
        "saralharyana.gov.in पर या SARAL केंद्र / CSC पर आवेदन करें, या ज़िला समाज कल्याण अधिकारी से संपर्क करें।",
      ],
    },
  },

  officialUrl: "https://socialjusticehry.gov.in/ladli-social-security-allowance-scheme/",
  sources: [
    "https://socialjusticehry.gov.in/ladli-social-security-allowance-scheme/",
    "https://cdnbbsr.s3waas.gov.in/s392bbd31f8e0e43a7da8a6295b251725f/uploads/2021/07/2021072355.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "active",
};

export default scheme;
