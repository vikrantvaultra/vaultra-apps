import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-overseas-vidya-nidhi",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Telangana Overseas Scholarships (Overseas Vidya Nidhi)", hi: "तेलंगाना ओवरसीज़ छात्रवृत्ति (ओवरसीज़ विद्या निधि)" },
  aka: [
    "Ambedkar Overseas Vidya Nidhi",
    "Mahatma Jyothiba Phule Overseas Vidya Nidhi",
    "CM Overseas Scholarship for Minorities",
    "AOVN",
    "MJPOVN",
  ],
  shortDescription: {
    en: "SC, ST, BC, EBC and minority students from Telangana with family income under ₹5 lakh get up to ₹20 lakh to study for a master's or PhD in 10 countries.",
    hi: "₹5 लाख से कम पारिवारिक आय वाले तेलंगाना के SC, ST, BC, EBC और अल्पसंख्यक छात्रों को 10 देशों में मास्टर्स या PhD के लिए ₹20 लाख तक मिलते हैं।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "SC Development, Tribal Welfare, BC Welfare and Minorities Welfare Departments, Government of Telangana",
    hi: "SC विकास, आदिवासी कल्याण, BC कल्याण और अल्पसंख्यक कल्याण विभाग, तेलंगाना सरकार",
  },
  categories: ["education", "minority"],
  tags: ["overseas scholarship", "study abroad", "masters", "20 lakh", "vidya nidhi", "telangana"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("telangana"),
    labelled(incomeUpTo(500_000), { en: "Family income below ₹5 lakh a year", hi: "परिवार की सालाना आय ₹5 लाख से कम हो" }),
  ),

  details: {
    en: [
      "Telangana runs three overseas scholarship schemes with the same main rules: Ambedkar Overseas Vidya Nidhi for SC and ST students, Mahatma Jyothiba Phule Overseas Vidya Nidhi for BC and EBC students, and the Chief Minister's Overseas Scholarship for minority students.",
      "Selected students get up to ₹20 lakh or the amount in their admission letter, whichever is less, plus a one-way economy air ticket (and visa charges for SC, ST, BC and EBC students). Selection is by merit through a state-level committee, and rounds were still being held in 2026.",
    ],
    hi: [
      "तेलंगाना तीन ओवरसीज़ छात्रवृत्ति योजनाएँ चलाता है जिनके मुख्य नियम एक जैसे हैं: SC और ST छात्रों के लिए अंबेडकर ओवरसीज़ विद्या निधि, BC और EBC छात्रों के लिए महात्मा ज्योतिबा फुले ओवरसीज़ विद्या निधि, और अल्पसंख्यक छात्रों के लिए मुख्यमंत्री ओवरसीज़ छात्रवृत्ति।",
      "चुने गए छात्रों को ₹20 लाख तक या प्रवेश पत्र में लिखी राशि, जो भी कम हो, मिलती है, साथ में एक तरफ़ का इकॉनमी हवाई टिकट (और SC, ST, BC, EBC छात्रों को वीज़ा शुल्क भी)। चयन राज्य स्तरीय समिति मेरिट के आधार पर करती है, और 2026 में भी चयन के दौर हुए।",
    ],
  },
  benefits: {
    en: [
      "Up to ₹20 lakh towards study abroad, or the amount in your admission letter if lower.",
      "One-way economy air ticket.",
      "Visa charges for SC, ST, BC and EBC students.",
    ],
    hi: [
      "विदेश में पढ़ाई के लिए ₹20 लाख तक, या प्रवेश पत्र की राशि अगर वह कम हो।",
      "एक तरफ़ का इकॉनमी हवाई टिकट।",
      "SC, ST, BC और EBC छात्रों को वीज़ा शुल्क।",
    ],
  },
  eligibilityText: {
    en: [
      "You are an SC, ST, BC, EBC or minority student from Telangana.",
      "Family income (student and parents) is below ₹5 lakh a year.",
      "You have at least 60% in graduation and valid GRE/GMAT and English test (TOEFL/IELTS/PTE) scores.",
      "Admission is in the USA, UK, Canada, Australia, New Zealand, Germany, France, Singapore, Japan or South Korea.",
      "Only one child per family can get it.",
    ],
    hi: [
      "आप तेलंगाना के SC, ST, BC, EBC या अल्पसंख्यक छात्र हैं।",
      "परिवार (छात्र और माता-पिता) की सालाना आय ₹5 लाख से कम है।",
      "ग्रेजुएशन में कम से कम 60% अंक और मान्य GRE/GMAT व अंग्रेज़ी परीक्षा (TOEFL/IELTS/PTE) के अंक हैं।",
      "प्रवेश अमेरिका, ब्रिटेन, कनाडा, ऑस्ट्रेलिया, न्यूज़ीलैंड, जर्मनी, फ़्रांस, सिंगापुर, जापान या दक्षिण कोरिया में है।",
      "एक परिवार से एक ही बच्चे को मिल सकती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to telanganaepass.cgg.gov.in and open 'Overseas Scholarship Services'.",
        "Choose the scheme for your community and register while registrations are open (BC/EBC students need the CoE/I-20 and visa to apply).",
        "Upload your documents and attend certificate verification when called.",
      ],
      hi: [
        "telanganaepass.cgg.gov.in पर जाएँ और 'Overseas Scholarship Services' खोलें।",
        "अपने समुदाय की योजना चुनें और रजिस्ट्रेशन खुले रहने पर रजिस्टर करें (BC/EBC छात्रों को आवेदन के लिए CoE/I-20 और वीज़ा चाहिए)।",
        "दस्तावेज़ अपलोड करें और बुलाए जाने पर प्रमाण पत्रों की जाँच में जाएँ।",
      ],
    },
  },

  officialUrl: "https://telanganaepass.cgg.gov.in/",
  sources: [
    "https://telanganaepass.cgg.gov.in/OverseasLinks.do",
    "https://telanganaepass.cgg.gov.in/SchemesPolicies.do",
    "https://www.telangana.gov.in/wp-content/uploads/2024/07/Telangana-Socio-Economic-Outlook-2024.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
