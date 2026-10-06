import { all, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-kusum",
  name: { en: "PM-KUSUM (Solar Pumps for Farmers)", hi: "पीएम-कुसुम (किसानों के लिए सोलर पंप)" },
  aka: ["PM KUSUM", "Kisan Urja Suraksha evam Utthaan Mahabhiyan", "solar pump yojana"],
  shortDescription: {
    en: "Get a solar water pump, or turn your grid pump solar, with the Centre paying 30% of the cost and the state at least 30%, so you pay about 40% or less.",
    hi: "सोलर पानी पंप लगवाएँ या बिजली वाले पंप को सोलर में बदलें। लागत का 30% केंद्र और कम से कम 30% राज्य देता है, आपको लगभग 40% या उससे कम देना होता है।",
  },
  level: "central",
  ministry: "new-renewable-energy",
  categories: ["agriculture", "energy-savings"],
  tags: ["solar pump", "kusum", "irrigation", "farmer", "subsidy", "diesel pump"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(
    when("occupation", "in", ["farmer"], { en: "You are a farmer who needs an irrigation pump", hi: "आप किसान हैं और सिंचाई के लिए पंप चाहिए" }),
  ),

  details: {
    en: [
      "PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan) helps farmers move from diesel and grid electricity to solar power for irrigation. It is run by the Ministry of New & Renewable Energy through state nodal agencies.",
      "Component B helps you install a new stand-alone solar pump where there is no grid power. Component C helps you put solar panels on an existing grid-connected pump, so you can use free daytime power and sell surplus electricity to the power company. Component A lets farmers or their groups set up small solar plants on barren land and sell the power.",
      "For pumps, the Centre gives 30% of the benchmark or tender cost (50% in the North-East, hill states and island UTs), the state gives at least 30%, and the farmer pays the rest. Banks can lend part of the farmer's share. The scheme's sanction period ran until March 2026 and a successor (PM-KUSUM 2.0) is being considered, so check with your state agency whether new applications are open.",
    ],
    hi: [
      "पीएम-कुसुम (प्रधानमंत्री किसान ऊर्जा सुरक्षा एवं उत्थान महाभियान) किसानों को सिंचाई के लिए डीज़ल और ग्रिड बिजली से सौर ऊर्जा की ओर बढ़ने में मदद करता है। नवीन और नवीकरणीय ऊर्जा मंत्रालय इसे राज्य की नोडल एजेंसियों के ज़रिए चलाता है।",
      "कंपोनेंट B में जहाँ बिजली नहीं है वहाँ नया सोलर पंप लगता है। कंपोनेंट C में मौजूदा बिजली वाले पंप पर सोलर पैनल लगते हैं, जिससे दिन में मुफ़्त बिजली मिलती है और बची बिजली बिजली कंपनी को बेच सकते हैं। कंपोनेंट A में किसान या उनके समूह बंजर ज़मीन पर छोटे सोलर प्लांट लगाकर बिजली बेच सकते हैं।",
      "पंप के लिए केंद्र बेंचमार्क या टेंडर लागत का 30% देता है (पूर्वोत्तर, पहाड़ी राज्यों और द्वीप वाले केंद्रशासित प्रदेशों में 50%), राज्य कम से कम 30% देता है और बाकी किसान देता है। किसान के हिस्से का कुछ भाग बैंक से कर्ज़ मिल सकता है। योजना की मंज़ूरी अवधि मार्च 2026 तक थी और इसकी अगली कड़ी (PM-KUSUM 2.0) पर विचार चल रहा है, इसलिए नए आवेदन खुले हैं या नहीं, यह अपनी राज्य एजेंसी से पूछें।",
    ],
  },
  benefits: {
    en: [
      "Central support of 30% of the pump cost (50% in North-Eastern states, Sikkim, J&K, Himachal Pradesh, Uttarakhand, Lakshadweep and Andaman & Nicobar).",
      "State subsidy of at least 30% on top, so the farmer's share is usually 40% or less.",
      "Bank loans available for part of the farmer's share.",
      "Stand-alone solar pumps up to 7.5 HP get central support, cutting diesel costs.",
      "With a solarised grid pump, you can sell extra power to the electricity company and earn money.",
    ],
    hi: [
      "पंप की लागत का 30% केंद्र की मदद (पूर्वोत्तर राज्यों, सिक्किम, जम्मू-कश्मीर, हिमाचल प्रदेश, उत्तराखंड, लक्षद्वीप और अंडमान-निकोबार में 50%)।",
      "इसके ऊपर राज्य की कम से कम 30% सब्सिडी, इसलिए किसान का हिस्सा आमतौर पर 40% या कम।",
      "किसान के हिस्से के कुछ भाग के लिए बैंक कर्ज़ मिल सकता है।",
      "7.5 HP तक के सोलर पंप पर केंद्र की मदद, डीज़ल का खर्च बचता है।",
      "सोलर किए गए बिजली पंप से बची बिजली बिजली कंपनी को बेचकर कमाई कर सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Individual farmers, groups of farmers, water user associations, FPOs and primary agricultural credit societies.",
      "For a new stand-alone pump: you farm in an area without a reliable grid connection for irrigation.",
      "For solarising a pump: you already have a grid-connected agricultural pump in your name.",
      "You have a water source (borewell, well or pond) and the land to place the panels.",
    ],
    hi: [
      "व्यक्तिगत किसान, किसानों के समूह, जल उपयोगकर्ता संघ, FPO और प्राथमिक कृषि ऋण समितियाँ।",
      "नए सोलर पंप के लिए: आपके खेत पर सिंचाई के लिए भरोसेमंद बिजली कनेक्शन नहीं है।",
      "पंप को सोलर करने के लिए: आपके नाम पर पहले से बिजली वाला कृषि पंप कनेक्शन है।",
      "आपके पास पानी का स्रोत (बोरवेल, कुआँ या तालाब) और पैनल लगाने की जगह है।",
    ],
  },
  exclusions: {
    en: [
      "Central support is limited to pumps up to 7.5 HP; you pay the extra cost for anything bigger.",
      "Each state decides its own share, targets and selection; in some states the quota fills fast.",
      "Pumps must be bought only through the vendors empanelled by your state agency to get the subsidy.",
    ],
    hi: [
      "केंद्र की मदद 7.5 HP तक के पंप तक सीमित है; इससे बड़े पंप का अतिरिक्त खर्च आपको देना होगा।",
      "हर राज्य अपना हिस्सा, लक्ष्य और चयन तय करता है; कुछ राज्यों में कोटा जल्दी भर जाता है।",
      "सब्सिडी के लिए पंप सिर्फ़ राज्य एजेंसी के पैनल वाले विक्रेताओं से ही लेना होगा।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Visit pmkusum.mnre.gov.in and find your state's implementing agency and its application portal.",
        "Register on the state portal with Aadhaar, land and pump details, and choose the pump size.",
        "If selected, pay your share (or arrange a bank loan) and the empanelled vendor installs the pump.",
      ],
      hi: [
        "pmkusum.mnre.gov.in पर जाएँ और अपने राज्य की एजेंसी और उसका आवेदन पोर्टल देखें।",
        "राज्य पोर्टल पर आधार, ज़मीन और पंप की जानकारी के साथ पंजीकरण करें और पंप का साइज़ चुनें।",
        "चुने जाने पर अपना हिस्सा भरें (या बैंक कर्ज़ लें), फिर पैनल वाला विक्रेता पंप लगाता है।",
      ],
    },
    offline: {
      en: [
        "Contact your district agriculture, horticulture or renewable energy office, or the state power company for grid-pump solarisation.",
        "Fill in the application form and attach land, ID and bank documents.",
      ],
      hi: [
        "अपने ज़िले के कृषि, बागवानी या अक्षय ऊर्जा कार्यालय से, या बिजली पंप को सोलर कराने के लिए बिजली कंपनी से संपर्क करें।",
        "आवेदन फ़ॉर्म भरें और ज़मीन, पहचान और बैंक के कागज़ लगाएँ।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Land records", "Bank passbook", "Electricity connection details (for solarising a grid pump)", "Passport-size photo"],
    hi: ["आधार कार्ड", "ज़मीन के कागज़", "बैंक पासबुक", "बिजली कनेक्शन का विवरण (बिजली पंप को सोलर कराने के लिए)", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay anything to apply?", hi: "क्या आवेदन के लिए कुछ पैसे देने होंगे?" },
      a: {
        en: "Apply only on your state agency's portal or office. MNRE has warned about fake websites that ask for registration fees in the name of PM-KUSUM.",
        hi: "आवेदन सिर्फ़ अपनी राज्य एजेंसी के पोर्टल या दफ़्तर से करें। MNRE ने PM-KUSUM के नाम पर पंजीकरण शुल्क माँगने वाली फ़र्ज़ी वेबसाइटों से सावधान किया है।",
      },
    },
    {
      q: { en: "Can I sell power from a solar pump?", hi: "क्या सोलर पंप की बिजली बेच सकते हैं?" },
      a: {
        en: "Yes, if you solarise a grid-connected pump under Component C. Your power company buys the surplus at a rate set by the state.",
        hi: "हाँ, अगर आप कंपोनेंट C में बिजली वाले पंप को सोलर कराते हैं। बिजली कंपनी बची बिजली राज्य की तय दर पर ख़रीदती है।",
      },
    },
  ],

  officialUrl: "https://pmkusum.mnre.gov.in/",
  sources: [
    "https://pmkusum.mnre.gov.in/",
    "https://mnre.gov.in/en/schemes/",
    "https://solarquarter.com/2026/04/06/pm-kusum-project-deadlines-extended-amid-financing-challenges-transition-to-kusum-2-0-planned/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "check-status",
};

export default scheme;
