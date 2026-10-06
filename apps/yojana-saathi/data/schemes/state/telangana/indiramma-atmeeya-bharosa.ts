import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indiramma-atmeeya-bharosa",
  tier: "compact",
  name: { en: "Indiramma Atmeeya Bharosa", hi: "इंदिरम्मा आत्मीय भरोसा" },
  aka: ["Indiramma Atmiya Bharosa", "Atmeeya Bharosa", "landless labourers Rs 12000 Telangana"],
  shortDescription: {
    en: "Landless farm labour families in Telangana get ₹12,000 a year in their bank account under Indiramma Atmeeya Bharosa.",
    hi: "इंदिरम्मा आत्मीय भरोसा में तेलंगाना के भूमिहीन खेतिहर मज़दूर परिवारों को हर साल ₹12,000 बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Panchayat Raj and Rural Development Department, Government of Telangana",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग, तेलंगाना सरकार",
  },
  categories: ["agriculture", "social-welfare"],
  tags: ["landless", "agricultural labourer", "farm worker", "12000", "rural", "telangana"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 12000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("telangana"),
    labelled(when("occupation", "in", ["agri-labourer"]), { en: "Family works as farm labourers and owns no farm land", hi: "परिवार खेत मज़दूरी करता हो और उसके पास खेती की ज़मीन न हो" }),
  ),

  details: {
    en: [
      "Indiramma Atmeeya Bharosa gives yearly cash support to landless agricultural labour families, who do not benefit from Rythu Bharosa because they own no land. It was announced with Rythu Bharosa and started from 26 January 2025.",
      "Each eligible family gets ₹12,000 a year by bank transfer. Families are identified from rural employment guarantee job card records. The 2026-27 budget set aside ₹600 crore for the scheme.",
    ],
    hi: [
      "इंदिरम्मा आत्मीय भरोसा भूमिहीन खेतिहर मज़दूर परिवारों को सालाना नकद मदद देती है, जिन्हें ज़मीन न होने से रैतु भरोसा नहीं मिलता। इसकी घोषणा रैतु भरोसा के साथ हुई और यह 26 जनवरी 2025 से शुरू हुई।",
      "हर पात्र परिवार को साल में ₹12,000 बैंक ट्रांसफ़र से मिलते हैं। परिवारों की पहचान ग्रामीण रोज़गार गारंटी के जॉब कार्ड रिकॉर्ड से होती है। 2026-27 के बजट में इसके लिए ₹600 करोड़ रखे गए।",
    ],
  },
  benefits: {
    en: ["₹12,000 a year per family.", "Paid directly into the bank account."],
    hi: ["हर परिवार को साल में ₹12,000।", "पैसा सीधे बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Your family lives in rural Telangana and owns no agricultural land.",
      "Your family has a rural employment guarantee job card and did the minimum days of wage work the government has set.",
      "Your bank account is linked with Aadhaar.",
    ],
    hi: [
      "आपका परिवार तेलंगाना के गाँव में रहता है और उसके पास खेती की ज़मीन नहीं है।",
      "आपके परिवार के पास ग्रामीण रोज़गार गारंटी का जॉब कार्ड है और उसने सरकार द्वारा तय कम से कम दिनों की मज़दूरी की है।",
      "आपका बैंक खाता आधार से जुड़ा है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "There is no separate form: eligible families are picked from job card records and checked in the Gram Sabha.",
        "If your family was left out, contact your Panchayat Secretary or MPDO office with your job card and Aadhaar.",
      ],
      hi: [
        "अलग से फ़ॉर्म नहीं है: पात्र परिवार जॉब कार्ड रिकॉर्ड से चुने जाते हैं और ग्राम सभा में जाँचे जाते हैं।",
        "अगर आपका परिवार छूट गया हो, तो जॉब कार्ड और आधार लेकर अपने पंचायत सचिव या MPDO दफ़्तर से संपर्क करें।",
      ],
    },
  },

  officialUrl: "https://www.telangana.gov.in/departments/panchayat-raj-and-rural-development/",
  sources: [
    "https://www.newsonair.gov.in/telangana-farmers-to-receive-%e2%82%b912000-per-acre-annually-under-rythu-bharosa-scheme/",
    "https://www.telangana.gov.in/news/press-releases/2024/07/deputy-cm-presents-budget-for-the-year-2024-25/",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
