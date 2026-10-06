import { all, female, incomeUpTo, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kalyana-lakshmi",
  overlapGroup: "marriage-assistance",
  name: { en: "Kalyana Lakshmi", hi: "कल्याण लक्ष्मी" },
  aka: ["Kalyana Lakshmi Pathakam", "Kalyana Laxmi", "Telangana marriage assistance"],
  shortDescription: {
    en: "Telangana gives ₹1,00,116 as one-time help for the marriage of an SC, ST, BC or EBC girl aged 18 or more from a family earning up to ₹2 lakh a year.",
    hi: "तेलंगाना सरकार SC, ST, BC या EBC परिवार की 18 साल या उससे बड़ी लड़की की शादी पर ₹1,00,116 की एकमुश्त मदद देती है, अगर परिवार की सालाना आय ₹2 लाख तक हो।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "SC Development, Tribal Welfare and BC Welfare Departments, Government of Telangana",
    hi: "SC विकास, आदिवासी कल्याण और BC कल्याण विभाग, तेलंगाना सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "kalyana lakshmi", "girl", "wedding", "sc", "st", "bc", "telangana"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 100116, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("telangana"),
    labelled(female(), { en: "The bride applies (help is for the girl's marriage)", hi: "आवेदन दुल्हन के लिए है (मदद लड़की की शादी के लिए है)" }),
    labelled(minAge(18), { en: "Bride is 18 years or older", hi: "दुल्हन की उम्र 18 साल या ज़्यादा हो" }),
    labelled(incomeUpTo(200_000), { en: "Family income up to ₹2 lakh a year (₹1.5 lakh for rural BC/EBC)", hi: "परिवार की सालाना आय ₹2 लाख तक (गाँव के BC/EBC के लिए ₹1.5 लाख)" }),
  ),

  details: {
    en: [
      "Kalyana Lakshmi helps poor families with the cost of a daughter's marriage. It covers SC, ST, BC and EBC (economically backward) families. Minority families get the same help under Shaadi Mubarak.",
      "The government pays ₹1,00,116 once, after the marriage is verified. The money is now paid to the bride's mother's bank account. The scheme also covers inter-caste marriages.",
      "Kalyana Lakshmi and Shaadi Mubarak together have a budget of ₹3,683 crore in 2026-27, and the government says it is continuing both schemes.",
    ],
    hi: [
      "कल्याण लक्ष्मी ग़रीब परिवारों को बेटी की शादी के ख़र्च में मदद देती है। इसमें SC, ST, BC और EBC (आर्थिक रूप से पिछड़े) परिवार आते हैं। अल्पसंख्यक परिवारों को यही मदद शादी मुबारक योजना में मिलती है।",
      "शादी की जाँच के बाद सरकार एक बार ₹1,00,116 देती है। यह पैसा अब दुल्हन की माँ के बैंक खाते में आता है। अंतरजातीय शादियाँ भी इसमें शामिल हैं।",
      "2026-27 में कल्याण लक्ष्मी और शादी मुबारक का कुल बजट ₹3,683 करोड़ है, और सरकार ने दोनों योजनाएँ जारी रखने की बात कही है।",
    ],
  },
  benefits: {
    en: ["One-time payment of ₹1,00,116 for the marriage.", "Paid by bank transfer to the bride's mother's account."],
    hi: ["शादी के लिए एक बार ₹1,00,116।", "पैसा बैंक ट्रांसफ़र से दुल्हन की माँ के खाते में आता है।"],
  },
  eligibilityText: {
    en: [
      "The bride lives in Telangana and belongs to an SC, ST, BC or EBC family.",
      "The bride is at least 18 years old at the time of marriage.",
      "Family income limit: SC and ST ₹2 lakh a year; BC/EBC ₹2 lakh in towns and ₹1.5 lakh in villages.",
      "Apply after the marriage, with the marriage details and documents.",
    ],
    hi: [
      "दुल्हन तेलंगाना में रहती है और SC, ST, BC या EBC परिवार से है।",
      "शादी के समय दुल्हन की उम्र कम से कम 18 साल है।",
      "परिवार की आय सीमा: SC और ST ₹2 लाख सालाना; BC/EBC शहर में ₹2 लाख और गाँव में ₹1.5 लाख।",
      "शादी के बाद, शादी के विवरण और दस्तावेज़ों के साथ आवेदन करें।",
    ],
  },
  exclusions: {
    en: ["Brides under 18.", "Families above the income limit.", "Minority families apply under Shaadi Mubarak instead."],
    hi: ["18 साल से कम उम्र की दुल्हन।", "आय सीमा से ज़्यादा कमाने वाले परिवार।", "अल्पसंख्यक परिवार इसकी जगह शादी मुबारक में आवेदन करते हैं।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to telanganaepass.cgg.gov.in and open 'Kalyana Lakshmi'.",
        "Register the application, upload documents and add the bride's mother's bank account details.",
        "Print the application and submit it with copies to your MRO / Tahsildar office for verification.",
      ],
      hi: [
        "telanganaepass.cgg.gov.in पर जाएँ और 'Kalyana Lakshmi' खोलें।",
        "आवेदन रजिस्टर करें, दस्तावेज़ अपलोड करें और दुल्हन की माँ के बैंक खाते की जानकारी डालें।",
        "आवेदन का प्रिंट निकालें और कॉपियों के साथ जाँच के लिए अपने MRO / तहसीलदार दफ़्तर में जमा करें।",
      ],
    },
    offline: {
      en: ["You can also apply through a MeeSeva centre, which uploads the form for you."],
      hi: ["आप MeeSeva केंद्र से भी आवेदन कर सकते हैं, वे आपका फ़ॉर्म अपलोड कर देंगे।"],
    },
  },
  documents: {
    en: [
      "Bride's and groom's Aadhaar",
      "Caste certificate",
      "Income certificate",
      "Bride's age proof (birth or school certificate)",
      "Marriage photo and marriage certificate or wedding card",
      "Bride's mother's bank passbook",
    ],
    hi: [
      "दुल्हन और दूल्हे का आधार",
      "जाति प्रमाण पत्र",
      "आय प्रमाण पत्र",
      "दुल्हन की उम्र का सबूत (जन्म या स्कूल प्रमाण पत्र)",
      "शादी की फ़ोटो और विवाह प्रमाण पत्र या शादी का कार्ड",
      "दुल्हन की माँ की बैंक पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "Was the promised tola of gold added?", hi: "क्या वादे के मुताबिक़ एक तोला सोना जोड़ा गया?" },
      a: {
        en: "We could not find an official order adding gold to the scheme. The cash help of ₹1,00,116 continues.",
        hi: "योजना में सोना जोड़ने का कोई सरकारी आदेश हमें नहीं मिला। ₹1,00,116 की नकद मदद जारी है।",
      },
    },
    {
      q: { en: "Whose bank account gets the money?", hi: "पैसा किसके बैंक खाते में आता है?" },
      a: {
        en: "The bride's mother's account, as per the latest government order. Update these details using the 'Edit' link on the ePASS portal.",
        hi: "नए सरकारी आदेश के अनुसार दुल्हन की माँ के खाते में। यह जानकारी ePASS पोर्टल पर 'Edit' लिंक से अपडेट करें।",
      },
    },
  ],

  officialUrl: "https://telanganaepass.cgg.gov.in/",
  sources: [
    "https://telanganaepass.cgg.gov.in/KalyanaLakshmiLinks.do",
    "https://telanganaepass.cgg.gov.in/SchemesPolicies.do",
    "https://www.telangana.gov.in/wp-content/uploads/2024/07/Telangana-Socio-Economic-Outlook-2024.pdf",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
