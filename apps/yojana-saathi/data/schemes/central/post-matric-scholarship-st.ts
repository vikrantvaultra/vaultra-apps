import { all, incomeUpTo, isTrue, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "post-matric-scholarship-st",
  name: { en: "Post-Matric Scholarship for Scheduled Tribe Students", hi: "अनुसूचित जनजाति के छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति" },
  aka: ["PMS-ST", "Post Matric Scholarship ST"],
  shortDescription: {
    en: "Your compulsory college fees plus a monthly allowance of ₹230 to ₹1,200 for ST students studying after class 10, if the family earns up to ₹2.5 lakh a year.",
    hi: "कक्षा 10 के बाद पढ़ने वाले ST छात्रों की ज़रूरी फ़ीस और हर महीने ₹230 से ₹1,200 तक का भत्ता, अगर परिवार की सालाना आय ₹2.5 लाख तक है।",
  },
  level: "central",
  ministry: "tribal-affairs",
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "st", "tribal", "adivasi", "post matric", "college fees"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 230, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(when("caste", "in", ["st", "pvtg"]), isTrue("student"), incomeUpTo(250_000)),

  details: {
    en: [
      "The Post-Matric Scholarship for ST students helps Scheduled Tribe students study any recognised course after class 10, from class 11 to PhD. It is a centrally sponsored scheme of the Ministry of Tribal Affairs and is open to every eligible student (there is no fixed number of seats).",
      "States and UTs invite applications on the National Scholarship Portal or their own portal, verify them and pay the money into students' bank accounts by DBT. The Centre pays 75% (90% in North-Eastern and special category states, 100% in UTs without a legislature).",
      "The scholarship has two parts: the compulsory fees charged by your institution (within the limit fixed by your state) and a monthly maintenance allowance that depends on your course and whether you live in a hostel.",
    ],
    hi: [
      "ST छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति अनुसूचित जनजाति के छात्रों को कक्षा 10 के बाद कोई भी मान्य कोर्स, कक्षा 11 से PhD तक, पढ़ने में मदद करती है। यह जनजातीय कार्य मंत्रालय की केंद्र प्रायोजित योजना है और हर पात्र छात्र के लिए खुली है (सीटों की कोई तय संख्या नहीं)।",
      "राज्य और केंद्र शासित प्रदेश नेशनल स्कॉलरशिप पोर्टल या अपने पोर्टल पर आवेदन मँगाते हैं, उनकी जाँच करते हैं और DBT से पैसा छात्रों के बैंक खाते में भेजते हैं। खर्च का 75% केंद्र देता है (पूर्वोत्तर और विशेष श्रेणी राज्यों में 90%, बिना विधानसभा वाले केंद्र शासित प्रदेशों में 100%)।",
      "छात्रवृत्ति के दो हिस्से हैं: संस्थान की ज़रूरी फ़ीस (राज्य की तय सीमा के भीतर) और हर महीने का रखरखाव भत्ता, जो आपके कोर्स और हॉस्टल में रहने या न रहने पर निर्भर है।",
    ],
  },
  benefits: {
    en: [
      "Compulsory fees charged by the institution are paid, up to the limit set by your state.",
      "Maintenance allowance of ₹230 to ₹550 a month for day scholars.",
      "Maintenance allowance of ₹380 to ₹1,200 a month for hostellers.",
      "Extra help for students with disabilities, such as reader and transport allowances.",
    ],
    hi: [
      "संस्थान की ज़रूरी फ़ीस राज्य की तय सीमा तक दी जाती है।",
      "घर से पढ़ने वाले छात्रों को हर महीने ₹230 से ₹550 तक रखरखाव भत्ता।",
      "हॉस्टल में रहने वाले छात्रों को हर महीने ₹380 से ₹1,200 तक रखरखाव भत्ता।",
      "दिव्यांग छात्रों के लिए अतिरिक्त मदद, जैसे रीडर और परिवहन भत्ता।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a Scheduled Tribe (including PVTGs).",
      "Parents' income from all sources is up to ₹2.5 lakh a year.",
      "Studying a recognised course after class 10 at a recognised institution in India.",
    ],
    hi: [
      "अनुसूचित जनजाति से हों (विशेष रूप से कमज़ोर जनजातीय समूह भी शामिल)।",
      "माता-पिता की सभी स्रोतों से सालाना आय ₹2.5 लाख तक हो।",
      "भारत के किसी मान्यता प्राप्त संस्थान में कक्षा 10 के बाद का मान्य कोर्स कर रहे हों।",
    ],
  },
  exclusions: {
    en: [
      "Families earning above ₹2.5 lakh a year are not eligible.",
      "Not for studies outside India.",
      "You generally cannot take another scholarship for the same course at the same time.",
    ],
    hi: [
      "₹2.5 लाख से ज़्यादा सालाना आय वाले परिवार पात्र नहीं हैं।",
      "भारत से बाहर की पढ़ाई के लिए नहीं।",
      "आमतौर पर एक ही कोर्स के लिए एक साथ दूसरी छात्रवृत्ति नहीं ली जा सकती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check whether your state takes ST post-matric applications on the National Scholarship Portal (scholarships.gov.in) or its own portal.",
        "Register with Aadhaar and a mobile number.",
        "Fill in the form and upload your ST certificate, income certificate, marks and fee details.",
        "Your institution and then the state tribal welfare department verify it. Renew every year.",
      ],
      hi: [
        "पता करें कि आपका राज्य ST पोस्ट-मैट्रिक आवेदन नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) पर लेता है या अपने पोर्टल पर।",
        "आधार और मोबाइल नंबर से रजिस्टर करें।",
        "फ़ॉर्म भरें और ST प्रमाण पत्र, आय प्रमाण पत्र, अंकतालिका और फ़ीस की जानकारी अपलोड करें।",
        "पहले आपका संस्थान और फिर राज्य का जनजातीय कल्याण विभाग जाँच करता है। हर साल नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "ST certificate", "Income certificate of parents", "Previous class mark sheet", "Admission proof and fee receipt", "Aadhaar-linked bank account"],
    hi: ["आधार", "ST प्रमाण पत्र", "माता-पिता का आय प्रमाण पत्र", "पिछली कक्षा की अंकतालिका", "दाख़िले का प्रमाण और फ़ीस रसीद", "आधार से जुड़ा बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "Is there a limit on how many students get it?", hi: "क्या पाने वाले छात्रों की संख्या की कोई सीमा है?" },
      a: {
        en: "No. It is an open-ended scheme, so every ST student who meets the conditions is entitled to it.",
        hi: "नहीं। यह खुली योजना है, इसलिए शर्तें पूरी करने वाले हर ST छात्र को यह मिलनी चाहिए।",
      },
    },
    {
      q: { en: "Is there help for ST students in class 9 and 10?", hi: "क्या कक्षा 9 और 10 के ST छात्रों के लिए भी मदद है?" },
      a: {
        en: "Yes. A separate Pre-Matric Scholarship for ST students in class 9 and 10 pays ₹225 a month to day scholars and ₹525 a month to hostellers, with the same ₹2.5 lakh income limit.",
        hi: "हाँ। कक्षा 9 और 10 के ST छात्रों के लिए अलग प्री-मैट्रिक छात्रवृत्ति है, जिसमें घर से पढ़ने वालों को ₹225 महीना और हॉस्टल वालों को ₹525 महीना मिलता है, आय सीमा वही ₹2.5 लाख है।",
      },
    },
  ],

  officialUrl: "https://tribal.nic.in/ScholarshiP.aspx",
  sources: [
    "https://tribal.nic.in/ScholarshiP.aspx",
    "https://tribal.nic.in/downloads/guidelines/post-matric/EDUPostMatricScholarshipPMSforSTstudents230513.pdf",
    "https://scholarships.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "active",
};

export default scheme;
