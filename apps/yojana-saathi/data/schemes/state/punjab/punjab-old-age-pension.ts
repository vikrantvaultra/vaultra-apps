import { all, any, female, incomeUpTo, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-old-age-pension",
  overlapGroup: "old-age-pension",
  name: { en: "Punjab Old Age Pension", hi: "पंजाब बुढ़ापा पेंशन" },
  aka: ["Budhapa pension Punjab", "Financial Assistance to Old Age Persons", "Punjab senior citizen pension"],
  shortDescription: {
    en: "₹1,500 a month for women aged 58+ and men aged 65+ in Punjab whose yearly income is up to ₹60,000.",
    hi: "पंजाब में 58+ उम्र की महिलाओं और 65+ उम्र के पुरुषों को, जिनकी सालाना आय ₹60,000 तक है, हर महीने ₹1,500।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "budhapa pension", "senior citizen", "elderly", "punjab"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { min: 58 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("punjab"),
    labelled(any(all(female(), minAge(58)), all(when("gender", "eq", "male"), minAge(65))), {
      en: "Women aged 58 or above, men aged 65 or above",
      hi: "महिलाएँ 58 साल या ज़्यादा, पुरुष 65 साल या ज़्यादा",
    }),
    labelled(incomeUpTo(60_000), { en: "Your yearly income from all sources is up to ₹60,000", hi: "सभी स्रोतों से आपकी सालाना आय ₹60,000 तक हो" }),
  ),

  details: {
    en: [
      "The old age pension is a state-funded monthly pension run by Punjab's Department of Social Security and Women & Child Development.",
      "The rate is ₹1,500 a month and has been since 1 July 2021. More than 23 lakh elderly people receive it, and money is released every month in 2026-27.",
      "The pension is paid through banks in both rural and urban areas. Your application is verified locally and the District Social Security Officer sanctions it.",
    ],
    hi: [
      "बुढ़ापा पेंशन पंजाब सरकार के पैसे से चलने वाली मासिक पेंशन है, जिसे सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग चलाता है।",
      "1 जुलाई 2021 से इसकी दर ₹1,500 महीना है। 23 लाख से ज़्यादा बुज़ुर्गों को यह मिलती है, और 2026-27 में भी हर महीने पैसा जारी हो रहा है।",
      "गाँव और शहर, दोनों जगह पेंशन बैंक के ज़रिए मिलती है। आपके आवेदन की स्थानीय जाँच होती है और ज़िला सामाजिक सुरक्षा अधिकारी इसे मंज़ूर करता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month for life.",
      "Paid into your bank account.",
      "Women can also get Mawan Dheeyan Satkar Yojana money on top of this pension.",
    ],
    hi: [
      "जीवन भर हर महीने ₹1,500।",
      "पैसा आपके बैंक खाते में आता है।",
      "महिलाओं को इस पेंशन के साथ मावां धीयां सत्कार योजना का पैसा भी मिल सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Punjab.",
      "Women aged 58 years or above; men aged 65 years or above.",
      "Total yearly income up to ₹60,000, including business, rent or interest income.",
      "Land owned (husband and wife together) is no more than 2.5 acres of irrigated (nehri/chahi) land, or 5 acres of barani or waterlogged land.",
    ],
    hi: [
      "पंजाब का निवासी।",
      "महिलाएँ 58 साल या ज़्यादा; पुरुष 65 साल या ज़्यादा।",
      "कारोबार, किराए या ब्याज समेत कुल सालाना आय ₹60,000 तक।",
      "पति-पत्नी की मिलाकर ज़मीन 2.5 एकड़ सिंचित (नहरी/चाही) या 5 एकड़ बारानी या सेम वाली ज़मीन से ज़्यादा न हो।",
    ],
  },
  exclusions: {
    en: [
      "You have a government or private job, or are self-employed.",
      "You own commercial property.",
      "In a city, you live in a house bigger than 200 square metres.",
      "You pay income tax or professional tax, or are registered under VAT.",
    ],
    hi: [
      "आपकी सरकारी या निजी नौकरी है, या आप अपना काम-धंधा करते हैं।",
      "आपके पास व्यावसायिक संपत्ति है।",
      "शहर में आप 200 वर्ग मीटर से बड़े मकान में रहते हैं।",
      "आप आयकर या प्रोफ़ेशनल टैक्स देते हैं, या VAT में दर्ज हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from a Sewa Kendra, Anganwadi centre, CDPO office, District Social Security Office, SDM office, panchayat or BDPO office, or the department website.",
        "Fill it in, attach your age proof and sign the self-declaration. In villages the Patwari verifies your land and residence; in towns the Municipal Committee's Executive Officer does.",
        "Submit the form. The CDPO verifies it within a month and the District Social Security Officer sanctions the pension.",
      ],
      hi: [
        "फ़ॉर्म सेवा केंद्र, आंगनवाड़ी केंद्र, CDPO दफ़्तर, ज़िला सामाजिक सुरक्षा दफ़्तर, SDM दफ़्तर, पंचायत या BDPO दफ़्तर, या विभाग की वेबसाइट से लें।",
        "फ़ॉर्म भरें, उम्र का सबूत लगाएँ और स्व-घोषणा पर दस्तख़त करें। गाँव में पटवारी और शहर में नगर समिति का कार्यकारी अधिकारी ज़मीन और निवास की पुष्टि करता है।",
        "फ़ॉर्म जमा करें। CDPO एक महीने में जाँच करता है और ज़िला सामाजिक सुरक्षा अधिकारी पेंशन मंज़ूर करता है।",
      ],
    },
  },
  documents: {
    en: [
      "Age proof: Aadhaar, voter card, voter list entry, matriculation certificate or birth certificate (any one)",
      "Self-declaration about income, land, job and property",
      "Aadhaar number, mobile number and bank account number",
    ],
    hi: [
      "उम्र का सबूत: आधार, वोटर कार्ड, वोटर सूची में नाम, मैट्रिक प्रमाण पत्र या जन्म प्रमाण पत्र (कोई एक)",
      "आय, ज़मीन, नौकरी और संपत्ति के बारे में स्व-घोषणा",
      "आधार नंबर, मोबाइल नंबर और बैंक खाता नंबर",
    ],
  },
  faqs: [
    {
      q: { en: "Why is the age different for men and women?", hi: "महिलाओं और पुरुषों की उम्र अलग क्यों है?" },
      a: {
        en: "Punjab's rules let women apply from 58 and men from 65. This is the state's own pension, separate from the central old age pension for BPL families at 60.",
        hi: "पंजाब के नियमों में महिलाएँ 58 से और पुरुष 65 से आवेदन कर सकते हैं। यह राज्य की अपनी पेंशन है, जो BPL परिवारों के लिए 60 साल वाली केंद्र की बुढ़ापा पेंशन से अलग है।",
      },
    },
    {
      q: { en: "Is there a fee for the form?", hi: "क्या फ़ॉर्म की कोई फ़ीस है?" },
      a: {
        en: "The form is available free at government offices and Anganwadi centres. If anyone asks for money, report it to the District Social Security Officer.",
        hi: "फ़ॉर्म सरकारी दफ़्तरों और आंगनवाड़ी केंद्रों पर मुफ़्त मिलता है। कोई पैसे माँगे तो ज़िला सामाजिक सुरक्षा अधिकारी को शिकायत करें।",
      },
    },
  ],

  officialUrl: "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
  sources: [
    "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/over-352-crore-released-for-old-age-pension-financial-security-of-elderly-strengthened-dr-baljit-kaur/",
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
