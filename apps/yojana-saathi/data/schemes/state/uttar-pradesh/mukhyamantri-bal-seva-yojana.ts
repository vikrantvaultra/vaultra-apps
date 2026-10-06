import { all, labelled, maxAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-bal-seva-yojana",
  tier: "compact",
  name: { en: "Uttar Pradesh Mukhyamantri Bal Seva Yojana", hi: "उत्तर प्रदेश मुख्यमंत्री बाल सेवा योजना" },
  aka: ["Bal Seva Yojana", "UP orphan scheme", "Bal Seva Yojana Samanya"],
  shortDescription: {
    en: "Children in Uttar Pradesh who have lost one or both parents, and some other vulnerable children, get ₹2,500 a month. Young people up to 23 can keep getting it while studying.",
    hi: "उत्तर प्रदेश में जिन बच्चों के माता-पिता में से एक या दोनों नहीं रहे, और कुछ दूसरे ज़रूरतमंद बच्चों को, हर महीने ₹2,500 मिलते हैं। 23 साल तक पढ़ाई जारी रहने पर यह मिलता रहता है।",
  },
  level: "state",
  state: "uttar-pradesh",
  department: {
    en: "Women Welfare Department, Government of Uttar Pradesh",
    hi: "महिला कल्याण विभाग, उत्तर प्रदेश सरकार",
  },
  categories: ["women-child", "social-welfare", "education"],
  tags: ["orphan", "children", "bal seva", "monthly support", "single parent", "uttar pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2500, period: "monthly", kind: "cash" },
  ageRange: { max: 23 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("uttar-pradesh"),
    labelled(maxAge(23), { en: "Child under 18, or 18 to 23 and studying", hi: "बच्चा 18 साल से कम, या 18 से 23 साल का और पढ़ाई कर रहा हो" }),
  ),

  details: {
    en: [
      "The Mukhyamantri Bal Seva Yojana supports children in Uttar Pradesh who have lost a parent or are in difficult situations. It started in 2021 for children orphaned by Covid-19, and a general version now covers children who lost parents for any reason.",
      "The child's guardian gets ₹2,500 a month for the child by DBT. Young people aged 18 to 23 who are in college, a diploma or other higher study can continue to get it until 23 or the end of the course. More than 1 lakh children get it.",
    ],
    hi: [
      "मुख्यमंत्री बाल सेवा योजना उत्तर प्रदेश के उन बच्चों की मदद करती है जिनके माता या पिता नहीं रहे, या जो मुश्किल हालात में हैं। यह 2021 में कोविड से अनाथ हुए बच्चों के लिए शुरू हुई, और अब इसका सामान्य रूप किसी भी कारण से माता-पिता खोने वाले बच्चों के लिए है।",
      "बच्चे के अभिभावक को बच्चे के लिए हर महीने ₹2,500 DBT से मिलते हैं। 18 से 23 साल के युवा, जो कॉलेज, डिप्लोमा या आगे की पढ़ाई कर रहे हैं, 23 साल या कोर्स पूरा होने तक इसे पाते रह सकते हैं। 1 लाख से ज़्यादा बच्चों को यह मिल रहा है।",
    ],
  },
  benefits: {
    en: ["₹2,500 a month for each eligible child.", "Paid into the bank account of the child or guardian.", "Continues from 18 to 23 for those in higher education."],
    hi: ["हर पात्र बच्चे के लिए हर महीने ₹2,500।", "बच्चे या अभिभावक के बैंक खाते में।", "उच्च शिक्षा में पढ़ रहे युवाओं को 18 से 23 साल तक जारी।"],
  },
  eligibilityText: {
    en: [
      "Child under 18 who has lost both parents or one parent.",
      "Also covers children of divorced or abandoned mothers, children whose parent is in jail, and children rescued from child labour or begging.",
      "Young people aged 18 to 23 who lost a parent and are studying after Class 12.",
      "At most two children from one family.",
    ],
    hi: [
      "18 साल से कम उम्र का बच्चा, जिसके माता-पिता दोनों या एक नहीं रहे।",
      "तलाक़शुदा या छोड़ी गई माँ के बच्चे, जिनके माता या पिता जेल में हैं, और बाल मज़दूरी या भीख से छुड़ाए गए बच्चे भी शामिल।",
      "18 से 23 साल के वे युवा जिनके माता या पिता नहीं रहे और जो 12वीं के बाद पढ़ाई कर रहे हैं।",
      "एक परिवार से अधिकतम दो बच्चे।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from the District Probation Officer's office, the block office or the Gram Panchayat.",
        "Fill it in with the guardian's and child's details and attach the parent's death certificate and other documents.",
        "Submit it to the District Probation Officer. The district committee checks and approves it.",
      ],
      hi: [
        "ज़िला प्रोबेशन अधिकारी के कार्यालय, ब्लॉक या ग्राम पंचायत से फ़ॉर्म लें।",
        "अभिभावक और बच्चे की जानकारी भरें और माता या पिता का मृत्यु प्रमाण पत्र और दूसरे दस्तावेज़ लगाएँ।",
        "फ़ॉर्म ज़िला प्रोबेशन अधिकारी को जमा करें। ज़िला समिति जाँच करके मंज़ूरी देती है।",
      ],
    },
  },

  officialUrl: "https://mahilakalyan.up.nic.in/",
  sources: [
    "https://mahilakalyan.up.nic.in/",
    "https://indianmasterminds.com/news/up-chief-minister-bal-seva-yojana-2500-monthly-aid-children-221299/",
    "https://www.drishtiias.com/state-pcs-current-affairs/bal-seva-yojana/print_manually",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
