import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sant-surdas-yojana",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Sant Surdas Yojana", hi: "संत सूरदास योजना" },
  aka: ["Sant Surdas disability pension", "Gujarat disability pension", "Divyang pension Gujarat"],
  shortDescription: {
    en: "People in Gujarat with a disability of 60% or more get ₹1,000 a month, paid by DBT into their bank or post office account.",
    hi: "गुजरात में 60% या उससे ज़्यादा दिव्यांगता वाले लोगों को हर महीने ₹1,000 मिलते हैं, जो DBT से बैंक या डाकघर खाते में आते हैं।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department (Director of Social Defence), Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग (समाज सुरक्षा निदेशालय), गुजरात सरकार" },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "divyang", "handicapped", "pension", "sant surdas", "gujarat"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(residentOf("gujarat"), isTrue("disabled"), when("disabilityPct", "gte", 60)),

  details: {
    en: [
      "Sant Surdas Yojana is Gujarat's monthly financial help for people with severe disabilities. It is run by the Director of Social Defence, and the District Social Defence Officer approves applications.",
      "Anyone with a certified disability of 60% or more gets ₹1,000 a month by DBT. The state also runs a separate monthly help scheme for people with intellectual disability, autism, cerebral palsy and some other conditions.",
    ],
    hi: [
      "संत सूरदास योजना गुजरात में गंभीर दिव्यांगता वाले लोगों के लिए हर महीने की आर्थिक मदद है। इसे समाज सुरक्षा निदेशालय चलाता है और ज़िला समाज सुरक्षा अधिकारी आवेदन मंज़ूर करते हैं।",
      "60% या उससे ज़्यादा प्रमाणित दिव्यांगता वाले हर व्यक्ति को DBT से हर महीने ₹1,000 मिलते हैं। बौद्धिक दिव्यांगता, ऑटिज़्म, सेरेब्रल पाल्सी और कुछ अन्य स्थितियों वाले लोगों के लिए राज्य की एक अलग मासिक सहायता योजना भी है।",
    ],
  },
  benefits: {
    en: ["₹1,000 every month.", "Paid by DBT into your post office or bank account."],
    hi: ["हर महीने ₹1,000।", "पैसा DBT से डाकघर या बैंक खाते में।"],
  },
  eligibilityText: {
    en: ["You live in Gujarat.", "You have a disability of 60% or more, shown on a disability certificate (UDID)."],
    hi: ["आप गुजरात में रहते हों।", "आपकी दिव्यांगता 60% या उससे ज़्यादा हो, जो दिव्यांगता प्रमाण पत्र (UDID) में दर्ज हो।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on esamajkalyan.gujarat.gov.in, or at an e-Gram centre through the Digital Gujarat portal (Digital Seva Setu), where it can be done in a day.",
        "Upload your disability certificate, Aadhaar and bank details.",
        "The District Social Defence Officer checks and approves the application.",
      ],
      hi: [
        "esamajkalyan.gujarat.gov.in पर, या डिजिटल गुजरात पोर्टल (डिजिटल सेवा सेतु) के ज़रिए ई-ग्राम केंद्र पर आवेदन करें, जहाँ यह एक दिन में हो सकता है।",
        "दिव्यांगता प्रमाण पत्र, आधार और बैंक विवरण अपलोड करें।",
        "ज़िला समाज सुरक्षा अधिकारी आवेदन जाँचकर मंज़ूर करते हैं।",
      ],
    },
  },

  officialUrl: "https://esamajkalyan.gujarat.gov.in/",
  sources: [
    "https://sje.gujarat.gov.in/dsd/showpage.aspx?contentid=14732",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1978,
  status: "active",
};

export default scheme;
