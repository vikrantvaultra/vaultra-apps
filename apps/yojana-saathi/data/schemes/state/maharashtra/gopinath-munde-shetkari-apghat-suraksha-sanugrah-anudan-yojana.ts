import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gopinath-munde-shetkari-apghat-suraksha-sanugrah-anudan-yojana",
  tier: "full",
  name: {
    en: "Gopinath Munde Shetkari Apghat Suraksha Sanugrah Anudan Yojana",
    hi: "गोपीनाथ मुंडे शेतकरी अपघात सुरक्षा सानुग्रह अनुदान योजना",
  },
  aka: ["Gopinath Munde farmer accident scheme", "Gopinath Munde Vima", "Shetkari Apghat Vima"],
  shortDescription: {
    en: "If a farmer, farm labourer or their family member in Maharashtra dies or is disabled in an accident, the family gets ₹2 lakh (₹1 lakh for losing one eye or limb).",
    hi: "महाराष्ट्र में किसान, खेतिहर मज़दूर या उनके परिवार के सदस्य की दुर्घटना में मृत्यु या दिव्यांगता होने पर परिवार को ₹2 लाख मिलते हैं (एक आँख या एक हाथ/पैर गँवाने पर ₹1 लाख)।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Agriculture Department, Government of Maharashtra",
    hi: "कृषि विभाग, महाराष्ट्र सरकार",
  },
  categories: ["agriculture", "pension-insurance"],
  tags: ["farmer", "accident", "death", "insurance", "snake bite", "mahadbt", "maharashtra"],
  benefitType: "insurance",
  isDBT: true,
  value: { amount: 200_000, period: "one-time", kind: "cover" },
  ageRange: { min: 10, max: 75 },
  kundliHouse: "insurance",
  eligibility: all(residentOf("maharashtra"), ...ageBetween(10, 75)),

  details: {
    en: [
      "This scheme protects farming families in Maharashtra against accidents. It began in 2015 as an insurance scheme and was changed in 2023 into a direct grant paid by the state, so there is no insurance company in between and no premium to pay.",
      "It covers the farmer and family members, and the cover has been widened to include landless farm labourers and women farmers. Accidents such as road or rail accidents, drowning, snake bite, lightning, electric shock, pesticide poisoning and attacks by wild animals are covered.",
      "Claims are now filed online on the MahaDBT portal. The taluka agriculture officer checks the claim, a committee led by the Tehsildar approves it, and the money is paid by DBT. The state has extended the scheme up to March 2031.",
    ],
    hi: [
      "यह योजना महाराष्ट्र के खेती करने वाले परिवारों को दुर्घटना से सुरक्षा देती है। यह 2015 में बीमा योजना के रूप में शुरू हुई थी और 2023 में इसे राज्य द्वारा सीधे दी जाने वाली अनुदान योजना बना दिया गया, यानी बीच में कोई बीमा कंपनी नहीं और कोई प्रीमियम नहीं।",
      "इसमें किसान और उसके परिवार के सदस्य शामिल हैं, और अब भूमिहीन खेतिहर मज़दूर और महिला किसान भी जोड़े गए हैं। सड़क या रेल दुर्घटना, डूबना, साँप का काटना, बिजली गिरना, करंट लगना, कीटनाशक से ज़हर और जंगली जानवर का हमला जैसी दुर्घटनाएँ शामिल हैं।",
      "दावा अब MahaDBT पोर्टल पर ऑनलाइन किया जाता है। तालुका कृषि अधिकारी दावे की जाँच करते हैं, तहसीलदार की अध्यक्षता वाली समिति मंज़ूरी देती है, और पैसा DBT से मिलता है। राज्य ने योजना मार्च 2031 तक बढ़ा दी है।",
    ],
  },
  benefits: {
    en: [
      "₹2 lakh if the person dies in an accident.",
      "₹2 lakh for losing both eyes, both hands or legs, or one eye and one hand or leg.",
      "₹1 lakh for permanently losing one eye, one hand or one leg.",
      "No premium: the state pays the full amount.",
    ],
    hi: [
      "दुर्घटना में मृत्यु होने पर ₹2 लाख।",
      "दोनों आँखें, दोनों हाथ या पैर, या एक आँख और एक हाथ/पैर गँवाने पर ₹2 लाख।",
      "एक आँख, एक हाथ या एक पैर हमेशा के लिए गँवाने पर ₹1 लाख।",
      "कोई प्रीमियम नहीं: पूरी राशि राज्य देता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in Maharashtra with land in their name (7/12 extract), a member of a farmer's family, a woman farmer or a landless farm labourer.",
      "Aged 10 to 75 years at the time of the accident.",
      "The death or disability was caused by an accident covered by the scheme.",
    ],
    hi: [
      "महाराष्ट्र का किसान जिसके नाम ज़मीन हो (7/12 उतारा), किसान के परिवार का सदस्य, महिला किसान या भूमिहीन खेतिहर मज़दूर।",
      "दुर्घटना के समय उम्र 10 से 75 साल हो।",
      "मृत्यु या दिव्यांगता योजना में शामिल किसी दुर्घटना से हुई हो।",
    ],
  },
  exclusions: {
    en: [
      "Natural death or disability that existed before.",
      "Suicide, attempted suicide or self-inflicted injury.",
      "Accidents while drunk or on drugs, or while committing a crime.",
      "Murder by a legal heir, and deaths due to war or military service.",
    ],
    hi: [
      "प्राकृतिक मृत्यु या पहले से मौजूद दिव्यांगता।",
      "आत्महत्या, आत्महत्या की कोशिश या ख़ुद को पहुँचाई गई चोट।",
      "नशे की हालत में या अपराध करते समय हुई दुर्घटना।",
      "किसी कानूनी वारिस द्वारा हत्या, और युद्ध या सैन्य सेवा में हुई मृत्यु।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the MahaDBT farmer portal (mahadbt.maharashtra.gov.in) and log in with the Aadhaar of the claimant (the injured person or the legal heir).",
        "Choose the Gopinath Munde accident grant scheme, fill in the claim and upload the documents.",
        "Fix any errors you are told about by SMS. Track the claim on the portal; the money is paid by DBT after approval.",
      ],
      hi: [
        "MahaDBT किसान पोर्टल (mahadbt.maharashtra.gov.in) पर दावेदार (घायल व्यक्ति या कानूनी वारिस) के आधार से लॉग इन करें।",
        "गोपीनाथ मुंडे दुर्घटना अनुदान योजना चुनें, दावा भरें और दस्तावेज़ अपलोड करें।",
        "SMS से बताई गई गलतियाँ ठीक करें। पोर्टल पर दावे की स्थिति देखें; मंज़ूरी के बाद पैसा DBT से मिलता है।",
      ],
    },
    offline: {
      en: [
        "Visit the Taluka Agriculture Officer's office, or the village-level helpdesk if one is running.",
        "Submit the claim form with the documents. Staff can help you upload it for free.",
      ],
      hi: [
        "तालुका कृषि अधिकारी के कार्यालय, या गाँव में हेल्पडेस्क हो तो वहाँ जाएँ।",
        "दस्तावेज़ों के साथ दावा फ़ॉर्म जमा करें। कर्मचारी मुफ़्त में अपलोड करने में मदद कर सकते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "7/12 extract (or a certificate of being a farm labourer from the Gram Panchayat or revenue officer)",
      "Death certificate, or a permanent disability certificate",
      "FIR, spot panchnama or police report of the accident",
      "Post-mortem report (for death)",
      "Age proof and Aadhaar of the deceased or injured person",
      "Legal heir proof and the bank details of the claimant",
    ],
    hi: [
      "7/12 उतारा (या ग्राम पंचायत/राजस्व अधिकारी से खेतिहर मज़दूर होने का प्रमाण पत्र)",
      "मृत्यु प्रमाण पत्र, या स्थायी दिव्यांगता प्रमाण पत्र",
      "दुर्घटना की FIR, घटनास्थल पंचनामा या पुलिस रिपोर्ट",
      "पोस्टमार्टम रिपोर्ट (मृत्यु के मामले में)",
      "मृतक या घायल व्यक्ति का उम्र का प्रमाण और आधार",
      "कानूनी वारिस का प्रमाण और दावेदार का बैंक विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "Do I need to pay a premium or enrol beforehand?", hi: "क्या पहले से प्रीमियम देना या नाम लिखवाना ज़रूरी है?" },
      a: {
        en: "No. There is no premium and no enrolment. If an accident happens, the family simply files a claim with the documents.",
        hi: "नहीं। कोई प्रीमियम या पंजीकरण नहीं है। दुर्घटना होने पर परिवार सीधे दस्तावेज़ों के साथ दावा करता है।",
      },
    },
    {
      q: { en: "Is a death by snake bite covered?", hi: "क्या साँप के काटने से मृत्यु शामिल है?" },
      a: {
        en: "Yes. Snake and scorpion bites, lightning, drowning and wild animal attacks are all covered accidents.",
        hi: "हाँ। साँप और बिच्छू का काटना, बिजली गिरना, डूबना और जंगली जानवर का हमला, ये सब शामिल दुर्घटनाएँ हैं।",
      },
    },
  ],

  officialUrl: "https://mahadbt.maharashtra.gov.in/Farmer/Login/Login",
  sources: [
    "https://newsonair.gov.in/mr/gopinath-munde-farmers-accident-safety-sanugraha-yojana/",
    "https://mahadbt.maharashtra.gov.in/Farmer/SchemeData/SchemeData",
    "https://www.freepressjournal.in/mumbai/expanded-gopinath-munde-scheme-to-cover-nearly-6-crore-citizens-mos-for-agriculture-ashish-jaiswal",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
