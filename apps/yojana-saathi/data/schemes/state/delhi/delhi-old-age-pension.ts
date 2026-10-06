import { all, incomeUpTo, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-old-age-pension",
  name: { en: "Delhi Old Age Assistance (Senior Citizen Pension)", hi: "दिल्ली वृद्धावस्था सहायता (वरिष्ठ नागरिक पेंशन)" },
  aka: ["Delhi old age pension", "Budhapa pension Delhi", "Vridha pension Delhi"],
  shortDescription: {
    en: "Monthly pension for Delhi residents aged 60+ with family income up to ₹1 lakh: at least ₹2,000 a month (60–69) and ₹2,500 (70+), plus ₹500 extra for SC/ST/minority seniors.",
    hi: "₹1 लाख तक की पारिवारिक आय वाले 60+ उम्र के दिल्ली निवासियों को मासिक पेंशन: कम से कम ₹2,000 महीना (60–69) और ₹2,500 (70+), SC/ST/अल्पसंख्यक बुज़ुर्गों को ₹500 अतिरिक्त।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Social Welfare, Govt. of NCT of Delhi", hi: "समाज कल्याण विभाग, दिल्ली सरकार" },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "senior citizen", "budhapa pension", "60 years", "delhi"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("delhi"),
    minAge(60),
    labelled(incomeUpTo(100_000), { en: "Family income up to ₹1 lakh a year", hi: "परिवार की सालाना आय ₹1 लाख तक" }),
  ),

  details: {
    en: [
      "The Scheme of Old Age Assistance is run by Delhi's Department of Social Welfare for senior citizens who have no adequate means of support.",
      "The department's published rates are ₹2,000 a month for ages 60–69 (with ₹500 extra for SC, ST and minority beneficiaries) and ₹2,500 a month for 70 and above. The Delhi government announced a ₹500 increase across the board in 2025; check the current rate with your district office.",
      "The pension is paid into your Aadhaar-linked bank account (quarterly as per the department). It starts from the month after a complete application is received.",
    ],
    hi: [
      "वृद्धावस्था सहायता योजना दिल्ली का समाज कल्याण विभाग उन बुज़ुर्गों के लिए चलाता है जिनके पास गुज़ारे का पर्याप्त साधन नहीं है।",
      "विभाग की प्रकाशित दरें हैं: 60–69 साल के लिए ₹2,000 महीना (SC, ST और अल्पसंख्यक लाभार्थियों को ₹500 अतिरिक्त) और 70 साल या उससे ऊपर के लिए ₹2,500 महीना। दिल्ली सरकार ने 2025 में सभी के लिए ₹500 बढ़ाने की घोषणा की थी; मौजूदा दर अपने ज़िला कार्यालय से पता करें।",
      "पेंशन आधार से जुड़े बैंक खाते में आती है (विभाग के अनुसार तिमाही)। पूरा आवेदन मिलने के अगले महीने से पेंशन शुरू होती है।",
    ],
  },
  benefits: {
    en: [
      "₹2,000 a month for ages 60 to 69 (published rate).",
      "Extra ₹500 a month for SC, ST and minority beneficiaries aged 60 to 69.",
      "₹2,500 a month for ages 70 and above (published rate).",
      "Paid directly into your bank account.",
    ],
    hi: [
      "60 से 69 साल के लिए ₹2,000 महीना (प्रकाशित दर)।",
      "60 से 69 साल के SC, ST और अल्पसंख्यक लाभार्थियों को ₹500 महीना अतिरिक्त।",
      "70 साल या उससे ऊपर के लिए ₹2,500 महीना (प्रकाशित दर)।",
      "पैसा सीधे बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 60 or above.",
      "Has lived in Delhi for at least 5 years before applying.",
      "Annual family income from all sources is not more than ₹1 lakh.",
      "Has a bank account in their own name only, and Aadhaar.",
    ],
    hi: [
      "उम्र 60 साल या उससे ज़्यादा हो।",
      "आवेदन से पहले कम से कम 5 साल से दिल्ली में रह रहे हों।",
      "परिवार की कुल सालाना आय ₹1 लाख से ज़्यादा न हो।",
      "सिर्फ़ अपने नाम का बैंक खाता और आधार हो।",
    ],
  },
  exclusions: {
    en: [
      "Anyone already receiving a pension or similar financial help from the Central or Delhi government, MCD, NDMC or any other source for this purpose.",
      "Families with income above ₹1 lakh a year.",
    ],
    hi: [
      "जिन्हें इसी उद्देश्य के लिए केंद्र या दिल्ली सरकार, MCD, NDMC या किसी और स्रोत से पहले से पेंशन या आर्थिक मदद मिल रही है।",
      "जिन परिवारों की सालाना आय ₹1 लाख से ज़्यादा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the Delhi e-District portal (edistrict.delhigovt.nic.in) and register or log in.",
        "Choose 'Old Age Assistance' under the Social Welfare department.",
        "Fill in the form, upload proof of age, 5 years' residence and bank details, and submit.",
        "Get the form recommended by a gazetted officer, MP or MLA, as the department asks.",
      ],
      hi: [
        "दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर जाएँ और रजिस्टर या लॉग इन करें।",
        "समाज कल्याण विभाग में 'Old Age Assistance' चुनें।",
        "फ़ॉर्म भरें, उम्र, 5 साल के निवास और बैंक विवरण का प्रमाण अपलोड करें और जमा करें।",
        "विभाग के कहे अनुसार फ़ॉर्म पर राजपत्रित अधिकारी, सांसद या विधायक की सिफ़ारिश लगवाएँ।",
      ],
    },
    offline: {
      en: [
        "Visit your District Social Welfare Office for help with the application.",
        "Submit the form with attested documents; the District Social Welfare Officer verifies and sanctions it.",
      ],
      hi: [
        "आवेदन में मदद के लिए ज़िला समाज कल्याण कार्यालय जाएँ।",
        "सत्यापित दस्तावेज़ों के साथ फ़ॉर्म जमा करें; ज़िला समाज कल्याण अधिकारी जाँच करके मंज़ूरी देते हैं।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Proof of 5 years' residence in Delhi (ration card, voter ID, bills, bank passbook etc.)", "Age proof (birth certificate, school certificate, voter ID, PAN etc.)", "Self-declaration of family income", "Bank account in your own name"],
    hi: ["आधार", "दिल्ली में 5 साल रहने का प्रमाण (राशन कार्ड, मतदाता पहचान पत्र, बिल, बैंक पासबुक आदि)", "उम्र का प्रमाण (जन्म प्रमाणपत्र, स्कूल प्रमाणपत्र, मतदाता पहचान पत्र, PAN आदि)", "परिवार की आय का स्व-घोषणा पत्र", "अपने नाम का बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "I have no document showing 5 years in Delhi. What can I do?", hi: "मेरे पास दिल्ली में 5 साल रहने का कोई दस्तावेज़ नहीं है। क्या करूँ?" },
      a: {
        en: "You can give statements from two witnesses, such as your MLA, RWA office-bearer, ASHA or anganwadi supervisor, or two neighbours, with their own ID and address proof.",
        hi: "आप दो गवाहों के बयान दे सकते हैं, जैसे विधायक, RWA पदाधिकारी, आशा या आंगनवाड़ी सुपरवाइज़र, या दो पड़ोसी, उनके पहचान और पते के प्रमाण के साथ।",
      },
    },
    {
      q: { en: "Has the pension been increased by ₹500?", hi: "क्या पेंशन ₹500 बढ़ गई है?" },
      a: {
        en: "The Delhi government announced a ₹500 increase (to ₹2,500 for 60–69 and ₹3,000 for 70+) in 2025, but the department's website still lists the older rates. Ask your District Social Welfare Office for the amount being paid now.",
        hi: "दिल्ली सरकार ने 2025 में ₹500 बढ़ाने (60–69 के लिए ₹2,500 और 70+ के लिए ₹3,000) की घोषणा की थी, पर विभाग की वेबसाइट पर अब भी पुरानी दरें हैं। अभी कितनी राशि मिल रही है, यह ज़िला समाज कल्याण कार्यालय से पूछें।",
      },
    },
  ],

  officialUrl: "https://socialwelfare.delhi.gov.in/social/financial-assistance-schemes",
  sources: [
    "https://socialwelfare.delhi.gov.in/social/financial-assistance-schemes",
    "https://edistrict.delhigovt.nic.in/",
    "https://www.theweek.in/wire-updates/national/2025/11/21/des55-dl-study-old-age-pension.html",
    "https://thefederal.com/category/states/north/delhi/delhi-govt-50000-elderly-pension-scheme-206910",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "check-status",
};

export default scheme;
