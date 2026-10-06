import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-super-100",
  tier: "compact",
  name: { en: "Super 100 (Haryana)", hi: "सुपर 100 (हरियाणा)" },
  aka: ["Super 100 Haryana", "Haryana Super 100 coaching"],
  shortDescription: {
    en: "Bright students from Haryana government schools get free coaching for IIT-JEE and NEET; the 2026-27 budget raises the seats from 400 to 500.",
    hi: "हरियाणा के सरकारी स्कूलों के होनहार विद्यार्थियों को IIT-JEE और NEET की मुफ़्त कोचिंग मिलती है; 2026-27 के बजट में सीटें 400 से बढ़ाकर 500 की गईं।",
  },
  level: "state",
  state: "haryana",
  department: { en: "School Education Department, Haryana", hi: "स्कूल शिक्षा विभाग, हरियाणा" },
  categories: ["education"],
  tags: ["coaching", "iit", "jee", "neet", "government school", "free coaching", "haryana"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("haryana"), isTrue("student")),

  details: {
    en: [
      "Super 100 is a School Education Department programme that gives free coaching for engineering and medical entrance exams (IIT-JEE and NEET) to talented students from Haryana's government schools.",
      "The 2026-27 budget says 267 Super 100 students got into IITs, NITs and medical colleges in the last five years, and proposes raising the seats from 400 to 500. Students are chosen through a selection test announced by the department.",
    ],
    hi: [
      "सुपर 100 स्कूल शिक्षा विभाग का कार्यक्रम है, जो हरियाणा के सरकारी स्कूलों के होनहार विद्यार्थियों को इंजीनियरिंग और मेडिकल प्रवेश परीक्षाओं (IIT-JEE और NEET) की मुफ़्त कोचिंग देता है।",
      "2026-27 के बजट के अनुसार पिछले पाँच साल में सुपर 100 के 267 विद्यार्थियों को IIT, NIT और मेडिकल कॉलेजों में दाख़िला मिला, और सीटें 400 से बढ़ाकर 500 करने का प्रस्ताव है। विद्यार्थियों का चयन विभाग की घोषित चयन परीक्षा से होता है।",
    ],
  },
  benefits: {
    en: ["Free coaching for IIT-JEE and NEET.", "About 500 seats from 2026-27 (up from 400)."],
    hi: ["IIT-JEE और NEET की मुफ़्त कोचिंग।", "2026-27 से लगभग 500 सीटें (पहले 400)।"],
  },
  eligibilityText: {
    en: [
      "A student of a Haryana government school.",
      "Selected through the Super 100 selection test (check your school or the department for the current notice, marks cut-off and class).",
    ],
    hi: [
      "हरियाणा के सरकारी स्कूल का विद्यार्थी।",
      "सुपर 100 चयन परीक्षा से चुना गया हो (मौजूदा सूचना, अंक सीमा और कक्षा अपने स्कूल या विभाग से पता करें)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your school principal about the Super 100 selection test when the notice comes out.",
        "Register through your school, take the test and, if selected, join the coaching batch.",
      ],
      hi: [
        "सूचना जारी होने पर अपने स्कूल प्रिंसिपल से सुपर 100 चयन परीक्षा के बारे में पूछें।",
        "स्कूल के ज़रिए पंजीकरण करें, परीक्षा दें और चुने जाने पर कोचिंग बैच में शामिल हों।",
      ],
    },
  },

  officialUrl: "https://schooleducationharyana.gov.in/",
  sources: ["https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2026/03/202603201031104005.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
