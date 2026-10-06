import { all, female, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-ujjwala-yojana",
  name: { en: "Pradhan Mantri Ujjwala Yojana", hi: "प्रधानमंत्री उज्ज्वला योजना" },
  aka: ["PMUY", "Ujjwala 2.0", "free gas connection"],
  shortDescription: {
    en: "Women from poor households get a free LPG connection with a free first refill and stove, plus a ₹300 subsidy on refills of the 14.2 kg cylinder.",
    hi: "ग़रीब परिवारों की महिलाओं को मुफ़्त LPG कनेक्शन, पहली रिफ़िल और चूल्हा मुफ़्त, और 14.2 किलो सिलेंडर की रिफ़िल पर ₹300 सब्सिडी।",
  },
  level: "central",
  ministry: "petroleum-natural-gas",
  categories: ["energy-savings", "women-child"],
  tags: ["lpg", "gas connection", "ujjwala", "cylinder subsidy", "women", "cooking gas"],
  benefitType: "composite",
  isDBT: true,
  ageRange: { min: 18 },
  kundliHouse: "energy-savings",
  eligibility: all(female(), minAge(18)),

  details: {
    en: [
      "Pradhan Mantri Ujjwala Yojana gives women from poor families a clean cooking gas (LPG) connection, so they don't have to cook with wood, coal or cow-dung cakes.",
      "The connection is deposit-free: the government pays for the cylinder security deposit, regulator, hose, consumer card and installation. Under Ujjwala 2.0 the first refill and a gas stove are also free. The connection is in the woman's name.",
      "The Ministry of Petroleum & Natural Gas runs the scheme through the oil companies (Indane, Bharat Gas, HP Gas). Ujjwala customers also get a targeted subsidy of ₹300 on a 14.2 kg refill, paid into their bank account, for a set number of refills each year that the government fixes annually.",
    ],
    hi: [
      "प्रधानमंत्री उज्ज्वला योजना ग़रीब परिवारों की महिलाओं को साफ़ रसोई गैस (LPG) कनेक्शन देती है, ताकि उन्हें लकड़ी, कोयले या उपलों पर खाना न बनाना पड़े।",
      "कनेक्शन बिना जमा राशि के मिलता है: सिलेंडर की ज़मानत राशि, रेगुलेटर, पाइप, उपभोक्ता कार्ड और लगाने का खर्च सरकार देती है। उज्ज्वला 2.0 में पहली रिफ़िल और गैस चूल्हा भी मुफ़्त है। कनेक्शन महिला के नाम पर होता है।",
      "पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय यह योजना तेल कंपनियों (इंडेन, भारत गैस, एचपी गैस) के ज़रिए चलाता है। उज्ज्वला ग्राहकों को 14.2 किलो रिफ़िल पर ₹300 की लक्षित सब्सिडी भी बैंक खाते में मिलती है, साल में तय संख्या की रिफ़िल पर, जिसे सरकार हर साल तय करती है।",
    ],
  },
  benefits: {
    en: [
      "Deposit-free LPG connection (cylinder, regulator, hose, consumer card and installation).",
      "First refill and gas stove free under Ujjwala 2.0.",
      "₹300 subsidy per 14.2 kg refill, paid into your bank account, for a limited number of refills a year.",
      "Migrant families can apply with a self-declaration of address instead of address proof.",
    ],
    hi: [
      "बिना जमा राशि का LPG कनेक्शन (सिलेंडर, रेगुलेटर, पाइप, उपभोक्ता कार्ड और लगाने का खर्च)।",
      "उज्ज्वला 2.0 में पहली रिफ़िल और गैस चूल्हा मुफ़्त।",
      "14.2 किलो की रिफ़िल पर ₹300 सब्सिडी बैंक खाते में, साल में सीमित रिफ़िल तक।",
      "प्रवासी परिवार पते के सबूत की जगह पते का स्व-घोषणा पत्र देकर आवेदन कर सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Woman aged 18 or above.",
      "From a poor household: SC/ST, PMAY-Gramin beneficiary, Antyodaya Anna Yojana card, most backward class, forest dweller, tea or ex-tea garden tribe, island or river-island resident, or a poor family that submits the deprivation declaration.",
      "No LPG connection in the name of anyone in the household.",
    ],
    hi: [
      "18 साल या उससे अधिक उम्र की महिला।",
      "ग़रीब परिवार से: SC/ST, प्रधानमंत्री आवास योजना-ग्रामीण लाभार्थी, अंत्योदय अन्न योजना कार्ड, अति पिछड़ा वर्ग, वनवासी, चाय या पूर्व चाय बागान जनजाति, द्वीप या नदी-द्वीप निवासी, या ग़रीबी का घोषणा पत्र देने वाला परिवार।",
      "परिवार में किसी के नाम पर पहले से LPG कनेक्शन न हो।",
    ],
  },
  exclusions: {
    en: [
      "Households that already have an LPG connection in any member's name.",
      "Men cannot apply; the connection is only issued in a woman's name.",
      "Refills beyond the yearly subsidised limit are at full market price.",
    ],
    hi: [
      "जिस परिवार में किसी भी सदस्य के नाम पर पहले से LPG कनेक्शन है।",
      "पुरुष आवेदन नहीं कर सकते; कनेक्शन सिर्फ़ महिला के नाम पर मिलता है।",
      "सालाना सब्सिडी सीमा से ज़्यादा रिफ़िल पूरी बाज़ार कीमत पर मिलती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to pmuy.gov.in and click 'Apply for New Ujjwala 2.0 Connection'.",
        "Choose the oil company (Indane, Bharat Gas or HP Gas) and your nearest distributor.",
        "Fill in the form with your Aadhaar, family and bank details, upload documents and submit. The distributor will contact you for KYC.",
      ],
      hi: [
        "pmuy.gov.in पर जाएँ और 'Apply for New Ujjwala 2.0 Connection' पर क्लिक करें।",
        "तेल कंपनी (इंडेन, भारत गैस या एचपी गैस) और नज़दीकी वितरक चुनें।",
        "आधार, परिवार और बैंक की जानकारी के साथ फ़ॉर्म भरें, कागज़ अपलोड करें और जमा करें। KYC के लिए वितरक आपसे संपर्क करेगा।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest LPG distributor or Common Service Centre.",
        "Fill in the Ujjwala KYC form and attach the documents.",
        "After verification, collect your cylinder, regulator and stove from the distributor.",
      ],
      hi: [
        "नज़दीकी LPG वितरक या जन सेवा केंद्र जाएँ।",
        "उज्ज्वला KYC फ़ॉर्म भरें और कागज़ लगाएँ।",
        "जाँच के बाद वितरक से सिलेंडर, रेगुलेटर और चूल्हा ले लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar of the applicant and adult family members", "Ration card or other document showing family members", "Bank account details", "Address proof or self-declaration (for migrants)", "Caste certificate or other proof of your category, if applicable"],
    hi: ["आवेदिका और परिवार के वयस्क सदस्यों का आधार", "राशन कार्ड या परिवार के सदस्यों को दिखाने वाला कोई दस्तावेज़", "बैंक खाते का विवरण", "पते का सबूत या स्व-घोषणा (प्रवासियों के लिए)", "लागू हो तो जाति प्रमाणपत्र या श्रेणी का अन्य सबूत"],
  },
  faqs: [
    {
      q: { en: "How do I get the ₹300 refill subsidy?", hi: "रिफ़िल पर ₹300 सब्सिडी कैसे मिलेगी?" },
      a: {
        en: "Book and pay for the refill at the normal price. The subsidy is credited to your Aadhaar-linked bank account, up to the yearly number of subsidised refills.",
        hi: "रिफ़िल सामान्य कीमत पर बुक करें और भुगतान करें। सब्सिडी आपके आधार से जुड़े बैंक खाते में आती है, साल की तय सब्सिडी वाली रिफ़िल की संख्या तक।",
      },
    },
    {
      q: { en: "I don't have address proof because I moved for work. Can I apply?", hi: "काम के लिए दूसरी जगह आई हूँ, पते का सबूत नहीं है। क्या आवेदन कर सकती हूँ?" },
      a: {
        en: "Yes. Under Ujjwala 2.0, migrant families can give a self-declaration of their current address.",
        hi: "हाँ। उज्ज्वला 2.0 में प्रवासी परिवार अपने मौजूदा पते का स्व-घोषणा पत्र दे सकते हैं।",
      },
    },
  ],

  officialUrl: "https://pmuy.gov.in/",
  sources: [
    "https://pmuy.gov.in/",
    "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2154117&reg=3&lang=2",
    "https://ddnews.gov.in/en/cabinet-approves-continuation-of-targeted-subsidy-for-pradhan-mantri-ujjwala-yojana-consumers-for-2025-26-at-rs-12000-crore/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
