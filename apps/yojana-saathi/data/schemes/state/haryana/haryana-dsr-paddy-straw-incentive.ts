import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-dsr-paddy-straw-incentive",
  tier: "compact",
  name: {
    en: "Haryana Incentives for Direct Seeded Rice and Paddy Straw Management",
    hi: "हरियाणा धान की सीधी बिजाई (DSR) और पराली प्रबंधन प्रोत्साहन",
  },
  aka: ["DSR subsidy Haryana", "Parali incentive", "CRM ₹1200 per acre"],
  shortDescription: {
    en: "Haryana paddy farmers get ₹4,500 per acre for sowing rice directly (DSR) and ₹1,200 per acre for managing paddy straw instead of burning it.",
    hi: "हरियाणा के धान किसानों को सीधी बिजाई (DSR) पर ₹4,500 प्रति एकड़ और पराली जलाने की जगह उसका प्रबंधन करने पर ₹1,200 प्रति एकड़ मिलते हैं।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Agriculture and Farmers Welfare Department, Haryana",
    hi: "कृषि एवं किसान कल्याण विभाग, हरियाणा",
  },
  categories: ["agriculture"],
  tags: ["dsr", "paddy", "parali", "stubble", "farmer", "per acre", "haryana"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("haryana"),
    labelled(when("occupation", "eq", "farmer"), { en: "You are a farmer", hi: "आप किसान हैं" }),
  ),

  details: {
    en: [
      "Haryana pays per-acre incentives to paddy farmers who use water-saving direct seeded rice (DSR) and who manage crop residue in the field or sell it, instead of burning it.",
      "The 2026-27 budget confirmed that the ₹4,500 per acre DSR incentive and the ₹1,200 per acre paddy straw incentive will continue. Registration is done on the Meri Fasal Mera Byora portal within the dates the department announces each season.",
    ],
    hi: [
      "हरियाणा सरकार उन धान किसानों को प्रति एकड़ प्रोत्साहन देती है जो पानी बचाने वाली सीधी बिजाई (DSR) अपनाते हैं और पराली जलाने की जगह उसका खेत में प्रबंधन करते हैं या उसे बेचते हैं।",
      "2026-27 के बजट में ₹4,500 प्रति एकड़ DSR प्रोत्साहन और ₹1,200 प्रति एकड़ पराली प्रोत्साहन जारी रखने की पुष्टि की गई। पंजीकरण मेरी फ़सल मेरा ब्यौरा पोर्टल पर, हर सीज़न विभाग की बताई तारीख़ों में होता है।",
    ],
  },
  benefits: {
    en: ["₹4,500 per acre for paddy sown by direct seeding (DSR).", "₹1,200 per acre for managing paddy straw without burning."],
    hi: ["सीधी बिजाई (DSR) से बोए गए धान पर ₹4,500 प्रति एकड़।", "पराली बिना जलाए प्रबंधन करने पर ₹1,200 प्रति एकड़।"],
  },
  eligibilityText: {
    en: [
      "A farmer in Haryana growing paddy.",
      "Registered on Meri Fasal Mera Byora for the season, and in the separate DSR or crop residue registration before the last date.",
      "The area is verified by the department, and no burning is reported on your field (for the straw incentive).",
    ],
    hi: [
      "हरियाणा का धान उगाने वाला किसान।",
      "उस सीज़न के लिए मेरी फ़सल मेरा ब्यौरा पर, और आख़िरी तारीख़ से पहले DSR या पराली प्रबंधन के अलग पंजीकरण में दर्ज हो।",
      "विभाग रकबे की पुष्टि करे, और (पराली प्रोत्साहन के लिए) आपके खेत में आग लगने की कोई सूचना न हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to fasal.haryana.gov.in (Meri Fasal Mera Byora) and register your paddy area.",
        "Register under the DSR scheme or the crop residue management scheme before the deadline shown on the portal.",
        "After physical verification, the incentive is credited to your bank account.",
      ],
      hi: [
        "fasal.haryana.gov.in (मेरी फ़सल मेरा ब्यौरा) पर लॉग इन करके धान का रकबा दर्ज करें।",
        "पोर्टल पर दी गई आख़िरी तारीख़ से पहले DSR योजना या पराली प्रबंधन योजना में पंजीकरण करें।",
        "मौके पर जाँच के बाद प्रोत्साहन राशि आपके बैंक खाते में आती है।",
      ],
    },
  },

  officialUrl: "https://fasal.haryana.gov.in/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2026/03/202603201031104005.pdf",
    "https://fasal.haryana.gov.in/",
    "https://agriharyana.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
