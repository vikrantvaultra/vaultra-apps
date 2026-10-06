import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-ladli-beti",
  tier: "compact",
  overlapGroup: "daughter-savings",
  name: { en: "Ladli Beti Scheme (Jammu & Kashmir)", hi: "लाडली बेटी योजना (जम्मू-कश्मीर)" },
  aka: ["Ladli Beti", "Ladli Beti JK"],
  shortDescription: {
    en: "For newborn girls in eight J&K districts from families earning under ₹75,000 a year, the government saves ₹1,000 a month for 14 years, building a sum of about ₹6.5 lakh by age 21.",
    hi: "जम्मू-कश्मीर के आठ ज़िलों में ₹75,000 से कम सालाना आय वाले परिवारों में जन्मी बेटियों के लिए सरकार 14 साल तक हर महीने ₹1,000 जमा करती है, जिससे 21 साल पर लगभग ₹6.5 लाख बनते हैं।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Social Welfare Department, Government of Jammu and Kashmir", hi: "समाज कल्याण विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["girl child", "ladli beti", "daughter", "savings", "jammu kashmir"],
  benefitType: "savings",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("jammu-kashmir"),
    labelled(isTrue("daughterUnder10"), { en: "You have a young daughter", hi: "आपकी एक छोटी बेटी है" }),
    labelled(incomeUpTo(75_000), { en: "Parents' total yearly income is below ₹75,000", hi: "माता-पिता की कुल सालाना आय ₹75,000 से कम हो" }),
  ),

  details: {
    en: [
      "Ladli Beti is a Jammu & Kashmir scheme for girls born on or after 1 April 2015 in districts where fewer girls are born than boys: Anantnag, Budgam, Pulwama, Srinagar, Jammu, Kathua, Kishtwar and Samba.",
      "The government puts ₹1,000 a month towards each eligible girl for 14 years, and she receives about ₹6.5 lakh when she turns 21. Applications are made online through the Jan Sugam portal and sanctioned by the Deputy Commissioner.",
    ],
    hi: [
      "लाडली बेटी जम्मू-कश्मीर की योजना है, जो 1 अप्रैल 2015 या उसके बाद उन ज़िलों में जन्मी बेटियों के लिए है जहाँ लड़कों के मुक़ाबले कम लड़कियाँ पैदा होती हैं: अनंतनाग, बडगाम, पुलवामा, श्रीनगर, जम्मू, कठुआ, किश्तवाड़ और सांबा।",
      "सरकार हर पात्र बेटी के लिए 14 साल तक हर महीने ₹1,000 जमा करती है, और 21 साल की होने पर उसे लगभग ₹6.5 लाख मिलते हैं। आवेदन जन सुगम पोर्टल पर ऑनलाइन होता है और डिप्टी कमिश्नर मंज़ूरी देते हैं।",
    ],
  },
  benefits: {
    en: ["₹1,000 a month saved for the girl for 14 years.", "About ₹6.5 lakh paid when she turns 21."],
    hi: ["बेटी के लिए 14 साल तक हर महीने ₹1,000 जमा।", "21 साल की होने पर लगभग ₹6.5 लाख।"],
  },
  eligibilityText: {
    en: [
      "Girl born on or after 1 April 2015.",
      "Parents are permanent residents (domicile) of Anantnag, Budgam, Pulwama, Srinagar, Jammu, Kathua, Kishtwar or Samba district.",
      "Parents' yearly income from all sources is less than ₹75,000, shown by a Tehsildar's income certificate.",
    ],
    hi: [
      "बेटी का जन्म 1 अप्रैल 2015 या उसके बाद हुआ हो।",
      "माता-पिता अनंतनाग, बडगाम, पुलवामा, श्रीनगर, जम्मू, कठुआ, किश्तवाड़ या सांबा ज़िले के स्थायी निवासी (डोमिसाइल) हों।",
      "माता-पिता की सभी स्रोतों से सालाना आय ₹75,000 से कम हो, तहसीलदार के आय प्रमाण पत्र के अनुसार।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on jansugam.jk.gov.in and choose 'Application for obtaining Financial Assistance under Ladli Beti Scheme'.",
        "Upload the girl's birth certificate and Aadhaar, the parents' domicile, ID proof and Aadhaar, address proof, bank passbook and income certificate (below ₹75,000).",
        "Submit and track the status online. The CDPO, District Programme Officer and Deputy Commissioner process it.",
      ],
      hi: [
        "jansugam.jk.gov.in पर रजिस्टर करें और 'Application for obtaining Financial Assistance under Ladli Beti Scheme' चुनें।",
        "बेटी का जन्म प्रमाण पत्र और आधार, माता-पिता का डोमिसाइल, पहचान पत्र और आधार, पते का सबूत, बैंक पासबुक और आय प्रमाण पत्र (₹75,000 से कम) अपलोड करें।",
        "जमा करें और स्थिति ऑनलाइन देखें। CDPO, ज़िला कार्यक्रम अधिकारी और डिप्टी कमिश्नर इसे आगे बढ़ाते हैं।",
      ],
    },
  },

  officialUrl: "https://jansugam.jk.gov.in/",
  sources: [
    "https://socialwelfare.jk.gov.in/schemes/GO149(2022).pdf",
    "https://socialwelfare.jk.gov.in/citizensw.pdf",
    "https://socialwelfare.jk.gov.in/schemes.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "check-status",
};

export default scheme;
