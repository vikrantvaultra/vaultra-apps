import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rajya-khadya-suraksha-yojana",
  tier: "compact",
  name: { en: "Rajya Khadya Suraksha Yojana (Khadya Sathi)", hi: "राज्य खाद्य सुरक्षा योजना (खाद्य साथी)" },
  aka: ["RKSY", "Khadya Sathi", "RKSY-I", "RKSY-II"],
  shortDescription: {
    en: "Free rice from ration shops for West Bengal families not fully covered by the national food law: 5 kg per person a month for RKSY-I cards, 2 kg for RKSY-II.",
    hi: "राष्ट्रीय खाद्य क़ानून में पूरी तरह न आने वाले पश्चिम बंगाल के परिवारों को राशन दुकान से मुफ़्त चावल: RKSY-I कार्ड पर हर व्यक्ति को महीने में 5 किलो, RKSY-II पर 2 किलो।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Food & Supplies Department, Government of West Bengal", hi: "खाद्य एवं आपूर्ति विभाग, पश्चिम बंगाल सरकार" },
  categories: ["social-welfare"],
  tags: ["ration", "free rice", "food", "khadya sathi", "ration card", "west bengal"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(residentOf("west-bengal")),

  details: {
    en: [
      "Rajya Khadya Suraksha Yojana is West Bengal's own food security scheme, part of the Khadya Sathi programme. It gives free food grains to families that are not fully covered under the National Food Security Act (NFSA).",
      "Families get an RKSY-I (more vulnerable) or RKSY-II ration card and collect free rice every month from their fair price shop.",
    ],
    hi: [
      "राज्य खाद्य सुरक्षा योजना पश्चिम बंगाल की अपनी खाद्य सुरक्षा योजना है, जो खाद्य साथी कार्यक्रम का हिस्सा है। यह उन परिवारों को मुफ़्त अनाज देती है जो राष्ट्रीय खाद्य सुरक्षा क़ानून (NFSA) में पूरी तरह शामिल नहीं हैं।",
      "परिवारों को RKSY-I (ज़्यादा ज़रूरतमंद) या RKSY-II राशन कार्ड मिलता है और वे हर महीने अपनी राशन दुकान से मुफ़्त चावल लेते हैं।",
    ],
  },
  benefits: {
    en: ["RKSY-I: 5 kg rice per person every month, free.", "RKSY-II: 2 kg rice per person every month, free."],
    hi: ["RKSY-I: हर व्यक्ति को हर महीने 5 किलो चावल, मुफ़्त।", "RKSY-II: हर व्यक्ति को हर महीने 2 किलो चावल, मुफ़्त।"],
  },
  eligibilityText: {
    en: [
      "Resident of West Bengal with a valid ration card.",
      "From an economically weaker household not fully covered under NFSA.",
      "Not a government employee.",
      "Families with high income or major assets (such as vehicles, large landholdings or income-tax payers) are left out.",
    ],
    hi: [
      "पश्चिम बंगाल का निवासी, जिसके पास मान्य राशन कार्ड हो।",
      "आर्थिक रूप से कमज़ोर परिवार, जो NFSA में पूरी तरह शामिल न हो।",
      "सरकारी कर्मचारी न हो।",
      "ज़्यादा आय या बड़ी संपत्ति वाले परिवार (जैसे गाड़ी, बड़ी ज़मीन या आयकर देने वाले) शामिल नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to food.wb.gov.in and apply for a new ration card or for conversion to RKSY-I.",
        "Verify your mobile number with OTP, fill in family, income and occupation details, and upload Aadhaar, address proof and income certificate.",
        "After verification your RKSY card is issued and you can collect rice from your fair price shop.",
      ],
      hi: [
        "food.wb.gov.in पर जाकर नए राशन कार्ड या RKSY-I में बदलने के लिए आवेदन करें।",
        "OTP से मोबाइल नंबर की पुष्टि करें, परिवार, आय और काम का ब्योरा भरें, और आधार, पते का सबूत व आय प्रमाण पत्र अपलोड करें।",
        "जाँच के बाद RKSY कार्ड मिलता है और आप राशन दुकान से चावल ले सकते हैं।",
      ],
    },
    offline: {
      en: ["Collect the form from your local food office or ration shop, fill it in and submit it there with the same documents."],
      hi: ["अपने स्थानीय खाद्य कार्यालय या राशन दुकान से फ़ॉर्म लें, भरें और उन्हीं दस्तावेज़ों के साथ वहीं जमा करें।"],
    },
  },

  officialUrl: "https://food.wb.gov.in/",
  sources: ["https://wb.gov.in/government-schemes-details-rajya-khadya-suraksha-yojana.aspx", "https://food.wb.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
