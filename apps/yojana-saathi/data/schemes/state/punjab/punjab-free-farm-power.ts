import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-free-farm-power",
  tier: "compact",
  name: { en: "Free Electricity for Farm Tubewells (Punjab)", hi: "खेती के ट्यूबवेल के लिए मुफ़्त बिजली (पंजाब)" },
  aka: ["Punjab free power farmers", "AP connection free bijli", "tubewell free electricity Punjab"],
  shortDescription: {
    en: "All agricultural (AP) electricity connections in Punjab, such as farm tubewells, get free power; the state government pays PSPCL the full cost.",
    hi: "पंजाब के सभी खेती वाले (AP) बिजली कनेक्शनों, जैसे खेत के ट्यूबवेल, को मुफ़्त बिजली मिलती है; पूरा ख़र्च राज्य सरकार PSPCL को देती है।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Power, Government of Punjab (through PSPCL)",
    hi: "बिजली विभाग, पंजाब सरकार (PSPCL के ज़रिए)",
  },
  categories: ["agriculture", "energy-savings"],
  tags: ["free electricity", "farmer", "tubewell", "agriculture power", "pspcl", "punjab"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("punjab"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Punjab supplies electricity free to all agricultural consumers. The state government confirmed this for 2026-27 in its subsidy decision of 4 March 2026, which the electricity regulator included in the tariff order.",
      "The 2026-27 budget set aside ₹7,715 crore for the agriculture power subsidy. You do not get a cash payment; your farm connection is simply not billed for energy.",
    ],
    hi: [
      "पंजाब सभी खेती वाले बिजली उपभोक्ताओं को मुफ़्त बिजली देता है। राज्य सरकार ने 4 मार्च 2026 के सब्सिडी फ़ैसले में 2026-27 के लिए इसकी पुष्टि की, जिसे बिजली नियामक आयोग ने टैरिफ़ ऑर्डर में शामिल किया।",
      "2026-27 के बजट में खेती की बिजली सब्सिडी के लिए ₹7,715 करोड़ रखे गए हैं। आपको नक़द पैसा नहीं मिलता; आपके खेत के कनेक्शन पर बिजली का बिल ही नहीं बनता।",
    ],
  },
  benefits: {
    en: ["Free electricity for agricultural pump-set (AP) connections.", "No energy bill for your farm tubewell connection."],
    hi: ["खेती के पंप-सेट (AP) कनेक्शन पर मुफ़्त बिजली।", "खेत के ट्यूबवेल कनेक्शन पर बिजली का कोई बिल नहीं।"],
  },
  eligibilityText: {
    en: ["Holds an agricultural (AP) electricity connection from PSPCL in Punjab.", "The connection is used for farming."],
    hi: ["पंजाब में PSPCL का खेती वाला (AP) बिजली कनेक्शन हो।", "कनेक्शन खेती के काम में इस्तेमाल होता हो।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate application is needed for existing agricultural connections.",
        "For a new tubewell connection, apply at your PSPCL sub-division office.",
      ],
      hi: [
        "पहले से चल रहे खेती वाले कनेक्शन के लिए अलग आवेदन की ज़रूरत नहीं।",
        "नए ट्यूबवेल कनेक्शन के लिए अपने PSPCL सब-डिवीज़न दफ़्तर में आवेदन करें।",
      ],
    },
  },

  officialUrl: "https://pspcl.in/",
  sources: [
    "https://pserc.punjab.gov.in/pages/Chapter%206%20TO-2026-27.pdf",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1997,
  status: "active",
};

export default scheme;
