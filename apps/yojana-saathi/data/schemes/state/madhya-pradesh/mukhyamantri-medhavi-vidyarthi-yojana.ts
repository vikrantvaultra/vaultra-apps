import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-medhavi-vidyarthi-yojana",
  overlapGroup: "scholarship",
  name: { en: "Mukhyamantri Medhavi Vidyarthi Yojana", hi: "मुख्यमंत्री मेधावी विद्यार्थी योजना" },
  aka: ["MMVY", "Medhavi Yojana", "Medhavi Chhatra Yojana"],
  shortDescription: {
    en: "Madhya Pradesh pays the college fees of students who scored 70% in MP Board (or 85% in CBSE/ICSE) Class 12, if family income is under ₹8 lakh.",
    hi: "MP बोर्ड 12वीं में 70% (या CBSE/ICSE में 85%) लाने वाले विद्यार्थियों की कॉलेज फ़ीस मध्य प्रदेश सरकार भरती है, अगर परिवार की आय ₹8 लाख से कम है।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Technical Education, Skill Development and Employment Department, Government of Madhya Pradesh",
    hi: "तकनीकी शिक्षा, कौशल विकास एवं रोज़गार विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "college fees", "engineering", "medical", "meritorious", "madhya pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("madhya-pradesh"),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप विद्यार्थी हैं" }),
    labelled(incomeUpTo(800_000), { en: "Parent's income under ₹8 lakh a year", hi: "माता-पिता/अभिभावक की सालाना आय ₹8 लाख से कम हो" }),
  ),

  details: {
    en: [
      "Mukhyamantri Medhavi Vidyarthi Yojana helps toppers from Madhya Pradesh go to college without worrying about fees. The state pays the admission fee and the actual tuition fee fixed by the fee regulator or government.",
      "It covers a wide range of courses: engineering, medical (MBBS), law at national law universities, graduation and integrated courses at central and state government colleges, and polytechnic diplomas.",
      "Applications are made on the MMVY portal (medhavikalyan.mp.gov.in). The college verifies the form and the fee is paid after sanction. Students must renew every year.",
    ],
    hi: [
      "मुख्यमंत्री मेधावी विद्यार्थी योजना मध्य प्रदेश के होनहार विद्यार्थियों को फ़ीस की चिंता के बिना कॉलेज पढ़ने में मदद करती है। सरकार प्रवेश शुल्क और फ़ीस नियामक समिति या सरकार की तय की हुई असली फ़ीस भरती है।",
      "इसमें कई कोर्स आते हैं: इंजीनियरिंग, मेडिकल (MBBS), राष्ट्रीय विधि विश्वविद्यालयों में कानून, केंद्र और राज्य के सरकारी कॉलेजों में स्नातक व इंटीग्रेटेड कोर्स, और पॉलिटेक्निक डिप्लोमा।",
      "आवेदन MMVY पोर्टल (medhavikalyan.mp.gov.in) पर होता है। कॉलेज फ़ॉर्म की जाँच करता है और मंज़ूरी के बाद फ़ीस भरी जाती है। हर साल नवीनीकरण करना होता है।",
    ],
  },
  benefits: {
    en: [
      "Admission fee and full tuition fee paid by the state for eligible courses.",
      "Government engineering colleges through JEE Main: full tuition fee.",
      "Private engineering colleges with a JEE Main rank within 1.5 lakh: up to ₹1.5 lakh or the actual fee, whichever is less.",
      "MBBS with a NEET rank within 1.5 lakh at government colleges, or private medical colleges in Madhya Pradesh.",
    ],
    hi: [
      "पात्र कोर्सों में प्रवेश शुल्क और पूरी ट्यूशन फ़ीस सरकार भरती है।",
      "JEE Main से सरकारी इंजीनियरिंग कॉलेज में दाख़िला: पूरी ट्यूशन फ़ीस।",
      "JEE Main रैंक 1.5 लाख के अंदर होने पर निजी इंजीनियरिंग कॉलेज: ₹1.5 लाख या असली फ़ीस, जो भी कम हो।",
      "NEET रैंक 1.5 लाख के अंदर होने पर सरकारी कॉलेज या मध्य प्रदेश के निजी मेडिकल कॉलेज में MBBS।",
    ],
  },
  eligibilityText: {
    en: [
      "A native (mool niwasi) of Madhya Pradesh.",
      "Scored 70% or more in MP Board Class 12, or 85% or more in CBSE/ICSE Class 12.",
      "Father's or guardian's annual income is less than ₹8 lakh.",
      "Has taken admission in an eligible course and institution listed in the scheme order.",
    ],
    hi: [
      "मध्य प्रदेश के मूल निवासी हों।",
      "MP बोर्ड 12वीं में 70% या ज़्यादा, या CBSE/ICSE 12वीं में 85% या ज़्यादा अंक हों।",
      "पिता या अभिभावक की सालाना आय ₹8 लाख से कम हो।",
      "योजना के आदेश में दिए पात्र कोर्स और संस्था में दाख़िला लिया हो।",
    ],
  },
  exclusions: {
    en: [
      "Family income of ₹8 lakh or more a year.",
      "Students who got lower marks than the cut-off in Class 12.",
      "Courses or institutions not listed in the scheme order.",
    ],
    hi: [
      "परिवार की सालाना आय ₹8 लाख या उससे ज़्यादा हो।",
      "12वीं में तय सीमा से कम अंक हों।",
      "योजना के आदेश में न दिए गए कोर्स या संस्थान।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to medhavikalyan.mp.gov.in and register for the current academic year using your Samagra ID.",
        "Fill in your marks, admission and income details, upload the documents and submit.",
        "Get the application verified by your college. Renew it every year on the same portal.",
      ],
      hi: [
        "medhavikalyan.mp.gov.in पर जाएँ और समग्र ID से मौजूदा शैक्षणिक सत्र के लिए पंजीयन करें।",
        "अंक, दाख़िला और आय की जानकारी भरें, दस्तावेज़ अपलोड करें और जमा करें।",
        "आवेदन अपने कॉलेज से सत्यापित कराएँ। हर साल इसी पोर्टल पर नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: [
      "MP domicile certificate",
      "Class 10 and 12 mark sheets",
      "Income certificate",
      "Admission letter and fee receipt",
      "JEE/NEET/CLAT rank card, where relevant",
      "Aadhaar and Samagra ID",
    ],
    hi: [
      "मध्य प्रदेश का मूल निवासी प्रमाण पत्र",
      "10वीं और 12वीं की अंकसूची",
      "आय प्रमाण पत्र",
      "दाख़िले का पत्र और फ़ीस की रसीद",
      "जहाँ लागू हो, JEE/NEET/CLAT रैंक कार्ड",
      "आधार और समग्र ID",
    ],
  },
  faqs: [
    {
      q: { en: "Do I have to apply every year?", hi: "क्या हर साल आवेदन करना होगा?" },
      a: {
        en: "You apply fresh once, in the year you join. After that you submit a renewal application on the same portal each year, and the college verifies it.",
        hi: "दाख़िले वाले साल में एक बार नया आवेदन करना होता है। उसके बाद हर साल उसी पोर्टल पर नवीनीकरण आवेदन जमा करें, जिसे कॉलेज सत्यापित करता है।",
      },
    },
    {
      q: { en: "I study outside Madhya Pradesh. Can I apply?", hi: "मैं मध्य प्रदेश के बाहर पढ़ता/पढ़ती हूँ। क्या आवेदन कर सकता/सकती हूँ?" },
      a: {
        en: "Yes, for listed institutions outside the state such as IITs, NITs, national law universities and central government universities. Check the guidelines for outside-state students on the portal.",
        hi: "हाँ, राज्य के बाहर के सूचीबद्ध संस्थानों के लिए, जैसे IIT, NIT, राष्ट्रीय विधि विश्वविद्यालय और केंद्र सरकार के विश्वविद्यालय। पोर्टल पर बाहर के विद्यार्थियों के दिशानिर्देश देखें।",
      },
    },
  ],

  officialUrl: "https://medhavikalyan.mp.gov.in/",
  sources: [
    "https://medhavikalyan.mp.gov.in/MedhaviChhatra/Medhavi_New/About.aspx",
    "https://medhavikalyan.mp.gov.in/MMVY.aspx",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
