import { all, female, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "gruha-lakshmi",
  name: { en: "Gruha Lakshmi", hi: "गृह लक्ष्मी योजना" },
  aka: ["Gruhalakshmi", "Griha Lakshmi"],
  shortDescription: {
    en: "₹2,000 every month, paid straight into the bank account of the woman named as head of the family on a Karnataka ration card.",
    hi: "कर्नाटक के राशन कार्ड पर परिवार की मुखिया के रूप में दर्ज महिला के बैंक खाते में हर महीने सीधे ₹2,000।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Department of Women and Child Development, Government of Karnataka",
    hi: "महिला एवं बाल विकास विभाग, कर्नाटक सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly income", "head of family", "guarantee scheme", "ration card", "dbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("karnataka"), female()),

  details: {
    en: [
      "Gruha Lakshmi is one of the Karnataka government's five 'guarantee' schemes. It pays a fixed monthly amount to the woman who runs the household, to give her money of her own.",
      "The woman named as head of the family on an Antyodaya, BPL or APL ration card is eligible. Only one woman per family can get it.",
      "The money is sent by Direct Benefit Transfer to her Aadhaar-linked bank account. The scheme is run by the Department of Women and Child Development, and you apply through the Seva Sindhu guarantee schemes portal or a seva kendra.",
    ],
    hi: [
      "गृह लक्ष्मी कर्नाटक सरकार की पाँच 'गारंटी' योजनाओं में से एक है। इसमें घर चलाने वाली महिला को हर महीने तय रकम दी जाती है, ताकि उसके पास अपना पैसा हो।",
      "अंत्योदय, BPL या APL राशन कार्ड पर परिवार की मुखिया के रूप में दर्ज महिला इसकी हक़दार है। एक परिवार में सिर्फ़ एक महिला को यह मिलता है।",
      "पैसा DBT के ज़रिए उसके आधार से जुड़े बैंक खाते में भेजा जाता है। योजना महिला एवं बाल विकास विभाग चलाता है, और आवेदन सेवा सिंधु गारंटी योजना पोर्टल या सेवा केंद्र से होता है।",
    ],
  },
  benefits: {
    en: [
      "₹2,000 every month (₹24,000 a year) to the woman head of the family.",
      "Paid directly into her own Aadhaar-linked bank account.",
      "No income slab or caste condition: Antyodaya, BPL and APL card holders can all apply.",
    ],
    hi: [
      "परिवार की महिला मुखिया को हर महीने ₹2,000 (साल में ₹24,000)।",
      "पैसा सीधे उसके अपने आधार से जुड़े बैंक खाते में आता है।",
      "कोई आय सीमा या जाति की शर्त नहीं: अंत्योदय, BPL और APL तीनों कार्ड वाले आवेदन कर सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Karnataka.",
      "You are named as the head of the family on an Antyodaya, BPL or APL ration card issued by the Karnataka Food and Civil Supplies Department.",
      "Your bank account is linked to your Aadhaar.",
      "Only one woman per family can receive the benefit.",
    ],
    hi: [
      "आप कर्नाटक में रहती हैं।",
      "कर्नाटक खाद्य एवं नागरिक आपूर्ति विभाग के अंत्योदय, BPL या APL राशन कार्ड पर आपका नाम परिवार की मुखिया के रूप में दर्ज है।",
      "आपका बैंक खाता आधार से जुड़ा है।",
      "एक परिवार में सिर्फ़ एक महिला को लाभ मिलता है।",
    ],
  },
  exclusions: {
    en: [
      "If you or your husband pay income tax, you are not eligible.",
      "If you or your husband file GST returns, you are not eligible.",
      "If you got the benefit with false information, the money paid can be recovered and action taken.",
    ],
    hi: [
      "अगर आप या आपके पति आयकर देते हैं, तो आप पात्र नहीं हैं।",
      "अगर आप या आपके पति GST रिटर्न भरते हैं, तो आप पात्र नहीं हैं।",
      "ग़लत जानकारी देकर लाभ लेने पर दी गई रकम वापस ली जा सकती है और कार्रवाई हो सकती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open the Karnataka guarantee schemes portal (sevasindhugs.karnataka.gov.in) and choose Gruha Lakshmi.",
        "Enter your ration card number and Aadhaar, and verify with the OTP sent to your mobile.",
        "Check your bank details, submit the self-declaration and note the application number to track its status.",
      ],
      hi: [
        "कर्नाटक गारंटी योजना पोर्टल (sevasindhugs.karnataka.gov.in) खोलें और गृह लक्ष्मी चुनें।",
        "अपना राशन कार्ड नंबर और आधार डालें, और मोबाइल पर आए OTP से पुष्टि करें।",
        "बैंक की जानकारी जाँचें, स्व-घोषणा जमा करें और स्थिति देखने के लिए आवेदन संख्या नोट कर लें।",
      ],
    },
    offline: {
      en: [
        "Visit a Grama One, Karnataka One, Bangalore One or Bapuji Seva Kendra centre.",
        "Take your ration card, Aadhaar and bank passbook. The operator fills in the form for you.",
        "Keep the acknowledgement slip. Approval messages come by SMS on your registered mobile.",
      ],
      hi: [
        "ग्राम वन, कर्नाटक वन, बैंगलोर वन या बापूजी सेवा केंद्र जाएँ।",
        "राशन कार्ड, आधार और बैंक पासबुक साथ ले जाएँ। ऑपरेटर आपका फ़ॉर्म भर देगा।",
        "पावती पर्ची संभाल कर रखें। मंज़ूरी की सूचना आपके पंजीकृत मोबाइल पर SMS से आती है।",
      ],
    },
  },
  documents: {
    en: ["Ration card (Antyodaya, BPL or APL) with your name as head of family", "Aadhaar card of the applicant and her husband", "Aadhaar-linked bank account details", "Mobile number linked to Aadhaar"],
    hi: ["राशन कार्ड (अंत्योदय, BPL या APL), जिसमें आप परिवार की मुखिया दर्ज हों", "आवेदिका और उसके पति का आधार कार्ड", "आधार से जुड़े बैंक खाते का विवरण", "आधार से जुड़ा मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "My son pays income tax. Can I still get Gruha Lakshmi?", hi: "मेरा बेटा आयकर देता है। क्या मुझे फिर भी गृह लक्ष्मी मिलेगा?" },
      a: {
        en: "The official rule only excludes you if you or your husband pay income tax or file GST returns. Other family members' taxes are not part of the stated condition.",
        hi: "सरकारी नियम के अनुसार आप तभी बाहर होती हैं जब आप या आपके पति आयकर देते हों या GST रिटर्न भरते हों। परिवार के दूसरे सदस्यों का टैक्स इस शर्त में शामिल नहीं है।",
      },
    },
    {
      q: { en: "I am not the head of family on my ration card. What can I do?", hi: "राशन कार्ड पर मैं परिवार की मुखिया नहीं हूँ। क्या करूँ?" },
      a: {
        en: "Apply to the Food and Civil Supplies Department to update the ration card so that you are listed as head of the family, and then apply for Gruha Lakshmi.",
        hi: "राशन कार्ड में ख़ुद को परिवार की मुखिया दर्ज कराने के लिए खाद्य एवं नागरिक आपूर्ति विभाग में आवेदन करें, फिर गृह लक्ष्मी के लिए आवेदन करें।",
      },
    },
  ],

  officialUrl: "https://sevasindhugs.karnataka.gov.in/",
  sources: [
    "https://sevasindhugs.karnataka.gov.in/",
    "https://sevasindhugs.karnataka.gov.in/PDF/Gruhalakshmi%20Scheme_Kannada_final.pdf",
    "https://www.thenewsminute.com/article/gruha-lakshmi-scheme-exclude-income-tax-gst-payees-karnataka-cm-siddaramaiah-178285",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
