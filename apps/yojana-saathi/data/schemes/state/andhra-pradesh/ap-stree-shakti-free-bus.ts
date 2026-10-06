import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ap-stree-shakti-free-bus",
  name: { en: "Stree Shakti Free Bus Travel Scheme", hi: "स्त्री शक्ति मुफ़्त बस यात्रा योजना" },
  aka: ["Stree Shakti", "AP free bus for women", "APSRTC free bus"],
  shortDescription: {
    en: "Women, girls and transgender persons from Andhra Pradesh travel free on APSRTC Pallevelugu, Ultra Pallevelugu, City Ordinary, Metro Express and Express buses within the state.",
    hi: "आंध्र प्रदेश की महिलाएँ, लड़कियाँ और ट्रांसजेंडर व्यक्ति राज्य के अंदर APSRTC की पल्लेवेलुगु, अल्ट्रा पल्लेवेलुगु, सिटी ऑर्डिनरी, मेट्रो एक्सप्रेस और एक्सप्रेस बसों में मुफ़्त सफ़र करते हैं।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Transport Department and APSRTC, Government of Andhra Pradesh",
    hi: "परिवहन विभाग और APSRTC, आंध्र प्रदेश सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "apsrtc", "stree shakti", "transport", "transgender", "andhra pradesh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("andhra-pradesh"),
    labelled(when("gender", "in", ["female", "transgender"]), {
      en: "You are a woman, a girl or a transgender person",
      hi: "आप महिला, लड़की या ट्रांसजेंडर व्यक्ति हैं",
    }),
  ),

  details: {
    en: [
      "Stree Shakti is Andhra Pradesh's free bus travel scheme for women, launched on 15 August 2025 as one of the 'Super Six' promises. Girls and transgender persons with Andhra Pradesh domicile are covered too.",
      "You show a valid photo ID to the conductor and get a zero-fare ticket. APSRTC is paid back by the government. In its first year, women took about 87 crore free rides.",
      "Free travel is on ordinary services only: Pallevelugu, Ultra Pallevelugu, City Ordinary, Metro Express and Express. Premium, AC and interstate buses are not included.",
    ],
    hi: [
      "स्त्री शक्ति आंध्र प्रदेश की महिलाओं के लिए मुफ़्त बस यात्रा योजना है, जो 'सुपर सिक्स' वादों में से एक के रूप में 15 अगस्त 2025 को शुरू हुई। आंध्र प्रदेश की निवासी लड़कियाँ और ट्रांसजेंडर व्यक्ति भी इसमें शामिल हैं।",
      "आप कंडक्टर को वैध फ़ोटो पहचान पत्र दिखाते हैं और आपको शून्य किराए का टिकट मिलता है। APSRTC को पैसा सरकार देती है। पहले साल में महिलाओं ने लगभग 87 करोड़ मुफ़्त यात्राएँ कीं।",
      "मुफ़्त सफ़र सिर्फ़ साधारण सेवाओं में है: पल्लेवेलुगु, अल्ट्रा पल्लेवेलुगु, सिटी ऑर्डिनरी, मेट्रो एक्सप्रेस और एक्सप्रेस। प्रीमियम, AC और दूसरे राज्यों जाने वाली बसें शामिल नहीं हैं।",
    ],
  },
  benefits: {
    en: [
      "Free travel with a zero-fare ticket on APSRTC Pallevelugu, Ultra Pallevelugu, City Ordinary, Metro Express and Express buses.",
      "Valid anywhere within Andhra Pradesh, with no limit on the number of trips.",
      "No card or registration is needed; your photo ID is enough.",
    ],
    hi: [
      "APSRTC की पल्लेवेलुगु, अल्ट्रा पल्लेवेलुगु, सिटी ऑर्डिनरी, मेट्रो एक्सप्रेस और एक्सप्रेस बसों में शून्य किराए के टिकट से मुफ़्त सफ़र।",
      "आंध्र प्रदेश में कहीं भी, यात्राओं की कोई गिनती नहीं।",
      "कोई कार्ड या रजिस्ट्रेशन नहीं चाहिए; फ़ोटो पहचान पत्र काफ़ी है।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman, girl or transgender person with Andhra Pradesh domicile.",
      "Carries a valid photo ID showing an Andhra Pradesh address, such as Aadhaar, voter ID or ration card.",
      "The journey is within Andhra Pradesh on a covered bus service.",
    ],
    hi: [
      "आंध्र प्रदेश की निवासी महिला, लड़की या ट्रांसजेंडर व्यक्ति।",
      "आंध्र प्रदेश के पते वाला वैध फ़ोटो पहचान पत्र साथ हो, जैसे आधार, वोटर ID या राशन कार्ड।",
      "सफ़र आंध्र प्रदेश के अंदर, शामिल बस सेवा में हो।",
    ],
  },
  exclusions: {
    en: [
      "Non-stop, interstate, chartered, contract-carriage and package tour buses.",
      "All AC buses, and Star Liner, Super Luxury, Ultra Deluxe and Saptagiri Express services.",
    ],
    hi: [
      "नॉन-स्टॉप, दूसरे राज्यों जाने वाली, चार्टर्ड, कॉन्ट्रैक्ट और पैकेज टूर बसें।",
      "सभी AC बसें, और स्टार लाइनर, सुपर लग्ज़री, अल्ट्रा डीलक्स और सप्तगिरि एक्सप्रेस सेवाएँ।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No application is needed.",
        "Board a covered APSRTC bus and show your photo ID with an Andhra Pradesh address to the conductor.",
        "Take the zero-fare ticket the conductor issues and keep it for the journey.",
      ],
      hi: [
        "कोई आवेदन नहीं करना होता।",
        "शामिल APSRTC बस में चढ़ें और कंडक्टर को आंध्र प्रदेश के पते वाला फ़ोटो पहचान पत्र दिखाएँ।",
        "कंडक्टर से शून्य किराए का टिकट लें और यात्रा भर संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Any valid photo ID with an Andhra Pradesh address (Aadhaar, voter ID, ration card or similar)"],
    hi: ["आंध्र प्रदेश के पते वाला कोई भी वैध फ़ोटो पहचान पत्र (आधार, वोटर ID, राशन कार्ड या ऐसा ही)"],
  },
  faqs: [
    {
      q: { en: "Can I travel free to Hyderabad or Chennai?", hi: "क्या मैं हैदराबाद या चेन्नई मुफ़्त जा सकती हूँ?" },
      a: {
        en: "No. Interstate buses are not covered. Free travel is only on covered services within Andhra Pradesh.",
        hi: "नहीं। दूसरे राज्यों जाने वाली बसें शामिल नहीं हैं। मुफ़्त सफ़र सिर्फ़ आंध्र प्रदेश के अंदर शामिल सेवाओं में है।",
      },
    },
    {
      q: { en: "Do I need a special card?", hi: "क्या कोई ख़ास कार्ड चाहिए?" },
      a: {
        en: "No. Any valid photo ID showing you live in Andhra Pradesh is enough to get a zero-fare ticket.",
        hi: "नहीं। आंध्र प्रदेश का निवासी होना दिखाने वाला कोई भी वैध फ़ोटो पहचान पत्र शून्य किराए के टिकट के लिए काफ़ी है।",
      },
    },
  ],

  officialUrl: "https://apsrtc.ap.gov.in/",
  sources: [
    "https://prsindia.org/budgets/states/andhra-pradesh-budget-analysis-2026-27",
    "https://www.theweek.in/wire-updates/national/2025/08/11/mes2-ap-free-bus-scheme.html",
    "https://www.thenewsminute.com/andhra-pradesh/andhra-women-availed-87-crore-fare-free-bus-rides-in-first-year-of-stree-shakti-scheme",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
