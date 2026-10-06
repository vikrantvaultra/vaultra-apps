import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-mukhyamantri-yuva-swarozgar-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Yuva Swarozgar Yojana (Rajasthan)", hi: "मुख्यमंत्री युवा स्वरोज़गार योजना (राजस्थान)" },
  aka: ["MYSY Rajasthan", "Yuva Swarojgar Yojana", "interest-free business loan Rajasthan"],
  shortDescription: {
    en: "Young people in Rajasthan can get a business loan of up to ₹10 lakh with the full interest paid by the state, to start or grow their own enterprise.",
    hi: "राजस्थान के युवा अपना काम शुरू करने या बढ़ाने के लिए ₹10 लाख तक का कर्ज़ ले सकते हैं, जिसका पूरा ब्याज राज्य सरकार भरती है।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Industries and Commerce Department, Government of Rajasthan", hi: "उद्योग एवं वाणिज्य विभाग, राजस्थान सरकार" },
  categories: ["business", "skills-employment"],
  tags: ["business loan", "interest free loan", "self employment", "startup", "youth", "rajasthan"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 1_000_000, period: "one-time", kind: "loan" },
  kundliHouse: "business",
  eligibility: all(residentOf("rajasthan")),

  details: {
    en: [
      "Mukhyamantri Yuva Swarozgar Yojana was launched by the Rajasthan government on 12 January 2026 (National Youth Day) to help young people become self-employed.",
      "Eligible youth can take a bank loan of up to ₹10 lakh for a manufacturing, service or trading enterprise, and the state pays 100% of the interest. The loan limit depends on your education and the type of business. Beneficiaries also get short skill training. The 2026-27 state budget set aside ₹1,000 crore for the scheme.",
    ],
    hi: [
      "मुख्यमंत्री युवा स्वरोज़गार योजना राजस्थान सरकार ने 12 जनवरी 2026 (राष्ट्रीय युवा दिवस) को युवाओं को स्वरोज़गार से जोड़ने के लिए शुरू की।",
      "पात्र युवा उत्पादन, सेवा या व्यापार के काम के लिए ₹10 लाख तक का बैंक कर्ज़ ले सकते हैं, और ब्याज का 100% राज्य सरकार भरती है। कर्ज़ की सीमा आपकी पढ़ाई और काम के प्रकार पर निर्भर करती है। लाभार्थियों को छोटा कौशल प्रशिक्षण भी मिलता है। 2026-27 के राज्य बजट में इसके लिए ₹1,000 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "A bank loan of up to ₹10 lakh to set up or expand an enterprise.",
      "The state government pays the full interest on the loan.",
      "Short skill training through the Rajasthan Skill and Livelihoods Development Corporation.",
    ],
    hi: [
      "काम शुरू करने या बढ़ाने के लिए ₹10 लाख तक का बैंक कर्ज़।",
      "कर्ज़ का पूरा ब्याज राज्य सरकार भरती है।",
      "राजस्थान कौशल एवं आजीविका विकास निगम से छोटा कौशल प्रशिक्षण।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a young resident of Rajasthan who has passed at least Class 8.",
      "The loan limit is higher for those with more education and for manufacturing units.",
      "You put in a small margin amount yourself, as set in the scheme guidelines.",
      "Check the age limit and other conditions in the current guidelines on the Industries Department portal.",
    ],
    hi: [
      "आप राजस्थान के युवा निवासी हैं और कम से कम 8वीं पास हैं।",
      "ज़्यादा पढ़े-लिखे युवाओं और उत्पादन इकाइयों के लिए कर्ज़ की सीमा ज़्यादा है।",
      "योजना के दिशा-निर्देशों के अनुसार थोड़ी मार्जिन राशि आपको ख़ुद लगानी होती है।",
      "उम्र सीमा और दूसरी शर्तें उद्योग विभाग के पोर्टल पर मौजूदा दिशा-निर्देशों में देखें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to sso.rajasthan.gov.in and open the Industries Department loan/subsidy application for this scheme.",
        "Fill in your details and a short project report, and upload your documents.",
        "The District Industries and Commerce Centre checks the application and sends it to a bank for the loan.",
      ],
      hi: [
        "sso.rajasthan.gov.in पर लॉग इन करें और इस योजना के लिए उद्योग विभाग का कर्ज़/अनुदान आवेदन खोलें।",
        "अपनी जानकारी और छोटी प्रोजेक्ट रिपोर्ट भरें और दस्तावेज़ अपलोड करें।",
        "ज़िला उद्योग एवं वाणिज्य केंद्र आवेदन जाँचकर कर्ज़ के लिए बैंक को भेजता है।",
      ],
    },
  },

  officialUrl: "https://industries.rajasthan.gov.in/",
  sources: [
    "https://prsindia.org/budgets/states/rajasthan-budget-analysis-2026-27",
    "https://industries.rajasthan.gov.in/",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-rajasthan/mukhyamantri-yuva-swarozgar-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
