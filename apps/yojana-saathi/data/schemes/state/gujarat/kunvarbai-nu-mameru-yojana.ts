import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kunvarbai-nu-mameru-yojana",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Kunvarbai nu Mameru Yojana", hi: "कुंवरबाई नु मामेरु योजना" },
  aka: ["Kunvarbai Mameru", "Kuvarbai nu Mameru", "Gujarat marriage assistance"],
  shortDescription: {
    en: "SC, ST, SEBC (OBC) and EWS families in Gujarat earning up to ₹6 lakh a year get ₹12,000 by DBT for the marriage of each of up to two daughters.",
    hi: "गुजरात के SC, ST, SEBC (OBC) और EWS परिवारों को, जिनकी सालाना आय ₹6 लाख तक है, दो बेटियों तक हर बेटी की शादी पर ₹12,000 DBT से मिलते हैं।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department, Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, गुजरात सरकार" },
  categories: ["social-welfare", "women-child"],
  tags: ["marriage", "daughter marriage", "mameru", "sc", "obc", "ews", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 12000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(residentOf("gujarat"), incomeUpTo(600_000)),

  details: {
    en: [
      "Kunvarbai nu Mameru gives ₹12,000 to help with a daughter's wedding in Scheduled Caste, Socially and Educationally Backward Class (SEBC/OBC) and Economically Weaker Section (EWS) families. The Tribal Development Department runs the same benefit for Scheduled Tribe families.",
      "The money goes into the bride's bank account by DBT. Up to two adult daughters per family are covered, and a bride who also marries at a Saat Fera mass wedding can get both benefits if she meets both sets of rules. The 2026-27 state budget kept funds for the scheme.",
    ],
    hi: [
      "कुंवरबाई नु मामेरु योजना अनुसूचित जाति, सामाजिक-शैक्षणिक रूप से पिछड़े वर्ग (SEBC/OBC) और आर्थिक रूप से कमज़ोर वर्ग (EWS) के परिवारों को बेटी की शादी में ₹12,000 की मदद देती है। अनुसूचित जनजाति के परिवारों के लिए यही लाभ आदिजाति विकास विभाग देता है।",
      "पैसा DBT से दुल्हन के बैंक खाते में आता है। एक परिवार की दो बालिग बेटियों तक लाभ मिलता है, और सात फेरा सामूहिक विवाह में शादी करने वाली दुल्हन दोनों योजनाओं की शर्तें पूरी करे तो दोनों का लाभ ले सकती है। 2026-27 के राज्य बजट में भी इसके लिए पैसा रखा गया है।",
    ],
  },
  benefits: {
    en: ["₹12,000 for each eligible daughter's marriage.", "Paid by DBT into the bride's bank account.", "Up to two daughters per family."],
    hi: ["हर पात्र बेटी की शादी पर ₹12,000।", "पैसा DBT से दुल्हन के बैंक खाते में।", "एक परिवार की दो बेटियों तक।"],
  },
  eligibilityText: {
    en: [
      "The family belongs to SC, ST, SEBC (OBC) or EWS and is native to Gujarat.",
      "Family income up to ₹6 lakh a year (same in villages and cities).",
      "At marriage the bride is at least 18 and the groom at least 21.",
      "Apply within two years of the wedding.",
    ],
    hi: [
      "परिवार SC, ST, SEBC (OBC) या EWS वर्ग का हो और मूल रूप से गुजरात का हो।",
      "परिवार की सालाना आय ₹6 लाख तक हो (गाँव और शहर दोनों में)।",
      "शादी के समय दुल्हन कम से कम 18 और दूल्हा कम से कम 21 साल का हो।",
      "शादी के दो साल के अंदर आवेदन करें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "SC, SEBC and EWS families: register and apply on esamajkalyan.gujarat.gov.in and choose Kunvarbai nu Mameru.",
        "Upload the marriage registration certificate, caste and income certificates and the bride's bank details.",
        "ST families: apply through the Tribal Development Department's office in your district or taluka.",
      ],
      hi: [
        "SC, SEBC और EWS परिवार: esamajkalyan.gujarat.gov.in पर रजिस्टर करके आवेदन करें और कुंवरबाई नु मामेरु चुनें।",
        "विवाह पंजीकरण प्रमाण पत्र, जाति और आय प्रमाण पत्र और दुल्हन के बैंक विवरण अपलोड करें।",
        "ST परिवार: अपने ज़िले या तालुका के आदिजाति विकास विभाग कार्यालय से आवेदन करें।",
      ],
    },
  },
  documents: {
    en: ["Marriage registration certificate", "Caste certificate (or EWS certificate)", "Income certificate", "Age proof of bride and groom", "Bride's Aadhaar and bank passbook", "Ration card"],
    hi: ["विवाह पंजीकरण प्रमाण पत्र", "जाति प्रमाण पत्र (या EWS प्रमाण पत्र)", "आय प्रमाण पत्र", "दूल्हा-दुल्हन की उम्र का प्रमाण", "दुल्हन का आधार और बैंक पासबुक", "राशन कार्ड"],
  },

  officialUrl: "https://esamajkalyan.gujarat.gov.in/",
  sources: [
    "https://sje.gujarat.gov.in/dscw/showpage.aspx?contentid=1613",
    "https://sje.gujarat.gov.in/ddcw/showpage.aspx?contentid=1568",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1991,
  status: "active",
};

export default scheme;
