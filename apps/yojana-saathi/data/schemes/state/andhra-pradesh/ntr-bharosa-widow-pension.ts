import { all, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ntr-bharosa-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "NTR Bharosa Pension (Widow)", hi: "NTR भरोसा पेंशन (विधवा)" },
  aka: ["AP widow pension", "NTR Bharosa widow"],
  shortDescription: {
    en: "Widows from poor families in Andhra Pradesh get a pension of ₹4,000 every month under the NTR Bharosa scheme.",
    hi: "आंध्र प्रदेश में गरीब परिवारों की विधवा महिलाओं को NTR भरोसा योजना के तहत हर महीने ₹4,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Panchayat Raj & Rural Development Department (SERP), Government of Andhra Pradesh",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग (SERP), आंध्र प्रदेश सरकार",
  },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "vidhwa", "ntr bharosa", "pension", "women", "andhra pradesh"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 4000, period: "monthly", kind: "pension" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("andhra-pradesh"),
    female(),
    when("marital", "eq", "widowed"),
    labelled(incomeUpTo(144_000), {
      en: "Family income up to ₹10,000 a month in villages or ₹12,000 a month in towns",
      hi: "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक हो",
    }),
  ),

  details: {
    en: [
      "The widow pension is one of the categories of Andhra Pradesh's NTR Bharosa pension scheme. Since July 2024 it pays ₹4,000 a month.",
      "Applications are taken at the village or ward secretariat when the government opens a new pension window. After checks, SERP sanctions the pension.",
    ],
    hi: [
      "विधवा पेंशन आंध्र प्रदेश की NTR भरोसा पेंशन योजना की एक श्रेणी है। जुलाई 2024 से इसमें हर महीने ₹4,000 मिलते हैं।",
      "जब सरकार नई पेंशन के आवेदन खोलती है, तब गाँव या वार्ड सचिवालय में आवेदन लिए जाते हैं। जाँच के बाद SERP पेंशन मंज़ूर करता है।",
    ],
  },
  benefits: {
    en: ["₹4,000 every month.", "Paid each month by secretariat staff."],
    hi: ["हर महीने ₹4,000।", "पैसा हर महीने सचिवालय के कर्मचारी देते हैं।"],
  },
  eligibilityText: {
    en: [
      "A widow living in Andhra Pradesh.",
      "Family income up to ₹10,000 a month in a village or ₹12,000 a month in a town.",
      "Not getting any other NTR Bharosa pension.",
    ],
    hi: [
      "आंध्र प्रदेश में रहने वाली विधवा महिला।",
      "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक।",
      "NTR भरोसा की कोई दूसरी पेंशन न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "During a new pension window, go to your Swarna Grama or Swarna Wardu (secretariat) office.",
        "Submit the new pension form with your Aadhaar, rice card or income certificate, and your husband's death certificate and Aadhaar number.",
        "Staff will verify your details at home. Once SERP sanctions it, the pension starts from that month.",
      ],
      hi: [
        "नई पेंशन के आवेदन खुलने पर अपने स्वर्ण ग्राम या स्वर्ण वार्ड (सचिवालय) दफ़्तर जाएँ।",
        "नई पेंशन का फ़ॉर्म आधार, राइस कार्ड या आय प्रमाण पत्र, और पति के मृत्यु प्रमाण पत्र व आधार नंबर के साथ जमा करें।",
        "कर्मचारी घर आकर जानकारी जाँचेंगे। SERP की मंज़ूरी मिलने पर उसी महीने से पेंशन शुरू होगी।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Rice card or income certificate", "Husband's death certificate", "Husband's Aadhaar number"],
    hi: ["आधार कार्ड", "राइस कार्ड या आय प्रमाण पत्र", "पति का मृत्यु प्रमाण पत्र", "पति का आधार नंबर"],
  },

  officialUrl: "https://sspensions.ap.gov.in/SSP",
  sources: [
    "https://sspensions.ap.gov.in/SSP",
    "https://sspensions.ap.gov.in/SSP/Downloads/Memo%20No.%203407491_New%20pension%20sanction%20guidelines_Signed.pdf",
    "https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/pensions-festival-expanded-new-opportunity-for-social-security-1985383",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
