import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Bihar Rajya Nishaktata Pension Yojana", hi: "बिहार राज्य निःशक्तता पेंशन योजना" },
  aka: ["Bihar disability pension", "Divyang pension Bihar", "BDPS"],
  shortDescription: {
    en: "Bihar residents with 40% or more disability get a pension of ₹1,100 a month, with no age or income limit.",
    hi: "40% या उससे ज़्यादा दिव्यांगता वाले बिहार निवासियों को हर महीने ₹1,100 पेंशन मिलती है, उम्र या आय की कोई सीमा नहीं।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Social Welfare Department, Government of Bihar", hi: "समाज कल्याण विभाग, बिहार सरकार" },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "divyang", "viklang pension", "1100", "monthly pension", "bihar"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1100, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(residentOf("bihar"), isTrue("disabled"), when("disabilityPct", "gte", 40)),

  details: {
    en: [
      "The Bihar State Disability Pension (Nishaktata Pension) is a monthly pension paid by the state to persons with disabilities. Unlike the central disability pension, it has no age limit, no income limit and needs only 40% disability.",
      "Since June 2025 it pays ₹1,100 a month by DBT. The Social Welfare Department runs it through the Directorate of Social Security.",
    ],
    hi: [
      "बिहार राज्य निःशक्तता पेंशन राज्य सरकार की ओर से दिव्यांगजनों को दी जाने वाली मासिक पेंशन है। केंद्र की दिव्यांग पेंशन से अलग, इसमें उम्र और आय की कोई सीमा नहीं है और सिर्फ़ 40% दिव्यांगता चाहिए।",
      "जून 2025 से इसमें हर महीने ₹1,100 DBT से मिलते हैं। समाज कल्याण विभाग इसे सामाजिक सुरक्षा निदेशालय के ज़रिए चलाता है।",
    ],
  },
  benefits: {
    en: ["₹1,100 every month.", "No age or income limit.", "Paid by DBT into your bank account."],
    hi: ["हर महीने ₹1,100।", "उम्र या आय की कोई सीमा नहीं।", "पैसा DBT से आपके बैंक खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "Resident of Bihar.",
      "Has a disability certificate showing 40% or more disability.",
      "Any age and any income.",
      "Not getting the central Indira Gandhi disability pension or another social security pension.",
    ],
    hi: [
      "बिहार के निवासी।",
      "40% या उससे ज़्यादा दिव्यांगता का प्रमाण पत्र हो।",
      "कोई भी उम्र और कोई भी आय।",
      "केंद्र की इंदिरा गांधी दिव्यांग पेंशन या कोई दूसरी सामाजिक सुरक्षा पेंशन न मिलती हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to the RTPS counter at your block office.",
        "Fill in the disability pension form and attach your disability certificate and other documents.",
        "After verification, the pension starts in your bank account.",
      ],
      hi: [
        "अपने प्रखंड कार्यालय के RTPS काउंटर पर जाएँ।",
        "दिव्यांग पेंशन का फ़ॉर्म भरें और दिव्यांगता प्रमाण पत्र व दूसरे दस्तावेज़ लगाएँ।",
        "जाँच के बाद पेंशन आपके बैंक खाते में आने लगेगी।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Disability certificate (40% or more) or UDID card", "Residence proof", "Bank passbook", "Passport-size photograph"],
    hi: ["आधार कार्ड", "दिव्यांगता प्रमाण पत्र (40% या ज़्यादा) या UDID कार्ड", "निवास का सबूत", "बैंक पासबुक", "पासपोर्ट साइज़ फ़ोटो"],
  },

  officialUrl: "https://serviceonline.bihar.gov.in/",
  sources: [
    "https://saran.nic.in/social-welfare-department/",
    "https://betastate.bihar.gov.in/SocialWelfare/",
    "https://scroll.in/latest/1083726/ahead-of-bihar-polls-cm-nitish-kumar-hikes-social-security-pension-to-rs-1100",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1990,
  status: "active",
};

export default scheme;
