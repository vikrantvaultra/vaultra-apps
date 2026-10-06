import { all, labelled, incomeUpTo, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-tirth-darshan-yojana-maharashtra",
  tier: "compact",
  name: { en: "Mukhyamantri Tirth Darshan Yojana (Maharashtra)", hi: "मुख्यमंत्री तीर्थ दर्शन योजना (महाराष्ट्र)" },
  aka: ["Teerth Darshan Yojana", "free pilgrimage seniors Maharashtra"],
  shortDescription: {
    en: "Senior citizens of Maharashtra aged 60 or more with family income up to ₹2.5 lakh can go on a one-time pilgrimage paid for by the state, up to ₹30,000 per person.",
    hi: "महाराष्ट्र के 60 साल या उससे ज़्यादा उम्र के बुज़ुर्ग, जिनके परिवार की आय ₹2.5 लाख तक है, राज्य के ख़र्च पर एक बार तीर्थ यात्रा कर सकते हैं, प्रति व्यक्ति ₹30,000 तक।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Social Justice and Special Assistance Department, Government of Maharashtra",
    hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार",
  },
  categories: ["social-welfare"],
  tags: ["pilgrimage", "tirth yatra", "senior citizen", "free travel", "religious"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("maharashtra"),
    minAge(60),
    labelled(incomeUpTo(250_000), { en: "Family income up to ₹2.5 lakh a year", hi: "परिवार की सालाना आय ₹2.5 लाख तक" }),
  ),

  details: {
    en: [
      "Under this scheme, launched in 2024, the state takes senior citizens of all religions on a pilgrimage to one of 139 listed places, 66 in Maharashtra and 73 elsewhere in India.",
      "Travel, stay and food are arranged and paid for by the government, up to ₹30,000 per person. Travellers go in groups, and people are chosen by lottery from the applications in each district.",
    ],
    hi: [
      "2024 में शुरू हुई इस योजना में राज्य सरकार सभी धर्मों के बुज़ुर्गों को 139 तय स्थानों में से किसी एक की तीर्थ यात्रा कराती है, जिनमें 66 महाराष्ट्र में और 73 देश के दूसरे हिस्सों में हैं।",
      "यात्रा, ठहरने और खाने का इंतज़ाम और ख़र्च सरकार उठाती है, प्रति व्यक्ति ₹30,000 तक। यात्री समूहों में जाते हैं, और हर ज़िले में आए आवेदनों में से लॉटरी से चुने जाते हैं।",
    ],
  },
  benefits: {
    en: [
      "A one-time pilgrimage with travel, stay and food paid by the state, up to ₹30,000 per person.",
      "Choice of one place from the official list of 139 pilgrimage sites.",
      "Applicants above 75 can take their spouse or a helper along.",
    ],
    hi: [
      "एक बार की तीर्थ यात्रा, जिसमें यात्रा, ठहरना और खाना राज्य के ख़र्च पर, प्रति व्यक्ति ₹30,000 तक।",
      "139 तीर्थ स्थानों की सरकारी सूची में से एक जगह चुनने का मौक़ा।",
      "75 साल से ज़्यादा उम्र के आवेदक अपने जीवनसाथी या एक सहायक को साथ ले जा सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Maharashtra aged 60 or more.",
      "Annual family income up to ₹2.5 lakh.",
      "Physically and mentally fit to travel.",
    ],
    hi: [
      "60 साल या उससे ज़्यादा उम्र के महाराष्ट्र के निवासी।",
      "परिवार की सालाना आय ₹2.5 लाख तक।",
      "यात्रा के लिए शारीरिक और मानसिक रूप से स्वस्थ हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When the district invites applications, fill in the form online (the link is shared by the district Social Welfare office) or through a Setu centre.",
        "Upload your Aadhaar, age proof, income certificate and a medical fitness certificate.",
        "Selected people are informed after the lottery, with the travel date and group details.",
      ],
      hi: [
        "जब ज़िला आवेदन माँगे, तब ऑनलाइन फ़ॉर्म भरें (लिंक ज़िला समाज कल्याण कार्यालय देता है) या सेतु केंद्र से भरवाएँ।",
        "आधार, उम्र का प्रमाण, आय प्रमाण पत्र और मेडिकल फ़िटनेस प्रमाण पत्र अपलोड करें।",
        "लॉटरी के बाद चुने गए लोगों को यात्रा की तारीख़ और समूह की जानकारी दी जाती है।",
      ],
    },
  },

  officialUrl: "https://sjsa.maharashtra.gov.in/",
  sources: [
    "https://sjsa.maharashtra.gov.in/",
    "https://www.freepressjournal.in/amp/mumbai/maharashtra-govt-launches-mukhyamantri-tirth-darshan-yojana-free-pilgrimage-for-senior-citizens",
    "https://retirement.outlookindia.com/plan/news/free-pilgrimage-for-seniors-maharashtra-govt-lists-popular-sites-under-teerth-darshan-scheme",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
