import { all, female, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dharmambal-widow-remarriage-assistance",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Dr. Dharmambal Ammaiyar Ninaivu Widow Remarriage Assistance Scheme", hi: "डॉ. धर्मांबाल अम्मैयार स्मृति विधवा पुनर्विवाह सहायता योजना" },
  aka: ["widow remarriage assistance Tamil Nadu", "Dharmambal scheme"],
  shortDescription: {
    en: "Widows in Tamil Nadu who remarry get ₹25,000 (₹50,000 for graduates or diploma holders) plus an 8-gram 22-carat gold coin. No income limit.",
    hi: "तमिलनाडु में दोबारा शादी करने वाली विधवाओं को ₹25,000 (ग्रेजुएट या डिप्लोमा धारक हों तो ₹50,000) और 8 ग्राम का 22 कैरेट सोने का सिक्का। कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu",
    hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["widow remarriage", "widow", "marriage", "gold coin", "women"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("tamil-nadu"), female(), minAge(18)),

  details: {
    en: ["This scheme supports widows who choose to marry again, with cash help and an 8-gram gold coin. It is run by the Social Welfare and Women Empowerment Department.", "In 2026 the new government launched the Annan Seer scheme (an 8-gram gold coin and silk saree for brides from families earning up to ₹2.5 lakh). The department's website still lists this scheme, but it has not yet been confirmed whether it will continue alongside Annan Seer or be merged into it."],
    hi: ["यह योजना दोबारा शादी करने वाली विधवाओं को नकद मदद और 8 ग्राम सोने का सिक्का देती है। इसे समाज कल्याण एवं महिला सशक्तिकरण विभाग चलाता है।", "2026 में नई सरकार ने अण्णन सीर योजना शुरू की (₹2.5 लाख तक आय वाले परिवारों की दुल्हनों को 8 ग्राम सोने का सिक्का और रेशमी साड़ी)। विभाग की वेबसाइट पर यह योजना अब भी दर्ज है, पर अभी पक्का नहीं है कि यह अण्णन सीर के साथ चलती रहेगी या उसमें मिला दी जाएगी।"],
  },
  benefits: {
    en: ["₹25,000: ₹15,000 paid into the bank account and ₹10,000 as a National Savings Certificate.", "For degree or diploma holders: ₹50,000 (₹30,000 into the bank and ₹20,000 as a National Savings Certificate).", "An 8-gram 22-carat gold coin in both cases."],
    hi: ["₹25,000: ₹15,000 बैंक खाते में और ₹10,000 राष्ट्रीय बचत पत्र (NSC) के रूप में।", "डिग्री या डिप्लोमा धारक को ₹50,000 (₹30,000 बैंक में और ₹20,000 राष्ट्रीय बचत पत्र के रूप में)।", "दोनों हालात में 8 ग्राम का 22 कैरेट सोने का सिक्का।"],
  },
  eligibilityText: {
    en: ["You are a widow living in Tamil Nadu who is remarrying.", "There is no income limit and no minimum education needed."],
    hi: ["आप तमिलनाडु में रहने वाली विधवा हैं और दोबारा शादी कर रही हैं।", "कोई आय सीमा नहीं है और कम से कम पढ़ाई की कोई शर्त नहीं है।"],
  },
  applicationProcess: {
    offline: {
      en: ["Contact the District Social Welfare Officer or the Social Welfare Extension Officer at your block office, or go to an e-Sevai centre.", "Fill in the marriage assistance form and attach the documents listed below.", "Ask about the time limit: applications are usually expected before the wedding or soon after it."],
      hi: ["ज़िला समाज कल्याण अधिकारी या अपने ब्लॉक कार्यालय के समाज कल्याण विस्तार अधिकारी से मिलें, या किसी ई-सेवै केंद्र पर जाएँ।", "विवाह सहायता का फ़ॉर्म भरें और नीचे बताए दस्तावेज़ लगाएँ।", "समय सीमा के बारे में पूछ लें: आमतौर पर आवेदन शादी से पहले या उसके कुछ समय बाद तक लिया जाता है।"],
    },
  },
  documents: {
    en: ["Death certificate of your first husband", "Marriage registration certificate of the remarriage", "Aadhaar", "Education certificate (for the higher amount)", "Bank passbook"],
    hi: ["पहले पति का मृत्यु प्रमाण पत्र", "दूसरी शादी का विवाह पंजीकरण प्रमाण पत्र", "आधार", "शिक्षा प्रमाण पत्र (ज़्यादा राशि के लिए)", "बैंक पासबुक"],
  },

  officialUrl: "https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/marriage-assistance-schemes",
  sources: ["https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/marriage-assistance-schemes", "https://www.tnsocialwelfare.tn.gov.in/en"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
