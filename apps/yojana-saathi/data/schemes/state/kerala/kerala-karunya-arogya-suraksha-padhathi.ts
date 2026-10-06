import { all, any, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-karunya-arogya-suraksha-padhathi",
  overlapGroup: "health-cover",
  name: { en: "Karunya Arogya Suraksha Padhathi (KASP)", hi: "कारुण्य आरोग्य सुरक्षा पद्धति (KASP)" },
  aka: ["KASP", "Karunya Arogya Suraksha", "Karunya health insurance", "Kerala health scheme"],
  shortDescription: {
    en: "Poor families in Kerala get free hospital treatment worth up to ₹5 lakh a year in government and listed private hospitals. All persons with disabilities and transgender persons are covered whatever their income.",
    hi: "केरल के ग़रीब परिवारों को सरकारी और सूचीबद्ध निजी अस्पतालों में हर साल ₹5 लाख तक का मुफ़्त इलाज मिलता है। सभी दिव्यांग और ट्रांसजेंडर व्यक्ति आय की परवाह किए बिना इसमें शामिल हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "State Health Agency Kerala, Health and Family Welfare Department, Government of Kerala",
    hi: "स्टेट हेल्थ एजेंसी केरल, स्वास्थ्य एवं परिवार कल्याण विभाग, केरल सरकार",
  },
  categories: ["health", "social-welfare"],
  tags: ["health insurance", "free treatment", "kasp", "karunya", "hospital", "cashless", "kerala"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("kerala"),
    labelled(any(isTrue("bpl"), isTrue("disabled"), when("gender", "eq", "transgender")), {
      en: "Your family is a poor / priority family on the KASP list, or you have a disability, or you are transgender",
      hi: "आपका परिवार KASP सूची में शामिल ग़रीब / प्राथमिकता वाला परिवार है, या आप दिव्यांग हैं, या आप ट्रांसजेंडर हैं",
    }),
  ),

  details: {
    en: [
      "Karunya Arogya Suraksha Padhathi (KASP) is Kerala's main free health cover for poor families. It pays for hospital treatment so that a serious illness does not push a family into debt.",
      "About 42 lakh families, roughly 1.5 crore people, are covered. Each family can get treatment worth up to ₹5 lakh a year, cashless, in government hospitals and empanelled private hospitals. Ayushman Bharat PM-JAY is also run in Kerala through KASP, and the state pays for the families it adds on top.",
      "The scheme is run by the State Health Agency. All persons with disabilities and transgender persons are included whatever their income. The new government's revised budget for 2026-27 says pending dues to hospitals will be cleared in phases so the scheme keeps working smoothly.",
    ],
    hi: [
      "कारुण्य आरोग्य सुरक्षा पद्धति (KASP) ग़रीब परिवारों के लिए केरल की मुख्य मुफ़्त स्वास्थ्य योजना है। यह अस्पताल के इलाज का ख़र्च उठाती है, ताकि कोई गंभीर बीमारी परिवार को कर्ज़ में न डाले।",
      "लगभग 42 लाख परिवार, यानी क़रीब 1.5 करोड़ लोग इसमें शामिल हैं। हर परिवार को सरकारी और सूचीबद्ध निजी अस्पतालों में हर साल ₹5 लाख तक का कैशलेस इलाज मिल सकता है। आयुष्मान भारत PM-JAY भी केरल में KASP के ज़रिए ही चलती है, और जो परिवार राज्य ने अलग से जोड़े हैं उनका ख़र्च राज्य देता है।",
      "यह योजना स्टेट हेल्थ एजेंसी चलाती है। सभी दिव्यांग और ट्रांसजेंडर व्यक्ति आय की परवाह किए बिना इसमें शामिल हैं। नई सरकार के 2026-27 के संशोधित बजट में कहा गया है कि अस्पतालों का बकाया चरणों में चुकाया जाएगा, ताकि योजना ठीक से चलती रहे।",
    ],
  },
  benefits: {
    en: [
      "Free hospital treatment worth up to ₹5 lakh per family per year.",
      "Cashless: the hospital is paid directly, you don't pay at the counter for covered treatment.",
      "Works in government hospitals and empanelled private hospitals in Kerala.",
      "No limit on family size or age.",
    ],
    hi: [
      "हर परिवार को हर साल ₹5 लाख तक का मुफ़्त अस्पताल इलाज।",
      "कैशलेस: पैसा सीधे अस्पताल को जाता है, योजना में शामिल इलाज के लिए आपको काउंटर पर भुगतान नहीं करना पड़ता।",
      "केरल के सरकारी अस्पतालों और सूचीबद्ध निजी अस्पतालों में मान्य।",
      "परिवार के आकार या उम्र की कोई सीमा नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family is on the KASP beneficiary list. These are mainly poor and priority families identified by the government, including Ayushman Bharat PM-JAY families in Kerala.",
      "All persons with disabilities and all transgender persons in Kerala are covered, whatever their income.",
      "You need a KASP / PM-JAY card or your name in the beneficiary database to use it.",
    ],
    hi: [
      "आपका परिवार KASP लाभार्थी सूची में है। इसमें मुख्य रूप से सरकार द्वारा पहचाने गए ग़रीब और प्राथमिकता वाले परिवार हैं, जिनमें केरल के आयुष्मान भारत PM-JAY परिवार भी शामिल हैं।",
      "केरल के सभी दिव्यांग और सभी ट्रांसजेंडर व्यक्ति आय की परवाह किए बिना शामिल हैं।",
      "लाभ लेने के लिए KASP / PM-JAY कार्ड होना चाहिए या लाभार्थी डेटाबेस में नाम होना चाहिए।",
    ],
  },
  exclusions: {
    en: [
      "Families who are not on the beneficiary list (they may be able to use the Karunya Benevolent Fund instead).",
      "Treatment in hospitals that are not empanelled under the scheme.",
    ],
    hi: [
      "जो परिवार लाभार्थी सूची में नहीं हैं (वे इसकी जगह कारुण्य बेनेवोलेंट फ़ंड का लाभ ले सकते हैं)।",
      "योजना में सूचीबद्ध न होने वाले अस्पतालों में इलाज।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to the KASP / Arogya Mitra help desk at an empanelled hospital or a government hospital.",
        "Show your Aadhaar and ration card so they can find your family in the beneficiary list.",
        "If you are on the list, your card is made and treatment is started without payment.",
        "Persons with disabilities and transgender persons should carry their disability certificate / UDID card or transgender ID card.",
      ],
      hi: [
        "किसी सूचीबद्ध अस्पताल या सरकारी अस्पताल के KASP / आरोग्य मित्र हेल्प डेस्क पर जाएँ।",
        "आधार और राशन कार्ड दिखाएँ, ताकि वे लाभार्थी सूची में आपका परिवार ढूँढ सकें।",
        "सूची में नाम होने पर आपका कार्ड बनाया जाता है और बिना भुगतान के इलाज शुरू होता है।",
        "दिव्यांग व्यक्ति अपना दिव्यांगता प्रमाण पत्र / UDID कार्ड और ट्रांसजेंडर व्यक्ति अपना ट्रांसजेंडर पहचान पत्र साथ रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Ration card", "KASP / PM-JAY card, if you already have one", "Disability certificate or UDID card, or transgender ID card (for those groups)"],
    hi: ["आधार कार्ड", "राशन कार्ड", "KASP / PM-JAY कार्ड, अगर पहले से है", "दिव्यांगता प्रमाण पत्र या UDID कार्ड, या ट्रांसजेंडर पहचान पत्र (इन समूहों के लिए)"],
  },
  faqs: [
    {
      q: { en: "Is KASP the same as Ayushman Bharat?", hi: "क्या KASP और आयुष्मान भारत एक ही हैं?" },
      a: {
        en: "In Kerala, Ayushman Bharat PM-JAY is run through KASP, so PM-JAY families use the same system. KASP also covers extra families that the state pays for on its own.",
        hi: "केरल में आयुष्मान भारत PM-JAY, KASP के ज़रिए ही चलती है, इसलिए PM-JAY परिवार भी इसी व्यवस्था से इलाज लेते हैं। KASP में कुछ और परिवार भी हैं जिनका ख़र्च राज्य अपने पैसे से देता है।",
      },
    },
    {
      q: { en: "My family is not on the list. Is there any other help?", hi: "मेरा परिवार सूची में नहीं है। क्या कोई और मदद है?" },
      a: {
        en: "Families outside KASP can apply to the Karunya Benevolent Fund for help with costly treatment. The 2026-27 budget also mentions a low-premium health insurance plan for families outside KASP, but it has not started yet.",
        hi: "KASP से बाहर के परिवार महँगे इलाज के लिए कारुण्य बेनेवोलेंट फ़ंड में आवेदन कर सकते हैं। 2026-27 के बजट में KASP से बाहर के परिवारों के लिए कम प्रीमियम वाली स्वास्थ्य बीमा योजना का भी ज़िक्र है, पर वह अभी शुरू नहीं हुई है।",
      },
    },
  ],

  officialUrl: "https://sha.kerala.gov.in/",
  sources: [
    "https://budget.kerala.gov.in/build/budget_speech/2026/2026Eng.pdf",
    "https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf",
    "https://sha.kerala.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
