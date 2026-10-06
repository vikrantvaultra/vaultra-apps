import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-higher-education-loan-guarantee",
  tier: "compact",
  name: {
    en: "Delhi Higher Education and Skill Development Guarantee Scheme (Education Loan)",
    hi: "दिल्ली उच्च शिक्षा और कौशल विकास गारंटी योजना (शिक्षा ऋण)",
  },
  aka: ["Delhi education loan guarantee", "HESDGS Delhi", "Modified Higher Education and Skill Development Guarantee Scheme"],
  shortDescription: {
    en: "Students who passed Class 10 and 12 in Delhi and got admission to a recognised college or skill course in Delhi can get a bank education loan backed by a Delhi government guarantee.",
    hi: "दिल्ली से कक्षा 10 और 12 पास करके दिल्ली के मान्यता प्राप्त कॉलेज या कौशल कोर्स में दाख़िला पाने वाले छात्र दिल्ली सरकार की गारंटी पर बैंक से शिक्षा ऋण ले सकते हैं।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Directorate of Higher Education, Govt. of NCT of Delhi", hi: "उच्च शिक्षा निदेशालय, दिल्ली सरकार" },
  categories: ["education"],
  tags: ["education loan", "college loan", "higher education", "guarantee", "skill course", "delhi"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("delhi"), isTrue("student")),

  details: {
    en: [
      "Under this scheme the Delhi government stands guarantee for education loans that approved banks give to students, so you don't need to offer property or a third-party guarantor as security.",
      "It covers diploma, degree (bachelor's, master's and doctoral) and specified skill development courses at recognised institutions in Delhi. The loan can cover fees, exam and library charges, books and equipment, deposits and other course costs. Applications are made on the Delhi e-District portal under 'Modified Higher Education and Skill Development Guarantee Scheme'.",
    ],
    hi: [
      "इस योजना में दिल्ली सरकार मंज़ूर बैंकों से छात्रों को मिलने वाले शिक्षा ऋण की गारंटी लेती है, इसलिए आपको संपत्ति या किसी तीसरे व्यक्ति की गारंटी नहीं देनी पड़ती।",
      "इसमें दिल्ली के मान्यता प्राप्त संस्थानों में डिप्लोमा, डिग्री (स्नातक, स्नातकोत्तर और डॉक्टरेट) और तय कौशल विकास कोर्स आते हैं। ऋण से फ़ीस, परीक्षा और लाइब्रेरी शुल्क, किताबें और उपकरण, जमा राशि और कोर्स के दूसरे ख़र्च पूरे हो सकते हैं। आवेदन दिल्ली ई-डिस्ट्रिक्ट पोर्टल पर 'Modified Higher Education and Skill Development Guarantee Scheme' में होता है।",
    ],
  },
  benefits: {
    en: [
      "Education loan from an approved bank, guaranteed by the Delhi government (no collateral or third-party guarantee needed).",
      "Covers tuition and other course costs such as exam fees, books, equipment and deposits.",
    ],
    hi: [
      "मंज़ूर बैंक से शिक्षा ऋण, जिसकी गारंटी दिल्ली सरकार देती है (गिरवी या तीसरे व्यक्ति की गारंटी नहीं चाहिए)।",
      "ट्यूशन और कोर्स के दूसरे ख़र्च, जैसे परीक्षा फ़ीस, किताबें, उपकरण और जमा राशि।",
    ],
  },
  eligibilityText: {
    en: [
      "Passed Class 10 and Class 12 from Delhi (only Class 10 for courses where that is the qualifying exam). Children of Delhi government employees are also eligible.",
      "Has taken admission through an entrance test or merit-based selection.",
      "The course is a diploma, degree or specified skill development course at a recognised institution in Delhi.",
    ],
    hi: [
      "दिल्ली से कक्षा 10 और कक्षा 12 पास की हो (जिन कोर्स के लिए कक्षा 10 ही योग्यता है, उनके लिए सिर्फ़ कक्षा 10)। दिल्ली सरकार के कर्मचारियों के बच्चे भी पात्र हैं।",
      "प्रवेश परीक्षा या मेरिट के आधार पर दाख़िला लिया हो।",
      "कोर्स दिल्ली के मान्यता प्राप्त संस्थान में डिप्लोमा, डिग्री या तय कौशल विकास कोर्स हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register or log in on the Delhi e-District portal (edistrict.delhigovt.nic.in).",
        "Choose 'Modified Higher Education and Skill Development Guarantee Scheme' and check your eligibility with your Class 10/12 and college details.",
        "Fill in the loan form with the year-wise course costs, your parent's details and your choice of approved bank and branch, and submit.",
      ],
      hi: [
        "दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर रजिस्टर या लॉग इन करें।",
        "'Modified Higher Education and Skill Development Guarantee Scheme' चुनें और कक्षा 10/12 व कॉलेज की जानकारी से अपनी पात्रता जाँचें।",
        "ऋण फ़ॉर्म में साल-दर-साल कोर्स का ख़र्च, माता-पिता की जानकारी और मंज़ूर बैंक व शाखा चुनकर जमा करें।",
      ],
    },
  },

  officialUrl: "https://edistrict.delhigovt.nic.in/in/en/Public/Services.html",
  sources: ["https://edistrict.delhigovt.nic.in/in/en/Public/Services.html"],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "check-status",
};

export default scheme;
