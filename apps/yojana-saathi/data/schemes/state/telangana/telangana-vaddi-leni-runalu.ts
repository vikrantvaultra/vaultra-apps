import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-vaddi-leni-runalu",
  tier: "compact",
  name: { en: "Vaddi Leni Runalu (Interest-Free Loans for Women's SHGs)", hi: "वड्डी लेनी रुणालु (महिला SHG के लिए ब्याज मुक्त लोन)" },
  aka: ["Vaddileni Runalu", "Interest free loans DWACRA Telangana", "SHG interest subvention Telangana", "Indira Mahila Shakti"],
  shortDescription: {
    en: "Women's self-help groups in Telangana get bank loans with the interest paid back by the state, so the loan is effectively interest-free.",
    hi: "तेलंगाना में महिलाओं के स्वयं सहायता समूहों को बैंक लोन मिलता है जिसका ब्याज राज्य सरकार लौटा देती है, यानी लोन असल में ब्याज मुक्त हो जाता है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "SERP (Panchayat Raj and Rural Development Department) and MEPMA (Municipal Administration Department), Government of Telangana",
    hi: "SERP (पंचायत राज एवं ग्रामीण विकास विभाग) और MEPMA (नगर प्रशासन विभाग), तेलंगाना सरकार",
  },
  categories: ["women-child", "business"],
  tags: ["shg", "self help group", "interest free loan", "dwacra", "women", "mahila", "telangana"],
  benefitType: "loan",
  isDBT: true,
  kundliHouse: "business",
  eligibility: all(residentOf("telangana"), female()),

  details: {
    en: [
      "Under Vaddi Leni Runalu, the Telangana government pays back the interest on bank loans taken by women's self-help groups (SHGs) that repay on time, so members effectively borrow without interest.",
      "The 2026-27 budget set aside ₹2,500 crore for interest-free loans to SHG women. In September 2026 the government said 4.54 lakh SHGs had received ₹60,487 crore in bank linkage and ₹1,900 crore in interest subsidy.",
    ],
    hi: [
      "वड्डी लेनी रुणालु में तेलंगाना सरकार महिलाओं के स्वयं सहायता समूहों (SHG) के उन बैंक लोन का ब्याज लौटाती है जो समय पर चुकाए जाते हैं, इसलिए सदस्यों को लोन असल में बिना ब्याज मिलता है।",
      "2026-27 के बजट में SHG महिलाओं के ब्याज मुक्त लोन के लिए ₹2,500 करोड़ रखे गए। सितंबर 2026 में सरकार ने बताया कि 4.54 लाख SHG को ₹60,487 करोड़ का बैंक लोन और ₹1,900 करोड़ की ब्याज छूट मिली है।",
    ],
  },
  benefits: {
    en: ["Bank loans for your SHG with the interest reimbursed by the state.", "Money can be used for small businesses and household livelihoods."],
    hi: ["आपके SHG को बैंक लोन, जिसका ब्याज राज्य सरकार लौटाती है।", "पैसा छोटे कारोबार और घर की रोज़ी-रोटी के कामों में लगाया जा सकता है।"],
  },
  eligibilityText: {
    en: [
      "You are a woman member of a self-help group registered with SERP (villages) or MEPMA (towns) in Telangana.",
      "Your group repays its bank loan instalments on time.",
    ],
    hi: [
      "आप तेलंगाना में SERP (गाँव) या MEPMA (शहर) से जुड़े स्वयं सहायता समूह की महिला सदस्य हैं।",
      "आपका समूह बैंक लोन की किस्तें समय पर चुकाता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Join or form a women's SHG through your village organisation (SERP) or town-level federation (MEPMA).",
        "Apply for a bank linkage loan through your SHG and repay on time; the interest is credited back by the government.",
      ],
      hi: [
        "अपने गाँव के संगठन (SERP) या शहर के महासंघ (MEPMA) के ज़रिए महिला SHG से जुड़ें या नया बनाएँ।",
        "अपने SHG के ज़रिए बैंक लोन के लिए आवेदन करें और समय पर चुकाएँ; ब्याज सरकार वापस जमा करती है।",
      ],
    },
  },

  officialUrl: "https://serp.telangana.gov.in/",
  sources: [
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
    "https://www.telangana.gov.in/news/press-releases/2024/07/deputy-cm-presents-budget-for-the-year-2024-25/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
