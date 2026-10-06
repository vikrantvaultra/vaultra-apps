import { all, female, incomeUpTo, isTrue, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mamata-pmmvy-odisha",
  overlapGroup: "maternity-cash",
  name: { en: "MAMATA-PMMVY Maternity Benefit (Odisha)", hi: "ममता-PMMVY मातृत्व लाभ (ओडिशा)" },
  aka: ["MAMATA", "Mamata scheme", "Mamata yojana", "Odisha maternity benefit", "PMMVY Odisha"],
  shortDescription: {
    en: "Pregnant women in Odisha get ₹10,000 for the first and second pregnancy (₹12,000 if the baby is a girl), paid in instalments into their own bank account.",
    hi: "ओडिशा में गर्भवती महिलाओं को पहली और दूसरी गर्भावस्था पर ₹10,000 (बेटी होने पर ₹12,000), किस्तों में उनके अपने बैंक खाते में।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Women and Child Development and Mission Shakti, Government of Odisha",
    hi: "महिला एवं बाल विकास और मिशन शक्ति विभाग, ओडिशा सरकार",
  },
  categories: ["women-child", "health"],
  tags: ["maternity", "pregnant women", "mamata", "pmmvy", "girl child", "anganwadi", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 10000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("odisha"),
    female(),
    isTrue("pregnantOrLactating"),
    incomeUpTo(800_000),
    labelled(notGovtEmployee(), {
      en: "Neither you nor your husband is a Central or State government or PSU employee",
      hi: "न आप और न आपके पति केंद्र या राज्य सरकार या सरकारी उपक्रम के कर्मचारी हों",
    }),
  ),

  details: {
    en: [
      "MAMATA is Odisha's maternity cash scheme. From 1 April 2025 it has been merged with the central Pradhan Mantri Matru Vandana Yojana (PMMVY) into one integrated MAMATA-PMMVY scheme, with the state adding its own money on top of the central share.",
      "A mother gets ₹10,000 for the birth of a boy and ₹12,000 for the birth of a girl, for her first and second pregnancies. Women from Particularly Vulnerable Tribal Groups (PVTGs) get it for every pregnancy. The money is paid in instalments, linked to pregnancy registration, check-ups, birth registration and the baby's vaccinations, so that mothers can rest and eat well.",
      "The scheme runs through Anganwadi centres. The 2026-27 budget earmarks ₹320 crore for MAMATA and ₹180 crore for PMMVY.",
    ],
    hi: [
      "ममता ओडिशा की मातृत्व नकद सहायता योजना है। 1 अप्रैल 2025 से इसे केंद्र की प्रधानमंत्री मातृ वंदना योजना (PMMVY) के साथ मिलाकर एक संयुक्त ममता-PMMVY योजना बना दिया गया है, जिसमें केंद्र के हिस्से के ऊपर राज्य अपना पैसा जोड़ता है।",
      "माँ को बेटा होने पर ₹10,000 और बेटी होने पर ₹12,000 मिलते हैं, पहली और दूसरी गर्भावस्था के लिए। विशेष रूप से कमज़ोर जनजातीय समूह (PVTG) की महिलाओं को हर गर्भावस्था पर मिलता है। पैसा किस्तों में आता है, जो गर्भ के रजिस्ट्रेशन, जाँच, जन्म के रजिस्ट्रेशन और बच्चे के टीकों से जुड़ी हैं, ताकि माँ आराम कर सके और अच्छा खा सके।",
      "यह योजना आंगनवाड़ी केंद्रों के ज़रिए चलती है। 2026-27 के बजट में ममता के लिए ₹320 करोड़ और PMMVY के लिए ₹180 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "₹10,000 if the baby is a boy.",
      "₹12,000 if the baby is a girl.",
      "Covers the first and second pregnancies; PVTG women are covered for every pregnancy.",
      "Paid by DBT into your own Aadhaar-linked bank or post office account.",
    ],
    hi: [
      "बेटा होने पर ₹10,000।",
      "बेटी होने पर ₹12,000।",
      "पहली और दूसरी गर्भावस्था शामिल; PVTG महिलाओं को हर गर्भावस्था पर।",
      "DBT से आपके अपने आधार से जुड़े बैंक या डाकघर खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a pregnant woman or new mother who normally lives in Odisha (including women who moved here after marriage).",
      "You are between 18 years 7 months and 55 years old.",
      "You meet at least one of these: SC or ST; 40% or more disability; have a ration card, PM-JAY card, e-Shram card, MGNREGA job card or PM-KISAN benefit; family income below ₹8 lakh a year; or you are an Anganwadi worker, helper or ASHA.",
      "You register your pregnancy and have at least one antenatal check-up within four months of your last period.",
    ],
    hi: [
      "आप गर्भवती हैं या हाल में माँ बनी हैं और आम तौर पर ओडिशा में रहती हैं (शादी के बाद यहाँ आई महिलाएँ भी)।",
      "आपकी उम्र 18 साल 7 महीने से 55 साल के बीच है।",
      "आप इनमें से कम से कम एक शर्त पूरी करती हैं: SC या ST; 40% या उससे ज़्यादा दिव्यांगता; राशन कार्ड, PM-JAY कार्ड, ई-श्रम कार्ड, मनरेगा जॉब कार्ड या पीएम-किसान लाभ; परिवार की सालाना आय ₹8 लाख से कम; या आप आंगनवाड़ी कार्यकर्ता, सहायिका या आशा हैं।",
      "आप आखिरी माहवारी के चार महीने के अंदर गर्भ का रजिस्ट्रेशन और कम से कम एक प्रसव-पूर्व जाँच करवाती हैं।",
    ],
  },
  exclusions: {
    en: [
      "Women younger than 18 years 7 months or older than 55.",
      "Women who, or whose husbands, work for the Central or State government or a PSU.",
      "Families with a net income above ₹8 lakh a year.",
      "Third and later pregnancies, except for PVTG women.",
    ],
    hi: [
      "18 साल 7 महीने से कम या 55 साल से ज़्यादा उम्र की महिलाएँ।",
      "जो महिलाएँ, या जिनके पति, केंद्र या राज्य सरकार या सरकारी उपक्रम में नौकरी करते हैं।",
      "जिन परिवारों की सालाना शुद्ध आय ₹8 लाख से ज़्यादा है।",
      "तीसरी और उसके बाद की गर्भावस्था, PVTG महिलाओं को छोड़कर।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Self-register on the MAMATA-PMMVY portal (mamata-pmmvy.odisha.gov.in) or its mobile app.",
        "Enter your Aadhaar, bank and pregnancy details and upload one proof of eligibility.",
        "You get an SMS when the application is received; track the status in the app.",
      ],
      hi: [
        "ममता-PMMVY पोर्टल (mamata-pmmvy.odisha.gov.in) या उसके मोबाइल ऐप पर खुद रजिस्टर करें।",
        "आधार, बैंक और गर्भावस्था की जानकारी भरें और पात्रता का एक सबूत अपलोड करें।",
        "आवेदन मिलने पर SMS आता है; ऐप में स्थिति देखें।",
      ],
    },
    offline: {
      en: [
        "Go to your nearest Anganwadi centre and ask the Anganwadi worker to register you.",
        "Get your Mother and Child Protection (MCP) card from the ANM at pregnancy registration.",
        "Keep the MCP card updated with check-ups and the baby's vaccinations to receive each instalment.",
      ],
      hi: [
        "नज़दीकी आंगनवाड़ी केंद्र जाएँ और आंगनवाड़ी कार्यकर्ता से रजिस्ट्रेशन करवाएँ।",
        "गर्भ के रजिस्ट्रेशन पर ANM से माँ और बच्चा सुरक्षा (MCP) कार्ड लें।",
        "हर किस्त पाने के लिए MCP कार्ड में जाँच और बच्चे के टीके दर्ज करवाते रहें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Aadhaar-linked single-holder bank or post office account",
      "Mobile number",
      "Mother and Child Protection (MCP) card",
      "One proof of eligibility: caste certificate, disability certificate, ration card, PM-JAY card, PM-KISAN, e-Shram card, MGNREGA job card, income certificate, or Anganwadi/ASHA ID",
    ],
    hi: [
      "आधार कार्ड",
      "आधार से जुड़ा, अकेले नाम का बैंक या डाकघर खाता",
      "मोबाइल नंबर",
      "माँ और बच्चा सुरक्षा (MCP) कार्ड",
      "पात्रता का एक सबूत: जाति प्रमाण पत्र, दिव्यांगता प्रमाण पत्र, राशन कार्ड, PM-JAY कार्ड, पीएम-किसान, ई-श्रम कार्ड, मनरेगा जॉब कार्ड, आय प्रमाण पत्र, या आंगनवाड़ी/आशा पहचान पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "Can I get both MAMATA and PMMVY separately?", hi: "क्या मुझे ममता और PMMVY अलग-अलग मिल सकते हैं?" },
      a: {
        en: "No. Since April 2025 they are one integrated scheme in Odisha. The ₹10,000 or ₹12,000 already includes the central PMMVY share.",
        hi: "नहीं। अप्रैल 2025 से ओडिशा में ये एक ही संयुक्त योजना हैं। ₹10,000 या ₹12,000 में केंद्र की PMMVY राशि पहले से शामिल है।",
      },
    },
    {
      q: { en: "What if I have a miscarriage or stillbirth?", hi: "अगर गर्भपात या मृत शिशु का जन्म हो जाए तो?" },
      a: {
        en: "You are treated as a fresh beneficiary in your next pregnancy.",
        hi: "अगली गर्भावस्था में आपको नई लाभार्थी माना जाता है।",
      },
    },
    {
      q: { en: "Whom do I call if the money doesn't come?", hi: "पैसा न आए तो किसे फ़ोन करूँ?" },
      a: {
        en: "Talk to your Anganwadi worker or the CDPO first. You can also call the women's helpline 181 or the PMMVY helpline 14408.",
        hi: "पहले अपनी आंगनवाड़ी कार्यकर्ता या CDPO से बात करें। महिला हेल्पलाइन 181 या PMMVY हेल्पलाइन 14408 पर भी फ़ोन कर सकती हैं।",
      },
    },
  ],

  officialUrl: "https://mamata-pmmvy.odisha.gov.in/",
  sources: [
    "https://wcd.odisha.gov.in/sites/default/files/2025-06/FAQs%20-English.pdf",
    "https://wcd.odisha.gov.in/en/notification/circular-%26-guidelines",
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
