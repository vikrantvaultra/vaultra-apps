import { all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sikkim-widow-pension",
  tier: "compact",
  overlapGroup: "widow-pension",
  name: { en: "Widow Pension (Sikkim, from age 21)", hi: "विधवा पेंशन (सिक्किम, 21 साल से)" },
  aka: ["Sikkim widow pension", "IGNWPS Sikkim"],
  shortDescription: {
    en: "Sikkim has lowered the starting age for widow pension from 40 to 21, so young widows up to 59 can also get a monthly pension. Check the current amount with the department.",
    hi: "सिक्किम ने विधवा पेंशन की शुरुआती उम्र 40 से घटाकर 21 साल कर दी है, ताकि 59 साल तक की युवा विधवाओं को भी मासिक पेंशन मिल सके। मौजूदा राशि विभाग से पता करें।",
  },
  level: "state",
  state: "sikkim",
  department: {
    en: "Women, Child, Senior Citizen and Divyangjan Welfare Department, Government of Sikkim",
    hi: "महिला, बाल, वरिष्ठ नागरिक और दिव्यांगजन कल्याण विभाग, सिक्किम सरकार",
  },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow", "widow pension", "vidhwa", "monthly pension", "sikkim"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 21, max: 59 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("sikkim"),
    female(),
    labelled(when("marital", "eq", "widowed"), { en: "You are a widow", hi: "आप विधवा हैं" }),
    when("age", "gte", 21),
    when("age", "lte", 59),
  ),

  details: {
    en: [
      "Widow pension in Sikkim is paid under the National Social Assistance Programme (Indira Gandhi National Widow Pension Scheme), implemented by the Women, Child, Senior Citizen and Divyangjan Welfare Department. Pensions are paid monthly by Direct Benefit Transfer.",
      "To reach more women, the Sikkim government lowered the minimum age from 40 to 21 years, covering widows aged 21 to 59. The government also describes the widow pension as enhanced, but we could not find the current monthly amount on an official page, so none is shown here.",
    ],
    hi: [
      "सिक्किम में विधवा पेंशन राष्ट्रीय सामाजिक सहायता कार्यक्रम (इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना) के तहत दी जाती है, जिसे महिला, बाल, वरिष्ठ नागरिक और दिव्यांगजन कल्याण विभाग लागू करता है। पेंशन हर महीने DBT से मिलती है।",
      "ज़्यादा महिलाओं तक पहुँचने के लिए सिक्किम सरकार ने न्यूनतम उम्र 40 से घटाकर 21 साल कर दी है, यानी 21 से 59 साल की विधवाएँ इसमें आती हैं। सरकार विधवा पेंशन को बढ़ाई गई बताती है, पर मौजूदा मासिक राशि हमें किसी सरकारी पेज पर नहीं मिली, इसलिए यहाँ राशि नहीं दिखाई गई है।",
    ],
  },
  benefits: {
    en: ["A monthly pension paid into your bank account.", "Widows from age 21 can get it, not only those above 40."],
    hi: ["हर महीने पेंशन, सीधे बैंक खाते में।", "21 साल की उम्र से विधवाएँ इसे पा सकती हैं, सिर्फ़ 40 से ऊपर वाली नहीं।"],
  },
  eligibilityText: {
    en: [
      "A widow living in Sikkim, aged 21 to 59 years.",
      "Other conditions of the national widow pension (such as BPL status) may apply; confirm with your Social Welfare Inspector.",
    ],
    hi: [
      "सिक्किम में रहने वाली विधवा, जिसकी उम्र 21 से 59 साल हो।",
      "राष्ट्रीय विधवा पेंशन की दूसरी शर्तें (जैसे BPL होना) लागू हो सकती हैं; अपने समाज कल्याण निरीक्षक से पुष्टि करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Social Welfare Inspector at your Block Administrative Centre or the district Social Welfare Officer.",
        "Submit the application with your husband's death certificate, age proof and bank details as asked.",
      ],
      hi: [
        "अपने ब्लॉक प्रशासनिक केंद्र के समाज कल्याण निरीक्षक या ज़िले के समाज कल्याण अधिकारी से संपर्क करें।",
        "पति का मृत्यु प्रमाण पत्र, उम्र का सबूत और बैंक विवरण, जो माँगा जाए, उसके साथ आवेदन जमा करें।",
      ],
    },
  },

  officialUrl: "https://www.sikkim.gov.in/departments/women-child-senior-citizen-and-divyangjan-welfare-department",
  sources: [
    "https://www.sikkim.gov.in/department/departmentsubmenudetails?url=Menu%3Dwomen-child-senior-citizen-and-divyangjan-welfare-department%2FDivision%20and%20Cell%2Fnsap-division",
    "https://ipr.sikkim.gov.in/Home/KeyAchievements",
    "https://ipr.sikkim.gov.in/Home/News?slug=cm-mr-prem-singh-tamang-distributes-aama-sashaktikaran-aid-to-rhenock-beneficiaries",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "check-status",
};

export default scheme;
