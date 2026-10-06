import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "goa-bursary-scheme",
  tier: "compact",
  overlapGroup: "scholarship",
  name: {
    en: "Sant Sohirobanath Ambiye Dnyanvruddhi Shishyavrutti (Goa Bursary Scheme)",
    hi: "संत सोहिरोबानाथ आंबिये ज्ञानवृद्धि शिष्यवृत्ति (गोवा बर्सरी योजना)",
  },
  aka: ["Goa Bursary", "GEDC bursary", "Dnyanvruddhi Shishyavrutti"],
  shortDescription: {
    en: "Fee reimbursement of up to ₹40,000 a year for diploma, degree and PG students at colleges in Goa whose family income is below ₹5 lakh.",
    hi: "गोवा के कॉलेजों में डिप्लोमा, डिग्री और PG पढ़ रहे उन छात्रों को सालाना ₹40,000 तक फ़ीस वापसी, जिनकी पारिवारिक आय ₹5 लाख से कम है।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Directorate of Higher Education, Government of Goa (run by Goa Education Development Corporation)",
    hi: "उच्च शिक्षा निदेशालय, गोवा सरकार (गोवा शिक्षा विकास निगम द्वारा संचालित)",
  },
  categories: ["education"],
  tags: ["bursary", "fee reimbursement", "college", "scholarship", "gedc", "goa"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("goa"),
    isTrue("student"),
    labelled(incomeUpTo(500_000), {
      en: "Family income is below ₹5 lakh a year",
      hi: "पारिवारिक आय ₹5 लाख सालाना से कम है",
    }),
  ),

  details: {
    en: [
      "The Bursary Scheme has been run by the Goa Education Development Corporation (GEDC) since 2014. The current version was notified in October 2024, and the 2025-26 round took online applications from 5 May to 19 June 2026.",
      "It pays back the fees you paid to your college, up to a yearly limit, straight into your bank account. Selection weighs both your marks and your family income.",
    ],
    hi: [
      "बर्सरी योजना 2014 से गोवा शिक्षा विकास निगम (GEDC) चला रहा है। मौजूदा रूप अक्टूबर 2024 में अधिसूचित हुआ, और 2025-26 के दौर में 5 मई से 19 जून 2026 तक ऑनलाइन आवेदन लिए गए।",
      "यह आपकी कॉलेज को दी गई फ़ीस, सालाना सीमा तक, सीधे आपके बैंक खाते में लौटाती है। चयन में आपके अंक और पारिवारिक आय दोनों देखे जाते हैं।",
    ],
  },
  benefits: {
    en: [
      "Reimbursement of entitled fees up to ₹40,000 a year (tuition, registration, library, lab, gymkhana and IT fees).",
      "Includes up to ₹5,000 for textbooks and reference books.",
      "Paid by Direct Benefit Transfer into the student's account.",
    ],
    hi: [
      "तय फ़ीस की वापसी, सालाना ₹40,000 तक (ट्यूशन, पंजीकरण, लाइब्रेरी, लैब, जिमख़ाना और IT फ़ीस)।",
      "किताबों और संदर्भ पुस्तकों के लिए ₹5,000 तक भी शामिल।",
      "सीधे लाभ हस्तांतरण से छात्र के खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "You study full time in a diploma, degree or postgraduate course of up to 5 years at an institution located in Goa and affiliated to Goa University or recognised by the Directorate of Higher or Technical Education.",
      "You passed class 10 (and class 12 or diploma, and graduation for PG) from an institution in Goa. For PG, a degree from a Central University, IIT, NIT or IIM outside Goa is also accepted.",
      "Total family income from all sources is below ₹5 lakh a year.",
      "You cannot also take a similar fee benefit from another Goa or central scheme, or the Interest Free Education Loan, for the same fees.",
    ],
    hi: [
      "आप गोवा में स्थित, गोवा विश्वविद्यालय से संबद्ध या उच्च/तकनीकी शिक्षा निदेशालय से मान्य संस्थान में 5 साल तक के डिप्लोमा, डिग्री या पोस्टग्रेजुएट कोर्स में पूर्णकालिक पढ़ रहे हैं।",
      "आपने 10वीं (और 12वीं या डिप्लोमा, और PG के लिए स्नातक) गोवा के किसी संस्थान से पास की है। PG के लिए गोवा से बाहर की केंद्रीय विश्वविद्यालय, IIT, NIT या IIM की डिग्री भी मान्य है।",
      "सभी स्रोतों से कुल पारिवारिक आय ₹5 लाख सालाना से कम है।",
      "उसी फ़ीस के लिए आप गोवा या केंद्र की किसी दूसरी योजना, या ब्याज-मुक्त शिक्षा ऋण से ऐसा ही लाभ साथ में नहीं ले सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When GEDC announces the yearly round, sign up on the Bursary Portal (bursary.dhe.goa.gov.in).",
        "Fill in the form and upload marksheets, income certificate, bonafide certificate, and fee receipts with the fee structure certified by your college (each file under 500 KB).",
        "Your college head verifies the application online; track the status through SMS updates.",
      ],
      hi: [
        "GEDC सालाना दौर की घोषणा करे तो बर्सरी पोर्टल (bursary.dhe.goa.gov.in) पर साइन-अप करें।",
        "फ़ॉर्म भरें और अंकतालिकाएँ, आय प्रमाण पत्र, बोनाफ़ाइड प्रमाण पत्र और कॉलेज से प्रमाणित फ़ीस ढाँचे के साथ फ़ीस रसीदें अपलोड करें (हर फ़ाइल 500 KB से कम)।",
        "आपके कॉलेज के प्रमुख आवेदन को ऑनलाइन सत्यापित करते हैं; स्थिति SMS से पता चलती रहती है।",
      ],
    },
  },

  officialUrl: "https://gedc.goa.gov.in/node/7",
  sources: [
    "https://www.goa.gov.in/wp-content/uploads/2026/09/Bursary-Scheme-Official-Gazette.pdf",
    "https://gedc.goa.gov.in/node/7",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
