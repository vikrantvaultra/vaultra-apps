import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mizoram-pwd-unemployed-stipend",
  tier: "compact",
  overlapGroup: "unemployment-allowance",
  name: { en: "Mizoram Stipend to Educated Unemployed Persons with Disabilities", hi: "मिज़ोरम शिक्षित बेरोज़गार दिव्यांगजन स्टाइपेंड" },
  aka: ["Unemployed PwD stipend Mizoram", "Disabled unemployment allowance Mizoram"],
  shortDescription: {
    en: "Educated, unemployed persons with disabilities in Mizoram who are registered with the Special Employment Exchange get a stipend of ₹3,000 a year.",
    hi: "मिज़ोरम में स्पेशल एम्प्लॉयमेंट एक्सचेंज में पंजीकृत पढ़े-लिखे बेरोज़गार दिव्यांगजनों को हर साल ₹3,000 का स्टाइपेंड मिलता है।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Directorate of Social Welfare, Social Welfare, Tribal Affairs & WCD Department, Government of Mizoram",
    hi: "समाज कल्याण निदेशालय, समाज कल्याण, जनजातीय कार्य एवं महिला-बाल विकास विभाग, मिज़ोरम सरकार",
  },
  categories: ["disability", "skills-employment"],
  tags: ["unemployment allowance", "stipend", "disability", "divyang", "employment exchange", "mizoram"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 3000, period: "yearly", kind: "cash" },
  kundliHouse: "career",
  eligibility: all(residentOf("mizoram"), isTrue("disabled"), when("employment", "eq", "unemployed")),

  details: {
    en: [
      "The Social Welfare Department gives a yearly stipend to educated persons with disabilities who have not found a job.",
      "The department gets the list of eligible people from the Special Employment Exchange, and a screening committee shortlists who will get the stipend.",
    ],
    hi: [
      "समाज कल्याण विभाग उन पढ़े-लिखे दिव्यांगजनों को सालाना स्टाइपेंड देता है जिन्हें नौकरी नहीं मिली है।",
      "विभाग स्पेशल एम्प्लॉयमेंट एक्सचेंज से पात्र लोगों की सूची लेता है, और एक जाँच समिति तय करती है कि किसे स्टाइपेंड मिलेगा।",
    ],
  },
  benefits: {
    en: ["₹3,000 a year."],
    hi: ["हर साल ₹3,000।"],
  },
  eligibilityText: {
    en: [
      "A person with a disability living in Mizoram.",
      "Educated and currently unemployed.",
      "Registered with the Special Employment Exchange.",
    ],
    hi: [
      "मिज़ोरम में रहने वाले दिव्यांग व्यक्ति।",
      "पढ़े-लिखे हों और अभी बेरोज़गार हों।",
      "स्पेशल एम्प्लॉयमेंट एक्सचेंज में पंजीकृत हों।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register at the Special Employment Exchange with your educational and disability certificates.",
        "The Employment Exchange shares its list with the Social Welfare Department, and the screening committee shortlists candidates.",
        "Keep your registration renewed so you stay on the list.",
      ],
      hi: [
        "अपने शैक्षिक और दिव्यांगता प्रमाण पत्रों के साथ स्पेशल एम्प्लॉयमेंट एक्सचेंज में पंजीकरण कराएँ।",
        "एम्प्लॉयमेंट एक्सचेंज अपनी सूची समाज कल्याण विभाग को देता है, और जाँच समिति उम्मीदवार चुनती है।",
        "सूची में बने रहने के लिए अपना पंजीकरण नवीनीकृत (रिन्यू) करते रहें।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.mizoram.gov.in/page/schemes-on-disability1688554472",
  sources: ["https://socialwelfare.mizoram.gov.in/page/schemes-on-disability1688554472"],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
