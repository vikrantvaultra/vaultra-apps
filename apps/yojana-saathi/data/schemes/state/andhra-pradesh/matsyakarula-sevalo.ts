import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "matsyakarula-sevalo",
  tier: "compact",
  name: { en: "Matsyakarula Sevalo (Fishing Ban Relief)", hi: "मत्स्यकारुला सेवलो (मछली पकड़ने पर रोक के दौरान राहत)" },
  aka: ["fishing ban relief AP", "Matsyakara Bharosa", "fishermen 20000 Andhra"],
  shortDescription: {
    en: "Marine fishers in Andhra Pradesh get ₹20,000 in cash support each year to cover the 61-day fishing ban during the breeding season.",
    hi: "आंध्र प्रदेश के समुद्री मछुआरों को प्रजनन के मौसम में 61 दिन की मछली पकड़ने की रोक के दौरान हर साल ₹20,000 की नकद मदद मिलती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: { en: "Fisheries Department, Government of Andhra Pradesh", hi: "मत्स्य विभाग, आंध्र प्रदेश सरकार" },
  categories: ["agriculture", "social-welfare"],
  tags: ["fishermen", "fishing ban", "matsyakara", "20000", "fisher", "andhra pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "career",
  eligibility: all(residentOf("andhra-pradesh"), when("occupation", "eq", "fisher")),

  details: {
    en: [
      "Every year marine fishing with motorised boats is banned along Andhra Pradesh's coast for 61 days (mid-April to mid-June) so that fish can breed. Fishers lose their income during this time.",
      "The state pays eligible fisher families relief during the ban. The current government raised this from ₹10,000 to ₹20,000 a year, paid by DBT around May.",
    ],
    hi: [
      "हर साल मछलियों के प्रजनन के लिए आंध्र प्रदेश के तट पर 61 दिन (मध्य अप्रैल से मध्य जून) मोटर वाली नावों से समुद्री मछली पकड़ने पर रोक रहती है। इस दौरान मछुआरों की कमाई रुक जाती है।",
      "रोक के दौरान राज्य पात्र मछुआरा परिवारों को राहत देता है। मौजूदा सरकार ने इसे ₹10,000 से बढ़ाकर ₹20,000 सालाना कर दिया है, जो लगभग मई में DBT से दिया जाता है।",
    ],
  },
  benefits: {
    en: ["₹20,000 a year during the fishing ban period.", "Paid by DBT into your bank account."],
    hi: ["मछली पकड़ने पर रोक के दौरान साल में ₹20,000।", "पैसा DBT से आपके बैंक खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "A marine fisher living in Andhra Pradesh whose livelihood stops during the fishing ban.",
      "Registered with the Fisheries Department (for example as a boat owner or crew member).",
      "Aadhaar-linked bank account.",
    ],
    hi: [
      "आंध्र प्रदेश के समुद्री मछुआरे, जिनकी रोज़ी-रोटी रोक के दौरान बंद हो जाती है।",
      "मत्स्य विभाग में पंजीकृत (जैसे नाव मालिक या नाव पर काम करने वाले)।",
      "आधार से जुड़ा बैंक खाता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Before the ban season, contact the Fisheries Development Officer or the fisheries assistant at your village secretariat.",
        "Get your name verified on the list of eligible fishers with your Aadhaar and boat or fisher registration.",
        "The relief is paid to your Aadhaar-linked bank account once the list is approved.",
      ],
      hi: [
        "रोक का मौसम शुरू होने से पहले मत्स्य विकास अधिकारी या अपने गाँव सचिवालय के मत्स्य सहायक से मिलें।",
        "आधार और नाव या मछुआरा पंजीकरण के साथ पात्र मछुआरों की सूची में अपना नाम जँचवाएँ।",
        "सूची मंज़ूर होने पर राहत राशि आपके आधार से जुड़े बैंक खाते में आती है।",
      ],
    },
  },

  officialUrl: "https://apseva.ap.gov.in/",
  sources: [
    "https://thesouthfirst.com/andhrapradesh/andhra-pradesh-rs-3-22-lakh-crore-budget-reflects-hope-and-desperation-amid-financial-struggles/",
    "https://icsf.net/newss/andhra-pradesh-61-day-fishing-ban-fishermen-struggle-as-prices-spike",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
