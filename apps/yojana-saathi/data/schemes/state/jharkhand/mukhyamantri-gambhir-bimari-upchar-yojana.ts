import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-gambhir-bimari-upchar-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Gambhir Bimari Upchar Yojana", hi: "मुख्यमंत्री गंभीर बीमारी उपचार योजना" },
  aka: ["Gambhir Bimari Yojana", "Jharkhand serious illness scheme"],
  shortDescription: {
    en: "Jharkhand residents earning under ₹8 lakh a year can get a treatment grant of up to ₹5 lakh for cancer, kidney transplant or serious liver disease; acid attack survivors at any income.",
    hi: "₹8 लाख से कम सालाना आय वाले झारखंड निवासियों को कैंसर, किडनी प्रत्यारोपण या गंभीर लिवर रोग के इलाज के लिए ₹5 लाख तक का अनुदान मिलता है; एसिड हमले के पीड़ितों को आय की शर्त के बिना।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Health, Medical Education and Family Welfare, Government of Jharkhand",
    hi: "स्वास्थ्य, चिकित्सा शिक्षा एवं परिवार कल्याण विभाग, झारखंड सरकार",
  },
  categories: ["health"],
  tags: ["cancer", "kidney transplant", "liver", "acid attack", "medical help", "treatment grant", "jharkhand"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("jharkhand"), incomeUpTo(800_000)),

  details: {
    en: [
      "Mukhyamantri Gambhir Bimari Upchar Yojana gives a one-time medical grant to Jharkhand residents who need costly treatment for life-threatening illnesses. Under the rules approved by the state cabinet in 2020, it covers all types of cancer, kidney transplant, serious liver disease, and treatment of acid attack victims.",
      "Grants of up to ₹5 lakh per case are approved by the district Civil Surgeon. The Chief Minister reviewed the scheme in June 2026 along with the state's other health schemes.",
    ],
    hi: [
      "मुख्यमंत्री गंभीर बीमारी उपचार योजना उन झारखंड निवासियों को एक बार का इलाज अनुदान देती है जिन्हें जानलेवा बीमारियों का महँगा इलाज चाहिए। 2020 में राज्य मंत्रिपरिषद से मंज़ूर नियमों के अनुसार इसमें सभी तरह के कैंसर, किडनी प्रत्यारोपण, गंभीर लिवर रोग और एसिड हमले के पीड़ितों का इलाज शामिल है।",
      "हर मामले में ₹5 लाख तक का अनुदान ज़िले के सिविल सर्जन मंज़ूर करते हैं। जून 2026 में मुख्यमंत्री ने राज्य की दूसरी स्वास्थ्य योजनाओं के साथ इसकी भी समीक्षा की।",
    ],
  },
  benefits: {
    en: ["Medical grant of up to ₹5 lakh per case.", "Covers all cancers, kidney transplant, serious liver disease and acid attack injuries."],
    hi: ["हर मामले में ₹5 लाख तक का इलाज अनुदान।", "सभी तरह के कैंसर, किडनी प्रत्यारोपण, गंभीर लिवर रोग और एसिड हमले की चोटें शामिल।"],
  },
  eligibilityText: {
    en: [
      "Resident of Jharkhand.",
      "Gross family income below ₹8 lakh a year for the last three years in a row.",
      "Acid attack victims qualify whatever their income.",
      "Needs treatment for cancer, a kidney transplant, serious liver disease or acid attack injuries.",
    ],
    hi: [
      "झारखंड के निवासी।",
      "पिछले लगातार तीन साल परिवार की कुल सालाना आय ₹8 लाख से कम रही हो।",
      "एसिड हमले के पीड़ितों पर आय की कोई शर्त नहीं।",
      "कैंसर, किडनी प्रत्यारोपण, गंभीर लिवर रोग या एसिड हमले की चोटों का इलाज चाहिए।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to the Civil Surgeon's office in your district with the doctor's estimate for the treatment.",
        "Fill in the application and attach your income certificate, residence proof and medical papers.",
        "Once approved, the grant is released for your treatment.",
      ],
      hi: [
        "इलाज के ख़र्च के डॉक्टर के अनुमान के साथ अपने ज़िले के सिविल सर्जन कार्यालय जाएँ।",
        "आवेदन भरें और आय प्रमाण पत्र, निवास का सबूत और इलाज के काग़ज़ लगाएँ।",
        "मंज़ूरी के बाद इलाज के लिए अनुदान जारी किया जाता है।",
      ],
    },
  },

  officialUrl: "https://cm.jharkhand.gov.in/node/14193",
  sources: ["https://cm.jharkhand.gov.in/node/14193", "https://cm.jharkhand.gov.in/node/15926"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
