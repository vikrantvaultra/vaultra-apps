import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-ujjwala-free-lpg-refill",
  tier: "compact",
  name: { en: "Free LPG Refills for Ujjwala Beneficiaries (Uttar Pradesh)", hi: "उज्ज्वला लाभार्थियों को मुफ़्त LPG रीफ़िल (उत्तर प्रदेश)" },
  aka: ["UP free cylinder", "Holi Diwali free cylinder", "Ujjwala free refill UP"],
  shortDescription: {
    en: "Women in Uttar Pradesh with a PM Ujjwala gas connection get two free LPG refills a year, around Holi and Diwali. The refill cost is credited back to their bank account.",
    hi: "उत्तर प्रदेश में PM उज्ज्वला गैस कनेक्शन वाली महिलाओं को साल में दो मुफ़्त LPG रीफ़िल मिलते हैं, होली और दिवाली के आसपास। रीफ़िल का पैसा बैंक खाते में वापस आता है।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Food and Civil Supplies Department, Government of Uttar Pradesh",
    hi: "खाद्य एवं रसद विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["energy-savings", "women-child"],
  tags: ["lpg", "free cylinder", "ujjwala", "gas", "holi", "diwali", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "energy-savings",
  eligibility: all(
    residentOf("uttar-pradesh"),
    female(),
  ),

  details: {
    en: [
      "Uttar Pradesh pays for two LPG refills a year for women who have a gas connection under the central PM Ujjwala Yojana. About 1.86 crore families in the state have Ujjwala connections.",
      "You buy a 14.2 kg cylinder at the normal price, and the state credits the cost to your Aadhaar-linked bank account within a few days. In 2025-26 the refills were given in two rounds, October to December and January to March.",
    ],
    hi: [
      "उत्तर प्रदेश सरकार उन महिलाओं के लिए साल में दो LPG रीफ़िल का पैसा देती है जिनके पास केंद्र की PM उज्ज्वला योजना का गैस कनेक्शन है। राज्य में लगभग 1.86 करोड़ परिवारों के पास उज्ज्वला कनेक्शन है।",
      "आप 14.2 किलो का सिलेंडर सामान्य दाम पर ख़रीदती हैं, और राज्य कुछ दिनों में उसका पैसा आपके आधार से जुड़े बैंक खाते में भेज देता है। 2025-26 में रीफ़िल दो दौर में दिए गए, अक्टूबर से दिसंबर और जनवरी से मार्च।",
    ],
  },
  benefits: {
    en: ["Two free 14.2 kg LPG refills a year.", "Full refill cost credited back to your bank account."],
    hi: ["साल में 14.2 किलो के दो मुफ़्त LPG रीफ़िल।", "रीफ़िल का पूरा पैसा बैंक खाते में वापस।"],
  },
  eligibilityText: {
    en: [
      "A woman in Uttar Pradesh with a gas connection under PM Ujjwala Yojana.",
      "Aadhaar must be verified (e-KYC done) with your gas agency.",
      "Bank account linked to Aadhaar.",
    ],
    hi: [
      "उत्तर प्रदेश की वह महिला जिसके पास PM उज्ज्वला योजना का गैस कनेक्शन हो।",
      "गैस एजेंसी में आधार सत्यापन (e-KYC) हो चुका हो।",
      "बैंक खाता आधार से जुड़ा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate form is needed. Make sure your Aadhaar e-KYC is done at your gas agency.",
        "Book and buy your refill during the announced period at the normal price.",
        "The refill amount is credited to your Aadhaar-linked bank account in a few days.",
      ],
      hi: [
        "अलग से कोई फ़ॉर्म नहीं भरना है। बस अपनी गैस एजेंसी में आधार e-KYC पूरी करवा लें।",
        "घोषित समय में सामान्य दाम पर रीफ़िल बुक करके लें।",
        "रीफ़िल का पैसा कुछ दिनों में आपके आधार से जुड़े बैंक खाते में आ जाएगा।",
      ],
    },
  },

  officialUrl: "https://fcs.up.gov.in/",
  sources: [
    "https://www.newsonair.gov.in/cm-yogi-adityanath-announces-two-free-lpg-refills-for-ujjwala-beneficiaries-in-up",
    "https://www.drishtiias.com/state-pcs-current-affairs/pmuy-beneficiaries-to-get-free-lpg-refills/print_manually",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
