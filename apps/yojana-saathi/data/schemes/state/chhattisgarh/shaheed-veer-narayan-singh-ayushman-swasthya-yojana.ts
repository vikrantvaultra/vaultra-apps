import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shaheed-veer-narayan-singh-ayushman-swasthya-yojana",
  overlapGroup: "health-cover",
  name: {
    en: "Shaheed Veer Narayan Singh Ayushman Swasthya Yojana",
    hi: "शहीद वीर नारायण सिंह आयुष्मान स्वास्थ्य योजना",
  },
  aka: ["SVNSASY", "Ayushman card Chhattisgarh", "Veer Narayan Singh Ayushman Yojana"],
  shortDescription: {
    en: "Ration-card families in Chhattisgarh get free hospital treatment: up to ₹5 lakh per family for BPL card holders and up to ₹50,000 for APL card holders, run together with Ayushman Bharat PM-JAY.",
    hi: "छत्तीसगढ़ के राशन कार्डधारी परिवारों को मुफ़्त अस्पताल इलाज: BPL कार्डधारी परिवारों को ₹5 लाख तक और APL कार्डधारी परिवारों को ₹50,000 तक, आयुष्मान भारत PM-JAY के साथ मिलकर।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Public Health and Family Welfare Department (State Nodal Agency), Government of Chhattisgarh",
    hi: "लोक स्वास्थ्य एवं परिवार कल्याण विभाग (राज्य नोडल एजेंसी), छत्तीसगढ़ सरकार",
  },
  categories: ["health"],
  tags: ["health insurance", "ayushman card", "hospital", "free treatment", "ration card", "chhattisgarh"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 50000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("chhattisgarh")),

  details: {
    en: [
      "Shaheed Veer Narayan Singh Ayushman Swasthya Yojana is Chhattisgarh's own health cover. It runs together with the central Ayushman Bharat PM-JAY, so families get one Ayushman card for both.",
      "Families with a BPL (priority) ration card can get free treatment of up to ₹5 lakh per family. Families with an APL ration card can get free treatment of up to ₹50,000 per family.",
      "Treatment is cashless at government hospitals and at private hospitals empanelled under the scheme. Each family member gets a separate Ayushman card.",
    ],
    hi: [
      "शहीद वीर नारायण सिंह आयुष्मान स्वास्थ्य योजना छत्तीसगढ़ सरकार का अपना स्वास्थ्य कवर है। यह केंद्र की आयुष्मान भारत PM-JAY के साथ चलती है, इसलिए दोनों के लिए एक ही आयुष्मान कार्ड बनता है।",
      "BPL (प्राथमिकता) राशन कार्ड वाले परिवारों को ₹5 लाख तक और APL राशन कार्ड वाले परिवारों को ₹50,000 तक का मुफ़्त इलाज मिल सकता है।",
      "सरकारी अस्पतालों और योजना से जुड़े निजी अस्पतालों में इलाज कैशलेस होता है। परिवार के हर सदस्य का अलग आयुष्मान कार्ड बनता है।",
    ],
  },
  benefits: {
    en: [
      "BPL ration-card families: free treatment up to ₹5 lakh per family.",
      "APL ration-card families: free treatment up to ₹50,000 per family.",
      "Cashless treatment at government and empanelled private hospitals.",
      "Making the Ayushman card is free.",
    ],
    hi: [
      "BPL राशन कार्ड वाले परिवार: प्रति परिवार ₹5 लाख तक मुफ़्त इलाज।",
      "APL राशन कार्ड वाले परिवार: प्रति परिवार ₹50,000 तक मुफ़्त इलाज।",
      "सरकारी और योजना से जुड़े निजी अस्पतालों में कैशलेस इलाज।",
      "आयुष्मान कार्ड बनवाना मुफ़्त है।",
    ],
  },
  eligibilityText: {
    en: [
      "A family living in Chhattisgarh with a ration card in which your name is listed.",
      "The amount of cover depends on the ration card: BPL (priority) or APL.",
      "Government employees' families with an eligible APL card can also get the APL cover.",
    ],
    hi: [
      "छत्तीसगढ़ में रहने वाला परिवार, जिसके राशन कार्ड में आपका नाम दर्ज हो।",
      "कवर की राशि राशन कार्ड पर निर्भर है: BPL (प्राथमिकता) या APL।",
      "पात्र APL कार्ड वाले सरकारी कर्मचारियों के परिवार भी APL कवर ले सकते हैं।",
    ],
  },
  exclusions: {
    en: [
      "People whose name is not on a Chhattisgarh ration card.",
      "Treatment at private hospitals that are not empanelled under the scheme.",
    ],
    hi: [
      "जिनका नाम छत्तीसगढ़ के किसी राशन कार्ड में दर्ज नहीं है।",
      "ऐसे निजी अस्पतालों में इलाज जो योजना से जुड़े नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Take your ration card, Aadhaar and mobile number to a health centre, a Lok Seva Kendra (CSC) or a special Ayushman card camp in your panchayat or ward.",
        "Get an Ayushman card made for each family member; it is free.",
        "At an empanelled hospital, show your Ayushman card, ration card or Aadhaar at the Ayushman help desk to get cashless treatment.",
      ],
      hi: [
        "राशन कार्ड, आधार और मोबाइल नंबर लेकर स्वास्थ्य केंद्र, लोक सेवा केंद्र (CSC) या पंचायत/वार्ड में लगे आयुष्मान कार्ड शिविर में जाएँ।",
        "परिवार के हर सदस्य का आयुष्मान कार्ड बनवाएँ; यह मुफ़्त है।",
        "योजना से जुड़े अस्पताल में आयुष्मान हेल्प डेस्क पर आयुष्मान कार्ड, राशन कार्ड या आधार दिखाकर कैशलेस इलाज लें।",
      ],
    },
  },
  documents: {
    en: ["Ration card with your name on it", "Aadhaar card", "Mobile number"],
    hi: ["राशन कार्ड जिसमें आपका नाम दर्ज हो", "आधार कार्ड", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Is this different from the Ayushman Vay Vandana card?", hi: "क्या यह आयुष्मान वय वंदना कार्ड से अलग है?" },
      a: {
        en: "Yes. People aged 70 and above can also get the central Ayushman Vay Vandana card, which gives up to ₹5 lakh cover. It is made at the same camps.",
        hi: "हाँ। 70 साल या उससे ज़्यादा उम्र के लोग केंद्र का आयुष्मान वय वंदना कार्ड भी बनवा सकते हैं, जिसमें ₹5 लाख तक का कवर है। यह भी उन्हीं शिविरों में बनता है।",
      },
    },
    {
      q: { en: "What if the illness needs more than my cover?", hi: "अगर बीमारी का इलाज मेरे कवर से महँगा हो तो?" },
      a: {
        en: "For listed serious and rare diseases, priority and Antyodaya card families can apply for extra help of up to ₹25 lakh under the Mukhyamantri Vishesh Swasthya Sahayata Yojana.",
        hi: "चुनी हुई गंभीर और दुर्लभ बीमारियों के लिए प्राथमिकता और अंत्योदय कार्ड वाले परिवार मुख्यमंत्री विशेष स्वास्थ्य सहायता योजना में ₹25 लाख तक की अतिरिक्त मदद के लिए आवेदन कर सकते हैं।",
      },
    },
  ],

  officialUrl: "https://cghealth.nic.in/",
  sources: [
    "https://dprcg.gov.in/post/1784129316/%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%87-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%9A%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A4%BE-%E0%A4%86%E0%A4%AF%E0%A5%81%E0%A4%B7%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A8-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A1-%E0%A4%AE%E0%A4%B9%E0%A4%BE-%E0%A4%85%E0%A4%AD%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%A8",
    "https://cghealth.nic.in/",
    "https://prsindia.org/budgets/states/chhattisgarh-budget-analysis-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
