import { all, isTrue, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-vikas",
  name: { en: "PM VIKAS (Pradhan Mantri Virasat ka Samvardhan)", hi: "पीएम विकास (प्रधानमंत्री विरासत का संवर्धन)" },
  aka: ["PM VIKAS", "Virasat ka Samvardhan", "Seekho aur Kamao", "USTTAD", "Nai Manzil", "Nai Roshni"],
  shortDescription: {
    en: "Government-funded skill training with placement support, women's leadership and business training, and help finishing Class 8, 10 or 12 for youth from minority communities.",
    hi: "अल्पसंख्यक समुदायों के युवाओं के लिए प्लेसमेंट सहायता के साथ सरकारी ख़र्च पर कौशल प्रशिक्षण, महिलाओं के लिए नेतृत्व और व्यवसाय प्रशिक्षण, और कक्षा 8, 10 या 12 पूरी करने में मदद।",
  },
  level: "central",
  ministry: "minority-affairs",
  categories: ["skills-employment", "minority"],
  tags: ["skill training", "minority", "artisan", "women entrepreneurship", "nios", "placement"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "career",
  eligibility: all(
    labelled(isTrue("minority"), { en: "You belong to a notified minority community", hi: "आप अधिसूचित अल्पसंख्यक समुदाय से हैं" }),
  ),

  details: {
    en: [
      "PM VIKAS is the Ministry of Minority Affairs' main livelihood scheme. It merges five older schemes: Seekho aur Kamao, Nai Manzil, Nai Roshni, Hamari Dharohar and USTTAD.",
      "It has four parts: skill training in both modern job roles (IT, electronics, logistics, healthcare and more) and traditional crafts; women's leadership and entrepreneurship; school completion through the National Institute of Open Schooling (NIOS); and infrastructure in minority areas.",
      "Guidelines were approved in January 2025 and training began in 2025-26 through approved training agencies across states. You register on the PM VIKAS portal or join a batch run by a training agency near you.",
    ],
    hi: [
      "पीएम विकास अल्पसंख्यक कार्य मंत्रालय की मुख्य आजीविका योजना है। इसमें पाँच पुरानी योजनाएँ जोड़ी गई हैं: सीखो और कमाओ, नई मंज़िल, नई रोशनी, हमारी धरोहर और उस्ताद।",
      "इसके चार हिस्से हैं: आधुनिक नौकरियों (IT, इलेक्ट्रॉनिक्स, लॉजिस्टिक्स, हेल्थकेयर आदि) और पारंपरिक शिल्प दोनों में कौशल प्रशिक्षण; महिलाओं के लिए नेतृत्व और उद्यमिता; राष्ट्रीय मुक्त विद्यालयी शिक्षा संस्थान (NIOS) से स्कूली पढ़ाई पूरी करना; और अल्पसंख्यक इलाक़ों में ढाँचागत विकास।",
      "दिशानिर्देश जनवरी 2025 में मंज़ूर हुए और 2025-26 में राज्यों में मान्य प्रशिक्षण संस्थाओं के ज़रिए प्रशिक्षण शुरू हुआ। आप पीएम विकास पोर्टल पर रजिस्टर करें या पास की प्रशिक्षण संस्था के बैच में जुड़ें।",
    ],
  },
  benefits: {
    en: [
      "Government-funded, NSQF-aligned skill training with placement support (the target is to place at least 75% of trainees).",
      "Training, design help and market access for traditional artisans, including events like Lok Samvardhan Parv.",
      "Leadership and business training for minority women.",
      "Support to complete Class 8, 10 or 12 through NIOS for school dropouts.",
      "Links to loans from the National Minorities Development & Finance Corporation (NMDFC).",
    ],
    hi: [
      "सरकारी ख़र्च पर NSQF के अनुसार कौशल प्रशिक्षण और प्लेसमेंट सहायता (कम से कम 75% प्रशिक्षुओं को काम दिलाने का लक्ष्य)।",
      "पारंपरिक कारीगरों के लिए प्रशिक्षण, डिज़ाइन में मदद और बाज़ार तक पहुँच, जैसे लोक संवर्धन पर्व।",
      "अल्पसंख्यक महिलाओं के लिए नेतृत्व और व्यवसाय प्रशिक्षण।",
      "पढ़ाई छोड़ चुके लोगों को NIOS से कक्षा 8, 10 या 12 पूरी करने में मदद।",
      "राष्ट्रीय अल्पसंख्यक विकास एवं वित्त निगम (NMDFC) के ऋण से जोड़ना।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian citizen from a notified minority: Muslim, Christian, Sikh, Buddhist, Jain or Parsi.",
      "Mainly for people aged 14 to 45 from economically weaker families; the women's leadership part is for women aged 18 to 45.",
      "Meets the minimum education for the chosen job role.",
      "Has Aadhaar and an Aadhaar-linked bank account (the training agency can help you get these).",
    ],
    hi: [
      "अधिसूचित अल्पसंख्यक समुदाय के भारतीय नागरिक: मुस्लिम, ईसाई, सिख, बौद्ध, जैन या पारसी।",
      "मुख्य रूप से आर्थिक रूप से कमज़ोर परिवारों के 14 से 45 साल के लोगों के लिए; महिला नेतृत्व वाला हिस्सा 18 से 45 साल की महिलाओं के लिए है।",
      "चुने गए काम के लिए ज़रूरी न्यूनतम पढ़ाई हो।",
      "आधार और आधार से जुड़ा बैंक खाता हो (प्रशिक्षण संस्था इन्हें बनवाने में मदद कर सकती है)।",
    ],
  },
  exclusions: {
    en: [
      "Seats are limited and allotted to training agencies by state, so a batch may not be running near you.",
      "Non-minority candidates from poor families can fill only a small share of seats (up to 25% in traditional training, 15% elsewhere).",
    ],
    hi: [
      "सीटें सीमित हैं और राज्य के हिसाब से प्रशिक्षण संस्थाओं को दी जाती हैं, इसलिए हो सकता है आपके पास बैच न चल रहा हो।",
      "गरीब परिवारों के गैर-अल्पसंख्यक उम्मीदवार सिर्फ़ थोड़ी सीटें ले सकते हैं (पारंपरिक प्रशिक्षण में 25% तक, बाक़ी में 15%)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to pmvikas.minorityaffairs.gov.in and choose Register, then Candidate (New Applicant Registration).",
        "Fill in your details with Aadhaar and pick the component and trade you want.",
        "A training agency contacts you when a batch starts in your area.",
      ],
      hi: [
        "pmvikas.minorityaffairs.gov.in पर जाएँ और Register में Candidate (New Applicant Registration) चुनें।",
        "आधार के साथ अपनी जानकारी भरें और मनचाहा हिस्सा और ट्रेड चुनें।",
        "आपके इलाक़े में बैच शुरू होने पर प्रशिक्षण संस्था आपसे संपर्क करती है।",
      ],
    },
    offline: {
      en: [
        "Ask your district minority welfare office which training agencies are running PM VIKAS batches nearby.",
        "Visit the agency's centre with your documents and enrol in a batch.",
      ],
      hi: [
        "ज़िला अल्पसंख्यक कल्याण कार्यालय से पूछें कि पास में कौन-सी संस्थाएँ पीएम विकास के बैच चला रही हैं।",
        "दस्तावेज़ों के साथ संस्था के केंद्र पर जाएँ और बैच में नाम लिखवाएँ।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Aadhaar-linked bank account", "Self-declaration of minority community", "Education certificates for the chosen course", "Passport-size photo"],
    hi: ["आधार", "आधार से जुड़ा बैंक खाता", "अल्पसंख्यक समुदाय का स्व-घोषणा पत्र", "चुने गए कोर्स के लिए पढ़ाई के प्रमाणपत्र", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay for the training?", hi: "क्या प्रशिक्षण के लिए पैसे देने होंगे?" },
      a: {
        en: "The training is funded by the Ministry through the training agency. If an agency asks you for a fee, check with your district minority welfare office first.",
        hi: "प्रशिक्षण का ख़र्च मंत्रालय प्रशिक्षण संस्था के ज़रिए उठाता है। अगर कोई संस्था आपसे फ़ीस माँगे, तो पहले ज़िला अल्पसंख्यक कल्याण कार्यालय से पूछ लें।",
      },
    },
    {
      q: { en: "Are there seats reserved for women?", hi: "क्या महिलाओं के लिए सीटें आरक्षित हैं?" },
      a: {
        en: "Yes. At least 33% of skilling seats and 50% of education seats are for women, and the leadership and entrepreneurship part is only for women. 3% of seats are for persons with disabilities.",
        hi: "हाँ। कौशल प्रशिक्षण की कम से कम 33% और शिक्षा की 50% सीटें महिलाओं के लिए हैं, और नेतृत्व व उद्यमिता वाला हिस्सा सिर्फ़ महिलाओं के लिए है। 3% सीटें दिव्यांगजनों के लिए हैं।",
      },
    },
  ],

  officialUrl: "https://pmvikas.minorityaffairs.gov.in/",
  sources: [
    "https://pmvikas.minorityaffairs.gov.in/page/eligibility-criteria-for-beneficiaries",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222788",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2200368",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2101513",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
