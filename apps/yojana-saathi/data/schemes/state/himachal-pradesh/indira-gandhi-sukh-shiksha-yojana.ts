import { all, any, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indira-gandhi-sukh-shiksha-yojana",
  tier: "compact",
  name: { en: "Indira Gandhi Sukh Shiksha Yojana", hi: "इंदिरा गांधी सुख शिक्षा योजना" },
  aka: ["Sukh Shiksha Yojana", "Sukh Shiksha"],
  shortDescription: {
    en: "Children of widows, destitute or abandoned women and of parents with 70%+ disability in Himachal get ₹1,000 a month till 18, then free college fees and hostel up to 27, if family income is up to ₹1 lakh.",
    hi: "हिमाचल में विधवा, निराश्रित या परित्यक्ता महिलाओं और 70%+ दिव्यांग माता-पिता के बच्चों को 18 साल तक ₹1,000 महीना, फिर 27 साल तक कॉलेज की फ़ीस और हॉस्टल का ख़र्च मिलता है, अगर परिवार की आय ₹1 लाख तक हो।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Directorate of Women and Child Development, Government of Himachal Pradesh",
    hi: "महिला एवं बाल विकास निदेशालय, हिमाचल प्रदेश सरकार",
  },
  categories: ["education", "women-child"],
  tags: ["widow children", "education", "fee", "hostel", "sukh shiksha", "himachal"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("himachal-pradesh"),
    labelled(incomeUpTo(100_000), { en: "Family income up to ₹1 lakh a year from all sources", hi: "सभी स्रोतों से परिवार की सालाना आय ₹1 लाख तक हो" }),
    labelled(
      any(all(female(), when("marital", "in", ["widowed", "divorced", "separated"])), when("disabilityPct", "gte", 70)),
      {
        en: "You are a widow, destitute or abandoned woman, or a parent with 70% or more disability, with children",
        hi: "आप विधवा, निराश्रित या परित्यक्ता महिला हों, या 70% या ज़्यादा दिव्यांगता वाले माता/पिता हों, और आपके बच्चे हों",
      },
    ),
  ),

  details: {
    en: [
      "Indira Gandhi Sukh Shiksha Yojana was notified on 3 September 2024 so that children of widows, destitute and abandoned women, and of parents with severe disability, can study without money worries. About 22,000 children are benefiting.",
      "Up to age 18 the family gets ₹1,000 a month per child. From 18 to 27 the government pays for college, diploma, nursing and other professional courses in government institutions in the state, plus government hostel and mess fees, or ₹3,000 a month for rent if there is no hostel. From 2026-27, the budget says full costs will also be met for admissions to institutions like IIT, NIT, IIM, AIIMS and NLUs outside the state.",
    ],
    hi: [
      "इंदिरा गांधी सुख शिक्षा योजना 3 सितंबर 2024 को अधिसूचित हुई, ताकि विधवा, निराश्रित और परित्यक्ता महिलाओं के बच्चे और गंभीर दिव्यांगता वाले माता-पिता के बच्चे बिना पैसों की चिंता के पढ़ सकें। लगभग 22,000 बच्चे इसका लाभ ले रहे हैं।",
      "18 साल तक हर बच्चे के लिए ₹1,000 महीना मिलता है। 18 से 27 साल तक सरकार राज्य के सरकारी संस्थानों में कॉलेज, डिप्लोमा, नर्सिंग और दूसरे व्यावसायिक कोर्स की फ़ीस, और सरकारी हॉस्टल व मेस का ख़र्च देती है, या हॉस्टल न हो तो किराए के लिए ₹3,000 महीना। बजट के अनुसार 2026-27 से राज्य के बाहर IIT, NIT, IIM, AIIMS और NLU जैसे संस्थानों में दाख़िले पर भी पूरा ख़र्च मिलेगा।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month per child up to 18 years of age.",
      "From 18 to 27: full course fees for graduation, post-graduation, diploma, PhD, JBT, NTT, nursing or other professional courses in government institutions in Himachal.",
      "Government hostel and mess fees, or ₹3,000 a month for rent/PG if no hostel is available.",
    ],
    hi: [
      "18 साल की उम्र तक हर बच्चे को ₹1,000 महीना।",
      "18 से 27 साल तक: हिमाचल के सरकारी संस्थानों में स्नातक, स्नातकोत्तर, डिप्लोमा, PhD, JBT, NTT, नर्सिंग या दूसरे व्यावसायिक कोर्स की पूरी फ़ीस।",
      "सरकारी हॉस्टल और मेस का शुल्क, या हॉस्टल न होने पर किराए/PG के लिए ₹3,000 महीना।",
    ],
  },
  eligibilityText: {
    en: [
      "Children of widows, destitute or abandoned women, or of parents with 70% or more disability, living in Himachal Pradesh.",
      "Family income up to ₹1 lakh a year from all sources.",
      "Monthly help for children up to 18; education costs for those aged 18 to 27 studying in government institutions in the state.",
    ],
    hi: [
      "हिमाचल प्रदेश में रहने वाली विधवा, निराश्रित या परित्यक्ता महिलाओं के, या 70% या ज़्यादा दिव्यांगता वाले माता-पिता के बच्चे।",
      "सभी स्रोतों से परिवार की सालाना आय ₹1 लाख तक।",
      "18 साल तक के बच्चों को मासिक मदद; राज्य के सरकारी संस्थानों में पढ़ रहे 18 से 27 साल वालों को पढ़ाई का ख़र्च।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply through the Himachal e-District portal (edistrict.hp.gov.in) or from the scheme page on wcd.hp.gov.in.",
        "Upload the widow/destitute/disability proof, income certificate, children's details and bank account.",
        "Download the confirmation receipt and track the status online.",
      ],
      hi: [
        "हिमाचल ई-डिस्ट्रिक्ट पोर्टल (edistrict.hp.gov.in) से या wcd.hp.gov.in पर योजना पेज से आवेदन करें।",
        "विधवा/निराश्रित/दिव्यांगता का प्रमाण, आय प्रमाण पत्र, बच्चों का विवरण और बैंक खाता अपलोड करें।",
        "पुष्टि की रसीद डाउनलोड करें और स्थिति ऑनलाइन देखें।",
      ],
    },
  },

  officialUrl: "https://wcd.hp.gov.in/schemes/view?schemeId=27",
  sources: ["https://wcd.hp.gov.in/schemes/view?schemeId=27", "https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
