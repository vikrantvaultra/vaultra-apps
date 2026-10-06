import { all, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ntr-bharosa-occupational-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "NTR Bharosa Pension for Weavers, Fishers, Toddy Tappers, Cobblers and Dappu Artists", hi: "बुनकरों, मछुआरों, ताड़ी निकालने वालों, मोचियों और डप्पू कलाकारों के लिए NTR भरोसा पेंशन" },
  aka: ["weaver pension AP", "fishermen pension AP", "toddy tappers pension", "dappu artists pension", "cobbler pension"],
  shortDescription: {
    en: "Older handloom weavers, fishers, toddy tappers, traditional cobblers and dappu artists from poor families in Andhra Pradesh get ₹4,000 a month under NTR Bharosa.",
    hi: "आंध्र प्रदेश में गरीब परिवारों के बुज़ुर्ग हथकरघा बुनकरों, मछुआरों, ताड़ी निकालने वालों, पारंपरिक मोचियों और डप्पू कलाकारों को NTR भरोसा के तहत हर महीने ₹4,000 मिलते हैं।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Panchayat Raj & Rural Development Department (SERP), with the Handlooms, Fisheries, Social Welfare and Prohibition & Excise departments, Government of Andhra Pradesh",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग (SERP), हथकरघा, मत्स्य, समाज कल्याण और मद्यनिषेध एवं आबकारी विभागों के साथ, आंध्र प्रदेश सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["weaver pension", "fishermen pension", "toddy tapper", "cobbler", "dappu artist", "ntr bharosa", "andhra pradesh"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 4000, period: "monthly", kind: "pension" },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("andhra-pradesh"),
    labelled(when("occupation", "in", ["artisan", "fisher", "unorganised-worker"]), {
      en: "You work as a handloom weaver, fisher, toddy tapper, traditional cobbler or dappu artist",
      hi: "आप हथकरघा बुनकर, मछुआरे, ताड़ी निकालने वाले, पारंपरिक मोची या डप्पू कलाकार हैं",
    }),
    labelled(incomeUpTo(144_000), {
      en: "Family income up to ₹10,000 a month in villages or ₹12,000 a month in towns",
      hi: "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक हो",
    }),
  ),

  details: {
    en: [
      "NTR Bharosa has separate pension categories for traditional occupations: handloom weavers, fishers, toddy tappers, traditional cobblers and dappu (drum) artists. Each gets ₹4,000 a month since July 2024.",
      "Each application is checked by the department for that occupation (Handlooms, Fisheries, Prohibition & Excise, or Social Welfare), which must certify that you really do this work. For weavers, the Handlooms Department says the pension is for those above 50 years of age.",
    ],
    hi: [
      "NTR भरोसा में पारंपरिक पेशों के लिए अलग पेंशन श्रेणियाँ हैं: हथकरघा बुनकर, मछुआरे, ताड़ी निकालने वाले, पारंपरिक मोची और डप्पू (ढोल) कलाकार। जुलाई 2024 से हर एक को ₹4,000 महीना मिलते हैं।",
      "हर आवेदन की जाँच उस पेशे से जुड़ा विभाग (हथकरघा, मत्स्य, मद्यनिषेध एवं आबकारी, या समाज कल्याण) करता है, जो प्रमाणित करता है कि आप सच में यह काम करते हैं। बुनकरों के लिए हथकरघा विभाग के अनुसार पेंशन 50 साल से ज़्यादा उम्र वालों को मिलती है।",
    ],
  },
  benefits: {
    en: ["₹4,000 every month.", "Paid each month by secretariat staff."],
    hi: ["हर महीने ₹4,000।", "पैसा हर महीने सचिवालय के कर्मचारी देते हैं।"],
  },
  eligibilityText: {
    en: [
      "You live in Andhra Pradesh and work as a handloom weaver, fisher, toddy tapper, traditional cobbler or dappu artist.",
      "You have a certificate for your occupation from the concerned department.",
      "You meet the age limit for your category (for weavers, above 50 years).",
      "Family income up to ₹10,000 a month in a village or ₹12,000 a month in a town.",
      "Not getting any other NTR Bharosa pension.",
    ],
    hi: [
      "आप आंध्र प्रदेश में रहते हैं और हथकरघा बुनकर, मछुआरे, ताड़ी निकालने वाले, पारंपरिक मोची या डप्पू कलाकार हैं।",
      "आपके पास संबंधित विभाग से अपने पेशे का प्रमाण पत्र है।",
      "आप अपनी श्रेणी की उम्र की शर्त पूरी करते हैं (बुनकरों के लिए 50 साल से ज़्यादा)।",
      "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक।",
      "NTR भरोसा की कोई दूसरी पेंशन न मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "During a new pension window, go to your Swarna Grama or Swarna Wardu (secretariat) office.",
        "Submit the new pension form with your Aadhaar, rice card or income certificate, and your occupation certificate.",
        "The department for your occupation verifies the case, then SERP gives the final sanction.",
      ],
      hi: [
        "नई पेंशन के आवेदन खुलने पर अपने स्वर्ण ग्राम या स्वर्ण वार्ड (सचिवालय) दफ़्तर जाएँ।",
        "आधार, राइस कार्ड या आय प्रमाण पत्र, और पेशे का प्रमाण पत्र लगाकर नई पेंशन का फ़ॉर्म जमा करें।",
        "आपके पेशे से जुड़ा विभाग मामले की जाँच करता है, फिर SERP अंतिम मंज़ूरी देता है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Rice card or income certificate",
      "Occupation certificate: from Handlooms & Textiles (weavers), Fisheries (fishers), Prohibition & Excise (toddy tappers) or Social Welfare (cobblers, dappu artists)",
    ],
    hi: [
      "आधार कार्ड",
      "राइस कार्ड या आय प्रमाण पत्र",
      "पेशे का प्रमाण पत्र: हथकरघा एवं वस्त्र (बुनकर), मत्स्य (मछुआरे), मद्यनिषेध एवं आबकारी (ताड़ी निकालने वाले) या समाज कल्याण (मोची, डप्पू कलाकार) विभाग से",
    ],
  },

  officialUrl: "https://sspensions.ap.gov.in/SSP",
  sources: [
    "https://sspensions.ap.gov.in/SSP/Downloads/Memo%20No.%203407491_New%20pension%20sanction%20guidelines_Signed.pdf",
    "https://sspensions.ap.gov.in/SSP",
    "https://handlooms.ap.gov.in/stateschemes.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
