import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cm-comprehensive-health-insurance",
  name: { en: "Chief Minister's Comprehensive Health Insurance Scheme", hi: "मुख्यमंत्री व्यापक स्वास्थ्य बीमा योजना (तमिलनाडु)" },
  aka: ["CMCHIS", "Kalaignar Kaappeettu Thittam", "Tamil Nadu health insurance card"],
  shortDescription: {
    en: "Free cashless hospital treatment worth up to ₹5 lakh per family per year for Tamil Nadu families earning up to ₹1.2 lakh a year. A rise to ₹25 lakh has been announced.",
    hi: "₹1.2 लाख तक सालाना आय वाले तमिलनाडु के परिवारों को हर साल प्रति परिवार ₹5 लाख तक मुफ़्त कैशलेस अस्पताल इलाज। इसे ₹25 लाख करने की घोषणा हुई है।",
  },
  level: "state",
  state: "tamil-nadu",
  department: { en: "Health and Family Welfare Department, Government of Tamil Nadu", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, तमिलनाडु सरकार" },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "hospital", "free treatment", "cmchis", "surgery", "pmjay"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500_000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("tamil-nadu"), incomeUpTo(120_000)),

  details: {
    en: [
      "The Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS) gives poor families in Tamil Nadu free, cashless treatment in empanelled government and private hospitals. It began in 2009 and now runs together with the central Ayushman Bharat PM-JAY scheme.",
      "Eligible families are covered for up to ₹5 lakh a year for listed surgeries, procedures and treatments. The state pays the premium, so families pay nothing to join.",
      "In August 2026 the Chief Minister announced that the cover will rise to ₹25 lakh per family per year. The official order with the start date had not been issued when we last checked, so the ₹5 lakh limit is what applies today.",
    ],
    hi: [
      "मुख्यमंत्री व्यापक स्वास्थ्य बीमा योजना (CMCHIS) तमिलनाडु के ग़रीब परिवारों को सूचीबद्ध सरकारी और निजी अस्पतालों में मुफ़्त कैशलेस इलाज देती है। यह 2009 में शुरू हुई और अब केंद्र की आयुष्मान भारत PM-JAY योजना के साथ मिलकर चलती है।",
      "पात्र परिवारों को सूचीबद्ध ऑपरेशन, प्रक्रियाओं और इलाज के लिए हर साल ₹5 लाख तक का कवर मिलता है। प्रीमियम राज्य सरकार देती है, इसलिए परिवार को जुड़ने के लिए कुछ नहीं देना होता।",
      "अगस्त 2026 में मुख्यमंत्री ने घोषणा की कि कवर बढ़ाकर प्रति परिवार हर साल ₹25 लाख किया जाएगा। हमारी पिछली जाँच तक शुरू होने की तारीख़ वाला सरकारी आदेश जारी नहीं हुआ था, इसलिए आज ₹5 लाख की सीमा ही लागू है।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹5 lakh per family per year in empanelled hospitals.",
      "Covers listed surgeries, procedures, diagnostics and follow-up treatments.",
      "No premium to pay; the government pays it.",
      "Announced increase of cover to ₹25 lakh per family per year (awaiting official start date).",
    ],
    hi: [
      "सूचीबद्ध अस्पतालों में प्रति परिवार हर साल ₹5 लाख तक कैशलेस इलाज।",
      "सूचीबद्ध ऑपरेशन, प्रक्रियाएँ, जाँचें और आगे का इलाज शामिल।",
      "कोई प्रीमियम नहीं देना; सरकार भरती है।",
      "कवर को प्रति परिवार हर साल ₹25 लाख करने की घोषणा (सरकारी शुरुआत की तारीख़ का इंतज़ार)।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Tamil Nadu and your name is on a Tamil Nadu ration card (family card).",
      "Your family's annual income is ₹1.2 lakh or less, shown by an income certificate from the Village Administrative Officer.",
      "Families already listed under Ayushman Bharat PM-JAY are covered too.",
    ],
    hi: [
      "आप तमिलनाडु में रहते हैं और आपका नाम तमिलनाडु के राशन कार्ड (परिवार कार्ड) में है।",
      "आपके परिवार की सालाना आय ₹1.2 लाख या उससे कम है, जो ग्राम प्रशासनिक अधिकारी (VAO) के आय प्रमाण पत्र से दिखती है।",
      "जो परिवार आयुष्मान भारत PM-JAY की सूची में पहले से हैं, वे भी कवर हैं।",
    ],
  },
  exclusions: {
    en: [
      "Families with annual income above ₹1.2 lakh (unless they fall in a specially covered group).",
      "Outpatient (OPD) consultations and treatments outside the approved list.",
    ],
    hi: [
      "₹1.2 लाख से ज़्यादा सालाना आय वाले परिवार (जब तक वे किसी विशेष रूप से शामिल समूह में न हों)।",
      "OPD परामर्श और स्वीकृत सूची से बाहर के इलाज।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get an income certificate from your Village Administrative Officer (VAO).",
        "Go to the CMCHIS enrolment kiosk at your district headquarters hospital or collectorate with your ration card, Aadhaar and income certificate.",
        "Your photo and fingerprints are taken and you get the CMCHIS e-card. Show it (or your Aadhaar) at the insurance desk of any empanelled hospital for cashless treatment.",
      ],
      hi: [
        "अपने ग्राम प्रशासनिक अधिकारी (VAO) से आय प्रमाण पत्र बनवाएँ।",
        "राशन कार्ड, आधार और आय प्रमाण पत्र लेकर ज़िला मुख्यालय अस्पताल या कलेक्ट्रेट के CMCHIS नामांकन केंद्र पर जाएँ।",
        "आपकी फ़ोटो और अंगूठे का निशान लेकर CMCHIS ई-कार्ड दिया जाता है। कैशलेस इलाज के लिए किसी भी सूचीबद्ध अस्पताल के बीमा डेस्क पर इसे (या आधार) दिखाएँ।",
      ],
    },
  },
  documents: {
    en: ["Tamil Nadu ration card (family card)", "Income certificate from the VAO (₹1.2 lakh or less)", "Aadhaar card of family members"],
    hi: ["तमिलनाडु राशन कार्ड (परिवार कार्ड)", "VAO का आय प्रमाण पत्र (₹1.2 लाख या कम)", "परिवार के सदस्यों का आधार कार्ड"],
  },
  faqs: [
    {
      q: { en: "Is the ₹25 lakh cover available now?", hi: "क्या ₹25 लाख का कवर अभी मिल रहा है?" },
      a: {
        en: "It has been announced but the official order with the start date had not been issued at our last check. Until then, the ₹5 lakh limit applies. Ask the hospital's insurance desk for the current limit.",
        hi: "इसकी घोषणा हुई है, लेकिन हमारी पिछली जाँच तक शुरुआत की तारीख़ वाला सरकारी आदेश नहीं आया था। तब तक ₹5 लाख की सीमा लागू है। मौजूदा सीमा अस्पताल के बीमा डेस्क से पूछें।",
      },
    },
    {
      q: { en: "Can I use it in private hospitals?", hi: "क्या इसे निजी अस्पतालों में इस्तेमाल कर सकते हैं?" },
      a: {
        en: "Yes, in private hospitals that are empanelled under the scheme, as well as in government hospitals.",
        hi: "हाँ, योजना में सूचीबद्ध निजी अस्पतालों में और सरकारी अस्पतालों में भी।",
      },
    },
  ],

  officialUrl: "https://www.cmchistn.com/",
  sources: [
    "https://www.cmchistn.com/",
    "https://www.myscheme.gov.in/schemes/cmchis",
    "https://www.gktoday.in/tamil-nadu-raises-cmchis-cover-to-%E2%82%B925-lakh/",
    "https://newstodaynet.com/2026/08/20/cmchis-insurance-cover-raised-fivefold-to-%E2%82%B925-lakh/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "check-status",
};

export default scheme;
