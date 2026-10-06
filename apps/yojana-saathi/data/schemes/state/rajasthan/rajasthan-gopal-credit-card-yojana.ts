import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-gopal-credit-card-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Gopal Credit Card Yojana", hi: "मुख्यमंत्री गोपाल क्रेडिट कार्ड योजना" },
  aka: ["Gopal Credit Card", "Gopal credit card Rajasthan"],
  shortDescription: {
    en: "Cattle and dairy farmers in Rajasthan who are members of a milk cooperative can get an interest-free loan of up to ₹1 lakh for their animals.",
    hi: "राजस्थान में दुग्ध सहकारी समिति के सदस्य पशुपालक अपने पशुओं के लिए ₹1 लाख तक का बिना ब्याज कर्ज़ ले सकते हैं।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Cooperative Department, Government of Rajasthan", hi: "सहकारिता विभाग, राजस्थान सरकार" },
  categories: ["agriculture", "business"],
  tags: ["dairy", "cattle", "pashupalan", "interest free loan", "gopal", "rajasthan"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 100_000, period: "one-time", kind: "loan" },
  kundliHouse: "farming",
  eligibility: all(residentOf("rajasthan"), when("occupation", "in", ["livestock-dairy", "farmer"])),

  details: {
    en: [
      "The Gopal Credit Card Yojana was announced by the Rajasthan government in 2024 to help families that keep cows and buffaloes. It gives a short-term loan with no interest and no collateral.",
      "The loan can be used for buying animals, fodder and medicines, or improving cattle sheds. It is given through cooperative banks and societies linked to the Cooperative Department and is repaid within a year.",
    ],
    hi: [
      "गोपाल क्रेडिट कार्ड योजना राजस्थान सरकार ने 2024 में गाय-भैंस पालने वाले परिवारों की मदद के लिए घोषित की। इसमें बिना ब्याज और बिना गारंटी का छोटी अवधि का कर्ज़ मिलता है।",
      "कर्ज़ पशु ख़रीदने, चारा और दवाइयाँ लेने या पशुशाला सुधारने में लगाया जा सकता है। यह सहकारिता विभाग से जुड़े सहकारी बैंकों और समितियों के ज़रिए मिलता है और एक साल में लौटाना होता है।",
    ],
  },
  benefits: {
    en: [
      "A loan of up to ₹1 lakh with no interest.",
      "No collateral security needed.",
      "Use it for animals, fodder, medicines or the cattle shed.",
    ],
    hi: [
      "₹1 लाख तक का बिना ब्याज कर्ज़।",
      "कोई गारंटी नहीं चाहिए।",
      "पशु, चारा, दवाइयाँ या पशुशाला के लिए इस्तेमाल करें।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Rajasthan and keep cattle or run a small dairy.",
      "You are a member of a milk producers' cooperative society.",
      "You repay the loan on time (within one year) to keep it interest-free.",
    ],
    hi: [
      "आप राजस्थान में रहते हैं और पशुपालन या छोटी डेयरी करते हैं।",
      "आप दुग्ध उत्पादक सहकारी समिति के सदस्य हैं।",
      "कर्ज़ बिना ब्याज रहे, इसके लिए समय पर (एक साल के अंदर) लौटाएँ।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your milk cooperative society or the nearest primary cooperative society / central cooperative bank branch.",
        "Fill in the Gopal Credit Card form with your Jan Aadhaar, Aadhaar and bank details.",
        "After verification the loan limit is sanctioned on the card.",
      ],
      hi: [
        "अपनी दुग्ध सहकारी समिति या नज़दीकी ग्राम सेवा सहकारी समिति / केंद्रीय सहकारी बैंक शाखा से संपर्क करें।",
        "जन आधार, आधार और बैंक विवरण के साथ गोपाल क्रेडिट कार्ड फ़ॉर्म भरें।",
        "जाँच के बाद कार्ड पर कर्ज़ की सीमा मंज़ूर होती है।",
      ],
    },
  },

  officialUrl: "https://rajsahakar.rajasthan.gov.in/",
  sources: [
    "https://krishijagran.com/news/gopal-credit-card-scheme-rajasthan-government-offers-rs-1-lakh-interest-free-loans-to-empower-cattle-farmers/",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-rajasthan/gopal-credit-card-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
