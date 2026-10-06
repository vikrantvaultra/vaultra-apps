import { all, incomeUpTo, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-old-age-pension",
  overlapGroup: "old-age-pension",
  name: { en: "Kerala Old Age Pension (Social Security Pension)", hi: "केरल वृद्धावस्था पेंशन (सामाजिक सुरक्षा पेंशन)" },
  aka: ["Kerala welfare pension", "kshema pension", "Sevana pension", "vardhakya pension", "Kerala social security pension"],
  shortDescription: {
    en: "People in Kerala aged 60 or above from families earning up to ₹1 lakh a year get a pension of ₹2,000 every month.",
    hi: "केरल में 60 साल या उससे ज़्यादा उम्र के लोगों को, जिनके परिवार की सालाना आय ₹1 लाख तक है, हर महीने ₹2,000 पेंशन मिलती है।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Local Self Government Department, Government of Kerala (through panchayats, municipalities and corporations)",
    hi: "स्थानीय स्वशासन विभाग, केरल सरकार (पंचायत, नगरपालिका और नगर निगम के ज़रिए)",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "welfare pension", "senior citizen", "kshema pension", "sevana", "kerala"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("kerala"), minAge(60), incomeUpTo(100_000)),

  details: {
    en: [
      "Kerala pays a monthly social security pension (often called the welfare or 'kshema' pension) to elderly people from low-income families. It is one of the state's largest welfare programmes, reaching about 62 lakh people across all pension types.",
      "The amount was raised from ₹1,600 to ₹2,000 a month from November 2025, and that rate continues. The central old age pension share (IGNOAPS) is included in this amount, and the rest is paid by the state.",
      "Applications are made to your own gram panchayat, municipality or corporation, and the pension is paid into your bank account or handed over at home. All records are kept on the Sevana pension portal.",
    ],
    hi: [
      "केरल कम आय वाले परिवारों के बुज़ुर्गों को हर महीने सामाजिक सुरक्षा पेंशन देता है (इसे कल्याण पेंशन या 'क्षेम' पेंशन भी कहते हैं)। यह राज्य के सबसे बड़े कल्याण कार्यक्रमों में से एक है, जिसमें सभी तरह की पेंशन मिलाकर लगभग 62 लाख लोग शामिल हैं।",
      "नवंबर 2025 से राशि ₹1,600 से बढ़ाकर ₹2,000 महीना कर दी गई, और यही दर जारी है। केंद्र की वृद्धावस्था पेंशन (IGNOAPS) का हिस्सा भी इसी राशि में शामिल है, बाक़ी पैसा राज्य देता है।",
      "आवेदन अपनी ग्राम पंचायत, नगरपालिका या नगर निगम में किया जाता है, और पेंशन बैंक खाते में या घर पर दी जाती है। सारा रिकॉर्ड सेवना पेंशन पोर्टल पर रहता है।",
    ],
  },
  benefits: {
    en: [
      "₹2,000 every month for life.",
      "Paid into your bank account, or delivered at home if you choose.",
      "That adds up to ₹24,000 a year.",
    ],
    hi: [
      "जीवन भर हर महीने ₹2,000।",
      "पैसा आपके बैंक खाते में आता है, या चाहें तो घर पर दिया जाता है।",
      "साल भर में कुल ₹24,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 60 years or above.",
      "Total family income is up to ₹1 lakh a year.",
      "Living in Kerala for more than 3 years, and applying in the local body where you live.",
      "Not getting a service or family pension from a government or public sector job (an ex-gratia or NPS pension up to ₹4,000 is allowed).",
      "Does not pay income tax.",
    ],
    hi: [
      "उम्र 60 साल या उससे ज़्यादा।",
      "परिवार की कुल सालाना आय ₹1 लाख तक।",
      "3 साल से ज़्यादा समय से केरल में रह रहे हों, और जहाँ रहते हैं उसी स्थानीय निकाय में आवेदन करें।",
      "किसी सरकारी या सरकारी उपक्रम की नौकरी से सर्विस पेंशन या फ़ैमिली पेंशन न मिलती हो (₹4,000 तक की एक्स-ग्रेशिया या NPS पेंशन चल सकती है)।",
      "आयकर न देते हों।",
    ],
  },
  exclusions: {
    en: [
      "You or your family own more than 2 acres of land (this rule does not apply to Scheduled Tribe applicants).",
      "Anyone in the family owns a non-taxi four-wheeler with an engine above 1,000 cc.",
      "You live in, or own, a modern-floored concrete house larger than 2,000 sq ft.",
      "You already get another social security pension (only one is allowed, except for persons with disabilities).",
      "You live in a care home (agathi mandiram) or are a beggar.",
    ],
    hi: [
      "आपके या परिवार के नाम पर 2 एकड़ से ज़्यादा ज़मीन हो (अनुसूचित जनजाति के आवेदकों पर यह नियम लागू नहीं)।",
      "परिवार में किसी के पास 1,000 cc से ज़्यादा इंजन वाली, टैक्सी के अलावा कोई चार पहिया गाड़ी हो।",
      "आप 2,000 वर्ग फ़ुट से बड़े, आधुनिक फ़र्श वाले कंक्रीट के मकान के मालिक हों या उसमें रहते हों।",
      "आपको पहले से कोई दूसरी सामाजिक सुरक्षा पेंशन मिलती हो (एक ही मिल सकती है, दिव्यांगों को छोड़कर)।",
      "आप किसी आश्रय गृह (अगति मंदिरम) में रहते हों या भिक्षा माँगते हों।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the pension application form from your gram panchayat, municipality or corporation office (or from the Sevana pension website).",
        "Fill it in and attach proof of age, income certificate, Aadhaar and bank details.",
        "Submit it to the secretary of the local body where you live. A decision should be made within 45 days.",
        "If it is rejected, you can appeal to the District Collector within 30 days.",
      ],
      hi: [
        "पेंशन आवेदन फ़ॉर्म अपनी ग्राम पंचायत, नगरपालिका या नगर निगम कार्यालय से (या सेवना पेंशन वेबसाइट से) लें।",
        "फ़ॉर्म भरें और उम्र का सबूत, आय प्रमाण पत्र, आधार और बैंक विवरण लगाएँ।",
        "जहाँ आप रहते हैं, उस स्थानीय निकाय के सचिव को जमा करें। 45 दिन के अंदर फ़ैसला होना चाहिए।",
        "आवेदन ख़ारिज होने पर 30 दिन के अंदर ज़िला कलेक्टर के पास अपील कर सकते हैं।",
      ],
    },
  },
  documents: {
    en: ["Proof of age (birth certificate, school certificate or similar)", "Income certificate from the Village Officer", "Aadhaar card", "Bank passbook", "Ration card"],
    hi: ["उम्र का सबूत (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या ऐसा कोई दस्तावेज़)", "विलेज ऑफ़िसर से आय प्रमाण पत्र", "आधार कार्ड", "बैंक पासबुक", "राशन कार्ड"],
  },
  faqs: [
    {
      q: { en: "Has the new government changed the pension amount?", hi: "क्या नई सरकार ने पेंशन की राशि बदली है?" },
      a: {
        en: "No. The pension is still ₹2,000 a month, the rate paid since November 2025. Payments have continued, including an early release before Onam 2026.",
        hi: "नहीं। पेंशन अभी भी ₹2,000 महीना है, जो नवंबर 2025 से मिल रही है। भुगतान जारी है, ओणम 2026 से पहले भी पेंशन जल्दी दी गई।",
      },
    },
    {
      q: { en: "Do I need to do anything every year?", hi: "क्या हर साल कुछ करना होता है?" },
      a: {
        en: "Yes. Pensioners must complete the annual verification (mustering) with Aadhaar at an Akshaya centre or as told by the local body. If you miss it, your pension can be held back.",
        hi: "हाँ। पेंशनभोगियों को हर साल आधार से सत्यापन (मस्टरिंग) अक्षय केंद्र पर या स्थानीय निकाय के बताए तरीक़े से करवाना होता है। ऐसा न करने पर पेंशन रुक सकती है।",
      },
    },
  ],

  officialUrl: "https://welfarepension.lsgkerala.gov.in/",
  sources: [
    "https://welfarepension.lsgkerala.gov.in/FAQs.aspx",
    "https://welfarepension.lsgkerala.gov.in/Schemes.aspx",
    "https://budget.kerala.gov.in/build/budget_speech/2026/2026Eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
