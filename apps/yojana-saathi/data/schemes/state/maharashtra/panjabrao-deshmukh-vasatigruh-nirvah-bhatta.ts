import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "panjabrao-deshmukh-vasatigruh-nirvah-bhatta",
  overlapGroup: "scholarship",
  name: {
    en: "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojana (Hostel Maintenance Allowance)",
    hi: "डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना (हॉस्टल निर्वाह भत्ता)",
  },
  aka: ["Panjabrao Deshmukh Hostel Allowance", "Vastigruh Nirvah Bhatta", "Punjabrao Deshmukh Scholarship"],
  shortDescription: {
    en: "A yearly allowance for food and lodging for open-category students in Maharashtra who live in a hostel, PG or rented room for college, especially children of registered labourers and small farmers.",
    hi: "महाराष्ट्र के ओपन वर्ग के उन छात्रों को खाने और रहने के लिए सालाना भत्ता, जो कॉलेज के लिए हॉस्टल, PG या किराए के कमरे में रहते हैं, ख़ासकर पंजीकृत मज़दूरों और छोटे किसानों के बच्चे।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Higher and Technical Education Department (with the Medical Education, Agriculture and other departments), Government of Maharashtra",
    hi: "उच्च एवं तकनीकी शिक्षा विभाग (चिकित्सा शिक्षा, कृषि और अन्य विभागों के साथ), महाराष्ट्र सरकार",
  },
  categories: ["education"],
  tags: ["hostel allowance", "scholarship", "farmer children", "labour children", "ebc", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "general"), {
      en: "Admitted in the open (general) category, including SEBC seats",
      hi: "ओपन (सामान्य) वर्ग में दाख़िला, जिसमें SEBC सीटें भी शामिल हैं",
    }),
    incomeUpTo(800_000),
  ),

  details: {
    en: [
      "This scheme helps open-category students who have to stay away from home to study a professional course. It gives a yearly allowance towards food, room rent and daily living costs while you live in a hostel, paying-guest room or rented room.",
      "It is run separately by the Higher Education, Technical Education, Medical Education, Art, agriculture (MCAER) and veterinary (MAFSU) departments for their own courses. All of them take applications on MahaDBT.",
      "Children of registered labourers and of marginal (alpabhudharak) farmers get the highest priority. Students from families earning up to ₹1 lakh are also covered fully, while those earning ₹1 lakh to ₹8 lakh are selected on merit within a district quota.",
    ],
    hi: [
      "यह योजना ओपन वर्ग के उन छात्रों की मदद करती है जिन्हें प्रोफ़ेशनल कोर्स के लिए घर से दूर रहना पड़ता है। हॉस्टल, PG या किराए के कमरे में रहने के दौरान खाने, किराए और रोज़मर्रा के ख़र्च के लिए सालाना भत्ता मिलता है।",
      "इसे उच्च शिक्षा, तकनीकी शिक्षा, चिकित्सा शिक्षा, कला, कृषि (MCAER) और पशु-विज्ञान (MAFSU) विभाग अपने-अपने कोर्स के लिए अलग से चलाते हैं। सभी के आवेदन MahaDBT पर होते हैं।",
      "पंजीकृत मज़दूरों और अल्पभूधारक (छोटे) किसानों के बच्चों को सबसे पहले लाभ मिलता है। ₹1 लाख तक आय वाले परिवारों के छात्र भी पूरी तरह शामिल हैं, जबकि ₹1 लाख से ₹8 लाख आय वालों का चयन ज़िले के कोटे में मेरिट से होता है।",
    ],
  },
  benefits: {
    en: [
      "A yearly allowance for food, lodging and living costs, paid by DBT, with the amount depending on the city where you study.",
      "The MahaDBT pages for Higher Education, Technical Education, Art and agriculture courses list ₹60,000 a year in Mumbai, Thane, Navi Mumbai, Pune, Pimpri-Chinchwad and Nagpur; ₹51,000 in other divisional cities; ₹43,000 in other districts; and ₹38,000 in talukas.",
      "For medical courses (DMER), the MahaDBT page lists ₹30,000 a year (Mumbai, Pune, Nagpur, Aurangabad) or ₹20,000 elsewhere for children of registered labourers and small farmers, and a smaller amount for other students.",
      "Paid for each year of the course while you remain a hosteller and keep passing.",
    ],
    hi: [
      "खाने, रहने और रोज़मर्रा के ख़र्च के लिए सालाना भत्ता, DBT से, जिसकी राशि आपके पढ़ाई वाले शहर पर निर्भर है।",
      "उच्च शिक्षा, तकनीकी शिक्षा, कला और कृषि कोर्स के MahaDBT पेज पर मुंबई, ठाणे, नवी मुंबई, पुणे, पिंपरी-चिंचवड और नागपुर में ₹60,000 सालाना; दूसरे संभागीय शहरों में ₹51,000; बाक़ी ज़िलों में ₹43,000; और तालुका में ₹38,000 लिखा है।",
      "मेडिकल कोर्स (DMER) के MahaDBT पेज पर पंजीकृत मज़दूरों और छोटे किसानों के बच्चों के लिए ₹30,000 सालाना (मुंबई, पुणे, नागपुर, औरंगाबाद) या दूसरी जगहों पर ₹20,000, और बाक़ी छात्रों के लिए इससे कम राशि लिखी है।",
      "हॉस्टल में रहते हुए और पास होते रहने पर कोर्स के हर साल मिलता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Domicile of Maharashtra, admitted in the open category or SEBC seat.",
      "Studying a professional or technical diploma, degree or postgraduate course, admitted through CAP.",
      "Child of a registered labourer or marginal farmer, or total family income up to ₹8 lakh a year (up to ₹6 lakh for MAFSU courses).",
      "Living in a government or private hostel, as a paying guest or as a tenant, away from home.",
      "Only two children of a family can get it in a year, with at least 50% attendance and no gap of 2 years or more.",
    ],
    hi: [
      "महाराष्ट्र का अधिवासी हो, और ओपन वर्ग या SEBC सीट पर दाख़िला हो।",
      "CAP से दाख़िला लेकर कोई प्रोफ़ेशनल या तकनीकी डिप्लोमा, डिग्री या पोस्ट-ग्रेजुएट कोर्स कर रहा हो।",
      "पंजीकृत मज़दूर या अल्पभूधारक किसान का बच्चा हो, या परिवार की कुल सालाना आय ₹8 लाख तक हो (MAFSU कोर्स के लिए ₹6 लाख तक)।",
      "घर से दूर सरकारी या प्राइवेट हॉस्टल में, पेइंग गेस्ट के रूप में या किराए पर रहता हो।",
      "एक साल में परिवार के दो बच्चों को ही मिलता है; कम से कम 50% हाज़िरी हो और 2 साल या ज़्यादा का गैप न हो।",
    ],
  },
  exclusions: {
    en: [
      "Students admitted through management quota or institute-level seats.",
      "Students in deemed or private universities.",
      "Day scholars who live at home.",
      "Students already getting another maintenance or hostel allowance.",
    ],
    hi: [
      "मैनेजमेंट कोटा या संस्थान-स्तर की सीट पर दाख़िला लेने वाले छात्र।",
      "डीम्ड या प्राइवेट विश्वविद्यालय के छात्र।",
      "घर पर रहकर रोज़ कॉलेज जाने वाले छात्र।",
      "जिन्हें पहले से कोई दूसरा निर्वाह या हॉस्टल भत्ता मिल रहा है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in or register on mahadbt.maharashtra.gov.in with your Aadhaar.",
        "Fill in your profile, including your hostel or rented-room details and an Aadhaar-seeded bank account.",
        "Under 'All Schemes', choose 'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta' for your department, upload documents and submit.",
        "Your college verifies the application before the department approves it. Renew it every year.",
      ],
      hi: [
        "mahadbt.maharashtra.gov.in पर आधार से लॉग इन या रजिस्टर करें।",
        "अपनी प्रोफ़ाइल भरें, जिसमें हॉस्टल या किराए के कमरे की जानकारी और आधार से जुड़ा बैंक खाता हो।",
        "'All Schemes' में अपने विभाग की 'डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता' योजना चुनें, दस्तावेज़ अपलोड करें और जमा करें।",
        "पहले कॉलेज आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: [
      "Maharashtra domicile certificate",
      "Registered labourer certificate or marginal farmer (alpabhudharak) certificate, or else a family income certificate",
      "Hostel admission proof, or a rent agreement for a private room or PG",
      "Class 10 and later mark sheets",
      "CAP allotment letter",
      "Undertaking that no more than two children of the family are claiming the benefit",
    ],
    hi: [
      "महाराष्ट्र अधिवास प्रमाण पत्र",
      "पंजीकृत मज़दूर प्रमाण पत्र या अल्पभूधारक किसान प्रमाण पत्र, नहीं तो पारिवारिक आय प्रमाण पत्र",
      "हॉस्टल में दाख़िले का सबूत, या प्राइवेट कमरे/PG का किराया अनुबंध",
      "कक्षा 10 और उसके बाद की मार्कशीट",
      "CAP अलॉटमेंट लेटर",
      "शपथ पत्र कि परिवार के दो से ज़्यादा बच्चे यह लाभ नहीं ले रहे",
    ],
  },
  faqs: [
    {
      q: { en: "Can I get this together with the EBC fee scholarship?", hi: "क्या यह EBC फ़ीस छात्रवृत्ति के साथ मिल सकता है?" },
      a: {
        en: "Yes. The fee scholarship pays your tuition and exam fees, and this allowance helps with living costs. Many students apply for both on MahaDBT.",
        hi: "हाँ। फ़ीस छात्रवृत्ति से ट्यूशन और परीक्षा फ़ीस मिलती है, और यह भत्ता रहने-खाने के ख़र्च में मदद करता है। कई छात्र MahaDBT पर दोनों के लिए आवेदन करते हैं।",
      },
    },
    {
      q: { en: "Why do I see different amounts in different places?", hi: "अलग-अलग जगह अलग राशि क्यों दिखती है?" },
      a: {
        en: "Each department lists its own rates on MahaDBT, and medical courses show lower figures than the others. Check the scheme page for your own department on the portal before applying.",
        hi: "हर विभाग MahaDBT पर अपनी दरें दिखाता है, और मेडिकल कोर्स के पेज पर बाक़ियों से कम राशि है। आवेदन से पहले पोर्टल पर अपने विभाग का योजना पेज ज़रूर देखें।",
      },
    },
  ],

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: [
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1FA3AA7E67D54CF402FD88D88C64949C41EC3238C8545A71",
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3D30C2CB15631E4E31F4E2AFF5E4258B33E89887D583052E",
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A154AF155ACB2A8B2FDDAB7A49A24E2B13EFE22C60B340852",
    "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AEB31D461DD8183B67F07C60D4AAAA2026FB7F4DCFD673D35",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
