import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "yuva-nidhi",
  name: { en: "Yuva Nidhi", hi: "युवा निधि योजना" },
  aka: ["Yuvanidhi", "Karnataka unemployment allowance"],
  shortDescription: {
    en: "Monthly allowance for unemployed young people of Karnataka: ₹3,000 for graduates and ₹1,500 for diploma holders, for up to 2 years or until you find work.",
    hi: "कर्नाटक के बेरोज़गार युवाओं को हर महीने भत्ता: स्नातकों को ₹3,000 और डिप्लोमा धारकों को ₹1,500, अधिकतम 2 साल तक या नौकरी मिलने तक।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Skill Development, Entrepreneurship and Livelihood Department, Government of Karnataka",
    hi: "कौशल विकास, उद्यमिता और आजीविका विभाग, कर्नाटक सरकार",
  },
  categories: ["skills-employment"],
  tags: ["unemployment allowance", "graduates", "diploma", "youth", "guarantee scheme", "jobs"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "cash" },
  kundliHouse: "career",
  eligibility: all(
    residentOf("karnataka"),
    labelled(when("employment", "eq", "unemployed"), { en: "You are currently unemployed", hi: "आप अभी बेरोज़गार हैं" }),
  ),

  details: {
    en: [
      "Yuva Nidhi is the fifth of Karnataka's guarantee schemes. It gives a monthly allowance to young graduates and diploma holders who have not found a job after finishing their studies.",
      "Graduates get ₹3,000 a month and diploma holders ₹1,500 a month. The money is paid by Direct Benefit Transfer for a maximum of two years, and stops as soon as you get a job.",
      "You must have been unemployed for at least 180 days after passing, and you must confirm every month through a self-declaration that you are still without work. The scheme is run by the Skill Development, Entrepreneurship and Livelihood Department.",
    ],
    hi: [
      "युवा निधि कर्नाटक की पाँचवीं गारंटी योजना है। इसमें पढ़ाई पूरी करने के बाद नौकरी न पाने वाले स्नातकों और डिप्लोमा धारकों को हर महीने भत्ता दिया जाता है।",
      "स्नातकों को हर महीने ₹3,000 और डिप्लोमा धारकों को ₹1,500 मिलते हैं। पैसा DBT से अधिकतम दो साल तक मिलता है, और नौकरी मिलते ही बंद हो जाता है।",
      "पास होने के बाद कम से कम 180 दिन बेरोज़गार रहना ज़रूरी है, और हर महीने स्व-घोषणा देकर बताना होता है कि आप अब भी बेरोज़गार हैं। योजना कौशल विकास, उद्यमिता और आजीविका विभाग चलाता है।",
    ],
  },
  benefits: {
    en: [
      "₹3,000 a month for unemployed graduates.",
      "₹1,500 a month for unemployed diploma holders.",
      "Paid for up to 2 years, or until you get a job, whichever is earlier.",
    ],
    hi: [
      "बेरोज़गार स्नातकों को हर महीने ₹3,000।",
      "बेरोज़गार डिप्लोमा धारकों को हर महीने ₹1,500।",
      "अधिकतम 2 साल तक या नौकरी मिलने तक, जो भी पहले हो।",
    ],
  },
  eligibilityText: {
    en: [
      "You have a degree or a diploma and passed in 2022–23 or a later year.",
      "You have been unemployed for at least 180 days since your results.",
      "You are domiciled in Karnataka and studied in the state for at least 6 years (up to your degree or diploma).",
      "You submit a self-declaration every month that you are still unemployed.",
    ],
    hi: [
      "आपके पास डिग्री या डिप्लोमा है और आप 2022–23 या उसके बाद पास हुए हैं।",
      "परिणाम आने के बाद से कम से कम 180 दिन से आप बेरोज़गार हैं।",
      "आप कर्नाटक के निवासी हैं और (डिग्री या डिप्लोमा तक) कम से कम 6 साल राज्य में पढ़े हैं।",
      "आप हर महीने स्व-घोषणा देते हैं कि आप अब भी बेरोज़गार हैं।",
    ],
  },
  exclusions: {
    en: [
      "Students who have gone on to further studies.",
      "Anyone with a government or private job, or who is self-employed.",
      "Anyone getting an apprenticeship stipend or another government unemployment allowance.",
    ],
    hi: [
      "जो आगे की पढ़ाई कर रहे हैं।",
      "जिनके पास सरकारी या निजी नौकरी है, या जो स्वरोज़गार करते हैं।",
      "जिन्हें अप्रेंटिसशिप स्टाइपेंड या कोई दूसरा सरकारी बेरोज़गारी भत्ता मिल रहा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the Karnataka guarantee schemes portal (sevasindhugs.karnataka.gov.in) and choose Yuva Nidhi.",
        "Log in with your Aadhaar and OTP, then fill in your education details.",
        "Submit the application, and from then on file the monthly self-declaration on the portal to keep receiving the allowance.",
      ],
      hi: [
        "कर्नाटक गारंटी योजना पोर्टल (sevasindhugs.karnataka.gov.in) खोलें और युवा निधि चुनें।",
        "आधार और OTP से लॉग इन करें, फिर पढ़ाई की जानकारी भरें।",
        "आवेदन जमा करें, और भत्ता मिलता रहे इसके लिए हर महीने पोर्टल पर स्व-घोषणा दें।",
      ],
    },
    offline: {
      en: [
        "Visit a Grama One, Karnataka One or Bangalore One centre with your documents.",
        "The operator submits the application on Seva Sindhu for you. Keep the acknowledgement.",
      ],
      hi: [
        "अपने काग़ज़ लेकर ग्राम वन, कर्नाटक वन या बैंगलोर वन केंद्र जाएँ।",
        "ऑपरेटर सेवा सिंधु पर आपका आवेदन जमा कर देगा। पावती संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Degree or diploma certificate and marks cards", "SSLC / PUC marks cards (proof of study in Karnataka)", "Domicile / residence certificate", "Aadhaar-linked bank account details"],
    hi: ["आधार कार्ड", "डिग्री या डिप्लोमा प्रमाण पत्र और अंक-पत्र", "SSLC / PUC अंक-पत्र (कर्नाटक में पढ़ाई का प्रमाण)", "निवास प्रमाण पत्र", "आधार से जुड़े बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "What happens if I get a job?", hi: "नौकरी मिल जाने पर क्या होगा?" },
      a: {
        en: "You must stop declaring yourself unemployed and the payments end. Taking the allowance while employed can lead to recovery of the money and penalties.",
        hi: "आपको बेरोज़गारी की घोषणा बंद करनी होगी और भुगतान रुक जाएगा। नौकरी रहते भत्ता लेने पर पैसा वापस वसूला जा सकता है और जुर्माना लग सकता है।",
      },
    },
    {
      q: { en: "I passed long before 2023. Can I apply?", hi: "मैं 2023 से बहुत पहले पास हुआ/हुई था/थी। क्या मैं आवेदन कर सकता/सकती हूँ?" },
      a: {
        en: "The scheme is for recent pass-outs, starting with the 2022–23 batch. Earlier batches are not covered.",
        hi: "यह योजना हाल में पास हुए युवाओं के लिए है, 2022–23 बैच से शुरू। इससे पहले के बैच शामिल नहीं हैं।",
      },
    },
  ],

  officialUrl: "https://sevasindhugs.karnataka.gov.in/",
  sources: [
    "https://sevasindhugs.karnataka.gov.in/",
    "https://www.myscheme.gov.in/schemes/yuvanidhi",
    "https://schemes.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-karnataka/yuva-nidhi-scheme-karnataka?lgn=en",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
