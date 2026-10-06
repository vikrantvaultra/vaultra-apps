import { all, female, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "savitribai-phule-scholarship-sc-girls",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Savitribai Phule Scholarship for SC Girls (Class 5–10)", hi: "SC लड़कियों के लिए सावित्रीबाई फुले छात्रवृत्ति (कक्षा 5–10)" },
  shortDescription: {
    en: "SC girls in Maharashtra studying in class 5 to 10 get ₹60 a month (class 5–7) or ₹100 a month (class 8–10) for 10 months, with no income limit.",
    hi: "महाराष्ट्र में कक्षा 5 से 10 में पढ़ने वाली SC लड़कियों को 10 महीने तक ₹60 महीना (कक्षा 5–7) या ₹100 महीना (कक्षा 8–10) मिलता है, कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "women-child"],
  tags: ["girls scholarship", "sc", "school", "pre matric", "savitribai phule"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 60, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    female(),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
  ),

  details: {
    en: ["This small state scholarship encourages Scheduled Caste girls to stay in school through the upper primary and secondary years.", "The amount is paid for 10 months a year. The school usually prepares the list and sends it to the district social welfare office."],
    hi: ["यह छोटी राज्य छात्रवृत्ति अनुसूचित जाति की लड़कियों को उच्च प्राथमिक और माध्यमिक कक्षाओं तक स्कूल में बने रहने के लिए प्रोत्साहित करती है।", "राशि साल में 10 महीने मिलती है। आमतौर पर स्कूल सूची बनाकर ज़िला समाज कल्याण कार्यालय को भेजता है।"],
  },
  benefits: {
    en: ["Class 5 to 7: ₹60 a month (₹600 a year).", "Class 8 to 10: ₹100 a month (₹1,000 a year)."],
    hi: ["कक्षा 5 से 7: ₹60 महीना (साल में ₹600)।", "कक्षा 8 से 10: ₹100 महीना (साल में ₹1,000)।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste girl studying in class 5 to 10 in Maharashtra.", "No family income limit."],
    hi: ["महाराष्ट्र में कक्षा 5 से 10 में पढ़ने वाली अनुसूचित जाति की लड़की।", "परिवार की आय की कोई सीमा नहीं।"],
  },
  applicationProcess: {
    online: { en: ["Ask your school's headmaster to include you; the school applies on your behalf through the MahaDBT / department system.", "Make sure your school has your caste certificate and an Aadhaar-linked bank account in your or your parent's name."], hi: ["अपने स्कूल के मुख्याध्यापक से अपना नाम शामिल करने को कहें; स्कूल आपकी ओर से MahaDBT / विभाग की प्रणाली से आवेदन करता है।", "ध्यान रखें कि स्कूल के पास आपका जाति प्रमाण पत्र और आपके या माता-पिता के नाम का आधार से जुड़ा बैंक खाता हो।"] },
  },

  officialUrl: "https://sjsa.maharashtra.gov.in/en/scheme/savitribai-phule-scholarship-award-of-scholarships-to-b-c-girl-students-studying-in-std-8th-to10-th/",
  sources: ["https://sjsa.maharashtra.gov.in/en/scheme/savitribai-phule-scholarship-award-of-scholarships-to-b-c-girl-students-studying-in-std-8th-to10-th/"],
  lastVerified: "2026-10-06",
  launchedYear: 1996,
  status: "active",
};

export default scheme;
