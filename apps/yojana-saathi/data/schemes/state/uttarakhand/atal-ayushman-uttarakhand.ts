import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "atal-ayushman-uttarakhand",
  tier: "compact",
  overlapGroup: "health-cover",
  name: { en: "Atal Ayushman Uttarakhand Yojana", hi: "अटल आयुष्मान उत्तराखंड योजना" },
  aka: ["AAUY", "Atal Ayushman", "Golden card Uttarakhand"],
  shortDescription: {
    en: "Uttarakhand families not covered by PM-JAY get the same cashless hospital treatment: up to ₹5 lakh per family a year at empanelled hospitals.",
    hi: "उत्तराखंड के जो परिवार PM-JAY में नहीं आते, उन्हें भी वैसा ही कैशलेस इलाज मिलता है: सूचीबद्ध अस्पतालों में हर परिवार को सालाना ₹5 लाख तक।",
  },
  level: "state",
  state: "uttarakhand",
  department: {
    en: "State Health Authority, Uttarakhand (Department of Medical Health and Family Welfare)",
    hi: "राज्य स्वास्थ्य प्राधिकरण, उत्तराखंड (चिकित्सा स्वास्थ्य एवं परिवार कल्याण विभाग)",
  },
  categories: ["health"],
  tags: ["health insurance", "ayushman", "golden card", "free treatment", "hospital", "uttarakhand"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("uttarakhand")),

  details: {
    en: [
      "Atal Ayushman Uttarakhand Yojana started on 25 December 2018. When PM-JAY was launched, it covered only families picked from old census data, so Uttarakhand created this scheme to give every other resident family the same benefits.",
      "It uses the same hospitals, treatment packages, coverage amount and IT system as PM-JAY, and is run by the State Health Authority. The cover is ₹5 lakh per family per year for cashless treatment. The 2026-27 state budget set aside ₹600 crore for it.",
    ],
    hi: [
      "अटल आयुष्मान उत्तराखंड योजना 25 दिसंबर 2018 को शुरू हुई। PM-JAY में सिर्फ़ पुराने जनगणना आँकड़ों से चुने गए परिवार आते थे, इसलिए उत्तराखंड ने बाकी सभी निवासी परिवारों को वही फ़ायदे देने के लिए यह योजना बनाई।",
      "इसमें PM-JAY वाले ही अस्पताल, इलाज के पैकेज, कवर की रकम और IT सिस्टम इस्तेमाल होते हैं, और इसे राज्य स्वास्थ्य प्राधिकरण चलाता है। हर परिवार को सालाना ₹5 लाख तक कैशलेस इलाज मिलता है। 2026-27 के राज्य बजट में इसके लिए ₹600 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹5 lakh per family per year in empanelled government and private hospitals.",
      "The same treatment packages as PM-JAY, covering hospital stay, surgery and medicines during treatment.",
      "Treatment is also possible in empanelled hospitals outside the state, as under PM-JAY.",
    ],
    hi: [
      "सूचीबद्ध सरकारी और निजी अस्पतालों में हर परिवार को सालाना ₹5 लाख तक कैशलेस इलाज।",
      "PM-JAY जैसे ही इलाज के पैकेज, जिनमें अस्पताल में भर्ती, ऑपरेशन और इलाज के दौरान की दवाइयाँ शामिल हैं।",
      "PM-JAY की तरह राज्य के बाहर के सूचीबद्ध अस्पतालों में भी इलाज हो सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident families of Uttarakhand who are not already covered under PM-JAY.",
      "State government employees and pensioners are covered under a separate scheme (SGHS).",
    ],
    hi: [
      "उत्तराखंड के निवासी परिवार जो पहले से PM-JAY में शामिल नहीं हैं।",
      "राज्य सरकार के कर्मचारी और पेंशनभोगी एक अलग योजना (SGHS) में आते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit a Common Service Centre or an empanelled hospital's Ayushman (Arogya Mitra) desk.",
        "Get your family verified and your Ayushman card made.",
        "Show the card at an empanelled hospital when you need treatment.",
      ],
      hi: [
        "नज़दीकी जन सेवा केंद्र (CSC) या सूचीबद्ध अस्पताल के आयुष्मान (आरोग्य मित्र) काउंटर पर जाएँ।",
        "परिवार का सत्यापन कराकर आयुष्मान कार्ड बनवाएँ।",
        "इलाज की ज़रूरत पड़ने पर सूचीबद्ध अस्पताल में कार्ड दिखाएँ।",
      ],
    },
  },

  officialUrl: "https://sha.uk.gov.in/",
  sources: [
    "https://sha.uk.gov.in/Home/AboutScheme.html",
    "https://cdnbbsr.s3waas.gov.in/s3c65d7bd70fe3e5e3a2f3de681edc193d/uploads/2026/03/2026030981807180.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
