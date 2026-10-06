import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vhali-dikri-yojana",
  overlapGroup: "daughter-savings",
  name: { en: "Vhali Dikri Yojana", hi: "व्हाली दीकरी योजना" },
  aka: ["Vahli Dikri", "Vahali Dikari", "Vhali Dikri Gujarat"],
  shortDescription: {
    en: "Daughters born in Gujarat on or after 2 August 2019 to couples earning up to ₹2 lakh a year get ₹1.1 lakh in three parts: ₹4,000, ₹6,000 and ₹1 lakh at age 18.",
    hi: "गुजरात में 2 अगस्त 2019 या उसके बाद जन्मी उन बेटियों को, जिनके माता-पिता की सालाना आय ₹2 लाख तक है, तीन किस्तों में ₹1.1 लाख मिलते हैं: ₹4,000, ₹6,000 और 18 साल पर ₹1 लाख।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Women and Child Development Department, Government of Gujarat", hi: "महिला एवं बाल विकास विभाग, गुजरात सरकार" },
  categories: ["women-child", "education"],
  tags: ["daughter", "girl child", "vhali dikri", "beti", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 110000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("gujarat"),
    labelled(isTrue("daughterUnder10"), { en: "You have a daughter born on or after 2 August 2019", hi: "आपकी बेटी 2 अगस्त 2019 या उसके बाद जन्मी हो" }),
    labelled(incomeUpTo(200_000), { en: "Husband and wife together earn up to ₹2 lakh a year", hi: "पति-पत्नी की कुल सालाना आय ₹2 लाख तक हो" }),
  ),

  details: {
    en: [
      "Vhali Dikri Yojana is Gujarat's scheme to improve the birth ratio of girls, keep them in school and prevent child marriage. It covers daughters born on or after 2 August 2019.",
      "The family gets ₹4,000 when the girl joins Class 1, ₹6,000 when she joins Class 9, and ₹1 lakh when she turns 18, for higher education or marriage. That is ₹1,10,000 in all.",
      "The Women and Child Development Department runs the scheme. The application must be made within one year of the daughter's birth. The 2026-27 state budget set aside ₹245 crore for it.",
    ],
    hi: [
      "व्हाली दीकरी योजना गुजरात की योजना है, जिसका मकसद लड़कियों का जन्म-अनुपात सुधारना, उन्हें स्कूल में बनाए रखना और बाल विवाह रोकना है। यह 2 अगस्त 2019 या उसके बाद जन्मी बेटियों के लिए है।",
      "बेटी के कक्षा 1 में दाख़िले पर ₹4,000, कक्षा 9 में दाख़िले पर ₹6,000, और 18 साल की होने पर आगे की पढ़ाई या शादी के लिए ₹1 लाख मिलते हैं। कुल ₹1,10,000।",
      "यह योजना महिला एवं बाल विकास विभाग चलाता है। बेटी के जन्म के एक साल के अंदर आवेदन करना ज़रूरी है। 2026-27 के राज्य बजट में इसके लिए ₹245 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "₹4,000 when your daughter is admitted to Class 1.",
      "₹6,000 when she is admitted to Class 9.",
      "₹1,00,000 at age 18, for higher education or marriage.",
      "Total of ₹1,10,000 per eligible daughter.",
    ],
    hi: [
      "बेटी के कक्षा 1 में दाख़िले पर ₹4,000।",
      "कक्षा 9 में दाख़िले पर ₹6,000।",
      "18 साल की उम्र पर आगे की पढ़ाई या शादी के लिए ₹1,00,000।",
      "हर पात्र बेटी पर कुल ₹1,10,000।",
    ],
  },
  eligibilityText: {
    en: [
      "The daughter was born on or after 2 August 2019 to a family living in Gujarat.",
      "The combined yearly income of husband and wife is ₹2 lakh or less (same limit in villages and cities).",
      "The mother was at least 18 years old when the daughter was born.",
      "All daughters among the couple's first three children are covered.",
      "The form must be submitted within one year of the daughter's birth.",
    ],
    hi: [
      "बेटी का जन्म 2 अगस्त 2019 या उसके बाद गुजरात में रहने वाले परिवार में हुआ हो।",
      "पति-पत्नी की कुल सालाना आय ₹2 लाख या उससे कम हो (गाँव और शहर दोनों में यही सीमा)।",
      "बेटी के जन्म के समय माँ की उम्र कम से कम 18 साल हो।",
      "दंपति के पहले तीन बच्चों में जितनी बेटियाँ हैं, सबको लाभ मिलता है।",
      "बेटी के जन्म के एक साल के अंदर फ़ॉर्म जमा करना होता है।",
    ],
  },
  exclusions: {
    en: [
      "Daughters born before 2 August 2019.",
      "Couple's income above ₹2 lakh a year.",
      "The mother was under 18 at the time of birth.",
      "Daughters born as the fourth or later child.",
      "Applications made more than a year after the birth.",
    ],
    hi: [
      "2 अगस्त 2019 से पहले जन्मी बेटियाँ।",
      "दंपति की सालाना आय ₹2 लाख से ज़्यादा।",
      "जन्म के समय माँ की उम्र 18 साल से कम।",
      "चौथे या उसके बाद के बच्चे के रूप में जन्मी बेटी।",
      "जन्म के एक साल बाद किया गया आवेदन।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Vhali Dikri form from your Anganwadi centre, gram panchayat (VCE), CDPO office or the district Women and Child Officer's office.",
        "Fill it in and attach the documents listed below.",
        "Submit it within one year of your daughter's birth and keep the receipt.",
      ],
      hi: [
        "व्हाली दीकरी का फ़ॉर्म अपने आंगनवाड़ी केंद्र, ग्राम पंचायत (VCE), CDPO कार्यालय या ज़िला महिला एवं बाल अधिकारी कार्यालय से लें।",
        "फ़ॉर्म भरें और नीचे दिए दस्तावेज़ लगाएँ।",
        "बेटी के जन्म के एक साल के अंदर जमा करें और रसीद संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Daughter's birth certificate", "Aadhaar cards of the parents (and the daughter, if made)", "Income certificate of the couple", "Proof of residence in Gujarat", "Birth certificates of the other children", "Bank account details", "Recent photograph"],
    hi: ["बेटी का जन्म प्रमाण पत्र", "माता-पिता का आधार कार्ड (और बेटी का, अगर बना हो)", "दंपति का आय प्रमाण पत्र", "गुजरात में निवास का प्रमाण", "बाकी बच्चों के जन्म प्रमाण पत्र", "बैंक खाते का विवरण", "हाल की फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "We missed the one-year deadline. Can we still apply?", hi: "एक साल की समय सीमा निकल गई। क्या अब भी आवेदन हो सकता है?" },
      a: {
        en: "The rules ask for the form within one year of birth. Speak to the district Women and Child Officer about your case, but late forms are usually not accepted.",
        hi: "नियम के अनुसार जन्म के एक साल के अंदर फ़ॉर्म देना होता है। अपने मामले के बारे में ज़िला महिला एवं बाल अधिकारी से बात करें, पर देर से आए फ़ॉर्म आम तौर पर नहीं लिए जाते।",
      },
    },
    {
      q: { en: "Do we get money when the daughter is born?", hi: "क्या बेटी के जन्म पर पैसा मिलता है?" },
      a: {
        en: "No. You register at birth, but the first ₹4,000 comes only when she joins Class 1.",
        hi: "नहीं। जन्म के समय नाम दर्ज होता है, पर पहले ₹4,000 तब मिलते हैं जब वह कक्षा 1 में दाख़िला लेती है।",
      },
    },
  ],

  officialUrl: "https://wcd.gujarat.gov.in/initiativedetails?id=328",
  sources: [
    "https://wcd.gujarat.gov.in/initiativedetails?id=328",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
