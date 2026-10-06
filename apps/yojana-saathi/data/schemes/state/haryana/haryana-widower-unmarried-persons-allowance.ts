import { all, labelled, maxAge, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-widower-unmarried-persons-allowance",
  tier: "compact",
  name: {
    en: "Financial Assistance to Widower and Unmarried Persons (Haryana)",
    hi: "विधुर एवं अविवाहित व्यक्ति आर्थिक सहायता योजना (हरियाणा)",
  },
  aka: ["Haryana widower pension", "Haryana unmarried pension", "Avivahit pension Haryana"],
  shortDescription: {
    en: "Widowers aged 40+ and unmarried men and women aged 45+ in Haryana with low income get ₹3,200 a month until they turn 60.",
    hi: "हरियाणा में 40 साल से ऊपर के विधुर और 45 साल से ऊपर के अविवाहित पुरुष-महिलाओं को, कम आय होने पर, 60 साल की उम्र तक हर महीने ₹3,200 मिलते हैं।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Social Justice, Empowerment, Welfare of SCs & BCs and Antyodaya (SEWA) Department, Haryana",
    hi: "सामाजिक न्याय, अधिकारिता, अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण तथा अंत्योदय (सेवा) विभाग, हरियाणा",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["widower", "unmarried", "pension", "allowance", "haryana"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 3200, period: "monthly", kind: "pension" },
  ageRange: { min: 40, max: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("haryana"),
    minAge(40),
    maxAge(60),
    labelled(
      { any: [{ all: [when("gender", "eq", "male"), when("marital", "eq", "widowed")] }, { all: [when("marital", "eq", "never-married"), minAge(45)] }] },
      {
        en: "A widower aged 40 or more, or an unmarried person aged 45 or more",
        hi: "40 साल या ज़्यादा उम्र का विधुर, या 45 साल या ज़्यादा उम्र का अविवाहित व्यक्ति",
      },
    ),
  ),

  details: {
    en: [
      "Started in July 2023, this scheme gives a monthly allowance to widowers and to unmarried men and women who have no one to support them. It is paid at the same rate as the widow pension, which is ₹3,200 a month from 1 November 2025.",
      "Eligibility is checked from Family ID (Parivar Pehchan Patra) data, so a Family ID is a must. The allowance is paid until 60, after which the person moves to the old-age allowance if eligible.",
    ],
    hi: [
      "जुलाई 2023 से शुरू यह योजना विधुरों और ऐसे अविवाहित पुरुषों-महिलाओं को मासिक भत्ता देती है जिनका कोई सहारा नहीं है। यह विधवा पेंशन की दर पर मिलता है, जो 1 नवंबर 2025 से ₹3,200 महीना है।",
      "पात्रता परिवार पहचान पत्र (PPP) डेटा से जाँची जाती है, इसलिए परिवार पहचान पत्र ज़रूरी है। भत्ता 60 साल तक मिलता है, उसके बाद पात्र होने पर व्यक्ति बुढ़ापा सम्मान भत्ते में चला जाता है।",
    ],
  },
  benefits: {
    en: ["₹3,200 a month (same as the widow pension rate), paid into your bank account until age 60."],
    hi: ["हर महीने ₹3,200 (विधवा पेंशन की दर के बराबर), 60 साल की उम्र तक सीधे बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Widower: aged 40 or more, own verified income up to ₹3 lakh a year, living in Haryana for the last 15 years. Divorced men and those in a live-in relationship are not eligible.",
      "Unmarried man or woman: aged 45 or more, verified family income up to ₹1.8 lakh a year, living in Haryana for at least the last year.",
      "Not getting any other pension, financial assistance or annuity from a government or autonomous body.",
      "Has a Family ID (Parivar Pehchan Patra).",
    ],
    hi: [
      "विधुर: उम्र 40 साल या ज़्यादा, अपनी सत्यापित सालाना आय ₹3 लाख तक, और पिछले 15 साल से हरियाणा में निवास। तलाकशुदा या लिव-इन में रहने वाले पात्र नहीं हैं।",
      "अविवाहित पुरुष या महिला: उम्र 45 साल या ज़्यादा, परिवार की सत्यापित सालाना आय ₹1.8 लाख तक, और कम से कम पिछले एक साल से हरियाणा में निवास।",
      "किसी सरकारी या स्वायत्त संस्था से कोई और पेंशन, आर्थिक सहायता या एन्युटी न मिल रही हो।",
      "परिवार पहचान पत्र (PPP) हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Keep your Family ID (PPP) marital status, income and bank details up to date.",
        "Eligible people are listed from PPP data every month; the District Social Welfare Officer contacts you for consent.",
        "You can also apply on saralharyana.gov.in or at a SARAL Kendra.",
      ],
      hi: [
        "परिवार पहचान पत्र (PPP) में वैवाहिक स्थिति, आय और बैंक विवरण अपडेट रखें।",
        "हर महीने PPP डेटा से पात्र लोगों की सूची बनती है; ज़िला समाज कल्याण अधिकारी सहमति के लिए संपर्क करते हैं।",
        "आप saralharyana.gov.in पर या SARAL केंद्र पर भी आवेदन कर सकते हैं।",
      ],
    },
  },
  exclusions: {
    en: ["The allowance stops if the person marries after it is granted; amounts drawn without telling the DSWO are recovered with 12% interest."],
    hi: ["भत्ता मिलने के बाद शादी करने पर यह बंद हो जाता है; ज़िला समाज कल्याण अधिकारी को बताए बिना ली गई राशि 12% ब्याज सहित वसूली जाती है।"],
  },

  officialUrl: "https://socialjusticehry.gov.in/financial-assistance-to-widower-and-unmarried-persons-scheme/",
  sources: [
    "https://socialjusticehry.gov.in/financial-assistance-to-widower-and-unmarried-persons-scheme/",
    "https://cdnbbsr.s3waas.gov.in/s392bbd31f8e0e43a7da8a6295b251725f/uploads/2023/07/2023072199.pdf",
    "https://socialjusticehry.gov.in/pension-to-widows-and-destitute-women/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
