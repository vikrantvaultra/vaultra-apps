import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-iti-fee-reimbursement-sebc-ews",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "ITI Fee Reimbursement for SEBC and EWS Students", hi: "SEBC और EWS छात्रों के लिए ITI फ़ीस प्रतिपूर्ति" },
  shortDescription: {
    en: "Open-category EWS and SEBC trainees admitted to PPP or private ITI seats get 80% to 100% of the extra fee (private fee minus government ITI fee) back, if family income is up to ₹8 lakh.",
    hi: "PPP या प्राइवेट ITI सीट पर दाख़िल ओपन वर्ग के EWS और SEBC प्रशिक्षुओं को, ₹8 लाख तक पारिवारिक आय होने पर, ज़्यादा फ़ीस (प्राइवेट फ़ीस में से सरकारी ITI फ़ीस घटाकर) का 80% से 100% वापस मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Skill Development, Employment and Entrepreneurship Department, Government of Maharashtra", hi: "कौशल विकास, रोज़गार और उद्यमिता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "skills-employment"],
  tags: ["iti", "fee reimbursement", "ews", "sebc", "vocational training", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "general"), { en: "Open category (including SEBC and EWS)", hi: "ओपन वर्ग (SEBC और EWS सहित)" }),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["This Skill Development Department scheme helps SEBC and economically weaker open-category trainees who get PPP seats in government ITIs or seats in private ITIs through the central online admission process.", "It pays back part or all of the difference between the private and government ITI fee. Only two children of a family can benefit."],
    hi: ["कौशल विकास विभाग की यह योजना उन SEBC और आर्थिक रूप से कमज़ोर ओपन वर्ग के प्रशिक्षुओं की मदद करती है, जिन्हें केंद्रीय ऑनलाइन प्रवेश से सरकारी ITI में PPP सीट या प्राइवेट ITI में सीट मिलती है।", "इसमें प्राइवेट और सरकारी ITI फ़ीस के अंतर का कुछ हिस्सा या पूरा अंतर वापस मिलता है। परिवार के दो बच्चों को ही लाभ मिलता है।"],
  },
  benefits: {
    en: ["Family income up to ₹2.5 lakh: 100% of (private institute fee minus government institute fee).", "Family income above ₹2.5 lakh and up to ₹8 lakh: 80% of that difference."],
    hi: ["परिवार की आय ₹2.5 लाख तक: (प्राइवेट संस्थान फ़ीस में से सरकारी संस्थान फ़ीस घटाकर) का 100%।", "परिवार की आय ₹2.5 लाख से ज़्यादा और ₹8 लाख तक: उस अंतर का 80%।"],
  },
  eligibilityText: {
    en: ["Open-category EWS or SEBC student with Maharashtra domicile.", "Admitted to a DGT or MSCVT approved trade through central online admission (not management quota).", "Family income (father and mother) up to ₹8 lakh a year.", "Has not earlier taken a benefit for an ITI course or government-sponsored training; limited to two children of a family."],
    hi: ["महाराष्ट्र अधिवास वाला ओपन वर्ग का EWS या SEBC छात्र।", "केंद्रीय ऑनलाइन प्रवेश से DGT या MSCVT मान्य ट्रेड में दाख़िला (मैनेजमेंट कोटा नहीं)।", "परिवार (पिता और माता) की सालाना आय ₹8 लाख तक।", "पहले किसी ITI कोर्स या सरकारी प्रायोजित प्रशिक्षण का लाभ न लिया हो; परिवार के दो बच्चों तक ही।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6CA0A2358C3CEC1D64ECE777FC5CDB517A5E9878CFC6ACBD"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
