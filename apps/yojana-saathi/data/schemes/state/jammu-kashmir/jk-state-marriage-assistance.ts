import { all, female, isTrue, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-state-marriage-assistance",
  overlapGroup: "marriage-assistance",
  name: {
    en: "State Marriage Assistance Scheme for Poor Girls (Jammu & Kashmir)",
    hi: "गरीब लड़कियों के लिए राज्य विवाह सहायता योजना (जम्मू-कश्मीर)",
  },
  aka: ["SMAS", "JK marriage assistance", "Marriage Assistance Scheme Jammu Kashmir"],
  shortDescription: {
    en: "Girls from AAY ration-card families in Jammu & Kashmir get ₹75,000, and girls from PHH families ₹50,000, as a one-time grant before their marriage.",
    hi: "जम्मू-कश्मीर में AAY राशन कार्ड वाले परिवारों की लड़कियों को ₹75,000 और PHH परिवारों की लड़कियों को ₹50,000 शादी से पहले एक बार की सहायता के रूप में मिलते हैं।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Social Welfare Department, Government of Jammu and Kashmir", hi: "समाज कल्याण विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage assistance", "shaadi", "girls", "aay", "phh", "jammu kashmir"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 50000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("jammu-kashmir"),
    female(),
    labelled(minAge(18), { en: "At least 18 years old (legal age of marriage)", hi: "कम से कम 18 साल की उम्र (शादी की क़ानूनी उम्र)" }),
    labelled(isTrue("bpl"), { en: "Family holds an AAY or PHH ration card", hi: "परिवार के पास AAY या PHH राशन कार्ड हो" }),
  ),

  details: {
    en: [
      "The State Marriage Assistance Scheme (SMAS) helps poor families in Jammu & Kashmir with the cost of a daughter's wedding. The grant is paid to the girl herself, before the marriage.",
      "Since 1 April 2025, girls from Antyodaya (AAY) ration-card families get ₹75,000 and girls from priority household (PHH) families get ₹50,000. The money goes by DBT into the girl's own bank account.",
      "Normally the girl must have passed Class 8. In October 2025 the government relaxed this, so until 31 March 2028 girls can apply whatever their schooling. Applications are taken online only, through the Jan Sugam portal, and the Deputy Commissioner sanctions them.",
    ],
    hi: [
      "राज्य विवाह सहायता योजना (SMAS) जम्मू-कश्मीर के गरीब परिवारों को बेटी की शादी के ख़र्च में मदद करती है। पैसा शादी से पहले सीधे लड़की को मिलता है।",
      "1 अप्रैल 2025 से अंत्योदय (AAY) राशन कार्ड वाले परिवारों की लड़कियों को ₹75,000 और प्राथमिकता परिवार (PHH) वाले परिवारों की लड़कियों को ₹50,000 मिलते हैं। पैसा DBT से लड़की के अपने बैंक खाते में आता है।",
      "आम तौर पर लड़की का 8वीं पास होना ज़रूरी है। अक्टूबर 2025 में सरकार ने यह शर्त हटा दी, इसलिए 31 मार्च 2028 तक कोई भी लड़की पढ़ाई की परवाह किए बिना आवेदन कर सकती है। आवेदन सिर्फ़ जन सुगम पोर्टल पर ऑनलाइन होता है और डिप्टी कमिश्नर इसे मंज़ूर करते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹75,000 one-time grant for a girl from an AAY ration-card family.",
      "₹50,000 one-time grant for a girl from a PHH ration-card family.",
      "Paid before the wedding, directly into the girl's own bank account.",
    ],
    hi: [
      "AAY राशन कार्ड वाले परिवार की लड़की को एक बार ₹75,000।",
      "PHH राशन कार्ड वाले परिवार की लड़की को एक बार ₹50,000।",
      "पैसा शादी से पहले सीधे लड़की के अपने बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A girl of legal marriageable age living in Jammu & Kashmir (domicile).",
      "Her family holds an AAY or PHH ration card.",
      "Class 8 pass or equivalent. This condition is relaxed until 31 March 2028.",
      "She has not received money for the same purpose under any other scheme, especially Ladli Beti.",
      "She applies at least one month before the date of marriage.",
    ],
    hi: [
      "जम्मू-कश्मीर की (डोमिसाइल) लड़की जिसकी उम्र शादी की क़ानूनी उम्र हो।",
      "उसके परिवार के पास AAY या PHH राशन कार्ड हो।",
      "8वीं पास या उसके बराबर। यह शर्त 31 मार्च 2028 तक लागू नहीं है।",
      "उसे इसी काम के लिए किसी दूसरी योजना से, ख़ासकर लाडली बेटी से, पैसा न मिला हो।",
      "शादी की तारीख़ से कम से कम एक महीना पहले आवेदन करे।",
    ],
  },
  exclusions: {
    en: [
      "Girls from families with a non-priority (NPHH) ration card.",
      "Girls who already got marriage money under Ladli Beti or any other UT or central scheme.",
      "The grant can be taken only once.",
    ],
    hi: [
      "गैर-प्राथमिकता (NPHH) राशन कार्ड वाले परिवारों की लड़कियाँ।",
      "जिन लड़कियों को लाडली बेटी या किसी दूसरी UT या केंद्रीय योजना से शादी के लिए पैसा मिल चुका है।",
      "यह सहायता सिर्फ़ एक बार मिलती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "At least a month before the wedding, register on jansugam.jk.gov.in.",
        "Choose 'Application for obtaining financial Assistance under Marriage Assistance Scheme', fill in the form and upload your documents.",
        "Submit and track the status. The District Social Welfare Officer verifies the case and the Deputy Commissioner sanctions it.",
      ],
      hi: [
        "शादी से कम से कम एक महीना पहले jansugam.jk.gov.in पर रजिस्टर करें।",
        "'Application for obtaining financial Assistance under Marriage Assistance Scheme' चुनें, फ़ॉर्म भरें और दस्तावेज़ अपलोड करें।",
        "जमा करें और स्थिति देखते रहें। ज़िला समाज कल्याण अधिकारी जाँच करते हैं और डिप्टी कमिश्नर मंज़ूरी देते हैं।",
      ],
    },
    offline: {
      en: [
        "Applications are accepted online only. If you need help, go to a common service centre or your District Social Welfare Office.",
      ],
      hi: ["आवेदन सिर्फ़ ऑनलाइन लिए जाते हैं। मदद चाहिए तो कॉमन सर्विस सेंटर या ज़िला समाज कल्याण कार्यालय जाएँ।"],
    },
  },
  documents: {
    en: [
      "Proof of age or date of birth",
      "AAY or PHH ration card",
      "Marriage card or other proof of the marriage date",
      "Education certificate (if any)",
      "Aadhaar card and domicile certificate",
      "Bank account details of the girl",
    ],
    hi: [
      "उम्र या जन्म तारीख़ का सबूत",
      "AAY या PHH राशन कार्ड",
      "शादी का कार्ड या शादी की तारीख़ का कोई दूसरा सबूत",
      "पढ़ाई का प्रमाण पत्र (अगर हो)",
      "आधार कार्ड और डोमिसाइल प्रमाण पत्र",
      "लड़की के बैंक खाते का विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "My daughter didn't finish Class 8. Can she still apply?", hi: "मेरी बेटी 8वीं पास नहीं है। क्या वह फिर भी आवेदन कर सकती है?" },
      a: {
        en: "Yes, until 31 March 2028 the Class 8 condition doesn't apply. From 1 April 2028 a Class 8 pass certificate will be needed.",
        hi: "हाँ, 31 मार्च 2028 तक 8वीं पास की शर्त लागू नहीं है। 1 अप्रैल 2028 से 8वीं पास का प्रमाण पत्र ज़रूरी होगा।",
      },
    },
    {
      q: { en: "Can we apply after the wedding?", hi: "क्या शादी के बाद आवेदन कर सकते हैं?" },
      a: {
        en: "The scheme is meant to pay before the marriage, so apply at least a month in advance. Late applications may not be accepted.",
        hi: "यह योजना शादी से पहले पैसा देने के लिए है, इसलिए कम से कम एक महीना पहले आवेदन करें। देर से किया गया आवेदन शायद न लिया जाए।",
      },
    },
  ],

  officialUrl: "https://jansugam.jk.gov.in/",
  sources: [
    "https://socialwelfare.jk.gov.in/orders/GO95(2025).pdf",
    "https://socialwelfare.jk.gov.in/orders/GO245(2025).pdf",
    "https://socialwelfare.jk.gov.in/orders/GO49(2022).pdf",
    "https://prsindia.org/files/budget/budget_state/jammu-and-kashmir/2026/Budget_Analysis_2026-27-J&K.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2015,
  status: "check-status",
};

export default scheme;
