import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-sc-freeship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Post-Matric Tuition Fee and Exam Fee Freeship for SC Students", hi: "SC छात्रों के लिए पोस्ट-मैट्रिक ट्यूशन फ़ीस और परीक्षा फ़ीस फ़्रीशिप" },
  aka: ["SC Freeship", "Tuition Fee and Exam Fee SC"],
  shortDescription: {
    en: "SC and Neo-Buddhist students in Maharashtra whose family earns more than ₹2.5 lakh get their compulsory college fees (tuition, exam and other fees) paid by the state.",
    hi: "महाराष्ट्र के SC और नवबौद्ध छात्रों, जिनके परिवार की आय ₹2.5 लाख से ज़्यादा है, की कॉलेज की ज़रूरी फ़ीस (ट्यूशन, परीक्षा और दूसरी फ़ीस) राज्य सरकार देती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["freeship", "sc", "fee reimbursement", "tuition fee", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
  ),

  details: {
    en: ["SC students from families earning up to ₹2.5 lakh get their fees through the Government of India post-matric scholarship. This state freeship covers SC and Neo-Buddhist students whose family income is above that limit, so they don't have to pay compulsory fees either.", "It covers courses after class 10, from junior college to postgraduate study, in recognised institutions in Maharashtra."],
    hi: ["₹2.5 लाख तक आय वाले परिवारों के SC छात्रों को फ़ीस भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति से मिलती है। राज्य की यह फ़्रीशिप उन SC और नवबौद्ध छात्रों के लिए है जिनके परिवार की आय इससे ज़्यादा है, ताकि उन्हें भी ज़रूरी फ़ीस न भरनी पड़े।", "यह कक्षा 10 के बाद के कोर्स, जूनियर कॉलेज से पोस्ट-ग्रेजुएशन तक, महाराष्ट्र के मान्यता प्राप्त संस्थानों में लागू है।"],
  },
  benefits: {
    en: ["Tuition fees, exam fees and other fees the college makes compulsory are paid.", "Continues every year until the course ends, as long as you keep progressing."],
    hi: ["ट्यूशन फ़ीस, परीक्षा फ़ीस और कॉलेज की दूसरी ज़रूरी फ़ीस दी जाती है।", "आगे बढ़ते रहने पर कोर्स पूरा होने तक हर साल मिलती है।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste or Neo-Buddhist student living in Maharashtra.", "Passed class 10 and studying a post-matric course in a recognised institution in Maharashtra.", "Family income above ₹2.5 lakh a year (below that, apply for the Government of India post-matric scholarship instead).", "For professional courses, admission must be through the CAP round.", "Only one failure is allowed during the whole course."],
    hi: ["महाराष्ट्र में रहने वाला अनुसूचित जाति या नवबौद्ध छात्र।", "कक्षा 10 पास हो और महाराष्ट्र के मान्यता प्राप्त संस्थान में पोस्ट-मैट्रिक कोर्स कर रहा हो।", "परिवार की सालाना आय ₹2.5 लाख से ज़्यादा हो (इससे कम हो तो भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति में आवेदन करें)।", "प्रोफ़ेशनल कोर्स में दाख़िला CAP राउंड से हुआ हो।", "पूरे कोर्स में सिर्फ़ एक बार फ़ेल होने की छूट है।"],
  },
  documents: {
    en: ["Income certificate from the Tahsildar", "Caste certificate and caste validity certificate", "Last exam and class 10 or 12 mark sheets", "CAP allotment letter (for professional courses)"],
    hi: ["तहसीलदार का आय प्रमाण पत्र", "जाति प्रमाण पत्र और जाति वैधता प्रमाण पत्र", "पिछली परीक्षा और कक्षा 10 या 12 की मार्कशीट", "CAP अलॉटमेंट लेटर (प्रोफ़ेशनल कोर्स के लिए)"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Post-Matric Tuition Fee and Examination Fee (Freeship)', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Post-Matric Tuition Fee and Examination Fee (Freeship)' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE0CB048159E784170A4F3BD768B3A64E4772B0EF7B9990B2", "https://sjsa.maharashtra.gov.in/en/scheme/tuition-fees-and-examination-fees-to-backward-class-students/"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
