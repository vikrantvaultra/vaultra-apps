import { all, isTrue } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-national-dialysis-programme",
  name: { en: "Pradhan Mantri National Dialysis Programme", hi: "प्रधानमंत्री राष्ट्रीय डायलिसिस कार्यक्रम" },
  aka: ["PMNDP", "free dialysis"],
  shortDescription: {
    en: "Free dialysis for BPL kidney patients at government district hospitals and centres across India, with the option to take sessions in any state.",
    hi: "BPL किडनी मरीज़ों के लिए पूरे भारत में सरकारी ज़िला अस्पतालों और केंद्रों पर मुफ़्त डायलिसिस, और किसी भी राज्य में सत्र लेने की सुविधा।",
  },
  level: "central",
  ministry: "health-family-welfare",
  categories: ["health"],
  tags: ["dialysis", "kidney", "kidney failure", "free treatment", "district hospital", "bpl"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(isTrue("bpl")),

  details: {
    en: [
      "Dialysis is costly and needed several times a week by people with kidney failure. Since 2016, this programme under the National Health Mission has set up dialysis units in district hospitals so poor patients don't have to pay.",
      "It now runs in all states and union territories, in almost every district. Both haemodialysis (with a machine at the centre) and peritoneal dialysis (which can be done at home) are offered.",
      "Under 'One Nation, One Dialysis' you can register on the PMNDP portal with your ABHA number and take sessions at any participating centre in India when slots are free. Patients who are not BPL can often use the same centres at a lower cost, depending on the state.",
    ],
    hi: [
      "किडनी फ़ेल होने पर हफ़्ते में कई बार डायलिसिस करानी पड़ती है, जो महँगी होती है। 2016 से राष्ट्रीय स्वास्थ्य मिशन के तहत इस कार्यक्रम ने ज़िला अस्पतालों में डायलिसिस यूनिट लगाई हैं, ताकि गरीब मरीज़ों को पैसा न देना पड़े।",
      "अब यह सभी राज्यों और केंद्र शासित प्रदेशों के लगभग हर ज़िले में चलता है। हीमोडायलिसिस (केंद्र पर मशीन से) और पेरिटोनियल डायलिसिस (जो घर पर हो सकती है), दोनों मिलती हैं।",
      "'एक राष्ट्र, एक डायलिसिस' के तहत आप ABHA नंबर से PMNDP पोर्टल पर पंजीकरण करके, स्लॉट ख़ाली होने पर भारत के किसी भी केंद्र पर सत्र ले सकते हैं। जो मरीज़ BPL नहीं हैं, वे भी राज्य के हिसाब से अक्सर इन्हीं केंद्रों पर कम ख़र्च में डायलिसिस करा सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Free dialysis sessions for BPL patients at government centres.",
      "Haemodialysis and peritoneal dialysis services.",
      "Portability: take sessions at any participating centre in any state.",
      "Online registration and slot booking through the PMNDP portal and app.",
    ],
    hi: [
      "सरकारी केंद्रों पर BPL मरीज़ों के लिए मुफ़्त डायलिसिस।",
      "हीमोडायलिसिस और पेरिटोनियल डायलिसिस, दोनों सेवाएँ।",
      "पोर्टेबिलिटी: किसी भी राज्य के किसी भी शामिल केंद्र पर सत्र।",
      "PMNDP पोर्टल और ऐप से ऑनलाइन पंजीकरण और स्लॉट बुकिंग।",
    ],
  },
  eligibilityText: {
    en: [
      "Patients with kidney failure who need dialysis, as advised by a doctor.",
      "Free service is for BPL patients; many states also give it free to PM-JAY / state health card holders.",
    ],
    hi: [
      "किडनी फ़ेल होने वाले मरीज़ जिन्हें डॉक्टर ने डायलिसिस की सलाह दी है।",
      "मुफ़्त सेवा BPL मरीज़ों के लिए है; कई राज्य PM-JAY / राज्य स्वास्थ्य कार्ड वालों को भी मुफ़्त देते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Non-BPL patients may have to pay a subsidised fee, depending on state rules.",
      "Kidney transplant is not part of this programme.",
    ],
    hi: [
      "जो मरीज़ BPL नहीं हैं, उन्हें राज्य के नियमों के अनुसार कम किया हुआ शुल्क देना पड़ सकता है।",
      "किडनी ट्रांसप्लांट इस कार्यक्रम का हिस्सा नहीं है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Create an ABHA (health ID) number if you don't have one.",
        "Register on the PMNDP portal (pmndp.mohfw.gov.in) or app with your ABHA number.",
        "Find a nearby centre and book your dialysis slots.",
      ],
      hi: [
        "अगर ABHA (हेल्थ ID) नंबर नहीं है तो बनवाएँ।",
        "ABHA नंबर से PMNDP पोर्टल (pmndp.mohfw.gov.in) या ऐप पर पंजीकरण करें।",
        "नज़दीकी केंद्र चुनें और डायलिसिस के स्लॉट बुक करें।",
      ],
    },
    offline: {
      en: [
        "Go to the dialysis unit at your district hospital with your doctor's advice and medical reports.",
        "Show your BPL card or ration card and Aadhaar to register.",
        "The centre will give you a regular schedule for your sessions.",
      ],
      hi: [
        "डॉक्टर की सलाह और मेडिकल रिपोर्ट लेकर ज़िला अस्पताल की डायलिसिस यूनिट में जाएँ।",
        "पंजीकरण के लिए BPL कार्ड या राशन कार्ड और आधार दिखाएँ।",
        "केंद्र आपके सत्रों का नियमित समय तय कर देगा।",
      ],
    },
  },
  documents: {
    en: ["Doctor's prescription / medical reports showing need for dialysis", "BPL card or BPL ration card", "Aadhaar card", "ABHA number (for online registration)"],
    hi: ["डायलिसिस की ज़रूरत बताने वाला डॉक्टर का पर्चा / मेडिकल रिपोर्ट", "BPL कार्ड या BPL राशन कार्ड", "आधार कार्ड", "ABHA नंबर (ऑनलाइन पंजीकरण के लिए)"],
  },
  faqs: [
    {
      q: { en: "Can I get dialysis when I travel to another state?", hi: "क्या दूसरे राज्य जाने पर भी डायलिसिस मिल सकती है?" },
      a: {
        en: "Yes. With your ABHA-linked PMNDP registration you can book a session at a centre in another state, subject to free slots.",
        hi: "हाँ। ABHA से जुड़े PMNDP पंजीकरण से आप दूसरे राज्य के केंद्र पर भी सत्र बुक कर सकते हैं, अगर स्लॉट ख़ाली हो।",
      },
    },
    {
      q: { en: "Can I do dialysis at home?", hi: "क्या घर पर डायलिसिस हो सकती है?" },
      a: {
        en: "Peritoneal dialysis can be done at home after training. Ask your district hospital whether PD is available for you under the programme.",
        hi: "पेरिटोनियल डायलिसिस प्रशिक्षण के बाद घर पर हो सकती है। ज़िला अस्पताल से पूछें कि कार्यक्रम में आपके लिए PD उपलब्ध है या नहीं।",
      },
    },
  ],

  officialUrl: "https://pmndp.mohfw.gov.in/",
  sources: [
    "https://pmndp.mohfw.gov.in/en/about-us",
    "https://rsdebate.nic.in/bitstream/123456789/757935/1/PQ_267_04022025_U291_p523_p524.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
