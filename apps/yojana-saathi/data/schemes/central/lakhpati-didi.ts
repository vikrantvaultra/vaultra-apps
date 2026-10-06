import { all, female, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "lakhpati-didi",
  name: { en: "Lakhpati Didi Initiative", hi: "लखपति दीदी पहल" },
  aka: ["Lakhpati Didi", "DAY-NRLM", "Aajeevika"],
  shortDescription: {
    en: "Women in village self-help groups get training, easier loans and market links to build a livelihood that earns the family ₹1 lakh or more a year.",
    hi: "गाँव के स्वयं सहायता समूहों की महिलाओं को प्रशिक्षण, आसान कर्ज़ और बाज़ार से जुड़ाव मिलता है ताकि परिवार की सालाना कमाई ₹1 लाख या उससे ज़्यादा हो सके।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["women-child", "business"],
  tags: ["women", "self help group", "shg", "livelihood", "lakhpati didi", "rural business", "loan"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    female(),
    labelled(when("area", "eq", "rural"), { en: "You live in a village (rural area)", hi: "आप गाँव (ग्रामीण क्षेत्र) में रहती हैं" }),
  ),

  details: {
    en: [
      "Lakhpati Didi is an initiative under the Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY-NRLM), run by the Ministry of Rural Development with State Rural Livelihood Missions. A 'Lakhpati Didi' is a self-help group (SHG) member whose household earns at least ₹1 lakh a year, steadily, from her livelihood activities.",
      "It is not a cash scheme. Instead, SHG women are helped to plan and grow one or more income sources, such as farming, livestock, dairy, small shops, food processing, crafts or services like drone operation, through training, credit and market support already available under DAY-NRLM.",
      "The government says more than 3 crore women had reached Lakhpati Didi status by early 2026, ahead of the original target, and has set a new target for the coming years. Support is given through your SHG and village organisation, not through a separate application.",
    ],
    hi: [
      "लखपति दीदी, दीनदयाल अंत्योदय योजना – राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM) के तहत एक पहल है, जिसे ग्रामीण विकास मंत्रालय राज्य ग्रामीण आजीविका मिशनों के साथ चलाता है। 'लखपति दीदी' वह स्वयं सहायता समूह (SHG) सदस्य है जिसके परिवार की उसकी आजीविका से सालाना कमाई लगातार कम से कम ₹1 लाख हो।",
      "यह नकद पैसे वाली योजना नहीं है। इसमें SHG की महिलाओं को खेती, पशुपालन, डेयरी, छोटी दुकान, खाद्य प्रसंस्करण, हस्तशिल्प या ड्रोन चलाने जैसी सेवाओं से एक या ज़्यादा कमाई के साधन बनाने और बढ़ाने में मदद मिलती है, DAY-NRLM में पहले से मौजूद प्रशिक्षण, कर्ज़ और बाज़ार सहायता के ज़रिए।",
      "सरकार के अनुसार 2026 की शुरुआत तक 3 करोड़ से ज़्यादा महिलाएँ लखपति दीदी बन चुकी थीं, जो मूल लक्ष्य से पहले है, और आगे के लिए नया लक्ष्य रखा गया है। मदद आपके SHG और ग्राम संगठन के ज़रिए मिलती है, अलग से आवेदन नहीं होता।",
    ],
  },
  benefits: {
    en: [
      "A household livelihood plan made with the help of a community resource person.",
      "Skill and business training, including programmes like 'Seekho Didi'.",
      "Easier access to credit: SHG bank loans, community funds, MUDRA and other enterprise loans.",
      "Help with selling products through fairs, Saras melas, online platforms and value chains.",
      "Links to other government schemes for farming, livestock and small businesses.",
    ],
    hi: [
      "समुदाय संसाधन व्यक्ति की मदद से परिवार की आजीविका योजना बनाना।",
      "कौशल और कारोबार का प्रशिक्षण, जैसे 'सीखो दीदी' कार्यक्रम।",
      "कर्ज़ तक आसान पहुँच: SHG बैंक लोन, सामुदायिक फ़ंड, मुद्रा और दूसरे कारोबारी कर्ज़।",
      "मेलों, सरस मेलों, ऑनलाइन प्लेटफ़ॉर्म और वैल्यू चेन के ज़रिए सामान बेचने में मदद।",
      "खेती, पशुपालन और छोटे कारोबार की दूसरी सरकारी योजनाओं से जुड़ाव।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a woman member of a self-help group (SHG) under DAY-NRLM / your State Rural Livelihood Mission.",
      "You live in a rural area.",
      "You are willing to take up or expand an income-generating activity.",
    ],
    hi: [
      "आप DAY-NRLM / राज्य ग्रामीण आजीविका मिशन के स्वयं सहायता समूह (SHG) की महिला सदस्य हैं।",
      "आप ग्रामीण क्षेत्र में रहती हैं।",
      "आप कोई कमाई वाला काम शुरू करने या बढ़ाने के लिए तैयार हैं।",
    ],
  },
  exclusions: {
    en: [
      "There is no direct cash payment or fixed grant to individuals under this initiative.",
      "Women who are not part of an NRLM self-help group need to join one first.",
    ],
    hi: [
      "इस पहल में किसी व्यक्ति को सीधा नकद भुगतान या तय अनुदान नहीं मिलता।",
      "जो महिलाएँ NRLM के स्वयं सहायता समूह में नहीं हैं, उन्हें पहले किसी समूह से जुड़ना होगा।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "If you are not in an SHG, contact the block office of your State Rural Livelihood Mission (for example JEEViKA, Umeed, Kudumbashree) or your Gram Panchayat to join or form one.",
        "Tell your SHG, village organisation or community resource person that you want to start or grow a livelihood.",
        "Work with them on a livelihood plan, attend the training offered, and apply for credit through your SHG or bank.",
      ],
      hi: [
        "अगर आप किसी SHG में नहीं हैं, तो अपने राज्य ग्रामीण आजीविका मिशन (जैसे जीविका, उम्मीद, कुडुम्बश्री) के ब्लॉक कार्यालय या ग्राम पंचायत से संपर्क करके समूह से जुड़ें या नया बनाएँ।",
        "अपने SHG, ग्राम संगठन या समुदाय संसाधन व्यक्ति को बताएँ कि आप कमाई का काम शुरू करना या बढ़ाना चाहती हैं।",
        "उनके साथ आजीविका योजना बनाएँ, दिया जाने वाला प्रशिक्षण लें और अपने SHG या बैंक के ज़रिए कर्ज़ के लिए आवेदन करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Bank account details", "SHG membership details", "Mobile number"],
    hi: ["आधार कार्ड", "बैंक खाते की जानकारी", "SHG सदस्यता की जानकारी", "मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "Will I get ₹1 lakh from the government?", hi: "क्या सरकार से ₹1 लाख मिलेंगे?" },
      a: {
        en: "No. 'Lakhpati' means your household earns ₹1 lakh or more a year from its own work. The government helps with training, loans and markets so you can reach that income.",
        hi: "नहीं। 'लखपति' का मतलब है कि आपका परिवार अपने काम से सालाना ₹1 लाख या ज़्यादा कमाए। सरकार प्रशिक्षण, कर्ज़ और बाज़ार में मदद करती है ताकि आप यह कमाई तक पहुँच सकें।",
      },
    },
    {
      q: { en: "Is there an online form to become a Lakhpati Didi?", hi: "क्या लखपति दीदी बनने का कोई ऑनलाइन फ़ॉर्म है?" },
      a: {
        en: "No separate form is needed. Women are identified and supported through their SHG and village organisation. Beware of anyone asking for money to 'register' you.",
        hi: "अलग फ़ॉर्म की ज़रूरत नहीं है। महिलाओं की पहचान और मदद उनके SHG और ग्राम संगठन के ज़रिए होती है। 'पंजीकरण' के नाम पर पैसे माँगने वालों से सावधान रहें।",
      },
    },
  ],

  officialUrl: "https://lakhpatididi.gov.in/",
  sources: [
    "https://lakhpatididi.gov.in/",
    "https://visionias.in/current-affairs/monthly-magazine/2026-03-31/economy/lakhpati-didi",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
