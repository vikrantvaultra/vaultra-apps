import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-vjnt-sbc-freeship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Tuition Fee and Exam Fee Freeship for VJNT and SBC Students", hi: "VJNT और SBC छात्रों के लिए ट्यूशन फ़ीस और परीक्षा फ़ीस फ़्रीशिप" },
  shortDescription: {
    en: "VJNT and SBC students in Maharashtra admitted through CAP to professional courses get 100% of tuition and exam fees paid, including in private unaided colleges.",
    hi: "CAP से प्रोफ़ेशनल कोर्स में दाख़िल महाराष्ट्र के VJNT और SBC छात्रों को 100% ट्यूशन और परीक्षा फ़ीस मिलती है, प्राइवेट बिना-अनुदान कॉलेजों में भी।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["freeship", "vjnt", "sbc", "fee reimbursement", "engineering", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "obc"), { en: "Belongs to the VJNT (Vimukta Jati / Nomadic Tribes) or SBC category", hi: "VJNT (विमुक्त जाति / घुमंतू जनजाति) या SBC वर्ग से हो" }),
  ),

  details: {
    en: ["This freeship, running since 2006-07, pays the full fee set by the Fee Regulating Authority for VJNT and SBC students admitted to professional courses through CAP in government, aided and unaided colleges.", "It covers courses such as engineering, pharmacy, hotel management, MBA, MCA, medical and allied degrees admitted through the common entrance process, agriculture courses, and B.Ed and D.Ed."],
    hi: ["2006-07 से चल रही यह फ़्रीशिप, सरकारी, अनुदानित और बिना-अनुदान कॉलेजों में CAP से प्रोफ़ेशनल कोर्स में दाख़िल VJNT और SBC छात्रों की, शुल्क नियामक प्राधिकरण से तय पूरी फ़ीस देती है।", "इसमें इंजीनियरिंग, फ़ार्मेसी, होटल मैनेजमेंट, MBA, MCA, सामान्य प्रवेश प्रक्रिया से दाख़िल मेडिकल व उससे जुड़ी डिग्रियाँ, कृषि कोर्स, और B.Ed व D.Ed शामिल हैं।"],
  },
  benefits: {
    en: ["100% of tuition and exam fees approved by the fee committee.", "Paid each year until the course is completed within its normal duration."],
    hi: ["फ़ीस समिति से मंज़ूर ट्यूशन और परीक्षा फ़ीस का 100%।", "कोर्स की सामान्य अवधि में पूरा होने तक हर साल मिलती है।"],
  },
  eligibilityText: {
    en: ["Belongs to the VJNT or SBC category and lives in Maharashtra, with a non-creamy layer or income certificate.", "Studying a post-matric course in a government, aided or unaided institution in Maharashtra.", "For professional courses, admission through the CAP round; deemed university admissions are not covered.", "Can be claimed for one course at a time and for at most two professional courses.", "Must pass every year; no payment for a year you fail."],
    hi: ["VJNT या SBC वर्ग से हो और महाराष्ट्र में रहता हो, और नॉन-क्रीमी लेयर या आय प्रमाण पत्र हो।", "महाराष्ट्र के सरकारी, अनुदानित या बिना-अनुदान संस्थान में पोस्ट-मैट्रिक कोर्स कर रहा हो।", "प्रोफ़ेशनल कोर्स में CAP राउंड से दाख़िला; डीम्ड विश्वविद्यालय के दाख़िले शामिल नहीं।", "एक समय में एक कोर्स के लिए, और ज़्यादा से ज़्यादा दो प्रोफ़ेशनल कोर्स के लिए ली जा सकती है।", "हर साल पास होना ज़रूरी; फ़ेल होने वाले साल का पैसा नहीं मिलता।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Tuition Fees and Examination Fees to VJNT Students / Tuition Fees and Examination Fees to SBC Students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Tuition Fees and Examination Fees to VJNT Students / Tuition Fees and Examination Fees to SBC Students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAC3D52BF09BB773555F3C82D946AC992C39B99CA73982F62", "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1D7F9196D9D63BED796B8715593324631CD0734AB93952ED"],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
