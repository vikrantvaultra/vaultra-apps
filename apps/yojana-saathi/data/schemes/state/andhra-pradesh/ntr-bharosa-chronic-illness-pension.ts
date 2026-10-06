import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ntr-bharosa-chronic-illness-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "NTR Bharosa Pension for Chronic Illness", hi: "गंभीर बीमारी के लिए NTR भरोसा पेंशन" },
  aka: ["dialysis pension AP", "kidney patients pension Andhra", "health pension AP"],
  shortDescription: {
    en: "People in Andhra Pradesh with serious long-term illnesses, such as kidney patients on dialysis or organ transplant recipients, get a pension of ₹10,000 a month.",
    hi: "आंध्र प्रदेश में गंभीर लंबी बीमारी वाले लोगों, जैसे डायलिसिस पर चल रहे किडनी मरीज़ या अंग प्रत्यारोपण वाले लोगों को हर महीने ₹10,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Panchayat Raj & Rural Development Department (SERP), Government of Andhra Pradesh",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग (SERP), आंध्र प्रदेश सरकार",
  },
  categories: ["health", "pension-insurance", "social-welfare"],
  tags: ["dialysis", "kidney", "transplant", "health pension", "ntr bharosa", "andhra pradesh"],
  benefitType: "pension",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("andhra-pradesh")),

  details: {
    en: [
      "Under NTR Bharosa, Andhra Pradesh pays ₹10,000 a month to people with certain serious long-term health conditions. The amount was set by G.O.Ms.No.43 of June 2024.",
      "The listed conditions include chronic kidney disease, patients on dialysis at government or network hospitals, kidney, liver and heart transplant recipients, and grade 4 bilateral elephantiasis.",
    ],
    hi: [
      "NTR भरोसा के तहत आंध्र प्रदेश कुछ गंभीर लंबी बीमारियों वाले लोगों को हर महीने ₹10,000 देता है। यह राशि जून 2024 के G.O.Ms.No.43 से तय हुई।",
      "सूची में लंबी किडनी बीमारी, सरकारी या नेटवर्क अस्पतालों में डायलिसिस करा रहे मरीज़, किडनी, लिवर और दिल के प्रत्यारोपण वाले लोग, और ग्रेड 4 दोनों पैरों का फ़ाइलेरिया (हाथीपाँव) शामिल हैं।",
    ],
  },
  benefits: {
    en: ["₹10,000 every month.", "Paid each month by secretariat staff."],
    hi: ["हर महीने ₹10,000।", "पैसा हर महीने सचिवालय के कर्मचारी देते हैं।"],
  },
  eligibilityText: {
    en: [
      "You live in Andhra Pradesh.",
      "You have one of the listed conditions: chronic kidney disease, regular dialysis, a kidney, liver or heart transplant, or grade 4 bilateral elephantiasis.",
      "Your illness is confirmed by the health department or the treating government or network hospital.",
    ],
    hi: [
      "आप आंध्र प्रदेश में रहते हैं।",
      "आपको सूची की कोई बीमारी है: लंबी किडनी बीमारी, नियमित डायलिसिस, किडनी, लिवर या दिल का प्रत्यारोपण, या ग्रेड 4 दोनों पैरों का फ़ाइलेरिया।",
      "आपकी बीमारी की पुष्टि स्वास्थ्य विभाग या इलाज करने वाले सरकारी या नेटवर्क अस्पताल ने की है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to your Swarna Grama or Swarna Wardu (secretariat) office with your medical records.",
        "Ask the Welfare & Education Assistant (or ward welfare secretary) how to apply for the health-category pension.",
        "After verification, SERP sanctions the pension.",
      ],
      hi: [
        "अपने इलाज के काग़ज़ लेकर स्वर्ण ग्राम या स्वर्ण वार्ड (सचिवालय) दफ़्तर जाएँ।",
        "वेलफ़ेयर एवं एजुकेशन असिस्टेंट (या वार्ड वेलफ़ेयर सचिव) से स्वास्थ्य श्रेणी की पेंशन के आवेदन का तरीका पूछें।",
        "जाँच के बाद SERP पेंशन मंज़ूर करता है।",
      ],
    },
  },

  officialUrl: "https://sspensions.ap.gov.in/SSP",
  sources: ["https://sspensions.ap.gov.in/SSP", "https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/pensions-festival-expanded-new-opportunity-for-social-security-1985383"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
