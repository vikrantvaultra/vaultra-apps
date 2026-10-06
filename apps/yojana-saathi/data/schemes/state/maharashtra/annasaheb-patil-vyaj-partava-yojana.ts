import { all, labelled, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "annasaheb-patil-vyaj-partava-yojana",
  tier: "compact",
  name: {
    en: "Annasaheb Patil Mahamandal Interest Refund Scheme",
    hi: "अण्णासाहेब पाटील महामंडल ब्याज वापसी योजना",
  },
  aka: ["Annasaheb Patil loan", "Annasaheb Patil Arthik Magas Vikas Mahamandal", "IR-I", "Vyaj Partava Yojana"],
  shortDescription: {
    en: "Maratha entrepreneurs in Maharashtra with family income up to ₹8 lakh take a bank business loan of up to ₹15 lakh and get the interest (up to 12%, max ₹4.5 lakh) refunded.",
    hi: "महाराष्ट्र के मराठा उद्यमी, जिनके परिवार की आय ₹8 लाख तक है, ₹15 लाख तक का बैंक व्यापार कर्ज़ लेते हैं और ब्याज (12% तक, ज़्यादा से ज़्यादा ₹4.5 लाख) वापस पाते हैं।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Annasaheb Patil Arthik Magas Vikas Mahamandal, Government of Maharashtra",
    hi: "अण्णासाहेब पाटील आर्थिक मागास विकास महामंडल, महाराष्ट्र सरकार",
  },
  categories: ["business"],
  tags: ["business loan", "interest subsidy", "maratha", "self employment", "startup", "annasaheb patil"],
  benefitType: "loan",
  isDBT: true,
  kundliHouse: "business",
  eligibility: all(
    residentOf("maharashtra"),
    labelled(incomeUpTo(800_000), { en: "Family income up to ₹8 lakh a year", hi: "परिवार की सालाना आय ₹8 लाख तक" }),
  ),

  details: {
    en: [
      "The Annasaheb Patil Mahamandal helps economically weaker people from the Maratha community start or grow a business. Under its individual interest refund scheme (IR-I), you take a business loan from a bank and the Mahamandal pays back the interest you pay.",
      "First you get an eligibility letter (LOI) on the Mahamandal portal, then take it to the bank with your project report. After each EMI is paid on time, you file a claim on the portal and the interest is refunded to your Aadhaar-linked account. A group interest refund scheme (IR-II) also exists for groups.",
    ],
    hi: [
      "अण्णासाहेब पाटील महामंडल मराठा समाज के आर्थिक रूप से कमज़ोर लोगों को व्यापार शुरू करने या बढ़ाने में मदद करता है। इसकी व्यक्तिगत ब्याज वापसी योजना (IR-I) में आप बैंक से व्यापार कर्ज़ लेते हैं और जो ब्याज भरते हैं, वह महामंडल लौटा देता है।",
      "पहले महामंडल के पोर्टल से पात्रता पत्र (LOI) लें, फिर प्रोजेक्ट रिपोर्ट के साथ बैंक जाएँ। हर EMI समय पर भरने के बाद पोर्टल पर दावा करें, और ब्याज आपके आधार से जुड़े खाते में वापस आता है। समूहों के लिए ब्याज वापसी योजना (IR-II) भी है।",
    ],
  },
  benefits: {
    en: [
      "Interest refund on a bank business loan of up to ₹15 lakh.",
      "Interest refunded up to 12% a year, to a maximum of ₹4.5 lakh, for up to 7 years.",
      "Refund paid into your Aadhaar-linked bank account after each EMI is paid.",
    ],
    hi: [
      "₹15 लाख तक के बैंक व्यापार कर्ज़ पर ब्याज की वापसी।",
      "सालाना 12% तक ब्याज वापस, ज़्यादा से ज़्यादा ₹4.5 लाख, 7 साल तक।",
      "हर EMI भरने के बाद पैसा आधार से जुड़े बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to the Maratha community (or another group covered by the Mahamandal) and lives in Maharashtra.",
      "Annual family income up to ₹8 lakh.",
      "The loan is for a business purpose and is sanctioned by a bank.",
      "EMIs are paid on time; the claim is filed only after the EMI is paid.",
    ],
    hi: [
      "मराठा समाज (या महामंडल में शामिल किसी दूसरे समूह) से हों और महाराष्ट्र में रहते हों।",
      "परिवार की सालाना आय ₹8 लाख तक।",
      "कर्ज़ व्यापार के लिए हो और बैंक ने मंज़ूर किया हो।",
      "EMI समय पर भरी जाए; दावा EMI भरने के बाद ही किया जाए।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on udyog.mahaswayam.gov.in and apply for the eligibility letter (LOI) under the individual interest refund scheme.",
        "Take the LOI, your project report and documents to a bank and get the business loan sanctioned.",
        "Upload the loan details on the portal. After paying each EMI, file a claim to get the interest back.",
      ],
      hi: [
        "udyog.mahaswayam.gov.in पर रजिस्टर करें और व्यक्तिगत ब्याज वापसी योजना में पात्रता पत्र (LOI) के लिए आवेदन करें।",
        "LOI, प्रोजेक्ट रिपोर्ट और दस्तावेज़ लेकर बैंक जाएँ और व्यापार कर्ज़ मंज़ूर कराएँ।",
        "पोर्टल पर कर्ज़ की जानकारी अपलोड करें। हर EMI भरने के बाद ब्याज वापसी का दावा करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Proof of residence", "Income certificate", "Caste certificate", "Project report of the business", "Land records or vehicle papers if relevant to the business"],
    hi: ["आधार कार्ड", "निवास का प्रमाण", "आय प्रमाण पत्र", "जाति प्रमाण पत्र", "व्यापार की प्रोजेक्ट रिपोर्ट", "व्यापार से जुड़े हों तो ज़मीन के कागज़ या वाहन के कागज़"],
  },

  officialUrl: "https://udyog.mahaswayam.gov.in/",
  sources: ["https://udyog.mahaswayam.gov.in/", "https://pimcobank.bank.in/page/257", "https://www.punepeoples.bank.in/annasaheb-patil-mahamandal-karj-yojana"],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
