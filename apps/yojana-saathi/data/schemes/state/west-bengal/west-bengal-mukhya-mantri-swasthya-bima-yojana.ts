import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-mukhya-mantri-swasthya-bima-yojana",
  tier: "compact",
  overlapGroup: "health-cover",
  name: { en: "Mukhya Mantri Swasthya Bima Yojana (West Bengal)", hi: "मुख्यमंत्री स्वास्थ्य बीमा योजना (पश्चिम बंगाल)" },
  aka: ["MMSBY", "Chief Minister's Health Insurance Scheme", "Swasthya Sathi"],
  shortDescription: {
    en: "Cashless hospital treatment up to ₹5 lakh per family per year for West Bengal families who are not covered by Ayushman Bharat PM-JAY.",
    hi: "आयुष्मान भारत PM-JAY में न आने वाले पश्चिम बंगाल के परिवारों को हर साल ₹5 लाख तक का कैशलेस अस्पताल इलाज।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Department of Health & Family Welfare, Government of West Bengal", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, पश्चिम बंगाल सरकार" },
  categories: ["health"],
  tags: ["health insurance", "hospital", "cashless", "swasthya sathi", "ayushman", "west bengal"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("west-bengal")),

  details: {
    en: [
      "In 2026 West Bengal moved from its own Swasthya Sathi scheme to Ayushman Bharat PM-JAY. Mukhya Mantri Swasthya Bima Yojana (MMSBY) is the state's new scheme for eligible families who fall outside PM-JAY, so they still have cover for hospital stays.",
      "It gives cashless treatment of up to ₹5 lakh per family per year at empanelled hospitals, for treatments on the approved package list. An old Swasthya Sathi card does not automatically make you eligible; the state's own criteria apply.",
    ],
    hi: [
      "2026 में पश्चिम बंगाल अपनी स्वास्थ्य साथी योजना से आयुष्मान भारत PM-JAY पर आ गया। मुख्यमंत्री स्वास्थ्य बीमा योजना (MMSBY) राज्य की नई योजना है, जो PM-JAY से बाहर रह गए पात्र परिवारों के लिए है, ताकि अस्पताल में भर्ती होने पर उन्हें भी सुरक्षा मिले।",
      "इसमें सूचीबद्ध अस्पतालों में, मंज़ूर पैकेज सूची के इलाज के लिए, हर परिवार को सालाना ₹5 लाख तक का कैशलेस इलाज मिलता है। पुराना स्वास्थ्य साथी कार्ड होने से अपने-आप पात्रता नहीं मिलती; राज्य के अपने नियम लागू होते हैं।",
    ],
  },
  benefits: {
    en: [
      "Cashless hospital treatment up to ₹5 lakh per family per year.",
      "Treatment at empanelled government and private hospitals for covered packages.",
      "Can be used outside West Bengal at participating hospitals, as per PM-JAY rules.",
    ],
    hi: [
      "हर परिवार को सालाना ₹5 लाख तक का कैशलेस अस्पताल इलाज।",
      "सूचीबद्ध सरकारी और निजी अस्पतालों में, शामिल पैकेजों का इलाज।",
      "PM-JAY के नियमों के अनुसार पश्चिम बंगाल के बाहर भी भाग लेने वाले अस्पतालों में इस्तेमाल हो सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A family living in West Bengal that is not covered under Ayushman Bharat PM-JAY.",
      "Meets the eligibility criteria notified by the Government of West Bengal.",
      "If your family is covered under PM-JAY, use PM-JAY first.",
    ],
    hi: [
      "पश्चिम बंगाल में रहने वाला परिवार, जो आयुष्मान भारत PM-JAY में शामिल नहीं है।",
      "पश्चिम बंगाल सरकार के तय पात्रता नियमों पर खरा उतरता हो।",
      "अगर आपका परिवार PM-JAY में शामिल है, तो पहले PM-JAY का इस्तेमाल करें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "First check if your family is covered under PM-JAY at pmjay-sha.wb.gov.in or at a hospital's Arogya Mitra desk.",
        "If you are not covered, ask the hospital help desk or your block health office whether you qualify for MMSBY.",
        "Carry Aadhaar, your mobile number, family details and any old Swasthya Sathi card for verification.",
      ],
      hi: [
        "पहले pmjay-sha.wb.gov.in पर या अस्पताल के आरोग्य मित्र डेस्क पर देखें कि आपका परिवार PM-JAY में है या नहीं।",
        "अगर नहीं है, तो अस्पताल के हेल्प डेस्क या ब्लॉक स्वास्थ्य कार्यालय से पूछें कि आप MMSBY के पात्र हैं या नहीं।",
        "जाँच के लिए आधार, मोबाइल नंबर, परिवार का ब्योरा और पुराना स्वास्थ्य साथी कार्ड (अगर हो) साथ रखें।",
      ],
    },
  },

  officialUrl: "https://swasthyasathi.gov.in/",
  sources: [
    "https://swasthyasathi.gov.in/",
    "https://wb.gov.in/",
    "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
