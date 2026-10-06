import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-farishtey-scheme",
  tier: "compact",
  name: { en: "Farishtey Scheme (Punjab)", hi: "फ़रिश्ते योजना (पंजाब)" },
  aka: ["Farishte scheme", "road accident free treatment Punjab", "good samaritan Punjab"],
  shortDescription: {
    en: "Anyone hurt in a road accident in Punjab gets free treatment at empanelled hospitals with no upper limit, and the person who brings them to hospital gets ₹2,000 and a certificate.",
    hi: "पंजाब में सड़क हादसे में घायल किसी भी व्यक्ति का सूचीबद्ध अस्पतालों में बिना ऊपरी सीमा के मुफ़्त इलाज होता है, और उसे अस्पताल पहुँचाने वाले को ₹2,000 और प्रशंसा पत्र मिलता है।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "State Health Agency, Department of Health & Family Welfare, Government of Punjab",
    hi: "स्टेट हेल्थ एजेंसी, स्वास्थ्य एवं परिवार कल्याण विभाग, पंजाब सरकार",
  },
  categories: ["health"],
  tags: ["road accident", "free treatment", "emergency", "good samaritan", "farishtey", "punjab"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("punjab")),

  details: {
    en: [
      "The Farishtey Scheme, notified on 25 January 2024, gives road accident victims immediate free treatment in government and empanelled private hospitals, with no cap on the amount. It covers every accident that happens in Punjab, whatever the victim's caste, nationality or place of birth.",
      "To encourage people to help, anyone who takes an accident victim to hospital is treated as a 'Farishta' (angel). They get a cash reward of ₹2,000 and a certificate, and are protected from legal hassle and police questioning.",
    ],
    hi: [
      "फ़रिश्ते योजना 25 जनवरी 2024 को अधिसूचित हुई। इसमें सड़क हादसे के घायलों का सरकारी और सूचीबद्ध निजी अस्पतालों में तुरंत मुफ़्त इलाज होता है, राशि की कोई सीमा नहीं। पंजाब में होने वाला हर हादसा इसमें आता है, घायल की जाति, राष्ट्रीयता या जन्मस्थान चाहे जो हो।",
      "लोगों को मदद के लिए आगे लाने के लिए, जो भी हादसे के घायल को अस्पताल पहुँचाता है उसे 'फ़रिश्ता' माना जाता है। उसे ₹2,000 का नक़द इनाम और प्रशंसा पत्र मिलता है, और उसे क़ानूनी झंझट और पुलिस पूछताछ से छूट मिलती है।",
    ],
  },
  benefits: {
    en: [
      "Free treatment for road accident victims, with no upper limit.",
      "Available at government hospitals and empanelled private hospitals along highways and roads.",
      "₹2,000 reward and a certificate for the person who brings the victim to hospital.",
    ],
    hi: [
      "सड़क हादसे के घायलों का मुफ़्त इलाज, कोई ऊपरी सीमा नहीं।",
      "सरकारी अस्पतालों और हाईवे व सड़कों के पास सूचीबद्ध निजी अस्पतालों में।",
      "घायल को अस्पताल पहुँचाने वाले को ₹2,000 इनाम और प्रशंसा पत्र।",
    ],
  },
  eligibilityText: {
    en: [
      "Any person injured in a road accident within Punjab, whether or not they live in Punjab.",
      "Any person who voluntarily takes an accident victim to hospital can be honoured as a Farishta.",
    ],
    hi: [
      "पंजाब के अंदर सड़क हादसे में घायल कोई भी व्यक्ति, चाहे वह पंजाब में रहता हो या नहीं।",
      "हादसे के घायल को अपनी मर्ज़ी से अस्पताल पहुँचाने वाला कोई भी व्यक्ति फ़रिश्ते के रूप में सम्मानित हो सकता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Call 108, 112 or 1033 to get the victim to the nearest empanelled hospital.",
        "Treatment starts right away; no payment or card is needed.",
        "If you brought the victim, give your details at the hospital so you can be registered as a Farishta for the reward.",
      ],
      hi: [
        "घायल को नज़दीकी सूचीबद्ध अस्पताल पहुँचाने के लिए 108, 112 या 1033 पर फ़ोन करें।",
        "इलाज तुरंत शुरू होता है; कोई पैसा या कार्ड नहीं चाहिए।",
        "अगर आप घायल को लाए हैं, तो अस्पताल में अपना ब्योरा दें ताकि इनाम के लिए आप फ़रिश्ते के रूप में दर्ज हो सकें।",
      ],
    },
  },

  officialUrl: "https://sha.punjab.gov.in/farishtey/",
  sources: [
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/farishtey-scheme-proves-boon-in-saving-lives-223-accident-victims-receive-free-treatment/",
    "https://sha.punjab.gov.in/farishtey/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
