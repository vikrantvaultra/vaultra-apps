import { all, incomeUpTo, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chandigarh-old-age-pension",
  tier: "full",
  overlapGroup: "old-age-pension",
  name: { en: "Chandigarh Old Age Pension", hi: "चंडीगढ़ वृद्धावस्था पेंशन" },
  aka: ["Old age pension Chandigarh", "Budhapa pension Chandigarh", "Senior citizen pension Chandigarh"],
  shortDescription: {
    en: "People aged 60 or more who have lived in Chandigarh for over 3 years, with family income up to ₹1.5 lakh a year, get ₹1,000 a month.",
    hi: "चंडीगढ़ में 3 साल से ज़्यादा समय से रह रहे 60 साल या उससे ज़्यादा उम्र के लोगों को, जिनके परिवार की सालाना आय ₹1.5 लाख तक है, हर महीने ₹1,000।",
  },
  level: "state",
  state: "chandigarh",
  department: {
    en: "Department of Social Welfare, Women & Child Development, Chandigarh Administration",
    hi: "समाज कल्याण, महिला एवं बाल विकास विभाग, चंडीगढ़ प्रशासन",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "senior citizen", "budhapa pension", "pension", "chandigarh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("chandigarh"),
    minAge(60),
    labelled(incomeUpTo(150_000), { en: "Family income is up to ₹1.5 lakh a year", hi: "परिवार की सालाना आय ₹1.5 लाख तक है" }),
  ),

  details: {
    en: [
      "The Chandigarh Administration pays a monthly pension to elderly residents from low-income families so they have some money of their own for daily needs.",
      "The scheme is run by the Department of Social Welfare, Women & Child Development. The pension is ₹1,000 a month and is paid every month into the pensioner's Aadhaar-seeded bank account.",
      "You can apply online through the Chandigarh e-District portal, where old age pension has been an online service since 2017.",
    ],
    hi: [
      "चंडीगढ़ प्रशासन कम आय वाले परिवारों के बुज़ुर्ग निवासियों को हर महीने पेंशन देता है, ताकि रोज़ की ज़रूरतों के लिए उनके पास अपना कुछ पैसा रहे।",
      "यह योजना समाज कल्याण, महिला एवं बाल विकास विभाग चलाता है। पेंशन ₹1,000 महीना है, जो हर महीने पेंशनभोगी के आधार से जुड़े बैंक खाते में आती है।",
      "आप चंडीगढ़ ई-डिस्ट्रिक्ट पोर्टल से ऑनलाइन आवेदन कर सकते हैं। वृद्धावस्था पेंशन 2017 से वहाँ ऑनलाइन सेवा के रूप में मौजूद है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month.",
      "Paid straight into your Aadhaar-seeded bank account.",
      "Continues for life as long as you stay eligible.",
    ],
    hi: [
      "हर महीने ₹1,000।",
      "पैसा सीधे आपके आधार से जुड़े बैंक खाते में।",
      "जब तक आप पात्र हैं, जीवन भर मिलती रहती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 60 years or more.",
      "Has lived in Chandigarh for more than 3 years.",
      "Family income is not more than ₹1.5 lakh a year.",
    ],
    hi: [
      "उम्र 60 साल या उससे ज़्यादा।",
      "3 साल से ज़्यादा समय से चंडीगढ़ में रह रहे हों।",
      "परिवार की सालाना आय ₹1.5 लाख से ज़्यादा न हो।",
    ],
  },
  exclusions: {
    en: [
      "People whose family income is above ₹1.5 lakh a year.",
      "People who have lived in Chandigarh for 3 years or less.",
    ],
    hi: [
      "जिनके परिवार की सालाना आय ₹1.5 लाख से ज़्यादा है।",
      "जो 3 साल या उससे कम समय से चंडीगढ़ में रह रहे हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Chandigarh e-District portal (chdservices.gov.in) and log in as a citizen.",
        "Choose 'Sanction of Pension for Old Age' under Social Welfare services.",
        "Fill in the form, upload the documents and submit. Keep the application number to track it.",
      ],
      hi: [
        "चंडीगढ़ ई-डिस्ट्रिक्ट पोर्टल (chdservices.gov.in) पर जाएँ और नागरिक के रूप में लॉग इन करें।",
        "समाज कल्याण सेवाओं में 'Sanction of Pension for Old Age' चुनें।",
        "फ़ॉर्म भरें, दस्तावेज़ अपलोड करें और जमा करें। स्थिति देखने के लिए आवेदन नंबर संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "Download the old age pension form (English or Hindi) from chdsw.gov.in, or collect it from the department.",
        "Attach self-attested copies of the documents and two photos.",
        "Submit it at the Department of Social Welfare, Additional Town Hall Building, Sector 17-C, Chandigarh.",
      ],
      hi: [
        "chdsw.gov.in से वृद्धावस्था पेंशन का फ़ॉर्म (अंग्रेज़ी या हिंदी) डाउनलोड करें, या विभाग से लें।",
        "दस्तावेज़ों की स्व-प्रमाणित कॉपी और दो फ़ोटो लगाएँ।",
        "इसे समाज कल्याण विभाग, एडिशनल टाउन हॉल बिल्डिंग, सेक्टर 17-C, चंडीगढ़ में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Two passport-size photos",
      "Proof of 3 years' residence (voter card, ration card, electricity bill or similar)",
      "Aadhaar card",
      "Mobile number",
    ],
    hi: [
      "दो पासपोर्ट साइज़ फ़ोटो",
      "3 साल से रहने का सबूत (वोटर कार्ड, राशन कार्ड, बिजली का बिल या ऐसा कोई कागज़)",
      "आधार कार्ड",
      "मोबाइल नंबर",
    ],
  },
  faqs: [
    {
      q: { en: "How is the pension paid?", hi: "पेंशन कैसे मिलती है?" },
      a: {
        en: "Every month, directly into your bank account that is linked (seeded) with Aadhaar. Make sure the seeding is done at your bank.",
        hi: "हर महीने सीधे आपके उस बैंक खाते में जो आधार से जुड़ा (सीडेड) है। बैंक में आधार सीडिंग ज़रूर करवा लें।",
      },
    },
    {
      q: { en: "Do I need to give a life certificate?", hi: "क्या जीवन प्रमाण पत्र देना होता है?" },
      a: {
        en: "Pensioners may be asked to confirm they are alive. The department's website has a 'Life Certificate' page for social security pensioners. Ask the department if you are unsure when yours is due.",
        hi: "पेंशनभोगियों से जीवित होने की पुष्टि माँगी जा सकती है। विभाग की वेबसाइट पर सामाजिक सुरक्षा पेंशन के लिए 'Life Certificate' पेज है। कब देना है, यह पक्का न हो तो विभाग से पूछ लें।",
      },
    },
  ],

  officialUrl: "https://chdsw.gov.in/index.php/scheme/old-age-pension",
  sources: [
    "https://chdsw.gov.in/index.php/scheme/old-age-pension",
    "https://chdservices.gov.in/",
    "https://chdsw.gov.in/index.php/life_certificate",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
