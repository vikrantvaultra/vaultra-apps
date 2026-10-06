import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "muthulakshmi-reddy-inter-caste-marriage-assistance",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Dr. Muthulakshmi Reddy Ninaivu Inter-Caste Marriage Assistance Scheme", hi: "डॉ. मुतुलक्ष्मी रेड्डी स्मृति अंतरजातीय विवाह सहायता योजना" },
  aka: ["inter-caste marriage assistance Tamil Nadu", "Muthulakshmi Reddy marriage scheme"],
  shortDescription: {
    en: "Inter-caste couples in Tamil Nadu get ₹25,000 (₹50,000 if the bride is a graduate or diploma holder) plus an 8-gram 22-carat gold coin. No income limit.",
    hi: "तमिलनाडु में अंतरजातीय विवाह करने वाले जोड़ों को ₹25,000 (दुल्हन ग्रेजुएट या डिप्लोमा धारक हो तो ₹50,000) और 8 ग्राम का 22 कैरेट सोने का सिक्का। कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu",
    hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["inter-caste marriage", "marriage", "gold coin", "couple", "sc st"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("tamil-nadu")),

  details: {
    en: ["This scheme encourages inter-caste marriages by giving the couple cash help and a gold coin for the thirumangalyam (mangalsutra). It is run by the Social Welfare and Women Empowerment Department.", "In 2026 the new government launched the Annan Seer scheme (an 8-gram gold coin and silk saree for brides from families earning up to ₹2.5 lakh). The department's website still lists this scheme, but it has not yet been confirmed whether it will continue alongside Annan Seer or be merged into it."],
    hi: ["यह योजना अंतरजातीय विवाह को बढ़ावा देने के लिए जोड़े को नकद मदद और मंगलसूत्र (तिरुमांगल्यम) के लिए सोने का सिक्का देती है। इसे समाज कल्याण एवं महिला सशक्तिकरण विभाग चलाता है।", "2026 में नई सरकार ने अण्णन सीर योजना शुरू की (₹2.5 लाख तक आय वाले परिवारों की दुल्हनों को 8 ग्राम सोने का सिक्का और रेशमी साड़ी)। विभाग की वेबसाइट पर यह योजना अब भी दर्ज है, पर अभी पक्का नहीं है कि यह अण्णन सीर के साथ चलती रहेगी या उसमें मिला दी जाएगी।"],
  },
  benefits: {
    en: ["₹25,000: ₹15,000 paid into the bank account and ₹10,000 as a National Savings Certificate.", "If the bride holds a degree or diploma: ₹50,000 (₹30,000 into the bank and ₹20,000 as a National Savings Certificate).", "An 8-gram 22-carat gold coin in both cases."],
    hi: ["₹25,000: ₹15,000 बैंक खाते में और ₹10,000 राष्ट्रीय बचत पत्र (NSC) के रूप में।", "दुल्हन के पास डिग्री या डिप्लोमा हो तो ₹50,000 (₹30,000 बैंक में और ₹20,000 राष्ट्रीय बचत पत्र के रूप में)।", "दोनों हालात में 8 ग्राम का 22 कैरेट सोने का सिक्का।"],
  },
  eligibilityText: {
    en: ["The couple live in Tamil Nadu and have had an inter-caste marriage.", "Type I: one spouse is from a Scheduled Caste or Scheduled Tribe and the other from any other community.", "Type II: one spouse is from a forward (unreserved) community and the other from a Backward or Most Backward Class.", "There is no income limit."],
    hi: ["जोड़ा तमिलनाडु में रहता है और उनका अंतरजातीय विवाह हुआ है।", "पहली श्रेणी: एक जीवनसाथी अनुसूचित जाति या अनुसूचित जनजाति से हो और दूसरा किसी भी अन्य समुदाय से।", "दूसरी श्रेणी: एक जीवनसाथी अगड़े (अनारक्षित) समुदाय से हो और दूसरा पिछड़े या अति पिछड़े वर्ग से।", "कोई आय सीमा नहीं है।"],
  },
  applicationProcess: {
    offline: {
      en: ["Contact the District Social Welfare Officer or the Social Welfare Extension Officer at your block office, or go to an e-Sevai centre.", "Fill in the marriage assistance form and attach the documents listed below.", "Ask about the time limit: applications are usually expected before the wedding or soon after it."],
      hi: ["ज़िला समाज कल्याण अधिकारी या अपने ब्लॉक कार्यालय के समाज कल्याण विस्तार अधिकारी से मिलें, या किसी ई-सेवै केंद्र पर जाएँ।", "विवाह सहायता का फ़ॉर्म भरें और नीचे बताए दस्तावेज़ लगाएँ।", "समय सीमा के बारे में पूछ लें: आमतौर पर आवेदन शादी से पहले या उसके कुछ समय बाद तक लिया जाता है।"],
    },
  },
  documents: {
    en: ["Marriage registration certificate", "Community (caste) certificates of both spouses", "Aadhaar of both spouses", "Bride's education certificate (for the higher amount)", "Bank passbook"],
    hi: ["विवाह पंजीकरण प्रमाण पत्र", "दोनों जीवनसाथियों के जाति प्रमाण पत्र", "दोनों का आधार", "दुल्हन का शिक्षा प्रमाण पत्र (ज़्यादा राशि के लिए)", "बैंक पासबुक"],
  },

  officialUrl: "https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/marriage-assistance-schemes",
  sources: ["https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/marriage-assistance-schemes", "https://www.tnsocialwelfare.tn.gov.in/en"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
