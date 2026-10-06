import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mizoram-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Mizoram State Disability Pension", hi: "मिज़ोरम राज्य दिव्यांग पेंशन" },
  aka: ["Disability pension Mizoram", "Rualbanlo pension"],
  shortDescription: {
    en: "A state-funded pension of ₹500 a month for severely disabled or bedridden persons in Mizoram, given to a limited number of 200 people.",
    hi: "मिज़ोरम में गंभीर रूप से दिव्यांग या बिस्तर पर पड़े लोगों के लिए राज्य की ₹500 मासिक पेंशन, जो सीमित संख्या में 200 लोगों को मिलती है।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Directorate of Social Welfare, Social Welfare, Tribal Affairs & WCD Department, Government of Mizoram",
    hi: "समाज कल्याण निदेशालय, समाज कल्याण, जनजातीय कार्य एवं महिला-बाल विकास विभाग, मिज़ोरम सरकार",
  },
  categories: ["disability", "social-welfare", "pension-insurance"],
  tags: ["disability pension", "divyang", "bedridden", "pwd", "pension", "mizoram"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 500, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(residentOf("mizoram"), isTrue("disabled")),

  details: {
    en: [
      "This pension is paid fully from Mizoram's own funds, separate from the central disability pension (IGNDPS). It is meant for persons with severe disabilities or who are completely bedridden.",
      "Only 200 people receive it at a time, so a place opens up only when an existing beneficiary leaves the list.",
    ],
    hi: [
      "यह पेंशन पूरी तरह मिज़ोरम सरकार के अपने पैसे से दी जाती है, केंद्र की दिव्यांग पेंशन (IGNDPS) से अलग। यह गंभीर दिव्यांगता वाले या पूरी तरह बिस्तर पर पड़े लोगों के लिए है।",
      "एक समय में सिर्फ़ 200 लोगों को यह मिलती है, इसलिए नई जगह तभी बनती है जब कोई मौजूदा लाभार्थी सूची से हटता है।",
    ],
  },
  benefits: {
    en: ["₹500 a month."],
    hi: ["हर महीने ₹500।"],
  },
  eligibilityText: {
    en: [
      "A person with a disability living in Mizoram.",
      "The disability is severe, or the person is totally bedridden.",
      "A disability certificate or UDID card is needed.",
    ],
    hi: [
      "मिज़ोरम में रहने वाले दिव्यांग व्यक्ति।",
      "दिव्यांगता गंभीर हो, या व्यक्ति पूरी तरह बिस्तर पर हो।",
      "दिव्यांगता प्रमाण पत्र या UDID कार्ड ज़रूरी है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your District Social Welfare Officer and ask about a vacancy under the state disability pension.",
        "Submit the application with your disability certificate or UDID card, Aadhaar and bank details.",
      ],
      hi: [
        "अपने ज़िला समाज कल्याण अधिकारी से संपर्क करें और राज्य दिव्यांग पेंशन में ख़ाली जगह के बारे में पूछें।",
        "दिव्यांगता प्रमाण पत्र या UDID कार्ड, आधार और बैंक विवरण के साथ आवेदन जमा करें।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.mizoram.gov.in/page/schemes-on-disability1688554472",
  sources: [
    "https://socialwelfare.mizoram.gov.in/page/schemes-on-disability1688554472",
    "https://socialwelfare.mizoram.gov.in/page/rualbanlo-id-leh-hamthatna-te",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
