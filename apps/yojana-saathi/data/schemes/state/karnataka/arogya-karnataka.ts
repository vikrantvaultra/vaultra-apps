import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "arogya-karnataka",
  name: { en: "Ayushman Bharat – Arogya Karnataka", hi: "आयुष्मान भारत – आरोग्य कर्नाटक" },
  aka: ["AB-ArK", "Arogya Karnataka", "ABArK"],
  shortDescription: {
    en: "Cashless hospital treatment for Karnataka residents: up to ₹5 lakh a year per BPL family, and 30% of the treatment cost (up to ₹1.5 lakh) for other families.",
    hi: "कर्नाटक के निवासियों के लिए अस्पताल में कैशलेस इलाज: BPL परिवार को साल में ₹5 लाख तक, और दूसरे परिवारों को इलाज के ख़र्च का 30% (₹1.5 लाख तक)।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Health and Family Welfare Department (Suvarna Arogya Suraksha Trust), Government of Karnataka",
    hi: "स्वास्थ्य एवं परिवार कल्याण विभाग (सुवर्ण आरोग्य सुरक्षा ट्रस्ट), कर्नाटक सरकार",
  },
  categories: ["health"],
  tags: ["health insurance", "hospital", "ayushman bharat", "pmjay", "treatment", "bpl"],
  benefitType: "insurance",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("karnataka")),

  details: {
    en: [
      "Ayushman Bharat – Arogya Karnataka (AB-ArK) joins the central PM-JAY health scheme with Karnataka's own health cover. Every resident of the state is covered, but the level of cover depends on your ration card.",
      "'Eligible households' (BPL / priority household card holders) get free cashless treatment up to ₹5 lakh per family per year. 'General' families (APL or no BPL card) get 30% of the government package rate paid, up to ₹1.5 lakh per family per year, and pay the rest themselves.",
      "Simpler treatments are given in government hospitals. For complex treatments you usually need a referral from a government hospital first; emergencies can go straight to any empanelled hospital. The scheme is run by the Suvarna Arogya Suraksha Trust.",
    ],
    hi: [
      "आयुष्मान भारत – आरोग्य कर्नाटक (AB-ArK) केंद्र की PM-JAY योजना और कर्नाटक की अपनी स्वास्थ्य योजना को एक साथ जोड़ता है। राज्य के हर निवासी को कवर मिलता है, लेकिन कितना मिलेगा यह आपके राशन कार्ड पर निर्भर है।",
      "'पात्र परिवारों' (BPL / प्राथमिक परिवार कार्ड वाले) को हर साल प्रति परिवार ₹5 लाख तक मुफ़्त कैशलेस इलाज मिलता है। 'सामान्य' परिवारों (APL या बिना BPL कार्ड) के लिए सरकारी पैकेज दर का 30%, प्रति परिवार साल में ₹1.5 लाख तक, सरकार देती है और बाकी ख़ुद भरना होता है।",
      "सामान्य इलाज सरकारी अस्पतालों में होता है। जटिल इलाज के लिए आमतौर पर पहले सरकारी अस्पताल से रेफ़रल चाहिए; आपात स्थिति में सीधे किसी भी सूचीबद्ध अस्पताल जा सकते हैं। योजना सुवर्ण आरोग्य सुरक्षा ट्रस्ट चलाता है।",
    ],
  },
  benefits: {
    en: [
      "BPL / eligible families: cashless treatment up to ₹5 lakh per family per year.",
      "General (APL) families: 30% of the package rate paid by the government, up to ₹1.5 lakh per family per year.",
      "Covers secondary, tertiary and emergency treatment across more than a thousand treatment packages.",
      "Emergency cases can go directly to any empanelled hospital without a referral.",
    ],
    hi: [
      "BPL / पात्र परिवार: प्रति परिवार हर साल ₹5 लाख तक कैशलेस इलाज।",
      "सामान्य (APL) परिवार: पैकेज दर का 30% सरकार देती है, प्रति परिवार साल में ₹1.5 लाख तक।",
      "हज़ार से ज़्यादा इलाज पैकेज में माध्यमिक, उच्च स्तर और आपातकालीन इलाज शामिल।",
      "आपात स्थिति में बिना रेफ़रल सीधे किसी भी सूचीबद्ध अस्पताल जा सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a resident of Karnataka.",
      "For the full ₹5 lakh cover, your family must be an 'eligible household' (BPL / priority household ration card, or listed under PM-JAY).",
      "Other resident families are covered as 'general' patients with co-payment.",
    ],
    hi: [
      "आप कर्नाटक के निवासी हैं।",
      "पूरे ₹5 लाख कवर के लिए आपका परिवार 'पात्र परिवार' होना चाहिए (BPL / प्राथमिक परिवार राशन कार्ड, या PM-JAY सूची में नाम)।",
      "बाकी निवासी परिवार सह-भुगतान के साथ 'सामान्य' मरीज़ के रूप में कवर होते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Complex treatments without a referral from a government hospital are not covered, except in emergencies.",
      "Outpatient (OPD) visits and treatments outside the approved package list are not covered.",
    ],
    hi: [
      "आपात स्थिति को छोड़कर, सरकारी अस्पताल के रेफ़रल के बिना जटिल इलाज कवर नहीं होता।",
      "OPD (बाह्य रोगी) इलाज और स्वीकृत पैकेज सूची से बाहर के इलाज कवर नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to your nearest government hospital or health centre with your Aadhaar and ration card.",
        "Get your AB-ArK card made there or at a citizen service centre (a small fee applies for printing).",
        "Get diagnosed at the government hospital. If it cannot treat you, it will refer you to an empanelled hospital where treatment is cashless.",
      ],
      hi: [
        "आधार और राशन कार्ड लेकर अपने नज़दीकी सरकारी अस्पताल या स्वास्थ्य केंद्र जाएँ।",
        "वहाँ या नागरिक सेवा केंद्र पर अपना AB-ArK कार्ड बनवाएँ (छपाई का थोड़ा शुल्क लगता है)।",
        "सरकारी अस्पताल में जाँच कराएँ। वहाँ इलाज न हो सके तो वे आपको सूचीबद्ध अस्पताल में रेफ़र करेंगे, जहाँ इलाज कैशलेस होगा।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Ration card (BPL / priority household card for the ₹5 lakh cover)", "Referral letter from a government hospital (for complex treatment)"],
    hi: ["आधार कार्ड", "राशन कार्ड (₹5 लाख कवर के लिए BPL / प्राथमिक परिवार कार्ड)", "सरकारी अस्पताल का रेफ़रल पत्र (जटिल इलाज के लिए)"],
  },
  faqs: [
    {
      q: { en: "I have an APL card. Am I covered?", hi: "मेरे पास APL कार्ड है। क्या मुझे कवर मिलेगा?" },
      a: {
        en: "Yes, as a 'general' patient. The government pays 30% of the package rate, up to ₹1.5 lakh a year for your family, and you pay the rest.",
        hi: "हाँ, 'सामान्य' मरीज़ के रूप में। सरकार पैकेज दर का 30%, परिवार के लिए साल में ₹1.5 लाख तक, देती है और बाकी आपको देना होता है।",
      },
    },
    {
      q: { en: "Do I always need a referral?", hi: "क्या हमेशा रेफ़रल चाहिए?" },
      a: {
        en: "For complex and specialist treatment, yes, from a government hospital. In an emergency you can go directly to any empanelled hospital.",
        hi: "जटिल और विशेषज्ञ इलाज के लिए हाँ, सरकारी अस्पताल से। आपात स्थिति में सीधे किसी भी सूचीबद्ध अस्पताल जा सकते हैं।",
      },
    },
  ],

  officialUrl: "https://arogya.karnataka.gov.in/",
  sources: [
    "https://gimsgulbarga.karnataka.gov.in/info-2/Ayushman+Bharat+%E2%80%93+Arogya+Karnataka+Scheme/en",
    "https://arogya.karnataka.gov.in/",
    "https://www.myscheme.gov.in/schemes/ab-ark",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
