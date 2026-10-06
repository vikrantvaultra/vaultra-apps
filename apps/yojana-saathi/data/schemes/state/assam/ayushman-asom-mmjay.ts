import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ayushman-asom-mmjay",
  overlapGroup: "health-cover",
  name: { en: "Ayushman Asom – Mukhya Mantri Jan Arogya Yojana", hi: "आयुष्मान असम – मुख्य मंत्री जन आरोग्य योजना" },
  aka: ["AA-MMJAY", "Ayushman Asom", "Atal Amrit Abhiyan"],
  shortDescription: {
    en: "NFSA ration-card families in Assam left out of Ayushman Bharat get free cashless hospital treatment of up to ₹5 lakh per family each year.",
    hi: "आयुष्मान भारत से छूटे असम के NFSA राशन कार्ड वाले परिवारों को हर साल प्रति परिवार ₹5 लाख तक का मुफ़्त कैशलेस इलाज मिलता है।",
  },
  level: "state",
  state: "assam",
  department: { en: "Health & Family Welfare Department, Government of Assam (Atal Amrit Abhiyan Society)", hi: "स्वास्थ्य एवं परिवार कल्याण विभाग, असम सरकार (अटल अमृत अभियान सोसाइटी)" },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "free treatment", "ayushman card", "hospital", "5 lakh", "assam"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("assam")),

  details: {
    en: [
      "Ayushman Asom – Mukhya Mantri Jan Arogya Yojana (AA-MMJAY) is Assam's own health cover for poor families who are not in the central Ayushman Bharat PM-JAY list. It covers National Food Security Act (ration card) families over and above the roughly 30 lakh PM-JAY families.",
      "It gives cashless treatment of up to ₹5 lakh per family per year in empanelled hospitals, covering 1,949 procedures across 27 specialities. It is run by the Atal Amrit Abhiyan Society, which earlier ran the state's Atal Amrit Abhiyan health cover.",
      "To use it, family members need an Ayushman card made through e-KYC. ASHA workers and other frontline workers do this door to door and in camps.",
    ],
    hi: [
      "आयुष्मान असम – मुख्य मंत्री जन आरोग्य योजना (AA-MMJAY) असम सरकार का अपना स्वास्थ्य बीमा है, उन गरीब परिवारों के लिए जो केंद्र की आयुष्मान भारत PM-JAY सूची में नहीं हैं। यह करीब 30 लाख PM-JAY परिवारों के अलावा बाकी राष्ट्रीय खाद्य सुरक्षा कानून (राशन कार्ड) वाले परिवारों को कवर करती है।",
      "इसमें सूचीबद्ध अस्पतालों में हर साल प्रति परिवार ₹5 लाख तक का कैशलेस इलाज मिलता है, जिसमें 27 विशेषज्ञताओं की 1,949 प्रक्रियाएँ शामिल हैं। इसे अटल अमृत अभियान सोसाइटी चलाती है, जो पहले राज्य की अटल अमृत अभियान योजना चलाती थी।",
      "इसका लाभ लेने के लिए परिवार के सदस्यों का e-KYC से आयुष्मान कार्ड बनना ज़रूरी है। आशा कार्यकर्ता और दूसरे फ़्रंटलाइन कर्मचारी घर-घर जाकर और कैंप में यह काम करते हैं।",
    ],
  },
  benefits: {
    en: [
      "Cashless treatment up to ₹5 lakh per family per year.",
      "Covers 1,949 medical and surgical procedures in 27 specialities.",
      "Treatment in 300+ empanelled government and private hospitals.",
    ],
    hi: [
      "हर साल प्रति परिवार ₹5 लाख तक कैशलेस इलाज।",
      "27 विशेषज्ञताओं की 1,949 मेडिकल और सर्जिकल प्रक्रियाएँ शामिल।",
      "300 से ज़्यादा सूचीबद्ध सरकारी और प्राइवेट अस्पतालों में इलाज।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family lives in Assam and holds an NFSA ration card.",
      "Your family is not already covered under Ayushman Bharat PM-JAY.",
      "Each member has completed Ayushman card e-KYC with Aadhaar.",
    ],
    hi: [
      "आपका परिवार असम में रहता है और उसके पास NFSA राशन कार्ड है।",
      "आपका परिवार पहले से आयुष्मान भारत PM-JAY में शामिल नहीं है।",
      "हर सदस्य ने आधार से आयुष्मान कार्ड का e-KYC पूरा किया हो।",
    ],
  },
  exclusions: {
    en: [
      "Families already covered under AB PM-JAY (they use PM-JAY instead).",
      "Families without an NFSA ration card.",
      "State government employees and pensioners, who have a separate scheme (Mukhya Mantri Lok Sevak Arogya Yojana).",
    ],
    hi: [
      "जो परिवार पहले से AB PM-JAY में हैं (वे PM-JAY का लाभ लेते हैं)।",
      "जिन परिवारों के पास NFSA राशन कार्ड नहीं है।",
      "राज्य सरकार के कर्मचारी और पेंशनभोगी, जिनके लिए अलग योजना (मुख्य मंत्री लोक सेवक आरोग्य योजना) है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your ASHA worker or visit an e-KYC camp, Common Service Centre or empanelled hospital.",
        "Complete e-KYC with your Aadhaar and ration card to get your Ayushman card.",
        "When you need treatment, show the card at the Arogya Mitra desk of an empanelled hospital.",
      ],
      hi: [
        "अपनी आशा कार्यकर्ता से मिलें या e-KYC कैंप, कॉमन सर्विस सेंटर या सूचीबद्ध अस्पताल जाएँ।",
        "आधार और राशन कार्ड से e-KYC पूरा करके आयुष्मान कार्ड बनवाएँ।",
        "इलाज के समय सूचीबद्ध अस्पताल के आरोग्य मित्र डेस्क पर कार्ड दिखाएँ।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card of each member", "NFSA ration card", "Mobile number for OTP"],
    hi: ["हर सदस्य का आधार कार्ड", "NFSA राशन कार्ड", "OTP के लिए मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "What happened to Atal Amrit Abhiyan?", hi: "अटल अमृत अभियान का क्या हुआ?" },
      a: {
        en: "The same society now runs Ayushman Asom – MMJAY together with PM-JAY. Use your Ayushman card for cashless treatment; ask the hospital's Arogya Mitra if you hold an old card.",
        hi: "वही सोसाइटी अब PM-JAY के साथ आयुष्मान असम – MMJAY चलाती है। कैशलेस इलाज के लिए आयुष्मान कार्ड इस्तेमाल करें; पुराना कार्ड हो तो अस्पताल के आरोग्य मित्र से पूछें।",
      },
    },
    {
      q: { en: "Do I have to pay anything?", hi: "क्या मुझे कुछ पैसा देना होगा?" },
      a: {
        en: "No. Treatment covered under the scheme is cashless at empanelled hospitals, up to the ₹5 lakh family limit.",
        hi: "नहीं। योजना में शामिल इलाज सूचीबद्ध अस्पतालों में ₹5 लाख की पारिवारिक सीमा तक कैशलेस है।",
      },
    },
  ],

  officialUrl: "https://atalamritabhiyan.assam.gov.in/schemes/atal-amrit-abhiyan-scheme",
  sources: [
    "https://atalamritabhiyan.assam.gov.in/schemes/atal-amrit-abhiyan-scheme",
    "https://atalamritabhiyan.assam.gov.in/",
    "https://aladigitallibrary.in/handle/123456789/4238",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
