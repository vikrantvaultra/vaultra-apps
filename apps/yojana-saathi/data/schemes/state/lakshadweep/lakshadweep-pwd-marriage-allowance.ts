import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "lakshadweep-pwd-marriage-allowance",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Lakshadweep Marriage Allowance for Persons with Disabilities", hi: "लक्षद्वीप दिव्यांगजन विवाह भत्ता" },
  aka: ["PwD marriage allowance Lakshadweep", "Divyang marriage assistance Lakshadweep"],
  shortDescription: {
    en: "Persons with disabilities in Lakshadweep can get ₹30,000 from the UT Administration to help with their marriage expenses.",
    hi: "लक्षद्वीप के दिव्यांगजनों को शादी के ख़र्च में मदद के लिए केंद्र शासित प्रदेश प्रशासन से ₹30,000 मिल सकते हैं।",
  },
  level: "state",
  state: "lakshadweep",
  department: {
    en: "Directorate of Social Welfare & Tribal Affairs, Lakshadweep Administration",
    hi: "समाज कल्याण एवं जनजातीय मामले निदेशालय, लक्षद्वीप प्रशासन",
  },
  categories: ["disability", "social-welfare"],
  tags: ["disability", "divyang", "marriage", "marriage allowance", "lakshadweep"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 30000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("lakshadweep"), isTrue("disabled")),

  details: {
    en: [
      "The Directorate of Social Welfare & Tribal Affairs, Lakshadweep, gives a one-time marriage allowance of ₹30,000 to persons with disabilities to help meet wedding costs.",
      "The Directorate lists this among its current programmes for persons with disabilities. Detailed rules, such as the minimum disability percentage and the time limit for applying, are not published online, so contact the Directorate before or soon after the wedding.",
    ],
    hi: [
      "लक्षद्वीप का समाज कल्याण एवं जनजातीय मामले निदेशालय दिव्यांगजनों को शादी का ख़र्च उठाने के लिए एक बार ₹30,000 का विवाह भत्ता देता है।",
      "निदेशालय इसे दिव्यांगजनों के लिए अपने मौजूदा कार्यक्रमों में गिनाता है। कम से कम कितनी दिव्यांगता चाहिए और कब तक आवेदन करना है, जैसे नियम ऑनलाइन नहीं छपे हैं, इसलिए शादी से पहले या उसके तुरंत बाद निदेशालय से संपर्क करें।",
    ],
  },
  benefits: {
    en: ["₹30,000 one-time help with marriage expenses."],
    hi: ["शादी के ख़र्च के लिए एक बार ₹30,000 की मदद।"],
  },
  eligibilityText: {
    en: [
      "A person with a disability who lives in Lakshadweep.",
      "Getting married (ask the Directorate about the disability percentage and other conditions).",
    ],
    hi: [
      "लक्षद्वीप में रहने वाला दिव्यांग व्यक्ति।",
      "जिसकी शादी हो रही हो (दिव्यांगता प्रतिशत और बाक़ी शर्तें निदेशालय से पूछें)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Directorate of Social Welfare & Tribal Affairs, Kavaratti (phone 04896-262314, email lk-dsw@nic.in).",
        "Ask for the marriage allowance form and the list of documents, such as your disability certificate or UDID card and marriage proof.",
        "Submit the form with the documents and your bank details.",
      ],
      hi: [
        "समाज कल्याण एवं जनजातीय मामले निदेशालय, कवरत्ती से संपर्क करें (फ़ोन 04896-262314, ईमेल lk-dsw@nic.in)।",
        "विवाह भत्ते का फ़ॉर्म और ज़रूरी दस्तावेज़ों की सूची माँगें, जैसे दिव्यांगता प्रमाण पत्र या UDID कार्ड और शादी का सबूत।",
        "फ़ॉर्म को दस्तावेज़ों और बैंक की जानकारी के साथ जमा करें।",
      ],
    },
  },

  officialUrl: "https://lakshadweep.gov.in/departments/social-welfare-and-tribal-affairs/",
  sources: ["https://lakshadweep.gov.in/departments/social-welfare-and-tribal-affairs/"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
