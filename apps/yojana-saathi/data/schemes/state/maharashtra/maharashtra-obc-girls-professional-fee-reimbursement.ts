import { all, female, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-obc-girls-professional-fee-reimbursement",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Tuition and Exam Fee Reimbursement for OBC Girls in Professional Courses", hi: "प्रोफ़ेशनल कोर्स में पढ़ने वाली OBC लड़कियों के लिए ट्यूशन व परीक्षा फ़ीस प्रतिपूर्ति" },
  shortDescription: {
    en: "Non-creamy-layer OBC girls in Maharashtra admitted through CAP to professional courses get 100% of tuition and exam fees back, in government, aided or unaided colleges.",
    hi: "CAP से प्रोफ़ेशनल कोर्स में दाख़िल महाराष्ट्र की नॉन-क्रीमी लेयर OBC लड़कियों को सरकारी, अनुदानित या बिना-अनुदान कॉलेज में 100% ट्यूशन और परीक्षा फ़ीस वापस मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "women-child"],
  tags: ["girls free education", "obc", "freeship", "professional course", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    female(),
    when("caste", "eq", "obc"),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["This freeship for OBC girls comes from a July 2024 government decision to make professional education free for girls. It is for OBC girls whose family income is above the post-matric scholarship limit but within the non-creamy layer.", "It pays the full tuition and exam fee for professional courses, including at deemed universities as listed on MahaDBT."],
    hi: ["OBC लड़कियों के लिए यह फ़्रीशिप जुलाई 2024 के उस सरकारी निर्णय से आई है, जिसमें लड़कियों के लिए प्रोफ़ेशनल शिक्षा मुफ़्त की गई। यह उन OBC लड़कियों के लिए है जिनकी पारिवारिक आय पोस्ट-मैट्रिक छात्रवृत्ति की सीमा से ज़्यादा पर नॉन-क्रीमी लेयर के भीतर है।", "इसमें प्रोफ़ेशनल कोर्स की पूरी ट्यूशन और परीक्षा फ़ीस मिलती है, MahaDBT के अनुसार डीम्ड विश्वविद्यालयों में भी।"],
  },
  benefits: {
    en: ["100% of tuition and exam fees for professional courses.", "Paid every year until the course is completed, as long as you pass."],
    hi: ["प्रोफ़ेशनल कोर्स की ट्यूशन और परीक्षा फ़ीस का 100%।", "पास होते रहने पर कोर्स पूरा होने तक हर साल मिलती है।"],
  },
  eligibilityText: {
    en: ["OBC girl living in Maharashtra with a non-creamy layer certificate (family income up to ₹8 lakh).", "Admitted through CAP to a government-approved professional course.", "Must pass every year; changing from a professional to a non-professional course ends the benefit."],
    hi: ["महाराष्ट्र में रहने वाली OBC लड़की, जिसके पास नॉन-क्रीमी लेयर प्रमाण पत्र हो (परिवार की आय ₹8 लाख तक)।", "CAP से सरकार से मान्य प्रोफ़ेशनल कोर्स में दाख़िला।", "हर साल पास होना ज़रूरी; प्रोफ़ेशनल से नॉन-प्रोफ़ेशनल कोर्स में जाने पर लाभ बंद हो जाता है।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Payment of Tuition Fees and Examination Fees to OBC Girls Pursuing Professional Courses', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Payment of Tuition Fees and Examination Fees to OBC Girls Pursuing Professional Courses' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A861D18FEEFAC4F5F6568CABC51F37B2D8E783259DE953673"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
