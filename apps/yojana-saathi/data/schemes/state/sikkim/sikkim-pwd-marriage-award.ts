import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sikkim-pwd-marriage-award",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Sikkim Grant of Award for Marriage with a Person with Disability", hi: "सिक्किम दिव्यांग व्यक्ति से विवाह पर पुरस्कार अनुदान" },
  aka: ["Sikkim disability marriage award", "Divyang marriage incentive Sikkim"],
  shortDescription: {
    en: "Couples in Sikkim where a person without disability marries a person with a disability get a one-time award of ₹2,00,000.",
    hi: "सिक्किम में जब कोई व्यक्ति किसी दिव्यांग व्यक्ति से शादी करता है, तो जोड़े को एक बार ₹2,00,000 का पुरस्कार मिलता है।",
  },
  level: "state",
  state: "sikkim",
  department: {
    en: "Women, Child, Senior Citizen and Divyangjan Welfare Department, Government of Sikkim",
    hi: "महिला, बाल, वरिष्ठ नागरिक और दिव्यांगजन कल्याण विभाग, सिक्किम सरकार",
  },
  categories: ["disability", "social-welfare"],
  tags: ["marriage", "disability", "divyang", "incentive", "award", "sikkim"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 200000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("sikkim")),

  details: {
    en: [
      "This Sikkim scheme encourages people to accept a person with a disability as a life partner and helps persons with disabilities join the mainstream of society.",
      "The couple receives a one-time grant of ₹2,00,000 as an award. The department reported that the scheme was still running in July 2026.",
    ],
    hi: [
      "सिक्किम की यह योजना लोगों को किसी दिव्यांग व्यक्ति को जीवनसाथी के रूप में अपनाने के लिए प्रोत्साहित करती है और दिव्यांगजनों को समाज की मुख्यधारा में जोड़ने में मदद करती है।",
      "जोड़े को एक बार ₹2,00,000 का अनुदान पुरस्कार के रूप में मिलता है। विभाग के अनुसार जुलाई 2026 में भी यह योजना चल रही थी।",
    ],
  },
  benefits: {
    en: ["A one-time award of ₹2,00,000 for the married couple."],
    hi: ["शादीशुदा जोड़े को एक बार ₹2,00,000 का पुरस्कार।"],
  },
  eligibilityText: {
    en: [
      "A marriage in Sikkim between a person with a disability and a person without a disability.",
      "The spouse with a disability should have a disability certificate and UDID card.",
    ],
    hi: [
      "सिक्किम में किसी दिव्यांग व्यक्ति और बिना दिव्यांगता वाले व्यक्ति के बीच हुई शादी।",
      "दिव्यांग जीवनसाथी के पास दिव्यांगता प्रमाण पत्र और UDID कार्ड होना चाहिए।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Social Welfare Officer of your district (Women, Child, Senior Citizen and Divyangjan Welfare Department).",
        "Submit the application with your marriage proof and the disability certificate or UDID card as asked.",
      ],
      hi: [
        "अपने ज़िले के समाज कल्याण अधिकारी (महिला, बाल, वरिष्ठ नागरिक और दिव्यांगजन कल्याण विभाग) से संपर्क करें।",
        "शादी का सबूत और दिव्यांगता प्रमाण पत्र या UDID कार्ड, जो माँगा जाए, उसके साथ आवेदन जमा करें।",
      ],
    },
  },

  officialUrl: "https://www.sikkim.gov.in/departments/women-child-senior-citizen-and-divyangjan-welfare-department",
  sources: [
    "https://ipr.sikkim.gov.in/Home/PressReleases?slug=press-release-fromdac-sikkim-gangtok-",
    "https://www.sikkim.gov.in/department/departmentsubmenudetails?url=Menu%3Dwomen-child-senior-citizen-and-divyangjan-welfare-department%2FDivision%20and%20Cell%2Fnsap-division",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
