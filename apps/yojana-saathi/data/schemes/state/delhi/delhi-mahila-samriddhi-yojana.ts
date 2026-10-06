import { all, ageBetween, female, incomeUpTo, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "delhi-mahila-samriddhi-yojana",
  name: { en: "Delhi Lakshmi Yojana (formerly Mahila Samriddhi Yojana)", hi: "दिल्ली लक्ष्मी योजना (पहले महिला समृद्धि योजना)" },
  aka: ["Delhi Lakshmi Yojana", "DLY", "Mahila Samriddhi Yojana", "Delhi 2500 scheme"],
  shortDescription: {
    en: "₹2,500 a month for women aged 21 to 60 in Delhi from families earning up to ₹2.5 lakh a year, paid into a CBDC wallet and a locked savings deposit.",
    hi: "दिल्ली में ₹2.5 लाख सालाना तक आय वाले परिवारों की 21 से 60 साल की महिलाओं को हर महीने ₹2,500, जो CBDC वॉलेट और लॉक बचत जमा में आते हैं।",
  },
  level: "state",
  state: "delhi",
  department: { en: "Department of Women and Child Development, Govt. of NCT of Delhi", hi: "महिला एवं बाल विकास विभाग, दिल्ली सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "2500", "monthly cash", "lakshmi", "mahila samriddhi", "delhi"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2500, period: "monthly", kind: "cash" },
  ageRange: { min: 21, max: 60 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("delhi"),
    female(),
    ...ageBetween(21, 60),
    labelled(incomeUpTo(250_000), { en: "Family income up to ₹2.5 lakh a year", hi: "परिवार की सालाना आय ₹2.5 लाख तक" }),
    labelled(notGovtEmployee(), { en: "Not a government employee (nor anyone in the family)", hi: "सरकारी कर्मचारी न हों (न ही परिवार में कोई)" }),
  ),

  details: {
    en: [
      "The Mahila Samriddhi Yojana, notified by the Delhi government in April 2025, was renamed the Delhi Lakshmi Yojana from 1 August 2026. It gives ₹2,500 a month to the eldest eligible woman in poorer Delhi households.",
      "You choose how the money comes: ₹1,000 a month into a CBDC (digital rupee) wallet for spending plus ₹1,500 into a recurring or fixed deposit, or the full ₹2,500 into the deposit. The deposit is locked until 31 July 2029.",
      "Registration is online on dly.delhi.gov.in and stays open all year. Applications received by the last day of a month count for payment from the next month. The scheme runs initially for three years.",
    ],
    hi: [
      "दिल्ली सरकार ने अप्रैल 2025 में महिला समृद्धि योजना अधिसूचित की थी, जिसका नाम 1 अगस्त 2026 से दिल्ली लक्ष्मी योजना कर दिया गया। इसमें दिल्ली के कम आय वाले परिवारों की सबसे बड़ी पात्र महिला को हर महीने ₹2,500 मिलते हैं।",
      "पैसा कैसे मिले, यह आप चुनती हैं: ₹1,000 महीना ख़र्च के लिए CBDC (डिजिटल रुपया) वॉलेट में और ₹1,500 रेकरिंग या फ़िक्स्ड डिपॉज़िट में, या पूरे ₹2,500 डिपॉज़िट में। डिपॉज़िट 31 जुलाई 2029 तक लॉक रहता है।",
      "रजिस्ट्रेशन dly.delhi.gov.in पर ऑनलाइन होता है और पूरे साल खुला रहता है। किसी महीने की आख़िरी तारीख तक मिले आवेदन पर अगले महीने से पैसा मिलता है। योजना शुरू में तीन साल के लिए है।",
    ],
  },
  benefits: {
    en: [
      "₹2,500 every month.",
      "Option A: ₹1,000 a month to spend from a CBDC wallet and ₹1,500 saved in a deposit.",
      "Option B: the full ₹2,500 saved in a deposit each month.",
      "The deposit, with interest, is released into the CBDC wallet after the lock-in ends on 31 July 2029.",
    ],
    hi: [
      "हर महीने ₹2,500।",
      "विकल्प A: ख़र्च के लिए CBDC वॉलेट में ₹1,000 महीना और डिपॉज़िट में ₹1,500 की बचत।",
      "विकल्प B: हर महीने पूरे ₹2,500 डिपॉज़िट में बचत।",
      "31 जुलाई 2029 को लॉक-इन ख़त्म होने के बाद ब्याज समेत डिपॉज़िट की रकम CBDC वॉलेट में आती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman aged 21 to 60 on the date of applying, and the eldest eligible woman in the family.",
      "She, her husband or one of her parents has lived in Delhi for at least 10 years, and she is a registered voter in Delhi.",
      "Annual family income is not more than ₹2.5 lakh.",
      "The family used no more than 2,400 units of electricity in the last 12 months.",
      "Has a bank account in a bank that supports the CBDC wallet (the partner bank can open one).",
    ],
    hi: [
      "आवेदन की तारीख पर 21 से 60 साल की महिला, जो परिवार की सबसे बड़ी पात्र महिला हो।",
      "वह, उसके पति या माता-पिता में से कोई कम से कम 10 साल से दिल्ली में रहता हो, और वह दिल्ली की पंजीकृत मतदाता हो।",
      "परिवार की सालाना आय ₹2.5 लाख से ज़्यादा न हो।",
      "पिछले 12 महीनों में परिवार ने 2,400 यूनिट से ज़्यादा बिजली न खर्च की हो।",
      "CBDC वॉलेट वाले बैंक में खाता हो (साझेदार बैंक खाता खोल सकता है)।",
    ],
  },
  exclusions: {
    en: [
      "Women who get any government pension (including widow or disability pension), pay income tax, file GST, or are or were in government service or public office.",
      "Families where anyone is a regular or contract employee of the Central or Delhi government, a PSU, board or local body.",
      "Families that own a four-wheeler.",
      "Women with more than three living children, or with a criminal record.",
    ],
    hi: [
      "जो महिलाएँ कोई सरकारी पेंशन (विधवा या दिव्यांग पेंशन समेत) लेती हैं, आयकर देती हैं, GST फ़ाइल करती हैं, या सरकारी नौकरी या सार्वजनिक पद पर हैं या रही हैं।",
      "जिन परिवारों में कोई केंद्र या दिल्ली सरकार, PSU, बोर्ड या स्थानीय निकाय में नियमित या अनुबंध कर्मचारी है।",
      "जिन परिवारों के पास चार पहिया गाड़ी है।",
      "जिन महिलाओं के तीन से ज़्यादा जीवित बच्चे हैं, या जिनका आपराधिक रिकॉर्ड है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to dly.delhi.gov.in, register and answer the eligibility questions.",
        "Fill in your details with Aadhaar, add family members and your bank account.",
        "Upload the documents, then download the QR-coded form.",
        "Get the form signed and stamped by your area MP or MLA, upload it and submit.",
        "Download the acknowledgement slip and track your application with your mobile number.",
      ],
      hi: [
        "dly.delhi.gov.in पर जाएँ, रजिस्टर करें और पात्रता के सवालों के जवाब दें।",
        "आधार के साथ अपनी जानकारी, परिवार के सदस्य और बैंक खाता भरें।",
        "दस्तावेज़ अपलोड करें, फिर QR कोड वाला फ़ॉर्म डाउनलोड करें।",
        "फ़ॉर्म पर अपने क्षेत्र के सांसद या विधायक के हस्ताक्षर और मुहर लगवाएँ, अपलोड करें और जमा करें।",
        "पावती रसीद डाउनलोड करें और मोबाइल नंबर से आवेदन की स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "Delhi voter ID card", "Photo and signature", "Endorsement letter from your MP or MLA", "Proof of 10 years in Delhi (voter ID, ration card, driving licence, or electricity or gas bill)", "Age proof", "Bank account details"],
    hi: ["आधार", "दिल्ली का मतदाता पहचान पत्र", "फ़ोटो और हस्ताक्षर", "सांसद या विधायक का समर्थन पत्र", "दिल्ली में 10 साल रहने का प्रमाण (मतदाता पहचान पत्र, राशन कार्ड, ड्राइविंग लाइसेंस, या बिजली या गैस का बिल)", "उम्र का प्रमाण", "बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "Can I spend all ₹2,500 freely?", hi: "क्या मैं पूरे ₹2,500 जैसे चाहूँ ख़र्च कर सकती हूँ?" },
      a: {
        en: "No. At most ₹1,000 a month goes to your CBDC wallet for spending, and it can't be used for things like liquor, tobacco, lottery or gambling. The rest is saved in a deposit locked until July 2029.",
        hi: "नहीं। ख़र्च के लिए CBDC वॉलेट में ज़्यादा से ज़्यादा ₹1,000 महीना आता है, और इसे शराब, तंबाकू, लॉटरी या जुए जैसी चीज़ों पर ख़र्च नहीं किया जा सकता। बाक़ी जुलाई 2029 तक लॉक डिपॉज़िट में जमा होता है।",
      },
    },
    {
      q: { en: "I applied for Mahila Samriddhi Yojana. Do I need to apply again?", hi: "मैंने महिला समृद्धि योजना में आवेदन किया था। क्या दोबारा आवेदन करना होगा?" },
      a: {
        en: "It is the same scheme under a new name, but applications are taken on the new dly.delhi.gov.in portal. Check your status there with your mobile number, and register if you are not listed.",
        hi: "यह नए नाम से वही योजना है, पर आवेदन नए dly.delhi.gov.in पोर्टल पर लिए जाते हैं। वहाँ मोबाइल नंबर से अपनी स्थिति देखें, और नाम न हो तो रजिस्टर करें।",
      },
    },
  ],

  officialUrl: "https://dly.delhi.gov.in/",
  sources: [
    "https://wcd.delhi.gov.in/sites/default/files/WCD/circulars-orders/dly_gazette_06082026.pdf",
    "https://dly.delhi.gov.in/",
    "https://newsonair.gov.in/delhi-government-approves-lakshmi-yojana-to-provide-%E2%82%B92500-monthly-assistance-to-eligible-women/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
