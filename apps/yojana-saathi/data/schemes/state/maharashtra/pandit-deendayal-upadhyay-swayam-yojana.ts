import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pandit-deendayal-upadhyay-swayam-yojana",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Pandit Deendayal Upadhyay Swayam Yojana", hi: "पंडित दीनदयाल उपाध्याय स्वयं योजना" },
  aka: ["Swayam Yojana", "Swayam"],
  shortDescription: {
    en: "ST students in Maharashtra who couldn't get a seat in a government tribal hostel get yearly cash help for food, lodging and living costs while studying after class 12.",
    hi: "महाराष्ट्र के ST छात्रों को, जिन्हें सरकारी आदिवासी हॉस्टल में जगह नहीं मिली, कक्षा 12 के बाद पढ़ाई के दौरान खाने, रहने और दूसरे ख़र्च के लिए सालाना नकद मदद मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Tribal Development Department, Government of Maharashtra", hi: "आदिवासी विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["swayam", "st", "tribal", "hostel allowance", "dbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    when("caste", "in", ["st", "pvtg"]),
  ),

  details: {
    en: ["Swayam is the Tribal Development Department's version of a hostel allowance. Scheduled Tribe students who are eligible for a government hostel but don't get a seat receive money directly instead, so they can rent a room and pay for meals.", "The amount depends on the city where you study, with the highest rate in Mumbai, Pune, Nagpur and nearby cities. The department runs a dedicated Swayam application and status system."],
    hi: ["स्वयं योजना आदिवासी विकास विभाग की हॉस्टल भत्ता योजना है। जो अनुसूचित जनजाति के छात्र सरकारी हॉस्टल के पात्र हैं पर जगह नहीं मिली, उन्हें सीधे पैसा मिलता है, ताकि वे कमरा किराए पर लेकर खाने का ख़र्च चला सकें।", "राशि पढ़ाई वाले शहर पर निर्भर है; सबसे ज़्यादा मुंबई, पुणे, नागपुर और आस-पास के शहरों में। विभाग स्वयं योजना के आवेदन और स्थिति के लिए अलग प्रणाली चलाता है।"],
  },
  benefits: {
    en: ["A yearly amount for food, lodging and other living costs, paid by DBT into your Aadhaar-linked bank account.", "Higher amounts in big cities and lower amounts in district and taluka towns."],
    hi: ["खाने, रहने और दूसरे ख़र्च के लिए सालाना राशि, DBT से आपके आधार से जुड़े बैंक खाते में।", "बड़े शहरों में ज़्यादा और ज़िला व तालुका शहरों में कम राशि।"],
  },
  eligibilityText: {
    en: ["Scheduled Tribe student with Maharashtra domicile.", "Studying after class 12 in a recognised course away from home.", "Eligible for a government tribal hostel but did not get admission."],
    hi: ["महाराष्ट्र अधिवास वाला अनुसूचित जनजाति का छात्र।", "घर से दूर किसी मान्यता प्राप्त कोर्स में कक्षा 12 के बाद पढ़ाई कर रहा हो।", "सरकारी आदिवासी हॉस्टल का पात्र हो, पर दाख़िला न मिला हो।"],
  },
  applicationProcess: {
    online: { en: ["Visit the Tribal Development Department portal (mahatribal.gov.in) and open the Swayam section.", "Fill in the application with your course, college and bank details, and upload your documents.", "Track your application status in the same Swayam section, or ask your nearest Integrated Tribal Development Project (ITDP) office."], hi: ["आदिवासी विकास विभाग के पोर्टल (mahatribal.gov.in) पर जाएँ और Swayam वाला हिस्सा खोलें।", "अपने कोर्स, कॉलेज और बैंक की जानकारी के साथ आवेदन भरें और दस्तावेज़ अपलोड करें।", "उसी Swayam हिस्से में आवेदन की स्थिति देखें, या नज़दीकी एकात्मिक आदिवासी विकास प्रकल्प (ITDP) कार्यालय से पूछें।"] },
  },

  officialUrl: "https://mahatribal.gov.in/1178/Swayam?MenuID=1147",
  sources: ["https://mahatribal.gov.in/1178/Swayam?MenuID=1147", "https://tribal.maharashtra.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
