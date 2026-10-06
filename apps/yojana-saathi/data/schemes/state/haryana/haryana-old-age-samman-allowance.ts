import { all, incomeUpTo, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-old-age-samman-allowance",
  overlapGroup: "old-age-pension",
  name: { en: "Old Age Samman Allowance (Haryana)", hi: "बुढ़ापा सम्मान भत्ता (हरियाणा)" },
  aka: ["Haryana old age pension", "Budhapa Pension", "OASA"],
  shortDescription: {
    en: "Haryana residents aged 60 or more whose own and spouse's income is up to ₹3 lakh a year get a pension of ₹3,200 a month, paid into their bank account.",
    hi: "60 साल या उससे ज़्यादा उम्र के हरियाणा निवासियों को, जिनकी अपनी और जीवनसाथी की मिलाकर आय ₹3 लाख सालाना तक है, हर महीने ₹3,200 पेंशन बैंक खाते में मिलती है।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Social Justice, Empowerment, Welfare of SCs & BCs and Antyodaya (SEWA) Department, Haryana",
    hi: "सामाजिक न्याय, अधिकारिता, अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण तथा अंत्योदय (सेवा) विभाग, हरियाणा",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "budhapa pension", "senior citizen", "pension", "haryana"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 3200, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("haryana"),
    minAge(60),
    labelled(incomeUpTo(300_000), {
      en: "Your income together with your spouse's is up to ₹3 lakh a year",
      hi: "आपकी और जीवनसाथी की मिलाकर सालाना आय ₹3 लाख तक हो",
    }),
  ),

  details: {
    en: [
      "The Old Age Samman Allowance is Haryana's own monthly pension for elderly people. It has been raised many times and is ₹3,200 a month from 1 November 2025.",
      "It is run by the SEWA Department and paid every month into the beneficiary's bank account through PFMS.",
      "New pensions are sanctioned using Family ID (Parivar Pehchan Patra) data. When a person in the database becomes eligible, the department contacts them for consent, so most people don't have to file a separate application.",
    ],
    hi: [
      "बुढ़ापा सम्मान भत्ता हरियाणा सरकार की अपनी मासिक पेंशन है। इसे कई बार बढ़ाया गया है और 1 नवंबर 2025 से यह ₹3,200 महीना है।",
      "यह योजना सेवा विभाग चलाता है और पेंशन हर महीने PFMS के ज़रिए लाभार्थी के बैंक खाते में आती है।",
      "नई पेंशन परिवार पहचान पत्र (PPP) के डेटा से मंज़ूर होती है। डेटा में कोई व्यक्ति पात्र होते ही विभाग उससे सहमति लेने के लिए संपर्क करता है, इसलिए ज़्यादातर लोगों को अलग से आवेदन नहीं करना पड़ता।",
    ],
  },
  benefits: {
    en: [
      "₹3,200 every month for life, paid into your bank account.",
      "Retired government staff whose own pension is less than this amount get the difference as a top-up.",
    ],
    hi: [
      "जीवन भर हर महीने ₹3,200, सीधे बैंक खाते में।",
      "जिन सेवानिवृत्त सरकारी कर्मचारियों की अपनी पेंशन इससे कम है, उन्हें बाकी अंतर की राशि मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 60 years or more.",
      "Domicile and resident of Haryana, living in the state for at least the last 15 years.",
      "Your income from all sources, together with your spouse's, is up to ₹3 lakh a year.",
      "You have a Family ID (Parivar Pehchan Patra).",
    ],
    hi: [
      "उम्र 60 साल या उससे ज़्यादा।",
      "हरियाणा के अधिवासी और निवासी हों, और पिछले कम से कम 15 साल से राज्य में रह रहे हों।",
      "सभी स्रोतों से आपकी और जीवनसाथी की मिलाकर सालाना आय ₹3 लाख तक हो।",
      "आपके पास परिवार पहचान पत्र (PPP) हो।",
    ],
  },
  exclusions: {
    en: [
      "People getting a pension from a government, local body or government-funded organisation, unless that pension is smaller than this allowance (then only the difference is paid).",
      "Income from provident fund or annuities counts as pension for this rule.",
    ],
    hi: [
      "जिन्हें किसी सरकार, स्थानीय निकाय या सरकारी मदद से चलने वाली संस्था से पेंशन मिलती है, जब तक वह पेंशन इस भत्ते से कम न हो (तब सिर्फ़ अंतर की राशि मिलती है)।",
      "इस नियम में प्रोविडेंट फ़ंड या एन्युटी से होने वाली आय भी पेंशन मानी जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Make sure your Family ID (PPP) details, especially date of birth, income and bank account, are correct and verified.",
        "When you turn 60, the department identifies you from PPP data and contacts you for consent.",
        "If you haven't been contacted, apply for old-age pension on saralharyana.gov.in or at a SARAL Kendra or CSC.",
      ],
      hi: [
        "पक्का करें कि परिवार पहचान पत्र (PPP) में आपकी जानकारी, ख़ासकर जन्मतिथि, आय और बैंक खाता, सही और सत्यापित हो।",
        "60 साल के होने पर विभाग PPP डेटा से आपको पहचानकर सहमति के लिए संपर्क करता है।",
        "अगर संपर्क नहीं हुआ है, तो saralharyana.gov.in पर या SARAL केंद्र/CSC पर बुढ़ापा पेंशन के लिए आवेदन करें।",
      ],
    },
    offline: {
      en: [
        "Visit the District Social Welfare Officer's office with your Family ID and Aadhaar if you have a problem.",
        "Staff will check your PPP data and help you give consent.",
      ],
      hi: [
        "कोई समस्या हो तो परिवार पहचान पत्र और आधार लेकर ज़िला समाज कल्याण अधिकारी के कार्यालय जाएँ।",
        "कर्मचारी आपका PPP डेटा जाँचकर सहमति देने में मदद करेंगे।",
      ],
    },
  },
  documents: {
    en: ["Family ID (Parivar Pehchan Patra)", "Aadhaar card", "Bank account details", "Proof of age (if not already verified in PPP)"],
    hi: ["परिवार पहचान पत्र (PPP)", "आधार कार्ड", "बैंक खाते का विवरण", "उम्र का प्रमाण (अगर PPP में पहले से सत्यापित न हो)"],
  },
  faqs: [
    {
      q: { en: "Can a husband and wife both get it?", hi: "क्या पति-पत्नी दोनों को मिल सकती है?" },
      a: {
        en: "Yes, each person aged 60 or more who meets the conditions gets their own pension. The income limit is checked on the couple's combined income.",
        hi: "हाँ, शर्तें पूरी करने वाले 60 साल से ऊपर के हर व्यक्ति को अपनी अलग पेंशन मिलती है। आय सीमा पति-पत्नी की मिलाकर आय पर देखी जाती है।",
      },
    },
    {
      q: { en: "I was getting widow pension. What happens at 60?", hi: "मुझे विधवा पेंशन मिल रही थी। 60 साल पर क्या होगा?" },
      a: {
        en: "Widow and destitute women pensions are converted into the Old Age Samman Allowance at 60, if you meet its conditions. You don't get both.",
        hi: "शर्तें पूरी होने पर 60 साल की उम्र में विधवा/निराश्रित महिला पेंशन बुढ़ापा सम्मान भत्ते में बदल जाती है। दोनों एक साथ नहीं मिलतीं।",
      },
    },
  ],

  officialUrl: "https://socialjusticehry.gov.in/old-age-samman-allowance-scheme/",
  sources: [
    "https://socialjusticehry.gov.in/old-age-samman-allowance-scheme/",
    "https://cdnbbsr.s3waas.gov.in/s392bbd31f8e0e43a7da8a6295b251725f/uploads/2022/07/2022072744.pdf",
    "https://cdnbbsr.s3waas.gov.in/s392bbd31f8e0e43a7da8a6295b251725f/uploads/2024/07/202407091260933721.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1991,
  status: "active",
};

export default scheme;
