import { everyone } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-surya-ghar-muft-bijli-yojana",
  name: { en: "PM Surya Ghar: Muft Bijli Yojana", hi: "पीएम सूर्य घर: मुफ़्त बिजली योजना" },
  aka: ["PM Surya Ghar", "Rooftop Solar Yojana", "Muft Bijli Yojana"],
  shortDescription: {
    en: "Put solar panels on your roof and get a subsidy of up to ₹78,000 in your bank account (₹30,000 for 1 kW, ₹60,000 for 2 kW), cutting your electricity bill.",
    hi: "अपनी छत पर सोलर पैनल लगवाएँ और ₹78,000 तक की सब्सिडी सीधे बैंक खाते में पाएँ (1 kW पर ₹30,000, 2 kW पर ₹60,000), बिजली का बिल घटाएँ।",
  },
  level: "central",
  ministry: "new-renewable-energy",
  categories: ["energy-savings"],
  tags: ["rooftop solar", "free electricity", "solar subsidy", "surya ghar", "bijli bill"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 30000, period: "one-time", kind: "cash" },
  kundliHouse: "energy-savings",
  eligibility: everyone(),

  details: {
    en: [
      "PM Surya Ghar: Muft Bijli Yojana helps households install rooftop solar panels so they can make their own electricity. The aim is for families to get up to 300 units of free power a month and to lower their bills.",
      "The Ministry of New & Renewable Energy runs it through the national portal and your local electricity distribution company (DISCOM). You pick a registered vendor, get the system installed and a net meter fitted, and the subsidy is paid straight into your bank account after inspection.",
      "The subsidy is ₹30,000 per kW for the first 2 kW and ₹18,000 for the 3rd kW, capped at ₹78,000 for systems of 3 kW or more. Collateral-free bank loans at a low interest rate are available for systems up to 3 kW.",
    ],
    hi: [
      "पीएम सूर्य घर: मुफ़्त बिजली योजना घरों की छत पर सोलर पैनल लगवाने में मदद करती है, ताकि परिवार अपनी बिजली खुद बना सकें। लक्ष्य है कि परिवारों को हर महीने 300 यूनिट तक मुफ़्त बिजली मिले और बिल कम हो।",
      "नवीन और नवीकरणीय ऊर्जा मंत्रालय इसे राष्ट्रीय पोर्टल और आपकी स्थानीय बिजली वितरण कंपनी (DISCOM) के ज़रिए चलाता है। आप पंजीकृत विक्रेता चुनते हैं, सिस्टम और नेट मीटर लगता है, और जाँच के बाद सब्सिडी सीधे बैंक खाते में आती है।",
      "पहले 2 kW पर ₹30,000 प्रति kW और तीसरे kW पर ₹18,000 सब्सिडी मिलती है, 3 kW या बड़े सिस्टम पर अधिकतम ₹78,000। 3 kW तक के सिस्टम के लिए बिना गिरवी, कम ब्याज वाला बैंक कर्ज़ मिलता है।",
    ],
  },
  benefits: {
    en: [
      "₹30,000 subsidy for a 1 kW system.",
      "₹60,000 subsidy for a 2 kW system.",
      "₹78,000 subsidy for a 3 kW or larger system (the maximum).",
      "Subsidy paid directly into your bank account after the DISCOM inspects the system.",
      "Low-interest, collateral-free bank loans for systems up to 3 kW, and you can earn from surplus power fed to the grid.",
    ],
    hi: [
      "1 kW सिस्टम पर ₹30,000 सब्सिडी।",
      "2 kW सिस्टम पर ₹60,000 सब्सिडी।",
      "3 kW या बड़े सिस्टम पर ₹78,000 सब्सिडी (अधिकतम)।",
      "DISCOM की जाँच के बाद सब्सिडी सीधे बैंक खाते में।",
      "3 kW तक के सिस्टम के लिए कम ब्याज, बिना गिरवी बैंक कर्ज़, और ग्रिड को दी गई बची बिजली से कमाई।",
    ],
  },
  eligibilityText: {
    en: [
      "An Indian household that owns a house with a roof suitable for solar panels.",
      "Has a valid electricity connection in the household's name.",
      "Has not already received a subsidy for rooftop solar panels.",
    ],
    hi: [
      "भारतीय परिवार जिसके पास सोलर पैनल लगाने लायक छत वाला अपना घर हो।",
      "परिवार के नाम पर वैध बिजली कनेक्शन हो।",
      "छत पर सोलर पैनल के लिए पहले कोई सब्सिडी न ली हो।",
    ],
  },
  exclusions: {
    en: [
      "Households that already took a rooftop solar subsidy.",
      "Installations by vendors not registered on the national portal do not get the subsidy.",
      "Subsidy above 3 kW is not paid; the cap stays at ₹78,000.",
    ],
    hi: [
      "जिन परिवारों ने पहले रूफ़टॉप सोलर सब्सिडी ली है।",
      "राष्ट्रीय पोर्टल पर पंजीकृत न होने वाले विक्रेता से लगवाने पर सब्सिडी नहीं मिलती।",
      "3 kW से ऊपर अतिरिक्त सब्सिडी नहीं मिलती; अधिकतम ₹78,000 ही है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on pmsuryaghar.gov.in: choose your state and DISCOM, enter your electricity consumer number, mobile number and email.",
        "Log in and apply for rooftop solar. Wait for the DISCOM's feasibility approval.",
        "Get the plant installed by a registered vendor, then submit the plant details and apply for a net meter.",
        "After the net meter is fitted and the DISCOM inspects it, a commissioning certificate is issued.",
        "Submit your bank details and a cancelled cheque on the portal to receive the subsidy.",
      ],
      hi: [
        "pmsuryaghar.gov.in पर पंजीकरण करें: राज्य और DISCOM चुनें, बिजली उपभोक्ता नंबर, मोबाइल नंबर और ईमेल डालें।",
        "लॉग इन करके रूफ़टॉप सोलर के लिए आवेदन करें। DISCOM की व्यवहार्यता मंज़ूरी का इंतज़ार करें।",
        "पंजीकृत विक्रेता से प्लांट लगवाएँ, फिर प्लांट की जानकारी जमा करें और नेट मीटर के लिए आवेदन करें।",
        "नेट मीटर लगने और DISCOM की जाँच के बाद कमीशनिंग प्रमाणपत्र मिलता है।",
        "सब्सिडी के लिए पोर्टल पर बैंक विवरण और रद्द किया हुआ चेक जमा करें।",
      ],
    },
  },
  documents: {
    en: ["Latest electricity bill", "Aadhaar card", "Bank account details and a cancelled cheque", "Proof of house ownership, if asked"],
    hi: ["बिजली का ताज़ा बिल", "आधार कार्ड", "बैंक खाते का विवरण और रद्द किया हुआ चेक", "माँगने पर घर के मालिकाना हक़ का सबूत"],
  },
  faqs: [
    {
      q: { en: "What size system do I need?", hi: "मुझे कितने साइज़ का सिस्टम चाहिए?" },
      a: {
        en: "As a rough guide, 1–2 kW suits homes using up to about 150 units a month, 2–3 kW suits 150–300 units, and above 3 kW for higher use. The portal has a calculator.",
        hi: "मोटे तौर पर, महीने में लगभग 150 यूनिट तक खर्च वाले घर के लिए 1–2 kW, 150–300 यूनिट के लिए 2–3 kW, और ज़्यादा खर्च पर 3 kW से ऊपर। पोर्टल पर कैलकुलेटर भी है।",
      },
    },
    {
      q: { en: "Is the electricity really free?", hi: "क्या बिजली सच में मुफ़्त मिलती है?" },
      a: {
        en: "The power your panels make is free to use, and extra units sent to the grid are adjusted in your bill. How much you save depends on your system size and usage.",
        hi: "पैनल से बनी बिजली इस्तेमाल करने के लिए मुफ़्त है, और ग्रिड को भेजी गई अतिरिक्त यूनिट बिल में घट जाती हैं। कितनी बचत होगी, यह सिस्टम के साइज़ और खपत पर निर्भर है।",
      },
    },
  ],

  officialUrl: "https://pmsuryaghar.gov.in/",
  sources: [
    "https://pmsuryaghar.gov.in/",
    "https://www.myscheme.gov.in/schemes/pmsgmby",
    "https://www.businesstoday.in/amp/personal-finance/news/story/pm-surya-ghar-muft-bijli-yojana-how-it-works-who-can-apply-and-what-benefits-households-get-533959-2026-05-29",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
