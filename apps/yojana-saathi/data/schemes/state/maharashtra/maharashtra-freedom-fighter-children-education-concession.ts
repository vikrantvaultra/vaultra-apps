import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-freedom-fighter-children-education-concession",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Education Concession for Children of Freedom Fighters", hi: "स्वतंत्रता सेनानियों के बच्चों के लिए शिक्षा सहायता" },
  shortDescription: {
    en: "Children, wives and widows of freedom fighters studying after class 12 in Maharashtra get ₹50–₹60 a month plus a yearly book allowance of ₹200–₹400.",
    hi: "महाराष्ट्र में कक्षा 12 के बाद पढ़ने वाले स्वतंत्रता सेनानियों के बच्चों, पत्नियों और विधवाओं को ₹50–₹60 महीना और ₹200–₹400 सालाना किताब भत्ता मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Directorate of Higher Education, Higher and Technical Education Department, Government of Maharashtra", hi: "उच्च शिक्षा निदेशालय, उच्च एवं तकनीकी शिक्षा विभाग, महाराष्ट्र सरकार" },
  categories: ["education"],
  tags: ["freedom fighter", "scholarship", "book allowance", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 50, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
  ),

  details: {
    en: ["This small scholarship from the Directorate of Higher Education honours freedom fighters by supporting the higher studies of their families.", "It covers degree, postgraduate and engineering courses after class 12, for all categories."],
    hi: ["उच्च शिक्षा निदेशालय की यह छोटी छात्रवृत्ति स्वतंत्रता सेनानियों के सम्मान में उनके परिवार की उच्च शिक्षा में मदद करती है।", "यह कक्षा 12 के बाद डिग्री, पोस्ट-ग्रेजुएट और इंजीनियरिंग कोर्स के लिए, सभी वर्गों के लिए है।"],
  },
  benefits: {
    en: ["Degree and postgraduate students: ₹50 a month and ₹200 a year for books.", "Engineering students: ₹60 a month and ₹400 a year for books."],
    hi: ["डिग्री और पोस्ट-ग्रेजुएट छात्र: ₹50 महीना और किताबों के लिए ₹200 सालाना।", "इंजीनियरिंग छात्र: ₹60 महीना और किताबों के लिए ₹400 सालाना।"],
  },
  eligibilityText: {
    en: ["Son, daughter, wife or widow of a freedom fighter.", "Maharashtra domicile, studying after class 12 in Maharashtra."],
    hi: ["स्वतंत्रता सेनानी का बेटा, बेटी, पत्नी या विधवा।", "महाराष्ट्र का अधिवास, और महाराष्ट्र में कक्षा 12 के बाद पढ़ाई।"],
  },
  documents: {
    en: ["Freedom fighter certificate", "Current year fee receipt", "Domicile certificate", "Bonafide certificate"],
    hi: ["स्वतंत्रता सेनानी प्रमाण पत्र", "इस साल की फ़ीस रसीद", "अधिवास प्रमाण पत्र", "बोनाफ़ाइड प्रमाण पत्र"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Education Concession to the Children Freedom Fighter', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Education Concession to the Children Freedom Fighter' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0C88CA9F14E2BAB30E38CD07F22F76EE9DCCA97D78964A4C"],
  lastVerified: "2026-10-06",
  launchedYear: 1965,
  status: "active",
};

export default scheme;
