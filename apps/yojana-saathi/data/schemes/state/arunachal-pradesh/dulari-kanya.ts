import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dulari-kanya",
  overlapGroup: "daughter-savings",
  name: { en: "Dulari Kanya Yojana (Arunachal Pradesh)", hi: "दुलारी कन्या योजना (अरुणाचल प्रदेश)" },
  aka: ["Dulari Kanya", "Dulari Kanya Scheme"],
  shortDescription: {
    en: "A fixed deposit in the name of a girl born in a hospital in Arunachal Pradesh, which she can withdraw at 18 if she has passed Class 10 and is unmarried.",
    hi: "अरुणाचल प्रदेश में अस्पताल में जन्मी बेटी के नाम पर फ़िक्स्ड डिपॉज़िट, जिसे वह 18 साल की होने पर निकाल सकती है, अगर उसने 10वीं पास की हो और शादी न हुई हो।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Directorate of Family Welfare, Department of Health & Family Welfare, Government of Arunachal Pradesh",
    hi: "परिवार कल्याण निदेशालय, स्वास्थ्य एवं परिवार कल्याण विभाग, अरुणाचल प्रदेश सरकार",
  },
  categories: ["women-child", "health"],
  tags: ["girl child", "daughter", "fixed deposit", "institutional delivery", "dulari kanya", "arunachal"],
  benefitType: "savings",
  isDBT: false,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("arunachal-pradesh"),
    labelled(isTrue("daughterUnder10"), {
      en: "You have a daughter born in a government or recognised hospital (apply soon after birth)",
      hi: "आपकी बेटी सरकारी या मान्यता प्राप्त अस्पताल में जन्मी हो (जन्म के बाद जल्दी आवेदन करें)",
    }),
  ),

  details: {
    en: [
      "Dulari Kanya Yojana started on 15 August 2016 to end bias against girls, encourage births in hospitals, and help prevent child marriage. It is run by the Directorate of Family Welfare.",
      "When a girl is born in a government or government-recognised private hospital, the government puts money in a fixed deposit in her name. She can withdraw the matured amount at 18 after verification, if she has passed Class 10 and is still unmarried.",
      "The district and IPR pages still list ₹20,000 as the deposit. In February 2025 the state cabinet approved raising it to ₹30,000, but we could not find the order showing when the new amount applies, so please confirm the current amount at the hospital or DMO office.",
    ],
    hi: [
      "दुलारी कन्या योजना 15 अगस्त 2016 को शुरू हुई, ताकि बेटियों के साथ भेदभाव ख़त्म हो, अस्पताल में प्रसव बढ़े और बाल विवाह रुके। इसे परिवार कल्याण निदेशालय चलाता है।",
      "जब कोई बेटी सरकारी या सरकार से मान्यता प्राप्त निजी अस्पताल में जन्म लेती है, तो सरकार उसके नाम पर फ़िक्स्ड डिपॉज़िट में पैसा जमा करती है। 18 साल की होने पर, जाँच के बाद, अगर उसने 10वीं पास की हो और अविवाहित हो, तो वह यह रकम निकाल सकती है।",
      "ज़िला और IPR की वेबसाइट पर जमा रकम अब भी ₹20,000 लिखी है। फ़रवरी 2025 में राज्य कैबिनेट ने इसे ₹30,000 करने की मंज़ूरी दी, पर नई रकम कब से लागू है, इसका आदेश हमें नहीं मिला। इसलिए मौजूदा रकम अस्पताल या DMO दफ़्तर से पक्की कर लें।",
    ],
  },
  benefits: {
    en: [
      "A fixed deposit in the girl's name, made soon after her birth in hospital.",
      "The matured amount is paid to her at 18 into her own bank account.",
      "Covers up to the first two girl children in a family.",
    ],
    hi: [
      "अस्पताल में जन्म के बाद बेटी के नाम पर फ़िक्स्ड डिपॉज़िट।",
      "18 साल की होने पर पूरी रकम उसके अपने बैंक खाते में मिलती है।",
      "एक परिवार की पहली दो बेटियों तक को लाभ मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The girl is born in a government hospital or a government-recognised private hospital.",
      "The father or guardian is an Arunachal Pradesh Scheduled Tribe member, a domicile resident, or holds a household Resident Certificate.",
      "Only the first two living girl children of a family are covered.",
      "To withdraw at 18: she must have passed Class 10 and be unmarried.",
    ],
    hi: [
      "बेटी का जन्म सरकारी अस्पताल या सरकार से मान्यता प्राप्त निजी अस्पताल में हुआ हो।",
      "पिता या अभिभावक अरुणाचल प्रदेश की अनुसूचित जनजाति के हों, राज्य के मूल निवासी हों, या उनके पास परिवार का निवास प्रमाण पत्र हो।",
      "परिवार की सिर्फ़ पहली दो जीवित बेटियों को लाभ मिलता है।",
      "18 साल पर रकम निकालने के लिए: उसने 10वीं पास की हो और अविवाहित हो।",
    ],
  },
  exclusions: {
    en: [
      "Girls born at home or in a hospital that is not government or government-recognised.",
      "A third or later girl child in the same family.",
      "A girl who is married at 18, or has not passed Class 10, cannot withdraw the deposit.",
    ],
    hi: [
      "घर पर या ऐसे अस्पताल में जन्मी बेटियाँ जो सरकारी या सरकार से मान्यता प्राप्त न हो।",
      "एक ही परिवार की तीसरी या उसके बाद की बेटी।",
      "18 साल पर शादीशुदा या 10वीं पास न करने वाली बेटी जमा रकम नहीं निकाल सकती।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "After the delivery, get the form from the Medical Officer in charge or Medical Superintendent of the hospital, or the District Medical Officer (DMO).",
        "Submit it with the documents. After checking, the hospital forwards it to the DMO, who opens the fixed deposit.",
        "At 18, the girl submits a maturity claim to the DMO with her Class 10 certificate, an unmarried declaration and her SBI passbook.",
      ],
      hi: [
        "प्रसव के बाद अस्पताल के मेडिकल ऑफ़िसर इंचार्ज या मेडिकल सुपरिंटेंडेंट से, या ज़िला चिकित्सा अधिकारी (DMO) से फ़ॉर्म लें।",
        "दस्तावेज़ों के साथ जमा करें। जाँच के बाद अस्पताल इसे DMO को भेजता है, जो फ़िक्स्ड डिपॉज़िट खुलवाते हैं।",
        "18 साल की होने पर बेटी DMO के पास 10वीं का प्रमाण पत्र, अविवाहित होने की घोषणा और अपनी SBI पासबुक के साथ दावा जमा करती है।",
      ],
    },
  },
  documents: {
    en: [
      "Delivery or discharge certificate from the hospital",
      "Mother and Child Protection (MCP) card",
      "Birth certificate from the Registrar of Births and Deaths",
      "ST certificate or domicile certificate of the father or guardian",
      "Two family photographs and Aadhaar copies of the parents (and the child, if available)",
    ],
    hi: [
      "अस्पताल का प्रसव या डिस्चार्ज प्रमाण पत्र",
      "मातृ एवं शिशु सुरक्षा (MCP) कार्ड",
      "जन्म-मृत्यु रजिस्ट्रार का जन्म प्रमाण पत्र",
      "पिता या अभिभावक का ST प्रमाण पत्र या मूल निवास प्रमाण पत्र",
      "माता-पिता के साथ बच्ची की दो फ़ोटो और माता-पिता (और हो तो बच्ची) के आधार की कॉपी",
    ],
  },
  faqs: [
    {
      q: { en: "Is the deposit ₹20,000 or ₹30,000?", hi: "जमा रकम ₹20,000 है या ₹30,000?" },
      a: {
        en: "The cabinet approved ₹30,000 in February 2025, but official scheme pages still show ₹20,000. Ask the DMO office which amount applies to your daughter's birth date.",
        hi: "कैबिनेट ने फ़रवरी 2025 में ₹30,000 मंज़ूर किए, पर योजना के सरकारी पेज पर अब भी ₹20,000 लिखा है। अपनी बेटी की जन्म तारीख़ पर कौन-सी रकम लागू है, यह DMO दफ़्तर से पूछें।",
      },
    },
    {
      q: { en: "What if my daughter marries before 18?", hi: "अगर बेटी की शादी 18 से पहले हो जाए तो?" },
      a: {
        en: "She must be unmarried at 18 to claim the money, so a child marriage means losing the benefit.",
        hi: "पैसा पाने के लिए 18 साल पर उसका अविवाहित होना ज़रूरी है, इसलिए बाल विवाह होने पर लाभ नहीं मिलेगा।",
      },
    },
  ],

  officialUrl: "https://arunachalipr.gov.in/post/dulari-kanya-yojana",
  sources: [
    "https://arunachalipr.gov.in/post/dulari-kanya-yojana",
    "https://tawang.nic.in/scheme/dulari-kanya-scheme/",
    "https://www.newsonair.gov.in/arunachal-cabinet-holds-historic-outdoor-meeting-in-nyapin",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
