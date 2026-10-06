import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "snehapoorvam",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Snehapoorvam", hi: "स्नेहपूर्वम" },
  aka: ["Snehapoorvam scheme", "Kerala orphan scholarship", "KSSM Snehapoorvam"],
  shortDescription: {
    en: "Children in Kerala who have lost one or both parents and live with family or relatives get ₹300 to ₹1,000 a month for their studies, from under-5s to degree level.",
    hi: "केरल के वे बच्चे जिनके माता-पिता में से एक या दोनों नहीं रहे और जो परिवार या रिश्तेदारों के साथ रहते हैं, उन्हें पढ़ाई के लिए हर महीने ₹300 से ₹1,000 मिलते हैं, 5 साल से छोटे बच्चों से डिग्री तक।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Kerala Social Security Mission, Social Justice Department, Government of Kerala",
    hi: "केरल सामाजिक सुरक्षा मिशन, सामाजिक न्याय विभाग, केरल सरकार",
  },
  categories: ["education", "women-child", "social-welfare"],
  tags: ["orphan", "scholarship", "children", "single parent", "snehapoorvam", "kerala"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 300, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("kerala")),

  details: {
    en: [
      "Snehapoorvam helps children who have lost their father, mother or both to keep studying while they grow up in a family, with relatives or with community support, instead of being sent to an orphanage.",
      "It is run by the Kerala Social Security Mission. Applications go through the child's school or college, and the money is paid into a bank account of the child and guardian. The new government's 2026-27 budget lists Snehapoorvam among the schemes it will revive and strengthen.",
    ],
    hi: [
      "स्नेहपूर्वम उन बच्चों की मदद करती है जिनके पिता, माता या दोनों नहीं रहे, ताकि वे अनाथालय भेजे जाने की जगह परिवार, रिश्तेदारों या समुदाय के सहारे पलते हुए पढ़ाई जारी रख सकें।",
      "इसे केरल सामाजिक सुरक्षा मिशन चलाता है। आवेदन बच्चे के स्कूल या कॉलेज के ज़रिए जाता है, और पैसा बच्चे और अभिभावक के बैंक खाते में आता है। नई सरकार के 2026-27 बजट में स्नेहपूर्वम को उन योजनाओं में गिना गया है जिन्हें फिर से मज़बूत किया जाएगा।",
    ],
  },
  benefits: {
    en: [
      "Children below 5 years and Classes 1 to 5: ₹300 a month.",
      "Classes 6 to 10: ₹500 a month.",
      "Classes 11 and 12: ₹750 a month.",
      "Degree and professional degree courses: ₹1,000 a month.",
    ],
    hi: [
      "5 साल से छोटे बच्चे और कक्षा 1 से 5: ₹300 महीना।",
      "कक्षा 6 से 10: ₹500 महीना।",
      "कक्षा 11 और 12: ₹750 महीना।",
      "डिग्री और प्रोफ़ेशनल डिग्री कोर्स: ₹1,000 महीना।",
    ],
  },
  eligibilityText: {
    en: [
      "The child has lost the father, the mother or both.",
      "The child is below 5 years, or studies from Class 1 up to a degree course.",
      "The family is BPL. APL families qualify only if annual income is below ₹20,000 in rural areas or ₹22,375 in urban areas.",
      "The child lives with family, relatives or the community (not in an orphanage).",
    ],
    hi: [
      "बच्चे के पिता, माता या दोनों नहीं रहे।",
      "बच्चा 5 साल से छोटा है, या कक्षा 1 से डिग्री कोर्स तक पढ़ रहा है।",
      "परिवार BPL है। APL परिवार तभी पात्र हैं जब सालाना आय गाँव में ₹20,000 और शहर में ₹22,375 से कम हो।",
      "बच्चा परिवार, रिश्तेदारों या समुदाय के साथ रहता है (अनाथालय में नहीं)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Fill in the Snehapoorvam form (available on the Social Security Mission website) and attach the parent's death certificate, income proof and joint bank account details.",
        "Give it to the head of the government or aided school or college before 31 October each year. The institution verifies it and uploads it online.",
        "For children below 5, apply directly to the Social Security Mission through the Child Welfare Committee.",
      ],
      hi: [
        "स्नेहपूर्वम फ़ॉर्म (सामाजिक सुरक्षा मिशन की वेबसाइट पर उपलब्ध) भरें और माता/पिता का मृत्यु प्रमाण पत्र, आय का सबूत और संयुक्त बैंक खाते का विवरण लगाएँ।",
        "हर साल 31 अक्टूबर से पहले सरकारी या एडेड स्कूल/कॉलेज के प्रधान को दें। संस्थान जाँच करके इसे ऑनलाइन अपलोड करता है।",
        "5 साल से छोटे बच्चों के लिए बाल कल्याण समिति के ज़रिए सीधे सामाजिक सुरक्षा मिशन को आवेदन करें।",
      ],
    },
  },

  officialUrl: "https://socialsecuritymission.gov.in/2024/05/04/snehapoorvam/",
  sources: [
    "https://socialsecuritymission.gov.in/2024/05/04/snehapoorvam/",
    "https://socialsecuritymission.gov.in/application-forms/",
    "https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "check-status",
};

export default scheme;
