import { all, female, incomeUpTo, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "annan-seer-thittam",
  overlapGroup: "marriage-assistance",
  name: { en: "Annan Seer Thittam", hi: "अण्णन सीर तिट्टम (भाई का शगुन योजना)" },
  aka: ["Annan Seer", "Annanin Seer", "Annan's Seer", "gold coin marriage scheme Tamil Nadu", "TVK marriage scheme"],
  shortDescription: {
    en: "Brides in Tamil Nadu from families earning up to ₹2.5 lakh a year get an 8-gram 22-carat gold coin and a silk saree from the state at their wedding.",
    hi: "तमिलनाडु में जिन परिवारों की सालाना आय ₹2.5 लाख तक है, उनकी बेटी की शादी पर राज्य सरकार 8 ग्राम का 22 कैरेट सोने का सिक्का और एक रेशमी साड़ी देती है।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu",
    hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "gold coin", "bride", "silk saree", "wedding", "annan seer"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("tamil-nadu"), female(), minAge(18), incomeUpTo(250_000)),

  details: {
    en: [
      "Annan Seer ('the elder brother's gift') is the marriage support scheme of the Tamil Nadu government elected in 2026. In Tamil custom, the brother's seer at a wedding stands for love and protection; under this scheme the state gives every eligible bride an 8-gram, 22-carat gold coin and a silk saree.",
      "It was announced in the revised 2026-27 budget with ₹812 crore for the first year. The government order was issued on 5 October 2026 and covers weddings held from that date. The scheme is run by the Social Welfare and Women Empowerment Department and is meant to continue every year.",
      "Applications will be taken online through a dedicated website that the government says will open soon. Detailed rules on who qualifies, the documents needed and the time limit to apply are to be issued separately.",
    ],
    hi: [
      "अण्णन सीर ('बड़े भाई का शगुन') 2026 में चुनी गई तमिलनाडु सरकार की शादी सहायता योजना है। तमिल रीति में शादी पर भाई का सीर प्यार और सुरक्षा का प्रतीक है; इस योजना में राज्य हर पात्र दुल्हन को 8 ग्राम का 22 कैरेट सोने का सिक्का और एक रेशमी साड़ी देता है।",
      "इसकी घोषणा 2026-27 के संशोधित बजट में हुई और पहले साल के लिए ₹812 करोड़ रखे गए। सरकारी आदेश 5 अक्टूबर 2026 को जारी हुआ और उस तारीख से होने वाली शादियों पर लागू है। यह योजना समाज कल्याण एवं महिला सशक्तिकरण विभाग चलाता है और हर साल चलनी है।",
      "आवेदन एक अलग वेबसाइट से ऑनलाइन लिए जाएँगे, जो सरकार के अनुसार जल्द शुरू होगी। कौन पात्र है, कौन से दस्तावेज़ चाहिए और आवेदन की समय सीमा क्या है, इसके विस्तृत नियम अलग से जारी होंगे।",
    ],
  },
  benefits: {
    en: [
      "An 8-gram gold coin of 22-carat purity for the bride.",
      "A silk saree for the bride.",
      "No cash amount is paid; the gold coin and saree are given directly.",
    ],
    hi: [
      "दुल्हन को 8 ग्राम का 22 कैरेट सोने का सिक्का।",
      "दुल्हन को एक रेशमी साड़ी।",
      "नकद पैसा नहीं मिलता; सोने का सिक्का और साड़ी सीधे दिए जाते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "The bride's family lives in Tamil Nadu.",
      "The family's annual income is ₹2.5 lakh or less.",
      "The wedding takes place on or after 5 October 2026.",
      "The bride must be at least 18 at marriage (the legal age); further conditions will be in the detailed guidelines.",
    ],
    hi: [
      "दुल्हन का परिवार तमिलनाडु में रहता है।",
      "परिवार की सालाना आय ₹2.5 लाख या उससे कम है।",
      "शादी 5 अक्टूबर 2026 या उसके बाद हो।",
      "शादी के समय दुल्हन की उम्र कम से कम 18 साल हो (क़ानूनी उम्र); बाक़ी शर्तें विस्तृत दिशानिर्देशों में आएँगी।",
    ],
  },
  exclusions: {
    en: [
      "Families with annual income above ₹2.5 lakh. (The election manifesto had mentioned ₹5 lakh, but the government order set the limit at ₹2.5 lakh.)",
      "Weddings held before 5 October 2026.",
      "Child marriages are illegal and are never covered.",
    ],
    hi: [
      "जिन परिवारों की सालाना आय ₹2.5 लाख से ज़्यादा है। (चुनावी घोषणापत्र में ₹5 लाख कहा गया था, पर सरकारी आदेश में सीमा ₹2.5 लाख रखी गई है।)",
      "5 अक्टूबर 2026 से पहले हुई शादियाँ।",
      "बाल विवाह ग़ैरक़ानूनी है और कभी शामिल नहीं होता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Wait for the government to open the Annan Seer website; it has not been launched yet.",
        "When it opens, register and fill in the bride's and family's details, then upload the documents asked for.",
        "Keep the application number to track your status.",
      ],
      hi: [
        "सरकार की अण्णन सीर वेबसाइट शुरू होने का इंतज़ार करें; यह अभी शुरू नहीं हुई है।",
        "शुरू होने पर रजिस्टर करें, दुल्हन और परिवार की जानकारी भरें और माँगे गए दस्तावेज़ अपलोड करें।",
        "स्थिति देखने के लिए आवेदन नंबर संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "Until the website opens, ask at the District Social Welfare Office or your Block Development Office for updates.",
      ],
      hi: [
        "वेबसाइट शुरू होने तक जानकारी के लिए ज़िला समाज कल्याण कार्यालय या अपने ब्लॉक विकास कार्यालय में पूछें।",
      ],
    },
  },
  documents: {
    en: [
      "Likely to be needed (final list awaited): Aadhaar of the bride",
      "Proof of residence in Tamil Nadu (ration card / smart card)",
      "Family income certificate",
      "Proof of marriage (wedding invitation or marriage registration certificate)",
      "Proof of the bride's age",
    ],
    hi: [
      "संभावित दस्तावेज़ (अंतिम सूची आनी बाक़ी): दुल्हन का आधार",
      "तमिलनाडु में रहने का सबूत (राशन कार्ड / स्मार्ट कार्ड)",
      "परिवार का आय प्रमाण पत्र",
      "शादी का सबूत (शादी का निमंत्रण पत्र या विवाह पंजीकरण प्रमाण पत्र)",
      "दुल्हन की उम्र का सबूत",
    ],
  },
  faqs: [
    {
      q: { en: "Can I apply now?", hi: "क्या मैं अभी आवेदन कर सकती हूँ?" },
      a: {
        en: "Not yet. The government order was issued on 5 October 2026, but the online application website has not opened. If your wedding is on or after 5 October 2026, keep your documents ready and apply when the website opens.",
        hi: "अभी नहीं। सरकारी आदेश 5 अक्टूबर 2026 को जारी हुआ, पर ऑनलाइन आवेदन की वेबसाइट अभी शुरू नहीं हुई है। अगर आपकी शादी 5 अक्टूबर 2026 या उसके बाद है, तो दस्तावेज़ तैयार रखें और वेबसाइट खुलने पर आवेदन करें।",
      },
    },
    {
      q: { en: "What happens to the older marriage assistance schemes?", hi: "पुरानी विवाह सहायता योजनाओं का क्या होगा?" },
      a: {
        en: "The government has not yet said whether the older schemes (for daughters of poor widows, orphan girls, widow remarriage and inter-caste marriage) will continue alongside Annan Seer or be merged into it. Check with the District Social Welfare Office.",
        hi: "सरकार ने अभी नहीं बताया है कि पुरानी योजनाएँ (गरीब विधवाओं की बेटियों, अनाथ लड़कियों, विधवा पुनर्विवाह और अंतरजातीय विवाह के लिए) अण्णन सीर के साथ चलेंगी या उसमें मिला दी जाएँगी। ज़िला समाज कल्याण कार्यालय से पता करें।",
      },
    },
  ],

  officialUrl: "https://www.tnsocialwelfare.tn.gov.in/en",
  sources: [
    "https://tamildigitallibrary.in/Marc-Articles/004866_Tamil_Nadu_Budget_2026_2027",
    "https://www.tnsocialwelfare.tn.gov.in/en",
    "https://www.etvbharat.com/ta/state/govt-order-issued-for-annan-seer-scheme-to-provide-8-gram-gold-coin-and-silk-saree-to-brides-tns26100507568",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
