import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-sc-st-full-tuition-fee-assistance",
  tier: "compact",
  name: {
    en: "Full Tuition Fee Assistance for Adi Dravidar and Scheduled Tribe Students (Puducherry)",
    hi: "आदि द्रविड़ और अनुसूचित जनजाति छात्रों को पूरी ट्यूशन फ़ीस सहायता (पुडुचेरी)",
  },
  aka: ["Puducherry SC ST fee reimbursement", "Full tuition fee scheme Puducherry"],
  shortDescription: {
    en: "Adi Dravidar (SC) and Scheduled Tribe students in Puducherry, from Class 1 to postgraduate level, get their full tuition fee paid by the UT government.",
    hi: "पुडुचेरी के आदि द्रविड़ (SC) और अनुसूचित जनजाति के छात्रों की, कक्षा 1 से स्नातकोत्तर तक, पूरी ट्यूशन फ़ीस केंद्र शासित प्रदेश सरकार भरती है।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Adi Dravidar Welfare and Scheduled Tribes Welfare Department, Government of Puducherry",
    hi: "आदि द्रविड़ कल्याण और अनुसूचित जनजाति कल्याण विभाग, पुडुचेरी सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["sc", "st", "adi dravidar", "tuition fee", "fee reimbursement", "puducherry"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("puducherry"),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप छात्र हैं" }),
    when("caste", "in", ["sc", "st", "pvtg"]),
  ),

  details: {
    en: [
      "Under this scheme, the Adi Dravidar Welfare and Scheduled Tribes Welfare Department pays the full tuition fee of SC and ST students from Class 1 up to postgraduate level.",
      "In 2025-26, ₹80 crore was spent on about 12,000 students, and the 2026-27 budget plans to cover around 15,000 students. Detailed eligibility rules (such as income limits and which institutions are covered) were not available on an official page we could open, so check with the department.",
    ],
    hi: [
      "इस योजना में आदि द्रविड़ कल्याण और अनुसूचित जनजाति कल्याण विभाग SC और ST छात्रों की कक्षा 1 से स्नातकोत्तर तक पूरी ट्यूशन फ़ीस भरता है।",
      "2025-26 में लगभग 12,000 छात्रों पर ₹80 करोड़ खर्च हुए, और 2026-27 के बजट में लगभग 15,000 छात्रों को शामिल करने की योजना है। विस्तृत पात्रता नियम (जैसे आय सीमा और कौन-से संस्थान शामिल हैं) हमें किसी खुलने वाले सरकारी पेज पर नहीं मिले, इसलिए विभाग से पता करें।",
    ],
  },
  benefits: {
    en: ["Your full tuition fee is paid, from Class 1 to postgraduate studies."],
    hi: ["कक्षा 1 से स्नातकोत्तर पढ़ाई तक आपकी पूरी ट्यूशन फ़ीस भरी जाती है।"],
  },
  eligibilityText: {
    en: [
      "Adi Dravidar (Scheduled Caste) or Scheduled Tribe students of Puducherry.",
      "Studying anywhere from Class 1 to postgraduate level; other conditions are set by the department.",
    ],
    hi: [
      "पुडुचेरी के आदि द्रविड़ (अनुसूचित जाति) या अनुसूचित जनजाति के छात्र।",
      "कक्षा 1 से स्नातकोत्तर तक किसी भी स्तर पर पढ़ रहे हों; बाक़ी शर्तें विभाग तय करता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your school or college office about the full tuition fee scheme for SC/ST students.",
        "Or contact the Adi Dravidar Welfare and Scheduled Tribes Welfare Department, Puducherry, with your community certificate, income certificate and fee details.",
      ],
      hi: [
        "SC/ST छात्रों की पूरी ट्यूशन फ़ीस योजना के बारे में अपने स्कूल या कॉलेज के दफ़्तर से पूछें।",
        "या जाति प्रमाण पत्र, आय प्रमाण पत्र और फ़ीस के विवरण के साथ आदि द्रविड़ कल्याण और अनुसूचित जनजाति कल्याण विभाग, पुडुचेरी से संपर्क करें।",
      ],
    },
  },

  officialUrl: "https://www.py.gov.in/honble-chief-ministers-budget-speech-2026-2027",
  sources: ["https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
