import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mera-pani-meri-virasat",
  tier: "compact",
  name: { en: "Mera Pani Meri Virasat Yojana", hi: "मेरा पानी मेरी विरासत योजना" },
  aka: ["MPMV", "Mera Pani Meri Virasat"],
  shortDescription: {
    en: "Haryana farmers who give up paddy and grow other crops (or leave the land fallow) get an incentive of ₹8,000 per acre to save groundwater.",
    hi: "हरियाणा के जो किसान धान छोड़कर दूसरी फ़सल उगाते हैं (या ज़मीन ख़ाली छोड़ते हैं), उन्हें भूजल बचाने के लिए ₹8,000 प्रति एकड़ प्रोत्साहन राशि मिलती है।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Agriculture and Farmers Welfare Department, Haryana",
    hi: "कृषि एवं किसान कल्याण विभाग, हरियाणा",
  },
  categories: ["agriculture"],
  tags: ["farmer", "paddy", "crop diversification", "water", "per acre", "haryana"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("haryana"),
    labelled(when("occupation", "eq", "farmer"), { en: "You are a farmer", hi: "आप किसान हैं" }),
  ),

  details: {
    en: [
      "Mera Pani Meri Virasat is Haryana's crop diversification scheme to save falling groundwater. Farmers who switch from paddy to other crops get a per-acre incentive.",
      "The incentive was raised from ₹7,000 to ₹8,000 per acre in the 2025-26 budget, and Gram Panchayats that keep their land free of paddy also get it. In the 2026-27 budget the state proposed an extra ₹2,000 per acre for farmers who grow pulses, oilseeds or cotton instead of paddy.",
    ],
    hi: [
      "मेरा पानी मेरी विरासत हरियाणा की फ़सल विविधीकरण योजना है, जिसका मकसद गिरते भूजल को बचाना है। धान छोड़कर दूसरी फ़सल उगाने वाले किसानों को प्रति एकड़ प्रोत्साहन राशि मिलती है।",
      "2025-26 के बजट में यह राशि ₹7,000 से बढ़ाकर ₹8,000 प्रति एकड़ की गई, और धान के लिए ज़मीन पट्टे पर न देने वाली ग्राम पंचायतों को भी यह मिलती है। 2026-27 के बजट में धान की जगह दालें, तिलहन या कपास उगाने वाले किसानों के लिए ₹2,000 प्रति एकड़ अतिरिक्त बोनस का प्रस्ताव है।",
    ],
  },
  benefits: {
    en: [
      "₹8,000 per acre for land shifted out of paddy.",
      "Proposed for 2026-27: an extra ₹2,000 per acre if you grow pulses, oilseeds or cotton in place of paddy.",
    ],
    hi: ["धान से हटाई गई ज़मीन पर ₹8,000 प्रति एकड़।", "2026-27 के लिए प्रस्ताव: धान की जगह दालें, तिलहन या कपास उगाने पर ₹2,000 प्रति एकड़ अतिरिक्त।"],
  },
  eligibilityText: {
    en: [
      "A farmer in Haryana (owner or cultivator) who earlier grew paddy on the land.",
      "You grow another crop on that land, or keep it fallow, instead of paddy.",
      "Your land and crop details are registered and verified by the Agriculture Department.",
    ],
    hi: [
      "हरियाणा का किसान (मालिक या काश्तकार) जो पहले उस ज़मीन पर धान उगाता था।",
      "उस ज़मीन पर धान की जगह दूसरी फ़सल उगाएँ, या उसे ख़ाली रखें।",
      "आपकी ज़मीन और फ़सल का ब्यौरा कृषि विभाग में दर्ज और सत्यापित हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register your farm and crop details on the Meri Fasal Mera Byora portal (fasal.haryana.gov.in) during the Kharif registration window.",
        "Select the crop diversification option for the land you are taking out of paddy.",
        "After field verification by the department, the incentive is paid into your bank account.",
      ],
      hi: [
        "खरीफ़ पंजीकरण के समय मेरी फ़सल मेरा ब्यौरा पोर्टल (fasal.haryana.gov.in) पर अपने खेत और फ़सल का ब्यौरा दर्ज करें।",
        "धान से हटाई जा रही ज़मीन के लिए फ़सल विविधीकरण का विकल्प चुनें।",
        "विभाग के खेत सत्यापन के बाद प्रोत्साहन राशि आपके बैंक खाते में आती है।",
      ],
    },
  },

  officialUrl: "https://fasal.haryana.gov.in/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2025/03/202503221525770346.pdf",
    "https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2026/03/202603201031104005.pdf",
    "https://fasal.haryana.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
