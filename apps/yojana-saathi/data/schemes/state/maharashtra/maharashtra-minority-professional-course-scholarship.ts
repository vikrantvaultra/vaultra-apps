import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-minority-professional-course-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Scholarship for Minority Students in Higher and Professional Courses", hi: "उच्च और प्रोफ़ेशनल कोर्स के अल्पसंख्यक छात्रों के लिए छात्रवृत्ति" },
  shortDescription: {
    en: "Muslim, Buddhist, Christian, Sikh, Parsi, Jain and Jewish students in Maharashtra in technical, medical or agriculture courses get up to ₹50,000 a year towards fees, if family income is up to ₹8 lakh.",
    hi: "महाराष्ट्र के मुस्लिम, बौद्ध, ईसाई, सिख, पारसी, जैन और यहूदी छात्रों को तकनीकी, मेडिकल या कृषि कोर्स की फ़ीस के लिए ₹50,000 सालाना तक मिलते हैं, अगर परिवार की आय ₹8 लाख तक है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Minority Development Department, Government of Maharashtra", hi: "अल्पसंख्यक विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "minority"],
  tags: ["minority scholarship", "muslim", "professional course", "engineering", "medical", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    isTrue("minority"),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["The Minority Development Department funds this scholarship for minority students in professional and technical courses. It is handled for different courses by Technical Education (engineering, pharmacy and similar), Medical Education (MBBS, BDS, AYUSH, nursing, physiotherapy and other health courses) and the agriculture council.", "The scholarship pays your actual tuition and exam fee, up to a yearly limit. For medical courses, 30% of awards are kept for girls."],
    hi: ["अल्पसंख्यक विकास विभाग यह छात्रवृत्ति प्रोफ़ेशनल और तकनीकी कोर्स के अल्पसंख्यक छात्रों के लिए देता है। अलग-अलग कोर्स के लिए इसे तकनीकी शिक्षा (इंजीनियरिंग, फ़ार्मेसी आदि), चिकित्सा शिक्षा (MBBS, BDS, आयुष, नर्सिंग, फ़िज़ियोथेरेपी और दूसरे स्वास्थ्य कोर्स) और कृषि परिषद चलाते हैं।", "छात्रवृत्ति में आपकी असली ट्यूशन और परीक्षा फ़ीस, सालाना सीमा तक, मिलती है। मेडिकल कोर्स में 30% छात्रवृत्ति लड़कियों के लिए रखी जाती है।"],
  },
  benefits: {
    en: ["Actual tuition and exam fee or ₹50,000 a year, whichever is less."],
    hi: ["असली ट्यूशन और परीक्षा फ़ीस या ₹50,000 सालाना, इनमें जो भी कम हो।"],
  },
  eligibilityText: {
    en: ["Belongs to a notified minority community (Muslim, Buddhist, Christian, Sikh, Parsi, Jain or Jewish).", "Maharashtra domicile; for technical and agriculture courses, passed class 10 from Maharashtra.", "Admitted to a recognised professional or technical diploma, degree or postgraduate course through CAP, entrance exam or institute-level admission.", "Family income up to ₹8 lakh a year, and no other scholarship or stipend."],
    hi: ["अधिसूचित अल्पसंख्यक समुदाय (मुस्लिम, बौद्ध, ईसाई, सिख, पारसी, जैन या यहूदी) से हो।", "महाराष्ट्र का अधिवास; तकनीकी और कृषि कोर्स के लिए कक्षा 10 महाराष्ट्र से पास की हो।", "CAP, प्रवेश परीक्षा या संस्थान-स्तर पर दाख़िला लेकर मान्य प्रोफ़ेशनल या तकनीकी डिप्लोमा, डिग्री या पोस्ट-ग्रेजुएट कोर्स कर रहा हो।", "परिवार की सालाना आय ₹8 लाख तक, और कोई दूसरी छात्रवृत्ति या स्टाइपेंड न हो।"],
  },
  documents: {
    en: ["Class 10 and later mark sheets", "Income certificate or affidavit that also states your minority community", "Domicile certificate or other proof of residence", "Aadhaar card"],
    hi: ["कक्षा 10 और उसके बाद की मार्कशीट", "आय प्रमाण पत्र या शपथ पत्र, जिसमें आपका अल्पसंख्यक समुदाय भी लिखा हो", "अधिवास प्रमाण पत्र या निवास का दूसरा सबूत", "आधार कार्ड"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Scholarship for students of minority communities pursuing Higher and Professional courses', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Scholarship for students of minority communities pursuing Higher and Professional courses' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2C489D8FEE1DE79D3D179EC97AB141825125A9561892EF10", "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3DED9E25855FB26766A86AA048E5C167661433728284252E", "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A14D02B3B9D1B4C86EFDF20E447AB42D8B9E7FDA684F6DF59"],
  lastVerified: "2026-10-06",
  launchedYear: 2011,
  status: "active",
};

export default scheme;
