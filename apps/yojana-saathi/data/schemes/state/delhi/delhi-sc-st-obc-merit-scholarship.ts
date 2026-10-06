import { all, any, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-sc-st-obc-merit-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: {
    en: "Delhi Merit Scholarship for SC/ST/OBC College Students",
    hi: "दिल्ली SC/ST/OBC कॉलेज छात्र मेरिट छात्रवृत्ति",
  },
  aka: ["Delhi merit scholarship SC ST OBC", "Merit Scholarship professional technical colleges Delhi"],
  shortDescription: {
    en: "SC, ST and OBC students from Delhi in college, diploma or professional courses who scored 60% or more last year get ₹8,000 to ₹24,000 a year, depending on the course and whether they live in a hostel.",
    hi: "कॉलेज, डिप्लोमा या प्रोफ़ेशनल कोर्स में पढ़ रहे दिल्ली के SC, ST और OBC छात्रों को, जिनके पिछले साल 60% या ज़्यादा अंक आए, कोर्स और हॉस्टल के हिसाब से हर साल ₹8,000 से ₹24,000 मिलते हैं।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department for the Welfare of SC/ST/OBC, Govt. of NCT of Delhi", hi: "SC/ST/OBC कल्याण विभाग, दिल्ली सरकार" },
  categories: ["education"],
  tags: ["scholarship", "college", "sc", "st", "obc", "engineering", "merit", "delhi"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 8000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("delhi"),
    when("caste", "in", ["sc", "st", "pvtg", "obc"]),
    isTrue("student"),
    labelled(any(when("caste", "in", ["sc", "st", "pvtg"]), incomeUpTo(300_000)), {
      en: "SC/ST students: no income limit. OBC students: family income up to ₹3 lakh a year",
      hi: "SC/ST छात्र: आय की कोई सीमा नहीं। OBC छात्र: परिवार की सालाना आय ₹3 लाख तक",
    }),
  ),

  details: {
    en: [
      "This Delhi government scholarship rewards SC, ST and OBC students who do well in college, diploma, certificate and professional courses. The yearly amount depends on the course group and on whether you live in a hostel or travel daily.",
      "You can get it even if you already receive a stipend from your institution or the government. Apply every year on the Delhi e-District portal; the money goes to your Aadhaar-seeded bank account.",
    ],
    hi: [
      "दिल्ली सरकार की यह छात्रवृत्ति कॉलेज, डिप्लोमा, सर्टिफ़िकेट और प्रोफ़ेशनल कोर्स में अच्छा करने वाले SC, ST और OBC छात्रों के लिए है। सालाना राशि कोर्स के समूह और इस पर निर्भर है कि आप हॉस्टल में रहते हैं या रोज़ आते-जाते हैं।",
      "अगर आपको संस्थान या सरकार से पहले से स्टाइपेंड मिल रहा है, तब भी यह मिल सकती है। हर साल दिल्ली ई-डिस्ट्रिक्ट पोर्टल पर आवेदन करें; पैसा आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "Degree courses in medicine, engineering, agriculture, veterinary and other professional fields: ₹20,000 a year (hostel) or ₹12,000 (day scholar).",
      "Postgraduate professional and technical courses: ₹24,000 a year (hostel) or ₹15,000 (day scholar).",
      "Diploma courses (engineering, hotel management, AYUSH etc.) and science PG: ₹15,000 (hostel) or ₹9,000 (day scholar).",
      "General graduation in arts, commerce and other subjects: ₹12,000 (hostel) or ₹8,000 (day scholar); general PG: ₹15,000 or ₹9,000.",
    ],
    hi: [
      "मेडिकल, इंजीनियरिंग, कृषि, पशु चिकित्सा और दूसरे प्रोफ़ेशनल डिग्री कोर्स: हर साल ₹20,000 (हॉस्टल) या ₹12,000 (डे स्कॉलर)।",
      "प्रोफ़ेशनल और तकनीकी पोस्टग्रेजुएट कोर्स: हर साल ₹24,000 (हॉस्टल) या ₹15,000 (डे स्कॉलर)।",
      "डिप्लोमा कोर्स (इंजीनियरिंग, होटल मैनेजमेंट, आयुष आदि) और साइंस PG: ₹15,000 (हॉस्टल) या ₹9,000 (डे स्कॉलर)।",
      "आर्ट्स, कॉमर्स और दूसरे विषयों में सामान्य स्नातक: ₹12,000 (हॉस्टल) या ₹8,000 (डे स्कॉलर); सामान्य PG: ₹15,000 या ₹9,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to SC, ST or OBC, with a caste certificate from the Delhi Revenue Department (or a Delhi domicile certificate if the SC certificate is from another state).",
      "Studying in a recognised college, professional or technical institution or university.",
      "Scored at least 60% marks in the previous academic year.",
      "No income limit for SC and ST students. For OBC students, family income up to ₹3 lakh a year.",
      "A study gap of up to 3 years is allowed with an affidavit.",
    ],
    hi: [
      "SC, ST या OBC वर्ग से हो, दिल्ली राजस्व विभाग से जारी जाति प्रमाण पत्र के साथ (SC प्रमाण पत्र दूसरे राज्य का हो तो दिल्ली का अधिवास प्रमाण पत्र)।",
      "मान्यता प्राप्त कॉलेज, प्रोफ़ेशनल या तकनीकी संस्थान या विश्वविद्यालय में पढ़ रहा हो।",
      "पिछले शैक्षणिक साल में कम से कम 60% अंक हों।",
      "SC और ST छात्रों के लिए आय की कोई सीमा नहीं। OBC छात्रों के लिए परिवार की सालाना आय ₹3 लाख तक।",
      "शपथ पत्र देकर 3 साल तक का पढ़ाई का अंतराल मान्य है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register or log in on the Delhi e-District portal (edistrict.delhigovt.nic.in).",
        "Choose 'Merit Scholarship to SC/ST/OBC Students of College/Professional Institutions'.",
        "Upload the caste certificate, last year's mark sheet, fee or admission proof (and income certificate for OBC), and submit.",
      ],
      hi: [
        "दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर रजिस्टर या लॉग इन करें।",
        "'Merit Scholarship to SC/ST/OBC Students of College/Professional Institutions' चुनें।",
        "जाति प्रमाण पत्र, पिछले साल की मार्कशीट, फ़ीस या दाख़िले का प्रमाण (और OBC के लिए आय प्रमाण पत्र) अपलोड करके जमा करें।",
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
