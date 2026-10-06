import { all, incomeUpTo, isTrue } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nmmss",
  name: { en: "National Means-cum-Merit Scholarship", hi: "राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति" },
  aka: ["NMMSS", "NMMS"],
  shortDescription: {
    en: "₹12,000 a year for bright students of government and aided schools from class 9 to 12, if the family earns up to ₹3.5 lakh a year. Selection is through a state exam in class 8.",
    hi: "सरकारी और सहायता प्राप्त स्कूलों के होनहार छात्रों को कक्षा 9 से 12 तक हर साल ₹12,000, अगर परिवार की सालाना आय ₹3.5 लाख तक है। चयन कक्षा 8 में राज्य की परीक्षा से होता है।",
  },
  level: "central",
  ministry: "education",
  categories: ["education"],
  tags: ["scholarship", "class 9", "school", "merit", "nmms exam", "government school"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 12000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(isTrue("student"), incomeUpTo(350_000)),

  details: {
    en: [
      "The National Means-cum-Merit Scholarship helps talented children from low-income families stay in school after class 8. It is run by the Department of School Education & Literacy, Ministry of Education.",
      "Every year, each state and UT holds a selection exam for class 8 students. It has two papers: a Mental Ability Test and a Scholastic Aptitude Test. About one lakh new scholarships are given across India, with a fixed quota for each state.",
      "Selected students get ₹12,000 a year (₹1,000 a month) from class 9 to class 12, paid straight into their bank account. They must apply, and renew every year, on the National Scholarship Portal.",
    ],
    hi: [
      "राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति कम आय वाले परिवारों के होनहार बच्चों को कक्षा 8 के बाद पढ़ाई जारी रखने में मदद करती है। इसे शिक्षा मंत्रालय का स्कूल शिक्षा और साक्षरता विभाग चलाता है।",
      "हर साल हर राज्य और केंद्र शासित प्रदेश कक्षा 8 के छात्रों के लिए चयन परीक्षा कराता है। इसमें दो पेपर होते हैं: मानसिक योग्यता परीक्षा और शैक्षिक योग्यता परीक्षा। पूरे देश में लगभग एक लाख नई छात्रवृत्तियाँ दी जाती हैं, हर राज्य का कोटा तय है।",
      "चुने गए छात्रों को कक्षा 9 से 12 तक हर साल ₹12,000 (₹1,000 महीना) सीधे बैंक खाते में मिलते हैं। उन्हें नेशनल स्कॉलरशिप पोर्टल पर आवेदन करना होता है और हर साल नवीनीकरण भी कराना होता है।",
    ],
  },
  benefits: {
    en: [
      "₹12,000 a year (₹1,000 a month) for each selected student.",
      "Paid for up to four years, from class 9 to class 12.",
      "Money goes directly into the student's bank account through DBT.",
    ],
    hi: [
      "हर चुने गए छात्र को साल में ₹12,000 (₹1,000 महीना)।",
      "कक्षा 9 से 12 तक, अधिकतम चार साल तक मिलती है।",
      "पैसा DBT से सीधे छात्र के बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Parents' income from all sources is not more than ₹3.5 lakh a year.",
      "Studying as a regular student in a government, government-aided or local body school.",
      "At least 55% marks in class 7 to sit the exam (50% for SC/ST students).",
      "Must clear the state NMMSS exam in class 8 with at least 40% marks in both papers together (32% for SC/ST).",
      "At least 55% in class 8 at the time of selection (50% for SC/ST).",
    ],
    hi: [
      "माता-पिता की सभी स्रोतों से सालाना आय ₹3.5 लाख से ज़्यादा न हो।",
      "सरकारी, सरकारी सहायता प्राप्त या स्थानीय निकाय के स्कूल में नियमित छात्र हों।",
      "परीक्षा देने के लिए कक्षा 7 में कम से कम 55% अंक (SC/ST छात्रों के लिए 50%)।",
      "कक्षा 8 में राज्य की NMMSS परीक्षा दोनों पेपर मिलाकर कम से कम 40% अंकों से पास करें (SC/ST के लिए 32%)।",
      "चयन के समय कक्षा 8 में कम से कम 55% अंक (SC/ST के लिए 50%)।",
    ],
  },
  exclusions: {
    en: [
      "Students of Kendriya Vidyalayas, Jawahar Navodaya Vidyalayas and private schools are not eligible.",
      "Students of residential government schools that provide free boarding, lodging and education are not eligible.",
      "To keep it after class 10, you need at least 60% in class 10 (55% for SC/ST) and must pass each class in the first attempt.",
      "You can get only one central government scholarship at a time. A gap year in studies ends the scholarship.",
    ],
    hi: [
      "केंद्रीय विद्यालय, जवाहर नवोदय विद्यालय और निजी स्कूलों के छात्र पात्र नहीं हैं।",
      "मुफ़्त रहने, खाने और पढ़ाई वाले सरकारी आवासीय स्कूलों के छात्र पात्र नहीं हैं।",
      "कक्षा 10 के बाद जारी रखने के लिए कक्षा 10 में कम से कम 60% (SC/ST के लिए 55%) चाहिए और हर कक्षा पहली बार में पास करनी होगी।",
      "एक समय में केंद्र सरकार की सिर्फ़ एक छात्रवृत्ति मिल सकती है। पढ़ाई में एक साल का अंतराल आने पर छात्रवृत्ति बंद हो जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "In class 8, fill in the NMMSS exam form announced by your state's education department (usually through your school).",
        "If you are selected, register on the National Scholarship Portal (scholarships.gov.in) with One Time Registration.",
        "Log in, choose National Means-cum-Merit Scholarship and fill in the application with school and bank details.",
        "Your school and district officers verify it online. Renew it on the same portal every year until class 12.",
      ],
      hi: [
        "कक्षा 8 में अपने राज्य के शिक्षा विभाग की NMMSS परीक्षा का फ़ॉर्म भरें (आमतौर पर स्कूल के ज़रिए)।",
        "चयन होने पर नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर वन टाइम रजिस्ट्रेशन करें।",
        "लॉग इन करके राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति चुनें और स्कूल व बैंक की जानकारी के साथ आवेदन भरें।",
        "स्कूल और ज़िले के अधिकारी इसे ऑनलाइन जाँचते हैं। कक्षा 12 तक हर साल इसी पोर्टल पर नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Income certificate of parents", "Class 7 and class 8 mark sheets", "NMMSS exam result or roll number", "Bank account in the student's name", "Caste certificate (if SC/ST)"],
    hi: ["आधार", "माता-पिता का आय प्रमाण पत्र", "कक्षा 7 और 8 की अंकतालिका", "NMMSS परीक्षा का परिणाम या रोल नंबर", "छात्र के नाम पर बैंक खाता", "जाति प्रमाण पत्र (SC/ST होने पर)"],
  },
  faqs: [
    {
      q: { en: "When is the selection exam held?", hi: "चयन परीक्षा कब होती है?" },
      a: {
        en: "Each state holds it for class 8 students, usually around November. Ask your school or check your state's SCERT website for the form.",
        hi: "हर राज्य इसे कक्षा 8 के छात्रों के लिए कराता है, आमतौर पर नवंबर के आसपास। फ़ॉर्म के लिए अपने स्कूल से पूछें या राज्य की SCERT वेबसाइट देखें।",
      },
    },
    {
      q: { en: "Will I lose the scholarship if I change school after class 10?", hi: "कक्षा 10 के बाद स्कूल बदलने पर क्या छात्रवृत्ति बंद हो जाएगी?" },
      a: {
        en: "Not if you move to another government, aided or local body school and meet the marks rule. Moving to a private school ends it.",
        hi: "नहीं, अगर आप किसी दूसरे सरकारी, सहायता प्राप्त या स्थानीय निकाय के स्कूल में जाते हैं और अंकों की शर्त पूरी करते हैं। निजी स्कूल में जाने पर यह बंद हो जाती है।",
      },
    },
  ],

  officialUrl: "https://scholarships.gov.in/",
  sources: [
    "https://scholarships.gov.in/public/schemeGuidelines/NMMSSGuidelines.pdf",
    "https://scholarships.gov.in/",
    "https://news.careers360.com/nmmss-scholarship-2026-27-application-last-date-august-31-nsp-eligibility-benefits",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
