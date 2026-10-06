import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nagaland-disability-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Nagaland State Scholarship for Persons with Disabilities", hi: "नागालैंड दिव्यांगजन राज्य छात्रवृत्ति" },
  aka: ["State Disability Scholarship", "Nagaland disability scholarship", "PwD scholarship Nagaland"],
  shortDescription: {
    en: "Children with 40% or more disability studying in Class I to VIII in Nagaland, from families earning up to ₹2.5 lakh, can get a state-funded scholarship.",
    hi: "नागालैंड में कक्षा I से VIII में पढ़ने वाले 40% या ज़्यादा दिव्यांगता वाले बच्चों को, जिनके परिवार की आय ₹2.5 लाख तक है, राज्य की छात्रवृत्ति मिल सकती है।",
  },
  level: "state",
  state: "nagaland",
  department: {
    en: "Directorate of Social Welfare, Government of Nagaland",
    hi: "समाज कल्याण निदेशालय, नागालैंड सरकार",
  },
  categories: ["disability", "education"],
  tags: ["scholarship", "disability", "divyang", "school", "children", "nagaland"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("nagaland"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(isTrue("student"), {
      en: "The child is a school student in Class I to VIII",
      hi: "बच्चा कक्षा I से VIII का स्कूली विद्यार्थी है",
    }),
    incomeUpTo(250_000),
  ),

  details: {
    en: [
      "The Scholarship for Persons with Disabilities is funded by the Government of Nagaland and run by the Directorate of Social Welfare. It is for school children with a benchmark disability in Class I to VIII.",
      "All types of disability listed under the Rights of Persons with Disabilities Rules, 2017 are covered. For 2026, online applications are open from 1 August to 30 November 2026, and District Welfare Officers verify them by 15 December 2026. The guideline does not state the scholarship amount.",
    ],
    hi: [
      "दिव्यांगजन छात्रवृत्ति नागालैंड सरकार की ओर से दी जाती है और समाज कल्याण निदेशालय इसे चलाता है। यह कक्षा I से VIII में पढ़ने वाले बेंचमार्क दिव्यांगता वाले स्कूली बच्चों के लिए है।",
      "दिव्यांगजन अधिकार नियम, 2017 में दी गई सभी तरह की दिव्यांगता इसमें आती है। 2026 के लिए ऑनलाइन आवेदन 1 अगस्त से 30 नवंबर 2026 तक खुले हैं, और ज़िला कल्याण अधिकारी 15 दिसंबर 2026 तक उनकी जाँच करते हैं। दिशानिर्देश में छात्रवृत्ति की राशि नहीं दी गई है।",
    ],
  },
  benefits: {
    en: [
      "A state scholarship for a disabled child studying in Class I to VIII.",
      "Can be renewed each year the child passes, until Class VIII.",
    ],
    hi: [
      "कक्षा I से VIII में पढ़ने वाले दिव्यांग बच्चे के लिए राज्य छात्रवृत्ति।",
      "हर साल पास होने पर कक्षा VIII तक नवीनीकरण हो सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The child is an inhabitant of Nagaland with a benchmark disability of 40% or more.",
      "The child studies in Class I to VIII in a school with a valid UDISE code.",
      "Parents' or guardian's income from all sources is ₹2.5 lakh a year or less.",
      "The child did not fail the last exam and does not get any other scholarship.",
      "The child has a bank account with a scheduled bank, seeded with Aadhaar and a mobile number.",
    ],
    hi: [
      "बच्चा नागालैंड का निवासी है और उसकी बेंचमार्क दिव्यांगता 40% या ज़्यादा है।",
      "बच्चा मान्य UDISE कोड वाले स्कूल में कक्षा I से VIII में पढ़ता है।",
      "सभी स्रोतों से माता-पिता या अभिभावक की आय साल में ₹2.5 लाख या उससे कम है।",
      "बच्चा पिछली परीक्षा में फ़ेल नहीं हुआ और कोई दूसरी छात्रवृत्ति नहीं ले रहा।",
      "बच्चे का किसी अनुसूचित बैंक में खाता है, जो आधार और मोबाइल नंबर से जुड़ा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on scholarship.nagaland.gov.in (Aadhaar authentication through DigiLocker).",
        "Choose the State Disability Scholarship and fill in the form; apply as Fresh, or as Renewal if the child got it in 2025-26.",
        "Upload the documents and get the school head to sign the institution certificate. The District Welfare Officer verifies the application online.",
      ],
      hi: [
        "scholarship.nagaland.gov.in पर पंजीकरण करें (आधार की पुष्टि DigiLocker से)।",
        "State Disability Scholarship चुनें और फ़ॉर्म भरें; नया (Fresh) आवेदन करें, या अगर बच्चे को 2025-26 में मिली थी तो नवीनीकरण (Renewal)।",
        "दस्तावेज़ अपलोड करें और स्कूल के प्रधान से संस्थान प्रमाण पत्र पर साइन करवाएँ। ज़िला कल्याण अधिकारी आवेदन की ऑनलाइन जाँच करते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Progress report of the last class passed",
      "Disability certificate or UDID card",
      "Front page of the bank passbook",
      "Original income certificate (Annexure I for employed parents, Annexure II affidavit for others)",
    ],
    hi: [
      "पिछली पास की गई कक्षा की प्रगति रिपोर्ट",
      "दिव्यांगता प्रमाण पत्र या UDID कार्ड",
      "बैंक पासबुक का पहला पन्ना",
      "मूल आय प्रमाण पत्र (नौकरी वाले माता-पिता के लिए Annexure I, बाकी के लिए Annexure II हलफ़नामा)",
    ],
  },

  officialUrl: "https://scholarship.nagaland.gov.in/",
  sources: [
    "https://scholarship.nagaland.gov.in/uploaded-documents/32/view",
    "https://scholarship.nagaland.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
