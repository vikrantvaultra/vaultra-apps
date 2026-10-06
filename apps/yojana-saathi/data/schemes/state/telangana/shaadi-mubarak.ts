import { all, female, incomeUpTo, isTrue, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shaadi-mubarak",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Shaadi Mubarak", hi: "शादी मुबारक" },
  aka: ["Shadi Mubarak", "Telangana minority marriage assistance"],
  shortDescription: {
    en: "Telangana gives ₹1,00,116 as one-time help for the marriage of a minority community girl aged 18 or more from a family earning up to ₹2 lakh a year.",
    hi: "तेलंगाना सरकार अल्पसंख्यक समुदाय की 18 साल या उससे बड़ी लड़की की शादी पर ₹1,00,116 की एकमुश्त मदद देती है, अगर परिवार की सालाना आय ₹2 लाख तक हो।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Minorities Welfare Department, Government of Telangana",
    hi: "अल्पसंख्यक कल्याण विभाग, तेलंगाना सरकार",
  },
  categories: ["minority", "women-child"],
  tags: ["marriage", "shaadi mubarak", "minority", "muslim", "christian", "girl", "telangana"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 100116, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("telangana"),
    isTrue("minority"),
    labelled(female(), { en: "The bride applies (help is for the girl's marriage)", hi: "आवेदन दुल्हन के लिए है (मदद लड़की की शादी के लिए है)" }),
    labelled(minAge(18), { en: "Bride is 18 years or older", hi: "दुल्हन की उम्र 18 साल या ज़्यादा हो" }),
    incomeUpTo(200_000),
  ),

  details: {
    en: [
      "Shaadi Mubarak is the minority community version of Kalyana Lakshmi. It helps poor Muslim, Christian and other minority families with a daughter's marriage.",
      "The government pays ₹1,00,116 once, after the marriage is verified, into the bride's mother's bank account. It shares a 2026-27 budget of ₹3,683 crore with Kalyana Lakshmi.",
    ],
    hi: [
      "शादी मुबारक, कल्याण लक्ष्मी का अल्पसंख्यक समुदाय वाला रूप है। यह ग़रीब मुस्लिम, ईसाई और दूसरे अल्पसंख्यक परिवारों को बेटी की शादी में मदद करती है।",
      "शादी की जाँच के बाद सरकार एक बार ₹1,00,116 दुल्हन की माँ के बैंक खाते में देती है। 2026-27 में कल्याण लक्ष्मी के साथ इसका कुल बजट ₹3,683 करोड़ है।",
    ],
  },
  benefits: {
    en: ["One-time payment of ₹1,00,116 for the marriage.", "Paid by bank transfer to the bride's mother's account."],
    hi: ["शादी के लिए एक बार ₹1,00,116।", "पैसा बैंक ट्रांसफ़र से दुल्हन की माँ के खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "The bride lives in Telangana and belongs to a minority community.",
      "The bride is at least 18 years old at the time of marriage.",
      "Family income is up to ₹2 lakh a year.",
    ],
    hi: [
      "दुल्हन तेलंगाना में रहती है और अल्पसंख्यक समुदाय से है।",
      "शादी के समय दुल्हन की उम्र कम से कम 18 साल है।",
      "परिवार की सालाना आय ₹2 लाख तक है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to telanganaepass.cgg.gov.in and open 'Shaadi Mubarak'.",
        "Register, upload documents and add the bride's mother's bank details.",
        "Submit the printed application at your MRO / Tahsildar office for verification.",
      ],
      hi: [
        "telanganaepass.cgg.gov.in पर जाएँ और 'Shaadi Mubarak' खोलें।",
        "रजिस्टर करें, दस्तावेज़ अपलोड करें और दुल्हन की माँ के बैंक की जानकारी डालें।",
        "आवेदन का प्रिंट जाँच के लिए अपने MRO / तहसीलदार दफ़्तर में जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Bride's and groom's Aadhaar", "Community and income certificates", "Bride's age proof", "Marriage certificate or nikahnama", "Bride's mother's bank passbook"],
    hi: ["दुल्हन और दूल्हे का आधार", "समुदाय और आय प्रमाण पत्र", "दुल्हन की उम्र का सबूत", "विवाह प्रमाण पत्र या निकाहनामा", "दुल्हन की माँ की बैंक पासबुक"],
  },

  officialUrl: "https://telanganaepass.cgg.gov.in/",
  sources: [
    "https://telanganaepass.cgg.gov.in/KalyanaLakshmiLinks.do",
    "https://telanganaepass.cgg.gov.in/SchemesPolicies.do",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
