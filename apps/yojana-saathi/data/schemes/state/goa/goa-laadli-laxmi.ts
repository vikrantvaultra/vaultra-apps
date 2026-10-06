import { all, ageBetween, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "goa-laadli-laxmi",
  tier: "full",
  name: { en: "Laadli Laxmi Scheme (Goa)", hi: "लाडली लक्ष्मी योजना (गोवा)" },
  aka: ["Ladli Laxmi Goa", "Laadli Lakshmi", "Goa ₹1 lakh girl scheme"],
  shortDescription: {
    en: "A one-time ₹1 lakh for a Goan girl when she turns 18 (kept as a fixed deposit until marriage) or for a woman up to 45 at the time of her civil marriage.",
    hi: "गोवा की लड़की को 18 साल की होने पर (शादी तक फ़िक्स्ड डिपॉज़िट में) या 45 साल तक की महिला को सिविल विवाह के समय एक बार ₹1 लाख।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Directorate of Women and Child Development, Government of Goa",
    hi: "महिला एवं बाल विकास निदेशालय, गोवा सरकार",
  },
  categories: ["women-child"],
  tags: ["girl child", "daughter", "marriage", "laadli laxmi", "one lakh", "goa"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 100000, period: "one-time", kind: "cash" },
  ageRange: { min: 18, max: 45 },
  kundliHouse: "daughter",
  eligibility: all(residentOf("goa"), female(), ...ageBetween(18, 45)),

  details: {
    en: [
      "Laadli Laxmi was started by the Goa government in 2012 to give girls money for studies, work or marriage once they become adults, and to improve the sex ratio. It is run by the Directorate of Women and Child Development.",
      "Unmarried girls apply within a year of turning 18. ₹1 lakh is put in a bank fixed deposit in the joint name of the girl and the Director, and it keeps growing with interest. She can withdraw it after her civil marriage, or earlier for higher studies or a business with the committee's approval.",
      "Women who are getting married (aged up to 45) can apply within a year of the civil marriage registration and receive the ₹1 lakh directly.",
    ],
    hi: [
      "लाडली लक्ष्मी योजना गोवा सरकार ने 2012 में शुरू की, ताकि बालिग होने पर लड़कियों को पढ़ाई, काम या शादी के लिए पैसा मिले और लिंगानुपात सुधरे। इसे महिला एवं बाल विकास निदेशालय चलाता है।",
      "अविवाहित लड़कियाँ 18 साल की होने के एक साल के अंदर आवेदन करती हैं। ₹1 लाख लड़की और निदेशक के संयुक्त नाम से बैंक फ़िक्स्ड डिपॉज़िट में रखे जाते हैं और ब्याज के साथ बढ़ते हैं। सिविल विवाह के बाद, या समिति की मंज़ूरी से पहले भी उच्च शिक्षा या व्यवसाय के लिए, वह इसे निकाल सकती है।",
      "जिन महिलाओं की शादी हो रही है (45 साल तक), वे सिविल विवाह पंजीकरण के एक साल के अंदर आवेदन करके ₹1 लाख सीधे पा सकती हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1 lakh, once in a lifetime.",
      "For unmarried girls: kept as a fixed deposit that earns interest, released after civil marriage.",
      "Can be released earlier for higher studies or starting a business, if the committee approves.",
      "For women already getting married: paid on approval after the civil marriage registration.",
    ],
    hi: [
      "जीवन में एक बार ₹1 लाख।",
      "अविवाहित लड़कियों के लिए: ब्याज कमाने वाली फ़िक्स्ड डिपॉज़िट में रखा जाता है, सिविल विवाह के बाद मिलता है।",
      "समिति मंज़ूरी दे तो उच्च शिक्षा या व्यवसाय शुरू करने के लिए पहले भी मिल सकता है।",
      "शादी कर रही महिलाओं के लिए: सिविल विवाह पंजीकरण के बाद मंज़ूरी मिलने पर भुगतान।",
    ],
  },
  eligibilityText: {
    en: [
      "A girl born in Goa who has lived in Goa for the last 15 years. A girl born outside Goa can apply if she has lived in Goa for 15 years and studied in Goa for at least 7 continuous years.",
      "At least one parent was born in Goa and has lived here for 15 years, or one parent has lived in Goa for 25 years.",
      "Parents' combined annual income must be within the scheme's limit. The 2020 notification states ₹3 lakh a year in its rules (its declaration form mentions ₹8 lakh), so confirm the current limit with the Directorate.",
      "You apply within one year of turning 18 or within one year of your civil marriage registration. Applications after one year are rejected.",
      "You are not older than 45.",
    ],
    hi: [
      "गोवा में जन्मी लड़की, जो पिछले 15 साल से गोवा में रह रही है। गोवा से बाहर जन्मी लड़की भी आवेदन कर सकती है, अगर वह 15 साल से गोवा में रह रही है और लगातार कम से कम 7 साल गोवा में पढ़ी है।",
      "माता-पिता में से कम से कम एक गोवा में जन्मा हो और 15 साल से यहाँ रह रहा हो, या एक 25 साल से गोवा में रह रहा हो।",
      "माता-पिता की कुल सालाना आय योजना की सीमा के अंदर हो। 2020 की अधिसूचना के नियमों में ₹3 लाख सालाना लिखा है (उसके घोषणा फ़ॉर्म में ₹8 लाख), इसलिए मौजूदा सीमा निदेशालय से पक्की कर लें।",
      "आप 18 साल पूरे होने या सिविल विवाह पंजीकरण के एक साल के अंदर आवेदन करें। एक साल बाद आए आवेदन रद्द हो जाते हैं।",
      "आपकी उम्र 45 साल से ज़्यादा न हो।",
    ],
  },
  exclusions: {
    en: [
      "Applications made more than one year after turning 18 or after the civil marriage registration.",
      "Anyone who has already received Laadli Laxmi once.",
      "If the money is not claimed by age 45, the deposit goes back to the government.",
    ],
    hi: [
      "18 साल पूरे होने या सिविल विवाह पंजीकरण के एक साल से ज़्यादा बाद किए गए आवेदन।",
      "जिसे पहले एक बार लाडली लक्ष्मी मिल चुकी है।",
      "45 साल की उम्र तक पैसा न लिया जाए तो जमा राशि सरकार को वापस चली जाती है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the numbered Laadli Laxmi application form from the offices or bank branches named by the Directorate of Women and Child Development.",
        "Sign the form in front of your MLA, MP, the District Magistrate or a senior government officer, who also signs your photo.",
        "Attach the documents and submit the form to the Directorate in Panaji within the one-year window.",
        "After your civil marriage, go in person to the Directorate to get the withdrawal letter, then take it to the bank.",
      ],
      hi: [
        "महिला एवं बाल विकास निदेशालय द्वारा तय दफ़्तरों या बैंक शाखाओं से क्रमांकित लाडली लक्ष्मी आवेदन फ़ॉर्म लें।",
        "फ़ॉर्म पर अपने विधायक, सांसद, ज़िला मजिस्ट्रेट या वरिष्ठ सरकारी अधिकारी के सामने हस्ताक्षर करें; वे आपकी फ़ोटो पर भी हस्ताक्षर करते हैं।",
        "दस्तावेज़ लगाकर एक साल की समय-सीमा में फ़ॉर्म पणजी स्थित निदेशालय में जमा करें।",
        "सिविल विवाह के बाद ख़ुद निदेशालय जाकर निकासी पत्र लें और उसे बैंक में दें।",
      ],
    },
  },
  documents: {
    en: [
      "Your birth certificate",
      "Proof of 15 years' residence in Goa (residence certificate, or school leaving and current bonafide certificates)",
      "Parent's birth certificate and 15-year or 25-year residence certificate",
      "Parents' income certificate from the competent authority",
      "Aadhaar card",
      "Civil marriage registration certificate (for married applicants, or when withdrawing)",
      "Self-declaration and two passport-size photos",
    ],
    hi: [
      "आपका जन्म प्रमाण पत्र",
      "गोवा में 15 साल रहने का सबूत (निवास प्रमाण पत्र, या स्कूल छोड़ने और मौजूदा बोनाफ़ाइड प्रमाण पत्र)",
      "माता या पिता का जन्म प्रमाण पत्र और 15 या 25 साल का निवास प्रमाण पत्र",
      "सक्षम अधिकारी से माता-पिता का आय प्रमाण पत्र",
      "आधार कार्ड",
      "सिविल विवाह पंजीकरण प्रमाण पत्र (शादीशुदा आवेदकों के लिए या पैसा निकालते समय)",
      "स्व-घोषणा पत्र और दो पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "Can I use the money for college instead of marriage?", hi: "क्या मैं यह पैसा शादी की जगह कॉलेज के लिए इस्तेमाल कर सकती हूँ?" },
      a: {
        en: "Yes, if the scheme committee agrees. Apply to the Directorate in the prescribed Form A with proof of admission or your business plan.",
        hi: "हाँ, अगर योजना समिति मंज़ूरी दे। निदेशालय में तय फ़ॉर्म A में दाख़िले या अपने व्यवसाय योजना के सबूत के साथ आवेदन करें।",
      },
    },
    {
      q: { en: "I turned 18 two years ago. Can I still apply?", hi: "मुझे 18 साल हुए दो साल हो गए। क्या अब भी आवेदन कर सकती हूँ?" },
      a: {
        en: "Not on the basis of turning 18, because the window is one year. You can apply within one year of your civil marriage registration if you are 45 or younger then.",
        hi: "18 साल पूरे होने के आधार पर नहीं, क्योंकि समय-सीमा एक साल है। सिविल विवाह पंजीकरण के एक साल के अंदर आवेदन कर सकती हैं, अगर तब आपकी उम्र 45 साल या कम हो।",
      },
    },
  ],

  officialUrl: "https://www.goa.gov.in/government/schemes/",
  sources: [
    "https://www.goa.gov.in/wp-content/uploads/2021/01/Laadli-Laxmi-Scheme-Griha-Aadhar-Schme-Amendment-Notification.pdf",
    "https://dip.goa.gov.in/swayampurna-goa-porgramme/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "active",
};

export default scheme;
