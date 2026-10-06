import { all, incomeUpTo, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-divyang-pension",
  tier: "full",
  overlapGroup: "disability-pension",
  name: { en: "Divyang Pension Yojana (Uttar Pradesh)", hi: "दिव्यांग पेंशन योजना (उत्तर प्रदेश)" },
  aka: ["Divyangjan Bharan Poshan Anudan", "UP viklang pension", "UP disability pension"],
  shortDescription: {
    en: "Adults in Uttar Pradesh with 40% or more disability, from poor families, get ₹1,000 a month as pension, paid into their Aadhaar-linked bank account.",
    hi: "उत्तर प्रदेश में 40% या उससे ज़्यादा दिव्यांगता वाले गरीब परिवारों के वयस्कों को हर महीने ₹1,000 पेंशन, सीधे आधार से जुड़े बैंक खाते में।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Department for Empowerment of Persons with Disabilities, Government of Uttar Pradesh",
    hi: "दिव्यांगजन सशक्तीकरण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "divyang", "viklang", "pension", "handicapped", "uttar pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "health",
  eligibility: all(
    residentOf("uttar-pradesh"),
    minAge(18),
    labelled(isTrue("disabled"), { en: "Has a disability", hi: "दिव्यांग हों" }),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "दिव्यांगता 40% या उससे ज़्यादा हो" }),
    labelled(incomeUpTo(56_460), {
      en: "Family income up to ₹46,080 a year in villages or ₹56,460 in towns",
      hi: "परिवार की सालाना आय गाँव में ₹46,080 या शहर में ₹56,460 तक हो",
    }),
  ),

  details: {
    en: [
      "The Divyang Pension (officially the Divyangjan Bharan Poshan Anudan) is Uttar Pradesh's monthly support for adults with disabilities from poor families.",
      "Each eligible person gets ₹1,000 a month. The money is sent by DBT to the Aadhaar-linked bank account, usually as ₹3,000 every three months.",
      "The Department for Empowerment of Persons with Disabilities runs it through the state's integrated pension portal (sspy-up.gov.in). The District Divyangjan Empowerment Officer checks and approves applications.",
    ],
    hi: [
      "दिव्यांग पेंशन (सरकारी नाम दिव्यांगजन भरण-पोषण अनुदान) उत्तर प्रदेश में गरीब परिवारों के दिव्यांग वयस्कों के लिए मासिक मदद है।",
      "हर पात्र व्यक्ति को हर महीने ₹1,000 मिलते हैं। पैसा DBT से आधार से जुड़े बैंक खाते में आता है, आमतौर पर हर तीन महीने में ₹3,000 एक साथ।",
      "यह योजना दिव्यांगजन सशक्तीकरण विभाग राज्य के पेंशन पोर्टल (sspy-up.gov.in) से चलाता है। ज़िला दिव्यांगजन सशक्तीकरण अधिकारी आवेदन की जाँच करके मंज़ूरी देते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month as pension.",
      "Paid directly into your Aadhaar-linked bank account, usually every quarter.",
    ],
    hi: [
      "हर महीने ₹1,000 पेंशन।",
      "सीधे आपके आधार से जुड़े बैंक खाते में, आमतौर पर हर तिमाही।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Uttar Pradesh.",
      "Aged 18 years or more.",
      "Has a disability of at least 40%, shown in a medical certificate from a government medical board.",
      "Family income is up to ₹46,080 a year in villages or ₹56,460 a year in towns.",
      "Has a bank account linked to Aadhaar.",
    ],
    hi: [
      "उत्तर प्रदेश के स्थायी निवासी।",
      "उम्र 18 साल या उससे ज़्यादा।",
      "कम से कम 40% दिव्यांगता हो, जिसका सरकारी मेडिकल बोर्ड का प्रमाण पत्र हो।",
      "परिवार की सालाना आय गाँव में ₹46,080 और शहर में ₹56,460 तक हो।",
      "आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "People who already get any other government pension.",
      "Families whose income is above the village or town limit.",
      "Disability below 40%.",
    ],
    hi: [
      "जिन्हें पहले से कोई दूसरी सरकारी पेंशन मिलती है।",
      "जिन परिवारों की आय गाँव या शहर की सीमा से ज़्यादा है।",
      "40% से कम दिव्यांगता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to sspy-up.gov.in and open the Divyang and Kushthavastha Pension section.",
        "Register, fill in the form and upload your photo, disability certificate, income certificate and bank passbook.",
        "Submit and note your registration number. The district office will verify your details before the pension starts.",
      ],
      hi: [
        "sspy-up.gov.in पर जाएँ और दिव्यांग एवं कुष्ठावस्था पेंशन वाला हिस्सा खोलें।",
        "रजिस्टर करें, फ़ॉर्म भरें और फ़ोटो, दिव्यांगता प्रमाण पत्र, आय प्रमाण पत्र और बैंक पासबुक अपलोड करें।",
        "फ़ॉर्म जमा करें और रजिस्ट्रेशन नंबर नोट करें। पेंशन शुरू होने से पहले ज़िला कार्यालय जाँच करेगा।",
      ],
    },
    offline: {
      en: [
        "Visit a Jan Seva Kendra (CSC) or the District Divyangjan Empowerment Officer's office.",
        "Carry your Aadhaar, disability certificate, income certificate, photo and bank passbook.",
        "In villages, a Gram Sabha resolution may also be asked for.",
      ],
      hi: [
        "जन सेवा केंद्र (CSC) या ज़िला दिव्यांगजन सशक्तीकरण अधिकारी के कार्यालय जाएँ।",
        "आधार, दिव्यांगता प्रमाण पत्र, आय प्रमाण पत्र, फ़ोटो और बैंक पासबुक साथ ले जाएँ।",
        "गाँव में रहने वालों से ग्राम सभा का प्रस्ताव भी माँगा जा सकता है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Disability certificate (40% or more)", "Income certificate", "Passport-size photo", "Aadhaar-linked bank passbook", "Gram Sabha resolution (in villages)"],
    hi: ["आधार कार्ड", "दिव्यांगता प्रमाण पत्र (40% या ज़्यादा)", "आय प्रमाण पत्र", "पासपोर्ट साइज़ फ़ोटो", "आधार से जुड़ी बैंक पासबुक", "ग्राम सभा का प्रस्ताव (गाँव में)"],
  },
  faqs: [
    {
      q: { en: "Can I get this along with the old age pension?", hi: "क्या यह वृद्धावस्था पेंशन के साथ मिल सकती है?" },
      a: {
        en: "No. You can get only one government pension. If you qualify for more than one, choose the one that suits you.",
        hi: "नहीं। एक ही सरकारी पेंशन मिल सकती है। अगर आप एक से ज़्यादा के पात्र हैं, तो जो आपके लिए बेहतर हो वह चुनें।",
      },
    },
    {
      q: { en: "Where do I get a disability certificate?", hi: "दिव्यांगता प्रमाण पत्र कहाँ से बनेगा?" },
      a: {
        en: "From the Chief Medical Officer's medical board in your district. You can also apply for a UDID card on the central Swavlamban portal.",
        hi: "अपने ज़िले के मुख्य चिकित्सा अधिकारी (CMO) के मेडिकल बोर्ड से। आप केंद्र के स्वावलंबन पोर्टल पर UDID कार्ड के लिए भी आवेदन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://sspy-up.gov.in/HindiPages/handicap_h.aspx",
  sources: [
    "https://sspy-up.gov.in/HindiPages/handicap_h.aspx",
    "https://thecsrjournal.in/uttar-pradesh-divyangjans-leprosy-patients-get-monthly-pension-under-yogi-govt/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1995,
  status: "active",
};

export default scheme;
