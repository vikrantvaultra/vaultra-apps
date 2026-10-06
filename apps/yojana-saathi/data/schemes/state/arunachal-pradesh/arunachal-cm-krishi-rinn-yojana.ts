import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "arunachal-cm-krishi-rinn-yojana",
  tier: "compact",
  name: { en: "Chief Minister's Krishi Rinn Yojana (Arunachal Pradesh)", hi: "मुख्यमंत्री कृषि ऋण योजना (अरुणाचल प्रदेश)" },
  aka: ["CM Krishi Rinn Yojana", "Zero interest crop loan Arunachal", "CMKRY"],
  shortDescription: {
    en: "Farmers in Arunachal Pradesh who repay on time pay zero effective interest on short-term crop loans (KCC) up to ₹3 lakh, as the state adds 3% to the Centre's interest help.",
    hi: "अरुणाचल प्रदेश के जो किसान समय पर लोन चुकाते हैं, उन्हें ₹3 लाख तक के अल्पकालिक फ़सल लोन (KCC) पर असल में शून्य ब्याज देना होता है, क्योंकि राज्य केंद्र की ब्याज मदद में 3% और जोड़ता है।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Department of Agriculture, Government of Arunachal Pradesh",
    hi: "कृषि विभाग, अरुणाचल प्रदेश सरकार",
  },
  categories: ["agriculture"],
  tags: ["crop loan", "kcc", "zero interest", "farmer", "interest subvention", "arunachal"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("arunachal-pradesh"), when("occupation", "in", ["farmer"])),

  details: {
    en: [
      "Under this state scheme, started in 2018, the Government of Arunachal Pradesh pays an extra 3% interest subvention on short-term crop loans and Kisan Credit Card loans. Together with the Centre's 4% for prompt repayment, this brings the effective interest to zero.",
      "It applies to crop loans up to ₹3 lakh taken by farmers, cultivators and Self-Help Groups through banks.",
    ],
    hi: [
      "2018 में शुरू हुई इस राज्य योजना में अरुणाचल प्रदेश सरकार अल्पकालिक फ़सल लोन और किसान क्रेडिट कार्ड लोन पर 3% अतिरिक्त ब्याज छूट देती है। समय पर चुकाने पर मिलने वाली केंद्र की 4% छूट के साथ मिलकर असल ब्याज शून्य हो जाता है।",
      "यह किसानों, खेतिहरों और स्वयं सहायता समूहों के बैंक से लिए ₹3 लाख तक के फ़सल लोन पर लागू है।",
    ],
  },
  benefits: {
    en: [
      "0% effective interest on short-term crop loans up to ₹3 lakh when you repay on time.",
      "3% interest subvention from the state on top of the Centre's 4%.",
    ],
    hi: [
      "समय पर चुकाने पर ₹3 लाख तक के अल्पकालिक फ़सल लोन पर असल ब्याज 0%।",
      "केंद्र की 4% छूट के ऊपर राज्य की ओर से 3% ब्याज छूट।",
    ],
  },
  eligibilityText: {
    en: [
      "Farmers, cultivators and Self-Help Groups in Arunachal Pradesh.",
      "A short-term crop loan or KCC loan from a bank, repaid on time.",
      "A land holding certificate signed by the Circle Officer or EAC.",
    ],
    hi: [
      "अरुणाचल प्रदेश के किसान, खेतिहर और स्वयं सहायता समूह।",
      "बैंक से लिया अल्पकालिक फ़सल लोन या KCC लोन, जो समय पर चुकाया जाए।",
      "सर्कल ऑफ़िसर या EAC के हस्ताक्षर वाला ज़मीन होने का प्रमाण पत्र।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get a land holding certificate signed by your Circle Officer or EAC.",
        "Submit it with the Kisan Credit Card application form at your nearest bank branch.",
        "Repay the loan on time so that the full interest subvention is applied.",
      ],
      hi: [
        "अपने सर्कल ऑफ़िसर या EAC से ज़मीन होने का प्रमाण पत्र बनवाएँ।",
        "इसे किसान क्रेडिट कार्ड आवेदन फ़ॉर्म के साथ नज़दीकी बैंक शाखा में जमा करें।",
        "लोन समय पर चुकाएँ, ताकि पूरी ब्याज छूट मिल सके।",
      ],
    },
  },

  officialUrl: "https://tawang.nic.in/scheme/chief-ministers-krishi-rinn-yojana/",
  sources: [
    "https://tawang.nic.in/scheme/chief-ministers-krishi-rinn-yojana/",
    "https://lohit.nic.in/schemes/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
