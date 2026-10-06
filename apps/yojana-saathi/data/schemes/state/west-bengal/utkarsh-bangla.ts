import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "utkarsh-bangla",
  tier: "compact",
  name: { en: "Utkarsh Bangla", hi: "उत्कर्ष बांग्ला" },
  aka: ["PBSSD", "Utkarsh Bangla skill training"],
  shortDescription: {
    en: "Free short-term job training with a certificate and placement help for young people in West Bengal aged 15 to 45, in trades from healthcare and IT to construction and retail.",
    hi: "पश्चिम बंगाल के 15 से 45 साल के युवाओं को मुफ़्त अल्पकालिक कौशल प्रशिक्षण, प्रमाण पत्र और नौकरी में मदद, स्वास्थ्य सेवा और IT से लेकर निर्माण और रिटेल तक के कामों में।",
  },
  level: "state",
  state: "west-bengal",
  department: {
    en: "Department of Technical Education, Training & Skill Development (Paschim Banga Society for Skill Development), Government of West Bengal",
    hi: "तकनीकी शिक्षा, प्रशिक्षण एवं कौशल विकास विभाग (पश्चिम बंग सोसाइटी फ़ॉर स्किल डेवलपमेंट), पश्चिम बंगाल सरकार",
  },
  categories: ["skills-employment"],
  tags: ["skill training", "free course", "job", "youth", "utkarsh bangla", "west bengal"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 15, max: 45 },
  kundliHouse: "career",
  eligibility: all(residentOf("west-bengal"), ...ageBetween(15, 45)),

  details: {
    en: [
      "Utkarsh Bangla is West Bengal's main skill development programme. It offers free short-term training in many trades through approved training centres, ITIs and polytechnics across all districts.",
      "It is run by the Paschim Banga Society for Skill Development. After training and an assessment, you get a certificate, and many centres help with job placement or starting your own work.",
    ],
    hi: [
      "उत्कर्ष बांग्ला पश्चिम बंगाल का मुख्य कौशल विकास कार्यक्रम है। इसमें सभी ज़िलों के मान्य प्रशिक्षण केंद्रों, ITI और पॉलिटेक्निक में कई कामों का मुफ़्त अल्पकालिक प्रशिक्षण मिलता है।",
      "इसे पश्चिम बंग सोसाइटी फ़ॉर स्किल डेवलपमेंट चलाती है। प्रशिक्षण और जाँच के बाद प्रमाण पत्र मिलता है, और कई केंद्र नौकरी या अपना काम शुरू करने में मदद करते हैं।",
    ],
  },
  benefits: {
    en: [
      "Free training, with no course fees.",
      "Courses in healthcare, IT, construction, apparel, hospitality, retail, beauty, automobile, electronics, tourism, agriculture and more.",
      "A certificate after you pass the assessment.",
      "Help with placement, job fairs and interviews.",
    ],
    hi: [
      "मुफ़्त प्रशिक्षण, कोई कोर्स फ़ीस नहीं।",
      "स्वास्थ्य सेवा, IT, निर्माण, कपड़ा, होटल, रिटेल, ब्यूटी, ऑटोमोबाइल, इलेक्ट्रॉनिक्स, पर्यटन, खेती और दूसरे क्षेत्रों के कोर्स।",
      "जाँच पास करने पर प्रमाण पत्र।",
      "नौकरी, रोज़गार मेले और इंटरव्यू में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of West Bengal aged 15 to 45 (the exact age depends on the course).",
      "Unemployed, underemployed, a school or college dropout, or wanting to upgrade skills.",
      "Meets the minimum education needed for the chosen course.",
    ],
    hi: [
      "पश्चिम बंगाल का निवासी, उम्र 15 से 45 साल (सही उम्र कोर्स पर निर्भर है)।",
      "बेरोज़गार, कम काम वाला, स्कूल या कॉलेज छोड़ चुका, या अपना हुनर बढ़ाना चाहता हो।",
      "चुने गए कोर्स के लिए ज़रूरी न्यूनतम पढ़ाई हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to pbssd.gov.in (Utkarsh Bangla) and check the courses and training centres near you.",
        "Register with your personal details, education and preferred trade.",
        "The centre checks your documents and enrols you in a batch.",
      ],
      hi: [
        "pbssd.gov.in (उत्कर्ष बांग्ला) पर जाएँ और अपने पास के कोर्स और प्रशिक्षण केंद्र देखें।",
        "अपनी निजी जानकारी, पढ़ाई और पसंदीदा काम के साथ पंजीकरण करें।",
        "केंद्र आपके दस्तावेज़ जाँचकर आपको किसी बैच में दाख़िला देता है।",
      ],
    },
    offline: {
      en: ["Visit a nearby approved training centre, ITI, District Skill Development Office or Block Development Office with your Aadhaar, educational certificates, bank details and a photo."],
      hi: ["आधार, पढ़ाई के प्रमाण पत्र, बैंक का ब्योरा और फ़ोटो लेकर पास के मान्य प्रशिक्षण केंद्र, ITI, ज़िला कौशल विकास कार्यालय या ब्लॉक विकास कार्यालय जाएँ।"],
    },
  },

  officialUrl: "https://www.pbssd.gov.in/",
  sources: ["https://wb.gov.in/government-schemes-details-utkarsh-bangla.aspx", "https://www.pbssd.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
