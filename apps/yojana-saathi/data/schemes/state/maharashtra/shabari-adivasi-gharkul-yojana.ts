import { all, isFalse, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shabari-adivasi-gharkul-yojana",
  tier: "compact",
  name: { en: "Shabari Adivasi Gharkul Yojana", hi: "शबरी आदिवासी घरकुल योजना" },
  aka: ["Shabari Gharkul", "Shabari Awas", "tribal housing Maharashtra"],
  shortDescription: {
    en: "Homeless Scheduled Tribe families in Maharashtra get state help to build a 269 sq ft pucca house on their own plot.",
    hi: "महाराष्ट्र के बेघर अनुसूचित जनजाति परिवारों को अपने प्लॉट पर 269 वर्ग फ़ुट का पक्का घर बनाने के लिए राज्य सरकार से मदद मिलती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Tribal Development Department, Government of Maharashtra", hi: "आदिवासी विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "gharkul", "tribal", "adivasi", "st", "house construction"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "home",
  eligibility: all(
    residentOf("maharashtra"),
    when("caste", "in", ["st", "pvtg"]),
    labelled(isFalse("pucca"), { en: "The family does not own a pucca house", hi: "परिवार के पास पक्का घर न हो" }),
  ),

  details: {
    en: [
      "Shabari Adivasi Gharkul Yojana is the Tribal Development Department's housing scheme for Scheduled Tribe families who are homeless or live in a kutcha house and have not got a house under another scheme.",
      "The house is a pucca house of about 269 sq ft. The grant is paid in instalments as construction moves ahead; the amount differs for plain, hilly or Naxal-affected rural areas and for towns. Widows, deserted women and families in remote areas get priority.",
    ],
    hi: [
      "शबरी आदिवासी घरकुल योजना आदिवासी विकास विभाग की आवास योजना है, उन अनुसूचित जनजाति परिवारों के लिए जो बेघर हैं या कच्चे घर में रहते हैं और जिन्हें दूसरी योजना में घर नहीं मिला।",
      "घर लगभग 269 वर्ग फ़ुट का पक्का घर होता है। अनुदान निर्माण आगे बढ़ने के साथ किस्तों में मिलता है; राशि मैदानी, पहाड़ी या नक्सल प्रभावित ग्रामीण क्षेत्र और शहरों के लिए अलग-अलग है। विधवाओं, परित्यक्ता महिलाओं और दूर-दराज़ के परिवारों को प्राथमिकता मिलती है।",
    ],
  },
  benefits: {
    en: [
      "Grant to build a pucca house of about 269 sq ft, paid in instalments to your bank account.",
      "Higher amounts for hilly and Naxal-affected areas and for municipal areas.",
      "In villages, MGNREGA wages and toilet help can be added, as with other state housing schemes.",
    ],
    hi: [
      "लगभग 269 वर्ग फ़ुट का पक्का घर बनाने के लिए अनुदान, किस्तों में बैंक खाते में।",
      "पहाड़ी और नक्सल प्रभावित इलाक़ों और नगर क्षेत्रों के लिए ज़्यादा राशि।",
      "गाँवों में, दूसरी राज्य आवास योजनाओं की तरह, MGNREGA मज़दूरी और शौचालय की मदद भी जुड़ सकती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Scheduled Tribe family of Maharashtra with a caste certificate.",
      "Has lived in Maharashtra for at least 15 years.",
      "Homeless or living in a kutcha house; no pucca house owned by you or your family.",
      "Owns a plot or has government-allotted land to build on.",
      "Family income within the limit set for your area (lower in villages, higher in towns).",
    ],
    hi: [
      "जाति प्रमाण पत्र वाला महाराष्ट्र का अनुसूचित जनजाति परिवार।",
      "कम से कम 15 साल से महाराष्ट्र में रह रहे हों।",
      "बेघर हों या कच्चे घर में रहते हों; आपके या परिवार के नाम पक्का घर न हो।",
      "अपना प्लॉट हो या सरकार से मिली ज़मीन हो जिस पर घर बने।",
      "परिवार की आय आपके क्षेत्र की तय सीमा में हो (गाँवों में कम, शहरों में ज़्यादा)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply to your Gram Panchayat, or to the Project Officer of the Integrated Tribal Development Project (ITDP) for your area.",
        "Attach the documents; the Gram Sabha resolution is needed in villages.",
        "Selected families are sanctioned the house and get the grant in instalments.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, या अपने क्षेत्र की एकात्मिक आदिवासी विकास परियोजना (ITDP) के प्रकल्प अधिकारी के पास आवेदन करें।",
        "दस्तावेज़ लगाएँ; गाँवों में ग्राम सभा का प्रस्ताव ज़रूरी है।",
        "चुने गए परिवारों को घर मंज़ूर होता है और अनुदान किस्तों में मिलता है।",
      ],
    },
  },

  officialUrl: "https://tribal.maharashtra.gov.in/",
  sources: ["https://www.zpsatara.gov.in/?p=9125", "https://tribal.maharashtra.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2013,
  status: "check-status",
};

export default scheme;
