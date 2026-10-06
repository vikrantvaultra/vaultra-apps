import { all, female, incomeUpTo, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-unmarried-women-pension",
  overlapGroup: "women-monthly",
  name: { en: "Pension for Unmarried Women above 50 (Kerala)", hi: "50 साल से ऊपर की अविवाहित महिलाओं के लिए पेंशन (केरल)" },
  aka: ["Kerala unmarried women pension", "avivahitha pension", "Sevana unmarried women pension"],
  shortDescription: {
    en: "Unmarried women in Kerala aged 50 or above from families earning up to ₹1 lakh a year get a pension of ₹2,000 every month.",
    hi: "केरल में 50 साल या उससे ज़्यादा उम्र की अविवाहित महिलाओं को, जिनके परिवार की सालाना आय ₹1 लाख तक है, हर महीने ₹2,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Local Self Government Department, Government of Kerala (through panchayats, municipalities and corporations)",
    hi: "स्थानीय स्वशासन विभाग, केरल सरकार (पंचायत, नगरपालिका और नगर निगम के ज़रिए)",
  },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["unmarried women", "single women", "welfare pension", "women pension", "sevana", "kerala"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  ageRange: { min: 50 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("kerala"),
    female(),
    minAge(50),
    labelled(when("marital", "eq", "never-married"), { en: "You have never married", hi: "आपकी कभी शादी नहीं हुई है" }),
    incomeUpTo(100_000),
  ),

  details: {
    en: [
      "Kerala is one of the few states that pays a separate pension to unmarried women. It is part of the state's social security (welfare) pensions and is fully paid by the state.",
      "The pension is ₹2,000 a month, the rate in force since November 2025. Unmarried mothers above 50 can also apply.",
      "You apply at your own gram panchayat, municipality or corporation, and the pension is paid into your bank account or delivered at home.",
    ],
    hi: [
      "केरल उन गिने-चुने राज्यों में से है जो अविवाहित महिलाओं को अलग से पेंशन देते हैं। यह राज्य की सामाजिक सुरक्षा (कल्याण) पेंशन का हिस्सा है और इसका पूरा पैसा राज्य देता है।",
      "पेंशन ₹2,000 महीना है, जो नवंबर 2025 से लागू है। 50 साल से ऊपर की अविवाहित माताएँ भी आवेदन कर सकती हैं।",
      "आवेदन अपनी ग्राम पंचायत, नगरपालिका या नगर निगम में किया जाता है, और पेंशन बैंक खाते में या घर पर दी जाती है।",
    ],
  },
  benefits: {
    en: ["₹2,000 every month.", "Paid into your bank account, or delivered at home.", "That adds up to ₹24,000 a year."],
    hi: ["हर महीने ₹2,000।", "पैसा बैंक खाते में आता है, या घर पर दिया जाता है।", "साल भर में कुल ₹24,000।"],
  },
  eligibilityText: {
    en: [
      "An unmarried woman aged 50 years or above (unmarried mothers above 50 included).",
      "Total family income is up to ₹1 lakh a year.",
      "A permanent resident of Kerala, applying in the local body where she lives.",
      "Not dependent on anyone else's protection, and not getting a service or family pension (an ex-gratia or NPS pension up to ₹4,000 is allowed).",
      "Does not pay income tax.",
    ],
    hi: [
      "50 साल या उससे ज़्यादा उम्र की अविवाहित महिला (50 साल से ऊपर की अविवाहित माताएँ भी)।",
      "परिवार की कुल सालाना आय ₹1 लाख तक।",
      "केरल की स्थायी निवासी, जो जहाँ रहती है उसी स्थानीय निकाय में आवेदन करे।",
      "किसी और के संरक्षण पर निर्भर न हो, और सर्विस या फ़ैमिली पेंशन न मिलती हो (₹4,000 तक की एक्स-ग्रेशिया या NPS पेंशन चल सकती है)।",
      "आयकर न देती हो।",
    ],
  },
  exclusions: {
    en: [
      "She or her family own more than 2 acres of land (not applied to Scheduled Tribe applicants).",
      "Anyone in the family owns a non-taxi four-wheeler with an engine above 1,000 cc, or she lives in a modern-floored concrete house above 2,000 sq ft.",
      "She has applied for or gets another social security pension.",
      "She lives in a care home (agathi mandiram).",
    ],
    hi: [
      "उसके या परिवार के नाम पर 2 एकड़ से ज़्यादा ज़मीन है (अनुसूचित जनजाति के आवेदकों पर लागू नहीं)।",
      "परिवार में किसी के पास 1,000 cc से ज़्यादा इंजन वाली, टैक्सी के अलावा कोई चार पहिया गाड़ी है, या वह 2,000 वर्ग फ़ुट से बड़े आधुनिक फ़र्श वाले कंक्रीट मकान में रहती है।",
      "उसने किसी दूसरी सामाजिक सुरक्षा पेंशन के लिए आवेदन किया है या वह उसे मिलती है।",
      "वह किसी आश्रय गृह (अगति मंदिरम) में रहती है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the pension form for unmarried women from your gram panchayat, municipality or corporation office.",
        "Attach proof of age, a certificate that you are unmarried, income certificate, Aadhaar and bank details.",
        "Submit it to the secretary of your local body. A decision should be made within 45 days.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, नगरपालिका या नगर निगम कार्यालय से अविवाहित महिला पेंशन का फ़ॉर्म लें।",
        "उम्र का सबूत, अविवाहित होने का प्रमाण पत्र, आय प्रमाण पत्र, आधार और बैंक विवरण लगाएँ।",
        "अपने स्थानीय निकाय के सचिव को जमा करें। 45 दिन के अंदर फ़ैसला होना चाहिए।",
      ],
    },
  },
  documents: {
    en: ["Proof of age", "Certificate that you are unmarried (from the Village Officer or local body)", "Income certificate", "Aadhaar card", "Bank passbook"],
    hi: ["उम्र का सबूत", "अविवाहित होने का प्रमाण पत्र (विलेज ऑफ़िसर या स्थानीय निकाय से)", "आय प्रमाण पत्र", "आधार कार्ड", "बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "Do I have to confirm my status every year?", hi: "क्या हर साल अपनी स्थिति की पुष्टि करनी होती है?" },
      a: {
        en: "Yes. Beneficiaries under 60 have been asked to give a declaration that they have not married, and all pensioners must complete the annual verification (mustering).",
        hi: "हाँ। 60 साल से कम उम्र की लाभार्थियों से शादी न करने का घोषणा पत्र माँगा जाता है, और सभी पेंशनभोगियों को हर साल सत्यापन (मस्टरिंग) करवाना होता है।",
      },
    },
    {
      q: { en: "Can I also get the old age pension at 60?", hi: "क्या 60 साल होने पर वृद्धावस्था पेंशन भी मिलेगी?" },
      a: {
        en: "No. Only one welfare pension is allowed. You keep getting ₹2,000 a month under this pension.",
        hi: "नहीं। एक ही कल्याण पेंशन मिलती है। आपको इसी पेंशन में ₹2,000 महीना मिलता रहेगा।",
      },
    },
  ],

  officialUrl: "https://welfarepension.lsgkerala.gov.in/",
  sources: [
    "https://welfarepension.lsgkerala.gov.in/FAQs.aspx",
    "https://welfarepension.lsgkerala.gov.in/",
    "https://budget.kerala.gov.in/build/budget_speech/2026/2026Eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
