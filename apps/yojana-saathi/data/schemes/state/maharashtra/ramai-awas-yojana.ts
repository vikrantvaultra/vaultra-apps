import { all, isFalse, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ramai-awas-yojana",
  tier: "compact",
  name: { en: "Ramai Awas (Gharkul) Yojana", hi: "रमाई आवास (घरकुल) योजना" },
  aka: ["Ramai Gharkul", "Ramai Awas", "SC housing Maharashtra"],
  shortDescription: {
    en: "Homeless Scheduled Caste and Neo-Buddhist families in Maharashtra get ₹1.2 lakh (in rural areas) to build a pucca house on their own plot, plus MGNREGA wages and toilet help.",
    hi: "महाराष्ट्र के बेघर अनुसूचित जाति और नवबौद्ध परिवारों को अपने प्लॉट पर पक्का घर बनाने के लिए ₹1.2 लाख (ग्रामीण क्षेत्र में) और साथ में MGNREGA मज़दूरी व शौचालय की मदद मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Social Justice and Special Assistance Department, Government of Maharashtra",
    hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार",
  },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "gharkul", "sc", "neo buddhist", "house construction", "ramai"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 120_000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    residentOf("maharashtra"),
    when("caste", "eq", "sc"),
    labelled(isFalse("pucca"), { en: "The family does not own a pucca house", hi: "परिवार के पास पक्का घर न हो" }),
  ),

  details: {
    en: [
      "Ramai Awas Yojana is a fully state-funded housing scheme for Scheduled Caste and Neo-Buddhist families who are homeless or live in a kutcha house. It runs in rural areas through the Zilla Parishad and in towns through the municipal bodies.",
      "In rural areas you get ₹1.2 lakh in instalments into your bank account as the house is built. You can also get 90 days of MGNREGA wages for your own work on the house and ₹12,000 for a toilet if you don't have one. Urban amounts and income limits are different; ask your municipal office.",
    ],
    hi: [
      "रमाई आवास योजना अनुसूचित जाति और नवबौद्ध परिवारों के लिए पूरी तरह राज्य के पैसे से चलने वाली आवास योजना है, जो बेघर हैं या कच्चे घर में रहते हैं। गाँवों में यह ज़िला परिषद और शहरों में नगर निकायों के ज़रिए चलती है।",
      "ग्रामीण क्षेत्र में घर बनने के साथ किस्तों में ₹1.2 लाख आपके बैंक खाते में आते हैं। घर पर अपनी मेहनत के लिए 90 दिन की MGNREGA मज़दूरी और शौचालय न हो तो ₹12,000 भी मिल सकते हैं। शहरी क्षेत्र की राशि और आय सीमा अलग है; अपने नगर कार्यालय से पूछें।",
    ],
  },
  benefits: {
    en: [
      "₹1.2 lakh grant to build a house in rural areas, paid in instalments to your bank account.",
      "90 days of unskilled wages under MGNREGA for work on your own house.",
      "₹12,000 for a toilet under Swachh Bharat Mission, if you don't already have one.",
    ],
    hi: [
      "ग्रामीण क्षेत्र में घर बनाने के लिए ₹1.2 लाख का अनुदान, किस्तों में बैंक खाते में।",
      "अपने घर पर काम के लिए MGNREGA में 90 दिन की अकुशल मज़दूरी।",
      "शौचालय न हो तो स्वच्छ भारत मिशन में ₹12,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Scheduled Caste or Neo-Buddhist family with a caste certificate.",
      "Has lived in Maharashtra for at least 15 years.",
      "Homeless or living in a kutcha house, and has not got a house under any other government scheme.",
      "Owns a plot or has government-allotted land to build on.",
      "Annual family income up to ₹1.2 lakh in rural areas (urban limits differ).",
    ],
    hi: [
      "जाति प्रमाण पत्र वाला अनुसूचित जाति या नवबौद्ध परिवार।",
      "कम से कम 15 साल से महाराष्ट्र में रह रहे हों।",
      "बेघर हों या कच्चे घर में रहते हों, और किसी दूसरी सरकारी योजना में घर न मिला हो।",
      "अपना प्लॉट हो या सरकार से मिली ज़मीन हो जिस पर घर बने।",
      "ग्रामीण क्षेत्र में परिवार की सालाना आय ₹1.2 लाख तक (शहरी सीमा अलग है)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "In a village, apply to your Gram Panchayat; the Gram Sabha passes a resolution recommending eligible families.",
        "In a town or city, apply at the municipal council or corporation office.",
        "A district committee approves the list. Track your house on the AwaasSoft website once it is sanctioned.",
      ],
      hi: [
        "गाँव में अपनी ग्राम पंचायत में आवेदन करें; ग्राम सभा पात्र परिवारों की सिफ़ारिश का प्रस्ताव पास करती है।",
        "कस्बे या शहर में नगर परिषद या नगर निगम कार्यालय में आवेदन करें।",
        "ज़िला समिति सूची मंज़ूर करती है। मंज़ूरी के बाद AwaasSoft वेबसाइट पर अपने घर की स्थिति देखें।",
      ],
    },
  },
  documents: {
    en: ["Caste certificate", "Income certificate from the Tehsildar", "Proof of 15 years' residence in Maharashtra", "7/12 extract or other land ownership proof", "Aadhaar card and bank passbook"],
    hi: ["जाति प्रमाण पत्र", "तहसीलदार का आय प्रमाण पत्र", "महाराष्ट्र में 15 साल निवास का प्रमाण", "7/12 उतारा या ज़मीन के मालिकाना हक़ का दूसरा प्रमाण", "आधार कार्ड और बैंक पासबुक"],
  },

  officialUrl: "https://www.zpsatara.gov.in/?p=9134",
  sources: ["https://www.zpsatara.gov.in/?p=9134", "https://sjsa.maharashtra.gov.in/", "https://awaassoft.nic.in/netiay/AdvanceSearch.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2008,
  status: "active",
};

export default scheme;
