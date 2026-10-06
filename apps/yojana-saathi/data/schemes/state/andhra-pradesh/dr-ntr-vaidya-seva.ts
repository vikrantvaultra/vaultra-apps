import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dr-ntr-vaidya-seva",
  overlapGroup: "health-cover",
  name: { en: "Dr. NTR Vaidya Seva", hi: "डॉ. NTR वैद्य सेवा" },
  aka: ["NTR Vaidya Seva", "Aarogyasri", "YSR Aarogyasri", "AB PMJAY Dr NTR Vaidya Seva", "AP health insurance"],
  shortDescription: {
    en: "Andhra Pradesh's free hospital treatment scheme: cashless care for over 3,000 listed procedures at government and network private hospitals, together with Ayushman Bharat.",
    hi: "आंध्र प्रदेश की मुफ़्त अस्पताल इलाज योजना: सरकारी और नेटवर्क निजी अस्पतालों में 3,000 से ज़्यादा सूचीबद्ध इलाजों के लिए कैशलेस इलाज, आयुष्मान भारत के साथ मिलकर।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Health, Medical & Family Welfare Department (Dr. NTR Vaidya Seva Trust), Government of Andhra Pradesh",
    hi: "स्वास्थ्य, चिकित्सा एवं परिवार कल्याण विभाग (डॉ. NTR वैद्य सेवा ट्रस्ट), आंध्र प्रदेश सरकार",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "aarogyasri", "free treatment", "hospital", "vaidya seva", "cashless", "andhra pradesh"],
  benefitType: "insurance",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("andhra-pradesh")),

  details: {
    en: [
      "Dr. NTR Vaidya Seva is Andhra Pradesh's state health assurance scheme, run by the Dr. NTR Vaidya Seva Trust. It is the scheme earlier known as Aarogyasri, and it works together with the central Ayushman Bharat PM-JAY.",
      "It gives cashless treatment for 3,257 listed therapies in government and private network hospitals, plus follow-up care after discharge. Vaidya Mithras at hospital help desks guide patients.",
      "In September 2025 the state cabinet approved a universal health policy in a hybrid model: an insurance company covers claims up to ₹2.5 lakh and the Trust covers costs above that, up to ₹25 lakh a year per family. Check with your secretariat or a network hospital for the cover that applies to your family today.",
    ],
    hi: [
      "डॉ. NTR वैद्य सेवा आंध्र प्रदेश की सरकारी स्वास्थ्य योजना है, जिसे डॉ. NTR वैद्य सेवा ट्रस्ट चलाता है। पहले यही योजना आरोग्यश्री कहलाती थी, और यह केंद्र की आयुष्मान भारत PM-JAY के साथ मिलकर चलती है।",
      "इसमें सरकारी और नेटवर्क निजी अस्पतालों में 3,257 सूचीबद्ध इलाजों के लिए कैशलेस इलाज और छुट्टी के बाद की फ़ॉलो-अप देखभाल मिलती है। अस्पताल के हेल्प डेस्क पर वैद्य मित्र मरीज़ों की मदद करते हैं।",
      "सितंबर 2025 में राज्य कैबिनेट ने हाइब्रिड मॉडल में सार्वभौमिक स्वास्थ्य नीति को मंज़ूरी दी: ₹2.5 लाख तक के दावे बीमा कंपनी देगी और उससे ऊपर का ख़र्च, परिवार के लिए साल में ₹25 लाख तक, ट्रस्ट उठाएगा। आपके परिवार पर आज कितना कवर लागू है, यह सचिवालय या नेटवर्क अस्पताल से पूछें।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment for 3,257 listed therapies across many specialities.",
      "Treatment at government hospitals and empanelled private hospitals.",
      "Follow-up procedures for up to one year after discharge.",
      "Under the universal health policy approved in 2025, cover of up to ₹25 lakh a year per family.",
    ],
    hi: [
      "कई विशेषज्ञताओं के 3,257 सूचीबद्ध इलाजों के लिए कैशलेस इलाज।",
      "सरकारी अस्पतालों और सूचीबद्ध निजी अस्पतालों में इलाज।",
      "छुट्टी के बाद एक साल तक फ़ॉलो-अप इलाज।",
      "2025 में मंज़ूर सार्वभौमिक स्वास्थ्य नीति के तहत परिवार के लिए साल में ₹25 लाख तक का कवर।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Andhra Pradesh.",
      "Families with a rice card (white ration card) linked to Aadhaar are covered.",
      "The universal policy approved in 2025 extends cover to families above the poverty line as well, with different limits.",
    ],
    hi: [
      "आप आंध्र प्रदेश में रहते हैं।",
      "आधार से जुड़े राइस कार्ड (सफ़ेद राशन कार्ड) वाले परिवार शामिल हैं।",
      "2025 में मंज़ूर सार्वभौमिक नीति गरीबी रेखा से ऊपर के परिवारों को भी, अलग सीमाओं के साथ, कवर देती है।",
    ],
  },
  exclusions: {
    en: [
      "Treatments that are not on the list of covered therapies.",
      "Treatment at hospitals that are not part of the network.",
      "State government employees and pensioners, who are covered by the separate Employees Health Scheme (EHS).",
    ],
    hi: [
      "ऐसे इलाज जो सूची में शामिल नहीं हैं।",
      "नेटवर्क से बाहर के अस्पतालों में इलाज।",
      "राज्य सरकार के कर्मचारी और पेंशनभोगी, जिनके लिए अलग कर्मचारी स्वास्थ्य योजना (EHS) है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to a government hospital or a Dr. NTR Vaidya Seva network hospital.",
        "Meet the Vaidya Mithra at the help desk and show your Aadhaar and rice card or health card.",
        "The hospital gets pre-approval from the Trust and treats you without charging you for covered procedures.",
      ],
      hi: [
        "किसी सरकारी अस्पताल या डॉ. NTR वैद्य सेवा के नेटवर्क अस्पताल जाएँ।",
        "हेल्प डेस्क पर वैद्य मित्र से मिलें और आधार और राइस कार्ड या हेल्थ कार्ड दिखाएँ।",
        "अस्पताल ट्रस्ट से पहले मंज़ूरी लेता है और सूची वाले इलाज के लिए आपसे पैसा नहीं लेता।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Rice card or Dr. NTR Vaidya Seva / Ayushman health card", "Doctor's referral, if you have one"],
    hi: ["आधार कार्ड", "राइस कार्ड या डॉ. NTR वैद्य सेवा / आयुष्मान हेल्थ कार्ड", "डॉक्टर की रेफ़रल पर्ची, अगर हो"],
  },
  faqs: [
    {
      q: { en: "Is this the same as Aarogyasri?", hi: "क्या यह वही आरोग्यश्री है?" },
      a: {
        en: "Yes. The scheme earlier called Aarogyasri now runs as Dr. NTR Vaidya Seva, together with Ayushman Bharat PM-JAY.",
        hi: "हाँ। पहले आरोग्यश्री कहलाने वाली योजना अब आयुष्मान भारत PM-JAY के साथ डॉ. NTR वैद्य सेवा के नाम से चलती है।",
      },
    },
    {
      q: { en: "Do I have to pay anything at the hospital?", hi: "क्या अस्पताल में कुछ पैसा देना होगा?" },
      a: {
        en: "No, not for listed procedures at a network hospital. If someone asks you for money, report it to the Trust.",
        hi: "नहीं, नेटवर्क अस्पताल में सूची वाले इलाज के लिए नहीं। अगर कोई पैसा माँगे तो ट्रस्ट को शिकायत करें।",
      },
    },
  ],

  officialUrl: "https://drntrvaidyaseva.ap.gov.in/",
  sources: [
    "https://drntrvaidyaseva.ap.gov.in/",
    "https://spsnellore.ap.gov.in/dr-nandamuri-taraka-rama-rao-vaidyaseva-trust/",
    "https://www.theweek.in/wire-updates/national/2025/09/04/mes26-ap-cabinet-health-policy.html",
    "https://prsindia.org/budgets/states/andhra-pradesh-budget-analysis-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
