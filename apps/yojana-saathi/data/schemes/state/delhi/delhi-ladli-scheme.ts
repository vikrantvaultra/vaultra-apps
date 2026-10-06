import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-ladli-scheme",
  name: { en: "Delhi Lakhpati Bitiya Scheme (formerly Delhi Ladli Scheme)", hi: "दिल्ली लखपति बिटिया योजना (पहले दिल्ली लाडली योजना)" },
  aka: ["Lakhpati Bitiya", "DLBS", "Delhi Ladli Scheme", "Ladli Yojana Delhi"],
  shortDescription: {
    en: "Savings deposits for a Delhi-born girl at birth and at each school stage (₹11,000 at birth, ₹5,000 at Classes 1, 6, 9, 11 and 12, more for college), paid out with interest at 18 or 21.",
    hi: "दिल्ली में जन्मी बेटी के नाम जन्म और हर स्कूली पड़ाव पर बचत जमा (जन्म पर ₹11,000, कक्षा 1, 6, 9, 11 और 12 पर ₹5,000, कॉलेज के लिए और ज़्यादा), जो ब्याज समेत 18 या 21 साल पर मिलती है।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Women and Child Development, Govt. of NCT of Delhi", hi: "महिला एवं बाल विकास विभाग, दिल्ली सरकार" },
  categories: ["women-child", "education"],
  tags: ["girl child", "ladli", "lakhpati bitiya", "daughter", "savings", "delhi"],
  benefitType: "savings",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("delhi"),
    labelled(incomeUpTo(120_000), { en: "Family income up to ₹1.2 lakh a year", hi: "परिवार की सालाना आय ₹1.2 लाख तक" }),
  ),

  details: {
    en: [
      "From 1 April 2026 the Delhi Ladli Scheme (2008) was replaced by the Delhi Lakhpati Bitiya Scheme. The government deposits money in a girl's name at birth and at each stage of her schooling and higher studies.",
      "The money grows with interest and is paid into the girl's Aadhaar-linked bank account once she passes Class 12 and turns 18, or completes a degree or diploma and turns 21. The education-linked deposits apply from the 2026-27 academic year.",
      "Girls already registered under Ladli continue to get their benefits under the new scheme. Applications are online.",
    ],
    hi: [
      "1 अप्रैल 2026 से दिल्ली लाडली योजना (2008) की जगह दिल्ली लखपति बिटिया योजना शुरू हुई। सरकार बेटी के नाम जन्म पर और उसकी स्कूली व उच्च पढ़ाई के हर पड़ाव पर पैसा जमा करती है।",
      "यह पैसा ब्याज के साथ बढ़ता है और बेटी के 12वीं पास करके 18 साल की होने पर, या डिग्री या डिप्लोमा पूरा करके 21 साल की होने पर, उसके आधार से जुड़े बैंक खाते में दिया जाता है। पढ़ाई से जुड़ी जमा राशि 2026-27 सत्र से लागू है।",
      "लाडली में पहले से दर्ज बेटियों को नई योजना में भी लाभ मिलता रहेगा। आवेदन ऑनलाइन होता है।",
    ],
  },
  benefits: {
    en: [
      "₹11,000 deposited at birth.",
      "₹5,000 each on admission to Class 1, Class 6, Class 9, Class 11 (or ITI/polytechnic after Class 10) and Class 12.",
      "₹20,000 over a 3-year degree (₹25,000 for a 4-year degree), and ₹10,000 to ₹20,000 for a professional diploma.",
      "The full amount with interest is paid to the girl at maturity.",
    ],
    hi: [
      "जन्म पर ₹11,000 जमा।",
      "कक्षा 1, कक्षा 6, कक्षा 9, कक्षा 11 (या 10वीं के बाद ITI/पॉलिटेक्निक) और कक्षा 12 में दाख़िले पर ₹5,000-₹5,000।",
      "3 साल की डिग्री पर कुल ₹20,000 (4 साल की डिग्री पर ₹25,000), और प्रोफ़ेशनल डिप्लोमा पर ₹10,000 से ₹20,000।",
      "परिपक्वता पर पूरी रकम ब्याज समेत बेटी को मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "The girl was born in Delhi, as shown on a birth certificate from the Delhi Registrar of Births and Deaths.",
      "The family has lived in Delhi for at least 3 years before applying.",
      "Annual family income is not more than ₹1.2 lakh.",
      "At most two girls per family.",
      "The girl studies in a government or recognised school in Delhi (or a recognised college or institute anywhere in India for higher studies).",
      "Register within one year of birth, or within 90 days of admission at a later stage.",
    ],
    hi: [
      "बेटी का जन्म दिल्ली में हुआ हो, दिल्ली के जन्म-मृत्यु रजिस्ट्रार के जन्म प्रमाणपत्र के अनुसार।",
      "आवेदन से पहले परिवार कम से कम 3 साल से दिल्ली में रह रहा हो।",
      "परिवार की सालाना आय ₹1.2 लाख से ज़्यादा न हो।",
      "एक परिवार की ज़्यादा से ज़्यादा दो बेटियाँ।",
      "बेटी दिल्ली के सरकारी या मान्य स्कूल में पढ़ती हो (उच्च शिक्षा के लिए भारत में कहीं भी मान्य कॉलेज या संस्थान)।",
      "जन्म के एक साल के भीतर, या बाद के पड़ाव पर दाख़िले के 90 दिन के भीतर रजिस्टर करें।",
    ],
  },
  exclusions: {
    en: [
      "A girl married before 18 loses all benefits, and the deposits go back to the government.",
      "The amount cannot be withdrawn early or transferred.",
      "The girl must be vaccinated as per the government schedule; this is checked at each stage.",
    ],
    hi: [
      "18 साल से पहले शादी होने पर बेटी के सारे लाभ ख़त्म हो जाते हैं और जमा राशि सरकार को वापस चली जाती है।",
      "रकम समय से पहले नहीं निकाली जा सकती और न ही किसी और को दी जा सकती है।",
      "बेटी का सरकारी कार्यक्रम के अनुसार टीकाकरण होना ज़रूरी है; हर पड़ाव पर इसकी जाँच होती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the Delhi Lakhpati Bitiya Scheme page on wcd.delhi.gov.in and follow the link to the online application portal.",
        "Fill in the girl's and parents' details and upload the documents.",
        "At each new stage (Class 1, 6, 9, 11, 12 and college), submit the renewal with a bonafide certificate from the school or college.",
      ],
      hi: [
        "wcd.delhi.gov.in पर दिल्ली लखपति बिटिया योजना का पेज खोलें और ऑनलाइन आवेदन पोर्टल के लिंक पर जाएँ।",
        "बेटी और माता-पिता की जानकारी भरें और दस्तावेज़ अपलोड करें।",
        "हर नए पड़ाव (कक्षा 1, 6, 9, 11, 12 और कॉलेज) पर स्कूल या कॉलेज के बोनाफ़ाइड प्रमाणपत्र के साथ रिन्यूअल जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Girl's birth certificate issued in Delhi", "Proof of 3 years' residence in Delhi (ration card, voter ID etc.)", "Joint photo of parents and the girl", "Self-declaration of family income", "Aadhaar of the girl and parents", "Bonafide certificate from school or college (for school-stage deposits)"],
    hi: ["दिल्ली में जारी बेटी का जन्म प्रमाणपत्र", "दिल्ली में 3 साल रहने का प्रमाण (राशन कार्ड, मतदाता पहचान पत्र आदि)", "माता-पिता और बेटी की संयुक्त फ़ोटो", "परिवार की आय का स्व-घोषणा पत्र", "बेटी और माता-पिता का आधार", "स्कूल या कॉलेज का बोनाफ़ाइड प्रमाणपत्र (स्कूली पड़ाव की जमा राशि के लिए)"],
  },
  faqs: [
    {
      q: { en: "My daughter was registered under Ladli. What happens now?", hi: "मेरी बेटी लाडली योजना में दर्ज थी। अब क्या होगा?" },
      a: {
        en: "Her account continues under the Lakhpati Bitiya Scheme. Keep doing renewals at each stage, and claim the maturity amount through the department when she qualifies.",
        hi: "उसका खाता लखपति बिटिया योजना में जारी रहेगा। हर पड़ाव पर रिन्यूअल करते रहें, और पात्र होने पर विभाग के ज़रिए परिपक्वता राशि क्लेम करें।",
      },
    },
    {
      q: { en: "We missed registering at birth. Can we still join?", hi: "हम जन्म पर रजिस्टर नहीं कर पाए। क्या अब भी जुड़ सकते हैं?" },
      a: {
        en: "Yes. You can join at a later stage, such as admission to Class 1 or 6, but you only get the deposits from that stage onwards.",
        hi: "हाँ। आप बाद के पड़ाव पर, जैसे कक्षा 1 या 6 में दाख़िले पर, जुड़ सकते हैं, पर जमा राशि सिर्फ़ उसी पड़ाव से आगे की मिलेगी।",
      },
    },
  ],

  officialUrl: "https://wcd.delhi.gov.in/wcd/delhi-ladli-schemes-2008",
  sources: [
    "https://wcd.delhi.gov.in/sites/default/files/WCD/circulars-orders/271457.pdf",
    "https://wcd.delhi.gov.in/wcd/delhi-ladli-schemes-2008",
    "https://swarajyamag.com/states/delhi-government-to-launch-lakhpati-bitiya-yojana-from-1-april-replacing-ladli-scheme",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
