import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-rythu-bharosa",
  overlapGroup: "farmer-income",
  name: { en: "Rythu Bharosa (Telangana)", hi: "रैतु भरोसा (तेलंगाना)" },
  aka: ["Rythu Bharosa", "Raitu Bharosa", "Telangana Rythu Bharosa", "Rythu Bandhu"],
  shortDescription: {
    en: "Telangana farmers get crop investment support of ₹12,000 per acre every year, paid straight into their bank account for cultivable land recorded in their name.",
    hi: "तेलंगाना के किसानों को उनके नाम दर्ज खेती लायक़ ज़मीन पर हर साल ₹12,000 प्रति एकड़ फ़सल निवेश सहायता सीधे बैंक खाते में मिलती है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Agriculture and Co-operation Department, Government of Telangana",
    hi: "कृषि एवं सहकारिता विभाग, तेलंगाना सरकार",
  },
  categories: ["agriculture"],
  tags: ["farmer", "investment support", "per acre", "rythu bandhu", "kisan", "dbt", "telangana"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("telangana"), when("occupation", "in", ["farmer"])),

  details: {
    en: [
      "Rythu Bharosa is Telangana's crop investment support for farmers. It replaced the earlier Rythu Bandhu scheme and started on 26 January 2025.",
      "The support was raised to ₹12,000 per acre per year. It is worked out on the cultivable land recorded in your name on the Bhu Bharati (earlier Dharani) land records portal, so the more cultivable land you hold, the more you get.",
      "The Agriculture Department runs the scheme and the money is sent by Direct Benefit Transfer through the RBI system. District Collectors handle complaints in their district.",
    ],
    hi: [
      "रैतु भरोसा तेलंगाना सरकार की किसानों के लिए फ़सल निवेश सहायता योजना है। इसने पुरानी रैतु बंधु योजना की जगह ली और 26 जनवरी 2025 से शुरू हुई।",
      "सहायता बढ़ाकर ₹12,000 प्रति एकड़ प्रति साल की गई है। यह भू भारती (पहले धरणी) भूमि रिकॉर्ड पोर्टल पर आपके नाम दर्ज खेती लायक़ ज़मीन के हिसाब से तय होती है, यानी जितनी ज़्यादा खेती की ज़मीन, उतनी ज़्यादा राशि।",
      "यह योजना कृषि विभाग चलाता है और पैसा RBI की DBT व्यवस्था से भेजा जाता है। ज़िले में शिकायतों के निपटारे की ज़िम्मेदारी ज़िला कलेक्टर की है।",
    ],
  },
  benefits: {
    en: [
      "₹12,000 per acre of cultivable land every year.",
      "Money is credited directly to your bank account.",
      "Paid at the start of the crop seasons to help with seeds, fertiliser and other farm costs.",
    ],
    hi: [
      "खेती लायक़ हर एकड़ ज़मीन पर हर साल ₹12,000।",
      "पैसा सीधे आपके बैंक खाते में आता है।",
      "फ़सल के मौसम की शुरुआत में मिलता है, ताकि बीज, खाद और खेती के दूसरे ख़र्च पूरे हों।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a pattadar (land owner) in Telangana with cultivable land recorded on the Bhu Bharati portal.",
      "ROFR (forest rights) pattadars are also eligible.",
      "Your bank account details are linked with your land record.",
    ],
    hi: [
      "आप तेलंगाना में पट्टादार (ज़मीन मालिक) हैं और आपकी खेती लायक़ ज़मीन भू भारती पोर्टल पर दर्ज है।",
      "ROFR (वन अधिकार) पट्टादार भी पात्र हैं।",
      "आपके बैंक खाते का विवरण आपके भूमि रिकॉर्ड से जुड़ा है।",
    ],
  },
  exclusions: {
    en: [
      "Land that is not fit for cultivation.",
      "Hills and land used for mining.",
      "Land acquired for roads or by the government.",
      "Farm land converted to real estate or industrial use.",
    ],
    hi: [
      "ऐसी ज़मीन जिस पर खेती नहीं हो सकती।",
      "पहाड़ और खनन वाली ज़मीन।",
      "सड़कों के लिए या सरकार द्वारा अधिग्रहित ज़मीन।",
      "रियल एस्टेट या उद्योग के लिए बदली गई खेती की ज़मीन।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "There is no separate application: eligible pattadars are picked up from the Bhu Bharati land records.",
        "Make sure your land record, Aadhaar and bank account details are correct. Contact your Agriculture Extension Officer (AEO) or the Mandal Agriculture Officer if anything is wrong.",
        "New pattadars should give their passbook and bank details to the AEO so they are added.",
      ],
      hi: [
        "अलग से आवेदन नहीं करना होता: पात्र पट्टादार भू भारती भूमि रिकॉर्ड से अपने-आप जुड़ जाते हैं।",
        "देख लें कि आपका भूमि रिकॉर्ड, आधार और बैंक खाते की जानकारी सही है। कुछ ग़लत हो तो अपने कृषि विस्तार अधिकारी (AEO) या मंडल कृषि अधिकारी से मिलें।",
        "नए पट्टादार अपनी पासबुक और बैंक की जानकारी AEO को दें, ताकि उनका नाम जोड़ा जा सके।",
      ],
    },
  },
  documents: {
    en: ["Pattadar passbook or Bhu Bharati land record", "Aadhaar card", "Bank passbook"],
    hi: ["पट्टादार पासबुक या भू भारती भूमि रिकॉर्ड", "आधार कार्ड", "बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "Do tenant farmers get Rythu Bharosa?", hi: "क्या बटाईदार किसानों को रैतु भरोसा मिलता है?" },
      a: {
        en: "The 2025 guidelines pay the support to pattadars (and ROFR pattadars) for land on the Bhu Bharati records. Tenant farmers are not covered in those guidelines.",
        hi: "2025 के दिशानिर्देशों के अनुसार सहायता भू भारती रिकॉर्ड वाली ज़मीन के पट्टादारों (और ROFR पट्टादारों) को मिलती है। बटाईदार किसान इन दिशानिर्देशों में शामिल नहीं हैं।",
      },
    },
    {
      q: { en: "Is this the same as Rythu Bandhu?", hi: "क्या यह रैतु बंधु ही है?" },
      a: {
        en: "Rythu Bharosa replaced Rythu Bandhu. The amount went up from ₹10,000 to ₹12,000 per acre a year, and non-cultivable land is now left out.",
        hi: "रैतु भरोसा ने रैतु बंधु की जगह ली है। राशि ₹10,000 से बढ़कर ₹12,000 प्रति एकड़ प्रति साल हो गई है, और अब बिना खेती वाली ज़मीन शामिल नहीं है।",
      },
    },
  ],

  officialUrl: "https://rythubharosa.telangana.gov.in/",
  sources: [
    "https://rythubharosa.telangana.gov.in/assets/files/GO%20Rt%20No.%2018_%20Rythu%20Bharosa%20Scheme%202025.pdf",
    "https://www.newsonair.gov.in/telangana-farmers-to-receive-%e2%82%b912000-per-acre-annually-under-rythu-bharosa-scheme/",
    "https://www.telangana.gov.in/news/press-releases/2026/06/honble-chief-minister-sri-a-revanth-reddy-releases-rythu-bharosa-addresses-farmers-at-shilpakala-vedika-hyderabad/",
    "https://www.telangana.gov.in/wp-content/uploads/2026/05/Budget-in-Brief.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
