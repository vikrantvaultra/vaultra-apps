import { all, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ntr-bharosa-single-women-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "NTR Bharosa Pension (Single Women)", hi: "NTR भरोसा पेंशन (एकल महिला)" },
  aka: ["AP single women pension", "ontari mahila pension"],
  shortDescription: {
    en: "Divorced, separated and unmarried single women from poor families in Andhra Pradesh get a pension of ₹4,000 a month under NTR Bharosa.",
    hi: "आंध्र प्रदेश में गरीब परिवारों की तलाकशुदा, अलग रह रही और अविवाहित एकल महिलाओं को NTR भरोसा के तहत हर महीने ₹4,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Panchayat Raj & Rural Development Department (SERP), Government of Andhra Pradesh",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग (SERP), आंध्र प्रदेश सरकार",
  },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["single women pension", "divorced", "unmarried women", "ntr bharosa", "pension", "andhra pradesh"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 4000, period: "monthly", kind: "pension" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("andhra-pradesh"),
    female(),
    labelled(when("marital", "in", ["divorced", "separated", "never-married"]), {
      en: "You are divorced, separated or unmarried",
      hi: "आप तलाकशुदा, अलग रह रही या अविवाहित हैं",
    }),
    labelled(incomeUpTo(144_000), {
      en: "Family income up to ₹10,000 a month in villages or ₹12,000 a month in towns",
      hi: "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक हो",
    }),
  ),

  details: {
    en: [
      "Single women are one of the NTR Bharosa pension categories in Andhra Pradesh. The pension is ₹4,000 a month since July 2024.",
      "A married woman must show a divorce decree from a court or Lok Adalat. An unmarried woman needs a non-marriage certificate from the Tahsildar, who also checks these applications. Age limits apply; the secretariat will tell you if you qualify.",
    ],
    hi: [
      "एकल महिलाएँ आंध्र प्रदेश की NTR भरोसा पेंशन की एक श्रेणी हैं। जुलाई 2024 से इसमें हर महीने ₹4,000 मिलते हैं।",
      "शादीशुदा रही महिला को अदालत या लोक अदालत का तलाक़ का आदेश दिखाना होता है। अविवाहित महिला को तहसीलदार से अविवाहित होने का प्रमाण पत्र चाहिए, और तहसीलदार ही ये आवेदन जाँचते हैं। उम्र की शर्तें भी हैं; सचिवालय बताएगा कि आप पात्र हैं या नहीं।",
    ],
  },
  benefits: {
    en: ["₹4,000 every month.", "Paid each month by secretariat staff."],
    hi: ["हर महीने ₹4,000।", "पैसा हर महीने सचिवालय के कर्मचारी देते हैं।"],
  },
  eligibilityText: {
    en: [
      "A single woman living in Andhra Pradesh: divorced by court or Lok Adalat decree, or unmarried.",
      "Meets the age limit for this category.",
      "Family income up to ₹10,000 a month in a village or ₹12,000 a month in a town.",
      "Not getting any other NTR Bharosa pension.",
    ],
    hi: [
      "आंध्र प्रदेश में रहने वाली एकल महिला: अदालत या लोक अदालत के आदेश से तलाकशुदा, या अविवाहित।",
      "इस श्रेणी की उम्र की शर्त पूरी करती हो।",
      "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक।",
      "NTR भरोसा की कोई दूसरी पेंशन न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "During a new pension window, go to your Swarna Grama or Swarna Wardu (secretariat) office.",
        "Submit the new pension form with your Aadhaar, rice card or income certificate, and the divorce decree or non-marriage certificate.",
        "The Tahsildar checks the case, then the MPDO or Municipal Commissioner recommends it and SERP sanctions it.",
      ],
      hi: [
        "नई पेंशन के आवेदन खुलने पर अपने स्वर्ण ग्राम या स्वर्ण वार्ड (सचिवालय) दफ़्तर जाएँ।",
        "आधार, राइस कार्ड या आय प्रमाण पत्र, और तलाक़ का आदेश या अविवाहित होने का प्रमाण पत्र लगाकर नई पेंशन का फ़ॉर्म जमा करें।",
        "तहसीलदार मामले की जाँच करते हैं, फिर MPDO या नगर आयुक्त सिफ़ारिश करते हैं और SERP मंज़ूरी देता है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Rice card or income certificate", "Divorce decree from a court or Lok Adalat (if married before)", "Non-marriage certificate from the Tahsildar (if unmarried)"],
    hi: ["आधार कार्ड", "राइस कार्ड या आय प्रमाण पत्र", "अदालत या लोक अदालत का तलाक़ का आदेश (अगर पहले शादी हुई थी)", "तहसीलदार से अविवाहित होने का प्रमाण पत्र (अगर अविवाहित हैं)"],
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
