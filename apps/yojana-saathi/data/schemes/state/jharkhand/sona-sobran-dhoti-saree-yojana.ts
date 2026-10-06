import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sona-sobran-dhoti-saree-yojana",
  tier: "compact",
  name: { en: "Sona Sobran Dhoti-Saree-Lungi Yojana", hi: "सोना सोबरन धोती-साड़ी-लुंगी योजना" },
  aka: ["Dhoti Saree Yojana", "Sona Sobran", "Jharkhand dhoti saree"],
  shortDescription: {
    en: "Poor ration-card families in Jharkhand can buy a dhoti or lungi and a saree for just ₹10 each, twice a year, from their ration shop.",
    hi: "झारखंड के ग़रीब राशन कार्ड वाले परिवार साल में दो बार अपनी राशन दुकान से सिर्फ़ ₹10 में धोती या लुंगी और साड़ी ले सकते हैं।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Food, Public Distribution and Consumer Affairs, Government of Jharkhand",
    hi: "खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग, झारखंड सरकार",
  },
  categories: ["social-welfare"],
  tags: ["dhoti", "saree", "lungi", "clothes", "ration card", "jharkhand"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("jharkhand")),

  details: {
    en: [
      "Under the Sona Sobran scheme, the Jharkhand government gives poor families clothes at a token price. A dhoti or lungi for men and a saree for women are sold for ₹10 each, twice a year, through the public distribution system.",
      "The scheme is fully funded by the state. The 2026-27 budget provides ₹600 crore for it.",
    ],
    hi: [
      "सोना सोबरन योजना में झारखंड सरकार ग़रीब परिवारों को नाम-मात्र की क़ीमत पर कपड़े देती है। पुरुषों के लिए धोती या लुंगी और महिलाओं के लिए साड़ी, ₹10 में, साल में दो बार, जन वितरण प्रणाली की दुकानों से मिलती है।",
      "यह योजना पूरी तरह राज्य सरकार के पैसे से चलती है। 2026-27 के बजट में इसके लिए ₹600 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: ["A dhoti or lungi, and a saree, for ₹10 each.", "Given twice a year."],
    hi: ["धोती या लुंगी, और साड़ी, ₹10 में।", "साल में दो बार।"],
  },
  eligibilityText: {
    en: [
      "Family living in Jharkhand with a ration card under the public distribution system.",
      "Check with your ration dealer which card types are covered in the current round.",
    ],
    hi: ["झारखंड में रहने वाला परिवार, जिसके पास जन वितरण प्रणाली का राशन कार्ड हो।", "इस बार किन कार्डों पर मिल रहा है, यह अपने राशन डीलर से पूछें।"],
  },
  applicationProcess: {
    offline: {
      en: ["No separate application. When the distribution round starts, go to your ration shop with your ration card.", "Pay ₹10 for each item and collect it."],
      hi: ["अलग से आवेदन नहीं करना है। वितरण शुरू होने पर राशन कार्ड लेकर अपनी राशन दुकान पर जाएँ।", "हर कपड़े के ₹10 देकर उसे ले लें।"],
    },
  },

  officialUrl: "https://jsfss.jharkhand.gov.in/",
  sources: ["https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf", "https://cm.jharkhand.gov.in/node/13887", "https://cm.jharkhand.gov.in/node/13823"],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
