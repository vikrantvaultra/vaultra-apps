import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-mukh-mantri-tirath-yatra",
  tier: "compact",
  name: { en: "Mukh Mantri Tirath Yatra Yojana (Punjab)", hi: "मुख्यमंत्री तीर्थ यात्रा योजना (पंजाब)" },
  aka: ["Mukh Mantri Teerth Yatra", "Punjab free pilgrimage", "Tirath Yatra Punjab"],
  shortDescription: {
    en: "Free pilgrimage for Punjab residents aged 50 and above, with AC bus travel, hotel stay, meals and medical help paid for by the state; pilgrims are picked by draw.",
    hi: "पंजाब के 50 साल और उससे ज़्यादा उम्र के निवासियों के लिए मुफ़्त तीर्थ यात्रा; AC बस, होटल में ठहरना, खाना और डॉक्टरी मदद का ख़र्च राज्य उठाता है; यात्री ड्रॉ से चुने जाते हैं।",
  },
  level: "state",
  state: "punjab",
  department: { en: "Government of Punjab", hi: "पंजाब सरकार" },
  categories: ["social-welfare"],
  tags: ["pilgrimage", "tirath yatra", "senior citizen", "free travel", "golden temple", "punjab"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 50 },
  kundliHouse: "senior",
  eligibility: all(residentOf("punjab"), minAge(50)),

  details: {
    en: [
      "Under this scheme the Punjab government takes people on free pilgrimages. The first phase began in November 2023. The second phase, started in October 2025 for the 350th martyrdom anniversary of Sri Guru Tegh Bahadur Ji, covers Sri Harmandir Sahib, Sri Durgiana Temple, Bhagwan Valmiki Tirath Sthal, Jallianwala Bagh, the Partition Museum, Sri Anandpur Sahib and other sacred places.",
      "It is open to people of all castes, religions, income groups and regions. Each trip includes a three-day, two-night stay. The 2026-27 budget set aside ₹312 crore to take about 7.15 lakh pilgrims.",
    ],
    hi: [
      "इस योजना में पंजाब सरकार लोगों को मुफ़्त तीर्थ यात्रा पर ले जाती है। पहला चरण नवंबर 2023 में शुरू हुआ। दूसरा चरण अक्टूबर 2025 में श्री गुरु तेग बहादुर जी के 350वें शहीदी दिवस पर शुरू हुआ, जिसमें श्री हरमंदिर साहिब, श्री दुर्गियाणा मंदिर, भगवान वाल्मीकि तीर्थ स्थल, जलियाँवाला बाग़, पार्टीशन म्यूज़ियम, श्री आनंदपुर साहिब और दूसरे पवित्र स्थान शामिल हैं।",
      "यह सभी जातियों, धर्मों, आय वर्गों और इलाक़ों के लोगों के लिए है। हर यात्रा में तीन दिन और दो रात का ठहराव होता है। 2026-27 के बजट में लगभग 7.15 लाख यात्रियों के लिए ₹312 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Free travel in AC buses, picked up from your area.",
      "Free AC hotel stay and meals.",
      "A medical team and a helper travel with each group.",
      "Essential kits are given; the state pays the full cost.",
    ],
    hi: [
      "AC बसों में मुफ़्त सफ़र, आपके इलाक़े से ही।",
      "AC होटल में मुफ़्त ठहरना और खाना।",
      "हर समूह के साथ डॉक्टरी टीम और सहायक रहते हैं।",
      "ज़रूरी सामान की किट मिलती है; पूरा ख़र्च राज्य उठाता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Punjab aged 50 years or above.",
      "Must have a voter card; it is needed to register.",
      "Pilgrims are chosen by a draw from those registered at each polling booth.",
    ],
    hi: [
      "पंजाब का 50 साल या उससे ज़्यादा उम्र का निवासी।",
      "वोटर कार्ड होना चाहिए; पंजीकरण के लिए यह ज़रूरी है।",
      "हर पोलिंग बूथ पर पंजीकरण कराने वालों में से ड्रॉ से यात्री चुने जाते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Watch for the registration drive announced by your district administration for the next round of trips.",
        "Register with your voter card.",
        "If your name comes up in the draw, you will be told the date and pick-up point for your trip.",
      ],
      hi: [
        "अगले दौर की यात्राओं के लिए ज़िला प्रशासन की ओर से होने वाले पंजीकरण की घोषणा पर नज़र रखें।",
        "वोटर कार्ड के साथ पंजीकरण कराएँ।",
        "ड्रॉ में नाम आने पर आपको यात्रा की तारीख़ और बस पकड़ने की जगह बताई जाएगी।",
      ],
    },
  },

  officialUrl:
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/cm-bhagwant-singh-maan-and-arvind-kejriwal-launch-mukh-mantri-teerth-yatra-scheme-dedicated-to-350th-martyrdom-day-of-sri-guru-tegh-bahadur-ji/",
  sources: [
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/cm-bhagwant-singh-maan-and-arvind-kejriwal-launch-mukh-mantri-teerth-yatra-scheme-dedicated-to-350th-martyrdom-day-of-sri-guru-tegh-bahadur-ji/",
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/so-far-over-132-lakh-pilgrims-avail-benefits-of-mukh-mantri-teerth-yatra-yojana-hardeep-singh-mundian/",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
