import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-assistance-to-meritorious-students",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Assistance to Meritorious Students Scholarship (Junior and Senior Level)", hi: "मेधावी छात्र सहायता छात्रवृत्ति (जूनियर और सीनियर स्तर)" },
  aka: ["AMS Scholarship"],
  shortDescription: {
    en: "Top-ranked students in Maharashtra's SSC and HSC board exams (15 from each divisional board) get a yearly scholarship for class 11–12 and for higher studies, which varies by course.",
    hi: "महाराष्ट्र के SSC और HSC बोर्ड परीक्षाओं के टॉप रैंक वाले छात्रों (हर संभागीय बोर्ड से 15) को कक्षा 11–12 और आगे की पढ़ाई के लिए सालाना छात्रवृत्ति मिलती है, जो कोर्स के हिसाब से बदलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Directorate of Higher Education, Higher and Technical Education Department, Government of Maharashtra", hi: "उच्च शिक्षा निदेशालय, उच्च एवं तकनीकी शिक्षा विभाग, महाराष्ट्र सरकार" },
  categories: ["education"],
  tags: ["merit scholarship", "board topper", "ams", "class 11", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1600, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
  ),

  details: {
    en: ["The Assistance to Meritorious Students (AMS) scheme rewards students with the top ranks in the secondary and higher secondary board exams, about 15 from each of the eight divisional boards.", "The junior level covers class 11 and 12; the senior level covers courses after class 12, including outside Maharashtra. Selected students receive a sanction letter from the Directorate of Higher Education."],
    hi: ["मेधावी छात्र सहायता (AMS) योजना माध्यमिक और उच्च माध्यमिक बोर्ड परीक्षाओं में टॉप रैंक वाले छात्रों को दी जाती है, आठ संभागीय बोर्डों में से हर एक से लगभग 15 छात्र।", "जूनियर स्तर कक्षा 11 और 12 के लिए है; सीनियर स्तर कक्षा 12 के बाद के कोर्स के लिए, महाराष्ट्र के बाहर भी। चुने गए छात्रों को उच्च शिक्षा निदेशालय से मंज़ूरी पत्र मिलता है।"],
  },
  benefits: {
    en: ["Junior level (class 11–12): about ₹1,600 to ₹2,300 a year, depending on the course.", "Senior level (after class 12): from about ₹2,800 to over ₹72,000 a year, depending on the course."],
    hi: ["जूनियर स्तर (कक्षा 11–12): कोर्स के हिसाब से लगभग ₹1,600 से ₹2,300 सालाना।", "सीनियर स्तर (कक्षा 12 के बाद): कोर्स के हिसाब से लगभग ₹2,800 से ₹72,000 से ज़्यादा सालाना।"],
  },
  eligibilityText: {
    en: ["Among the top-ranked students of a divisional board in the SSC or HSC exam, with a sanction letter from the Directorate of Higher Education.", "To renew: at least 55% (junior level) or 65% (senior level) and promotion to the next class."],
    hi: ["SSC या HSC परीक्षा में किसी संभागीय बोर्ड के टॉप रैंक वाले छात्रों में हो, और उच्च शिक्षा निदेशालय का मंज़ूरी पत्र हो।", "नवीनीकरण के लिए: कम से कम 55% (जूनियर स्तर) या 65% (सीनियर स्तर) अंक और अगली कक्षा में प्रवेश।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Assistance to Meritorious Students scholarship - Junior Level / Senior Level', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Assistance to Meritorious Students scholarship - Junior Level / Senior Level' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE6CC3420B0C53DCEB5F351B3D2A9E2CDC4ABAD8058B38786", "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A081772910D526AF0EDDF60A95235BCA1E7C80233A30F725A"],
  lastVerified: "2026-10-06",
  launchedYear: 1984,
  status: "active",
};

export default scheme;
