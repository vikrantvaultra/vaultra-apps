import { all, female, incomeUpTo, labelled, maxAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-widow-pension",
  overlapGroup: "widow-pension",
  name: { en: "Punjab Financial Assistance to Widows and Destitute Women", hi: "पंजाब विधवा और निराश्रित महिला वित्तीय सहायता" },
  aka: ["Punjab widow pension", "Vidhwa pension Punjab", "Destitute women pension Punjab"],
  shortDescription: {
    en: "₹1,500 a month for widows and destitute women in Punjab under 58, and unmarried women over 30, whose yearly income is up to ₹60,000.",
    hi: "पंजाब में 58 साल से कम उम्र की विधवा और निराश्रित महिलाओं, और 30 साल से ज़्यादा उम्र की अविवाहित महिलाओं को, जिनकी सालाना आय ₹60,000 तक है, हर महीने ₹1,500।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow pension", "destitute women", "unmarried women", "vidhwa pension", "punjab"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  ageRange: { max: 57 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("punjab"),
    female(),
    labelled(maxAge(57), { en: "Below 58 years of age", hi: "उम्र 58 साल से कम" }),
    labelled(when("marital", "in", ["widowed", "divorced", "separated", "never-married"]), {
      en: "Widowed, destitute (divorced or left by husband), or unmarried and over 30",
      hi: "विधवा, निराश्रित (तलाक़शुदा या पति ने छोड़ दिया), या 30 साल से ज़्यादा उम्र की अविवाहित",
    }),
    labelled(incomeUpTo(60_000), { en: "Your yearly income from all sources is up to ₹60,000", hi: "सभी स्रोतों से आपकी सालाना आय ₹60,000 तक हो" }),
  ),

  details: {
    en: [
      "This is Punjab's own monthly pension for widows, destitute women and older unmarried women who have little income. It is run by the Department of Social Security and Women & Child Development.",
      "The rate is ₹1,500 a month and has been since 1 July 2021. More than 6.7 lakh women receive it, and the state has kept a budget of ₹1,170 crore for it.",
      "Once you turn 58, you can move to the state old age pension instead. The money is paid into your bank account.",
    ],
    hi: [
      "यह पंजाब की अपनी मासिक पेंशन है, जो कम आय वाली विधवा, निराश्रित और ज़्यादा उम्र की अविवाहित महिलाओं के लिए है। इसे सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग चलाता है।",
      "1 जुलाई 2021 से इसकी दर ₹1,500 महीना है। 6.7 लाख से ज़्यादा महिलाओं को यह मिलती है, और राज्य ने इसके लिए ₹1,170 करोड़ का बजट रखा है।",
      "58 साल की होने पर आप राज्य की बुढ़ापा पेंशन में जा सकती हैं। पैसा आपके बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month, paid into your bank account.",
      "You can also get Mawan Dheeyan Satkar Yojana money on top of this pension.",
    ],
    hi: [
      "हर महीने ₹1,500, सीधे बैंक खाते में।",
      "इस पेंशन के साथ आपको मावां धीयां सत्कार योजना का पैसा भी मिल सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman living in Punjab.",
      "A widow or destitute woman below 58 years of age, or an unmarried woman above 30 years of age.",
      "Total yearly income up to ₹60,000, including business, rent or interest income.",
    ],
    hi: [
      "पंजाब में रहने वाली महिला।",
      "58 साल से कम उम्र की विधवा या निराश्रित महिला, या 30 साल से ज़्यादा उम्र की अविवाहित महिला।",
      "कारोबार, किराए या ब्याज समेत कुल सालाना आय ₹60,000 तक।",
    ],
  },
  exclusions: {
    en: [
      "Yearly income above ₹60,000 from any source.",
      "You have a government or private job, or are self-employed.",
      "You own commercial property or pay income tax.",
      "Unmarried women aged 30 or younger.",
    ],
    hi: [
      "किसी भी स्रोत से सालाना आय ₹60,000 से ज़्यादा।",
      "आपकी सरकारी या निजी नौकरी है, या आप अपना काम-धंधा करती हैं।",
      "आपके पास व्यावसायिक संपत्ति है या आप आयकर देती हैं।",
      "30 साल या उससे कम उम्र की अविवाहित महिलाएँ।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from a Sewa Kendra, Anganwadi centre, CDPO office, District Social Security Office, SDM office, panchayat or BDPO office.",
        "Fill it in, attach the documents and sign the self-declaration. The Patwari (village) or Municipal Committee (town) verifies your residence.",
        "Submit the form. The CDPO checks it within a month and the District Social Security Officer sanctions the pension.",
      ],
      hi: [
        "फ़ॉर्म सेवा केंद्र, आंगनवाड़ी केंद्र, CDPO दफ़्तर, ज़िला सामाजिक सुरक्षा दफ़्तर, SDM दफ़्तर, पंचायत या BDPO दफ़्तर से लें।",
        "फ़ॉर्म भरें, दस्तावेज़ लगाएँ और स्व-घोषणा पर दस्तख़त करें। गाँव में पटवारी और शहर में नगर समिति आपके निवास की पुष्टि करती है।",
        "फ़ॉर्म जमा करें। CDPO एक महीने में जाँच करता है और ज़िला सामाजिक सुरक्षा अधिकारी पेंशन मंज़ूर करता है।",
      ],
    },
  },
  documents: {
    en: [
      "Age proof: Aadhaar, voter card, matriculation certificate or birth certificate (any one)",
      "Self-declaration about income, job and property",
      "Aadhaar number, mobile number and bank account number",
    ],
    hi: [
      "उम्र का सबूत: आधार, वोटर कार्ड, मैट्रिक प्रमाण पत्र या जन्म प्रमाण पत्र (कोई एक)",
      "आय, नौकरी और संपत्ति के बारे में स्व-घोषणा",
      "आधार नंबर, मोबाइल नंबर और बैंक खाता नंबर",
    ],
  },
  faqs: [
    {
      q: { en: "I am 35 and have never married. Can I apply?", hi: "मेरी उम्र 35 है और शादी नहीं हुई। क्या मैं आवेदन कर सकती हूँ?" },
      a: {
        en: "Yes, unmarried women above 30 can apply if they meet the ₹60,000 income limit and the other conditions.",
        hi: "हाँ, 30 साल से ज़्यादा उम्र की अविवाहित महिलाएँ आवेदन कर सकती हैं, अगर वे ₹60,000 की आय सीमा और बाक़ी शर्तें पूरी करती हैं।",
      },
    },
    {
      q: { en: "What happens when I turn 58?", hi: "58 साल की होने पर क्या होगा?" },
      a: {
        en: "This scheme is for women below 58. At 58 you become eligible for the state old age pension, which is also ₹1,500 a month. Ask your District Social Security Office about the switch.",
        hi: "यह योजना 58 साल से कम उम्र की महिलाओं के लिए है। 58 पर आप राज्य की बुढ़ापा पेंशन की पात्र हो जाती हैं, जो भी ₹1,500 महीना है। बदलाव के बारे में अपने ज़िला सामाजिक सुरक्षा दफ़्तर से पूछें।",
      },
    },
  ],

  officialUrl: "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
  sources: [
    "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/over-rs-895-crore-financial-assistance-provided-to-widows-and-dependent-women-so-far-dr-baljit-kaur/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
