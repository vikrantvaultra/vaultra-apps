import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "palanhar-yojana",
  name: { en: "Palanhar Yojana", hi: "पालनहार योजना" },
  aka: ["Palanhaar Yojana", "Palanhar scheme Rajasthan"],
  shortDescription: {
    en: "Families in Rajasthan raising orphans or other vulnerable children get ₹750 to ₹2,500 a month per child until the child turns 18.",
    hi: "राजस्थान में अनाथ या दूसरे ज़रूरतमंद बच्चों को पालने वाले परिवारों को हर बच्चे के लिए 18 साल की उम्र तक हर महीने ₹750 से ₹2,500 मिलते हैं।",
  },
  level: "state",
  state: "rajasthan",
  department: { en: "Social Justice and Empowerment Department, Government of Rajasthan", hi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["orphan", "child", "palanhar", "widow", "foster care", "monthly allowance", "rajasthan"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 750, period: "monthly", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("rajasthan"),
    labelled(incomeUpTo(120_000), { en: "The caregiver family's income is up to ₹1.2 lakh a year", hi: "पालनहार परिवार की सालाना आय ₹1.2 लाख तक हो" }),
  ),

  details: {
    en: [
      "Palanhar Yojana helps relatives or other people (the 'palanhar', or caregiver) bring up orphans and children in difficult family situations at home, instead of in an institution.",
      "The caregiver gets a fixed monthly amount for each child until the child is 18. Orphans (both parents dead) get a higher rate. The child must go to an Anganwadi (up to age 6) or school.",
      "The Social Justice and Empowerment Department runs the scheme. Applications are made online through e-Mitra, and the money is paid every month into the caregiver's bank account.",
    ],
    hi: [
      "पालनहार योजना रिश्तेदारों या दूसरे लोगों (पालनहार) को अनाथ और मुश्किल हालात वाले परिवारों के बच्चों को किसी संस्था के बजाय घर पर पालने में मदद करती है।",
      "पालनहार को हर बच्चे के लिए 18 साल की उम्र तक हर महीने तय राशि मिलती है। अनाथ बच्चों (जिनके माता-पिता दोनों नहीं हैं) को ज़्यादा राशि मिलती है। बच्चे का आंगनवाड़ी (6 साल तक) या स्कूल जाना ज़रूरी है।",
      "यह योजना सामाजिक न्याय एवं अधिकारिता विभाग चलाता है। आवेदन ई-मित्र से ऑनलाइन होता है और पैसा हर महीने पालनहार के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "Orphan children: ₹1,500 a month (age 0–6) and ₹2,500 a month (age 6–18).",
      "Children in the other eligible groups: ₹750 a month (age 0–6) and ₹1,500 a month (age 6–18).",
      "Paid every month into the caregiver's bank account until the child turns 18.",
    ],
    hi: [
      "अनाथ बच्चे: ₹1,500 महीना (0–6 साल) और ₹2,500 महीना (6–18 साल)।",
      "दूसरे पात्र वर्गों के बच्चे: ₹750 महीना (0–6 साल) और ₹1,500 महीना (6–18 साल)।",
      "बच्चे के 18 साल का होने तक हर महीने पालनहार के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "The caregiver lives in Rajasthan and the family's income is up to ₹1.2 lakh a year.",
      "Eligible children include orphans; children of a parent sentenced to death or life imprisonment; children of widows getting a pension; children of a remarried widow; children of parents with HIV/AIDS, leprosy or silicosis; children of parents with a disability; and children of divorced or abandoned women getting a pension.",
      "Children aged 3–6 must be enrolled at an Anganwadi, and children aged 6–18 must be going to school.",
    ],
    hi: [
      "पालनहार राजस्थान में रहता हो और परिवार की सालाना आय ₹1.2 लाख तक हो।",
      "पात्र बच्चों में शामिल हैं: अनाथ; मौत की सज़ा या उम्रक़ैद पाए माता-पिता के बच्चे; पेंशन पाने वाली विधवा के बच्चे; पुनर्विवाहित विधवा के बच्चे; HIV/AIDS, कुष्ठ रोग या सिलिकोसिस से पीड़ित माता-पिता के बच्चे; दिव्यांग माता-पिता के बच्चे; और पेंशन पाने वाली तलाकशुदा या परित्यक्ता महिला के बच्चे।",
      "3–6 साल के बच्चे का आंगनवाड़ी में और 6–18 साल के बच्चे का स्कूल में नाम होना ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "Children aged 18 or older.",
      "Children who have stopped going to school or the Anganwadi.",
      "Families with income above ₹1.2 lakh a year.",
    ],
    hi: [
      "18 साल या उससे बड़े बच्चे।",
      "जिन बच्चों ने स्कूल या आंगनवाड़ी जाना छोड़ दिया हो।",
      "जिन परिवारों की सालाना आय ₹1.2 लाख से ज़्यादा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Visit an e-Mitra kiosk (or log in to the SSO portal) with the documents.",
        "Fill in the Palanhar application on the SJMS Palanhar portal with the caregiver's Jan Aadhaar and the child's details.",
        "Each year, submit the child's school/Anganwadi certificate and complete verification so the payment continues.",
      ],
      hi: [
        "दस्तावेज़ लेकर ई-मित्र केंद्र पर जाएँ (या SSO पोर्टल पर लॉग इन करें)।",
        "SJMS पालनहार पोर्टल पर पालनहार के जन आधार और बच्चे के विवरण से आवेदन भरें।",
        "भुगतान जारी रहे, इसके लिए हर साल बच्चे का स्कूल/आंगनवाड़ी प्रमाण पत्र दें और सत्यापन कराएँ।",
      ],
    },
  },
  documents: {
    en: [
      "Jan Aadhaar and Aadhaar of the caregiver and child",
      "Proof of the child's category, such as parents' death certificates or the mother's pension order",
      "Income certificate",
      "School or Anganwadi enrolment certificate",
      "Bank account details of the caregiver",
    ],
    hi: [
      "पालनहार और बच्चे का जन आधार और आधार",
      "बच्चे की श्रेणी का प्रमाण, जैसे माता-पिता का मृत्यु प्रमाण पत्र या माँ का पेंशन आदेश",
      "आय प्रमाण पत्र",
      "स्कूल या आंगनवाड़ी में नाम लिखे होने का प्रमाण पत्र",
      "पालनहार के बैंक खाते का विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "Who can be a palanhar?", hi: "पालनहार कौन बन सकता है?" },
      a: {
        en: "Usually a relative, such as a grandparent, uncle or aunt, or the surviving parent in some categories, who is raising the child at home.",
        hi: "आमतौर पर कोई रिश्तेदार, जैसे दादा-दादी, नाना-नानी, चाचा-चाची या मामा-मामी, या कुछ श्रेणियों में जीवित माता या पिता, जो बच्चे को घर पर पाल रहे हों।",
      },
    },
    {
      q: { en: "Is there a limit on the number of children?", hi: "क्या बच्चों की संख्या की कोई सीमा है?" },
      a: {
        en: "For some categories, such as children of widows, the benefit is limited to a set number of children per family. Ask at e-Mitra or the block social security office for your category.",
        hi: "कुछ श्रेणियों, जैसे विधवा के बच्चों, में एक परिवार के तय संख्या तक बच्चों को ही लाभ मिलता है। अपनी श्रेणी के बारे में ई-मित्र या ब्लॉक सामाजिक सुरक्षा कार्यालय में पूछें।",
      },
    },
  ],

  officialUrl: "https://sjmsnew.rajasthan.gov.in/palanhaar/",
  sources: [
    "https://sje.rajasthan.gov.in/siteadmin/Uploads/202308212258132944.pdf",
    "https://sjmsnew.rajasthan.gov.in/palanhaar/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2005,
  status: "active",
};

export default scheme;
