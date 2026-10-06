import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nijut-babu",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Mukhya Mantrir Nijut Babu Aasoni", hi: "मुख्य मंत्रीर निजुत बाबू आसोनी" },
  aka: ["Nijut Babu", "MMNBA"],
  shortDescription: {
    en: "Male students in Assam from families earning under ₹4 lakh, in the first two years of UG or PG at government colleges, get ₹1,000–₹2,000 a month for 10 months a year.",
    hi: "असम में ₹4 लाख से कम आय वाले परिवारों के छात्रों को सरकारी कॉलेज में UG या PG के पहले दो साल में, साल के 10 महीने हर महीने ₹1,000–₹2,000 मिलते हैं।",
  },
  level: "state",
  state: "assam",
  department: { en: "Higher Education Department, Government of Assam", hi: "उच्च शिक्षा विभाग, असम सरकार" },
  categories: ["education"],
  tags: ["nijut babu", "male students", "stipend", "scholarship", "college", "assam"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 10000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("assam"), when("gender", "eq", "male"), isTrue("student"), incomeUpTo(400_000)),

  details: {
    en: [
      "Nijut Babu is the boys' counterpart of Nijut Moina. It gives a monthly allowance to male students from poorer families so that they don't drop out after Higher Secondary.",
      "The Higher Education Department pays it by Aadhaar-based DBT for up to 10 months a year. The 2026-27 budget made it a regular scheme, and applications for 2026-27 opened in August 2026.",
    ],
    hi: [
      "निजुत बाबू, निजुत मोइना की तरह लड़कों के लिए योजना है। यह गरीब परिवारों के छात्रों को हर महीने भत्ता देती है, ताकि वे हायर सेकेंडरी के बाद पढ़ाई न छोड़ें।",
      "उच्च शिक्षा विभाग साल में अधिकतम 10 महीने आधार आधारित DBT से पैसा देता है। 2026-27 के बजट में इसे नियमित योजना बना दिया गया, और 2026-27 के आवेदन अगस्त 2026 में खुले।",
    ],
  },
  benefits: {
    en: ["UG 1st and 2nd year: ₹1,000 a month.", "PG 1st and 2nd year: ₹2,000 a month.", "Paid for up to 10 months in each academic year."],
    hi: ["UG पहला और दूसरा साल: हर महीने ₹1,000।", "PG पहला और दूसरा साल: हर महीने ₹2,000।", "हर शैक्षणिक साल में अधिकतम 10 महीने तक।"],
  },
  eligibilityText: {
    en: [
      "A male student domiciled in Assam.",
      "Family income below ₹4 lakh a year, and admitted under the state's Fee Waiver Scheme.",
      "A regular student in UG 1st/2nd year or PG 1st/2nd year at a government or provincialised institution.",
      "UG students must be unmarried and must not have taken a scooter under the Dr. Banikanta Kakati Merit Award.",
      "PG students getting the CM's Jibon Prerana allowance are not eligible.",
      "Needs an Aadhaar number and an Aadhaar-seeded bank account.",
    ],
    hi: [
      "असम का निवासी छात्र।",
      "परिवार की सालाना आय ₹4 लाख से कम हो, और दाखिला राज्य की फ़ीस माफ़ी योजना में हुआ हो।",
      "सरकारी या प्रांतीयकृत संस्थान में UG पहले/दूसरे साल या PG पहले/दूसरे साल का नियमित छात्र हो।",
      "UG छात्र अविवाहित हो और उसने डॉ. बाणीकांत काकती मेधा पुरस्कार में स्कूटर न लिया हो।",
      "मुख्यमंत्री जीवन प्रेरणा भत्ता पाने वाले PG छात्र पात्र नहीं हैं।",
      "आधार नंबर और आधार से जुड़ा बैंक खाता होना चाहिए।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Collect the Nijut Babu form from your college when applications open.",
        "Attach your income certificate or your parents' ration card, Aadhaar and bank details, and sign the declaration.",
        "Submit it to the college nodal officer, who verifies and uploads it.",
      ],
      hi: [
        "आवेदन खुलने पर अपने कॉलेज से निजुत बाबू का फ़ॉर्म लें।",
        "आय प्रमाण पत्र या माता-पिता का राशन कार्ड, आधार और बैंक की जानकारी लगाएँ, और घोषणा पर हस्ताक्षर करें।",
        "इसे कॉलेज के नोडल अधिकारी को जमा करें, जो जाँच करके अपलोड करेंगे।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Income certificate or parents' ration card", "Passbook of an Aadhaar-seeded bank account", "Signed consent and declaration form"],
    hi: ["आधार कार्ड", "आय प्रमाण पत्र या माता-पिता का राशन कार्ड", "आधार से जुड़े बैंक खाते की पासबुक", "हस्ताक्षरित सहमति और घोषणा फ़ॉर्म"],
  },

  officialUrl: "https://directorateofhighereducation.assam.gov.in/documents/notifications-2",
  sources: [
    "https://directorateofhighereducation.assam.gov.in/documents-detail/guidelines-mmnba-for-providing-financial-assistance-to-male-students-from",
    "https://directorateofhighereducation.assam.gov.in/documents-detail/executive-order-regarding-implementation-of-the-mukhya-mantrir-nijut-moina-aasoni",
    "https://aladigitallibrary.in/handle/123456789/4238",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
