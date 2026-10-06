import { all, female, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-kanya-vivah-nikah-yojana",
  overlapGroup: "marriage-assistance",
  name: { en: "Mukhyamantri Kanya Vivah / Nikah Yojana (Madhya Pradesh)", hi: "मुख्यमंत्री कन्या विवाह / निकाह योजना (मध्य प्रदेश)" },
  aka: ["Kanya Vivah Yojana MP", "Nikah Yojana", "Samuhik Vivah MP"],
  shortDescription: {
    en: "Brides from needy families in Madhya Pradesh who marry at a government mass wedding or nikah get ₹49,000 in their own account.",
    hi: "मध्य प्रदेश में ज़रूरतमंद परिवारों की जो बेटियाँ सरकारी सामूहिक विवाह या निकाह में शादी करती हैं, उन्हें उनके अपने खाते में ₹49,000 मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Social Justice and Empowerment of Persons with Disabilities Department, Government of Madhya Pradesh",
    hi: "सामाजिक न्याय एवं दिव्यांगजन कल्याण विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "wedding", "nikah", "mass marriage", "bride", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(residentOf("madhya-pradesh"), female(), minAge(18)),

  details: {
    en: [
      "Under this scheme, the state helps needy families with a daughter's wedding. Marriages and nikahs are held together at mass ceremonies organised by the local panchayat or urban body.",
      "Since the 2025 revision, the total provision is ₹55,000 per bride: ₹49,000 goes straight to the bride by cheque or DBT, and ₹6,000 goes to the local body for arranging the ceremony. Each ceremony has between 11 and 200 couples, held on a yearly calendar for each division.",
      "Aadhaar e-KYC of both bride and groom is now compulsory, and every case is entered on the state's marriage portal.",
    ],
    hi: [
      "इस योजना में राज्य सरकार ज़रूरतमंद परिवारों को बेटी की शादी में मदद देती है। विवाह और निकाह स्थानीय पंचायत या नगरीय निकाय के आयोजित सामूहिक कार्यक्रमों में होते हैं।",
      "2025 के बदलाव के बाद हर वधू के लिए कुल ₹55,000 का प्रावधान है: ₹49,000 सीधे वधू को चेक या DBT से मिलते हैं, और ₹6,000 आयोजन के लिए स्थानीय निकाय को। हर सम्मेलन में 11 से 200 जोड़े होते हैं, और ये हर संभाग में सालाना कैलेंडर से होते हैं।",
      "अब वर और वधू दोनों की आधार e-KYC ज़रूरी है, और हर मामला राज्य के विवाह पोर्टल पर दर्ज होता है।",
    ],
  },
  benefits: {
    en: [
      "₹49,000 paid directly to the bride.",
      "The wedding or nikah is arranged at a government mass ceremony at no cost to the family.",
    ],
    hi: [
      "वधू को सीधे ₹49,000।",
      "शादी या निकाह सरकारी सामूहिक कार्यक्रम में, परिवार पर कोई खर्च नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "The bride's family lives in Madhya Pradesh.",
      "The bride is at least 18 and the groom at least 21.",
      "Daughters of needy families, as well as widows and legally divorced women who are remarrying, can apply.",
      "The marriage takes place at a mass wedding or nikah organised under the scheme.",
    ],
    hi: [
      "वधू का परिवार मध्य प्रदेश में रहता हो।",
      "वधू की उम्र कम से कम 18 साल और वर की कम से कम 21 साल हो।",
      "ज़रूरतमंद परिवारों की बेटियाँ, और दोबारा शादी करने वाली विधवा व क़ानूनी रूप से तलाकशुदा महिलाएँ आवेदन कर सकती हैं।",
      "शादी योजना में आयोजित सामूहिक विवाह या निकाह में हो।",
    ],
  },
  exclusions: {
    en: [
      "Weddings held privately, outside a scheme mass ceremony.",
      "Bride under 18 or groom under 21.",
    ],
    hi: [
      "निजी तौर पर, योजना के सामूहिक कार्यक्रम के बाहर हुई शादियाँ।",
      "वधू की उम्र 18 से कम या वर की 21 से कम।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply at your gram panchayat, janpad panchayat, or nagar palika / nagar nigam office before the announced ceremony date.",
        "Submit the form with documents for both bride and groom, and complete their Aadhaar e-KYC.",
        "The local body checks the application and enters it on the marriage portal (vivahportal.mp.gov.in).",
      ],
      hi: [
        "घोषित कार्यक्रम की तारीख से पहले अपनी ग्राम पंचायत, जनपद पंचायत या नगर पालिका / नगर निगम कार्यालय में आवेदन करें।",
        "वर और वधू दोनों के दस्तावेज़ों के साथ फ़ॉर्म जमा करें और दोनों की आधार e-KYC कराएँ।",
        "स्थानीय निकाय आवेदन की जाँच करके उसे विवाह पोर्टल (vivahportal.mp.gov.in) पर दर्ज करता है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar of bride and groom",
      "Age proof of bride and groom",
      "Samagra ID",
      "Bride's bank account details",
      "Husband's death certificate or divorce decree, for widows or divorced women",
    ],
    hi: [
      "वर और वधू का आधार",
      "वर और वधू की उम्र का प्रमाण",
      "समग्र ID",
      "वधू के बैंक खाते का विवरण",
      "विधवा या तलाकशुदा महिला के लिए पति का मृत्यु प्रमाण पत्र या तलाक की डिक्री",
    ],
  },
  faqs: [
    {
      q: { en: "Will I get the money if we marry at home?", hi: "अगर हम घर पर शादी करें, तो क्या पैसा मिलेगा?" },
      a: {
        en: "No. The money is given only for weddings or nikahs held at the mass ceremonies organised under the scheme.",
        hi: "नहीं। पैसा सिर्फ़ योजना में आयोजित सामूहिक विवाह या निकाह में हुई शादियों के लिए मिलता है।",
      },
    },
    {
      q: { en: "Is the scheme only for Hindu marriages?", hi: "क्या योजना सिर्फ़ हिंदू शादियों के लिए है?" },
      a: {
        en: "No. Mass weddings are held as vivah, and as nikah for Muslim families. Both get the same help.",
        hi: "नहीं। सामूहिक कार्यक्रम विवाह के रूप में भी होते हैं और मुस्लिम परिवारों के लिए निकाह के रूप में भी। दोनों को बराबर मदद मिलती है।",
      },
    },
  ],

  officialUrl: "https://socialsecurity.mp.gov.in/",
  sources: [
    "https://socialsecurity.mp.gov.in/",
    "https://www.drishtiias.com/hindi/statepcs/23-04-2025/madhya-pradesh",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2006,
  status: "check-status",
};

export default scheme;
