import { all, ageBetween, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-widow-destitute-women-pension",
  overlapGroup: "widow-pension",
  name: { en: "Pension to Widows and Destitute Women (Haryana)", hi: "विधवा एवं निराश्रित महिला पेंशन (हरियाणा)" },
  aka: ["Haryana widow pension", "Vidhwa Pension Haryana"],
  shortDescription: {
    en: "Widows and destitute women in Haryana aged 18 to 60 with their own income below ₹3 lakh a year get ₹3,200 a month in their bank account.",
    hi: "हरियाणा की 18 से 60 साल की विधवा और निराश्रित महिलाओं को, जिनकी अपनी सालाना आय ₹3 लाख से कम है, हर महीने ₹3,200 बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Social Justice, Empowerment, Welfare of SCs & BCs and Antyodaya (SEWA) Department, Haryana",
    hi: "सामाजिक न्याय, अधिकारिता, अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण तथा अंत्योदय (सेवा) विभाग, हरियाणा",
  },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "destitute women", "pension", "women", "haryana"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 3200, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("haryana"),
    female(),
    ...ageBetween(18, 60),
    labelled(when("marital", "in", ["widowed", "separated", "divorced"]), {
      en: "You are a widow, or a woman left without support (for example, deserted by your husband)",
      hi: "आप विधवा हैं, या बेसहारा महिला हैं (जैसे पति ने छोड़ दिया हो)",
    }),
  ),

  details: {
    en: [
      "This is Haryana's monthly pension for widows and for women left without support. It started in 1980-81 and is ₹3,200 a month from 1 November 2025.",
      "It covers women aged 18 to 60. At 60 the pension is moved to the Old Age Samman Allowance if she meets its conditions.",
      "The SEWA Department pays it every month into the woman's bank account. Eligibility is checked using Family ID (Parivar Pehchan Patra) data.",
    ],
    hi: [
      "यह हरियाणा की विधवाओं और बेसहारा महिलाओं के लिए मासिक पेंशन है। यह 1980-81 में शुरू हुई और 1 नवंबर 2025 से ₹3,200 महीना है।",
      "यह 18 से 60 साल की महिलाओं के लिए है। 60 साल पर शर्तें पूरी होने पर पेंशन बुढ़ापा सम्मान भत्ते में बदल जाती है।",
      "सेवा विभाग हर महीने महिला के बैंक खाते में पैसा भेजता है। पात्रता परिवार पहचान पत्र (PPP) के डेटा से जाँची जाती है।",
    ],
  },
  benefits: {
    en: ["₹3,200 every month, paid into your bank account.", "At 60, you move to the old-age allowance (subject to its conditions)."],
    hi: ["हर महीने ₹3,200, सीधे बैंक खाते में।", "60 साल पर बुढ़ापा सम्मान भत्ते में बदलाव (उसकी शर्तों के अनुसार)।"],
  },
  eligibilityText: {
    en: [
      "A woman aged 18 to 60 years.",
      "Domicile of Haryana, living in the state for the last 15 years (her own residence or her late husband's counts).",
      "Her own income from all sources is below ₹3 lakh a year.",
      "She is a widow; or destitute with no husband, parents or sons; or destitute because her husband (or, if unmarried, her parents) has deserted her or is physically or mentally unable to support her.",
    ],
    hi: [
      "18 से 60 साल की महिला।",
      "हरियाणा की अधिवासी हो और पिछले 15 साल से राज्य में रह रही हो (उसका या स्वर्गीय पति का निवास गिना जाता है)।",
      "सभी स्रोतों से उसकी अपनी सालाना आय ₹3 लाख से कम हो।",
      "वह विधवा हो; या पति, माता-पिता और बेटों के बिना निराश्रित हो; या पति (अविवाहित हो तो माता-पिता) के छोड़ देने या शारीरिक/मानसिक रूप से असमर्थ होने के कारण निराश्रित हो।",
    ],
  },
  exclusions: {
    en: [
      "Women employed by a government, local body or government-funded organisation.",
      "Women drawing a pension or family pension from such a body (provident fund and annuity income also count).",
    ],
    hi: [
      "किसी सरकार, स्थानीय निकाय या सरकारी मदद से चलने वाली संस्था में नौकरी करने वाली महिलाएँ।",
      "ऐसी संस्था से पेंशन या पारिवारिक पेंशन लेने वाली महिलाएँ (प्रोविडेंट फ़ंड और एन्युटी की आय भी गिनी जाती है)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Update your Family ID (PPP): marital status, income and bank account must be correct.",
        "Apply for widow/destitute women pension on saralharyana.gov.in, or wait to be contacted by the department based on PPP data.",
        "Give your consent when the District Social Welfare Officer contacts you.",
      ],
      hi: [
        "परिवार पहचान पत्र (PPP) अपडेट करें: वैवाहिक स्थिति, आय और बैंक खाता सही होना चाहिए।",
        "saralharyana.gov.in पर विधवा/निराश्रित महिला पेंशन के लिए आवेदन करें, या PPP डेटा के आधार पर विभाग के संपर्क का इंतज़ार करें।",
        "ज़िला समाज कल्याण अधिकारी के संपर्क करने पर अपनी सहमति दें।",
      ],
    },
    offline: {
      en: [
        "Go to a SARAL Kendra, CSC or the District Social Welfare Officer's office.",
        "Take your Family ID, Aadhaar and husband's death certificate (for widows).",
      ],
      hi: [
        "SARAL केंद्र, CSC या ज़िला समाज कल्याण अधिकारी के कार्यालय जाएँ।",
        "परिवार पहचान पत्र, आधार और (विधवा हों तो) पति का मृत्यु प्रमाण पत्र साथ ले जाएँ।",
      ],
    },
  },
  documents: {
    en: [
      "Family ID (Parivar Pehchan Patra)",
      "Aadhaar card",
      "Husband's death certificate (for widows)",
      "Bank account details",
    ],
    hi: ["परिवार पहचान पत्र (PPP)", "आधार कार्ड", "पति का मृत्यु प्रमाण पत्र (विधवा के लिए)", "बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "Will the pension stop if I remarry?", hi: "दोबारा शादी करने पर क्या पेंशन बंद हो जाएगी?" },
      a: {
        en: "The pension can be stopped if the condition for which it was given no longer exists. Inform the District Social Welfare Officer of any change, or the amount may be recovered with interest.",
        hi: "जिस हालत के कारण पेंशन मिली थी, वह न रहने पर पेंशन बंद हो सकती है। किसी भी बदलाव की जानकारी ज़िला समाज कल्याण अधिकारी को दें, वरना राशि ब्याज सहित वसूली जा सकती है।",
      },
    },
    {
      q: { en: "Can I get Lado Lakshmi too?", hi: "क्या लाडो लक्ष्मी भी मिल सकती है?" },
      a: {
        en: "No. Women already getting this pension are not eligible for Deen Dayal Lado Lakshmi Yojana.",
        hi: "नहीं। यह पेंशन ले रही महिलाएँ दीन दयाल लाडो लक्ष्मी योजना के लिए पात्र नहीं हैं।",
      },
    },
  ],

  officialUrl: "https://socialjusticehry.gov.in/pension-to-widows-and-destitute-women/",
  sources: [
    "https://socialjusticehry.gov.in/pension-to-widows-and-destitute-women/",
    "https://cdnbbsr.s3waas.gov.in/s392bbd31f8e0e43a7da8a6295b251725f/uploads/2023/09/202309011747804885.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1981,
  status: "active",
};

export default scheme;
