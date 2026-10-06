import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-st-vocational-maintenance-allowance",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Vocational Education Maintenance Allowance for Tribal Students", hi: "आदिवासी छात्रों के लिए व्यावसायिक शिक्षा निर्वाह भत्ता" },
  shortDescription: {
    en: "ST students in Maharashtra doing professional courses get a yearly maintenance allowance of ₹5,000 to ₹10,000, if family income is up to ₹2.5 lakh.",
    hi: "प्रोफ़ेशनल कोर्स करने वाले महाराष्ट्र के ST छात्रों को ₹5,000 से ₹10,000 सालाना निर्वाह भत्ता मिलता है, अगर परिवार की आय ₹2.5 लाख तक है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Tribal Development Department, Government of Maharashtra", hi: "आदिवासी विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["maintenance allowance", "st", "tribal", "hostel", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    when("caste", "in", ["st", "pvtg"]),
    incomeUpTo(250_000),
  ),

  details: {
    en: ["This allowance helps ST students in vocational and professional courses with living costs. The amount depends on the length of the course and whether you live in a hostel.", "It is for students from families earning up to ₹2.5 lakh."],
    hi: ["यह भत्ता व्यावसायिक और प्रोफ़ेशनल कोर्स के ST छात्रों को रहने-खाने के ख़र्च में मदद करता है। राशि कोर्स की अवधि और हॉस्टल में रहने या न रहने पर निर्भर है।", "यह ₹2.5 लाख तक आय वाले परिवारों के छात्रों के लिए है।"],
  },
  benefits: {
    en: ["4–5 year courses: ₹7,000 a year (hostellers) or ₹10,000 a year (day scholars), as listed on MahaDBT.", "2–3 year courses: ₹5,000 or ₹7,000 a year.", "Courses of 2 years or less: ₹5,000 a year."],
    hi: ["4–5 साल के कोर्स: MahaDBT के अनुसार ₹7,000 सालाना (हॉस्टल वाले) या ₹10,000 सालाना (घर से आने वाले)।", "2–3 साल के कोर्स: ₹5,000 या ₹7,000 सालाना।", "2 साल या कम के कोर्स: ₹5,000 सालाना।"],
  },
  eligibilityText: {
    en: ["Scheduled Tribe student in a vocational or professional course in Maharashtra.", "Family income up to ₹2.5 lakh a year.", "Must pass the previous year's exam."],
    hi: ["महाराष्ट्र में व्यावसायिक या प्रोफ़ेशनल कोर्स करने वाला अनुसूचित जनजाति का छात्र।", "परिवार की सालाना आय ₹2.5 लाख तक हो।", "पिछले साल की परीक्षा पास की हो।"],
  },
  documents: {
    en: ["Caste certificate and caste validity certificate", "Income certificate", "Previous year's mark sheet", "Declaration from the college rector or hostel superintendent"],
    hi: ["जाति प्रमाण पत्र और जाति वैधता प्रमाण पत्र", "आय प्रमाण पत्र", "पिछले साल की मार्कशीट", "कॉलेज के रेक्टर या हॉस्टल अधीक्षक की घोषणा"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Vocational Education Maintenance Allowance', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Vocational Education Maintenance Allowance' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A150D8D3BD5BBF9E579F0BA8D2D926043D82C17776CB73469"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
