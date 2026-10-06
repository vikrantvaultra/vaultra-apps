import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-iti-fee-reimbursement-st",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "ITI Fee Reimbursement for ST Students (PPP and Private ITIs)", hi: "ST छात्रों के लिए ITI फ़ीस प्रतिपूर्ति (PPP और प्राइवेट ITI)" },
  shortDescription: {
    en: "ST students in Maharashtra admitted to PPP seats in government ITIs or to private ITIs through central admission get their course fee reimbursed, up to 100%, if family income is up to ₹8 lakh.",
    hi: "महाराष्ट्र के ST छात्रों को, जिनका दाख़िला केंद्रीय प्रवेश से सरकारी ITI की PPP सीट या प्राइवेट ITI में हुआ है, ₹8 लाख तक पारिवारिक आय होने पर कोर्स फ़ीस 100% तक वापस मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Tribal Development Department, Government of Maharashtra", hi: "आदिवासी विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "skills-employment"],
  tags: ["iti", "fee reimbursement", "st", "tribal", "vocational training", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    when("caste", "in", ["st", "pvtg"]),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["This scheme pays back the higher fee charged on PPP seats in government ITIs and in private ITIs for Scheduled Tribe trainees admitted through the online central admission process.", "Trainees who passed class 10 with family income up to ₹2.5 lakh are covered under Government of India scholarship rules; others up to ₹8 lakh get the full course fee back. Only two children of a family can benefit."],
    hi: ["यह योजना सरकारी ITI की PPP सीटों और प्राइवेट ITI में ली जाने वाली ज़्यादा फ़ीस, केंद्रीय ऑनलाइन प्रवेश से दाख़िल अनुसूचित जनजाति के प्रशिक्षुओं को लौटाती है।", "कक्षा 10 पास और ₹2.5 लाख तक आय वालों को भारत सरकार की छात्रवृत्ति के नियमों से लाभ मिलता है; ₹8 लाख तक आय वाले बाक़ी छात्रों को पूरी कोर्स फ़ीस वापस मिलती है। परिवार के दो बच्चों को ही लाभ मिलता है।"],
  },
  benefits: {
    en: ["Class 10 pass, family income above ₹2.5 lakh and up to ₹8 lakh: 100% of the course fee.", "Class 10 fail, family income up to ₹8 lakh: 100% of the course fee.", "Class 10 pass, family income up to ₹2.5 lakh: as per the Government of India post-matric scholarship."],
    hi: ["कक्षा 10 पास, परिवार की आय ₹2.5 लाख से ज़्यादा और ₹8 लाख तक: कोर्स फ़ीस का 100%।", "कक्षा 10 फ़ेल, परिवार की आय ₹8 लाख तक: कोर्स फ़ीस का 100%।", "कक्षा 10 पास, परिवार की आय ₹2.5 लाख तक: भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति के अनुसार।"],
  },
  eligibilityText: {
    en: ["Scheduled Tribe student with Maharashtra domicile and a caste validity certificate.", "Admitted to a DGT or MSCVT approved trade through central online admission (not management quota).", "Family income (father and mother) up to ₹8 lakh a year.", "Benefit limited to two children of a family; attendance rules apply."],
    hi: ["महाराष्ट्र अधिवास और जाति वैधता प्रमाण पत्र वाला अनुसूचित जनजाति का छात्र।", "केंद्रीय ऑनलाइन प्रवेश से DGT या MSCVT मान्य ट्रेड में दाख़िला (मैनेजमेंट कोटा नहीं)।", "परिवार (पिता और माता) की सालाना आय ₹8 लाख तक हो।", "परिवार के दो बच्चों तक ही लाभ; हाज़िरी के नियम लागू।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1CE86EBA1BA63DA13D68304CE1D46C55A5B53B49580C2589"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
