import { all, any, female, incomeUpTo, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-vriddhjan-samman-pension",
  overlapGroup: "old-age-pension",
  name: { en: "Mukhyamantri Vriddhjan Samman Pension Yojana", hi: "मुख्यमंत्री वृद्धजन सम्मान पेंशन योजना" },
  aka: ["Rajasthan old age pension", "Vridha pension", "RajSSP"],
  shortDescription: {
    en: "Women aged 55+ and men aged 58+ in Rajasthan with low income get a monthly pension, paid into their bank account.",
    hi: "राजस्थान में कम आय वाली 55+ साल की महिलाओं और 58+ साल के पुरुषों को हर महीने पेंशन बैंक खाते में मिलती है।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Social Justice and Empowerment Department, Government of Rajasthan", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान सरकार" },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "vridha pension", "pension", "rajssp", "rajasthan"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 55 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("rajasthan"),
    labelled(any(all(female(), minAge(55)), all(when("gender", "in", ["male", "transgender"]), minAge(58))), {
      en: "Woman aged 55 or more, or man aged 58 or more",
      hi: "55 साल या उससे ज़्यादा उम्र की महिला, या 58 साल या उससे ज़्यादा उम्र का पुरुष",
    }),
    labelled(any(incomeUpTo(48_000), isTrue("bpl")), {
      en: "Your and your spouse's income is below ₹48,000 a year (no limit for BPL, Antyodaya or Astha card families)",
      hi: "आपकी और जीवनसाथी की सालाना आय ₹48,000 से कम हो (BPL, अंत्योदय या आस्था कार्ड वाले परिवारों पर सीमा नहीं)",
    }),
  ),

  details: {
    en: [
      "This is Rajasthan's main old age pension. It is paid under the Rajasthan Social Security Pension Rules and run by the Social Justice and Empowerment Department through the RajSSP portal.",
      "The amount is set by the state and has been raised several times. News reports say the minimum rises to ₹1,350 a month from July 2026 and ₹1,450 from January 2027; we haven't seen the official order yet, so check the current amount on the SSP portal.",
      "Pensioners must complete yearly verification (with Aadhaar or Jan Aadhaar) to keep the payments coming.",
    ],
    hi: [
      "यह राजस्थान की मुख्य वृद्धावस्था पेंशन है। यह राजस्थान सामाजिक सुरक्षा पेंशन नियमों के तहत मिलती है और सामाजिक न्याय एवं अधिकारिता विभाग इसे RajSSP पोर्टल से चलाता है।",
      "पेंशन की राशि राज्य तय करता है और इसे कई बार बढ़ाया गया है। जुलाई 2026 से हर पात्र पेंशनभोगी को महीना मिलता है, और जनवरी 2027 से इसे ₹1,450 करने की घोषणा हुई है।",
      "पेंशन मिलती रहे, इसके लिए हर साल (आधार या जन आधार से) सत्यापन कराना ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension paid into your bank account (the amount is set by the state; see the SSP portal).",
      "Paid by DBT into your Aadhaar-linked bank account.",
      "The amount is revised from time to time by the state government.",
    ],
    hi: [
      "हर महीने पेंशन सीधे बैंक खाते में (राशि राज्य तय करता है; SSP पोर्टल देखें)।",
      "पैसा DBT से आपके आधार से जुड़े बैंक खाते में आता है।",
      "राज्य सरकार समय-समय पर राशि बढ़ाती है।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Rajasthan.",
      "Women must be 55 or older; men must be 58 or older.",
      "Your own and your spouse's total income from all sources is below ₹48,000 a year.",
      "Families with BPL, Antyodaya or Astha cards, and Sahariya, Kathodi and Khairwa families, do not need to meet the income limit.",
    ],
    hi: [
      "आप राजस्थान में रहते हों।",
      "महिलाओं की उम्र 55 साल या ज़्यादा, पुरुषों की 58 साल या ज़्यादा हो।",
      "आपकी और जीवनसाथी की सभी स्रोतों से कुल सालाना आय ₹48,000 से कम हो।",
      "BPL, अंत्योदय या आस्था कार्ड वाले परिवारों और सहरिया, कथौड़ी और खैरवा परिवारों पर आय की सीमा लागू नहीं है।",
    ],
  },
  exclusions: {
    en: [
      "You, your spouse or your son is a central or state government employee or government pensioner.",
      "Income above the limit (unless you are in an exempt group).",
    ],
    hi: [
      "आप, आपका जीवनसाथी या बेटा केंद्र या राज्य सरकार का कर्मचारी या सरकारी पेंशनभोगी हो।",
      "आय सीमा से ज़्यादा हो (छूट वाले वर्ग को छोड़कर)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to the Rajasthan SSO portal (sso.rajasthan.gov.in) and open the Social Security Pension (RajSSP) app.",
        "Fill in the form using your Jan Aadhaar, choose the old age pension, and upload documents.",
        "Track your application on ssp.rajasthan.gov.in.",
      ],
      hi: [
        "राजस्थान SSO पोर्टल (sso.rajasthan.gov.in) पर लॉग इन करें और सामाजिक सुरक्षा पेंशन (RajSSP) ऐप खोलें।",
        "जन आधार से फ़ॉर्म भरें, वृद्धावस्था पेंशन चुनें और दस्तावेज़ अपलोड करें।",
        "ssp.rajasthan.gov.in पर आवेदन की स्थिति देखें।",
      ],
    },
    offline: {
      en: [
        "Visit an e-Mitra kiosk with your Jan Aadhaar, Aadhaar and bank details.",
        "The operator will fill in the pension form for you. Your application then goes to the SDM (urban) or BDO (rural) for approval.",
      ],
      hi: [
        "जन आधार, आधार और बैंक विवरण लेकर ई-मित्र केंद्र पर जाएँ।",
        "ऑपरेटर आपका पेंशन फ़ॉर्म भर देगा। फिर आवेदन मंज़ूरी के लिए उपखंड अधिकारी (शहर) या विकास अधिकारी (गाँव) के पास जाता है।",
      ],
    },
  },
  documents: {
    en: ["Jan Aadhaar card", "Aadhaar card", "Age proof", "Income self-declaration", "Bank account details", "BPL/Antyodaya/Astha card, if any"],
    hi: ["जन आधार कार्ड", "आधार कार्ड", "उम्र का प्रमाण", "आय का स्व-घोषणा पत्र", "बैंक खाते का विवरण", "BPL/अंत्योदय/आस्था कार्ड, अगर हो"],
  },
  faqs: [
    {
      q: { en: "Can I also get the central old age pension?", hi: "क्या मुझे केंद्र की वृद्धावस्था पेंशन भी मिलेगी?" },
      a: {
        en: "Not separately. For eligible BPL pensioners the central share (IGNOAPS) is paid as part of the same state pension, so you get one combined amount.",
        hi: "अलग से नहीं। पात्र BPL पेंशनभोगियों के लिए केंद्र का हिस्सा (IGNOAPS) इसी राज्य पेंशन में जुड़कर आता है, इसलिए आपको एक ही राशि मिलती है।",
      },
    },
    {
      q: { en: "My pension has stopped. Why?", hi: "मेरी पेंशन बंद हो गई है। क्यों?" },
      a: {
        en: "The most common reason is that the yearly verification was not done. Visit an e-Mitra kiosk to complete it with your Aadhaar or Jan Aadhaar.",
        hi: "सबसे आम वजह है सालाना सत्यापन न होना। आधार या जन आधार से इसे पूरा कराने के लिए ई-मित्र केंद्र पर जाएँ।",
      },
    },
  ],

  officialUrl: "https://ssp.rajasthan.gov.in/",
  sources: [
    "https://ssp.rajasthan.gov.in/",
    "https://dainiknavajyoti.com/rajasthan/jaipur/social-security-pension-amount-proposed-to-increase-from-july-1350/article-163585",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "check-status",
};

export default scheme;
