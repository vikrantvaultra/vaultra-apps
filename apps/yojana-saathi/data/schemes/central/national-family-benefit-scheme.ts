import { all, isTrue } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "national-family-benefit-scheme",
  name: { en: "National Family Benefit Scheme", hi: "राष्ट्रीय पारिवारिक लाभ योजना" },
  aka: ["NFBS", "NSAP family benefit"],
  shortDescription: {
    en: "A one-time payment of ₹20,000 to a BPL family when its main earning member dies between the ages of 18 and 59.",
    hi: "किसी BPL परिवार के मुख्य कमाने वाले सदस्य की 18 से 59 साल की उम्र में मृत्यु होने पर परिवार को एक बार ₹20,000 की मदद।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["social-welfare"],
  tags: ["death of breadwinner", "bpl", "widow", "family support", "nsap", "one time assistance"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 20000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(isTrue("bpl")),

  details: {
    en: [
      "The National Family Benefit Scheme is part of the National Social Assistance Programme (NSAP), run by the Ministry of Rural Development with the states.",
      "When the main earner of a BPL household dies, the family suddenly loses its income. This scheme gives the family a one-time sum of ₹20,000 to help them through that time.",
      "The money goes to the surviving head of the household, the person who will now run the family (often the widow), after local enquiry. Some states add their own amount.",
    ],
    hi: [
      "राष्ट्रीय पारिवारिक लाभ योजना, राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) का हिस्सा है, जिसे ग्रामीण विकास मंत्रालय राज्यों के साथ चलाता है।",
      "जब किसी BPL परिवार के मुख्य कमाने वाले की मृत्यु हो जाती है, तो परिवार की आमदनी अचानक बंद हो जाती है। यह योजना उस मुश्किल समय में परिवार को एक बार ₹20,000 देती है।",
      "स्थानीय जाँच के बाद पैसा परिवार के जीवित मुखिया को मिलता है, यानी वह व्यक्ति जो अब घर चलाएगा (अक्सर विधवा)। कुछ राज्य अपनी राशि भी जोड़ते हैं।",
    ],
  },
  benefits: {
    en: ["One-time payment of ₹20,000 to the family.", "Paid into the bank account of the new head of the household."],
    hi: ["परिवार को एक बार ₹20,000 की राशि।", "पैसा परिवार के नए मुखिया के बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "The family is below the poverty line (BPL).",
      "The person who died was the family's primary breadwinner (man or woman) and was aged 18 to 59 at the time of death.",
      "The claim is made by the surviving head of the household.",
    ],
    hi: [
      "परिवार गरीबी रेखा से नीचे (BPL) हो।",
      "जिनकी मृत्यु हुई, वे परिवार के मुख्य कमाने वाले (पुरुष या महिला) थे और मृत्यु के समय उनकी उम्र 18 से 59 साल थी।",
      "दावा परिवार का जीवित मुखिया करता है।",
    ],
  },
  exclusions: {
    en: [
      "Families that are not BPL.",
      "Deaths of a breadwinner younger than 18 or aged 60 and above.",
      "Death of a family member who was not the main earner.",
    ],
    hi: [
      "जो परिवार BPL नहीं हैं।",
      "18 साल से कम या 60 साल और उससे अधिक उम्र के कमाने वाले की मृत्यु।",
      "ऐसे सदस्य की मृत्यु जो परिवार का मुख्य कमाने वाला नहीं था।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the NFBS form from your gram panchayat, block office, tehsil or municipal office, or a Common Service Centre.",
        "Fill it in and attach the death certificate, BPL proof and the other documents.",
        "Submit it at the same office. Officials verify the details and the money is sent to your account.",
      ],
      hi: [
        "ग्राम पंचायत, ब्लॉक, तहसील या नगर पालिका कार्यालय, या जन सेवा केंद्र से NFBS फ़ॉर्म लें।",
        "फ़ॉर्म भरें और मृत्यु प्रमाण पत्र, BPL प्रमाण और बाकी दस्तावेज़ लगाएँ।",
        "उसी कार्यालय में जमा करें। अधिकारी जाँच करते हैं और पैसा आपके खाते में भेजा जाता है।",
      ],
    },
  },
  documents: {
    en: ["Death certificate of the breadwinner", "Age proof of the deceased", "BPL card or BPL ration card", "Aadhaar of the applicant", "Applicant's bank account details"],
    hi: ["कमाने वाले सदस्य का मृत्यु प्रमाण पत्र", "मृतक की उम्र का प्रमाण", "BPL कार्ड या BPL राशन कार्ड", "आवेदक का आधार", "आवेदक के बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "Is there a time limit to apply?", hi: "क्या आवेदन की कोई समय सीमा है?" },
      a: {
        en: "Rules vary by state, so apply as soon as you have the death certificate. Ask your block or tehsil office about the local deadline.",
        hi: "नियम राज्य के हिसाब से अलग हैं, इसलिए मृत्यु प्रमाण पत्र मिलते ही आवेदन करें। स्थानीय समय सीमा के बारे में ब्लॉक या तहसील कार्यालय से पूछें।",
      },
    },
    {
      q: { en: "Can a widow also get a monthly pension?", hi: "क्या विधवा को मासिक पेंशन भी मिल सकती है?" },
      a: {
        en: "Yes. A BPL widow aged 40 to 79 can also apply for the widow pension under NSAP, along with this one-time help.",
        hi: "हाँ। 40 से 79 साल की BPL विधवा इस एक बार की मदद के साथ NSAP की विधवा पेंशन के लिए भी आवेदन कर सकती है।",
      },
    },
  ],

  officialUrl: "https://nsap.dord.gov.in/",
  sources: [
    "https://nsap.dord.gov.in/",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025117686801.pdf",
    "https://pune.gov.in/scheme/national-family-benefit-scheme",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1995,
  status: "active",
};

export default scheme;
