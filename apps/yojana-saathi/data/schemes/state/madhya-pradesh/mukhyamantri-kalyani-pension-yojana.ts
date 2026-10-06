import { all, female, labelled, minAge, notGovtEmployee, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-kalyani-pension-yojana",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Mukhyamantri Kalyani Pension Yojana", hi: "मुख्यमंत्री कल्याणी पेंशन योजना" },
  aka: ["Kalyani Pension", "MP widow pension", "vidhwa pension MP"],
  shortDescription: {
    en: "Widows (called 'Kalyani') aged 18 and above in Madhya Pradesh who don't pay income tax and aren't government employees get ₹600 a month.",
    hi: "मध्य प्रदेश की 18 साल या उससे ज़्यादा उम्र की विधवा ('कल्याणी') महिलाओं को, जो आयकर नहीं देतीं और सरकारी कर्मचारी नहीं हैं, हर महीने ₹600 मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Social Justice and Empowerment of Persons with Disabilities Department, Government of Madhya Pradesh",
    hi: "सामाजिक न्याय एवं दिव्यांगजन कल्याण विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["widow pension", "kalyani", "widow", "women", "pension", "madhya pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 600, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("madhya-pradesh"),
    female(),
    minAge(18),
    labelled(when("marital", "eq", "widowed"), { en: "You are a widow", hi: "आप विधवा हैं" }),
    labelled(notGovtEmployee(), { en: "You are not a government employee", hi: "आप सरकारी कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "Madhya Pradesh calls widows 'Kalyani'. Under this state scheme, started in 2018, a Kalyani gets a pension of ₹600 a month. Unlike the central widow pension, it does not require a BPL card.",
      "Applications are made through the Samagra pension portal or at the local body office, and must be decided within 15 working days under the Public Service Guarantee Act.",
    ],
    hi: [
      "मध्य प्रदेश में विधवा महिलाओं को 'कल्याणी' कहा जाता है। 2018 में शुरू हुई इस राज्य योजना में कल्याणी को हर महीने ₹600 पेंशन मिलती है। केंद्र की विधवा पेंशन की तरह इसमें BPL कार्ड ज़रूरी नहीं है।",
      "आवेदन समग्र पेंशन पोर्टल से या स्थानीय निकाय कार्यालय में होता है, और लोक सेवा गारंटी कानून के तहत 15 कार्य दिवस में इस पर फ़ैसला होना चाहिए।",
    ],
  },
  benefits: {
    en: ["₹600 every month, paid into your bank account."],
    hi: ["हर महीने ₹600, आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "A widow who is a native of Madhya Pradesh, aged 18 or older.",
      "She does not pay income tax.",
      "She is not a government employee or officer (including government-funded corporations and bodies).",
      "She does not get a family pension.",
      "Her name is on the Samagra portal.",
    ],
    hi: [
      "मध्य प्रदेश की मूल निवासी विधवा, उम्र 18 साल या उससे ज़्यादा।",
      "वह आयकर न देती हो।",
      "वह सरकारी कर्मचारी या अधिकारी न हो (सरकारी पैसे से चलने वाले निगम और संस्थाएँ भी शामिल)।",
      "उसे परिवार पेंशन न मिलती हो।",
      "उसका नाम समग्र पोर्टल पर दर्ज हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the Samagra pension portal (socialsecurity.mp.gov.in) with your 9-digit Samagra ID."],
      hi: ["अपनी 9 अंकों की समग्र ID से समग्र पेंशन पोर्टल (socialsecurity.mp.gov.in) पर आवेदन करें।"],
    },
    offline: {
      en: [
        "Fill in the form at your gram panchayat or janpad panchayat (villages) or municipal office (towns).",
        "Attach three photos, your husband's death certificate and age proof.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत, और शहर में नगर निगम / नगर पालिका / नगर परिषद कार्यालय में फ़ॉर्म भरें।",
        "तीन फ़ोटो, पति का मृत्यु प्रमाण पत्र और उम्र का प्रमाण साथ लगाएँ।",
      ],
    },
  },
  documents: {
    en: ["Three photos", "Husband's death certificate", "Age proof", "Samagra ID"],
    hi: ["तीन फ़ोटो", "पति का मृत्यु प्रमाण पत्र", "उम्र का प्रमाण", "समग्र ID"],
  },

  officialUrl: "https://socialsecurity.mp.gov.in/Scheme/SSKPY.aspx",
  sources: ["https://socialsecurity.mp.gov.in/Scheme/SSKPY.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
