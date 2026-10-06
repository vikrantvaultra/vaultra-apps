import { all, female, incomeUpTo, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-widow-pension",
  name: { en: "Delhi Pension Scheme to Women in Distress (Widow Pension)", hi: "दिल्ली संकटग्रस्त महिला पेंशन योजना (विधवा पेंशन)" },
  aka: ["Delhi widow pension", "Vidhwa pension Delhi", "Women in distress pension"],
  shortDescription: {
    en: "₹2,500 a month for widowed, divorced, separated, abandoned or destitute women in Delhi aged 18 and above, with annual income up to ₹1 lakh.",
    hi: "दिल्ली की 18 साल या उससे ज़्यादा उम्र की विधवा, तलाक़शुदा, अलग रह रही, छोड़ी गई या बेसहारा महिलाओं को, जिनकी सालाना आय ₹1 लाख तक है, हर महीने ₹2,500।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Women and Child Development, Govt. of NCT of Delhi", hi: "महिला एवं बाल विकास विभाग, दिल्ली सरकार" },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow pension", "vidhwa", "divorced", "destitute women", "pension", "delhi"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2500, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("delhi"),
    female(),
    labelled(when("marital", "in", ["widowed", "divorced", "separated"]), {
      en: "You are widowed, divorced, separated or abandoned",
      hi: "आप विधवा, तलाक़शुदा, अलग रह रही या छोड़ी गई हैं",
    }),
    minAge(18),
    labelled(incomeUpTo(100_000), { en: "Your income is up to ₹1 lakh a year", hi: "आपकी सालाना आय ₹1 लाख तक है" }),
  ),

  details: {
    en: [
      "The Delhi Pension Scheme to Women in Distress gives a monthly pension to widows and to divorced, separated, abandoned, deserted or destitute women who are poor and have no adequate means of living.",
      "It is run by Delhi's Department of Women and Child Development. The pension is ₹2,500 a month, paid every month into your bank account, starting from the month after you apply. There is no upper age limit.",
      "The same department also runs the Widow's Daughter Marriage scheme, a one-time ₹30,000 grant for the marriage of up to two daughters of a poor widow.",
    ],
    hi: [
      "दिल्ली संकटग्रस्त महिला पेंशन योजना उन विधवाओं और तलाक़शुदा, अलग रह रही, छोड़ी गई या बेसहारा महिलाओं को मासिक पेंशन देती है जो गरीब हैं और जिनके पास गुज़ारे का पर्याप्त साधन नहीं है।",
      "यह दिल्ली का महिला एवं बाल विकास विभाग चलाता है। पेंशन ₹2,500 महीना है, जो हर महीने बैंक खाते में आती है, आवेदन के अगले महीने से। उम्र की ऊपरी सीमा नहीं है।",
      "यही विभाग विधवा की बेटी की शादी योजना भी चलाता है, जिसमें गरीब विधवा की दो बेटियों तक की शादी के लिए एक बार ₹30,000 मिलते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹2,500 a month, for life while eligible.",
      "Paid directly into your bank account every month.",
      "Can also apply for ₹30,000 for a daughter's marriage under the linked scheme.",
    ],
    hi: [
      "पात्र रहने तक जीवन भर ₹2,500 महीना।",
      "पैसा हर महीने सीधे बैंक खाते में।",
      "जुड़ी हुई योजना में बेटी की शादी के लिए ₹30,000 के लिए भी आवेदन कर सकती हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A widowed, divorced, separated, abandoned, deserted or destitute woman aged 18 or above.",
      "Has lived in Delhi for more than 5 years before applying.",
      "Her annual income is not more than ₹1 lakh.",
      "Has a bank account in her name only.",
    ],
    hi: [
      "18 साल या उससे ज़्यादा उम्र की विधवा, तलाक़शुदा, अलग रह रही, छोड़ी गई या बेसहारा महिला।",
      "आवेदन से पहले 5 साल से ज़्यादा समय से दिल्ली में रह रही हो।",
      "उसकी सालाना आय ₹1 लाख से ज़्यादा न हो।",
      "सिर्फ़ उसके नाम का बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Women already getting a pension for this purpose from the Central or Delhi government, MCD, NDMC or any other source.",
      "Women whose annual income is above ₹1 lakh.",
    ],
    hi: [
      "जिन महिलाओं को इसी उद्देश्य के लिए केंद्र या दिल्ली सरकार, MCD, NDMC या किसी और स्रोत से पहले से पेंशन मिल रही है।",
      "जिनकी सालाना आय ₹1 लाख से ज़्यादा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Delhi e-District portal (edistrict.delhigovt.nic.in) and register or log in.",
        "Choose 'Delhi Pension Scheme to Women in Distress' under the Women and Child Development department.",
        "Fill in the form, upload the documents and the self-declaration, and submit.",
        "The district WCD office verifies the application; the pension starts after approval.",
      ],
      hi: [
        "दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर जाएँ और रजिस्टर या लॉग इन करें।",
        "महिला एवं बाल विकास विभाग में 'Delhi Pension Scheme to Women in Distress' चुनें।",
        "फ़ॉर्म भरें, दस्तावेज़ और स्व-घोषणा पत्र अपलोड करें और जमा करें।",
        "ज़िला WCD कार्यालय आवेदन की जाँच करता है; मंज़ूरी के बाद पेंशन शुरू होती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Husband's death certificate, divorce decree or other proof of status", "Proof of more than 5 years' residence in Delhi", "Age proof", "Self-declaration of income", "Bank account in your own name"],
    hi: ["आधार", "पति का मृत्यु प्रमाणपत्र, तलाक़ का आदेश या स्थिति का कोई और प्रमाण", "दिल्ली में 5 साल से ज़्यादा रहने का प्रमाण", "उम्र का प्रमाण", "आय का स्व-घोषणा पत्र", "अपने नाम का बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "Is there an upper age limit?", hi: "क्या उम्र की कोई ऊपरी सीमा है?" },
      a: {
        en: "No. Since 2017 the scheme covers women from 18 years for life; earlier it was limited to 18 to 60.",
        hi: "नहीं। 2017 से योजना 18 साल से जीवन भर तक की महिलाओं के लिए है; पहले यह 18 से 60 साल तक सीमित थी।",
      },
    },
    {
      q: { en: "Can I get this and the Delhi Lakshmi Yojana together?", hi: "क्या यह और दिल्ली लक्ष्मी योजना साथ में मिल सकती हैं?" },
      a: {
        en: "No. The Delhi Lakshmi Yojana excludes women who receive a widow pension or any other government pension.",
        hi: "नहीं। दिल्ली लक्ष्मी योजना में विधवा पेंशन या कोई और सरकारी पेंशन पाने वाली महिलाएँ शामिल नहीं हैं।",
      },
    },
  ],

  officialUrl: "https://wcd.delhi.gov.in/wcd/delhi-pension-scheme-women-distress-widows-divorced-separated-destitute-abandoned-women",
  sources: [
    "https://wcd.delhi.gov.in/wcd/delhi-pension-scheme-women-distress-widows-divorced-separated-destitute-abandoned-women",
    "https://wcd.delhi.gov.in/sites/default/files/WCD/circulars-orders/fas_amendment_gazette_348_widow.pdf",
    "https://edistrict.delhigovt.nic.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "active",
};

export default scheme;
