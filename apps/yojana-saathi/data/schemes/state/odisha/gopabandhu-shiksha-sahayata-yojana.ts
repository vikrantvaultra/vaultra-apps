import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gopabandhu-shiksha-sahayata-yojana",
  tier: "compact",
  name: { en: "Gopabandhu Sikhya Sahayata Yojana", hi: "गोपबंधु शिक्षा सहायता योजना" },
  aka: ["GSSY", "Gopabandhu Shiksha Sahayata", "Gopabandhu scholarship"],
  shortDescription: {
    en: "Odisha college students from very vulnerable families (single mothers, orphans, PVTGs, homeless, transgender and others) earning under ₹2.5 lakh get ₹20,000 a year.",
    hi: "ओडिशा के बहुत कमज़ोर परिवारों (अकेली माँ, अनाथ, PVTG, बेघर, ट्रांसजेंडर आदि) के ₹2.5 लाख से कम आय वाले कॉलेज विद्यार्थियों को हर साल ₹20,000।",
  },
  level: "state",
  state: "odisha",
  department: { en: "Higher Education Department, Government of Odisha", hi: "उच्च शिक्षा विभाग, ओडिशा सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "single mother", "orphan", "college", "transgender", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 20000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    labelled(isTrue("student"), {
      en: "You are studying in a UG, PG or professional course in Odisha",
      hi: "आप ओडिशा में UG, PG या प्रोफ़ेशनल कोर्स में पढ़ते हैं",
    }),
    incomeUpTo(250_000),
  ),

  details: {
    en: [
      "Gopabandhu Sikhya Sahayata Yojana (GSSY) gives yearly financial help to college students from the most disadvantaged families, so they can finish a degree or professional course. It is part of the Mukhyamantri Medhabi Chhatra Protsahan Yojana of the Higher Education Department.",
      "Each selected student gets ₹20,000 a year until the course ends. Unlike most scholarships, it can be taken along with other scholarships. The 2026-27 budget continues it at ₹20,000 per student per year.",
    ],
    hi: [
      "गोपबंधु शिक्षा सहायता योजना (GSSY) सबसे वंचित परिवारों के कॉलेज विद्यार्थियों को हर साल आर्थिक मदद देती है, ताकि वे डिग्री या प्रोफ़ेशनल कोर्स पूरा कर सकें। यह उच्च शिक्षा विभाग की मुख्यमंत्री मेधावी छात्र प्रोत्साहन योजना का हिस्सा है।",
      "हर चुने गए विद्यार्थी को कोर्स पूरा होने तक हर साल ₹20,000 मिलते हैं। ज़्यादातर छात्रवृत्तियों से अलग, यह दूसरी छात्रवृत्तियों के साथ भी मिल सकती है। 2026-27 के बजट में यह ₹20,000 प्रति विद्यार्थी प्रति वर्ष पर जारी है।",
    ],
  },
  benefits: {
    en: ["₹20,000 a year until your course is complete.", "Can be received along with other scholarships.", "Paid by DBT into your Aadhaar-linked bank account."],
    hi: ["कोर्स पूरा होने तक हर साल ₹20,000।", "दूसरी छात्रवृत्तियों के साथ भी मिल सकती है।", "DBT से आपके आधार से जुड़े बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "You are a permanent resident of Odisha, studying a UG, PG or professional course at a recognised institution in Odisha.",
      "Your household income is less than ₹2.5 lakh a year.",
      "You belong to one of these groups: family affected by HIV/AIDS; homeless family; begging or destitute family; manual scavenger family; PVTG; family of a released bonded labourer; family headed by a single mother (widowed, divorced or unmarried); orphan; transgender student; or a girl rescued from child marriage and living in a shelter home or hostel.",
    ],
    hi: [
      "आप ओडिशा के स्थायी निवासी हैं और ओडिशा के किसी मान्यता प्राप्त संस्थान में UG, PG या प्रोफ़ेशनल कोर्स कर रहे हैं।",
      "परिवार की सालाना आय ₹2.5 लाख से कम है।",
      "आप इनमें से किसी समूह से हैं: HIV/AIDS से प्रभावित परिवार; बेघर परिवार; भीख माँगने वाला या बेसहारा परिवार; मैला ढोने वाला परिवार; PVTG; मुक्त कराए गए बंधुआ मज़दूर का परिवार; अकेली माँ (विधवा, तलाकशुदा या अविवाहित) वाला परिवार; अनाथ; ट्रांसजेंडर विद्यार्थी; या बाल विवाह से बचाई गई लड़की जो शेल्टर होम या हॉस्टल में रहती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the State Scholarship Portal (scholarship.odisha.gov.in) and choose Gopabandhu Sikhya Sahayata Yojana.",
        "Upload the certificate that shows which group you belong to, plus your income and resident certificates.",
        "Your college verifies the application, then a committee under the District Collector confirms eligibility before payment.",
      ],
      hi: [
        "राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) पर आवेदन करें और गोपबंधु शिक्षा सहायता योजना चुनें।",
        "आप किस समूह से हैं, उसका प्रमाण पत्र, और आय व निवास प्रमाण पत्र अपलोड करें।",
        "आपका कॉलेज आवेदन जाँचता है, फिर ज़िला कलेक्टर की समिति पात्रता की पुष्टि करती है, उसके बाद भुगतान होता है।",
      ],
    },
  },
  documents: {
    en: [
      "Resident and income certificates from the Tahasildar",
      "Certificate for your category (for example single-mother certificate from the District Social Welfare Officer, PVTG certificate, orphan certificate, or transgender certificate from the national portal)",
      "Bank passbook and Aadhaar card",
    ],
    hi: [
      "तहसीलदार का निवास और आय प्रमाण पत्र",
      "आपकी श्रेणी का प्रमाण पत्र (जैसे ज़िला समाज कल्याण अधिकारी से अकेली माँ का प्रमाण पत्र, PVTG प्रमाण पत्र, अनाथ प्रमाण पत्र, या राष्ट्रीय पोर्टल से ट्रांसजेंडर प्रमाण पत्र)",
      "बैंक पासबुक और आधार कार्ड",
    ],
  },

  officialUrl: "https://scholarship.odisha.gov.in/",
  sources: [
    "https://dhe.odisha.gov.in/sites/default/files/2024-10/Guidelines%20for%20scholarship%20under%20Mukhyamantri%20medhabi%20chhatra%20protsahan%20yojana%20for%20the%20AY%202023-24.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
