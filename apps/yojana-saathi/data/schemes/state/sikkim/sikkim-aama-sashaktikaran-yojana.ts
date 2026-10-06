import { all, ageBetween, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sikkim-aama-sashaktikaran-yojana",
  tier: "compact",
  overlapGroup: "women-monthly",
  name: { en: "Sikkim Aama Sashaktikaran Yojana", hi: "सिक्किम आमा सशक्तिकरण योजना" },
  aka: ["SASY", "Aama Yojana", "Aama Sashaktikaran"],
  shortDescription: {
    en: "Non-working mothers in Sikkim aged 18 to 59 get yearly support (₹40,000 per the state press office; the department page still says ₹20,000), paid in two instalments, to spend on their children's education, the household or a small business.",
    hi: "सिक्किम में 18 से 59 साल की कामकाज न करने वाली माताओं को हर साल सहायता मिलती है (राज्य सूचना विभाग के अनुसार ₹40,000; विभाग के पेज पर अभी भी ₹20,000), दो किस्तों में, ताकि वे बच्चों की पढ़ाई, घर या छोटे काम-धंधे पर खर्च कर सकें।",
  },
  level: "state",
  state: "sikkim",
  department: {
    en: "Women, Child, Senior Citizen and Divyangjan Welfare Department, Government of Sikkim",
    hi: "महिला, बाल, वरिष्ठ नागरिक और दिव्यांगजन कल्याण विभाग, सिक्किम सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "mother", "aama", "cash assistance", "widow", "single mother", "sikkim"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 20000, period: "yearly", kind: "cash" },
  ageRange: { min: 18, max: 59 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("sikkim"), female(), ...ageBetween(18, 59)),

  details: {
    en: [
      "Sikkim Aama Sashaktikaran Yojana is the Sikkim government's flagship scheme for mothers. It was notified in 2023 and is run by the Women, Child, Senior Citizen and Divyangjan Welfare Department.",
      "Each selected mother gets ₹40,000 a year (as announced by the state press office; the department page still shows ₹20,000) in two instalments through the State Bank of Sikkim. She can use the money as she thinks best: for her children's schooling, the home, farming, livestock or a small business. About 32,000 mothers across all constituencies are covered, and the Chief Minister has announced that coverage will grow to 50,000 from 2027.",
    ],
    hi: [
      "सिक्किम आमा सशक्तिकरण योजना माताओं के लिए सिक्किम सरकार की प्रमुख योजना है। यह 2023 में अधिसूचित हुई और महिला, बाल, वरिष्ठ नागरिक और दिव्यांगजन कल्याण विभाग इसे चलाता है।",
      "हर चुनी गई माँ को साल में ₹40,000 (राज्य सूचना विभाग की घोषणा के अनुसार; विभाग के पेज पर अभी ₹20,000) दो किस्तों में स्टेट बैंक ऑफ़ सिक्किम के ज़रिए मिलते हैं। वह यह पैसा अपनी ज़रूरत के हिसाब से लगा सकती है: बच्चों की पढ़ाई, घर, खेती, पशुपालन या छोटा काम-धंधा। सभी विधानसभा क्षेत्रों में लगभग 32,000 माताएँ इसमें शामिल हैं, और मुख्यमंत्री ने घोषणा की है कि 2027 से इसे 50,000 तक बढ़ाया जाएगा।",
    ],
  },
  benefits: {
    en: [
      "₹40,000 a year per the state press office (₹20,000 on the department page), paid in two instalments.",
      "The money is yours to use for your children, your home or a small enterprise.",
      "Mothers who use the money well can be considered for the Pragatisheel Aama Puraskar, a separate state award.",
    ],
    hi: [
      "हर साल ₹40,000, राज्य सूचना विभाग के अनुसार (विभाग के पेज पर ₹20,000), दो किस्तों में।",
      "यह पैसा आपका है, इसे बच्चों, घर या छोटे काम-धंधे पर लगा सकती हैं।",
      "जो माताएँ पैसे का अच्छा उपयोग करती हैं, उन्हें राज्य के अलग पुरस्कार 'प्रगतिशील आमा पुरस्कार' के लिए चुना जा सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A mother living in Sikkim, aged 18 to 59 years.",
      "She should not be in a job (the scheme is for non-working mothers). Unmarried, widowed, divorced and separated mothers are covered.",
      "Beneficiaries are selected constituency-wise under the department's guidelines, so not every eligible mother is chosen in a given year.",
    ],
    hi: [
      "सिक्किम में रहने वाली माँ, जिसकी उम्र 18 से 59 साल हो।",
      "वह कोई नौकरी न करती हो (योजना कामकाज न करने वाली माताओं के लिए है)। अविवाहित, विधवा, तलाकशुदा और अलग रह रही माताएँ भी इसमें शामिल हैं।",
      "लाभार्थियों का चयन विभाग के दिशानिर्देशों के अनुसार विधानसभा क्षेत्र के हिसाब से होता है, इसलिए किसी साल हर पात्र माँ का चयन नहीं हो पाता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Social Welfare Officer or Social Welfare Inspector at your Block Administrative Centre (BAC) to ask when names are being taken.",
        "Selected mothers receive their cheques at the BAC or at a constituency programme; deposit the cheque in your bank account.",
      ],
      hi: [
        "नाम कब लिए जा रहे हैं, यह जानने के लिए अपने ब्लॉक प्रशासनिक केंद्र (BAC) के समाज कल्याण अधिकारी या समाज कल्याण निरीक्षक से संपर्क करें।",
        "चुनी गई माताओं को चेक BAC पर या विधानसभा क्षेत्र के कार्यक्रम में मिलता है; चेक अपने बैंक खाते में जमा करें।",
      ],
    },
  },

  officialUrl: "https://www.sikkim.gov.in/departments/women-child-senior-citizen-and-divyangjan-welfare-department",
  sources: [
    "https://ipr.sikkim.gov.in/Home/News?slug=aama-samman-diwas-a-historic-tribute-to-mothers-inspired-by-the-compassionate-leadership-of-shri-prem-singh-tamang-golay-",
    "https://ipr.sikkim.gov.in/Home/News?slug=cm-mr-prem-singh-tamang-distributes-aama-sashaktikaran-aid-to-rhenock-beneficiaries",
    "https://ipr.sikkim.gov.in/Home/KeyAchievements",
    "https://www.sikkim.gov.in/departments/women-child-senior-citizen-and-divyangjan-welfare-department",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
