import { all, labelled, maxAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mission-vatsalya-sponsorship",
  name: { en: "Mission Vatsalya – Sponsorship Support for Children", hi: "मिशन वात्सल्य – बच्चों के लिए स्पॉन्सरशिप सहायता" },
  aka: ["Mission Vatsalya", "Sponsorship scheme", "Child Protection Services"],
  shortDescription: {
    en: "₹4,000 a month for a vulnerable child (such as an orphan or a child of a widowed mother) living with family, to help with education, food and health until age 18.",
    hi: "परिवार के साथ रहने वाले ज़रूरतमंद बच्चे (जैसे अनाथ या विधवा माँ का बच्चा) को पढ़ाई, खाने और स्वास्थ्य के लिए 18 साल तक हर महीने ₹4,000।",
  },
  level: "central",
  ministry: "women-child-development",
  categories: ["women-child", "social-welfare"],
  tags: ["orphan", "child", "sponsorship", "widow", "vatsalya", "child protection"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 4000, period: "monthly", kind: "cash" },
  kundliHouse: "daughter",
  ageRange: { max: 17 },
  // The beneficiary is the child; a parent or guardian applies on their behalf
  eligibility: all(labelled(maxAge(17), { en: "The child is under 18", hi: "बच्चे की उम्र 18 साल से कम हो" })),

  details: {
    en: [
      "Mission Vatsalya is the Ministry of Women and Child Development's programme for child protection and welfare, run with state governments through District Child Protection Units (DCPUs). Sponsorship is one of its family-based care options.",
      "Under sponsorship, a child who is at risk but can stay with their mother or relatives gets ₹4,000 a month. The money helps the family keep the child at home and in school instead of the child going into an institution, dropping out or starting work.",
      "Cases are recommended by the DCPU and approved by the district's sponsorship and foster care approval committee. Support is first given for a year and can be extended up to the age of 18, after review.",
    ],
    hi: [
      "मिशन वात्सल्य बच्चों की सुरक्षा और कल्याण के लिए महिला एवं बाल विकास मंत्रालय का कार्यक्रम है, जो राज्य सरकारों के साथ ज़िला बाल संरक्षण इकाइयों (DCPU) के ज़रिए चलता है। स्पॉन्सरशिप इसमें परिवार आधारित देखभाल का एक तरीका है।",
      "स्पॉन्सरशिप में ऐसा बच्चा जो मुश्किल हालात में है पर अपनी माँ या रिश्तेदारों के साथ रह सकता है, उसे हर महीने ₹4,000 मिलते हैं। इस पैसे से परिवार बच्चे को घर और स्कूल में रख पाता है, ताकि उसे संस्था में न जाना पड़े, पढ़ाई न छूटे या काम पर न लगना पड़े।",
      "मामलों की सिफ़ारिश DCPU करती है और ज़िले की स्पॉन्सरशिप और फ़ॉस्टर केयर अनुमोदन समिति मंज़ूरी देती है। मदद पहले एक साल के लिए मिलती है और समीक्षा के बाद 18 साल की उम्र तक बढ़ाई जा सकती है।",
    ],
  },
  benefits: {
    en: [
      "₹4,000 per month per child, paid into a bank account (of the child jointly with the mother or guardian).",
      "Support for at least one year, extendable up to the child's 18th birthday.",
      "Regular follow-up by child protection officials to make sure the child is in school and safe.",
    ],
    hi: [
      "हर बच्चे को हर महीने ₹4,000, बैंक खाते में (बच्चे और माँ या अभिभावक के संयुक्त खाते में)।",
      "कम से कम एक साल की मदद, जिसे बच्चे के 18 साल का होने तक बढ़ाया जा सकता है।",
      "बाल संरक्षण अधिकारी नियमित रूप से देखते हैं कि बच्चा स्कूल में है और सुरक्षित है।",
    ],
  },
  eligibilityText: {
    en: [
      "Child is below 18 years of age and lives with the mother, extended family or relatives.",
      "Child is an orphan, or the mother is a widow, divorced or abandoned, or the parents are seriously ill, disabled or unable to care for the child.",
      "Other children in need of care and protection may also qualify, such as victims of child marriage, trafficking, child labour, abuse, disasters or HIV/AIDS, and children covered under PM CARES for Children.",
      "For preventive sponsorship, annual family income should not exceed ₹72,000 in rural areas or ₹96,000 in other areas.",
    ],
    hi: [
      "बच्चा 18 साल से कम उम्र का है और माँ, बड़े परिवार या रिश्तेदारों के साथ रहता है।",
      "बच्चा अनाथ है, या माँ विधवा, तलाक़शुदा या छोड़ी हुई है, या माता-पिता गंभीर बीमार, दिव्यांग या बच्चे की देखभाल करने में असमर्थ हैं।",
      "देखभाल और सुरक्षा की ज़रूरत वाले दूसरे बच्चे भी पात्र हो सकते हैं, जैसे बाल विवाह, तस्करी, बाल मज़दूरी, शोषण, आपदा या HIV/AIDS से प्रभावित बच्चे, और PM CARES for Children में शामिल बच्चे।",
      "रोकथाम वाली स्पॉन्सरशिप के लिए परिवार की सालाना आय ग्रामीण क्षेत्र में ₹72,000 और दूसरे क्षेत्रों में ₹96,000 से ज़्यादा न हो।",
    ],
  },
  exclusions: {
    en: [
      "Children aged 18 or above.",
      "Families with income above the limits (for preventive sponsorship).",
      "Each district can support only a limited number of children, so not every eligible child may be selected.",
    ],
    hi: [
      "18 साल या उससे ज़्यादा उम्र के बच्चे।",
      "जिन परिवारों की आय सीमा से ज़्यादा है (रोकथाम वाली स्पॉन्सरशिप के लिए)।",
      "हर ज़िले में सीमित संख्या में ही बच्चों को मदद मिल सकती है, इसलिए हर पात्र बच्चा चुना जाए, ऐसा ज़रूरी नहीं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the District Child Protection Unit (DCPU) at your district office, or the Child Welfare Committee. You can also call Child Helpline 1098 for guidance.",
        "Fill in the sponsorship application form and submit it with the documents.",
        "A child protection officer visits your home to check the situation. If the committee approves, ₹4,000 a month starts coming to the bank account.",
      ],
      hi: [
        "अपने ज़िला कार्यालय में ज़िला बाल संरक्षण इकाई (DCPU) या बाल कल्याण समिति से संपर्क करें। मार्गदर्शन के लिए चाइल्ड हेल्पलाइन 1098 पर भी फ़ोन कर सकते हैं।",
        "स्पॉन्सरशिप आवेदन फ़ॉर्म भरें और दस्तावेज़ों के साथ जमा करें।",
        "बाल संरक्षण अधिकारी घर आकर हालात देखते हैं। समिति की मंज़ूरी के बाद हर महीने ₹4,000 बैंक खाते में आने लगते हैं।",
      ],
    },
  },
  documents: {
    en: ["Child's birth certificate or age proof", "Death certificate of parent(s), or proof of divorce, abandonment or illness, as applicable", "Income certificate of the family", "Aadhaar of the child and mother or guardian", "Bank account details (joint account of child and mother or guardian)", "School enrolment certificate"],
    hi: ["बच्चे का जन्म प्रमाण पत्र या उम्र का सबूत", "माता या पिता का मृत्यु प्रमाण पत्र, या तलाक़, छोड़ देने या बीमारी का सबूत, जो लागू हो", "परिवार का आय प्रमाण पत्र", "बच्चे और माँ या अभिभावक का आधार", "बैंक खाते की जानकारी (बच्चे और माँ या अभिभावक का संयुक्त खाता)", "स्कूल में दाख़िले का प्रमाण पत्र"],
  },
  faqs: [
    {
      q: { en: "Can a child living with grandparents get this?", hi: "क्या दादा-दादी या नाना-नानी के साथ रहने वाले बच्चे को यह मिल सकता है?" },
      a: {
        en: "Yes. Sponsorship is meant for vulnerable children living with their extended family or relatives, such as grandparents, uncles or aunts.",
        hi: "हाँ। स्पॉन्सरशिप उन ज़रूरतमंद बच्चों के लिए है जो बड़े परिवार या रिश्तेदारों, जैसे दादा-दादी, नाना-नानी, चाचा या मामा-मौसी के साथ रहते हैं।",
      },
    },
    {
      q: { en: "Does the support stop if the child leaves school?", hi: "अगर बच्चा स्कूल छोड़ दे तो क्या मदद बंद हो जाएगी?" },
      a: {
        en: "The aim is to keep children in school, and each case is reviewed regularly. If the child stops going to school, the committee may review or stop the support.",
        hi: "मक़सद बच्चों को स्कूल में रखना है, और हर मामले की नियमित समीक्षा होती है। अगर बच्चा स्कूल जाना बंद कर दे, तो समिति मदद की समीक्षा कर सकती है या उसे बंद कर सकती है।",
      },
    },
  ],

  officialUrl: "https://missionvatsalya.wcd.gov.in/",
  sources: [
    "https://missionvatsalya.wcd.gov.in/public/pdf/children-related-law/vatsalyaguideline.pdf",
    "https://www.wcd.gov.in/public/offerings/mission-vatsalya-scheme",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1942870",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "check-status",
};

export default scheme;
