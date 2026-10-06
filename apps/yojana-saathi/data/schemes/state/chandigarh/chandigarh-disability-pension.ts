import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chandigarh-disability-pension",
  tier: "full",
  overlapGroup: "disability-pension",
  name: { en: "Chandigarh Pension to Disabled Persons", hi: "चंडीगढ़ दिव्यांग पेंशन" },
  aka: ["Disability pension Chandigarh", "Divyang pension Chandigarh", "Handicapped pension Chandigarh"],
  shortDescription: {
    en: "Persons with 40% or more disability who have lived in Chandigarh for over 3 years, with family income up to ₹1.5 lakh, get ₹1,000 a month (₹2,000 above 70% disability).",
    hi: "चंडीगढ़ में 3 साल से ज़्यादा समय से रह रहे 40% या ज़्यादा दिव्यांगता वाले लोगों को, जिनके परिवार की आय ₹1.5 लाख तक है, हर महीने ₹1,000 (70% से ज़्यादा पर ₹2,000)।",
  },
  level: "state",
  state: "chandigarh",
  department: {
    en: "Department of Social Welfare, Women & Child Development, Chandigarh Administration",
    hi: "समाज कल्याण, महिला एवं बाल विकास विभाग, चंडीगढ़ प्रशासन",
  },
  categories: ["disability", "social-welfare", "pension-insurance"],
  tags: ["disability pension", "divyang", "handicapped", "pension", "chandigarh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("chandigarh"),
    isTrue("disabled"),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "40% या उससे ज़्यादा दिव्यांगता" }),
    labelled(incomeUpTo(150_000), { en: "Family income is up to ₹1.5 lakh a year", hi: "परिवार की सालाना आय ₹1.5 लाख तक है" }),
  ),

  details: {
    en: [
      "The Chandigarh Administration pays a monthly pension to residents with a disability of 40% or more who come from low-income families.",
      "The amount depends on the level of disability: ₹1,000 a month for 40% to 70%, and ₹2,000 a month for more than 70%. It is paid into the pensioner's Aadhaar-seeded bank account.",
      "The scheme is run by the Department of Social Welfare, Women & Child Development. You can apply online on the Chandigarh e-District portal or with a paper form at the department.",
    ],
    hi: [
      "चंडीगढ़ प्रशासन कम आय वाले परिवारों के 40% या उससे ज़्यादा दिव्यांगता वाले निवासियों को हर महीने पेंशन देता है।",
      "राशि दिव्यांगता के स्तर पर निर्भर है: 40% से 70% तक ₹1,000 महीना, और 70% से ज़्यादा पर ₹2,000 महीना। पैसा पेंशनभोगी के आधार से जुड़े बैंक खाते में आता है।",
      "यह योजना समाज कल्याण, महिला एवं बाल विकास विभाग चलाता है। आप चंडीगढ़ ई-डिस्ट्रिक्ट पोर्टल पर ऑनलाइन या विभाग में काग़ज़ी फ़ॉर्म से आवेदन कर सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month for 40% to 70% disability.",
      "₹2,000 a month for disability above 70%.",
      "Paid directly into your Aadhaar-seeded bank account.",
    ],
    hi: [
      "40% से 70% दिव्यांगता पर ₹1,000 महीना।",
      "70% से ज़्यादा दिव्यांगता पर ₹2,000 महीना।",
      "पैसा सीधे आपके आधार से जुड़े बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Has a disability of 40% or more, shown on a disability certificate.",
      "Has lived in Chandigarh for more than 3 years.",
      "Family income is not more than ₹1.5 lakh a year.",
    ],
    hi: [
      "40% या उससे ज़्यादा दिव्यांगता हो, जो दिव्यांगता प्रमाण पत्र में लिखी हो।",
      "3 साल से ज़्यादा समय से चंडीगढ़ में रह रहे हों।",
      "परिवार की सालाना आय ₹1.5 लाख से ज़्यादा न हो।",
    ],
  },
  exclusions: {
    en: [
      "People with less than 40% disability.",
      "People whose family income is above ₹1.5 lakh a year.",
    ],
    hi: [
      "40% से कम दिव्यांगता वाले लोग।",
      "जिनके परिवार की सालाना आय ₹1.5 लाख से ज़्यादा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Chandigarh e-District portal (chdservices.gov.in) and log in as a citizen.",
        "Choose 'Sanction of Pension for Disabled' under Social Welfare services.",
        "Fill in the form, upload the documents and submit. Keep the application number.",
      ],
      hi: [
        "चंडीगढ़ ई-डिस्ट्रिक्ट पोर्टल (chdservices.gov.in) पर जाएँ और नागरिक के रूप में लॉग इन करें।",
        "समाज कल्याण सेवाओं में 'Sanction of Pension for Disabled' चुनें।",
        "फ़ॉर्म भरें, दस्तावेज़ अपलोड करें और जमा करें। आवेदन नंबर संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "Download the disabled pension form (English or Hindi) from chdsw.gov.in, or collect it from the department.",
        "Attach self-attested copies of the documents and two photos.",
        "Submit it at the Department of Social Welfare, Additional Town Hall Building, Sector 17-C, Chandigarh.",
      ],
      hi: [
        "chdsw.gov.in से दिव्यांग पेंशन का फ़ॉर्म (अंग्रेज़ी या हिंदी) डाउनलोड करें, या विभाग से लें।",
        "दस्तावेज़ों की स्व-प्रमाणित कॉपी और दो फ़ोटो लगाएँ।",
        "इसे समाज कल्याण विभाग, एडिशनल टाउन हॉल बिल्डिंग, सेक्टर 17-C, चंडीगढ़ में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Two passport-size photos",
      "Disability certificate showing 40% or more",
      "Aadhaar card",
      "Proof of 3 years' residence (voter card, ration card, electricity bill or similar)",
    ],
    hi: [
      "दो पासपोर्ट साइज़ फ़ोटो",
      "40% या ज़्यादा दिव्यांगता दिखाने वाला प्रमाण पत्र",
      "आधार कार्ड",
      "3 साल से रहने का सबूत (वोटर कार्ड, राशन कार्ड, बिजली का बिल या ऐसा कोई कागज़)",
    ],
  },
  faqs: [
    {
      q: { en: "How do I get the higher ₹2,000 rate?", hi: "₹2,000 वाली ऊँची दर कैसे मिलेगी?" },
      a: {
        en: "The higher rate is for disability above 70%. Your disability certificate (or UDID card) must show the percentage, so make sure it is up to date.",
        hi: "ऊँची दर 70% से ज़्यादा दिव्यांगता के लिए है। आपके दिव्यांगता प्रमाण पत्र (या UDID कार्ड) में प्रतिशत लिखा होना चाहिए, इसलिए देख लें कि वह नया और सही हो।",
      },
    },
    {
      q: { en: "Is there an age limit?", hi: "क्या उम्र की कोई सीमा है?" },
      a: {
        en: "The department's scheme page does not list an age limit. It only asks for 40% disability, 3 years' residence and the income limit.",
        hi: "विभाग के योजना पेज पर उम्र की कोई सीमा नहीं लिखी है। वहाँ सिर्फ़ 40% दिव्यांगता, 3 साल रहने और आय सीमा की शर्त है।",
      },
    },
  ],

  officialUrl: "https://chdsw.gov.in/index.php/scheme/pension-to-the-disabled-persons",
  sources: [
    "https://chdsw.gov.in/index.php/scheme/pension-to-the-disabled-persons",
    "https://chdservices.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
