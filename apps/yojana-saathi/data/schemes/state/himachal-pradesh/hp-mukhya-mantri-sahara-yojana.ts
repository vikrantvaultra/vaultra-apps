import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "hp-mukhya-mantri-sahara-yojana",
  tier: "compact",
  name: { en: "Mukhya Mantri Sahara Yojana (Himachal Pradesh)", hi: "मुख्यमंत्री सहारा योजना (हिमाचल प्रदेश)" },
  aka: ["Sahara Yojana", "Sahara scheme Himachal"],
  shortDescription: {
    en: "Patients from economically weaker families in Himachal with cancer, paralysis, Parkinson's, kidney failure, thalassemia or other disabling diseases get ₹3,000 a month.",
    hi: "हिमाचल के आर्थिक रूप से कमज़ोर परिवारों के कैंसर, लकवा, पार्किंसन, किडनी फ़ेल, थैलेसीमिया या दूसरी अपंग करने वाली बीमारियों वाले मरीज़ों को हर महीने ₹3,000 मिलते हैं।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Department of Social Justice and Empowerment (ESOMSA), Government of Himachal Pradesh",
    hi: "सामाजिक न्याय एवं अधिकारिता विभाग (ईसोमसा), हिमाचल प्रदेश सरकार",
  },
  categories: ["health", "social-welfare"],
  tags: ["sahara", "cancer", "paralysis", "kidney", "thalassemia", "patient", "himachal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 3000, period: "monthly", kind: "cash" },
  kundliHouse: "health",
  eligibility: all(residentOf("himachal-pradesh")),

  details: {
    en: [
      "Mukhya Mantri Sahara Yojana is a social security scheme for patients with long-term, life-threatening or disabling illnesses, to ease the money problems of prolonged treatment.",
      "It covers diseases such as Parkinson's, malignant cancer, paralysis, muscular dystrophy, haemophilia, thalassemia and chronic kidney failure, and any other disease that leaves a person permanently unable to work. It was earlier run by the HP Swasthya Bima Yojana Society and has now moved to the ESOMSA (social justice) department.",
    ],
    hi: [
      "मुख्यमंत्री सहारा योजना लंबी, जानलेवा या अपंग करने वाली बीमारियों के मरीज़ों के लिए सामाजिक सुरक्षा योजना है, ताकि लंबे इलाज में पैसों की परेशानी कम हो।",
      "इसमें पार्किंसन, कैंसर, लकवा, मस्कुलर डिस्ट्रॉफ़ी, हीमोफ़ीलिया, थैलेसीमिया और किडनी फ़ेल होने जैसी बीमारियाँ, और कोई भी ऐसी बीमारी आती है जिससे व्यक्ति हमेशा के लिए काम करने लायक न रहे। पहले इसे हिमाचल प्रदेश स्वास्थ्य बीमा योजना सोसाइटी चलाती थी, अब यह ईसोमसा (सामाजिक न्याय) विभाग के पास है।",
    ],
  },
  benefits: {
    en: ["₹3,000 every month to the patient.", "That is ₹36,000 a year to help with the costs of long treatment."],
    hi: ["मरीज़ को हर महीने ₹3,000।", "लंबे इलाज के ख़र्च में मदद के लिए साल भर में ₹36,000।"],
  },
  eligibilityText: {
    en: [
      "A patient from an economically weaker family in Himachal Pradesh.",
      "Suffers from a listed disease (such as cancer, paralysis, Parkinson's, muscular dystrophy, haemophilia, thalassemia, chronic kidney failure) or another disease causing permanent incapacity.",
      "A medical certificate and an income or BPL certificate are needed; ask the department for the current income limit.",
    ],
    hi: [
      "हिमाचल प्रदेश के आर्थिक रूप से कमज़ोर परिवार का मरीज़।",
      "सूची वाली कोई बीमारी हो (जैसे कैंसर, लकवा, पार्किंसन, मस्कुलर डिस्ट्रॉफ़ी, हीमोफ़ीलिया, थैलेसीमिया, किडनी फ़ेल होना) या कोई दूसरी बीमारी जिससे हमेशा के लिए अक्षमता हो।",
      "चिकित्सा प्रमाण पत्र और आय या BPL प्रमाण पत्र चाहिए; मौजूदा आय सीमा विभाग से पता करें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on sahara.hpsbys.in ('New Registration') or ask the District/Tehsil Welfare Officer how to apply now that the scheme has moved to ESOMSA.",
        "Upload the medical certificate, BPL or income certificate and bank details.",
        "Check your status and payments and download your Sahara card on the same portal.",
      ],
      hi: [
        "sahara.hpsbys.in पर 'New Registration' करें, या योजना ईसोमसा में जाने के बाद आवेदन का तरीक़ा ज़िला/तहसील कल्याण अधिकारी से पूछें।",
        "चिकित्सा प्रमाण पत्र, BPL या आय प्रमाण पत्र और बैंक विवरण अपलोड करें।",
        "उसी पोर्टल पर स्थिति, भुगतान देखें और सहारा कार्ड डाउनलोड करें।",
      ],
    },
  },

  officialUrl: "https://sahara.hpsbys.in/",
  sources: ["https://sahara.hpsbys.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
