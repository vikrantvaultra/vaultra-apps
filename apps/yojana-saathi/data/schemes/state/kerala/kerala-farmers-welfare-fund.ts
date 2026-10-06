import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "kerala-farmers-welfare-fund",
  tier: "compact",
  name: { en: "Kerala Farmers' Welfare Fund", hi: "केरल किसान कल्याण निधि" },
  aka: ["Karshaka Kshema Nidhi", "Kerala farmers pension", "KFWFB"],
  shortDescription: {
    en: "Small and medium farmers in Kerala can join the Farmers' Welfare Fund by paying a regular contribution and get a pension and other welfare help from the board.",
    hi: "केरल के छोटे और मझोले किसान नियमित अंशदान देकर किसान कल्याण निधि से जुड़ सकते हैं और बोर्ड से पेंशन और दूसरी कल्याण सहायता पा सकते हैं।",
  },
  level: "state",
  state: "kerala",
  department: {
    en: "Kerala Farmers' Welfare Fund Board, Agriculture Department, Government of Kerala",
    hi: "केरल किसान कल्याण निधि बोर्ड, कृषि विभाग, केरल सरकार",
  },
  categories: ["agriculture", "pension-insurance"],
  tags: ["farmer pension", "farmers welfare", "kshema nidhi", "agriculture", "kerala"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("kerala"), when("occupation", "in", ["farmer", "livestock-dairy"])),

  details: {
    en: [
      "The Kerala Farmers' Welfare Fund was set up under the Kerala Farmers' Welfare Fund Act, 2019, and the board started work in October 2020. Members pay a contribution, and the board pays pensions and other welfare benefits.",
      "Farming here includes crops, gardening, medicinal plants, livestock, poultry, fish farming, beekeeping, sericulture and similar work. Registration and contributions are done online.",
    ],
    hi: [
      "केरल किसान कल्याण निधि, केरल किसान कल्याण निधि अधिनियम 2019 के तहत बनी, और बोर्ड ने अक्टूबर 2020 में काम शुरू किया। सदस्य अंशदान देते हैं, और बोर्ड पेंशन और दूसरी कल्याण सहायता देता है।",
      "यहाँ खेती में फ़सल, बाग़बानी, औषधीय पौधे, पशुपालन, मुर्गीपालन, मछली पालन, मधुमक्खी पालन, रेशम कीट पालन और ऐसे काम शामिल हैं। रजिस्ट्रेशन और अंशदान ऑनलाइन होता है।",
    ],
  },
  benefits: {
    en: ["A pension for members after retirement age, as set by the board.", "Other welfare help from the board for members and their families."],
    hi: ["सदस्यों को बोर्ड के नियमों के हिसाब से तय उम्र के बाद पेंशन।", "सदस्यों और उनके परिवारों को बोर्ड से दूसरी कल्याण सहायता।"],
  },
  eligibilityText: {
    en: [
      "You hold between 5 cents and 15 acres of land as owner, licensee, lessee or tenant (for cardamom, rubber, coffee and tea, no more than 7.5 acres).",
      "Farming or allied work has been your main livelihood for at least 3 years.",
      "Your annual income is not more than ₹5 lakh.",
    ],
    hi: [
      "आपके पास मालिक, लाइसेंसधारी, पट्टेदार या किरायेदार के रूप में 5 सेंट से 15 एकड़ तक ज़मीन है (इलायची, रबर, कॉफ़ी और चाय के लिए 7.5 एकड़ से ज़्यादा नहीं)।",
      "कम से कम 3 साल से खेती या उससे जुड़ा काम आपकी कमाई का मुख्य ज़रिया है।",
      "आपकी सालाना आय ₹5 लाख से ज़्यादा नहीं है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to kfwfb.kerala.gov.in and choose New Registration.",
        "Register with your mobile number (OTP), fill in your details and upload the income certificate and the required declarations.",
        "Pay the registration fee online, then keep paying your contribution online to stay a member.",
      ],
      hi: [
        "kfwfb.kerala.gov.in पर जाएँ और New Registration चुनें।",
        "मोबाइल नंबर (OTP) से रजिस्टर करें, अपनी जानकारी भरें और आय प्रमाण पत्र और ज़रूरी घोषणा पत्र अपलोड करें।",
        "रजिस्ट्रेशन फ़ीस ऑनलाइन भरें, फिर सदस्य बने रहने के लिए अंशदान ऑनलाइन देते रहें।",
      ],
    },
  },

  officialUrl: "https://kfwfb.kerala.gov.in/",
  sources: ["https://kfwfb.kerala.gov.in/", "https://kfwfb.kerala.gov.in/user_manual.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
