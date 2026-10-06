import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-kanya-sumangala-yojana",
  name: { en: "Mukhyamantri Kanya Sumangala Yojana", hi: "मुख्यमंत्री कन्या सुमंगला योजना" },
  aka: ["Kanya Sumangala", "MKSY"],
  shortDescription: {
    en: "Uttar Pradesh families earning up to ₹3 lakh a year get ₹25,000 for each daughter in six stages, from birth to college admission.",
    hi: "उत्तर प्रदेश में ₹3 लाख तक सालाना आय वाले परिवारों को हर बेटी के लिए जन्म से कॉलेज दाखिले तक छह चरणों में ₹25,000 मिलते हैं।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Directorate of Women Welfare, Government of Uttar Pradesh",
    hi: "महिला कल्याण निदेशालय, उत्तर प्रदेश सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "daughter", "beti", "education", "kanya", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 25_000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(residentOf("uttar-pradesh"), incomeUpTo(300_000)),

  details: {
    en: [
      "Kanya Sumangala Yojana supports daughters in Uttar Pradesh from birth until they start college. It began in 2019, and the total amount per girl was raised from ₹15,000 to ₹25,000 from 2024–25.",
      "The money is paid in six parts, each linked to a milestone such as full vaccination or joining Class 1, 6 or 9. This encourages families to keep girls healthy and in school.",
      "The Directorate of Women Welfare runs the scheme. Applications are made online, checked at block and district level, and the money is sent by DBT to the bank account given in the form.",
    ],
    hi: [
      "कन्या सुमंगला योजना उत्तर प्रदेश में बेटियों को जन्म से कॉलेज शुरू होने तक मदद देती है। यह 2019 में शुरू हुई, और 2024–25 से प्रति बेटी कुल राशि ₹15,000 से बढ़ाकर ₹25,000 कर दी गई।",
      "पैसा छह हिस्सों में मिलता है, हर हिस्सा किसी पड़ाव से जुड़ा है, जैसे पूरा टीकाकरण या कक्षा 1, 6 या 9 में दाखिला। इससे परिवार बेटियों की सेहत और पढ़ाई पर ध्यान देते हैं।",
      "यह योजना महिला कल्याण निदेशालय चलाता है। आवेदन ऑनलाइन होता है, ब्लॉक और ज़िला स्तर पर जाँच होती है, और पैसा DBT से फ़ॉर्म में दिए बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹5,000 after the girl is born (born on or after 1 April 2019).",
      "₹2,000 after she completes all vaccinations due by age one.",
      "₹3,000 when she joins Class 1.",
      "₹3,000 when she joins Class 6.",
      "₹5,000 when she joins Class 9.",
      "₹7,000 when she joins a degree or a diploma course of at least two years after Class 10 or 12.",
    ],
    hi: [
      "बेटी के जन्म के बाद ₹5,000 (1 अप्रैल 2019 या उसके बाद जन्म)।",
      "एक साल तक के सभी टीके पूरे होने पर ₹2,000।",
      "कक्षा 1 में दाखिले पर ₹3,000।",
      "कक्षा 6 में दाखिले पर ₹3,000।",
      "कक्षा 9 में दाखिले पर ₹5,000।",
      "10वीं या 12वीं के बाद स्नातक या कम से कम दो साल के डिप्लोमा कोर्स में दाखिले पर ₹7,000।",
    ],
  },
  eligibilityText: {
    en: [
      "The family lives permanently in Uttar Pradesh.",
      "Family income is up to ₹3 lakh a year.",
      "The family has no more than two children.",
      "At most two daughters per family can benefit. If the second delivery is twins, a third daughter can also benefit.",
      "Adopted daughters are covered, counted within the two-child limit.",
    ],
    hi: [
      "परिवार उत्तर प्रदेश का स्थायी निवासी हो।",
      "परिवार की सालाना आय ₹3 लाख तक हो।",
      "परिवार में दो से ज़्यादा बच्चे न हों।",
      "एक परिवार की ज़्यादा से ज़्यादा दो बेटियों को लाभ। दूसरी डिलीवरी में जुड़वाँ होने पर तीसरी बेटी को भी लाभ मिल सकता है।",
      "गोद ली गई बेटियाँ भी शामिल हैं, पर दो बच्चों की सीमा में गिनी जाती हैं।",
    ],
  },
  exclusions: {
    en: [
      "Families with income above ₹3 lakh a year.",
      "Families with more than two children (except the twins case).",
      "The birth-stage amount is only for girls born on or after 1 April 2019; each stage must be claimed in the year the girl reaches it.",
    ],
    hi: [
      "₹3 लाख से ज़्यादा सालाना आय वाले परिवार।",
      "दो से ज़्यादा बच्चों वाले परिवार (जुड़वाँ वाली स्थिति को छोड़कर)।",
      "जन्म वाली किस्त सिर्फ़ 1 अप्रैल 2019 या उसके बाद जन्मी बेटियों के लिए है; हर चरण का दावा उसी साल करना होता है जिस साल बेटी वहाँ पहुँचे।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to mksy.up.gov.in and register as a citizen with your mobile number.",
        "Log in, fill in the form for the stage your daughter has reached, and upload the documents.",
        "Submit and note the application number. The form is checked by the block and district officers before payment.",
      ],
      hi: [
        "mksy.up.gov.in पर जाएँ और मोबाइल नंबर से नागरिक के रूप में रजिस्टर करें।",
        "लॉग इन करें, बेटी जिस चरण पर है उसका फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "फ़ॉर्म जमा करें और आवेदन नंबर नोट करें। भुगतान से पहले ब्लॉक और ज़िला अधिकारी फ़ॉर्म जाँचते हैं।",
      ],
    },
    offline: {
      en: [
        "You can also get help at a Common Service Centre (Jan Seva Kendra) or the block / district probation office.",
        "Carry the documents for the stage you are claiming.",
        "Keep the receipt with the application number.",
      ],
      hi: [
        "आप जन सेवा केंद्र (CSC) या ब्लॉक / ज़िला प्रोबेशन कार्यालय से भी मदद ले सकते हैं।",
        "जिस चरण का दावा कर रहे हैं, उसके दस्तावेज़ साथ ले जाएँ।",
        "आवेदन नंबर वाली रसीद संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: [
      "Daughter's birth certificate",
      "Aadhaar of the daughter (if available) and parents",
      "Income certificate (up to ₹3 lakh)",
      "Proof of UP residence (ration card, Aadhaar, voter ID or utility bill)",
      "Bank passbook",
      "Self-declaration about the number of children",
      "Vaccination card or school / college admission proof for the relevant stage",
    ],
    hi: [
      "बेटी का जन्म प्रमाण पत्र",
      "बेटी (अगर हो) और माता-पिता का आधार",
      "आय प्रमाण पत्र (₹3 लाख तक)",
      "उत्तर प्रदेश निवास का सबूत (राशन कार्ड, आधार, वोटर ID या बिजली/पानी का बिल)",
      "बैंक पासबुक",
      "बच्चों की संख्या के बारे में स्व-घोषणा पत्र",
      "संबंधित चरण के लिए टीकाकरण कार्ड या स्कूल / कॉलेज दाखिले का सबूत",
    ],
  },
  faqs: [
    {
      q: { en: "My daughter is already in Class 6. Can she still get money?", hi: "मेरी बेटी पहले से कक्षा 6 में है। क्या उसे अभी भी पैसा मिल सकता है?" },
      a: {
        en: "Yes. You can apply for the stage she is at now (and later stages as she reaches them). Earlier stages that have passed cannot be claimed.",
        hi: "हाँ। वह अभी जिस चरण पर है उसके लिए (और आगे के चरणों के लिए जब वह वहाँ पहुँचे) आवेदन कर सकते हैं। बीत चुके पिछले चरणों का दावा नहीं हो सकता।",
      },
    },
    {
      q: { en: "Is it ₹15,000 or ₹25,000?", hi: "राशि ₹15,000 है या ₹25,000?" },
      a: {
        en: "The total was raised to ₹25,000 from the 2024–25 financial year, with higher amounts at each stage.",
        hi: "2024–25 वित्त वर्ष से कुल राशि बढ़ाकर ₹25,000 कर दी गई है, और हर चरण की राशि भी बढ़ी है।",
      },
    },
  ],

  officialUrl: "https://mksy.up.gov.in/",
  sources: [
    "https://mksy.up.gov.in/women_welfare/",
    "https://www.indiascholarships.in/scholarships/mukhyamantri-kanya-sumangala-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
