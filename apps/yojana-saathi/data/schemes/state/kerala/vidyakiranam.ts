import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vidyakiranam",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Vidyakiranam", hi: "विद्याकिरणम" },
  aka: ["Vidyakiranam scholarship", "scholarship for children of disabled parents Kerala"],
  shortDescription: {
    en: "Children of parents with disabilities (40% or more) from BPL families in Kerala get ₹300 to ₹1,000 a month for 10 months a year, from Class 1 to degree and PG.",
    hi: "केरल के BPL परिवारों में जिन बच्चों के माता या पिता 40% या उससे ज़्यादा दिव्यांग हैं, उन्हें कक्षा 1 से डिग्री और PG तक साल में 10 महीने ₹300 से ₹1,000 महीना मिलता है।",
  },
  level: "state",
  state: "kerala",
  department: { en: "Social Justice Department, Government of Kerala", hi: "सामाजिक न्याय विभाग, केरल सरकार" },
  categories: ["education", "disability"],
  tags: ["scholarship", "disabled parents", "children", "education assistance", "suneethi", "kerala"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 300, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("kerala"),
    isTrue("student"),
    labelled(isTrue("bpl"), { en: "Your family is BPL", hi: "आपका परिवार BPL है" }),
  ),

  details: {
    en: [
      "Vidyakiranam is an education grant from Kerala's Social Justice Department for the children of parents with disabilities. Either one or both parents must have a disability of 40% or more.",
      "The amount depends on the class and is paid for up to 10 months each academic year. All studying children of such parents can get it. Applications are made online on the department's Suneethi portal.",
    ],
    hi: [
      "विद्याकिरणम केरल के सामाजिक न्याय विभाग की शिक्षा सहायता है, जो दिव्यांग माता-पिता के बच्चों के लिए है। माता या पिता में से किसी एक या दोनों की दिव्यांगता 40% या उससे ज़्यादा होनी चाहिए।",
      "राशि कक्षा के हिसाब से तय है और हर शैक्षणिक साल में 10 महीने तक मिलती है। ऐसे माता-पिता के सभी पढ़ने वाले बच्चे इसे पा सकते हैं। आवेदन विभाग के सुनीति पोर्टल पर ऑनलाइन होता है।",
    ],
  },
  benefits: {
    en: [
      "Classes 1 to 5: ₹300 a month.",
      "Classes 6 to 10: ₹500 a month.",
      "Plus One, Plus Two, ITI and similar courses: ₹750 a month.",
      "Degree, PG, polytechnic and professional courses: ₹1,000 a month.",
    ],
    hi: [
      "कक्षा 1 से 5: ₹300 महीना।",
      "कक्षा 6 से 10: ₹500 महीना।",
      "प्लस वन, प्लस टू, ITI और ऐसे कोर्स: ₹750 महीना।",
      "डिग्री, PG, पॉलिटेक्निक और प्रोफ़ेशनल कोर्स: ₹1,000 महीना।",
    ],
  },
  eligibilityText: {
    en: [
      "The father, the mother or both have a disability of 40% or more.",
      "The family is BPL (shown by a BPL ration card or the Village Officer's income certificate).",
      "The student is studying from Class 1 up to a PG or professional course. Degree students admitted on merit in private or self-financing colleges also qualify.",
      "The student is not getting education assistance from another scheme.",
    ],
    hi: [
      "पिता, माता या दोनों की दिव्यांगता 40% या उससे ज़्यादा हो।",
      "परिवार BPL हो (BPL राशन कार्ड या विलेज ऑफ़िसर के आय प्रमाण पत्र से)।",
      "छात्र कक्षा 1 से PG या प्रोफ़ेशनल कोर्स तक पढ़ रहा हो। निजी या सेल्फ़-फ़ाइनेंसिंग कॉलेज में मेरिट पर दाख़िला पाने वाले डिग्री छात्र भी पात्र हैं।",
      "छात्र को किसी दूसरी योजना से शिक्षा सहायता न मिल रही हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the Suneethi portal (suneethi.sjd.kerala.gov.in) with a one-time registration.",
        "Choose Vidyakiranam, fill in the form and upload the parent's disability certificate, BPL card or income certificate, and a certificate from the head of the institution.",
        "Submit and track the status on the portal. Akshaya centres can also apply for you for a small fee.",
      ],
      hi: [
        "सुनीति पोर्टल (suneethi.sjd.kerala.gov.in) पर वन-टाइम रजिस्ट्रेशन करें।",
        "विद्याकिरणम चुनें, फ़ॉर्म भरें और माता/पिता का दिव्यांगता प्रमाण पत्र, BPL कार्ड या आय प्रमाण पत्र, और संस्थान प्रधान का प्रमाण पत्र अपलोड करें।",
        "जमा करें और पोर्टल पर स्थिति देखें। अक्षय केंद्र भी थोड़ी फ़ीस लेकर आवेदन कर सकते हैं।",
      ],
    },
  },

  officialUrl: "https://suneethi.sjd.kerala.gov.in/",
  sources: ["https://suneethi.sjd.kerala.gov.in/Citizen_Platform/suneethi/criteria.php", "https://suneethi.sjd.kerala.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
