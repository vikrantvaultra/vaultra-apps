import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nagaland-state-technical-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "State Technical Scholarship for ST Students (Nagaland)", hi: "ST विद्यार्थियों के लिए राज्य तकनीकी छात्रवृत्ति (नागालैंड)" },
  aka: ["State Technical Scholarship", "Nagaland technical scholarship", "DTE Nagaland book grant"],
  shortDescription: {
    en: "ST students of Nagaland in AICTE- or COA-approved engineering diploma, degree or master's courses, from families earning up to ₹8 lakh, get a yearly book grant by DBT.",
    hi: "AICTE या COA से मान्य इंजीनियरिंग डिप्लोमा, डिग्री या मास्टर्स कोर्स में पढ़ने वाले नागालैंड के ST विद्यार्थियों को, जिनके परिवार की आय ₹8 लाख तक है, हर साल DBT से किताबों के लिए अनुदान मिलता है।",
  },
  level: "state",
  state: "nagaland",
  department: {
    en: "Directorate of Technical Education, Government of Nagaland",
    hi: "तकनीकी शिक्षा निदेशालय, नागालैंड सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "engineering", "diploma", "btech", "st", "book grant", "nagaland"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("nagaland"),
    when("caste", "in", ["st", "pvtg"]),
    labelled(isTrue("student"), {
      en: "You are a regular student in an engineering diploma, degree or master's course",
      hi: "आप इंजीनियरिंग डिप्लोमा, डिग्री या मास्टर्स कोर्स के नियमित विद्यार्थी हैं",
    }),
    incomeUpTo(800_000),
  ),

  details: {
    en: [
      "The State Technical Scholarship is given by the Government of Nagaland through the Directorate of Technical Education. It supports Scheduled Tribe students of Nagaland in technical courses, in the form of a book grant.",
      "Students are selected on merit in their last exam and paid once a year by DBT. The scholarship can run for up to 3 years for a diploma, 4 years for a BE/BTech and 2 years for an ME/MTech. Applications for 2026 are open on the state scholarship portal from 1 October to 31 December 2026. The guideline does not state the grant amount.",
    ],
    hi: [
      "राज्य तकनीकी छात्रवृत्ति नागालैंड सरकार तकनीकी शिक्षा निदेशालय के ज़रिए देती है। यह तकनीकी कोर्स में पढ़ने वाले नागालैंड के अनुसूचित जनजाति विद्यार्थियों को किताबों के अनुदान के रूप में मदद करती है।",
      "विद्यार्थियों को पिछली परीक्षा के अंकों के आधार पर चुना जाता है और साल में एक बार DBT से पैसा मिलता है। यह डिप्लोमा के लिए 3 साल, BE/BTech के लिए 4 साल और ME/MTech के लिए 2 साल तक मिल सकती है। 2026 के आवेदन राज्य छात्रवृत्ति पोर्टल पर 1 अक्टूबर से 31 दिसंबर 2026 तक खुले हैं। दिशानिर्देश में अनुदान की राशि नहीं दी गई है।",
    ],
  },
  benefits: {
    en: [
      "A yearly book grant paid by DBT into your Aadhaar-seeded bank account.",
      "Paid for up to 3 years (diploma), 4 years (BE/BTech) or 2 years (ME/MTech), if you are promoted each year.",
    ],
    hi: [
      "हर साल किताबों के लिए अनुदान, DBT से आपके आधार से जुड़े बैंक खाते में।",
      "हर साल पास होने पर 3 साल (डिप्लोमा), 4 साल (BE/BTech) या 2 साल (ME/MTech) तक।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a Scheduled Tribe student and an indigenous inhabitant of Nagaland.",
      "You study a diploma, degree or master's course in regular mode at an AICTE- or Council of Architecture-approved institution.",
      "Your parents' income from all sources is ₹8 lakh a year or less.",
      "You do not get any other central, state or AICTE scholarship (only one scholarship per student).",
    ],
    hi: [
      "आप अनुसूचित जनजाति के विद्यार्थी हैं और नागालैंड के मूल निवासी हैं।",
      "आप AICTE या आर्किटेक्चर काउंसिल से मान्य संस्थान में नियमित रूप से डिप्लोमा, डिग्री या मास्टर्स कोर्स कर रहे हैं।",
      "सभी स्रोतों से माता-पिता की आय साल में ₹8 लाख या उससे कम है।",
      "आप केंद्र, राज्य या AICTE की कोई दूसरी छात्रवृत्ति नहीं ले रहे (एक विद्यार्थी को एक ही छात्रवृत्ति)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on scholarship.nagaland.gov.in (Aadhaar authentication through DigiLocker).",
        "Choose the State Technical Scholarship, fill in the form and upload your documents.",
        "Submit a hard copy of the application to the Directorate of Technical Education, Kohima.",
      ],
      hi: [
        "scholarship.nagaland.gov.in पर पंजीकरण करें (आधार की पुष्टि DigiLocker से)।",
        "राज्य तकनीकी छात्रवृत्ति चुनें, फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "आवेदन की हार्ड कॉपी तकनीकी शिक्षा निदेशालय, कोहिमा में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Passport photo, and admit card and mark sheet of the previous course level",
      "Scheduled Tribe certificate and Indigenous Inhabitant certificate",
      "Parents' income certificate",
      "Admission fee receipt and institute verification or bonafide certificate",
      "Aadhaar card and front page of your Aadhaar-seeded bank passbook",
    ],
    hi: [
      "पासपोर्ट फ़ोटो, और पिछले कोर्स स्तर का एडमिट कार्ड और अंकतालिका",
      "अनुसूचित जनजाति प्रमाण पत्र और मूल निवासी प्रमाण पत्र",
      "माता-पिता का आय प्रमाण पत्र",
      "दाखिला फ़ीस की रसीद और संस्थान का सत्यापन या बोनाफ़ाइड प्रमाण पत्र",
      "आधार कार्ड और आधार से जुड़ी बैंक पासबुक का पहला पन्ना",
    ],
  },

  officialUrl: "https://scholarship.nagaland.gov.in/",
  sources: [
    "https://scholarship.nagaland.gov.in/uploaded-documents/10/view",
    "https://scholarship.nagaland.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
