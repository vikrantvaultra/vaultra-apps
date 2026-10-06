import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-ebc-merit-scholarship-junior-college",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Merit Scholarship for Economically Backward Class Students (Class 11–12)", hi: "आर्थिक रूप से पिछड़े वर्ग के छात्रों के लिए मेरिट छात्रवृत्ति (कक्षा 11–12)" },
  shortDescription: {
    en: "Students from economically backward families in Maharashtra who scored at least 50% in class 10 in their first attempt get ₹80 to ₹160 a month for 10 months in class 11 and 12.",
    hi: "महाराष्ट्र के आर्थिक रूप से पिछड़े परिवारों के जिन छात्रों ने पहली बार में कक्षा 10 में कम से कम 50% अंक पाए, उन्हें कक्षा 11 और 12 में 10 महीने तक ₹80 से ₹160 महीना मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "School Education and Sports Department, Government of Maharashtra", hi: "स्कूल शिक्षा एवं खेल विभाग, महाराष्ट्र सरकार" },
  categories: ["education"],
  tags: ["merit scholarship", "ebc", "class 11", "class 12", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 80, period: "monthly", kind: "cash", maxMonths: 20 },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
  ),

  details: {
    en: ["This School Education Department scholarship helps students from economically backward families continue into junior college after doing well in class 10.", "The amount depends on whether the student is a girl or a boy and whether they live in a hostel. An income certificate from the Tahsildar is needed."],
    hi: ["स्कूल शिक्षा विभाग की यह छात्रवृत्ति आर्थिक रूप से पिछड़े परिवारों के छात्रों को कक्षा 10 में अच्छा करने के बाद जूनियर कॉलेज में पढ़ाई जारी रखने में मदद करती है।", "राशि इस पर निर्भर है कि छात्र लड़की है या लड़का, और हॉस्टल में रहता है या नहीं। तहसीलदार का आय प्रमाण पत्र ज़रूरी है।"],
  },
  benefits: {
    en: ["Boys: ₹140 a month in a hostel or ₹80 a month otherwise.", "Girls: ₹160 a month in a hostel or ₹100 a month otherwise.", "Paid for 10 months a year."],
    hi: ["लड़के: हॉस्टल में ₹140 महीना, नहीं तो ₹80 महीना।", "लड़कियाँ: हॉस्टल में ₹160 महीना, नहीं तो ₹100 महीना।", "साल में 10 महीने मिलता है।"],
  },
  eligibilityText: {
    en: ["Student from an economically backward family in class 11 or 12 in Maharashtra, with a Tahsildar's income certificate.", "At least 50% in the SSC (class 10) exam in the first attempt."],
    hi: ["महाराष्ट्र में कक्षा 11 या 12 में पढ़ने वाला आर्थिक रूप से पिछड़े परिवार का छात्र, जिसके पास तहसीलदार का आय प्रमाण पत्र हो।", "पहली बार में SSC (कक्षा 10) परीक्षा में कम से कम 50% अंक।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Merit Scholarships for Economically Backward Class Students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Merit Scholarships for Economically Backward Class Students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A28BFA30CC1E4590B8F718E4CDE619112BB546E172DF7EFEA"],
  lastVerified: "2026-10-06",
  launchedYear: 1960,
  status: "active",
};

export default scheme;
