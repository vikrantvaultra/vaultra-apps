import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ddusy",
  name: { en: "Deen Dayal Upadhyaya Swavalamban Yojana (DDUSY)", hi: "दीनदयाल उपाध्याय स्वावलंबन योजना (DDUSY)" },
  aka: ["DDUSY", "Swavalamban Yojana Arunachal", "Arunachal startup loan subsidy"],
  shortDescription: {
    en: "Unemployed youth of Arunachal Pradesh get a 40% front-ended subsidy on bank loans for new small and medium businesses costing ₹10 lakh to ₹50 lakh, plus 5% extra interest help for women.",
    hi: "अरुणाचल प्रदेश के बेरोज़गार युवाओं को ₹10 लाख से ₹50 लाख तक के नए छोटे और मझोले कारोबार के बैंक लोन पर 40% अग्रिम सब्सिडी, और महिलाओं को 5% अतिरिक्त ब्याज मदद।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Planning & Investment Division, Department of Finance, Planning & Investment, Government of Arunachal Pradesh",
    hi: "योजना एवं निवेश प्रभाग, वित्त, योजना एवं निवेश विभाग, अरुणाचल प्रदेश सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["startup", "business loan", "subsidy", "self employment", "unemployed youth", "women entrepreneur", "arunachal"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { min: 18 },
  kundliHouse: "business",
  eligibility: all(residentOf("arunachal-pradesh"), minAge(18)),

  details: {
    en: [
      "DDUSY is Arunachal Pradesh's start-up support scheme for unemployed young people. It has been running since 2017, and more than 500 start-ups have been set up under it.",
      "If your project costs more than ₹10 lakh and up to ₹50 lakh (not counting land and buildings), the state pays 40% of it as a front-ended capital subsidy. A bank lends 30% to 50%, and you contribute 10% to 30%; those who put in more get preference.",
      "Covered areas include food processing, small manufacturing, bamboo processing, service and diagnostic centres, eco-tourism and homestays, traditional weaving and other new business ideas. Applications are screened by a district committee headed by the Deputy Commissioner before the bank sanctions the loan.",
    ],
    hi: [
      "DDUSY अरुणाचल प्रदेश की बेरोज़गार युवाओं के लिए स्टार्ट-अप सहायता योजना है। यह 2017 से चल रही है और इसके तहत 500 से ज़्यादा स्टार्ट-अप शुरू हुए हैं।",
      "अगर आपकी परियोजना ₹10 लाख से ज़्यादा और ₹50 लाख तक की है (ज़मीन और इमारत को छोड़कर), तो राज्य सरकार लागत का 40% अग्रिम पूंजी सब्सिडी के रूप में देती है। बैंक 30% से 50% लोन देता है, और आप 10% से 30% लगाते हैं; ज़्यादा हिस्सा लगाने वालों को प्राथमिकता मिलती है।",
      "इसमें खाद्य प्रसंस्करण, छोटे उद्योग, बाँस प्रसंस्करण, सर्विस और डायग्नोस्टिक सेंटर, इको-टूरिज़्म और होमस्टे, पारंपरिक बुनाई और दूसरे नए कारोबार शामिल हैं। बैंक लोन मंज़ूर होने से पहले डिप्टी कमिश्नर की अध्यक्षता वाली ज़िला समिति आवेदनों की जाँच करती है।",
    ],
  },
  benefits: {
    en: [
      "40% of the project cost as a front-ended capital subsidy, for projects above ₹10 lakh and up to ₹50 lakh.",
      "Bank loan for 30% to 50% of the project cost.",
      "Women entrepreneurs get an extra 5% interest subsidy every year, as long as the loan does not turn bad.",
    ],
    hi: [
      "₹10 लाख से ज़्यादा और ₹50 लाख तक की परियोजनाओं पर लागत का 40% अग्रिम पूंजी सब्सिडी।",
      "परियोजना लागत के 30% से 50% तक बैंक लोन।",
      "महिला उद्यमियों को हर साल 5% अतिरिक्त ब्याज सब्सिडी, जब तक लोन डूबे (NPA) नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Unemployed youth of Arunachal Pradesh (APST or permanent resident certificate holders).",
      "A feasible business plan in one of the covered sectors, with a detailed project report.",
      "Preference goes to those with degrees or diplomas in tourism, hospitality, ITI or other technical trades, and to private doctors opening clinics in border blocks.",
      "There is an upper age limit; official pages give different figures, so check it in the current guidelines before applying.",
    ],
    hi: [
      "अरुणाचल प्रदेश के बेरोज़गार युवा (APST या स्थायी निवास प्रमाण पत्र वाले)।",
      "शामिल क्षेत्रों में से किसी एक में व्यावहारिक कारोबारी योजना, विस्तृत परियोजना रिपोर्ट के साथ।",
      "पर्यटन, हॉस्पिटैलिटी, ITI या दूसरे तकनीकी ट्रेड में डिग्री या डिप्लोमा वालों को, और सीमा ब्लॉकों में क्लिनिक खोलने वाले निजी डॉक्टरों को प्राथमिकता।",
      "ऊपरी उम्र सीमा है; सरकारी पेजों पर अलग-अलग आंकड़े हैं, इसलिए आवेदन से पहले मौजूदा दिशानिर्देश देख लें।",
    ],
  },
  exclusions: {
    en: [
      "Projects of ₹10 lakh or less, or above ₹50 lakh.",
      "The cost of land and buildings is not counted in the project cost.",
      "Women lose the extra interest subsidy if the unit becomes a non-performing entity.",
    ],
    hi: [
      "₹10 लाख या उससे कम, या ₹50 लाख से ज़्यादा की परियोजनाएँ।",
      "ज़मीन और इमारत की लागत परियोजना लागत में नहीं गिनी जाती।",
      "यूनिट के NPA होने पर महिलाओं की अतिरिक्त ब्याज सब्सिडी बंद हो जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the DDUSY portal (ddusyarunachal.in) and log in.",
        "Fill in the online application and upload your project report and documents.",
        "Track your application on the portal; after the district committee clears it, the bank sanctions the loan.",
      ],
      hi: [
        "DDUSY पोर्टल (ddusyarunachal.in) पर रजिस्टर करें और लॉग इन करें।",
        "ऑनलाइन आवेदन भरें और परियोजना रिपोर्ट व दस्तावेज़ अपलोड करें।",
        "पोर्टल पर आवेदन की स्थिति देखें; ज़िला समिति की मंज़ूरी के बाद बैंक लोन मंज़ूर करता है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "APST certificate or permanent resident certificate",
      "Educational certificates",
      "Detailed project report and bank account details",
    ],
    hi: [
      "आधार कार्ड",
      "APST प्रमाण पत्र या स्थायी निवास प्रमाण पत्र",
      "शैक्षिक प्रमाण पत्र",
      "विस्तृत परियोजना रिपोर्ट और बैंक खाते का विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "Is the 40% subsidy paid to me in cash?", hi: "क्या 40% सब्सिडी मुझे नक़द मिलती है?" },
      a: {
        en: "No. It is front-ended, meaning it is released through the bank into your project along with the loan, which lowers the amount you have to repay.",
        hi: "नहीं। यह अग्रिम सब्सिडी है, यानी लोन के साथ बैंक के ज़रिए आपकी परियोजना में जाती है, जिससे आपको कम रकम चुकानी पड़ती है।",
      },
    },
    {
      q: { en: "Can I start a homestay under DDUSY?", hi: "क्या DDUSY में होमस्टे शुरू कर सकते हैं?" },
      a: {
        en: "Yes, eco-tourism units including homestays and tour operators are a covered sector, as long as the project cost is above ₹10 lakh and up to ₹50 lakh.",
        hi: "हाँ, होमस्टे और टूर ऑपरेटर समेत इको-टूरिज़्म शामिल क्षेत्र है, बशर्ते परियोजना लागत ₹10 लाख से ज़्यादा और ₹50 लाख तक हो।",
      },
    },
  ],

  officialUrl: "https://ddusyarunachal.in/",
  sources: [
    "https://ddusyarunachal.in/",
    "https://tawang.nic.in/scheme/deen-dayal-upadhyaya-swavalamban-yojana-ddusy/",
    "https://arunachalipr.gov.in/post/deen-dayal-upadhyaya-swavalamban-yojana-ddusy",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
