import { everyone } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "poshan-anganwadi",
  name: { en: "Saksham Anganwadi and POSHAN 2.0 (Supplementary Nutrition)", hi: "सक्षम आंगनवाड़ी और पोषण 2.0 (पूरक पोषण)" },
  aka: ["POSHAN 2.0", "Anganwadi ration", "Take Home Ration", "THR", "ICDS"],
  shortDescription: {
    en: "Free nutritious food from your local anganwadi for children aged 6 months to 6 years, pregnant women and new mothers, along with health check-ups and pre-school.",
    hi: "6 महीने से 6 साल के बच्चों, गर्भवती महिलाओं और नई माताओं को पास की आंगनवाड़ी से मुफ़्त पौष्टिक खाना, साथ में स्वास्थ्य जाँच और प्री-स्कूल।",
  },
  level: "central",
  ministry: "women-child-development",
  categories: ["women-child", "health"],
  tags: ["anganwadi", "nutrition", "take home ration", "pregnant women", "mother", "child", "poshan"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: everyone(),

  details: {
    en: [
      "Mission Saksham Anganwadi and POSHAN 2.0 is the Ministry of Women and Child Development's main programme against malnutrition. It runs through about 14 lakh anganwadi centres across India, together with state governments.",
      "Under its Supplementary Nutrition Programme, young children, pregnant women and breastfeeding mothers get free food to fill gaps in their diet. Children aged 3 to 6 get a hot cooked meal at the anganwadi, while younger children, pregnant women and new mothers get a take-home ration. Adolescent girls aged 14 to 18 are covered in aspirational districts and the North-East.",
      "The anganwadi also gives pre-school education, nutrition and health advice, immunisation, health check-ups and referrals. Every beneficiary is registered on the Poshan Tracker app, and face authentication is used when take-home rations are handed out.",
    ],
    hi: [
      "मिशन सक्षम आंगनवाड़ी और पोषण 2.0 कुपोषण के ख़िलाफ़ महिला एवं बाल विकास मंत्रालय का मुख्य कार्यक्रम है। यह राज्य सरकारों के साथ मिलकर देश भर की लगभग 14 लाख आंगनवाड़ियों के ज़रिए चलता है।",
      "इसके पूरक पोषण कार्यक्रम में छोटे बच्चों, गर्भवती महिलाओं और स्तनपान कराने वाली माताओं को मुफ़्त खाना मिलता है ताकि भोजन की कमी पूरी हो। 3 से 6 साल के बच्चों को आंगनवाड़ी में गरम पका खाना मिलता है, जबकि छोटे बच्चों, गर्भवती महिलाओं और नई माताओं को घर ले जाने वाला राशन (THR) मिलता है। आकांक्षी ज़िलों और पूर्वोत्तर में 14 से 18 साल की किशोरियाँ भी शामिल हैं।",
      "आंगनवाड़ी प्री-स्कूल शिक्षा, पोषण और स्वास्थ्य सलाह, टीकाकरण, स्वास्थ्य जाँच और रेफ़रल भी देती है। हर लाभार्थी का नाम पोषण ट्रैकर ऐप पर दर्ज होता है, और घर ले जाने वाला राशन देते समय चेहरे से पहचान (फ़ेस ऑथेंटिकेशन) होती है।",
    ],
  },
  benefits: {
    en: [
      "Children 6 months to 3 years: free take-home ration every month.",
      "Children 3 to 6 years: hot cooked meal and a morning snack at the anganwadi, plus pre-school education.",
      "Pregnant women and breastfeeding mothers (up to 6 months after delivery): free take-home ration.",
      "Adolescent girls (14–18) in aspirational districts and the North-East: take-home ration.",
      "Growth monitoring, immunisation, health check-ups and referral to health centres.",
    ],
    hi: [
      "6 महीने से 3 साल के बच्चे: हर महीने मुफ़्त घर ले जाने वाला राशन।",
      "3 से 6 साल के बच्चे: आंगनवाड़ी में गरम पका खाना और सुबह का नाश्ता, साथ में प्री-स्कूल शिक्षा।",
      "गर्भवती महिलाएँ और स्तनपान कराने वाली माताएँ (प्रसव के 6 महीने तक): मुफ़्त घर ले जाने वाला राशन।",
      "आकांक्षी ज़िलों और पूर्वोत्तर की किशोरियाँ (14–18 साल): घर ले जाने वाला राशन।",
      "बच्चे की बढ़त की जाँच, टीकाकरण, स्वास्थ्य जाँच और स्वास्थ्य केंद्र में रेफ़रल।",
    ],
  },
  eligibilityText: {
    en: [
      "Children aged 6 months to 6 years.",
      "Pregnant women and mothers breastfeeding a baby up to 6 months old.",
      "Adolescent girls aged 14 to 18 in aspirational districts and North-Eastern states.",
      "You need to register at your nearest anganwadi centre; there is no income limit.",
    ],
    hi: [
      "6 महीने से 6 साल तक के बच्चे।",
      "गर्भवती महिलाएँ और 6 महीने तक के बच्चे को स्तनपान कराने वाली माताएँ।",
      "आकांक्षी ज़िलों और पूर्वोत्तर राज्यों की 14 से 18 साल की किशोरियाँ।",
      "पास की आंगनवाड़ी में पंजीकरण कराना होता है; कोई आय सीमा नहीं है।",
    ],
  },
  exclusions: {
    en: [
      "Children above 6 years (school-age children get meals under PM POSHAN instead).",
      "Women who are neither pregnant nor breastfeeding a baby under 6 months (except adolescent girls in covered areas).",
    ],
    hi: [
      "6 साल से बड़े बच्चे (स्कूल जाने वाले बच्चों को PM पोषण में खाना मिलता है)।",
      "जो महिलाएँ न गर्भवती हैं और न 6 महीने से छोटे बच्चे को स्तनपान करा रही हैं (शामिल इलाकों की किशोरियों को छोड़कर)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to the anganwadi centre in your village or ward.",
        "Ask the anganwadi worker to register you or your child.",
        "Collect the take-home ration or send your 3–6 year old child to the anganwadi for meals and pre-school.",
      ],
      hi: [
        "अपने गाँव या वार्ड की आंगनवाड़ी जाएँ।",
        "आंगनवाड़ी कार्यकर्ता से अपना या बच्चे का पंजीकरण करवाएँ।",
        "घर ले जाने वाला राशन लें, या 3–6 साल के बच्चे को खाने और प्री-स्कूल के लिए आंगनवाड़ी भेजें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar of the mother or child (or the parent's Aadhaar for a child)", "Mother and Child Protection (MCP) card, if available", "Child's birth certificate, if available", "Mobile number"],
    hi: ["माँ या बच्चे का आधार (बच्चे के लिए माता-पिता का आधार)", "माँ और बच्चा सुरक्षा (MCP) कार्ड, अगर हो", "बच्चे का जन्म प्रमाण पत्र, अगर हो", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Do I need to be poor or have a BPL card?", hi: "क्या इसके लिए गरीब होना या BPL कार्ड ज़रूरी है?" },
      a: {
        en: "No. Every child aged 6 months to 6 years and every pregnant or breastfeeding mother can register at the anganwadi, whatever the family's income.",
        hi: "नहीं। 6 महीने से 6 साल तक का हर बच्चा और हर गर्भवती या स्तनपान कराने वाली माँ आंगनवाड़ी में पंजीकरण करा सकती है, परिवार की आय चाहे जो हो।",
      },
    },
    {
      q: { en: "I moved to a new town. Can I get the ration there?", hi: "मैं नए शहर में आ गई हूँ। क्या वहाँ राशन मिलेगा?" },
      a: {
        en: "Yes. Ask the nearest anganwadi in your new area to register you. Carry your MCP card and Aadhaar so the worker can update your record.",
        hi: "हाँ। नए इलाके की पास की आंगनवाड़ी से पंजीकरण करने को कहें। अपना MCP कार्ड और आधार साथ ले जाएँ ताकि कार्यकर्ता आपका रिकॉर्ड अपडेट कर सके।",
      },
    },
  ],

  officialUrl: "https://wcd.gov.in/offerings/nutrition-mission-saksham-anganwadi-and-poshan-2-0-mission-saksham-anganwadi-poshan-2-0",
  sources: [
    "https://wcd.gov.in/offerings/nutrition-mission-saksham-anganwadi-and-poshan-2-0-mission-saksham-anganwadi-poshan-2-0",
    "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1847548",
    "https://poshantracker.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
