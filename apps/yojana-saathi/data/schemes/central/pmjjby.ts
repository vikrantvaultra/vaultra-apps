import { all, ageBetween } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pmjjby",
  name: { en: "Pradhan Mantri Jeevan Jyoti Bima Yojana", hi: "प्रधानमंत्री जीवन ज्योति बीमा योजना" },
  aka: ["PMJJBY", "Jeevan Jyoti Bima", "₹436 life insurance"],
  shortDescription: {
    en: "₹2 lakh life insurance for your family for just ₹436 a year, auto-debited from your bank or post office account. Join between 18 and 50.",
    hi: "सिर्फ़ ₹436 सालाना में आपके परिवार के लिए ₹2 लाख का जीवन बीमा, जो बैंक या डाकघर खाते से अपने-आप कटता है। 18 से 50 साल की उम्र में जुड़ें।",
  },
  level: "central",
  ministry: "finance",
  categories: ["pension-insurance"],
  tags: ["life insurance", "term insurance", "436", "jan suraksha", "bima", "death cover"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 200000, period: "yearly", kind: "cover" },
  ageRange: { min: 18, max: 50 },
  kundliHouse: "insurance",
  eligibility: all(...ageBetween(18, 50)),

  details: {
    en: [
      "PMJJBY is a one-year life insurance plan backed by the Government of India and renewed every year. If the insured person dies from any cause, the nominee gets ₹2 lakh.",
      "It is sold through banks and post offices with LIC and other insurance companies. The yearly premium of ₹436 is auto-debited from your account; the cover runs from 1 June to 31 May.",
      "You can join from 18 to 50 years of age. If you keep renewing, the cover continues until you turn 55. There is no medical test.",
    ],
    hi: [
      "PMJJBY भारत सरकार की एक साल की जीवन बीमा योजना है, जिसे हर साल रिन्यू किया जाता है। बीमित व्यक्ति की किसी भी कारण से मृत्यु होने पर नामांकित व्यक्ति को ₹2 लाख मिलते हैं।",
      "यह बैंकों और डाकघरों के ज़रिए LIC और दूसरी बीमा कंपनियों के साथ मिलती है। ₹436 का सालाना प्रीमियम आपके खाते से अपने-आप कटता है; बीमा 1 जून से 31 मई तक चलता है।",
      "18 से 50 साल की उम्र में जुड़ सकते हैं। हर साल रिन्यू करते रहें तो 55 साल की उम्र तक बीमा चलता रहता है। कोई मेडिकल जाँच नहीं होती।",
    ],
  },
  benefits: {
    en: [
      "₹2 lakh paid to your nominee if you die from any cause, including illness or accident.",
      "Premium of only ₹436 a year (about ₹1.20 a day).",
      "If you join in the middle of the year, you pay a lower, pro-rata premium.",
      "No medical examination needed to join.",
    ],
    hi: [
      "बीमारी या दुर्घटना समेत किसी भी कारण से मृत्यु होने पर नामांकित व्यक्ति को ₹2 लाख।",
      "प्रीमियम सिर्फ़ ₹436 सालाना (लगभग ₹1.20 रोज़)।",
      "साल के बीच में जुड़ने पर बचे महीनों के हिसाब से कम प्रीमियम लगता है।",
      "जुड़ने के लिए कोई मेडिकल जाँच नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 to 50 years when you join.",
      "Has a savings bank account or post office savings account.",
      "Gives consent for the yearly premium to be auto-debited.",
    ],
    hi: [
      "जुड़ते समय उम्र 18 से 50 साल हो।",
      "बैंक या डाकघर में बचत खाता हो।",
      "सालाना प्रीमियम अपने-आप कटने की सहमति दें।",
    ],
  },
  exclusions: {
    en: [
      "For first-time members, death from causes other than accident in the first 30 days after joining is not covered.",
      "Cover stops at age 55, or if the account is closed or lacks balance on the premium date.",
      "You get only ₹2 lakh in total, even if you are enrolled through more than one account.",
    ],
    hi: [
      "पहली बार जुड़ने वालों के लिए, जुड़ने के पहले 30 दिनों में दुर्घटना के अलावा किसी और कारण से मृत्यु पर दावा नहीं मिलता।",
      "55 साल की उम्र पर, या खाता बंद होने या प्रीमियम की तारीख पर पैसे न होने पर बीमा बंद हो जाता है।",
      "एक से ज़्यादा खातों से जुड़ने पर भी कुल ₹2 लाख ही मिलते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to your bank's internet banking or mobile app.",
        "Look for PMJJBY under 'Insurance' or 'Jan Suraksha / Social Security Schemes'.",
        "Add your nominee, confirm the auto-debit and save the certificate of insurance.",
      ],
      hi: [
        "अपने बैंक की इंटरनेट बैंकिंग या मोबाइल ऐप में लॉग इन करें।",
        "'बीमा' या 'जन सुरक्षा / सामाजिक सुरक्षा योजनाएँ' में PMJJBY चुनें।",
        "नामांकित व्यक्ति जोड़ें, ऑटो-डेबिट की पुष्टि करें और बीमा प्रमाणपत्र सेव करें।",
      ],
    },
    offline: {
      en: [
        "Download the PMJJBY form from jansuraksha.gov.in or collect it at your bank branch or post office.",
        "Fill in your account details and nominee, and sign the auto-debit consent.",
        "Submit the form and keep the acknowledgement slip cum certificate of insurance.",
      ],
      hi: [
        "jansuraksha.gov.in से PMJJBY फ़ॉर्म डाउनलोड करें या बैंक शाखा / डाकघर से लें।",
        "खाते का विवरण और नामांकित व्यक्ति भरें और ऑटो-डेबिट सहमति पर हस्ताक्षर करें।",
        "फ़ॉर्म जमा करें और पावती व बीमा प्रमाणपत्र संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Savings bank or post office account", "Aadhaar (for KYC)", "Nominee details", "Mobile number"],
    hi: ["बैंक या डाकघर बचत खाता", "आधार (KYC के लिए)", "नामांकित व्यक्ति का विवरण", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Is PMJJBY the same as PMSBY?", hi: "क्या PMJJBY और PMSBY एक ही हैं?" },
      a: {
        en: "No. PMJJBY (₹436 a year) pays ₹2 lakh on death from any cause. PMSBY (₹20 a year) covers only accidental death or disability. Many people take both.",
        hi: "नहीं। PMJJBY (₹436 सालाना) किसी भी कारण से मृत्यु पर ₹2 लाख देती है। PMSBY (₹20 सालाना) सिर्फ़ दुर्घटना में मृत्यु या विकलांगता को कवर करती है। कई लोग दोनों लेते हैं।",
      },
    },
    {
      q: { en: "How does my family claim the money?", hi: "मेरा परिवार पैसा कैसे क्लेम करेगा?" },
      a: {
        en: "The nominee submits the claim form with the death certificate and their bank details at the same bank branch or post office where the account was held.",
        hi: "नामांकित व्यक्ति उसी बैंक शाखा या डाकघर में, जहाँ खाता था, मृत्यु प्रमाणपत्र और अपने बैंक विवरण के साथ क्लेम फ़ॉर्म जमा करता है।",
      },
    },
  ],

  officialUrl: "https://www.jansuraksha.gov.in/",
  sources: [
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc202558551501.pdf",
    "https://www.jansuraksha.gov.in/",
    "https://www.myscheme.gov.in/schemes/pmjjby",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
