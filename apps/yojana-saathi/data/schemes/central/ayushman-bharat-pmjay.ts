import { everyone } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ayushman-bharat-pmjay",
  name: { en: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana", hi: "आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना" },
  aka: ["PM-JAY", "AB PM-JAY", "Ayushman Card", "Ayushman Bharat"],
  shortDescription: {
    en: "Free, cashless hospital treatment worth up to ₹5 lakh per family every year at government and empanelled private hospitals, for poor and vulnerable families.",
    hi: "गरीब और कमज़ोर परिवारों को सरकारी और सूचीबद्ध निजी अस्पतालों में हर साल प्रति परिवार ₹5 लाख तक का मुफ़्त, कैशलेस इलाज।",
  },
  level: "central",
  ministry: "health-family-welfare",
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "ayushman card", "free treatment", "hospital", "cashless", "golden card"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: everyone(),

  details: {
    en: [
      "PM-JAY is the government's health cover for poorer families. Each entitled family can get treatment worth up to ₹5 lakh a year in hospital without paying anything at the counter.",
      "Entitlement is not something you apply for with an income certificate. Families were picked from the Socio-Economic Caste Census (SECC) 2011 using deprivation criteria in villages and occupation types in towns, and many states have added their own lists (for example ration-card holders). You simply check whether your family is on the list.",
      "The scheme is run by the National Health Authority with the states. Treatment is available at any empanelled hospital across India, using your Ayushman card.",
    ],
    hi: [
      "PM-JAY गरीब परिवारों के लिए सरकार का स्वास्थ्य बीमा है। जिस परिवार का नाम सूची में है, उसे अस्पताल में हर साल ₹5 लाख तक का इलाज बिना काउंटर पर पैसे दिए मिलता है।",
      "इसके लिए आय प्रमाण पत्र देकर आवेदन नहीं करना होता। परिवारों को सामाजिक-आर्थिक जाति जनगणना (SECC) 2011 के आधार पर चुना गया था: गाँवों में अभाव के मापदंड और शहरों में काम के प्रकार से। कई राज्यों ने अपनी सूचियाँ भी जोड़ी हैं (जैसे राशन कार्ड वाले परिवार)। आपको बस यह देखना है कि आपके परिवार का नाम सूची में है या नहीं।",
      "यह योजना राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) राज्यों के साथ मिलकर चलाता है। आयुष्मान कार्ड से पूरे भारत के किसी भी सूचीबद्ध अस्पताल में इलाज मिलता है।",
    ],
  },
  benefits: {
    en: [
      "Cashless hospital treatment up to ₹5 lakh per family per year.",
      "No limit on family size or the age of family members.",
      "Illnesses you already had before joining are covered from day one.",
      "Covers 3 days before and 15 days after hospitalisation, including tests and medicines.",
      "Works at empanelled hospitals in any state, not just your own.",
    ],
    hi: [
      "हर साल प्रति परिवार ₹5 लाख तक का कैशलेस अस्पताल इलाज।",
      "परिवार के सदस्यों की संख्या या उम्र पर कोई सीमा नहीं।",
      "जुड़ने से पहले की बीमारियाँ भी पहले दिन से कवर।",
      "भर्ती से 3 दिन पहले और 15 दिन बाद तक के जाँच और दवाओं का ख़र्च शामिल।",
      "सिर्फ़ अपने राज्य में नहीं, किसी भी राज्य के सूचीबद्ध अस्पताल में इलाज।",
    ],
  },
  eligibilityText: {
    en: [
      "Rural families that meet SECC 2011 deprivation criteria, such as a one-room kutcha house, no adult earning member aged 16 to 59, a woman-headed household with no adult male, a disabled member with no able-bodied adult, SC/ST households, or landless households living on manual casual labour.",
      "Families with no shelter, destitute families, manual scavenger families, primitive tribal groups and freed bonded labourers are included automatically.",
      "Urban families whose main earner works in one of 11 listed jobs, such as rag picker, domestic worker, street vendor, construction worker, sanitation worker, home-based artisan, driver or shop assistant.",
      "Families added by your state government under its own list, and everyone aged 70 or above (see Ayushman Vay Vandana).",
    ],
    hi: [
      "SECC 2011 के अभाव मापदंडों वाले ग्रामीण परिवार, जैसे कच्ची दीवार-छत वाला एक कमरे का घर, 16 से 59 साल का कोई कमाने वाला वयस्क न होना, बिना वयस्क पुरुष वाला महिला-मुखिया परिवार, दिव्यांग सदस्य और कोई सक्षम वयस्क न होना, SC/ST परिवार, या मज़दूरी पर जीने वाले भूमिहीन परिवार।",
      "बेघर, बेसहारा, हाथ से मैला ढोने वाले परिवार, आदिम जनजाति समूह और बंधुआ मज़दूरी से छुड़ाए गए लोग अपने-आप शामिल हैं।",
      "शहरी परिवार जिनका मुख्य कमाने वाला 11 तय कामों में से किसी में है, जैसे कचरा बीनने वाले, घरेलू कामगार, रेहड़ी-पटरी वाले, निर्माण मज़दूर, सफ़ाई कर्मचारी, घर से काम करने वाले कारीगर, ड्राइवर या दुकान सहायक।",
      "राज्य सरकार की अपनी सूची में जोड़े गए परिवार, और 70 साल या उससे अधिक उम्र के सभी लोग (आयुष्मान वय वंदना देखें)।",
    ],
  },
  exclusions: {
    en: [
      "Families not on the SECC list or your state's list cannot enrol just by applying. Check your name first.",
      "Outpatient (OPD) visits and medicines without hospital admission are generally not covered.",
    ],
    hi: [
      "जिन परिवारों का नाम SECC सूची या राज्य की सूची में नहीं है, वे सिर्फ़ आवेदन करके नहीं जुड़ सकते। पहले अपना नाम जाँचें।",
      "बिना भर्ती के OPD जाँच और दवाएँ आमतौर पर कवर नहीं होतीं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the beneficiary portal (beneficiary.nha.gov.in) or the Ayushman app and log in with your mobile number and OTP.",
        "Search for your family by state and Aadhaar, ration card or name.",
        "If your name is listed, complete Aadhaar e-KYC and download your Ayushman card.",
      ],
      hi: [
        "लाभार्थी पोर्टल (beneficiary.nha.gov.in) या आयुष्मान ऐप खोलें और मोबाइल नंबर व OTP से लॉग इन करें।",
        "राज्य चुनकर आधार, राशन कार्ड या नाम से अपने परिवार को खोजें।",
        "नाम मिलने पर आधार e-KYC पूरा करें और आयुष्मान कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Go to a Common Service Centre (CSC) or the Ayushman Mitra desk at an empanelled hospital.",
        "Show your Aadhaar and ration card so they can check the list.",
        "If you are entitled, they will do e-KYC and make your Ayushman card.",
      ],
      hi: [
        "नज़दीकी जन सेवा केंद्र (CSC) या सूचीबद्ध अस्पताल के आयुष्मान मित्र डेस्क पर जाएँ।",
        "आधार और राशन कार्ड दिखाएँ ताकि वे सूची में नाम जाँच सकें।",
        "पात्र होने पर वे e-KYC करके आपका आयुष्मान कार्ड बना देंगे।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Ration card or other family ID", "Mobile number linked to Aadhaar"],
    hi: ["आधार कार्ड", "राशन कार्ड या परिवार का कोई और पहचान पत्र", "आधार से जुड़ा मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Do I need to pay a premium?", hi: "क्या कोई प्रीमियम देना होता है?" },
      a: {
        en: "No. The government pays for the cover. The Ayushman card is free, and the hospital should not charge you for covered treatment.",
        hi: "नहीं। बीमा का ख़र्च सरकार उठाती है। आयुष्मान कार्ड मुफ़्त है और कवर किए गए इलाज के लिए अस्पताल आपसे पैसे नहीं ले सकता।",
      },
    },
    {
      q: { en: "My name is not on the list. What can I do?", hi: "मेरा नाम सूची में नहीं है। क्या करूँ?" },
      a: {
        en: "Ask at your district's Ayushman office or call 14555 to check whether your state runs its own expanded list. If you are 70 or older, you can get the Ayushman Vay Vandana card regardless of the list.",
        hi: "ज़िले के आयुष्मान कार्यालय में पूछें या 14555 पर कॉल करें कि क्या आपके राज्य की अपनी बड़ी सूची है। अगर आपकी उम्र 70 साल या उससे अधिक है, तो सूची से हटकर भी आयुष्मान वय वंदना कार्ड बनवा सकते हैं।",
      },
    },
  ],

  officialUrl: "https://beneficiary.nha.gov.in/",
  sources: [
    "https://beneficiary.nha.gov.in/",
    "https://pmjay.gov.in/",
    "https://cag.gov.in/uploads/download_audit_report/2023/07_Chapter-III-064d22bab3e7926.55858781.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
