import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-udyam-kranti-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Udyam Kranti Yojana", hi: "मुख्यमंत्री उद्यम क्रांति योजना" },
  aka: ["Udyam Kranti", "MMUKY", "Udyam Kranti Yojana MP"],
  shortDescription: {
    en: "Young people aged 18 to 40 in Madhya Pradesh with Class 12 can get a bank loan to start a business, with the state paying part of the interest and the loan guarantee fee.",
    hi: "मध्य प्रदेश के 18 से 40 साल के 12वीं पास युवाओं को अपना काम शुरू करने के लिए बैंक लोन मिलता है, जिसके ब्याज का एक हिस्सा और लोन गारंटी फ़ीस राज्य सरकार देती है।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Micro, Small and Medium Enterprises Department, Government of Madhya Pradesh",
    hi: "सूक्ष्म, लघु और मध्यम उद्यम विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["loan", "self employment", "business", "startup", "interest subsidy", "madhya pradesh"],
  benefitType: "loan",
  isDBT: false,
  ageRange: { min: 18, max: 40 },
  kundliHouse: "business",
  eligibility: all(residentOf("madhya-pradesh"), ...ageBetween(18, 40)),

  details: {
    en: [
      "Udyam Kranti Yojana helps educated young people start their own manufacturing, service or trading business with a bank loan. It was launched in 2022 and is run by the MSME Department.",
      "Under the scheme guidelines, the state pays 3% a year of the interest and the credit guarantee fee for up to 7 years, which makes the loan cheaper. An updated scheme booklet was issued in 2026, so check it for the current loan limits and conditions before applying.",
    ],
    hi: [
      "उद्यम क्रांति योजना पढ़े-लिखे युवाओं को बैंक लोन से अपना निर्माण, सेवा या व्यापार का काम शुरू करने में मदद करती है। यह 2022 में शुरू हुई और MSME विभाग इसे चलाता है।",
      "योजना के दिशानिर्देशों में राज्य सरकार 7 साल तक हर साल ब्याज का 3% और क्रेडिट गारंटी फ़ीस देती है, जिससे लोन सस्ता पड़ता है। 2026 में योजना की नई पुस्तिका जारी हुई है, इसलिए आवेदन से पहले उसमें लोन की मौजूदा सीमा और शर्तें देख लें।",
    ],
  },
  benefits: {
    en: [
      "Bank loan to set up a new business, without collateral under the guarantee cover.",
      "Interest subsidy of 3% a year for up to 7 years, paid by the state.",
      "Credit guarantee fee paid by the state for the same period.",
    ],
    hi: [
      "नया काम शुरू करने के लिए बैंक लोन, गारंटी कवर के तहत बिना गिरवी।",
      "7 साल तक हर साल 3% ब्याज अनुदान, जो राज्य सरकार देती है।",
      "इसी अवधि तक क्रेडिट गारंटी फ़ीस भी राज्य सरकार देती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Madhya Pradesh aged 18 to 40.",
      "Passed at least Class 12.",
      "Not a defaulter of any bank or financial institution.",
      "Family income and other limits as set in the current scheme booklet.",
    ],
    hi: [
      "मध्य प्रदेश के 18 से 40 साल के निवासी।",
      "कम से कम 12वीं पास।",
      "किसी बैंक या वित्तीय संस्था के डिफ़ॉल्टर न हों।",
      "परिवार की आय और दूसरी सीमाएँ योजना की मौजूदा पुस्तिका के अनुसार।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply online on the MP Online SAMAST portal (samast.mponline.gov.in) and complete the Aadhaar e-KYC.",
        "Upload your project report and documents. The district industries centre checks it and sends it to the bank.",
        "After the bank sanctions the loan, the interest subsidy is credited to your loan account.",
      ],
      hi: [
        "MP Online के समस्त पोर्टल (samast.mponline.gov.in) पर ऑनलाइन आवेदन करें और आधार e-KYC पूरी करें।",
        "अपनी प्रोजेक्ट रिपोर्ट और दस्तावेज़ अपलोड करें। ज़िला उद्योग केंद्र इसकी जाँच करके बैंक को भेजता है।",
        "बैंक से लोन मंज़ूर होने के बाद ब्याज अनुदान आपके लोन खाते में जमा होता है।",
      ],
    },
  },

  officialUrl: "https://mpmsme.gov.in/website/self-employment-schemes",
  sources: ["https://mpmsme.gov.in/website/self-employment-schemes", "https://www.drishtiias.com/state-pcs-current-affairs/mukhyamantri-udyami-kranti-yojana"],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "check-status",
};

export default scheme;
