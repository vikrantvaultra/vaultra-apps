import { all, ageBetween, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-bandhkam-kamgar-kalyan-yojana",
  tier: "full",
  name: {
    en: "Maharashtra Construction Workers Welfare Schemes (MahaBOCW)",
    hi: "महाराष्ट्र बांधकाम कामगार कल्याण योजनाएँ (MahaBOCW)",
  },
  aka: ["Bandhkam Kamgar Yojana", "MahaBOCW", "construction worker registration Maharashtra"],
  shortDescription: {
    en: "Registered construction workers in Maharashtra get help with marriage (₹30,000), children's education, a ₹1 lakh deposit for a daughter, housing, and ₹5 lakh if they die in a work accident.",
    hi: "महाराष्ट्र में पंजीकृत निर्माण मज़दूरों को शादी (₹30,000), बच्चों की पढ़ाई, बेटी के लिए ₹1 लाख की जमा राशि, घर और काम पर दुर्घटना में मृत्यु होने पर ₹5 लाख की मदद मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Maharashtra Building and Other Construction Workers Welfare Board, Labour Department, Government of Maharashtra",
    hi: "महाराष्ट्र भवन एवं अन्य निर्माण कामगार कल्याण मंडल, श्रम विभाग, महाराष्ट्र सरकार",
  },
  categories: ["social-welfare", "education", "pension-insurance"],
  tags: ["construction worker", "bandhkam kamgar", "labour", "mahabocw", "marriage", "education", "maharashtra"],
  benefitType: "composite",
  isDBT: true,
  ageRange: { min: 18, max: 60 },
  kundliHouse: "career",
  eligibility: all(residentOf("maharashtra"), ...ageBetween(18, 60), when("occupation", "eq", "construction-worker")),

  details: {
    en: [
      "The Maharashtra Building and Other Construction Workers Welfare Board looks after people who work on building sites: masons, labourers, carpenters, plumbers, electricians, painters, tile fitters and many others.",
      "Once you register with the Board, you and your family can apply for a long list of benefits covering marriage, education, health, housing and accidents. The money comes from a cess paid by builders, not from your wages.",
      "Registration is now free. You need to renew it every year to keep getting benefits.",
    ],
    hi: [
      "महाराष्ट्र भवन एवं अन्य निर्माण कामगार कल्याण मंडल निर्माण स्थलों पर काम करने वालों की देखभाल करता है: राजमिस्त्री, मज़दूर, बढ़ई, प्लंबर, इलेक्ट्रीशियन, पेंटर, टाइल लगाने वाले और कई दूसरे।",
      "मंडल में पंजीकरण के बाद आप और आपका परिवार शादी, पढ़ाई, सेहत, घर और दुर्घटना से जुड़ी कई योजनाओं के लिए आवेदन कर सकते हैं। यह पैसा बिल्डरों से लिए जाने वाले उपकर (cess) से आता है, आपकी मज़दूरी से नहीं।",
      "पंजीकरण अब मुफ़्त है। लाभ मिलते रहने के लिए इसे हर साल नवीनीकृत करना होता है।",
    ],
  },
  benefits: {
    en: [
      "₹30,000 for the worker's first marriage, and ₹51,000 for a daughter's marriage.",
      "Yearly education help for the first two children: ₹2,500 (classes 1–7), ₹5,000 (classes 8–10), ₹10,000 (classes 11–12), ₹20,000 a year for a degree or diploma.",
      "Larger help for professional courses: ₹1 lakh for medicine and ₹60,000 for engineering.",
      "A ₹1 lakh fixed deposit for a girl child, payable at 18.",
      "₹2 lakh for 75% or permanent disability.",
      "₹5 lakh to the family if the worker dies in an accident at work; ₹2 lakh for a natural death, plus ₹10,000 for funeral costs.",
      "₹24,000 a year for 5 years to the widow or widower of a registered worker.",
      "Help with housing: up to ₹2 lakh as a grant (or support for a home loan of up to ₹6 lakh).",
    ],
    hi: [
      "मज़दूर की पहली शादी के लिए ₹30,000, और बेटी की शादी के लिए ₹51,000।",
      "पहले दो बच्चों की पढ़ाई के लिए हर साल मदद: ₹2,500 (कक्षा 1–7), ₹5,000 (कक्षा 8–10), ₹10,000 (कक्षा 11–12), डिग्री या डिप्लोमा के लिए हर साल ₹20,000।",
      "प्रोफ़ेशनल कोर्स के लिए ज़्यादा मदद: मेडिकल के लिए ₹1 लाख और इंजीनियरिंग के लिए ₹60,000।",
      "बेटी के नाम ₹1 लाख की फ़िक्स्ड डिपॉज़िट, जो 18 साल पर मिलती है।",
      "75% या स्थायी दिव्यांगता पर ₹2 लाख।",
      "काम पर दुर्घटना में मृत्यु होने पर परिवार को ₹5 लाख; प्राकृतिक मृत्यु पर ₹2 लाख, और अंतिम संस्कार के लिए ₹10,000।",
      "पंजीकृत मज़दूर की विधवा या विधुर को 5 साल तक हर साल ₹24,000।",
      "घर के लिए मदद: ₹2 लाख तक अनुदान (या ₹6 लाख तक के होम लोन के लिए सहायता)।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 to 60 years.",
      "Worked at least 90 days on building or construction work in the last 12 months.",
      "Works in Maharashtra and is registered with the Board (registration must be renewed every year).",
    ],
    hi: [
      "उम्र 18 से 60 साल।",
      "पिछले 12 महीनों में कम से कम 90 दिन भवन या निर्माण का काम किया हो।",
      "महाराष्ट्र में काम करते हों और मंडल में पंजीकृत हों (पंजीकरण हर साल नवीनीकृत करना होता है)।",
    ],
  },
  exclusions: {
    en: [
      "Workers who have not completed 90 days of construction work in the past year.",
      "Workers whose registration has lapsed because it was not renewed.",
      "Education help is only for the first two children.",
    ],
    hi: [
      "जिन्होंने पिछले साल 90 दिन निर्माण का काम पूरा नहीं किया।",
      "जिनका पंजीकरण नवीनीकरण न करने से ख़त्म हो गया है।",
      "पढ़ाई की मदद सिर्फ़ पहले दो बच्चों के लिए है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to mahabocw.in and choose construction worker registration.",
        "Enter your Aadhaar and mobile number, fill in your details and upload the 90-day work certificate and other documents.",
        "Book an appointment and visit the facilitation centre to verify original documents. After registration, apply for each benefit from the same portal.",
      ],
      hi: [
        "mahabocw.in पर जाएँ और निर्माण कामगार पंजीकरण चुनें।",
        "आधार और मोबाइल नंबर डालें, अपनी जानकारी भरें और 90 दिन के काम का प्रमाण पत्र व दूसरे दस्तावेज़ अपलोड करें।",
        "अपॉइंटमेंट लें और मूल दस्तावेज़ों की जाँच के लिए सुविधा केंद्र पर जाएँ। पंजीकरण के बाद हर योजना के लिए उसी पोर्टल से आवेदन करें।",
      ],
    },
    offline: {
      en: [
        "Visit the taluka facilitation centre (WFC) of the Board or the district labour office.",
        "Staff will help you register and apply for benefits free of charge.",
      ],
      hi: [
        "मंडल के तालुका सुविधा केंद्र (WFC) या ज़िला श्रम कार्यालय जाएँ।",
        "कर्मचारी मुफ़्त में पंजीकरण और योजनाओं के आवेदन में मदद करेंगे।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Age proof",
      "Certificate of 90 days of construction work in the last 12 months (from a contractor, builder, Gram Sevak or municipal officer)",
      "Proof of residence",
      "Three passport-size photos",
      "Bank passbook",
    ],
    hi: [
      "आधार कार्ड",
      "उम्र का प्रमाण",
      "पिछले 12 महीनों में 90 दिन निर्माण काम का प्रमाण पत्र (ठेकेदार, बिल्डर, ग्रामसेवक या नगरपालिका अधिकारी से)",
      "निवास का प्रमाण",
      "तीन पासपोर्ट साइज़ फ़ोटो",
      "बैंक पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "Is there a fee to register?", hi: "क्या पंजीकरण की कोई फ़ीस है?" },
      a: {
        en: "No. The Board made registration free in August 2025. Don't pay agents; the facilitation centre helps for free.",
        hi: "नहीं। मंडल ने अगस्त 2025 से पंजीकरण मुफ़्त कर दिया है। एजेंटों को पैसे न दें; सुविधा केंद्र मुफ़्त में मदद करता है।",
      },
    },
    {
      q: { en: "Who can sign my 90-day work certificate?", hi: "मेरे 90 दिन के काम का प्रमाण पत्र पर कौन हस्ताक्षर कर सकता है?" },
      a: {
        en: "Usually the contractor or builder you worked for. In villages the Gram Sevak, and in towns an authorised municipal officer, can also certify it.",
        hi: "आमतौर पर वह ठेकेदार या बिल्डर जिसके लिए आपने काम किया। गाँवों में ग्रामसेवक और शहरों में अधिकृत नगरपालिका अधिकारी भी प्रमाणित कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://mahabocw.in/",
  sources: ["https://mahabocw.in/", "https://mahabocw.in/en/welfare-schemes/"],
  lastVerified: "2026-10-06",
  launchedYear: 2011,
  status: "active",
};

export default scheme;
