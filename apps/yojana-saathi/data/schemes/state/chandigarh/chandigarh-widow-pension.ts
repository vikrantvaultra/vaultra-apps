import { ageBetween, all, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chandigarh-widow-pension",
  tier: "full",
  overlapGroup: "widow-pension",
  name: { en: "Chandigarh Pension to Widows and Destitute Women", hi: "चंडीगढ़ विधवा एवं बेसहारा महिला पेंशन" },
  aka: ["Widow pension Chandigarh", "Vidhwa pension Chandigarh", "Destitute women pension Chandigarh"],
  shortDescription: {
    en: "Widows and destitute women aged 18 to 60 who have lived in Chandigarh for over 3 years, with family income up to ₹1.5 lakh a year, get ₹1,000 a month.",
    hi: "चंडीगढ़ में 3 साल से ज़्यादा समय से रह रहीं 18 से 60 साल की विधवा और बेसहारा महिलाओं को, जिनके परिवार की सालाना आय ₹1.5 लाख तक है, हर महीने ₹1,000।",
  },
  level: "state",
  state: "chandigarh",
  department: {
    en: "Department of Social Welfare, Women & Child Development, Chandigarh Administration",
    hi: "समाज कल्याण, महिला एवं बाल विकास विभाग, चंडीगढ़ प्रशासन",
  },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow pension", "vidhwa pension", "destitute women", "pension", "chandigarh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("chandigarh"),
    female(),
    labelled(when("marital", "in", ["widowed", "divorced", "separated"]), {
      en: "You are a widow or a destitute woman",
      hi: "आप विधवा या बेसहारा महिला हैं",
    }),
    ...ageBetween(18, 60),
    labelled(incomeUpTo(150_000), { en: "Family income is up to ₹1.5 lakh a year", hi: "परिवार की सालाना आय ₹1.5 लाख तक है" }),
  ),

  details: {
    en: [
      "This pension gives monthly support to widows and to destitute women in Chandigarh who come from low-income families.",
      "It is run by the Department of Social Welfare, Women & Child Development, Chandigarh Administration. The amount is ₹1,000 a month, paid into the woman's Aadhaar-seeded bank account.",
      "Women getting this pension can also apply for ₹1,000 a month for each of up to two children under 18, under the department's scheme for dependent children of widows.",
    ],
    hi: [
      "यह पेंशन चंडीगढ़ की उन विधवा और बेसहारा महिलाओं को हर महीने मदद देती है जो कम आय वाले परिवारों से हैं।",
      "इसे चंडीगढ़ प्रशासन का समाज कल्याण, महिला एवं बाल विकास विभाग चलाता है। राशि ₹1,000 महीना है, जो महिला के आधार से जुड़े बैंक खाते में आती है।",
      "यह पेंशन पाने वाली महिलाएँ विभाग की 'विधवाओं के आश्रित बच्चों' वाली योजना में 18 साल से कम उम्र के दो बच्चों तक के लिए हर बच्चे पर ₹1,000 महीना भी माँग सकती हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month.",
      "Paid directly into your Aadhaar-seeded bank account.",
      "Opens the door to ₹1,000 a month per child (up to two children) under the linked children's scheme.",
    ],
    hi: [
      "हर महीने ₹1,000।",
      "पैसा सीधे आपके आधार से जुड़े बैंक खाते में।",
      "जुड़ी हुई बच्चों वाली योजना में हर बच्चे (दो तक) के लिए ₹1,000 महीना पाने का रास्ता खुलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A widow or destitute woman aged 18 to 60.",
      "Has lived in Chandigarh for more than 3 years.",
      "Family income is not more than ₹1.5 lakh a year.",
    ],
    hi: [
      "18 से 60 साल की विधवा या बेसहारा महिला।",
      "3 साल से ज़्यादा समय से चंडीगढ़ में रह रही हो।",
      "परिवार की सालाना आय ₹1.5 लाख से ज़्यादा न हो।",
    ],
  },
  exclusions: {
    en: [
      "Women older than 60 or younger than 18.",
      "Women whose family income is above ₹1.5 lakh a year.",
    ],
    hi: [
      "60 साल से ज़्यादा या 18 साल से कम उम्र की महिलाएँ।",
      "जिनके परिवार की सालाना आय ₹1.5 लाख से ज़्यादा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Chandigarh e-District portal (chdservices.gov.in) and log in as a citizen.",
        "Choose 'Sanction of Pension for Widow' under Social Welfare services.",
        "Fill in the form, upload the documents and submit. Keep the application number.",
      ],
      hi: [
        "चंडीगढ़ ई-डिस्ट्रिक्ट पोर्टल (chdservices.gov.in) पर जाएँ और नागरिक के रूप में लॉग इन करें।",
        "समाज कल्याण सेवाओं में 'Sanction of Pension for Widow' चुनें।",
        "फ़ॉर्म भरें, दस्तावेज़ अपलोड करें और जमा करें। आवेदन नंबर संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "Download the widow pension form (English or Hindi) from chdsw.gov.in, or collect it from the department.",
        "Attach self-attested copies of the documents.",
        "Submit it at the Department of Social Welfare, Additional Town Hall Building, Sector 17-C, Chandigarh.",
      ],
      hi: [
        "chdsw.gov.in से विधवा पेंशन का फ़ॉर्म (अंग्रेज़ी या हिंदी) डाउनलोड करें, या विभाग से लें।",
        "दस्तावेज़ों की स्व-प्रमाणित कॉपी लगाएँ।",
        "इसे समाज कल्याण विभाग, एडिशनल टाउन हॉल बिल्डिंग, सेक्टर 17-C, चंडीगढ़ में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Proof of 3 years' residence (voter card, ration card, electricity bill or similar)",
      "Husband's death certificate (for widows)",
      "Aadhaar card",
      "Mobile number",
    ],
    hi: [
      "3 साल से रहने का सबूत (वोटर कार्ड, राशन कार्ड, बिजली का बिल या ऐसा कोई कागज़)",
      "पति का मृत्यु प्रमाण पत्र (विधवा के लिए)",
      "आधार कार्ड",
      "मोबाइल नंबर",
    ],
  },
  faqs: [
    {
      q: { en: "What happens when I turn 60?", hi: "60 साल की होने पर क्या होगा?" },
      a: {
        en: "This scheme is for women aged 18 to 60. Once you are 60, you can apply for the Chandigarh Old Age Pension, which also pays ₹1,000 a month.",
        hi: "यह योजना 18 से 60 साल की महिलाओं के लिए है। 60 की होने पर आप चंडीगढ़ वृद्धावस्था पेंशन के लिए आवेदन कर सकती हैं, जिसमें भी ₹1,000 महीना मिलता है।",
      },
    },
    {
      q: { en: "Can my children get help too?", hi: "क्या मेरे बच्चों को भी मदद मिल सकती है?" },
      a: {
        en: "Yes. If you get this pension, up to two of your children under 18 can get ₹1,000 a month each under the department's scheme for dependent children of widows and destitute women.",
        hi: "हाँ। अगर आपको यह पेंशन मिलती है, तो विभाग की 'विधवा और बेसहारा महिलाओं के आश्रित बच्चों' वाली योजना में आपके 18 साल से कम उम्र के दो बच्चों तक को हर बच्चे पर ₹1,000 महीना मिल सकता है।",
      },
    },
  ],

  officialUrl: "https://chdsw.gov.in/index.php/scheme/pension-to-widows-and-destitute-women",
  sources: [
    "https://chdsw.gov.in/index.php/scheme/pension-to-widows-and-destitute-women",
    "https://chdservices.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
