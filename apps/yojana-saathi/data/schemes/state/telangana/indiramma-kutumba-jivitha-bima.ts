import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indiramma-kutumba-jivitha-bima",
  tier: "compact",
  name: { en: "Indiramma Kutumba Jivitha Bima (Family Life Insurance)", hi: "इंदिरम्मा कुटुंब जीविता बीमा (परिवार जीवन बीमा)" },
  aka: ["Indiramma Family Life Insurance", "Indiramma Jeevitha Bima", "Telangana family insurance 5 lakh"],
  shortDescription: {
    en: "A new Telangana scheme announced in the 2026-27 budget to give life insurance cover of ₹5 lakh to every family in the state.",
    hi: "तेलंगाना की नई योजना, जिसकी घोषणा 2026-27 के बजट में हुई, राज्य के हर परिवार को ₹5 लाख का जीवन बीमा देने के लिए।",
  },
  level: "state",
  state: "telangana",
  department: { en: "Government of Telangana", hi: "तेलंगाना सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["life insurance", "family", "5 lakh", "bima", "death cover", "telangana"],
  benefitType: "insurance",
  isDBT: false,
  kundliHouse: "insurance",
  eligibility: all(residentOf("telangana")),

  details: {
    en: [
      "The 2026-27 Telangana budget announced the Indiramma Family Life Insurance Scheme, which is to give life insurance cover of ₹5 lakh to every family in the state. ₹4,000 crore was set aside for it, and it was due to start in June 2026.",
      "The same budget stopped the separate allocation for Rythu Bima (farmers' group life insurance), so farm families are expected to be covered under this new family scheme. Check the latest rules before relying on it.",
    ],
    hi: [
      "तेलंगाना के 2026-27 बजट में इंदिरम्मा परिवार जीवन बीमा योजना की घोषणा हुई, जिसमें राज्य के हर परिवार को ₹5 लाख का जीवन बीमा देना है। इसके लिए ₹4,000 करोड़ रखे गए और इसे जून 2026 में शुरू होना था।",
      "इसी बजट में रैतु बीमा (किसानों का समूह जीवन बीमा) का अलग प्रावधान बंद कर दिया गया, इसलिए माना जा रहा है कि किसान परिवार भी इस नई योजना में आएँगे। भरोसा करने से पहले नए नियम ज़रूर देख लें।",
    ],
  },
  benefits: {
    en: ["Planned life insurance cover of ₹5 lakh per family, paid to the nominee on the death of the insured member."],
    hi: ["हर परिवार के लिए ₹5 लाख का प्रस्तावित जीवन बीमा, बीमित सदस्य की मृत्यु पर नामांकित व्यक्ति को मिलेगा।"],
  },
  eligibilityText: {
    en: [
      "Announced for every family in Telangana.",
      "Who exactly in the family is insured, the age limits and the enrolment process were not yet published when we checked.",
    ],
    hi: [
      "तेलंगाना के हर परिवार के लिए घोषित।",
      "परिवार में किसका बीमा होगा, उम्र की सीमा और नाम जुड़वाने का तरीक़ा हमारी जाँच के समय तक प्रकाशित नहीं हुआ था।",
    ],
  },
  applicationProcess: {
    offline: {
      en: ["Ask at your Gram Panchayat, MPDO or municipal office whether enrolment has started and what documents are needed."],
      hi: ["अपनी ग्राम पंचायत, MPDO या नगरपालिका दफ़्तर में पूछें कि नाम जुड़वाना शुरू हुआ है या नहीं और कौन से दस्तावेज़ चाहिए।"],
    },
  },

  officialUrl: "https://www.telangana.gov.in/budget-2026-2027/",
  sources: [
    "https://prsindia.org/files/budget/budget_state/telangana/2026/Budget_Analysis_2026-27-TS.pdf",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Weaker-Section-Housing-Programme-Social-Welfare-Department-Backward-Classes-Welfare-Department-Minority-Department.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
