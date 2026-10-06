import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-samuhik-vivah-yojana",
  name: { en: "Mukhyamantri Samuhik Vivah Yojana (Uttar Pradesh)", hi: "मुख्यमंत्री सामूहिक विवाह योजना (उत्तर प्रदेश)" },
  aka: ["Samuhik Vivah Yojana", "UP mass marriage scheme"],
  shortDescription: {
    en: "Poor families in Uttar Pradesh earning up to ₹3 lakh a year get their daughter married at a free mass wedding, with ₹1 lakh spent per couple and over ₹60,000 sent to the bride's bank account.",
    hi: "उत्तर प्रदेश में ₹3 लाख तक सालाना आय वाले गरीब परिवारों की बेटियों की शादी मुफ़्त सामूहिक विवाह में होती है, हर जोड़े पर ₹1 लाख ख़र्च होते हैं और ₹60,000 से ज़्यादा दुल्हन के बैंक खाते में आते हैं।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Social Welfare Department, Government of Uttar Pradesh",
    hi: "समाज कल्याण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["social-welfare", "women-child"],
  tags: ["marriage", "wedding", "shaadi", "daughter", "mass marriage", "uttar pradesh"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 60_000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("uttar-pradesh"), incomeUpTo(300_000)),

  details: {
    en: [
      "The Mukhyamantri Samuhik Vivah Yojana pays for the weddings of daughters from poor families in Uttar Pradesh. Weddings are held together at mass ceremonies arranged by the government, following each couple's own religion and customs.",
      "From 2025–26 the state spends ₹1 lakh on each couple. Most of it goes straight into the bride's bank account to help her set up her home; the rest buys wedding gifts and covers the ceremony.",
      "The Social Welfare Department runs the scheme through district social welfare officers. Ceremonies are held at district, block and town level. Widows, abandoned and legally divorced women who are remarrying can also benefit.",
    ],
    hi: [
      "मुख्यमंत्री सामूहिक विवाह योजना उत्तर प्रदेश के गरीब परिवारों की बेटियों की शादी का ख़र्च उठाती है। शादियाँ सरकार के आयोजित सामूहिक समारोह में, हर जोड़े के अपने धर्म और रीति-रिवाज के अनुसार होती हैं।",
      "2025–26 से राज्य हर जोड़े पर ₹1 लाख ख़र्च करता है। इसका बड़ा हिस्सा सीधे दुल्हन के बैंक खाते में जाता है ताकि वह अपना घर बसा सके; बाकी से शादी के उपहार और समारोह का ख़र्च होता है।",
      "यह योजना समाज कल्याण विभाग ज़िला समाज कल्याण अधिकारियों के ज़रिए चलाता है। समारोह ज़िला, ब्लॉक और नगर स्तर पर होते हैं। दोबारा शादी कर रहीं विधवा, परित्यक्ता और क़ानूनी रूप से तलाकशुदा महिलाएँ भी लाभ ले सकती हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1 lakh spent in total for each couple.",
      "₹60,000 to ₹64,000 sent to the bride's bank account (the official site currently shows both figures).",
      "Wedding gifts worth about ₹21,000, such as clothes, silver toe rings and anklets, a dinner set, a pressure cooker and a trolley bag.",
      "₹15,000 spent on arranging the ceremony.",
    ],
    hi: [
      "हर जोड़े पर कुल ₹1 लाख ख़र्च।",
      "दुल्हन के बैंक खाते में ₹60,000 से ₹64,000 (आधिकारिक वेबसाइट पर अभी दोनों आँकड़े दिखते हैं)।",
      "लगभग ₹21,000 के शादी के उपहार, जैसे कपड़े, चाँदी की बिछिया और पायल, डिनर सेट, प्रेशर कुकर और ट्रॉली बैग।",
      "समारोह के आयोजन पर ₹15,000 ख़र्च।",
    ],
  },
  eligibilityText: {
    en: [
      "The bride's parents or guardians are permanent residents of Uttar Pradesh.",
      "The family is poor and in need, with income up to ₹3 lakh a year.",
      "The bride is at least 18 and the groom at least 21 on the wedding date.",
      "The bride is unmarried, or is a widow, abandoned or legally divorced woman who is remarrying.",
      "Open to all religions and castes. Orphan girls, daughters of widows or disabled parents, and girls with disabilities get priority.",
    ],
    hi: [
      "दुल्हन के माता-पिता या अभिभावक उत्तर प्रदेश के स्थायी निवासी हों।",
      "परिवार गरीब और ज़रूरतमंद हो, सालाना आय ₹3 लाख तक हो।",
      "शादी की तारीख़ पर दुल्हन कम से कम 18 और दूल्हा कम से कम 21 साल का हो।",
      "दुल्हन अविवाहित हो, या दोबारा शादी कर रही विधवा, परित्यक्ता या क़ानूनी रूप से तलाकशुदा महिला हो।",
      "सभी धर्मों और जातियों के लिए। अनाथ लड़कियों, विधवा या दिव्यांग माता-पिता की बेटियों और दिव्यांग लड़कियों को प्राथमिकता।",
    ],
  },
  exclusions: {
    en: [
      "Families with income above ₹3 lakh a year.",
      "Brides under 18 or grooms under 21.",
      "Private weddings held outside the government's mass ceremony.",
    ],
    hi: [
      "₹3 लाख से ज़्यादा सालाना आय वाले परिवार।",
      "18 साल से कम उम्र की दुल्हन या 21 साल से कम उम्र का दूल्हा।",
      "सरकारी सामूहिक समारोह से बाहर, निजी तौर पर की गई शादियाँ।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to cmsvy.upsdc.gov.in and fill in the application form with the bride's and groom's details.",
        "Upload the age proof, income certificate, caste certificate (if SC/ST/OBC) and bank details.",
        "The application is verified by the block or town office, and you are told the date and venue of the mass wedding.",
      ],
      hi: [
        "cmsvy.upsdc.gov.in पर जाएँ और दुल्हन व दूल्हे की जानकारी के साथ आवेदन फ़ॉर्म भरें।",
        "उम्र का सबूत, आय प्रमाण पत्र, जाति प्रमाण पत्र (SC/ST/OBC हों तो) और बैंक विवरण अपलोड करें।",
        "ब्लॉक या नगर कार्यालय आवेदन की जाँच करता है, और आपको सामूहिक विवाह की तारीख़ और जगह बताई जाती है।",
      ],
    },
    offline: {
      en: [
        "Contact the District Social Welfare Officer, your block office or the town / municipal office.",
        "They can help you register and tell you about the next ceremony.",
        "Keep a copy of the registration for the wedding day.",
      ],
      hi: [
        "ज़िला समाज कल्याण अधिकारी, ब्लॉक कार्यालय या नगर / नगर निगम कार्यालय से संपर्क करें।",
        "वे रजिस्ट्रेशन में मदद करेंगे और अगले समारोह के बारे में बताएँगे।",
        "शादी के दिन के लिए रजिस्ट्रेशन की कॉपी संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar of the bride and groom",
      "Age proof (school record, birth certificate, voter ID, MGNREGA job card or Aadhaar)",
      "Income certificate (up to ₹3 lakh)",
      "Caste certificate, for SC, ST and OBC applicants",
      "Bride's bank passbook",
      "Photos of the bride and groom",
    ],
    hi: [
      "दुल्हन और दूल्हे का आधार",
      "उम्र का सबूत (स्कूल रिकॉर्ड, जन्म प्रमाण पत्र, वोटर ID, मनरेगा जॉब कार्ड या आधार)",
      "आय प्रमाण पत्र (₹3 लाख तक)",
      "जाति प्रमाण पत्र, SC, ST और OBC आवेदकों के लिए",
      "दुल्हन की बैंक पासबुक",
      "दुल्हन और दूल्हे की फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "Do we have to marry at the mass ceremony?", hi: "क्या शादी सामूहिक समारोह में ही करनी होगी?" },
      a: {
        en: "Yes. The help is given only for weddings held at the government-organised mass ceremony.",
        hi: "हाँ। मदद सिर्फ़ सरकार के आयोजित सामूहिक समारोह में होने वाली शादियों के लिए मिलती है।",
      },
    },
    {
      q: { en: "Can a widow remarry under this scheme?", hi: "क्या विधवा इस योजना में दोबारा शादी कर सकती है?" },
      a: {
        en: "Yes. Widows, abandoned women and legally divorced women from poor families can remarry under the scheme.",
        hi: "हाँ। गरीब परिवार की विधवा, परित्यक्ता और क़ानूनी रूप से तलाकशुदा महिलाएँ इस योजना में दोबारा शादी कर सकती हैं।",
      },
    },
  ],

  officialUrl: "https://cmsvy.upsdc.gov.in/",
  sources: [
    "https://cmsvy.upsdc.gov.in/",
    "https://cmsvy.upsdc.gov.in/brief-history.php",
    "https://english.punjabkesari.com/states/2025/05/28/up-boosts-wedding-aid-to-rs-1-lakh-under-samuhik-vivah-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
