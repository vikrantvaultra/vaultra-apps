import { all, isTrue, maxAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "goa-interest-free-education-loan",
  tier: "compact",
  name: { en: "Interest Free Education Loan Scheme (Goa)", hi: "ब्याज-मुक्त शिक्षा ऋण योजना (गोवा)" },
  aka: ["IFEL", "Goa interest free loan", "GEDC education loan"],
  shortDescription: {
    en: "Interest-free loans for Goan students under 30: up to ₹2 lakh a year (₹10 lakh total) for courses in India and up to ₹8 lakh a year for study abroad, if repaid on time.",
    hi: "30 साल से कम उम्र के गोवा के छात्रों को ब्याज-मुक्त कर्ज़: भारत में पढ़ाई के लिए सालाना ₹2 लाख तक (कुल ₹10 लाख) और विदेश में पढ़ाई के लिए सालाना ₹8 लाख तक, समय पर चुकाने पर।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Directorate of Higher Education, Government of Goa (run by Goa Education Development Corporation)",
    hi: "उच्च शिक्षा निदेशालय, गोवा सरकार (गोवा शिक्षा विकास निगम द्वारा संचालित)",
  },
  categories: ["education"],
  tags: ["education loan", "interest free", "higher education", "study abroad", "ifel", "goa"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 200000, period: "yearly", kind: "loan" },
  ageRange: { max: 29 },
  kundliHouse: "education",
  eligibility: all(residentOf("goa"), maxAge(29), isTrue("student")),

  details: {
    en: [
      "Goa has offered interest-free loans for higher education since 2003. The current rules were notified in November 2023, and the Goa Education Development Corporation (GEDC) runs the scheme from a Higher Education Promotion Fund. Applications for 2025-26 were open on GEDC's site.",
      "The loan pays your entitled fees (tuition, lab, development and hostel fees). No interest is charged as long as you repay on schedule. Repayment starts one year after the minimum course duration, in monthly instalments over 1.5 to 5 years depending on the amount.",
    ],
    hi: [
      "गोवा 2003 से उच्च शिक्षा के लिए ब्याज-मुक्त कर्ज़ देता है। मौजूदा नियम नवंबर 2023 में अधिसूचित हुए और गोवा शिक्षा विकास निगम (GEDC) इसे उच्च शिक्षा प्रोत्साहन कोष से चलाता है। 2025-26 के लिए आवेदन GEDC की साइट पर खुले थे।",
      "कर्ज़ से आपकी तय फ़ीस (ट्यूशन, लैब, डेवलपमेंट और हॉस्टल फ़ीस) भरी जाती है। तय समय पर चुकाते रहें तो कोई ब्याज नहीं लगता। भुगतान कोर्स की न्यूनतम अवधि के एक साल बाद शुरू होता है, राशि के हिसाब से 1.5 से 5 साल में मासिक किस्तों में।",
    ],
  },
  benefits: {
    en: [
      "Courses in India: actual fees up to ₹2 lakh a year, at most ₹10 lakh over 5 years.",
      "Courses abroad: actual fees up to ₹8 lakh a year, at most ₹16 lakh over 2 years.",
      "Zero interest if every instalment is paid on time; late payment attracts 10% interest.",
      "The outstanding loan may be written off on the borrower's death or disabling illness, case by case.",
    ],
    hi: [
      "भारत में कोर्स: असल फ़ीस, सालाना ₹2 लाख तक, 5 साल में अधिकतम ₹10 लाख।",
      "विदेश में कोर्स: असल फ़ीस, सालाना ₹8 लाख तक, 2 साल में अधिकतम ₹16 लाख।",
      "हर किस्त समय पर भरने पर शून्य ब्याज; देर से भुगतान पर 10% ब्याज।",
      "कर्ज़दार की मृत्यु या अक्षम बनाने वाली बीमारी पर बकाया कर्ज़ मामले के हिसाब से माफ़ हो सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Below 30 years of age and a resident of Goa for 15 years.",
      "Passed class 10/12 (or graduation, for PG courses) from an institution in Goa; graduates from outside Goa qualify if both parents have lived in Goa for 15 years.",
      "At least 55% marks in the qualifying exam for courses in India, 60% for courses abroad (10% relaxation for SC/ST/OBC).",
      "Family income up to ₹12 lakh a year for courses in India (₹13 lakh if a sibling is also in higher education), and up to ₹20 lakh for study abroad (₹23 lakh with a studying sibling).",
      "A full-time course with fees above ₹10,000 a year, recognised by UGC, AICTE, MCI, DCI, the Council of Architecture or the Goa Board of Technical Education; foreign universities must be in the top 500 world rankings.",
    ],
    hi: [
      "उम्र 30 साल से कम और 15 साल से गोवा के निवासी।",
      "गोवा के किसी संस्थान से 10वीं/12वीं (PG कोर्स के लिए स्नातक) पास; गोवा से बाहर से स्नातक भी पात्र, अगर माता-पिता दोनों 15 साल से गोवा में रह रहे हों।",
      "भारत में कोर्स के लिए योग्यता परीक्षा में कम से कम 55% अंक, विदेश के लिए 60% (SC/ST/OBC को 10% छूट)।",
      "भारत में कोर्स के लिए पारिवारिक आय ₹12 लाख सालाना तक (भाई-बहन भी उच्च शिक्षा में हो तो ₹13 लाख), विदेश में पढ़ाई के लिए ₹20 लाख तक (पढ़ते भाई-बहन के साथ ₹23 लाख)।",
      "₹10,000 सालाना से ज़्यादा फ़ीस वाला पूर्णकालिक कोर्स, जिसे UGC, AICTE, MCI, DCI, आर्किटेक्चर परिषद या गोवा तकनीकी शिक्षा बोर्ड की मान्यता हो; विदेशी विश्वविद्यालय दुनिया के शीर्ष 500 में हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Watch for the yearly notice on gedc.goa.gov.in announcing that IFEL applications are open.",
        "Submit the completed loan application with documents to the GEDC office before the last date, and finish any missing paperwork within 2 weeks of being asked.",
        "If sanctioned, sign a repayment bond with a parent as surety (and one more guarantor for loans above ₹5 lakh) before the first payment.",
      ],
      hi: [
        "gedc.goa.gov.in पर हर साल आने वाली सूचना देखें कि IFEL के आवेदन खुल गए हैं।",
        "भरा हुआ लोन आवेदन दस्तावेज़ों के साथ आख़िरी तारीख से पहले GEDC दफ़्तर में जमा करें, और माँगे जाने के 2 हफ़्ते के अंदर बाकी कागज़ पूरे करें।",
        "मंज़ूरी मिलने पर पहले भुगतान से पहले माता या पिता को ज़मानती बनाकर भुगतान बॉन्ड पर हस्ताक्षर करें (₹5 लाख से ज़्यादा के लोन पर एक और ज़मानतदार)।",
      ],
    },
  },

  officialUrl: "https://gedc.goa.gov.in/",
  sources: [
    "https://www.goa.gov.in/wp-content/uploads/2026/03/Scheme-Interest-Free-Education-Loan.pdf",
    "https://gedc.goa.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
