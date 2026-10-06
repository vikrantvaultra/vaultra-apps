import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-odop-margin-money",
  tier: "compact",
  name: { en: "ODOP Financial Assistance (Margin Money) Scheme", hi: "एक जनपद एक उत्पाद (ODOP) वित्तीय सहायता (मार्जिन मनी) योजना" },
  aka: ["ODOP", "One District One Product", "ODOP margin money", "ODOP loan"],
  shortDescription: {
    en: "If you start or grow a unit making your district's ODOP product in Uttar Pradesh, the state pays up to 25% of the project cost as margin money on your bank loan.",
    hi: "उत्तर प्रदेश में अपने ज़िले के ODOP उत्पाद की इकाई शुरू करने या बढ़ाने पर राज्य आपके बैंक कर्ज़ पर प्रोजेक्ट लागत का 25% तक मार्जिन मनी के रूप में देता है।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "MSME and Export Promotion Department (Directorate of Industries), Government of Uttar Pradesh",
    hi: "एमएसएमई एवं निर्यात प्रोत्साहन विभाग (उद्योग निदेशालय), उत्तर प्रदेश सरकार",
  },
  categories: ["business"],
  tags: ["odop", "one district one product", "subsidy", "business loan", "msme", "uttar pradesh"],
  benefitType: "loan",
  isDBT: false,
  ageRange: { min: 18 },
  kundliHouse: "business",
  eligibility: all(residentOf("uttar-pradesh"), minAge(18)),

  details: {
    en: [
      "Under One District One Product (ODOP), each district of Uttar Pradesh has a chosen product, such as a craft, food item or industry. This scheme helps people set up or expand units that make or sell that product.",
      "Your project is financed by a bank loan, and the state pays a part of the cost as margin money (a subsidy). The share depends on the size of the project. There is no education requirement.",
    ],
    hi: [
      "एक जनपद एक उत्पाद (ODOP) में उत्तर प्रदेश के हर ज़िले का एक चुना हुआ उत्पाद है, जैसे कोई शिल्प, खाने की चीज़ या उद्योग। यह योजना उस उत्पाद को बनाने या बेचने वाली इकाई लगाने या बढ़ाने में मदद करती है।",
      "आपका प्रोजेक्ट बैंक कर्ज़ से बनता है, और राज्य लागत का एक हिस्सा मार्जिन मनी (सब्सिडी) के रूप में देता है। यह हिस्सा प्रोजेक्ट के आकार पर निर्भर है। कोई शिक्षा योग्यता ज़रूरी नहीं।",
    ],
  },
  benefits: {
    en: [
      "Projects up to ₹25 lakh: 25% of the cost, up to ₹6.25 lakh.",
      "Projects of ₹25 lakh to ₹50 lakh: ₹6.25 lakh or 20% of the cost, whichever is higher.",
      "Projects of ₹50 lakh to ₹1.5 crore: ₹10 lakh or 10% of the cost, whichever is higher.",
      "Projects above ₹1.5 crore: 10% of the cost, up to ₹20 lakh.",
    ],
    hi: [
      "₹25 लाख तक के प्रोजेक्ट: लागत का 25%, अधिकतम ₹6.25 लाख।",
      "₹25 लाख से ₹50 लाख के प्रोजेक्ट: ₹6.25 लाख या लागत का 20%, जो ज़्यादा हो।",
      "₹50 लाख से ₹1.5 करोड़ के प्रोजेक्ट: ₹10 लाख या लागत का 10%, जो ज़्यादा हो।",
      "₹1.5 करोड़ से ऊपर के प्रोजेक्ट: लागत का 10%, अधिकतम ₹20 लाख।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 or more.",
      "The unit must make or deal in the ODOP product chosen for your district.",
      "Must not be a defaulter of any bank or government institution.",
      "No minimum education is needed.",
    ],
    hi: [
      "उम्र 18 साल या ज़्यादा।",
      "इकाई आपके ज़िले के लिए चुने गए ODOP उत्पाद से जुड़ी हो।",
      "किसी बैंक या सरकारी संस्था का डिफ़ॉल्टर न हो।",
      "कोई न्यूनतम शिक्षा ज़रूरी नहीं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Find your district's ODOP product on odopup.in.",
        "Apply on diupmsme.upsdc.gov.in under the ODOP Financial Assistance Scheme with your project details.",
        "Selected applications are sent to the bank by the District Industries Centre, and the bank sanctions and pays the loan.",
      ],
      hi: [
        "odopup.in पर अपने ज़िले का ODOP उत्पाद देखें।",
        "diupmsme.upsdc.gov.in पर ODOP वित्तीय सहायता योजना में प्रोजेक्ट की जानकारी के साथ आवेदन करें।",
        "चुने गए आवेदन ज़िला उद्योग केंद्र बैंक भेजता है, और बैंक कर्ज़ मंज़ूर करके देता है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card or voter ID", "Age proof", "Project report", "Caste or disability certificate, if applicable"],
    hi: ["आधार कार्ड या वोटर ID", "उम्र का सबूत", "प्रोजेक्ट रिपोर्ट", "जाति या दिव्यांगता प्रमाण पत्र, अगर लागू हो"],
  },

  officialUrl: "https://odopup.in/",
  sources: [
    "https://msme1connect.up.gov.in/GovernmentScheme/GovernmentScheme638769672699910844.pdf",
    "https://odopup.in/odop-schemes/margin-money-scheme-uttar-pradesh",
    "https://mau.nic.in/scheme/odop-financing-scheme/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
