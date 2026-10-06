import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pmjay-ma-gujarat",
  tier: "compact",
  overlapGroup: "health-cover",
  name: { en: "PMJAY-MA Yojana (Mukhyamantri Amrutam, Gujarat)", hi: "PMJAY-मा योजना (मुख्यमंत्री अमृतम, गुजरात)" },
  aka: ["MA card", "MA Vatsalya", "Mukhyamantri Amrutam", "PMJAY-MA", "Ma Yojana Gujarat"],
  shortDescription: {
    en: "Gujarat's combined PMJAY and Mukhyamantri Amrutam (MA) health cover gives cashless treatment of up to ₹10 lakh per family a year at listed hospitals to poor and lower-middle-income families.",
    hi: "गुजरात की PMJAY और मुख्यमंत्री अमृतम (मा) की संयुक्त स्वास्थ्य योजना गरीब और निम्न-मध्यम आय वाले परिवारों को सूचीबद्ध अस्पतालों में हर साल प्रति परिवार ₹10 लाख तक कैशलेस इलाज देती है।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Health and Family Welfare Department, Government of Gujarat", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, गुजरात सरकार" },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "ma card", "ayushman", "pmjay", "cashless treatment", "hospital", "gujarat"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 1000000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("gujarat")),

  details: {
    en: [
      "Gujarat merged its own Mukhyamantri Amrutam (MA) and MA Vatsalya health schemes with the central Ayushman Bharat PMJAY in 2021 under the name PMJAY-MA. In 2023 the state raised the cover to ₹10 lakh per family per year, double the central ₹5 lakh.",
      "Beyond families covered by PMJAY, the state adds families holding MA or MA Vatsalya cards (lower-middle-income families with an income certificate), registered construction workers, ASHA workers, accredited reporters and some fixed-pay staff. About 2.72 crore people were covered in 2026-27.",
    ],
    hi: [
      "गुजरात ने 2021 में अपनी मुख्यमंत्री अमृतम (मा) और मा वात्सल्य स्वास्थ्य योजनाओं को केंद्र की आयुष्मान भारत PMJAY के साथ मिलाकर PMJAY-मा नाम दिया। 2023 में राज्य ने कवर बढ़ाकर प्रति परिवार हर साल ₹10 लाख कर दिया, जो केंद्र के ₹5 लाख का दोगुना है।",
      "PMJAY वाले परिवारों के अलावा राज्य मा या मा वात्सल्य कार्ड वाले परिवारों (आय प्रमाण पत्र वाले निम्न-मध्यम आय परिवार), पंजीकृत निर्माण श्रमिकों, आशा कार्यकर्ताओं, मान्यता प्राप्त पत्रकारों और कुछ निश्चित वेतन वाले कर्मचारियों को भी जोड़ता है। 2026-27 में करीब 2.72 करोड़ लोग इसमें शामिल थे।",
    ],
  },
  benefits: {
    en: ["Cashless treatment of up to ₹10 lakh per family per year.", "Covers hospital stays and surgeries at empanelled government and private hospitals.", "Helpline: 1800-233-1022."],
    hi: ["हर साल प्रति परिवार ₹10 लाख तक कैशलेस इलाज।", "सूचीबद्ध सरकारी और निजी अस्पतालों में भर्ती और ऑपरेशन शामिल।", "हेल्पलाइन: 1800-233-1022।"],
  },
  eligibilityText: {
    en: [
      "Families in Gujarat covered by Ayushman Bharat PMJAY.",
      "Families with an MA or MA Vatsalya card, issued on the basis of an income certificate (the current income limit is set by state orders; ask at the enrolment kiosk).",
      "Registered construction workers, ASHA workers, accredited reporters and some other groups named by the state.",
    ],
    hi: [
      "गुजरात के वे परिवार जो आयुष्मान भारत PMJAY में शामिल हैं।",
      "मा या मा वात्सल्य कार्ड वाले परिवार, जो आय प्रमाण पत्र के आधार पर बनता है (मौजूदा आय सीमा राज्य के आदेशों से तय है; नामांकन कियोस्क पर पूछें)।",
      "पंजीकृत निर्माण श्रमिक, आशा कार्यकर्ता, मान्यता प्राप्त पत्रकार और राज्य के बताए कुछ अन्य वर्ग।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Take your Aadhaar, ration card and income certificate to an MA/PMJAY enrolment kiosk at a taluka or civic centre, or ask at a government hospital.",
        "Your card is made after Aadhaar e-KYC. Show it at any empanelled hospital for cashless treatment.",
      ],
      hi: [
        "आधार, राशन कार्ड और आय प्रमाण पत्र लेकर तालुका या नागरिक केंद्र के मा/PMJAY नामांकन कियोस्क पर जाएँ, या किसी सरकारी अस्पताल में पूछें।",
        "आधार e-KYC के बाद आपका कार्ड बनता है। कैशलेस इलाज के लिए इसे किसी भी सूचीबद्ध अस्पताल में दिखाएँ।",
      ],
    },
    online: {
      en: ["Check whether your family is listed, or download your Ayushman card, at beneficiary.nha.gov.in."],
      hi: ["beneficiary.nha.gov.in पर देखें कि आपका परिवार सूची में है या नहीं, या अपना आयुष्मान कार्ड डाउनलोड करें।"],
    },
  },

  officialUrl: "https://ma.gujarat.gov.in/",
  sources: [
    "https://ma.gujarat.gov.in/",
    "https://ma.gujarat.gov.in/documents/About%20MA%20Yojana%20English.pdf",
    "https://cmogujarat.gov.in/sites/default/files/2026-02/gujarat-budget-2026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
