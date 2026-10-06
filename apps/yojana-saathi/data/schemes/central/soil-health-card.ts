import { all, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "soil-health-card",
  name: { en: "Soil Health Card Scheme", hi: "मृदा स्वास्थ्य कार्ड योजना" },
  aka: ["SHC", "Soil Health & Fertility"],
  shortDescription: {
    en: "Get your farm soil tested for free and receive a card that tells you which nutrients it lacks and how much fertiliser to use for each crop.",
    hi: "अपने खेत की मिट्टी की मुफ़्त जाँच कराएँ और कार्ड पाएँ, जिसमें लिखा हो कि मिट्टी में किन पोषक तत्वों की कमी है और हर फ़सल में कितनी खाद डालें।",
  },
  level: "central",
  ministry: "agriculture-farmers-welfare",
  categories: ["agriculture"],
  tags: ["soil test", "soil health card", "fertiliser", "farmer", "mitti jaanch"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(
    when("occupation", "in", ["farmer"], { en: "You farm land", hi: "आप खेती करते हैं" }),
  ),

  details: {
    en: [
      "The Soil Health Card scheme tests the soil of farm plots and gives farmers a printed or digital card with the results. Since 2022-23 it runs as the 'Soil Health & Fertility' part of the Rashtriya Krishi Vikas Yojana (RKVY).",
      "Officials or trained village workers collect soil samples, which are tested in government soil labs for nutrients such as nitrogen, phosphorus, potassium, sulphur, zinc and boron, plus pH, salt level and organic carbon.",
      "The card recommends how much of each fertiliser and manure to use for your crops. Using it helps you avoid overspending on fertiliser and keeps the land healthy. All results are on a GIS-linked national portal.",
    ],
    hi: [
      "मृदा स्वास्थ्य कार्ड योजना में खेतों की मिट्टी की जाँच होती है और किसान को नतीजों वाला छपा या डिजिटल कार्ड मिलता है। 2022-23 से यह राष्ट्रीय कृषि विकास योजना (RKVY) के 'मृदा स्वास्थ्य और उर्वरता' हिस्से के रूप में चलती है।",
      "अधिकारी या प्रशिक्षित ग्रामीण कार्यकर्ता मिट्टी के नमूने लेते हैं, जिनकी सरकारी प्रयोगशालाओं में नाइट्रोजन, फ़ॉस्फ़ोरस, पोटाश, सल्फ़र, ज़िंक, बोरॉन जैसे पोषक तत्वों और pH, खारापन और जैविक कार्बन की जाँच होती है।",
      "कार्ड बताता है कि आपकी फ़सलों में कौन-सी खाद और गोबर खाद कितनी डालें। इससे खाद पर फ़ालतू खर्च बचता है और ज़मीन स्वस्थ रहती है। सभी नतीजे नक्शे से जुड़े राष्ट्रीय पोर्टल पर हैं।",
    ],
  },
  benefits: {
    en: [
      "Free soil testing of your farm.",
      "A Soil Health Card with the nutrient status of your soil.",
      "Crop-wise advice on fertiliser and manure doses.",
      "Lower fertiliser costs and better yields over time.",
    ],
    hi: [
      "आपके खेत की मिट्टी की मुफ़्त जाँच।",
      "मिट्टी के पोषक तत्वों की स्थिति वाला मृदा स्वास्थ्य कार्ड।",
      "फ़सल के हिसाब से खाद और गोबर खाद की मात्रा की सलाह।",
      "समय के साथ खाद का खर्च कम और पैदावार बेहतर।",
    ],
  },
  eligibilityText: {
    en: ["Any farmer cultivating land in India, whether owner or tenant.", "Samples are collected plot-wise as per your state's soil sampling plan."],
    hi: ["भारत में खेती करने वाला कोई भी किसान, मालिक हो या किराएदार।", "राज्य की नमूना योजना के अनुसार खेत-वार नमूने लिए जाते हैं।"],
  },
  exclusions: {
    en: ["Non-agricultural land is not covered.", "Testing follows the state's sampling schedule, so your plot may not be sampled every season."],
    hi: ["गैर-कृषि ज़मीन इसमें शामिल नहीं है।", "जाँच राज्य के नमूना कार्यक्रम के अनुसार होती है, इसलिए हो सकता है आपके खेत का नमूना हर मौसम में न लिया जाए।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to soilhealth.dac.gov.in to check or download your Soil Health Card using your mobile number or sample details.",
        "Use the 'Soil Health Card' mobile app to see test results and fertiliser advice.",
      ],
      hi: [
        "soilhealth.dac.gov.in पर मोबाइल नंबर या नमूने की जानकारी से अपना मृदा स्वास्थ्य कार्ड देखें या डाउनलोड करें।",
        "'Soil Health Card' मोबाइल ऐप पर जाँच के नतीजे और खाद की सलाह देखें।",
      ],
    },
    offline: {
      en: [
        "Contact your village agriculture officer, Krishi Vigyan Kendra or block agriculture office to get your soil sampled.",
        "Give your name, mobile number and plot details when the sample is taken.",
        "Collect the printed card from the agriculture office when the test is done.",
      ],
      hi: [
        "मिट्टी का नमूना लिवाने के लिए गाँव के कृषि अधिकारी, कृषि विज्ञान केंद्र या ब्लॉक कृषि कार्यालय से संपर्क करें।",
        "नमूना लेते समय अपना नाम, मोबाइल नंबर और खेत की जानकारी दें।",
        "जाँच पूरी होने पर कृषि कार्यालय से छपा कार्ड ले लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar or other ID", "Mobile number", "Plot details (khasra/survey number)"],
    hi: ["आधार या अन्य पहचान पत्र", "मोबाइल नंबर", "खेत का विवरण (खसरा/सर्वे नंबर)"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay for the soil test?", hi: "क्या मिट्टी जाँच के पैसे देने होंगे?" },
      a: {
        en: "No. Testing under the scheme and the card are free for farmers.",
        hi: "नहीं। योजना के तहत जाँच और कार्ड दोनों किसानों के लिए मुफ़्त हैं।",
      },
    },
    {
      q: { en: "How should I use the card?", hi: "कार्ड का इस्तेमाल कैसे करें?" },
      a: {
        en: "Before buying fertiliser, check the recommended doses for your crop on the card. Show it at the fertiliser shop or to your agriculture officer if you need help.",
        hi: "खाद ख़रीदने से पहले कार्ड पर अपनी फ़सल के लिए बताई मात्रा देखें। मदद चाहिए तो खाद की दुकान या कृषि अधिकारी को कार्ड दिखाएँ।",
      },
    },
  ],

  officialUrl: "https://soilhealth.dac.gov.in/",
  sources: [
    "https://soilhealth.dac.gov.in/",
    "https://www.myscheme.gov.in/schemes/shc",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/may/doc202659866801.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
