import { all, ageBetween, female, labelled, notGovtEmployee, notTaxPayer, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maiyan-samman-yojana",
  overlapGroup: "women-monthly",
  name: { en: "Jharkhand Mukhyamantri Maiyan Samman Yojana", hi: "झारखंड मुख्यमंत्री मंईयां सम्मान योजना" },
  aka: ["Maiyan Samman", "Maiya Samman Yojana", "MMMSY"],
  shortDescription: {
    en: "Women in Jharkhand aged 18 to 49 from ration-card families get ₹2,500 every month in their Aadhaar-linked bank account.",
    hi: "झारखंड में राशन कार्ड वाले परिवारों की 18 से 49 साल की महिलाओं को हर महीने ₹2,500 उनके आधार से जुड़े बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Women, Child Development and Social Security, Government of Jharkhand",
    hi: "महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग, झारखंड सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "maiyan samman", "maiya samman", "dbt", "jharkhand"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2500, period: "monthly", kind: "cash" },
  ageRange: { min: 18, max: 49 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("jharkhand"),
    female(),
    ...ageBetween(18, 49),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), {
      en: "She, her husband (or father, if unmarried) is not a government employee or government pensioner",
      hi: "वह ख़ुद, उसके पति (अविवाहित हो तो पिता) सरकारी कर्मचारी या सरकारी पेंशनभोगी न हों",
    }),
  ),

  details: {
    en: [
      "Maiyan Samman Yojana is Jharkhand's monthly cash support for women. It started in August 2024 and is meant to help women with nutrition, health and a bigger say in the household's money.",
      "Eligible women get ₹2,500 a month, paid only into a single bank account that is linked to their Aadhaar. The state budget for 2026-27 provides money to keep paying this rate.",
      "The Department of Women, Child Development and Social Security runs the scheme. New applications are taken at camps held across the state.",
    ],
    hi: [
      "मंईयां सम्मान योजना झारखंड सरकार की महिलाओं के लिए मासिक नकद सहायता है। यह अगस्त 2024 में शुरू हुई और इसका मक़सद महिलाओं के पोषण, सेहत और घर के पैसों में उनकी भागीदारी को बढ़ाना है।",
      "पात्र महिलाओं को हर महीने ₹2,500 मिलते हैं, जो सिर्फ़ उनके आधार से जुड़े एक बैंक खाते में भेजे जाते हैं। राज्य के 2026-27 के बजट में इसी दर से भुगतान जारी रखने के लिए पैसा रखा गया है।",
      "यह योजना महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग चलाता है। नए आवेदन पूरे राज्य में लगने वाले शिविरों में लिए जाते हैं।",
    ],
  },
  benefits: {
    en: ["₹2,500 every month, paid into your own bank account.", "That adds up to ₹30,000 a year.", "You can use the money as you need, for food, health or the household."],
    hi: ["हर महीने ₹2,500, सीधे आपके अपने बैंक खाते में।", "साल भर में कुल ₹30,000।", "यह पैसा आप अपनी ज़रूरत के हिसाब से खाने, सेहत या घर के कामों में लगा सकती हैं।"],
  },
  eligibilityText: {
    en: [
      "A woman who lives in Jharkhand.",
      "Has turned 18 and is under 50 when she applies.",
      "Her family holds a Jharkhand ration card: Antyodaya (yellow), priority household (pink), K-Oil (white) or the state's green card.",
      "Has an Aadhaar card and one bank account linked to Aadhaar.",
    ],
    hi: [
      "झारखंड में रहने वाली महिला।",
      "आवेदन के समय उम्र 18 साल पूरी हो चुकी हो और 50 साल से कम हो।",
      "परिवार के पास झारखंड का राशन कार्ड हो: अंत्योदय (पीला), प्राथमिकता वाला गृहस्थ (गुलाबी), K-Oil (सफ़ेद) या राज्य का हरा कार्ड।",
      "आधार कार्ड हो और आधार से जुड़ा एक बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "She, her husband, or her father (if she is unmarried) works for the central or state government, a PSU, a local body or a government-aided school, whether as a permanent, contract or honorarium worker.",
      "She, her husband, or her father (if unmarried) gets a government pension or family pension.",
      "Anyone in the family is a current or former MP or MLA.",
      "The family pays income tax.",
      "She is an EPF account holder.",
      "She already gets another social security pension from the same department.",
    ],
    hi: [
      "वह, उसके पति, या (अविवाहित हो तो) पिता केंद्र या राज्य सरकार, किसी सरकारी उपक्रम, स्थानीय निकाय या सरकारी सहायता वाले स्कूल में काम करते हों, चाहे स्थायी, संविदा या मानदेय पर।",
      "वह, उसके पति, या (अविवाहित हो तो) पिता सरकारी पेंशन या पारिवारिक पेंशन लेते हों।",
      "परिवार में कोई मौजूदा या पूर्व सांसद या विधायक हो।",
      "परिवार आयकर देता हो।",
      "उसका EPF खाता हो।",
      "उसे पहले से इसी विभाग की कोई दूसरी सामाजिक सुरक्षा पेंशन मिल रही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Watch for the Maiyan Samman camp in your panchayat or ward, or ask at your block office or Anganwadi.",
        "Fill in the free application form and attach the documents listed below.",
        "Make sure your bank account is linked to Aadhaar. Payment is made only to an Aadhaar-linked account.",
      ],
      hi: [
        "अपनी पंचायत या वार्ड में मंईयां सम्मान शिविर की जानकारी रखें, या प्रखंड कार्यालय या आंगनवाड़ी में पूछें।",
        "मुफ़्त आवेदन फ़ॉर्म भरें और नीचे दिए दस्तावेज़ लगाएँ।",
        "ध्यान रखें कि आपका बैंक खाता आधार से जुड़ा हो। भुगतान सिर्फ़ आधार से जुड़े खाते में होता है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Voter ID card", "Ration card", "Bank passbook of an Aadhaar-linked account", "PAN card (if you have one)", "Signed self-declaration (original)"],
    hi: ["आधार कार्ड", "मतदाता पहचान पत्र", "राशन कार्ड", "आधार से जुड़े बैंक खाते की पासबुक", "पैन कार्ड (अगर हो)", "हस्ताक्षर किया हुआ स्व-घोषणा पत्र (मूल)"],
  },
  faqs: [
    {
      q: { en: "Is the amount ₹1,000 or ₹2,500?", hi: "राशि ₹1,000 है या ₹2,500?" },
      a: {
        en: "The scheme began at ₹1,000 a month in 2024. It now pays ₹2,500 a month, and that is the rate in the 2026-27 budget.",
        hi: "2024 में योजना ₹1,000 महीने से शुरू हुई थी। अब हर महीने ₹2,500 मिलते हैं, और 2026-27 के बजट में यही दर रखी गई है।",
      },
    },
    {
      q: { en: "Does applying cost anything?", hi: "क्या आवेदन के लिए पैसे देने होते हैं?" },
      a: {
        en: "No. The form is free. If anyone asks you for money to get you enrolled, report it to the block office or the toll-free number 1800-890-0215.",
        hi: "नहीं। फ़ॉर्म मुफ़्त है। अगर कोई नाम जोड़ने के लिए पैसे माँगे, तो प्रखंड कार्यालय या टोल-फ़्री नंबर 1800-890-0215 पर शिकायत करें।",
      },
    },
    {
      q: { en: "I get a widow pension. Can I also get Maiyan Samman?", hi: "मुझे विधवा पेंशन मिलती है। क्या मंईयां सम्मान भी मिलेगा?" },
      a: {
        en: "No. Women who already get a social security pension from the same department are left out of this scheme.",
        hi: "नहीं। जिन महिलाओं को इसी विभाग से सामाजिक सुरक्षा पेंशन पहले से मिल रही है, वे इस योजना में शामिल नहीं हैं।",
      },
    },
  ],

  officialUrl: "https://mmmsy.jharkhand.gov.in/",
  sources: [
    "https://mmmsy.jharkhand.gov.in/",
    "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
    "https://www.jharkhand.gov.in/PDepartment/ViewDoc?id=D031DO003SD00628072024033709248",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
