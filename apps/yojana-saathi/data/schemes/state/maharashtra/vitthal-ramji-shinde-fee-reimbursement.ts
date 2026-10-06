import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vitthal-ramji-shinde-fee-reimbursement",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Maharshi Vitthal Ramji Shinde Tuition and Exam Fee Reimbursement (Class 1–10)", hi: "महर्षि विट्ठल रामजी शिंदे ट्यूशन व परीक्षा फ़ीस प्रतिपूर्ति (कक्षा 1–10)" },
  shortDescription: {
    en: "BPL Scheduled Caste children in private unaided schools in Maharashtra get their tuition and exam fees reimbursed: ₹100 to ₹200 a month for 10 months, depending on the class.",
    hi: "महाराष्ट्र के प्राइवेट बिना-अनुदान स्कूलों में पढ़ने वाले BPL अनुसूचित जाति के बच्चों की ट्यूशन और परीक्षा फ़ीस वापस मिलती है: कक्षा के हिसाब से 10 महीने तक ₹100 से ₹200 महीना।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["school fees", "sc", "bpl", "pre matric", "fee reimbursement"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 100, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
    isTrue("bpl"),
  ),

  details: {
    en: ["This scheme helps poor Scheduled Caste families whose children study in recognised private unaided or permanently unaided schools, where fees are charged.", "The state reimburses tuition and exam fees at fixed monthly rates for 10 months a year."],
    hi: ["यह योजना उन गरीब अनुसूचित जाति परिवारों की मदद करती है जिनके बच्चे मान्यता प्राप्त प्राइवेट बिना-अनुदान या स्थायी बिना-अनुदान स्कूलों में पढ़ते हैं, जहाँ फ़ीस ली जाती है।", "राज्य सरकार साल में 10 महीने तय मासिक दर पर ट्यूशन और परीक्षा फ़ीस लौटाती है।"],
  },
  benefits: {
    en: ["Class 1 to 4: ₹100 a month.", "Class 5 to 7: ₹150 a month.", "Class 8 to 10: ₹200 a month.", "Paid for 10 months a year."],
    hi: ["कक्षा 1 से 4: ₹100 महीना।", "कक्षा 5 से 7: ₹150 महीना।", "कक्षा 8 से 10: ₹200 महीना।", "साल में 10 महीने मिलता है।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste student in class 1 to 10.", "Family is below the poverty line (BPL).", "Studying in a recognised private unaided or permanently unaided school in Maharashtra."],
    hi: ["कक्षा 1 से 10 में पढ़ने वाला अनुसूचित जाति का छात्र।", "परिवार गरीबी रेखा से नीचे (BPL) हो।", "महाराष्ट्र के मान्यता प्राप्त प्राइवेट बिना-अनुदान या स्थायी बिना-अनुदान स्कूल में पढ़ता हो।"],
  },
  applicationProcess: {
    online: { en: ["Contact your school; the school submits the claim for eligible students through the MahaDBT / department system.", "Keep your caste certificate, BPL proof and bank details ready for the school."], hi: ["अपने स्कूल से संपर्क करें; स्कूल पात्र छात्रों का दावा MahaDBT / विभाग की प्रणाली से जमा करता है।", "जाति प्रमाण पत्र, BPL का सबूत और बैंक की जानकारी स्कूल के लिए तैयार रखें।"] },
  },

  officialUrl: "https://sjsa.maharashtra.gov.in/en/scheme/maharshi-vitthal-ramji-shinde-tuition-fees-and-examination-fees-1st-to-10th-std/",
  sources: ["https://sjsa.maharashtra.gov.in/en/scheme/maharshi-vitthal-ramji-shinde-tuition-fees-and-examination-fees-1st-to-10th-std/"],
  lastVerified: "2026-10-06",
  launchedYear: 2000,
  status: "active",
};

export default scheme;
