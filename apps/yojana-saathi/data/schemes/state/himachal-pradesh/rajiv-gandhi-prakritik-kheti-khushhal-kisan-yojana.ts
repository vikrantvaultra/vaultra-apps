import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajiv-gandhi-prakritik-kheti-khushhal-kisan-yojana",
  tier: "compact",
  name: { en: "Rajiv Gandhi Prakritik Kheti Khushhal Kisan Yojana", hi: "राजीव गांधी प्राकृतिक खेती खुशहाल किसान योजना" },
  aka: ["Prakritik Kheti", "Natural farming MSP Himachal", "Rajiv Gandhi Prakritik Kheti Start-up Yojana"],
  shortDescription: {
    en: "Himachal buys natural-farming wheat, maize, Pangi barley and turmeric at a fixed support price; the 2026-27 budget raised wheat to ₹80/kg, maize to ₹50/kg and turmeric to ₹150/kg.",
    hi: "हिमाचल सरकार प्राकृतिक खेती से उगाई गेहूँ, मक्की, पांगी के जौ और हल्दी को तय समर्थन मूल्य पर ख़रीदती है; 2026-27 के बजट में गेहूँ ₹80/किलो, मक्की ₹50/किलो और हल्दी ₹150/किलो की गई।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: { en: "Department of Agriculture, Government of Himachal Pradesh", hi: "कृषि विभाग, हिमाचल प्रदेश सरकार" },
  categories: ["agriculture"],
  tags: ["natural farming", "msp", "prakritik kheti", "chemical free", "farmer", "himachal"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("himachal-pradesh"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Under Rajiv Gandhi Prakritik Kheti Khushhal Kisan Yojana, Himachal Pradesh moves farmers to chemical-free natural farming and buys their produce at a guaranteed minimum support price (MSP). About 2.23 lakh farmers practise natural farming on about 38,455 hectares in the state.",
      "The state was already buying natural-farming wheat, maize, Pangi valley barley and turmeric at a support price. The 2026-27 budget announced higher rates and, for the first time, a support price for ginger. A dedicated marketing cell and a testing lab are being set up to sell the produce as a premium brand.",
    ],
    hi: [
      "राजीव गांधी प्राकृतिक खेती खुशहाल किसान योजना में हिमाचल प्रदेश किसानों को रसायन-मुक्त प्राकृतिक खेती की ओर ले जाता है और उनकी उपज को तय न्यूनतम समर्थन मूल्य (MSP) पर ख़रीदता है। राज्य में लगभग 2.23 लाख किसान करीब 38,455 हेक्टेयर में प्राकृतिक खेती कर रहे हैं।",
      "सरकार पहले से प्राकृतिक खेती का गेहूँ, मक्की, पांगी घाटी का जौ और हल्दी समर्थन मूल्य पर ख़रीद रही थी। 2026-27 के बजट में इनकी दरें बढ़ाई गईं और पहली बार अदरक का समर्थन मूल्य घोषित हुआ। उपज को प्रीमियम ब्रांड के रूप में बेचने के लिए अलग मार्केटिंग सेल और जाँच लैब बनाई जा रही है।",
    ],
  },
  benefits: {
    en: [
      "Wheat: ₹80 per kg (raised from ₹60 in the 2026-27 budget).",
      "Maize: ₹50 per kg (raised from ₹40).",
      "Pangi valley barley: ₹80 per kg (raised from ₹60).",
      "Turmeric: ₹150 per kg (raised from ₹90); ginger: ₹30 per kg (new).",
    ],
    hi: [
      "गेहूँ: ₹80 प्रति किलो (2026-27 के बजट में ₹60 से बढ़ाया गया)।",
      "मक्की: ₹50 प्रति किलो (₹40 से बढ़ाया गया)।",
      "पांगी घाटी का जौ: ₹80 प्रति किलो (₹60 से बढ़ाया गया)।",
      "हल्दी: ₹150 प्रति किलो (₹90 से बढ़ाई गई); अदरक: ₹30 प्रति किलो (नया)।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in Himachal Pradesh who grows crops by natural (chemical-free) farming.",
      "The produce must be from natural farming as checked by the Agriculture Department.",
    ],
    hi: [
      "हिमाचल प्रदेश का किसान जो प्राकृतिक (रसायन-मुक्त) खेती से फ़सल उगाता है।",
      "उपज प्राकृतिक खेती की हो, जिसकी जाँच कृषि विभाग करता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your block agriculture office or the ATMA office to register as a natural farming farmer.",
        "Sell your natural-farming produce at the procurement centres the department notifies each season.",
      ],
      hi: [
        "प्राकृतिक खेती करने वाले किसान के रूप में पंजीकरण के लिए अपने ब्लॉक कृषि कार्यालय या ATMA कार्यालय से संपर्क करें।",
        "हर सीज़न विभाग जो ख़रीद केंद्र घोषित करता है, वहाँ अपनी प्राकृतिक खेती की उपज बेचें।",
      ],
    },
  },

  officialUrl: "https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf",
  sources: ["https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "check-status",
};

export default scheme;
