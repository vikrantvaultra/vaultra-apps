import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-minority-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Pre and Post Matric Scholarships for Minority Students (West Bengal)", hi: "अल्पसंख्यक छात्रों के लिए प्री और पोस्ट मैट्रिक छात्रवृत्ति (पश्चिम बंगाल)" },
  aka: ["NSP WB", "Aikyashree", "WBMDFC scholarship"],
  shortDescription: {
    en: "Fee support and a monthly allowance for minority students in West Bengal from Class IX to PhD, with at least 50% marks and family income up to ₹1 lakh (Class IX–X) or ₹2 lakh (higher).",
    hi: "पश्चिम बंगाल के अल्पसंख्यक छात्रों को कक्षा 9 से PhD तक फ़ीस सहायता और मासिक भत्ता, कम से कम 50% अंक और परिवार की आय ₹1 लाख (कक्षा 9–10) या ₹2 लाख (आगे) तक होने पर।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Minority Affairs & Madrasah Education Department, Government of West Bengal",
    hi: "अल्पसंख्यक मामले एवं मदरसा शिक्षा विभाग, पश्चिम बंगाल सरकार",
  },
  categories: ["minority", "education"],
  tags: ["scholarship", "minority", "muslim", "christian", "post matric", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(residentOf("west-bengal"), isTrue("minority"), isTrue("student"), incomeUpTo(200_000)),

  details: {
    en: [
      "The West Bengal government gives scholarships to students from notified minority communities through its NSP WB portal, from Class IX right up to PhD.",
      "Pre-matric scholarships (Classes IX–X) cover admission and tuition fees plus a monthly allowance. Post-matric scholarships (Class XI onwards) reimburse fees within set limits and pay a higher monthly allowance, including for technical and professional courses.",
    ],
    hi: [
      "पश्चिम बंगाल सरकार अपने NSP WB पोर्टल से अधिसूचित अल्पसंख्यक समुदायों के छात्रों को कक्षा 9 से PhD तक छात्रवृत्ति देती है।",
      "प्री-मैट्रिक छात्रवृत्ति (कक्षा 9–10) में दाख़िला और ट्यूशन फ़ीस के साथ मासिक भत्ता मिलता है। पोस्ट-मैट्रिक छात्रवृत्ति (कक्षा 11 से आगे) में तय सीमा तक फ़ीस की भरपाई और ज़्यादा मासिक भत्ता मिलता है, तकनीकी और प्रोफ़ेशनल कोर्स के लिए भी।",
    ],
  },
  benefits: {
    en: [
      "Pre-matric (Classes IX–X): admission and tuition fees covered, plus a monthly allowance for day scholars and hostellers.",
      "Post-matric (Class XI to PhD): fees reimbursed within limits, plus a higher monthly allowance.",
      "Money paid by DBT into the student's bank account.",
    ],
    hi: [
      "प्री-मैट्रिक (कक्षा 9–10): दाख़िला और ट्यूशन फ़ीस, साथ में डे-स्कॉलर और हॉस्टल वालों को मासिक भत्ता।",
      "पोस्ट-मैट्रिक (कक्षा 11 से PhD): सीमा तक फ़ीस की भरपाई, और ज़्यादा मासिक भत्ता।",
      "पैसा DBT से छात्र के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a notified minority community (Muslim, Christian, Sikh, Buddhist, Jain or Parsi).",
      "Studying from Class IX to PhD at a recognised institution.",
      "At least 50% marks in the last final exam.",
      "Family income up to ₹1 lakh a year for pre-matric, or ₹2 lakh for post-matric.",
      "Not getting any other scholarship.",
    ],
    hi: [
      "किसी अधिसूचित अल्पसंख्यक समुदाय (मुस्लिम, ईसाई, सिख, बौद्ध, जैन या पारसी) से हो।",
      "मान्यता प्राप्त संस्थान में कक्षा 9 से PhD तक पढ़ रहा हो।",
      "पिछली मुख्य परीक्षा में कम से कम 50% अंक।",
      "परिवार की सालाना आय प्री-मैट्रिक के लिए ₹1 लाख तक, पोस्ट-मैट्रिक के लिए ₹2 लाख तक।",
      "कोई दूसरी छात्रवृत्ति न ले रहा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the NSP WB portal (nspwb.wbmdfs.org) and register with your name, mobile, email, voter ID (EPIC) and Aadhaar.",
        "Fill in personal, academic and bank details and upload your income certificate, minority certificate, mark sheet and bank proof.",
        "Submit before the deadline. Your institution verifies it and the approved amount is paid by DBT.",
      ],
      hi: [
        "NSP WB पोर्टल (nspwb.wbmdfs.org) पर जाएँ और नाम, मोबाइल, ईमेल, वोटर ID (EPIC) और आधार से पंजीकरण करें।",
        "निजी, पढ़ाई और बैंक का ब्योरा भरें और आय प्रमाण पत्र, अल्पसंख्यक प्रमाण पत्र, मार्कशीट और बैंक का सबूत अपलोड करें।",
        "आख़िरी तारीख़ से पहले जमा करें। आपका संस्थान इसे जाँचता है और मंज़ूर राशि DBT से मिलती है।",
      ],
    },
  },

  officialUrl: "https://wb.gov.in/government-schemes-details-pre-and-post-matric-scholarships-for-minority-students.aspx",
  sources: [
    "https://wb.gov.in/government-schemes-details-pre-and-post-matric-scholarships-for-minority-students.aspx",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026-2027_English_I.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
