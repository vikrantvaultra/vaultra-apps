import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shakti-scheme",
  name: { en: "Shakti Scheme", hi: "शक्ति योजना" },
  aka: ["Shakti Yojane", "free bus Karnataka"],
  shortDescription: {
    en: "Women and transgender persons living in Karnataka travel free in ordinary state-run buses (KSRTC, BMTC, NWKRTC, KKRTC) anywhere within the state.",
    hi: "कर्नाटक में रहने वाली महिलाएँ और ट्रांसजेंडर व्यक्ति राज्य के अंदर सरकारी साधारण बसों (KSRTC, BMTC, NWKRTC, KKRTC) में मुफ़्त सफ़र करते हैं।",
  },
  level: "state",
  state: "karnataka",
  department: { en: "Transport Department, Government of Karnataka", hi: "परिवहन विभाग, कर्नाटक सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "transport", "ksrtc", "bmtc", "guarantee scheme", "transgender"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("karnataka"),
    labelled(when("gender", "in", ["female", "transgender"]), {
      en: "You are a woman or a transgender person",
      hi: "आप महिला या ट्रांसजेंडर व्यक्ति हैं",
    }),
  ),

  details: {
    en: [
      "Shakti is one of Karnataka's five guarantee schemes. Since June 2023 it has let women travel free in the state's own buses, with a zero-value ticket instead of a paid one.",
      "It covers ordinary (non-premium) buses of the four state transport corporations: KSRTC, BMTC in Bengaluru, NWKRTC and KKRTC. Trips must start and end inside Karnataka.",
      "Today you show an ID with a Karnataka address, such as Aadhaar, to the conductor. The government is introducing free Shakti smart cards that conductors will tap on their ticket machines.",
    ],
    hi: [
      "शक्ति कर्नाटक की पाँच गारंटी योजनाओं में से एक है। जून 2023 से इसके तहत महिलाएँ राज्य की सरकारी बसों में मुफ़्त सफ़र करती हैं, उन्हें पैसे वाले टिकट की जगह शून्य मूल्य का टिकट मिलता है।",
      "यह चार सरकारी परिवहन निगमों की साधारण (नॉन-प्रीमियम) बसों पर लागू है: KSRTC, बेंगलुरु की BMTC, NWKRTC और KKRTC। सफ़र कर्नाटक के अंदर ही शुरू और ख़त्म होना चाहिए।",
      "अभी कंडक्टर को कर्नाटक के पते वाला पहचान पत्र, जैसे आधार, दिखाना होता है। सरकार मुफ़्त शक्ति स्मार्ट कार्ड ला रही है, जिन्हें कंडक्टर टिकट मशीन पर टैप करेंगे।",
    ],
  },
  benefits: {
    en: [
      "Free travel in ordinary buses of KSRTC, BMTC, NWKRTC and KKRTC within Karnataka.",
      "No limit on the number of trips and no income condition.",
      "A zero-value ticket is issued for every trip.",
    ],
    hi: [
      "कर्नाटक के अंदर KSRTC, BMTC, NWKRTC और KKRTC की साधारण बसों में मुफ़्त सफ़र।",
      "सफ़र की संख्या पर कोई रोक नहीं और कोई आय शर्त नहीं।",
      "हर सफ़र पर शून्य मूल्य का टिकट दिया जाता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a woman (girls included) or a transgender person.",
      "You live in Karnataka and can show an ID with a Karnataka address.",
      "Your trip starts and ends inside Karnataka.",
    ],
    hi: [
      "आप महिला (लड़कियाँ भी) या ट्रांसजेंडर व्यक्ति हैं।",
      "आप कर्नाटक में रहती/रहते हैं और कर्नाटक के पते वाला पहचान पत्र दिखा सकती/सकते हैं।",
      "आपका सफ़र कर्नाटक के अंदर शुरू और ख़त्म होता है।",
    ],
  },
  exclusions: {
    en: [
      "Premium buses such as AC, sleeper, Rajahamsa, Airavat, Vajra and Vayu Vajra services are not free.",
      "Inter-state trips are not covered.",
      "Women from other states do not get free travel.",
    ],
    hi: [
      "AC, स्लीपर, राजहंस, ऐरावत, वज्र और वायु वज्र जैसी प्रीमियम बसें मुफ़्त नहीं हैं।",
      "दूसरे राज्यों तक का सफ़र शामिल नहीं है।",
      "दूसरे राज्यों की महिलाओं को मुफ़्त सफ़र नहीं मिलता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Board an ordinary KSRTC, BMTC, NWKRTC or KKRTC bus.",
        "Show your Aadhaar or another government ID with a Karnataka address (or your Shakti smart card once issued) to the conductor.",
        "Collect the free zero-value ticket and keep it for the trip.",
      ],
      hi: [
        "KSRTC, BMTC, NWKRTC या KKRTC की साधारण बस में चढ़ें।",
        "कंडक्टर को आधार या कर्नाटक के पते वाला कोई सरकारी पहचान पत्र (या मिलने पर शक्ति स्मार्ट कार्ड) दिखाएँ।",
        "मुफ़्त शून्य मूल्य वाला टिकट लें और सफ़र भर अपने पास रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card or another government photo ID with a Karnataka address", "Shakti smart card (when issued)"],
    hi: ["आधार कार्ड या कर्नाटक के पते वाला कोई दूसरा सरकारी फ़ोटो पहचान पत्र", "शक्ति स्मार्ट कार्ड (जारी होने पर)"],
  },
  faqs: [
    {
      q: { en: "Do I need to register to travel free?", hi: "क्या मुफ़्त सफ़र के लिए पंजीकरण ज़रूरी है?" },
      a: {
        en: "No registration is needed right now. Showing a valid ID with a Karnataka address to the conductor is enough. Smart cards are being rolled out to replace this check.",
        hi: "अभी पंजीकरण की ज़रूरत नहीं है। कंडक्टर को कर्नाटक के पते वाला मान्य पहचान पत्र दिखाना काफ़ी है। इस जाँच की जगह स्मार्ट कार्ड लाए जा रहे हैं।",
      },
    },
    {
      q: { en: "Can I travel free to Goa or Tamil Nadu by KSRTC?", hi: "क्या मैं KSRTC से गोवा या तमिलनाडु मुफ़्त जा सकती हूँ?" },
      a: {
        en: "No. Free travel is only for trips within Karnataka's borders.",
        hi: "नहीं। मुफ़्त सफ़र सिर्फ़ कर्नाटक की सीमा के अंदर की यात्रा के लिए है।",
      },
    },
  ],

  officialUrl: "https://sevasindhugs.karnataka.gov.in/",
  sources: [
    "https://sevasindhugs.karnataka.gov.in/",
    "https://ksrtc.karnataka.gov.in/",
    "https://www.deccanherald.com/india/karnataka/bengaluru/karnatakas-shakti-scheme-free-smart-cards-for-1-crore-women-soon-4135714",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
