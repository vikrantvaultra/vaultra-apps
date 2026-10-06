import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-sabooj-sathi",
  tier: "compact",
  name: { en: "Sabooj Sathi (Free Bicycles)", hi: "सबूज साथी (मुफ़्त साइकिल)" },
  aka: ["Sabooj Sathi", "Sabuj Sathi", "free cycle"],
  shortDescription: {
    en: "A free bicycle for students of government and government-aided schools and madrasahs in West Bengal, to help them get to school and stay in education.",
    hi: "पश्चिम बंगाल के सरकारी और सरकारी सहायता प्राप्त स्कूलों और मदरसों के छात्रों को मुफ़्त साइकिल, ताकि वे स्कूल आ-जा सकें और पढ़ाई जारी रखें।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Backward Classes Welfare Department, Government of West Bengal", hi: "पिछड़ा वर्ग कल्याण विभाग, पश्चिम बंगाल सरकार" },
  categories: ["education"],
  tags: ["bicycle", "free cycle", "school", "student", "sabooj sathi", "west bengal"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("west-bengal"), isTrue("student")),

  details: {
    en: [
      "Sabooj Sathi gives free bicycles to school students so that distance does not stop them, especially girls, from attending school. More than 1.44 crore bicycles had been given out by early 2026.",
      "Bicycles are distributed through schools to students in the eligible classes of government, government-aided and government-sponsored schools and madrasahs. The new state government has said existing social protection schemes will continue, but the 2026-27 distribution had not been confirmed when this page was checked.",
    ],
    hi: [
      "सबूज साथी में स्कूली छात्रों को मुफ़्त साइकिल मिलती है, ताकि दूरी की वजह से, ख़ासकर लड़कियों की, पढ़ाई न छूटे। 2026 की शुरुआत तक 1.44 करोड़ से ज़्यादा साइकिलें बाँटी जा चुकी थीं।",
      "साइकिलें स्कूलों के ज़रिए सरकारी, सरकारी सहायता प्राप्त और सरकार प्रायोजित स्कूलों व मदरसों की पात्र कक्षाओं के छात्रों को दी जाती हैं। नई राज्य सरकार ने कहा है कि मौजूदा सामाजिक सुरक्षा योजनाएँ जारी रहेंगी, पर यह पेज जाँचते समय 2026-27 का वितरण पक्का नहीं हुआ था।",
    ],
  },
  benefits: {
    en: ["A free bicycle, given through your school."],
    hi: ["आपके स्कूल के ज़रिए एक मुफ़्त साइकिल।"],
  },
  eligibilityText: {
    en: [
      "A student in the eligible class (usually on entering Class IX) at a government, government-aided or government-sponsored school or madrasah in West Bengal.",
      "The school decides which students are covered each year.",
    ],
    hi: [
      "पश्चिम बंगाल के सरकारी, सरकारी सहायता प्राप्त या सरकार प्रायोजित स्कूल या मदरसे की पात्र कक्षा का छात्र (आमतौर पर कक्षा 9 में आने पर)।",
      "हर साल कौन से छात्र शामिल होंगे, यह स्कूल तय करता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate application is needed. Your school enters student details on the Sabooj Sathi portal.",
        "Ask your headmaster or headmistress when bicycles will be given out this year.",
      ],
      hi: [
        "अलग से आवेदन नहीं करना होता। आपका स्कूल छात्रों का ब्योरा सबूज साथी पोर्टल पर डालता है।",
        "अपने प्रधानाध्यापक से पूछें कि इस साल साइकिलें कब बाँटी जाएँगी।",
      ],
    },
  },

  officialUrl: "https://banglarshiksha.wb.gov.in/",
  sources: [
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026-2027_English_I.pdf",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
    "https://banglarshiksha.wb.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "check-status",
};

export default scheme;
