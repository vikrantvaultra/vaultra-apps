import { all, labelled, minAge, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-vridhjan-pension-yojana",
  tier: "full",
  overlapGroup: "old-age-pension",
  name: { en: "Mukhyamantri Vridhjan Pension Yojana", hi: "मुख्यमंत्री वृद्धजन पेंशन योजना" },
  aka: ["MVPY", "Bihar old age pension", "Vridha pension Bihar"],
  shortDescription: {
    en: "Every Bihar resident aged 60 or above who gets no government salary or pension can get ₹1,100 a month as old-age pension, whatever their income.",
    hi: "बिहार के 60 साल या उससे ज़्यादा उम्र के हर निवासी को, जिसे सरकारी वेतन या पेंशन नहीं मिलती, आमदनी चाहे जो हो, हर महीने ₹1,100 वृद्धावस्था पेंशन मिल सकती है।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Social Welfare Department, Government of Bihar", hi: "समाज कल्याण विभाग, बिहार सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "vridha pension", "1100", "monthly pension", "bihar"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1100, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("bihar"),
    minAge(60),
    labelled(notGovtEmployee(), { en: "You get no government salary or pension", hi: "आपको कोई सरकारी वेतन या पेंशन नहीं मिलती" }),
  ),

  details: {
    en: [
      "Mukhyamantri Vridhjan Pension Yojana is Bihar's own old-age pension. It started in 2019 to cover every elderly person in the state, not just poor families.",
      "From June 2025 the pension was raised from ₹400 to ₹1,100 a month. The money is sent by DBT to the pensioner's bank account, usually by the 10th of each month.",
      "The Social Welfare Department runs the scheme through the Directorate of Social Security. Elderly people who already get the central Indira Gandhi old-age pension are paid under that scheme instead, also at ₹1,100 in Bihar.",
    ],
    hi: [
      "मुख्यमंत्री वृद्धजन पेंशन योजना बिहार सरकार की अपनी वृद्धावस्था पेंशन है। यह 2019 में शुरू हुई ताकि सिर्फ़ गरीब परिवार ही नहीं, राज्य के हर बुज़ुर्ग को पेंशन मिले।",
      "जून 2025 से पेंशन ₹400 से बढ़ाकर ₹1,100 महीना कर दी गई। पैसा DBT से पेंशनधारी के बैंक खाते में आता है, आमतौर पर हर महीने की 10 तारीख तक।",
      "समाज कल्याण विभाग यह योजना सामाजिक सुरक्षा निदेशालय के ज़रिए चलाता है। जिन बुज़ुर्गों को केंद्र की इंदिरा गांधी वृद्धावस्था पेंशन मिलती है, उन्हें उसी योजना से पैसा मिलता है, बिहार में वह भी ₹1,100 है।",
    ],
  },
  benefits: {
    en: [
      "₹1,100 every month for life.",
      "That is ₹13,200 a year.",
      "Paid by DBT straight into your bank account.",
      "No income limit: elderly people from every income group can apply.",
    ],
    hi: [
      "जीवन भर हर महीने ₹1,100।",
      "यानी साल में ₹13,200।",
      "पैसा DBT से सीधे आपके बैंक खाते में आता है।",
      "आय की कोई सीमा नहीं: हर आय वर्ग के बुज़ुर्ग आवेदन कर सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Bihar.",
      "Aged 60 years or more.",
      "Any income group.",
      "Not getting any salary, pension or family pension from the central or state government, and not getting another social security pension.",
    ],
    hi: [
      "बिहार के स्थायी निवासी।",
      "उम्र 60 साल या उससे ज़्यादा।",
      "किसी भी आय वर्ग के।",
      "केंद्र या राज्य सरकार से कोई वेतन, पेंशन या पारिवारिक पेंशन न मिलती हो, और कोई दूसरी सामाजिक सुरक्षा पेंशन न मिलती हो।",
    ],
  },
  exclusions: {
    en: [
      "Serving or retired government employees who get a salary or pension from the central or state government.",
      "People who get a family pension from the government.",
      "People who already get another social security pension, such as the Indira Gandhi old-age pension.",
    ],
    hi: [
      "केंद्र या राज्य सरकार से वेतन या पेंशन पाने वाले मौजूदा या रिटायर सरकारी कर्मचारी।",
      "जिन्हें सरकार से पारिवारिक पेंशन मिलती है।",
      "जिन्हें पहले से कोई दूसरी सामाजिक सुरक्षा पेंशन मिलती है, जैसे इंदिरा गांधी वृद्धावस्था पेंशन।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the RTPS portal, serviceonline.bihar.gov.in, and find the Mukhyamantri Vridhjan Pension service.",
        "Fill in the form, upload your documents and submit.",
        "Keep the application number to track the status.",
      ],
      hi: [
        "RTPS पोर्टल serviceonline.bihar.gov.in पर जाएँ और मुख्यमंत्री वृद्धजन पेंशन की सेवा चुनें।",
        "फ़ॉर्म भरें, दस्तावेज़ अपलोड करें और जमा करें।",
        "स्थिति देखने के लिए आवेदन नंबर संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "Go to the RTPS counter at your block office.",
        "Fill in the pension form and attach copies of your documents.",
        "Collect the receipt. After verification the pension starts in your bank account.",
      ],
      hi: [
        "अपने प्रखंड कार्यालय के RTPS काउंटर पर जाएँ।",
        "पेंशन का फ़ॉर्म भरें और दस्तावेज़ों की कॉपी लगाएँ।",
        "रसीद ले लें। जाँच के बाद पेंशन आपके बैंक खाते में आने लगेगी।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Proof of age (birth certificate, school certificate or voter ID)", "Residence certificate of Bihar", "Bank passbook of an Aadhaar-linked account", "Passport-size photograph"],
    hi: ["आधार कार्ड", "उम्र का सबूत (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या वोटर ID)", "बिहार का निवास प्रमाण पत्र", "आधार से जुड़े बैंक खाते की पासबुक", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Is there an income limit?", hi: "क्या आय की कोई सीमा है?" },
      a: {
        en: "No. Any elderly resident of Bihar aged 60 or above can get it, as long as they don't get a government salary, government pension or another social security pension.",
        hi: "नहीं। बिहार का 60 साल या उससे ज़्यादा उम्र का कोई भी बुज़ुर्ग इसे पा सकता है, बस उसे सरकारी वेतन, सरकारी पेंशन या कोई दूसरी सामाजिक सुरक्षा पेंशन न मिलती हो।",
      },
    },
    {
      q: { en: "I was getting ₹400. Will I get ₹1,100 now?", hi: "मुझे ₹400 मिलते थे। क्या अब ₹1,100 मिलेंगे?" },
      a: {
        en: "Yes. The increase applies to all existing pensioners from June 2025. If you still get the old amount, check with your block social security cell that your bank account is Aadhaar-linked and your details are correct.",
        hi: "हाँ। जून 2025 से यह बढ़ोतरी सभी मौजूदा पेंशनधारियों पर लागू है। अगर अब भी पुरानी राशि आ रही है, तो प्रखंड के सामाजिक सुरक्षा कोषांग में पता करें कि आपका बैंक खाता आधार से जुड़ा है और आपका विवरण सही है।",
      },
    },
  ],

  officialUrl: "https://betastate.bihar.gov.in/pension",
  sources: [
    "https://betastate.bihar.gov.in/pension",
    "https://serviceonline.bihar.gov.in/",
    "https://www.tribuneindia.com/news/india/from-rs-400-to-rs-1100-cm-nitish-kumar-increases-old-age-pension-in-bihar",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
