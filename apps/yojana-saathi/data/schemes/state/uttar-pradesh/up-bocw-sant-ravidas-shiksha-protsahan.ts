import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-bocw-sant-ravidas-shiksha-protsahan",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Sant Ravidas Shiksha Protsahan Yojana (UP Construction Workers)", hi: "संत रविदास शिक्षा प्रोत्साहन योजना (उत्तर प्रदेश निर्माण श्रमिक)" },
  aka: ["UP BOCW scholarship", "Sant Ravidas scholarship", "shramik bachchon ki chhatravritti"],
  shortDescription: {
    en: "Children of registered construction workers in Uttar Pradesh get yearly study help from ₹2,000 (Class 1) to ₹12,000 (graduation), more for professional courses, plus merit bonuses.",
    hi: "उत्तर प्रदेश के पंजीकृत निर्माण श्रमिकों के बच्चों को हर साल पढ़ाई के लिए ₹2,000 (कक्षा 1) से ₹12,000 (ग्रेजुएशन) तक, प्रोफ़ेशनल कोर्स के लिए ज़्यादा, और मेधा पर अतिरिक्त इनाम।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "UP Building and Other Construction Workers Welfare Board, Labour Department, Government of Uttar Pradesh",
    hi: "उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड, श्रम विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["construction worker", "scholarship", "children", "education", "bocw", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(when("occupation", "in", ["construction-worker"]), {
      en: "A parent is a construction worker registered with the UP BOCW Board for at least one year",
      hi: "माता या पिता UP निर्माण श्रमिक बोर्ड में कम से कम एक साल से पंजीकृत निर्माण श्रमिक हों",
    }),
  ),

  details: {
    en: [
      "Sant Ravidas Shiksha Protsahan Yojana is the education help given by the UP Building and Other Construction Workers Welfare Board to the children of its registered workers, from Class 1 up to research.",
      "A lump sum is paid each year based on the class or course. Students who score well get an extra bonus, and those moving from Class 9 to 12 can get a one-time bicycle subsidy. It is given for up to two children per worker.",
    ],
    hi: [
      "संत रविदास शिक्षा प्रोत्साहन योजना उत्तर प्रदेश भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड की ओर से पंजीकृत श्रमिकों के बच्चों को कक्षा 1 से रिसर्च तक पढ़ाई में मदद है।",
      "कक्षा या कोर्स के हिसाब से हर साल एकमुश्त राशि मिलती है। अच्छे अंक लाने वालों को अतिरिक्त इनाम मिलता है, और कक्षा 9 से 12 में आगे बढ़ने पर एक बार साइकिल के लिए मदद मिल सकती है। एक श्रमिक के अधिकतम दो बच्चों को लाभ मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Class 1 to 5: ₹2,000; Class 6 to 10: ₹2,500; Class 11 and 12: ₹3,000 a year.",
      "Graduation, ITI, polytechnic or vocational courses: ₹12,000; post-graduation: ₹24,000.",
      "Professional courses (B.Tech, MBA, B.Ed, nursing, law and others): the course fee or ₹60,000, whichever is less.",
      "Full fee for MBBS or medical PG at government colleges, and for IIT, IIM, NIT, NIFT or national law universities; ₹1 lakh for research.",
      "Merit bonus: ₹5,000 (boys) or ₹8,000 (girls) for 70% in Class 10 or 12; ₹10,000 or ₹12,000 for 60% in graduation or PG.",
    ],
    hi: [
      "कक्षा 1 से 5: ₹2,000; कक्षा 6 से 10: ₹2,500; कक्षा 11 और 12: ₹3,000 सालाना।",
      "ग्रेजुएशन, ITI, पॉलिटेक्निक या व्यावसायिक कोर्स: ₹12,000; पोस्ट-ग्रेजुएशन: ₹24,000।",
      "प्रोफ़ेशनल कोर्स (B.Tech, MBA, B.Ed, नर्सिंग, क़ानून आदि): कोर्स की फ़ीस या ₹60,000, जो कम हो।",
      "सरकारी कॉलेज से MBBS या मेडिकल PG, और IIT, IIM, NIT, NIFT या राष्ट्रीय विधि विश्वविद्यालय में पूरी फ़ीस; रिसर्च के लिए ₹1 लाख।",
      "मेधा इनाम: 10वीं या 12वीं में 70% पर ₹5,000 (लड़के) या ₹8,000 (लड़कियाँ); ग्रेजुएशन या PG में 60% पर ₹10,000 या ₹12,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Parent registered with the UP BOCW Board for at least 365 days, with registration up to date.",
      "Child studies in a recognised school, college or institute and meets the age limit for the class (for example 18 to 25 for graduation).",
      "At most two children per worker.",
      "Has not taken a similar benefit from another state or central scheme.",
    ],
    hi: [
      "माता या पिता UP निर्माण श्रमिक बोर्ड में कम से कम 365 दिन से पंजीकृत हों और पंजीकरण चालू हो।",
      "बच्चा मान्यता प्राप्त स्कूल, कॉलेज या संस्थान में पढ़ता हो और कक्षा की उम्र सीमा में हो (जैसे ग्रेजुएशन के लिए 18 से 25 साल)।",
      "एक श्रमिक के अधिकतम दो बच्चे।",
      "किसी दूसरी राज्य या केंद्र योजना से ऐसा लाभ न लिया हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in on upbocw.in with the worker's registration details.",
        "Choose Sant Ravidas Shiksha Protsahan Yojana and fill in the child's class and institute details.",
        "Upload the mark sheet, next-class fee receipt and other documents, then submit.",
      ],
      hi: [
        "upbocw.in पर श्रमिक के पंजीकरण की जानकारी से लॉग इन करें।",
        "संत रविदास शिक्षा प्रोत्साहन योजना चुनें और बच्चे की कक्षा और संस्थान की जानकारी भरें।",
        "मार्कशीट, अगली कक्षा की फ़ीस रसीद और दूसरे दस्तावेज़ अपलोड करके जमा करें।",
      ],
    },
  },

  officialUrl: "https://website.upbocw.in/schemes",
  sources: ["https://website.upbocw.in/schemes", "https://upbocw.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "active",
};

export default scheme;
