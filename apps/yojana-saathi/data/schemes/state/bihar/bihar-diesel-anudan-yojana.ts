import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-diesel-anudan-yojana",
  tier: "compact",
  name: { en: "Bihar Diesel Anudan Yojana", hi: "बिहार डीज़ल अनुदान योजना" },
  aka: ["Diesel subsidy Bihar", "Diesel anudan"],
  shortDescription: {
    en: "Bihar farmers who irrigate Kharif crops with diesel pumps get ₹750 per acre per irrigation, up to ₹2,250 per acre and 8 acres, by DBT.",
    hi: "डीज़ल पंप से खरीफ़ फ़सल की सिंचाई करने वाले बिहार के किसानों को प्रति सिंचाई प्रति एकड़ ₹750 मिलते हैं, प्रति एकड़ ₹2,250 और 8 एकड़ तक, DBT से।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Agriculture Department, Government of Bihar", hi: "कृषि विभाग, बिहार सरकार" },
  categories: ["agriculture"],
  tags: ["diesel subsidy", "irrigation", "kharif", "farmer", "drought", "bihar"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("bihar"), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "In seasons with poor rain, the Bihar Agriculture Department helps farmers with the cost of diesel used to run pumps for irrigation. For Kharif 2026 the subsidy is worked out at 10 litres of diesel per acre per irrigation at ₹75 a litre.",
      "Both landowners and tenant farmers can apply on the Agriculture Department's DBT portal. Only farmers who actually buy and use diesel in Bihar for irrigation should apply.",
    ],
    hi: [
      "कम बारिश वाले मौसम में बिहार का कृषि विभाग सिंचाई पंप चलाने के लिए डीज़ल के खर्च में मदद करता है। खरीफ़ 2026 के लिए अनुदान प्रति सिंचाई प्रति एकड़ 10 लीटर डीज़ल, ₹75 प्रति लीटर के हिसाब से तय है।",
      "ज़मीन मालिक और बटाईदार दोनों कृषि विभाग के DBT पोर्टल पर आवेदन कर सकते हैं। केवल वही किसान आवेदन करें जिन्होंने सच में बिहार में डीज़ल खरीदकर सिंचाई की है।",
    ],
  },
  benefits: {
    en: [
      "₹750 per acre for each irrigation.",
      "Up to ₹1,500 per acre (two irrigations) for paddy nursery and jute.",
      "Up to ₹2,250 per acre (three irrigations) for paddy, maize, pulses, oilseeds and other Kharif crops.",
      "Up to 8 acres per farmer.",
    ],
    hi: [
      "हर सिंचाई के लिए प्रति एकड़ ₹750।",
      "धान का बिचड़ा और जूट के लिए प्रति एकड़ ₹1,500 तक (दो सिंचाई)।",
      "धान, मक्का, दलहन, तिलहन और दूसरी खरीफ़ फ़सलों के लिए प्रति एकड़ ₹2,250 तक (तीन सिंचाई)।",
      "हर किसान के लिए 8 एकड़ तक।",
    ],
  },
  eligibilityText: {
    en: [
      "Farmer in Bihar, landowner or tenant, registered on the Agriculture Department's DBT portal.",
      "Used diesel bought from a petrol pump in Bihar to irrigate Kharif crops.",
      "Only one member of a family can claim.",
      "Tenant farmers need their tenancy confirmed by the ward member or other local official.",
    ],
    hi: [
      "बिहार के किसान, ज़मीन मालिक या बटाईदार, जो कृषि विभाग के DBT पोर्टल पर रजिस्टर हों।",
      "खरीफ़ फ़सल की सिंचाई के लिए बिहार के पेट्रोल पंप से खरीदा डीज़ल इस्तेमाल किया हो।",
      "परिवार का केवल एक सदस्य दावा कर सकता है।",
      "बटाईदार किसानों को वार्ड सदस्य या दूसरे स्थानीय अधिकारी से खेती की पुष्टि करानी होगी।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to dbtagriculture.bihar.gov.in during the application window (Kharif 2026 applications opened on 17 August 2026).",
        "Enter your 13-digit farmer registration number and fill in the diesel subsidy form.",
        "Upload the petrol pump receipt (with the last 10 digits of your registration number) and a geo-tagged photo of irrigation.",
        "After checking by agriculture officials, the money comes by DBT.",
      ],
      hi: [
        "आवेदन की अवधि में dbtagriculture.bihar.gov.in पर जाएँ (खरीफ़ 2026 के आवेदन 17 अगस्त 2026 से शुरू हुए)।",
        "अपना 13 अंकों का किसान पंजीकरण नंबर डालें और डीज़ल अनुदान का फ़ॉर्म भरें।",
        "पेट्रोल पंप की रसीद (जिस पर आपके पंजीकरण नंबर के आख़िरी 10 अंक हों) और सिंचाई की जियो-टैग फ़ोटो अपलोड करें।",
        "कृषि अधिकारियों की जाँच के बाद पैसा DBT से आता है।",
      ],
    },
  },

  officialUrl: "https://dbtagriculture.bihar.gov.in/",
  sources: [
    "https://dbtagriculture.bihar.gov.in/",
    "https://indianmasterminds.com/news/bihar-diesel-subsidy-farmers-irrigation-2026-225902/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
