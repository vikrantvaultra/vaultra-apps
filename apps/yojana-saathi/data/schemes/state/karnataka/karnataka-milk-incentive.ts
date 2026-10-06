import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-milk-incentive",
  tier: "compact",
  name: { en: "Karnataka Milk Production Incentive", hi: "कर्नाटक दूध उत्पादन प्रोत्साहन राशि" },
  aka: ["milk incentive Karnataka", "₹5 per litre milk incentive", "Halu protsaha dhana"],
  shortDescription: {
    en: "Dairy farmers in Karnataka who pour milk at a dairy co-operative society get an extra ₹5 for every litre from the state government.",
    hi: "कर्नाटक के जो डेयरी किसान दूध सहकारी समिति में दूध देते हैं, उन्हें राज्य सरकार से हर लीटर पर ₹5 अतिरिक्त मिलते हैं।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Department of Animal Husbandry and Veterinary Services, Government of Karnataka",
    hi: "पशुपालन और पशु चिकित्सा सेवा विभाग, कर्नाटक सरकार",
  },
  categories: ["agriculture"],
  tags: ["milk", "dairy", "incentive", "cow", "kmf", "nandini", "karnataka"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("karnataka"), when("occupation", "eq", "livestock-dairy")),

  details: {
    en: [
      "To support dairy farmers, the Karnataka government adds an incentive on top of the milk price for milk supplied to dairy co-operative societies (the network that sells under the Nandini brand).",
      "The incentive is paid to the bank accounts of member producers, based on the litres they supplied.",
    ],
    hi: [
      "डेयरी किसानों की मदद के लिए कर्नाटक सरकार दूध सहकारी समितियों (जो नंदिनी ब्रांड के नाम से बेचती हैं) को दिए गए दूध की क़ीमत के ऊपर प्रोत्साहन राशि देती है।",
      "यह राशि सदस्य उत्पादकों के बैंक खाते में, उनके दिए गए लीटर के हिसाब से आती है।",
    ],
  },
  benefits: {
    en: ["₹5 for every litre of milk supplied to a dairy co-operative society.", "Paid on top of the price the society pays for the milk."],
    hi: ["दूध सहकारी समिति को दिए गए हर लीटर दूध पर ₹5।", "यह समिति से मिलने वाली दूध की क़ीमत के ऊपर मिलता है।"],
  },
  eligibilityText: {
    en: [
      "A dairy farmer in Karnataka who is a member of a milk producers' co-operative society.",
      "Supplies milk to that society.",
      "Has an Aadhaar-linked bank account registered with the society.",
    ],
    hi: [
      "कर्नाटक का डेयरी किसान जो दूध उत्पादक सहकारी समिति का सदस्य हो।",
      "उसी समिति को दूध देता हो।",
      "समिति में आधार से जुड़ा बैंक खाता दर्ज हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Become a member of your village milk producers' co-operative society.",
        "Register your Aadhaar and bank account with the society.",
        "The incentive is calculated from your milk records and paid to your account; ask the society secretary if it is delayed.",
      ],
      hi: [
        "अपने गाँव की दूध उत्पादक सहकारी समिति के सदस्य बनें।",
        "समिति में अपना आधार और बैंक खाता दर्ज कराएँ।",
        "प्रोत्साहन राशि आपके दूध के रिकॉर्ड से तय होकर खाते में आती है; देर हो तो समिति के सचिव से पूछें।",
      ],
    },
  },

  officialUrl: "https://ahvs.karnataka.gov.in/29/schemes-&-benefits/kn",
  sources: ["https://ahvs.karnataka.gov.in/29/schemes-&-benefits/kn", "https://ahvs.karnataka.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
