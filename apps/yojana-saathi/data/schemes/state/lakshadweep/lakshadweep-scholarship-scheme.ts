import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "lakshadweep-scholarship-scheme",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Lakshadweep Scholarship Scheme", hi: "लक्षद्वीप छात्रवृत्ति योजना" },
  aka: ["Lakshadweep scholarship", "UTL scholarship NSP"],
  shortDescription: {
    en: "Lakshadweep students in higher education, on the mainland or at the islands' colleges, can get a scholarship from the UT Administration through the National Scholarship Portal.",
    hi: "मुख्य भूमि या द्वीपों के कॉलेजों में उच्च शिक्षा ले रहे लक्षद्वीप के छात्रों को राष्ट्रीय छात्रवृत्ति पोर्टल के ज़रिए केंद्र शासित प्रदेश प्रशासन से छात्रवृत्ति मिल सकती है।",
  },
  level: "state",
  state: "lakshadweep",
  department: {
    en: "Directorate of Education (Scholarship Cell), Lakshadweep Administration",
    hi: "शिक्षा निदेशालय (छात्रवृत्ति प्रकोष्ठ), लक्षद्वीप प्रशासन",
  },
  categories: ["education"],
  tags: ["scholarship", "higher education", "college", "nsp", "lakshadweep"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(residentOf("lakshadweep"), isTrue("student")),

  details: {
    en: [
      "The Lakshadweep Administration's Directorate of Education pays scholarships to island students who go on to higher studies, whether they got their seat through the department, an entrance exam or on their own. Since 2020-21 the money is paid through the National Scholarship Portal (NSP).",
      "From 2025-26, students at the islands' own institutions (DIET Kavaratti, the Government Arts & Science Colleges at Androth and Kadmat, the College of Education at Kadmat and the Government Polytechnic at Minicoy) also apply on NSP. The 2025-26 window ran from 14 August to 15 October 2025. Amounts depend on the course and fees and are not published as a fixed figure.",
    ],
    hi: [
      "लक्षद्वीप प्रशासन का शिक्षा निदेशालय उच्च शिक्षा के लिए जाने वाले द्वीप के छात्रों को छात्रवृत्ति देता है, चाहे सीट विभाग से मिली हो, प्रवेश परीक्षा से या अपने दम पर। 2020-21 से यह पैसा राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) से दिया जाता है।",
      "2025-26 से द्वीपों के अपने संस्थानों (DIET कवरत्ती, आंद्रोत और कदमत के सरकारी कला एवं विज्ञान कॉलेज, कदमत का शिक्षा महाविद्यालय और मिनिकॉय का सरकारी पॉलिटेक्निक) के छात्र भी NSP पर आवेदन करते हैं। 2025-26 के लिए आवेदन 14 अगस्त से 15 अक्टूबर 2025 तक खुले थे। राशि कोर्स और फ़ीस पर निर्भर है और कोई तय रकम नहीं छपी है।",
    ],
  },
  benefits: {
    en: [
      "Scholarship for higher studies, paid into the student's bank account.",
      "Covers students on the mainland and at Lakshadweep's own colleges.",
      "Both new and renewal students can apply each year.",
    ],
    hi: [
      "उच्च शिक्षा के लिए छात्रवृत्ति, छात्र के बैंक खाते में।",
      "मुख्य भूमि और लक्षद्वीप के अपने कॉलेजों, दोनों के छात्रों के लिए।",
      "नए और नवीनीकरण वाले, दोनों तरह के छात्र हर साल आवेदन कर सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A native of Lakshadweep (nativity or ST certificate).",
      "Studying in a higher education course after Class 12, on the mainland or in Lakshadweep.",
      "Applies on NSP within the yearly window and completes Aadhaar-based bio-authentication.",
    ],
    hi: [
      "लक्षद्वीप का मूल निवासी (नेटिविटी या ST प्रमाण पत्र)।",
      "12वीं के बाद किसी उच्च शिक्षा कोर्स में पढ़ रहा हो, मुख्य भूमि पर या लक्षद्वीप में।",
      "हर साल तय समय में NSP पर आवेदन करे और आधार से बायो-ऑथेंटिकेशन पूरा करे।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Do the One Time Registration (OTR) on scholarships.gov.in with Aadhaar face authentication.",
        "Apply for the Lakshadweep Scholarship Scheme while the window is open (in 2025-26 it was 14 August to 15 October).",
        "Get your application verified by your institution, then send the signed confirmation page with the documents to the Scholarship Cell, Directorate of Education, Kavaratti.",
      ],
      hi: [
        "scholarships.gov.in पर आधार फ़ेस ऑथेंटिकेशन से वन टाइम रजिस्ट्रेशन (OTR) करें।",
        "आवेदन खुले रहने के दौरान लक्षद्वीप छात्रवृत्ति योजना के लिए आवेदन करें (2025-26 में 14 अगस्त से 15 अक्टूबर तक)।",
        "अपने संस्थान से आवेदन की जाँच करवाएँ, फिर हस्ताक्षरित पुष्टि पेज दस्तावेज़ों के साथ छात्रवृत्ति प्रकोष्ठ, शिक्षा निदेशालय, कवरत्ती भेजें।",
      ],
    },
  },
  documents: {
    en: [
      "NSP confirmation page signed by the head of the institution",
      "Nativity or ST certificate",
      "Class 12 or degree certificate, as applicable",
      "Bonafide certificate from the institution",
      "Fee statement and original fee receipts (and hostel approval and fees, if staying in hostel)",
    ],
    hi: [
      "संस्थान प्रमुख से हस्ताक्षरित NSP पुष्टि पेज",
      "नेटिविटी या ST प्रमाण पत्र",
      "12वीं या डिग्री का प्रमाण पत्र, जो लागू हो",
      "संस्थान का बोनाफ़ाइड प्रमाण पत्र",
      "फ़ीस का ब्योरा और फ़ीस की असली रसीदें (हॉस्टल में रहते हों तो हॉस्टल की मंज़ूरी और फ़ीस भी)",
    ],
  },

  officialUrl: "https://scholarships.gov.in/",
  sources: [
    "https://lakshadweep.gov.in/notice/orientation-on-lakshadweep-scholarship-scheme/",
    "https://lakshadweep.gov.in/notice/national-scholarship-portal-nsp/",
    "https://lakshadweep.gov.in/notice/scholarship-for-the-students-of-hei-in-lakshadweep/",
    "https://lakshadweep.gov.in/departments/education/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
