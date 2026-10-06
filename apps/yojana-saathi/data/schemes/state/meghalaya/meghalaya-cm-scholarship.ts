import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "meghalaya-cm-scholarship",
  name: { en: "Chief Minister's Scholarship Scheme (Meghalaya)", hi: "मुख्यमंत्री छात्रवृत्ति योजना (मेघालय)" },
  aka: ["CMSS", "CM Scholarship Meghalaya", "Meghalaya ₹6000 scholarship"],
  shortDescription: {
    en: "₹6,000 a year for every Meghalaya student in a regular course from Class 11 to PhD, with no income limit. It can be taken along with other scholarships.",
    hi: "मेघालय के 11वीं से PhD तक नियमित पढ़ाई कर रहे हर छात्र को हर साल ₹6,000, बिना आय सीमा के। इसे दूसरी छात्रवृत्तियों के साथ भी ले सकते हैं।",
  },
  level: "state",
  state: "meghalaya",
  department: {
    en: "Education Department, Government of Meghalaya (Directorate of Higher & Technical Education)",
    hi: "शिक्षा विभाग, मेघालय सरकार (उच्च एवं तकनीकी शिक्षा निदेशालय)",
  },
  categories: ["education"],
  tags: ["scholarship", "students", "college", "class 11", "6000", "meghalaya one", "meghalaya"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 6000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(residentOf("meghalaya"), isTrue("student")),

  details: {
    en: [
      "The Chief Minister's Scholarship Scheme (CMSS) was notified by the Meghalaya Education Department in August 2025 and runs from the 2025-26 academic year. It gives a fixed scholarship to students domiciled in Meghalaya, from Class 11 up to PhD.",
      "Every eligible student gets ₹6,000 a year, paid straight into their bank account. There is no income ceiling, and you can take it on top of scholarships from the National Scholarship Portal or other portals.",
      "Applications are made online on the MeghalayaOne portal. For 2026-27, fresh and renewal applications open in October 2026, according to the Directorate's advertisement.",
    ],
    hi: [
      "मुख्यमंत्री छात्रवृत्ति योजना (CMSS) को मेघालय शिक्षा विभाग ने अगस्त 2025 में अधिसूचित किया और यह 2025-26 के शैक्षणिक सत्र से लागू है। इसमें मेघालय के मूल निवासी छात्रों को 11वीं से PhD तक एक तय छात्रवृत्ति मिलती है।",
      "हर पात्र छात्र को हर साल ₹6,000 सीधे बैंक खाते में मिलते हैं। कोई आय सीमा नहीं है, और इसे नेशनल स्कॉलरशिप पोर्टल या दूसरे पोर्टलों की छात्रवृत्तियों के साथ भी लिया जा सकता है।",
      "आवेदन MeghalayaOne पोर्टल पर ऑनलाइन होता है। निदेशालय के विज्ञापन के अनुसार 2026-27 के लिए नए और नवीनीकरण आवेदन अक्टूबर 2026 में खुल रहे हैं।",
    ],
  },
  benefits: {
    en: [
      "₹6,000 a year per student.",
      "Paid directly into the student's bank account.",
      "Can be held together with other scholarships.",
    ],
    hi: [
      "हर छात्र को हर साल ₹6,000।",
      "सीधे छात्र के बैंक खाते में।",
      "दूसरी छात्रवृत्तियों के साथ भी मिल सकती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Domicile of Meghalaya.",
      "A full-time, regular student from Class 11 to PhD in a recognised school, college, university, diploma institute or NCVT-affiliated institute, in Meghalaya or outside.",
      "A bank account, mobile number and email ID in your name.",
      "No income limit.",
    ],
    hi: [
      "मेघालय के मूल निवासी।",
      "मेघालय में या बाहर किसी मान्यता प्राप्त स्कूल, कॉलेज, विश्वविद्यालय, डिप्लोमा संस्थान या NCVT से जुड़े संस्थान में 11वीं से PhD तक का नियमित, पूर्णकालिक छात्र।",
      "अपने नाम का बैंक खाता, मोबाइल नंबर और ईमेल ID।",
      "कोई आय सीमा नहीं।",
    ],
  },
  exclusions: {
    en: [
      "Students in part-time or correspondence (distance) courses.",
      "The scholarship can be cancelled for misconduct, or if you score below 35% in the previous year.",
      "If you are found ineligible later, you must return the whole amount.",
    ],
    hi: [
      "अंशकालिक या पत्राचार (दूरस्थ) कोर्स के छात्र।",
      "दुर्व्यवहार पर, या पिछले साल 35% से कम अंक आने पर छात्रवृत्ति रद्द हो सकती है।",
      "बाद में अपात्र पाए जाने पर पूरी राशि लौटानी होगी।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to meghalayaone.gov.in and register or log in.",
        "Open the Chief Minister's Scholarship Scheme and choose a fresh application or renewal.",
        "Fill in your details, upload the documents and submit before the closing date. Fix any problems the Directorate flags during verification.",
      ],
      hi: [
        "meghalayaone.gov.in पर जाएँ और रजिस्टर या लॉग इन करें।",
        "मुख्यमंत्री छात्रवृत्ति योजना खोलें और नया आवेदन या नवीनीकरण चुनें।",
        "अपनी जानकारी भरें, दस्तावेज़ अपलोड करें और आख़िरी तारीख़ से पहले जमा करें। जाँच के दौरान निदेशालय जो कमी बताए, उसे ठीक करें।",
      ],
    },
  },
  documents: {
    en: [
      "One ID for you or your parents: MHIS card, MGNREGA job card, Voter ID (EPIC) or ration card",
      "Mark sheet of the previous year",
      "Bonafide certificate from your institution",
      "Recent passport-size photo",
      "Bank passbook or cancelled cheque",
    ],
    hi: [
      "आपका या माता-पिता का एक पहचान पत्र: MHIS कार्ड, मनरेगा जॉब कार्ड, वोटर ID (EPIC) या राशन कार्ड",
      "पिछले साल का अंक पत्र",
      "संस्थान का बोनाफ़ाइड प्रमाण पत्र",
      "हाल की पासपोर्ट साइज़ फ़ोटो",
      "बैंक पासबुक या रद्द किया हुआ चेक",
    ],
  },
  faqs: [
    {
      q: { en: "I already get a post-matric scholarship. Can I also apply?", hi: "मुझे पहले से पोस्ट-मैट्रिक छात्रवृत्ति मिलती है। क्या मैं भी आवेदन कर सकता हूँ?" },
      a: {
        en: "Yes. The rules allow you to take CMSS along with scholarships from the National Scholarship Portal or other portals.",
        hi: "हाँ। नियमों के अनुसार आप CMSS को नेशनल स्कॉलरशिप पोर्टल या दूसरे पोर्टलों की छात्रवृत्ति के साथ ले सकते हैं।",
      },
    },
    {
      q: { en: "I study outside Meghalaya. Am I eligible?", hi: "मैं मेघालय से बाहर पढ़ता हूँ। क्या मैं पात्र हूँ?" },
      a: {
        en: "Yes, if you are a Meghalaya domicile in a regular course at a recognised institution, inside or outside the state.",
        hi: "हाँ, अगर आप मेघालय के मूल निवासी हैं और राज्य के अंदर या बाहर किसी मान्यता प्राप्त संस्थान में नियमित कोर्स कर रहे हैं।",
      },
    },
    {
      q: { en: "Do I need to apply again every year?", hi: "क्या हर साल दोबारा आवेदन करना होगा?" },
      a: {
        en: "Yes, existing students apply for renewal on the same portal each year with their latest mark sheet and bonafide certificate.",
        hi: "हाँ, पहले से लाभ ले रहे छात्र हर साल उसी पोर्टल पर ताज़ा अंक पत्र और बोनाफ़ाइड प्रमाण पत्र के साथ नवीनीकरण का आवेदन करते हैं।",
      },
    },
  ],

  officialUrl: "https://meghalayaone.gov.in/",
  sources: [
    "https://megeducation.gov.in/edu_dept/notices_and_circulars/2025/CM%20Scholarship%20guidelines.pdf",
    "https://megeducation.gov.in/edu_dept/notices_and_circulars/2026/Chief%20Minister%20Scholarship%202026.pdf",
    "https://megfinance.gov.in/budget_documents/2026-2027/others/budget_speech.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
