import { all, any, incomeUpTo, isFalse, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-unemployment-assistance",
  tier: "compact",
  overlapGroup: "unemployment-allowance",
  name: { en: "Tamil Nadu Unemployment Assistance Scheme", hi: "तमिलनाडु बेरोज़गारी सहायता योजना" },
  aka: ["unemployment dole Tamil Nadu", "Velaivaaippatror Udhavithogai", "UAS Tamil Nadu"],
  shortDescription: {
    en: "Job seekers on the Tamil Nadu employment register for 5+ years (1 year for persons with disabilities) get ₹200 to ₹1,000 a month, depending on qualification.",
    hi: "तमिलनाडु के रोज़गार रजिस्टर में 5 साल से ज़्यादा (दिव्यांगों के लिए 1 साल) से दर्ज नौकरी ढूँढने वालों को योग्यता के हिसाब से हर महीने ₹200 से ₹1,000।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Department of Employment and Training (Labour Welfare and Skill Development Department), Government of Tamil Nadu",
    hi: "रोज़गार एवं प्रशिक्षण विभाग (श्रम कल्याण एवं कौशल विकास विभाग), तमिलनाडु सरकार",
  },
  categories: ["skills-employment", "social-welfare"],
  tags: ["unemployment allowance", "berojgari bhatta", "job seeker", "employment exchange", "youth", "disability"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 200, period: "monthly", kind: "cash", maxMonths: 36 },
  kundliHouse: "career",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("employment", "eq", "unemployed"), { en: "You are not in any job", hi: "आप कोई नौकरी नहीं कर रहे हैं" }),
    labelled(isFalse("student"), { en: "You are not a regular student in a school or college", hi: "आप किसी स्कूल या कॉलेज के नियमित विद्यार्थी नहीं हैं" }),
    labelled(any(isTrue("disabled"), incomeUpTo(72_000)), {
      en: "Family income is up to ₹72,000 a year (no income limit for persons with disabilities)",
      hi: "परिवार की सालाना आय ₹72,000 तक हो (दिव्यांगों के लिए कोई आय सीमा नहीं)",
    }),
  ),

  details: {
    en: [
      "This scheme gives a small monthly allowance to educated job seekers who have waited a long time on the live register of their District Employment and Career Guidance Centre. It has run since 2006 and is still offered by the Department of Employment and Training.",
      "Other job seekers get it for 3 years; persons with disabilities get a higher amount for up to 10 years. The money is credited to the bank account every quarter.",
    ],
    hi: [
      "यह योजना उन पढ़े-लिखे नौकरी ढूँढने वालों को छोटा मासिक भत्ता देती है, जो लंबे समय से अपने ज़िला रोज़गार एवं करियर मार्गदर्शन केंद्र के लाइव रजिस्टर में इंतज़ार कर रहे हैं। यह 2006 से चल रही है और रोज़गार एवं प्रशिक्षण विभाग अब भी इसे देता है।",
      "सामान्य उम्मीदवारों को यह 3 साल तक मिलता है; दिव्यांगों को ज़्यादा राशि 10 साल तक मिलती है। पैसा हर तिमाही बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "Other job seekers: ₹200 a month if 10th failed, ₹300 if 10th passed, ₹400 if 12th passed, ₹600 for graduates. Paid for 3 years.",
      "Persons with disabilities: ₹600 a month (no schooling up to 10th passed), ₹750 if 12th passed, ₹1,000 for graduates. Paid for 10 years.",
      "Credited to your bank account every quarter.",
    ],
    hi: [
      "सामान्य उम्मीदवार: 10वीं फ़ेल को ₹200 महीना, 10वीं पास को ₹300, 12वीं पास को ₹400 और ग्रेजुएट को ₹600। 3 साल तक मिलता है।",
      "दिव्यांग: बिना पढ़ाई से 10वीं पास तक ₹600 महीना, 12वीं पास को ₹750, ग्रेजुएट को ₹1,000। 10 साल तक मिलता है।",
      "पैसा हर तिमाही आपके बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Tamil Nadu and have been on the live register of the District Employment Office for 5 years or more (1 year for persons with disabilities).",
      "Family income is up to ₹72,000 a year.",
      "Age limit: 40 years, or 45 years for SC/ST candidates. Persons with disabilities have no age or income limit.",
      "You are not employed anywhere and are not a regular student (distance or correspondence courses are allowed).",
    ],
    hi: [
      "आप तमिलनाडु में रहते हैं और ज़िला रोज़गार कार्यालय के लाइव रजिस्टर में 5 साल या उससे ज़्यादा (दिव्यांगों के लिए 1 साल) से दर्ज हैं।",
      "परिवार की सालाना आय ₹72,000 तक है।",
      "उम्र सीमा: 40 साल, SC/ST उम्मीदवारों के लिए 45 साल। दिव्यांगों के लिए उम्र या आय की कोई सीमा नहीं।",
      "आप कहीं नौकरी नहीं करते और नियमित विद्यार्थी नहीं हैं (दूरस्थ या पत्राचार कोर्स चल सकता है)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Download the form from tnvelaivaaippu.gov.in or collect it at your District Employment and Career Guidance Centre.",
        "Fill it in, attach your employment registration card and certificates, and submit it at the centre.",
      ],
      hi: [
        "tnvelaivaaippu.gov.in से फ़ॉर्म डाउनलोड करें या अपने ज़िला रोज़गार एवं करियर मार्गदर्शन केंद्र से लें।",
        "फ़ॉर्म भरें, रोज़गार पंजीकरण कार्ड और प्रमाण पत्र लगाएँ और केंद्र पर जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Employment registration (ID) card", "Educational certificates", "Income certificate (not needed for persons with disabilities)", "Disability certificate, if applicable", "Bank passbook"],
    hi: ["रोज़गार पंजीकरण (ID) कार्ड", "शैक्षिक प्रमाण पत्र", "आय प्रमाण पत्र (दिव्यांगों के लिए ज़रूरी नहीं)", "दिव्यांगता प्रमाण पत्र, अगर लागू हो", "बैंक पासबुक"],
  },

  officialUrl: "https://tnvelaivaaippu.gov.in/schemes.html",
  sources: ["https://tnvelaivaaippu.gov.in/schemes.html", "https://krishnagiri.nic.in/?p=24562"],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "active",
};

export default scheme;
