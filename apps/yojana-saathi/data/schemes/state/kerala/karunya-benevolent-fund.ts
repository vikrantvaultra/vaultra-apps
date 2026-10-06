import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karunya-benevolent-fund",
  tier: "compact",
  name: { en: "Karunya Benevolent Fund", hi: "कारुण्य बेनेवोलेंट फ़ंड" },
  aka: ["KBF", "Karunya Benevolent Fund Scheme", "Karunya fund Kerala"],
  shortDescription: {
    en: "Families in Kerala who are not covered by KASP can get help of up to ₹3 lakh for costly treatment of serious illnesses.",
    hi: "केरल के जो परिवार KASP में शामिल नहीं हैं, उन्हें गंभीर बीमारियों के महँगे इलाज के लिए ₹3 लाख तक की मदद मिल सकती है।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "State Health Agency Kerala, Health and Family Welfare Department, Government of Kerala",
    hi: "स्टेट हेल्थ एजेंसी केरल, स्वास्थ्य एवं परिवार कल्याण विभाग, केरल सरकार",
  },
  categories: ["health", "social-welfare"],
  tags: ["medical assistance", "treatment help", "karunya", "serious illness", "kerala"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("kerala")),

  details: {
    en: [
      "The Karunya Benevolent Fund helps families who are outside the Karunya Arogya Suraksha Padhathi (KASP) pay for expensive treatment of serious illnesses. Treatment worth up to ₹3 lakh per family can be covered.",
      "According to the January 2026 budget, ₹606.5 crore had been spent on it for about 77,600 families. The new government's revised 2026-27 budget lists it among the schemes it will revive, so the rules and process may change.",
    ],
    hi: [
      "कारुण्य बेनेवोलेंट फ़ंड उन परिवारों की मदद करता है जो कारुण्य आरोग्य सुरक्षा पद्धति (KASP) से बाहर हैं, ताकि वे गंभीर बीमारियों का महँगा इलाज करा सकें। हर परिवार को ₹3 लाख तक का इलाज मिल सकता है।",
      "जनवरी 2026 के बजट के अनुसार इस पर लगभग 77,600 परिवारों के लिए ₹606.5 करोड़ ख़र्च हुए थे। नई सरकार के 2026-27 के संशोधित बजट में इसे फिर से मज़बूत करने वाली योजनाओं में गिना गया है, इसलिए नियम और प्रक्रिया बदल सकती है।",
    ],
  },
  benefits: {
    en: ["Treatment help of up to ₹3 lakh per family for serious illnesses, paid to the treating hospital."],
    hi: ["गंभीर बीमारियों के इलाज के लिए हर परिवार को ₹3 लाख तक की मदद, जो इलाज करने वाले अस्पताल को दी जाती है।"],
  },
  eligibilityText: {
    en: [
      "Your family is not covered by KASP / PM-JAY.",
      "A family income limit applies. Ask the hospital's Karunya / KASP help desk for the current limit before applying.",
    ],
    hi: [
      "आपका परिवार KASP / PM-JAY में शामिल नहीं है।",
      "परिवार की आय की सीमा लागू है। आवेदन से पहले अस्पताल के कारुण्य / KASP हेल्प डेस्क से मौजूदा सीमा पूछ लें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to the KASP / Karunya help desk at a government hospital or an empanelled hospital.",
        "Take your ration card, income certificate, Aadhaar and the doctor's treatment estimate.",
        "The help desk will tell you if you qualify and help you submit the application.",
      ],
      hi: [
        "किसी सरकारी अस्पताल या सूचीबद्ध अस्पताल के KASP / कारुण्य हेल्प डेस्क पर जाएँ।",
        "राशन कार्ड, आय प्रमाण पत्र, आधार और डॉक्टर का इलाज का अनुमान साथ ले जाएँ।",
        "हेल्प डेस्क बताएगा कि आप पात्र हैं या नहीं और आवेदन जमा करने में मदद करेगा।",
      ],
    },
  },

  officialUrl: "https://sha.kerala.gov.in/",
  sources: [
    "https://budget.kerala.gov.in/build/budget_speech/2026/2026Eng.pdf",
    "https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "check-status",
};

export default scheme;
