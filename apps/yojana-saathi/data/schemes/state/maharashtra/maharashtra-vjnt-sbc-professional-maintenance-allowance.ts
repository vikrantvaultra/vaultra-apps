import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-vjnt-sbc-professional-maintenance-allowance",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Maintenance Allowance for VJNT and SBC Students in Professional Courses", hi: "प्रोफ़ेशनल कोर्स के VJNT और SBC छात्रों के लिए निर्वाह भत्ता" },
  shortDescription: {
    en: "VJNT and SBC students in professional courses like engineering or medicine, living in a college hostel or outside, get ₹500 to ₹1,000 a month for 10 months if family income is up to ₹1 lakh.",
    hi: "इंजीनियरिंग या मेडिकल जैसे प्रोफ़ेशनल कोर्स के VJNT और SBC छात्रों को, जो कॉलेज हॉस्टल या बाहर रहते हैं, ₹1 लाख तक पारिवारिक आय होने पर 10 महीने तक ₹500 से ₹1,000 महीना मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["maintenance allowance", "vjnt", "sbc", "hostel", "engineering", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "obc"), { en: "Belongs to the VJNT (Vimukta Jati / Nomadic Tribes) or SBC category", hi: "VJNT (विमुक्त जाति / घुमंतू जनजाति) या SBC वर्ग से हो" }),
    incomeUpTo(100_000),
  ),

  details: {
    en: ["This allowance helps VJNT and SBC students from very poor families with food and lodging while they study professional courses away from home. It is paid on top of the post-matric scholarship.", "It is for students who applied for a government hostel but could not get one, and who live in a hostel attached to the college or outside."],
    hi: ["यह भत्ता बहुत गरीब परिवारों के VJNT और SBC छात्रों को घर से दूर प्रोफ़ेशनल कोर्स पढ़ते समय खाने और रहने में मदद करता है। यह पोस्ट-मैट्रिक छात्रवृत्ति के अलावा मिलता है।", "यह उन छात्रों के लिए है जिन्होंने सरकारी हॉस्टल के लिए आवेदन किया पर जगह नहीं मिली, और जो कॉलेज से जुड़े हॉस्टल में या बाहर रहते हैं।"],
  },
  benefits: {
    en: ["College-attached hostel: ₹700 a month for 4–5 year courses and ₹500 a month for shorter courses.", "Living outside a government hostel: ₹1,000 a month for 4–5 year courses, ₹700 for 2–3 year courses and ₹500 for courses of 2 years or less.", "Paid for 10 months a year."],
    hi: ["कॉलेज से जुड़ा हॉस्टल: 4–5 साल के कोर्स के लिए ₹700 महीना और छोटे कोर्स के लिए ₹500 महीना।", "सरकारी हॉस्टल से बाहर रहने पर: 4–5 साल के कोर्स के लिए ₹1,000, 2–3 साल के कोर्स के लिए ₹700 और 2 साल या कम के कोर्स के लिए ₹500 महीना।", "साल में 10 महीने मिलता है।"],
  },
  eligibilityText: {
    en: ["Belongs to the VJNT or SBC category and lives in Maharashtra.", "Studying a professional course such as engineering, medicine, veterinary, architecture or agriculture.", "Eligible for the post-matric scholarship, with family income up to ₹1 lakh a year.", "Applied for a government hostel but did not get admission; not living in a government hostel."],
    hi: ["VJNT या SBC वर्ग से हो और महाराष्ट्र में रहता हो।", "इंजीनियरिंग, मेडिकल, पशु-चिकित्सा, आर्किटेक्चर या कृषि जैसा प्रोफ़ेशनल कोर्स कर रहा हो।", "पोस्ट-मैट्रिक छात्रवृत्ति का पात्र हो, और परिवार की सालाना आय ₹1 लाख तक हो।", "सरकारी हॉस्टल के लिए आवेदन किया पर जगह नहीं मिली; सरकारी हॉस्टल में न रहता हो।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADF6AE1F1FBCD6E5590683EDAFF0DF60958CB2C07261F364B"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
