import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-sc-professional-maintenance-allowance",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Maintenance Allowance for SC Students in Professional Courses", hi: "प्रोफ़ेशनल कोर्स के SC छात्रों के लिए निर्वाह भत्ता" },
  shortDescription: {
    en: "SC students in Maharashtra doing professional courses and living in a hostel get ₹500 to ₹1,000 a month for 10 months for books, food and lodging, on top of the post-matric scholarship.",
    hi: "महाराष्ट्र में प्रोफ़ेशनल कोर्स करने और हॉस्टल में रहने वाले SC छात्रों को पोस्ट-मैट्रिक छात्रवृत्ति के अलावा किताबों, खाने और रहने के लिए 10 महीने तक ₹500 से ₹1,000 महीना मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["maintenance allowance", "sc", "hostel", "engineering", "medical", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
    incomeUpTo(250_000),
  ),

  details: {
    en: ["This state allowance is an extra help for Scheduled Caste students in professional courses such as engineering, medicine, agriculture or MBA who already get the Government of India post-matric scholarship and live in a hostel.", "It helps pay for books, stationery, food and lodging from the date you join the hostel until your exam, for up to 10 months a year."],
    hi: ["यह राज्य का भत्ता इंजीनियरिंग, मेडिकल, कृषि या MBA जैसे प्रोफ़ेशनल कोर्स के उन अनुसूचित जाति के छात्रों के लिए अतिरिक्त मदद है, जिन्हें पहले से भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति मिलती है और जो हॉस्टल में रहते हैं।", "यह हॉस्टल में आने की तारीख़ से परीक्षा तक, साल में 10 महीने तक, किताबों, स्टेशनरी, खाने और रहने के ख़र्च में मदद करता है।"],
  },
  benefits: {
    en: ["In a government hostel: ₹700 a month for 4–5 year courses and ₹500 a month for shorter courses.", "Eligible but not given a government hostel seat: ₹1,000 a month for 4–5 year courses, ₹700 for 2–3 year courses and ₹500 for courses under 2 years.", "Paid for up to 10 months a year."],
    hi: ["सरकारी हॉस्टल में: 4–5 साल के कोर्स के लिए ₹700 महीना और छोटे कोर्स के लिए ₹500 महीना।", "पात्र होने पर भी सरकारी हॉस्टल न मिले तो: 4–5 साल के कोर्स के लिए ₹1,000, 2–3 साल के कोर्स के लिए ₹700 और 2 साल से छोटे कोर्स के लिए ₹500 महीना।", "साल में 10 महीने तक मिलता है।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste student living in Maharashtra.", "Studying a professional course and living in a hostel (government, college or outside).", "Already a holder of the Government of India post-matric scholarship.", "Family income up to ₹2.5 lakh a year."],
    hi: ["महाराष्ट्र में रहने वाला अनुसूचित जाति का छात्र।", "प्रोफ़ेशनल कोर्स कर रहा हो और हॉस्टल (सरकारी, कॉलेज का या बाहर) में रहता हो।", "पहले से भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति पा रहा हो।", "परिवार की सालाना आय ₹2.5 लाख तक हो।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Maintenance Allowance for student Studying in professional courses', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Maintenance Allowance for student Studying in professional courses' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A178A7905AEC2C82CFA6A7ADA9024B0C242EEB3AA7065D22A", "https://sjsa.maharashtra.gov.in/en/scheme/subsistence-allowance-tuition-allowance-to-hostel-students-affiliated-to-vocational-courses/"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
