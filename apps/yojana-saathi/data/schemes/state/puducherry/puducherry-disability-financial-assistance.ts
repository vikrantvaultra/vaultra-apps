import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-disability-financial-assistance",
  overlapGroup: "disability-pension",
  name: {
    en: "Monthly Financial Assistance to Differently Abled Persons (Puducherry)",
    hi: "दिव्यांगजनों को मासिक आर्थिक सहायता (पुडुचेरी)",
  },
  aka: ["Puducherry disability pension", "Differently abled pension Puducherry"],
  shortDescription: {
    en: "Persons with 40% or more disability in Puducherry from families earning up to ₹75,000 a year get ₹3,000 to ₹4,800 a month, depending on disability level and age.",
    hi: "पुडुचेरी में 40% या ज़्यादा दिव्यांगता वाले उन लोगों को, जिनके परिवार की सालाना आय ₹75,000 तक है, दिव्यांगता के स्तर और उम्र के हिसाब से हर महीने ₹3,000 से ₹4,800 मिलते हैं।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Directorate of Social Welfare, Government of Puducherry",
    hi: "समाज कल्याण निदेशालय, पुडुचेरी सरकार",
  },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "differently abled", "divyang", "monthly assistance", "puducherry"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 3000, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("puducherry"),
    labelled(isTrue("disabled"), { en: "You have a disability", hi: "आप दिव्यांग हैं" }),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "दिव्यांगता 40% या उससे ज़्यादा" }),
    labelled(incomeUpTo(75_000), { en: "Annual income up to ₹75,000", hi: "सालाना आय ₹75,000 तक" }),
  ),

  details: {
    en: [
      "The Directorate of Social Welfare, Puducherry pays a monthly financial assistance to persons with disabilities from low-income families. The amount rises with the level of disability, and older beneficiaries get a higher rate.",
      "There is no age limit. Orthopaedic, hearing and speech, and visual disabilities of 40% or more qualify, as do intellectual disabilities (IQ below 69). The 2026-27 budget lists the differently abled persons pension among the UT's major welfare schemes.",
    ],
    hi: [
      "समाज कल्याण निदेशालय, पुडुचेरी कम आय वाले परिवारों के दिव्यांगजनों को हर महीने आर्थिक सहायता देता है। दिव्यांगता जितनी ज़्यादा, राशि उतनी ज़्यादा, और बुज़ुर्ग लाभार्थियों को ज़्यादा दर मिलती है।",
      "उम्र की कोई सीमा नहीं है। 40% या ज़्यादा की अस्थि, सुनने-बोलने और देखने से जुड़ी दिव्यांगता वाले पात्र हैं, और बौद्धिक दिव्यांगता (IQ 69 से कम) वाले भी। 2026-27 के बजट में दिव्यांगजन पेंशन को केंद्र शासित प्रदेश की प्रमुख कल्याण योजनाओं में गिना गया है।",
    ],
  },
  benefits: {
    en: [
      "40% to 65% disability: ₹3,000 a month.",
      "66% to 85% disability: ₹3,500 a month.",
      "86% to 100% disability: ₹4,500 a month.",
      "Beneficiaries aged 60 to 79: ₹3,700 a month; aged 80 and above: ₹4,800 a month.",
    ],
    hi: [
      "40% से 65% दिव्यांगता: ₹3,000 महीना।",
      "66% से 85% दिव्यांगता: ₹3,500 महीना।",
      "86% से 100% दिव्यांगता: ₹4,500 महीना।",
      "60 से 79 साल के लाभार्थी: ₹3,700 महीना; 80 साल और उससे ऊपर: ₹4,800 महीना।",
    ],
  },
  eligibilityText: {
    en: [
      "A person with 40% or more orthopaedic, hearing/speech or visual disability, or an intellectual disability with IQ below 69.",
      "Annual income not more than ₹75,000.",
      "Has lived in Puducherry for at least five years.",
      "No age limit.",
    ],
    hi: [
      "40% या ज़्यादा अस्थि, सुनने/बोलने या देखने की दिव्यांगता वाला व्यक्ति, या 69 से कम IQ वाली बौद्धिक दिव्यांगता वाला व्यक्ति।",
      "सालाना आय ₹75,000 से ज़्यादा न हो।",
      "कम से कम पाँच साल से पुडुचेरी में रह रहा हो।",
      "उम्र की कोई सीमा नहीं।",
    ],
  },
  exclusions: {
    en: [
      "Annual income above ₹75,000.",
      "Disability below 40% (or IQ of 69 and above for intellectual disability).",
      "Less than five years' residence in Puducherry.",
    ],
    hi: [
      "सालाना आय ₹75,000 से ज़्यादा हो।",
      "दिव्यांगता 40% से कम हो (बौद्धिक दिव्यांगता में IQ 69 या उससे ज़्यादा हो)।",
      "पुडुचेरी में पाँच साल से कम समय से रह रहे हों।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Download the application form from the 'Differently Abled Persons - Download Forms' page of the Social Welfare Department website, or collect it from the department office.",
        "Fill it in, attach the documents and submit it to the Directorate of Social Welfare, Puducherry, or its regional office in Karaikal, Mahe or Yanam.",
      ],
      hi: [
        "समाज कल्याण विभाग की वेबसाइट के 'Differently Abled Persons - Download Forms' पेज से आवेदन फ़ॉर्म डाउनलोड करें, या विभाग के दफ़्तर से लें।",
        "फ़ॉर्म भरें, दस्तावेज़ लगाएँ और समाज कल्याण निदेशालय, पुडुचेरी, या कराईकल, माहे या यानम के क्षेत्रीय दफ़्तर में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Disability certificate showing 40% or more",
      "Income certificate (up to ₹75,000 a year)",
      "Residence certificate (five years or more)",
    ],
    hi: [
      "40% या ज़्यादा दिव्यांगता दिखाने वाला दिव्यांगता प्रमाण पत्र",
      "आय प्रमाण पत्र (सालाना ₹75,000 तक)",
      "निवास प्रमाण पत्र (पाँच साल या ज़्यादा)",
    ],
  },
  faqs: [
    {
      q: { en: "Is there a minimum age?", hi: "क्या कोई न्यूनतम उम्र है?" },
      a: {
        en: "No. The department lists no age restriction, so children with disabilities from eligible families can also get it.",
        hi: "नहीं। विभाग ने उम्र की कोई पाबंदी नहीं रखी है, इसलिए पात्र परिवारों के दिव्यांग बच्चे भी इसे पा सकते हैं।",
      },
    },
    {
      q: { en: "Can I also get the old-age pension?", hi: "क्या मुझे वृद्धावस्था पेंशन भी मिल सकती है?" },
      a: {
        en: "Older persons with disabilities get a higher rate under this scheme itself (₹3,700 from 60 and ₹4,800 from 80), so you would normally draw just one pension.",
        hi: "बुज़ुर्ग दिव्यांगजनों को इसी योजना में ज़्यादा दर मिलती है (60 से ₹3,700 और 80 से ₹4,800), इसलिए आमतौर पर एक ही पेंशन मिलती है।",
      },
    },
  ],

  officialUrl: "https://socwelfare.py.gov.in/grant-financial-assistance-differently-abled-person",
  sources: [
    "https://socwelfare.py.gov.in/grant-financial-assistance-differently-abled-person",
    "https://socwelfare.py.gov.in/differently-abled-schemes",
    "https://www.py.gov.in/sites/default/files/cmfile2026eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
