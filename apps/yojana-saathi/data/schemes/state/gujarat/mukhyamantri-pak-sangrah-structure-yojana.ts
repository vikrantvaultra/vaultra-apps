import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-pak-sangrah-structure-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Pak Sangrah Structure Yojana", hi: "मुख्यमंत्री पाक संग्रह स्ट्रक्चर योजना" },
  aka: ["Pak Sangrah", "farm godown subsidy Gujarat", "crop storage structure Gujarat"],
  shortDescription: {
    en: "Farmers in Gujarat can get help of up to ₹1 lakh to build a small godown on their farm to store crops safely. Apply on the i-Khedut portal.",
    hi: "गुजरात के किसान अपने खेत पर फ़सल सुरक्षित रखने के लिए छोटा गोदाम बनाने को ₹1 लाख तक की मदद ले सकते हैं। आवेदन आई-खेडूत पोर्टल पर।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Agriculture, Farmers Welfare and Co-operation Department, Government of Gujarat", hi: "कृषि, किसान कल्याण एवं सहकारिता विभाग, गुजरात सरकार" },
  categories: ["agriculture"],
  tags: ["farmer", "godown", "crop storage", "subsidy", "ikhedut", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("gujarat"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Mukhyamantri Pak Sangrah Structure Yojana helps farmers build a small storage structure (godown) on their land, so harvested crops are not spoiled by rain or have to be sold in a hurry.",
      "The 2026-27 state budget set aside ₹154 crore to give ₹1 lakh each to about 15,436 farmers. The exact cost-sharing rules and size of the structure are set in the yearly i-Khedut notification.",
    ],
    hi: [
      "मुख्यमंत्री पाक संग्रह स्ट्रक्चर योजना किसानों को अपनी ज़मीन पर छोटा भंडारण ढाँचा (गोदाम) बनाने में मदद करती है, ताकि कटी फ़सल बारिश से ख़राब न हो या जल्दबाज़ी में बेचनी न पड़े।",
      "2026-27 के राज्य बजट में करीब 15,436 किसानों को ₹1-1 लाख देने के लिए ₹154 करोड़ रखे गए हैं। लागत में हिस्सेदारी के सटीक नियम और ढाँचे का आकार हर साल की आई-खेडूत अधिसूचना में तय होते हैं।",
    ],
  },
  benefits: {
    en: ["Assistance of up to ₹1 lakh towards building a crop storage structure on your farm.", "Paid into your bank account after the structure is checked."],
    hi: ["खेत पर फ़सल भंडारण ढाँचा बनाने के लिए ₹1 लाख तक की सहायता।", "ढाँचे की जाँच के बाद पैसा आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: ["A farmer in Gujarat with land in their name (7/12 extract).", "Selection is from i-Khedut applications, often by draw when there are more applicants than targets."],
    hi: ["गुजरात का किसान, जिसके नाम ज़मीन हो (7/12 उतारा)।", "चयन आई-खेडूत के आवेदनों में से होता है; आवेदन लक्ष्य से ज़्यादा हों तो अक्सर ड्रॉ से।"],
  },
  applicationProcess: {
    online: {
      en: ["When the window opens, apply on ikhedut.gujarat.gov.in under the agriculture schemes.", "Print the application, sign it and submit it with your 7/12 extract and bank details to the taluka or gram sevak office."],
      hi: ["आवेदन खुलने पर ikhedut.gujarat.gov.in पर कृषि योजनाओं में आवेदन करें।", "आवेदन का प्रिंट लेकर उस पर दस्तख़त करें और 7/12 उतारा व बैंक विवरण के साथ तालुका या ग्राम सेवक कार्यालय में जमा करें।"],
    },
  },

  officialUrl: "https://ikhedut.gujarat.gov.in/",
  sources: ["https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf", "https://ikhedut.gujarat.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
