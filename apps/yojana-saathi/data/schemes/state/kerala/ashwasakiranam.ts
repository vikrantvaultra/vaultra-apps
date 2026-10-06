import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ashwasakiranam",
  tier: "compact",
  name: { en: "Ashwasakiranam", hi: "आश्वासकिरणम" },
  aka: ["Aswasakiranam", "caregiver allowance Kerala", "KSSM Ashwasakiranam"],
  shortDescription: {
    en: "Monthly help in Kerala for people who look after a bedridden patient or a person with severe disability at home full time.",
    hi: "केरल में उन लोगों के लिए मासिक मदद जो घर पर किसी बिस्तर पर पड़े मरीज़ या गंभीर दिव्यांग व्यक्ति की पूरे समय देखभाल करते हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Kerala Social Security Mission, Social Justice Department, Government of Kerala",
    hi: "केरल सामाजिक सुरक्षा मिशन, सामाजिक न्याय विभाग, केरल सरकार",
  },
  categories: ["social-welfare", "disability"],
  tags: ["caregiver", "bedridden", "carer allowance", "disability", "ashwasakiranam", "kerala"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(residentOf("kerala")),

  details: {
    en: [
      "Ashwasakiranam pays a monthly allowance to caregivers, usually family members, who cannot go to work because they look after a bedridden person or a person with a severe mental or physical disability.",
      "The scheme started in 2010 and is run by the Kerala Social Security Mission. In 2026 the Mission is collecting life certificates from current beneficiaries and updating details of people who applied after March 2018. The new government's 2026-27 budget promises to revive the scheme.",
    ],
    hi: [
      "आश्वासकिरणम उन देखभाल करने वालों को, जो आम तौर पर परिवार के सदस्य होते हैं, हर महीने भत्ता देती है जो किसी बिस्तर पर पड़े व्यक्ति या गंभीर मानसिक या शारीरिक दिव्यांगता वाले व्यक्ति की देखभाल की वजह से काम पर नहीं जा पाते।",
      "यह योजना 2010 में शुरू हुई और केरल सामाजिक सुरक्षा मिशन इसे चलाता है। 2026 में मिशन मौजूदा लाभार्थियों से जीवन प्रमाण पत्र ले रहा है और मार्च 2018 के बाद आवेदन करने वालों की जानकारी अपडेट कर रहा है। नई सरकार के 2026-27 बजट में इस योजना को फिर से मज़बूत करने का वादा है।",
    ],
  },
  benefits: {
    en: ["A monthly allowance for the caregiver, paid into the bank account."],
    hi: ["देखभाल करने वाले को हर महीने भत्ता, बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "You care full time for a person who is bedridden, or who has a severe mental or physical disability, at home in Kerala.",
      "Income and other conditions are set by the Social Security Mission. Check with your local Anganwadi / ICDS office before applying.",
    ],
    hi: [
      "आप केरल में घर पर किसी बिस्तर पर पड़े व्यक्ति या गंभीर मानसिक या शारीरिक दिव्यांगता वाले व्यक्ति की पूरे समय देखभाल करते हैं।",
      "आय और बाक़ी शर्तें सामाजिक सुरक्षा मिशन तय करता है। आवेदन से पहले अपने आंगनवाड़ी / ICDS कार्यालय से पूछ लें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Download the Ashwasakiranam application form from the Social Security Mission website (Application Forms page).",
        "Fill it in and attach the patient's medical certificate, your bank details and the other documents listed on the form.",
        "Submit it as directed on the form. Current beneficiaries must send the yearly life certificate to keep getting the allowance.",
      ],
      hi: [
        "सामाजिक सुरक्षा मिशन की वेबसाइट (आवेदन फ़ॉर्म पेज) से आश्वासकिरणम का फ़ॉर्म डाउनलोड करें।",
        "फ़ॉर्म भरें और मरीज़ का मेडिकल प्रमाण पत्र, अपना बैंक विवरण और फ़ॉर्म में बताए दूसरे दस्तावेज़ लगाएँ।",
        "फ़ॉर्म में बताए तरीक़े से जमा करें। मौजूदा लाभार्थियों को भत्ता मिलते रहने के लिए हर साल जीवन प्रमाण पत्र भेजना होता है।",
      ],
    },
  },

  officialUrl: "https://socialsecuritymission.gov.in/application-forms/",
  sources: [
    "https://socialsecuritymission.gov.in/2024/07/12/senior-citizen/",
    "https://socialsecuritymission.gov.in/application-forms/",
    "https://budget.kerala.gov.in/build/budget_speech/2026rev/2026Eng.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "check-status",
};

export default scheme;
