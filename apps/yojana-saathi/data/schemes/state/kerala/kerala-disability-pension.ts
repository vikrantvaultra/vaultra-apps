import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-disability-pension",
  overlapGroup: "disability-pension",
  name: { en: "Kerala Disability Pension (Social Security Pension)", hi: "केरल दिव्यांग पेंशन (सामाजिक सुरक्षा पेंशन)" },
  aka: ["Kerala vikalanga pension", "Kerala bhinnasheshi pension", "Sevana disability pension"],
  shortDescription: {
    en: "Persons with physical or mental disabilities in Kerala from families earning up to ₹1 lakh a year get ₹2,000 a month, with no age limit.",
    hi: "केरल में शारीरिक या मानसिक दिव्यांगता वाले लोगों को, जिनके परिवार की सालाना आय ₹1 लाख तक है, बिना उम्र सीमा के हर महीने ₹2,000 मिलते हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Local Self Government Department, Government of Kerala (through panchayats, municipalities and corporations)",
    hi: "स्थानीय स्वशासन विभाग, केरल सरकार (पंचायत, नगरपालिका और नगर निगम के ज़रिए)",
  },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "divyang", "welfare pension", "handicapped", "sevana", "kerala"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(residentOf("kerala"), isTrue("disabled"), incomeUpTo(100_000)),

  details: {
    en: [
      "Kerala pays a monthly social security pension to persons with physical or mental disabilities from low-income families. Children and adults of any age can get it.",
      "The pension is ₹2,000 a month, the rate in force since November 2025. Where the central disability pension (IGNDPS) applies, its share is included and the state pays the rest.",
      "Unlike the other welfare pensions, a person with a disability may get this pension along with one other welfare pension, up to a total of two pensions including EPF.",
    ],
    hi: [
      "केरल कम आय वाले परिवारों के शारीरिक या मानसिक दिव्यांग व्यक्तियों को हर महीने सामाजिक सुरक्षा पेंशन देता है। किसी भी उम्र के बच्चे और वयस्क इसे पा सकते हैं।",
      "पेंशन ₹2,000 महीना है, जो नवंबर 2025 से लागू है। जहाँ केंद्र की दिव्यांग पेंशन (IGNDPS) लागू होती है, उसका हिस्सा इसमें शामिल है और बाक़ी राज्य देता है।",
      "दूसरी कल्याण पेंशनों से अलग, दिव्यांग व्यक्ति यह पेंशन किसी एक और कल्याण पेंशन के साथ ले सकते हैं, पर EPF मिलाकर कुल दो पेंशन तक ही।",
    ],
  },
  benefits: {
    en: ["₹2,000 every month.", "No age limit: children with disabilities can also get it.", "Can be held together with one other welfare pension."],
    hi: ["हर महीने ₹2,000।", "उम्र की कोई सीमा नहीं: दिव्यांग बच्चे भी इसे पा सकते हैं।", "किसी एक और कल्याण पेंशन के साथ मिल सकती है।"],
  },
  eligibilityText: {
    en: [
      "You have a physical or mental disability, shown by a medical certificate or the disability ID card issued through the Social Security Mission.",
      "Total family income is up to ₹1 lakh a year.",
      "There is no age limit.",
      "You apply in the local body where you live permanently.",
      "You don't get a salary or service/family pension from a government or public sector job (an ex-gratia or NPS pension up to ₹4,000 is allowed), and you don't pay income tax.",
    ],
    hi: [
      "आपको शारीरिक या मानसिक दिव्यांगता है, जो मेडिकल प्रमाण पत्र या सामाजिक सुरक्षा मिशन से मिले दिव्यांग पहचान पत्र से साबित हो।",
      "परिवार की कुल सालाना आय ₹1 लाख तक।",
      "उम्र की कोई सीमा नहीं है।",
      "आप जहाँ स्थायी रूप से रहते हैं, उसी स्थानीय निकाय में आवेदन करें।",
      "आपको किसी सरकारी या सरकारी उपक्रम की नौकरी से वेतन या सर्विस/फ़ैमिली पेंशन नहीं मिलती (₹4,000 तक की एक्स-ग्रेशिया या NPS पेंशन चल सकती है), और आप आयकर नहीं देते।",
    ],
  },
  exclusions: {
    en: [
      "You or your family own more than 2 acres of land (not applied to Scheduled Tribe applicants).",
      "Anyone in the family owns a non-taxi four-wheeler with an engine above 1,000 cc, or you live in a modern-floored concrete house above 2,000 sq ft.",
      "You live in a care home (agathi mandiram) or are a beggar.",
    ],
    hi: [
      "आपके या परिवार के नाम पर 2 एकड़ से ज़्यादा ज़मीन है (अनुसूचित जनजाति के आवेदकों पर लागू नहीं)।",
      "परिवार में किसी के पास 1,000 cc से ज़्यादा इंजन वाली, टैक्सी के अलावा कोई चार पहिया गाड़ी है, या आप 2,000 वर्ग फ़ुट से बड़े आधुनिक फ़र्श वाले कंक्रीट मकान में रहते हैं।",
      "आप किसी आश्रय गृह (अगति मंदिरम) में रहते हैं या भिक्षा माँगते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the disability pension form from your gram panchayat, municipality or corporation office.",
        "Attach the medical board certificate or disability ID card, income certificate, Aadhaar and bank details.",
        "Submit it to the secretary of your local body. A decision should be made within 45 days.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, नगरपालिका या नगर निगम कार्यालय से दिव्यांग पेंशन फ़ॉर्म लें।",
        "मेडिकल बोर्ड प्रमाण पत्र या दिव्यांग पहचान पत्र, आय प्रमाण पत्र, आधार और बैंक विवरण लगाएँ।",
        "अपने स्थानीय निकाय के सचिव को जमा करें। 45 दिन के अंदर फ़ैसला होना चाहिए।",
      ],
    },
  },
  documents: {
    en: ["Medical board certificate or disability ID card / UDID card", "Income certificate from the Village Officer", "Aadhaar card", "Bank passbook"],
    hi: ["मेडिकल बोर्ड प्रमाण पत्र या दिव्यांग पहचान पत्र / UDID कार्ड", "विलेज ऑफ़िसर से आय प्रमाण पत्र", "आधार कार्ड", "बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "Is a temporary disability certificate accepted?", hi: "क्या अस्थायी दिव्यांगता प्रमाण पत्र चलता है?" },
      a: {
        en: "Yes. A 2023 government clarification on the pension portal allows the pension on the basis of a temporary disability certificate, while it is valid.",
        hi: "हाँ। पेंशन पोर्टल पर 2023 के एक सरकारी स्पष्टीकरण के अनुसार अस्थायी दिव्यांगता प्रमाण पत्र के आधार पर भी, उसकी वैधता तक, पेंशन मिल सकती है।",
      },
    },
    {
      q: { en: "Is the amount higher for severe disability?", hi: "क्या गंभीर दिव्यांगता पर राशि ज़्यादा है?" },
      a: {
        en: "No. The portal lists ₹2,000 a month both for disability above 80% and for other disabilities.",
        hi: "नहीं। पोर्टल पर 80% से ज़्यादा दिव्यांगता और बाक़ी दिव्यांगता, दोनों के लिए ₹2,000 महीना दिया गया है।",
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
