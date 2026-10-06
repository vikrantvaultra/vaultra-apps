import { all, incomeUpTo, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-old-age-pension",
  name: { en: "Vridhavastha Pension Yojana (Uttar Pradesh)", hi: "वृद्धावस्था पेंशन योजना (उत्तर प्रदेश)" },
  aka: ["UP old age pension", "Vridha Pension", "Vridhavastha Pension"],
  shortDescription: {
    en: "People aged 60 and above in Uttar Pradesh from poor families get a pension of ₹1,000 a month, paid into their bank account.",
    hi: "उत्तर प्रदेश में गरीब परिवारों के 60 साल या उससे ज़्यादा उम्र के लोगों को हर महीने ₹1,000 पेंशन, सीधे बैंक खाते में।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Social Welfare Department, Government of Uttar Pradesh",
    hi: "समाज कल्याण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "elderly", "pension", "bpl", "uttar pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("uttar-pradesh"),
    minAge(60),
    labelled(incomeUpTo(56_460), {
      en: "Family income up to ₹46,080 a year in villages or ₹56,460 in towns (or BPL)",
      hi: "परिवार की सालाना आय गाँव में ₹46,080 या शहर में ₹56,460 तक हो (या BPL)",
    }),
  ),

  details: {
    en: [
      "The old age pension is Uttar Pradesh's monthly support for poor elderly people. It combines the central National Old Age Pension Scheme with the state's own share.",
      "Each eligible person gets ₹1,000 a month. The money is sent by DBT to the Aadhaar-linked bank account, usually in quarterly instalments.",
      "The Social Welfare Department runs it. You apply online on the SSPY portal, and the application is verified by the block or town office before the pension starts.",
    ],
    hi: [
      "वृद्धावस्था पेंशन उत्तर प्रदेश में गरीब बुज़ुर्गों के लिए मासिक मदद है। इसमें केंद्र की राष्ट्रीय वृद्धावस्था पेंशन योजना और राज्य का हिस्सा दोनों मिले हैं।",
      "हर पात्र व्यक्ति को हर महीने ₹1,000 मिलते हैं। पैसा DBT से आधार से जुड़े बैंक खाते में आता है, आमतौर पर तिमाही किस्तों में।",
      "यह योजना समाज कल्याण विभाग चलाता है। आवेदन SSPY पोर्टल पर ऑनलाइन होता है, और पेंशन शुरू होने से पहले ब्लॉक या नगर कार्यालय जाँच करता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month for life.",
      "Paid directly into your Aadhaar-linked bank account.",
    ],
    hi: [
      "जीवन भर हर महीने ₹1,000।",
      "सीधे आपके आधार से जुड़े बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Uttar Pradesh.",
      "Aged 60 years or more.",
      "Family is below the poverty line, or family income is up to ₹46,080 a year in rural areas or ₹56,460 a year in urban areas.",
      "Has a bank account linked to Aadhaar.",
    ],
    hi: [
      "उत्तर प्रदेश के स्थायी निवासी।",
      "उम्र 60 साल या उससे ज़्यादा।",
      "परिवार गरीबी रेखा से नीचे हो, या परिवार की सालाना आय गाँव में ₹46,080 और शहर में ₹56,460 तक हो।",
      "आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "People who already get another government pension.",
      "Families with income above the rural or urban limit.",
    ],
    hi: [
      "जिन्हें पहले से कोई दूसरी सरकारी पेंशन मिलती है।",
      "गाँव या शहर की आय सीमा से ज़्यादा आय वाले परिवार।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to sspy-up.gov.in and choose the old age pension (Vridhavastha Pension) form.",
        "Fill in your details and upload your photo, age proof, income certificate and bank details.",
        "Submit, print the form, and give a signed copy with documents to the block office (villages) or the SDM / town office (cities) for verification.",
      ],
      hi: [
        "sspy-up.gov.in पर जाएँ और वृद्धावस्था पेंशन का फ़ॉर्म चुनें।",
        "अपनी जानकारी भरें और फ़ोटो, उम्र का सबूत, आय प्रमाण पत्र और बैंक विवरण अपलोड करें।",
        "फ़ॉर्म जमा करके प्रिंट निकालें, और दस्तख़त की हुई कॉपी दस्तावेज़ों के साथ जाँच के लिए ब्लॉक कार्यालय (गाँव) या SDM / नगर कार्यालय (शहर) में दें।",
      ],
    },
    offline: {
      en: [
        "Visit a Jan Seva Kendra (CSC) and ask them to fill the online form for you.",
        "Carry your Aadhaar, age proof, income certificate, photo and bank passbook.",
        "Keep the printed acknowledgement with the registration number.",
      ],
      hi: [
        "जन सेवा केंद्र (CSC) जाएँ और ऑनलाइन फ़ॉर्म भरवाएँ।",
        "आधार, उम्र का सबूत, आय प्रमाण पत्र, फ़ोटो और बैंक पासबुक साथ ले जाएँ।",
        "रजिस्ट्रेशन नंबर वाली छपी हुई पावती संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Age proof (birth certificate, school record, voter ID or family register)", "Income certificate", "Passport-size photo", "Aadhaar-linked bank passbook"],
    hi: ["आधार कार्ड", "उम्र का सबूत (जन्म प्रमाण पत्र, स्कूल रिकॉर्ड, वोटर ID या परिवार रजिस्टर)", "आय प्रमाण पत्र", "पासपोर्ट साइज़ फ़ोटो", "आधार से जुड़ी बैंक पासबुक"],
  },
  faqs: [
    {
      q: { en: "How often is the pension paid?", hi: "पेंशन कितने समय पर आती है?" },
      a: {
        en: "It is ₹1,000 a month, usually credited together every three months.",
        hi: "यह ₹1,000 प्रति माह है, जो आमतौर पर हर तीन महीने में एक साथ खाते में आती है।",
      },
    },
    {
      q: { en: "Can a husband and wife both get it?", hi: "क्या पति और पत्नी दोनों को पेंशन मिल सकती है?" },
      a: {
        en: "Yes, if both are 60 or older and the family meets the income limit, each can apply separately.",
        hi: "हाँ, अगर दोनों 60 साल या ज़्यादा के हैं और परिवार आय सीमा में है, तो दोनों अलग-अलग आवेदन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://sspy-up.gov.in/",
  sources: [
    "https://sspy-up.gov.in/HindiPages/oldage_h.aspx",
    "https://saharanpur.nic.in/scheme/national-old-age-pension-scheme/",
    "https://www.outlookmoney.com/retirement/news/old-age-pension-up-govt-reaches-61-lakh-beneficiaries-aims-to-cover-6750-lakh",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1995,
  status: "active",
};

export default scheme;
