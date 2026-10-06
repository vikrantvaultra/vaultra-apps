import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shri-vajpayee-bankable-yojana",
  name: { en: "Shri Vajpayee Bankable Yojana", hi: "श्री वाजपेयी बैंकेबल योजना" },
  aka: ["Vajpayee Bankable", "Bankable loan Gujarat", "BLP Gujarat"],
  shortDescription: {
    en: "People aged 18 to 65 in Gujarat can get a bank loan of up to ₹25 lakh for a small business, with a state subsidy of 20% to 40% (up to ₹3.75 lakh, or ₹5 lakh for SC/ST and disabled).",
    hi: "गुजरात में 18 से 65 साल के लोग छोटे काम-धंधे के लिए ₹25 लाख तक का बैंक लोन ले सकते हैं, जिस पर राज्य 20% से 40% सब्सिडी देता है (₹3.75 लाख तक, SC/ST और दिव्यांग के लिए ₹5 लाख तक)।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Commissioner of Cottage and Rural Industries, Industries and Mines Department, Government of Gujarat", hi: "कुटीर एवं ग्रामोद्योग आयुक्तालय, उद्योग एवं खान विभाग, गुजरात सरकार" },
  categories: ["business", "skills-employment"],
  tags: ["business loan", "subsidy", "self employment", "vajpayee bankable", "msme", "gujarat"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 2500000, period: "one-time", kind: "loan" },
  ageRange: { min: 18, max: 65 },
  kundliHouse: "business",
  eligibility: all(residentOf("gujarat"), ...ageBetween(18, 65)),

  details: {
    en: [
      "Shri Vajpayee Bankable Yojana helps unemployed people in Gujarat start a small industry, service or trading business with a bank loan and a state subsidy. People with disabilities, including blind people, can also apply.",
      "Banks lend up to ₹25 lakh. The state then pays a subsidy on the loan: 25% in rural areas and 20% in urban areas for the general category, and 40% (rural) or 30% (urban) for SC, ST, ex-servicemen, women and people with 40% or more disability. General category applicants put in 10% of the project cost themselves.",
      "The scheme has no income limit. Applications are made online on the BLP (Bankable Loan Portal) and go to the bank you choose. The 2026-27 budget set aside ₹494 crore for the subsidy.",
    ],
    hi: [
      "श्री वाजपेयी बैंकेबल योजना गुजरात के बेरोज़गार लोगों को बैंक लोन और राज्य सब्सिडी के साथ छोटा उद्योग, सेवा या व्यापार शुरू करने में मदद करती है। नेत्रहीन समेत दिव्यांग लोग भी आवेदन कर सकते हैं।",
      "बैंक ₹25 लाख तक का लोन देते हैं। फिर राज्य लोन पर सब्सिडी देता है: सामान्य वर्ग को गाँव में 25% और शहर में 20%; SC, ST, पूर्व सैनिक, महिलाएँ और 40% या ज़्यादा दिव्यांगता वाले लोगों को गाँव में 40% और शहर में 30%। सामान्य वर्ग के आवेदक को प्रोजेक्ट लागत का 10% खुद लगाना होता है।",
      "इस योजना में कोई आय सीमा नहीं है। आवेदन BLP (बैंकेबल लोन पोर्टल) पर ऑनलाइन होता है और आपके चुने हुए बैंक तक जाता है। 2026-27 के बजट में सब्सिडी के लिए ₹494 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Bank loan of up to ₹25 lakh for an industry, service or trading unit.",
      "Subsidy for the general category: 25% (rural) or 20% (urban) of the loan.",
      "Subsidy for SC, ST, ex-servicemen, women and people with 40%+ disability: 40% (rural) or 30% (urban).",
      "Maximum subsidy ₹3.75 lakh; ₹5 lakh for SC, ST and people with disabilities.",
    ],
    hi: [
      "उद्योग, सेवा या व्यापार इकाई के लिए ₹25 लाख तक का बैंक लोन।",
      "सामान्य वर्ग को लोन पर सब्सिडी: गाँव में 25%, शहर में 20%।",
      "SC, ST, पूर्व सैनिक, महिलाएँ और 40%+ दिव्यांगता वाले लोगों को: गाँव में 40%, शहर में 30%।",
      "सब्सिडी ज़्यादा से ज़्यादा ₹3.75 लाख; SC, ST और दिव्यांगजनों के लिए ₹5 लाख।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 to 65 and living in Gujarat.",
      "Passed at least Class 4, or have trade training (3 months at a private institute or 1 month at a government-recognised one), or a year's experience in the business, or are a hereditary artisan.",
      "No income limit.",
      "Only one project per person, financed by a single bank.",
    ],
    hi: [
      "उम्र 18 से 65 साल और गुजरात में रहते हों।",
      "कम से कम कक्षा 4 पास हों, या काम का प्रशिक्षण लिया हो (निजी संस्था से 3 महीने या सरकारी मान्यता वाली संस्था से 1 महीना), या उस धंधे में एक साल का अनुभव हो, या पुश्तैनी कारीगर हों।",
      "कोई आय सीमा नहीं।",
      "एक व्यक्ति का एक ही प्रोजेक्ट, और उसका लोन एक ही बैंक से।",
    ],
  },
  exclusions: {
    en: [
      "Meat processing or sale, and making, storing or selling intoxicants.",
      "Crop farming and plantations, fisheries and piggeries.",
      "Any activity that harms the environment or is banned by law.",
    ],
    hi: [
      "मांस का प्रसंस्करण या बिक्री, और नशीली चीज़ें बनाना, रखना या बेचना।",
      "फ़सल की खेती और बागान, मछली पालन और सूअर पालन।",
      "पर्यावरण को नुकसान पहुँचाने वाला या क़ानून से प्रतिबंधित कोई भी काम।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to blp.gujarat.gov.in and register with your mobile number.",
        "Log in, fill in the project details and upload your documents.",
        "The application is checked and sent to the bank you chose. Track it under Application Status.",
        "After the bank sanctions the loan, the subsidy is released on it as per the scheme rules.",
      ],
      hi: [
        "blp.gujarat.gov.in पर जाएँ और मोबाइल नंबर से रजिस्टर करें।",
        "लॉगिन करें, प्रोजेक्ट की जानकारी भरें और दस्तावेज़ अपलोड करें।",
        "आवेदन की जाँच होकर वह आपके चुने हुए बैंक को जाता है। स्थिति Application Status में देखें।",
        "बैंक के लोन मंज़ूर करने के बाद योजना के नियमों के अनुसार उस पर सब्सिडी दी जाती है।",
      ],
    },
    offline: {
      en: [
        "In villages, the VCE at your gram panchayat can fill in the online form free of cost.",
        "For help, visit your District Industries Centre or call 9909926280 / 9909926180.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत का VCE ऑनलाइन फ़ॉर्म मुफ़्त में भर सकता है।",
        "मदद के लिए अपने ज़िला उद्योग केंद्र जाएँ या 9909926280 / 9909926180 पर कॉल करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Proof of age", "Proof of education, training or experience", "Caste certificate (SC/ST), disability certificate or ex-serviceman proof, if applicable", "Quotations for machinery or stock", "Project report", "Bank account details", "Photograph"],
    hi: ["आधार कार्ड", "उम्र का प्रमाण", "पढ़ाई, प्रशिक्षण या अनुभव का प्रमाण", "जाति प्रमाण पत्र (SC/ST), दिव्यांगता प्रमाण पत्र या पूर्व सैनिक का प्रमाण, अगर लागू हो", "मशीन या माल के कोटेशन", "प्रोजेक्ट रिपोर्ट", "बैंक खाते का विवरण", "फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Is there an income limit?", hi: "क्या कोई आय सीमा है?" },
      a: {
        en: "No. Anyone aged 18 to 65 who meets the education, training or experience condition can apply.",
        hi: "नहीं। 18 से 65 साल का कोई भी व्यक्ति, जो पढ़ाई, प्रशिक्षण या अनुभव की शर्त पूरी करता है, आवेदन कर सकता है।",
      },
    },
    {
      q: { en: "Is the subsidy paid to me in cash?", hi: "क्या सब्सिडी मुझे नकद मिलती है?" },
      a: {
        en: "No. It is given on your bank loan, so you end up repaying less. Your bank or District Industries Centre can explain how it is adjusted.",
        hi: "नहीं। यह आपके बैंक लोन पर दी जाती है, जिससे आपको कम चुकाना पड़ता है। यह कैसे समायोजित होती है, यह आपका बैंक या ज़िला उद्योग केंद्र बता देगा।",
      },
    },
  ],

  officialUrl: "https://blp.gujarat.gov.in/",
  sources: [
    "https://blp.gujarat.gov.in/about_us.php",
    "https://blp.gujarat.gov.in/faq.php",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1999,
  status: "active",
};

export default scheme;
