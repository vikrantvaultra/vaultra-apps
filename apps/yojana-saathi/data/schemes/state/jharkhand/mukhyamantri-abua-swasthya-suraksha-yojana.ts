import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-abua-swasthya-suraksha-yojana",
  tier: "compact",
  overlapGroup: "health-cover",
  name: { en: "Mukhyamantri Abua Swasthya Suraksha Yojana", hi: "मुख्यमंत्री अबुआ स्वास्थ्य सुरक्षा योजना" },
  aka: ["Abua Swasthya Yojana", "Abua health scheme", "Jharkhand state health insurance"],
  shortDescription: {
    en: "Jharkhand's own health cover for poor families, especially those left out of Ayushman Bharat PM-JAY, for cashless treatment at empanelled hospitals.",
    hi: "ग़रीब परिवारों के लिए झारखंड सरकार का अपना स्वास्थ्य बीमा, ख़ासकर आयुष्मान भारत PM-JAY से छूटे परिवारों के लिए, सूचीबद्ध अस्पतालों में बिना नकद इलाज के लिए।",
  },
  level: "state",
  state: "jharkhand",
  department: {
    en: "Department of Health, Medical Education and Family Welfare, Government of Jharkhand",
    hi: "स्वास्थ्य, चिकित्सा शिक्षा एवं परिवार कल्याण विभाग, झारखंड सरकार",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "abua swasthya", "hospital", "cashless treatment", "ayushman", "jharkhand"],
  benefitType: "insurance",
  isDBT: false,
  kundliHouse: "health",
  eligibility: all(residentOf("jharkhand")),

  details: {
    en: [
      "Mukhyamantri Abua Swasthya Suraksha Yojana is the Jharkhand government's health protection scheme for poor families. The state also runs the Mukhyamantri Jan Arogya Yojana, which gives health cover to families not covered by Ayushman Bharat PM-JAY.",
      "The Chief Minister has said the state gives health cover of up to ₹15 lakh to about 38 lakh poor families left out of PM-JAY. The detailed rules, the current cover amount and how to enrol were not available on an official page we could open, so check with your district hospital or Ayushman Mitra before relying on it.",
    ],
    hi: [
      "मुख्यमंत्री अबुआ स्वास्थ्य सुरक्षा योजना ग़रीब परिवारों के लिए झारखंड सरकार की स्वास्थ्य सुरक्षा योजना है। राज्य मुख्यमंत्री जन आरोग्य योजना भी चलाता है, जो आयुष्मान भारत PM-JAY से छूटे परिवारों को स्वास्थ्य बीमा देती है।",
      "मुख्यमंत्री ने बताया है कि राज्य PM-JAY से छूटे लगभग 38 लाख ग़रीब परिवारों को ₹15 लाख तक का स्वास्थ्य बीमा देता है। विस्तृत नियम, अभी की बीमा राशि और नाम जुड़वाने का तरीक़ा हमें किसी आधिकारिक पेज पर नहीं मिला, इसलिए भरोसा करने से पहले अपने ज़िला अस्पताल या आयुष्मान मित्र से पता करें।",
    ],
  },
  benefits: {
    en: ["Cashless treatment at empanelled government and private hospitals.", "Cover amount as set by the state for your category (announced as up to ₹15 lakh)."],
    hi: ["सूचीबद्ध सरकारी और निजी अस्पतालों में बिना नकद इलाज।", "आपकी श्रेणी के लिए राज्य की तय बीमा राशि (₹15 लाख तक बताई गई है)।"],
  },
  eligibilityText: {
    en: [
      "Resident of Jharkhand from a poor family with a ration card.",
      "Mainly for families who are not covered by Ayushman Bharat PM-JAY.",
      "Exact eligibility depends on the state's current rules.",
    ],
    hi: ["झारखंड के निवासी, जिनका परिवार ग़रीब हो और राशन कार्ड हो।", "मुख्य रूप से उन परिवारों के लिए जो आयुष्मान भारत PM-JAY में नहीं आते।", "सही पात्रता राज्य के मौजूदा नियमों पर निर्भर है।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask the Ayushman Mitra at your district hospital or an empanelled hospital whether your family is covered.",
        "Carry your ration card and Aadhaar to get your family's card made.",
      ],
      hi: [
        "अपने ज़िला अस्पताल या किसी सूचीबद्ध अस्पताल के आयुष्मान मित्र से पूछें कि आपका परिवार इसमें शामिल है या नहीं।",
        "परिवार का कार्ड बनवाने के लिए राशन कार्ड और आधार साथ ले जाएँ।",
      ],
    },
  },

  officialUrl: "https://cm.jharkhand.gov.in/node/15926",
  sources: ["https://cm.jharkhand.gov.in/node/15926", "https://cm.jharkhand.gov.in/node/15194"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
