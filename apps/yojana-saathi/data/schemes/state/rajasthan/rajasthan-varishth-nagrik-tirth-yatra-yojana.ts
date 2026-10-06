import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-varishth-nagrik-tirth-yatra-yojana",
  tier: "compact",
  name: { en: "Varishth Nagrik Tirth Yatra Yojana (Rajasthan)", hi: "वरिष्ठ नागरिक तीर्थ यात्रा योजना (राजस्थान)" },
  aka: ["Tirth Yatra Yojana", "Senior citizen pilgrimage Rajasthan", "Vriddhjan Tirth Yatra"],
  shortDescription: {
    en: "Senior citizens of Rajasthan aged 60+ can go on a free pilgrimage by AC train or plane, with travel, stay and food paid by the state. Pilgrims are picked by lottery.",
    hi: "राजस्थान के 60+ साल के वरिष्ठ नागरिक AC ट्रेन या हवाई जहाज़ से मुफ़्त तीर्थ यात्रा कर सकते हैं, जिसमें यात्रा, ठहरने और खाने का ख़र्च राज्य उठाता है। यात्रियों का चयन लॉटरी से होता है।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Devasthan Department, Government of Rajasthan", hi: "देवस्थान विभाग, राजस्थान सरकार" },
  categories: ["social-welfare"],
  tags: ["senior citizen", "pilgrimage", "tirth yatra", "free travel", "rajasthan"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("rajasthan"), minAge(60)),

  details: {
    en: [
      "Under this scheme the Devasthan Department takes senior citizens of Rajasthan on free pilgrimages every year. Most pilgrims travel by AC train on set routes to major religious places across India, and a smaller group travels by air, including to Pashupatinath in Nepal.",
      "In 2026 about 56,000 senior citizens were to travel (around 50,000 by train and 6,000 by air). Applications are taken online and pilgrims are chosen by lottery.",
    ],
    hi: [
      "इस योजना में देवस्थान विभाग हर साल राजस्थान के वरिष्ठ नागरिकों को मुफ़्त तीर्थ यात्रा कराता है। ज़्यादातर यात्री तय मार्गों पर AC ट्रेन से देश के बड़े धार्मिक स्थलों पर जाते हैं, और एक छोटा समूह हवाई जहाज़ से जाता है, जिसमें नेपाल का पशुपतिनाथ भी शामिल है।",
      "2026 में लगभग 56,000 वरिष्ठ नागरिकों की यात्रा तय थी (लगभग 50,000 ट्रेन से और 6,000 हवाई जहाज़ से)। आवेदन ऑनलाइन लिए जाते हैं और यात्रियों का चयन लॉटरी से होता है।",
    ],
  },
  benefits: {
    en: [
      "Free travel by AC train or by air to a pilgrimage place.",
      "Stay, meals and local travel during the trip are paid by the state.",
      "Pilgrims aged 70 or older can take one companion at government cost.",
    ],
    hi: [
      "AC ट्रेन या हवाई जहाज़ से तीर्थ स्थल तक मुफ़्त यात्रा।",
      "यात्रा के दौरान ठहरने, खाने और स्थानीय आवागमन का ख़र्च राज्य उठाता है।",
      "70 साल या उससे बड़े यात्री एक सहायक को सरकारी ख़र्च पर साथ ले जा सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Rajasthan.",
      "You are 60 or older on the date set in that year's notice (1 April in 2026).",
      "You are fit to travel and give a medical certificate in the set format.",
      "A husband and wife can apply together in one application.",
    ],
    hi: [
      "आप राजस्थान में रहते हों।",
      "उस साल की सूचना में तय तारीख़ (2026 में 1 अप्रैल) को आपकी उम्र 60 साल या ज़्यादा हो।",
      "आप यात्रा के लिए स्वस्थ हों और तय प्रारूप में मेडिकल प्रमाण पत्र दें।",
      "पति-पत्नी एक ही आवेदन में साथ आवेदन कर सकते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When applications open (usually around May–June), apply through your SSO ID, the Devasthan Department portal or an e-Mitra kiosk with your Jan Aadhaar.",
        "Choose your preferred route, and add your spouse or companion if allowed.",
        "Check the lottery result on edevasthan2.rajasthan.gov.in and submit the medical certificate and self-declaration if you are selected.",
      ],
      hi: [
        "आवेदन खुलने पर (आमतौर पर मई–जून के आसपास) जन आधार से अपनी SSO ID, देवस्थान विभाग के पोर्टल या ई-मित्र केंद्र के ज़रिए आवेदन करें।",
        "अपना पसंदीदा मार्ग चुनें, और अनुमति हो तो जीवनसाथी या सहायक का नाम जोड़ें।",
        "edevasthan2.rajasthan.gov.in पर लॉटरी का परिणाम देखें और चयन होने पर मेडिकल प्रमाण पत्र और स्व-घोषणा पत्र जमा करें।",
      ],
    },
  },

  officialUrl: "https://devasthan.rajasthan.gov.in/",
  sources: [
    "https://devasthan.rajasthan.gov.in/",
    "https://curlytales.com/india/trending/senior-citizen-pilgrimage-scheme-eligibility-to-route-all-about-rajasthans-free-trips/amp/",
    "https://www.patrika.com/jaipur-news/rajasthan-varisth-nagrik-tirth-yatra-yojana-update-application-in-june-many-facilities-many-changes-available-19608238",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "active",
};

export default scheme;
