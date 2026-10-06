import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kalinga-shiksha-sathi-yojana",
  tier: "compact",
  name: { en: "Kalinga Sikhya Sathi Yojana (Education Loan Interest Subsidy)", hi: "कलिंग शिक्षा साथी योजना (शिक्षा ऋण ब्याज सब्सिडी)" },
  aka: ["KSSY", "Kalinga Shiksha Saathi", "Odisha education loan interest free"],
  shortDescription: {
    en: "Odisha students from families earning up to ₹8 lakh pay no interest on bank education loans up to ₹15 lakh for study in India or abroad; the state pays it.",
    hi: "₹8 लाख तक की पारिवारिक आय वाले ओडिशा के विद्यार्थियों को भारत या विदेश में पढ़ाई के लिए ₹15 लाख तक के बैंक शिक्षा ऋण पर कोई ब्याज नहीं देना पड़ता; ब्याज राज्य भरता है।",
  },
  level: "state",
  state: "odisha",
  department: { en: "Higher Education Department, Government of Odisha", hi: "उच्च शिक्षा विभाग, ओडिशा सरकार" },
  categories: ["education", "business"],
  tags: ["education loan", "interest subsidy", "study abroad", "higher education", "kssy", "odisha"],
  benefitType: "loan",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    labelled(isTrue("student"), {
      en: "You have taken admission in a higher education course and a bank education loan",
      hi: "आपने उच्च शिक्षा कोर्स में दाखिला और बैंक से शिक्षा ऋण लिया है",
    }),
    incomeUpTo(800_000),
  ),

  details: {
    en: [
      "Kalinga Sikhya Sathi Yojana (KSSY) is Odisha's interest subsidy on education loans. Under the revised rules for loans taken on or after 1 April 2023, the state pays 100% of the interest, both during the course-plus-one-year moratorium and afterwards, so the student repays only the principal through EMIs.",
      "It covers loans from any scheduled bank under the IBA model education loan scheme, for courses in India or abroad, up to ₹15 lakh of loan. For families earning up to ₹4.5 lakh, the moratorium interest is first covered by the central CSIS scheme and KSSY pays the rest. State Bank of India is the nodal bank, and claims go through the State Scholarship Portal.",
    ],
    hi: [
      "कलिंग शिक्षा साथी योजना (KSSY) ओडिशा की शिक्षा ऋण पर ब्याज सब्सिडी है। 1 अप्रैल 2023 या उसके बाद लिए गए ऋणों के लिए संशोधित नियमों में राज्य पूरा 100% ब्याज भरता है, कोर्स और उसके एक साल बाद की मोहलत के दौरान भी और उसके बाद भी, यानी विद्यार्थी EMI में सिर्फ़ मूलधन चुकाता है।",
      "यह IBA के मॉडल शिक्षा ऋण के तहत किसी भी अनुसूचित बैंक के ऋण पर, भारत या विदेश में पढ़ाई के लिए, ₹15 लाख तक के ऋण पर लागू है। ₹4.5 लाख तक आय वाले परिवारों के लिए मोहलत के दौरान का ब्याज पहले केंद्र की CSIS योजना से मिलता है और बाकी KSSY देती है। स्टेट बैंक ऑफ़ इंडिया नोडल बैंक है, और दावे राज्य छात्रवृत्ति पोर्टल से होते हैं।",
    ],
  },
  benefits: {
    en: [
      "100% of the interest on your education loan is paid by the state.",
      "Covers loans up to ₹15 lakh (if your loan is bigger, interest on ₹15 lakh is covered).",
      "Valid for study in India and abroad; available once, for a UG, PG or integrated course.",
    ],
    hi: [
      "आपके शिक्षा ऋण का पूरा 100% ब्याज राज्य भरता है।",
      "₹15 लाख तक के ऋण पर लागू (ऋण बड़ा हो तो ₹15 लाख पर ब्याज मिलता है)।",
      "भारत और विदेश, दोनों में पढ़ाई के लिए; UG, PG या इंटीग्रेटेड कोर्स के लिए एक बार।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a resident of Odisha with family income up to ₹8 lakh a year from all sources.",
      "You have admission in a recognised higher education course in India or abroad.",
      "You took the loan from a scheduled bank under the CSIS / IBA education loan scheme on or after 1 April 2023.",
      "You keep repaying on time; the subsidy stops if the loan stays overdue for more than 90 days, or if you drop out or are expelled.",
    ],
    hi: [
      "आप ओडिशा के निवासी हैं और सभी स्रोतों से परिवार की सालाना आय ₹8 लाख तक है।",
      "आपका भारत या विदेश में किसी मान्यता प्राप्त उच्च शिक्षा कोर्स में दाखिला है।",
      "आपने 1 अप्रैल 2023 या उसके बाद CSIS / IBA शिक्षा ऋण योजना के तहत किसी अनुसूचित बैंक से ऋण लिया है।",
      "आप समय पर किस्तें चुकाते रहें; ऋण 90 दिन से ज़्यादा बकाया रहने पर, या पढ़ाई छोड़ने या निकाले जाने पर सब्सिडी बंद हो जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Take an education loan from any scheduled bank.",
        "Apply for the interest subsidy on the State Scholarship Portal (scholarship.odisha.gov.in) under KSSY and upload your documents.",
        "Your bank, the nodal bank (SBI) and the Higher Education Department verify it; the subsidy is credited to your loan account each year.",
      ],
      hi: [
        "किसी भी अनुसूचित बैंक से शिक्षा ऋण लें।",
        "राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) पर KSSY में ब्याज सब्सिडी के लिए आवेदन करें और दस्तावेज़ अपलोड करें।",
        "आपका बैंक, नोडल बैंक (SBI) और उच्च शिक्षा विभाग इसकी जाँच करते हैं; सब्सिडी हर साल आपके ऋण खाते में जमा होती है।",
      ],
    },
  },

  officialUrl: "https://scholarship.odisha.gov.in/",
  sources: [
    "https://dhe.odisha.gov.in/sites/default/files/2024-11/51396.pdf",
    "https://dhe.odisha.gov.in/en/dhe-schemes-scholarship/kssy/guidelines",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
