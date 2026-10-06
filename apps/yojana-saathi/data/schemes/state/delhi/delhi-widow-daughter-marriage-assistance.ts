import { all, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-widow-daughter-marriage-assistance",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: {
    en: "Delhi Marriage Assistance for Daughters of Poor Widows and Orphan Girls",
    hi: "दिल्ली गरीब विधवाओं की बेटियों और अनाथ कन्याओं की शादी के लिए सहायता",
  },
  aka: ["WDM scheme Delhi", "Widow daughter marriage Delhi", "Delhi orphan girl marriage assistance"],
  shortDescription: {
    en: "Poor widows in Delhi with income up to ₹1 lakh a year get a one-time ₹30,000 for the marriage of each daughter (up to two). Orphan girls or their guardians can also apply.",
    hi: "दिल्ली में ₹1 लाख तक सालाना आय वाली गरीब विधवाओं को हर बेटी (दो तक) की शादी के लिए एक बार ₹30,000 मिलते हैं। अनाथ लड़कियाँ या उनके अभिभावक भी आवेदन कर सकते हैं।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Women & Child Development, Govt. of NCT of Delhi", hi: "महिला एवं बाल विकास विभाग, दिल्ली सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage assistance", "widow", "daughter marriage", "orphan girl", "shaadi", "delhi"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 30000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("delhi"),
    labelled(when("marital", "eq", "widowed"), {
      en: "You are a widow (orphan girls and their guardians can also apply)",
      hi: "आप विधवा हैं (अनाथ लड़कियाँ और उनके अभिभावक भी आवेदन कर सकते हैं)",
    }),
    labelled(incomeUpTo(100_000), { en: "Your income is up to ₹1 lakh a year", hi: "आपकी सालाना आय ₹1 लाख तक है" }),
  ),

  details: {
    en: [
      "Delhi's Women & Child Development Department gives one-time cash help to poor widows for their daughters' weddings, and to orphan girls (or the guardians, foster parents or homes that raised them) for the girl's own wedding.",
      "The amount is ₹30,000 per application, for up to two daughters. The application must reach the department within 60 days before or after the wedding, and must be recommended by the local MLA or MP.",
    ],
    hi: [
      "दिल्ली का महिला एवं बाल विकास विभाग गरीब विधवाओं को उनकी बेटियों की शादी के लिए, और अनाथ लड़कियों (या उन्हें पालने वाले अभिभावक, पालक माता-पिता या संस्था) को लड़की की शादी के लिए एक बार नकद मदद देता है।",
      "हर आवेदन पर ₹30,000 मिलते हैं, दो बेटियों तक। आवेदन शादी से 60 दिन पहले या 60 दिन बाद तक विभाग में पहुँच जाना चाहिए, और उस पर इलाके के विधायक या सांसद की सिफ़ारिश होनी चाहिए।",
    ],
  },
  benefits: {
    en: ["One-time ₹30,000 for each daughter's marriage, for up to two daughters.", "Paid into the applicant's Aadhaar-linked bank account in Delhi."],
    hi: ["हर बेटी की शादी पर एक बार ₹30,000, दो बेटियों तक।", "आवेदक के दिल्ली के आधार से जुड़े बैंक खाते में भुगतान।"],
  },
  eligibilityText: {
    en: [
      "A poor widow marrying off her daughter, or an orphan girl, or the guardian, foster parent or home that brought her up.",
      "Has lived in Delhi for at least 5 years before applying.",
      "The applicant's own income from all sources is less than ₹1 lakh a year.",
      "The bride is over 18 on the date of marriage.",
      "Has Aadhaar and a single-operated, Aadhaar-linked bank account in Delhi.",
      "Has not received help for the same wedding from the Lt. Governor's or Chief Minister's discretionary fund or any other agency.",
    ],
    hi: [
      "अपनी बेटी की शादी कर रही गरीब विधवा, या अनाथ लड़की, या उसे पालने वाले अभिभावक, पालक माता-पिता या संस्था।",
      "आवेदन से पहले कम से कम 5 साल से दिल्ली में रह रहे हों।",
      "सभी स्रोतों से आवेदक की अपनी आय सालाना ₹1 लाख से कम हो।",
      "शादी की तारीख पर दुल्हन की उम्र 18 साल से ज़्यादा हो।",
      "आधार हो और दिल्ली में अकेले चलाया जाने वाला, आधार से जुड़ा बैंक खाता हो।",
      "उसी शादी के लिए उपराज्यपाल या मुख्यमंत्री के विवेकाधीन कोष या किसी दूसरी संस्था से मदद न ली हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the Delhi e-District portal (edistrict.delhigovt.nic.in) with your Aadhaar or voter ID.",
        "Choose 'Financial Assistance for the marriage of daughters of poor widows and orphan girls' under Women & Child Development.",
        "Upload the wedding card, 5 years' residence proof, husband's death certificate, daughter's age proof, income self-declaration and bank details, within 60 days before or after the wedding.",
      ],
      hi: [
        "आधार या वोटर ID से दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर रजिस्टर करें।",
        "महिला एवं बाल विकास में 'Financial Assistance for the marriage of daughters of poor widows and orphan girls' चुनें।",
        "शादी का कार्ड, 5 साल के निवास का प्रमाण, पति का मृत्यु प्रमाण पत्र, बेटी की उम्र का प्रमाण, आय का स्व-घोषणा पत्र और बैंक विवरण शादी से 60 दिन पहले या बाद तक अपलोड करें।",
      ],
    },
    offline: {
      en: [
        "Collect the form from your District Women & Child Development Office.",
        "Get it recommended by your MLA or MP and submit it with self-attested documents.",
      ],
      hi: [
        "अपने ज़िला महिला एवं बाल विकास कार्यालय से फ़ॉर्म लें।",
        "उस पर अपने विधायक या सांसद की सिफ़ारिश लगवाएँ और स्व-सत्यापित दस्तावेज़ों के साथ जमा करें।",
      ],
    },
  },

  officialUrl: "https://wcd.delhi.gov.in/",
  sources: [
    "https://wcd.delhi.gov.in/sites/default/files/WCD/circulars-orders/faqwdmscheme.pdf",
    "https://wcd.delhi.gov.in/sites/default/files/WCD/circulars-orders/gazettenotificationwdm2021.pdf",
    "https://edistrict.delhigovt.nic.in/in/en/Public/Services.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "active",
};

export default scheme;
