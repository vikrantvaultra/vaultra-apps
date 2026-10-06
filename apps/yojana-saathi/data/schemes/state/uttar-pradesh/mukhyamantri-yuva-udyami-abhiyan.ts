import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-yuva-udyami-abhiyan",
  name: { en: "Mukhyamantri Yuva Udyami Vikas Abhiyan (CM YUVA)", hi: "मुख्यमंत्री युवा उद्यमी विकास अभियान (CM YUVA)" },
  aka: ["CM YUVA", "CM-YUVA", "Yuva Udyami Yojana"],
  shortDescription: {
    en: "Young people in Uttar Pradesh aged 21 to 40 can get an interest-free, collateral-free loan of up to ₹5 lakh to start a business, plus a 10% margin-money subsidy.",
    hi: "उत्तर प्रदेश के 21 से 40 साल के युवा कारोबार शुरू करने के लिए ₹5 लाख तक का बिना ब्याज, बिना गारंटी लोन और 10% मार्जिन मनी सब्सिडी पा सकते हैं।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "MSME Department (Directorate of Industries and Enterprise Promotion), Government of Uttar Pradesh",
    hi: "MSME विभाग (उद्योग एवं उद्यम प्रोत्साहन निदेशालय), उत्तर प्रदेश सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["loan", "business loan", "interest free", "startup", "self employment", "youth", "uttar pradesh"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 500_000, period: "one-time", kind: "loan" },
  ageRange: { min: 21, max: 40 },
  kundliHouse: "business",
  eligibility: all(residentOf("uttar-pradesh"), ...ageBetween(21, 40)),

  details: {
    en: [
      "CM YUVA helps young people in Uttar Pradesh start their own small business instead of looking only for jobs. The state aims to support about one lakh new entrepreneurs every year.",
      "You can get a bank loan of up to ₹5 lakh for a project in manufacturing, services or trade. The state pays the interest and the loan is given without collateral. A 10% margin-money subsidy on the project cost is also given.",
      "The scheme is run by the MSME Department through the Directorate of Industries and Enterprise Promotion. You apply online, the district industries centre checks your project, and a bank gives the loan.",
    ],
    hi: [
      "CM YUVA उत्तर प्रदेश के युवाओं को सिर्फ़ नौकरी ढूँढने के बजाय अपना छोटा कारोबार शुरू करने में मदद करता है। राज्य का लक्ष्य हर साल लगभग एक लाख नए उद्यमी तैयार करना है।",
      "मैन्युफ़ैक्चरिंग, सेवा या व्यापार के प्रोजेक्ट के लिए ₹5 लाख तक का बैंक लोन मिल सकता है। ब्याज राज्य सरकार देती है और लोन बिना गारंटी के मिलता है। प्रोजेक्ट लागत पर 10% मार्जिन मनी सब्सिडी भी मिलती है।",
      "यह योजना MSME विभाग उद्योग एवं उद्यम प्रोत्साहन निदेशालय के ज़रिए चलाता है। आप ऑनलाइन आवेदन करते हैं, ज़िला उद्योग केंद्र प्रोजेक्ट जाँचता है, और बैंक लोन देता है।",
    ],
  },
  benefits: {
    en: [
      "Loan of up to ₹5 lakh for a new business.",
      "No interest to pay: the state covers it.",
      "No collateral or guarantor needed.",
      "10% margin-money subsidy on the project cost.",
    ],
    hi: [
      "नए कारोबार के लिए ₹5 लाख तक का लोन।",
      "ब्याज नहीं देना: राज्य सरकार देती है।",
      "कोई गिरवी या गारंटर नहीं चाहिए।",
      "प्रोजेक्ट लागत पर 10% मार्जिन मनी सब्सिडी।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Uttar Pradesh.",
      "Aged 21 to 40 years.",
      "At least Class 8 pass, or holds a recognised training certificate, diploma or degree. Those trained under ODOP or Vishwakarma Shram Samman schemes get preference.",
      "The project is a new micro unit in manufacturing, services or trade.",
    ],
    hi: [
      "उत्तर प्रदेश के निवासी।",
      "उम्र 21 से 40 साल।",
      "कम से कम कक्षा 8 पास, या मान्यता प्राप्त ट्रेनिंग प्रमाण पत्र, डिप्लोमा या डिग्री। ODOP या विश्वकर्मा श्रम सम्मान योजना में ट्रेनिंग लेने वालों को प्राथमिकता।",
      "प्रोजेक्ट मैन्युफ़ैक्चरिंग, सेवा या व्यापार की नई छोटी इकाई हो।",
    ],
  },
  exclusions: {
    en: [
      "People already taking benefit of another central or state loan-subsidy scheme for the same purpose.",
      "People younger than 21 or older than 40.",
      "Projects costing more than ₹5 lakh get the benefit only up to ₹5 lakh.",
    ],
    hi: [
      "जो उसी काम के लिए किसी दूसरी केंद्र या राज्य की लोन-सब्सिडी योजना का लाभ ले रहे हैं।",
      "21 साल से कम या 40 साल से ज़्यादा उम्र के लोग।",
      "₹5 लाख से महँगे प्रोजेक्ट पर लाभ सिर्फ़ ₹5 लाख तक ही मिलता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the UP MSME portal (msme.up.gov.in / msme1connect.up.gov.in), open CM YUVA and register with your mobile number and Aadhaar.",
        "Fill in the form, choose your business activity and upload your documents and project report.",
        "The District Industries Centre reviews the application and sends it to a bank. Once the bank sanctions the loan, you start the business.",
      ],
      hi: [
        "UP MSME पोर्टल (msme.up.gov.in / msme1connect.up.gov.in) पर CM YUVA खोलें और मोबाइल नंबर व आधार से रजिस्टर करें।",
        "फ़ॉर्म भरें, अपना कारोबार चुनें और दस्तावेज़ व प्रोजेक्ट रिपोर्ट अपलोड करें।",
        "ज़िला उद्योग केंद्र आवेदन जाँचकर बैंक को भेजता है। बैंक से लोन मंज़ूर होने पर कारोबार शुरू करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Proof of age", "Class 8 or higher marksheet, or training certificate", "Project report", "Bank account details", "Passport-size photo", "Caste certificate, if applicable"],
    hi: ["आधार कार्ड", "उम्र का सबूत", "कक्षा 8 या उससे ऊपर की मार्कशीट, या ट्रेनिंग प्रमाण पत्र", "प्रोजेक्ट रिपोर्ट", "बैंक खाते का विवरण", "पासपोर्ट साइज़ फ़ोटो", "जाति प्रमाण पत्र, अगर लागू हो"],
  },
  faqs: [
    {
      q: { en: "Do I need a guarantor or property as security?", hi: "क्या गारंटर या संपत्ति गिरवी रखनी होगी?" },
      a: {
        en: "No. Loans under CM YUVA are given without collateral, and the state pays the interest.",
        hi: "नहीं। CM YUVA में लोन बिना गिरवी के मिलता है, और ब्याज राज्य सरकार देती है।",
      },
    },
    {
      q: { en: "Is there a helpline?", hi: "क्या कोई हेल्पलाइन है?" },
      a: {
        en: "Yes. The UP MSME helpline is 155343, or you can visit your District Industries Centre.",
        hi: "हाँ। UP MSME हेल्पलाइन 155343 है, या आप अपने ज़िला उद्योग केंद्र जा सकते हैं।",
      },
    },
  ],

  officialUrl: "https://msme1connect.up.gov.in/Home/SchemesList/66",
  sources: [
    "https://msme1connect.up.gov.in/Home/SchemesList/66",
    "https://invest.up.gov.in/wp-content/uploads/2024/03/CM-Yogi-launches_040324.pdf",
    "https://yourstory.com/2026/02/cm-yuva-yojana-mirzapur-truck-car-wash-centre",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
