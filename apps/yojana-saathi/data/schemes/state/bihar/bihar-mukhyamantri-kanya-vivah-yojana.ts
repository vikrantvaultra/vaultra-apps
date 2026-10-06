import { all, female, incomeUpTo, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-mukhyamantri-kanya-vivah-yojana",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Mukhyamantri Kanya Vivah Yojana (Bihar)", hi: "मुख्यमंत्री कन्या विवाह योजना (बिहार)" },
  aka: ["Kanya Vivah Bihar", "Bihar marriage assistance"],
  shortDescription: {
    en: "Brides aged 18 or above from poor Bihar families earning under ₹60,000 a year get ₹5,000 at the time of their registered marriage.",
    hi: "बिहार के गरीब परिवारों (सालाना आय ₹60,000 से कम) की 18 साल या उससे ज़्यादा उम्र की दुल्हनों को पंजीकृत विवाह के समय ₹5,000 मिलते हैं।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Social Welfare Department, Government of Bihar", hi: "समाज कल्याण विभाग, बिहार सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "kanya vivah", "girl", "bpl", "shadi", "bihar"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("bihar"), female(), minAge(18), incomeUpTo(60_000)),

  details: {
    en: [
      "Mukhyamantri Kanya Vivah Yojana gives a small grant to brides from poor families in Bihar. Its aims are to help the family with wedding costs, to stop child marriage and dowry, and to get marriages registered.",
      "The Social Welfare Department pays ₹5,000 into the bride's bank account after the marriage is registered and the ages of both partners are checked.",
    ],
    hi: [
      "मुख्यमंत्री कन्या विवाह योजना बिहार के गरीब परिवारों की दुल्हनों को एक छोटी राशि देती है। इसका मकसद शादी के खर्च में परिवार की मदद करना, बाल विवाह और दहेज रोकना, और शादी का पंजीकरण बढ़ाना है।",
      "शादी का पंजीकरण होने और दोनों की उम्र की जाँच के बाद समाज कल्याण विभाग ₹5,000 दुल्हन के बैंक खाते में भेजता है।",
    ],
  },
  benefits: {
    en: ["₹5,000 one-time grant at the time of marriage.", "Paid into the bride's own bank account."],
    hi: ["शादी के समय एक बार ₹5,000 की सहायता।", "पैसा दुल्हन के अपने बैंक खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "The bride is a resident of Bihar.",
      "Annual family income below ₹60,000, or the family holds a BPL card.",
      "The bride is at least 18 and the groom at least 21 at the time of marriage.",
      "The marriage is registered and there is no dowry.",
    ],
    hi: [
      "दुल्हन बिहार की निवासी हो।",
      "परिवार की सालाना आय ₹60,000 से कम हो, या परिवार के पास BPL कार्ड हो।",
      "शादी के समय दुल्हन की उम्र कम से कम 18 और दूल्हे की कम से कम 21 साल हो।",
      "शादी पंजीकृत हो और दहेज न लिया गया हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register the marriage first.",
        "Apply at the RTPS counter of your block office or the Child Development Project Officer's office with the form and documents.",
        "After verification, the money is sent to the bride's bank account.",
      ],
      hi: [
        "पहले शादी का पंजीकरण कराएँ।",
        "फ़ॉर्म और दस्तावेज़ों के साथ प्रखंड कार्यालय के RTPS काउंटर या बाल विकास परियोजना पदाधिकारी के कार्यालय में आवेदन करें।",
        "जाँच के बाद पैसा दुल्हन के बैंक खाते में भेजा जाता है।",
      ],
    },
  },
  documents: {
    en: ["Marriage registration certificate", "Age proof of bride and groom", "Income certificate or BPL card", "Aadhaar card", "Bank passbook of the bride"],
    hi: ["विवाह पंजीकरण प्रमाण पत्र", "दुल्हन और दूल्हे की उम्र का सबूत", "आय प्रमाण पत्र या BPL कार्ड", "आधार कार्ड", "दुल्हन की बैंक पासबुक"],
  },

  officialUrl: "https://betastate.bihar.gov.in/champainDowry.aspx",
  sources: ["https://betastate.bihar.gov.in/champainDowry.aspx", "https://www.myscheme.gov.in/schemes/mkvy"],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
