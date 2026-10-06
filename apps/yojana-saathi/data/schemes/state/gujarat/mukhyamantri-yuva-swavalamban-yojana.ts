import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-yuva-swavalamban-yojana",
  overlapGroup: "scholarship",
  name: { en: "Mukhyamantri Yuva Swavalamban Yojana (MYSY)", hi: "मुख्यमंत्री युवा स्वावलंबन योजना (MYSY)" },
  aka: ["MYSY", "MYSY scholarship", "Mukhyamantri Yuva Swavalamban"],
  shortDescription: {
    en: "Gujarat students with 80+ percentile in Class 10 or 12 and family income up to ₹6 lakh get 50% of tuition fees (up to ₹2 lakh a year for medicine), plus hostel and book help.",
    hi: "10वीं या 12वीं में 80+ पर्सेंटाइल और ₹6 लाख तक पारिवारिक आय वाले गुजरात के छात्रों को ट्यूशन फ़ीस का 50% (मेडिकल में सालाना ₹2 लाख तक) और हॉस्टल व किताबों की मदद मिलती है।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Education Department (Commissionerate of Higher Education / KCG), Government of Gujarat", hi: "शिक्षा विभाग (उच्च शिक्षा आयुक्तालय / KCG), गुजरात सरकार" },
  categories: ["education"],
  tags: ["mysy", "scholarship", "tuition fee", "engineering", "medical", "diploma", "college", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 10000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("gujarat"),
    labelled(isTrue("student"), { en: "Studying in a diploma or degree course", hi: "डिप्लोमा या डिग्री कोर्स में पढ़ रहे हों" }),
    incomeUpTo(600_000),
  ),

  details: {
    en: [
      "MYSY is Gujarat's main merit-cum-means scholarship for diploma and undergraduate degree students. It pays half the tuition fee, up to a cap that depends on the course, and helps with hostel costs and books.",
      "To qualify you need at least 80 percentile in the Class 12 board (for a degree) or the Class 10 board (for a diploma), or 65% in your diploma (for diploma-to-degree), and family income up to ₹6 lakh a year.",
      "You apply every year on mysy.gujarat.gov.in and get your documents checked at a help centre in your college. For 2026-27 the last date to apply is 30 October 2026, and the budget set aside ₹400 crore for more than 90,000 students.",
    ],
    hi: [
      "MYSY गुजरात की मुख्य मेरिट-कम-मीन्स छात्रवृत्ति है, जो डिप्लोमा और स्नातक डिग्री के छात्रों के लिए है। इसमें ट्यूशन फ़ीस का आधा हिस्सा (कोर्स के हिसाब से तय सीमा तक) मिलता है, और हॉस्टल व किताबों के खर्च में भी मदद मिलती है।",
      "पात्र होने के लिए डिग्री के लिए 12वीं बोर्ड में या डिप्लोमा के लिए 10वीं बोर्ड में कम से कम 80 पर्सेंटाइल चाहिए (डिप्लोमा से डिग्री के लिए डिप्लोमा में 65%), और परिवार की सालाना आय ₹6 लाख तक होनी चाहिए।",
      "हर साल mysy.gujarat.gov.in पर आवेदन करना होता है और कॉलेज के हेल्प सेंटर पर दस्तावेज़ जाँच करानी होती है। 2026-27 के लिए आवेदन की आख़िरी तारीख 30 अक्टूबर 2026 है, और बजट में 90,000 से ज़्यादा छात्रों के लिए ₹400 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Tuition fee help: 50% of the fee or the course cap, whichever is lower: ₹2 lakh a year for medicine and dentistry; ₹50,000 for engineering, pharmacy, architecture, agriculture, AYUSH, nursing, physiotherapy, paramedical and veterinary; ₹25,000 for diploma; ₹10,000 for BA, BCom, BSc, BBA and BCA.",
      "Hostel and food help of ₹1,200 a month for 10 months (₹12,000 a year) if you study outside your home taluka and could not get a government hostel seat.",
      "One-time books and instruments help: ₹10,000 for medicine and dentistry, ₹5,000 for engineering and similar courses, ₹3,000 for diploma.",
    ],
    hi: [
      "ट्यूशन फ़ीस सहायता: फ़ीस का 50% या कोर्स की सीमा, जो कम हो: मेडिकल और डेंटल में सालाना ₹2 लाख; इंजीनियरिंग, फ़ार्मेसी, आर्किटेक्चर, कृषि, आयुष, नर्सिंग, फ़िज़ियोथेरेपी, पैरामेडिकल और पशु चिकित्सा में ₹50,000; डिप्लोमा में ₹25,000; BA, BCom, BSc, BBA और BCA में ₹10,000।",
      "हॉस्टल और खाने के लिए 10 महीने तक ₹1,200 महीना (सालाना ₹12,000), अगर आप अपने तालुका से बाहर पढ़ते हैं और सरकारी हॉस्टल में जगह नहीं मिली।",
      "किताबों और उपकरणों के लिए एक बार की मदद: मेडिकल-डेंटल में ₹10,000, इंजीनियरिंग जैसे कोर्स में ₹5,000, डिप्लोमा में ₹3,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Degree courses: at least 80 percentile in the Class 12 board exam (science or general stream).",
      "Diploma courses: at least 80 percentile in the Class 10 board exam.",
      "Diploma-to-degree: at least 65% in the diploma.",
      "Family income up to ₹6 lakh a year.",
      "To renew each year: pass the previous year with at least 50% marks and keep 75% attendance.",
    ],
    hi: [
      "डिग्री कोर्स: 12वीं बोर्ड (विज्ञान या सामान्य प्रवाह) में कम से कम 80 पर्सेंटाइल।",
      "डिप्लोमा कोर्स: 10वीं बोर्ड में कम से कम 80 पर्सेंटाइल।",
      "डिप्लोमा से डिग्री: डिप्लोमा में कम से कम 65%।",
      "परिवार की सालाना आय ₹6 लाख तक।",
      "हर साल नवीनीकरण के लिए: पिछला साल कम से कम 50% अंकों से पास करें और 75% हाज़िरी रखें।",
    ],
  },
  exclusions: {
    en: [
      "Postgraduate courses are not covered.",
      "Family income above ₹6 lakh a year.",
      "You can take only one government scholarship along with MYSY's tuition help (the Chief Minister Scholarship, CMSS, is an allowed exception).",
    ],
    hi: [
      "पोस्टग्रेजुएट कोर्स इसमें शामिल नहीं हैं।",
      "परिवार की सालाना आय ₹6 लाख से ज़्यादा।",
      "MYSY के साथ केंद्र या राज्य की कोई दूसरी छात्रवृत्ति नहीं ली जा सकती (मुख्यमंत्री छात्रवृत्ति, CMSS, इसका अपवाद है)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to mysy.gujarat.gov.in. First-time applicants click Student Registration; renewal students use Student Login (login is by OTP).",
        "Fill in the form and upload your documents.",
        "Get the documents verified at the MYSY help centre in your college or university within the deadline (5 November 2026 for 2026-27).",
        "Complete Aadhaar biometric e-KYC if asked, and track your status under Student Status.",
      ],
      hi: [
        "mysy.gujarat.gov.in पर जाएँ। पहली बार आवेदन करने वाले Student Registration पर क्लिक करें; नवीनीकरण वाले Student Login करें (लॉगिन OTP से होता है)।",
        "फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "समय सीमा के अंदर (2026-27 के लिए 5 नवंबर 2026) अपने कॉलेज या विश्वविद्यालय के MYSY हेल्प सेंटर पर दस्तावेज़ जाँच कराएँ।",
        "माँगे जाने पर आधार बायोमेट्रिक e-KYC करें, और Student Status में अपनी स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Ration card", "Class 10 or 12 marksheet", "Admission letter from the admission committee", "Fee receipts", "Parent's income certificate (from the talati, Mamlatdar or TDO)", "Self-declaration", "Certificate from the college principal", "Hostel and mess receipts or rent agreement (for hostel help)", "Bank passbook first page"],
    hi: ["आधार कार्ड", "राशन कार्ड", "10वीं या 12वीं की मार्कशीट", "प्रवेश समिति का दाख़िला पत्र", "फ़ीस की रसीदें", "माता-पिता का आय प्रमाण पत्र (तलाटी, मामलतदार या TDO से)", "स्व-घोषणा पत्र", "कॉलेज के प्रिंसिपल का प्रमाण पत्र", "हॉस्टल और मेस की रसीदें या किराया अनुबंध (हॉस्टल सहायता के लिए)", "बैंक पासबुक का पहला पन्ना"],
  },
  faqs: [
    {
      q: { en: "I forgot to apply in my first year. Can I still apply?", hi: "मैं पहले साल आवेदन करना भूल गया। क्या अब कर सकता हूँ?" },
      a: {
        en: "Yes. Use the Delayed Application option on the portal in any year of your course.",
        hi: "हाँ। कोर्स के किसी भी साल में पोर्टल पर Delayed Application विकल्प से आवेदन करें।",
      },
    },
    {
      q: { en: "Do I have to apply every year?", hi: "क्या हर साल आवेदन करना होगा?" },
      a: {
        en: "Yes. You file a renewal application every year with your latest marksheet and fee receipts.",
        hi: "हाँ। हर साल अपनी नई मार्कशीट और फ़ीस रसीदों के साथ नवीनीकरण आवेदन करना होता है।",
      },
    },
    {
      q: { en: "Is there a helpline?", hi: "क्या कोई हेल्पलाइन है?" },
      a: {
        en: "Yes: 079-26566000 or 7043333181, from 10:30 am to 6 pm.",
        hi: "हाँ: 079-26566000 या 7043333181, सुबह 10:30 से शाम 6 बजे तक।",
      },
    },
  ],

  officialUrl: "https://mysy.gujarat.gov.in/",
  sources: [
    "https://mysy.gujarat.gov.in/",
    "https://mysy.gujarat.gov.in/Noticeboard/MYSY%20FAQ%2025-26.pdf",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
