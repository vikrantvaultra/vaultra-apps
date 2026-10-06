import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "eklavya-scholarship-maharashtra",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Eklavya Scholarship", hi: "एकलव्य छात्रवृत्ति" },
  shortDescription: {
    en: "Postgraduate students in Maharashtra who scored 60% (arts, commerce, law) or 70% (science) in graduation get ₹5,000 a year, if parents earn up to ₹75,000 a year.",
    hi: "महाराष्ट्र के जिन पोस्ट-ग्रेजुएट छात्रों ने ग्रेजुएशन में 60% (आर्ट्स, कॉमर्स, लॉ) या 70% (साइंस) अंक पाए, उन्हें ₹5,000 सालाना मिलते हैं, अगर माता-पिता की सालाना आय ₹75,000 तक है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Directorate of Higher Education, Higher and Technical Education Department, Government of Maharashtra", hi: "उच्च शिक्षा निदेशालय, उच्च एवं तकनीकी शिक्षा विभाग, महाराष्ट्र सरकार" },
  categories: ["education"],
  tags: ["eklavya", "postgraduate", "merit scholarship", "low income", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    incomeUpTo(75_000),
  ),

  details: {
    en: ["The Eklavya Scholarship of the Directorate of Higher Education supports bright students from very low-income families to go on to a master's degree.", "Selection is on merit among eligible applicants. Students must not take up any job while getting the scholarship."],
    hi: ["उच्च शिक्षा निदेशालय की एकलव्य छात्रवृत्ति बहुत कम आय वाले परिवारों के होनहार छात्रों को मास्टर डिग्री तक पढ़ने में मदद करती है।", "पात्र आवेदकों में से मेरिट के आधार पर चयन होता है। छात्रवृत्ति मिलने के दौरान छात्र कोई नौकरी नहीं कर सकता।"],
  },
  benefits: {
    en: ["₹5,000 a year for selected postgraduate students."],
    hi: ["चुने गए पोस्ट-ग्रेजुएट छात्रों को ₹5,000 सालाना।"],
  },
  eligibilityText: {
    en: ["Resident of Maharashtra studying a postgraduate course in Maharashtra.", "At least 60% in an arts, commerce or law degree, or 70% in a science degree.", "Parents' annual income up to ₹75,000.", "Not working full time or part time."],
    hi: ["महाराष्ट्र का निवासी, जो महाराष्ट्र में पोस्ट-ग्रेजुएट कोर्स कर रहा हो।", "आर्ट्स, कॉमर्स या लॉ की डिग्री में कम से कम 60%, या साइंस की डिग्री में 70%।", "माता-पिता की सालाना आय ₹75,000 तक।", "पूरे समय या आंशिक समय की कोई नौकरी न करता हो।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Eklavya Scholarship', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Eklavya Scholarship' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1655B141877065672B6A562E1EC5891E6D5A884AC6702F5D"],
  lastVerified: "2026-10-06",
  launchedYear: 1996,
  status: "active",
};

export default scheme;
