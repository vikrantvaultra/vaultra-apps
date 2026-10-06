import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-st-freeship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Tuition Fee and Exam Fee Freeship for Tribal Students", hi: "आदिवासी छात्रों के लिए ट्यूशन फ़ीस और परीक्षा फ़ीस फ़्रीशिप" },
  aka: ["ST Freeship"],
  shortDescription: {
    en: "ST students in Maharashtra whose family earns more than ₹2.5 lakh get their college tuition and exam fees paid by the state, as per the approved fee structure.",
    hi: "महाराष्ट्र के ST छात्रों को, जिनके परिवार की आय ₹2.5 लाख से ज़्यादा है, कॉलेज की ट्यूशन और परीक्षा फ़ीस मंज़ूर फ़ीस ढाँचे के अनुसार राज्य सरकार देती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Tribal Development Department, Government of Maharashtra", hi: "आदिवासी विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["freeship", "st", "tribal", "tuition fee", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    when("caste", "in", ["st", "pvtg"]),
  ),

  details: {
    en: ["ST students from families earning up to ₹2.5 lakh get fees through the Government of India post-matric scholarship. This state-funded freeship covers ST students whose family income is above ₹2.5 lakh.", "It reimburses tuition and exam fees as per the college's approved fee structure for post-matric courses."],
    hi: ["₹2.5 लाख तक आय वाले परिवारों के ST छात्रों को फ़ीस भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति से मिलती है। राज्य की यह फ़्रीशिप उन ST छात्रों के लिए है जिनके परिवार की आय ₹2.5 लाख से ज़्यादा है।", "इसमें पोस्ट-मैट्रिक कोर्स के लिए कॉलेज के मंज़ूर फ़ीस ढाँचे के अनुसार ट्यूशन और परीक्षा फ़ीस वापस मिलती है।"],
  },
  benefits: {
    en: ["Tuition fee and exam fee, as per the approved college fee structure.", "Paid every year you pass."],
    hi: ["मंज़ूर कॉलेज फ़ीस ढाँचे के अनुसार ट्यूशन फ़ीस और परीक्षा फ़ीस।", "हर साल पास होने पर मिलती है।"],
  },
  eligibilityText: {
    en: ["Scheduled Tribe student living in Maharashtra, studying a post-matric course.", "Family income above ₹2.5 lakh a year.", "Must pass each year; no payment for a year you fail."],
    hi: ["महाराष्ट्र में रहने वाला अनुसूचित जनजाति का छात्र, जो पोस्ट-मैट्रिक कोर्स कर रहा हो।", "परिवार की सालाना आय ₹2.5 लाख से ज़्यादा हो।", "हर साल पास होना ज़रूरी; फ़ेल होने वाले साल का पैसा नहीं मिलता।"],
  },
  documents: {
    en: ["Caste certificate", "Caste validity certificate", "Previous year's mark sheet"],
    hi: ["जाति प्रमाण पत्र", "जाति वैधता प्रमाण पत्र", "पिछले साल की मार्कशीट"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Tuition Fee & Exam Fee for Tribal Students (Freeship)', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Tuition Fee & Exam Fee for Tribal Students (Freeship)' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE7C10C1B9446574716EB93196C4CB29808753F77C61BEF29"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
