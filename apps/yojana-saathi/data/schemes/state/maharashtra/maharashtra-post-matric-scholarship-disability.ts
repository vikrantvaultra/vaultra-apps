import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-post-matric-scholarship-disability",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Post-Matric Scholarship for Persons with Disabilities (Maharashtra)", hi: "दिव्यांग छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति (महाराष्ट्र)" },
  shortDescription: {
    en: "Students in Maharashtra with 40% or more disability get their compulsory college fees plus a monthly allowance of ₹230 to ₹1,200 for up to 10 months a year, from class 11 to PhD.",
    hi: "महाराष्ट्र के 40% या ज़्यादा दिव्यांगता वाले छात्रों को कक्षा 11 से PhD तक कॉलेज की ज़रूरी फ़ीस और साल में 10 महीने तक ₹230 से ₹1,200 महीने का भत्ता मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "disability"],
  tags: ["disability scholarship", "divyang", "post matric", "blind", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
  ),

  details: {
    en: ["This state scholarship supports students with disabilities in all courses after class 10, up to M.Phil and PhD. There is no caste condition.", "It pays the compulsory fees charged by the college and a monthly maintenance allowance that depends on the course group and whether you live in a hostel. Blind students get an extra reader allowance."],
    hi: ["यह राज्य छात्रवृत्ति कक्षा 10 के बाद के सभी कोर्स में, M.Phil और PhD तक, दिव्यांग छात्रों की मदद करती है। इसमें जाति की कोई शर्त नहीं है।", "इसमें कॉलेज की ज़रूरी फ़ीस और एक मासिक निर्वाह भत्ता मिलता है, जो कोर्स के समूह और हॉस्टल में रहने या न रहने पर निर्भर है। दृष्टिबाधित छात्रों को अलग से रीडर भत्ता मिलता है।"],
  },
  benefits: {
    en: ["Tuition, exam and other compulsory fees are paid.", "Maintenance allowance for up to 10 months a year: ₹230 to ₹550 a month for day scholars and ₹380 to ₹1,200 a month for hostellers, depending on the course group.", "Blind students get an extra reader allowance of ₹50 to ₹100 a month.", "Up to ₹500 a year for a compulsory study tour and up to ₹600 a year for project typing, where these are part of the course."],
    hi: ["ट्यूशन, परीक्षा और दूसरी ज़रूरी फ़ीस दी जाती है।", "साल में 10 महीने तक निर्वाह भत्ता: कोर्स समूह के हिसाब से घर से आने वाले छात्रों को ₹230 से ₹550 महीना और हॉस्टल वालों को ₹380 से ₹1,200 महीना।", "दृष्टिबाधित छात्रों को ₹50 से ₹100 महीने का अतिरिक्त रीडर भत्ता।", "जहाँ कोर्स में ज़रूरी हो, वहाँ स्टडी टूर के लिए साल में ₹500 तक और प्रोजेक्ट टाइपिंग के लिए ₹600 तक।"],
  },
  eligibilityText: {
    en: ["Has a disability of 40% or more.", "Domicile of Maharashtra, studying in a recognised institution (also outside Maharashtra).", "Studying a post-matric course; one course at a time, with no repeat at the same level.", "Not in full-time employment.", "Can be combined only with the Shahu Maharaj Merit Scholarship, not with other scholarships."],
    hi: ["40% या उससे ज़्यादा दिव्यांगता हो।", "महाराष्ट्र का अधिवासी हो और मान्यता प्राप्त संस्थान (महाराष्ट्र के बाहर भी) में पढ़ता हो।", "पोस्ट-मैट्रिक कोर्स कर रहा हो; एक समय में एक ही कोर्स, और उसी स्तर का कोर्स दोबारा नहीं।", "पूरे समय की नौकरी न करता हो।", "इसके साथ सिर्फ़ शाहू महाराज गुणवत्ता छात्रवृत्ति ली जा सकती है, दूसरी छात्रवृत्ति नहीं।"],
  },
  documents: {
    en: ["Disability certificate", "Domicile certificate", "Mark sheet of the last exam", "Gap certificate, if there is a break in studies"],
    hi: ["दिव्यांगता प्रमाण पत्र", "अधिवास प्रमाण पत्र", "पिछली परीक्षा की मार्कशीट", "पढ़ाई में गैप हो तो गैप सर्टिफ़िकेट"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Post-Matric Scholarship for persons with disability', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Post-Matric Scholarship for persons with disability' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ABCC44582035F06CB9B6B2704869FE16E9E8F561A36261D4D"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
