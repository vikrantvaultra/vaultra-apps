import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-mukh-mantri-sehat-yojana",
  overlapGroup: "health-cover",
  name: { en: "Mukh Mantri Sehat Yojana (Punjab)", hi: "मुख्यमंत्री सेहत योजना (पंजाब)" },
  aka: ["MMSY", "Sehat Card", "Punjab ₹10 lakh health insurance", "Mukhya Mantri Sehat Bima Yojana"],
  shortDescription: {
    en: "Every family living in Punjab gets free, cashless hospital treatment up to ₹10 lakh a year at empanelled government and private hospitals, with no income limit.",
    hi: "पंजाब में रहने वाले हर परिवार को सूचीबद्ध सरकारी और निजी अस्पतालों में हर साल ₹10 लाख तक का मुफ़्त, कैशलेस इलाज मिलता है; आय की कोई सीमा नहीं है।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "State Health Agency, Department of Health & Family Welfare, Government of Punjab",
    hi: "स्टेट हेल्थ एजेंसी, स्वास्थ्य एवं परिवार कल्याण विभाग, पंजाब सरकार",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "sehat card", "free treatment", "hospital", "10 lakh", "punjab"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 1_000_000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("punjab")),

  details: {
    en: [
      "Mukh Mantri Sehat Yojana is Punjab's universal health cover. It gives every family in the state cashless treatment of up to ₹10 lakh a year. Earlier, ₹5 lakh cover was available only to certain groups.",
      "All genuine residents of Punjab are covered, including government employees and pensioners. There is no income limit and no exclusion list. Treatment has been given under the scheme since January 2026.",
      "The State Health Agency runs the scheme. Over 2,000 treatment packages are covered, and more than 800 government and private hospitals have been empanelled. You need a Sehat Card to use it.",
    ],
    hi: [
      "मुख्यमंत्री सेहत योजना पंजाब की सबके लिए स्वास्थ्य बीमा योजना है। इसमें राज्य के हर परिवार को हर साल ₹10 लाख तक का कैशलेस इलाज मिलता है। पहले ₹5 लाख का कवर सिर्फ़ कुछ वर्गों को मिलता था।",
      "पंजाब के सभी असली निवासी इसमें शामिल हैं, सरकारी कर्मचारी और पेंशनभोगी भी। आय की कोई सीमा नहीं है और कोई बाहर रखी गई सूची नहीं है। जनवरी 2026 से इस योजना में इलाज हो रहा है।",
      "यह योजना स्टेट हेल्थ एजेंसी चलाती है। इसमें 2,000 से ज़्यादा इलाज पैकेज शामिल हैं और 800 से ज़्यादा सरकारी व निजी अस्पताल सूचीबद्ध हैं। इसका फ़ायदा लेने के लिए सेहत कार्ड ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹10 lakh per family per year.",
      "Covers hospital stay plus costs before and after admission.",
      "Valid at empanelled government and private hospitals in Punjab.",
      "No limit on family size, age or income.",
    ],
    hi: [
      "हर परिवार को हर साल ₹10 लाख तक का कैशलेस इलाज।",
      "अस्पताल में भर्ती के साथ भर्ती से पहले और बाद के ख़र्च भी शामिल।",
      "पंजाब के सूचीबद्ध सरकारी और निजी अस्पतालों में मान्य।",
      "परिवार के आकार, उम्र या आय की कोई सीमा नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "Any genuine resident of Punjab.",
      "Adults need an Aadhaar card and a Punjab voter ID card to enrol.",
      "Children under 18 are enrolled using their parent's or guardian's documents.",
      "Government employees, pensioners and contract or outsourced staff are also covered.",
    ],
    hi: [
      "पंजाब का कोई भी असली निवासी।",
      "बालिगों को नाम लिखवाने के लिए आधार कार्ड और पंजाब का वोटर ID कार्ड चाहिए।",
      "18 साल से कम उम्र के बच्चों का नाम माता-पिता या अभिभावक के दस्तावेज़ों से जुड़ता है।",
      "सरकारी कर्मचारी, पेंशनभोगी और ठेके या आउटसोर्स पर काम करने वाले कर्मचारी भी शामिल हैं।",
    ],
  },
  exclusions: {
    en: [
      "People who are not residents of Punjab.",
      "Treatment at hospitals that are not empanelled under the scheme.",
      "Treatments outside the scheme's approved package list.",
    ],
    hi: [
      "जो लोग पंजाब के निवासी नहीं हैं।",
      "योजना में सूचीबद्ध न होने वाले अस्पतालों में इलाज।",
      "योजना की मंज़ूर पैकेज सूची से बाहर के इलाज।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "If you are already enrolled, go to sha.punjab.gov.in and choose 'Download Health Card'.",
        "Enter the details asked for and download your Sehat Card.",
        "At an empanelled hospital, show the card at the scheme help desk to get cashless treatment.",
      ],
      hi: [
        "अगर आपका नाम पहले से जुड़ा है, तो sha.punjab.gov.in पर जाकर 'Download Health Card' चुनें।",
        "माँगी गई जानकारी भरें और अपना सेहत कार्ड डाउनलोड करें।",
        "सूचीबद्ध अस्पताल में योजना की हेल्प डेस्क पर कार्ड दिखाएँ और कैशलेस इलाज पाएँ।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest Common Service Centre (CSC) with your Aadhaar and Punjab voter ID.",
        "Get your family enrolled and your Sehat Card made, free of cost.",
        "For help or complaints, call the helpline 104.",
      ],
      hi: [
        "आधार और पंजाब का वोटर ID लेकर नज़दीकी कॉमन सर्विस सेंटर (CSC) जाएँ।",
        "अपने परिवार का नाम जुड़वाएँ और सेहत कार्ड मुफ़्त में बनवाएँ।",
        "मदद या शिकायत के लिए हेल्पलाइन 104 पर फ़ोन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Punjab voter ID card", "Parent's or guardian's documents for children under 18"],
    hi: ["आधार कार्ड", "पंजाब का वोटर ID कार्ड", "18 साल से कम उम्र के बच्चों के लिए माता-पिता या अभिभावक के दस्तावेज़"],
  },
  faqs: [
    {
      q: { en: "I am a government employee. Am I covered?", hi: "मैं सरकारी कर्मचारी हूँ। क्या मुझे यह मिलेगा?" },
      a: {
        en: "Yes. Unlike most health schemes, this one also covers government employees, pensioners and outsourced staff.",
        hi: "हाँ। ज़्यादातर स्वास्थ्य योजनाओं से अलग, इसमें सरकारी कर्मचारी, पेंशनभोगी और आउटसोर्स कर्मचारी भी शामिल हैं।",
      },
    },
    {
      q: { en: "I already have an Ayushman Bharat card. Do I need a new card?", hi: "मेरे पास पहले से आयुष्मान भारत कार्ड है। क्या नया कार्ड चाहिए?" },
      a: {
        en: "The scheme needs a Sehat Card. Check on the State Health Agency site or at a CSC whether your card has been issued, and get one made if not.",
        hi: "इस योजना के लिए सेहत कार्ड चाहिए। स्टेट हेल्थ एजेंसी की साइट या CSC पर देखें कि आपका कार्ड बना है या नहीं, नहीं बना हो तो बनवा लें।",
      },
    },
    {
      q: { en: "How do I find a hospital?", hi: "अस्पताल कैसे ढूँढूँ?" },
      a: {
        en: "The list of empanelled hospitals is on sha.punjab.gov.in. You can also call 104.",
        hi: "सूचीबद्ध अस्पतालों की सूची sha.punjab.gov.in पर है। आप 104 पर फ़ोन भी कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://sha.punjab.gov.in/",
  sources: [
    "https://sha.punjab.gov.in/shapunjab/about-us.php",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
    "https://finance.punjab.gov.in/uploads/9abf7814-c6c6-4933-963a-bcb650c10a3e_Economic%20Survey%202025-26.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
