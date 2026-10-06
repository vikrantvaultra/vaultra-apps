import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shahid-madho-singh-haath-kharcha-yojana",
  tier: "compact",
  name: { en: "Shahid Madho Singh Haath Kharcha Yojana", hi: "शहीद माधो सिंह हाथ खर्च योजना" },
  aka: ["Madho Singh Haath Kharcha", "Haath Kharcha Yojana", "ST students 5000 Odisha"],
  shortDescription: {
    en: "Scheduled Tribe students in Odisha get ₹5,000 when they join Class 9 and again when they join Class 11, on top of any other scholarship.",
    hi: "ओडिशा के अनुसूचित जनजाति के विद्यार्थियों को कक्षा 9 में दाखिले पर ₹5,000 और फिर कक्षा 11 में दाखिले पर ₹5,000, किसी भी दूसरी छात्रवृत्ति के अलावा।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "ST & SC Development, Minorities & Backward Classes Welfare Department, Government of Odisha",
    hi: "अनुसूचित जनजाति एवं अनुसूचित जाति विकास, अल्पसंख्यक एवं पिछड़ा वर्ग कल्याण विभाग, ओडिशा सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["st students", "tribal", "class 9", "class 11", "incentive", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "one-time", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    when("caste", "in", ["st", "pvtg"]),
    labelled(isTrue("student"), {
      en: "You have taken admission in Class 9 or Class 11",
      hi: "आपने कक्षा 9 या कक्षा 11 में दाखिला लिया है",
    }),
  ),

  details: {
    en: [
      "Shahid Madho Singh Haath Kharcha Yojana was started by the new government in 2024 to help tribal students stay in school at the two points where many drop out: moving to Class 9 and moving to Class 11.",
      "An ST student gets a one-time ₹5,000 on admission in Class 9 and another ₹5,000 on admission in Class 11. It is paid over and above any other scholarship. The 2026-27 budget provides ₹154 crore to reach about 3 lakh ST students.",
    ],
    hi: [
      "शहीद माधो सिंह हाथ खर्च योजना नई सरकार ने 2024 में शुरू की, ताकि आदिवासी विद्यार्थी उन दो पड़ावों पर पढ़ाई न छोड़ें जहाँ बहुत से बच्चे छोड़ देते हैं: कक्षा 9 और कक्षा 11 में जाते समय।",
      "ST विद्यार्थी को कक्षा 9 में दाखिले पर एक बार ₹5,000 और कक्षा 11 में दाखिले पर फिर ₹5,000 मिलते हैं। यह किसी भी दूसरी छात्रवृत्ति के अलावा मिलता है। 2026-27 के बजट में लगभग 3 लाख ST विद्यार्थियों के लिए ₹154 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: ["₹5,000 on admission in Class 9.", "Another ₹5,000 on admission in Class 11.", "Paid in addition to any other scholarship."],
    hi: ["कक्षा 9 में दाखिले पर ₹5,000।", "कक्षा 11 में दाखिले पर फिर ₹5,000।", "किसी भी दूसरी छात्रवृत्ति के अलावा मिलता है।"],
  },
  eligibilityText: {
    en: [
      "You belong to a Scheduled Tribe and live in Odisha.",
      "You have taken admission in Class 9 or Class 11.",
      "Students whose families are in the NFSA or State Food Security database don't need to upload an income certificate.",
    ],
    hi: [
      "आप अनुसूचित जनजाति से हैं और ओडिशा में रहते हैं।",
      "आपने कक्षा 9 या कक्षा 11 में दाखिला लिया है।",
      "जिन विद्यार्थियों के परिवार NFSA या राज्य खाद्य सुरक्षा डेटाबेस में हैं, उन्हें आय प्रमाण पत्र अपलोड नहीं करना पड़ता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply through the State Scholarship Portal (scholarship.odisha.gov.in), usually with help from your school.",
        "Your school verifies the admission and forwards the application.",
        "The money is paid by DBT into the student's Aadhaar-linked bank account.",
      ],
      hi: [
        "राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) से आवेदन करें, आम तौर पर स्कूल की मदद से।",
        "आपका स्कूल दाखिले की पुष्टि करके आवेदन आगे भेजता है।",
        "पैसा DBT से विद्यार्थी के आधार से जुड़े बैंक खाते में आता है।",
      ],
    },
  },

  officialUrl: "https://scholarship.odisha.gov.in/",
  sources: [
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2024-07/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://scholarship.odisha.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
