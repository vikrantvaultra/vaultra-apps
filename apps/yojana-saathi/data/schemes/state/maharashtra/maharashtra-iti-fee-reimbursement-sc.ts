import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-iti-fee-reimbursement-sc",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "ITI Fee Reimbursement for SC Students (PPP and Private ITIs)", hi: "SC छात्रों के लिए ITI फ़ीस प्रतिपूर्ति (PPP और प्राइवेट ITI)" },
  shortDescription: {
    en: "SC students in Maharashtra admitted to PPP seats in government ITIs or to private ITIs through central admission get their course fee reimbursed, up to 100%, if family income is up to ₹8 lakh.",
    hi: "महाराष्ट्र के SC छात्रों को, जिनका दाख़िला केंद्रीय प्रवेश से सरकारी ITI की PPP सीट या प्राइवेट ITI में हुआ है, ₹8 लाख तक पारिवारिक आय होने पर कोर्स फ़ीस 100% तक वापस मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "skills-employment"],
  tags: ["iti", "fee reimbursement", "sc", "vocational training", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["Many ITI seats are run under a public–private partnership (PPP) or in private ITIs, where the fee is higher. This scheme pays that fee back for Scheduled Caste trainees admitted through the online central admission process.", "Students who passed class 10 and whose family income is up to ₹2.5 lakh are covered as per the Government of India scholarship rules, while others up to ₹8 lakh get the full course fee back."],
    hi: ["ITI की कई सीटें सार्वजनिक-निजी भागीदारी (PPP) में या प्राइवेट ITI में होती हैं, जहाँ फ़ीस ज़्यादा होती है। यह योजना केंद्रीय ऑनलाइन प्रवेश से दाख़िल अनुसूचित जाति के प्रशिक्षुओं को वह फ़ीस वापस देती है।", "कक्षा 10 पास और ₹2.5 लाख तक आय वाले छात्रों को भारत सरकार की छात्रवृत्ति के नियमों से लाभ मिलता है, जबकि ₹8 लाख तक आय वाले बाक़ी छात्रों को पूरी कोर्स फ़ीस वापस मिलती है।"],
  },
  benefits: {
    en: ["Class 10 pass, family income above ₹2.5 lakh and up to ₹8 lakh: 100% of the course fee.", "Class 10 fail, family income up to ₹8 lakh: 100% of the course fee.", "Class 10 pass, family income up to ₹2.5 lakh: as per the Government of India post-matric scholarship."],
    hi: ["कक्षा 10 पास, परिवार की आय ₹2.5 लाख से ज़्यादा और ₹8 लाख तक: कोर्स फ़ीस का 100%।", "कक्षा 10 फ़ेल, परिवार की आय ₹8 लाख तक: कोर्स फ़ीस का 100%।", "कक्षा 10 पास, परिवार की आय ₹2.5 लाख तक: भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति के अनुसार।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste student with Maharashtra domicile.", "Admitted to a DGT or MSCVT approved trade through the central online admission process (not management quota).", "Family income up to ₹8 lakh a year.", "Has not earlier taken a benefit for an ITI course or a government-sponsored training programme.", "Meets attendance rules and appears for every exam."],
    hi: ["महाराष्ट्र अधिवास वाला अनुसूचित जाति का छात्र।", "केंद्रीय ऑनलाइन प्रवेश से DGT या MSCVT मान्य ट्रेड में दाख़िला (मैनेजमेंट कोटा नहीं)।", "परिवार की सालाना आय ₹8 लाख तक हो।", "पहले किसी ITI कोर्स या सरकारी प्रायोजित प्रशिक्षण का लाभ न लिया हो।", "हाज़िरी के नियम पूरे करे और हर परीक्षा दे।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A018CC49F7EDF7669263658A643602B20E9A001B39A682B16"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
