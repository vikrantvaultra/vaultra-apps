import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "aapki-beti-hamari-beti",
  overlapGroup: "daughter-savings",
  name: { en: "Aapki Beti Hamari Beti", hi: "आपकी बेटी हमारी बेटी" },
  aka: ["ABHB", "Apki Beti Hamari Beti"],
  shortDescription: {
    en: "Haryana invests ₹21,000 with LIC in the name of a newborn girl: the first daughter in SC or BPL families, and the second (or third) daughter in any family.",
    hi: "हरियाणा सरकार नवजात बेटी के नाम LIC में ₹21,000 जमा करती है: SC या BPL परिवार की पहली बेटी के लिए, और किसी भी परिवार की दूसरी (या तीसरी) बेटी के लिए।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Women and Child Development Department, Haryana",
    hi: "महिला एवं बाल विकास विभाग, हरियाणा",
  },
  categories: ["women-child"],
  tags: ["girl child", "daughter", "beti", "lic", "savings", "haryana"],
  benefitType: "savings",
  isDBT: false,
  value: { amount: 21000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("haryana"),
    labelled(when("daughterUnder10", "eq", true), {
      en: "You have a daughter born on or after 22 January 2015",
      hi: "आपकी बेटी 22 जनवरी 2015 या उसके बाद पैदा हुई हो",
    }),
  ),

  details: {
    en: [
      "Aapki Beti Hamari Beti is a Haryana Government scheme to improve the sex ratio and support girls' health and education. It started on 22 January 2015.",
      "For each eligible girl, the government invests a one-time ₹21,000 with the Life Insurance Corporation of India (LIC) in her name. The money is paid to her when she turns 18.",
      "The Women and Child Development Department runs the scheme through Anganwadi centres. You apply on the SARAL portal.",
    ],
    hi: [
      "आपकी बेटी हमारी बेटी हरियाणा सरकार की योजना है, जिसका मकसद लिंगानुपात सुधारना और बेटियों की सेहत व पढ़ाई में मदद करना है। यह 22 जनवरी 2015 को शुरू हुई।",
      "हर पात्र बेटी के नाम सरकार एक बार ₹21,000 भारतीय जीवन बीमा निगम (LIC) में जमा करती है। यह पैसा बेटी को 18 साल की होने पर मिलता है।",
      "यह योजना महिला एवं बाल विकास विभाग आंगनवाड़ी केंद्रों के ज़रिए चलाता है। आवेदन SARAL पोर्टल पर होता है।",
    ],
  },
  benefits: {
    en: [
      "₹21,000 invested once with LIC in the girl's name.",
      "The matured amount is paid to her at 18.",
      "Twins or multiple girls each get ₹21,000 if the family is eligible.",
    ],
    hi: [
      "बेटी के नाम LIC में एक बार ₹21,000 जमा।",
      "18 साल की होने पर पकी हुई राशि उसे मिलती है।",
      "जुड़वाँ या एक से ज़्यादा बेटियाँ हों तो पात्र परिवार में हर बेटी को ₹21,000।",
    ],
  },
  eligibilityText: {
    en: [
      "First daughter born on or after 22 January 2015 in a Scheduled Caste or BPL family.",
      "Second daughter born on or after 22 January 2015 in any family, whatever the caste, religion, income or number of sons. Third daughters born on or after 24 August 2015 are also covered.",
      "Parents are residents or domiciles of Haryana, and at least one parent lives in Haryana with the girl.",
      "The birth is registered, the girl is immunised on time and enrolled at the Anganwadi centre.",
    ],
    hi: [
      "SC या BPL परिवार में 22 जनवरी 2015 या उसके बाद पैदा हुई पहली बेटी।",
      "किसी भी परिवार में 22 जनवरी 2015 या उसके बाद पैदा हुई दूसरी बेटी, चाहे जाति, धर्म, आय या बेटों की संख्या कुछ भी हो। 24 अगस्त 2015 या उसके बाद पैदा हुई तीसरी बेटी भी शामिल है।",
      "माता-पिता हरियाणा के निवासी या अधिवासी हों, और कम से कम एक अभिभावक बेटी के साथ हरियाणा में रहता हो।",
      "जन्म पंजीकृत हो, बेटी का समय पर टीकाकरण हो और वह आंगनवाड़ी केंद्र में नामांकित हो।",
    ],
  },
  exclusions: {
    en: [
      "A first daughter in a family that is neither SC nor BPL.",
      "Girls born before 22 January 2015 (some older second daughters get ₹5,000 a year for five years under the earlier Ladli rules instead).",
    ],
    hi: [
      "ऐसे परिवार की पहली बेटी जो न SC है न BPL।",
      "22 जनवरी 2015 से पहले पैदा हुई बेटियाँ (कुछ पुरानी दूसरी बेटियों को पुराने लाडली नियमों के तहत पाँच साल तक ₹5,000 सालाना मिलते हैं)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to saralharyana.gov.in and register as a new user.",
        "Log in, choose Aapki Beti Hamari Beti and fill in the form.",
        "Upload the documents and submit. The service is free on the portal.",
      ],
      hi: [
        "saralharyana.gov.in पर जाएँ और नए यूज़र के रूप में रजिस्टर करें।",
        "लॉग इन करके 'आपकी बेटी हमारी बेटी' चुनें और फ़ॉर्म भरें।",
        "दस्तावेज़ अपलोड करके जमा करें। पोर्टल पर यह सेवा मुफ़्त है।",
      ],
    },
    offline: {
      en: [
        "Ask your Anganwadi worker for help, or visit a SARAL Kendra or CSC (₹10 service charge).",
        "Carry the documents listed below.",
      ],
      hi: ["अपनी आंगनवाड़ी कार्यकर्ता से मदद लें, या SARAL केंद्र या CSC जाएँ (₹10 सेवा शुल्क)।", "नीचे दिए दस्तावेज़ साथ ले जाएँ।"],
    },
  },
  documents: {
    en: [
      "Family ID (Parivar Pehchan Patra) number",
      "Girl's birth certificate",
      "Address proof (ration card, voter ID or electricity bill)",
      "Caste certificate (SC families) or BPL certificate (BPL families)",
      "Immunisation card",
    ],
    hi: [
      "परिवार पहचान पत्र (PPP) नंबर",
      "बेटी का जन्म प्रमाण पत्र",
      "पते का प्रमाण (राशन कार्ड, वोटर ID या बिजली बिल)",
      "जाति प्रमाण पत्र (SC परिवार) या BPL प्रमाण पत्र (BPL परिवार)",
      "टीकाकरण कार्ड",
    ],
  },
  faqs: [
    {
      q: { en: "We have a son and now a second daughter. Are we eligible?", hi: "हमारा एक बेटा है और अब दूसरी बेटी हुई है। क्या हम पात्र हैं?" },
      a: {
        en: "Yes. For the second daughter, the number of sons doesn't matter. Any family in Haryana can get ₹21,000 for her.",
        hi: "हाँ। दूसरी बेटी के लिए बेटों की संख्या मायने नहीं रखती। हरियाणा का कोई भी परिवार उसके लिए ₹21,000 पा सकता है।",
      },
    },
    {
      q: { en: "Is the money paid to us now?", hi: "क्या पैसा अभी हमें मिलता है?" },
      a: {
        en: "No. The ₹21,000 is invested with LIC in the girl's name and paid to her when she turns 18.",
        hi: "नहीं। ₹21,000 बेटी के नाम LIC में जमा होते हैं और 18 साल की होने पर उसे मिलते हैं।",
      },
    },
  ],

  officialUrl: "https://wcdhry.gov.in/schemes-for-children/abhb/",
  sources: ["https://wcdhry.gov.in/schemes-for-children/abhb/", "https://saralharyana.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "active",
};

export default scheme;
