import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-sc-st-obc-tuition-fee-reimbursement",
  tier: "compact",
  name: {
    en: "Delhi Tuition Fee Reimbursement for SC/ST/OBC School Students",
    hi: "दिल्ली SC/ST/OBC स्कूली छात्रों की ट्यूशन फ़ीस वापसी",
  },
  aka: ["Delhi fee reimbursement SC ST OBC", "Reimbursement of tuition fees class 1 to 12 Delhi"],
  shortDescription: {
    en: "SC, ST and OBC families in Delhi earning up to ₹3 lakh a year get back the tuition, lab and library fees paid for a child in Classes 1 to 12, up to ₹48,000 a year.",
    hi: "दिल्ली में ₹3 लाख तक सालाना आय वाले SC, ST और OBC परिवारों को कक्षा 1 से 12 के बच्चे की ट्यूशन, लैब और लाइब्रेरी फ़ीस हर साल ₹48,000 तक वापस मिलती है।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department for the Welfare of SC/ST/OBC, Govt. of NCT of Delhi", hi: "SC/ST/OBC कल्याण विभाग, दिल्ली सरकार" },
  categories: ["education"],
  tags: ["fee reimbursement", "school fees", "sc", "st", "obc", "private school", "delhi"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("delhi"),
    when("caste", "in", ["sc", "st", "pvtg", "obc"]),
    isTrue("student"),
    labelled(incomeUpTo(300_000), { en: "Family income up to ₹3 lakh a year", hi: "परिवार की सालाना आय ₹3 लाख तक" }),
  ),

  details: {
    en: [
      "The Delhi government pays back school fees for SC, ST and OBC children from lower-income families who study in recognised schools in Delhi, including private (public) schools.",
      "Tuition, lab and library fees are reimbursed, up to ₹48,000 a year or the amount actually paid, whichever is less. You upload the original fee receipts of the current session on the e-District portal, and the money goes to the student's bank account.",
    ],
    hi: [
      "दिल्ली सरकार उन SC, ST और OBC बच्चों की स्कूल फ़ीस लौटाती है जो कम आय वाले परिवारों से हैं और दिल्ली के मान्यता प्राप्त स्कूलों में, निजी (पब्लिक) स्कूलों समेत, पढ़ते हैं।",
      "ट्यूशन, लैब और लाइब्रेरी फ़ीस वापस मिलती है, हर साल ₹48,000 तक या जितनी असल में दी गई, जो भी कम हो। इस सत्र की असली फ़ीस रसीदें ई-डिस्ट्रिक्ट पोर्टल पर अपलोड करनी होती हैं, और पैसा छात्र के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "Reimbursement of tuition, lab and library fees for Classes 1 to 12.",
      "Up to ₹48,000 a year, or the fees actually paid if less.",
    ],
    hi: [
      "कक्षा 1 से 12 की ट्यूशन, लैब और लाइब्रेरी फ़ीस की वापसी।",
      "हर साल ₹48,000 तक, या असल में दी गई फ़ीस अगर वह कम है।",
    ],
  },
  eligibilityText: {
    en: [
      "Student belongs to SC, ST or OBC, with a caste certificate from the Delhi Revenue Department (or a Delhi domicile certificate if the SC certificate is from another state).",
      "Family income up to ₹3 lakh a year, with a valid Delhi income certificate.",
      "Studying in a school recognised by the Delhi Directorate of Education or a Delhi municipal body.",
      "Scored at least 50% marks with at least 70% attendance in the previous year; repeaters are not eligible.",
      "Bank account in the student's name (joint with a parent allowed), seeded with the student's Aadhaar.",
    ],
    hi: [
      "छात्र SC, ST या OBC वर्ग से हो, दिल्ली राजस्व विभाग से जारी जाति प्रमाण पत्र के साथ (SC प्रमाण पत्र दूसरे राज्य का हो तो दिल्ली का अधिवास प्रमाण पत्र)।",
      "परिवार की सालाना आय ₹3 लाख तक हो, दिल्ली के मान्य आय प्रमाण पत्र के साथ।",
      "दिल्ली शिक्षा निदेशालय या दिल्ली के किसी नगर निकाय से मान्यता प्राप्त स्कूल में पढ़ रहा हो।",
      "पिछले साल कम से कम 50% अंक और कम से कम 70% हाज़िरी हो; कक्षा दोहराने वाले पात्र नहीं हैं।",
      "छात्र के नाम पर बैंक खाता (माता-पिता के साथ संयुक्त खाता भी चलेगा), छात्र के आधार से जुड़ा।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register or log in on the Delhi e-District portal (edistrict.delhigovt.nic.in).",
        "Choose 'Reimbursement of Tuition Fees for Students Belonging to SC/ST/OBC Category'.",
        "Upload the caste and income certificates, last year's mark sheet and the original fee receipts, and submit.",
      ],
      hi: [
        "दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर रजिस्टर या लॉग इन करें।",
        "'Reimbursement of Tuition Fees for Students Belonging to SC/ST/OBC Category' चुनें।",
        "जाति और आय प्रमाण पत्र, पिछले साल की मार्कशीट और असली फ़ीस रसीदें अपलोड करके जमा करें।",
      ],
    },
  },

  officialUrl: "https://scstwelfare.delhi.gov.in/scstwelfare/services-schemes",
  sources: [
    "https://scstwelfare.delhi.gov.in/sites/default/files/scstwelfare/circulars-orders/scholarship_schemes_2025-26_guidelines.pdf",
    "https://scstwelfare.delhi.gov.in/scstwelfare/services-schemes",
    "https://edistrict.delhigovt.nic.in/in/en/Public/Services.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
