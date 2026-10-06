import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sikkim-vatsalya-yojana",
  tier: "compact",
  name: { en: "Vatsalya Yojana (Sikkim IVF Assistance)", hi: "वात्सल्य योजना (सिक्किम IVF सहायता)" },
  aka: ["Vatsalya Scheme", "Sikkim IVF scheme"],
  shortDescription: {
    en: "Married couples in Sikkim who cannot have children naturally can get financial help of up to ₹3 lakh for IVF treatment.",
    hi: "सिक्किम के वे शादीशुदा जोड़े जो स्वाभाविक रूप से माता-पिता नहीं बन पा रहे, IVF इलाज के लिए ₹3 लाख तक की आर्थिक मदद पा सकते हैं।",
  },
  level: "state",
  state: "sikkim",
  department: {
    en: "Government of Sikkim (contact the Health & Family Welfare Department or STNM Hospital)",
    hi: "सिक्किम सरकार (स्वास्थ्य एवं परिवार कल्याण विभाग या STNM अस्पताल से संपर्क करें)",
  },
  categories: ["health", "women-child"],
  tags: ["ivf", "infertility", "fertility treatment", "couple", "vatsalya", "sikkim"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(
    residentOf("sikkim"),
    labelled(when("marital", "eq", "married"), { en: "You are married", hi: "आप शादीशुदा हैं" }),
  ),

  details: {
    en: [
      "Vatsalya Yojana is a Sikkim government scheme that helps couples who are unable to become parents naturally. It gives financial assistance of up to ₹3 lakh for IVF (in vitro fertilisation) treatment.",
      "The state says hundreds of couples have been helped so far. The 2026-27 state budget also announced an Assisted Reproductive Technology Centre at STNM Hospital, Gangtok, to address the state's falling fertility rate.",
    ],
    hi: [
      "वात्सल्य योजना सिक्किम सरकार की योजना है जो उन जोड़ों की मदद करती है जो स्वाभाविक रूप से माता-पिता नहीं बन पा रहे। यह IVF (टेस्ट ट्यूब) इलाज के लिए ₹3 लाख तक की आर्थिक मदद देती है।",
      "राज्य के अनुसार अब तक सैकड़ों जोड़ों को मदद मिली है। 2026-27 के राज्य बजट में गंगटोक के STNM अस्पताल में सहायक प्रजनन तकनीक केंद्र बनाने की घोषणा भी की गई है, ताकि घटती प्रजनन दर की समस्या से निपटा जा सके।",
    ],
  },
  benefits: {
    en: ["Financial assistance of up to ₹3 lakh towards IVF treatment."],
    hi: ["IVF इलाज के लिए ₹3 लाख तक की आर्थिक मदद।"],
  },
  eligibilityText: {
    en: [
      "A married couple living in Sikkim.",
      "The couple is unable to have a child naturally and needs IVF treatment.",
    ],
    hi: [
      "सिक्किम में रहने वाला शादीशुदा जोड़ा।",
      "जोड़ा स्वाभाविक रूप से संतान नहीं पा रहा है और उसे IVF इलाज की ज़रूरत है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Consult a gynaecologist at STNM Hospital or your district hospital about IVF treatment.",
        "Ask the hospital or the Health & Family Welfare Department how to apply for Vatsalya Yojana assistance, and keep your marriage and medical papers ready.",
      ],
      hi: [
        "IVF इलाज के बारे में STNM अस्पताल या अपने ज़िला अस्पताल में स्त्री रोग विशेषज्ञ से सलाह लें।",
        "वात्सल्य योजना की मदद के लिए आवेदन कैसे करें, यह अस्पताल या स्वास्थ्य एवं परिवार कल्याण विभाग से पूछें, और शादी व इलाज के कागज़ तैयार रखें।",
      ],
    },
  },

  officialUrl: "https://ipr.sikkim.gov.in/Home/News?slug=2nd-aama-samman-diwas-celebrated-at-rangpo-cm-highlights-women-centric-initiatives",
  sources: [
    "https://ipr.sikkim.gov.in/Home/News?slug=2nd-aama-samman-diwas-celebrated-at-rangpo-cm-highlights-women-centric-initiatives",
    "https://ipr.sikkim.gov.in/Home/KeyAchievements",
    "https://ipr.sikkim.gov.in/Home/News?slug=general-budget-session-of-the-sikkim-legislative-assembly-commences-in-the-capital",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
