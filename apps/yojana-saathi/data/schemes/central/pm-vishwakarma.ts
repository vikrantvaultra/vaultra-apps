import { all, minAge, when, notGovtEmployee } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-vishwakarma",
  name: { en: "PM Vishwakarma", hi: "पीएम विश्वकर्मा" },
  aka: ["PM Vishwakarma Yojana"],
  shortDescription: {
    en: "Traditional artisans in 18 trades get free skill training with ₹500 a day, a ₹15,000 toolkit voucher and collateral-free loans of up to ₹3 lakh at 5% interest.",
    hi: "18 पारंपरिक कारीगरी के कामों से जुड़े लोगों को ₹500 रोज़ के साथ मुफ़्त प्रशिक्षण, ₹15,000 का टूलकिट वाउचर और 5% ब्याज पर ₹3 लाख तक बिना गारंटी लोन।",
  },
  level: "central",
  ministry: "msme",
  categories: ["business", "skills-employment"],
  tags: ["artisan", "karigar", "carpenter", "tailor", "toolkit", "loan", "vishwakarma"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 300_000, period: "one-time", kind: "loan" },
  ageRange: { min: 18 },
  kundliHouse: "business",
  eligibility: all(minAge(18), when("occupation", "in", ["artisan"]), notGovtEmployee()),

  details: {
    en: [
      "PM Vishwakarma supports artisans and craftspeople who work with their hands and tools in 18 family-based traditional trades, such as carpenters, blacksmiths, potters, goldsmiths, cobblers, masons, tailors, barbers and washermen.",
      "Once registered, you get a PM Vishwakarma certificate and ID card, short skill training with a daily stipend, a voucher to buy modern tools, and cheap collateral-free loans to grow your work. There are also small incentives for taking digital payments and help with marketing.",
      "The scheme is run jointly by the Ministry of MSME, the Ministry of Skill Development and Entrepreneurship and the Department of Financial Services. Registration is done through Common Service Centres and verified by your gram panchayat or urban local body.",
    ],
    hi: [
      "पीएम विश्वकर्मा उन कारीगरों और शिल्पकारों की मदद करती है जो 18 पारिवारिक पारंपरिक कामों में हाथ और औज़ारों से काम करते हैं, जैसे बढ़ई, लोहार, कुम्हार, सुनार, मोची, राजमिस्त्री, दर्ज़ी, नाई और धोबी।",
      "पंजीकरण के बाद आपको पीएम विश्वकर्मा प्रमाण पत्र और पहचान पत्र, रोज़ के भत्ते के साथ छोटा कौशल प्रशिक्षण, आधुनिक औज़ार ख़रीदने के लिए वाउचर और काम बढ़ाने के लिए सस्ता बिना गारंटी लोन मिलता है। डिजिटल भुगतान लेने पर छोटा प्रोत्साहन और मार्केटिंग में मदद भी मिलती है।",
      "यह योजना MSME मंत्रालय, कौशल विकास एवं उद्यमशीलता मंत्रालय और वित्तीय सेवा विभाग मिलकर चलाते हैं। पंजीकरण कॉमन सर्विस सेंटर से होता है और ग्राम पंचायत या नगर निकाय इसकी जाँच करते हैं।",
    ],
  },
  benefits: {
    en: [
      "Free basic skill training with a stipend of ₹500 a day.",
      "Toolkit incentive of ₹15,000 as an e-voucher.",
      "Collateral-free loans of up to ₹3 lakh at 5% interest: ₹1 lakh first (18 months to repay), then ₹2 lakh (30 months).",
      "₹1 for each digital transaction, up to 100 transactions a month.",
      "PM Vishwakarma certificate and ID card, plus marketing support.",
    ],
    hi: [
      "₹500 रोज़ के भत्ते के साथ मुफ़्त बुनियादी कौशल प्रशिक्षण।",
      "ई-वाउचर के रूप में ₹15,000 का टूलकिट प्रोत्साहन।",
      "5% ब्याज पर ₹3 लाख तक बिना गारंटी लोन: पहले ₹1 लाख (18 महीने में चुकाना), फिर ₹2 लाख (30 महीने में)।",
      "हर डिजिटल लेन-देन पर ₹1, महीने में 100 लेन-देन तक।",
      "पीएम विश्वकर्मा प्रमाण पत्र और पहचान पत्र, साथ में मार्केटिंग में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "You work with your hands and tools in one of the 18 listed trades, self-employed in the unorganised sector.",
      "You are at least 18 years old on the date of registration.",
      "You have not taken a loan under a similar central or state self-employment scheme (such as PMEGP, PM SVANidhi or MUDRA) in the last 5 years, unless it has been fully repaid.",
      "Only one member of a family (husband, wife and unmarried children) can register.",
    ],
    hi: [
      "आप 18 सूचीबद्ध कामों में से किसी एक में हाथ और औज़ारों से काम करते हैं और असंगठित क्षेत्र में स्व-रोज़गार हैं।",
      "पंजीकरण की तारीख़ पर आपकी उम्र कम से कम 18 साल हो।",
      "पिछले 5 साल में PMEGP, पीएम स्वनिधि या मुद्रा जैसी किसी केंद्र या राज्य की स्व-रोज़गार योजना में लोन न लिया हो, या लिया हो तो पूरा चुका दिया हो।",
      "एक परिवार (पति, पत्नी और अविवाहित बच्चे) से सिर्फ़ एक सदस्य पंजीकरण करा सकता है।",
    ],
  },
  exclusions: {
    en: [
      "People in government service and their family members are not eligible.",
      "Trades outside the 18 notified ones are not covered.",
      "A second family member cannot register once one member has.",
    ],
    hi: [
      "सरकारी सेवा में लगे लोग और उनके परिवार के सदस्य पात्र नहीं हैं।",
      "18 अधिसूचित कामों के बाहर के काम शामिल नहीं हैं।",
      "परिवार का एक सदस्य पंजीकरण करा चुका हो तो दूसरा नहीं करा सकता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your nearest Common Service Centre (CSC) with your Aadhaar, mobile number and bank details.",
        "The CSC operator registers you on the PM Vishwakarma portal after Aadhaar-based verification and fills in your trade details.",
        "Your application is verified by the gram panchayat or urban local body, then by district and state committees.",
        "After approval, download your certificate and ID card, and you will be called for training. The toolkit voucher and loan follow.",
      ],
      hi: [
        "आधार, मोबाइल नंबर और बैंक विवरण लेकर नज़दीकी कॉमन सर्विस सेंटर (CSC) जाएँ।",
        "CSC संचालक आधार से सत्यापन करके पीएम विश्वकर्मा पोर्टल पर आपका पंजीकरण करेगा और आपके काम की जानकारी भरेगा।",
        "ग्राम पंचायत या नगर निकाय, फिर ज़िला और राज्य समितियाँ आपके आवेदन की जाँच करती हैं।",
        "मंज़ूरी के बाद प्रमाण पत्र और पहचान पत्र डाउनलोड करें, और आपको प्रशिक्षण के लिए बुलाया जाएगा। इसके बाद टूलकिट वाउचर और लोन मिलता है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Mobile number linked to Aadhaar", "Bank account details", "Ration card (for family details)"],
    hi: ["आधार कार्ड", "आधार से जुड़ा मोबाइल नंबर", "बैंक खाते का विवरण", "राशन कार्ड (परिवार की जानकारी के लिए)"],
  },
  faqs: [
    {
      q: { en: "Which 18 trades are covered?", hi: "कौन-से 18 काम शामिल हैं?" },
      a: {
        en: "Carpenter, boat maker, armourer, blacksmith, hammer and tool kit maker, locksmith, goldsmith, potter, sculptor or stone breaker, cobbler, mason, basket, mat or broom maker and coir weaver, doll and toy maker, barber, garland maker, washerman, tailor, and fishing net maker.",
        hi: "बढ़ई, नाव बनाने वाले, अस्त्र बनाने वाले, लोहार, हथौड़ा और औज़ार बनाने वाले, ताला बनाने वाले, सुनार, कुम्हार, मूर्तिकार या पत्थर तोड़ने वाले, मोची, राजमिस्त्री, टोकरी, चटाई या झाड़ू बनाने वाले और कॉयर बुनकर, गुड़िया और खिलौने बनाने वाले, नाई, माला बनाने वाले, धोबी, दर्ज़ी और मछली पकड़ने का जाल बनाने वाले।",
      },
    },
    {
      q: { en: "Is there any fee to register?", hi: "क्या पंजीकरण की कोई फ़ीस है?" },
      a: {
        en: "No. Registration at the CSC is free for you. Don't pay anyone who asks for money to register you.",
        hi: "नहीं। CSC पर पंजीकरण आपके लिए मुफ़्त है। पंजीकरण के नाम पर पैसे माँगने वाले किसी को भी पैसे न दें।",
      },
    },
  ],

  officialUrl: "https://pmvishwakarma.gov.in/",
  sources: [
    "https://pmvishwakarma.gov.in/",
    "https://www.myscheme.gov.in/schemes/pmv",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
