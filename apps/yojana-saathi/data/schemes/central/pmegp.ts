import { all, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pmegp",
  name: { en: "Prime Minister's Employment Generation Programme", hi: "प्रधानमंत्री रोज़गार सृजन कार्यक्रम" },
  aka: ["PMEGP"],
  shortDescription: {
    en: "Bank loan plus a 15% to 35% government subsidy to set up a new small factory (up to ₹50 lakh) or service business (up to ₹20 lakh).",
    hi: "नया छोटा कारख़ाना (₹50 लाख तक) या सेवा का कारोबार (₹20 लाख तक) शुरू करने के लिए बैंक लोन और 15% से 35% तक सरकारी सब्सिडी।",
  },
  level: "central",
  ministry: "msme",
  categories: ["business", "skills-employment"],
  tags: ["subsidy", "business loan", "self employment", "kvic", "new business", "manufacturing"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { min: 18 },
  kundliHouse: "business",
  eligibility: all(minAge(18)),

  details: {
    en: [
      "PMEGP helps people set up new micro enterprises in villages and towns. You take a bank loan for your project, and the government pays part of the project cost as a 'margin money' subsidy, so you have less to repay.",
      "It is run by the Ministry of MSME through the Khadi and Village Industries Commission (KVIC), state Khadi boards and District Industries Centres. The maximum project cost is ₹50 lakh for manufacturing and ₹20 lakh for business or service units.",
      "The subsidy is 15% (urban) or 25% (rural) of the project cost for the general category, and 25% (urban) or 35% (rural) for special categories such as SC, ST, OBC, minorities, women, ex-servicemen, transgender persons, persons with disabilities, and people in the North-East, hill and border areas.",
    ],
    hi: [
      "PMEGP गाँवों और शहरों में नए सूक्ष्म उद्यम शुरू करने में मदद करता है। आप अपने प्रोजेक्ट के लिए बैंक से लोन लेते हैं और सरकार प्रोजेक्ट लागत का एक हिस्सा 'मार्जिन मनी' सब्सिडी के रूप में देती है, जिससे आपको कम चुकाना पड़ता है।",
      "इसे MSME मंत्रालय खादी और ग्रामोद्योग आयोग (KVIC), राज्य खादी बोर्डों और ज़िला उद्योग केंद्रों के ज़रिए चलाता है। प्रोजेक्ट की अधिकतम लागत निर्माण के लिए ₹50 लाख और व्यापार या सेवा के लिए ₹20 लाख है।",
      "सामान्य वर्ग के लिए सब्सिडी प्रोजेक्ट लागत का 15% (शहर) या 25% (गाँव) है, और विशेष वर्गों जैसे SC, ST, OBC, अल्पसंख्यक, महिलाएँ, पूर्व सैनिक, ट्रांसजेंडर, दिव्यांगजन और पूर्वोत्तर, पहाड़ी व सीमा क्षेत्रों के लोगों के लिए 25% (शहर) या 35% (गाँव)।",
    ],
  },
  benefits: {
    en: [
      "Margin money subsidy of 15% to 35% of the project cost, depending on your category and whether the unit is urban or rural.",
      "Project cost of up to ₹50 lakh for manufacturing and up to ₹20 lakh for business or service units.",
      "The rest is a bank loan; you bring only 10% of the cost yourself (5% for special categories).",
      "Free entrepreneurship training before the loan is released.",
    ],
    hi: [
      "आपकी श्रेणी और यूनिट के शहर या गाँव में होने के हिसाब से प्रोजेक्ट लागत का 15% से 35% तक मार्जिन मनी सब्सिडी।",
      "निर्माण के लिए ₹50 लाख तक और व्यापार या सेवा के लिए ₹20 लाख तक का प्रोजेक्ट।",
      "बाक़ी पैसा बैंक लोन से; आपको ख़ुद सिर्फ़ 10% लगाना होता है (विशेष वर्गों के लिए 5%)।",
      "लोन जारी होने से पहले मुफ़्त उद्यमिता प्रशिक्षण।",
    ],
  },
  eligibilityText: {
    en: [
      "Any Indian aged 18 or above.",
      "You must have passed Class 8 if the project costs more than ₹10 lakh (manufacturing) or ₹5 lakh (business or service).",
      "Only new projects qualify. Self-help groups, registered societies, production co-operatives and charitable trusts can also apply.",
      "Only one person per family can get help (family means you and your spouse).",
    ],
    hi: [
      "18 साल या उससे अधिक उम्र का कोई भी भारतीय।",
      "अगर प्रोजेक्ट ₹10 लाख (निर्माण) या ₹5 लाख (व्यापार या सेवा) से ज़्यादा का है, तो कम से कम 8वीं पास होना ज़रूरी है।",
      "सिर्फ़ नए प्रोजेक्ट पात्र हैं। स्वयं सहायता समूह, पंजीकृत सोसाइटी, उत्पादन सहकारी समितियाँ और धर्मार्थ ट्रस्ट भी आवेदन कर सकते हैं।",
      "एक परिवार से सिर्फ़ एक व्यक्ति को मदद मिलती है (परिवार यानी आप और आपका जीवनसाथी)।",
    ],
  },
  exclusions: {
    en: [
      "Existing units, and units that have already received a government subsidy under another scheme, are not eligible for the first PMEGP loan.",
      "Some activities are on a negative list, such as meat processing, sale of tobacco or alcohol, and crop cultivation.",
      "Project cost above ₹50 lakh (manufacturing) or ₹20 lakh (services) gets no extra subsidy on the excess.",
    ],
    hi: [
      "पहले से चल रही यूनिट और जिन्हें किसी दूसरी योजना में सरकारी सब्सिडी मिल चुकी है, वे पहले PMEGP लोन के पात्र नहीं हैं।",
      "कुछ काम नकारात्मक सूची में हैं, जैसे मांस प्रसंस्करण, तंबाकू या शराब बेचना और फ़सल की खेती।",
      "₹50 लाख (निर्माण) या ₹20 लाख (सेवा) से ऊपर की लागत पर कोई अतिरिक्त सब्सिडी नहीं मिलती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the PMEGP e-portal on the KVIC website and choose 'Application for New Unit'.",
        "Fill in your personal details, project details, chosen bank branch and implementing agency (KVIC, KVIB or DIC).",
        "Upload your project report and documents, submit, and note your application ID to track the status.",
        "Attend the interview by the district task force and complete the entrepreneurship training once the bank sanctions the loan.",
      ],
      hi: [
        "KVIC की वेबसाइट पर PMEGP ई-पोर्टल खोलें और 'नई यूनिट के लिए आवेदन' चुनें।",
        "अपनी जानकारी, प्रोजेक्ट का विवरण, बैंक शाखा और लागू करने वाली एजेंसी (KVIC, KVIB या DIC) भरें।",
        "प्रोजेक्ट रिपोर्ट और दस्तावेज़ अपलोड करके जमा करें, और स्थिति देखने के लिए आवेदन ID नोट कर लें।",
        "ज़िला टास्क फ़ोर्स के इंटरव्यू में जाएँ और बैंक से लोन मंज़ूर होने पर उद्यमिता प्रशिक्षण पूरा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Project report",
      "Caste or special category certificate, if claiming the higher subsidy",
      "Education certificate (Class 8 or above, if needed)",
      "Rural area certificate, if setting up in a village",
      "Passport-size photo",
    ],
    hi: [
      "आधार कार्ड",
      "प्रोजेक्ट रिपोर्ट",
      "ज़्यादा सब्सिडी के लिए जाति या विशेष वर्ग का प्रमाण पत्र",
      "शैक्षिक प्रमाण पत्र (8वीं या उससे ऊपर, अगर ज़रूरी हो)",
      "गाँव में यूनिट लगाने पर ग्रामीण क्षेत्र का प्रमाण पत्र",
      "पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "When do I get the subsidy?", hi: "सब्सिडी कब मिलती है?" },
      a: {
        en: "The subsidy is kept with the bank in your name as a fixed deposit for 3 years. If your unit is running well after 3 years, it is adjusted against your loan.",
        hi: "सब्सिडी 3 साल के लिए बैंक में आपके नाम पर सावधि जमा के रूप में रहती है। 3 साल बाद यूनिट ठीक से चल रही हो, तो इसे आपके लोन में समायोजित कर दिया जाता है।",
      },
    },
    {
      q: { en: "Is PMEGP accepting new applications in 2026?", hi: "क्या 2026 में PMEGP में नए आवेदन लिए जा रहे हैं?" },
      a: {
        en: "The scheme's last approved cycle ran to March 2026 and its continuation was awaiting approval in mid-2026. Check the PMEGP e-portal or your District Industries Centre before applying.",
        hi: "योजना का पिछला मंज़ूर चक्र मार्च 2026 तक था और 2026 के बीच तक इसे आगे बढ़ाने की मंज़ूरी बाक़ी थी। आवेदन से पहले PMEGP ई-पोर्टल या ज़िला उद्योग केंद्र से पता कर लें।",
      },
    },
  ],

  officialUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
  sources: [
    "https://www.kviconline.gov.in/pmegp/pmegpweb/docs/pdf/PMEGPscheme.pdf",
    "https://sbi.co.in/web/business/sme/sme-government-schemes/pmegp",
    "https://kashmirlife.net/pmegp-subsidy-release-put-on-hold-pending-scheme-extension-approval-jammu-kashmir-had-1-46-lakh-beneficiaries-centre-446210/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "check-status",
};

export default scheme;
