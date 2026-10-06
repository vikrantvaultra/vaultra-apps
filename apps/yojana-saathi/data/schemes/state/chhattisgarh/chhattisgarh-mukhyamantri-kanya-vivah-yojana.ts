import { all, female, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "chhattisgarh-mukhyamantri-kanya-vivah-yojana",
  overlapGroup: "marriage-assistance",
  name: { en: "Mukhyamantri Kanya Vivah Yojana (Chhattisgarh)", hi: "मुख्यमंत्री कन्या विवाह योजना (छत्तीसगढ़)" },
  aka: ["Kanya Vivah Yojana CG", "Samuhik Vivah Chhattisgarh", "mass marriage scheme"],
  shortDescription: {
    en: "Daughters of BPL and Mukhyamantri Khadyann card families in Chhattisgarh who marry at a government mass wedding get ₹35,000 in their bank account, plus wedding items and arrangements.",
    hi: "छत्तीसगढ़ में BPL और मुख्यमंत्री खाद्यान्न कार्डधारी परिवारों की जो बेटियाँ सरकारी सामूहिक विवाह में शादी करती हैं, उन्हें ₹35,000 बैंक खाते में और शादी का सामान व इंतज़ाम मिलता है।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Women and Child Development Department, Government of Chhattisgarh",
    hi: "महिला एवं बाल विकास विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "wedding", "mass marriage", "bride", "kanya vivah", "chhattisgarh"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 35000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("chhattisgarh"), female(), minAge(18)),

  details: {
    en: [
      "Under this scheme the Women and Child Development Department holds mass weddings for daughters from poor families, so that families don't have to borrow or overspend on a wedding.",
      "The state spends up to ₹50,000 on each bride. Of this, ₹35,000 is paid by DBT into the bride's bank account, about ₹8,000 goes on arranging the ceremony, and the rest on clothes, jewellery items, make-up and gifts for the couple.",
      "Weddings are held as per each couple's own religion and customs. Widows, orphans and destitute women can also be married under the scheme.",
    ],
    hi: [
      "इस योजना में महिला एवं बाल विकास विभाग ग़रीब परिवारों की बेटियों के लिए सामूहिक विवाह कराता है, ताकि परिवारों को शादी के लिए क़र्ज़ या फ़िज़ूलखर्ची न करनी पड़े।",
      "हर कन्या पर सरकार ₹50,000 तक ख़र्च करती है। इसमें से ₹35,000 DBT से वधू के बैंक खाते में जाते हैं, लगभग ₹8,000 आयोजन पर, और बाक़ी वर-वधू के कपड़े, गहने, श्रृंगार और उपहार पर।",
      "शादी हर जोड़े के अपने धर्म और रीति-रिवाज से होती है। विधवा, अनाथ और निराश्रित महिलाओं का विवाह भी इस योजना में हो सकता है।",
    ],
  },
  benefits: {
    en: [
      "₹35,000 paid into the bride's bank account.",
      "Clothes for the bride and groom, make-up items and gifts provided by the government.",
      "The mass wedding ceremony and meals are arranged free of cost.",
    ],
    hi: [
      "वधू के बैंक खाते में ₹35,000।",
      "वर-वधू के कपड़े, श्रृंगार सामग्री और उपहार सरकार की ओर से।",
      "सामूहिक विवाह का आयोजन और भोजन मुफ़्त।",
    ],
  },
  eligibilityText: {
    en: [
      "The bride's family lives in Chhattisgarh and is BPL or holds a Mukhyamantri Khadyann Sahayata Yojana ration card.",
      "The bride is over 18 years old.",
      "Up to two daughters per family can benefit.",
      "Widows, orphans and destitute women are also covered.",
    ],
    hi: [
      "वधू का परिवार छत्तीसगढ़ में रहता हो और BPL हो या उसके पास मुख्यमंत्री खाद्यान्न सहायता योजना का राशन कार्ड हो।",
      "वधू की उम्र 18 साल से ज़्यादा हो।",
      "एक परिवार की अधिकतम दो बेटियों को लाभ मिल सकता है।",
      "विधवा, अनाथ और निराश्रित महिलाएँ भी शामिल हैं।",
    ],
  },
  exclusions: {
    en: [
      "Weddings held privately, outside the scheme's mass ceremonies.",
      "A third or later daughter from the same family.",
      "Brides who are not yet adults.",
    ],
    hi: [
      "योजना के सामूहिक विवाह के बाहर निजी तौर पर हुई शादियाँ।",
      "एक ही परिवार की तीसरी या उसके बाद की बेटी।",
      "जो वधू अभी बालिग नहीं है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Before the announced mass wedding date, contact your Anganwadi worker or the Women and Child Development project office (or the gram panchayat / urban body).",
        "Fill in the form for the bride and groom and attach the documents.",
        "After checking, the couple is included in the mass wedding, and ₹35,000 is sent to the bride's bank account.",
      ],
      hi: [
        "सामूहिक विवाह की घोषित तारीख़ से पहले अपनी आंगनवाड़ी कार्यकर्ता या महिला एवं बाल विकास परियोजना कार्यालय (या ग्राम पंचायत / नगरीय निकाय) से संपर्क करें।",
        "वर-वधू का फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "जाँच के बाद जोड़े को सामूहिक विवाह में शामिल किया जाता है और ₹35,000 वधू के बैंक खाते में भेजे जाते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "BPL or Mukhyamantri Khadyann ration card",
      "Aadhaar of bride and groom",
      "Age proof of the bride",
      "Bride's bank account details",
    ],
    hi: [
      "BPL या मुख्यमंत्री खाद्यान्न राशन कार्ड",
      "वर और वधू का आधार",
      "वधू की उम्र का प्रमाण",
      "वधू के बैंक खाते का विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "Is the full ₹50,000 given in cash?", hi: "क्या पूरे ₹50,000 नकद मिलते हैं?" },
      a: {
        en: "No. ₹35,000 goes into the bride's account. The rest is spent by the department on the ceremony, food, clothes and gifts for the couple.",
        hi: "नहीं। ₹35,000 वधू के खाते में जाते हैं। बाक़ी राशि विभाग आयोजन, भोजन, कपड़े और जोड़े के उपहार पर ख़र्च करता है।",
      },
    },
    {
      q: { en: "Can families of other religions take part?", hi: "क्या दूसरे धर्म के परिवार भी शामिल हो सकते हैं?" },
      a: {
        en: "Yes. Hindu, Muslim, Christian, Buddhist and tribal couples are married at these ceremonies, each by their own customs.",
        hi: "हाँ। इन कार्यक्रमों में हिंदू, मुस्लिम, ईसाई, बौद्ध और आदिवासी जोड़ों की शादी उनके अपने रीति-रिवाज से होती है।",
      },
    },
  ],

  officialUrl: "https://cgwcd.gov.in/",
  sources: [
    "https://dprcg.gov.in/post/1778667329/Raipur-Special-Article-Chief-Minister-Kanya-Vivah-Yojana-Government-becomes-support-for-daughters-and-mass-marriage-becomes-a-celebration-of-social-change",
    "https://dprcg.gov.in/post/1781435614/Raipur-184-couples-were-married-under-the-Chief-Minister-s-Kanya-Vivah-Yojana-all-provisions-were-adhered-to",
    "https://cgwcd.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2005,
  status: "active",
};

export default scheme;
