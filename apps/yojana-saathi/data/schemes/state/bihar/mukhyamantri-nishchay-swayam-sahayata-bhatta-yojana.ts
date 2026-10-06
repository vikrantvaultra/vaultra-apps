import { all, ageBetween, isFalse, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-nishchay-swayam-sahayata-bhatta-yojana",
  tier: "full",
  overlapGroup: "unemployment-allowance",
  name: { en: "Mukhyamantri Nishchay Swayam Sahayata Bhatta Yojana", hi: "मुख्यमंत्री निश्चय स्वयं सहायता भत्ता योजना" },
  aka: ["MNSSBY", "Swayam Sahayata Bhatta", "Bihar berojgari bhatta", "Unemployment allowance Bihar"],
  shortDescription: {
    en: "Unemployed Bihar youth aged 20 to 25 who have passed Class 12 or graduation and are not studying get ₹1,000 a month for up to two years while they look for work.",
    hi: "बिहार के 20 से 25 साल के बेरोज़गार युवा, जो 12वीं या स्नातक पास हैं और अभी पढ़ाई नहीं कर रहे, उन्हें नौकरी ढूँढने के दौरान दो साल तक हर महीने ₹1,000 मिलते हैं।",
  },
  level: "state",
  state: "bihar",
  department: {
    en: "Youth, Employment and Skill Development Department, Government of Bihar",
    hi: "युवा, रोज़गार एवं कौशल विकास विभाग, बिहार सरकार",
  },
  categories: ["skills-employment"],
  tags: ["unemployment allowance", "berojgari bhatta", "youth", "1000 per month", "graduate", "7 nischay", "bihar"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash", maxMonths: 24 },
  ageRange: { min: 20, max: 25 },
  kundliHouse: "career",
  eligibility: all(
    residentOf("bihar"),
    ...ageBetween(20, 25),
    isFalse("student"),
    when("employment", "eq", "unemployed"),
  ),

  details: {
    en: [
      "Mukhyamantri Nishchay Swayam Sahayata Bhatta Yojana is a self-help allowance for young people in Bihar who are looking for work. It is part of the state's Saat Nischay programme and started in 2016.",
      "Eligible youth get ₹1,000 a month for up to two years. It was first meant for those who passed Class 12 and did not study further. In September 2025 it was extended to unemployed graduates in arts, science and commerce.",
      "Class 12 pass applicants must complete the 240-hour Kushal Yuva Program training (language, soft skills and computer basics) to keep getting the allowance. Applications are made on the 7 Nischay youth portal.",
    ],
    hi: [
      "मुख्यमंत्री निश्चय स्वयं सहायता भत्ता योजना बिहार के उन युवाओं के लिए है जो काम ढूँढ रहे हैं। यह राज्य के सात निश्चय कार्यक्रम का हिस्सा है और 2016 में शुरू हुई।",
      "पात्र युवाओं को दो साल तक हर महीने ₹1,000 मिलते हैं। पहले यह सिर्फ़ उन युवाओं के लिए थी जिन्होंने 12वीं पास करके आगे पढ़ाई नहीं की। सितंबर 2025 में इसे कला, विज्ञान और वाणिज्य के बेरोज़गार स्नातकों तक बढ़ा दिया गया।",
      "12वीं पास आवेदकों को भत्ता मिलते रहने के लिए 240 घंटे की कुशल युवा कार्यक्रम ट्रेनिंग (भाषा, व्यवहार कौशल और कंप्यूटर की बुनियादी जानकारी) पूरी करनी होती है। आवेदन सात निश्चय युवा पोर्टल पर होता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month.",
      "Paid for up to two years, so up to ₹24,000 in total.",
      "Money comes by DBT into your Aadhaar-linked bank account.",
      "Kushal Yuva Program training in communication, soft skills and computers.",
    ],
    hi: [
      "हर महीने ₹1,000।",
      "दो साल तक मिलता है, यानी कुल ₹24,000 तक।",
      "पैसा DBT से आपके आधार से जुड़े बैंक खाते में आता है।",
      "कुशल युवा कार्यक्रम में बातचीत, व्यवहार कौशल और कंप्यूटर की ट्रेनिंग।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Bihar.",
      "Aged 20 to 25 years.",
      "Passed Class 12, or graduated in arts, science or commerce.",
      "Not studying anywhere now.",
      "Looking for work, with no government, private or NGO job and no self-employment.",
    ],
    hi: [
      "बिहार के स्थायी निवासी।",
      "उम्र 20 से 25 साल।",
      "12वीं पास, या कला, विज्ञान या वाणिज्य में स्नातक।",
      "अभी कहीं पढ़ाई नहीं कर रहे हों।",
      "काम की तलाश में हों, कोई सरकारी, निजी या NGO की नौकरी या अपना रोज़गार न हो।",
    ],
  },
  exclusions: {
    en: [
      "Anyone currently enrolled in any course or college.",
      "Anyone who has a job or their own business.",
      "Class 12 pass applicants who do not complete the Kushal Yuva Program training.",
      "Those who already got the allowance for the full two years.",
    ],
    hi: [
      "जो अभी किसी कोर्स या कॉलेज में नामांकित हैं।",
      "जिनके पास नौकरी या अपना काम-धंधा है।",
      "12वीं पास आवेदक जो कुशल युवा कार्यक्रम की ट्रेनिंग पूरी नहीं करते।",
      "जिन्हें पहले ही पूरे दो साल का भत्ता मिल चुका है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to 7nishchay-yuvaupmission.bihar.gov.in and register with your mobile number and email.",
        "Fill in the Swayam Sahayata Bhatta form and upload your documents.",
        "Within 60 days, visit your District Registration and Counselling Centre (DRCC) on any working day between 10 am and 5 pm with original documents for verification.",
        "Make sure your bank account is seeded with Aadhaar, or the allowance won't be paid.",
      ],
      hi: [
        "7nishchay-yuvaupmission.bihar.gov.in पर जाएँ और मोबाइल नंबर व ईमेल से रजिस्टर करें।",
        "स्वयं सहायता भत्ता का फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "60 दिनों के अंदर किसी भी कार्य दिवस पर सुबह 10 से शाम 5 बजे के बीच मूल दस्तावेज़ों के साथ अपने ज़िला निबंधन एवं परामर्श केंद्र (DRCC) पर जाँच के लिए जाएँ।",
        "ध्यान रखें कि आपका बैंक खाता आधार से जुड़ा हो, नहीं तो भत्ता नहीं आएगा।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Residence certificate of Bihar",
      "Class 10 certificate (for date of birth)",
      "Class 12 or graduation marksheet and certificate",
      "Bank passbook of an Aadhaar-seeded account",
      "Passport-size photograph",
    ],
    hi: [
      "आधार कार्ड",
      "बिहार का निवास प्रमाण पत्र",
      "10वीं का प्रमाण पत्र (जन्म तिथि के लिए)",
      "12वीं या स्नातक की मार्कशीट और प्रमाण पत्र",
      "आधार से जुड़े बैंक खाते की पासबुक",
      "पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "Can graduates apply now?", hi: "क्या अब स्नातक भी आवेदन कर सकते हैं?" },
      a: {
        en: "Yes. Since September 2025, unemployed graduates in arts, science and commerce aged 20 to 25 who are not studying can also get ₹1,000 a month for up to two years.",
        hi: "हाँ। सितंबर 2025 से 20 से 25 साल के कला, विज्ञान और वाणिज्य के बेरोज़गार स्नातक, जो पढ़ाई नहीं कर रहे, उन्हें भी दो साल तक हर महीने ₹1,000 मिल सकते हैं।",
      },
    },
    {
      q: { en: "Can I get this along with a Student Credit Card loan?", hi: "क्या यह स्टूडेंट क्रेडिट कार्ड लोन के साथ मिल सकता है?" },
      a: {
        en: "Usually not at the same time, because the allowance is only for people who are not studying. If you later join a course, the allowance stops.",
        hi: "आमतौर पर एक साथ नहीं, क्योंकि भत्ता सिर्फ़ उनके लिए है जो पढ़ाई नहीं कर रहे। अगर बाद में आप किसी कोर्स में दाखिला लेते हैं, तो भत्ता बंद हो जाता है।",
      },
    },
  ],

  officialUrl: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
  sources: [
    "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    "https://www.newsonair.gov.in/bihar-cm-nitish-kumar-expands-nishchay-self-help-allowance-scheme-to-benefit-graduate-youths",
    "https://betastate.bihar.gov.in/yesd/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
