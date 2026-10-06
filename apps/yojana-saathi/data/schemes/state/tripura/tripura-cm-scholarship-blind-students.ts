import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tripura-cm-scholarship-blind-students",
  tier: "compact",
  overlapGroup: "scholarship",
  name: {
    en: "Chief Minister's Special Scholarship to Divyangjan (Blind) Students (Tripura)",
    hi: "मुख्यमंत्री विशेष छात्रवृत्ति – दृष्टिबाधित दिव्यांग छात्र (त्रिपुरा)",
  },
  aka: ["Tripura blind student scholarship", "CM special scholarship blind"],
  shortDescription: {
    en: "₹5,000 a month for blind students in degree courses (₹4,000 in diploma courses) at institutions under Tripura's Higher Education Department. No income limit.",
    hi: "त्रिपुरा के उच्च शिक्षा विभाग के संस्थानों में डिग्री पढ़ रहे दृष्टिबाधित छात्रों को हर महीने ₹5,000 (डिप्लोमा में ₹4,000)। कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Education (Higher) Department, Government of Tripura",
    hi: "शिक्षा (उच्च) विभाग, त्रिपुरा सरकार",
  },
  categories: ["education", "disability"],
  tags: ["scholarship", "blind", "visually impaired", "divyang", "college", "tripura"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 4000, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("tripura"), isTrue("disabled"), when("disabilityPct", "gte", 40), isTrue("student")),

  details: {
    en: [
      "This is one of the state scholarships run by Tripura's Higher Education Department. It gives a monthly stipend to blind students studying full time in degree or diploma courses at recognised institutions under the department.",
      "There is no income limit. You need a certificate showing at least 40% blindness and must have passed Class 10 or Class 12 from a recognised board.",
    ],
    hi: [
      "यह त्रिपुरा के उच्च शिक्षा विभाग की राज्य छात्रवृत्तियों में से एक है। इसमें विभाग के मान्यता प्राप्त संस्थानों में डिग्री या डिप्लोमा की नियमित पढ़ाई कर रहे दृष्टिबाधित छात्रों को हर महीने छात्रवृत्ति मिलती है।",
      "कोई आय सीमा नहीं है। कम से कम 40% दृष्टिबाधिता का प्रमाण पत्र चाहिए और मान्यता प्राप्त बोर्ड से 10वीं या 12वीं पास होना चाहिए।",
    ],
  },
  benefits: {
    en: ["₹5,000 a month for degree courses.", "₹4,000 a month for diploma courses."],
    hi: ["डिग्री कोर्स के लिए हर महीने ₹5,000।", "डिप्लोमा कोर्स के लिए हर महीने ₹4,000।"],
  },
  eligibilityText: {
    en: [
      "Certificate of blindness of at least 40%.",
      "Full-time student in a degree or diploma course at an institution under Tripura's Higher Education Department, recognised by UGC, AICTE, BCI or NCTE.",
      "Passed Class 10 or Class 12 from a recognised board.",
      "No income limit.",
    ],
    hi: [
      "कम से कम 40% दृष्टिबाधिता का प्रमाण पत्र।",
      "त्रिपुरा के उच्च शिक्षा विभाग के तहत UGC, AICTE, BCI या NCTE से मान्यता प्राप्त संस्थान में डिग्री या डिप्लोमा का नियमित छात्र।",
      "मान्यता प्राप्त बोर्ड से 10वीं या 12वीं पास।",
      "कोई आय सीमा नहीं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your college office about the Chief Minister's Special Scholarship for blind students when scholarship applications open.",
        "Submit the form through your college with your disability certificate, mark sheets and bank details.",
        "Watch highereducation.tripura.gov.in for notices and dates.",
      ],
      hi: [
        "छात्रवृत्ति के आवेदन खुलने पर अपने कॉलेज कार्यालय में दृष्टिबाधित छात्रों की मुख्यमंत्री विशेष छात्रवृत्ति के बारे में पूछें।",
        "दिव्यांगता प्रमाण पत्र, अंक पत्र और बैंक की जानकारी के साथ फ़ॉर्म कॉलेज के ज़रिए जमा करें।",
        "सूचनाओं और तारीख़ों के लिए highereducation.tripura.gov.in देखते रहें।",
      ],
    },
  },

  officialUrl: "https://highereducation.tripura.gov.in/sites/default/files/State_Scheme_Deatils_23.12.2025.pdf",
  sources: ["https://highereducation.tripura.gov.in/sites/default/files/State_Scheme_Deatils_23.12.2025.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
