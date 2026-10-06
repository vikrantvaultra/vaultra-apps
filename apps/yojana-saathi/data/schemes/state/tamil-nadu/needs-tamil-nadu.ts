import { all, ageBetween, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "needs-tamil-nadu",
  tier: "compact",
  name: { en: "New Entrepreneur-cum-Enterprise Development Scheme (NEEDS)", hi: "नया उद्यमी-सह-उद्यम विकास योजना (NEEDS)" },
  aka: ["NEEDS", "NEEDS scheme Tamil Nadu", "first generation entrepreneur subsidy"],
  shortDescription: {
    en: "First-generation entrepreneurs in Tamil Nadu get a 25% capital subsidy (up to ₹75 lakh) and 3% interest subvention on bank loans for projects of ₹10 lakh to ₹5 crore.",
    hi: "तमिलनाडु के पहली पीढ़ी के उद्यमियों को ₹10 लाख से ₹5 करोड़ तक की परियोजना के बैंक लोन पर 25% पूँजी सब्सिडी (₹75 लाख तक) और 3% ब्याज छूट।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Micro, Small and Medium Enterprises Department, Government of Tamil Nadu",
    hi: "सूक्ष्म, लघु एवं मध्यम उद्यम विभाग, तमिलनाडु सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["business loan", "subsidy", "entrepreneur", "startup", "msme", "self employment"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { min: 21, max: 55 },
  kundliHouse: "business",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(ageBetween(21, 55)[0], { en: "You are at least 21 years old", hi: "आपकी उम्र कम से कम 21 साल है" }),
    labelled(ageBetween(21, 55)[1], {
      en: "You are 45 or younger (up to 55 for women, BC, MBC, SC, ST, ex-servicemen, transgender persons and persons with disabilities)",
      hi: "आपकी उम्र 45 साल तक है (महिलाओं, BC, MBC, SC, ST, पूर्व सैनिकों, ट्रांसजेंडर व्यक्तियों और दिव्यांगों के लिए 55 साल तक)",
    }),
  ),

  details: {
    en: [
      "NEEDS helps educated young people start their first manufacturing or service business. The MSME Department trains them, helps prepare a business plan, links them with banks or TIIC for a loan, and gives a capital subsidy and an interest subvention.",
      "The scheme is open for 2026-27: the official NEEDS portal shows applications being received and subsidies being sanctioned this year. Applications are only accepted online.",
    ],
    hi: [
      "NEEDS पढ़े-लिखे युवाओं को उनका पहला मैन्युफ़ैक्चरिंग या सर्विस बिज़नेस शुरू करने में मदद करती है। MSME विभाग उन्हें प्रशिक्षण देता है, बिज़नेस प्लान बनाने में मदद करता है, बैंक या TIIC से लोन दिलवाता है, और पूँजी सब्सिडी व ब्याज छूट देता है।",
      "योजना 2026-27 के लिए खुली है: आधिकारिक NEEDS पोर्टल पर इस साल आवेदन आने और सब्सिडी मंज़ूर होने की जानकारी दिख रही है। आवेदन सिर्फ़ ऑनलाइन होते हैं।",
    ],
  },
  benefits: {
    en: [
      "Capital subsidy of 25% of the project cost, up to ₹75 lakh.",
      "3% interest subvention for the whole repayment period of the loan.",
      "Loans from TIIC, commercial banks or co-operative banks for projects costing ₹10 lakh to ₹5 crore.",
      "Entrepreneurship development training before the subsidy is released.",
    ],
    hi: [
      "परियोजना लागत की 25% पूँजी सब्सिडी, ₹75 लाख तक।",
      "लोन चुकाने की पूरी अवधि में 3% ब्याज छूट।",
      "₹10 लाख से ₹5 करोड़ तक की परियोजना के लिए TIIC, व्यावसायिक बैंक या सहकारी बैंक से लोन।",
      "सब्सिडी मिलने से पहले उद्यमिता विकास प्रशिक्षण।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a first-generation entrepreneur setting up your first business in Tamil Nadu.",
      "Age 21 to 45; up to 55 for women, BC, MBC, SC, ST, ex-servicemen, transgender persons and persons with disabilities.",
      "You have passed 12th, or hold a degree, diploma, ITI or vocational training qualification.",
      "You can bring 10% of the project cost yourself (5% for the special categories).",
    ],
    hi: [
      "आप पहली पीढ़ी के उद्यमी हैं और तमिलनाडु में अपना पहला बिज़नेस शुरू कर रहे हैं।",
      "उम्र 21 से 45 साल; महिलाओं, BC, MBC, SC, ST, पूर्व सैनिकों, ट्रांसजेंडर व्यक्तियों और दिव्यांगों के लिए 55 साल तक।",
      "आपने 12वीं पास की है, या आपके पास डिग्री, डिप्लोमा, ITI या व्यावसायिक प्रशिक्षण है।",
      "आप परियोजना लागत का 10% ख़ुद लगा सकते हैं (विशेष श्रेणियों के लिए 5%)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to msmeonline.tn.gov.in/needs and check your eligibility.",
        "Register, fill in the online application with your project details and upload the documents.",
        "Your application is reviewed by a district task force committee and sent to the bank; track its status on the same portal.",
      ],
      hi: [
        "msmeonline.tn.gov.in/needs पर जाएँ और अपनी पात्रता जाँचें।",
        "रजिस्टर करें, परियोजना की जानकारी के साथ ऑनलाइन आवेदन भरें और दस्तावेज़ अपलोड करें।",
        "ज़िला स्तर की समिति आवेदन की जाँच कर उसे बैंक भेजती है; स्थिति इसी पोर्टल पर देखें।",
      ],
    },
  },

  officialUrl: "https://www.msmeonline.tn.gov.in/needs/",
  sources: ["https://www.msmeonline.tn.gov.in/needs/needs_desc.php", "https://www.msmeonline.tn.gov.in/needs/"],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "active",
};

export default scheme;
