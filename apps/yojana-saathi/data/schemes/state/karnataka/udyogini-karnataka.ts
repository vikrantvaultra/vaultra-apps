import { all, ageBetween, any, female, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "udyogini-karnataka",
  tier: "compact",
  name: { en: "Udyogini Scheme", hi: "उद्योगिनी योजना" },
  aka: ["Udyogini", "KSWDC Udyogini", "women business loan Karnataka"],
  shortDescription: {
    en: "Women in Karnataka aged 18 to 55 get a bank loan of up to ₹3 lakh to start a small business, with 30% of it waived as subsidy (50% for SC/ST women).",
    hi: "कर्नाटक में 18 से 55 साल की महिलाओं को छोटा कारोबार शुरू करने के लिए ₹3 लाख तक का बैंक लोन मिलता है, जिसका 30% (SC/ST महिलाओं के लिए 50%) सब्सिडी के रूप में माफ़ होता है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Karnataka State Women's Development Corporation, Department of Women and Child Development",
    hi: "कर्नाटक राज्य महिला विकास निगम, महिला एवं बाल विकास विभाग",
  },
  categories: ["business", "women-child"],
  tags: ["women", "business loan", "subsidy", "self employment", "udyogini", "karnataka"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 300000, period: "one-time", kind: "loan" },
  ageRange: { min: 18, max: 55 },
  kundliHouse: "business",
  eligibility: all(
    residentOf("karnataka"),
    female(),
    ...ageBetween(18, 55),
    labelled(any(incomeUpTo(150_000), all(when("caste", "in", ["sc", "st", "pvtg"]), incomeUpTo(200_000))), {
      en: "Family income below ₹1.5 lakh a year (₹2 lakh for SC/ST women)",
      hi: "परिवार की सालाना आय ₹1.5 लाख से कम (SC/ST महिलाओं के लिए ₹2 लाख)",
    }),
  ),

  details: {
    en: [
      "Udyogini helps women from low-income families start a small trade or service business. The Karnataka State Women's Development Corporation arranges a bank loan and pays part of it as a subsidy, so you repay less.",
      "Common businesses include tailoring, small shops, food stalls, beauty parlours and other trades. You need a simple project report for your business idea.",
    ],
    hi: [
      "उद्योगिनी कम आय वाले परिवारों की महिलाओं को छोटा व्यापार या सेवा का काम शुरू करने में मदद करती है। कर्नाटक राज्य महिला विकास निगम बैंक लोन दिलाता है और उसका एक हिस्सा सब्सिडी के रूप में देता है, जिससे आपको कम चुकाना पड़ता है।",
      "आम काम हैं सिलाई, छोटी दुकान, खाने का स्टॉल, ब्यूटी पार्लर और दूसरे व्यापार। अपने काम के लिए एक सरल प्रोजेक्ट रिपोर्ट चाहिए।",
    ],
  },
  benefits: {
    en: [
      "Bank loan of ₹1 lakh to ₹3 lakh for a business.",
      "30% of the approved loan is paid as subsidy for general and special-category women.",
      "50% of the approved loan is paid as subsidy for SC/ST women.",
    ],
    hi: [
      "कारोबार के लिए ₹1 लाख से ₹3 लाख तक का बैंक लोन।",
      "सामान्य और विशेष श्रेणी की महिलाओं के लिए मंज़ूर लोन का 30% सब्सिडी।",
      "SC/ST महिलाओं के लिए मंज़ूर लोन का 50% सब्सिडी।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman living in Karnataka, aged 18 to 55 years.",
      "Family income below ₹1.5 lakh a year (general and special category) or below ₹2 lakh (SC/ST).",
      "Has a project report for a trade or service business.",
    ],
    hi: [
      "कर्नाटक में रहने वाली 18 से 55 साल की महिला।",
      "परिवार की सालाना आय ₹1.5 लाख से कम (सामान्य और विशेष श्रेणी) या ₹2 लाख से कम (SC/ST)।",
      "व्यापार या सेवा वाले काम की प्रोजेक्ट रिपोर्ट हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Child Development Project Officer (CDPO) or the district office of the Women and Child Development Department when applications are invited.",
        "Submit the form with a project report, income certificate, residence proof, Aadhaar-linked bank details and caste certificate (SC/ST).",
        "After selection, the bank sanctions the loan and the subsidy is adjusted against it.",
      ],
      hi: [
        "जब आवेदन माँगे जाएँ, बाल विकास परियोजना अधिकारी (CDPO) या महिला एवं बाल विकास विभाग के ज़िला दफ़्तर से संपर्क करें।",
        "प्रोजेक्ट रिपोर्ट, आय प्रमाण पत्र, निवास का सबूत, आधार से जुड़ा बैंक विवरण और जाति प्रमाण पत्र (SC/ST) के साथ फ़ॉर्म जमा करें।",
        "चयन के बाद बैंक लोन मंज़ूर करता है और सब्सिडी उसमें समायोजित होती है।",
      ],
    },
  },
  documents: {
    en: ["Residence proof, voter ID or ration card", "Project report for the business", "Aadhaar-linked bank account details", "Income certificate from the Tahsildar", "Caste certificate (SC/ST only)"],
    hi: ["निवास का सबूत, वोटर ID या राशन कार्ड", "कारोबार की प्रोजेक्ट रिपोर्ट", "आधार से जुड़े बैंक खाते का विवरण", "तहसीलदार का आय प्रमाण पत्र", "जाति प्रमाण पत्र (सिर्फ़ SC/ST)"],
  },

  officialUrl: "https://kswdc.karnataka.gov.in/21/udyogini/kn",
  sources: ["https://kswdc.karnataka.gov.in/21/udyogini/kn", "https://kswdc.karnataka.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 1997,
  status: "check-status",
};

export default scheme;
