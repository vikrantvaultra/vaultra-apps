import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "magel-tyala-saur-krushi-pump-yojana",
  tier: "compact",
  name: { en: "Magel Tyala Saur Krushi Pump Yojana", hi: "मागेल त्याला सौर कृषि पंप योजना" },
  aka: ["Magel Tyala Solar Pump", "Maharashtra solar pump scheme", "MTSKPY"],
  shortDescription: {
    en: "Maharashtra farmers get a 3, 5 or 7.5 HP solar water pump by paying only 10% of the cost (5% for SC/ST farmers), with 5 years of repair and insurance.",
    hi: "महाराष्ट्र के किसानों को 3, 5 या 7.5 HP का सोलर पंप लागत का सिर्फ़ 10% (SC/ST किसानों के लिए 5%) देकर मिलता है, साथ में 5 साल की मरम्मत और बीमा।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Energy Department, Government of Maharashtra (implemented by MSEDCL / Mahavitaran)",
    hi: "ऊर्जा विभाग, महाराष्ट्र सरकार (महावितरण के ज़रिए)",
  },
  categories: ["agriculture", "energy-savings"],
  tags: ["solar pump", "farmer", "irrigation", "mahavitaran", "subsidy", "pm kusum"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("maharashtra"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "Under Magel Tyala Saur Krushi Pump Yojana ('a solar pump for whoever asks'), Mahavitaran installs an off-grid solar pump on your farm. The central and state governments pay most of the cost and you pay a small share.",
      "The pump size depends on your land. You get daytime irrigation without an electricity bill or load-shedding, and the supplier must repair the pump and keep it insured for five years.",
    ],
    hi: [
      "मागेल त्याला सौर कृषि पंप योजना ('जो माँगे उसे सोलर पंप') में महावितरण आपके खेत पर ग्रिड से अलग सोलर पंप लगाता है। ज़्यादातर ख़र्च केंद्र और राज्य सरकार उठाती हैं और आप थोड़ा हिस्सा देते हैं।",
      "पंप का आकार आपकी ज़मीन पर निर्भर करता है। दिन में बिना बिजली बिल और बिना लोडशेडिंग के सिंचाई होती है, और सप्लायर को पाँच साल तक पंप की मरम्मत और बीमा करना होता है।",
    ],
  },
  benefits: {
    en: [
      "A complete solar pump set: you pay 10% of the cost (SC/ST farmers pay 5%).",
      "Up to 2.5 acres: 3 HP pump; 2.51 to 5 acres: 5 HP; above 5 acres: 7.5 HP (you can ask for a smaller one).",
      "No electricity bill for the pump.",
      "Five years of repair and insurance included.",
    ],
    hi: [
      "पूरा सोलर पंप सेट: लागत का 10% आप देते हैं (SC/ST किसान 5%)।",
      "2.5 एकड़ तक: 3 HP पंप; 2.51 से 5 एकड़: 5 HP; 5 एकड़ से ज़्यादा: 7.5 HP (आप छोटा पंप भी माँग सकते हैं)।",
      "पंप का कोई बिजली बिल नहीं।",
      "पाँच साल की मरम्मत और बीमा शामिल।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in Maharashtra with farmland in their name.",
      "Has an assured water source on the farm, such as a well, borewell, farm pond or a perennial river or stream next to the land.",
      "Has not already got a pump under Atal Saur Krushi Pump Yojana 1 or 2 or Mukhyamantri Saur Krushi Pump Yojana.",
    ],
    hi: [
      "महाराष्ट्र का किसान जिसके नाम खेती की ज़मीन हो।",
      "खेत में पानी का पक्का स्रोत हो, जैसे कुआँ, बोरवेल, खेत-तालाब, या ज़मीन के पास बारहमासी नदी या नाला।",
      "पहले अटल सौर कृषि पंप योजना 1 या 2 या मुख्यमंत्री सौर कृषि पंप योजना में पंप न मिला हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to Mahavitaran's solar pump portal (from mahadiscom.in, Renewable Energy section) and fill in the Magel Tyala application.",
        "Upload your 7/12 extract, Aadhaar and caste certificate (if SC/ST).",
        "When your application is approved, pay your share online and choose a supplier; the pump is then installed on your farm.",
      ],
      hi: [
        "महावितरण के सोलर पंप पोर्टल (mahadiscom.in के रिन्यूएबल एनर्जी सेक्शन से) पर मागेल त्याला आवेदन भरें।",
        "7/12 उतारा, आधार और जाति प्रमाण पत्र (SC/ST हों तो) अपलोड करें।",
        "आवेदन मंज़ूर होने पर अपना हिस्सा ऑनलाइन भरें और सप्लायर चुनें; फिर पंप खेत पर लगाया जाता है।",
      ],
    },
  },

  officialUrl: "https://portal.mahadiscom.in/solar_MTSKPY/scheme_info.php",
  sources: ["https://portal.mahadiscom.in/solar_MTSKPY/scheme_info.php", "https://mahadiscom.in/en/renewable-energy-portals"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
