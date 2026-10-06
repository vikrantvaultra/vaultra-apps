import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "auto-driverla-sevalo",
  tier: "compact",
  name: { en: "Auto Driverla Sevalo", hi: "ऑटो ड्राइवरला सेवलो" },
  aka: ["Auto Drivers Sevalo", "Auto Driver Sevalo", "AP auto driver 15000", "Vahana Mitra successor"],
  shortDescription: {
    en: "Auto-rickshaw, cab and maxi cab drivers in Andhra Pradesh get ₹15,000 a year from the state, paid into their bank account.",
    hi: "आंध्र प्रदेश के ऑटो-रिक्शा, कैब और मैक्सी कैब चालकों को राज्य सरकार से हर साल ₹15,000 सीधे बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: { en: "Transport Department, Government of Andhra Pradesh", hi: "परिवहन विभाग, आंध्र प्रदेश सरकार" },
  categories: ["skills-employment", "social-welfare"],
  tags: ["auto driver", "cab driver", "taxi", "15000", "transport", "andhra pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "career",
  eligibility: all(
    residentOf("andhra-pradesh"),
    labelled(when("occupation", "in", ["unorganised-worker", "small-business"]), {
      en: "You drive an auto-rickshaw, cab or maxi cab for a living",
      hi: "आप ऑटो-रिक्शा, कैब या मैक्सी कैब चलाकर कमाते हैं",
    }),
  ),

  details: {
    en: [
      "Auto Driverla Sevalo gives yearly financial help to drivers of auto-rickshaws, three-wheeler passenger vehicles, motor cabs and maxi cabs. The Chief Minister launched it on 4 October 2025 in Vijayawada.",
      "It pays ₹15,000 a year by DBT, up from ₹10,000 under the earlier scheme. The government said it was meant to protect drivers' earnings after the Stree Shakti free bus scheme for women began. In 2025 about 2.9 lakh drivers were paid.",
    ],
    hi: [
      "ऑटो ड्राइवरला सेवलो ऑटो-रिक्शा, तिपहिया सवारी वाहन, मोटर कैब और मैक्सी कैब चालकों को सालाना आर्थिक मदद देती है। मुख्यमंत्री ने इसे 4 अक्टूबर 2025 को विजयवाड़ा में शुरू किया।",
      "इसमें DBT से साल में ₹15,000 मिलते हैं, जो पिछली योजना के ₹10,000 से ज़्यादा है। सरकार के मुताबिक यह महिलाओं के लिए स्त्री शक्ति मुफ़्त बस योजना शुरू होने के बाद चालकों की कमाई बचाने के लिए है। 2025 में लगभग 2.9 लाख चालकों को पैसा मिला।",
    ],
  },
  benefits: {
    en: ["₹15,000 a year.", "Paid by DBT into your bank account."],
    hi: ["साल में ₹15,000।", "पैसा DBT से आपके बैंक खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "You live in Andhra Pradesh and drive an auto-rickshaw, three-wheeler passenger vehicle, motor cab or maxi cab.",
      "You are identified and verified by the Transport Department and the village or ward secretariat.",
      "Valid driving licence and vehicle papers are checked during verification.",
    ],
    hi: [
      "आप आंध्र प्रदेश में रहते हैं और ऑटो-रिक्शा, तिपहिया सवारी वाहन, मोटर कैब या मैक्सी कैब चलाते हैं।",
      "परिवहन विभाग और गाँव या वार्ड सचिवालय ने आपकी पहचान और जाँच की है।",
      "जाँच के दौरान वैध ड्राइविंग लाइसेंस और गाड़ी के काग़ज़ देखे जाते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "When the government calls for applications, go to your Swarna Grama or Swarna Wardu (secretariat) office.",
        "Give your Aadhaar, driving licence, vehicle registration and bank details.",
        "After verification, the money is paid to your Aadhaar-linked bank account.",
      ],
      hi: [
        "जब सरकार आवेदन माँगे, अपने स्वर्ण ग्राम या स्वर्ण वार्ड (सचिवालय) दफ़्तर जाएँ।",
        "आधार, ड्राइविंग लाइसेंस, गाड़ी का रजिस्ट्रेशन और बैंक की जानकारी दें।",
        "जाँच के बाद पैसा आपके आधार से जुड़े बैंक खाते में आता है।",
      ],
    },
  },

  officialUrl: "https://apseva.ap.gov.in/",
  sources: [
    "https://www.theweek.in/wire-updates/national/2025/10/03/mes9-ap-cm-auto-drivers.amp.html",
    "https://www.siasat.com/andhra-cabinet-approves-rs-15000-financial-aid-for-auto-cab-drivers-3279468/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
