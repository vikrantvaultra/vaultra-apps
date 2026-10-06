import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shahu-maharaj-shikshan-shulk-shishyavrutti",
  overlapGroup: "scholarship",
  name: {
    en: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti (EBC Fee Scholarship)",
    hi: "राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क शिष्यवृत्ति (EBC फ़ीस छात्रवृत्ति)",
  },
  aka: ["EBC Scholarship", "Shahu Maharaj Fee Reimbursement", "Mulinna Mofat Shikshan", "EBC Freeship"],
  shortDescription: {
    en: "Open-category (including SEBC and EWS) students in Maharashtra from families earning up to ₹8 lakh get 50% to 100% of college tuition and exam fees back. Girls get 100%.",
    hi: "महाराष्ट्र के ओपन वर्ग (SEBC और EWS सहित) के छात्रों को, जिनके परिवार की सालाना आय ₹8 लाख तक है, कॉलेज की ट्यूशन और परीक्षा फ़ीस का 50% से 100% वापस मिलता है। लड़कियों को 100%।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Higher and Technical Education Department (with the Medical Education, Agriculture and other departments), Government of Maharashtra",
    hi: "उच्च एवं तकनीकी शिक्षा विभाग (चिकित्सा शिक्षा, कृषि और अन्य विभागों के साथ), महाराष्ट्र सरकार",
  },
  categories: ["education"],
  tags: ["scholarship", "fee reimbursement", "ebc", "ews", "girls free education", "engineering", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "general"), {
      en: "Admitted in the open (general) category, including SEBC and EWS seats",
      hi: "ओपन (सामान्य) वर्ग में दाख़िला, जिसमें SEBC और EWS सीटें भी शामिल हैं",
    }),
    incomeUpTo(800_000),
  ),

  details: {
    en: [
      "This is Maharashtra's main fee scholarship for students who don't get caste-based scholarships. It pays back part or all of the tuition fee and exam fee for degree, diploma and postgraduate courses.",
      "It is run separately by several departments for the courses they handle: Higher Education (arts, science, commerce, law, B.Ed), Technical Education (engineering, pharmacy, MBA and similar), Medical Education (MBBS, BDS, BAMS, nursing and others), the Directorate of Art, and the agriculture and veterinary universities. All of them take applications on the MahaDBT portal.",
      "Since the 2024-25 academic year, girls from families earning up to ₹8 lakh get 100% of tuition and exam fees for professional courses as well. The money is paid by DBT into the student's Aadhaar-seeded bank account, usually in two instalments.",
    ],
    hi: [
      "यह महाराष्ट्र की मुख्य फ़ीस छात्रवृत्ति है, उन छात्रों के लिए जिन्हें जाति के आधार पर छात्रवृत्ति नहीं मिलती। इसमें डिग्री, डिप्लोमा और पोस्ट-ग्रेजुएट कोर्स की ट्यूशन फ़ीस और परीक्षा फ़ीस का कुछ हिस्सा या पूरी फ़ीस वापस मिलती है।",
      "इसे कई विभाग अपने-अपने कोर्स के लिए अलग से चलाते हैं: उच्च शिक्षा (आर्ट्स, साइंस, कॉमर्स, लॉ, B.Ed), तकनीकी शिक्षा (इंजीनियरिंग, फ़ार्मेसी, MBA आदि), चिकित्सा शिक्षा (MBBS, BDS, BAMS, नर्सिंग आदि), कला निदेशालय, और कृषि व पशु-विज्ञान विश्वविद्यालय। सभी के आवेदन MahaDBT पोर्टल पर होते हैं।",
      "2024-25 सत्र से ₹8 लाख तक आय वाले परिवारों की लड़कियों को प्रोफ़ेशनल कोर्स में भी 100% ट्यूशन और परीक्षा फ़ीस मिलती है। पैसा DBT से छात्र के आधार से जुड़े बैंक खाते में आता है, आमतौर पर दो किस्तों में।",
    ],
  },
  benefits: {
    en: [
      "Girls: 100% of tuition fee and exam fee, for professional and non-professional courses, if family income is up to ₹8 lakh.",
      "Boys in professional courses (engineering, medical, pharmacy, MBA etc.): 50% of tuition and exam fees. Under Higher Education, boys with family income up to ₹2.5 lakh in government or aided colleges get 100%.",
      "Boys in non-professional courses under Higher Education (BA, BSc, BCom etc.): 100% of tuition and exam fees.",
      "Paid every year until the course is completed, if you pass and keep attendance.",
    ],
    hi: [
      "लड़कियाँ: परिवार की आय ₹8 लाख तक हो तो प्रोफ़ेशनल और नॉन-प्रोफ़ेशनल, दोनों तरह के कोर्स में 100% ट्यूशन और परीक्षा फ़ीस।",
      "प्रोफ़ेशनल कोर्स (इंजीनियरिंग, मेडिकल, फ़ार्मेसी, MBA आदि) में लड़के: ट्यूशन और परीक्षा फ़ीस का 50%। उच्च शिक्षा विभाग में सरकारी या अनुदानित कॉलेज के जिन लड़कों की पारिवारिक आय ₹2.5 लाख तक है, उन्हें 100%।",
      "उच्च शिक्षा विभाग के नॉन-प्रोफ़ेशनल कोर्स (BA, BSc, BCom आदि) में लड़के: ट्यूशन और परीक्षा फ़ीस का 100%।",
      "पास होते रहने और हाज़िरी पूरी रखने पर कोर्स पूरा होने तक हर साल मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Domicile of Maharashtra (students from the Maharashtra–Karnataka border area can also apply for Higher Education courses).",
      "Admitted in the open category, SEBC or EWS seat, and not getting any other scholarship or stipend.",
      "Total family income up to ₹8 lakh a year.",
      "For professional courses, admission must be through the centralised admission process (CAP). Deemed and private universities are not covered.",
      "Only the first two children of a family can get it in a given year.",
      "No gap of 2 years or more during the course, and at least 50% attendance in the previous semester.",
    ],
    hi: [
      "महाराष्ट्र का अधिवासी हो (उच्च शिक्षा के कोर्स के लिए महाराष्ट्र–कर्नाटक सीमा क्षेत्र के छात्र भी आवेदन कर सकते हैं)।",
      "ओपन वर्ग, SEBC या EWS सीट पर दाख़िला हो, और कोई दूसरी छात्रवृत्ति या स्टाइपेंड न मिल रहा हो।",
      "परिवार की कुल सालाना आय ₹8 लाख तक हो।",
      "प्रोफ़ेशनल कोर्स में दाख़िला केंद्रीय प्रवेश प्रक्रिया (CAP) से हुआ हो। डीम्ड और प्राइवेट विश्वविद्यालय इसमें शामिल नहीं हैं।",
      "एक साल में परिवार के पहले दो बच्चों को ही यह मिल सकता है।",
      "कोर्स के दौरान 2 साल या उससे ज़्यादा का गैप न हो, और पिछले सेमेस्टर में कम से कम 50% हाज़िरी हो।",
    ],
  },
  exclusions: {
    en: [
      "Students admitted through management quota or institute-level seats in professional courses.",
      "Students in deemed universities or self-financed private universities.",
      "Distance, virtual and part-time courses.",
      "Students who take any other scholarship or stipend in the same year.",
      "SC, ST, OBC, VJNT and SBC students, who apply under their own category's scholarships instead.",
    ],
    hi: [
      "प्रोफ़ेशनल कोर्स में मैनेजमेंट कोटा या संस्थान-स्तर की सीट पर दाख़िला लेने वाले छात्र।",
      "डीम्ड विश्वविद्यालय या स्व-वित्तपोषित प्राइवेट विश्वविद्यालय के छात्र।",
      "दूरस्थ (डिस्टेंस), वर्चुअल और पार्ट-टाइम कोर्स।",
      "उसी साल कोई दूसरी छात्रवृत्ति या स्टाइपेंड लेने वाले छात्र।",
      "SC, ST, OBC, VJNT और SBC छात्र, जो अपनी श्रेणी की छात्रवृत्ति योजनाओं में आवेदन करते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification.",
        "Complete your profile: personal, income, current course and past education details, and an Aadhaar-seeded bank account.",
        "Under 'All Schemes', open your department's 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti' (for medical courses, the 'Fee Reimbursement' or girls' 100% scheme), upload documents and submit.",
        "Your college checks the application first, then the department approves it. Renew every year from your existing application.",
      ],
      hi: [
        "mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें।",
        "अपनी प्रोफ़ाइल पूरी करें: निजी जानकारी, आय, मौजूदा कोर्स और पिछली पढ़ाई, और आधार से जुड़ा बैंक खाता।",
        "'All Schemes' में अपने विभाग की 'राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क शिष्यवृत्ति' (मेडिकल कोर्स के लिए 'Fee Reimbursement' या लड़कियों की 100% वाली योजना) खोलें, दस्तावेज़ अपलोड करें और जमा करें।",
        "पहले आपका कॉलेज आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल पुराने आवेदन से ही नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: [
      "Maharashtra domicile certificate",
      "Family income certificate for the previous financial year",
      "Class 10 and later mark sheets, and the previous year's mark sheet for renewal",
      "CAP allotment letter (for professional courses)",
      "Undertaking that no more than two children of the family are claiming the benefit",
      "Gap certificate, if there is a break in studies",
    ],
    hi: [
      "महाराष्ट्र अधिवास प्रमाण पत्र",
      "पिछले वित्त वर्ष का पारिवारिक आय प्रमाण पत्र",
      "कक्षा 10 और उसके बाद की मार्कशीट, और नवीनीकरण के लिए पिछले साल की मार्कशीट",
      "CAP अलॉटमेंट लेटर (प्रोफ़ेशनल कोर्स के लिए)",
      "शपथ पत्र कि परिवार के दो से ज़्यादा बच्चे यह लाभ नहीं ले रहे",
      "पढ़ाई में गैप हो तो गैप सर्टिफ़िकेट",
    ],
  },
  faqs: [
    {
      q: { en: "Is college really free for girls now?", hi: "क्या अब लड़कियों के लिए कॉलेज सच में मुफ़्त है?" },
      a: {
        en: "For girls from families earning up to ₹8 lakh, the state pays back 100% of tuition and exam fees in eligible courses (CAP admissions for professional courses). Other charges like hostel fees are not covered by this scheme.",
        hi: "₹8 लाख तक आय वाले परिवारों की लड़कियों को पात्र कोर्स (प्रोफ़ेशनल कोर्स में CAP से दाख़िला) में 100% ट्यूशन और परीक्षा फ़ीस वापस मिलती है। हॉस्टल फ़ीस जैसे दूसरे ख़र्च इस योजना में नहीं आते।",
      },
    },
    {
      q: { en: "Can I also get a hostel allowance?", hi: "क्या मुझे हॉस्टल भत्ता भी मिल सकता है?" },
      a: {
        en: "Yes. If you live away from home, you can apply separately for the Dr. Panjabrao Deshmukh Hostel Maintenance Allowance on MahaDBT.",
        hi: "हाँ। अगर आप घर से दूर रहकर पढ़ते हैं, तो MahaDBT पर डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना के लिए अलग से आवेदन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: [
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA86467549C6E0CFFDFD61E992C8610ED352EC9DEF886C9CD",
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A7F4D327BDEB7125DE0BA4AE1C51180C272281017EBEF6F7C",
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A8813422C6527A70BC8F386DEBD6292C54D5D3E063C32F598",
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AF93663E6569EFD2493B74079C9D4BC045DDEC4D398AED1BA",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
