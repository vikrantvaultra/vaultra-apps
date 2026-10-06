import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "krishi-sa-sajuli-yojana",
  tier: "compact",
  overlapGroup: "farmer-income",
  name: { en: "Mukhya Mantrir Krishi Sa-Sajuli Yojana", hi: "मुख्य मंत्रीर कृषि सा-सजुली योजना" },
  aka: ["Krishi Sa-Sajuli", "MMKSSY", "Assam farmer assistance"],
  shortDescription: {
    en: "Small and marginal farmers in Assam get yearly state assistance alongside PM-KISAN; the 2026-27 budget puts the combined support at ₹11,000 a year.",
    hi: "असम के छोटे और सीमांत किसानों को PM-KISAN के साथ राज्य की सालाना सहायता मिलती है; 2026-27 के बजट के अनुसार कुल मदद ₹11,000 सालाना है।",
  },
  level: "state",
  state: "assam",
  department: { en: "Agriculture Department, Government of Assam", hi: "कृषि विभाग, असम सरकार" },
  categories: ["agriculture"],
  tags: ["farmer", "kisan", "small farmer", "income support", "pm kisan", "assam"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("assam"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Mukhya Mantrir Krishi Sa-Sajuli Yojana is Assam's support scheme for small and marginal farmers. The 2026-27 budget says it will continue, giving annual assistance of ₹11,000 to every eligible small and marginal farmer in convergence with PM-KISAN.",
      "The budget does not say how much of this is the state's own share and how much is PM-KISAN, and we could not find the scheme guidelines on an official page. Confirm the details with your agriculture office.",
    ],
    hi: [
      "मुख्य मंत्रीर कृषि सा-सजुली योजना असम के छोटे और सीमांत किसानों के लिए सहायता योजना है। 2026-27 के बजट के अनुसार यह जारी रहेगी, और PM-KISAN के साथ मिलाकर हर पात्र छोटे और सीमांत किसान को सालाना ₹11,000 की सहायता मिलेगी।",
      "बजट में यह नहीं बताया गया कि इसमें राज्य का अपना हिस्सा कितना है और PM-KISAN का कितना, और योजना के दिशानिर्देश किसी सरकारी पेज पर नहीं मिले। विवरण अपने कृषि कार्यालय से पक्का करें।",
    ],
  },
  benefits: {
    en: ["Yearly assistance for small and marginal farmers, paid by DBT.", "Total support of ₹11,000 a year together with PM-KISAN, as stated in the 2026-27 budget."],
    hi: ["छोटे और सीमांत किसानों को सालाना सहायता, DBT से।", "2026-27 के बजट के अनुसार PM-KISAN के साथ मिलाकर कुल ₹11,000 सालाना।"],
  },
  eligibilityText: {
    en: [
      "A small or marginal farmer in Assam.",
      "Likely needs to be a PM-KISAN beneficiary, since the help is given in convergence with PM-KISAN; confirm locally.",
      "Land and other conditions are set by the scheme rules.",
    ],
    hi: [
      "असम का छोटा या सीमांत किसान।",
      "मदद PM-KISAN के साथ मिलाकर दी जाती है, इसलिए शायद PM-KISAN लाभार्थी होना ज़रूरी है; स्थानीय स्तर पर पुष्टि करें।",
      "ज़मीन और बाकी शर्तें योजना के नियमों में तय हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your Agriculture Development Officer or block agriculture office.",
        "Make sure your PM-KISAN registration, land records and Aadhaar-linked bank account are up to date.",
        "Follow the office's instructions for the state assistance.",
      ],
      hi: [
        "अपने कृषि विकास अधिकारी या ब्लॉक कृषि कार्यालय से संपर्क करें।",
        "देखें कि आपका PM-KISAN पंजीकरण, ज़मीन के कागज़ और आधार से जुड़ा बैंक खाता सही हैं।",
        "राज्य सहायता के लिए कार्यालय के निर्देश मानें।",
      ],
    },
  },

  officialUrl: "https://agri-horti.assam.gov.in/",
  sources: ["https://aladigitallibrary.in/handle/123456789/4238", "https://agri-horti.assam.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
