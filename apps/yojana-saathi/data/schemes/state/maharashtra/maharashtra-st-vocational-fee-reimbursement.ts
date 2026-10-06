import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-st-vocational-fee-reimbursement",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Vocational Education Fee Reimbursement for Tribal Students", hi: "आदिवासी छात्रों के लिए व्यावसायिक शिक्षा फ़ीस प्रतिपूर्ति" },
  shortDescription: {
    en: "ST students in Maharashtra doing professional courses like engineering, pharmacy, MBA or MCA, whose family earns more than ₹2.5 lakh, get their tuition and exam fees reimbursed.",
    hi: "इंजीनियरिंग, फ़ार्मेसी, MBA या MCA जैसे प्रोफ़ेशनल कोर्स करने वाले महाराष्ट्र के ST छात्रों को, जिनके परिवार की आय ₹2.5 लाख से ज़्यादा है, ट्यूशन और परीक्षा फ़ीस वापस मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Tribal Development Department, Government of Maharashtra", hi: "आदिवासी विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["fee reimbursement", "st", "tribal", "engineering", "mba", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    when("caste", "in", ["st", "pvtg"]),
  ),

  details: {
    en: ["This Tribal Development Department scheme covers ST students in vocational and professional courses such as engineering, pharmacy, animal husbandry, dairy technology, architecture, MBA and MCA.", "It is meant for families earning above ₹2.5 lakh, who are outside the Government of India post-matric scholarship."],
    hi: ["आदिवासी विकास विभाग की यह योजना इंजीनियरिंग, फ़ार्मेसी, पशुपालन, डेयरी तकनीक, आर्किटेक्चर, MBA और MCA जैसे व्यावसायिक और प्रोफ़ेशनल कोर्स के ST छात्रों के लिए है।", "यह ₹2.5 लाख से ज़्यादा आय वाले परिवारों के लिए है, जो भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति के दायरे से बाहर हैं।"],
  },
  benefits: {
    en: ["Tuition fee and exam fee, as per the approved college fee structure."],
    hi: ["मंज़ूर कॉलेज फ़ीस ढाँचे के अनुसार ट्यूशन फ़ीस और परीक्षा फ़ीस।"],
  },
  eligibilityText: {
    en: ["Scheduled Tribe student with Maharashtra domicile in a professional or vocational course.", "Family income above ₹2.5 lakh a year.", "Must pass the previous year's exam."],
    hi: ["महाराष्ट्र अधिवास वाला अनुसूचित जनजाति का छात्र, जो प्रोफ़ेशनल या व्यावसायिक कोर्स कर रहा हो।", "परिवार की सालाना आय ₹2.5 लाख से ज़्यादा हो।", "पिछले साल की परीक्षा पास की हो।"],
  },
  documents: {
    en: ["Caste certificate and caste validity certificate", "Maharashtra domicile certificate", "College admission receipt"],
    hi: ["जाति प्रमाण पत्र और जाति वैधता प्रमाण पत्र", "महाराष्ट्र अधिवास प्रमाण पत्र", "कॉलेज की दाख़िला रसीद"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Vocational Education Fee Reimbursement', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Vocational Education Fee Reimbursement' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A903EC510F2DCBF009D17A0AB763F0C2343B13AF0AB323366"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
