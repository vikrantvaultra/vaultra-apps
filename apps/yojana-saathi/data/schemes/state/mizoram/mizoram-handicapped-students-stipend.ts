import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mizoram-handicapped-students-stipend",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Mizoram Handicapped Students Stipend", hi: "मिज़ोरम दिव्यांग विद्यार्थी स्टाइपेंड" },
  aka: ["Disabled students stipend Mizoram", "PwD stipend Mizoram"],
  shortDescription: {
    en: "School students with disabilities in Mizoram get a yearly state stipend of ₹800 (up to Class 4), ₹1,000 (Class 5 to 7) or ₹2,500 (Class 8 to 12).",
    hi: "मिज़ोरम में दिव्यांग स्कूली विद्यार्थियों को राज्य से सालाना स्टाइपेंड मिलता है: ₹800 (कक्षा 4 तक), ₹1,000 (कक्षा 5 से 7) या ₹2,500 (कक्षा 8 से 12)।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Directorate of Social Welfare, Social Welfare, Tribal Affairs & WCD Department, Government of Mizoram",
    hi: "समाज कल्याण निदेशालय, समाज कल्याण, जनजातीय कार्य एवं महिला-बाल विकास विभाग, मिज़ोरम सरकार",
  },
  categories: ["disability", "education"],
  tags: ["stipend", "scholarship", "disability", "divyang", "school students", "mizoram"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 800, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("mizoram"), isTrue("disabled"), isTrue("student")),

  details: {
    en: [
      "This is a stipend paid from Mizoram's own funds to students with disabilities who are enrolled in schools. The amount depends on the class the student is in.",
      "Schools send lists of eligible students, and the District Social Welfare Officers check and forward the applications to the Directorate of Social Welfare.",
    ],
    hi: [
      "यह मिज़ोरम सरकार के अपने पैसे से स्कूलों में पढ़ रहे दिव्यांग विद्यार्थियों को दिया जाने वाला स्टाइपेंड है। रकम विद्यार्थी की कक्षा पर निर्भर करती है।",
      "स्कूल पात्र विद्यार्थियों की सूची भेजते हैं, और ज़िला समाज कल्याण अधिकारी जाँच करके आवेदन समाज कल्याण निदेशालय को भेजते हैं।",
    ],
  },
  benefits: {
    en: [
      "Up to Class 4: ₹800 a year.",
      "Class 5 to Class 7: ₹1,000 a year.",
      "Class 8 to Class 12: ₹2,500 a year.",
    ],
    hi: [
      "कक्षा 4 तक: ₹800 सालाना।",
      "कक्षा 5 से 7: ₹1,000 सालाना।",
      "कक्षा 8 से 12: ₹2,500 सालाना।",
    ],
  },
  eligibilityText: {
    en: [
      "A student with a disability in Mizoram.",
      "Enrolled in a school or other educational institution, up to Class 12.",
    ],
    hi: [
      "मिज़ोरम का दिव्यांग विद्यार्थी।",
      "किसी स्कूल या शैक्षिक संस्थान में कक्षा 12 तक पढ़ रहा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Tell your school that you have a disability and give them a copy of your disability certificate or UDID card.",
        "The school includes you in its list, which goes to the District Social Welfare Officer for checking.",
        "After approval, the stipend is paid for the year.",
      ],
      hi: [
        "अपने स्कूल को अपनी दिव्यांगता के बारे में बताएँ और दिव्यांगता प्रमाण पत्र या UDID कार्ड की कॉपी दें।",
        "स्कूल आपको अपनी सूची में शामिल करता है, जो जाँच के लिए ज़िला समाज कल्याण अधिकारी के पास जाती है।",
        "मंज़ूरी के बाद साल का स्टाइपेंड दिया जाता है।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.mizoram.gov.in/page/handicapped-students-stipend",
  sources: [
    "https://socialwelfare.mizoram.gov.in/page/handicapped-students-stipend",
    "https://socialwelfare.mizoram.gov.in/page/schemes-on-disability1688554472",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
