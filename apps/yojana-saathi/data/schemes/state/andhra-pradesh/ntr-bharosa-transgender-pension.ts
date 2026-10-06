import { all, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ntr-bharosa-transgender-pension",
  tier: "compact",
  name: { en: "NTR Bharosa Pension (Transgender Persons)", hi: "NTR भरोसा पेंशन (ट्रांसजेंडर व्यक्ति)" },
  aka: ["transgender pension AP"],
  shortDescription: {
    en: "Transgender persons from poor families in Andhra Pradesh get a pension of ₹4,000 a month under the NTR Bharosa scheme.",
    hi: "आंध्र प्रदेश में गरीब परिवारों के ट्रांसजेंडर व्यक्तियों को NTR भरोसा योजना के तहत हर महीने ₹4,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Panchayat Raj & Rural Development Department (SERP), with the Health & Family Welfare Department, Government of Andhra Pradesh",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग (SERP), स्वास्थ्य एवं परिवार कल्याण विभाग के साथ, आंध्र प्रदेश सरकार",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["transgender", "pension", "ntr bharosa", "andhra pradesh"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 4000, period: "monthly", kind: "pension" },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("andhra-pradesh"),
    when("gender", "eq", "transgender"),
    labelled(incomeUpTo(144_000), {
      en: "Family income up to ₹10,000 a month in villages or ₹12,000 a month in towns",
      hi: "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक हो",
    }),
  ),

  details: {
    en: [
      "Transgender persons are a separate category under Andhra Pradesh's NTR Bharosa pension scheme, paid ₹4,000 a month since July 2024.",
      "You need a certificate from the District Medical Board. The Commissioner of Health & Family Welfare checks these applications before SERP sanctions the pension.",
    ],
    hi: [
      "ट्रांसजेंडर व्यक्ति आंध्र प्रदेश की NTR भरोसा पेंशन योजना की एक अलग श्रेणी हैं, जिसमें जुलाई 2024 से हर महीने ₹4,000 मिलते हैं।",
      "इसके लिए ज़िला मेडिकल बोर्ड का प्रमाण पत्र चाहिए। SERP की मंज़ूरी से पहले स्वास्थ्य एवं परिवार कल्याण आयुक्त ये आवेदन जाँचते हैं।",
    ],
  },
  benefits: {
    en: ["₹4,000 every month.", "Paid each month by secretariat staff."],
    hi: ["हर महीने ₹4,000।", "पैसा हर महीने सचिवालय के कर्मचारी देते हैं।"],
  },
  eligibilityText: {
    en: [
      "A transgender person living in Andhra Pradesh.",
      "Has a certificate from the District Medical Board.",
      "Family income up to ₹10,000 a month in a village or ₹12,000 a month in a town.",
      "Not getting any other NTR Bharosa pension.",
    ],
    hi: [
      "आंध्र प्रदेश में रहने वाले ट्रांसजेंडर व्यक्ति।",
      "ज़िला मेडिकल बोर्ड का प्रमाण पत्र हो।",
      "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक।",
      "NTR भरोसा की कोई दूसरी पेंशन न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "During a new pension window, go to your Swarna Grama or Swarna Wardu (secretariat) office.",
        "Submit the new pension form with your Aadhaar, rice card or income certificate, and the District Medical Board certificate.",
        "After checks by the Health Department, SERP sanctions the pension.",
      ],
      hi: [
        "नई पेंशन के आवेदन खुलने पर अपने स्वर्ण ग्राम या स्वर्ण वार्ड (सचिवालय) दफ़्तर जाएँ।",
        "आधार, राइस कार्ड या आय प्रमाण पत्र, और ज़िला मेडिकल बोर्ड का प्रमाण पत्र लगाकर नई पेंशन का फ़ॉर्म जमा करें।",
        "स्वास्थ्य विभाग की जाँच के बाद SERP पेंशन मंज़ूर करता है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Rice card or income certificate", "Certificate from the District Medical Board"],
    hi: ["आधार कार्ड", "राइस कार्ड या आय प्रमाण पत्र", "ज़िला मेडिकल बोर्ड का प्रमाण पत्र"],
  },

  officialUrl: "https://sspensions.ap.gov.in/SSP",
  sources: [
    "https://sspensions.ap.gov.in/SSP/Downloads/Memo%20No.%203407491_New%20pension%20sanction%20guidelines_Signed.pdf",
    "https://sspensions.ap.gov.in/SSP",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
