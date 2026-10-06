import { all, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "senior-citizens-savings-scheme",
  name: { en: "Senior Citizens Savings Scheme", hi: "वरिष्ठ नागरिक बचत योजना" },
  aka: ["SCSS"],
  shortDescription: {
    en: "A safe, government-backed deposit for people aged 60+ (and some early retirees): invest up to ₹30 lakh for 5 years and get interest paid every quarter.",
    hi: "60 साल से ऊपर के लोगों (और कुछ जल्दी रिटायर होने वालों) के लिए सरकार की गारंटी वाली सुरक्षित जमा योजना: 5 साल के लिए ₹30 लाख तक जमा करें और हर तिमाही ब्याज पाएँ।",
  },
  level: "central",
  ministry: "finance",
  categories: ["energy-savings", "pension-insurance"],
  tags: ["senior citizen", "savings", "fixed deposit", "post office", "retirement", "interest income"],
  benefitType: "savings",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "retirement",
  eligibility: all(minAge(60)),

  details: {
    en: [
      "The Senior Citizens Savings Scheme is a small savings scheme of the Government of India for people who have retired or are 60 and above. Your money is backed by the government, so it is very safe.",
      "You deposit a lump sum once, between ₹1,000 and ₹30 lakh, for 5 years. Interest is paid every quarter into your savings account, which gives a steady income. The rate is fixed by the government each quarter; it was 8.2% a year for October to December 2026, and your account keeps the rate that applied on the day you opened it.",
      "You can open the account at any post office or at authorised banks. After 5 years you can extend it for another 3 years, and you can extend more than once.",
    ],
    hi: [
      "वरिष्ठ नागरिक बचत योजना भारत सरकार की एक लघु बचत योजना है, जो रिटायर हो चुके या 60 साल से ऊपर के लोगों के लिए है। आपके पैसे के पीछे सरकार की गारंटी होती है, इसलिए यह बहुत सुरक्षित है।",
      "आप एक बार में ₹1,000 से ₹30 लाख तक की राशि 5 साल के लिए जमा करते हैं। ब्याज हर तिमाही आपके बचत खाते में आता है, जिससे नियमित आमदनी होती है। ब्याज दर सरकार हर तिमाही तय करती है; अक्टूबर से दिसंबर 2026 के लिए यह 8.2% सालाना थी, और खाता खोलने के दिन जो दर थी वही पूरी अवधि चलती है।",
      "खाता किसी भी डाकघर या अधिकृत बैंक में खुलता है। 5 साल बाद इसे 3 साल और बढ़ा सकते हैं, और एक से ज़्यादा बार भी बढ़ा सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Government-backed, so your money is safe.",
      "Interest paid every quarter (8.2% a year for accounts opened in October to December 2026).",
      "Deposits qualify for a tax deduction under Section 80C (old tax regime).",
      "Can be extended in blocks of 3 years after maturity.",
    ],
    hi: [
      "सरकार की गारंटी, इसलिए पैसा सुरक्षित।",
      "हर तिमाही ब्याज (अक्टूबर से दिसंबर 2026 में खुले खातों पर 8.2% सालाना)।",
      "जमा राशि पर धारा 80C के तहत कर छूट (पुरानी कर व्यवस्था में)।",
      "परिपक्वता के बाद 3-3 साल के लिए बढ़ाया जा सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian residents aged 60 or above.",
      "Civilian retirees aged 55 to 60 who retired on superannuation or took voluntary retirement, if they invest within one month of receiving retirement benefits (only up to the amount of those benefits).",
      "Retired defence personnel aged 50 to 60, under the same one-month condition.",
      "You can open it alone or jointly with your spouse only.",
    ],
    hi: [
      "60 साल या उससे अधिक उम्र के भारतीय निवासी।",
      "55 से 60 साल के असैनिक कर्मचारी जो सेवानिवृत्ति आयु पर या स्वैच्छिक रूप से रिटायर हुए हैं, अगर वे रिटायरमेंट लाभ मिलने के एक महीने के भीतर निवेश करें (सिर्फ़ उन लाभों की राशि तक)।",
      "50 से 60 साल के रिटायर रक्षा कर्मी, इसी एक महीने की शर्त पर।",
      "खाता अकेले या सिर्फ़ जीवनसाथी के साथ संयुक्त रूप से खुल सकता है।",
    ],
  },
  exclusions: {
    en: [
      "NRIs and Hindu Undivided Families (HUFs) cannot open an account.",
      "Interest is taxable, and tax may be deducted at source above the yearly limit.",
      "Closing early costs you: before 1 year the interest paid is taken back, and after that a penalty is deducted from the deposit.",
    ],
    hi: [
      "NRI और हिंदू अविभाजित परिवार (HUF) खाता नहीं खोल सकते।",
      "ब्याज पर कर लगता है, और तय सालाना सीमा से ऊपर स्रोत पर कर (TDS) कट सकता है।",
      "समय से पहले बंद करने पर नुकसान: 1 साल से पहले दिया गया ब्याज वापस ले लिया जाता है, और उसके बाद जमा राशि से जुर्माना कटता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "If your bank offers SCSS online, log in to internet banking.",
        "Find SCSS under deposits or government schemes, enter the amount and nominee.",
        "Confirm the deposit from your savings account and save the account details.",
      ],
      hi: [
        "अगर आपका बैंक SCSS ऑनलाइन देता है, तो इंटरनेट बैंकिंग में लॉग इन करें।",
        "जमा या सरकारी योजनाओं में SCSS चुनें, राशि और नामांकित व्यक्ति भरें।",
        "बचत खाते से जमा की पुष्टि करें और खाते का विवरण संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "Visit any post office or an authorised bank branch.",
        "Fill in the SCSS account opening form with nominee details.",
        "Submit it with KYC documents and the deposit (cheque or from your account; cash only up to ₹1 lakh).",
      ],
      hi: [
        "किसी भी डाकघर या अधिकृत बैंक शाखा में जाएँ।",
        "नामांकित व्यक्ति की जानकारी के साथ SCSS खाता खोलने का फ़ॉर्म भरें।",
        "KYC दस्तावेज़ों और जमा राशि (चेक या खाते से; नकद सिर्फ़ ₹1 लाख तक) के साथ जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "PAN card", "Age proof", "Passport-size photographs", "Retirement benefit proof (for those aged 50/55 to 60)"],
    hi: ["आधार कार्ड", "पैन कार्ड", "उम्र का प्रमाण", "पासपोर्ट साइज़ फ़ोटो", "रिटायरमेंट लाभ का प्रमाण (50/55 से 60 साल वालों के लिए)"],
  },
  faqs: [
    {
      q: { en: "Will my interest rate change every quarter?", hi: "क्या मेरी ब्याज दर हर तिमाही बदलेगी?" },
      a: {
        en: "No. The rate on the day you open the account stays fixed for its 5-year term. Only new accounts get the newly announced rate.",
        hi: "नहीं। खाता खोलने के दिन की दर पूरे 5 साल तक तय रहती है। नई घोषित दर सिर्फ़ नए खातों पर लागू होती है।",
      },
    },
    {
      q: { en: "Can I have more than one SCSS account?", hi: "क्या मेरे एक से ज़्यादा SCSS खाते हो सकते हैं?" },
      a: {
        en: "Yes, but the total across all your accounts cannot be more than ₹30 lakh.",
        hi: "हाँ, लेकिन सभी खातों को मिलाकर कुल राशि ₹30 लाख से ज़्यादा नहीं हो सकती।",
      },
    },
  ],

  officialUrl: "https://www.indiapost.gov.in/",
  sources: [
    "https://www.nsiindia.gov.in/",
    "https://www.indiapost.gov.in/",
    "https://www.businesstoday.in/personal-finance/story/small-savings-scheme-interest-rates-unchanged-for-q3-fy27-check-ppf-scss-ssy-rates-558892-2026-09-30",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2004,
  status: "active",
};

export default scheme;
