import { all, ageBetween, isTrue, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indira-gandhi-disability-pension",
  name: { en: "Indira Gandhi National Disability Pension Scheme", hi: "इंदिरा गांधी राष्ट्रीय दिव्यांग पेंशन योजना" },
  aka: ["IGNDPS", "Viklang pension", "Divyang pension", "NSAP"],
  shortDescription: {
    en: "BPL persons aged 18 to 79 with severe or multiple disabilities (80% or more) get ₹300 a month from the Centre, with most states adding their own top-up.",
    hi: "80% या उससे ज़्यादा गंभीर या बहु-दिव्यांगता वाले 18 से 79 साल के BPL लोगों को केंद्र से हर महीने ₹300, और ज़्यादातर राज्य इसमें अपनी राशि जोड़ते हैं।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["disability", "social-welfare", "pension-insurance"],
  tags: ["disability pension", "divyang", "viklang", "nsap", "bpl", "pension"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 300, period: "monthly", kind: "pension" },
  ageRange: { min: 18, max: 79 },
  kundliHouse: "health",
  eligibility: all(
    labelled(isTrue("disabled"), { en: "You have a disability", hi: "आप दिव्यांग हैं" }),
    labelled(when("disabilityPct", "gte", 80), { en: "Disability of 80% or more (severe or multiple)", hi: "80% या उससे ज़्यादा दिव्यांगता (गंभीर या बहु-दिव्यांगता)" }),
    ...ageBetween(18, 79),
    labelled(isTrue("bpl"), { en: "Your family is below the poverty line (BPL)", hi: "आपका परिवार गरीबी रेखा से नीचे (BPL) है" }),
  ),

  details: {
    en: [
      "The Indira Gandhi National Disability Pension Scheme is part of the National Social Assistance Programme (NSAP), run by the Ministry of Rural Development. It gives a monthly pension to people with severe or multiple disabilities from poor families.",
      "The Centre pays ₹300 a month. States and UTs run the scheme and most add their own money, so the amount you actually receive is often much higher and depends on your state.",
      "Applications are handled by the social welfare or social security department of your state, through the block or municipal office.",
    ],
    hi: [
      "इंदिरा गांधी राष्ट्रीय दिव्यांग पेंशन योजना ग्रामीण विकास मंत्रालय के राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) का हिस्सा है। यह गरीब परिवारों के गंभीर या बहु-दिव्यांग लोगों को मासिक पेंशन देती है।",
      "केंद्र हर महीने ₹300 देता है। योजना राज्य चलाते हैं और ज़्यादातर अपनी ओर से राशि जोड़ते हैं, इसलिए असल में मिलने वाली रकम अक्सर ज़्यादा होती है और राज्य पर निर्भर करती है।",
      "आवेदन आपके राज्य का समाज कल्याण या सामाजिक सुरक्षा विभाग ब्लॉक या नगर निकाय कार्यालय के ज़रिए लेता है।",
    ],
  },
  benefits: {
    en: [
      "₹300 a month from the Central Government.",
      "Extra top-up from most state governments on top of the central share.",
      "Money paid straight into your bank or post office account.",
    ],
    hi: [
      "केंद्र सरकार से हर महीने ₹300।",
      "ज़्यादातर राज्य सरकारें केंद्र के हिस्से के ऊपर अपनी राशि जोड़ती हैं।",
      "पैसा सीधे आपके बैंक या डाकघर खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 to 79 years.",
      "Has severe or multiple disabilities of 80% or more, with a valid disability certificate.",
      "Belongs to a BPL household as per the government list.",
    ],
    hi: [
      "उम्र 18 से 79 साल हो।",
      "80% या उससे ज़्यादा गंभीर या बहु-दिव्यांगता हो और मान्य दिव्यांगता प्रमाणपत्र हो।",
      "सरकारी सूची के अनुसार BPL परिवार से हों।",
    ],
  },
  exclusions: {
    en: [
      "People with less than 80% disability (many states have their own pension for them).",
      "Families not on the BPL list.",
      "At 80, you move to the old age pension under NSAP instead.",
    ],
    hi: [
      "80% से कम दिव्यांगता वाले लोग (कई राज्यों में उनके लिए अलग पेंशन है)।",
      "जो परिवार BPL सूची में नहीं हैं।",
      "80 साल का होने पर आप NSAP की वृद्धावस्था पेंशन में चले जाते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the application form from your gram panchayat, block office or municipal office.",
        "Attach your disability certificate (or UDID card), age proof, BPL proof and bank details.",
        "Submit it to the block development officer or the social welfare office. After verification, the pension starts in your account.",
      ],
      hi: [
        "ग्राम पंचायत, ब्लॉक कार्यालय या नगर निकाय कार्यालय से आवेदन फ़ॉर्म लें।",
        "दिव्यांगता प्रमाणपत्र (या UDID कार्ड), उम्र का प्रमाण, BPL प्रमाण और बैंक विवरण लगाएँ।",
        "फ़ॉर्म खंड विकास अधिकारी या समाज कल्याण कार्यालय में जमा करें। जाँच के बाद पेंशन खाते में आने लगती है।",
      ],
    },
    online: {
      en: [
        "Many states accept applications on their social welfare or e-district portal.",
        "Register, fill in the disability pension form and upload the documents.",
        "Track your application status on the same portal.",
      ],
      hi: [
        "कई राज्य अपने समाज कल्याण या ई-डिस्ट्रिक्ट पोर्टल पर आवेदन लेते हैं।",
        "रजिस्टर करें, दिव्यांग पेंशन फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "उसी पोर्टल पर आवेदन की स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: ["Disability certificate or UDID card (80% or more)", "Aadhaar", "Age proof", "BPL card or proof", "Bank or post office account details", "Passport-size photo"],
    hi: ["दिव्यांगता प्रमाणपत्र या UDID कार्ड (80% या ज़्यादा)", "आधार", "उम्र का प्रमाण", "BPL कार्ड या प्रमाण", "बैंक या डाकघर खाते का विवरण", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Why do I get more than ₹300?", hi: "मुझे ₹300 से ज़्यादा क्यों मिलता है?" },
      a: {
        en: "₹300 is only the Centre's share. Your state adds its own amount, so the total differs from state to state.",
        hi: "₹300 सिर्फ़ केंद्र का हिस्सा है। आपका राज्य अपनी राशि जोड़ता है, इसलिए कुल रकम हर राज्य में अलग होती है।",
      },
    },
    {
      q: { en: "My disability is 60%. Can I apply?", hi: "मेरी दिव्यांगता 60% है। क्या मैं आवेदन कर सकता/सकती हूँ?" },
      a: {
        en: "Not under this central scheme, which needs 80% or more. Check your state's own disability pension, which often has a lower limit such as 40%.",
        hi: "इस केंद्रीय योजना में नहीं, क्योंकि इसमें 80% या ज़्यादा चाहिए। अपने राज्य की दिव्यांग पेंशन देखें, जिसमें अक्सर 40% जैसी कम सीमा होती है।",
      },
    },
  ],

  officialUrl: "https://nsap.dord.gov.in/",
  sources: [
    "https://nsap.dord.gov.in/",
    "https://indore.nic.in/en/scheme/indira-gandhi-national-disabled-pension-scheme/",
    "https://www.myscheme.gov.in/schemes/igndps",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2009,
  status: "active",
};

export default scheme;
