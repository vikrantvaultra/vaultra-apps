import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sikkim-cm-state-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Chief Minister's State Disability Pension Scheme (Sikkim)", hi: "मुख्यमंत्री राज्य दिव्यांगता पेंशन योजना (सिक्किम)" },
  aka: ["CMSDPS", "CMDPS", "Sikkim disability pension"],
  shortDescription: {
    en: "People of any age in Sikkim with a disability of 40% to 80% get a state pension of ₹1,500 a month, fully paid by the Sikkim government.",
    hi: "सिक्किम में किसी भी उम्र के उन लोगों को, जिनकी दिव्यांगता 40% से 80% है, हर महीने ₹1,500 की राज्य पेंशन मिलती है, जिसका पूरा पैसा सिक्किम सरकार देती है।",
  },
  level: "state",
  state: "sikkim",
  department: {
    en: "Women, Child, Senior Citizen and Divyangjan Welfare Department, Government of Sikkim",
    hi: "महिला, बाल, वरिष्ठ नागरिक और दिव्यांगजन कल्याण विभाग, सिक्किम सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "divyang", "handicapped", "monthly pension", "sikkim"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("sikkim"),
    labelled(isTrue("disabled"), { en: "You have a disability", hi: "आप दिव्यांग हैं" }),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "दिव्यांगता 40% या उससे ज़्यादा" }),
    labelled(when("disabilityPct", "lte", 80), {
      en: "Disability of up to 80% (above 80% is covered by the national disability pension)",
      hi: "दिव्यांगता 80% तक (80% से ज़्यादा पर राष्ट्रीय दिव्यांगता पेंशन मिलती है)",
    }),
  ),

  details: {
    en: [
      "The Chief Minister's State Disability Pension Scheme is Sikkim's own monthly pension for persons with disabilities. It is fully funded by the state and runs under the Chief Minister's State Disability Pension Scheme Rules, 2020.",
      "The pension was raised from ₹1,000 to ₹1,500 a month from 2020-21 and is paid monthly by Direct Benefit Transfer. People with more than 80% disability are covered instead by the Indira Gandhi National Disability Pension, which the state tops up to ₹2,000 a month.",
    ],
    hi: [
      "मुख्यमंत्री राज्य दिव्यांगता पेंशन योजना दिव्यांगजनों के लिए सिक्किम की अपनी मासिक पेंशन है। इसका पूरा खर्च राज्य उठाता है और यह मुख्यमंत्री राज्य दिव्यांगता पेंशन योजना नियम, 2020 के तहत चलती है।",
      "2020-21 से पेंशन ₹1,000 से बढ़ाकर ₹1,500 महीना की गई और यह हर महीने DBT से दी जाती है। 80% से ज़्यादा दिव्यांगता वाले लोगों को इसके बजाय इंदिरा गांधी राष्ट्रीय दिव्यांगता पेंशन मिलती है, जिसे राज्य बढ़ाकर ₹2,000 महीना करता है।",
    ],
  },
  benefits: {
    en: ["₹1,500 every month, paid into your bank account.", "There is no age limit; children with disabilities can also get it."],
    hi: ["हर महीने ₹1,500, सीधे बैंक खाते में।", "उम्र की कोई सीमा नहीं; दिव्यांग बच्चों को भी मिल सकती है।"],
  },
  eligibilityText: {
    en: [
      "A person living in Sikkim with a disability of 40% to 80%, as shown on a disability certificate.",
      "Any age group can apply.",
      "A UDID card is needed to get disability benefits in the state.",
    ],
    hi: [
      "सिक्किम में रहने वाला ऐसा व्यक्ति जिसकी दिव्यांगता, दिव्यांगता प्रमाण पत्र के अनुसार, 40% से 80% हो।",
      "किसी भी उम्र के लोग आवेदन कर सकते हैं।",
      "राज्य में दिव्यांगता से जुड़े लाभ लेने के लिए UDID कार्ड ज़रूरी है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get a disability certificate and UDID card from your district hospital or a disability camp.",
        "Apply through the Social Welfare Inspector at your Block Administrative Centre or the Social Welfare Officer of your district.",
      ],
      hi: [
        "अपने ज़िला अस्पताल या दिव्यांगता शिविर से दिव्यांगता प्रमाण पत्र और UDID कार्ड बनवाएँ।",
        "अपने ब्लॉक प्रशासनिक केंद्र के समाज कल्याण निरीक्षक या ज़िले के समाज कल्याण अधिकारी के ज़रिए आवेदन करें।",
      ],
    },
  },

  officialUrl: "https://www.sikkim.gov.in/departments/women-child-senior-citizen-and-divyangjan-welfare-department",
  sources: [
    "https://www.sikkim.gov.in/department/departmentsubmenudetails?url=Menu%3Dwomen-child-senior-citizen-and-divyangjan-welfare-department%2FDivision%20and%20Cell%2Fdisability-division",
    "https://www.sikkim.gov.in/department/departmentsubmenudetails?url=Menu%3Dwomen-child-senior-citizen-and-divyangjan-welfare-department%2FDivision%20and%20Cell%2Fnsap-division",
    "https://ipr.sikkim.gov.in/Home/PressReleases?slug=press-release-fromdac-sikkim-gangtok-",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
