import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-open-merit-scholarship-junior-college",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Open Merit Scholarship in Junior College", hi: "जूनियर कॉलेज में ओपन मेरिट छात्रवृत्ति" },
  shortDescription: {
    en: "Students in Maharashtra who scored 60% or more in class 10 in their first attempt get ₹50 a month for 10 months in class 11 and 12.",
    hi: "महाराष्ट्र के जिन छात्रों ने पहली बार में कक्षा 10 में 60% या ज़्यादा अंक पाए, उन्हें कक्षा 11 और 12 में 10 महीने तक ₹50 महीना मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "School Education and Sports Department, Government of Maharashtra", hi: "स्कूल शिक्षा एवं खेल विभाग, महाराष्ट्र सरकार" },
  categories: ["education"],
  tags: ["merit scholarship", "class 11", "class 12", "junior college", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 50, period: "monthly", kind: "cash", maxMonths: 20 },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
  ),

  details: {
    en: ["This School Education Department scholarship encourages students who do well in the SSC exam to continue into junior college.", "It is open to all categories and is renewed for class 12 if you score at least 50% at the end of class 11."],
    hi: ["स्कूल शिक्षा विभाग की यह छात्रवृत्ति SSC परीक्षा में अच्छा करने वाले छात्रों को जूनियर कॉलेज में पढ़ाई जारी रखने के लिए प्रोत्साहित करती है।", "यह सभी वर्गों के लिए है, और कक्षा 11 के अंत में कम से कम 50% अंक आने पर कक्षा 12 के लिए नवीनीकृत होती है।"],
  },
  benefits: {
    en: ["₹50 a month for 10 months (₹500 a year) in class 11 and class 12."],
    hi: ["कक्षा 11 और कक्षा 12 में 10 महीने तक ₹50 महीना (साल में ₹500)।"],
  },
  eligibilityText: {
    en: ["Studying in class 11 or 12 in Maharashtra.", "At least 60% in the SSC (class 10) exam in the first attempt.", "For renewal in class 12, at least 50% at the end of class 11."],
    hi: ["महाराष्ट्र में कक्षा 11 या 12 में पढ़ रहा हो।", "पहली बार में SSC (कक्षा 10) परीक्षा में कम से कम 60% अंक।", "कक्षा 12 में नवीनीकरण के लिए कक्षा 11 के अंत में कम से कम 50% अंक।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Open Merit Scholarships in Junior College', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Open Merit Scholarships in Junior College' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD2BE9F3A5300828BE4EFF8979CAC37F89BF462A7353CD060"],
  lastVerified: "2026-10-06",
  launchedYear: 1960,
  status: "active",
};

export default scheme;
