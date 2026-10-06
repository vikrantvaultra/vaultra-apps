import { all, female, incomeUpTo, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajasthan-ekal-nari-samman-pension",
  overlapGroup: "widow-pension",
  name: { en: "Mukhyamantri Ekal Nari Samman Pension Yojana", hi: "मुख्यमंत्री एकल नारी सम्मान पेंशन योजना" },
  aka: ["Rajasthan widow pension", "Ekal Nari pension", "Vidhwa pension"],
  shortDescription: {
    en: "Widowed, divorced and abandoned women in Rajasthan aged 18+ with low income get a monthly pension in their bank account.",
    hi: "राजस्थान में 18+ साल की कम आय वाली विधवा, तलाकशुदा और परित्यक्ता महिलाओं को हर महीने पेंशन बैंक खाते में मिलती है।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Social Justice and Empowerment Department, Government of Rajasthan", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान सरकार" },
  categories: ["women-child", "pension-insurance", "social-welfare"],
  tags: ["widow pension", "single woman", "divorced", "abandoned", "pension", "rajasthan"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("rajasthan"),
    female(),
    labelled(when("marital", "in", ["widowed", "divorced", "separated"]), {
      en: "You are widowed, divorced, or abandoned by your husband",
      hi: "आप विधवा, तलाकशुदा या पति द्वारा छोड़ी गई (परित्यक्ता) हैं",
    }),
    minAge(18),
    labelled(incomeUpTo(48_000), { en: "Your income is below ₹48,000 a year", hi: "आपकी सालाना आय ₹48,000 से कम है" }),
  ),

  details: {
    en: [
      "Mukhyamantri Ekal Nari Samman Pension gives a monthly pension to single women in Rajasthan: widows, divorced women and women abandoned by their husbands.",
      "It is run by the Social Justice and Empowerment Department under the Rajasthan Social Security Pension Rules. News reports say the minimum rises to ₹1,350 a month from July 2026 and ₹1,450 from January 2027; we haven't seen the official order yet, so check the current amount on the SSP portal.",
      "The pension is paid into your bank account by DBT. You need to complete yearly verification to keep getting it.",
    ],
    hi: [
      "मुख्यमंत्री एकल नारी सम्मान पेंशन राजस्थान की अकेली महिलाओं को हर महीने पेंशन देती है: विधवा, तलाकशुदा और पति द्वारा छोड़ी गई महिलाएँ।",
      "इसे सामाजिक न्याय एवं अधिकारिता विभाग राजस्थान सामाजिक सुरक्षा पेंशन नियमों के तहत चलाता है। जुलाई 2026 से हर पात्र पेंशनभोगी को महीना मिलता है, और जनवरी 2027 से ₹1,450 करने की घोषणा हुई है।",
      "पेंशन DBT से आपके बैंक खाते में आती है। पेंशन मिलती रहे, इसके लिए हर साल सत्यापन कराना ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension paid into your bank account (the amount is set by the state; see the SSP portal).",
      "Paid by DBT into your own bank account.",
      "Children of women getting this pension may also qualify for the Palanhar Yojana.",
    ],
    hi: [
      "हर महीने पेंशन सीधे बैंक खाते में (राशि राज्य तय करता है; SSP पोर्टल देखें)।",
      "पैसा DBT से आपके अपने बैंक खाते में आता है।",
      "यह पेंशन पाने वाली महिलाओं के बच्चे पालनहार योजना के भी पात्र हो सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Rajasthan and are 18 or older.",
      "You are a widow, a divorced woman, or a destitute woman abandoned by her husband.",
      "Your total income from all sources is below ₹48,000 a year.",
    ],
    hi: [
      "आप राजस्थान में रहती हैं और आपकी उम्र 18 साल या ज़्यादा है।",
      "आप विधवा, तलाकशुदा या पति द्वारा छोड़ी गई बेसहारा महिला हैं।",
      "सभी स्रोतों से आपकी कुल सालाना आय ₹48,000 से कम है।",
    ],
  },
  exclusions: {
    en: [
      "You or your son is a central or state government (or PSU) employee or government pensioner.",
      "Income of ₹48,000 a year or more.",
    ],
    hi: [
      "आप या आपका बेटा केंद्र या राज्य सरकार (या सरकारी उपक्रम) का कर्मचारी या सरकारी पेंशनभोगी हो।",
      "सालाना आय ₹48,000 या उससे ज़्यादा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to sso.rajasthan.gov.in and open the Social Security Pension (RajSSP) app.",
        "Choose the Ekal Nari pension, fill in the form with your Jan Aadhaar and upload documents.",
        "Track the status on ssp.rajasthan.gov.in.",
      ],
      hi: [
        "sso.rajasthan.gov.in पर लॉग इन करें और सामाजिक सुरक्षा पेंशन (RajSSP) ऐप खोलें।",
        "एकल नारी पेंशन चुनें, जन आधार से फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "ssp.rajasthan.gov.in पर स्थिति देखें।",
      ],
    },
    offline: {
      en: [
        "Visit an e-Mitra kiosk with your documents.",
        "The operator will submit the form online. It is approved by the SDM (urban) or BDO (rural).",
      ],
      hi: [
        "दस्तावेज़ लेकर ई-मित्र केंद्र पर जाएँ।",
        "ऑपरेटर फ़ॉर्म ऑनलाइन जमा करेगा। मंज़ूरी उपखंड अधिकारी (शहर) या विकास अधिकारी (गाँव) देते हैं।",
      ],
    },
  },
  documents: {
    en: ["Jan Aadhaar card", "Aadhaar card", "Husband's death certificate, divorce decree, or proof of being abandoned", "Income self-declaration", "Bank account details"],
    hi: ["जन आधार कार्ड", "आधार कार्ड", "पति का मृत्यु प्रमाण पत्र, तलाक का आदेश, या परित्यक्ता होने का प्रमाण", "आय का स्व-घोषणा पत्र", "बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "Does the pension stop if I remarry?", hi: "क्या दोबारा शादी करने पर पेंशन बंद हो जाएगी?" },
      a: {
        en: "Yes. The pension is for single women, so it stops on remarriage. Rajasthan has a separate widow remarriage gift scheme you can ask about.",
        hi: "हाँ। यह पेंशन अकेली महिलाओं के लिए है, इसलिए दोबारा शादी पर बंद हो जाती है। राजस्थान में विधवा पुनर्विवाह के लिए अलग उपहार योजना है, उसके बारे में पूछ सकती हैं।",
      },
    },
    {
      q: { en: "Can I also get the central widow pension?", hi: "क्या केंद्र की विधवा पेंशन भी मिलेगी?" },
      a: {
        en: "Not separately. For eligible BPL widows the central share (IGNWPS) is paid as part of this same pension.",
        hi: "अलग से नहीं। पात्र BPL विधवाओं के लिए केंद्र का हिस्सा (IGNWPS) इसी पेंशन में जुड़कर आता है।",
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
