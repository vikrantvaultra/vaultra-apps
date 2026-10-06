import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-pudhalvan",
  name: { en: "Tamil Pudhalvan Scheme", hi: "तमिल पुदल्वन योजना" },
  aka: ["Tamizh Pudhalvan", "Tamil Puthalvan"],
  shortDescription: {
    en: "₹1,000 a month during college, diploma or ITI for boys who studied classes 6 to 12 in Tamil Nadu government schools (or Tamil-medium aided schools).",
    hi: "तमिलनाडु के सरकारी स्कूलों (या तमिल माध्यम सहायता प्राप्त स्कूलों) में कक्षा 6 से 12 पढ़े लड़कों को कॉलेज, डिप्लोमा या ITI के दौरान हर महीने ₹1,000।",
  },
  level: "state",
  state: "tamil-nadu",
  department: { en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu", hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार" },
  categories: ["education"],
  tags: ["boys", "higher education", "college", "scholarship", "1000 rupees", "government school"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(when("gender", "in", ["male", "transgender"]), {
      en: "You are a male student (transgender students are also covered)",
      hi: "आप छात्र हैं (ट्रांसजेंडर विद्यार्थी भी शामिल हैं)",
    }),
    labelled(isTrue("student"), { en: "You are studying in college, diploma or ITI", hi: "आप कॉलेज, डिप्लोमा या ITI में पढ़ रहे हैं" }),
  ),

  details: {
    en: [
      "Tamil Pudhalvan is the boys' version of Pudhumai Penn. Launched in August 2024, it pays ₹1,000 a month to young men from government schools while they study further, to help them stay in college.",
      "It is for boys who studied classes 6 to 12 in Tamil Nadu government schools, or in Tamil medium in government-aided schools. In 2025 it was also opened to transgender students.",
      "The money goes by DBT to the student's bank account for the length of the course. Colleges register students on the state portal. The government elected in 2026 has continued the scheme.",
    ],
    hi: [
      "तमिल पुदल्वन, पुदुमै पेण का लड़कों वाला रूप है। अगस्त 2024 में शुरू हुई इस योजना में सरकारी स्कूलों से पढ़े लड़कों को आगे की पढ़ाई के दौरान हर महीने ₹1,000 दिए जाते हैं, ताकि वे कॉलेज न छोड़ें।",
      "यह उन लड़कों के लिए है जिन्होंने कक्षा 6 से 12 तक तमिलनाडु के सरकारी स्कूलों में, या सरकारी सहायता प्राप्त स्कूलों में तमिल माध्यम से पढ़ाई की। 2025 में इसे ट्रांसजेंडर विद्यार्थियों के लिए भी खोल दिया गया।",
      "पैसा कोर्स की अवधि तक DBT से विद्यार्थी के बैंक खाते में आता है। कॉलेज विद्यार्थियों को राज्य पोर्टल पर दर्ज करते हैं। 2026 में चुनी गई सरकार ने योजना जारी रखी है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month until you complete your degree, diploma or ITI course.",
      "Paid by DBT into your own bank account.",
      "No family income limit.",
    ],
    hi: [
      "डिग्री, डिप्लोमा या ITI कोर्स पूरा होने तक हर महीने ₹1,000।",
      "DBT से आपके अपने बैंक खाते में।",
      "परिवार की आय की कोई सीमा नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "You studied classes 6 to 12 in a Tamil Nadu government school, or in Tamil medium in a government-aided school.",
      "You are now a regular student in a recognised degree, diploma, ITI or similar course in Tamil Nadu.",
      "Transgender students with a Tamil Nadu Transgender Welfare Board ID card are also eligible.",
    ],
    hi: [
      "आपने कक्षा 6 से 12 तक तमिलनाडु के सरकारी स्कूल में, या सरकारी सहायता प्राप्त स्कूल में तमिल माध्यम से पढ़ाई की है।",
      "आप अभी तमिलनाडु में किसी मान्यता प्राप्त डिग्री, डिप्लोमा, ITI या ऐसे कोर्स के नियमित विद्यार्थी हैं।",
      "तमिलनाडु ट्रांसजेंडर कल्याण बोर्ड का पहचान पत्र रखने वाले ट्रांसजेंडर विद्यार्थी भी पात्र हैं।",
    ],
  },
  exclusions: {
    en: [
      "Students who studied any of classes 6 to 12 in a private (unaided) school are generally not covered.",
      "Distance-education and correspondence courses are not covered.",
    ],
    hi: [
      "जिन विद्यार्थियों ने कक्षा 6 से 12 में से किसी कक्षा की पढ़ाई निजी (ग़ैर-सहायता प्राप्त) स्कूल में की, वे आमतौर पर शामिल नहीं हैं।",
      "दूरस्थ शिक्षा और पत्राचार कोर्स शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "After joining college, contact your college's nodal officer for Tamil Pudhalvan.",
        "The college registers you on the UMIS portal using your EMIS / UMIS number, Aadhaar and bank details.",
        "After verification, ₹1,000 is credited every month. Keep your bank account active and linked to Aadhaar.",
      ],
      hi: [
        "कॉलेज में दाख़िले के बाद तमिल पुदल्वन के लिए कॉलेज के नोडल अधिकारी से संपर्क करें।",
        "कॉलेज आपके EMIS / UMIS नंबर, आधार और बैंक जानकारी से आपको UMIS पोर्टल पर दर्ज करता है।",
        "जाँच के बाद हर महीने ₹1,000 खाते में आते हैं। बैंक खाता चालू और आधार से जुड़ा रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "School certificates / transfer certificates for classes 6 to 12", "College admission proof", "Bank account in your name, linked to Aadhaar", "EMIS / UMIS number"],
    hi: ["आधार कार्ड", "कक्षा 6 से 12 के स्कूल प्रमाण पत्र / स्थानांतरण प्रमाण पत्र", "कॉलेज में दाख़िले का प्रमाण", "आपके नाम का आधार से जुड़ा बैंक खाता", "EMIS / UMIS नंबर"],
  },
  faqs: [
    {
      q: { en: "My sister gets Pudhumai Penn. Can I get Tamil Pudhalvan too?", hi: "मेरी बहन को पुदुमै पेण मिलता है। क्या मुझे भी तमिल पुदल्वन मिल सकता है?" },
      a: {
        en: "Yes. Each eligible student gets the benefit in their own right, so a brother and sister can both receive it.",
        hi: "हाँ। हर पात्र विद्यार्थी को अपने हक़ से लाभ मिलता है, इसलिए भाई और बहन दोनों को मिल सकता है।",
      },
    },
    {
      q: { en: "Is there an income limit?", hi: "क्या कोई आय सीमा है?" },
      a: {
        en: "No. Eligibility depends on where you studied classes 6 to 12 and your current course, not on family income.",
        hi: "नहीं। पात्रता इस पर निर्भर है कि आपने कक्षा 6 से 12 कहाँ पढ़ी और अभी कौन-सा कोर्स कर रहे हैं, परिवार की आय पर नहीं।",
      },
    },
  ],

  officialUrl: "https://umis.tn.gov.in/",
  sources: [
    "https://umis.tn.gov.in/",
    "https://www.dinamalar.com/amp/news/kalvimalar-news-en/tn-govt-includes-third-gender-in-pudhumai-penn-tamil-pudhalvan-schemes/56057",
    "https://newstodaynet.com/2026/05/14/rs-1000-credited-under-pudhumaipen-tamil-pudhalvan-schemes/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
