import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-vidyut-upbhokta-sahayata-yojana",
  tier: "full",
  name: { en: "Mukhyamantri Vidyut Upbhokta Sahayata Yojana (125 units free electricity)", hi: "मुख्यमंत्री विद्युत उपभोक्ता सहायता योजना (125 यूनिट मुफ़्त बिजली)" },
  aka: ["125 units free bijli", "Bihar free electricity", "Muft bijli Bihar"],
  shortDescription: {
    en: "Every household electricity connection in Bihar gets the first 125 units each month free, since August 2025. No application is needed.",
    hi: "अगस्त 2025 से बिहार के हर घरेलू बिजली कनेक्शन को हर महीने पहले 125 यूनिट मुफ़्त मिलते हैं। कोई आवेदन नहीं करना होता।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Energy Department, Government of Bihar", hi: "ऊर्जा विभाग, बिहार सरकार" },
  categories: ["energy-savings"],
  tags: ["free electricity", "125 units", "bijli bill", "electricity subsidy", "domestic connection", "bihar"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(residentOf("bihar")),

  details: {
    en: [
      "Under the Mukhyamantri Vidyut Upbhokta Sahayata Yojana, the Bihar government pays for the first 125 units of electricity used each month by every domestic (household) connection. It started from the August 2025 billing month.",
      "The benefit goes to all domestic consumers in both villages and towns, about 1.89 crore households. It is applied automatically in your bill or prepaid meter by the power distribution companies (North and South Bihar), which work under Bihar State Power Holding Company Ltd.",
      "If you use more than 125 units in a month, you pay only for the extra units, at the state's subsidised domestic rates.",
    ],
    hi: [
      "मुख्यमंत्री विद्युत उपभोक्ता सहायता योजना के तहत बिहार सरकार हर घरेलू बिजली कनेक्शन के हर महीने के पहले 125 यूनिट का पैसा खुद भरती है। यह अगस्त 2025 के बिल वाले महीने से शुरू हुई।",
      "इसका लाभ गाँव और शहर दोनों के सभी घरेलू उपभोक्ताओं को मिलता है, यानी लगभग 1.89 करोड़ घरों को। बिजली वितरण कंपनियाँ (उत्तर और दक्षिण बिहार), जो बिहार स्टेट पावर होल्डिंग कंपनी के तहत काम करती हैं, इसे आपके बिल या प्रीपेड मीटर में अपने-आप लागू करती हैं।",
      "अगर किसी महीने 125 यूनिट से ज़्यादा बिजली खर्च होती है, तो आपको सिर्फ़ ऊपर के यूनिट का पैसा, राज्य की सब्सिडी वाली घरेलू दर पर, देना होता है।",
    ],
  },
  benefits: {
    en: [
      "First 125 units of electricity free every month.",
      "Applied automatically to your bill or prepaid meter balance.",
      "Units above 125 are charged at subsidised domestic rates.",
      "Covers both rural and urban household connections.",
    ],
    hi: [
      "हर महीने पहले 125 यूनिट बिजली मुफ़्त।",
      "यह आपके बिल या प्रीपेड मीटर बैलेंस में अपने-आप लागू होता है।",
      "125 से ऊपर के यूनिट पर सब्सिडी वाली घरेलू दर लगती है।",
      "गाँव और शहर दोनों के घरेलू कनेक्शन शामिल हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "You have a domestic (household) electricity connection in Bihar.",
      "The connection is with North Bihar or South Bihar power distribution company.",
      "There is no income or caste condition.",
    ],
    hi: [
      "बिहार में आपके पास घरेलू बिजली कनेक्शन हो।",
      "कनेक्शन उत्तर बिहार या दक्षिण बिहार बिजली वितरण कंपनी का हो।",
      "आय या जाति की कोई शर्त नहीं है।",
    ],
  },
  exclusions: {
    en: [
      "Commercial, industrial and other non-domestic connections.",
      "Houses without their own authorised electricity connection.",
    ],
    hi: [
      "व्यावसायिक, औद्योगिक और दूसरे गैर-घरेलू कनेक्शन।",
      "जिन घरों का अपना वैध बिजली कनेक्शन नहीं है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "You don't need to apply. The free units are applied automatically to every domestic connection.",
        "Check your bill or the smart prepaid meter app to see the subsidy shown.",
        "If it is missing, call the toll-free number 1912 or visit your local electricity sub-division office.",
      ],
      hi: [
        "आवेदन करने की ज़रूरत नहीं है। मुफ़्त यूनिट हर घरेलू कनेक्शन पर अपने-आप लागू होते हैं।",
        "अपने बिल या स्मार्ट प्रीपेड मीटर ऐप में सब्सिडी देखें।",
        "अगर नहीं दिख रही, तो टोल-फ़्री नंबर 1912 पर कॉल करें या अपने बिजली उप-मंडल कार्यालय जाएँ।",
      ],
    },
  },
  documents: {
    en: ["No documents are needed. Keep your consumer number handy for complaints."],
    hi: ["कोई दस्तावेज़ नहीं चाहिए। शिकायत के लिए अपना उपभोक्ता नंबर पास रखें।"],
  },
  faqs: [
    {
      q: { en: "Do I need to register anywhere?", hi: "क्या कहीं रजिस्ट्रेशन करना होगा?" },
      a: {
        en: "No. Every domestic connection gets it automatically. You don't need any form, card or income certificate.",
        hi: "नहीं। हर घरेलू कनेक्शन को यह अपने-आप मिलता है। कोई फ़ॉर्म, कार्ड या आय प्रमाण पत्र नहीं चाहिए।",
      },
    },
    {
      q: { en: "What if I use 150 units in a month?", hi: "अगर किसी महीने 150 यूनिट खर्च हों तो?" },
      a: {
        en: "The first 125 units are free. You pay only for the remaining 25 units at the subsidised domestic rate.",
        hi: "पहले 125 यूनिट मुफ़्त हैं। बाकी 25 यूनिट का पैसा सब्सिडी वाली घरेलू दर पर देना होगा।",
      },
    },
  ],

  officialUrl: "https://www.bsphcl.co.in/",
  sources: [
    "https://betastate.bihar.gov.in/factneergy.aspx",
    "https://www.newsonair.gov.in/bihar-cabinet-approves-125-unitsof-free-electricity-for-domestic-consumers",
    "https://www.bsphcl.co.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
