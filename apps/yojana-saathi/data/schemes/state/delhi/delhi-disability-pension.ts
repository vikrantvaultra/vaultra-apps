import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-disability-pension",
  overlapGroup: "disability-pension",
  name: { en: "Delhi Disability Pension (Financial Assistance to Persons with Special Needs)", hi: "दिल्ली दिव्यांग पेंशन (विशेष ज़रूरत वाले व्यक्तियों को आर्थिक सहायता)" },
  aka: ["Delhi viklang pension", "Divyang pension Delhi", "Delhi handicapped pension", "Persons with Special Needs 2009"],
  shortDescription: {
    en: "Delhi residents with 40% or more disability and family income up to ₹1 lakh a year get a monthly pension, listed at ₹2,500 a month, paid into their bank account. Any age can apply.",
    hi: "40% या उससे ज़्यादा दिव्यांगता वाले दिल्ली निवासियों को, जिनके परिवार की सालाना आय ₹1 लाख तक है, हर महीने पेंशन मिलती है। विभाग की सूची में यह ₹2,500 महीना है और बैंक खाते में आती है। किसी भी उम्र के लोग आवेदन कर सकते हैं।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Social Welfare, Govt. of NCT of Delhi", hi: "समाज कल्याण विभाग, दिल्ली सरकार" },
  categories: ["disability", "social-welfare", "pension-insurance"],
  tags: ["disability pension", "divyang", "viklang pension", "handicapped", "40 percent disability", "delhi"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2500, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("delhi"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(incomeUpTo(100_000), { en: "Family income up to ₹1 lakh a year", hi: "परिवार की सालाना आय ₹1 लाख तक" }),
  ),

  details: {
    en: [
      "Delhi's Department of Social Welfare pays a monthly pension to persons with disabilities under the Financial Assistance to Persons with Special Needs scheme (2009). It covers blindness, low vision, hearing impairment, locomotor disability, cerebral palsy, autism, intellectual disability, mental illness and people cured of leprosy.",
      "There is no age limit. The department's scheme page lists the amount as ₹2,500 a month, sent every quarter to your bank account. The Delhi Budget 2025-26 announced a rise to ₹3,000 a month; ask your District Social Welfare Office which rate is being paid now.",
      "When a beneficiary turns 60, they are moved to the Old Age Assistance scheme automatically.",
    ],
    hi: [
      "दिल्ली का समाज कल्याण विभाग 'विशेष ज़रूरत वाले व्यक्तियों को आर्थिक सहायता' योजना (2009) के तहत दिव्यांगजनों को हर महीने पेंशन देता है। इसमें दृष्टिहीनता, कम दिखना, कम सुनना, चलने-फिरने में दिव्यांगता, सेरेब्रल पाल्सी, ऑटिज़्म, बौद्धिक दिव्यांगता, मानसिक बीमारी और कुष्ठ रोग से ठीक हुए लोग शामिल हैं।",
      "उम्र की कोई सीमा नहीं है। विभाग के योजना पेज पर राशि ₹2,500 महीना लिखी है, जो हर तिमाही बैंक खाते में भेजी जाती है। दिल्ली बजट 2025-26 में इसे ₹3,000 महीना करने की घोषणा हुई थी; अभी कौन-सी दर मिल रही है, यह ज़िला समाज कल्याण कार्यालय से पूछें।",
      "60 साल की उम्र होने पर लाभार्थी अपने-आप वृद्धावस्था सहायता योजना में चले जाते हैं।",
    ],
  },
  benefits: {
    en: [
      "Monthly pension, listed by the department at ₹2,500 a month.",
      "Paid every quarter straight into your bank account (Aadhaar-based payment).",
      "Starts from the month after your complete application is received.",
      "Continues as old age assistance once you turn 60.",
    ],
    hi: [
      "हर महीने पेंशन, विभाग की सूची में ₹2,500 महीना।",
      "हर तिमाही सीधे बैंक खाते में (आधार आधारित भुगतान)।",
      "पूरा आवेदन मिलने के अगले महीने से शुरू होती है।",
      "60 साल होने पर वृद्धावस्था सहायता के रूप में जारी रहती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Disability of 40% or more, certified by the Medical Board of a government hospital.",
      "Has lived in Delhi for at least 5 years before applying.",
      "Family income from all sources is not more than ₹1 lakh a year.",
      "Has a bank account operated only by them (relaxed for minors and people under legal guardianship).",
      "Has an Aadhaar number or has enrolled for one.",
      "Any age.",
    ],
    hi: [
      "सरकारी अस्पताल के मेडिकल बोर्ड से प्रमाणित 40% या उससे ज़्यादा दिव्यांगता।",
      "आवेदन से पहले कम से कम 5 साल से दिल्ली में रह रहे हों।",
      "सभी स्रोतों से परिवार की आय सालाना ₹1 लाख से ज़्यादा न हो।",
      "ऐसा बैंक खाता हो जिसे सिर्फ़ वही चलाते हों (नाबालिग और कानूनी अभिभावक वाले लोगों को छूट)।",
      "आधार नंबर हो या आधार के लिए नामांकन कराया हो।",
      "कोई भी उम्र।",
    ],
  },
  exclusions: {
    en: [
      "Disability below 40%, or a certificate not issued by a government Medical Board.",
      "Family income above ₹1 lakh a year.",
      "Less than 5 years of living in Delhi.",
    ],
    hi: [
      "40% से कम दिव्यांगता, या सरकारी मेडिकल बोर्ड के अलावा कहीं और से जारी प्रमाण पत्र।",
      "परिवार की सालाना आय ₹1 लाख से ज़्यादा।",
      "दिल्ली में 5 साल से कम समय से रहना।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register or log in on the Delhi e-District portal (edistrict.delhigovt.nic.in).",
        "Choose 'Disability Pension Scheme' under the Department of Social Welfare.",
        "Fill in the form and upload your disability certificate, 5 years' residence proof, income self-declaration and bank details.",
        "Track the application on the portal. The department aims to decide within 45 days.",
      ],
      hi: [
        "दिल्ली ई-डिस्ट्रिक्ट पोर्टल (edistrict.delhigovt.nic.in) पर रजिस्टर या लॉग इन करें।",
        "समाज कल्याण विभाग में 'Disability Pension Scheme' चुनें।",
        "फ़ॉर्म भरें और दिव्यांगता प्रमाण पत्र, 5 साल के निवास का प्रमाण, आय का स्व-घोषणा पत्र और बैंक विवरण अपलोड करें।",
        "पोर्टल पर आवेदन की स्थिति देखें। विभाग 45 दिन में फ़ैसला करने की कोशिश करता है।",
      ],
    },
    offline: {
      en: [
        "Visit your District Social Welfare Office for help with the form.",
        "Get the form recommended by a gazetted officer, MP or MLA, and attach attested documents.",
        "The District Social Welfare Officer verifies and sanctions the pension.",
      ],
      hi: [
        "फ़ॉर्म में मदद के लिए ज़िला समाज कल्याण कार्यालय जाएँ।",
        "फ़ॉर्म पर राजपत्रित अधिकारी, सांसद या विधायक की सिफ़ारिश लगवाएँ और सत्यापित दस्तावेज़ लगाएँ।",
        "ज़िला समाज कल्याण अधिकारी जाँच करके पेंशन मंज़ूर करते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Disability certificate or UDID card from the Medical Board of a notified government hospital",
      "Proof of 5 years' residence in Delhi (ration card, voter ID, bills, bank passbook etc.)",
      "Self-declaration of family income",
      "Aadhaar",
      "Bank account details",
    ],
    hi: [
      "अधिसूचित सरकारी अस्पताल के मेडिकल बोर्ड से दिव्यांगता प्रमाण पत्र या UDID कार्ड",
      "दिल्ली में 5 साल रहने का प्रमाण (राशन कार्ड, वोटर ID, बिल, बैंक पासबुक आदि)",
      "परिवार की आय का स्व-घोषणा पत्र",
      "आधार",
      "बैंक खाते का विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "Is the pension ₹2,500 or ₹3,000?", hi: "पेंशन ₹2,500 है या ₹3,000?" },
      a: {
        en: "The department's scheme page still shows ₹2,500 a month. The Delhi Budget 2025-26 announced an increase to ₹3,000 a month. Check the amount credited in your bank account or ask your District Social Welfare Office.",
        hi: "विभाग के योजना पेज पर अब भी ₹2,500 महीना लिखा है। दिल्ली बजट 2025-26 में इसे ₹3,000 महीना करने की घोषणा हुई थी। बैंक खाते में आई राशि देखें या ज़िला समाज कल्याण कार्यालय से पूछें।",
      },
    },
    {
      q: { en: "I have no document showing 5 years in Delhi. What can I do?", hi: "मेरे पास दिल्ली में 5 साल रहने का कोई दस्तावेज़ नहीं है। क्या करूँ?" },
      a: {
        en: "You can give statements from two witnesses, such as your MLA or MP, an RWA office-bearer, an ASHA or ICDS supervisor, or two neighbours, along with their own ID and address proof.",
        hi: "आप दो गवाहों के बयान दे सकते हैं, जैसे विधायक या सांसद, RWA पदाधिकारी, आशा या ICDS सुपरवाइज़र, या दो पड़ोसी, उनके अपने पहचान और पते के प्रमाण के साथ।",
      },
    },
  ],

  officialUrl: "https://socialwelfare.delhi.gov.in/social/financial-assistance-schemes",
  sources: [
    "https://socialwelfare.delhi.gov.in/social/financial-assistance-schemes",
    "https://finance.delhi.gov.in/sites/default/files/Finance/generic_multiple_files/budget_speech_english_0.pdf",
    "https://edistrict.delhigovt.nic.in/in/en/Public/Services.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "check-status",
};

export default scheme;
