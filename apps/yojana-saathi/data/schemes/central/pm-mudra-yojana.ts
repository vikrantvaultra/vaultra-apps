import { everyone } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-mudra-yojana",
  name: { en: "Pradhan Mantri MUDRA Yojana", hi: "प्रधानमंत्री मुद्रा योजना" },
  aka: ["PMMY", "Mudra Loan"],
  shortDescription: {
    en: "Get a business loan of up to ₹20 lakh without collateral to start or grow a small shop, workshop or service business.",
    hi: "छोटी दुकान, कारखाना या सेवा का काम शुरू करने या बढ़ाने के लिए बिना गारंटी ₹20 लाख तक का कारोबारी लोन पाएँ।",
  },
  level: "central",
  ministry: "finance",
  categories: ["business"],
  tags: ["loan", "business loan", "mudra", "self employment", "shop", "collateral free"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 2_000_000, period: "one-time", kind: "loan" },
  kundliHouse: "business",
  eligibility: everyone(),

  details: {
    en: [
      "PM MUDRA Yojana helps small and micro businesses get bank loans without having to pledge property or find a guarantor. It is meant for non-farm businesses like shops, small factories, repair shops, food stalls, transport operators and service providers, as well as farm-allied work such as dairy, poultry or beekeeping.",
      "Loans come in four sizes: Shishu (up to ₹50,000), Kishore (above ₹50,000 up to ₹5 lakh), Tarun (above ₹5 lakh up to ₹10 lakh) and Tarun Plus (above ₹10 lakh up to ₹20 lakh). Tarun Plus is only for people who have taken a Tarun loan before and repaid it.",
      "The scheme is overseen by the Department of Financial Services, Ministry of Finance. The loans are given by banks, regional rural banks, small finance banks, NBFCs and microfinance institutions. The interest rate is set by each lender under RBI rules.",
    ],
    hi: [
      "प्रधानमंत्री मुद्रा योजना छोटे और सूक्ष्म कारोबारियों को बिना संपत्ति गिरवी रखे और बिना गारंटर के बैंक लोन दिलाती है। यह दुकान, छोटे कारखाने, मरम्मत की दुकान, खाने के ठेले, ट्रांसपोर्ट और सेवा जैसे गैर-कृषि कामों के लिए है, साथ ही डेयरी, मुर्गीपालन या मधुमक्खी पालन जैसे खेती से जुड़े कामों के लिए भी।",
      "लोन चार श्रेणियों में मिलता है: शिशु (₹50,000 तक), किशोर (₹50,000 से ऊपर ₹5 लाख तक), तरुण (₹5 लाख से ऊपर ₹10 लाख तक) और तरुण प्लस (₹10 लाख से ऊपर ₹20 लाख तक)। तरुण प्लस सिर्फ़ उन्हीं को मिलता है जिन्होंने पहले तरुण लोन लेकर चुका दिया हो।",
      "यह योजना वित्त मंत्रालय के वित्तीय सेवा विभाग की देखरेख में चलती है। लोन बैंक, क्षेत्रीय ग्रामीण बैंक, स्मॉल फ़ाइनेंस बैंक, NBFC और माइक्रोफ़ाइनेंस संस्थाएँ देती हैं। ब्याज दर हर बैंक RBI के नियमों के अनुसार तय करता है।",
    ],
  },
  benefits: {
    en: [
      "Collateral-free business loans of up to ₹20 lakh.",
      "Shishu: up to ₹50,000 for people just starting out.",
      "Kishore: above ₹50,000 up to ₹5 lakh; Tarun: above ₹5 lakh up to ₹10 lakh.",
      "Tarun Plus: above ₹10 lakh up to ₹20 lakh for those who have repaid an earlier Tarun loan.",
      "Can cover both equipment (term loan) and day-to-day running costs (working capital).",
    ],
    hi: [
      "₹20 लाख तक का बिना गारंटी कारोबारी लोन।",
      "शिशु: काम शुरू करने वालों के लिए ₹50,000 तक।",
      "किशोर: ₹50,000 से ऊपर ₹5 लाख तक; तरुण: ₹5 लाख से ऊपर ₹10 लाख तक।",
      "तरुण प्लस: पहले का तरुण लोन चुका चुके लोगों के लिए ₹10 लाख से ऊपर ₹20 लाख तक।",
      "मशीन-सामान (टर्म लोन) और रोज़ के खर्च (वर्किंग कैपिटल) दोनों के लिए लोन मिल सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Any Indian citizen with a plan for an income-generating business in manufacturing, trading or services, or a farm-allied activity.",
      "The business must be a small or micro, non-corporate enterprise (sole owner, partnership and similar).",
      "You should not be a defaulter with any bank or financial institution.",
      "For Tarun Plus, you must have taken and fully repaid a Tarun loan.",
    ],
    hi: [
      "कोई भी भारतीय नागरिक जिसके पास निर्माण, व्यापार, सेवा या खेती से जुड़े कमाई वाले काम की योजना हो।",
      "कारोबार छोटा या सूक्ष्म और गैर-कॉरपोरेट होना चाहिए (अकेले मालिक, साझेदारी आदि)।",
      "आप किसी बैंक या वित्तीय संस्था के डिफ़ॉल्टर न हों।",
      "तरुण प्लस के लिए पहले तरुण लोन लेकर पूरा चुकाया होना चाहिए।",
    ],
  },
  exclusions: {
    en: [
      "Companies and large businesses are not covered.",
      "Loans for personal needs (not for a business) are not given under MUDRA.",
      "People who have defaulted on earlier bank loans are usually refused.",
    ],
    hi: [
      "कंपनियाँ और बड़े कारोबार इसमें शामिल नहीं हैं।",
      "निजी ज़रूरतों के लिए (कारोबार के अलावा) मुद्रा लोन नहीं मिलता।",
      "जिन्होंने पहले बैंक लोन नहीं चुकाया, उन्हें आमतौर पर लोन नहीं मिलता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Udyamimitra portal (udyamimitra.in) or your bank's website and choose the MUDRA loan option.",
        "Register with your mobile number, fill in your business details and the loan amount you need.",
        "Upload your documents and submit. The bank will contact you to check details before sanctioning the loan.",
      ],
      hi: [
        "उद्यमीमित्र पोर्टल (udyamimitra.in) या अपने बैंक की वेबसाइट पर जाएँ और मुद्रा लोन विकल्प चुनें।",
        "मोबाइल नंबर से पंजीकरण करें, कारोबार की जानकारी और ज़रूरी लोन राशि भरें।",
        "दस्तावेज़ अपलोड करके जमा करें। लोन मंज़ूर करने से पहले बैंक जाँच के लिए आपसे संपर्क करेगा।",
      ],
    },
    offline: {
      en: [
        "Visit a nearby bank branch, regional rural bank, small finance bank or microfinance office.",
        "Ask for the MUDRA loan form (Shishu, Kishore or Tarun as per your need) and fill it in.",
        "Attach your ID, address proof and business plan or quotations, and submit the form.",
      ],
      hi: [
        "पास की बैंक शाखा, क्षेत्रीय ग्रामीण बैंक, स्मॉल फ़ाइनेंस बैंक या माइक्रोफ़ाइनेंस दफ़्तर जाएँ।",
        "अपनी ज़रूरत के अनुसार मुद्रा लोन फ़ॉर्म (शिशु, किशोर या तरुण) लेकर भरें।",
        "पहचान पत्र, पते का प्रमाण और कारोबार की योजना या कोटेशन लगाकर फ़ॉर्म जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar and PAN card",
      "Address proof",
      "Recent passport-size photos",
      "Quotations for machinery or goods you plan to buy",
      "Business proof such as Udyam registration or licence, if you already run the business",
      "Bank statements (and accounts or ITR for larger loans)",
    ],
    hi: [
      "आधार और पैन कार्ड",
      "पते का प्रमाण",
      "हाल की पासपोर्ट साइज़ फ़ोटो",
      "जो मशीन या सामान ख़रीदना है उसका कोटेशन",
      "अगर कारोबार पहले से चल रहा है तो उद्यम पंजीकरण या लाइसेंस जैसा प्रमाण",
      "बैंक स्टेटमेंट (बड़े लोन के लिए हिसाब-किताब या ITR भी)",
    ],
  },
  faqs: [
    {
      q: { en: "Do I need to give a guarantee or mortgage property?", hi: "क्या गारंटी देनी होगी या संपत्ति गिरवी रखनी होगी?" },
      a: {
        en: "No. MUDRA loans are collateral-free. The loans are backed by a government credit guarantee fund, so the bank does not ask for security.",
        hi: "नहीं। मुद्रा लोन बिना गारंटी के मिलता है। इन लोन के पीछे सरकार का क्रेडिट गारंटी फ़ंड होता है, इसलिए बैंक ज़मानत नहीं माँगता।",
      },
    },
    {
      q: { en: "Is MUDRA a free grant?", hi: "क्या मुद्रा मुफ़्त में मिलने वाला पैसा है?" },
      a: {
        en: "No. It is a loan that you repay with interest in instalments. Be careful of agents who promise a 'MUDRA subsidy' for a fee: the scheme has no such subsidy and no middlemen.",
        hi: "नहीं। यह लोन है जिसे ब्याज के साथ किस्तों में चुकाना होता है। जो एजेंट पैसे लेकर 'मुद्रा सब्सिडी' का वादा करें, उनसे सावधान रहें: योजना में ऐसी कोई सब्सिडी या बिचौलिया नहीं है।",
      },
    },
    {
      q: { en: "Can women or first-time business owners apply?", hi: "क्या महिलाएँ या पहली बार कारोबार करने वाले आवेदन कर सकते हैं?" },
      a: {
        en: "Yes. Shishu loans are made for people starting small, and a large share of MUDRA loans go to women entrepreneurs.",
        hi: "हाँ। शिशु लोन छोटे स्तर पर शुरुआत करने वालों के लिए ही है, और मुद्रा लोन का बड़ा हिस्सा महिला उद्यमियों को जाता है।",
      },
    },
  ],

  officialUrl: "https://www.mudra.org.in/",
  sources: [
    "https://www.mudra.org.in/",
    "https://www.udyamimitra.in/",
    "https://www.business-standard.com/economy/news/lenders-add-25k-beneficiaries-under-tarun-plus-category-of-mudra-yojana-125040700877_1.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
