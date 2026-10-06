import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-mahalakshmi-free-bus",
  name: { en: "Mahalakshmi Free Bus Travel for Women", hi: "महालक्ष्मी: महिलाओं के लिए मुफ़्त बस यात्रा" },
  aka: ["Mahalakshmi", "Maha Lakshmi", "Telangana free bus", "TGSRTC free travel women", "zero ticket"],
  shortDescription: {
    en: "Women and girls living in Telangana travel free on TGSRTC buses across the state under the Mahalakshmi scheme. You just show your ID and get a zero-fare ticket.",
    hi: "महालक्ष्मी योजना में तेलंगाना की महिलाएँ और लड़कियाँ पूरे राज्य में TGSRTC बसों में मुफ़्त सफ़र करती हैं। बस पहचान पत्र दिखाएँ और शून्य किराये का टिकट लें।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Transport Department (TGSRTC), Government of Telangana",
    hi: "परिवहन विभाग (TGSRTC), तेलंगाना सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "travel", "rtc", "mahalakshmi", "telangana"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("telangana"), female()),

  details: {
    en: [
      "Mahalakshmi is one of the Telangana government's six guarantees. Free bus travel for women was the first part to start, in December 2023.",
      "Women and girls who live in Telangana can travel without paying a fare on TGSRTC buses within the state. The conductor issues a zero-value ticket so that every trip is counted.",
      "The state government pays TGSRTC for these trips every month. By September 2026 the government said women had saved over ₹12,000 crore in fares.",
    ],
    hi: [
      "महालक्ष्मी तेलंगाना सरकार की छह गारंटियों में से एक है। महिलाओं के लिए मुफ़्त बस यात्रा इसका पहला हिस्सा था, जो दिसंबर 2023 में शुरू हुआ।",
      "तेलंगाना में रहने वाली महिलाएँ और लड़कियाँ राज्य के अंदर TGSRTC बसों में बिना किराया दिए सफ़र कर सकती हैं। कंडक्टर शून्य राशि का टिकट देता है, ताकि हर यात्रा गिनी जा सके।",
      "इन यात्राओं का पैसा राज्य सरकार हर महीने TGSRTC को देती है। सितंबर 2026 तक सरकार के अनुसार महिलाओं के ₹12,000 करोड़ से ज़्यादा किराये बच चुके हैं।",
    ],
  },
  benefits: {
    en: [
      "Free travel on TGSRTC buses anywhere inside Telangana.",
      "No pass or registration needed; you get a zero-fare ticket on the bus.",
      "Covers daily trips to work, college, hospital or market.",
    ],
    hi: [
      "तेलंगाना के अंदर कहीं भी TGSRTC बसों में मुफ़्त सफ़र।",
      "कोई पास या रजिस्ट्रेशन नहीं चाहिए; बस में शून्य किराये का टिकट मिलता है।",
      "काम, कॉलेज, अस्पताल या बाज़ार जाने के रोज़ के सफ़र में काम आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Women and girls of any age who live in Telangana.",
      "You must carry a Telangana identity proof such as Aadhaar.",
      "The free fare is for journeys within Telangana.",
    ],
    hi: [
      "तेलंगाना में रहने वाली किसी भी उम्र की महिलाएँ और लड़कियाँ।",
      "साथ में तेलंगाना का पहचान पत्र, जैसे आधार, रखना ज़रूरी है।",
      "मुफ़्त सफ़र तेलंगाना के अंदर की यात्राओं के लिए है।",
    ],
  },
  exclusions: {
    en: [
      "Journeys that go outside Telangana are charged for the part beyond the state.",
      "Premium and AC services are not part of the free scheme.",
    ],
    hi: [
      "तेलंगाना से बाहर जाने वाली यात्रा में राज्य के बाहर वाले हिस्से का किराया लगता है।",
      "प्रीमियम और AC बसें मुफ़्त योजना में शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Board any eligible TGSRTC bus within Telangana.",
        "Show your Aadhaar or other Telangana ID to the conductor.",
        "Take the zero-fare Mahalakshmi ticket and keep it till the end of your trip.",
      ],
      hi: [
        "तेलंगाना के अंदर किसी भी पात्र TGSRTC बस में चढ़ें।",
        "कंडक्टर को अपना आधार या तेलंगाना का कोई दूसरा पहचान पत्र दिखाएँ।",
        "शून्य किराये वाला महालक्ष्मी टिकट लें और यात्रा पूरी होने तक संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card or another identity card showing a Telangana address"],
    hi: ["आधार कार्ड या तेलंगाना का पता दिखाने वाला कोई दूसरा पहचान पत्र"],
  },
  faqs: [
    {
      q: { en: "Has the ₹2,500 a month for women started?", hi: "क्या महिलाओं को हर महीने ₹2,500 मिलने लगे हैं?" },
      a: {
        en: "No. ₹2,500 a month was promised under Mahalakshmi, but as of the 2026-27 budget only the free bus travel and the ₹500 LPG cylinder are being given.",
        hi: "नहीं। महालक्ष्मी में हर महीने ₹2,500 का वादा किया गया था, पर 2026-27 के बजट तक सिर्फ़ मुफ़्त बस यात्रा और ₹500 वाला गैस सिलेंडर ही दिया जा रहा है।",
      },
    },
    {
      q: { en: "Do I need a smart card or registration?", hi: "क्या स्मार्ट कार्ड या रजिस्ट्रेशन चाहिए?" },
      a: {
        en: "No. Showing a valid Telangana ID to the conductor is enough to get the free ticket.",
        hi: "नहीं। कंडक्टर को तेलंगाना का मान्य पहचान पत्र दिखाना ही मुफ़्त टिकट के लिए काफ़ी है।",
      },
    },
  ],

  officialUrl: "https://www.tgsrtc.telangana.gov.in/",
  sources: [
    "https://www.telangana.gov.in/government-initiatives/",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
    "https://www.telangana.gov.in/news/press-releases/2024/07/deputy-cm-presents-budget-for-the-year-2024-25/",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
