import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "namo-saraswati-vigyan-sadhana-yojana",
  name: { en: "Namo Saraswati Vigyan Sadhana Yojana", hi: "नमो सरस्वती विज्ञान साधना योजना" },
  aka: ["Namo Saraswati", "Namo Saraswati scholarship", "Namo Vigyan"],
  shortDescription: {
    en: "Students in Gujarat who take science in Classes 11 and 12 get ₹25,000 over two years: ₹1,000 a month plus ₹5,000 after passing the Class 12 board.",
    hi: "गुजरात में कक्षा 11 और 12 में विज्ञान लेने वाले छात्रों को दो साल में ₹25,000 मिलते हैं: हर महीने ₹1,000 और 12वीं बोर्ड पास करने पर ₹5,000।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Education Department, Government of Gujarat", hi: "शिक्षा विभाग, गुजरात सरकार" },
  categories: ["education"],
  tags: ["science", "scholarship", "class 11", "class 12", "namo saraswati", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("gujarat"),
    labelled(isTrue("student"), { en: "Studying science in Class 11 or 12", hi: "कक्षा 11 या 12 में विज्ञान पढ़ रहे हों" }),
    incomeUpTo(600_000),
  ),

  details: {
    en: [
      "Namo Saraswati Vigyan Sadhana Yojana is a Gujarat government scholarship to get more students to choose the science stream after Class 10. It started in 2024 and is open to both girls and boys.",
      "A student gets ₹1,000 a month for 10 months in Class 11 and again in Class 12, and ₹5,000 more after passing the Class 12 board exam. That makes ₹25,000 over two years.",
      "The Education Department runs it through schools. The state says science admissions have risen about 19% in two years, and the 2026-27 budget set aside ₹250 crore for about 2.5 lakh students.",
    ],
    hi: [
      "नमो सरस्वती विज्ञान साधना योजना गुजरात सरकार की छात्रवृत्ति है, ताकि 10वीं के बाद ज़्यादा छात्र विज्ञान चुनें। यह 2024 में शुरू हुई और लड़के-लड़कियाँ दोनों इसके पात्र हैं।",
      "कक्षा 11 में और फिर कक्षा 12 में 10 महीने तक हर महीने ₹1,000 मिलते हैं, और 12वीं बोर्ड पास करने पर ₹5,000 अलग से। दो साल में कुल ₹25,000 बनते हैं।",
      "शिक्षा विभाग इसे स्कूलों के ज़रिए चलाता है। राज्य के अनुसार दो साल में विज्ञान में दाख़िले करीब 19% बढ़े हैं, और 2026-27 के बजट में लगभग 2.5 लाख छात्रों के लिए ₹250 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month for 10 months in Class 11 (₹10,000).",
      "₹1,000 a month for 10 months in Class 12 (₹10,000).",
      "₹5,000 more after passing the Class 12 board exam.",
      "Total of ₹25,000, paid into the student's bank account.",
    ],
    hi: [
      "कक्षा 11 में 10 महीने तक ₹1,000 महीना (₹10,000)।",
      "कक्षा 12 में 10 महीने तक ₹1,000 महीना (₹10,000)।",
      "12वीं बोर्ड पास करने पर ₹5,000 अलग से।",
      "कुल ₹25,000, छात्र के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "A student (girl or boy) studying in the science stream in Class 11 or 12 in Gujarat.",
      "Passed Class 10 with at least 50% marks.",
      "Family income is below ₹6 lakh a year.",
    ],
    hi: [
      "गुजरात में कक्षा 11 या 12 में विज्ञान पढ़ने वाला छात्र या छात्रा।",
      "10वीं कम से कम 50% अंकों से पास की हो।",
      "परिवार की सालाना आय ₹6 लाख से कम हो।",
    ],
  },
  exclusions: {
    en: ["Students in the arts or commerce stream.", "Family income of ₹6 lakh or more a year.", "Less than 50% marks in Class 10."],
    hi: ["आर्ट्स या कॉमर्स के छात्र।", "परिवार की सालाना आय ₹6 लाख या उससे ज़्यादा।", "10वीं में 50% से कम अंक।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your school about Namo Saraswati. A nodal officer at the school fills in the form for each eligible student.",
        "Give the school your Aadhaar, a parent's Aadhaar, an income certificate, your bank passbook and a mobile number.",
        "The school sends the list to the Education Department and the money comes into your bank account.",
      ],
      hi: [
        "अपने स्कूल से नमो सरस्वती के बारे में पूछें। स्कूल के नोडल अधिकारी हर पात्र छात्र का फ़ॉर्म भरते हैं।",
        "स्कूल को अपना आधार, माता या पिता का आधार, आय प्रमाण पत्र, बैंक पासबुक और मोबाइल नंबर दें।",
        "स्कूल सूची शिक्षा विभाग को भेजता है और पैसा आपके बैंक खाते में आता है।",
      ],
    },
  },
  documents: {
    en: ["Student's Aadhaar card", "Parent's Aadhaar card", "Family income certificate", "Bank passbook copy", "Class 10 marksheet", "Mobile number"],
    hi: ["छात्र का आधार कार्ड", "माता या पिता का आधार कार्ड", "परिवार का आय प्रमाण पत्र", "बैंक पासबुक की कॉपी", "10वीं की मार्कशीट", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Can girls get both Namo Lakshmi and Namo Saraswati?", hi: "क्या लड़कियों को नमो लक्ष्मी और नमो सरस्वती दोनों मिल सकती हैं?" },
      a: {
        en: "Girls in the science stream are generally covered by both schemes, but ask your school to confirm before counting on both.",
        hi: "विज्ञान पढ़ने वाली लड़कियाँ आम तौर पर दोनों योजनाओं में आती हैं, पर दोनों पर भरोसा करने से पहले अपने स्कूल से पक्का कर लें।",
      },
    },
    {
      q: { en: "What if I fail the Class 12 board?", hi: "अगर मैं 12वीं बोर्ड में फ़ेल हो जाऊँ तो?" },
      a: {
        en: "You keep the monthly amounts already paid, but the final ₹5,000 is given only after you pass the Class 12 board exam.",
        hi: "जो मासिक पैसा मिल चुका है वह आपका है, पर आख़िरी ₹5,000 सिर्फ़ 12वीं बोर्ड पास करने पर ही मिलते हैं।",
      },
    },
  ],

  officialUrl: "https://cmogujarat.gov.in/en/gujarat-budget-2026-2027",
  sources: [
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-gujarat/namo-saraswati-vigyan-sadhana-yojana?lgn=en",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
