import { all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sikkim-aama-sahayog-yojana",
  tier: "compact",
  name: { en: "Sikkim Aama Sahayog Yojana", hi: "सिक्किम आमा सहयोग योजना" },
  aka: ["Aama Sahayog", "Sikkim LPG refill assistance"],
  shortDescription: {
    en: "Selected mothers in rural Sikkim get ₹4,500 a year to pay for four LPG cylinder refills, easing the cost of clean cooking fuel.",
    hi: "सिक्किम के गाँवों की चुनी गई माताओं को हर साल ₹4,500 मिलते हैं, ताकि वे चार LPG सिलेंडर भरवा सकें और रसोई गैस का खर्च कम हो।",
  },
  level: "state",
  state: "sikkim",
  department: {
    en: "Rural Development Department, Government of Sikkim",
    hi: "ग्रामीण विकास विभाग, सिक्किम सरकार",
  },
  categories: ["energy-savings", "women-child"],
  tags: ["lpg", "gas cylinder", "refill", "mother", "rural women", "aama", "sikkim"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 4500, period: "yearly", kind: "cash" },
  kundliHouse: "energy-savings",
  eligibility: all(
    residentOf("sikkim"),
    female(),
    labelled(when("area", "eq", "rural"), { en: "You live in a rural area", hi: "आप गाँव में रहती हैं" }),
  ),

  details: {
    en: [
      "Sikkim Aama Sahayog Yojana helps mothers in villages meet the cost of cooking gas. It is run by the Rural Development Department and was first paid out on Aama Samman Diwas in August 2025.",
      "Each selected mother gets ₹4,500 a year, meant for four LPG refills. More than 4,200 rural mothers are covered, and the assistance was paid again in August 2026.",
    ],
    hi: [
      "सिक्किम आमा सहयोग योजना गाँवों की माताओं को रसोई गैस का खर्च उठाने में मदद करती है। इसे ग्रामीण विकास विभाग चलाता है और पहली बार अगस्त 2025 में आमा सम्मान दिवस पर पैसा दिया गया।",
      "हर चुनी गई माँ को साल में ₹4,500 मिलते हैं, जो चार LPG सिलेंडर भरवाने के लिए हैं। 4,200 से ज़्यादा ग्रामीण माताएँ इसमें शामिल हैं, और अगस्त 2026 में फिर से यह राशि दी गई।",
    ],
  },
  benefits: {
    en: ["₹4,500 a year towards four LPG cylinder refills."],
    hi: ["चार LPG सिलेंडर भरवाने के लिए हर साल ₹4,500।"],
  },
  eligibilityText: {
    en: [
      "A mother living in a rural area of Sikkim.",
      "Beneficiaries are selected by the Rural Development Department; the number of places is limited.",
    ],
    hi: [
      "सिक्किम के ग्रामीण इलाके में रहने वाली माँ।",
      "लाभार्थियों का चयन ग्रामीण विकास विभाग करता है; सीटें सीमित हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask at your Block Administrative Centre (BAC) or Gram Panchayat whether names are being collected for Aama Sahayog Yojana.",
        "Selected mothers receive the assistance at programmes organised by the BAC.",
      ],
      hi: [
        "अपने ब्लॉक प्रशासनिक केंद्र (BAC) या ग्राम पंचायत में पूछें कि आमा सहयोग योजना के लिए नाम लिए जा रहे हैं या नहीं।",
        "चुनी गई माताओं को सहायता BAC के कार्यक्रमों में दी जाती है।",
      ],
    },
  },

  officialUrl: "https://ipr.sikkim.gov.in/Home/News?slug=2nd-aama-samman-diwas-celebrated-at-rangpo-cm-highlights-women-centric-initiatives",
  sources: [
    "https://ipr.sikkim.gov.in/Home/News?slug=2nd-aama-samman-diwas-celebrated-at-rangpo-cm-highlights-women-centric-initiatives",
    "https://ipr.sikkim.gov.in/Home/News?slug=aama-samman-diwas-a-historic-tribute-to-mothers-inspired-by-the-compassionate-leadership-of-shri-prem-singh-tamang-golay-",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
