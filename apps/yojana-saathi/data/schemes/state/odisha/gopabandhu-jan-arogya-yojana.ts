import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gopabandhu-jan-arogya-yojana",
  overlapGroup: "health-cover",
  name: { en: "Gopabandhu Jan Arogya Yojana (GJAY)", hi: "गोपबंधु जन आरोग्य योजना (GJAY)" },
  aka: ["GJAY", "Gopabandhu Jana Arogya Yojana", "Ayushman Bharat Odisha", "AB PM-JAY Odisha", "BSKY replacement"],
  shortDescription: {
    en: "Odisha's cashless hospital cover, run together with Ayushman Bharat PM-JAY: eligible families get free treatment worth at least ₹5 lakh a year at 29,000+ hospitals across India.",
    hi: "ओडिशा का कैशलेस अस्पताल बीमा, जो आयुष्मान भारत PM-JAY के साथ चलता है: पात्र परिवारों को देश भर के 29,000 से ज़्यादा अस्पतालों में हर साल कम से कम ₹5 लाख तक का मुफ़्त इलाज।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Health and Family Welfare Department, Government of Odisha",
    hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, ओडिशा सरकार",
  },
  categories: ["health"],
  tags: ["health insurance", "ayushman", "gjay", "free treatment", "hospital", "cashless", "odisha"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("odisha"),
    labelled(isTrue("bpl"), {
      en: "Your family is on the scheme's eligible list (mainly families with an NFSA or State Food Security ration card)",
      hi: "आपका परिवार योजना की पात्र सूची में है (मुख्य रूप से NFSA या राज्य खाद्य सुरक्षा राशन कार्ड वाले परिवार)",
    }),
  ),

  details: {
    en: [
      "Gopabandhu Jan Arogya Yojana (GJAY) is Odisha's health assurance scheme. After the 2024 change of government, the state joined Ayushman Bharat PM-JAY and now runs it together with its own scheme, replacing the earlier Biju Swasthya Kalyan Yojana card.",
      "Eligible families get cashless treatment for hospital admissions and listed procedures at empanelled government and private hospitals. Because it is linked to PM-JAY, the card works in more than 29,000 empanelled hospitals across India, which helps Odia migrant workers living in other states.",
      "The state says the combined scheme covers about 1.03 crore families (around 3.46 crore people). The 2026-27 budget provides ₹4,279 crore for GJAY and AB PM-JAY together.",
    ],
    hi: [
      "गोपबंधु जन आरोग्य योजना (GJAY) ओडिशा की स्वास्थ्य सुरक्षा योजना है। 2024 में सरकार बदलने के बाद राज्य आयुष्मान भारत PM-JAY से जुड़ गया और अब इसे अपनी योजना के साथ मिलाकर चलाता है। इसने पुराने बीजू स्वास्थ्य कल्याण योजना कार्ड की जगह ली है।",
      "पात्र परिवारों को सूचीबद्ध सरकारी और निजी अस्पतालों में भर्ती और तय इलाज कैशलेस मिलता है। PM-JAY से जुड़े होने के कारण कार्ड देश भर के 29,000 से ज़्यादा अस्पतालों में चलता है, जिससे दूसरे राज्यों में काम करने वाले ओडिया मज़दूरों को भी मदद मिलती है।",
      "राज्य के अनुसार इस संयुक्त योजना में लगभग 1.03 करोड़ परिवार (करीब 3.46 करोड़ लोग) शामिल हैं। 2026-27 के बजट में GJAY और AB PM-JAY के लिए मिलाकर ₹4,279 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment of at least ₹5 lakh per family per year for hospital admissions and listed procedures.",
      "No payment at the hospital for covered treatment, medicines and tests during admission.",
      "Valid at empanelled government and private hospitals in Odisha and in other states.",
    ],
    hi: [
      "अस्पताल में भर्ती और तय इलाज के लिए हर परिवार को साल में कम से कम ₹5 लाख तक का कैशलेस इलाज।",
      "भर्ती के दौरान शामिल इलाज, दवाइयों और जाँच के लिए अस्पताल में कोई पैसा नहीं देना पड़ता।",
      "ओडिशा और दूसरे राज्यों के सूचीबद्ध सरकारी और निजी अस्पतालों में मान्य।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Odisha and your family is on the GJAY / PM-JAY beneficiary list.",
      "Most poor and lower-income families holding an NFSA or State Food Security ration card are covered; check your name using your ration card or Aadhaar.",
      "Each covered member needs a GJAY / Ayushman card, made with Aadhaar e-KYC.",
    ],
    hi: [
      "आप ओडिशा में रहते हैं और आपका परिवार GJAY / PM-JAY लाभार्थी सूची में है।",
      "NFSA या राज्य खाद्य सुरक्षा राशन कार्ड वाले ज़्यादातर गरीब और कम आय वाले परिवार शामिल हैं; राशन कार्ड या आधार से अपना नाम जाँचें।",
      "हर शामिल सदस्य के लिए GJAY / आयुष्मान कार्ड चाहिए, जो आधार e-KYC से बनता है।",
    ],
  },
  exclusions: {
    en: [
      "Families not on the eligible list.",
      "Outpatient (OPD) visits and treatment not on the scheme's package list are generally not covered.",
      "Treatment at hospitals that are not empanelled under the scheme.",
    ],
    hi: [
      "जो परिवार पात्र सूची में नहीं हैं।",
      "OPD में दिखाना और योजना की पैकेज सूची से बाहर का इलाज आम तौर पर शामिल नहीं है।",
      "जो अस्पताल योजना में सूचीबद्ध नहीं हैं, वहाँ का इलाज।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to gjay.odisha.gov.in and use 'Check your PM-JAY / GJAY health card number' to see if your family is listed.",
        "If you are listed, complete Aadhaar e-KYC and download your card, or get it made at a health facility.",
      ],
      hi: [
        "gjay.odisha.gov.in पर जाएँ और 'Check your PM-JAY / GJAY health card number' से देखें कि आपका परिवार सूची में है या नहीं।",
        "सूची में नाम हो तो आधार e-KYC पूरी करके कार्ड डाउनलोड करें, या किसी स्वास्थ्य केंद्र पर बनवाएँ।",
      ],
    },
    offline: {
      en: [
        "Visit the scheme help desk at any empanelled hospital, or your nearest government health facility.",
        "Show your ration card and Aadhaar; they will check your name and help make the card.",
        "At admission, show the card at the help desk to get cashless treatment.",
      ],
      hi: [
        "किसी भी सूचीबद्ध अस्पताल के योजना हेल्प डेस्क या नज़दीकी सरकारी स्वास्थ्य केंद्र पर जाएँ।",
        "राशन कार्ड और आधार दिखाएँ; वे आपका नाम जाँचकर कार्ड बनाने में मदद करेंगे।",
        "भर्ती के समय हेल्प डेस्क पर कार्ड दिखाएँ और कैशलेस इलाज पाएँ।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of each family member", "Ration card (NFSA or State Food Security)", "Mobile number for OTP"],
    hi: ["परिवार के हर सदस्य का आधार कार्ड", "राशन कार्ड (NFSA या राज्य खाद्य सुरक्षा)", "OTP के लिए मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Does my old BSKY card still work?", hi: "क्या मेरा पुराना BSKY कार्ड अब भी चलेगा?" },
      a: {
        en: "The state has moved to the combined GJAY and PM-JAY card. Check your card number on gjay.odisha.gov.in or ask the hospital help desk, and get the new card if you don't have one.",
        hi: "राज्य अब GJAY और PM-JAY के संयुक्त कार्ड पर आ गया है। gjay.odisha.gov.in पर अपना कार्ड नंबर जाँचें या अस्पताल के हेल्प डेस्क से पूछें, और नया कार्ड न हो तो बनवा लें।",
      },
    },
    {
      q: { en: "Can I use it outside Odisha?", hi: "क्या इसे ओडिशा के बाहर इस्तेमाल कर सकता हूँ?" },
      a: {
        en: "Yes. Because it runs with PM-JAY, the card works at empanelled hospitals in other states too.",
        hi: "हाँ। PM-JAY के साथ चलने के कारण कार्ड दूसरे राज्यों के सूचीबद्ध अस्पतालों में भी चलता है।",
      },
    },
  ],

  officialUrl: "https://gjay.odisha.gov.in/",
  sources: [
    "https://finance.odisha.gov.in/sites/default/files/2025-08/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://finance.odisha.gov.in/sites/default/files/2024-07/04-BUDGET_SPEECH_ENGLISH-PART-2.pdf",
    "https://gjay.odisha.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
