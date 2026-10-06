import { all, any, incomeUpTo, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gujarat-niradhar-vruddh-pension-yojana",
  overlapGroup: "old-age-pension",
  name: { en: "Niradhar Vruddh Pension Yojana (Gujarat old age pension)", hi: "निराधार वृद्ध पेंशन योजना (गुजरात वृद्धावस्था पेंशन)" },
  aka: ["Gujarat old age pension", "Vruddh Sahay", "Niradhar Vruddh Sahay", "Indira Gandhi Vruddh Pension Gujarat"],
  shortDescription: {
    en: "People aged 60+ in Gujarat who are BPL, or have low income and no adult son, get ₹1,000 a month (₹1,250 from age 80) by DBT.",
    hi: "गुजरात में 60+ साल के वे लोग जो BPL हैं, या जिनकी आय कम है और कोई बालिग बेटा नहीं है, उन्हें हर महीने ₹1,000 (80 साल से ₹1,250) DBT से मिलते हैं।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Social Justice and Empowerment Department (Director of Social Defence), Government of Gujarat", hi: "सामाजिक न्याय एवं अधिकारिता विभाग (समाज सुरक्षा निदेशालय), गुजरात सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "vruddh pension", "pension", "bpl", "gujarat"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("gujarat"),
    minAge(60),
    labelled(
      any(
        isTrue("bpl"),
        all(when("area", "eq", "rural"), incomeUpTo(120_000)),
        all(when("area", "eq", "urban"), incomeUpTo(150_000)),
      ),
      {
        en: "BPL family, or income up to ₹1.2 lakh a year (village) / ₹1.5 lakh (city)",
        hi: "BPL परिवार हो, या सालाना आय गाँव में ₹1.2 लाख और शहर में ₹1.5 लाख तक हो",
      },
    ),
  ),

  details: {
    en: [
      "Gujarat pays one old age pension through two routes. Elderly people from BPL families (score 0 to 20 on the BPL list) get it under the central Indira Gandhi National Old Age Pension with the state adding its share. Others with low income and no one to support them get it under the state's own Niradhar Vruddh Pension Yojana.",
      "Both routes pay the same amount: ₹1,000 a month from age 60 to 79, and ₹1,250 a month from age 80. The money is paid by DBT into a post office or bank account.",
      "The Social Justice and Empowerment Department runs the scheme, and the Taluka Mamlatdar approves applications. A rejected applicant can appeal to the Prant officer within 60 days.",
    ],
    hi: [
      "गुजरात एक ही वृद्धावस्था पेंशन दो रास्तों से देता है। BPL परिवारों (BPL सूची में 0 से 20 स्कोर) के बुज़ुर्गों को यह केंद्र की इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन के तहत मिलती है, जिसमें राज्य अपना हिस्सा जोड़ता है। बाकी कम आय वाले और बेसहारा बुज़ुर्गों को यह राज्य की अपनी निराधार वृद्ध पेंशन योजना से मिलती है।",
      "दोनों रास्तों से एक जैसी राशि मिलती है: 60 से 79 साल तक हर महीने ₹1,000, और 80 साल से हर महीने ₹1,250। पैसा DBT से डाकघर या बैंक खाते में आता है।",
      "यह योजना सामाजिक न्याय एवं अधिकारिता विभाग चलाता है और तालुका मामलतदार आवेदन मंज़ूर करते हैं। आवेदन नामंज़ूर होने पर 60 दिन के अंदर प्रांत अधिकारी के पास अपील की जा सकती है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month for ages 60 to 79.",
      "₹1,250 a month from age 80.",
      "Paid by DBT into your post office or bank account.",
      "A separate ₹5,000 funeral assistance is available to families of pensioners.",
    ],
    hi: [
      "60 से 79 साल तक हर महीने ₹1,000।",
      "80 साल से हर महीने ₹1,250।",
      "पैसा DBT से डाकघर या बैंक खाते में आता है।",
      "पेंशन पाने वालों के परिवार को अलग से ₹5,000 की अंत्येष्टि सहायता मिल सकती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 60 or more (or aged 45 or more with a disability of over 75%, under the state route).",
      "BPL route: your family is on the BPL list with a score of 0 to 20 (rural) or on the urban BPL list.",
      "State route: yearly income up to ₹1,20,000 in rural areas or ₹1,50,000 in urban areas.",
      "State route: you have no son or grandson aged 21 or more, unless he is unable to earn because of mental illness, disability or a serious disease like cancer or TB.",
      "State route: you have lived in Gujarat for at least 10 years.",
    ],
    hi: [
      "उम्र 60 साल या ज़्यादा (राज्य वाले रास्ते में 75% से ज़्यादा दिव्यांगता हो तो 45 साल या ज़्यादा)।",
      "BPL रास्ता: आपका परिवार गाँव की BPL सूची में 0 से 20 स्कोर के साथ, या शहर की BPL सूची में हो।",
      "राज्य वाला रास्ता: सालाना आय गाँव में ₹1,20,000 और शहर में ₹1,50,000 तक हो।",
      "राज्य वाला रास्ता: आपका 21 साल या उससे बड़ा बेटा या पोता न हो, जब तक वह मानसिक बीमारी, दिव्यांगता या कैंसर-टीबी जैसी गंभीर बीमारी के कारण कमाने लायक न हो।",
      "राज्य वाला रास्ता: आप कम से कम 10 साल से गुजरात में रह रहे हों।",
    ],
  },
  exclusions: {
    en: [
      "Income above the limit and not on the BPL list.",
      "Under the state route: having an earning son or grandson aged 21 or more.",
      "The pension stops if your income rises above the limit or your BPL score is updated above 20.",
    ],
    hi: [
      "आय सीमा से ज़्यादा हो और BPL सूची में नाम न हो।",
      "राज्य वाले रास्ते में: 21 साल या बड़ा कमाने वाला बेटा या पोता हो।",
      "आय सीमा से ऊपर जाने या BPL स्कोर 20 से ऊपर होने पर पेंशन बंद हो जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the Digital Gujarat portal (digitalgujarat.gov.in), or ask the VCE at your gram panchayat or a Jan Seva Kendra to apply for you.",
        "Upload the documents for your route (income limit or BPL).",
        "The Taluka Mamlatdar decides on the application.",
      ],
      hi: [
        "डिजिटल गुजरात पोर्टल (digitalgujarat.gov.in) पर आवेदन करें, या ग्राम पंचायत के VCE या जन सेवा केंद्र से आवेदन करवाएँ।",
        "अपने रास्ते (आय सीमा या BPL) के हिसाब से दस्तावेज़ अपलोड करें।",
        "तालुका मामलतदार आवेदन पर फ़ैसला करते हैं।",
      ],
    },
    offline: {
      en: [
        "Get the form free of cost from the Collector office or the Mamlatdar office.",
        "Fill it in, attach the documents and submit it at the Mamlatdar office.",
      ],
      hi: [
        "कलेक्टर कार्यालय या मामलतदार कार्यालय से फ़ॉर्म मुफ़्त में लें।",
        "फ़ॉर्म भरें, दस्तावेज़ लगाएँ और मामलतदार कार्यालय में जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Age proof (school leaving certificate, birth certificate or doctor's age certificate)", "Income certificate (state route) or BPL certificate (BPL route)", "Certificate of having no son aged 21 or more (state route)", "Disability certificate, if applying on disability grounds", "Aadhaar card", "Ration card", "Post office or bank passbook"],
    hi: ["उम्र का प्रमाण (स्कूल छोड़ने का प्रमाण पत्र, जन्म प्रमाण पत्र या डॉक्टर का उम्र प्रमाण पत्र)", "आय प्रमाण पत्र (राज्य वाला रास्ता) या BPL प्रमाण पत्र (BPL रास्ता)", "21 साल या बड़ा बेटा न होने का प्रमाण पत्र (राज्य वाला रास्ता)", "दिव्यांगता का प्रमाण पत्र, अगर दिव्यांगता के आधार पर आवेदन कर रहे हों", "आधार कार्ड", "राशन कार्ड", "डाकघर या बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "Do I get both the central and the state pension?", hi: "क्या मुझे केंद्र और राज्य दोनों की पेंशन मिलेगी?" },
      a: {
        en: "No. You get one pension of ₹1,000 (or ₹1,250 from 80). BPL pensioners get it under the central scheme with the state's share added; others get it under the state scheme.",
        hi: "नहीं। आपको एक ही पेंशन ₹1,000 (80 साल से ₹1,250) मिलती है। BPL पेंशनभोगियों को यह केंद्र की योजना में राज्य का हिस्सा जोड़कर मिलती है; बाकी को राज्य की योजना से।",
      },
    },
    {
      q: { en: "My application was rejected. What can I do?", hi: "मेरा आवेदन नामंज़ूर हो गया। अब क्या करूँ?" },
      a: {
        en: "You can file an appeal with the Prant officer (sub-divisional officer) within 60 days of the rejection.",
        hi: "नामंज़ूरी के 60 दिन के अंदर प्रांत अधिकारी के पास अपील कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://sje.gujarat.gov.in/dsd/showpage.aspx?contentid=2212",
  sources: [
    "https://sje.gujarat.gov.in/dsd/showpage.aspx?contentid=2212",
    "https://sje.gujarat.gov.in/dsd/showpage.aspx?contentid=2208",
    "https://ianslive.in/in-gujarat-niradhar-vridhha-pension-yojana-addresses-needs-of-elderly-residents--20260525150903",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1978,
  status: "active",
};

export default scheme;
