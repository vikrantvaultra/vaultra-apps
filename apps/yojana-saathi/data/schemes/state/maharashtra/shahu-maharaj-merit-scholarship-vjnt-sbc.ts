import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shahu-maharaj-merit-scholarship-vjnt-sbc",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship (VJNT and SBC, Class 11–12)", hi: "राजर्षि छत्रपति शाहू महाराज गुणवत्ता छात्रवृत्ति (VJNT और SBC, कक्षा 11–12)" },
  shortDescription: {
    en: "VJNT and SBC students in Maharashtra who scored 75% or more in class 10 get ₹300 a month for 10 months in class 11 and 12, with no income limit.",
    hi: "महाराष्ट्र के जिन VJNT और SBC छात्रों ने कक्षा 10 में 75% या ज़्यादा अंक पाए, उन्हें कक्षा 11 और 12 में 10 महीने तक ₹300 महीना मिलता है, कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["merit scholarship", "vjnt", "sbc", "class 11", "class 12", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 300, period: "monthly", kind: "cash", maxMonths: 20 },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "obc"), { en: "Belongs to the VJNT (Vimukta Jati / Nomadic Tribes) or SBC category", hi: "VJNT (विमुक्त जाति / घुमंतू जनजाति) या SBC वर्ग से हो" }),
  ),

  details: {
    en: ["This merit scholarship rewards VJNT and SBC students who do well in class 10, to help them through junior college.", "It can be taken along with the post-matric scholarship and freeship."],
    hi: ["यह गुणवत्ता छात्रवृत्ति कक्षा 10 में अच्छा करने वाले VJNT और SBC छात्रों को जूनियर कॉलेज की पढ़ाई में मदद के लिए दी जाती है।", "इसे पोस्ट-मैट्रिक छात्रवृत्ति और फ़्रीशिप के साथ लिया जा सकता है।"],
  },
  benefits: {
    en: ["₹300 a month for 10 months (₹3,000 a year).", "Paid in class 11 and, after passing class 11, again in class 12."],
    hi: ["10 महीने तक ₹300 महीना (साल में ₹3,000)।", "कक्षा 11 में, और कक्षा 11 पास करने पर फिर कक्षा 12 में मिलता है।"],
  },
  eligibilityText: {
    en: ["Belongs to Vimukta Jati, a Nomadic Tribe or the Special Backward Class, and lives in Maharashtra.", "Scored at least 75% in class 10, with no gap in education.", "Studying in class 11 or 12 in a junior college.", "No family income limit."],
    hi: ["विमुक्त जाति, घुमंतू जनजाति या विशेष पिछड़ा वर्ग से हो और महाराष्ट्र में रहता हो।", "कक्षा 10 में कम से कम 75% अंक, और पढ़ाई में गैप न हो।", "जूनियर कॉलेज में कक्षा 11 या 12 में पढ़ रहा हो।", "परिवार की आय की कोई सीमा नहीं।"],
  },
  documents: {
    en: ["Caste certificate issued by the Government of Maharashtra", "Class 10 mark sheet", "School leaving certificate"],
    hi: ["महाराष्ट्र सरकार का जाति प्रमाण पत्र", "कक्षा 10 की मार्कशीट", "स्कूल लीविंग सर्टिफ़िकेट"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A91E82A5FCFBAAB0483ADB704B47ED161F43EE2545EC67678"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
