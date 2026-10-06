import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-kanya-utthan-yojana",
  tier: "full",
  overlapGroup: "daughter-savings",
  name: { en: "Mukhyamantri Kanya Utthan Yojana", hi: "मुख्यमंत्री कन्या उत्थान योजना" },
  aka: ["Kanya Utthan", "Bihar graduation 50000", "Inter pass 25000"],
  shortDescription: {
    en: "Girls in Bihar get ₹25,000 on passing Class 12 while unmarried, and ₹50,000 on completing graduation, paid into their own bank account.",
    hi: "बिहार की बेटियों को अविवाहित रहते हुए 12वीं पास करने पर ₹25,000 और स्नातक पूरा करने पर ₹50,000 मिलते हैं, सीधे उनके अपने बैंक खाते में।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Education Department, Government of Bihar", hi: "शिक्षा विभाग, बिहार सरकार" },
  categories: ["women-child", "education"],
  tags: ["girl child", "graduation", "intermediate", "50000", "25000", "medhasoft", "bihar"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(residentOf("bihar"), female()),

  details: {
    en: [
      "Mukhyamantri Kanya Utthan Yojana is Bihar's umbrella scheme for girls, with support at several stages from birth to graduation. Its aim is to keep girls in school and college and to discourage early marriage.",
      "The two biggest payments are made by the Education Department: ₹25,000 to an unmarried girl who passes the intermediate (Class 12) exam, and ₹50,000 to a girl who completes her graduation.",
      "Both are claimed online on the Medhasoft portal after results come out. The money is paid by DBT into the girl's own Aadhaar-linked bank account.",
    ],
    hi: [
      "मुख्यमंत्री कन्या उत्थान योजना बिहार में बेटियों के लिए एक बड़ी योजना है, जिसमें जन्म से स्नातक तक कई चरणों में मदद मिलती है। इसका मकसद बेटियों को स्कूल-कॉलेज में बनाए रखना और कम उम्र में शादी रोकना है।",
      "सबसे बड़ी दो राशियाँ शिक्षा विभाग देता है: इंटर (12वीं) पास करने वाली अविवाहित छात्रा को ₹25,000, और स्नातक पूरा करने वाली छात्रा को ₹50,000।",
      "दोनों के लिए रिज़ल्ट आने के बाद मेधासॉफ्ट पोर्टल पर ऑनलाइन आवेदन होता है। पैसा DBT से छात्रा के अपने आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹25,000 on passing intermediate (Class 12) while unmarried.",
      "₹50,000 on completing graduation.",
      "Smaller amounts at earlier stages, from birth and through school, under the same umbrella scheme.",
      "All money is paid by DBT into the girl's own bank account.",
    ],
    hi: [
      "अविवाहित रहते हुए इंटर (12वीं) पास करने पर ₹25,000।",
      "स्नातक पूरा करने पर ₹50,000।",
      "इसी योजना के तहत जन्म से लेकर स्कूल तक पहले के चरणों में भी छोटी राशियाँ।",
      "सारा पैसा DBT से छात्रा के अपने बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The girl and her family are residents of Bihar.",
      "For ₹25,000: she passed the intermediate exam from the Bihar School Examination Board or another recognised Bihar institution, and was unmarried at the time.",
      "For ₹50,000: she completed graduation from a recognised university in Bihar.",
      "She has a bank account in her own name, linked to Aadhaar.",
    ],
    hi: [
      "छात्रा और उसका परिवार बिहार का निवासी हो।",
      "₹25,000 के लिए: उसने बिहार विद्यालय परीक्षा समिति या बिहार की किसी मान्य संस्था से इंटर पास किया हो, और उस समय अविवाहित हो।",
      "₹50,000 के लिए: उसने बिहार के किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक पूरा किया हो।",
      "उसके अपने नाम पर आधार से जुड़ा बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Girls who were married when they passed Class 12 cannot get the intermediate amount.",
      "Exams passed from boards or universities outside Bihar are not covered.",
      "Applications made after the portal window for your result year has closed.",
    ],
    hi: [
      "जो छात्राएँ 12वीं पास करते समय विवाहित थीं, उन्हें इंटर वाली राशि नहीं मिलती।",
      "बिहार के बाहर के बोर्ड या विश्वविद्यालय से पास परीक्षाएँ इसमें शामिल नहीं हैं।",
      "आपके रिज़ल्ट वाले साल की आवेदन तारीख बीत जाने के बाद किए गए आवेदन।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "When the window opens after results, go to medhasoft.bihar.gov.in.",
        "Choose the right link: Kanya Utthan (Intermediate) for ₹25,000 or Kanya Utthan (Graduation) for ₹50,000.",
        "Register with your roll number and Aadhaar, enter your bank details and upload the documents asked for.",
        "Submit and keep checking the status on the same portal until payment is made.",
      ],
      hi: [
        "रिज़ल्ट के बाद आवेदन खुलने पर medhasoft.bihar.gov.in पर जाएँ।",
        "सही लिंक चुनें: ₹25,000 के लिए कन्या उत्थान (इंटर) या ₹50,000 के लिए कन्या उत्थान (स्नातक)।",
        "अपने रोल नंबर और आधार से रजिस्टर करें, बैंक विवरण भरें और माँगे गए दस्तावेज़ अपलोड करें।",
        "आवेदन जमा करें और भुगतान होने तक उसी पोर्टल पर स्थिति देखते रहें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Marksheet or certificate of the exam passed", "Bank passbook of the girl's Aadhaar-linked account", "Residence certificate of Bihar", "Passport-size photograph"],
    hi: ["आधार कार्ड", "पास की गई परीक्षा की मार्कशीट या प्रमाण पत्र", "छात्रा के आधार से जुड़े बैंक खाते की पासबुक", "बिहार का निवास प्रमाण पत्र", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Can I get both ₹25,000 and ₹50,000?", hi: "क्या मुझे ₹25,000 और ₹50,000 दोनों मिल सकते हैं?" },
      a: {
        en: "Yes. They are separate stages. If you got ₹25,000 after Class 12 and later complete graduation, you can apply for ₹50,000 too.",
        hi: "हाँ। ये अलग-अलग चरण हैं। अगर 12वीं के बाद आपको ₹25,000 मिले और बाद में आप स्नातक पूरा करती हैं, तो ₹50,000 के लिए भी आवेदन कर सकती हैं।",
      },
    },
    {
      q: { en: "When does the portal open?", hi: "पोर्टल कब खुलता है?" },
      a: {
        en: "Usually a few months after board or university results. The Education Department announces the dates each year, so check medhasoft.bihar.gov.in after your result.",
        hi: "आमतौर पर बोर्ड या विश्वविद्यालय के रिज़ल्ट के कुछ महीने बाद। शिक्षा विभाग हर साल तारीखें घोषित करता है, इसलिए रिज़ल्ट के बाद medhasoft.bihar.gov.in देखते रहें।",
      },
    },
  ],

  officialUrl: "https://medhasoft.bihar.gov.in/",
  sources: [
    "https://medhasoft.bihar.gov.in/",
    "https://betastate.bihar.gov.in/educationbihar/",
    "https://betastate.bihar.gov.in/champainDowry.aspx",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
