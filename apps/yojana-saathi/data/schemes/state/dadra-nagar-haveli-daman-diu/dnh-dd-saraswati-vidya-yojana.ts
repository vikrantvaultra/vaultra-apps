import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dnh-dd-saraswati-vidya-yojana",
  tier: "full",
  overlapGroup: "scholarship",
  name: {
    en: "Saraswati Vidya Yojana: Fee Reimbursement for Girls (DNH & DD)",
    hi: "सरस्वती विद्या योजना: छात्राओं के लिए फ़ीस प्रतिपूर्ति (दानह और दमण-दीव)",
  },
  aka: ["Saraswati Vidya Yojana", "SVY Daman", "DNH DD girls fee reimbursement"],
  shortDescription: {
    en: "Girls from Dadra & Nagar Haveli and Daman & Diu in professional diploma, degree or PG courses get 100% of tuition fees back if family income is below ₹2.5 lakh, else 50%.",
    hi: "दादरा-नगर हवेली और दमण-दीव की प्रोफ़ेशनल डिप्लोमा, डिग्री या PG कोर्स कर रही छात्राओं को परिवार की आय ₹2.5 लाख से कम हो तो पूरी ट्यूशन फ़ीस, वरना 50% वापस।",
  },
  level: "state",
  state: "dadra-nagar-haveli-daman-diu",
  department: {
    en: "Directorate of Education, UT Administration of Dadra & Nagar Haveli and Daman & Diu",
    hi: "शिक्षा निदेशालय, संघ प्रदेश दादरा और नगर हवेली और दमण और दीव प्रशासन",
  },
  categories: ["education", "women-child"],
  tags: ["girls", "fee reimbursement", "professional course", "scholarship", "daman", "silvassa", "diu"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(residentOf("dadra-nagar-haveli-daman-diu"), female(), isTrue("student")),

  details: {
    en: [
      "Saraswati Vidya Yojana is the UT Administration's scheme to keep girls in education, in line with 'Beti Bachao Beti Padhao'. The revised scheme was notified on 23 April 2026 by the Directorate of Education and replaces all earlier versions.",
      "This part of the scheme pays back the tuition and academic fees of domicile girls doing professional diploma, graduation or post-graduation courses. Girls whose parents' (or husband's) income is below ₹2.5 lakh a year get the full fee back; others get half.",
      "Applications are online only, in two windows each year, for the academic year just finished: 15 June to 15 July, and 15 December to 15 January. The money is paid by DBT after approval.",
    ],
    hi: [
      "सरस्वती विद्या योजना 'बेटी बचाओ बेटी पढ़ाओ' के लक्ष्य के अनुसार लड़कियों की पढ़ाई जारी रखने के लिए संघ प्रदेश प्रशासन की योजना है। संशोधित योजना शिक्षा निदेशालय ने 23 अप्रैल 2026 को अधिसूचित की, जो पहले के सभी रूपों की जगह लेती है।",
      "योजना का यह हिस्सा प्रोफ़ेशनल डिप्लोमा, स्नातक या स्नातकोत्तर कोर्स कर रही डोमिसाइल छात्राओं की ट्यूशन और शैक्षणिक फ़ीस लौटाता है। जिनके माता-पिता (या पति) की आय ₹2.5 लाख सालाना से कम है, उन्हें पूरी फ़ीस और बाकी को आधी फ़ीस वापस मिलती है।",
      "आवेदन सिर्फ़ ऑनलाइन, हर साल दो बार, पिछले पूरे हुए शैक्षणिक वर्ष के लिए होते हैं: 15 जून से 15 जुलाई और 15 दिसंबर से 15 जनवरी। मंज़ूरी के बाद पैसा DBT से मिलता है।",
    ],
  },
  benefits: {
    en: [
      "100% of tuition and academic fees back if parental/husband's income is below ₹2.5 lakh a year; 50% if it is above.",
      "Yearly limit of ₹2.5 lakh for diploma and degree courses and ₹3.5 lakh for PG courses (₹3.75 lakh and ₹5.25 lakh for 1.5-year academic sessions).",
      "Extra 50% of hostel charges (excluding mess), up to ₹30,000 a year, on top of the limit.",
      "Paid by Direct Benefit Transfer to your Aadhaar-seeded bank account.",
    ],
    hi: [
      "माता-पिता/पति की आय ₹2.5 लाख सालाना से कम हो तो ट्यूशन और शैक्षणिक फ़ीस का 100%, ज़्यादा हो तो 50% वापस।",
      "डिप्लोमा और डिग्री कोर्स के लिए सालाना सीमा ₹2.5 लाख और PG के लिए ₹3.5 लाख (1.5 साल के सत्र में ₹3.75 लाख और ₹5.25 लाख)।",
      "सीमा के ऊपर, हॉस्टल शुल्क (मेस छोड़कर) का 50% अलग से, सालाना ₹30,000 तक।",
      "सीधे लाभ हस्तांतरण से आपके आधार से जुड़े बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Your father, husband, guardian, or mother (if widowed or divorced) is a domicile of the UT of Dadra & Nagar Haveli and Daman & Diu.",
      "You studied class 8 to 12 in any school in the UT (or class 6 to 10, if you did a diploma after class 10).",
      "You are doing a professional diploma, degree or PG course at an institution recognised by UGC, AICTE, NCTE, the Nursing Council or a similar body, with fees approved by the fee fixation committee.",
      "You passed the year's exams in the first attempt with no backlog.",
      "Only the first two girls in a family can get the benefit.",
    ],
    hi: [
      "आपके पिता, पति, अभिभावक या माँ (विधवा या तलाकशुदा हों तो) संघ प्रदेश दादरा और नगर हवेली और दमण और दीव के डोमिसाइल हैं।",
      "आपने संघ प्रदेश के किसी स्कूल से कक्षा 8 से 12 तक पढ़ाई की है (10वीं के बाद डिप्लोमा किया हो तो कक्षा 6 से 10 तक)।",
      "आप UGC, AICTE, NCTE, नर्सिंग परिषद या ऐसी संस्था से मान्य संस्थान में प्रोफ़ेशनल डिप्लोमा, डिग्री या PG कोर्स कर रही हैं, जिसकी फ़ीस फ़ीस निर्धारण समिति ने मंज़ूर की है।",
      "आपने उस साल की परीक्षाएँ पहले प्रयास में बिना बैकलॉग के पास की हैं।",
      "परिवार की सिर्फ़ पहली दो बेटियाँ ही लाभ ले सकती हैं।",
    ],
  },
  exclusions: {
    en: [
      "Correspondence or distance-mode courses.",
      "Rent for paying-guest or flat accommodation (only college hostels and registered youth/student hostels count).",
      "Students doing more than one course at a time.",
      "Capitation, infrastructure and development fees are not reimbursed, and any other scholarship you get for the year (including post-matric) is deducted.",
    ],
    hi: [
      "पत्राचार या दूरस्थ माध्यम के कोर्स।",
      "पेइंग गेस्ट या फ़्लैट में रहने का किराया (सिर्फ़ कॉलेज हॉस्टल और पंजीकृत स्टूडेंट/यूथ हॉस्टल गिने जाते हैं)।",
      "एक साथ एक से ज़्यादा कोर्स करने वाली छात्राएँ।",
      "कैपिटेशन, इन्फ़्रास्ट्रक्चर और डेवलपमेंट फ़ीस वापस नहीं मिलती, और उस साल मिली कोई दूसरी छात्रवृत्ति (पोस्ट-मैट्रिक समेत) घटा दी जाती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on svy.ddd.gov.in during a window (15 June–15 July or 15 December–15 January) for the academic year just completed.",
        "Upload your fee receipts, domicile and income certificates, marksheets, schooling certificate, Aadhaar and bank passbook, and the declarations.",
        "The district scrutiny committee checks the application; after the Administrator's approval the money is sent to your account.",
      ],
      hi: [
        "पिछले पूरे हुए शैक्षणिक वर्ष के लिए आवेदन खिड़की (15 जून–15 जुलाई या 15 दिसंबर–15 जनवरी) में svy.ddd.gov.in पर आवेदन करें।",
        "फ़ीस रसीदें, डोमिसाइल और आय प्रमाण पत्र, अंकतालिकाएँ, स्कूली शिक्षा प्रमाण पत्र, आधार, बैंक पासबुक और घोषणा पत्र अपलोड करें।",
        "ज़िला जाँच समिति आवेदन जाँचती है; प्रशासक की मंज़ूरी के बाद पैसा आपके खाते में भेजा जाता है।",
      ],
    },
  },
  documents: {
    en: [
      "Original fee receipts",
      "Domicile certificate of your father, husband, guardian or mother (widowed/divorced)",
      "Income certificate from the Mamlatdar (needed only for 100% reimbursement)",
      "Fee fixation order for your college",
      "Result of the year claimed and current marksheet",
      "Schooling certificate showing class 8–12 (or 6–10) in UT schools",
      "Aadhaar card and Aadhaar-seeded bank passbook",
      "Declarations that you took no similar benefit and that no more than two daughters have claimed",
    ],
    hi: [
      "मूल फ़ीस रसीदें",
      "पिता, पति, अभिभावक या माँ (विधवा/तलाकशुदा) का डोमिसाइल प्रमाण पत्र",
      "मामलतदार का आय प्रमाण पत्र (सिर्फ़ 100% प्रतिपूर्ति के लिए)",
      "आपके कॉलेज का फ़ीस निर्धारण आदेश",
      "जिस साल का दावा है उसका परिणाम और मौजूदा अंकतालिका",
      "संघ प्रदेश के स्कूलों में कक्षा 8–12 (या 6–10) पढ़ने का स्कूली शिक्षा प्रमाण पत्र",
      "आधार कार्ड और आधार से जुड़ी बैंक पासबुक",
      "घोषणा पत्र कि ऐसा कोई दूसरा लाभ नहीं लिया और दो से ज़्यादा बेटियों ने दावा नहीं किया",
    ],
  },
  faqs: [
    {
      q: { en: "I study outside the UT. Can I still apply?", hi: "मैं संघ प्रदेश से बाहर पढ़ती हूँ। क्या मैं आवेदन कर सकती हूँ?" },
      a: {
        en: "Yes. The rule is about your family's domicile and your schooling in the UT, not where your college is, as long as the college is recognised and its fees are approved by the fee fixation committee.",
        hi: "हाँ। शर्त आपके परिवार के डोमिसाइल और संघ प्रदेश में स्कूली पढ़ाई की है, कॉलेज कहाँ है इसकी नहीं, बशर्ते कॉलेज मान्य हो और उसकी फ़ीस फ़ीस निर्धारण समिति से मंज़ूर हो।",
      },
    },
    {
      q: { en: "I missed the June–July window. What now?", hi: "मेरी जून–जुलाई की खिड़की छूट गई। अब क्या करूँ?" },
      a: {
        en: "You can apply in the second window, 15 December to 15 January, for the same academic year.",
        hi: "आप उसी शैक्षणिक वर्ष के लिए दूसरी खिड़की, 15 दिसंबर से 15 जनवरी, में आवेदन कर सकती हैं।",
      },
    },
  ],

  officialUrl: "https://svy.ddd.gov.in/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s371e09b16e21f7b6919bbfc43f6a5b2f0/uploads/2026/06/202606101204175196.pdf",
    "https://ddd.gov.in/document/directorate-of-education-7/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
