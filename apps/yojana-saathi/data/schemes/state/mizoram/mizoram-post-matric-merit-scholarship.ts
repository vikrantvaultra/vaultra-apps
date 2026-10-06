import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mizoram-post-matric-merit-scholarship",
  overlapGroup: "scholarship",
  name: { en: "Mizoram State Post Matric Merit Scholarship", hi: "मिज़ोरम राज्य पोस्ट मैट्रिक मेरिट छात्रवृत्ति" },
  aka: ["PMMS Mizoram", "Mizoram merit scholarship", "Mizoram Scholarship Board merit scholarship"],
  shortDescription: {
    en: "A state-funded merit scholarship for Mizoram students in Class 11 and above who scored at least 60% (first division) in their last Board or University exam.",
    hi: "मिज़ोरम के कक्षा 11 और उससे आगे के उन विद्यार्थियों के लिए राज्य की मेरिट छात्रवृत्ति, जिन्होंने पिछली बोर्ड या यूनिवर्सिटी परीक्षा में कम से कम 60% (फ़र्स्ट डिवीज़न) अंक पाए हों।",
  },
  level: "state",
  state: "mizoram",
  department: {
    en: "Mizoram Scholarship Board, Government of Mizoram",
    hi: "मिज़ोरम स्कॉलरशिप बोर्ड, मिज़ोरम सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "merit", "college", "post matric", "60 percent", "mizoram"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("mizoram"),
    isTrue("student"),
    labelled(when("caste", "in", ["st", "pvtg"]), {
      en: "You are a Scheduled Tribe student (the 2026-27 form is for ST students)",
      hi: "आप अनुसूचित जनजाति के विद्यार्थी हैं (2026-27 का फ़ॉर्म ST विद्यार्थियों के लिए है)",
    }),
  ),

  details: {
    en: [
      "The Post Matric Merit Scholarship is paid entirely from Mizoram's own budget and is handled by the Mizoram Scholarship Board. It rewards students who are permanent residents of Mizoram and passed their last Board or University exam with at least 60% marks.",
      "The scholarship covers a monthly maintenance amount and, in some cases, reimbursement of fees. The rates are fixed by the Board each year and are not published with the form.",
      "For 2026-27, forms were issued on 1 July 2026 and must be submitted by 30 October 2026, with an application fee of ₹20. Both fresh and renewal applications are accepted.",
    ],
    hi: [
      "पोस्ट मैट्रिक मेरिट छात्रवृत्ति पूरी तरह मिज़ोरम सरकार के बजट से दी जाती है और मिज़ोरम स्कॉलरशिप बोर्ड इसे संभालता है। यह मिज़ोरम के स्थायी निवासी उन विद्यार्थियों के लिए है जिन्होंने पिछली बोर्ड या यूनिवर्सिटी परीक्षा कम से कम 60% अंकों से पास की हो।",
      "छात्रवृत्ति में हर महीने का भरण-पोषण भत्ता और कुछ मामलों में फ़ीस की भरपाई शामिल है। दरें हर साल बोर्ड तय करता है और फ़ॉर्म के साथ प्रकाशित नहीं होतीं।",
      "2026-27 के लिए फ़ॉर्म 1 जुलाई 2026 को जारी हुए और इन्हें 30 अक्टूबर 2026 तक ₹20 आवेदन फ़ीस के साथ जमा करना है। नए और नवीनीकरण (रिन्यूअल) दोनों आवेदन लिए जाते हैं।",
    ],
  },
  benefits: {
    en: [
      "A monthly maintenance allowance for the academic year, at the rate set by the Board.",
      "Reimbursement of fees where applicable.",
      "Can be renewed each year if you keep meeting the conditions.",
    ],
    hi: [
      "शैक्षणिक साल के लिए हर महीने भरण-पोषण भत्ता, बोर्ड की तय दर पर।",
      "जहाँ लागू हो, फ़ीस की भरपाई।",
      "शर्तें पूरी करते रहने पर हर साल नवीनीकरण।",
    ],
  },
  eligibilityText: {
    en: [
      "A child or ward of a bona fide permanent resident of Mizoram (the 2026-27 form is issued for Scheduled Tribe students).",
      "Studying regularly in a recognised post-matric institution anywhere in India.",
      "At least 60% marks (first division) in the last Board or University exam.",
      "Not holding another scholarship or stipend of higher value.",
    ],
    hi: [
      "मिज़ोरम के वास्तविक स्थायी निवासी की संतान या आश्रित (2026-27 का फ़ॉर्म अनुसूचित जनजाति के विद्यार्थियों के लिए जारी हुआ है)।",
      "भारत में कहीं भी किसी मान्यता प्राप्त पोस्ट-मैट्रिक संस्थान में नियमित पढ़ाई।",
      "पिछली बोर्ड या यूनिवर्सिटी परीक्षा में कम से कम 60% अंक (फ़र्स्ट डिवीज़न)।",
      "इससे ज़्यादा राशि की कोई दूसरी छात्रवृत्ति या स्टाइपेंड न मिल रहा हो।",
    ],
  },
  exclusions: {
    en: [
      "Students studying through correspondence courses.",
      "Students repeating the same stage of education in a different subject, or doing a second professional course at the same level.",
      "Students found guilty of misconduct or breach of discipline.",
      "Students who scored below 60% in the last exam.",
    ],
    hi: [
      "पत्राचार (कॉरेस्पॉन्डेंस) कोर्स से पढ़ने वाले विद्यार्थी।",
      "जो उसी स्तर की पढ़ाई दूसरे विषय में दोबारा कर रहे हों, या उसी स्तर का दूसरा प्रोफ़ेशनल कोर्स कर रहे हों।",
      "अनुशासन तोड़ने या दुर्व्यवहार के दोषी पाए गए विद्यार्थी।",
      "पिछली परीक्षा में 60% से कम अंक पाने वाले विद्यार्थी।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Collect the application form from the Mizoram Scholarship Board office during working hours, or download it from msb.mizoram.gov.in.",
        "Fill in Part A, get the residence certificate (Part B) signed by an MP, MLA, Deputy Commissioner, SDO (Civil) or a Class I officer, and get Part D filled in by the head of your institution.",
        "Submit the form with the documents and the ₹20 fee at the Mizoram Scholarship Board by the last date (30 October 2026 for 2026-27).",
      ],
      hi: [
        "कामकाजी समय में मिज़ोरम स्कॉलरशिप बोर्ड के दफ़्तर से आवेदन फ़ॉर्म लें, या msb.mizoram.gov.in से डाउनलोड करें।",
        "भाग A भरें, निवास प्रमाण पत्र (भाग B) पर सांसद, विधायक, डिप्टी कमिश्नर, SDO (सिविल) या क्लास-I अधिकारी के हस्ताक्षर कराएँ, और भाग D अपने संस्थान के प्रमुख से भरवाएँ।",
        "दस्तावेज़ों और ₹20 फ़ीस के साथ फ़ॉर्म आख़िरी तारीख़ तक (2026-27 के लिए 30 अक्टूबर 2026) मिज़ोरम स्कॉलरशिप बोर्ड में जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Attested copies of the HSLC mark sheet and the last exam's mark sheet",
      "Scheduled Tribe certificate issued by the Deputy Commissioner (fresh applicants)",
      "Hostel warden's certificate countersigned by the head of the institution",
      "Attested copies of the first page of your bank passbook and your Aadhaar card",
      "Proof of admission, if you study outside Mizoram",
    ],
    hi: [
      "HSLC और पिछली परीक्षा की मार्कशीट की सत्यापित कॉपी",
      "डिप्टी कमिश्नर का जारी अनुसूचित जनजाति प्रमाण पत्र (नए आवेदकों के लिए)",
      "संस्थान प्रमुख के प्रतिहस्ताक्षर वाला हॉस्टल वार्डन का प्रमाण पत्र",
      "बैंक पासबुक के पहले पन्ने और आधार कार्ड की सत्यापित कॉपी",
      "मिज़ोरम के बाहर पढ़ते हों तो दाख़िले का सबूत",
    ],
  },
  faqs: [
    {
      q: { en: "Is this applied for on the National Scholarship Portal?", hi: "क्या इसके लिए नेशनल स्कॉलरशिप पोर्टल पर आवेदन होता है?" },
      a: {
        en: "No. This is a state scheme with a paper form submitted to the Mizoram Scholarship Board, unlike the central post-matric scholarships which use NSP.",
        hi: "नहीं। यह राज्य की योजना है जिसका काग़ज़ी फ़ॉर्म मिज़ोरम स्कॉलरशिप बोर्ड में जमा होता है, जबकि केंद्र की पोस्ट-मैट्रिक छात्रवृत्तियाँ NSP से होती हैं।",
      },
    },
    {
      q: { en: "Can I hold this with another scholarship?", hi: "क्या इसे दूसरी छात्रवृत्ति के साथ ले सकते हैं?" },
      a: {
        en: "Not if the other one is worth more. You must choose and tell the Board through your principal; payment under this scheme stops from the date you accept a higher-value award.",
        hi: "अगर दूसरी छात्रवृत्ति ज़्यादा राशि की है तो नहीं। आपको एक चुनकर अपने प्रिंसिपल के ज़रिए बोर्ड को बताना होगा; ज़्यादा राशि वाली छात्रवृत्ति स्वीकार करने की तारीख़ से इस योजना का भुगतान बंद हो जाता है।",
      },
    },
  ],

  officialUrl: "https://msb.mizoram.gov.in/post/post-matrict-merit-scholarship-2026-2027",
  sources: [
    "https://msb.mizoram.gov.in/uploads/attachments/2026/06/a507f5ed5a716eec8d2570e22cd4ed8c/scholarship-scheme-to-be-upload.pdf",
    "https://msb.mizoram.gov.in/uploads/attachments/2026/07/2c0858f453bc72f83c76173d05bef300/pmms-application-form-2026-2027.pdf",
    "https://msb.mizoram.gov.in/post/post-matrict-merit-scholarship-2026-2027",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "active",
};

export default scheme;
