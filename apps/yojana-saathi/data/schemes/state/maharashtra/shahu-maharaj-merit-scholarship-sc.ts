import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shahu-maharaj-merit-scholarship-sc",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship (SC, Class 11–12)", hi: "राजर्षि छत्रपति शाहू महाराज गुणवत्ता छात्रवृत्ति (SC, कक्षा 11–12)" },
  aka: ["Shahu Maharaj Merit Scholarship"],
  shortDescription: {
    en: "SC students in Maharashtra who scored 75% or more in class 10 get ₹300 a month for 10 months in each of class 11 and 12, with no income limit.",
    hi: "महाराष्ट्र के जिन SC छात्रों ने कक्षा 10 में 75% या उससे ज़्यादा अंक पाए, उन्हें कक्षा 11 और 12 में हर साल 10 महीने तक ₹300 महीना मिलता है, कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["merit scholarship", "sc", "class 11", "class 12", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 300, period: "monthly", kind: "cash", maxMonths: 20 },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
  ),

  details: {
    en: ["This merit scholarship rewards Scheduled Caste students who do well in the SSC (class 10) exam, to keep them studying through junior college.", "It is paid on top of the Government of India post-matric scholarship and the freeship, so you can hold it together with them."],
    hi: ["यह गुणवत्ता छात्रवृत्ति SSC (कक्षा 10) में अच्छा करने वाले अनुसूचित जाति के छात्रों को दी जाती है, ताकि वे जूनियर कॉलेज की पढ़ाई जारी रखें।", "यह भारत सरकार की पोस्ट-मैट्रिक छात्रवृत्ति और फ़्रीशिप के अलावा मिलती है, यानी इनके साथ भी ली जा सकती है।"],
  },
  benefits: {
    en: ["₹300 a month for 10 months (₹3,000 a year).", "Paid in class 11 and again in class 12."],
    hi: ["10 महीने तक ₹300 महीना (साल में ₹3,000)।", "कक्षा 11 में और फिर कक्षा 12 में मिलता है।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste student living in Maharashtra.", "Scored at least 75% in class 10.", "Studying in class 11 or 12.", "No family income limit."],
    hi: ["महाराष्ट्र में रहने वाला अनुसूचित जाति का छात्र।", "कक्षा 10 में कम से कम 75% अंक।", "कक्षा 11 या 12 में पढ़ रहा हो।", "परिवार की आय की कोई सीमा नहीं।"],
  },
  documents: {
    en: ["Caste certificate", "Class 10 mark sheet", "School leaving certificate", "Class 11 admission receipt"],
    hi: ["जाति प्रमाण पत्र", "कक्षा 10 की मार्कशीट", "स्कूल लीविंग सर्टिफ़िकेट", "कक्षा 11 की दाख़िला रसीद"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADF0B5B3136AAAD4C06BEFD7079D45EBAADC7F5BA9DCAA1F3", "https://sjsa.maharashtra.gov.in/en/scheme/rajarshi-shahu-maharaj-merit-scholarship/"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
