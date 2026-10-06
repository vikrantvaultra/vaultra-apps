import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "deendayal-upadhyay-bhumiheen-krishi-mazdoor-kalyan-yojana",
  name: {
    en: "Deendayal Upadhyay Bhumiheen Krishi Mazdoor Kalyan Yojana",
    hi: "दीनदयाल उपाध्याय भूमिहीन कृषि मजदूर कल्याण योजना",
  },
  aka: ["Bhumiheen Krishi Mazdoor Yojana", "landless labourer scheme Chhattisgarh", "Bhoomihin Majdoor Yojana"],
  shortDescription: {
    en: "Landless farm labour families in Chhattisgarh, including herders, barbers, washermen, cobblers, carpenters, blacksmiths and Baiga-Gunia families, get ₹10,000 a year in their bank account.",
    hi: "छत्तीसगढ़ के भूमिहीन कृषि मज़दूर परिवारों को, जिनमें चरवाहा, नाई, धोबी, मोची, बढ़ई, लोहार और बैगा-गुनिया परिवार भी शामिल हैं, हर साल ₹10,000 बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Government of Chhattisgarh, through district administrations and panchayats",
    hi: "छत्तीसगढ़ सरकार, ज़िला प्रशासन और पंचायतों के माध्यम से",
  },
  categories: ["agriculture", "social-welfare"],
  tags: ["landless", "farm labourer", "agricultural worker", "dbt", "rural", "chhattisgarh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 10000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("chhattisgarh"),
    labelled(when("occupation", "in", ["agri-labourer", "livestock-dairy", "artisan", "unorganised-worker"]), {
      en: "You work as a farm labourer, herder, barber, washerman, cobbler, carpenter, blacksmith or forest-produce gatherer",
      hi: "आप खेतिहर मज़दूर, चरवाहा, नाई, धोबी, मोची, बढ़ई, लोहार या वनोपज संग्राहक का काम करते हों",
    }),
  ),

  details: {
    en: [
      "This scheme gives yearly cash help to landless families who earn a living from farm labour and similar village work in Chhattisgarh. It replaced an earlier ₹7,000 scheme for landless labourers.",
      "Every eligible family gets ₹10,000 a year, paid straight into its bank account. About 6 lakh families benefit, including Baiga and Gunia families.",
      "It covers families in rural areas and in nagar panchayat areas. No one in the family should own farmland.",
    ],
    hi: [
      "यह योजना छत्तीसगढ़ के उन भूमिहीन परिवारों को सालाना नकद मदद देती है, जो खेत मज़दूरी और गाँव के ऐसे ही कामों से गुज़ारा करते हैं। इसने भूमिहीन मज़दूरों की पहले की ₹7,000 वाली योजना की जगह ली है।",
      "हर पात्र परिवार को हर साल ₹10,000 सीधे बैंक खाते में मिलते हैं। लगभग 6 लाख परिवार इसका लाभ ले रहे हैं, जिनमें बैगा और गुनिया परिवार भी शामिल हैं।",
      "यह ग्रामीण इलाक़ों और नगर पंचायत क्षेत्रों के परिवारों के लिए है। परिवार में किसी के नाम पर खेती की ज़मीन नहीं होनी चाहिए।",
    ],
  },
  benefits: {
    en: [
      "₹10,000 a year for each eligible family.",
      "Paid directly into the family's bank account.",
    ],
    hi: [
      "हर पात्र परिवार को हर साल ₹10,000।",
      "पैसा सीधे परिवार के बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A native (mool niwasi) of Chhattisgarh.",
      "No one in the family owns agricultural land.",
      "The family earns from farm labour or traditional village work: herders (charwaha), carpenters, blacksmiths, cobblers, barbers, washermen, forest-produce gatherers.",
      "In scheduled areas, priests, vaidyas, Gunias and Manjhis attached to village deity sites also qualify.",
      "Lives in a village or a nagar panchayat area.",
    ],
    hi: [
      "छत्तीसगढ़ का मूल निवासी हो।",
      "परिवार में किसी के नाम पर खेती की ज़मीन न हो।",
      "परिवार खेत मज़दूरी या गाँव के पारंपरिक काम से कमाता हो: चरवाहा, बढ़ई, लोहार, मोची, नाई, धोबी, वनोपज संग्राहक।",
      "अनुसूचित क्षेत्रों में देवस्थलों से जुड़े पुजारी, वैद्य, गुनिया और मांझी परिवार भी पात्र हैं।",
      "गाँव या नगर पंचायत क्षेत्र में रहता हो।",
    ],
  },
  exclusions: {
    en: [
      "Families where anyone owns farmland.",
      "People who are not natives of Chhattisgarh.",
    ],
    hi: [
      "ऐसे परिवार जिनमें किसी के नाम पर खेती की ज़मीन हो।",
      "जो लोग छत्तीसगढ़ के मूल निवासी नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "When applications are open, get the form at your gram panchayat or nagar panchayat office.",
        "Fill it in and submit it with your documents. The department checks the details.",
        "You can track your registration online with your mobile number, Aadhaar number or registration number. If a payment fails, get your bank details corrected on the portal within the date your district announces.",
      ],
      hi: [
        "जब आवेदन खुले हों, अपनी ग्राम पंचायत या नगर पंचायत कार्यालय से फ़ॉर्म लें।",
        "फ़ॉर्म भरकर दस्तावेज़ों के साथ जमा करें। विभाग जानकारी की जाँच करता है।",
        "पंजीयन की स्थिति मोबाइल नंबर, आधार नंबर या पंजीयन क्रमांक से ऑनलाइन देख सकते हैं। भुगतान अटकने पर ज़िले की बताई तारीख़ तक पोर्टल पर बैंक खाते का सुधार कराएँ।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Proof of being a native of Chhattisgarh",
      "Bank passbook",
    ],
    hi: [
      "आधार कार्ड",
      "छत्तीसगढ़ के मूल निवासी होने का प्रमाण",
      "बैंक पासबुक",
    ],
  },
  faqs: [
    {
      q: { en: "I work on others' fields but my father owns a small plot. Can I apply?", hi: "मैं दूसरों के खेत में काम करता हूँ, पर पिता के नाम छोटी ज़मीन है। क्या मैं आवेदन कर सकता हूँ?" },
      a: {
        en: "Usually not. The scheme is only for families where no member has farmland in their name. Ask your panchayat how your family is counted in the land records.",
        hi: "आमतौर पर नहीं। योजना सिर्फ़ उन परिवारों के लिए है जिनमें किसी सदस्य के नाम खेती की ज़मीन नहीं है। भू-अभिलेख में आपका परिवार कैसे गिना जाता है, यह पंचायत से पूछें।",
      },
    },
    {
      q: { en: "My money has not come. What should I do?", hi: "मेरा पैसा नहीं आया। क्या करूँ?" },
      a: {
        en: "Most failed payments are due to wrong or inactive bank details. Districts announce a window for correcting accounts on the portal; contact your tehsil or panchayat office to get it fixed.",
        hi: "ज़्यादातर भुगतान ग़लत या बंद बैंक खाते की वजह से अटकते हैं। ज़िले पोर्टल पर खाता सुधार की तारीख़ घोषित करते हैं; सुधार के लिए तहसील या पंचायत कार्यालय से संपर्क करें।",
      },
    },
  ],

  officialUrl: "https://dprcg.gov.in/post/1782129901/%E0%A4%A6%E0%A5%80%E0%A4%A8%E0%A4%A6%E0%A4%AF%E0%A4%BE%E0%A4%B2-%E0%A4%89%E0%A4%AA%E0%A4%BE%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF-%E0%A4%AD%E0%A5%82%E0%A4%AE%E0%A4%BF%E0%A4%B9%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%BF-%E0%A4%AE%E0%A4%9C%E0%A4%A6%E0%A5%82%E0%A4%B0-%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A3-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE",
  sources: [
    "https://dprcg.gov.in/post/1782129901/%E0%A4%A6%E0%A5%80%E0%A4%A8%E0%A4%A6%E0%A4%AF%E0%A4%BE%E0%A4%B2-%E0%A4%89%E0%A4%AA%E0%A4%BE%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF-%E0%A4%AD%E0%A5%82%E0%A4%AE%E0%A4%BF%E0%A4%B9%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%BF-%E0%A4%AE%E0%A4%9C%E0%A4%A6%E0%A5%82%E0%A4%B0-%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A3-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE",
    "https://dprcg.gov.in/post/1782029766/%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%A6%E0%A5%80%E0%A4%A8%E0%A4%A6%E0%A4%AF%E0%A4%BE%E0%A4%B2-%E0%A4%89%E0%A4%AA%E0%A4%BE%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF-%E0%A4%AD%E0%A5%82%E0%A4%AE%E0%A4%BF%E0%A4%B9%E0%A5%80%E0%A4%A8-%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%BF-%E0%A4%AE%E0%A4%9C%E0%A4%A6%E0%A5%82%E0%A4%B0-%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A3-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%87%E0%A4%95-%E0%A4%AA%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0-%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%97%E0%A5%80-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%B7-10-%E0%A4%B9%E0%A4%9C%E0%A4%BE%E0%A4%B0-%E0%A4%B0%E0%A5%81%E0%A4%AA%E0%A4%8F-%E0%A4%95%E0%A5%80-%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%BF%E0%A4%95-%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
