import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "atal-griha-jyoti-yojana",
  tier: "compact",
  name: { en: "Atal Griha Jyoti Yojana", hi: "अटल गृह ज्योति योजना" },
  aka: ["Atal Grah Jyoti", "100 unit 100 rupees", "Indira Griha Jyoti"],
  shortDescription: {
    en: "Homes in Madhya Pradesh that use up to 150 units a month pay only ₹100 for the first 100 units of electricity; the state covers the rest.",
    hi: "मध्य प्रदेश में जिन घरों की बिजली खपत महीने में 150 यूनिट तक है, उन्हें पहले 100 यूनिट के लिए सिर्फ़ ₹100 देने होते हैं; बाकी राज्य सरकार भरती है।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: { en: "Energy Department, Government of Madhya Pradesh", hi: "ऊर्जा विभाग, मध्य प्रदेश सरकार" },
  categories: ["energy-savings"],
  tags: ["electricity", "bijli bill", "subsidy", "100 units", "power", "madhya pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(residentOf("madhya-pradesh")),

  details: {
    en: [
      "Atal Griha Jyoti Yojana lowers electricity bills for households that use little power. If your home uses up to 150 units in a month, you pay only ₹100 for the first 100 units, and the state government pays the rest as subsidy.",
      "The subsidy is shown directly on your bill by the power distribution company, so there is nothing to apply for. The scheme was earlier called Indira Griha Jyoti Yojana.",
    ],
    hi: [
      "अटल गृह ज्योति योजना कम बिजली इस्तेमाल करने वाले घरों का बिल घटाती है। अगर आपके घर की खपत महीने में 150 यूनिट तक है, तो पहले 100 यूनिट के लिए सिर्फ़ ₹100 देने होते हैं, और बाकी राशि राज्य सरकार सब्सिडी के रूप में देती है।",
      "यह छूट बिजली कंपनी सीधे आपके बिल में दिखाती है, इसलिए कोई आवेदन नहीं करना होता। पहले इस योजना का नाम इंदिरा गृह ज्योति योजना था।",
    ],
  },
  benefits: {
    en: [
      "Pay only ₹100 for the first 100 units in a month.",
      "Applies automatically in any month your use stays within 150 units.",
    ],
    hi: [
      "महीने के पहले 100 यूनिट के लिए सिर्फ़ ₹100।",
      "जिस महीने खपत 150 यूनिट के अंदर रहे, उस महीने छूट अपने-आप लगती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A domestic electricity consumer in Madhya Pradesh.",
      "Monthly use of up to 150 units.",
      "Sanctioned load of up to 1 kilowatt.",
    ],
    hi: [
      "मध्य प्रदेश में घरेलू बिजली उपभोक्ता।",
      "महीने में 150 यूनिट तक खपत।",
      "स्वीकृत भार 1 किलोवाट तक।",
    ],
  },
  exclusions: {
    en: ["In a month when use goes above 150 units, the subsidy does not apply for that month."],
    hi: ["जिस महीने खपत 150 यूनिट से ऊपर जाए, उस महीने छूट नहीं मिलती।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed. The discount is applied in your bill.",
        "If it is missing, contact your electricity distribution office with your consumer number.",
      ],
      hi: [
        "कोई आवेदन नहीं करना होता। छूट आपके बिल में लगकर आती है।",
        "अगर छूट नहीं लगी, तो अपने उपभोक्ता नंबर के साथ बिजली वितरण कार्यालय से संपर्क करें।",
      ],
    },
  },

  officialUrl: "https://www.myscheme.gov.in/schemes/agjy",
  sources: [
    "https://www.myscheme.gov.in/schemes/agjy",
    "https://www.drishtiias.com/state-pcs-current-affairs/madhya-pradesh-budget-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
