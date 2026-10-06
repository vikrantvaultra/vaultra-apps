import { all, female, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "annai-therasa-marriage-assistance",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Annai Therasa Ninaivu Marriage Assistance Scheme for Orphan Girls", hi: "अन्नै तेरेसा स्मृति विवाह सहायता योजना (अनाथ लड़कियों के लिए)" },
  aka: ["Annai Teresa marriage scheme", "orphan girl marriage assistance Tamil Nadu"],
  shortDescription: {
    en: "Orphan girls in Tamil Nadu get ₹25,000 (₹50,000 for graduates) plus an 8-gram 22-carat gold coin for their marriage. No income limit.",
    hi: "तमिलनाडु की अनाथ लड़कियों को शादी के लिए ₹25,000 (ग्रेजुएट हों तो ₹50,000) और 8 ग्राम का 22 कैरेट सोने का सिक्का। कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu",
    hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["orphan", "marriage", "gold coin", "girls", "women"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("tamil-nadu"), female(), minAge(18)),

  details: {
    en: ["This scheme helps orphan girls with the cost of their wedding by giving cash help and an 8-gram gold coin. It is run by the Social Welfare and Women Empowerment Department.", "In 2026 the new government launched the Annan Seer scheme (an 8-gram gold coin and silk saree for brides from families earning up to ₹2.5 lakh). The department's website still lists this scheme, but it has not yet been confirmed whether it will continue alongside Annan Seer or be merged into it."],
    hi: ["यह योजना अनाथ लड़कियों को शादी के ख़र्च में नकद मदद और 8 ग्राम सोने का सिक्का देती है। इसे समाज कल्याण एवं महिला सशक्तिकरण विभाग चलाता है।", "2026 में नई सरकार ने अण्णन सीर योजना शुरू की (₹2.5 लाख तक आय वाले परिवारों की दुल्हनों को 8 ग्राम सोने का सिक्का और रेशमी साड़ी)। विभाग की वेबसाइट पर यह योजना अब भी दर्ज है, पर अभी पक्का नहीं है कि यह अण्णन सीर के साथ चलती रहेगी या उसमें मिला दी जाएगी।"],
  },
  benefits: {
    en: ["₹25,000 in cash assistance.", "₹50,000 if the bride is a graduate.", "An 8-gram 22-carat gold coin in both cases."],
    hi: ["₹25,000 नकद सहायता।", "दुल्हन ग्रेजुएट हो तो ₹50,000।", "दोनों हालात में 8 ग्राम का 22 कैरेट सोने का सिक्का।"],
  },
  eligibilityText: {
    en: ["The bride is an orphan girl living in Tamil Nadu.", "She is at least 18 at the time of marriage.", "There is no income limit and no minimum education needed."],
    hi: ["दुल्हन तमिलनाडु में रहने वाली अनाथ लड़की है।", "शादी के समय उसकी उम्र कम से कम 18 साल है।", "कोई आय सीमा नहीं है और कम से कम पढ़ाई की कोई शर्त नहीं है।"],
  },
  applicationProcess: {
    offline: {
      en: ["Contact the District Social Welfare Officer or the Social Welfare Extension Officer at your block office, or go to an e-Sevai centre.", "Fill in the marriage assistance form and attach the documents listed below.", "Ask about the time limit: applications are usually expected before the wedding or soon after it."],
      hi: ["ज़िला समाज कल्याण अधिकारी या अपने ब्लॉक कार्यालय के समाज कल्याण विस्तार अधिकारी से मिलें, या किसी ई-सेवै केंद्र पर जाएँ।", "विवाह सहायता का फ़ॉर्म भरें और नीचे बताए दस्तावेज़ लगाएँ।", "समय सीमा के बारे में पूछ लें: आमतौर पर आवेदन शादी से पहले या उसके कुछ समय बाद तक लिया जाता है।"],
    },
  },
  documents: {
    en: ["Death certificates of both parents, or an orphan certificate", "Bride's age proof", "Wedding invitation or marriage certificate", "Bride's education certificate (for the higher amount)"],
    hi: ["माता-पिता दोनों के मृत्यु प्रमाण पत्र, या अनाथ प्रमाण पत्र", "दुल्हन की उम्र का सबूत", "शादी का निमंत्रण पत्र या विवाह प्रमाण पत्र", "दुल्हन का शिक्षा प्रमाण पत्र (ज़्यादा राशि के लिए)"],
  },

  officialUrl: "https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/marriage-assistance-schemes",
  sources: ["https://www.tnsocialwelfare.tn.gov.in/en/specilisationswomen-welfare/marriage-assistance-schemes", "https://www.tnsocialwelfare.tn.gov.in/en"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
