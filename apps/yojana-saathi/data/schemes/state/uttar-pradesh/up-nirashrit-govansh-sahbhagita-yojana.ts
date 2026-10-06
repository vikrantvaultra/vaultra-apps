import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "up-nirashrit-govansh-sahbhagita-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Nirashrit Govansh Sahbhagita Yojana", hi: "मुख्यमंत्री निराश्रित गोवंश सहभागिता योजना" },
  aka: ["Sahbhagita Yojana", "UP stray cattle adoption", "Gau palan yojana UP"],
  shortDescription: {
    en: "Families in Uttar Pradesh who take home and care for stray cows from government shelters get a daily maintenance allowance for each animal, paid by DBT.",
    hi: "उत्तर प्रदेश में जो परिवार सरकारी गो-आश्रय से निराश्रित गायें घर ले जाकर पालते हैं, उन्हें हर पशु के लिए रोज़ का भरण-पोषण भत्ता DBT से मिलता है।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Animal Husbandry Department, Government of Uttar Pradesh",
    hi: "पशुपालन विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["agriculture"],
  tags: ["cow", "gau", "stray cattle", "livestock", "dairy", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(residentOf("uttar-pradesh")),

  details: {
    en: [
      "Under the Sahbhagita Yojana, farmers and cattle keepers in Uttar Pradesh can adopt stray cows (govansh) kept in government cow shelters and look after them at home.",
      "The Animal Husbandry Department pays a fixed amount per animal per day for fodder and care, sent to the keeper's bank account. The rate is ₹50 per animal per day, the same as for government shelters. Officials and vets check the animals from time to time.",
    ],
    hi: [
      "सहभागिता योजना में उत्तर प्रदेश के किसान और पशुपालक सरकारी गो-आश्रय स्थलों में रखी निराश्रित गायों (गोवंश) को गोद लेकर घर पर पाल सकते हैं।",
      "पशुपालन विभाग चारे और देखभाल के लिए हर पशु पर रोज़ की तय राशि पालक के बैंक खाते में भेजता है। दर ₹50 प्रति पशु प्रति दिन है, जो सरकारी गोशालाओं के बराबर है। अधिकारी और पशु चिकित्सक समय-समय पर पशुओं की जाँच करते हैं।",
    ],
  },
  benefits: {
    en: ["₹50 per animal per day for upkeep (about ₹1,500 a month per cow).", "Paid by DBT to your bank account."],
    hi: ["हर पशु पर रोज़ ₹50 भरण-पोषण (प्रति गाय लगभग ₹1,500 महीना)।", "पैसा DBT से बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "Resident of Uttar Pradesh with experience of keeping cattle.",
      "Has enough space, fodder and water to keep the animals.",
      "Agrees to look after the animals fully and not sell or abandon them.",
      "Has a bank account for DBT.",
    ],
    hi: [
      "उत्तर प्रदेश के निवासी, जिन्हें पशु पालने का अनुभव हो।",
      "पशु रखने के लिए पर्याप्त जगह, चारा और पानी हो।",
      "पशुओं की पूरी देखभाल करने और उन्हें न बेचने या न छोड़ने की ज़िम्मेदारी लें।",
      "DBT के लिए बैंक खाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the nearest government veterinary hospital, the block office or the cow shelter (gau ashray sthal).",
        "Fill in the adoption form with your Aadhaar and bank details.",
        "After approval, take the animals home. The allowance is paid to your bank account.",
      ],
      hi: [
        "पास के सरकारी पशु चिकित्सालय, ब्लॉक कार्यालय या गो-आश्रय स्थल से संपर्क करें।",
        "आधार और बैंक जानकारी के साथ गोद लेने का फ़ॉर्म भरें।",
        "मंज़ूरी के बाद पशु घर ले जाएँ। भत्ता आपके बैंक खाते में आएगा।",
      ],
    },
  },

  officialUrl: "https://animalhusb.upsdc.gov.in/",
  sources: [
    "https://animalhusb.upsdc.gov.in/",
    "https://www.gaonconnection.com/english/stray-cattle-uttar-pradesh-funds-cows-farmers-yogi-adityanath-52653/",
    "https://en.vikaspedia.in/viewcontent/schemesall/state-specific-schemes/welfare-schemes-of-uttar-pradesh/mukhyamantri-sahbhagita-yojana-of-uttar-pradesh-govt?lgn=en",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "check-status",
};

export default scheme;
