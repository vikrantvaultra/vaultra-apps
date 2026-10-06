import { all, incomeUpTo, isTrue, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "scholarships-students-with-disabilities",
  name: { en: "Scholarships for Students with Disabilities", hi: "दिव्यांग छात्रों के लिए छात्रवृत्ति" },
  aka: ["SSD", "Pre-matric scholarship for students with disabilities", "Post-matric scholarship for students with disabilities", "Top Class Education scholarship", "DEPwD scholarship"],
  shortDescription: {
    en: "Monthly allowance, disability allowance, book grant and fee support for students with 40%+ disability, from Class 9 to postgraduate level, through the National Scholarship Portal.",
    hi: "40% या ज़्यादा दिव्यांगता वाले छात्रों को कक्षा 9 से पोस्ट-ग्रेजुएशन तक मासिक भत्ता, दिव्यांगता भत्ता, किताबों का अनुदान और फ़ीस में मदद, नेशनल स्कॉलरशिप पोर्टल से।",
  },
  level: "central",
  ministry: "empowerment-persons-disabilities",
  categories: ["education", "disability"],
  tags: ["scholarship", "divyang", "disability", "nsp", "pre-matric", "post-matric", "students"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    labelled(isTrue("disabled"), { en: "You have a disability", hi: "आप दिव्यांग हैं" }),
    labelled(when("disabilityPct", "gte", 40), { en: "Benchmark disability of 40% or more", hi: "40% या उससे ज़्यादा बेंचमार्क दिव्यांगता" }),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप छात्र हैं" }),
    labelled(incomeUpTo(800_000), {
      en: "Parents' income up to ₹8 lakh a year (₹2.5 lakh for pre- and post-matric)",
      hi: "माता-पिता की सालाना आय ₹8 लाख तक (प्री- और पोस्ट-मैट्रिक के लिए ₹2.5 लाख)",
    }),
  ),

  details: {
    en: [
      "This umbrella scheme of the Department of Empowerment of Persons with Disabilities has six parts: Pre-matric (Classes 9–10), Post-matric (Class 11 to postgraduate), Top Class Education (degree or diploma at notified top institutes), National Overseas Scholarship, National Fellowship and Free Coaching.",
      "Pre-matric, post-matric and top class scholarships are applied for on the National Scholarship Portal (scholarships.gov.in). Half of the slots are kept for girls.",
      "Money is paid by DBT into the student's Aadhaar-linked bank account. The current rules have applied since April 2022, and the scheme has funding for 2026-27.",
    ],
    hi: [
      "दिव्यांगजन सशक्तिकरण विभाग की इस योजना के छह हिस्से हैं: प्री-मैट्रिक (कक्षा 9–10), पोस्ट-मैट्रिक (कक्षा 11 से पोस्ट-ग्रेजुएशन), टॉप क्लास एजुकेशन (चुने हुए बड़े संस्थानों में डिग्री या डिप्लोमा), नेशनल ओवरसीज़ स्कॉलरशिप, नेशनल फ़ेलोशिप और मुफ़्त कोचिंग।",
      "प्री-मैट्रिक, पोस्ट-मैट्रिक और टॉप क्लास छात्रवृत्ति के लिए नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर आवेदन होता है। आधी सीटें लड़कियों के लिए रखी जाती हैं।",
      "पैसा DBT से छात्र के आधार से जुड़े बैंक खाते में आता है। मौजूदा नियम अप्रैल 2022 से लागू हैं और 2026-27 के लिए योजना का बजट है।",
    ],
  },
  benefits: {
    en: [
      "Pre-matric (Classes 9–10): ₹500 a month for day scholars or ₹800 for hostellers, plus ₹1,000 a year for books.",
      "Disability allowance of ₹2,000 to ₹4,000 a year, depending on the type of disability.",
      "Post-matric: monthly allowance of ₹550 to ₹1,600 by course, compulsory fees refunded up to ₹1.5 lakh a year, and ₹1,500 a year for books.",
      "Top Class Education: tuition up to ₹2 lakh a year, ₹1,500–₹3,000 a month for living costs, ₹2,000 a month special allowance and a one-time ₹45,000 for a computer.",
    ],
    hi: [
      "प्री-मैट्रिक (कक्षा 9–10): डे-स्कॉलर को ₹500 महीना या हॉस्टल वाले को ₹800 महीना, साथ में किताबों के लिए ₹1,000 सालाना।",
      "दिव्यांगता के प्रकार के अनुसार ₹2,000 से ₹4,000 सालाना दिव्यांगता भत्ता।",
      "पोस्ट-मैट्रिक: कोर्स के अनुसार ₹550 से ₹1,600 मासिक भत्ता, ज़रूरी फ़ीस ₹1.5 लाख सालाना तक वापस, और किताबों के लिए ₹1,500 सालाना।",
      "टॉप क्लास एजुकेशन: ₹2 लाख सालाना तक ट्यूशन फ़ीस, रहने के लिए ₹1,500–₹3,000 महीना, ₹2,000 महीना विशेष भत्ता और कंप्यूटर के लिए एक बार ₹45,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian student with a benchmark disability of 40% or more and a valid disability certificate.",
      "Pre-matric: regular, full-time student in Class 9 or 10 at a recognised school.",
      "Post-matric: studying in Class 11 or above, including ITI, polytechnic, degree and PG courses at recognised institutions.",
      "Parents' income from all sources up to ₹2.5 lakh a year for pre- and post-matric, and up to ₹8 lakh for Top Class Education.",
      "Only two children with disabilities from the same parents can benefit (twins are both covered).",
    ],
    hi: [
      "40% या ज़्यादा बेंचमार्क दिव्यांगता और मान्य दिव्यांगता प्रमाणपत्र वाले भारतीय छात्र।",
      "प्री-मैट्रिक: मान्य स्कूल में कक्षा 9 या 10 के नियमित, पूर्णकालिक छात्र।",
      "पोस्ट-मैट्रिक: मान्य संस्थान में कक्षा 11 या उससे ऊपर, जिसमें ITI, पॉलिटेक्निक, डिग्री और PG कोर्स शामिल हैं।",
      "प्री- और पोस्ट-मैट्रिक के लिए माता-पिता की कुल सालाना आय ₹2.5 लाख तक, और टॉप क्लास एजुकेशन के लिए ₹8 लाख तक।",
      "एक ही माता-पिता के सिर्फ़ दो दिव्यांग बच्चों को लाभ मिलता है (जुड़वाँ हों तो दोनों को)।",
    ],
  },
  exclusions: {
    en: [
      "You cannot hold another scholarship or stipend at the same time; you must pick the better one.",
      "A class you repeat is not funded a second time.",
    ],
    hi: [
      "एक साथ कोई दूसरी छात्रवृत्ति या वज़ीफ़ा नहीं ले सकते; जो बेहतर हो, वह चुनना होगा।",
      "दोबारा पढ़ी जा रही कक्षा के लिए दूसरी बार पैसा नहीं मिलता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to scholarships.gov.in and complete One Time Registration (OTR) with Aadhaar.",
        "Log in and choose the Pre-matric, Post-matric or Top Class scholarship for students with disabilities.",
        "Fill in the form, upload your disability and income certificates, and submit before the deadline.",
        "Ask your school or college to verify the application on the portal. Track the status in your NSP account.",
      ],
      hi: [
        "scholarships.gov.in पर जाएँ और आधार से वन टाइम रजिस्ट्रेशन (OTR) करें।",
        "लॉग इन करके दिव्यांग छात्रों की प्री-मैट्रिक, पोस्ट-मैट्रिक या टॉप क्लास छात्रवृत्ति चुनें।",
        "फ़ॉर्म भरें, दिव्यांगता और आय प्रमाणपत्र अपलोड करें, और आख़िरी तारीख से पहले जमा करें।",
        "अपने स्कूल या कॉलेज से पोर्टल पर आवेदन का सत्यापन करवाएँ। NSP खाते में स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: ["Disability certificate or UDID card (40% or more)", "Income certificate of parents", "Aadhaar", "Previous year's marksheet", "Fee receipt and bonafide certificate from the institution", "Bank account linked to Aadhaar"],
    hi: ["दिव्यांगता प्रमाणपत्र या UDID कार्ड (40% या ज़्यादा)", "माता-पिता का आय प्रमाणपत्र", "आधार", "पिछले साल की मार्कशीट", "संस्थान की फ़ीस रसीद और बोनाफ़ाइड प्रमाणपत्र", "आधार से जुड़ा बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "Is there a reserved share for girls?", hi: "क्या लड़कियों के लिए हिस्सा तय है?" },
      a: {
        en: "Yes. 50% of the scholarships each year are kept for girl students. Unused slots can go to boys.",
        hi: "हाँ। हर साल 50% छात्रवृत्तियाँ छात्राओं के लिए रखी जाती हैं। ख़ाली सीटें लड़कों को दी जा सकती हैं।",
      },
    },
    {
      q: { en: "Do I need to apply again every year?", hi: "क्या हर साल दोबारा आवेदन करना होगा?" },
      a: {
        en: "Yes, you submit a renewal application on NSP each year, and your institution verifies it again.",
        hi: "हाँ, हर साल NSP पर रिन्यूअल आवेदन देना होता है और संस्थान उसका दोबारा सत्यापन करता है।",
      },
    },
  ],

  officialUrl: "https://scholarships.gov.in/",
  sources: [
    "https://scholarships.gov.in/public/schemeGuidelines/DEPDGuidelines.pdf",
    "https://depwd.gov.in/en/national-scholarship-portal-is-now-open-for-students/",
    "https://dmeo.gov.in/sites/default/files/2026-05/Final%20OOMF%20%282026-27%29_%20DEPwD%20English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
