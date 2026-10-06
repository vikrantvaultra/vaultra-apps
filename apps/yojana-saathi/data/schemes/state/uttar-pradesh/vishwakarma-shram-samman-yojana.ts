import { all, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "vishwakarma-shram-samman-yojana",
  tier: "compact",
  name: { en: "Vishwakarma Shram Samman Yojana (Uttar Pradesh)", hi: "विश्वकर्मा श्रम सम्मान योजना (उत्तर प्रदेश)" },
  aka: ["VSSY", "Vishwakarma Shram Samman 2.0", "UP toolkit yojana"],
  shortDescription: {
    en: "Artisans and tradespeople in Uttar Pradesh get free training, a modern toolkit worth up to ₹15,000, and help to get a loan of up to ₹10 lakh with a margin-money subsidy.",
    hi: "उत्तर प्रदेश के कारीगरों और हुनरमंदों को मुफ़्त प्रशिक्षण, ₹15,000 तक की आधुनिक टूलकिट, और ₹10 लाख तक के कर्ज़ में मार्जिन मनी सब्सिडी के साथ मदद।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "MSME and Export Promotion Department (Directorate of Industries), Government of Uttar Pradesh",
    hi: "एमएसएमई एवं निर्यात प्रोत्साहन विभाग (उद्योग निदेशालय), उत्तर प्रदेश सरकार",
  },
  categories: ["skills-employment", "business"],
  tags: ["artisan", "toolkit", "carpenter", "tailor", "training", "loan", "uttar pradesh"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { min: 18 },
  kundliHouse: "career",
  eligibility: all(
    residentOf("uttar-pradesh"),
    minAge(18),
    labelled(when("occupation", "in", ["artisan", "construction-worker", "small-business", "unorganised-worker"]), {
      en: "You work in a traditional or covered trade (carpenter, tailor, barber, potter, mason, etc.)",
      hi: "आप किसी पारंपरिक या शामिल हुनर में काम करते हों (बढ़ई, दर्ज़ी, नाई, कुम्हार, राजमिस्त्री आदि)",
    }),
  ),

  details: {
    en: [
      "Vishwakarma Shram Samman Yojana helps traditional artisans and workers in Uttar Pradesh earn more. Its current version (2.0) covers 25 trades, including carpenters, tailors, potters, blacksmiths, barbers, masons and goldsmiths, and newer trades like mobile repair and solar installation.",
      "You get short free training, then a modern toolkit. You can also apply for a business loan through a bank, with part of it covered by a state margin-money subsidy. The Directorate of Industries runs it.",
    ],
    hi: [
      "विश्वकर्मा श्रम सम्मान योजना उत्तर प्रदेश के पारंपरिक कारीगरों और कामगारों की कमाई बढ़ाने में मदद करती है। इसका मौजूदा रूप (2.0) 25 हुनर को शामिल करता है, जैसे बढ़ई, दर्ज़ी, कुम्हार, लोहार, नाई, राजमिस्त्री और सुनार, और नए काम जैसे मोबाइल रिपेयर और सोलर लगाना।",
      "पहले छोटा मुफ़्त प्रशिक्षण मिलता है, फिर आधुनिक टूलकिट। आप बैंक से व्यवसाय के लिए कर्ज़ भी माँग सकते हैं, जिसके एक हिस्से पर राज्य मार्जिन मनी सब्सिडी देता है। इसे उद्योग निदेशालय चलाता है।",
    ],
  },
  benefits: {
    en: [
      "Free skill training of up to 10 days in your trade.",
      "A modern toolkit worth up to ₹15,000 after you finish training.",
      "Help to get a loan of up to ₹10 lakh, with a 15% margin-money subsidy and no collateral.",
    ],
    hi: [
      "अपने हुनर में 10 दिन तक का मुफ़्त प्रशिक्षण।",
      "प्रशिक्षण पूरा होने पर ₹15,000 तक की आधुनिक टूलकिट।",
      "₹10 लाख तक का कर्ज़ दिलाने में मदद, 15% मार्जिन मनी सब्सिडी के साथ और बिना गारंटी।",
    ],
  },
  eligibilityText: {
    en: [
      "Native of Uttar Pradesh, aged 18 or more.",
      "Works in one of the covered trades. People from any caste can apply; if your caste is not a traditional artisan caste, a certificate from the Gram Pradhan or ward member is needed.",
      "Has not received any government toolkit in the last two years.",
      "Only one person per family (husband or wife) can benefit.",
    ],
    hi: [
      "उत्तर प्रदेश के मूल निवासी, उम्र 18 साल या ज़्यादा।",
      "किसी शामिल हुनर में काम करते हों। किसी भी जाति के लोग आवेदन कर सकते हैं; अगर आपकी जाति पारंपरिक कारीगर जाति नहीं है, तो ग्राम प्रधान या वार्ड सदस्य का प्रमाण पत्र चाहिए।",
      "पिछले दो साल में कोई सरकारी टूलकिट न मिली हो।",
      "एक परिवार (पति या पत्नी) से एक ही व्यक्ति को लाभ मिलेगा।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to diupmsme.upsdc.gov.in and choose Vishwakarma Shram Samman Yojana.",
        "Register, fill in the form with your trade and upload your Aadhaar, age proof and other documents.",
        "Attend the training when called by the District Industries Centre, then collect your toolkit.",
      ],
      hi: [
        "diupmsme.upsdc.gov.in पर जाएँ और विश्वकर्मा श्रम सम्मान योजना चुनें।",
        "रजिस्टर करें, अपने हुनर के साथ फ़ॉर्म भरें और आधार, उम्र का सबूत और दूसरे दस्तावेज़ अपलोड करें।",
        "ज़िला उद्योग केंद्र बुलाए तो प्रशिक्षण में जाएँ, फिर अपनी टूलकिट लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card or voter ID", "Age proof", "Caste certificate, if applicable", "Trade certificate from Gram Pradhan or ward member, if needed"],
    hi: ["आधार कार्ड या वोटर ID", "उम्र का सबूत", "जाति प्रमाण पत्र, अगर लागू हो", "ज़रूरत हो तो ग्राम प्रधान या वार्ड सदस्य से हुनर का प्रमाण पत्र"],
  },

  officialUrl: "https://msme1connect.up.gov.in/Home/SchemesList/1",
  sources: [
    "https://msme1connect.up.gov.in/Home/SchemesList/1",
    "https://msme1connect.up.gov.in/GovernmentScheme/GovernmentScheme638927397130517915.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
