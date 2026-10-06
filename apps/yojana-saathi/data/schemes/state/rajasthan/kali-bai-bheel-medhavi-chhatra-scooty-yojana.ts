import { all, female, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kali-bai-bheel-medhavi-chhatra-scooty-yojana",
  tier: "compact",
  name: { en: "Kali Bai Bheel Medhavi Chhatra Scooty Yojana", hi: "काली बाई भील मेधावी छात्रा स्कूटी योजना" },
  aka: ["Scooty Yojana", "Rajasthan free scooty", "Kali Bai scooty"],
  shortDescription: {
    en: "Meritorious girls in Rajasthan who score well in Class 12 and join college can get a free scooty (or cash in its place) from the state.",
    hi: "राजस्थान में 12वीं में अच्छे अंक लाकर कॉलेज में दाख़िला लेने वाली मेधावी छात्राओं को राज्य से मुफ़्त स्कूटी (या उसकी जगह नकद राशि) मिल सकती है।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "College Education Department, Government of Rajasthan", hi: "कॉलेज शिक्षा विभाग, राजस्थान सरकार" },
  categories: ["education", "women-child"],
  tags: ["scooty", "girls", "college", "merit", "class 12", "rajasthan"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("rajasthan"),
    female(),
    labelled(isTrue("student"), { en: "You have passed Class 12 and are studying in college", hi: "आप 12वीं पास करके कॉलेज में पढ़ रही हैं" }),
    labelled(incomeUpTo(250_000), { en: "Family income up to ₹2.5 lakh a year", hi: "परिवार की सालाना आय ₹2.5 लाख तक" }),
  ),

  details: {
    en: [
      "The Kali Bai Bheel Medhavi Chhatra Scooty Yojana gives scooties to girls who did well in Class 12 and then join a regular undergraduate course. It is run by the College Education Department, and a similar Devnarayan scooty scheme exists for girls from the MBC communities.",
      "Scooties are given in the order of merit within a fixed number per district and category. In some years the state has offered a cash amount in place of the scooty; check the current year's notice for the options.",
    ],
    hi: [
      "काली बाई भील मेधावी छात्रा स्कूटी योजना उन छात्राओं को स्कूटी देती है जिन्होंने 12वीं में अच्छे अंक लाए और फिर नियमित स्नातक कोर्स में दाख़िला लिया। इसे कॉलेज शिक्षा विभाग चलाता है, और अति पिछड़ा वर्ग (MBC) की छात्राओं के लिए इसी तरह की देवनारायण स्कूटी योजना भी है।",
      "हर ज़िले और वर्ग की तय संख्या में मेरिट के क्रम से स्कूटी दी जाती है। कुछ सालों में स्कूटी की जगह नकद राशि का विकल्प भी दिया गया है; इस साल के विकल्प मौजूदा सूचना में देखें।",
    ],
  },
  benefits: {
    en: [
      "A free scooty, given in order of merit.",
      "Helmet, registration and insurance are usually included with the scooty.",
      "Where offered, a one-time cash amount in place of the scooty.",
    ],
    hi: [
      "मेरिट के क्रम से मुफ़्त स्कूटी।",
      "स्कूटी के साथ आमतौर पर हेलमेट, रजिस्ट्रेशन और बीमा भी शामिल।",
      "जहाँ विकल्प हो, वहाँ स्कूटी की जगह एक बार की नकद राशि।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a girl from Rajasthan who passed Class 12 with the minimum marks set for the scheme (higher for CBSE than for the Rajasthan board).",
      "You are in a regular undergraduate course at a recognised college or university in Rajasthan.",
      "Your family's income is up to ₹2.5 lakh a year.",
    ],
    hi: [
      "आप राजस्थान की छात्रा हैं और योजना के लिए तय न्यूनतम अंकों से 12वीं पास की है (CBSE के लिए राजस्थान बोर्ड से ज़्यादा)।",
      "आप राजस्थान के किसी मान्य कॉलेज या विश्वविद्यालय में नियमित स्नातक कोर्स में हैं।",
      "आपके परिवार की सालाना आय ₹2.5 लाख तक है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When applications open, log in to sso.rajasthan.gov.in and open the College Education scholarship/scooty application.",
        "Fill in the form with your Jan Aadhaar, Class 12 marks and college details, and upload documents.",
        "Check the merit list and follow the college's instructions for collecting the scooty.",
      ],
      hi: [
        "आवेदन खुलने पर sso.rajasthan.gov.in पर लॉग इन करें और कॉलेज शिक्षा की छात्रवृत्ति/स्कूटी आवेदन खोलें।",
        "जन आधार, 12वीं के अंक और कॉलेज की जानकारी से फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "मेरिट सूची देखें और स्कूटी लेने के लिए कॉलेज के निर्देश मानें।",
      ],
    },
  },

  officialUrl: "https://hte.rajasthan.gov.in/",
  sources: ["https://hte.rajasthan.gov.in/", "https://www.indiascholarships.in/scholarships/kali-bai-bhil-meritorious-girls-scooty-scheme/eligibility"],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "check-status",
};

export default scheme;
