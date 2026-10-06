import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-yuva-karya-prashikshan",
  name: { en: "Mukhyamantri Yuva Karya Prashikshan Yojana", hi: "मुख्यमंत्री युवा कार्य प्रशिक्षण योजना" },
  aka: ["CMYKPY", "MMYKPY", "Yuva Karya Prashikshan"],
  shortDescription: {
    en: "Young people in Maharashtra aged 18 to 35 get six months of paid on-the-job training, with a monthly stipend of ₹6,000 to ₹10,000 depending on their qualification.",
    hi: "महाराष्ट्र के 18 से 35 साल के युवाओं को छह महीने की काम पर ट्रेनिंग, और योग्यता के हिसाब से हर महीने ₹6,000 से ₹10,000 तक का स्टाइपेंड।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Skill, Employment, Entrepreneurship and Innovation Department, Government of Maharashtra",
    hi: "कौशल, रोज़गार, उद्यमिता और नवाचार विभाग, महाराष्ट्र सरकार",
  },
  categories: ["skills-employment"],
  tags: ["internship", "stipend", "job training", "youth", "unemployed", "maharashtra"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 6000, period: "monthly", kind: "cash" },
  ageRange: { min: 18, max: 35 },
  kundliHouse: "career",
  eligibility: all(residentOf("maharashtra"), ...ageBetween(18, 35)),

  details: {
    en: [
      "Mukhyamantri Yuva Karya Prashikshan Yojana gives young job seekers real work experience. It was launched in 2024 with a target of about 10 lakh training places a year.",
      "You are placed for six months with a government office, a company, an industry unit or a start-up that has registered on the scheme portal. You learn on the job while you work there.",
      "The state pays a monthly stipend straight into your Aadhaar-linked bank account. The amount depends on your highest qualification. The scheme is run by the Skill, Employment, Entrepreneurship and Innovation Department through the Mahaswayam portal.",
    ],
    hi: [
      "मुख्यमंत्री युवा कार्य प्रशिक्षण योजना नौकरी ढूँढ रहे युवाओं को असली काम का अनुभव देती है। यह 2024 में शुरू हुई, और हर साल लगभग 10 लाख ट्रेनिंग सीटों का लक्ष्य रखा गया।",
      "आपको छह महीने के लिए किसी सरकारी दफ़्तर, कंपनी, उद्योग या स्टार्ट-अप में भेजा जाता है, जिसने योजना के पोर्टल पर रजिस्ट्रेशन किया हो। वहाँ काम करते हुए आप सीखते हैं।",
      "राज्य सरकार हर महीने स्टाइपेंड सीधे आपके आधार से जुड़े बैंक खाते में भेजती है। राशि आपकी सबसे ऊँची पढ़ाई पर निर्भर करती है। यह योजना कौशल, रोज़गार, उद्यमिता और नवाचार विभाग महास्वयं पोर्टल से चलाता है।",
    ],
  },
  benefits: {
    en: [
      "₹6,000 a month if you are 12th pass.",
      "₹8,000 a month if you have an ITI or diploma.",
      "₹10,000 a month if you are a graduate or postgraduate.",
      "Six months of work experience with a certificate at the end.",
    ],
    hi: [
      "12वीं पास होने पर हर महीने ₹6,000।",
      "ITI या डिप्लोमा होने पर हर महीने ₹8,000।",
      "ग्रेजुएट या पोस्ट-ग्रेजुएट होने पर हर महीने ₹10,000।",
      "छह महीने का काम का अनुभव और आख़िर में प्रमाण पत्र।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of Maharashtra.",
      "Aged 18 to 35 years.",
      "At least 12th pass, or holds an ITI, diploma, degree or postgraduate qualification.",
      "Registered as a job seeker on the Mahaswayam portal, with Aadhaar and an Aadhaar-linked bank account.",
    ],
    hi: [
      "महाराष्ट्र के निवासी।",
      "उम्र 18 से 35 साल।",
      "कम से कम 12वीं पास, या ITI, डिप्लोमा, डिग्री या पोस्ट-ग्रेजुएट योग्यता।",
      "महास्वयं पोर्टल पर नौकरी चाहने वाले के रूप में रजिस्टर्ड, आधार और आधार से जुड़े बैंक खाते के साथ।",
    ],
  },
  exclusions: {
    en: [
      "People younger than 18 or older than 35.",
      "People who have not passed Class 12 (or an ITI / diploma).",
      "Residents of other states.",
    ],
    hi: [
      "18 साल से कम या 35 साल से ज़्यादा उम्र के लोग।",
      "जिन्होंने 12वीं (या ITI / डिप्लोमा) पास नहीं किया।",
      "दूसरे राज्यों के निवासी।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register as a job seeker on rojgar.mahaswayam.gov.in and open the CMYKPY section.",
        "Fill in your education details and upload your certificates.",
        "Browse training vacancies posted by establishments and apply. Once selected, join the establishment and mark attendance to get the stipend.",
      ],
      hi: [
        "rojgar.mahaswayam.gov.in पर नौकरी चाहने वाले के रूप में रजिस्टर करें और CMYKPY वाला हिस्सा खोलें।",
        "अपनी पढ़ाई की जानकारी भरें और प्रमाण पत्र अपलोड करें।",
        "संस्थानों की डाली गई ट्रेनिंग वैकेंसी देखें और आवेदन करें। चुने जाने पर संस्थान में शामिल हों और स्टाइपेंड के लिए हाज़िरी लगाएँ।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Maharashtra domicile certificate", "Marksheets / certificates of your highest qualification", "Aadhaar-linked bank account", "Mobile number and email"],
    hi: ["आधार कार्ड", "महाराष्ट्र अधिवास प्रमाण पत्र", "सबसे ऊँची पढ़ाई की मार्कशीट / प्रमाण पत्र", "आधार से जुड़ा बैंक खाता", "मोबाइल नंबर और ईमेल"],
  },
  faqs: [
    {
      q: { en: "Is this a permanent job?", hi: "क्या यह पक्की नौकरी है?" },
      a: {
        en: "No. It is a six-month paid training placement. It does not guarantee a job afterwards, though the experience can help you get one.",
        hi: "नहीं। यह छह महीने की पेड ट्रेनिंग है। इसके बाद नौकरी की गारंटी नहीं है, पर यह अनुभव नौकरी पाने में मदद कर सकता है।",
      },
    },
    {
      q: { en: "Who pays the stipend?", hi: "स्टाइपेंड कौन देता है?" },
      a: {
        en: "The state government pays it by DBT into your bank account, based on your attendance at the establishment.",
        hi: "राज्य सरकार इसे संस्थान में आपकी हाज़िरी के आधार पर DBT से आपके बैंक खाते में देती है।",
      },
    },
  ],

  officialUrl: "https://rojgar.mahaswayam.gov.in/",
  sources: [
    "https://rojgar.mahaswayam.gov.in/",
    "https://cmykpy.mahaswayam.gov.in/DocMasters/PublicityDocuments/CMYKPY_Note.pdf",
    "https://jalgaon.gov.in/en/scheme-category/mukhyamantri-yuva-karya-prashikshan-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
