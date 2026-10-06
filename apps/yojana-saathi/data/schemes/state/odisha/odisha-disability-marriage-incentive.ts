import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "odisha-disability-marriage-incentive",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Marriage Incentive for Persons with Disabilities (Odisha)", hi: "दिव्यांगजन विवाह प्रोत्साहन राशि (ओडिशा)" },
  aka: ["Odisha divyang marriage incentive", "PwD marriage incentive Odisha", "disability marriage 2.5 lakh"],
  shortDescription: {
    en: "A couple in Odisha where one spouse has a benchmark disability gets ₹2.5 lakh for a dowry-free marriage, released in stages over three years.",
    hi: "ओडिशा में जिस जोड़े में एक जीवनसाथी को बेंचमार्क दिव्यांगता है, उसे दहेज-मुक्त शादी पर ₹2.5 लाख, तीन साल में चरणों में।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Social Security and Empowerment of Persons with Disabilities (SSEPD), Government of Odisha",
    hi: "सामाजिक सुरक्षा एवं दिव्यांगजन सशक्तिकरण विभाग (SSEPD), ओडिशा सरकार",
  },
  categories: ["disability", "social-welfare"],
  tags: ["marriage", "disability", "divyang", "incentive", "dowry free", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 250000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("odisha"),
    minAge(18),
  ),

  details: {
    en: [
      "To help persons with disabilities lead a normal family life and to encourage others to marry them, Odisha gives a marriage incentive when one spouse has a benchmark disability. New guidelines were issued in 2026.",
      "The incentive is ₹2,50,000. It is locked in for three years: 10% can be withdrawn after the first year, 10% after the second and the remaining 80% after the third year of marriage. It can be taken only once in a lifetime.",
    ],
    hi: [
      "दिव्यांगजनों को सामान्य पारिवारिक जीवन जीने में मदद करने और दूसरों को उनसे शादी के लिए प्रोत्साहित करने के लिए, ओडिशा उस शादी पर प्रोत्साहन राशि देता है जिसमें एक जीवनसाथी बेंचमार्क दिव्यांग हो। 2026 में इसकी नई गाइडलाइन जारी हुई।",
      "प्रोत्साहन राशि ₹2,50,000 है। यह तीन साल के लिए जमा रहती है: शादी के पहले साल के बाद 10%, दूसरे साल के बाद 10% और तीसरे साल के बाद बाकी 80% निकाले जा सकते हैं। यह जीवन में सिर्फ़ एक बार मिलती है।",
    ],
  },
  benefits: {
    en: ["₹2,50,000 to the couple.", "Released 10% after year 1, 10% after year 2 and 80% after year 3."],
    hi: ["जोड़े को ₹2,50,000।", "पहले साल के बाद 10%, दूसरे साल के बाद 10% और तीसरे साल के बाद 80%।"],
  },
  eligibilityText: {
    en: [
      "Only one of the spouses has a permanent benchmark disability (any category), and that spouse lives in Odisha.",
      "The groom is at least 21 and the bride at least 18 at the time of marriage.",
      "The marriage is dowry-free and registered within 12 months of the wedding.",
      "Neither spouse has received this incentive before. If you also qualify under the ST & SC Development Department's scheme, you can take only one.",
    ],
    hi: [
      "जीवनसाथियों में से सिर्फ़ एक को स्थायी बेंचमार्क दिव्यांगता (किसी भी श्रेणी की) है, और वह ओडिशा में रहता/रहती है।",
      "शादी के समय दूल्हे की उम्र कम से कम 21 और दुल्हन की कम से कम 18 साल हो।",
      "शादी दहेज-मुक्त हो और शादी के 12 महीने के अंदर पंजीकृत हो।",
      "किसी भी जीवनसाथी ने पहले यह प्रोत्साहन न लिया हो। अगर आप ST & SC विकास विभाग की योजना में भी पात्र हैं, तो सिर्फ़ एक ही ले सकते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Within one year of registering the marriage, apply online on the SSEPD portal (ssepd.gov.in) under 'Application for Marriage Incentive'.",
        "Upload the documents and keep the printout of the application.",
        "A verification officer visits the couple at home; the Collector sanctions the award after checking.",
      ],
      hi: [
        "शादी के पंजीकरण के एक साल के अंदर SSEPD पोर्टल (ssepd.gov.in) पर 'Application for Marriage Incentive' में ऑनलाइन आवेदन करें।",
        "दस्तावेज़ अपलोड करें और आवेदन का प्रिंटआउट रख लें।",
        "सत्यापन अधिकारी जोड़े के घर आकर जाँच करते हैं; जाँच के बाद कलेक्टर राशि मंज़ूर करते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "UDID card of the spouse with a disability",
      "Aadhaar of both spouses",
      "Marriage registration certificate",
      "Joint photograph of the couple",
      "Resident certificate from the Tahasildar and voter IDs as age proof",
      "Dowry-free marriage declaration and an undertaking that no similar incentive was taken",
    ],
    hi: [
      "दिव्यांग जीवनसाथी का UDID कार्ड",
      "दोनों जीवनसाथियों का आधार",
      "विवाह पंजीकरण प्रमाण पत्र",
      "जोड़े की संयुक्त फ़ोटो",
      "तहसीलदार का निवास प्रमाण पत्र और उम्र के सबूत के रूप में वोटर ID",
      "दहेज-मुक्त विवाह का घोषणा पत्र और ऐसा कोई प्रोत्साहन न लेने का शपथ पत्र",
    ],
  },

  officialUrl: "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/marriage-incentives",
  sources: [
    "https://ssepd.odisha.gov.in/sites/default/files/2026-08/Guideline%20on%20Marriage%20Incentive_2.pdf",
    "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/marriage-incentives",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
