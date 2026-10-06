import { all, minAge, incomeUpTo, notGovtEmployee, residentOf, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tripura-old-age-pension",
  overlapGroup: "old-age-pension",
  name: {
    en: "Mukhyamantri Samajik Sahayata Prakalpa – Old & Infirm (Tripura Old Age Pension)",
    hi: "मुख्यमंत्री सामाजिक सहायता प्रकल्प – वृद्ध एवं अशक्त (त्रिपुरा वृद्धावस्था पेंशन)",
  },
  aka: ["MSSP", "Tripura old age pension", "State Old Age Pension Tripura"],
  shortDescription: {
    en: "₹2,000 a month into your bank account if you are 60 or older (or a cancer, AIDS or leprosy patient of any age) and your family earns up to ₹1 lakh a year in Tripura.",
    hi: "त्रिपुरा में 60 साल या उससे ज़्यादा उम्र (या किसी भी उम्र के कैंसर, एड्स या कुष्ठ रोगी) और परिवार की सालाना आय ₹1 लाख तक होने पर हर महीने ₹2,000 बैंक खाते में।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Social Welfare & Social Education Department, Government of Tripura",
    hi: "समाज कल्याण एवं समाज शिक्षा विभाग, त्रिपुरा सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "pension", "elderly", "2000", "tripura"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("tripura"),
    minAge(60),
    incomeUpTo(100_000),
    labelled(notGovtEmployee(), { en: "You are not a government employee", hi: "आप सरकारी कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "Mukhyamantri Samajik Sahayata Prakalpa (MSSP) is Tripura's state social assistance scheme, started in 2022. Its 'Old & Infirm' category pays a monthly pension to poor elderly people and to patients of cancer, AIDS and leprosy.",
      "The pension is ₹2,000 a month, paid straight into your bank account. In September 2022 the state also raised its older pension schemes, including the State Old Age Pension and the central old age pension it pays out, to ₹2,000 a month.",
      "Applications are taken at your Child Development Project Officer (CDPO) office. The department checks your papers, a field worker visits, and a block and district committee approves the list.",
    ],
    hi: [
      "मुख्यमंत्री सामाजिक सहायता प्रकल्प (MSSP) त्रिपुरा की राज्य सामाजिक सहायता योजना है, जो 2022 में शुरू हुई। इसकी 'वृद्ध एवं अशक्त' श्रेणी में गरीब बुज़ुर्गों और कैंसर, एड्स व कुष्ठ रोगियों को हर महीने पेंशन मिलती है।",
      "पेंशन ₹2,000 महीना है, जो सीधे आपके बैंक खाते में आती है। सितंबर 2022 में राज्य ने अपनी पुरानी पेंशन योजनाओं, जैसे राज्य वृद्धावस्था पेंशन और केंद्र की वृद्धावस्था पेंशन जो वह देता है, को भी बढ़ाकर ₹2,000 महीना कर दिया।",
      "आवेदन आपके बाल विकास परियोजना अधिकारी (CDPO) कार्यालय में लिए जाते हैं। विभाग काग़ज़ों की जाँच करता है, एक फ़ील्ड कर्मचारी घर आता है और ब्लॉक व ज़िला समिति सूची को मंज़ूरी देती है।",
    ],
  },
  benefits: {
    en: [
      "₹2,000 every month as pension.",
      "Paid directly into your bank account by DBT.",
      "Patients of cancer, AIDS or leprosy can get it at any age.",
    ],
    hi: [
      "हर महीने ₹2,000 पेंशन।",
      "DBT से सीधे आपके बैंक खाते में।",
      "कैंसर, एड्स या कुष्ठ रोगी किसी भी उम्र में ले सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Tripura (you need a PRTC).",
      "Aged 60 or above; or a patient of cancer, AIDS or leprosy of any age, with a certificate from a government hospital or doctor.",
      "Annual family income of ₹1 lakh or less.",
      "Children aged 6 to 14 in the family must be enrolled in a recognised school.",
    ],
    hi: [
      "त्रिपुरा के स्थायी निवासी (PRTC होना ज़रूरी)।",
      "उम्र 60 साल या उससे ज़्यादा; या किसी भी उम्र के कैंसर, एड्स या कुष्ठ रोगी, सरकारी अस्पताल या डॉक्टर के प्रमाण पत्र के साथ।",
      "परिवार की सालाना आय ₹1 लाख या उससे कम।",
      "परिवार के 6 से 14 साल के बच्चे किसी मान्यता प्राप्त स्कूल में दाख़िल हों।",
    ],
  },
  exclusions: {
    en: [
      "Income-tax payers.",
      "Government employees.",
      "People who already get a pension under NSAP or one of Tripura's other social pension schemes.",
      "Families where a member already gets MSSP in another category (patients and disabled persons excepted).",
    ],
    hi: [
      "आयकर देने वाले।",
      "सरकारी कर्मचारी।",
      "जिन्हें पहले से NSAP या त्रिपुरा की किसी दूसरी सामाजिक पेंशन योजना से पेंशन मिलती है।",
      "जिस परिवार में कोई सदस्य पहले से किसी दूसरी श्रेणी में MSSP ले रहा हो (रोगी और दिव्यांग इसमें शामिल नहीं)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the free application form at your CDPO office or download it from socialwelfare.tripura.gov.in.",
        "Fill it in and attach the documents listed below.",
        "Submit it at the CDPO office or the BDO office, or at a camp held by the department, when applications are invited.",
        "After field verification and approval, the pension starts coming to your bank account.",
      ],
      hi: [
        "मुफ़्त आवेदन फ़ॉर्म अपने CDPO कार्यालय से लें या socialwelfare.tripura.gov.in से डाउनलोड करें।",
        "फ़ॉर्म भरें और नीचे दिए दस्तावेज़ लगाएँ।",
        "आवेदन माँगे जाने पर फ़ॉर्म CDPO कार्यालय, BDO कार्यालय या विभाग के कैंप में जमा करें।",
        "जाँच और मंज़ूरी के बाद पेंशन आपके बैंक खाते में आने लगेगी।",
      ],
    },
  },
  documents: {
    en: [
      "Income certificate from the SDM",
      "Proof of age (birth certificate, school certificate or Madhyamik admit card)",
      "Aadhaar number",
      "Permanent Resident of Tripura Certificate (PRTC)",
      "Ration card",
      "Non-government-employee certificate from the Panchayat or Ward Secretary or a gazetted officer",
      "Medical certificate from a government hospital or doctor (for cancer, AIDS or leprosy patients)",
    ],
    hi: [
      "SDM से आय प्रमाण पत्र",
      "उम्र का सबूत (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या माध्यमिक एडमिट कार्ड)",
      "आधार नंबर",
      "त्रिपुरा स्थायी निवासी प्रमाण पत्र (PRTC)",
      "राशन कार्ड",
      "पंचायत या वार्ड सचिव या राजपत्रित अधिकारी से 'सरकारी कर्मचारी नहीं' का प्रमाण पत्र",
      "सरकारी अस्पताल या डॉक्टर का मेडिकल प्रमाण पत्र (कैंसर, एड्स या कुष्ठ रोगियों के लिए)",
    ],
  },
  faqs: [
    {
      q: { en: "I already get the old age pension. Can I also get MSSP?", hi: "मुझे पहले से वृद्धावस्था पेंशन मिलती है। क्या मुझे MSSP भी मिल सकती है?" },
      a: {
        en: "No. People who already get a pension under NSAP or Tripura's state pension schemes can't apply. Those pensions are also ₹2,000 a month.",
        hi: "नहीं। जिन्हें पहले से NSAP या त्रिपुरा की राज्य पेंशन योजनाओं से पेंशन मिलती है, वे आवेदन नहीं कर सकते। उन योजनाओं में भी ₹2,000 महीना मिलता है।",
      },
    },
    {
      q: { en: "Is there an online form?", hi: "क्या ऑनलाइन फ़ॉर्म है?" },
      a: {
        en: "The scheme rules say an online portal will come later. For now, apply on paper at your CDPO office.",
        hi: "योजना के नियमों में लिखा है कि ऑनलाइन पोर्टल बाद में आएगा। अभी अपने CDPO कार्यालय में काग़ज़ पर आवेदन करें।",
      },
    },
  ],

  officialUrl: "https://socialwelfare.tripura.gov.in/",
  sources: [
    "https://tripura.gov.in/sites/default/files/Notification_M.pdf",
    "https://socialwelfare.tripura.gov.in/sites/default/files/1.%20Notification%20of%20Rs.%202000.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
