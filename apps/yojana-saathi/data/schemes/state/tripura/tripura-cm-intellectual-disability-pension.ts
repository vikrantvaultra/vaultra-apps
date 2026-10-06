import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tripura-cm-intellectual-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: {
    en: "Chief Minister's Scheme for Persons with Intellectual Disabilities (Tripura)",
    hi: "मुख्यमंत्री बौद्धिक दिव्यांगजन योजना (त्रिपुरा)",
  },
  aka: ["Tripura intellectual disability pension", "₹5000 divyang pension Tripura"],
  shortDescription: {
    en: "₹5,000 a month for people in Tripura with 60% or more intellectual disability, mental illness, cerebral palsy or multiple disabilities. No age or income limit.",
    hi: "त्रिपुरा में 60% या उससे ज़्यादा बौद्धिक दिव्यांगता, मानसिक बीमारी, सेरेब्रल पाल्सी या बहु-दिव्यांगता वाले लोगों को हर महीने ₹5,000। कोई उम्र या आय सीमा नहीं।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Social Welfare & Social Education Department, Government of Tripura",
    hi: "समाज कल्याण एवं समाज शिक्षा विभाग, त्रिपुरा सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["intellectual disability", "mental illness", "cerebral palsy", "disability pension", "divyang", "tripura"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 5000, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(residentOf("tripura"), isTrue("disabled"), when("disabilityPct", "gte", 60)),

  details: {
    en: [
      "Tripura notified this scheme in September 2025 to support people with severe intellectual disability, mental illness, cerebral palsy or multiple disabilities. Each eligible person gets a social security pension of ₹5,000 a month, paid by DBT.",
      "There is no age or income limit. People who already get a state or central disability pension through the Social Welfare Department and meet these rules are moved to this scheme after a survey.",
    ],
    hi: [
      "त्रिपुरा ने यह योजना सितंबर 2025 में अधिसूचित की, ताकि गंभीर बौद्धिक दिव्यांगता, मानसिक बीमारी, सेरेब्रल पाल्सी या बहु-दिव्यांगता वाले लोगों को मदद मिले। हर पात्र व्यक्ति को DBT से हर महीने ₹5,000 की सामाजिक सुरक्षा पेंशन मिलती है।",
      "इसमें उम्र या आय की कोई सीमा नहीं है। जिन्हें पहले से समाज कल्याण विभाग से राज्य या केंद्र की दिव्यांग पेंशन मिल रही है और जो इन नियमों पर खरे उतरते हैं, उन्हें सर्वे के बाद इस योजना में ले लिया जाता है।",
    ],
  },
  benefits: {
    en: ["₹5,000 every month, paid into the person's bank account (or a joint account with the legal guardian) by DBT."],
    hi: ["हर महीने ₹5,000, DBT से व्यक्ति के बैंक खाते में (या क़ानूनी अभिभावक के साथ संयुक्त खाते में)।"],
  },
  eligibilityText: {
    en: [
      "Resident of Tripura.",
      "Valid UDID card showing 60% or more intellectual disability, mental illness, cerebral palsy, or multiple disabilities that include one of these.",
      "Name included in Tripura's ration card database.",
      "An Aadhaar-linked bank account, or a joint account with a legal guardian appointed under the National Trust Act.",
    ],
    hi: [
      "त्रिपुरा के निवासी।",
      "मान्य UDID कार्ड, जिसमें 60% या उससे ज़्यादा बौद्धिक दिव्यांगता, मानसिक बीमारी, सेरेब्रल पाल्सी, या इनमें से किसी के साथ बहु-दिव्यांगता दर्ज हो।",
      "त्रिपुरा के राशन कार्ड डेटाबेस में नाम हो।",
      "आधार से जुड़ा बैंक खाता, या नेशनल ट्रस्ट अधिनियम के तहत नियुक्त क़ानूनी अभिभावक के साथ संयुक्त खाता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "The person or their legal guardian fills in the department's application form.",
        "Submit it to the CDPO where you live, the District Inspector of Social Education (DISE), or the Director of Social Welfare & Social Education in Agartala.",
        "The CDPO makes a field enquiry and sends it for approval. Once sanctioned, ₹5,000 comes to the bank account every month.",
      ],
      hi: [
        "व्यक्ति या उनके क़ानूनी अभिभावक विभाग का आवेदन फ़ॉर्म भरें।",
        "इसे अपने इलाक़े के CDPO, ज़िला समाज शिक्षा निरीक्षक (DISE) या अगरतला में समाज कल्याण एवं समाज शिक्षा निदेशक को जमा करें।",
        "CDPO जाँच करके मंज़ूरी के लिए भेजता है। मंज़ूरी के बाद हर महीने ₹5,000 बैंक खाते में आते हैं।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.tripura.gov.in/",
  sources: ["https://socialwelfare.tripura.gov.in/sites/default/files/Gazette%20Notification%20Sep%2010-%202025_0.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
