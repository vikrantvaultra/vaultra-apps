import { all, any, female, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jharkhand-sarvjan-pension-yojana",
  overlapGroup: "old-age-pension",
  name: { en: "Mukhyamantri Sarvjan Pension Yojana", hi: "मुख्यमंत्री सर्वजन पेंशन योजना" },
  aka: ["Sarvjan Pension", "Jharkhand Sarvjan Pension", "Jharkhand old age pension", "Jharkhand universal pension"],
  shortDescription: {
    en: "Jharkhand pays ₹1,000 a month to people aged 60+, persons with disabilities, PVTG members, destitute women, and women and SC/ST people aged 50+.",
    hi: "झारखंड सरकार 60+ उम्र के लोगों, दिव्यांगजनों, आदिम जनजाति, निराश्रित महिलाओं, और 50+ उम्र की महिलाओं व SC/ST लोगों को हर महीने ₹1,000 पेंशन देती है।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Women, Child Development and Social Security, Government of Jharkhand",
    hi: "महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग, झारखंड सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "widow pension", "disability pension", "vridha pension", "sarvjan", "jharkhand"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 50 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("jharkhand"),
    labelled(
      any(
        minAge(60),
        isTrue("disabled"),
        when("caste", "eq", "pvtg"),
        all(female(), minAge(50)),
        all(when("caste", "in", ["sc", "st", "pvtg"]), minAge(50)),
      ),
      {
        en: "Aged 60+, or has a disability, or belongs to a PVTG, or is a woman aged 50+, or is SC/ST and aged 50+",
        hi: "उम्र 60+ हो, या दिव्यांग हों, या आदिम जनजाति से हों, या 50+ उम्र की महिला हों, या 50+ उम्र के SC/ST हों",
      },
    ),
  ),

  details: {
    en: [
      "Sarvjan Pension is Jharkhand's own social security pension. Before it, only a fixed number of people could get a pension. The state removed that cap so that every eligible person can be covered.",
      "It covers everyone aged 60 or more, and at any age persons with disabilities, members of Primitive Vulnerable Tribal Groups (PVTG), destitute women, people living with HIV/AIDS and transgender persons. Economically weak women and all SC/ST persons can join from age 50.",
      "The pension is ₹1,000 a month, paid into the bank account. The 2026-27 budget sets aside about ₹3,517 crore for around 34 lakh pensioners.",
    ],
    hi: [
      "सर्वजन पेंशन झारखंड सरकार की अपनी सामाजिक सुरक्षा पेंशन है। पहले सीमित संख्या में ही लोगों को पेंशन मिल पाती थी। राज्य ने यह सीमा हटा दी ताकि हर पात्र व्यक्ति को पेंशन मिल सके।",
      "इसमें 60 साल या उससे ज़्यादा उम्र के सभी लोग आते हैं, और किसी भी उम्र के दिव्यांगजन, आदिम जनजाति (PVTG) के लोग, निराश्रित महिलाएँ, HIV/AIDS से पीड़ित लोग और ट्रांसजेंडर व्यक्ति भी। आर्थिक रूप से कमज़ोर महिलाएँ और सभी SC/ST लोग 50 साल की उम्र से जुड़ सकते हैं।",
      "पेंशन हर महीने ₹1,000 है, जो बैंक खाते में आती है। 2026-27 के बजट में लगभग 34 लाख पेंशनधारियों के लिए करीब ₹3,517 करोड़ रखे गए हैं।",
    ],
  },
  benefits: {
    en: ["₹1,000 every month.", "Paid into your bank account.", "No fixed quota: every eligible person can be enrolled."],
    hi: ["हर महीने ₹1,000।", "पैसा आपके बैंक खाते में आता है।", "कोई तय कोटा नहीं: हर पात्र व्यक्ति जुड़ सकता है।"],
  },
  eligibilityText: {
    en: [
      "Resident of Jharkhand.",
      "Aged 60 or more; or",
      "A person with a disability, a PVTG member, a destitute woman, a person living with HIV/AIDS, or a transgender person (any age); or",
      "An economically weak woman aged 50 or more, or an SC/ST person aged 50 or more.",
      "Income-tax payers are not covered.",
    ],
    hi: [
      "झारखंड के निवासी।",
      "उम्र 60 साल या ज़्यादा; या",
      "दिव्यांगजन, आदिम जनजाति के सदस्य, निराश्रित महिला, HIV/AIDS से पीड़ित व्यक्ति या ट्रांसजेंडर व्यक्ति (किसी भी उम्र के); या",
      "50 साल या ज़्यादा उम्र की आर्थिक रूप से कमज़ोर महिला, या 50 साल या ज़्यादा उम्र के SC/ST व्यक्ति।",
      "आयकर देने वाले इसमें शामिल नहीं हैं।",
    ],
  },
  exclusions: {
    en: [
      "People who pay income tax.",
      "People who already get a government pension from a job, or another social security pension.",
      "Women who get Maiyan Samman Yojana cannot also get a pension from the same department.",
    ],
    hi: [
      "जो लोग आयकर देते हैं।",
      "जिन्हें नौकरी की सरकारी पेंशन या कोई दूसरी सामाजिक सुरक्षा पेंशन पहले से मिलती है।",
      "जिन महिलाओं को मंईयां सम्मान योजना मिलती है, वे इसी विभाग की पेंशन साथ में नहीं ले सकतीं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the JharSewa portal (jharsewa.jharkhand.gov.in) or visit a Pragya Kendra (CSC).",
        "Choose the social security pension service and fill in the form.",
        "Upload your documents and submit. Keep the acknowledgement number to track the application.",
      ],
      hi: [
        "झारसेवा पोर्टल (jharsewa.jharkhand.gov.in) पर जाएँ या प्रज्ञा केंद्र (CSC) पर जाएँ।",
        "सामाजिक सुरक्षा पेंशन वाली सेवा चुनें और फ़ॉर्म भरें।",
        "दस्तावेज़ अपलोड करके जमा करें। आवेदन की स्थिति देखने के लिए पावती नंबर संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "Go to your block office (or the urban local body office in towns), or a pension camp in your panchayat.",
        "Fill in the pension form and attach the documents.",
        "After verification, the pension starts in your bank account.",
      ],
      hi: [
        "अपने प्रखंड कार्यालय (शहर में नगर निकाय कार्यालय) या पंचायत में लगने वाले पेंशन शिविर में जाएँ।",
        "पेंशन फ़ॉर्म भरें और दस्तावेज़ लगाएँ।",
        "जाँच के बाद पेंशन आपके बैंक खाते में आने लगेगी।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Proof of age (voter ID, birth certificate or school record)",
      "Residence proof",
      "Bank passbook",
      "Disability certificate, caste certificate or husband's death certificate, depending on your category",
      "Passport-size photograph",
    ],
    hi: [
      "आधार कार्ड",
      "उम्र का सबूत (वोटर ID, जन्म प्रमाण पत्र या स्कूल का रिकॉर्ड)",
      "निवास का सबूत",
      "बैंक पासबुक",
      "आपकी श्रेणी के हिसाब से दिव्यांगता प्रमाण पत्र, जाति प्रमाण पत्र या पति का मृत्यु प्रमाण पत्र",
      "पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "Is this different from the central old age pension?", hi: "क्या यह केंद्र की वृद्धावस्था पेंशन से अलग है?" },
      a: {
        en: "Yes. The central Indira Gandhi pensions (NSAP) still run in Jharkhand for BPL families. Sarvjan Pension is the state's own scheme for eligible people who are not covered by those. You get one or the other, not both.",
        hi: "हाँ। केंद्र की इंदिरा गांधी पेंशन (NSAP) झारखंड में BPL परिवारों के लिए अब भी चलती है। सर्वजन पेंशन राज्य की अपनी योजना है, उन पात्र लोगों के लिए जो उसमें नहीं आते। दोनों में से एक ही मिलती है।",
      },
    },
    {
      q: { en: "I am a 52-year-old woman. Can I apply?", hi: "मैं 52 साल की महिला हूँ। क्या मैं आवेदन कर सकती हूँ?" },
      a: {
        en: "Yes, if your family is economically weak. Women can join from age 50 under this scheme.",
        hi: "हाँ, अगर आपका परिवार आर्थिक रूप से कमज़ोर है। इस योजना में महिलाएँ 50 साल की उम्र से जुड़ सकती हैं।",
      },
    },
  ],

  officialUrl: "https://jharsewa.jharkhand.gov.in/",
  sources: [
    "https://finance.jharkhand.gov.in/pdf/Budget_2026_27/Budget_Speech.pdf",
    "https://cm.jharkhand.gov.in/node/13838",
    "https://cm.jharkhand.gov.in/node/13606",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
