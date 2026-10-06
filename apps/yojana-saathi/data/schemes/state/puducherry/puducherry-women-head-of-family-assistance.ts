import { all, ageBetween, female, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-women-head-of-family-assistance",
  overlapGroup: "women-monthly",
  name: {
    en: "Monthly Financial Assistance to Women Heads of BPL Families (Puducherry)",
    hi: "BPL परिवारों की महिला मुखिया को मासिक आर्थिक सहायता (पुडुचेरी)",
  },
  aka: ["Puducherry women head of family scheme", "Rs 2500 women scheme Puducherry", "Kudumba thalaivi scheme"],
  shortDescription: {
    en: "Women aged 21 to 55 in Puducherry who are the head of a BPL family ration card get ₹2,500 every month from the UT government.",
    hi: "पुडुचेरी में 21 से 55 साल की वे महिलाएँ, जो BPL राशन कार्ड में परिवार की मुखिया हैं, केंद्र शासित प्रदेश सरकार से हर महीने ₹2,500 पाती हैं।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Department of Women and Child Development, Government of Puducherry",
    hi: "महिला एवं बाल विकास विभाग, पुडुचेरी सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "head of family", "bpl", "ration card", "puducherry"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 2500, period: "monthly", kind: "cash" },
  ageRange: { min: 21, max: 55 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("puducherry"),
    female(),
    ...ageBetween(21, 55),
    labelled(isTrue("bpl"), { en: "Your family has a BPL ration card", hi: "आपके परिवार के पास BPL राशन कार्ड है" }),
  ),

  details: {
    en: [
      "This Puducherry scheme gives monthly cash support to women who head families living below the poverty line, so they have an income of their own and access to savings and credit.",
      "The amount was ₹1,000 a month. The 2025-26 budget raised it to ₹2,500, and the 2026-27 budget speech confirms that about 63,000 women now receive ₹2,500 a month. The government says it is working to bring every eligible woman into the scheme.",
      "Beneficiaries are identified from the ration card data of the Civil Supplies and Consumer Affairs Department, so in most cases no separate certificates are needed.",
    ],
    hi: [
      "पुडुचेरी की यह योजना गरीबी रेखा से नीचे के परिवारों की महिला मुखियाओं को हर महीने नकद मदद देती है, ताकि उनकी अपनी आमदनी हो और वे बचत व कर्ज़ जैसी सुविधाओं तक पहुँच सकें।",
      "पहले राशि ₹1,000 महीना थी। 2025-26 के बजट में इसे बढ़ाकर ₹2,500 किया गया, और 2026-27 के बजट भाषण के अनुसार अब लगभग 63,000 महिलाओं को हर महीने ₹2,500 मिल रहे हैं। सरकार का कहना है कि वह हर पात्र महिला को योजना में जोड़ने पर काम कर रही है।",
      "लाभार्थियों की पहचान नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग के राशन कार्ड डेटा से होती है, इसलिए ज़्यादातर मामलों में अलग से प्रमाण पत्र नहीं लगते।",
    ],
  },
  benefits: {
    en: ["₹2,500 every month.", "That adds up to ₹30,000 a year."],
    hi: ["हर महीने ₹2,500।", "साल भर में कुल ₹30,000।"],
  },
  eligibilityText: {
    en: [
      "A woman who has lived in the Union Territory of Puducherry continuously for the past five years.",
      "She is the head of the family on a BPL family ration card and is 21 to 55 years old.",
      "If two or more women on the same BPL card qualify, the older woman within the 21 to 55 age group gets it.",
    ],
    hi: [
      "ऐसी महिला जो पिछले पाँच साल से लगातार पुडुचेरी केंद्र शासित प्रदेश में रह रही हो।",
      "वह BPL परिवार राशन कार्ड में परिवार की मुखिया हो और उसकी उम्र 21 से 55 साल हो।",
      "अगर एक ही BPL कार्ड पर दो या ज़्यादा महिलाएँ पात्र हों, तो 21 से 55 साल के बीच की ज़्यादा उम्र वाली महिला को लाभ मिलता है।",
    ],
  },
  exclusions: {
    en: [
      "Women who already get any other financial assistance funded fully or partly by the Central or UT government.",
      "Women living in an institution or home that gives free food and lodging.",
      "Families without a BPL ration card.",
    ],
    hi: [
      "वे महिलाएँ जिन्हें पहले से केंद्र या केंद्र शासित प्रदेश सरकार की पूरी या आंशिक रूप से वित्त-पोषित कोई दूसरी आर्थिक सहायता मिल रही है।",
      "वे महिलाएँ जो ऐसी संस्था या गृह में रहती हैं जहाँ मुफ़्त खाना और रहना मिलता है।",
      "जिन परिवारों के पास BPL राशन कार्ड नहीं है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Make sure you are recorded as the head of the family on your BPL ration card; the department picks beneficiaries from this data.",
        "If you think you qualify but are not getting the money, contact the Deputy Director (Social Defence), Old Age Pension Section, Department of Women and Child Development, Puducherry. In Karaikal, contact the Child Development Project Officer; in Mahe or Yanam, the Welfare Officer.",
      ],
      hi: [
        "पक्का करें कि आपके BPL राशन कार्ड में आप परिवार की मुखिया के रूप में दर्ज हैं; विभाग इसी डेटा से लाभार्थी चुनता है।",
        "अगर आपको लगता है कि आप पात्र हैं पर पैसा नहीं मिल रहा, तो उप निदेशक (सामाजिक सुरक्षा), वृद्धावस्था पेंशन अनुभाग, महिला एवं बाल विकास विभाग, पुडुचेरी से संपर्क करें। कराईकल में बाल विकास परियोजना अधिकारी और माहे या यानम में कल्याण अधिकारी से मिलें।",
      ],
    },
  },
  documents: {
    en: ["BPL family ration card with you listed as head of the family", "Proof of five years' residence in Puducherry, if asked"],
    hi: ["BPL परिवार राशन कार्ड, जिसमें आप परिवार की मुखिया के रूप में दर्ज हों", "पुडुचेरी में पाँच साल रहने का सबूत, अगर माँगा जाए"],
  },
  faqs: [
    {
      q: { en: "Is the amount ₹1,000 or ₹2,500?", hi: "राशि ₹1,000 है या ₹2,500?" },
      a: {
        en: "₹2,500 a month. The department's web page still shows the old figure of ₹1,000, but the 2025-26 budget raised it and the 2026-27 budget speech confirms women are getting ₹2,500.",
        hi: "₹2,500 महीना। विभाग के वेब पेज पर अभी भी पुरानी राशि ₹1,000 लिखी है, पर 2025-26 के बजट में इसे बढ़ाया गया और 2026-27 के बजट भाषण में पुष्टि है कि महिलाओं को ₹2,500 मिल रहे हैं।",
      },
    },
    {
      q: { en: "Can I get this along with an old-age or widow pension?", hi: "क्या यह वृद्धावस्था या विधवा पेंशन के साथ मिल सकती है?" },
      a: {
        en: "No. You must not be getting any other government financial assistance.",
        hi: "नहीं। आपको किसी दूसरी सरकारी आर्थिक सहायता का लाभ नहीं मिल रहा होना चाहिए।",
      },
    },
  ],

  officialUrl: "https://wcd.py.gov.in/grant-monthly-financial-assistance-women-who-are-heads-families-living-below-poverty-line-bpl",
  sources: [
    "https://wcd.py.gov.in/grant-monthly-financial-assistance-women-who-are-heads-families-living-below-poverty-line-bpl",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
    "https://www.py.gov.in/sites/default/files/cm-speech-2025-26-english.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
