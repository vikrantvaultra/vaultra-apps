import { all, any, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-post-matric-scholarship",
  name: { en: "UP Post-Matric (Dashmottar) Scholarship", hi: "उत्तर प्रदेश दशमोत्तर छात्रवृत्ति" },
  aka: ["UP Scholarship", "Dashmottar Chhatravritti", "UP post matric scholarship"],
  shortDescription: {
    en: "Students in Uttar Pradesh from Class 11 to postgraduate level get their fees reimbursed and a maintenance allowance if family income is within ₹2.5 lakh (SC/ST) or ₹2 lakh (others).",
    hi: "उत्तर प्रदेश में कक्षा 11 से पोस्ट-ग्रेजुएशन तक के छात्रों को फ़ीस की भरपाई और भत्ता मिलता है, अगर परिवार की आय SC/ST के लिए ₹2.5 लाख और बाकी के लिए ₹2 लाख तक हो।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Social Welfare, Backward Classes Welfare and Minority Welfare Departments, Government of Uttar Pradesh",
    hi: "समाज कल्याण, पिछड़ा वर्ग कल्याण और अल्पसंख्यक कल्याण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["education", "minority"],
  tags: ["scholarship", "post matric", "fee reimbursement", "college", "students", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(isTrue("student"), { en: "Studying in Class 11 or above", hi: "कक्षा 11 या उससे ऊपर पढ़ रहे हों" }),
    labelled(
      any(
        all(when("caste", "in", ["sc", "st", "pvtg"]), incomeUpTo(250_000)),
        all(when("caste", "in", ["general", "obc"]), incomeUpTo(200_000)),
      ),
      {
        en: "Family income up to ₹2.5 lakh (SC/ST) or ₹2 lakh (General, OBC, minority)",
        hi: "परिवार की आय ₹2.5 लाख (SC/ST) या ₹2 लाख (सामान्य, OBC, अल्पसंख्यक) तक हो",
      },
    ),
  ),

  details: {
    en: [
      "The Dashmottar (post-matric) scholarship helps students in Uttar Pradesh pay for their studies after Class 10, from Class 11 and 12 up to graduation, postgraduate and professional courses.",
      "It has a scholarship part (a maintenance allowance) and a fee reimbursement part, which pays back the compulsory non-refundable fees charged by your college, up to the limits set for each course. The amount depends on your category, course and whether you stay in a hostel.",
      "Different departments handle different groups: Social Welfare for SC, ST and General students, Backward Classes Welfare for OBC students, and Minority Welfare for minority students. All applications go through the single portal scholarship.up.gov.in, and money is paid by DBT.",
    ],
    hi: [
      "दशमोत्तर छात्रवृत्ति उत्तर प्रदेश के छात्रों को 10वीं के बाद की पढ़ाई में मदद करती है, कक्षा 11 और 12 से लेकर स्नातक, पोस्ट-ग्रेजुएट और प्रोफ़ेशनल कोर्स तक।",
      "इसमें एक हिस्सा छात्रवृत्ति (भत्ता) है और दूसरा फ़ीस की भरपाई, जिसमें कॉलेज की अनिवार्य न लौटने वाली फ़ीस हर कोर्स की तय सीमा तक वापस मिलती है। राशि आपकी श्रेणी, कोर्स और हॉस्टल में रहने या न रहने पर निर्भर करती है।",
      "अलग-अलग वर्गों को अलग विभाग देखते हैं: SC, ST और सामान्य के लिए समाज कल्याण, OBC के लिए पिछड़ा वर्ग कल्याण, और अल्पसंख्यकों के लिए अल्पसंख्यक कल्याण। सभी आवेदन एक ही पोर्टल scholarship.up.gov.in पर होते हैं, और पैसा DBT से मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Reimbursement of compulsory, non-refundable college fees, up to the cap fixed for your course.",
      "A yearly maintenance allowance that depends on the course and whether you are a day scholar or hostel resident.",
      "Money paid directly into the student's Aadhaar-linked bank account.",
    ],
    hi: [
      "कॉलेज की अनिवार्य, न लौटने वाली फ़ीस की भरपाई, आपके कोर्स की तय सीमा तक।",
      "कोर्स और डे-स्कॉलर या हॉस्टल में रहने के हिसाब से सालाना भत्ता।",
      "पैसा सीधे छात्र के आधार से जुड़े बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Uttar Pradesh, studying in Class 11 or above at a recognised institution registered on the portal.",
      "SC and ST students: family income up to ₹2.5 lakh a year.",
      "General, OBC and minority students: family income up to ₹2 lakh a year.",
      "The income certificate must be issued by a revenue officer (Tehsildar or above).",
      "Must be a regular student with the required attendance.",
    ],
    hi: [
      "उत्तर प्रदेश के स्थायी निवासी, जो पोर्टल पर रजिस्टर्ड किसी मान्यता प्राप्त संस्थान में कक्षा 11 या उससे ऊपर पढ़ रहे हों।",
      "SC और ST छात्र: परिवार की सालाना आय ₹2.5 लाख तक।",
      "सामान्य, OBC और अल्पसंख्यक छात्र: परिवार की सालाना आय ₹2 लाख तक।",
      "आय प्रमाण पत्र राजस्व अधिकारी (तहसीलदार या ऊपर) का बना होना चाहिए।",
      "नियमित छात्र हों और ज़रूरी हाज़िरी पूरी हो।",
    ],
  },
  exclusions: {
    en: [
      "Students whose family income is above the limit for their category.",
      "Students getting another scholarship for the same course in the same year.",
      "Students in distance or correspondence courses, or at institutions not registered on the portal.",
      "Income certificates from private employers or plain-paper self-declarations are not accepted.",
    ],
    hi: [
      "जिनके परिवार की आय उनकी श्रेणी की सीमा से ज़्यादा है।",
      "जो उसी साल उसी कोर्स के लिए कोई दूसरी छात्रवृत्ति ले रहे हैं।",
      "दूरस्थ या पत्राचार कोर्स के छात्र, या पोर्टल पर रजिस्टर्ड न होने वाले संस्थानों के छात्र।",
      "निजी नियोक्ता के या सादे काग़ज़ पर लिखे आय प्रमाण पत्र मान्य नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to scholarship.up.gov.in, complete the one-time registration (OTR) and choose the post-matric form for your category.",
        "Fill in your course, institution, income, caste and bank details, and upload the documents. Submit and print the form.",
        "Give the signed printout and documents to your institution within the deadline. The institution and district office verify it online before payment.",
      ],
      hi: [
        "scholarship.up.gov.in पर जाएँ, वन-टाइम रजिस्ट्रेशन (OTR) पूरा करें और अपनी श्रेणी का दशमोत्तर फ़ॉर्म चुनें।",
        "कोर्स, संस्थान, आय, जाति और बैंक की जानकारी भरें और दस्तावेज़ अपलोड करें। फ़ॉर्म जमा करके प्रिंट निकालें।",
        "दस्तख़त किया प्रिंट और दस्तावेज़ तय तारीख़ तक अपने संस्थान में जमा करें। भुगतान से पहले संस्थान और ज़िला कार्यालय ऑनलाइन जाँच करते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Income certificate from the Tehsil",
      "Caste certificate (SC, ST, OBC)",
      "Domicile certificate of Uttar Pradesh",
      "Previous class marksheet",
      "Fee receipt and admission proof",
      "Aadhaar-linked bank account in the student's name",
    ],
    hi: [
      "आधार कार्ड",
      "तहसील से बना आय प्रमाण पत्र",
      "जाति प्रमाण पत्र (SC, ST, OBC)",
      "उत्तर प्रदेश का निवास प्रमाण पत्र",
      "पिछली कक्षा की मार्कशीट",
      "फ़ीस की रसीद और दाखिले का सबूत",
      "छात्र के नाम पर आधार से जुड़ा बैंक खाता",
    ],
  },
  faqs: [
    {
      q: { en: "When do applications open?", hi: "आवेदन कब खुलते हैं?" },
      a: {
        en: "The portal publishes a timetable every year, usually in July. For 2026–27 the post-matric timetable was issued on 20 July 2026. Check the dates on scholarship.up.gov.in.",
        hi: "पोर्टल हर साल समय-सारणी जारी करता है, आमतौर पर जुलाई में। 2026–27 के लिए दशमोत्तर समय-सारणी 20 जुलाई 2026 को जारी हुई। तारीख़ें scholarship.up.gov.in पर देखें।",
      },
    },
    {
      q: { en: "Do I have to apply again every year?", hi: "क्या हर साल फिर से आवेदन करना होगा?" },
      a: {
        en: "Yes. After the first year you fill in the renewal form on the same portal each year you continue the course.",
        hi: "हाँ। पहले साल के बाद कोर्स जारी रहने पर हर साल उसी पोर्टल पर रिन्यूअल फ़ॉर्म भरना होता है।",
      },
    },
  ],

  officialUrl: "https://scholarship.up.gov.in/",
  sources: [
    "https://scholarship.up.gov.in/",
    "https://www.indiascholarships.in/scholarships/up-post-matric-scholarship-dashmottar/income-limit",
    "https://www.buddy4study.com/article/top-scholarships-for-students-of-uttar-pradesh",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
