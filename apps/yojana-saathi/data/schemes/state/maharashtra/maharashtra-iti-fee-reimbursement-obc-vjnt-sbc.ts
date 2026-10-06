import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-iti-fee-reimbursement-obc-vjnt-sbc",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "ITI Fee Reimbursement for OBC, SEBC, VJNT and SBC Students", hi: "OBC, SEBC, VJNT और SBC छात्रों के लिए ITI फ़ीस प्रतिपूर्ति" },
  shortDescription: {
    en: "OBC, SEBC, VJNT and SBC trainees admitted to PPP or private ITI seats through central admission get 80% of the extra fee (private fee minus government ITI fee) back, if non-creamy layer.",
    hi: "केंद्रीय प्रवेश से PPP या प्राइवेट ITI सीट पर दाख़िल OBC, SEBC, VJNT और SBC प्रशिक्षुओं को, नॉन-क्रीमी लेयर होने पर, ज़्यादा फ़ीस (प्राइवेट फ़ीस में से सरकारी ITI की फ़ीस घटाकर) का 80% वापस मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "skills-employment"],
  tags: ["iti", "fee reimbursement", "obc", "vjnt", "sbc", "sebc", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "in", ["obc", "general"]), { en: "Belongs to the OBC, SEBC, VJNT or SBC category", hi: "OBC, SEBC, VJNT या SBC वर्ग से हो" }),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["This scheme reduces the cost of ITI training for backward-class trainees who get a PPP seat in a government ITI or a seat in a private ITI through the online central admission process.", "It pays back most of the difference between the private ITI fee and the government ITI fee, for both class 10 pass and fail trainees. Only two children of a family can benefit."],
    hi: ["यह योजना उन पिछड़े वर्ग के प्रशिक्षुओं के लिए ITI प्रशिक्षण का ख़र्च घटाती है, जिन्हें केंद्रीय ऑनलाइन प्रवेश से सरकारी ITI में PPP सीट या प्राइवेट ITI में सीट मिलती है।", "इसमें प्राइवेट ITI फ़ीस और सरकारी ITI फ़ीस के अंतर का बड़ा हिस्सा वापस मिलता है, कक्षा 10 पास और फ़ेल, दोनों के लिए। परिवार के दो बच्चों को ही लाभ मिलता है।"],
  },
  benefits: {
    en: ["80% of (private institute course fee minus government institute course fee).", "Available to both class 10 pass and class 10 fail trainees."],
    hi: ["(प्राइवेट संस्थान की कोर्स फ़ीस में से सरकारी संस्थान की कोर्स फ़ीस घटाकर) का 80%।", "कक्षा 10 पास और फ़ेल, दोनों तरह के प्रशिक्षुओं को।"],
  },
  eligibilityText: {
    en: ["Belongs to the OBC, SEBC, VJNT or SBC category, with Maharashtra domicile.", "Non-creamy layer, with family income up to ₹8 lakh a year.", "Admitted to a DGT or MSCVT approved trade through central online admission (not management quota).", "Has not earlier taken a benefit for an ITI course or government-sponsored training; limited to two children of a family."],
    hi: ["OBC, SEBC, VJNT या SBC वर्ग से हो, और महाराष्ट्र का अधिवासी हो।", "नॉन-क्रीमी लेयर, परिवार की सालाना आय ₹8 लाख तक।", "केंद्रीय ऑनलाइन प्रवेश से DGT या MSCVT मान्य ट्रेड में दाख़िला (मैनेजमेंट कोटा नहीं)।", "पहले किसी ITI कोर्स या सरकारी प्रायोजित प्रशिक्षण का लाभ न लिया हो; परिवार के दो बच्चों तक ही।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6BF9C803E998CF7698D365C08C21682615495BBF3667A9D0"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
