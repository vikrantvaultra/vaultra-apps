import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ap-post-matric-fee-reimbursement",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "AP Post-Matric Scholarship (Fee Reimbursement and Maintenance)", hi: "आंध्र प्रदेश पोस्ट-मैट्रिक छात्रवृत्ति (फ़ीस प्रतिपूर्ति और रख-रखाव भत्ता)" },
  aka: ["RTF", "MTF", "Jnanabhumi scholarship", "Vidya Deevena", "Vasathi Deevena", "AP fee reimbursement"],
  shortDescription: {
    en: "Andhra Pradesh pays college fees (RTF) to the college and a yearly maintenance allowance (MTF) to students from poorer SC, ST, BC, EBC, Kapu and minority families studying after Class 10.",
    hi: "आंध्र प्रदेश सरकार कक्षा 10 के बाद पढ़ रहे गरीब SC, ST, BC, EBC, कापु और अल्पसंख्यक परिवारों के छात्रों की कॉलेज फ़ीस (RTF) कॉलेज को देती है और छात्रों को सालाना रख-रखाव भत्ता (MTF) देती है।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Social Welfare, Tribal Welfare, BC Welfare and Minority Welfare Departments, Government of Andhra Pradesh",
    hi: "समाज कल्याण, जनजाति कल्याण, पिछड़ा वर्ग कल्याण और अल्पसंख्यक कल्याण विभाग, आंध्र प्रदेश सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "fee reimbursement", "rtf", "mtf", "jnanabhumi", "college", "hostel", "andhra pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(residentOf("andhra-pradesh"), isTrue("student"), incomeUpTo(250_000)),

  details: {
    en: [
      "Andhra Pradesh's post-matric scholarship has two parts. Reimbursement of Tuition Fee (RTF) pays the fee for eligible courses, and Maintenance Fee (MTF) helps with hostel and mess costs. Under the previous government these were called Jagananna Vidya Deevena and Vasathi Deevena; since 2024 they run again under the post-matric scholarship name.",
      "Applications, verification and payments are handled through the Jnanabhumi portal, run by the welfare departments for each community.",
    ],
    hi: [
      "आंध्र प्रदेश की पोस्ट-मैट्रिक छात्रवृत्ति के दो हिस्से हैं। ट्यूशन फ़ीस प्रतिपूर्ति (RTF) पात्र कोर्स की फ़ीस देती है, और रख-रखाव भत्ता (MTF) हॉस्टल और मेस के ख़र्च में मदद करता है। पिछली सरकार में इन्हें जगनन्ना विद्या दीवेना और वसति दीवेना कहा जाता था; 2024 से ये फिर पोस्ट-मैट्रिक छात्रवृत्ति के नाम से चल रही हैं।",
      "आवेदन, जाँच और भुगतान ज्ञानभूमि पोर्टल से होते हैं, जिसे हर समुदाय के कल्याण विभाग चलाते हैं।",
    ],
  },
  benefits: {
    en: [
      "Tuition fee for eligible courses reimbursed (RTF), as fixed by the government for the course.",
      "A yearly maintenance allowance (MTF) for hostel and mess costs, depending on the course.",
    ],
    hi: [
      "पात्र कोर्स की ट्यूशन फ़ीस की प्रतिपूर्ति (RTF), कोर्स के लिए सरकार की तय दर से।",
      "हॉस्टल और मेस के ख़र्च के लिए सालाना रख-रखाव भत्ता (MTF), कोर्स के हिसाब से।",
    ],
  },
  eligibilityText: {
    en: [
      "A student from Andhra Pradesh studying a post-matric course (ITI, polytechnic, degree, PG, professional) at a recognised institution in the state.",
      "From an SC, ST, BC, EBC, Kapu or minority family.",
      "Family income up to ₹2.5 lakh a year.",
      "Admitted through the convener (government) quota where that applies, and meets the attendance rules.",
    ],
    hi: [
      "आंध्र प्रदेश का छात्र जो राज्य के किसी मान्यता प्राप्त संस्थान में पोस्ट-मैट्रिक कोर्स (ITI, पॉलिटेक्निक, डिग्री, PG, प्रोफ़ेशनल) कर रहा हो।",
      "SC, ST, BC, EBC, कापु या अल्पसंख्यक परिवार से हो।",
      "परिवार की सालाना आय ₹2.5 लाख तक।",
      "जहाँ लागू हो वहाँ कन्वीनर (सरकारी) कोटे से दाख़िला, और हाज़िरी की शर्तें पूरी हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Your college registers you on the Jnanabhumi portal (jnanabhumi.ap.gov.in) at the start of the academic year.",
        "Complete biometric or Aadhaar eKYC verification at your village or ward secretariat or college when asked.",
        "Track your application and payment status on the Jnanabhumi portal.",
      ],
      hi: [
        "सत्र की शुरुआत में आपका कॉलेज आपको ज्ञानभूमि पोर्टल (jnanabhumi.ap.gov.in) पर दर्ज करता है।",
        "कहे जाने पर गाँव या वार्ड सचिवालय या कॉलेज में बायोमेट्रिक या आधार eKYC पूरी करें।",
        "ज्ञानभूमि पोर्टल पर आवेदन और भुगतान की स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://jnanabhumi.ap.gov.in/",
  sources: ["https://jnanabhumi.ap.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
