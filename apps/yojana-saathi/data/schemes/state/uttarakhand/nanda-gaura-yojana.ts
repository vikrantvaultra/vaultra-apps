import { all, any, female, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nanda-gaura-yojana",
  overlapGroup: "daughter-savings",
  name: { en: "Nanda Gaura Yojana", hi: "नंदा गौरा योजना" },
  aka: ["Nanda Gaura", "Nanda Gora Yojana", "Nanda Gaura Uttarakhand"],
  shortDescription: {
    en: "Uttarakhand gives ₹11,000 when a daughter is born and ₹51,000 when she passes Class 12 and joins college or a diploma, for families earning up to ₹6,000 a month.",
    hi: "उत्तराखंड सरकार बेटी के जन्म पर ₹11,000 और 12वीं पास करके कॉलेज या डिप्लोमा में दाख़िला लेने पर ₹51,000 देती है, उन परिवारों को जिनकी मासिक आय ₹6,000 तक है।",
  },
  level: "state",
  state: "uttarakhand",
  department: {
    en: "Women Empowerment and Child Development Department, Government of Uttarakhand",
    hi: "महिला सशक्तिकरण एवं बाल विकास विभाग, उत्तराखंड सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["daughter", "girl child", "nanda gaura", "beti", "class 12", "uttarakhand"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 11000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("uttarakhand"),
    labelled(incomeUpTo(72_000), {
      en: "Family income is up to ₹6,000 a month (₹72,000 a year)",
      hi: "परिवार की आय ₹6,000 महीना (₹72,000 सालाना) तक हो",
    }),
    labelled(any(isTrue("daughterUnder10"), all(female(), isTrue("student"))), {
      en: "You have a newborn daughter, or you are a girl who has passed Class 12 and is joining higher studies",
      hi: "आपकी नवजात बेटी हो, या आप 12वीं पास करके आगे पढ़ाई में दाख़िला ले रही छात्रा हों",
    }),
  ),

  details: {
    en: [
      "Nanda Gaura Yojana is Uttarakhand's main scheme for daughters. It merged older girl-child schemes of the Women Empowerment and Social Welfare departments in 2017 and aims to stop sex-selective abortion and child marriage, encourage hospital births and push girls towards higher education.",
      "The money comes in two stages: ₹11,000 when the daughter is born, and ₹51,000 when she passes Class 12, joins a graduation or diploma course and is still unmarried. A family can get it for at most two living daughters.",
      "Applications are only online on the Nanda Gaura portal, and money is paid in order of application as long as the year's budget lasts. The birth-stage form must be filed within 6 months of birth, and the Class 12 stage has a yearly last date (30 November).",
    ],
    hi: [
      "नंदा गौरा योजना उत्तराखंड में बेटियों की मुख्य योजना है। 2017 में महिला सशक्तिकरण और समाज कल्याण विभाग की पुरानी बालिका योजनाओं को मिलाकर इसे शुरू किया गया। इसका मकसद कन्या भ्रूण हत्या और बाल विवाह रोकना, अस्पताल में प्रसव को बढ़ावा देना और लड़कियों को उच्च शिक्षा की ओर ले जाना है।",
      "पैसा दो चरणों में मिलता है: बेटी के जन्म पर ₹11,000, और 12वीं पास करके स्नातक या डिप्लोमा में दाख़िला लेने पर, अविवाहित रहने की शर्त के साथ, ₹51,000। एक परिवार की ज़्यादा से ज़्यादा दो जीवित बेटियों को लाभ मिलता है।",
      "आवेदन केवल नंदा गौरा पोर्टल पर ऑनलाइन होता है, और बजट रहने तक पहले आओ-पहले पाओ के आधार पर भुगतान होता है। जन्म वाले चरण का फ़ॉर्म जन्म के 6 महीने के अंदर भरना होता है, और 12वीं वाले चरण की हर साल आख़िरी तारीख़ (30 नवंबर) होती है।",
    ],
  },
  benefits: {
    en: [
      "₹11,000 on the birth of a daughter, paid into the joint account of the parent and the baby girl.",
      "₹51,000 when the girl passes Class 12, joins a graduation course or a diploma of at least one year, and is unmarried, paid into her own account.",
      "Girls living in state-run or state-aided homes (Balika Niketan, Nari Niketan, orphanages) also get the ₹51,000 stage.",
    ],
    hi: [
      "बेटी के जन्म पर ₹11,000, माता/पिता और बेटी के संयुक्त खाते में।",
      "12वीं पास करने, स्नातक या कम से कम एक साल के डिप्लोमा में दाख़िला लेने और अविवाहित होने पर ₹51,000, छात्रा के अपने खाते में।",
      "सरकारी या सरकारी सहायता वाले गृहों (बालिका निकेतन, नारी निकेतन, अनाथ आश्रम) में रहने वाली लड़कियों को भी ₹51,000 वाला लाभ मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The girl's parents are permanent residents of Uttarakhand.",
      "Family income is up to ₹6,000 a month, shown by an income certificate issued by the Tehsildar (valid for one year).",
      "Birth stage: the baby was born in a hospital or ANM centre (or with a trained health worker in villages without a hospital), and the mother was registered at the Anganwadi during pregnancy.",
      "Class 12 stage: the girl has passed Class 12 from a recognised board or NIOS, has taken admission in graduation or a diploma of at least one year at a government-recognised institution, and is unmarried.",
      "Only two living daughters per family can benefit.",
    ],
    hi: [
      "बेटी के माता-पिता उत्तराखंड के स्थायी निवासी हों।",
      "परिवार की आय ₹6,000 महीने तक हो, जिसके लिए तहसीलदार का आय प्रमाण पत्र (एक साल के लिए मान्य) चाहिए।",
      "जन्म वाला चरण: बच्ची का जन्म अस्पताल या ANM केंद्र में हुआ हो (या जहाँ अस्पताल नहीं है वहाँ प्रशिक्षित स्वास्थ्य कर्मी की मदद से), और गर्भावस्था में माँ का पंजीकरण आंगनवाड़ी में हुआ हो।",
      "12वीं वाला चरण: छात्रा ने मान्यता प्राप्त बोर्ड या NIOS से 12वीं पास की हो, सरकारी मान्यता वाले संस्थान में स्नातक या कम से कम एक साल के डिप्लोमा में दाख़िला लिया हो, और अविवाहित हो।",
      "एक परिवार की केवल दो जीवित बेटियों को लाभ मिलता है।",
    ],
  },
  exclusions: {
    en: [
      "Families earning more than ₹6,000 a month.",
      "A third or later living daughter in the same family.",
      "Birth-stage applications made more than 6 months after the birth.",
      "Class 12 stage: girls who are married, or who have not joined a graduation or diploma course.",
      "Applying more than once for the same stage; offline forms are not accepted.",
    ],
    hi: [
      "जिन परिवारों की आय ₹6,000 महीने से ज़्यादा है।",
      "उसी परिवार की तीसरी या उसके बाद की जीवित बेटी।",
      "जन्म के 6 महीने बाद किया गया जन्म वाले चरण का आवेदन।",
      "12वीं वाला चरण: शादीशुदा लड़कियाँ, या जिन्होंने स्नातक या डिप्लोमा में दाख़िला नहीं लिया।",
      "एक ही चरण के लिए एक से ज़्यादा बार आवेदन; ऑफ़लाइन फ़ॉर्म नहीं लिए जाते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to nandagaurauk.in and register with your mobile number and district.",
        "Choose the stage (birth or Class 12 pass), fill in the form and upload the documents (each file under 200 KB).",
        "Give an active Aadhaar-linked bank account that is not a Jan Dhan account, and submit before the deadline.",
      ],
      hi: [
        "nandagaurauk.in पर जाएँ और मोबाइल नंबर व ज़िला चुनकर पंजीकरण करें।",
        "चरण चुनें (जन्म या 12वीं पास), फ़ॉर्म भरें और दस्तावेज़ अपलोड करें (हर फ़ाइल 200 KB से कम)।",
        "आधार से जुड़ा चालू बैंक खाता दें जो जन-धन खाता न हो, और आख़िरी तारीख़ से पहले जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Permanent residence certificate",
      "Income certificate from the Tehsildar",
      "Family register copy or certificate from the ward member/councillor, and ration card",
      "Birth certificate and institutional delivery certificate (birth stage)",
      "Aadhaar and PAN of the parents (birth stage) or of the girl (Class 12 stage)",
      "Anganwadi worker's certificate (birth stage)",
      "Class 12 marksheet, proof of admission in higher studies and an unmarried self-declaration (Class 12 stage)",
      "Bank passbook copy",
    ],
    hi: [
      "स्थायी निवास प्रमाण पत्र",
      "तहसीलदार का आय प्रमाण पत्र",
      "परिवार रजिस्टर की नकल या सभासद/पार्षद का प्रमाण पत्र, और राशन कार्ड",
      "जन्म प्रमाण पत्र और संस्थागत प्रसव का प्रमाण पत्र (जन्म वाला चरण)",
      "माता-पिता (जन्म वाला चरण) या छात्रा (12वीं वाला चरण) का आधार और पैन कार्ड",
      "आंगनवाड़ी कार्यकर्त्री का प्रमाण पत्र (जन्म वाला चरण)",
      "12वीं की मार्कशीट, उच्च शिक्षा में दाख़िले का प्रमाण और अविवाहित होने का स्व-घोषणा पत्र (12वीं वाला चरण)",
      "बैंक पासबुक की कॉपी",
    ],
  },
  faqs: [
    {
      q: { en: "We missed the 6-month window after birth. Can we still get ₹11,000?", hi: "जन्म के बाद 6 महीने निकल गए। क्या अब भी ₹11,000 मिल सकते हैं?" },
      a: {
        en: "No. The portal rules say birth-stage forms filed after 6 months are not accepted. Your daughter can still apply for the ₹51,000 stage after Class 12 if the family meets the conditions then.",
        hi: "नहीं। पोर्टल के नियम के अनुसार 6 महीने बाद जन्म वाले चरण का फ़ॉर्म नहीं लिया जाता। अगर उस समय परिवार शर्तें पूरी करता है, तो बेटी 12वीं के बाद ₹51,000 वाले चरण के लिए आवेदन कर सकती है।",
      },
    },
    {
      q: { en: "Is a PAN card really needed?", hi: "क्या पैन कार्ड सच में ज़रूरी है?" },
      a: {
        en: "Yes, the rules ask for PAN. If you have applied for one and it hasn't come yet, the acknowledgement receipt of the PAN application is accepted.",
        hi: "हाँ, नियमों में पैन माँगा गया है। अगर आपने आवेदन किया है और कार्ड अभी नहीं आया, तो पैन आवेदन की रसीद मान ली जाती है।",
      },
    },
  ],

  officialUrl: "https://www.nandagaurauk.in/",
  sources: ["https://www.nandagaurauk.in/", "https://wecd.uk.gov.in/documents/"],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
