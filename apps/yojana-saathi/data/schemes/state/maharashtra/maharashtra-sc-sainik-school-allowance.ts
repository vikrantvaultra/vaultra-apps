import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-sc-sainik-school-allowance",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Maintenance Allowance for SC Students in Sainik (Military) Schools", hi: "सैनिक स्कूलों में पढ़ने वाले SC छात्रों के लिए निर्वाह भत्ता" },
  shortDescription: {
    en: "SC and Neo-Buddhist students in class 5 to 10 at military schools get full costs paid (Nashik, Pune, Satara) or ₹15,000 a year at other recognised military schools, if family income is up to ₹2.5 lakh.",
    hi: "सैनिक स्कूलों में कक्षा 5 से 10 में पढ़ने वाले SC और नवबौद्ध छात्रों का पूरा ख़र्च (नासिक, पुणे, सातारा) या दूसरे मान्यता प्राप्त सैनिक स्कूलों में ₹15,000 सालाना मिलता है, अगर परिवार की आय ₹2.5 लाख तक है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["sainik school", "military school", "sc", "school", "pre matric"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 15000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
    incomeUpTo(250_000),
  ),

  details: {
    en: ["This scheme helps Scheduled Caste and Neo-Buddhist children study in military (sainik) schools, which are costly because they are residential.", "For the military schools at Nashik, Pune and Satara, the state pays the full cost. At other recognised military schools, it gives a fixed yearly scholarship."],
    hi: ["यह योजना अनुसूचित जाति और नवबौद्ध बच्चों को सैनिक स्कूलों में पढ़ने में मदद करती है, जो आवासीय होने के कारण महँगे होते हैं।", "नासिक, पुणे और सातारा के सैनिक स्कूलों में राज्य पूरा ख़र्च देता है। दूसरे मान्यता प्राप्त सैनिक स्कूलों में सालाना तय छात्रवृत्ति मिलती है।"],
  },
  benefits: {
    en: ["Military schools at Nashik, Pune and Satara: tuition, exam fees, meals, lodging, uniform, horse riding and other costs are fully reimbursed.", "Other recognised military schools: ₹15,000 per student per year."],
    hi: ["नासिक, पुणे और सातारा के सैनिक स्कूल: ट्यूशन, परीक्षा फ़ीस, खाना, रहना, यूनिफ़ॉर्म, घुड़सवारी और दूसरे ख़र्च पूरे लौटाए जाते हैं।", "दूसरे मान्यता प्राप्त सैनिक स्कूल: हर छात्र को साल में ₹15,000।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste or Neo-Buddhist student in class 5 to 10 at a military school.", "Family income up to ₹2.5 lakh a year."],
    hi: ["सैनिक स्कूल में कक्षा 5 से 10 में पढ़ने वाला अनुसूचित जाति या नवबौद्ध छात्र।", "परिवार की सालाना आय ₹2.5 लाख तक हो।"],
  },
  applicationProcess: {
    online: { en: ["Ask your military school about the claim; the school applies through MahaDBT / the Social Justice Department for eligible students.", "Give the school your caste certificate, income certificate and bank details."], hi: ["अपने सैनिक स्कूल से इस दावे के बारे में पूछें; स्कूल पात्र छात्रों के लिए MahaDBT / सामाजिक न्याय विभाग से आवेदन करता है।", "स्कूल को अपना जाति प्रमाण पत्र, आय प्रमाण पत्र और बैंक की जानकारी दें।"] },
  },

  officialUrl: "https://sjsa.maharashtra.gov.in/en/scheme/maintenance-allowance-to-b-c-students-studying-in-sainik-school/",
  sources: ["https://sjsa.maharashtra.gov.in/en/scheme/maintenance-allowance-to-b-c-students-studying-in-sainik-school/"],
  lastVerified: "2026-10-06",
  launchedYear: 2000,
  status: "active",
};

export default scheme;
