import { ageBetween, all, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ganga-swaroopa-punah-lagna-sahay-yojana",
  tier: "compact",
  name: { en: "Ganga Swaroopa Punah Lagna Arthik Sahay Yojana", hi: "गंगा स्वरूपा पुनर्लग्न आर्थिक सहाय योजना" },
  aka: ["Gujarat widow remarriage assistance", "Ganga Swaroopa remarriage"],
  shortDescription: {
    en: "Widows aged 18 to 50 in Gujarat who get the Ganga Swaroopa pension and remarry receive ₹50,000: ₹25,000 by DBT and ₹25,000 in National Savings Certificates.",
    hi: "गुजरात में गंगा स्वरूपा पेंशन पाने वाली 18 से 50 साल की विधवाएँ दोबारा शादी करें तो उन्हें ₹50,000 मिलते हैं: ₹25,000 DBT से और ₹25,000 राष्ट्रीय बचत पत्र में।",
  },
  level: "state",
  state: "gujarat",
  department: { en: "Women and Child Development Department, Government of Gujarat", hi: "महिला एवं बाल विकास विभाग, गुजरात सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["widow remarriage", "widow", "marriage", "ganga swaroopa", "gujarat"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 50000, period: "one-time", kind: "cash" },
  ageRange: { min: 18, max: 50 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("gujarat"),
    female(),
    labelled(when("marital", "eq", "widowed"), { en: "A widow (getting the Ganga Swaroopa pension) who is remarrying", hi: "विधवा (गंगा स्वरूपा पेंशन पाने वाली) जो दोबारा शादी कर रही हो" }),
    ...ageBetween(18, 50),
  ),

  details: {
    en: [
      "This Women and Child Development Department scheme encourages remarriage of widows and helps them restart their lives. It is open to widows who were getting the Ganga Swaroopa pension.",
      "The total grant is ₹50,000: ₹25,000 goes into the woman's savings account by DBT, and ₹25,000 is given as National Savings Certificates in her name.",
    ],
    hi: [
      "महिला एवं बाल विकास विभाग की यह योजना विधवाओं के दोबारा विवाह को बढ़ावा देती है और नई ज़िंदगी शुरू करने में मदद करती है। यह उन विधवाओं के लिए है जिन्हें गंगा स्वरूपा पेंशन मिल रही थी।",
      "कुल सहायता ₹50,000 है: ₹25,000 DBT से महिला के बचत खाते में और ₹25,000 उसके नाम राष्ट्रीय बचत पत्र (NSC) के रूप में।",
    ],
  },
  benefits: {
    en: ["₹25,000 paid by DBT into your savings account.", "₹25,000 as National Savings Certificates in your name."],
    hi: ["₹25,000 DBT से आपके बचत खाते में।", "₹25,000 आपके नाम राष्ट्रीय बचत पत्र (NSC) में।"],
  },
  eligibilityText: {
    en: ["A widow living in Gujarat who was getting the Ganga Swaroopa pension.", "Aged 18 to 50 at remarriage."],
    hi: ["गुजरात में रहने वाली विधवा, जिसे गंगा स्वरूपा पेंशन मिल रही थी।", "दोबारा शादी के समय उम्र 18 से 50 साल।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "After the remarriage, contact the district Women and Child Officer's office (Dahej Pratibandhak cum Protection Officer).",
        "Submit the form with your marriage registration certificate, your Ganga Swaroopa pension details, Aadhaar and bank passbook.",
      ],
      hi: [
        "दोबारा शादी के बाद ज़िला महिला एवं बाल अधिकारी कार्यालय (दहेज प्रतिबंधक सह संरक्षण अधिकारी) से संपर्क करें।",
        "विवाह पंजीकरण प्रमाण पत्र, गंगा स्वरूपा पेंशन का विवरण, आधार और बैंक पासबुक के साथ फ़ॉर्म जमा करें।",
      ],
    },
  },

  officialUrl: "https://wcd.gujarat.gov.in/initiativedetails?id=234",
  sources: ["https://wcd.gujarat.gov.in/initiativedetails?id=234"],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
