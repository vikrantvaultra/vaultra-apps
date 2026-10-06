import { everyone } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nps-vatsalya",
  name: { en: "NPS Vatsalya", hi: "एनपीएस वात्सल्य" },
  aka: ["NPS Vatsalya", "NPS for children", "National Pension System Vatsalya"],
  shortDescription: {
    en: "Start a pension savings account for your child (under 18) with as little as ₹250 a year, invested in market-linked NPS funds, so they get a head start on retirement savings.",
    hi: "अपने बच्चे (18 साल से कम) के लिए सिर्फ़ ₹250 सालाना से पेंशन बचत खाता शुरू करें, जिसका पैसा बाज़ार से जुड़े NPS फ़ंड में लगता है, ताकि उसकी रिटायरमेंट बचत जल्दी शुरू हो।",
  },
  level: "central",
  ministry: "finance",
  categories: ["pension-insurance", "energy-savings"],
  tags: ["nps", "pension", "child", "savings", "retirement", "minor", "investment"],
  benefitType: "savings",
  isDBT: false,
  kundliHouse: "retirement",
  eligibility: everyone(),

  details: {
    en: [
      "NPS Vatsalya is a version of the National Pension System for children, regulated by the Pension Fund Regulatory and Development Authority (PFRDA) under the Ministry of Finance. It was launched in September 2024, and PFRDA issued updated NPS Vatsalya Scheme Guidelines in 2025.",
      "A parent or legal guardian opens the account in the child's name and pays into it. The child is the only beneficiary. The money is invested by PFRDA-registered pension funds, and you can choose how much goes into equity.",
      "When the child turns 18, they can continue in NPS Vatsalya up to age 21, move the money into a regular NPS account, or exit, subject to the rules on lump sum and annuity.",
    ],
    hi: [
      "NPS वात्सल्य बच्चों के लिए राष्ट्रीय पेंशन प्रणाली का एक रूप है, जिसे वित्त मंत्रालय के तहत पेंशन फ़ंड नियामक और विकास प्राधिकरण (PFRDA) नियंत्रित करता है। यह सितंबर 2024 में शुरू हुई, और PFRDA ने 2025 में NPS वात्सल्य योजना के नए दिशा-निर्देश जारी किए।",
      "माता-पिता या कानूनी अभिभावक बच्चे के नाम पर खाता खोलते हैं और उसमें पैसा जमा करते हैं। सिर्फ़ बच्चा ही लाभार्थी होता है। पैसा PFRDA में पंजीकृत पेंशन फ़ंड लगाते हैं, और आप चुन सकते हैं कि कितना हिस्सा इक्विटी (शेयर) में जाए।",
      "बच्चे के 18 साल का होने पर वह 21 साल तक NPS वात्सल्य में रह सकता है, पैसा सामान्य NPS खाते में ले जा सकता है, या लंपसम और एन्युटी के नियमों के अनुसार बाहर निकल सकता है।",
    ],
  },
  benefits: {
    en: [
      "Start with just ₹250, and pay at least ₹250 each year; there is no upper limit.",
      "Long-term, market-linked growth through PFRDA-regulated pension funds.",
      "Partial withdrawal of up to 25% of your own contributions after 3 years, for education, treatment of specified illnesses or disability.",
      "At 18: continue till 21, shift to regular NPS, or exit. If the corpus is below ₹8 lakh, it can all be taken as a lump sum; otherwise up to 80% as lump sum and at least 20% must buy an annuity.",
      "Relatives and friends can also add money to the child's account as a gift.",
    ],
    hi: [
      "सिर्फ़ ₹250 से शुरू करें, और हर साल कम से कम ₹250 जमा करें; ज़्यादा की कोई सीमा नहीं।",
      "PFRDA के नियंत्रण वाले पेंशन फ़ंड से लंबे समय में बाज़ार से जुड़ी बढ़त।",
      "3 साल बाद पढ़ाई, तय बीमारियों के इलाज या दिव्यांगता के लिए अपने जमा पैसे का 25% तक आंशिक निकासी।",
      "18 साल पर: 21 तक जारी रखें, सामान्य NPS में ले जाएँ, या बाहर निकलें। जमा राशि ₹8 लाख से कम हो तो पूरी लंपसम ले सकते हैं; वरना 80% तक लंपसम और कम से कम 20% से एन्युटी लेनी होगी।",
      "रिश्तेदार और दोस्त भी बच्चे के खाते में तोहफ़े के रूप में पैसा डाल सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "The child must be below 18 years of age.",
      "Open to Indian citizens, including NRI and OCI children.",
      "The account is opened and run by a parent or legal guardian, whose KYC is required.",
    ],
    hi: [
      "बच्चे की उम्र 18 साल से कम होनी चाहिए।",
      "भारतीय नागरिकों के लिए, जिसमें NRI और OCI बच्चे भी शामिल हैं।",
      "खाता माता-पिता या कानूनी अभिभावक खोलते और चलाते हैं, जिनका KYC ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "Children aged 18 or above cannot open a new NPS Vatsalya account (they can open a regular NPS account).",
      "Returns are market-linked and not guaranteed.",
      "Money is locked in for the long term; withdrawals are allowed only in the cases set by PFRDA.",
    ],
    hi: [
      "18 साल या उससे बड़े बच्चे नया NPS वात्सल्य खाता नहीं खोल सकते (वे सामान्य NPS खाता खोल सकते हैं)।",
      "रिटर्न बाज़ार से जुड़े हैं और पक्के नहीं हैं।",
      "पैसा लंबे समय के लिए जमा रहता है; निकासी सिर्फ़ PFRDA के तय मामलों में होती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the eNPS website of a central recordkeeping agency (for example Protean or KFintech) or your bank's NPS page, and choose NPS Vatsalya.",
        "Enter the guardian's details and verify with Aadhaar/PAN OTP, then add the child's details and date of birth.",
        "Choose the pension fund and investment option, pay at least ₹250, and download the child's PRAN (account number).",
      ],
      hi: [
        "किसी सेंट्रल रिकॉर्डकीपिंग एजेंसी (जैसे Protean या KFintech) की eNPS वेबसाइट या अपने बैंक के NPS पेज पर जाएँ और NPS वात्सल्य चुनें।",
        "अभिभावक की जानकारी भरें और आधार/PAN OTP से पुष्टि करें, फिर बच्चे की जानकारी और जन्म तिथि डालें।",
        "पेंशन फ़ंड और निवेश विकल्प चुनें, कम से कम ₹250 जमा करें और बच्चे का PRAN (खाता नंबर) डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit a bank branch or post office that works as an NPS Point of Presence (POP).",
        "Fill in the NPS Vatsalya form for the child and the guardian.",
        "Submit it with the documents and the first contribution of at least ₹250.",
      ],
      hi: [
        "NPS पॉइंट ऑफ़ प्रेज़ेंस (POP) के रूप में काम करने वाली बैंक शाखा या डाकघर जाएँ।",
        "बच्चे और अभिभावक के लिए NPS वात्सल्य फ़ॉर्म भरें।",
        "दस्तावेज़ों और कम से कम ₹250 की पहली जमा के साथ फ़ॉर्म दें।",
      ],
    },
  },
  documents: {
    en: ["Child's date of birth proof (birth certificate, school certificate, passport or similar)", "Guardian's Aadhaar and PAN (or Form 60)", "Guardian's address proof and bank details", "Child's photo"],
    hi: ["बच्चे की जन्म तिथि का सबूत (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र, पासपोर्ट या ऐसा कोई दस्तावेज़)", "अभिभावक का आधार और PAN (या फ़ॉर्म 60)", "अभिभावक के पते का सबूत और बैंक जानकारी", "बच्चे की फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "How is this different from Sukanya Samriddhi Yojana?", hi: "यह सुकन्या समृद्धि योजना से कैसे अलग है?" },
      a: {
        en: "SSY is only for girls under 10 and pays a fixed, government-set interest rate. NPS Vatsalya is for any child under 18, is invested in market-linked pension funds, and is meant for very long-term retirement savings.",
        hi: "SSY सिर्फ़ 10 साल से छोटी बेटियों के लिए है और इसमें सरकार की तय ब्याज दर मिलती है। NPS वात्सल्य 18 साल से कम किसी भी बच्चे के लिए है, इसका पैसा बाज़ार से जुड़े पेंशन फ़ंड में लगता है, और यह बहुत लंबी रिटायरमेंट बचत के लिए है।",
      },
    },
    {
      q: { en: "What happens if I can't pay the minimum ₹250 in a year?", hi: "अगर किसी साल न्यूनतम ₹250 न दे पाएँ तो?" },
      a: {
        en: "The account can become inactive. You can make it active again by paying the missed minimum contribution along with any small penalty set by PFRDA.",
        hi: "खाता निष्क्रिय हो सकता है। छूटी हुई न्यूनतम राशि और PFRDA का तय छोटा जुर्माना देकर इसे फिर चालू कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://pfrda.org.in/schemes/national-pension-system/nps-vatsalya",
  sources: [
    "https://pfrda.org.in/schemes/national-pension-system/nps-vatsalya",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2214246",
    "https://npstrust.org.in/sites/default/files/inline-files/FAQs_NPS_Vatsalya_updated_16_06_2026.pdf",
    "https://npstrust.org.in/charges-under-nps-vatsalya",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
