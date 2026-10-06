import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-free-bus-travel-women",
  tier: "compact",
  name: { en: "Free Bus Travel for Women (Punjab)", hi: "महिलाओं के लिए मुफ़्त बस यात्रा (पंजाब)" },
  aka: ["Punjab free bus women", "PRTC free travel", "Punjab Roadways free travel women"],
  shortDescription: {
    en: "Women in Punjab travel free on government buses (Punjab Roadways, PUNBUS and PRTC), whatever their age or income.",
    hi: "पंजाब की महिलाएँ सरकारी बसों (पंजाब रोडवेज़, PUNBUS और PRTC) में मुफ़्त सफ़र करती हैं, उम्र या आय चाहे जो हो।",
  },
  level: "state",
  state: "punjab",
  department: { en: "Department of Transport, Government of Punjab", hi: "परिवहन विभाग, पंजाब सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "prtc", "punbus", "punjab roadways", "travel"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("punjab"), female()),

  details: {
    en: [
      "Punjab lets women travel free on buses run by the state: Punjab Roadways, PUNBUS and the Pepsu Road Transport Corporation (PRTC). There is no age or income condition.",
      "Women made about 12 crore free journeys in a year under this facility. The 2026-27 budget set aside ₹600 crore to keep it running.",
    ],
    hi: [
      "पंजाब में महिलाएँ राज्य की बसों में मुफ़्त सफ़र करती हैं: पंजाब रोडवेज़, PUNBUS और पेप्सू रोड ट्रांसपोर्ट कॉरपोरेशन (PRTC)। उम्र या आय की कोई शर्त नहीं है।",
      "इस सुविधा में एक साल में महिलाओं ने लगभग 12 करोड़ मुफ़्त सफ़र किए। 2026-27 के बजट में इसे जारी रखने के लिए ₹600 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Free travel on Punjab Roadways, PUNBUS and PRTC buses.",
      "No limit on age or income.",
    ],
    hi: [
      "पंजाब रोडवेज़, PUNBUS और PRTC बसों में मुफ़्त सफ़र।",
      "उम्र या आय की कोई सीमा नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Women and girls who live in Punjab.",
      "Applies only to government buses (Punjab Roadways, PUNBUS, PRTC), not private buses.",
    ],
    hi: [
      "पंजाब में रहने वाली महिलाएँ और लड़कियाँ।",
      "सिर्फ़ सरकारी बसों (पंजाब रोडवेज़, PUNBUS, PRTC) में लागू, निजी बसों में नहीं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed.",
        "Board a Punjab Roadways, PUNBUS or PRTC bus and tell the conductor you are travelling under the free travel scheme for women.",
      ],
      hi: [
        "किसी आवेदन की ज़रूरत नहीं।",
        "पंजाब रोडवेज़, PUNBUS या PRTC बस में बैठें और कंडक्टर को बताएँ कि आप महिलाओं की मुफ़्त यात्रा योजना में सफ़र कर रही हैं।",
      ],
    },
  },

  officialUrl: "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/free-bus-travel-facility-for-women/",
  sources: [
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/free-bus-travel-facility-for-women/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
