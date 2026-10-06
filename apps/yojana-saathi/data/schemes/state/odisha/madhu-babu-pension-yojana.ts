import { all, any, incomeUpTo, isTrue, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "madhu-babu-pension-yojana",
  overlapGroup: "old-age-pension",
  name: { en: "Madhu Babu Pension Yojana (Old Age)", hi: "मधु बाबू पेंशन योजना (वृद्धावस्था)" },
  aka: ["MBPY", "Madhubabu Pension", "Odisha old age pension", "Madhu Babu old age pension"],
  shortDescription: {
    en: "Elderly people in Odisha aged 60+ from poor families get a monthly pension from the state; those aged 80 and above get ₹3,500 a month.",
    hi: "ओडिशा के गरीब परिवारों के 60 साल या उससे ज़्यादा उम्र के बुज़ुर्गों को राज्य से हर महीने पेंशन; 80 साल या उससे ज़्यादा उम्र वालों को ₹3,500 महीना।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Social Security and Empowerment of Persons with Disabilities (SSEPD), Government of Odisha",
    hi: "सामाजिक सुरक्षा एवं दिव्यांगजन सशक्तिकरण विभाग (SSEPD), ओडिशा सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "pension", "madhu babu", "elderly", "odisha"],
  benefitType: "pension",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("odisha"),
    minAge(60),
    labelled(any(isTrue("bpl"), incomeUpTo(60_000)), {
      en: "Your family is on the BPL list, or its income is up to ₹60,000 a year",
      hi: "आपका परिवार BPL सूची में है, या उसकी सालाना आय ₹60,000 तक है",
    }),
  ),

  details: {
    en: [
      "Madhu Babu Pension Yojana (MBPY) is Odisha's state social security pension, started in 2008. It covers elderly people, widows, persons with disabilities and some other vulnerable groups who are not covered by the central pension schemes. This page is about the old age pension.",
      "From January 2025 the pension for people aged 80 and above was raised to ₹3,500 a month. People aged 60 to 79 get the lower standard rate set by the state.",
      "In the 2026-27 budget the government changed the rule that made new applicants wait for a vacancy: every eligible person is now to be covered straight away, and more than 6 lakh left-out people were to be added. The budget provides ₹5,837 crore for these pensions.",
    ],
    hi: [
      "मधु बाबू पेंशन योजना (MBPY) ओडिशा की राज्य सामाजिक सुरक्षा पेंशन है, जो 2008 में शुरू हुई। इसमें बुज़ुर्ग, विधवाएँ, दिव्यांगजन और कुछ अन्य कमज़ोर वर्ग आते हैं जो केंद्र की पेंशन योजनाओं में नहीं आते। यह पेज वृद्धावस्था पेंशन के बारे में है।",
      "जनवरी 2025 से 80 साल या उससे ज़्यादा उम्र वालों की पेंशन बढ़ाकर ₹3,500 महीना कर दी गई। 60 से 79 साल वालों को राज्य की तय सामान्य दर मिलती है, जो इससे कम है।",
      "2026-27 के बजट में सरकार ने वह नियम बदल दिया जिसमें नए आवेदकों को किसी जगह के खाली होने का इंतज़ार करना पड़ता था: अब हर पात्र व्यक्ति को तुरंत शामिल किया जाना है, और 6 लाख से ज़्यादा छूटे लोगों को जोड़ा जाना था। बजट में इन पेंशनों के लिए ₹5,837 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension for life.",
      "₹3,500 a month if you are 80 or older.",
      "A lower standard monthly rate for ages 60 to 79.",
    ],
    hi: [
      "जीवन भर हर महीने पेंशन।",
      "80 साल या उससे ज़्यादा उम्र होने पर ₹3,500 महीना।",
      "60 से 79 साल की उम्र में इससे कम सामान्य मासिक दर।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Odisha and are 60 years or older.",
      "Your family is on the BPL list, or its income from all sources is ₹60,000 a year or less.",
      "You are not already getting another social security pension.",
    ],
    hi: [
      "आप ओडिशा में रहते हैं और आपकी उम्र 60 साल या उससे ज़्यादा है।",
      "आपका परिवार BPL सूची में है, या सभी स्रोतों से उसकी सालाना आय ₹60,000 या उससे कम है।",
      "आपको पहले से कोई दूसरी सामाजिक सुरक्षा पेंशन नहीं मिल रही।",
    ],
  },
  exclusions: {
    en: [
      "Families above the income limit and not on the BPL list.",
      "People who already get a government pension or another social security pension.",
      "People who no longer meet the conditions at the yearly verification.",
    ],
    hi: [
      "जो परिवार आय सीमा से ऊपर हैं और BPL सूची में नहीं हैं।",
      "जिन्हें पहले से सरकारी पेंशन या कोई दूसरी सामाजिक सुरक्षा पेंशन मिलती है।",
      "जो सालाना जाँच में शर्तें पूरी नहीं करते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the SSEPD portal (ssepd.gov.in) and choose 'Application for Beneficiary'.",
        "Fill in the pension form and upload your documents.",
        "The block or urban body office verifies the application and the pension is sanctioned.",
      ],
      hi: [
        "SSEPD पोर्टल (ssepd.gov.in) पर जाएँ और 'Application for Beneficiary' चुनें।",
        "पेंशन फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "ब्लॉक या नगर निकाय कार्यालय आवेदन की जाँच करता है और पेंशन मंज़ूर होती है।",
      ],
    },
    offline: {
      en: [
        "Get the free MBPY application form from the Block Development Officer (villages) or the municipality / NAC office (towns).",
        "Submit it with your documents and get an acknowledgement on the spot.",
        "An extension officer checks your details at home before the pension is sanctioned.",
      ],
      hi: [
        "MBPY का मुफ़्त आवेदन फ़ॉर्म खंड विकास अधिकारी (गाँव) या नगरपालिका / NAC कार्यालय (शहर) से लें।",
        "दस्तावेज़ों के साथ जमा करें और वहीं पावती लें।",
        "पेंशन मंज़ूर होने से पहले एक्सटेंशन अधिकारी घर आकर जानकारी जाँचते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Proof of age (voter list entry, school leaving certificate or birth certificate)",
      "Family income certificate from the Tahasildar, or proof of BPL status",
      "Bank account details",
      "Passport-size photos",
    ],
    hi: [
      "आधार कार्ड",
      "उम्र का सबूत (वोटर सूची में नाम, स्कूल छोड़ने का प्रमाण पत्र या जन्म प्रमाण पत्र)",
      "तहसीलदार का पारिवारिक आय प्रमाण पत्र, या BPL होने का सबूत",
      "बैंक खाते की जानकारी",
      "पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "Do I still have to wait for a vacancy?", hi: "क्या अब भी किसी जगह के खाली होने का इंतज़ार करना होगा?" },
      a: {
        en: "No. The 2026-27 budget moved the scheme to 'saturation mode', so every eligible person is to be covered without waiting for an existing pensioner's place to fall vacant.",
        hi: "नहीं। 2026-27 के बजट में योजना को 'सैचुरेशन मोड' में कर दिया गया, यानी हर पात्र व्यक्ति को किसी मौजूदा पेंशनभोगी की जगह खाली होने का इंतज़ार किए बिना शामिल किया जाना है।",
      },
    },
    {
      q: { en: "When does the ₹3,500 rate start?", hi: "₹3,500 की दर कब से मिलती है?" },
      a: {
        en: "From the month you turn 80. It has applied since January 2025.",
        hi: "जिस महीने आप 80 साल के होते हैं, उससे। यह दर जनवरी 2025 से लागू है।",
      },
    },
  ],

  officialUrl: "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/madhu-babu-pension-yojna-mbpy",
  sources: [
    "https://ssepd.odisha.gov.in/sites/default/files/2026-08/GUIDELINES%20ON%20MADHU%20BABU%20PENSION%20YOJANA%20%28MBPY%29_1.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2024-07/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
