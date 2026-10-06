import { all, isTrue, labelled, notGovtEmployee, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "madhu-babu-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Madhu Babu Pension for Persons with Disabilities", hi: "मधु बाबू पेंशन (दिव्यांगजन)" },
  aka: ["MBPY disability pension", "Odisha disability pension", "Madhubabu divyang pension"],
  shortDescription: {
    en: "Persons with a benchmark disability (40% or more) in Odisha get a monthly state pension at any age; those with 80% or more disability get ₹3,500 a month.",
    hi: "ओडिशा में 40% या उससे ज़्यादा (बेंचमार्क) दिव्यांगता वाले लोगों को किसी भी उम्र में हर महीने राज्य पेंशन; 80% या उससे ज़्यादा दिव्यांगता पर ₹3,500 महीना।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Social Security and Empowerment of Persons with Disabilities (SSEPD), Government of Odisha",
    hi: "सामाजिक सुरक्षा एवं दिव्यांगजन सशक्तिकरण विभाग (SSEPD), ओडिशा सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "divyang", "pension", "madhu babu", "pwd", "odisha"],
  benefitType: "pension",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(
    residentOf("odisha"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), {
      en: "No one in the family is a serving or retired government employee",
      hi: "परिवार में कोई मौजूदा या रिटायर सरकारी कर्मचारी न हो",
    }),
  ),

  details: {
    en: [
      "Madhu Babu Pension Yojana also gives a monthly pension to persons with a benchmark disability (40% or more) under the Rights of Persons with Disabilities Act, 2016, whatever their age. All disability types notified under the Act are covered.",
      "From January 2025, people with 80% or more disability get ₹3,500 a month. Others get the standard rate set by the state. There is no family income ceiling if no one in the family pays income tax or is a serving or retired government servant.",
    ],
    hi: [
      "मधु बाबू पेंशन योजना दिव्यांगजन अधिकार अधिनियम, 2016 के तहत बेंचमार्क दिव्यांगता (40% या उससे ज़्यादा) वाले लोगों को, उम्र चाहे जो हो, हर महीने पेंशन देती है। अधिनियम में दर्ज सभी तरह की दिव्यांगता शामिल हैं।",
      "जनवरी 2025 से 80% या उससे ज़्यादा दिव्यांगता वालों को ₹3,500 महीना मिलता है। बाकी को राज्य की तय सामान्य दर मिलती है। अगर परिवार में कोई आयकर नहीं देता और कोई मौजूदा या रिटायर सरकारी कर्मचारी नहीं है, तो आय की कोई सीमा नहीं है।",
    ],
  },
  benefits: {
    en: ["₹3,500 a month if your disability is 80% or more.", "The standard monthly rate for 40% to 79% disability."],
    hi: ["80% या उससे ज़्यादा दिव्यांगता पर ₹3,500 महीना।", "40% से 79% दिव्यांगता पर सामान्य मासिक दर।"],
  },
  eligibilityText: {
    en: [
      "You live in Odisha and have a benchmark disability (40% or more) certified by the competent authority.",
      "There is no age limit.",
      "No one in your family pays income tax or is a serving or retired government servant.",
    ],
    hi: [
      "आप ओडिशा में रहते हैं और सक्षम अधिकारी से प्रमाणित बेंचमार्क दिव्यांगता (40% या उससे ज़्यादा) है।",
      "उम्र की कोई सीमा नहीं है।",
      "परिवार में कोई आयकर नहीं देता और कोई मौजूदा या रिटायर सरकारी कर्मचारी नहीं है।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the SSEPD portal (ssepd.gov.in) under 'Application for Beneficiary'.", "Upload your disability certificate or UDID card, Aadhaar and bank details."],
      hi: ["SSEPD पोर्टल (ssepd.gov.in) पर 'Application for Beneficiary' में आवेदन करें।", "दिव्यांगता प्रमाण पत्र या UDID कार्ड, आधार और बैंक की जानकारी अपलोड करें।"],
    },
    offline: {
      en: ["Get the MBPY form from the block office or municipality / NAC office.", "Submit it with a copy of your disability certificate and keep the acknowledgement."],
      hi: ["MBPY फ़ॉर्म ब्लॉक कार्यालय या नगरपालिका / NAC कार्यालय से लें।", "दिव्यांगता प्रमाण पत्र की कॉपी के साथ जमा करें और पावती संभाल कर रखें।"],
    },
  },
  documents: {
    en: ["Disability certificate or UDID card showing the percentage", "Aadhaar card", "Proof of age", "Bank account details", "Passport-size photos"],
    hi: ["प्रतिशत लिखा हुआ दिव्यांगता प्रमाण पत्र या UDID कार्ड", "आधार कार्ड", "उम्र का सबूत", "बैंक खाते की जानकारी", "पासपोर्ट साइज़ फ़ोटो"],
  },

  officialUrl: "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/madhu-babu-pension-yojna-mbpy",
  sources: [
    "https://ssepd.odisha.gov.in/sites/default/files/2026-08/GUIDELINES%20ON%20MADHU%20BABU%20PENSION%20YOJANA%20%28MBPY%29_1.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2024-07/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
