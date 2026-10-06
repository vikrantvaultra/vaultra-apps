import { all, ageBetween } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pmkvy",
  name: { en: "Pradhan Mantri Kaushal Vikas Yojana", hi: "प्रधानमंत्री कौशल विकास योजना" },
  aka: ["PMKVY", "PMKVY 4.0", "Skill India"],
  shortDescription: {
    en: "Free, government-certified skill training in hundreds of job roles, from electrician and beautician to drones and AI, for people aged 15 to 59.",
    hi: "15 से 59 साल के लोगों के लिए इलेक्ट्रीशियन, ब्यूटीशियन से लेकर ड्रोन और AI तक सैकड़ों कामों में मुफ़्त, सरकारी प्रमाणित कौशल प्रशिक्षण।",
  },
  level: "central",
  ministry: "skill-development-entrepreneurship",
  categories: ["skills-employment"],
  tags: ["skill training", "free course", "certificate", "job", "youth", "skill india"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 15, max: 59 },
  kundliHouse: "career",
  eligibility: all(...ageBetween(15, 59)),

  details: {
    en: [
      "PMKVY is the government's main free skill-training scheme. You join a short course at an approved training centre, learn a job skill, pass an assessment and get a nationally recognised certificate. The current version, PMKVY 4.0, is part of the Skill India Programme.",
      "There are two main routes. Short-Term Training is for people learning a new skill (ages 15 to 45). Recognition of Prior Learning (RPL) is for people who already work and want their skills tested and certified (ages 18 to 59).",
      "The scheme is run by the Ministry of Skill Development and Entrepreneurship through the National Skill Development Corporation (NSDC). Courses are listed and booked on the Skill India Digital Hub.",
    ],
    hi: [
      "PMKVY सरकार की मुख्य मुफ़्त कौशल प्रशिक्षण योजना है। आप किसी मान्य प्रशिक्षण केंद्र में छोटा कोर्स करते हैं, काम का हुनर सीखते हैं, परीक्षा पास करते हैं और देश भर में मान्य प्रमाण पत्र पाते हैं। इसका मौजूदा रूप PMKVY 4.0 स्किल इंडिया प्रोग्राम का हिस्सा है।",
      "इसके दो मुख्य रास्ते हैं। शॉर्ट-टर्म ट्रेनिंग नया हुनर सीखने वालों के लिए है (15 से 45 साल)। रिकग्निशन ऑफ़ प्रायर लर्निंग (RPL) उनके लिए है जो पहले से काम करते हैं और अपने हुनर की जाँच करवाकर प्रमाण पत्र चाहते हैं (18 से 59 साल)।",
      "यह योजना कौशल विकास एवं उद्यमशीलता मंत्रालय राष्ट्रीय कौशल विकास निगम (NSDC) के ज़रिए चलाता है। कोर्स स्किल इंडिया डिजिटल हब पर देखे और बुक किए जाते हैं।",
    ],
  },
  benefits: {
    en: [
      "Free training at approved centres; the government pays the course fee.",
      "Nationally recognised skill certificate after you pass the assessment.",
      "Courses in traditional and new-age job roles, many with on-the-job training.",
      "Help with job placement or self-employment after certification.",
    ],
    hi: [
      "मान्य केंद्रों पर मुफ़्त प्रशिक्षण; कोर्स की फ़ीस सरकार देती है।",
      "परीक्षा पास करने पर देश भर में मान्य कौशल प्रमाण पत्र।",
      "पारंपरिक और नए ज़माने के कामों के कोर्स, कई में काम पर रहकर सीखने की सुविधा।",
      "प्रमाण पत्र के बाद नौकरी या स्व-रोज़गार में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian citizen aged 15 to 59 years.",
      "Short-Term Training: ages 15 to 45; school or college dropouts and unemployed youth are welcome.",
      "Recognition of Prior Learning: ages 18 to 59, for people who already have work experience in the trade.",
      "A valid Aadhaar and a bank account are needed.",
    ],
    hi: [
      "15 से 59 साल के भारतीय नागरिक।",
      "शॉर्ट-टर्म ट्रेनिंग: 15 से 45 साल; पढ़ाई छोड़ चुके और बेरोज़गार युवा भी जुड़ सकते हैं।",
      "रिकग्निशन ऑफ़ प्रायर लर्निंग: 18 से 59 साल, जिनके पास उस काम का अनुभव हो।",
      "वैध आधार और बैंक खाता ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "People below 15 or above 59 cannot enrol.",
      "Some courses have their own minimum education or experience requirements.",
    ],
    hi: [
      "15 साल से कम या 59 साल से ज़्यादा उम्र के लोग नहीं जुड़ सकते।",
      "कुछ कोर्स के लिए अलग से न्यूनतम पढ़ाई या अनुभव की शर्त होती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Skill India Digital Hub (skillindiadigital.gov.in) and sign up with your mobile number and Aadhaar.",
        "Search for PMKVY courses by job role and location.",
        "Pick a training centre and enrol. The centre will confirm your batch dates.",
      ],
      hi: [
        "स्किल इंडिया डिजिटल हब (skillindiadigital.gov.in) पर जाकर मोबाइल नंबर और आधार से साइन अप करें।",
        "काम और जगह के हिसाब से PMKVY कोर्स खोजें।",
        "प्रशिक्षण केंद्र चुनकर नामांकन करें। केंद्र आपके बैच की तारीख़ें बताएगा।",
      ],
    },
    offline: {
      en: [
        "Visit a nearby PMKVY training centre or Pradhan Mantri Kaushal Kendra.",
        "Ask about available courses and batch timings.",
        "Register with your Aadhaar and bank details at the centre.",
      ],
      hi: [
        "पास के PMKVY प्रशिक्षण केंद्र या प्रधानमंत्री कौशल केंद्र जाएँ।",
        "उपलब्ध कोर्स और बैच के समय की जानकारी लें।",
        "केंद्र पर आधार और बैंक विवरण के साथ पंजीकरण कराएँ।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Mobile number", "Bank account details", "Education certificates (if the course needs them)", "Passport-size photo"],
    hi: ["आधार कार्ड", "मोबाइल नंबर", "बैंक खाते का विवरण", "शैक्षिक प्रमाण पत्र (अगर कोर्स के लिए ज़रूरी हों)", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay anything?", hi: "क्या कुछ पैसे देने होंगे?" },
      a: {
        en: "No. Training and assessment under PMKVY are free. If a centre asks you for a fee for a PMKVY course, report it on the Skill India helpline.",
        hi: "नहीं। PMKVY में प्रशिक्षण और परीक्षा मुफ़्त है। अगर कोई केंद्र PMKVY कोर्स के लिए फ़ीस माँगे, तो स्किल इंडिया हेल्पलाइन पर शिकायत करें।",
      },
    },
    {
      q: { en: "Does PMKVY guarantee a job?", hi: "क्या PMKVY से नौकरी पक्की मिलती है?" },
      a: {
        en: "No. Training centres help connect you to employers and job fairs, but a job is not guaranteed.",
        hi: "नहीं। प्रशिक्षण केंद्र आपको कंपनियों और रोज़गार मेलों से जोड़ने में मदद करते हैं, पर नौकरी की गारंटी नहीं है।",
      },
    },
  ],

  officialUrl: "https://www.skillindiadigital.gov.in/",
  sources: [
    "https://www.skillindiadigital.gov.in/",
    "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2100845&reg=48&lang=2",
    "https://www.msde.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
