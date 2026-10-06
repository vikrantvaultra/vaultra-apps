import { all, incomeUpTo, isFalse, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dr-ambedkar-awas-yojana-gujarat",
  tier: "compact",
  name: { en: "Dr. Ambedkar Awas Yojana (Gujarat)", hi: "डॉ. आंबेडकर आवास योजना (गुजरात)" },
  aka: ["Ambedkar Awas Gujarat", "SC housing Gujarat"],
  shortDescription: {
    en: "Scheduled Caste families in Gujarat with income up to ₹6 lakh who are homeless or live in a kutcha house get ₹1.7 lakh in four instalments to build a house.",
    hi: "गुजरात के अनुसूचित जाति के परिवारों को, जिनकी आय ₹6 लाख तक है और जो बेघर हैं या कच्चे घर में रहते हैं, घर बनाने के लिए चार किस्तों में ₹1.7 लाख मिलते हैं।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department (Director, Scheduled Caste Welfare), Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग (अनुसूचित जाति कल्याण निदेशालय), गुजरात सरकार" },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "house construction", "ambedkar awas", "sc", "kutcha house", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 170000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    residentOf("gujarat"),
    when("caste", "eq", "sc"),
    incomeUpTo(600_000),
    labelled(isFalse("pucca"), { en: "You don't own a pucca house", hi: "आपके पास पक्का घर न हो" }),
  ),

  details: {
    en: [
      "Dr. Ambedkar Awas Yojana helps Scheduled Caste families build a pucca home. It is for families who are homeless but own a plot, or who live in an unsafe kutcha, mud or thatched house. Adult sons or brothers can also use it to build a floor above an existing house with the owner's consent.",
      "From 2025-26 the grant is ₹1,70,000, paid by DBT in four instalments linked to building progress. A separate ₹12,000 toilet grant may apply; if not, the toilet must be built from this money.",
    ],
    hi: [
      "डॉ. आंबेडकर आवास योजना अनुसूचित जाति के परिवारों को पक्का घर बनाने में मदद करती है। यह उन परिवारों के लिए है जो बेघर हैं पर उनके पास प्लॉट है, या जो असुरक्षित कच्चे, मिट्टी या घास-फूस के घर में रहते हैं। मालिक की सहमति से बालिग बेटा या भाई मौजूदा घर के ऊपर मंज़िल बनाने के लिए भी इसका लाभ ले सकता है।",
      "2025-26 से सहायता ₹1,70,000 है, जो निर्माण की प्रगति के हिसाब से चार किस्तों में DBT से मिलती है। शौचालय के लिए अलग से ₹12,000 मिल सकते हैं; न मिलें तो इसी पैसे से शौचालय बनाना होगा।",
    ],
  },
  benefits: {
    en: [
      "₹1,70,000 in four instalments: ₹30,000 on approval, ₹80,000 at plinth level, ₹50,000 at roof level and ₹10,000 on completion with a toilet.",
      "Paid by DBT into your bank account.",
    ],
    hi: [
      "चार किस्तों में ₹1,70,000: मंज़ूरी पर ₹30,000, नींव (प्लिंथ) तक ₹80,000, छत तक ₹50,000, और शौचालय सहित घर पूरा होने पर ₹10,000।",
      "पैसा DBT से आपके बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "You belong to a Scheduled Caste and live in Gujarat.",
      "Family income up to ₹6 lakh a year (same in villages and cities).",
      "You are homeless but own a plot, or live in a kutcha, mud, thatched or dilapidated house.",
      "Neither you nor your family has received help under any other government housing scheme.",
      "The total house cost should stay within ₹7 lakh (village) or ₹10 lakh (city).",
    ],
    hi: [
      "आप अनुसूचित जाति के हों और गुजरात में रहते हों।",
      "परिवार की सालाना आय ₹6 लाख तक हो (गाँव और शहर दोनों में)।",
      "आप बेघर हों पर प्लॉट आपके नाम हो, या कच्चे, मिट्टी, घास-फूस या जर्जर घर में रहते हों।",
      "आपको या परिवार को किसी दूसरी सरकारी आवास योजना से मदद न मिली हो।",
      "घर की कुल लागत गाँव में ₹7 लाख और शहर में ₹10 लाख के अंदर हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on esamajkalyan.gujarat.gov.in and log in.",
        "Choose Dr. Ambedkar Awas Yojana, fill in the form and upload your caste, income and plot documents.",
        "After approval, each instalment is released once the officer checks the building stage.",
      ],
      hi: [
        "esamajkalyan.gujarat.gov.in पर रजिस्टर करके लॉगिन करें।",
        "डॉ. आंबेडकर आवास योजना चुनें, फ़ॉर्म भरें और जाति, आय और प्लॉट के दस्तावेज़ अपलोड करें।",
        "मंज़ूरी के बाद, अधिकारी के निर्माण की जाँच करने पर हर किस्त जारी होती है।",
      ],
    },
  },
  documents: {
    en: ["Caste certificate", "Income certificate", "Aadhaar card", "Plot ownership papers", "Photo of the current house or open plot", "Bank passbook"],
    hi: ["जाति प्रमाण पत्र", "आय प्रमाण पत्र", "आधार कार्ड", "प्लॉट के मालिकाना काग़ज़", "मौजूदा घर या खुले प्लॉट की फ़ोटो", "बैंक पासबुक"],
  },

  officialUrl: "https://esamajkalyan.gujarat.gov.in/",
  sources: [
    "https://sje.gujarat.gov.in/dscw/showpage.aspx?contentid=1594",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-gujarat/dr-ambedkar-awas-yojana-of-gujarat-govt?lgn=en",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1999,
  status: "active",
};

export default scheme;
