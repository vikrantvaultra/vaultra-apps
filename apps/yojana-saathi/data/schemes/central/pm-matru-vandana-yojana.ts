import { all, female, isTrue } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-matru-vandana-yojana",
  name: { en: "Pradhan Mantri Matru Vandana Yojana", hi: "प्रधानमंत्री मातृ वंदना योजना" },
  aka: ["PMMVY", "Matru Vandana", "PMMVY 2.0"],
  shortDescription: {
    en: "₹5,000 in your bank account for your first child, and ₹6,000 more if your second child is a girl, to support you during pregnancy and after delivery.",
    hi: "पहले बच्चे के लिए आपके बैंक खाते में ₹5,000, और दूसरी संतान बेटी होने पर ₹6,000, ताकि गर्भावस्था और प्रसव के बाद आपको सहारा मिले।",
  },
  level: "central",
  ministry: "women-child-development",
  categories: ["women-child", "health"],
  tags: ["pregnant women", "maternity benefit", "mother", "girl child", "anganwadi", "dbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(female(), isTrue("pregnantOrLactating")),

  details: {
    en: [
      "PMMVY gives cash to pregnant women and new mothers so they can rest, eat well and get check-ups instead of losing wages. It is part of the Ministry of Women and Child Development's Mission Shakti.",
      "For the first child you get ₹5,000 in two instalments. If your second child is a girl, you get another ₹6,000 in one instalment after her birth. The money goes straight to your Aadhaar-linked bank or post office account.",
      "You register through your Anganwadi worker or ASHA, or yourself on the PMMVY portal. The scheme is meant for women from poorer and disadvantaged families; there are several ways to qualify (see eligibility).",
    ],
    hi: [
      "PMMVY गर्भवती महिलाओं और नई माताओं को नकद मदद देती है, ताकि वे मज़दूरी छूटने की चिंता किए बिना आराम करें, अच्छा खाएँ और जाँच कराएँ। यह महिला एवं बाल विकास मंत्रालय के मिशन शक्ति का हिस्सा है।",
      "पहले बच्चे के लिए ₹5,000 दो किस्तों में मिलते हैं। अगर दूसरी संतान बेटी है, तो उसके जन्म के बाद एक किस्त में ₹6,000 और मिलते हैं। पैसा सीधे आपके आधार से जुड़े बैंक या डाकघर खाते में आता है।",
      "पंजीकरण आंगनवाड़ी कार्यकर्ता या आशा के ज़रिए, या ख़ुद PMMVY पोर्टल पर होता है। यह योजना गरीब और वंचित परिवारों की महिलाओं के लिए है; पात्र होने के कई रास्ते हैं (पात्रता देखें)।",
    ],
  },
  benefits: {
    en: [
      "First child: ₹5,000 in two instalments (₹3,000 after pregnancy registration and at least one check-up within six months, ₹2,000 after the birth is registered and the baby's first round of vaccines).",
      "Second child, if a girl: ₹6,000 in one instalment after birth.",
      "Paid by Direct Benefit Transfer into your own bank or post office account.",
    ],
    hi: [
      "पहला बच्चा: ₹5,000 दो किस्तों में (गर्भावस्था के पंजीकरण और छह महीने के भीतर कम से कम एक जाँच के बाद ₹3,000, जन्म पंजीकरण और बच्चे के पहले दौर के टीकों के बाद ₹2,000)।",
      "दूसरी संतान बेटी हो तो: जन्म के बाद एक किस्त में ₹6,000।",
      "पैसा DBT से सीधे आपके बैंक या डाकघर खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Pregnant women and breastfeeding mothers, for the first child and for a second child who is a girl.",
      "You must meet at least one of these: SC/ST, 40% or more disability, BPL ration card, PM-JAY beneficiary, e-Shram card, PM-KISAN farmer family, MGNREGA job card, family income below ₹8 lakh a year, or you are an Anganwadi worker, helper or ASHA.",
      "Pregnancy must be registered with the Anganwadi or health centre, with an Aadhaar-linked bank or post office account.",
    ],
    hi: [
      "गर्भवती महिलाएँ और स्तनपान कराने वाली माताएँ, पहले बच्चे के लिए और दूसरी संतान बेटी होने पर।",
      "इनमें से कम से कम एक शर्त पूरी हो: SC/ST, 40% या अधिक दिव्यांगता, BPL राशन कार्ड, PM-JAY लाभार्थी, ई-श्रम कार्ड, PM-KISAN किसान परिवार, मनरेगा जॉब कार्ड, परिवार की सालाना आय ₹8 लाख से कम, या आप आंगनवाड़ी कार्यकर्ता, सहायिका या आशा हों।",
      "गर्भावस्था आंगनवाड़ी या स्वास्थ्य केंद्र में दर्ज हो और आधार से जुड़ा बैंक या डाकघर खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Women in regular jobs with the central or state government or a public sector unit.",
      "Women who already get similar paid maternity benefits under another law.",
      "A second child who is a boy is not covered.",
    ],
    hi: [
      "केंद्र या राज्य सरकार या सरकारी उपक्रम में नियमित नौकरी करने वाली महिलाएँ।",
      "जिन महिलाओं को किसी और क़ानून के तहत ऐसा ही सवेतन मातृत्व लाभ मिलता है।",
      "दूसरी संतान बेटा होने पर लाभ नहीं मिलता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to pmmvy.wcd.gov.in and register as a citizen with your mobile number.",
        "Fill in your details, pregnancy registration (MCP card) information and bank account.",
        "Upload the required documents and submit. Track the payment status on the same portal.",
      ],
      hi: [
        "pmmvy.wcd.gov.in पर जाएँ और मोबाइल नंबर से नागरिक के रूप में पंजीकरण करें।",
        "अपनी जानकारी, गर्भावस्था पंजीकरण (MCP कार्ड) का विवरण और बैंक खाता भरें।",
        "ज़रूरी दस्तावेज़ अपलोड करके जमा करें। भुगतान की स्थिति इसी पोर्टल पर देखें।",
      ],
    },
    offline: {
      en: [
        "Meet your Anganwadi worker or ASHA and register your pregnancy.",
        "Give her your Aadhaar, MCP card and bank details; she will register you on the PMMVY system.",
        "After the birth, tell her about the birth registration and vaccination so the next instalment is released.",
      ],
      hi: [
        "अपनी आंगनवाड़ी कार्यकर्ता या आशा से मिलें और गर्भावस्था दर्ज कराएँ।",
        "उन्हें अपना आधार, MCP कार्ड और बैंक विवरण दें; वे PMMVY में आपका पंजीकरण कर देंगी।",
        "जन्म के बाद जन्म पंजीकरण और टीकाकरण की जानकारी दें ताकि अगली किस्त जारी हो।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "MCP (Mother and Child Protection) card", "Aadhaar-linked bank or post office account", "Proof of one eligibility category (e.g. caste certificate, BPL/e-Shram/MGNREGA card)", "Child's birth certificate (for the later instalment)"],
    hi: ["आधार कार्ड", "MCP (जच्चा-बच्चा सुरक्षा) कार्ड", "आधार से जुड़ा बैंक या डाकघर खाता", "किसी एक पात्रता श्रेणी का प्रमाण (जैसे जाति प्रमाण पत्र, BPL/ई-श्रम/मनरेगा कार्ड)", "बच्चे का जन्म प्रमाण पत्र (बाद की किस्त के लिए)"],
  },
  faqs: [
    {
      q: { en: "Can I get both PMMVY and Janani Suraksha Yojana?", hi: "क्या मुझे PMMVY और जननी सुरक्षा योजना दोनों मिल सकती हैं?" },
      a: {
        en: "Yes. JSY pays for delivering in a hospital, while PMMVY supports you during pregnancy and after birth. Eligible women can get both.",
        hi: "हाँ। JSY अस्पताल में प्रसव के लिए पैसा देती है, जबकि PMMVY गर्भावस्था और जन्म के बाद मदद करती है। पात्र महिलाएँ दोनों ले सकती हैं।",
      },
    },
    {
      q: { en: "Is there a time limit to register?", hi: "क्या पंजीकरण की कोई समय सीमा है?" },
      a: {
        en: "Register as early as possible in the pregnancy. Ask your Anganwadi worker about the deadlines for each instalment, as late claims can be rejected.",
        hi: "गर्भावस्था में जितनी जल्दी हो सके पंजीकरण कराएँ। हर किस्त की समय सीमा अपनी आंगनवाड़ी कार्यकर्ता से पूछें, क्योंकि देर से किए गए दावे रद्द हो सकते हैं।",
      },
    },
  ],

  officialUrl: "https://pmmvy.wcd.gov.in/",
  sources: [
    "https://pmmvy.wcd.gov.in/",
    "https://wcd.gov.in/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/aug/doc2025825619601.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
