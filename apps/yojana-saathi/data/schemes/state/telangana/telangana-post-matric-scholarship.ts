import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-post-matric-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Telangana Post-Matric Scholarship and Fee Reimbursement", hi: "तेलंगाना पोस्ट-मैट्रिक छात्रवृत्ति और फ़ीस प्रतिपूर्ति" },
  aka: ["Fee reimbursement Telangana", "TS ePASS", "TG ePASS", "RTF MTF Telangana"],
  shortDescription: {
    en: "SC, ST, BC, EBC, minority and disabled students in Telangana from low-income families get their college tuition fee reimbursed plus a monthly maintenance allowance through ePASS.",
    hi: "तेलंगाना के कम आय वाले परिवारों के SC, ST, BC, EBC, अल्पसंख्यक और दिव्यांग छात्रों को ePASS से कॉलेज की ट्यूशन फ़ीस की वापसी और हर महीने गुज़ारा भत्ता मिलता है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "SC Development, Tribal Welfare, BC Welfare, Minorities Welfare and Disabled Welfare Departments, Government of Telangana",
    hi: "SC विकास, आदिवासी कल्याण, BC कल्याण, अल्पसंख्यक कल्याण और दिव्यांग कल्याण विभाग, तेलंगाना सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "fee reimbursement", "epass", "post matric", "college", "rtf", "mtf", "telangana"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("telangana"),
    isTrue("student"),
    labelled(incomeUpTo(250_000), { en: "Family income within your category's limit (₹1 lakh to ₹2.5 lakh)", hi: "परिवार की आय आपकी श्रेणी की सीमा में हो (₹1 लाख से ₹2.5 लाख)" }),
  ),

  details: {
    en: [
      "Telangana pays post-matric scholarships through the ePASS portal to students after Class 10, from intermediate and ITI up to degree, engineering, medicine and PG. It has two parts: Reimbursement of Tuition Fee (RTF), paid to the college, and Maintenance Fee (MTF), a monthly allowance for the student.",
      "The scheme covers SC, ST, BC, EBC, minority and disabled students whose family income is within the limit for their group. In 2026 the government said about 11 lakh students were getting scholarships and fee reimbursement in their bank accounts.",
    ],
    hi: [
      "तेलंगाना ePASS पोर्टल से 10वीं के बाद के छात्रों को पोस्ट-मैट्रिक छात्रवृत्ति देता है, इंटर और ITI से लेकर डिग्री, इंजीनियरिंग, मेडिकल और PG तक। इसके दो हिस्से हैं: ट्यूशन फ़ीस की प्रतिपूर्ति (RTF), जो कॉलेज को मिलती है, और मेंटेनेंस फ़ीस (MTF), जो छात्र को हर महीने भत्ते के रूप में मिलती है।",
      "इसमें SC, ST, BC, EBC, अल्पसंख्यक और दिव्यांग छात्र आते हैं जिनके परिवार की आय उनके समूह की सीमा में हो। 2026 में सरकार के अनुसार लगभग 11 लाख छात्रों को छात्रवृत्ति और फ़ीस प्रतिपूर्ति बैंक खाते में मिल रही थी।",
    ],
  },
  benefits: {
    en: [
      "Tuition fee reimbursed as per the government-fixed fee for your course.",
      "Monthly maintenance allowance, for example ₹1,500 a month for engineering, medicine, PG and polytechnic students in college hostels, and ₹1,000 for degree students.",
    ],
    hi: [
      "आपके कोर्स की सरकार द्वारा तय फ़ीस के हिसाब से ट्यूशन फ़ीस की वापसी।",
      "हर महीने गुज़ारा भत्ता, जैसे कॉलेज हॉस्टल में रहने वाले इंजीनियरिंग, मेडिकल, PG और पॉलिटेक्निक छात्रों को ₹1,500 महीना और डिग्री छात्रों को ₹1,000।",
    ],
  },
  eligibilityText: {
    en: [
      "SC students: family income up to ₹2.5 lakh a year.",
      "ST students: family income up to ₹2 lakh a year.",
      "BC, EBC and minority students: up to ₹1.5 lakh in rural areas and ₹2 lakh in urban areas.",
      "Disabled students: parents' income up to ₹1 lakh a year.",
      "Regular course in a recognised college with at least 75% attendance; management quota, spot admission, part-time and distance courses are not covered.",
    ],
    hi: [
      "SC छात्र: परिवार की सालाना आय ₹2.5 लाख तक।",
      "ST छात्र: परिवार की सालाना आय ₹2 लाख तक।",
      "BC, EBC और अल्पसंख्यक छात्र: गाँव में ₹1.5 लाख और शहर में ₹2 लाख तक।",
      "दिव्यांग छात्र: माता-पिता की सालाना आय ₹1 लाख तक।",
      "मान्यता प्राप्त कॉलेज में नियमित कोर्स और कम से कम 75% हाज़िरी; मैनेजमेंट कोटा, स्पॉट एडमिशन, पार्ट-टाइम और दूरस्थ कोर्स शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to telanganaepass.cgg.gov.in and choose 'Post Matric Scholarship Services'.",
        "Register as a fresh or renewal applicant with Aadhaar, income and caste certificate numbers and bank details.",
        "Complete biometric Aadhaar authentication at a MeeSeva centre and submit the printed application to your college.",
      ],
      hi: [
        "telanganaepass.cgg.gov.in पर जाएँ और 'Post Matric Scholarship Services' चुनें।",
        "आधार, आय और जाति प्रमाण पत्र के नंबर और बैंक जानकारी के साथ नए या रिन्यूअल आवेदक के रूप में रजिस्टर करें।",
        "MeeSeva केंद्र पर बायोमेट्रिक आधार सत्यापन कराएँ और आवेदन का प्रिंट अपने कॉलेज में जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Income certificate", "Caste certificate", "Previous marks memo", "Bank account (nationalised bank or India Post Payments Bank) seeded with Aadhaar"],
    hi: ["आधार कार्ड", "आय प्रमाण पत्र", "जाति प्रमाण पत्र", "पिछली कक्षा का अंक पत्र", "आधार से जुड़ा बैंक खाता (राष्ट्रीयकृत बैंक या इंडिया पोस्ट पेमेंट्स बैंक)"],
  },

  officialUrl: "https://telanganaepass.cgg.gov.in/",
  sources: [
    "https://telanganaepass.cgg.gov.in/WhoareEligible.do",
    "https://telanganaepass.cgg.gov.in/SchoalrshipsOffered.do",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
