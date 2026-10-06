import { all, isTrue, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nagaland-state-merit-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Nagaland State Merit Scholarship", hi: "नागालैंड राज्य मेरिट छात्रवृत्ति" },
  aka: ["State Merit Scholarship Nagaland", "Nagaland merit scholarship", "DHE Nagaland scholarship"],
  shortDescription: {
    en: "Indigenous students of Nagaland who score 80% in Class 10 or 12 (70% for graduation) get a state merit scholarship for post-matric studies, renewed each year they keep their marks up.",
    hi: "कक्षा 10 या 12 में 80% (स्नातक में 70%) लाने वाले नागालैंड के मूल निवासी विद्यार्थियों को मैट्रिक के बाद की पढ़ाई के लिए राज्य मेरिट छात्रवृत्ति मिलती है, जो अंक बनाए रखने पर हर साल नवीनीकृत होती है।",
  },
  level: "state",
  state: "nagaland",
  department: {
    en: "Directorate of Higher Education, Government of Nagaland",
    hi: "उच्च शिक्षा निदेशालय, नागालैंड सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "merit", "post matric", "college", "indigenous", "nagaland"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("nagaland"),
    labelled(isTrue("student"), {
      en: "You are studying above Class 10 (Class 11 onwards, diploma, degree, B.Ed or PG)",
      hi: "आप कक्षा 10 से ऊपर पढ़ रहे हैं (कक्षा 11 से आगे, डिप्लोमा, डिग्री, B.Ed या PG)",
    }),
    labelled(notGovtEmployee(), {
      en: "You are not a government or semi-government employee",
      hi: "आप सरकारी या अर्ध-सरकारी कर्मचारी नहीं हैं",
    }),
  ),

  details: {
    en: [
      "The Nagaland State Merit Scholarship is funded by the Government of Nagaland and run by the Directorate of Higher Education. It rewards high-scoring students in post-matric courses, from Class 11 up to post-graduation.",
      "Fresh applications are made in the first year of a course; beneficiaries renew each year if they pass with the required marks. Applications are online on the Nagaland common scholarship portal, open from 1 August to 31 October 2026 for this year. The guideline does not state the scholarship amount.",
    ],
    hi: [
      "नागालैंड राज्य मेरिट छात्रवृत्ति नागालैंड सरकार की ओर से दी जाती है और उच्च शिक्षा निदेशालय इसे चलाता है। यह कक्षा 11 से स्नातकोत्तर तक के कोर्स में अच्छे अंक लाने वाले विद्यार्थियों के लिए है।",
      "नया आवेदन कोर्स के पहले साल में होता है; ज़रूरी अंकों से पास होने पर लाभार्थी हर साल नवीनीकरण करते हैं। आवेदन नागालैंड के कॉमन स्कॉलरशिप पोर्टल पर ऑनलाइन होता है, इस साल 1 अगस्त से 31 अक्टूबर 2026 तक। दिशानिर्देश में छात्रवृत्ति की राशि नहीं दी गई है।",
    ],
  },
  benefits: {
    en: [
      "A yearly merit scholarship paid into your Aadhaar-seeded bank account.",
      "Renewed every year of the same course if you keep the required marks.",
    ],
    hi: [
      "हर साल मेरिट छात्रवृत्ति, आपके आधार से जुड़े बैंक खाते में।",
      "ज़रूरी अंक बनाए रखने पर उसी कोर्स के हर साल नवीनीकरण।",
    ],
  },
  eligibilityText: {
    en: [
      "You are an indigenous inhabitant of Nagaland studying above Class 10 in a recognised institution. Non-indigenous permanent residents can apply only if they were in the top 10 of a Board or University exam in Nagaland.",
      "Fresh: at least 80% in Class 10 (for Class 11 or diploma), 80% in Class 12 (for a degree), 80% in diploma (for lateral entry to engineering), or 70% in graduation (for B.Ed or PG).",
      "Renewal: at least 80% (Class 12 and diploma) or 70% (degree and PG) in the previous year of the same course.",
      "You must not have failed your last exam, must not get any other scholarship, and must not be a government or semi-government employee.",
    ],
    hi: [
      "आप नागालैंड के मूल निवासी हैं और किसी मान्यता प्राप्त संस्थान में कक्षा 10 से ऊपर पढ़ रहे हैं। गैर-मूल स्थायी निवासी तभी आवेदन कर सकते हैं जब वे नागालैंड के किसी बोर्ड या विश्वविद्यालय की परीक्षा में टॉप 10 में आए हों।",
      "नया आवेदन: कक्षा 10 में कम से कम 80% (कक्षा 11 या डिप्लोमा के लिए), कक्षा 12 में 80% (डिग्री के लिए), डिप्लोमा में 80% (इंजीनियरिंग में लेटरल एंट्री के लिए), या स्नातक में 70% (B.Ed या PG के लिए)।",
      "नवीनीकरण: उसी कोर्स के पिछले साल में कम से कम 80% (कक्षा 12 और डिप्लोमा) या 70% (डिग्री और PG)।",
      "आप पिछली परीक्षा में फ़ेल न हुए हों, कोई दूसरी छात्रवृत्ति न ले रहे हों, और सरकारी या अर्ध-सरकारी कर्मचारी न हों।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on scholarship.nagaland.gov.in after creating a DigiLocker account (Aadhaar authentication is done through DigiLocker).",
        "Apply for the Merit scholarship and upload your mark sheets and certificates.",
        "If you study in Nagaland, give the printout and documents to your institution for verification; if you study outside, post them to the Scholarship Section, Directorate of Higher Education, Kohima.",
      ],
      hi: [
        "DigiLocker खाता बनाकर scholarship.nagaland.gov.in पर पंजीकरण करें (आधार की पुष्टि DigiLocker से होती है)।",
        "Merit छात्रवृत्ति के लिए आवेदन करें और अपनी अंकतालिकाएँ और प्रमाण पत्र अपलोड करें।",
        "अगर आप नागालैंड में पढ़ते हैं तो प्रिंटआउट और दस्तावेज़ जाँच के लिए अपने संस्थान को दें; बाहर पढ़ते हैं तो उन्हें उच्च शिक्षा निदेशालय, कोहिमा के स्कॉलरशिप सेक्शन को डाक से भेजें।",
      ],
    },
  },
  documents: {
    en: [
      "Class 10 mark sheet and the mark sheets of the qualifying exam",
      "Scheduled Tribe certificate and Indigenous Inhabitant certificate (or Permanent Resident Certificate for non-indigenous toppers)",
      "Admission receipt and front page of your bank passbook",
      "Part B form from your institution (if studying outside Nagaland) and hostel certificate (for hostellers)",
    ],
    hi: [
      "कक्षा 10 की अंकतालिका और योग्यता परीक्षा की अंकतालिकाएँ",
      "अनुसूचित जनजाति प्रमाण पत्र और मूल निवासी प्रमाण पत्र (गैर-मूल टॉपर्स के लिए स्थायी निवास प्रमाण पत्र)",
      "दाखिले की रसीद और बैंक पासबुक का पहला पन्ना",
      "संस्थान का Part B फ़ॉर्म (नागालैंड से बाहर पढ़ने वालों के लिए) और हॉस्टल प्रमाण पत्र (हॉस्टल में रहने वालों के लिए)",
    ],
  },

  officialUrl: "https://scholarship.nagaland.gov.in/",
  sources: [
    "https://scholarship.nagaland.gov.in/uploaded-documents/13/view",
    "https://scholarship.nagaland.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
