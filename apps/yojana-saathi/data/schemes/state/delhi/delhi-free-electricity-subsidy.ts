import { residentOf, all } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-free-electricity-subsidy",
  tier: "compact",
  name: { en: "Delhi Domestic Electricity Subsidy (Free Electricity)", hi: "दिल्ली घरेलू बिजली सब्सिडी (मुफ़्त बिजली)" },
  aka: ["Delhi free bijli", "200 units free electricity Delhi", "Delhi power subsidy"],
  shortDescription: {
    en: "Households in Delhi get a state subsidy on their home electricity bill; families with low monthly use (long known as up to 200 units) pay nothing. The 2026-27 Delhi budget says the subsidy continues.",
    hi: "दिल्ली के घरों को बिजली बिल पर राज्य सरकार की सब्सिडी मिलती है; कम खपत वाले परिवार (लंबे समय से 200 यूनिट तक) कुछ नहीं देते। दिल्ली बजट 2026-27 के अनुसार यह सब्सिडी जारी है।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Power Department, Govt. of NCT of Delhi", hi: "ऊर्जा (बिजली) विभाग, दिल्ली सरकार" },
  categories: ["energy-savings"],
  tags: ["free electricity", "bijli subsidy", "200 units", "electricity bill", "delhi"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(residentOf("delhi")),

  details: {
    en: [
      "The Delhi government pays part of the electricity bill of domestic consumers directly to the power distribution companies (BSES Rajdhani, BSES Yamuna, Tata Power-DDL and NDMC). The subsidy is shown as a deduction on your monthly bill.",
      "Since 2019, households using up to 200 units a month have had a zero bill, with partial help for somewhat higher use. The Delhi Budget 2026-27 states that the electricity subsidy will continue. The exact slabs and any opt-in rule are set by the Power Department and shown on your bill.",
    ],
    hi: [
      "दिल्ली सरकार घरेलू उपभोक्ताओं के बिजली बिल का एक हिस्सा सीधे बिजली वितरण कंपनियों (BSES राजधानी, BSES यमुना, टाटा पावर-DDL और NDMC) को देती है। यह सब्सिडी आपके मासिक बिल में कटौती के रूप में दिखती है।",
      "2019 से हर महीने 200 यूनिट तक बिजली इस्तेमाल करने वाले घरों का बिल शून्य आता रहा है, और थोड़ी ज़्यादा खपत पर आंशिक मदद मिलती है। दिल्ली बजट 2026-27 में कहा गया है कि बिजली सब्सिडी जारी रहेगी। सही स्लैब और सब्सिडी चुनने का नियम ऊर्जा विभाग तय करता है और आपके बिल पर दिखता है।",
    ],
  },
  benefits: {
    en: [
      "Zero electricity bill for households with low monthly use (up to 200 units, as applied since 2019).",
      "Partial subsidy on the bill for somewhat higher use.",
      "No cash is paid; the subsidy is deducted from the bill automatically.",
    ],
    hi: [
      "कम मासिक खपत वाले घरों का बिजली बिल शून्य (2019 से 200 यूनिट तक)।",
      "थोड़ी ज़्यादा खपत पर बिल में आंशिक सब्सिडी।",
      "कोई नकद नहीं मिलता; सब्सिडी अपने-आप बिल से घट जाती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Has a domestic (household) electricity connection in Delhi.",
      "Monthly use within the subsidised slabs.",
      "If your power company asks you to opt in for the subsidy, you must have done so.",
    ],
    hi: [
      "दिल्ली में घरेलू बिजली कनेक्शन हो।",
      "मासिक खपत सब्सिडी वाले स्लैब के अंदर हो।",
      "अगर बिजली कंपनी सब्सिडी के लिए विकल्प चुनने को कहती है, तो वह चुना हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "No separate application is usually needed: the subsidy is applied to your domestic bill.",
        "If your bill shows no subsidy, contact your power company's customer care or office, or the Power Department's grievance cell (toll-free 1800112222).",
      ],
      hi: [
        "आमतौर पर अलग से आवेदन नहीं करना पड़ता: सब्सिडी आपके घरेलू बिल पर लगती है।",
        "अगर बिल में सब्सिडी नहीं दिख रही, तो अपनी बिजली कंपनी के कस्टमर केयर या दफ़्तर, या ऊर्जा विभाग के शिकायत प्रकोष्ठ (टोल-फ़्री 1800112222) से संपर्क करें।",
      ],
    },
  },

  officialUrl: "https://power.delhi.gov.in/",
  sources: [
    "https://finance.delhi.gov.in/sites/default/files/Finance/marquee-files/budget_speech_2026-25_hindi.pdf",
    "https://power.delhi.gov.in/power/citizen-charter",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "check-status",
};

export default scheme;
