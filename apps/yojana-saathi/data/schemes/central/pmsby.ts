import { all, ageBetween } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pmsby",
  name: { en: "Pradhan Mantri Suraksha Bima Yojana", hi: "प्रधानमंत्री सुरक्षा बीमा योजना" },
  aka: ["PMSBY", "Suraksha Bima", "₹20 accident insurance"],
  shortDescription: {
    en: "₹2 lakh accident insurance for just ₹20 a year, auto-debited from your bank or post office account. Open to everyone aged 18 to 70.",
    hi: "सिर्फ़ ₹20 सालाना में ₹2 लाख का दुर्घटना बीमा, जो बैंक या डाकघर खाते से अपने-आप कटता है। 18 से 70 साल के सभी लोगों के लिए।",
  },
  level: "central",
  ministry: "finance",
  categories: ["pension-insurance"],
  tags: ["accident insurance", "20 rupees", "jan suraksha", "bima", "disability cover"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 200000, period: "yearly", kind: "cover" },
  ageRange: { min: 18, max: 70 },
  kundliHouse: "insurance",
  eligibility: all(...ageBetween(18, 70)),

  details: {
    en: [
      "PMSBY is a one-year accident insurance plan backed by the Government of India, renewed every year. It pays if you die or become disabled because of an accident.",
      "It is offered by public and private insurance companies through banks and post offices. The premium is ₹20 a year, auto-debited from your account on or before 1 June; the cover runs from 1 June to 31 May.",
    ],
    hi: [
      "PMSBY भारत सरकार की एक साल की दुर्घटना बीमा योजना है, जिसे हर साल रिन्यू किया जाता है। दुर्घटना में मृत्यु या विकलांगता होने पर पैसा मिलता है।",
      "यह सरकारी और निजी बीमा कंपनियाँ बैंकों और डाकघरों के ज़रिए देती हैं। प्रीमियम ₹20 सालाना है, जो 1 जून या उससे पहले खाते से अपने-आप कटता है; बीमा 1 जून से 31 मई तक चलता है।",
    ],
  },
  benefits: {
    en: [
      "₹2 lakh to the nominee if you die in an accident.",
      "₹2 lakh for total permanent disability, such as loss of both eyes, both hands or both feet.",
      "₹1 lakh for partial permanent disability, such as loss of one eye, one hand or one foot.",
      "Premium of only ₹20 a year.",
    ],
    hi: [
      "दुर्घटना में मृत्यु होने पर नामांकित व्यक्ति को ₹2 लाख।",
      "पूरी स्थायी विकलांगता, जैसे दोनों आँखें, दोनों हाथ या दोनों पैर खोने पर ₹2 लाख।",
      "आंशिक स्थायी विकलांगता, जैसे एक आँख, एक हाथ या एक पैर खोने पर ₹1 लाख।",
      "प्रीमियम सिर्फ़ ₹20 सालाना।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 to 70 years.",
      "Has a savings bank account or post office savings account.",
      "Gives consent for the yearly premium to be auto-debited.",
    ],
    hi: [
      "उम्र 18 से 70 साल हो।",
      "बैंक या डाकघर में बचत खाता हो।",
      "सालाना प्रीमियम अपने-आप कटने की सहमति दें।",
    ],
  },
  exclusions: {
    en: [
      "Death from illness or natural causes is not covered (that is what PMJJBY is for).",
      "Cover stops at age 70, or if the account is closed or lacks balance on the premium date.",
      "You get at most ₹2 lakh in total, even if enrolled through more than one account.",
    ],
    hi: [
      "बीमारी या स्वाभाविक मृत्यु कवर नहीं होती (उसके लिए PMJJBY है)।",
      "70 साल की उम्र पर, या खाता बंद होने या प्रीमियम की तारीख पर पैसे न होने पर बीमा बंद हो जाता है।",
      "एक से ज़्यादा खातों से जुड़ने पर भी कुल अधिकतम ₹2 लाख ही मिलते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to your bank's internet banking or mobile app.",
        "Look for PMSBY under 'Insurance' or 'Jan Suraksha / Social Security Schemes'.",
        "Add your nominee, confirm the ₹20 auto-debit and save the certificate.",
      ],
      hi: [
        "अपने बैंक की इंटरनेट बैंकिंग या मोबाइल ऐप में लॉग इन करें।",
        "'बीमा' या 'जन सुरक्षा / सामाजिक सुरक्षा योजनाएँ' में PMSBY चुनें।",
        "नामांकित व्यक्ति जोड़ें, ₹20 ऑटो-डेबिट की पुष्टि करें और प्रमाणपत्र सेव करें।",
      ],
    },
    offline: {
      en: [
        "Download the PMSBY form from jansuraksha.gov.in or collect it at your bank branch or post office.",
        "Fill in your account details and nominee, and sign the auto-debit consent.",
        "Submit it and keep the acknowledgement slip cum certificate of insurance.",
      ],
      hi: [
        "jansuraksha.gov.in से PMSBY फ़ॉर्म डाउनलोड करें या बैंक शाखा / डाकघर से लें।",
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
      q: { en: "Does the cover renew on its own?", hi: "क्या बीमा अपने-आप रिन्यू होता है?" },
      a: {
        en: "Yes, as long as you gave auto-debit consent and keep at least ₹20 in the account around 1 June each year.",
        hi: "हाँ, अगर आपने ऑटो-डेबिट की सहमति दी है और हर साल 1 जून के आसपास खाते में कम से कम ₹20 रखते हैं।",
      },
    },
    {
      q: { en: "What is needed to claim?", hi: "क्लेम के लिए क्या चाहिए?" },
      a: {
        en: "The claim form, the FIR or police report of the accident, and the death certificate or a disability certificate from a doctor, submitted at your bank or post office.",
        hi: "क्लेम फ़ॉर्म, दुर्घटना की FIR या पुलिस रिपोर्ट, और मृत्यु प्रमाणपत्र या डॉक्टर का विकलांगता प्रमाणपत्र, जो बैंक या डाकघर में जमा होते हैं।",
      },
    },
  ],

  officialUrl: "https://www.jansuraksha.gov.in/",
  sources: [
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc202558551401.pdf",
    "https://www.jansuraksha.gov.in/",
    "https://www.myscheme.gov.in/schemes/pmsby",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
