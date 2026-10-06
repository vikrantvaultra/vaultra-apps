import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "odisha-e-medhabruti",
  overlapGroup: "scholarship",
  name: { en: "e-Medhabruti Merit Scholarship (Odisha)", hi: "ई-मेधाबृत्ति मेरिट छात्रवृत्ति (ओडिशा)" },
  aka: ["e-Medhabruti", "Medhabruti", "Mukhyamantri Medhabi Chhatra Protsahan Yojana", "MMCPY", "Odisha merit scholarship"],
  shortDescription: {
    en: "Meritorious Odisha students from families earning up to ₹8 lakh get ₹10,000 a year for a degree, ₹15,000 for a PG course and ₹20,000 for technical or professional courses.",
    hi: "₹8 लाख तक की पारिवारिक आय वाले ओडिशा के मेधावी विद्यार्थियों को डिग्री के लिए हर साल ₹10,000, PG के लिए ₹15,000 और तकनीकी या प्रोफ़ेशनल कोर्स के लिए ₹20,000।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Higher Education Department, Government of Odisha",
    hi: "उच्च शिक्षा विभाग, ओडिशा सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "merit", "college", "medhabruti", "degree", "engineering", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 10000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    labelled(isTrue("student"), {
      en: "You are a regular student in a degree, PG, or technical/professional course",
      hi: "आप डिग्री, PG या तकनीकी/प्रोफ़ेशनल कोर्स के नियमित विद्यार्थी हैं",
    }),
    incomeUpTo(800_000),
  ),

  details: {
    en: [
      "e-Medhabruti is the Odisha Higher Education Department's merit-cum-means scholarship. It is the main part of the Mukhyamantri Medhabi Chhatra Protsahan Yojana, which also includes the Vyasakabi Fakir Mohan and Gopabandhu Sikhya Sahayata scholarships.",
      "There are three types: UG Merit (₹10,000 a year for +3 degree courses such as BA, BSc, BCom, BBA, BCA), PG Merit (₹15,000 a year for MA, MSc, MCom and similar) and Technical & Professional Merit (₹20,000 a year for courses such as BTech, MBBS, BPharm, nursing, agriculture, MBA and MCA). Students in colleges inside and outside Odisha can apply.",
      "Scholarships are shared out among districts and blocks, and students are picked in order of their marks in the last exam. Once selected, the scholarship continues every year until the course ends. The 2026-27 state budget continues the scheme.",
    ],
    hi: [
      "ई-मेधाबृत्ति ओडिशा उच्च शिक्षा विभाग की मेरिट-कम-मीन्स छात्रवृत्ति है। यह मुख्यमंत्री मेधावी छात्र प्रोत्साहन योजना का मुख्य हिस्सा है, जिसमें व्यासकवि फ़कीर मोहन और गोपबंधु शिक्षा सहायता छात्रवृत्तियाँ भी आती हैं।",
      "इसके तीन प्रकार हैं: UG मेरिट (BA, BSc, BCom, BBA, BCA जैसे +3 डिग्री कोर्स के लिए हर साल ₹10,000), PG मेरिट (MA, MSc, MCom जैसे कोर्स के लिए हर साल ₹15,000) और तकनीकी व प्रोफ़ेशनल मेरिट (BTech, MBBS, BPharm, नर्सिंग, कृषि, MBA, MCA जैसे कोर्स के लिए हर साल ₹20,000)। ओडिशा के अंदर और बाहर के कॉलेजों के विद्यार्थी आवेदन कर सकते हैं।",
      "छात्रवृत्तियाँ ज़िलों और ब्लॉकों में बाँटी जाती हैं, और विद्यार्थियों को पिछली परीक्षा के अंकों के क्रम से चुना जाता है। एक बार चुने जाने पर कोर्स पूरा होने तक हर साल छात्रवृत्ति मिलती रहती है। 2026-27 के राज्य बजट में यह योजना जारी है।",
    ],
  },
  benefits: {
    en: [
      "UG Merit: ₹10,000 a year (₹30,000 for a 3-year degree).",
      "PG Merit: ₹15,000 a year (₹30,000 for a 2-year course).",
      "Technical & Professional Merit: ₹20,000 a year for the full course.",
      "Paid by DBT into your Aadhaar-linked bank account and renewed automatically each year.",
    ],
    hi: [
      "UG मेरिट: हर साल ₹10,000 (3 साल की डिग्री में ₹30,000)।",
      "PG मेरिट: हर साल ₹15,000 (2 साल के कोर्स में ₹30,000)।",
      "तकनीकी और प्रोफ़ेशनल मेरिट: पूरे कोर्स में हर साल ₹20,000।",
      "DBT से आपके आधार से जुड़े बैंक खाते में, और हर साल अपने-आप नवीनीकरण।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a permanent resident of Odisha.",
      "Your family's total income from all sources is ₹8 lakh a year or less.",
      "You scored at least 55% in the qualifying exam (+2 for UG and technical courses; +3 degree for PG and master's professional courses).",
      "You are a regular student in a recognised college or institution, and you apply in the first year of the course.",
    ],
    hi: [
      "आप ओडिशा के स्थायी निवासी हैं।",
      "सभी स्रोतों से परिवार की कुल सालाना आय ₹8 लाख या उससे कम है।",
      "आपने योग्यता परीक्षा में कम से कम 55% अंक पाए हैं (UG और तकनीकी कोर्स के लिए +2; PG और मास्टर्स प्रोफ़ेशनल कोर्स के लिए +3 डिग्री)।",
      "आप किसी मान्यता प्राप्त कॉलेज या संस्थान के नियमित विद्यार्थी हैं, और कोर्स के पहले साल में आवेदन करते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Students already getting another State or Central government scholarship.",
      "Students in open universities, distance or correspondence courses.",
      "Diploma students (for the technical category), and M.Phil, Ph.D, B.Ed and M.Ed students.",
      "Students studying abroad, or in institutions not recognised by the regulator (AICTE, UGC, medical council, etc.).",
      "Students taking a second course at the same level after finishing one.",
    ],
    hi: [
      "जिन्हें पहले से राज्य या केंद्र सरकार की कोई दूसरी छात्रवृत्ति मिलती है।",
      "ओपन यूनिवर्सिटी, दूरस्थ या पत्राचार कोर्स के विद्यार्थी।",
      "डिप्लोमा विद्यार्थी (तकनीकी श्रेणी के लिए), और M.Phil, Ph.D, B.Ed, M.Ed के विद्यार्थी।",
      "विदेश में पढ़ने वाले, या नियामक (AICTE, UGC, मेडिकल काउंसिल आदि) से मान्यता न रखने वाले संस्थानों के विद्यार्थी।",
      "एक कोर्स पूरा करके उसी स्तर का दूसरा कोर्स करने वाले विद्यार्थी।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the State Scholarship Portal (scholarship.odisha.gov.in) with your Aadhaar.",
        "Choose e-Medhabruti (UG Merit, PG Merit or Technical & Professional Merit) and fill in the form.",
        "Upload your documents and submit. Your college verifies the application on the portal.",
        "Selected students are paid by DBT; renewals in later years only need Aadhaar OTP re-verification.",
      ],
      hi: [
        "राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) पर आधार से रजिस्टर करें।",
        "ई-मेधाबृत्ति (UG मेरिट, PG मेरिट या तकनीकी व प्रोफ़ेशनल मेरिट) चुनें और फ़ॉर्म भरें।",
        "दस्तावेज़ अपलोड करके जमा करें। आपका कॉलेज पोर्टल पर आवेदन की जाँच करता है।",
        "चुने गए विद्यार्थियों को DBT से पैसा मिलता है; अगले सालों में नवीनीकरण के लिए सिर्फ़ आधार OTP से दोबारा पुष्टि करनी होती है।",
      ],
    },
  },
  documents: {
    en: [
      "Resident certificate from the Tahasildar",
      "Income certificate for the current year from the Tahasildar",
      "Mark sheet of the qualifying exam",
      "College ID card (or a letter from the college)",
      "Aadhaar card and passbook of your Aadhaar-linked bank account",
    ],
    hi: [
      "तहसीलदार का निवास प्रमाण पत्र",
      "तहसीलदार का चालू साल का आय प्रमाण पत्र",
      "योग्यता परीक्षा की अंकतालिका",
      "कॉलेज का पहचान पत्र (या कॉलेज का पत्र)",
      "आधार कार्ड और आधार से जुड़े बैंक खाते की पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "I missed applying in my first year. Can I still apply?", hi: "पहले साल में आवेदन छूट गया। क्या अब कर सकता हूँ?" },
      a: {
        en: "Possibly. If seats are left for your year of admission, a later application can be considered, but you only get the scholarship for the remaining years.",
        hi: "हो सकता है। अगर आपके दाखिले वाले साल की सीटें बची हों, तो बाद का आवेदन देखा जा सकता है, पर छात्रवृत्ति सिर्फ़ बाकी सालों की मिलेगी।",
      },
    },
    {
      q: { en: "Is 55% enough to get it?", hi: "क्या 55% अंक काफ़ी हैं?" },
      a: {
        en: "55% is only the minimum. Seats are limited and given in order of marks within each district and block, so higher marks improve your chances.",
        hi: "55% सिर्फ़ न्यूनतम सीमा है। सीटें सीमित हैं और हर ज़िले व ब्लॉक में अंकों के क्रम से दी जाती हैं, इसलिए ज़्यादा अंक होने पर मौका बढ़ता है।",
      },
    },
  ],

  officialUrl: "https://scholarship.odisha.gov.in/",
  sources: [
    "https://dhe.odisha.gov.in/sites/default/files/2024-10/Guidelines%20for%20scholarship%20under%20Mukhyamantri%20medhabi%20chhatra%20protsahan%20yojana%20for%20the%20AY%202023-24.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://dhe.odisha.gov.in/en/dhe-schemes-scholarship/guidelines",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
