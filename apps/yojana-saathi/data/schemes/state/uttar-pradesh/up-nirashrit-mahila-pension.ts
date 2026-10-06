import { all, female, incomeUpTo, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-nirashrit-mahila-pension",
  name: { en: "Nirashrit Mahila Pension Yojana (Uttar Pradesh)", hi: "निराश्रित महिला पेंशन योजना (उत्तर प्रदेश)" },
  aka: ["UP widow pension", "Vidhwa Pension", "Nirashrit Mahila Pension"],
  shortDescription: {
    en: "Women in Uttar Pradesh aged 18 or above who have lost their husband, from families earning up to ₹2 lakh a year, get ₹1,000 a month in their bank account.",
    hi: "उत्तर प्रदेश में 18 साल या उससे ज़्यादा उम्र की वे महिलाएँ जिनके पति का निधन हो गया है और परिवार की आय ₹2 लाख सालाना तक है, उन्हें हर महीने ₹1,000 बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Women Welfare Department, Government of Uttar Pradesh",
    hi: "महिला कल्याण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["pension-insurance", "women-child", "social-welfare"],
  tags: ["widow pension", "vidhwa", "destitute women", "pension", "women", "uttar pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttar-pradesh"),
    female(),
    minAge(18),
    when("marital", "in", ["widowed"]),
    incomeUpTo(200_000),
  ),

  details: {
    en: [
      "The Nirashrit Mahila Pension gives monthly support to women in Uttar Pradesh who have been left without support after their husband's death.",
      "Each eligible woman gets ₹1,000 a month. The money is sent every quarter by DBT into her Aadhaar-linked bank account through the state's financial management system.",
      "The Women Welfare Department runs the scheme. Applications are made on the SSPY portal and verified by the block or town office before the pension starts.",
    ],
    hi: [
      "निराश्रित महिला पेंशन उत्तर प्रदेश की उन महिलाओं को हर महीने मदद देती है, जो पति के निधन के बाद बेसहारा हो गई हैं।",
      "हर पात्र महिला को हर महीने ₹1,000 मिलते हैं। पैसा हर तिमाही DBT से उसके आधार से जुड़े बैंक खाते में भेजा जाता है।",
      "यह योजना महिला कल्याण विभाग चलाता है। आवेदन SSPY पोर्टल पर होता है, और पेंशन शुरू होने से पहले ब्लॉक या नगर कार्यालय जाँच करता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month.",
      "Paid every quarter directly into your Aadhaar-linked bank account.",
    ],
    hi: [
      "हर महीने ₹1,000।",
      "हर तिमाही सीधे आपके आधार से जुड़े बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Uttar Pradesh.",
      "A woman aged 18 or above whose husband has died.",
      "Her family's total income from all sources is up to ₹2 lakh a year.",
      "Has an Aadhaar-linked bank account.",
    ],
    hi: [
      "उत्तर प्रदेश की स्थायी निवासी।",
      "18 साल या उससे ज़्यादा उम्र की वह महिला जिसके पति का निधन हो गया है।",
      "परिवार की सभी स्रोतों से कुल सालाना आय ₹2 लाख तक हो।",
      "आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Women who already get another central or state government pension.",
      "Families with income above ₹2 lakh a year.",
      "Women who have remarried.",
    ],
    hi: [
      "जिन्हें पहले से केंद्र या राज्य सरकार की कोई दूसरी पेंशन मिलती है।",
      "₹2 लाख से ज़्यादा सालाना आय वाले परिवार।",
      "जिन महिलाओं ने दोबारा शादी कर ली है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to sspy-up.gov.in and choose the Nirashrit Mahila (widow) pension form.",
        "Fill in your details and upload your photo, husband's death certificate, income certificate and bank details.",
        "Submit, print the form and give a signed copy with documents to the block office (villages) or the SDM / town office (cities) for verification.",
      ],
      hi: [
        "sspy-up.gov.in पर जाएँ और निराश्रित महिला (विधवा) पेंशन का फ़ॉर्म चुनें।",
        "अपनी जानकारी भरें और फ़ोटो, पति का मृत्यु प्रमाण पत्र, आय प्रमाण पत्र और बैंक विवरण अपलोड करें।",
        "फ़ॉर्म जमा करके प्रिंट निकालें, और दस्तख़त की हुई कॉपी दस्तावेज़ों के साथ जाँच के लिए ब्लॉक कार्यालय (गाँव) या SDM / नगर कार्यालय (शहर) में दें।",
      ],
    },
    offline: {
      en: [
        "Visit a Jan Seva Kendra (CSC) to have the online form filled in.",
        "Carry your Aadhaar, husband's death certificate, income certificate, photo and bank passbook.",
        "Keep the printed acknowledgement with the registration number.",
      ],
      hi: [
        "ऑनलाइन फ़ॉर्म भरवाने के लिए जन सेवा केंद्र (CSC) जाएँ।",
        "आधार, पति का मृत्यु प्रमाण पत्र, आय प्रमाण पत्र, फ़ोटो और बैंक पासबुक साथ ले जाएँ।",
        "रजिस्ट्रेशन नंबर वाली छपी हुई पावती संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Husband's death certificate", "Income certificate", "Age proof", "Passport-size photo", "Aadhaar-linked bank passbook"],
    hi: ["आधार कार्ड", "पति का मृत्यु प्रमाण पत्र", "आय प्रमाण पत्र", "उम्र का सबूत", "पासपोर्ट साइज़ फ़ोटो", "आधार से जुड़ी बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "Is there an upper age limit?", hi: "क्या उम्र की कोई ऊपरी सीमा है?" },
      a: {
        en: "No. Any widow aged 18 or above who meets the income limit can apply.",
        hi: "नहीं। आय सीमा में आने वाली 18 साल या उससे ज़्यादा उम्र की कोई भी विधवा आवेदन कर सकती है।",
      },
    },
    {
      q: { en: "Can I get both this and the old age pension?", hi: "क्या मुझे यह और वृद्धावस्था पेंशन दोनों मिल सकती हैं?" },
      a: {
        en: "No. You can get only one government pension at a time.",
        hi: "नहीं। एक समय में सिर्फ़ एक सरकारी पेंशन मिल सकती है।",
      },
    },
  ],

  officialUrl: "https://sspy-up.gov.in/",
  sources: [
    "https://sspy-up.gov.in/",
    "https://saharanpur.nic.in/scheme/destitute-widow-pension-scheme/",
    "https://www.theweek.in/wire-updates/national/2025/08/06/des54-up-pension-destitute-women.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
