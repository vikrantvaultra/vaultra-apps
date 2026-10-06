import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "assam-bocw-welfare",
  name: { en: "Assam Building & Other Construction Workers' Welfare Schemes", hi: "असम भवन एवं अन्य निर्माण श्रमिक कल्याण योजनाएँ" },
  aka: ["Assam BOCW", "Nirman Sakhi", "ABOCWWB", "Assam labour card"],
  shortDescription: {
    en: "Registered construction workers in Assam get pension, maternity aid of ₹20,000, children's education help, marriage aid of ₹25,000, interest-free housing loans and death benefits.",
    hi: "असम में पंजीकृत निर्माण मज़दूरों को पेंशन, ₹20,000 मातृत्व सहायता, बच्चों की पढ़ाई में मदद, ₹25,000 विवाह सहायता, बिना ब्याज आवास ऋण और मृत्यु लाभ मिलते हैं।",
  },
  level: "state",
  state: "assam",
  department: { en: "Labour Welfare Department, Government of Assam (Assam BOCW Welfare Board)", hi: "श्रम कल्याण विभाग, असम सरकार (असम BOCW कल्याण बोर्ड)" },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["construction worker", "labour card", "bocw", "mason", "maternity", "pension", "assam"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "career",
  eligibility: all(residentOf("assam"), when("occupation", "eq", "construction-worker")),

  details: {
    en: [
      "The Assam Building and Other Construction Workers' Welfare Board looks after people who work on building sites, roads and other construction. Once you register with the Board, you and your family can claim a range of benefits.",
      "Registration and claims are done on the Board's Nirman Sakhi portal, at public facilitation centres or at Common Service Centres. Membership must be kept active to claim most benefits.",
    ],
    hi: [
      "असम भवन एवं अन्य निर्माण श्रमिक कल्याण बोर्ड इमारत, सड़क और दूसरे निर्माण काम करने वाले मज़दूरों के लिए है। बोर्ड में पंजीकरण के बाद आप और आपका परिवार कई तरह के लाभ ले सकते हैं।",
      "पंजीकरण और दावे बोर्ड के निर्माण सखी पोर्टल, जन सुविधा केंद्र या कॉमन सर्विस सेंटर पर होते हैं। ज़्यादातर लाभों के लिए सदस्यता चालू रखनी ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "Maternity benefit of ₹20,000 for a registered woman worker (up to two times).",
      "Education help for children each year: ₹1,500 (Class 1–4) up to ₹20,000 (postgraduate).",
      "₹25,000 for a child's marriage after 5 years of continuous membership.",
      "Pension of ₹2,000 a month (plus ₹100 for each year of membership) after age 60; disability pension too.",
      "Interest-free housing loan: up to ₹5 lakh for a flat, ₹2 lakh for land or ₹3 lakh for construction.",
      "Death benefit of ₹50,000 (₹3 lakh if death is from a work accident) plus ₹5,000 for funeral costs.",
      "Medical help, a yearly health check-up of up to ₹5,000 and a tools loan of ₹20,000.",
    ],
    hi: [
      "पंजीकृत महिला मज़दूर को ₹20,000 मातृत्व लाभ (अधिकतम दो बार)।",
      "बच्चों की पढ़ाई के लिए हर साल मदद: ₹1,500 (कक्षा 1–4) से ₹20,000 (पोस्टग्रेजुएट) तक।",
      "लगातार 5 साल की सदस्यता के बाद बच्चे की शादी के लिए ₹25,000।",
      "60 साल के बाद हर महीने ₹2,000 पेंशन (सदस्यता के हर साल पर ₹100 अतिरिक्त); दिव्यांगता पेंशन भी।",
      "बिना ब्याज आवास ऋण: फ़्लैट के लिए ₹5 लाख तक, ज़मीन के लिए ₹2 लाख या निर्माण के लिए ₹3 लाख।",
      "मृत्यु पर ₹50,000 (काम के दौरान दुर्घटना में ₹3 लाख) और अंतिम संस्कार के लिए ₹5,000।",
      "इलाज में मदद, हर साल ₹5,000 तक की स्वास्थ्य जाँच और ₹20,000 का औज़ार ऋण।",
    ],
  },
  eligibilityText: {
    en: [
      "A construction worker aged 18 to 55 at registration.",
      "Worked at least 90 days in construction in the last 12 months.",
      "Registered on e-Shram with a valid UAN.",
      "Workers from other states can register if they currently work in Assam.",
      "Some benefits need a minimum period of membership (for example, 5 years for marriage aid).",
    ],
    hi: [
      "पंजीकरण के समय 18 से 55 साल का निर्माण मज़दूर।",
      "पिछले 12 महीनों में कम से कम 90 दिन निर्माण का काम किया हो।",
      "e-Shram पर पंजीकरण और मान्य UAN हो।",
      "दूसरे राज्यों के मज़दूर भी पंजीकरण करा सकते हैं, अगर अभी असम में काम कर रहे हों।",
      "कुछ लाभों के लिए न्यूनतम सदस्यता अवधि चाहिए (जैसे विवाह सहायता के लिए 5 साल)।",
    ],
  },
  exclusions: {
    en: [
      "People not working in building or construction work.",
      "Workers whose membership has lapsed for benefits that need continuous membership.",
      "Medical claims already paid under PM-JAY (a non-availment certificate is now needed).",
    ],
    hi: [
      "जो लोग भवन या निर्माण का काम नहीं करते।",
      "जिनकी सदस्यता टूट गई हो, उन लाभों के लिए जिनमें लगातार सदस्यता चाहिए।",
      "जिन इलाज के खर्च PM-JAY में मिल चुके हों (अब इसका प्रमाण पत्र चाहिए)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to abocwwb.assam.gov.in (Nirman Sakhi portal) and register with your Aadhaar-linked mobile number.",
        "Fill in your details, upload the 90-day work certificate and other documents, and submit.",
        "After approval, log in to apply for each benefit and track your claims.",
      ],
      hi: [
        "abocwwb.assam.gov.in (निर्माण सखी पोर्टल) पर जाएँ और आधार से जुड़े मोबाइल नंबर से पंजीकरण करें।",
        "अपनी जानकारी भरें, 90 दिन के काम का प्रमाण पत्र और बाकी दस्तावेज़ अपलोड करके जमा करें।",
        "मंज़ूरी के बाद लॉग इन करके हर लाभ के लिए आवेदन करें और दावे की स्थिति देखें।",
      ],
    },
    offline: {
      en: [
        "Visit a Public Facilitation Centre or Common Service Centre with your documents.",
        "They will register you and file benefit claims on the portal.",
        "For help, call the Board's helpline 1800-345-3574.",
      ],
      hi: [
        "दस्तावेज़ लेकर जन सुविधा केंद्र या कॉमन सर्विस सेंटर जाएँ।",
        "वे पोर्टल पर आपका पंजीकरण और लाभ के दावे कर देंगे।",
        "मदद के लिए बोर्ड की हेल्पलाइन 1800-345-3574 पर फ़ोन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card with linked mobile number", "e-Shram card", "Certificate of 90 days of construction work", "Aadhaar-linked bank passbook", "Address proof, if different from Aadhaar"],
    hi: ["मोबाइल से जुड़ा आधार कार्ड", "e-Shram कार्ड", "90 दिन के निर्माण काम का प्रमाण पत्र", "आधार से जुड़े बैंक खाते की पासबुक", "पता प्रमाण, अगर आधार वाले पते से अलग हो"],
  },
  faqs: [
    {
      q: { en: "Is registration free?", hi: "क्या पंजीकरण मुफ़्त है?" },
      a: {
        en: "Ask at the facilitation centre for the current fee. You can register yourself on the Nirman Sakhi portal, or at a Public Facilitation Centre or CSC.",
        hi: "मौजूदा फ़ीस के बारे में सुविधा केंद्र पर पूछें। आप निर्माण सखी पोर्टल पर खुद, या जन सुविधा केंद्र या CSC पर पंजीकरण करा सकते हैं।",
      },
    },
    {
      q: { en: "I am from another state. Can I register in Assam?", hi: "मैं दूसरे राज्य से हूँ। क्या असम में पंजीकरण करा सकता हूँ?" },
      a: {
        en: "Yes, if you are currently working on construction in Assam and meet the other conditions.",
        hi: "हाँ, अगर आप अभी असम में निर्माण का काम कर रहे हैं और बाकी शर्तें पूरी करते हैं।",
      },
    },
  ],

  officialUrl: "https://abocwwb.assam.gov.in/",
  sources: ["https://abocwwb.assam.gov.in/", "https://labour.assam.gov.in/scheme-page/building-and-other-construction-workers"],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "active",
};

export default scheme;
