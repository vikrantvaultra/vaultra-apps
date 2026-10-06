import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-free-bus-travel-women",
  name: { en: "Free KSRTC Bus Travel for Women (Indira Guarantee)", hi: "महिलाओं के लिए मुफ़्त KSRTC बस यात्रा (इंदिरा गारंटी)" },
  aka: ["Kerala free bus for women", "KSRTC free travel", "Indira Guarantee free bus", "Kerala women free bus"],
  shortDescription: {
    en: "Women and transgender persons of any age travel free in all ordinary KSRTC buses in Kerala, under the new government's Indira Guarantee.",
    hi: "केरल में नई सरकार की इंदिरा गारंटी के तहत हर उम्र की महिलाएँ और ट्रांसजेंडर व्यक्ति KSRTC की सभी साधारण बसों में मुफ़्त सफ़र करते हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Transport Department, Government of Kerala (Kerala State Road Transport Corporation)",
    hi: "परिवहन विभाग, केरल सरकार (केरल राज्य सड़क परिवहन निगम)",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "ksrtc", "transport", "transgender", "indira guarantee", "kerala"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("kerala"),
    labelled(when("gender", "in", ["female", "transgender"]), {
      en: "You are a woman or a transgender person",
      hi: "आप महिला या ट्रांसजेंडर व्यक्ति हैं",
    }),
  ),

  details: {
    en: [
      "Free bus travel for women is one of the six 'Indira Guarantees' promised by the UDF government that took office in Kerala in 2026. The order was issued at the new cabinet's very first meeting, and free travel started in June 2026.",
      "Women and transgender persons of every age can travel free in all ordinary services of the Kerala State Road Transport Corporation (KSRTC).",
      "The state pays KSRTC for the lost fares. The revised 2026-27 budget set aside ₹600 crore for this.",
    ],
    hi: [
      "महिलाओं के लिए मुफ़्त बस यात्रा उन छह 'इंदिरा गारंटियों' में से एक है, जिनका वादा 2026 में केरल में सत्ता में आई UDF सरकार ने किया था। इसका आदेश नई कैबिनेट की पहली ही बैठक में जारी हुआ, और जून 2026 से मुफ़्त सफ़र शुरू हो गया।",
      "हर उम्र की महिलाएँ और ट्रांसजेंडर व्यक्ति केरल राज्य सड़क परिवहन निगम (KSRTC) की सभी साधारण सेवाओं में मुफ़्त सफ़र कर सकते हैं।",
      "किराए का नुक़सान राज्य सरकार KSRTC को चुकाती है। 2026-27 के संशोधित बजट में इसके लिए ₹600 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: [
      "Free travel in all ordinary KSRTC bus services.",
      "Open to women and transgender persons of every age.",
      "No income condition.",
    ],
    hi: [
      "KSRTC की सभी साधारण बस सेवाओं में मुफ़्त सफ़र।",
      "हर उम्र की महिलाओं और ट्रांसजेंडर व्यक्तियों के लिए।",
      "कोई आय शर्त नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a woman (girls included) or a transgender person.",
      "You travel in an ordinary KSRTC service.",
      "Carry an ID card in case the conductor asks for it.",
    ],
    hi: [
      "आप महिला (लड़कियाँ भी) या ट्रांसजेंडर व्यक्ति हैं।",
      "आप KSRTC की साधारण सेवा में सफ़र कर रही/रहे हैं।",
      "कंडक्टर के माँगने पर दिखाने के लिए पहचान पत्र साथ रखें।",
    ],
  },
  exclusions: {
    en: [
      "Premium KSRTC services that are not 'ordinary' services are not covered.",
      "Private buses are not covered.",
      "Men travelling with women still pay the normal fare.",
    ],
    hi: [
      "KSRTC की वे प्रीमियम सेवाएँ जो 'साधारण' सेवा नहीं हैं, इसमें शामिल नहीं हैं।",
      "निजी बसें इसमें शामिल नहीं हैं।",
      "महिलाओं के साथ सफ़र करने वाले पुरुषों को सामान्य किराया देना होता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed.",
        "Board any ordinary KSRTC bus and tell the conductor you are travelling under the free travel scheme.",
        "Show an ID card if asked. You will be given a free ticket.",
      ],
      hi: [
        "कोई आवेदन नहीं करना है।",
        "KSRTC की किसी भी साधारण बस में चढ़ें और कंडक्टर को बताएँ कि आप मुफ़्त यात्रा योजना के तहत सफ़र कर रही/रहे हैं।",
        "माँगने पर पहचान पत्र दिखाएँ। आपको मुफ़्त टिकट दिया जाएगा।",
      ],
    },
  },
  documents: {
    en: ["Any photo ID such as Aadhaar or voter ID, if the conductor asks", "Transgender ID card, for transgender persons"],
    hi: ["माँगने पर कोई भी फ़ोटो पहचान पत्र, जैसे आधार या वोटर ID", "ट्रांसजेंडर व्यक्तियों के लिए ट्रांसजेंडर पहचान पत्र"],
  },
  faqs: [
    {
      q: { en: "Is there an age limit?", hi: "क्या कोई उम्र सीमा है?" },
      a: {
        en: "No. The government extended free travel to all women and transgender persons irrespective of age.",
        hi: "नहीं। सरकार ने मुफ़्त सफ़र सभी महिलाओं और ट्रांसजेंडर व्यक्तियों को, उम्र की परवाह किए बिना, दिया है।",
      },
    },
    {
      q: { en: "Can I use it in fast passenger or AC buses?", hi: "क्या फ़ास्ट पैसेंजर या AC बस में भी यह चलेगा?" },
      a: {
        en: "The budget speech says the scheme covers 'ordinary services' of KSRTC. Check with the conductor or KSRTC before boarding a higher-class service.",
        hi: "बजट भाषण के अनुसार योजना KSRTC की 'साधारण सेवाओं' पर लागू है। ऊँची श्रेणी की बस में चढ़ने से पहले कंडक्टर या KSRTC से पूछ लें।",
      },
    },
  ],

  officialUrl: "https://www.keralartc.com/",
  sources: [
    "https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf",
    "https://www.outlookmoney.com/retirement/kerala-government-announces-welfare-measures-sets-up-dedicated-department-for-senior-citizens",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
