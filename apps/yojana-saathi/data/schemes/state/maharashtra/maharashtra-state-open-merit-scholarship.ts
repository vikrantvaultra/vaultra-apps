import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-state-open-merit-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "State Government Open Merit Scholarship (Degree)", hi: "राज्य सरकार ओपन मेरिट छात्रवृत्ति (डिग्री)" },
  shortDescription: {
    en: "Students in Maharashtra who scored at least 60% in class 12 and study arts, commerce, science or law at degree level can be selected on merit for ₹100 a month.",
    hi: "महाराष्ट्र के जिन छात्रों ने कक्षा 12 में कम से कम 60% अंक पाए और जो डिग्री स्तर पर आर्ट्स, कॉमर्स, साइंस या लॉ पढ़ते हैं, उन्हें मेरिट पर ₹100 महीने की छात्रवृत्ति मिल सकती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Directorate of Higher Education, Higher and Technical Education Department, Government of Maharashtra", hi: "उच्च शिक्षा निदेशालय, उच्च एवं तकनीकी शिक्षा विभाग, महाराष्ट्र सरकार" },
  categories: ["education"],
  tags: ["merit scholarship", "open merit", "graduation", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 100, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
  ),

  details: {
    en: ["This long-running merit scholarship of the Directorate of Higher Education has a fixed number of awards (about 1,208) shared out faculty-wise on merit.", "New awards are sanctioned by the Directorate and renewals through the Joint Director's office for your college. There is no caste or income condition."],
    hi: ["उच्च शिक्षा निदेशालय की यह पुरानी मेरिट छात्रवृत्ति तय संख्या (लगभग 1,208) में मेरिट के आधार पर संकाय-वार दी जाती है।", "नई छात्रवृत्ति निदेशालय मंज़ूर करता है और नवीनीकरण आपके कॉलेज के सहसंचालक कार्यालय से होता है। इसमें जाति या आय की कोई शर्त नहीं है।"],
  },
  benefits: {
    en: ["₹100 a month paid into the student's bank account."],
    hi: ["छात्र के बैंक खाते में ₹100 महीना।"],
  },
  eligibilityText: {
    en: ["Resident of Maharashtra studying in Maharashtra.", "At least 60% marks in class 12.", "Studying a degree in arts, commerce, science or law."],
    hi: ["महाराष्ट्र का निवासी, जो महाराष्ट्र में पढ़ता हो।", "कक्षा 12 में कम से कम 60% अंक।", "आर्ट्स, कॉमर्स, साइंस या लॉ में डिग्री कर रहा हो।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'State Government Open Merit Scholarship', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'State Government Open Merit Scholarship' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AED33CA69606C0CC2EF25388FB8EC7046E5E9B1E993657CEB"],
  lastVerified: "2026-10-06",
  launchedYear: 1964,
  status: "active",
};

export default scheme;
