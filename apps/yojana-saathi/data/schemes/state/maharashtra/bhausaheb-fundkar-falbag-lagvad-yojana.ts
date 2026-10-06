import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bhausaheb-fundkar-falbag-lagvad-yojana",
  tier: "compact",
  name: { en: "Bhausaheb Fundkar Falbag Lagvad Yojana", hi: "भाऊसाहेब फुंडकर फलबाग लागवड योजना" },
  aka: ["Fundkar orchard scheme", "Falbag Lagwad", "fruit orchard subsidy"],
  shortDescription: {
    en: "Farmers in Maharashtra get a subsidy, paid over three years, to plant and look after an orchard of mango, cashew, pomegranate, orange, guava and 11 other fruit crops.",
    hi: "महाराष्ट्र के किसानों को आम, काजू, अनार, संतरा, अमरूद और 11 दूसरी फलों की फ़सलों का बाग़ लगाने और उसकी देखभाल के लिए तीन साल में अनुदान मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Agriculture Department, Government of Maharashtra", hi: "कृषि विभाग, महाराष्ट्र सरकार" },
  categories: ["agriculture"],
  tags: ["orchard", "horticulture", "fruit", "farmer", "subsidy", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("maharashtra"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "This state scheme, started in 2018-19, helps farmers move into fruit growing.",
      "The subsidy covers planting and upkeep and is paid in three yearly parts in the ratio 50:30:20. To get the second and third parts, enough of your plants must survive (as checked by the agriculture department).",
    ],
    hi: [
      "2018-19 में शुरू हुई यह राज्य योजना किसानों को फलों की खेती की ओर बढ़ने में मदद करती है।",
      "अनुदान पौधे लगाने और देखभाल के ख़र्च के लिए है और तीन साल में 50:30:20 के हिस्सों में मिलता है। दूसरी और तीसरी किस्त के लिए आपके पर्याप्त पौधे ज़िंदा होने चाहिए (कृषि विभाग जाँच करता है)।",
    ],
  },
  benefits: {
    en: [
      "Subsidy towards pits, plants, planting, fertiliser and care of a new orchard.",
      "Paid over three years: 50% in the first year, 30% in the second and 20% in the third.",
      "Covers 16 fruit crops: mango, cashew, guava, sapota (chikoo), custard apple, pomegranate, lemon, coconut, tamarind, fig, amla, kokum, jackfruit, jamun, orange and mosambi.",
    ],
    hi: [
      "नए बाग़ के लिए गड्ढे, पौधे, रोपाई, खाद और देखभाल के ख़र्च पर अनुदान।",
      "तीन साल में भुगतान: पहले साल 50%, दूसरे साल 30% और तीसरे साल 20%।",
      "16 फलों की फ़सलें शामिल: आम, काजू, अमरूद, चीकू, सीताफल, अनार, नींबू, नारियल, इमली, अंजीर, आँवला, कोकम, कटहल, जामुन, संतरा और मोसंबी।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in Maharashtra with land in their own name (7/12 and 8-A).",
      "Land between 0.20 and 6 hectares (0.10 to 10 hectares in the Konkan division).",
      "Has Aadhaar and an Aadhaar-linked bank account.",
    ],
    hi: [
      "महाराष्ट्र का किसान जिसके अपने नाम पर ज़मीन हो (7/12 और 8-अ)।",
      "ज़मीन 0.20 से 6 हेक्टेयर के बीच हो (कोंकण विभाग में 0.10 से 10 हेक्टेयर)।",
      "आधार और आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the MahaDBT farmer portal (mahadbt.maharashtra.gov.in) when applications are open.",
        "Choose the Bhausaheb Fundkar Falbag Lagvad scheme, the fruit crop and the area.",
        "If selected, plant within the given time and claim each yearly instalment after inspection.",
      ],
      hi: [
        "आवेदन खुले होने पर MahaDBT किसान पोर्टल (mahadbt.maharashtra.gov.in) पर रजिस्टर करें।",
        "भाऊसाहेब फुंडकर फलबाग लागवड योजना, फल की फ़सल और क्षेत्रफल चुनें।",
        "चुने जाने पर तय समय में पौधे लगाएँ और जाँच के बाद हर साल की किस्त का दावा करें।",
      ],
    },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/Farmer/Login/Login",
  sources: [
    "https://mahadbt.maharashtra.gov.in/Farmer/SchemeData/SchemeData",
    "https://www.myscheme.gov.in/schemes/bhausaheb-fundkar-horticulture-plantataion-scheme",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
