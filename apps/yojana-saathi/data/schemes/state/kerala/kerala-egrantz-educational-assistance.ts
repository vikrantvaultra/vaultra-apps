import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-egrantz-educational-assistance",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "e-Grantz Educational Assistance (SC / ST / OBC)", hi: "ई-ग्रांट्ज़ शैक्षिक सहायता (SC / ST / OBC)" },
  aka: ["e-Grantz", "egrantz", "Kerala post-matric scholarship", "Kerala SC ST scholarship", "e-grantz 3.0"],
  shortDescription: {
    en: "SC, ST and backward class students in Kerala get their fee concessions, scholarships and allowances from school to higher studies through the e-Grantz portal, paid by DBT.",
    hi: "केरल के SC, ST और पिछड़े वर्ग के छात्रों को स्कूल से उच्च शिक्षा तक फ़ीस छूट, छात्रवृत्ति और भत्ते e-Grantz पोर्टल से, सीधे बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Scheduled Castes Development Department and Backward Classes Development Department, Government of Kerala",
    hi: "अनुसूचित जाति विकास विभाग और पिछड़ा वर्ग विकास विभाग, केरल सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "post matric", "pre matric", "sc st", "obc", "egrantz", "kerala"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("kerala"),
    labelled(when("caste", "in", ["sc", "st", "pvtg", "obc"]), {
      en: "You are from a Scheduled Caste, Scheduled Tribe or backward class (OBC / OEC / SEBC) community",
      hi: "आप अनुसूचित जाति, अनुसूचित जनजाति या पिछड़े वर्ग (OBC / OEC / SEBC) से हैं",
    }),
    isTrue("student"),
  ),

  details: {
    en: [
      "e-Grantz is Kerala's online system for paying pre-matric and post-matric educational assistance to students from Scheduled Castes, Scheduled Tribes and other backward communities. It brings the state's own schemes and the central scholarships it runs into one place.",
      "A student registers once, and the same record is used for help throughout their studies. The money goes straight to the student's bank account by DBT. The new government's revised 2026-27 budget promises timely payment of e-grants to SC and ST students.",
    ],
    hi: [
      "e-Grantz केरल की ऑनलाइन व्यवस्था है, जिससे अनुसूचित जाति, अनुसूचित जनजाति और दूसरे पिछड़े समुदायों के छात्रों को प्री-मैट्रिक और पोस्ट-मैट्रिक शैक्षिक सहायता दी जाती है। इसमें राज्य की अपनी योजनाएँ और राज्य द्वारा चलाई जाने वाली केंद्रीय छात्रवृत्तियाँ एक जगह आ जाती हैं।",
      "छात्र एक बार रजिस्टर करता है, और पूरी पढ़ाई के दौरान मदद के लिए वही रिकॉर्ड काम आता है। पैसा DBT से सीधे छात्र के बैंक खाते में जाता है। नई सरकार के 2026-27 के संशोधित बजट में SC और ST छात्रों को e-grants समय पर देने का वादा है।",
    ],
  },
  benefits: {
    en: [
      "Fee concessions, scholarships and study allowances, depending on your course and community.",
      "One registration covers you for your whole period of study.",
      "Money is paid directly into the student's bank account.",
    ],
    hi: [
      "आपके कोर्स और समुदाय के हिसाब से फ़ीस छूट, छात्रवृत्ति और पढ़ाई के भत्ते।",
      "एक ही रजिस्ट्रेशन पूरी पढ़ाई के दौरान काम आता है।",
      "पैसा सीधे छात्र के बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You belong to a Scheduled Caste, Scheduled Tribe, OBC, OEC or SEBC community in Kerala.",
      "You are studying in a recognised school, college or course.",
      "Income limits and amounts differ by scheme and community. Check the circulars on the e-Grantz notice board.",
    ],
    hi: [
      "आप केरल के अनुसूचित जाति, अनुसूचित जनजाति, OBC, OEC या SEBC समुदाय से हैं।",
      "आप किसी मान्यता प्राप्त स्कूल, कॉलेज या कोर्स में पढ़ रहे हैं।",
      "आय सीमा और राशि हर योजना और समुदाय के हिसाब से अलग है। e-Grantz नोटिस बोर्ड पर सर्कुलर देखें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register once on egrantz.kerala.gov.in with your name, date of birth, mobile number, bank account and Aadhaar.",
        "Apply for the scheme that fits your course. If you can't apply online, your institution can enter the application for you.",
        "Track the payment status on the portal.",
      ],
      hi: [
        "egrantz.kerala.gov.in पर अपना नाम, जन्म तिथि, मोबाइल नंबर, बैंक खाता और आधार देकर एक बार रजिस्टर करें।",
        "अपने कोर्स के हिसाब से योजना के लिए आवेदन करें। अगर आप ऑनलाइन आवेदन नहीं कर सकते, तो आपका संस्थान आपके लिए आवेदन भर सकता है।",
        "पोर्टल पर भुगतान की स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://egrantz.kerala.gov.in/",
  sources: ["https://egrantz.kerala.gov.in/", "https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "active",
};

export default scheme;
