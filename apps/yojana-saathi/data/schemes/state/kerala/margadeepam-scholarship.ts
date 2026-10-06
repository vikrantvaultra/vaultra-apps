import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "margadeepam-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Margadeepam Pre-Matric Scholarship", hi: "मार्गदीपम प्री-मैट्रिक छात्रवृत्ति" },
  aka: ["Margadeepam", "Kerala minority pre-matric scholarship"],
  shortDescription: {
    en: "A Kerala state scholarship for school students from minority communities studying below the matric level.",
    hi: "केरल सरकार की छात्रवृत्ति, जो अल्पसंख्यक समुदायों के मैट्रिक से नीचे की कक्षाओं में पढ़ने वाले स्कूली छात्रों के लिए है।",
  },
  level: "state",
  state: "kerala",
  department: { en: "Minority Welfare Department, Government of Kerala", hi: "अल्पसंख्यक कल्याण विभाग, केरल सरकार" },
  categories: ["education", "minority"],
  tags: ["scholarship", "minority", "pre-matric", "school students", "margadeepam", "kerala"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("kerala"),
    labelled(isTrue("minority"), { en: "You belong to a minority community", hi: "आप अल्पसंख्यक समुदाय से हैं" }),
    isTrue("student"),
  ),

  details: {
    en: [
      "Margadeepam is a pre-matric scholarship paid by Kerala's Minority Welfare Department to school students from minority communities. It was started by the state as its own scheme.",
      "The new government's revised budget for 2026-27 includes funds for the Margadeepam Pre-Matric Scholarship. The current amount, income limit and application dates are announced by the department each year.",
    ],
    hi: [
      "मार्गदीपम केरल के अल्पसंख्यक कल्याण विभाग की प्री-मैट्रिक छात्रवृत्ति है, जो अल्पसंख्यक समुदायों के स्कूली छात्रों को दी जाती है। इसे राज्य ने अपनी योजना के रूप में शुरू किया।",
      "नई सरकार के 2026-27 के संशोधित बजट में मार्गदीपम प्री-मैट्रिक छात्रवृत्ति के लिए पैसा रखा गया है। मौजूदा राशि, आय सीमा और आवेदन की तारीख़ें विभाग हर साल घोषित करता है।",
    ],
  },
  benefits: {
    en: ["A yearly scholarship paid into the student's bank account."],
    hi: ["छात्र के बैंक खाते में सालाना छात्रवृत्ति।"],
  },
  eligibilityText: {
    en: [
      "The student belongs to a notified minority community (Muslim, Christian, Sikh, Buddhist, Jain or Parsi).",
      "The student studies in a school in Kerala below the matric (Class 10) level.",
      "Income and marks conditions are set in each year's notification.",
    ],
    hi: [
      "छात्र किसी अधिसूचित अल्पसंख्यक समुदाय (मुस्लिम, ईसाई, सिख, बौद्ध, जैन या पारसी) से है।",
      "छात्र केरल के किसी स्कूल में मैट्रिक (कक्षा 10) से नीचे की कक्षा में पढ़ता है।",
      "आय और अंकों की शर्तें हर साल की अधिसूचना में तय होती हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Watch for the Margadeepam notification on the Minority Welfare Department website.",
        "Apply online as given in the notification, usually with help from the school.",
        "Keep the student's bank account and Aadhaar details ready.",
      ],
      hi: [
        "अल्पसंख्यक कल्याण विभाग की वेबसाइट पर मार्गदीपम की अधिसूचना देखें।",
        "अधिसूचना में बताए तरीक़े से ऑनलाइन आवेदन करें, आम तौर पर स्कूल की मदद से।",
        "छात्र के बैंक खाते और आधार की जानकारी तैयार रखें।",
      ],
    },
  },

  officialUrl: "https://minoritywelfare.kerala.gov.in/",
  sources: ["https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf", "https://minoritywelfare.kerala.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
