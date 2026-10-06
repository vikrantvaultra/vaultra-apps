import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-free-bus-travel-women",
  tier: "compact",
  name: { en: "Zero-Ticket Free Bus Travel for Women (Jammu & Kashmir)", hi: "महिलाओं के लिए ज़ीरो-टिकट मुफ़्त बस यात्रा (जम्मू-कश्मीर)" },
  aka: ["Zero Ticket Travel", "free bus for women JK", "JKRTC free travel"],
  shortDescription: {
    en: "Women and schoolgirls travel free in all JKRTC buses and Smart City e-buses across Jammu & Kashmir by showing their Aadhaar card.",
    hi: "जम्मू-कश्मीर में महिलाएँ और स्कूली लड़कियाँ आधार कार्ड दिखाकर JKRTC की सभी बसों और स्मार्ट सिटी ई-बसों में मुफ़्त सफ़र करती हैं।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Transport Department, Government of Jammu and Kashmir", hi: "परिवहन विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["free bus", "women", "travel", "jkrtc", "e-bus", "jammu kashmir"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("jammu-kashmir"), female()),

  details: {
    en: [
      "Since 1 April 2025, women in Jammu & Kashmir ride free in government buses under the Zero-Ticket Travel initiative. It covers all J&K Road Transport Corporation (JKRTC) buses and the Smart City electric buses in Srinagar and Jammu, and includes schoolgirls.",
      "The scheme is paid for from the UT's own budget, which compensates JKRTC and the Smart City bus services. In the 2026-27 budget the government said it would extend free rides to persons with disabilities as well.",
    ],
    hi: [
      "1 अप्रैल 2025 से ज़ीरो-टिकट ट्रैवल पहल के तहत जम्मू-कश्मीर की महिलाएँ सरकारी बसों में मुफ़्त सफ़र करती हैं। इसमें जम्मू-कश्मीर सड़क परिवहन निगम (JKRTC) की सभी बसें और श्रीनगर व जम्मू की स्मार्ट सिटी इलेक्ट्रिक बसें शामिल हैं, और स्कूली लड़कियाँ भी।",
      "इसका ख़र्च UT अपने बजट से उठाता है और JKRTC व स्मार्ट सिटी बस सेवाओं को भरपाई करता है। 2026-27 के बजट में सरकार ने कहा कि दिव्यांगजनों को भी मुफ़्त सफ़र दिया जाएगा।",
    ],
  },
  benefits: {
    en: [
      "Free travel in all JKRTC buses.",
      "Free travel in Smart City electric buses.",
      "Covers working women, college students, schoolgirls and other daily commuters.",
    ],
    hi: [
      "JKRTC की सभी बसों में मुफ़्त सफ़र।",
      "स्मार्ट सिटी इलेक्ट्रिक बसों में मुफ़्त सफ़र।",
      "कामकाजी महिलाएँ, कॉलेज छात्राएँ, स्कूली लड़कियाँ और रोज़ सफ़र करने वाली दूसरी महिलाएँ सब शामिल।",
    ],
  },
  eligibilityText: {
    en: [
      "Women and girls travelling in government-run buses (JKRTC and Smart City e-buses) in Jammu & Kashmir.",
      "Must show an Aadhaar card to the conductor.",
      "Private buses, minibuses and taxis are not covered.",
    ],
    hi: [
      "जम्मू-कश्मीर में सरकारी बसों (JKRTC और स्मार्ट सिटी ई-बसें) में सफ़र करने वाली महिलाएँ और लड़कियाँ।",
      "कंडक्टर को आधार कार्ड दिखाना होगा।",
      "निजी बसें, मिनी बसें और टैक्सियाँ इसमें शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No registration is needed.",
        "Board any JKRTC bus or Smart City e-bus and show your Aadhaar card to the conductor.",
        "The conductor records your trip on a POS machine and gives you a zero-value ticket.",
      ],
      hi: [
        "कोई रजिस्ट्रेशन ज़रूरी नहीं।",
        "किसी भी JKRTC बस या स्मार्ट सिटी ई-बस में चढ़ें और कंडक्टर को आधार कार्ड दिखाएँ।",
        "कंडक्टर POS मशीन पर आपकी यात्रा दर्ज करके शून्य राशि का टिकट देता है।",
      ],
    },
  },

  officialUrl: "https://dipr.jk.gov.in/Prnv?n=17023",
  sources: ["https://dipr.jk.gov.in/Prnv?n=17023", "https://dipr.jk.gov.in/Prnv?n=17029", "https://dipr.jk.gov.in/Prnv?n=24037"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
