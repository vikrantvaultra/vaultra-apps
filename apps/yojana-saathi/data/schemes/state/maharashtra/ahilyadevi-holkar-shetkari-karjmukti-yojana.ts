import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ahilyadevi-holkar-shetkari-karjmukti-yojana",
  tier: "compact",
  name: {
    en: "Punyashlok Ahilyadevi Holkar Shetkari Karjmukti Yojana 2026",
    hi: "पुण्यश्लोक अहिल्यादेवी होलकर शेतकरी कर्जमुक्ति योजना 2026",
  },
  aka: ["Maharashtra loan waiver 2026", "Karjmafi 2026", "farm loan waiver"],
  shortDescription: {
    en: "Maharashtra's 2026 farm loan waiver clears eligible farmers' crop loans (announced as up to ₹2 lakh each), paid straight to the loan account after Aadhaar verification.",
    hi: "महाराष्ट्र की 2026 की कृषि कर्ज़ माफ़ी में पात्र किसानों का फ़सल कर्ज़ (घोषणा के अनुसार हर किसान का ₹2 लाख तक) माफ़ होता है, आधार सत्यापन के बाद पैसा सीधे कर्ज़ खाते में जाता है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Cooperation Department, Government of Maharashtra",
    hi: "सहकारिता विभाग, महाराष्ट्र सरकार",
  },
  categories: ["agriculture"],
  tags: ["loan waiver", "karjmafi", "crop loan", "farmer", "debt relief", "maharashtra"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("maharashtra"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "The state approved this loan waiver in June 2026 to help farmers hit by crop losses and natural disasters. It was announced as clearing up to ₹2 lakh of crop loan per farmer, and the eligibility rules were revised in July 2026.",
      "Banks send the lists of eligible loan accounts. Farmers on the list get an SMS and must complete Aadhaar authentication, after which the relief is credited to the loan account. The first lists came out in July 2026 and more phases are following.",
    ],
    hi: [
      "राज्य ने फ़सल नुकसान और प्राकृतिक आपदाओं से परेशान किसानों की मदद के लिए जून 2026 में यह कर्ज़ माफ़ी मंज़ूर की। घोषणा के अनुसार हर किसान का ₹2 लाख तक का फ़सल कर्ज़ माफ़ होगा, और जुलाई 2026 में पात्रता के नियम बदले गए।",
      "बैंक पात्र कर्ज़ खातों की सूची भेजते हैं। सूची में नाम वाले किसानों को SMS आता है और उन्हें आधार सत्यापन करना होता है, जिसके बाद राहत राशि कर्ज़ खाते में जमा होती है। पहली सूचियाँ जुलाई 2026 में आईं और आगे के चरण जारी हैं।",
    ],
  },
  benefits: {
    en: [
      "Waiver of eligible crop loan dues (announced limit: up to ₹2 lakh per farmer).",
      "Money is credited directly to the loan account after Aadhaar authentication.",
      "Covers loans from district central cooperative banks, nationalised banks and some private banks.",
    ],
    hi: [
      "पात्र फ़सल कर्ज़ की बकाया राशि की माफ़ी (घोषित सीमा: हर किसान ₹2 लाख तक)।",
      "आधार सत्यापन के बाद पैसा सीधे कर्ज़ खाते में।",
      "ज़िला मध्यवर्ती सहकारी बैंक, राष्ट्रीयकृत बैंक और कुछ निजी बैंकों के कर्ज़ शामिल।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in Maharashtra with a crop loan from a participating bank that falls within the period and limits set by the government order.",
      "Your loan account appears on the eligible list sent by the bank.",
      "Exact cut-off dates and exclusions are set in the government order; check with your bank or cooperative society.",
    ],
    hi: [
      "महाराष्ट्र का किसान जिसका किसी शामिल बैंक से फ़सल कर्ज़ हो और वह सरकारी आदेश की तय अवधि और सीमा में आता हो।",
      "आपका कर्ज़ खाता बैंक द्वारा भेजी गई पात्र सूची में हो।",
      "सटीक तारीख़ें और बाहर रखे गए लोग सरकारी आदेश में तय हैं; अपने बैंक या सहकारी संस्था से पूछें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Check the beneficiary list displayed at your Gram Panchayat, cooperative society or bank branch, or wait for an SMS.",
        "Complete Aadhaar authentication as told in the SMS or by your bank, using your Aadhaar number or the special code sent to you.",
        "If your name is missing or the amount looks wrong, ask your bank branch or cooperative society.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, सहकारी संस्था या बैंक शाखा में लगी लाभार्थी सूची देखें, या SMS का इंतज़ार करें।",
        "SMS या बैंक के बताए तरीक़े से, अपने आधार नंबर या भेजे गए विशेष कोड से आधार सत्यापन करें।",
        "नाम न हो या राशि गलत लगे, तो अपनी बैंक शाखा या सहकारी संस्था से पूछें।",
      ],
    },
  },

  officialUrl: "https://aaplesarkar.mahaonline.gov.in/",
  sources: [
    "https://navbharatlive.com/maharashtra/mumbai/maharashtra-farmer-loan-waiver-scheme-first-list-released-dbt-transfer-1882186.html",
    "https://www.theweek.in/news/india/2026/07/16/maharashtra-farmer-electricity-bill-waiver.amp.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
