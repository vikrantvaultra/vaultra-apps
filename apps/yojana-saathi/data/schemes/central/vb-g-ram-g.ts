import { all, when, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vb-g-ram-g",
  name: {
    en: "Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin) (VB-G RAM G)",
    hi: "विकसित भारत – रोज़गार और आजीविका गारंटी मिशन (ग्रामीण) (वीबी-जी राम जी)",
  },
  aka: ["VB-G RAM G", "G RAM G", "MGNREGA", "NREGA", "MNREGA", "Gramin Rozgar Guarantee Card"],
  shortDescription: {
    en: "Every rural household can get up to 125 days of paid work a year near home, with wages paid straight into your bank account. This law replaced MGNREGA from 1 July 2026.",
    hi: "हर ग्रामीण परिवार को साल में 125 दिन तक घर के पास मज़दूरी वाला काम मिल सकता है, और मज़दूरी सीधे बैंक खाते में आती है। 1 जुलाई 2026 से इस क़ानून ने मनरेगा की जगह ली है।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["skills-employment", "social-welfare"],
  tags: ["job card", "rural employment", "nrega", "wage work", "125 days", "village", "labour"],
  benefitType: "cash",
  isDBT: true,
  ageRange: { min: 18 },
  kundliHouse: "career",
  eligibility: all(when("area", "eq", "rural"), minAge(18)),

  details: {
    en: [
      "VB-G RAM G is the new law that gives rural families a legal right to paid work. It came into force in all rural areas on 1 July 2026 and replaced MGNREGA (the old 100-day job scheme), which was repealed the same day. The biggest change for workers: the guarantee went up from 100 to 125 days of work per household every financial year.",
      "The Ministry of Rural Development runs it with state governments. The Centre pays 60% of the cost and the state 40% (90:10 in North Eastern and Himalayan states, and the Centre pays all of it in Union Territories without a legislature). Wage rates are notified separately, so the daily wage depends on your state.",
      "Any adult in a rural household who is willing to do unskilled manual work can ask for work. Works are planned by the Gram Panchayat and Gram Sabha and focus on water conservation, village roads and buildings, livelihood assets and protection against floods and other extreme weather. Old MGNREGA job cards with completed e-KYC stay valid until the new Gramin Rozgar Guarantee Cards are issued.",
    ],
    hi: [
      "वीबी-जी राम जी नया क़ानून है जो ग्रामीण परिवारों को मज़दूरी वाले काम का क़ानूनी हक़ देता है। यह 1 जुलाई 2026 से सभी ग्रामीण इलाक़ों में लागू हुआ और उसी दिन मनरेगा (पुरानी 100 दिन रोज़गार योजना) ख़त्म कर दी गई। मज़दूरों के लिए सबसे बड़ा बदलाव: अब हर परिवार को हर वित्त वर्ष में 100 की जगह 125 दिन काम की गारंटी है।",
      "इसे ग्रामीण विकास मंत्रालय राज्य सरकारों के साथ मिलकर चलाता है। ख़र्च का 60% केंद्र और 40% राज्य देता है (पूर्वोत्तर और हिमालयी राज्यों में 90:10, और बिना विधानसभा वाले केंद्र शासित प्रदेशों में पूरा ख़र्च केंद्र देता है)। मज़दूरी की दर अलग से तय होती है, इसलिए रोज़ की मज़दूरी आपके राज्य पर निर्भर करती है।",
      "ग्रामीण परिवार का कोई भी वयस्क सदस्य जो बिना हुनर वाला शारीरिक काम करना चाहता है, काम माँग सकता है। काम ग्राम पंचायत और ग्राम सभा तय करती हैं, जैसे पानी बचाने के काम, गाँव की सड़कें और भवन, आजीविका से जुड़े ढाँचे और बाढ़ या ख़राब मौसम से बचाव के काम। e-KYC पूरा हो चुके पुराने मनरेगा जॉब कार्ड तब तक मान्य रहेंगे जब तक नए ग्रामीण रोज़गार गारंटी कार्ड नहीं बन जाते।",
    ],
  },
  benefits: {
    en: [
      "Up to 125 days of paid work per household in every financial year, close to your village.",
      "Wages paid by DBT into your bank or post office account, weekly or at most within 15 days of the work being finished.",
      "If wages come late, you get extra compensation of 0.05% of the unpaid wages for each day of delay.",
      "If you ask for work and aren't given it in time, you get an unemployment allowance: at least a quarter of the daily wage for the first 30 days, and at least half after that.",
      "Drinking water, shade and a first-aid kit at every worksite; where five or more children under 5 are present, a woman worker is paid to look after them.",
      "Free treatment if you are hurt at work, with half the daily wage while you are in hospital.",
    ],
    hi: [
      "हर वित्त वर्ष में हर परिवार को गाँव के पास 125 दिन तक मज़दूरी वाला काम।",
      "मज़दूरी DBT से सीधे बैंक या डाकघर खाते में, हर हफ़्ते या काम पूरा होने के ज़्यादा से ज़्यादा 15 दिन के अंदर।",
      "मज़दूरी देर से मिले तो हर दिन की देरी के लिए बकाया मज़दूरी का 0.05% अतिरिक्त मुआवज़ा।",
      "काम माँगने पर समय पर काम न मिले तो बेरोज़गारी भत्ता: पहले 30 दिन कम से कम एक-चौथाई दिहाड़ी, उसके बाद कम से कम आधी दिहाड़ी।",
      "हर कार्यस्थल पर पीने का पानी, छाँव और प्राथमिक उपचार किट; जहाँ 5 साल से छोटे पाँच या ज़्यादा बच्चे हों, वहाँ उनकी देखभाल के लिए एक महिला मज़दूर को मज़दूरी दी जाती है।",
      "काम के दौरान चोट लगने पर मुफ़्त इलाज, और अस्पताल में भर्ती रहने पर आधी दिहाड़ी।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in a rural area (any village covered by a Gram Panchayat).",
      "You are an adult (18 years or older).",
      "You are willing to do unskilled manual work.",
      "Your household is registered with the Gram Panchayat and has a job card or Gramin Rozgar Guarantee Card.",
    ],
    hi: [
      "आप ग्रामीण इलाक़े में रहते हों (किसी ग्राम पंचायत वाले गाँव में)।",
      "आप वयस्क हों (18 साल या उससे ज़्यादा)।",
      "आप बिना हुनर वाला शारीरिक काम करने को तैयार हों।",
      "आपका परिवार ग्राम पंचायत में पंजीकृत हो और उसके पास जॉब कार्ड या ग्रामीण रोज़गार गारंटी कार्ड हो।",
    ],
  },
  exclusions: {
    en: [
      "People living in urban areas are not covered.",
      "States can pause work for up to 60 days a year during peak sowing and harvesting seasons. You still keep your full 125 days, given in the rest of the year.",
    ],
    hi: [
      "शहरी इलाक़ों में रहने वाले लोग इसमें शामिल नहीं हैं।",
      "राज्य बुवाई और कटाई के व्यस्त मौसम में साल में कुल 60 दिन तक काम रोक सकते हैं। फिर भी आपके पूरे 125 दिन बाक़ी साल में मिलते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "If your household has no job card, go to your Gram Panchayat and ask to register for a Gramin Rozgar Guarantee Card. Give the names of all adult members who want work.",
        "If you already have an MGNREGA job card, keep using it. Complete e-KYC with your Aadhaar at the Gram Panchayat or the worksite if it isn't done yet.",
        "Ask for work at the Gram Panchayat: you can say it out loud, give it in writing (Form-6) or use the digital options there. Get a dated receipt.",
        "Turn up at the worksite you are given. Your attendance is marked there and your wages are sent to your bank or post office account.",
      ],
      hi: [
        "अगर आपके परिवार के पास जॉब कार्ड नहीं है, तो ग्राम पंचायत जाकर ग्रामीण रोज़गार गारंटी कार्ड के लिए पंजीकरण कराएँ। काम चाहने वाले सभी वयस्क सदस्यों के नाम दें।",
        "अगर आपके पास पहले से मनरेगा जॉब कार्ड है, तो उसी से काम करते रहें। e-KYC अभी नहीं हुआ है तो आधार के साथ ग्राम पंचायत या कार्यस्थल पर करवा लें।",
        "ग्राम पंचायत में काम माँगें: आप मुँह से कह सकते हैं, लिखकर दे सकते हैं (फ़ॉर्म-6) या वहाँ के डिजिटल तरीक़े अपना सकते हैं। तारीख़ वाली रसीद ज़रूर लें।",
        "जो कार्यस्थल बताया जाए वहाँ काम पर जाएँ। हाज़िरी वहीं लगती है और मज़दूरी आपके बैंक या डाकघर खाते में भेजी जाती है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar (for e-KYC)",
      "Bank or post office account details",
      "Existing MGNREGA job card, if you have one",
    ],
    hi: [
      "आधार (e-KYC के लिए)",
      "बैंक या डाकघर खाते का विवरण",
      "पुराना मनरेगा जॉब कार्ड, अगर हो",
    ],
  },
  faqs: [
    {
      q: { en: "Is MGNREGA closed? What happened to it?", hi: "क्या मनरेगा बंद हो गया? उसका क्या हुआ?" },
      a: {
        en: "Yes. From 1 July 2026, MGNREGA was replaced by VB-G RAM G, a new law that does the same job and more. You now get up to 125 days of work a year instead of 100, works in progress carry on, and your old job card still works (once e-KYC is done) until you get the new Gramin Rozgar Guarantee Card.",
        hi: "हाँ। 1 जुलाई 2026 से मनरेगा की जगह वीबी-जी राम जी नाम का नया क़ानून आ गया है, जो वही काम करता है और उससे ज़्यादा देता है। अब साल में 100 की जगह 125 दिन तक काम मिलता है, चल रहे काम जारी रहते हैं, और नया ग्रामीण रोज़गार गारंटी कार्ड मिलने तक आपका पुराना जॉब कार्ड (e-KYC के बाद) चलता रहेगा।",
      },
    },
    {
      q: { en: "Can I be refused work because my e-KYC isn't done?", hi: "क्या e-KYC न होने पर मुझे काम से मना किया जा सकता है?" },
      a: {
        en: "No. The government has said no worker should be denied work only because e-KYC is pending. Help to finish e-KYC is available, including at the worksite.",
        hi: "नहीं। सरकार ने कहा है कि सिर्फ़ e-KYC बाक़ी होने की वजह से किसी मज़दूर को काम से मना नहीं किया जाएगा। e-KYC पूरा करने में मदद मिलती है, कार्यस्थल पर भी।",
      },
    },
    {
      q: { en: "How much is the daily wage?", hi: "रोज़ की मज़दूरी कितनी है?" },
      a: {
        en: "It depends on your state, because wage rates are notified state by state. Ask at your Gram Panchayat or check the official portal for your state's current rate.",
        hi: "यह आपके राज्य पर निर्भर करती है, क्योंकि मज़दूरी की दर हर राज्य के लिए अलग तय होती है। अपने राज्य की मौजूदा दर ग्राम पंचायत से पूछें या आधिकारिक पोर्टल पर देखें।",
      },
    },
  ],

  officialUrl: "https://vbgramg.dord.gov.in/",
  sources: [
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259691&reg=48&lang=2",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2207187&reg=3&lang=1",
    "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=158510&ModuleId=3&reg=3&lang=1",
    "https://www.dord.gov.in/static/uploads/2025/12/582389210727015422b2f7306618dbd9.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
