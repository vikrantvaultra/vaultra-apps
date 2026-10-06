import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "lakshadweep-utl-state-pension",
  tier: "compact",
  name: { en: "UTL State Pension Scheme (Lakshadweep)", hi: "यूटीएल राज्य पेंशन योजना (लक्षद्वीप)" },
  aka: ["UTL pension", "Lakshadweep old age pension", "Lakshadweep widow pension", "Lakshadweep disability pension"],
  shortDescription: {
    en: "Elderly people, widows, abandoned women and persons with disabilities in Lakshadweep get a monthly pension of ₹1,500 from the UT Administration.",
    hi: "लक्षद्वीप के बुज़ुर्गों, विधवाओं, छोड़ी गई महिलाओं और दिव्यांगजनों को केंद्र शासित प्रदेश प्रशासन से हर महीने ₹1,500 पेंशन।",
  },
  level: "state",
  state: "lakshadweep",
  department: {
    en: "Directorate of Social Welfare & Tribal Affairs, Lakshadweep Administration",
    hi: "समाज कल्याण एवं जनजातीय मामले निदेशालय, लक्षद्वीप प्रशासन",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "widow pension", "disability pension", "abandoned women", "pension", "lakshadweep"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "senior",
  eligibility: all(residentOf("lakshadweep")),

  details: {
    en: [
      "The UTL State Pension Scheme is the Lakshadweep Administration's own social security pension. It pays ₹1,500 a month to people in four groups: the elderly, widows, abandoned women and persons with disabilities. In May 2025 about 3,481 people were getting it.",
      "The Directorate of Social Welfare & Tribal Affairs sanctions the money every month, and the District Panchayat credits it to each beneficiary's bank account through PFMS. The exact age and income rules are not published online, so ask your Village (Dweep) Panchayat or the Directorate how to apply.",
    ],
    hi: [
      "यूटीएल राज्य पेंशन योजना लक्षद्वीप प्रशासन की अपनी सामाजिक सुरक्षा पेंशन है। इसमें चार तरह के लोगों को ₹1,500 महीना मिलता है: बुज़ुर्ग, विधवा, छोड़ी गई महिलाएँ और दिव्यांगजन। मई 2025 में लगभग 3,481 लोग इसका लाभ ले रहे थे।",
      "समाज कल्याण एवं जनजातीय मामले निदेशालय हर महीने पैसा मंज़ूर करता है, और ज़िला पंचायत PFMS के ज़रिए इसे हर लाभार्थी के बैंक खाते में डालती है। उम्र और आय के सही नियम ऑनलाइन नहीं छपे हैं, इसलिए आवेदन के बारे में अपनी ग्राम (द्वीप) पंचायत या निदेशालय से पूछें।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month.",
      "Paid into your bank account through PFMS.",
      "Covers four groups: old age, widows, abandoned women and persons with disabilities.",
    ],
    hi: [
      "हर महीने ₹1,500।",
      "पैसा PFMS के ज़रिए आपके बैंक खाते में।",
      "चार तरह के लोग: बुज़ुर्ग, विधवा, छोड़ी गई महिलाएँ और दिव्यांगजन।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of the Union Territory of Lakshadweep.",
      "Belongs to one of the covered groups: elderly, widow, abandoned woman, or person with a disability.",
      "Age, income and other conditions are set by the Directorate of Social Welfare & Tribal Affairs; check them before applying.",
    ],
    hi: [
      "लक्षद्वीप केंद्र शासित प्रदेश के निवासी।",
      "इनमें से किसी एक समूह में हों: बुज़ुर्ग, विधवा, छोड़ी गई महिला या दिव्यांग व्यक्ति।",
      "उम्र, आय और बाक़ी शर्तें समाज कल्याण एवं जनजातीय मामले निदेशालय तय करता है; आवेदन से पहले पता कर लें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your Village (Dweep) Panchayat office or the Directorate of Social Welfare & Tribal Affairs, Kavaratti (phone 04896-262314).",
        "Ask for the UTL pension form for your category and the list of documents.",
        "Submit the form with copies of your Aadhaar, bank passbook and category proof (age, death certificate or disability certificate).",
      ],
      hi: [
        "अपनी ग्राम (द्वीप) पंचायत के दफ़्तर या समाज कल्याण एवं जनजातीय मामले निदेशालय, कवरत्ती (फ़ोन 04896-262314) जाएँ।",
        "अपनी श्रेणी के लिए यूटीएल पेंशन का फ़ॉर्म और दस्तावेज़ों की सूची माँगें।",
        "फ़ॉर्म को आधार, बैंक पासबुक और श्रेणी के सबूत (उम्र, मृत्यु प्रमाण पत्र या दिव्यांगता प्रमाण पत्र) की कॉपी के साथ जमा करें।",
      ],
    },
  },

  officialUrl: "https://lakshadweep.gov.in/departments/social-welfare-and-tribal-affairs/",
  sources: [
    "https://lakshadweep.gov.in/departments/social-welfare-and-tribal-affairs/",
    "https://lakshadweep.gov.in/notice/sanction-order-utl-pension-for-the-month-of-february-2024-to-old-age-category/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
