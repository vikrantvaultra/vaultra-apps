import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-construction-workers-welfare",
  name: {
    en: "Haryana Building and Other Construction Workers Welfare Board Schemes",
    hi: "हरियाणा भवन एवं अन्य सन्निर्माण कामगार कल्याण बोर्ड की योजनाएँ",
  },
  aka: ["HBOCW", "Haryana labour card", "Shramik panjikaran Haryana"],
  shortDescription: {
    en: "Registered construction workers in Haryana get help for children's education, daughters' marriage, maternity, tools, a cycle, a ₹3,500 monthly pension after 60 and accident cover.",
    hi: "हरियाणा के पंजीकृत निर्माण श्रमिकों को बच्चों की पढ़ाई, बेटी की शादी, मातृत्व, औज़ार, साइकिल, 60 साल के बाद ₹3,500 मासिक पेंशन और दुर्घटना सहायता मिलती है।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Haryana Building and Other Construction Workers Welfare Board, Labour Department, Haryana",
    hi: "हरियाणा भवन एवं अन्य सन्निर्माण कामगार कल्याण बोर्ड, श्रम विभाग, हरियाणा",
  },
  categories: ["social-welfare", "education", "women-child"],
  tags: ["construction worker", "labour card", "bocw", "scholarship", "marriage", "maternity", "haryana"],
  benefitType: "composite",
  isDBT: true,
  kundliHouse: "career",
  eligibility: all(
    residentOf("haryana"),
    labelled(when("occupation", "eq", "construction-worker"), {
      en: "You work as a building or construction worker",
      hi: "आप भवन या निर्माण कार्य में मज़दूरी करते हैं",
    }),
  ),

  details: {
    en: [
      "The Haryana Building and Other Construction Workers Welfare Board runs many welfare schemes for construction workers, paid from the construction cess that builders pay.",
      "To get any benefit you first register with the Board as a construction worker and keep your membership renewed. Most schemes need at least one year of regular membership.",
      "Benefits cover the worker's children (scholarships, coaching, marriage help), women workers (maternity aid, a yearly allowance), tools and a cycle, a pension after 60, and help after an accident, disability or death.",
    ],
    hi: [
      "हरियाणा भवन एवं अन्य सन्निर्माण कामगार कल्याण बोर्ड निर्माण श्रमिकों के लिए कई कल्याण योजनाएँ चलाता है। इनका पैसा बिल्डरों से लिए जाने वाले निर्माण उपकर (सेस) से आता है।",
      "कोई भी लाभ लेने के लिए पहले बोर्ड में निर्माण श्रमिक के रूप में पंजीकरण कराना और सदस्यता का नवीनीकरण करते रहना ज़रूरी है। ज़्यादातर योजनाओं के लिए कम से कम एक साल की नियमित सदस्यता चाहिए।",
      "लाभ में श्रमिक के बच्चों के लिए (छात्रवृत्ति, कोचिंग, शादी में मदद), महिला श्रमिकों के लिए (मातृत्व सहायता, सालाना भत्ता), औज़ार और साइकिल, 60 साल के बाद पेंशन, और दुर्घटना, दिव्यांगता या मृत्यु पर सहायता शामिल है।",
    ],
  },
  benefits: {
    en: [
      "Education aid for children: ₹8,000 a year (Classes 1–8), ₹10,000 (Classes 9–12 or ITI), ₹15,000 (graduation, B.Ed. etc.) and ₹20,000 (post-graduation).",
      "Daughter's marriage: ₹1,01,000 (₹51,000 as kanyadan and ₹50,000 for arrangements); a registered woman worker gets ₹50,000 for her own marriage.",
      "Maternity: ₹30,000 plus ₹6,000 for nutrition after childbirth, for up to two children.",
      "Pension of ₹3,500 a month after 60, if you were a member for at least three years before turning 60.",
      "₹8,000 for tools once in five years, and up to ₹5,000 for a bicycle once in five years.",
      "Women workers get ₹5,100 every year at renewal for essentials such as clothes, utensils and sanitary napkins.",
      "Accidental death at the work site: ₹5 lakh to the nominee plus ₹15,000 for the funeral; permanent disability from an accident: ₹1.5 lakh to ₹3 lakh.",
      "Up to ₹50,000 (or the ex-showroom price, if lower) to a worker's unmarried daughter aged 18+ studying in a Haryana college, to buy an electric scooter.",
    ],
    hi: [
      "बच्चों की पढ़ाई के लिए: कक्षा 1–8 के लिए ₹8,000 सालाना, कक्षा 9–12 या ITI के लिए ₹10,000, स्नातक, B.Ed. आदि के लिए ₹15,000 और स्नातकोत्तर के लिए ₹20,000।",
      "बेटी की शादी: ₹1,01,000 (₹51,000 कन्यादान और ₹50,000 शादी के इंतज़ाम के लिए); पंजीकृत महिला श्रमिक को अपनी शादी के लिए ₹50,000।",
      "मातृत्व: बच्चे के जन्म के बाद ₹30,000 और पोषण के लिए ₹6,000, दो बच्चों तक।",
      "60 साल के बाद ₹3,500 मासिक पेंशन, अगर 60 साल से पहले कम से कम तीन साल सदस्य रहे हों।",
      "पाँच साल में एक बार औज़ारों के लिए ₹8,000, और पाँच साल में एक बार साइकिल के लिए ₹5,000 तक।",
      "महिला श्रमिकों को हर साल नवीनीकरण पर कपड़े, बर्तन, सैनिटरी नैपकिन जैसी चीज़ों के लिए ₹5,100।",
      "कार्यस्थल पर दुर्घटना में मृत्यु: नामांकित व्यक्ति को ₹5 लाख और अंतिम संस्कार के लिए ₹15,000; दुर्घटना से स्थायी दिव्यांगता: ₹1.5 लाख से ₹3 लाख।",
      "हरियाणा के कॉलेज में पढ़ रही श्रमिक की 18+ साल की अविवाहित बेटी को इलेक्ट्रिक स्कूटर खरीदने के लिए ₹50,000 तक (या एक्स-शोरूम कीमत, जो कम हो)।",
    ],
  },
  eligibilityText: {
    en: [
      "You work in building or other construction work in Haryana.",
      "You have done at least 90 days of construction work in the past year, certified by an authorised official.",
      "You are registered with the Board and have paid your registration fee and contribution.",
      "Most benefits need at least one year of regular membership; the pension needs three years before age 60.",
    ],
    hi: [
      "आप हरियाणा में भवन या दूसरे निर्माण कार्य में काम करते हैं।",
      "आपने पिछले साल में कम से कम 90 दिन निर्माण कार्य किया है, जिसे अधिकृत अधिकारी ने प्रमाणित किया हो।",
      "आप बोर्ड में पंजीकृत हैं और पंजीकरण शुल्क व अंशदान जमा किया है।",
      "ज़्यादातर लाभ के लिए कम से कम एक साल की नियमित सदस्यता चाहिए; पेंशन के लिए 60 साल से पहले तीन साल की।",
    ],
  },
  exclusions: {
    en: [
      "Workers whose membership has lapsed (not renewed) can't claim most benefits.",
      "You can't take the same help (for example, marriage aid) from another government department or board as well.",
      "The pension is not paid if you already get a pension from any government body.",
    ],
    hi: [
      "जिनकी सदस्यता का नवीनीकरण नहीं हुआ, वे ज़्यादातर लाभ नहीं ले सकते।",
      "वही मदद (जैसे शादी सहायता) किसी दूसरे सरकारी विभाग या बोर्ड से भी नहीं ले सकते।",
      "अगर आपको किसी सरकारी संस्था से पहले से पेंशन मिलती है तो यह पेंशन नहीं मिलती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register as a construction worker on the Labour Department portal (hrylabour.gov.in) with your mobile number and Aadhaar, or through the new worker registration portal linked there.",
        "Upload your 90-day work certificate and family details, and pay the fee online.",
        "After verification, log in and apply for the scheme you need with the required documents.",
      ],
      hi: [
        "श्रम विभाग के पोर्टल (hrylabour.gov.in) पर मोबाइल नंबर और आधार से, या वहाँ दिए गए नए श्रमिक पंजीकरण पोर्टल से, निर्माण श्रमिक के रूप में पंजीकरण करें।",
        "90 दिन के काम का प्रमाण पत्र और परिवार का विवरण अपलोड करें, और शुल्क ऑनलाइन भरें।",
        "जाँच के बाद लॉग इन करके ज़रूरी दस्तावेज़ों के साथ अपनी योजना के लिए आवेदन करें।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest worker registration help desk or SARAL Kendra with your documents.",
        "For queries, call the SARAL helpline 0172-3968400.",
      ],
      hi: ["दस्तावेज़ लेकर अपने नज़दीकी श्रमिक पंजीकरण हेल्प डेस्क या SARAL केंद्र पर जाएँ।", "जानकारी के लिए SARAL हेल्पलाइन 0172-3968400 पर कॉल करें।"],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Certificate of 90 days of construction work",
      "Family details and Aadhaar of family members",
      "Bank account details",
      "Scheme-specific papers, such as a marriage registration certificate, birth certificate or school certificate",
    ],
    hi: [
      "आधार कार्ड",
      "90 दिन के निर्माण कार्य का प्रमाण पत्र",
      "परिवार का विवरण और परिवार के सदस्यों का आधार",
      "बैंक खाते का विवरण",
      "योजना के हिसाब से काग़ज़, जैसे विवाह पंजीकरण प्रमाण पत्र, जन्म प्रमाण पत्र या स्कूल का प्रमाण पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "How soon after the event must I apply?", hi: "घटना के कितने समय में आवेदन करना होता है?" },
      a: {
        en: "Many schemes have a deadline. For example, marriage and maternity aid must be applied for within one year of the marriage or delivery, with all documents.",
        hi: "कई योजनाओं की समय सीमा है। जैसे शादी और मातृत्व सहायता के लिए शादी या प्रसव के एक साल के अंदर सभी दस्तावेज़ों के साथ आवेदन करना होता है।",
      },
    },
    {
      q: { en: "Do I need to renew my registration?", hi: "क्या पंजीकरण का नवीनीकरण ज़रूरी है?" },
      a: {
        en: "Yes. You can pay the fee for one, two or three years at a time. Benefits are given only while your membership is regular.",
        hi: "हाँ। आप एक, दो या तीन साल का शुल्क एक साथ जमा कर सकते हैं। लाभ तभी मिलता है जब आपकी सदस्यता नियमित हो।",
      },
    },
  ],

  officialUrl: "https://hrylabour.gov.in/",
  sources: [
    "https://hrylabour.gov.in/bocw/settings/schemeDetail/142",
    "https://hrylabour.gov.in/bocw/settings/schemeDetail/158",
    "https://hrylabour.gov.in/bocw/settings/schemeDetail/104",
    "https://hrylabour.gov.in/bocw/Basicinfo/bocw_terms",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "active",
};

export default scheme;
