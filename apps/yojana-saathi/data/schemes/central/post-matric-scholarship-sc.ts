import { all, incomeUpTo, isTrue, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "post-matric-scholarship-sc",
  name: { en: "Post-Matric Scholarship for Scheduled Caste Students", hi: "अनुसूचित जाति के छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति" },
  aka: ["PMS-SC", "Post Matric Scholarship SC"],
  shortDescription: {
    en: "Your compulsory college fees plus a yearly allowance of ₹2,500 to ₹13,500 for SC students studying from class 11 to PhD, if family income is up to ₹2.5 lakh a year.",
    hi: "कक्षा 11 से PhD तक पढ़ने वाले SC छात्रों की ज़रूरी फ़ीस और हर साल ₹2,500 से ₹13,500 तक का भत्ता, अगर परिवार की सालाना आय ₹2.5 लाख तक है।",
  },
  level: "central",
  ministry: "social-justice-empowerment",
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "sc", "dalit", "post matric", "college fees", "class 11"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2500, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(when("caste", "eq", "sc"), isTrue("student"), incomeUpTo(250_000)),

  details: {
    en: [
      "The Post-Matric Scholarship for SC students helps Scheduled Caste students from poorer families study after class 10, all the way up to PhD. It is a centrally sponsored scheme of the Ministry of Social Justice & Empowerment.",
      "States and UTs run it. They invite applications, check eligibility and pay the scholarship. The Centre pays 60% and the state 40% (90:10 in North-Eastern states). The central share goes straight to the student's Aadhaar-linked bank account.",
      "The scholarship covers the compulsory non-refundable fees charged by your institution and a yearly academic allowance that depends on your course and whether you live in a hostel.",
    ],
    hi: [
      "SC छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति गरीब परिवारों के अनुसूचित जाति के छात्रों को कक्षा 10 के बाद PhD तक पढ़ने में मदद करती है। यह सामाजिक न्याय और अधिकारिता मंत्रालय की केंद्र प्रायोजित योजना है।",
      "इसे राज्य और केंद्र शासित प्रदेश चलाते हैं। वे आवेदन मँगाते हैं, पात्रता जाँचते हैं और छात्रवृत्ति देते हैं। खर्च का 60% केंद्र और 40% राज्य देता है (पूर्वोत्तर राज्यों में 90:10)। केंद्र का हिस्सा सीधे छात्र के आधार से जुड़े बैंक खाते में जाता है।",
      "छात्रवृत्ति में संस्थान की ज़रूरी, वापस न होने वाली फ़ीस और सालाना शैक्षिक भत्ता शामिल है, जो आपके कोर्स और हॉस्टल में रहने या न रहने पर निर्भर करता है।",
    ],
  },
  benefits: {
    en: [
      "Compulsory non-refundable fees, including tuition fees, are paid (within limits set by the state).",
      "Academic allowance of ₹2,500 to ₹13,500 a year, depending on course group and hosteller or day scholar status.",
      "Extra 10% allowance for students with disabilities.",
      "Covers the whole course, from class 11 up to PhD.",
    ],
    hi: [
      "ट्यूशन फ़ीस समेत ज़रूरी, वापस न होने वाली फ़ीस दी जाती है (राज्य की तय सीमा के भीतर)।",
      "कोर्स समूह और हॉस्टल या घर से पढ़ने के आधार पर हर साल ₹2,500 से ₹13,500 तक शैक्षिक भत्ता।",
      "दिव्यांग छात्रों को 10% अतिरिक्त भत्ता।",
      "कक्षा 11 से PhD तक पूरे कोर्स के लिए।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a Scheduled Caste.",
      "Parents' or guardian's income from all sources is up to ₹2.5 lakh a year.",
      "Studying a recognised course after class 10 (class 11 onwards) at a recognised institution in India.",
      "Applies to the state or UT where they are permanently settled (domiciled).",
    ],
    hi: [
      "अनुसूचित जाति से हों।",
      "माता-पिता या अभिभावक की सभी स्रोतों से सालाना आय ₹2.5 लाख तक हो।",
      "भारत के किसी मान्यता प्राप्त संस्थान में कक्षा 10 के बाद (कक्षा 11 से आगे) का मान्य कोर्स कर रहे हों।",
      "आवेदन उसी राज्य या केंद्र शासित प्रदेश में करें जहाँ के स्थायी निवासी हों।",
    ],
  },
  exclusions: {
    en: [
      "Not available for studies abroad.",
      "Students whose family income is above ₹2.5 lakh a year are not eligible under the current rules.",
      "You generally cannot hold another scholarship for the same course at the same time.",
    ],
    hi: [
      "विदेश में पढ़ाई के लिए नहीं मिलती।",
      "मौजूदा नियमों में ₹2.5 लाख से ज़्यादा सालाना पारिवारिक आय वाले छात्र पात्र नहीं हैं।",
      "आमतौर पर एक ही कोर्स के लिए एक साथ दूसरी छात्रवृत्ति नहीं ली जा सकती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Find out whether your state takes applications on the National Scholarship Portal (scholarships.gov.in) or its own scholarship portal.",
        "Register with Aadhaar and mobile number, then fill in the Post-Matric Scholarship for SC form.",
        "Upload your caste certificate, income certificate, marks and fee receipt.",
        "Your institution verifies the form and then the state department approves it. Renew every year.",
      ],
      hi: [
        "पता करें कि आपका राज्य नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर आवेदन लेता है या अपने स्कॉलरशिप पोर्टल पर।",
        "आधार और मोबाइल नंबर से रजिस्टर करें, फिर SC पोस्ट-मैट्रिक छात्रवृत्ति का फ़ॉर्म भरें।",
        "जाति प्रमाण पत्र, आय प्रमाण पत्र, अंकतालिका और फ़ीस रसीद अपलोड करें।",
        "आपका संस्थान फ़ॉर्म जाँचता है, फिर राज्य का विभाग मंज़ूरी देता है। हर साल नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "SC caste certificate", "Income certificate of parents/guardian", "Previous class mark sheet", "Admission proof and fee receipt", "Aadhaar-linked bank account", "Domicile certificate"],
    hi: ["आधार", "SC जाति प्रमाण पत्र", "माता-पिता/अभिभावक का आय प्रमाण पत्र", "पिछली कक्षा की अंकतालिका", "दाख़िले का प्रमाण और फ़ीस रसीद", "आधार से जुड़ा बैंक खाता", "निवास प्रमाण पत्र"],
  },
  faqs: [
    {
      q: { en: "Is the income limit going to change?", hi: "क्या आय सीमा बदलने वाली है?" },
      a: {
        en: "The ministry has said it plans to raise the limit from ₹2.5 lakh to ₹4.5 lakh for the new scheme cycle. Until a change is officially notified, ₹2.5 lakh applies. Check your state's scholarship portal for the latest rule.",
        hi: "मंत्रालय ने नए योजना चक्र में सीमा ₹2.5 लाख से बढ़ाकर ₹4.5 लाख करने की योजना बताई है। आधिकारिक अधिसूचना आने तक ₹2.5 लाख ही लागू है। ताज़ा नियम के लिए अपने राज्य का स्कॉलरशिप पोर्टल देखें।",
      },
    },
    {
      q: { en: "Do I need to pay fees first and claim them later?", hi: "क्या पहले फ़ीस भरकर बाद में पैसा लेना होगा?" },
      a: {
        en: "It depends on your state and institution. Many states let eligible SC students take admission without paying the fee upfront, and the fee part is settled once the scholarship is paid.",
        hi: "यह आपके राज्य और संस्थान पर निर्भर है। कई राज्य पात्र SC छात्रों को पहले फ़ीस भरे बिना दाख़िला देते हैं, और छात्रवृत्ति आने पर फ़ीस का हिस्सा चुकता होता है।",
      },
    },
  ],

  officialUrl: "https://socialjustice.gov.in/schemes/25",
  sources: [
    "https://socialjustice.gov.in/schemes/25",
    "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1960387",
    "https://oasis.wb.gov.in/web/pdf/Post%20Matric%20for%20SCs.pdf",
    "https://news.careers360.com/post-matric-scholarship-pms-for-sc-rules-change-msje-course-fee-cap-4-5-lakh-income-limit-next-year-social-justice-and-empowerment",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
