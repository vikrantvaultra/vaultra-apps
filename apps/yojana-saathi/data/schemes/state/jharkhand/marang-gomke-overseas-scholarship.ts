import { all, any, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "marang-gomke-overseas-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Marang Gomke Jaipal Singh Munda Overseas Scholarship", hi: "मरांग गोमके जयपाल सिंह मुंडा पारदेशीय छात्रवृत्ति योजना" },
  aka: ["Marang Gomke scholarship", "Jharkhand overseas scholarship", "Jaipal Singh Munda scholarship"],
  shortDescription: {
    en: "ST, SC, minority and Backward Class students from Jharkhand get state funding for a master's or M.Phil at selected universities in the UK and Northern Ireland; 50 seats a year.",
    hi: "झारखंड के ST, SC, अल्पसंख्यक और पिछड़ा वर्ग के छात्र-छात्राओं को ब्रिटेन और उत्तरी आयरलैंड के चुने हुए विश्वविद्यालयों में मास्टर्स या एम.फ़िल के लिए राज्य से आर्थिक मदद मिलती है; हर साल 50 सीटें।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Scheduled Tribe, Scheduled Caste, Minority and Backward Class Welfare, Government of Jharkhand",
    hi: "अनुसूचित जनजाति, अनुसूचित जाति, अल्पसंख्यक एवं पिछड़ा वर्ग कल्याण विभाग, झारखंड सरकार",
  },
  categories: ["education"],
  tags: ["overseas scholarship", "study abroad", "uk", "masters", "tribal students", "jharkhand"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("jharkhand"),
    labelled(any(when("caste", "in", ["st", "pvtg", "sc", "obc"]), isTrue("minority")), {
      en: "Belongs to ST, SC, Backward Class or a minority community",
      hi: "ST, SC, पिछड़ा वर्ग या अल्पसंख्यक समुदाय से हों",
    }),
  ),

  details: {
    en: [
      "The Marang Gomke Jaipal Singh Munda Overseas Scholarship pays for selected Jharkhand students to do a master's or M.Phil in chosen courses at selected universities in the United Kingdom and Northern Ireland.",
      "It began for Scheduled Tribe students and now also covers Scheduled Caste, minority and Backward Class students. In 2025-26, 24 students were selected, and the number of seats has been doubled to 50.",
    ],
    hi: [
      "मरांग गोमके जयपाल सिंह मुंडा पारदेशीय छात्रवृत्ति योजना में चुने गए झारखंड के छात्र-छात्राओं को ब्रिटेन और उत्तरी आयरलैंड के चुने हुए विश्वविद्यालयों में चुने हुए कोर्स में मास्टर्स या एम.फ़िल करने का ख़र्च मिलता है।",
      "यह अनुसूचित जनजाति के छात्रों के लिए शुरू हुई थी और अब अनुसूचित जाति, अल्पसंख्यक और पिछड़ा वर्ग के छात्र भी इसमें शामिल हैं। 2025-26 में 24 छात्र चुने गए, और अब सीटें दोगुनी करके 50 कर दी गई हैं।",
    ],
  },
  benefits: {
    en: ["Funding for a master's or M.Phil at a selected UK or Northern Ireland university.", "50 seats a year."],
    hi: ["ब्रिटेन या उत्तरी आयरलैंड के चुने हुए विश्वविद्यालय में मास्टर्स या एम.फ़िल के लिए आर्थिक मदद।", "हर साल 50 सीटें।"],
  },
  eligibilityText: {
    en: [
      "Resident of Jharkhand from a Scheduled Tribe, Scheduled Caste, minority or Backward Class community.",
      "Has secured admission to a selected course at a selected university in the UK or Northern Ireland.",
      "Academic, age and income conditions are set in each year's advertisement by the department.",
    ],
    hi: [
      "झारखंड के निवासी, जो अनुसूचित जनजाति, अनुसूचित जाति, अल्पसंख्यक या पिछड़ा वर्ग समुदाय से हों।",
      "ब्रिटेन या उत्तरी आयरलैंड के चुने हुए विश्वविद्यालय के चुने हुए कोर्स में दाख़िला मिल चुका हो।",
      "पढ़ाई, उम्र और आय की शर्तें विभाग हर साल के विज्ञापन में तय करता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Watch for the yearly advertisement from the ST, SC, Minority and BC Welfare Department (Tribal Welfare Commissioner).",
        "Apply as described in the advertisement with your university offer letter and certificates.",
      ],
      hi: [
        "ST, SC, अल्पसंख्यक एवं पिछड़ा वर्ग कल्याण विभाग (आदिवासी कल्याण आयुक्त) के सालाना विज्ञापन पर नज़र रखें।",
        "विज्ञापन में बताए तरीक़े से विश्वविद्यालय के ऑफ़र लेटर और प्रमाण पत्रों के साथ आवेदन करें।",
      ],
    },
  },

  officialUrl: "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
  sources: ["https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf", "https://cm.jharkhand.gov.in/node/15921"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
