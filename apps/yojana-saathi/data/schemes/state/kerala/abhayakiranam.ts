import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "abhayakiranam",
  tier: "compact",
  name: { en: "Abhayakiranam", hi: "अभयकिरणम" },
  aka: ["Abhayakiranam scheme", "assistance to relatives of destitute widows Kerala"],
  shortDescription: {
    en: "Close relatives in Kerala who give shelter and care to a destitute, homeless widow get ₹1,000 a month.",
    hi: "केरल में जो क़रीबी रिश्तेदार किसी बेसहारा, बेघर विधवा को अपने घर में रखकर देखभाल करते हैं, उन्हें हर महीने ₹1,000 मिलते हैं।",
  },
  level: "state",
  state: "kerala",
  department: { en: "Women and Child Development Department, Government of Kerala", hi: "महिला एवं बाल विकास विभाग, केरल सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["widow", "destitute widow", "relatives", "monthly assistance", "abhayakiranam", "kerala"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("kerala")),

  details: {
    en: [
      "Abhayakiranam aims to give destitute and homeless widows a safe place to live with their own relatives instead of in an institution.",
      "The relative who shelters and protects the widow gets ₹1,000 a month. Kerala's Women and Child Development Department runs the scheme through ICDS offices.",
    ],
    hi: [
      "अभयकिरणम का मक़सद बेसहारा और बेघर विधवाओं को किसी संस्था की जगह उनके अपने रिश्तेदारों के साथ सुरक्षित जगह दिलाना है।",
      "जो रिश्तेदार विधवा को आश्रय और सुरक्षा देता है, उसे हर महीने ₹1,000 मिलते हैं। केरल का महिला एवं बाल विकास विभाग ICDS कार्यालयों के ज़रिए यह योजना चलाता है।",
    ],
  },
  benefits: {
    en: ["₹1,000 a month to the relative who gives shelter and care to the widow."],
    hi: ["विधवा को आश्रय और देखभाल देने वाले रिश्तेदार को हर महीने ₹1,000।"],
  },
  eligibilityText: {
    en: [
      "The applicant is a close relative who gives shelter and protection to a destitute, homeless widow.",
      "The family is BPL / priority category, or has a low income shown by the Village Officer's income certificate.",
    ],
    hi: [
      "आवेदक कोई क़रीबी रिश्तेदार है जो किसी बेसहारा, बेघर विधवा को आश्रय और सुरक्षा देता है।",
      "परिवार BPL / प्राथमिकता श्रेणी में है, या विलेज ऑफ़िसर के आय प्रमाण पत्र से कम आय साबित होती है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Abhayakiranam form from the WCD department website or your ICDS office.",
        "Attach the Village Officer's certificate that the woman is a widow living under your protection, and a copy of your BPL / priority ration card or income certificate.",
        "Submit it to the Child Development Project Officer.",
      ],
      hi: [
        "WCD विभाग की वेबसाइट या अपने ICDS कार्यालय से अभयकिरणम का फ़ॉर्म लें।",
        "विलेज ऑफ़िसर का प्रमाण पत्र लगाएँ कि वह महिला विधवा है और आपके संरक्षण में रहती है, साथ में BPL / प्राथमिकता राशन कार्ड या आय प्रमाण पत्र की कॉपी लगाएँ।",
        "इसे बाल विकास परियोजना अधिकारी को जमा करें।",
      ],
    },
  },

  officialUrl: "https://wcd.kerala.gov.in/scheme-info.php?id=Ng==",
  sources: ["https://wcd.kerala.gov.in/scheme-info.php?id=Ng==", "https://wcd.kerala.gov.in/schemes.php"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
