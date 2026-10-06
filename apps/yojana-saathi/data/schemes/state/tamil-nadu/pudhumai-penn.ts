import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pudhumai-penn",
  name: { en: "Pudhumai Penn Scheme", hi: "पुदुमै पेण योजना" },
  aka: ["Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme", "Puthumai Penn"],
  shortDescription: {
    en: "₹1,000 a month during college, diploma or ITI for girls who studied classes 6 to 12 in Tamil Nadu government schools (or Tamil-medium aided schools).",
    hi: "तमिलनाडु के सरकारी स्कूलों (या तमिल माध्यम सहायता प्राप्त स्कूलों) में कक्षा 6 से 12 पढ़ी लड़कियों को कॉलेज, डिप्लोमा या ITI के दौरान हर महीने ₹1,000।",
  },
  level: "state",
  state: "tamil-nadu",
  department: { en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu", hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार" },
  categories: ["education", "women-child"],
  tags: ["girls", "higher education", "college", "scholarship", "1000 rupees", "government school"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("gender", "in", ["female", "transgender"]), {
      en: "You are a girl student (transgender students are also covered)",
      hi: "आप छात्रा हैं (ट्रांसजेंडर विद्यार्थी भी शामिल हैं)",
    }),
    labelled(isTrue("student"), { en: "You are studying in college, diploma or ITI", hi: "आप कॉलेज, डिप्लोमा या ITI में पढ़ रही हैं" }),
  ),

  details: {
    en: [
      "Pudhumai Penn (officially the Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme) helps girls from government schools continue into higher studies. Each eligible student gets ₹1,000 a month until she finishes her course.",
      "It is for girls who studied classes 6 to 12 in Tamil Nadu government schools. It was later extended to girls who studied in Tamil medium in government-aided schools, and in 2025 to transgender students.",
      "The money is paid by DBT to the student's own bank account. Applications are made through the college, which registers students on the state's higher education portal. The government elected in 2026 has continued the scheme.",
    ],
    hi: [
      "पुदुमै पेण (आधिकारिक नाम मूवलूर रामामिर्तम अम्मैयार उच्च शिक्षा आश्वासन योजना) सरकारी स्कूलों की लड़कियों को आगे पढ़ाई जारी रखने में मदद करती है। हर पात्र छात्रा को कोर्स पूरा होने तक हर महीने ₹1,000 मिलते हैं।",
      "यह उन लड़कियों के लिए है जिन्होंने तमिलनाडु के सरकारी स्कूलों में कक्षा 6 से 12 तक पढ़ाई की। बाद में इसे सरकारी सहायता प्राप्त स्कूलों में तमिल माध्यम से पढ़ी लड़कियों तक, और 2025 में ट्रांसजेंडर विद्यार्थियों तक बढ़ाया गया।",
      "पैसा DBT से छात्रा के अपने बैंक खाते में आता है। आवेदन कॉलेज के ज़रिए होता है, जो विद्यार्थियों को राज्य के उच्च शिक्षा पोर्टल पर दर्ज करता है। 2026 में चुनी गई सरकार ने योजना जारी रखी है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month until you complete your undergraduate degree, diploma or ITI course.",
      "Paid by DBT into your own bank account.",
      "No family income limit.",
    ],
    hi: [
      "स्नातक डिग्री, डिप्लोमा या ITI कोर्स पूरा होने तक हर महीने ₹1,000।",
      "DBT से आपके अपने बैंक खाते में।",
      "परिवार की आय की कोई सीमा नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "You studied classes 6 to 12 in a Tamil Nadu government school, or in Tamil medium in a government-aided school.",
      "You are now enrolled in a recognised undergraduate degree, diploma, ITI or similar course in Tamil Nadu.",
      "Transgender students with a Tamil Nadu Transgender Welfare Board ID card are also eligible.",
    ],
    hi: [
      "आपने कक्षा 6 से 12 तक तमिलनाडु के सरकारी स्कूल में, या सरकारी सहायता प्राप्त स्कूल में तमिल माध्यम से पढ़ाई की है।",
      "आप अभी तमिलनाडु में किसी मान्यता प्राप्त स्नातक डिग्री, डिप्लोमा, ITI या ऐसे कोर्स में दाख़िल हैं।",
      "तमिलनाडु ट्रांसजेंडर कल्याण बोर्ड का पहचान पत्र रखने वाले ट्रांसजेंडर विद्यार्थी भी पात्र हैं।",
    ],
  },
  exclusions: {
    en: [
      "Girls who studied any of classes 6 to 12 in a private (unaided) school are generally not covered.",
      "Distance-education and correspondence courses are not covered.",
    ],
    hi: [
      "जिन लड़कियों ने कक्षा 6 से 12 में से किसी कक्षा की पढ़ाई निजी (ग़ैर-सहायता प्राप्त) स्कूल में की, वे आमतौर पर शामिल नहीं हैं।",
      "दूरस्थ शिक्षा और पत्राचार कोर्स शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "After joining college, contact your college's nodal officer for the scheme.",
        "The college registers you on the state higher education portal using your EMIS / UMIS number, Aadhaar and bank details.",
        "Once verified, the money starts coming to your bank account each month. Keep your bank account active and Aadhaar-linked.",
      ],
      hi: [
        "कॉलेज में दाख़िले के बाद योजना के लिए कॉलेज के नोडल अधिकारी से संपर्क करें।",
        "कॉलेज आपके EMIS / UMIS नंबर, आधार और बैंक जानकारी से आपको राज्य के उच्च शिक्षा पोर्टल पर दर्ज करता है।",
        "जाँच के बाद हर महीने पैसा आपके बैंक खाते में आने लगता है। बैंक खाता चालू और आधार से जुड़ा रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "School certificates / transfer certificates for classes 6 to 12", "College admission proof", "Bank account in your name, linked to Aadhaar", "EMIS / UMIS number"],
    hi: ["आधार कार्ड", "कक्षा 6 से 12 के स्कूल प्रमाण पत्र / स्थानांतरण प्रमाण पत्र", "कॉलेज में दाख़िले का प्रमाण", "आपके नाम का आधार से जुड़ा बैंक खाता", "EMIS / UMIS नंबर"],
  },
  faqs: [
    {
      q: { en: "Can I get this if I study in a private college?", hi: "क्या प्राइवेट कॉलेज में पढ़ने पर भी यह मिलेगा?" },
      a: {
        en: "Yes. What matters is that you studied classes 6 to 12 in a government school (or Tamil medium in an aided school) and are now in a recognised higher education course.",
        hi: "हाँ। ज़रूरी यह है कि आपने कक्षा 6 से 12 सरकारी स्कूल में (या सहायता प्राप्त स्कूल में तमिल माध्यम से) पढ़ी हो और अब किसी मान्यता प्राप्त उच्च शिक्षा कोर्स में हों।",
      },
    },
    {
      q: { en: "Is the scheme still running after the 2026 change of government?", hi: "क्या 2026 में सरकार बदलने के बाद भी योजना चल रही है?" },
      a: {
        en: "Yes. The new government has confirmed it will continue, and monthly payments have been credited.",
        hi: "हाँ। नई सरकार ने इसे जारी रखने की पुष्टि की है, और मासिक भुगतान खातों में आ रहा है।",
      },
    },
  ],

  officialUrl: "https://www.pudhumaipenn.tn.gov.in/",
  sources: [
    "https://www.pudhumaipenn.tn.gov.in/",
    "https://www.myscheme.gov.in/schemes/pudhumai-penn-scheme",
    "https://www.dinamalar.com/amp/news/kalvimalar-news-en/tn-govt-includes-third-gender-in-pudhumai-penn-tamil-pudhalvan-schemes/56057",
    "https://newstodaynet.com/2026/05/14/rs-1000-credited-under-pudhumaipen-tamil-pudhalvan-schemes/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
