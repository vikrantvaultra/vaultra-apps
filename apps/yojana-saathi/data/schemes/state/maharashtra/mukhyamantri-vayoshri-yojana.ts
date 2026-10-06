import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-vayoshri-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Vayoshri Yojana", hi: "मुख्यमंत्री वयोश्री योजना" },
  aka: ["CM Vayoshri", "Vayoshree Yojana Maharashtra"],
  shortDescription: {
    en: "Senior citizens in Maharashtra aged 65 or more get a one-time ₹3,000 in their bank account to buy aids such as spectacles, hearing aids, walkers or wheelchairs.",
    hi: "महाराष्ट्र के 65 साल या उससे ज़्यादा उम्र के बुज़ुर्गों को चश्मा, सुनने की मशीन, वॉकर या व्हीलचेयर जैसे साधन ख़रीदने के लिए बैंक खाते में एक बार ₹3,000 मिलते हैं।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Social Justice and Special Assistance Department, Government of Maharashtra",
    hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार",
  },
  categories: ["social-welfare", "health"],
  tags: ["senior citizen", "hearing aid", "walker", "wheelchair", "spectacles", "dbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 3000, period: "one-time", kind: "cash" },
  ageRange: { min: 65 },
  kundliHouse: "senior",
  eligibility: all(residentOf("maharashtra"), minAge(65)),

  details: {
    en: [
      "Mukhyamantri Vayoshri Yojana, started in 2024, helps elderly people cope with problems of old age such as weak eyesight, hearing loss or difficulty walking.",
      "Each eligible senior gets ₹3,000 once, by DBT, to buy the aid they need. The scheme also links seniors to yoga and mental-wellbeing centres.",
    ],
    hi: [
      "2024 में शुरू हुई मुख्यमंत्री वयोश्री योजना बुज़ुर्गों को कमज़ोर नज़र, कम सुनाई देना या चलने में दिक़्क़त जैसी बुढ़ापे की परेशानियों से निपटने में मदद करती है।",
      "हर पात्र बुज़ुर्ग को ज़रूरी साधन ख़रीदने के लिए एक बार ₹3,000 DBT से मिलते हैं। योजना बुज़ुर्गों को योग और मानसिक स्वास्थ्य केंद्रों से भी जोड़ती है।",
    ],
  },
  benefits: {
    en: [
      "₹3,000 once, paid into your Aadhaar-linked bank account.",
      "Use it for aids like spectacles, hearing aids, walking sticks, walkers, wheelchairs, knee braces or a commode chair.",
    ],
    hi: [
      "एक बार ₹3,000, आधार से जुड़े बैंक खाते में।",
      "इसे चश्मा, सुनने की मशीन, छड़ी, वॉकर, व्हीलचेयर, घुटने का पट्टा या कमोड कुर्सी जैसे साधनों के लिए इस्तेमाल करें।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Maharashtra aged 65 or more.",
      "Family income within the scheme's limit (reported as up to ₹2 lakh a year; confirm at the office).",
      "Has an age-related difficulty that needs an aid, and an Aadhaar-linked bank account.",
    ],
    hi: [
      "65 साल या उससे ज़्यादा उम्र के महाराष्ट्र के निवासी।",
      "परिवार की आय योजना की सीमा में हो (बताई गई सीमा ₹2 लाख सालाना; कार्यालय से पक्का करें)।",
      "उम्र से जुड़ी कोई परेशानी हो जिसके लिए साधन चाहिए, और आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from the Assistant Commissioner of Social Welfare office in your district, or from camps held by the district.",
        "Fill it in and attach Aadhaar, age proof, an income declaration and your bank details.",
        "After approval, ₹3,000 is credited to your account.",
      ],
      hi: [
        "अपने ज़िले के सहायक आयुक्त समाज कल्याण कार्यालय से, या ज़िले के शिविरों से फ़ॉर्म लें।",
        "फ़ॉर्म भरें और आधार, उम्र का प्रमाण, आय का स्व-घोषणा पत्र और बैंक की जानकारी लगाएँ।",
        "मंज़ूरी के बाद ₹3,000 आपके खाते में आते हैं।",
      ],
    },
  },

  officialUrl: "https://nashik.gov.in/en/scheme-category/mukhyamantri-vayoshri-yojana",
  sources: [
    "https://nashik.gov.in/en/scheme-category/mukhyamantri-vayoshri-yojana",
    "https://jalgaon.gov.in/en/scheme-category/mukhyamantri-vayoshri-yojana",
    "https://retirement.outlookindia.com/plan/financial-planning/what-is-mukhyamantri-vayoshri-yojana-all-you-need-to-know",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
