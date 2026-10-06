import { all, any, female, incomeUpTo, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-old-age-destitute-pension",
  overlapGroup: "old-age-pension",
  name: { en: "Puducherry Old Age and Destitute Pension", hi: "पुडुचेरी वृद्धावस्था और निराश्रित पेंशन" },
  aka: ["Mudhiyor pension", "Muthiyor Oyvoodhiyam", "Puducherry OAP", "Puducherry widow pension"],
  shortDescription: {
    en: "Monthly pension in Puducherry for people aged 55 and above, widows, deserted women, unmarried women over 40 and transgender persons from poor families.",
    hi: "पुडुचेरी में गरीब परिवारों के 55 साल और उससे ज़्यादा उम्र के लोगों, विधवाओं, परित्यक्ता महिलाओं, 40 साल से ऊपर की अविवाहित महिलाओं और ट्रांसजेंडर व्यक्तियों के लिए मासिक पेंशन।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Department of Women and Child Development, Government of Puducherry",
    hi: "महिला एवं बाल विकास विभाग, पुडुचेरी सरकार",
  },
  categories: ["pension-insurance", "social-welfare", "women-child"],
  tags: ["old age pension", "widow pension", "mudhiyor", "senior citizen", "destitute", "transgender", "puducherry"],
  benefitType: "pension",
  isDBT: false,
  ageRange: { min: 21 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("puducherry"),
    labelled(
      any(
        minAge(55),
        all(female(), when("marital", "in", ["widowed", "separated"])),
        all(female(), when("marital", "eq", "never-married"), minAge(40)),
        all(when("gender", "eq", "transgender"), minAge(21)),
      ),
      {
        en: "You are 55 or older, a widow or deserted woman, an unmarried woman over 40, or a transgender person over 21",
        hi: "आप 55 साल या उससे ज़्यादा के हैं, विधवा या परित्यक्ता महिला हैं, 40 साल से ऊपर की अविवाहित महिला हैं, या 21 साल से ऊपर के ट्रांसजेंडर व्यक्ति हैं",
      },
    ),
    labelled(incomeUpTo(75_000), { en: "Annual income up to ₹75,000", hi: "सालाना आय ₹75,000 तक" }),
  ),

  details: {
    en: [
      "The Old Age and Destitute Pension is Puducherry's main social pension, run by the Department of Women and Child Development. It helps elderly people and women without support meet small personal expenses without depending on others. About 1.97 lakh people receive it.",
      "The department's page (last updated in 2023) lists ₹2,000 a month for widows, deserted women, unmarried women, transgender persons and people aged 55 to 59; ₹2,500 for ages 60 to 79; and ₹3,500 for 80 and above. The 2026-27 budget speech says the pension has since been raised by ₹500 a month for all beneficiaries, but the new rates are not yet published on an official page, so no amount is shown here.",
    ],
    hi: [
      "वृद्धावस्था और निराश्रित पेंशन पुडुचेरी की मुख्य सामाजिक पेंशन है, जिसे महिला एवं बाल विकास विभाग चलाता है। यह बुज़ुर्गों और बेसहारा महिलाओं को दूसरों पर निर्भर हुए बिना छोटे-मोटे निजी खर्च चलाने में मदद करती है। लगभग 1.97 लाख लोगों को यह मिलती है।",
      "विभाग के पेज (आख़िरी बार 2023 में अपडेट) के अनुसार विधवाओं, परित्यक्ता महिलाओं, अविवाहित महिलाओं, ट्रांसजेंडर व्यक्तियों और 55 से 59 साल के लोगों को ₹2,000 महीना; 60 से 79 साल वालों को ₹2,500; और 80 साल व उससे ऊपर वालों को ₹3,500 मिलते हैं। 2026-27 के बजट भाषण के अनुसार इसके बाद सभी लाभार्थियों की पेंशन ₹500 महीना बढ़ाई गई है, पर नई दरें अभी किसी सरकारी पेज पर नहीं आई हैं, इसलिए यहाँ राशि नहीं दिखाई गई है।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension for life, with a higher rate for older age groups.",
      "Per the department's 2023 rates: ₹2,000 (widows, deserted, unmarried and transgender persons, and ages 55–59), ₹2,500 (ages 60–79), ₹3,500 (80+), since raised by ₹500 per the 2026-27 budget.",
      "Funeral expenses assistance is available to the family when a pensioner dies (a separate scheme of the same department).",
    ],
    hi: [
      "जीवन भर मासिक पेंशन, ज़्यादा उम्र वालों के लिए ज़्यादा दर।",
      "विभाग की 2023 की दरों के अनुसार: ₹2,000 (विधवा, परित्यक्ता, अविवाहित और ट्रांसजेंडर व्यक्ति, और 55–59 साल), ₹2,500 (60–79 साल), ₹3,500 (80+), जिनमें 2026-27 के बजट के अनुसार ₹500 की बढ़ोतरी हुई है।",
      "पेंशनभोगी की मृत्यु पर परिवार को अंतिम संस्कार के खर्च की सहायता मिलती है (उसी विभाग की अलग योजना)।",
    ],
  },
  eligibilityText: {
    en: [
      "Men and women aged 55 and above.",
      "Widows aged 18 and above.",
      "Women deserted by their husbands for the past seven years in a row.",
      "Unmarried women aged 40 and above, and transgender persons aged 21 and above.",
      "Annual income up to ₹75,000, and you must be a resident of Puducherry.",
    ],
    hi: [
      "55 साल और उससे ज़्यादा उम्र के पुरुष और महिलाएँ।",
      "18 साल और उससे ज़्यादा उम्र की विधवाएँ।",
      "वे महिलाएँ जिन्हें पति ने लगातार पिछले सात साल से छोड़ रखा है।",
      "40 साल और उससे ज़्यादा उम्र की अविवाहित महिलाएँ, और 21 साल और उससे ज़्यादा उम्र के ट्रांसजेंडर व्यक्ति।",
      "सालाना आय ₹75,000 तक हो और आप पुडुचेरी के निवासी हों।",
    ],
  },
  exclusions: {
    en: [
      "Annual income above ₹75,000.",
      "New pensions are sanctioned only when there are vacancies and funds, so eligible applicants may have to wait.",
    ],
    hi: [
      "सालाना आय ₹75,000 से ज़्यादा हो।",
      "नई पेंशन तभी मंज़ूर होती है जब जगह और पैसा उपलब्ध हो, इसलिए पात्र आवेदकों को इंतज़ार करना पड़ सकता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get your income, residence and identity certificates from the Revenue Department.",
        "Apply to the Deputy Director (Social Defence), Old Age Pension Section, Department of Women and Child Development, Puducherry. In Karaikal, apply to the Child Development Project Officer; in Mahe or Yanam, to the Welfare Officer.",
        "If there is a delay, contact the Director of Women and Child Development (Puducherry), the Collector (Karaikal) or the Regional Administrator (Mahe/Yanam).",
      ],
      hi: [
        "राजस्व विभाग से आय, निवास और पहचान प्रमाण पत्र बनवाएँ।",
        "उप निदेशक (सामाजिक सुरक्षा), वृद्धावस्था पेंशन अनुभाग, महिला एवं बाल विकास विभाग, पुडुचेरी को आवेदन दें। कराईकल में बाल विकास परियोजना अधिकारी को और माहे या यानम में कल्याण अधिकारी को आवेदन दें।",
        "देरी होने पर महिला एवं बाल विकास निदेशक (पुडुचेरी), कलेक्टर (कराईकल) या क्षेत्रीय प्रशासक (माहे/यानम) से संपर्क करें।",
      ],
    },
  },
  documents: {
    en: [
      "Identity, income (up to ₹75,000) and residence certificates",
      "Birth certificate or other proof of age",
      "Attested copy of ration card or identity card",
      "Husband's death certificate (for widows)",
      "For deserted women: a certificate from the MLA and Anganwadi worker, plus a sworn affidavit",
      "For unmarried women: a sworn affidavit; for transgender persons: proof of age and a medical certificate",
    ],
    hi: [
      "पहचान, आय (₹75,000 तक) और निवास प्रमाण पत्र",
      "जन्म प्रमाण पत्र या उम्र का कोई दूसरा सबूत",
      "राशन कार्ड या पहचान पत्र की सत्यापित प्रति",
      "पति का मृत्यु प्रमाण पत्र (विधवाओं के लिए)",
      "परित्यक्ता महिलाओं के लिए: विधायक और आंगनवाड़ी कार्यकर्ता का प्रमाण पत्र, साथ में शपथ-पत्र",
      "अविवाहित महिलाओं के लिए: शपथ-पत्र; ट्रांसजेंडर व्यक्तियों के लिए: उम्र का सबूत और मेडिकल प्रमाण पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "How much is the pension now?", hi: "अब पेंशन कितनी है?" },
      a: {
        en: "The 2026-27 budget says every beneficiary got a ₹500 a month increase over the earlier rates. Confirm your exact amount with the department, as the new rate chart is not online yet.",
        hi: "2026-27 के बजट के अनुसार हर लाभार्थी की पेंशन पहले की दरों से ₹500 महीना बढ़ी है। अपनी सही राशि विभाग से पता करें, क्योंकि नई दरों की सूची अभी ऑनलाइन नहीं है।",
      },
    },
    {
      q: { en: "Can a young widow apply?", hi: "क्या कम उम्र की विधवा आवेदन कर सकती है?" },
      a: {
        en: "Yes. Widows can apply from age 18 if their income is within the limit.",
        hi: "हाँ। आय सीमा के भीतर हो तो विधवाएँ 18 साल की उम्र से आवेदन कर सकती हैं।",
      },
    },
  ],

  officialUrl: "https://wcd.py.gov.in/old-age-persons-and-destitutes-pension",
  sources: [
    "https://wcd.py.gov.in/old-age-persons-and-destitutes-pension",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
