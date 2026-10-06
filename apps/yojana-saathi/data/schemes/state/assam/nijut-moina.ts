import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nijut-moina",
  overlapGroup: "scholarship",
  name: { en: "Mukhya Mantrir Nijut Moina Aasoni", hi: "मुख्य मंत्रीर निजुत मोइना आसोनी" },
  aka: ["Nijut Moina", "MMNMA", "Nijut Moina Scheme"],
  shortDescription: {
    en: "Girl students in Assam studying in Higher Secondary, degree or PG at government colleges get ₹800 to ₹2,500 a month for 10 months a year to continue studying.",
    hi: "असम में सरकारी संस्थानों में हायर सेकेंडरी, डिग्री या PG पढ़ रही छात्राओं को पढ़ाई जारी रखने के लिए साल में 10 महीने ₹800 से ₹2,500 हर महीने मिलते हैं।",
  },
  level: "state",
  state: "assam",
  department: { en: "Higher Education Department, Government of Assam", hi: "उच्च शिक्षा विभाग, असम सरकार" },
  categories: ["education", "women-child"],
  tags: ["nijut moina", "girl students", "stipend", "scholarship", "higher education", "child marriage", "assam"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 8000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("assam"), female(), isTrue("student")),

  details: {
    en: [
      "Nijut Moina gives girl students a monthly allowance so that they stay in school and college after Class 10. Its aims are to raise the number of girls in higher education, cut dropouts and end child marriage.",
      "The Higher Education Department runs it. The money is paid for up to 10 months in each academic year by Aadhaar-based DBT into the student's own bank account. Nothing is paid in June, July or during vacations.",
      "It is open to all eligible girls domiciled in Assam, whatever their family income. From 2026-27, girls in the fourth year of undergraduate courses can also apply. For 2026-27, payments start from October 2026.",
    ],
    hi: [
      "निजुत मोइना छात्राओं को हर महीने भत्ता देती है, ताकि वे 10वीं के बाद भी स्कूल-कॉलेज में पढ़ाई जारी रखें। इसका मकसद उच्च शिक्षा में लड़कियों की संख्या बढ़ाना, पढ़ाई छोड़ने को रोकना और बाल विवाह खत्म करना है।",
      "इसे उच्च शिक्षा विभाग चलाता है। हर शैक्षणिक साल में अधिकतम 10 महीने पैसा आधार आधारित DBT से छात्रा के अपने बैंक खाते में आता है। जून, जुलाई और छुट्टियों में पैसा नहीं मिलता।",
      "यह असम की सभी पात्र छात्राओं के लिए है, चाहे परिवार की आय कितनी भी हो। 2026-27 से अंडरग्रेजुएट के चौथे साल की छात्राएँ भी आवेदन कर सकती हैं। 2026-27 का भुगतान अक्टूबर 2026 से शुरू होगा।",
    ],
  },
  benefits: {
    en: [
      "Higher Secondary: ₹800 a month.",
      "Undergraduate (BA/BSc/BCom/ITEP): ₹1,250 a month.",
      "Postgraduate (MA/MSc/MCom/BEd): ₹2,500 a month.",
      "Government polytechnic: ₹800 a month in the 1st and 2nd year, ₹1,250 in the 3rd year.",
      "Paid for up to 10 months in each academic year.",
    ],
    hi: [
      "हायर सेकेंडरी: हर महीने ₹800।",
      "अंडरग्रेजुएट (BA/BSc/BCom/ITEP): हर महीने ₹1,250।",
      "पोस्टग्रेजुएट (MA/MSc/MCom/BEd): हर महीने ₹2,500।",
      "सरकारी पॉलिटेक्निक: पहले और दूसरे साल हर महीने ₹800, तीसरे साल ₹1,250।",
      "हर शैक्षणिक साल में अधिकतम 10 महीने तक।",
    ],
  },
  eligibilityText: {
    en: [
      "A girl student domiciled in Assam. There is no income limit.",
      "Enrolled as a regular student in a government or approved venture institution, central university or government polytechnic. Private institutions are not covered.",
      "Unmarried. Married students can apply only for PG and BEd courses.",
      "Has an Aadhaar number and an Aadhaar-seeded bank account in her own name.",
      "Existing beneficiaries need at least 70% attendance in the previous year and must have sat the previous year's final exam.",
    ],
    hi: [
      "असम की निवासी छात्रा। आय की कोई सीमा नहीं है।",
      "सरकारी या मंज़ूरशुदा वेंचर संस्थान, केंद्रीय विश्वविद्यालय या सरकारी पॉलिटेक्निक में नियमित छात्रा हो। प्राइवेट संस्थान शामिल नहीं हैं।",
      "अविवाहित हो। शादीशुदा छात्राएँ सिर्फ़ PG और BEd के लिए आवेदन कर सकती हैं।",
      "उसके पास आधार नंबर और अपने नाम का आधार से जुड़ा बैंक खाता हो।",
      "पुरानी लाभार्थियों की पिछले साल की हाज़िरी कम से कम 70% हो और उन्होंने पिछले साल की फ़ाइनल परीक्षा दी हो।",
    ],
  },
  exclusions: {
    en: [
      "Students of private colleges and universities.",
      "Married girls at HS or UG level.",
      "Daughters of ministers, MPs and MLAs.",
      "Girls who take a scooter under the Dr. Banikanta Kakati Merit Award (except at PG level).",
      "PG students getting the CM's Jibon Prerana allowance, and in-service teachers sent for BEd on deputation.",
      "Anyone found in serious misconduct such as ragging, cheating or vandalism loses the benefit.",
    ],
    hi: [
      "प्राइवेट कॉलेज और विश्वविद्यालयों की छात्राएँ।",
      "HS या UG स्तर पर शादीशुदा छात्राएँ।",
      "मंत्रियों, सांसदों और विधायकों की बेटियाँ।",
      "डॉ. बाणीकांत काकती मेधा पुरस्कार में स्कूटर लेने वाली छात्राएँ (PG को छोड़कर)।",
      "मुख्यमंत्री जीवन प्रेरणा भत्ता पाने वाली PG छात्राएँ, और डेपुटेशन पर BEd करने वाली सेवारत शिक्षिकाएँ।",
      "रैगिंग, नकल या तोड़फोड़ जैसे गंभीर दुर्व्यवहार पर लाभ बंद हो जाता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Nijut Moina application form from your school or college when forms open (August for 2026-27).",
        "Fill it in, sign the consent and declaration, and attach your Aadhaar and bank details.",
        "Submit it to your institution's nodal officer, who verifies it and uploads your data to the portal.",
        "The monthly amount is then paid into your Aadhaar-seeded bank account.",
      ],
      hi: [
        "फ़ॉर्म खुलने पर (2026-27 के लिए अगस्त में) अपने स्कूल या कॉलेज से निजुत मोइना का आवेदन फ़ॉर्म लें।",
        "फ़ॉर्म भरें, सहमति और घोषणा पर हस्ताक्षर करें, और आधार व बैंक की जानकारी लगाएँ।",
        "इसे अपने संस्थान के नोडल अधिकारी को जमा करें, जो जाँच करके आपका डेटा पोर्टल पर डालेंगे।",
        "इसके बाद हर महीने की राशि आपके आधार से जुड़े बैंक खाते में आएगी।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Passbook of an Aadhaar-seeded bank account in the student's name", "Proof of admission in the current course", "Signed consent and declaration form"],
    hi: ["आधार कार्ड", "छात्रा के नाम के आधार से जुड़े बैंक खाते की पासबुक", "मौजूदा कोर्स में दाखिले का सबूत", "हस्ताक्षरित सहमति और घोषणा फ़ॉर्म"],
  },
  faqs: [
    {
      q: { en: "I don't have Aadhaar because I am under 18. Can I still apply?", hi: "18 से कम उम्र होने के कारण मेरा आधार नहीं है। क्या मैं आवेदन कर सकती हूँ?" },
      a: {
        en: "Yes. Tell your head of institution or nodal officer. An August 2026 order asks colleges to list such students and get their Aadhaar made through the District Commissioner on priority, so you can then apply.",
        hi: "हाँ। अपने संस्थान प्रमुख या नोडल अधिकारी को बताएँ। अगस्त 2026 के आदेश में कॉलेजों से कहा गया है कि ऐसी छात्राओं की सूची बनाकर ज़िला आयुक्त के ज़रिए उनका आधार जल्दी बनवाएँ, ताकि वे आवेदन कर सकें।",
      },
    },
    {
      q: { en: "Can I get both Nijut Moina and the fee waiver?", hi: "क्या मुझे निजुत मोइना और फ़ीस माफ़ी दोनों मिल सकते हैं?" },
      a: {
        en: "For 2026-27, yes. From 2027-28, girls in HS, UG and PG will have to choose either the fee waiver or Nijut Moina, not both.",
        hi: "2026-27 में हाँ। 2027-28 से HS, UG और PG की छात्राओं को फ़ीस माफ़ी या निजुत मोइना में से एक ही चुनना होगा।",
      },
    },
  ],

  officialUrl: "https://directorateofhighereducation.assam.gov.in/documents/notifications-2",
  sources: [
    "https://directorateofhighereducation.assam.gov.in/documents-detail/guidelines-mmnma-for-providing-financial-assistance-as-incentive-to-girl-students",
    "https://directorateofhighereducation.assam.gov.in/documents-detail/notification-regarding-mukhya-mantrir-nijut-moina-aasoni",
    "https://directorateofhighereducation.assam.gov.in/documents-detail/executive-order-regarding-implementation-of-the-mukhya-mantrir-nijut-moina-aasoni",
    "https://aladigitallibrary.in/handle/123456789/4238",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
