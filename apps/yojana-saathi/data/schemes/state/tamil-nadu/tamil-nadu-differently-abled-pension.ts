import { all, any, incomeUpTo, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-differently-abled-pension",
  overlapGroup: "disability-pension",
  name: { en: "Tamil Nadu Differently Abled Pension", hi: "तमिलनाडु दिव्यांग पेंशन" },
  aka: ["DAP Tamil Nadu", "Maatruthiranaaligal Oyvoothiyam", "disability pension Tamil Nadu"],
  shortDescription: {
    en: "Persons with 40% or more disability in Tamil Nadu who have no job, or earn under ₹3 lakh a year, get ₹1,500 every month.",
    hi: "तमिलनाडु में 40% या उससे ज़्यादा दिव्यांगता वाले जिन लोगों के पास नौकरी नहीं है, या जिनकी सालाना कमाई ₹3 लाख से कम है, उन्हें हर महीने ₹1,500 मिलते हैं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Revenue and Disaster Management Department (Commissionerate of Revenue Administration), Government of Tamil Nadu",
    hi: "राजस्व एवं आपदा प्रबंधन विभाग (राजस्व प्रशासन आयुक्तालय), तमिलनाडु सरकार",
  },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "differently abled", "divyang", "pension", "1500 rupees", "monthly"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "health",
  eligibility: all(
    residentOf("tamil-nadu"),
    minAge(18),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(any(when("employment", "eq", "unemployed"), incomeUpTo(300_000)), {
      en: "You have no job, or your income from private work or self-employment is under ₹3 lakh a year",
      hi: "आपके पास नौकरी नहीं है, या निजी काम या अपने काम से सालाना आय ₹3 लाख से कम है",
    }),
  ),

  details: {
    en: [
      "This is Tamil Nadu's monthly pension for persons with disabilities. The state raised it from ₹1,000 to ₹1,500 a month from 1 January 2023.",
      "There are two routes to the same ₹1,500: the state's own Differently Abled Pension for people with 40% or more disability, and the central Indira Gandhi disability pension for people with 80% or more disability from BPL families, where the Centre pays ₹300 and the state ₹1,200.",
      "The Revenue Department runs the scheme through the Special Tahsildar (Social Security Scheme) in each taluk. Children below 18 can also be sanctioned the pension in deserving cases, with approval from a committee headed by the District Collector.",
    ],
    hi: [
      "यह दिव्यांग लोगों के लिए तमिलनाडु की मासिक पेंशन है। राज्य ने 1 जनवरी 2023 से इसे ₹1,000 से बढ़ाकर ₹1,500 महीना कर दिया।",
      "₹1,500 दो रास्तों से मिलते हैं: 40% या उससे ज़्यादा दिव्यांगता वालों के लिए राज्य की अपनी दिव्यांग पेंशन, और BPL परिवारों के 80% या उससे ज़्यादा दिव्यांगता वालों के लिए केंद्र की इंदिरा गांधी दिव्यांग पेंशन, जिसमें केंद्र ₹300 और राज्य ₹1,200 देता है।",
      "राजस्व विभाग हर तालुका में विशेष तहसीलदार (सामाजिक सुरक्षा योजना) के ज़रिए यह योजना चलाता है। ज़रूरत होने पर 18 साल से कम उम्र के बच्चों को भी, ज़िला कलेक्टर की अध्यक्षता वाली समिति की मंज़ूरी से, पेंशन मिल सकती है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month.",
      "Paid into your bank account, or by electronic money order.",
      "A free dhoti or saree twice a year, at Pongal and Deepavali.",
    ],
    hi: [
      "हर महीने ₹1,500।",
      "पैसा आपके बैंक खाते में या इलेक्ट्रॉनिक मनी ऑर्डर से आता है।",
      "साल में दो बार, पोंगल और दीपावली पर, मुफ़्त धोती या साड़ी।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Tamil Nadu and are 18 or older (younger children only with the district committee's approval).",
      "You have a disability of 40% or more, as shown on your disability certificate or UDID card.",
      "You are unemployed, or if you work privately or for yourself, you earn under ₹3 lakh a year.",
    ],
    hi: [
      "आप तमिलनाडु में रहते हैं और आपकी उम्र 18 साल या उससे ज़्यादा है (इससे छोटे बच्चे सिर्फ़ ज़िला समिति की मंज़ूरी से)।",
      "आपके दिव्यांगता प्रमाण पत्र या UDID कार्ड के अनुसार दिव्यांगता 40% या उससे ज़्यादा है।",
      "आप बेरोज़गार हैं, या निजी काम या अपना काम करते हैं तो सालाना ₹3 लाख से कम कमाते हैं।",
    ],
  },
  exclusions: {
    en: [
      "People in a government job.",
      "People earning ₹3 lakh a year or more.",
      "You can get only one social security pension at a time.",
    ],
    hi: [
      "सरकारी नौकरी वाले लोग।",
      "जिनकी सालाना कमाई ₹3 लाख या उससे ज़्यादा है।",
      "एक समय में सिर्फ़ एक सामाजिक सुरक्षा पेंशन मिलती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply at an e-Sevai centre or on the TN e-Sevai portal (tnesevai.tn.gov.in) under social security pensions.",
        "Upload your disability certificate or UDID card, Aadhaar and bank details.",
        "After verification, the Special Tahsildar (Social Security Scheme) sanctions the pension.",
      ],
      hi: [
        "किसी ई-सेवै केंद्र पर या TN ई-सेवै पोर्टल (tnesevai.tn.gov.in) पर सामाजिक सुरक्षा पेंशन में आवेदन करें।",
        "दिव्यांगता प्रमाण पत्र या UDID कार्ड, आधार और बैंक विवरण अपलोड करें।",
        "जाँच के बाद विशेष तहसीलदार (सामाजिक सुरक्षा योजना) पेंशन मंज़ूर करते हैं।",
      ],
    },
    offline: {
      en: [
        "Go to your taluk office or the special grievance day for persons with disabilities held at the Collectorate.",
        "Submit the pension form with copies of your documents.",
      ],
      hi: [
        "अपने तालुका कार्यालय जाएँ, या कलेक्टरेट में दिव्यांगों के लिए होने वाले विशेष शिकायत दिवस पर जाएँ।",
        "दस्तावेज़ों की कॉपी के साथ पेंशन फ़ॉर्म जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Disability certificate or UDID card (40% or more)", "Aadhaar card", "Age proof", "Ration card / smart card", "Bank passbook", "Income certificate, if you are working"],
    hi: ["दिव्यांगता प्रमाण पत्र या UDID कार्ड (40% या ज़्यादा)", "आधार कार्ड", "उम्र का सबूत", "राशन कार्ड / स्मार्ट कार्ड", "बैंक पासबुक", "आय प्रमाण पत्र, अगर आप काम करते हैं"],
  },
  faqs: [
    {
      q: { en: "I work in a small private job. Can I still get it?", hi: "मैं छोटी निजी नौकरी करता/करती हूँ। क्या फिर भी पेंशन मिलेगी?" },
      a: {
        en: "Yes, as long as your income from private work or self-employment is under ₹3 lakh a year.",
        hi: "हाँ, अगर निजी काम या अपने काम से आपकी सालाना आय ₹3 लाख से कम है।",
      },
    },
    {
      q: { en: "Can I also get the unemployment assistance for persons with disabilities?", hi: "क्या मुझे दिव्यांगों वाला बेरोज़गारी भत्ता भी मिल सकता है?" },
      a: {
        en: "These are separate schemes run by different departments. Ask at your taluk office and the District Employment Office whether you can hold both at the same time.",
        hi: "ये अलग-अलग विभागों की अलग योजनाएँ हैं। तालुका कार्यालय और ज़िला रोज़गार कार्यालय में पूछें कि क्या दोनों एक साथ मिल सकते हैं।",
      },
    },
  ],

  officialUrl: "https://www.cra.tn.gov.in/about_schemes_t.php",
  sources: [
    "https://www.cra.tn.gov.in/about_schemes_t.php",
    "https://www.cra.tn.gov.in/eleg_schemes_t.php",
    "https://www.tnesevai.tn.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
