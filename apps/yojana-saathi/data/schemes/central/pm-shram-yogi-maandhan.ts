import { all, ageBetween, when } from "@/lib/engine/build";
import { UNORGANISED_OCCUPATIONS } from "@/data/taxonomy";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-shram-yogi-maandhan",
  name: { en: "Pradhan Mantri Shram Yogi Maan-dhan", hi: "प्रधानमंत्री श्रम योगी मान-धन" },
  aka: ["PM-SYM", "Shram Yogi Maandhan"],
  shortDescription: {
    en: "Unorganised workers aged 18 to 40 save ₹55 to ₹200 a month, the government adds the same amount, and you get a pension of ₹3,000 a month from age 60.",
    hi: "18 से 40 साल के असंगठित कामगार हर महीने ₹55 से ₹200 जमा करें, उतना ही सरकार जोड़ेगी, और 60 साल की उम्र से हर महीने ₹3,000 पेंशन पाएँ।",
  },
  level: "central",
  ministry: "labour-employment",
  categories: ["pension-insurance", "social-welfare"],
  tags: ["pension", "unorganised worker", "old age", "maandhan", "retirement", "labour"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 3000, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 40 },
  kundliHouse: "retirement",
  eligibility: all(...ageBetween(18, 40), when("occupation", "in", UNORGANISED_OCCUPATIONS)),

  details: {
    en: [
      "PM-SYM is a voluntary pension scheme for workers in the unorganised sector, such as rickshaw pullers, street vendors, domestic workers, construction and farm labourers, home-based workers and others who earn up to ₹15,000 a month.",
      "You pay a small monthly contribution from your bank account until age 60, and the central government puts in an equal amount. Your contribution depends on your age when you join: ₹55 a month at 18, rising to ₹200 a month at 40.",
      "From 60, you get an assured pension of ₹3,000 a month for life. The scheme is run by the Ministry of Labour and Employment, with LIC as the fund manager, and enrolment happens at Common Service Centres or on the Maandhan portal.",
    ],
    hi: [
      "पीएम-एसवाईएम असंगठित क्षेत्र के कामगारों के लिए अपनी मर्ज़ी से जुड़ने वाली पेंशन योजना है, जैसे रिक्शा चालक, रेहड़ी-पटरी वाले, घरेलू कामगार, निर्माण और खेतिहर मज़दूर, घर से काम करने वाले और ऐसे दूसरे लोग जिनकी कमाई ₹15,000 महीने तक है।",
      "60 साल की उम्र तक आप हर महीने बैंक खाते से थोड़ा अंशदान देते हैं, और केंद्र सरकार भी उतना ही जमा करती है। आपका अंशदान जुड़ने की उम्र पर निर्भर है: 18 साल पर ₹55 महीना, जो 40 साल पर ₹200 महीना तक जाता है।",
      "60 साल से आपको जीवन भर ₹3,000 महीने की पक्की पेंशन मिलती है। यह योजना श्रम एवं रोज़गार मंत्रालय चलाता है, LIC फ़ंड का प्रबंधन करती है, और नामांकन कॉमन सर्विस सेंटर या मान-धन पोर्टल पर होता है।",
    ],
  },
  benefits: {
    en: [
      "Assured pension of ₹3,000 a month from age 60, for life.",
      "The government matches your monthly contribution rupee for rupee.",
      "If you die after pension starts, your spouse gets 50% of the pension (₹1,500 a month) as family pension.",
      "If you die or become permanently disabled before 60, your spouse can continue the scheme or exit and take back the contributions with interest.",
    ],
    hi: [
      "60 साल की उम्र से जीवन भर ₹3,000 महीने की पक्की पेंशन।",
      "आपके हर महीने के अंशदान के बराबर पैसा सरकार भी जमा करती है।",
      "पेंशन शुरू होने के बाद मृत्यु होने पर जीवनसाथी को पेंशन का 50% (₹1,500 महीना) पारिवारिक पेंशन के रूप में मिलता है।",
      "60 साल से पहले मृत्यु या स्थायी विकलांगता होने पर जीवनसाथी योजना जारी रख सकता है या ब्याज के साथ जमा पैसा लेकर बाहर निकल सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Unorganised worker aged 18 to 40 years.",
      "Your own monthly income is ₹15,000 or less.",
      "You have a savings bank account (or Jan Dhan account) and Aadhaar.",
    ],
    hi: [
      "18 से 40 साल के असंगठित कामगार।",
      "आपकी अपनी मासिक कमाई ₹15,000 या उससे कम हो।",
      "आपके पास बचत बैंक खाता (या जन धन खाता) और आधार हो।",
    ],
  },
  exclusions: {
    en: [
      "Members of EPFO, ESIC or NPS (with government contribution) cannot join.",
      "Income-tax payers are not eligible.",
      "People who earn more than ₹15,000 a month, or are above 40, cannot join.",
    ],
    hi: [
      "EPFO, ESIC या NPS (सरकारी अंशदान वाले) के सदस्य नहीं जुड़ सकते।",
      "आयकर भरने वाले पात्र नहीं हैं।",
      "₹15,000 महीने से ज़्यादा कमाने वाले या 40 साल से ज़्यादा उम्र वाले नहीं जुड़ सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to maandhan.in and choose self-enrolment for PM-SYM.",
        "Register with your mobile number and Aadhaar, and fill in your bank account and nominee details.",
        "Pay the first contribution and set up auto-debit for the following months. Download your Shram Yogi Pension Account card.",
      ],
      hi: [
        "maandhan.in पर जाकर पीएम-एसवाईएम के लिए ख़ुद नामांकन चुनें।",
        "मोबाइल नंबर और आधार से पंजीकरण करें, और बैंक खाते व नामांकित व्यक्ति की जानकारी भरें।",
        "पहला अंशदान भरें और आगे के महीनों के लिए ऑटो-डेबिट चालू करें। अपना श्रम योगी पेंशन खाता कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest Common Service Centre (CSC) with your Aadhaar and bank passbook.",
        "The operator enrols you, fills in your bank and nominee details, and collects the first contribution in cash.",
        "Sign the auto-debit mandate and take your Shram Yogi card.",
      ],
      hi: [
        "आधार और बैंक पासबुक लेकर नज़दीकी कॉमन सर्विस सेंटर (CSC) जाएँ।",
        "संचालक आपका नामांकन करेगा, बैंक और नामांकित व्यक्ति की जानकारी भरेगा और पहला अंशदान नक़द लेगा।",
        "ऑटो-डेबिट फ़ॉर्म पर हस्ताक्षर करें और अपना श्रम योगी कार्ड ले लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Savings bank or Jan Dhan account details (with IFSC)", "Mobile number", "Nominee and spouse details"],
    hi: ["आधार कार्ड", "बचत बैंक या जन धन खाते का विवरण (IFSC के साथ)", "मोबाइल नंबर", "नामांकित व्यक्ति और जीवनसाथी का विवरण"],
  },
  faqs: [
    {
      q: { en: "Can I leave the scheme before 60?", hi: "क्या 60 साल से पहले योजना छोड़ सकते हैं?" },
      a: {
        en: "Yes. If you leave within 10 years, you get back only your own contributions with savings-bank interest. If you leave after 10 years but before 60, you get your share with the interest earned by the fund or savings-bank interest, whichever is higher.",
        hi: "हाँ। 10 साल के अंदर छोड़ने पर सिर्फ़ आपका अपना अंशदान बचत खाते के ब्याज के साथ लौटता है। 10 साल बाद पर 60 से पहले छोड़ने पर आपका हिस्सा फ़ंड की कमाई या बचत खाते के ब्याज में से जो ज़्यादा हो, उसके साथ मिलता है।",
      },
    },
    {
      q: { en: "Is this the same as Atal Pension Yojana?", hi: "क्या यह अटल पेंशन योजना जैसी ही है?" },
      a: {
        en: "No. In PM-SYM the government matches your contribution and the pension is fixed at ₹3,000. In APY you choose a pension of ₹1,000 to ₹5,000 and pay the full contribution yourself.",
        hi: "नहीं। पीएम-एसवाईएम में सरकार आपके बराबर अंशदान देती है और पेंशन ₹3,000 तय है। अटल पेंशन योजना में आप ₹1,000 से ₹5,000 की पेंशन चुनते हैं और पूरा अंशदान ख़ुद देते हैं।",
      },
    },
  ],

  officialUrl: "https://maandhan.in/",
  sources: [
    "https://maandhan.in/",
    "https://labour.gov.in/pm-sym",
    "https://eparlib.sansad.in/bitstream/123456789/2988383/1/AU1079_r8wBBa.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
