import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "saat-fera-samuh-lagna-yojana",
  tier: "compact",
  name: { en: "Saat Fera Samuh Lagna Yojana", hi: "सात फेरा समूह लग्न योजना" },
  aka: ["Saat Fera", "Sat Fera Samuh Lagna", "Mai Ramabai Ambedkar Saat Fera", "Gujarat mass marriage scheme"],
  shortDescription: {
    en: "SC, SEBC (OBC) and EWS couples in Gujarat who marry at a mass wedding get ₹12,000 in the bride's name; the organiser gets ₹3,000 per couple.",
    hi: "गुजरात में सामूहिक विवाह में शादी करने वाले SC, SEBC (OBC) और EWS जोड़ों को दुल्हन के नाम ₹12,000 मिलते हैं; आयोजक संस्था को हर जोड़े पर ₹3,000।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department, Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, गुजरात सरकार" },
  categories: ["social-welfare", "women-child"],
  tags: ["mass marriage", "samuh lagna", "marriage", "saat fera", "sc", "obc", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 12000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("gujarat"), incomeUpTo(600_000)),

  details: {
    en: [
      "Saat Fera Samuh Lagna Yojana encourages families to marry their children at community mass weddings instead of spending heavily, often on loans, on separate ceremonies. For SC families it is called the Mai Ramabai Ambedkar Saat Fera Samuh Lagna Yojana; a matching scheme covers SEBC (OBC) and EWS families.",
      "Each couple gets ₹12,000 in the bride's name by DBT, and the organising body gets ₹3,000 per couple, up to ₹75,000. A bride can also get Kunvarbai nu Mameru if she meets its rules.",
    ],
    hi: [
      "सात फेरा समूह लग्न योजना परिवारों को अलग-अलग महँगी शादियों (जो अक्सर कर्ज़ लेकर होती हैं) की जगह सामूहिक विवाह में बच्चों की शादी करने के लिए प्रोत्साहित करती है। SC परिवारों के लिए इसका नाम माई रमाबाई आंबेडकर सात फेरा समूह लग्न योजना है; SEBC (OBC) और EWS परिवारों के लिए ऐसी ही योजना है।",
      "हर जोड़े को दुल्हन के नाम DBT से ₹12,000 मिलते हैं, और आयोजक संस्था को हर जोड़े पर ₹3,000 (ज़्यादा से ज़्यादा ₹75,000)। दुल्हन शर्तें पूरी करे तो कुंवरबाई नु मामेरु का लाभ भी ले सकती है।",
    ],
  },
  benefits: {
    en: ["₹12,000 per couple, paid in the bride's name by DBT.", "₹3,000 per couple to the organising body, up to ₹75,000 per event.", "Can be combined with Kunvarbai nu Mameru."],
    hi: ["हर जोड़े को ₹12,000, दुल्हन के नाम DBT से।", "आयोजक संस्था को हर जोड़े पर ₹3,000, एक आयोजन में ज़्यादा से ज़्यादा ₹75,000।", "कुंवरबाई नु मामेरु के साथ भी मिल सकता है।"],
  },
  eligibilityText: {
    en: [
      "The bride's family is SC, SEBC (OBC) or EWS and native to Gujarat.",
      "Family income up to ₹6 lakh a year.",
      "The marriage takes place at an organised mass wedding (for SEBC/EWS, at least 10 such couples must take part).",
      "The marriage is registered; remarriages are not covered.",
    ],
    hi: [
      "दुल्हन का परिवार SC, SEBC (OBC) या EWS वर्ग का हो और मूल रूप से गुजरात का हो।",
      "परिवार की सालाना आय ₹6 लाख तक हो।",
      "शादी किसी आयोजित सामूहिक विवाह में हो (SEBC/EWS के लिए ऐसे कम से कम 10 जोड़े शामिल हों)।",
      "शादी का पंजीकरण हो; दोबारा शादी पर लाभ नहीं मिलता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "The organising body applies on esamajkalyan.gujarat.gov.in within two years of the mass wedding.",
        "Couples give the organiser their marriage registration certificate, age proofs, caste certificate and the bride's bank details.",
      ],
      hi: [
        "आयोजक संस्था सामूहिक विवाह के दो साल के अंदर esamajkalyan.gujarat.gov.in पर आवेदन करती है।",
        "जोड़े आयोजक को विवाह पंजीकरण प्रमाण पत्र, उम्र के प्रमाण, जाति प्रमाण पत्र और दुल्हन के बैंक विवरण देते हैं।",
      ],
    },
  },

  officialUrl: "https://esamajkalyan.gujarat.gov.in/",
  sources: [
    "https://sje.gujarat.gov.in/dscw/showpage.aspx?contentid=1617",
    "https://sje.gujarat.gov.in/ddcw/showpage.aspx?contentid=1542",
    "https://dbt.gujarat.gov.in/mainpageschemelist",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1998,
  status: "active",
};

export default scheme;
