import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-mission-yuva",
  tier: "compact",
  name: { en: "Mission YUVA (Jammu & Kashmir)", hi: "मिशन युवा (जम्मू-कश्मीर)" },
  aka: ["Mission Yuva JK", "Mission YUVA entrepreneurship"],
  shortDescription: {
    en: "Jammu & Kashmir's flagship self-employment mission: bank loans with interest subvention, help with project reports and mentoring for people who want to start or grow a business.",
    hi: "जम्मू-कश्मीर का प्रमुख स्वरोज़गार मिशन: अपना काम शुरू करने या बढ़ाने वालों को ब्याज छूट वाले बैंक लोन, प्रोजेक्ट रिपोर्ट बनाने में मदद और मार्गदर्शन।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Labour and Employment Department (Mission YUVA), Government of Jammu and Kashmir", hi: "श्रम एवं रोज़गार विभाग (मिशन युवा), जम्मू और कश्मीर सरकार" },
  categories: ["business", "skills-employment"],
  tags: ["self employment", "business loan", "startup", "entrepreneur", "interest subvention", "jammu kashmir"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "business",
  eligibility: all(residentOf("jammu-kashmir")),

  details: {
    en: [
      "Mission YUVA is the J&K government's flagship programme to turn job seekers into business owners. It works through four tracks: nano enterprises (small units with a project cost of up to ₹10 lakh, open to first-time entrepreneurs), new MSMEs in focus and sunrise sectors, growth support for existing enterprises, and neo-innovative start-ups.",
      "Loans come mainly from J&K Bank, with interest subvention from the government. District committees approve cases, and Business Help Desks, Small Business Development Units and 'Yuva Doots' help applicants prepare project reports. By March 2026 bank credit under the mission had crossed ₹1,000 crore.",
    ],
    hi: [
      "मिशन युवा जम्मू-कश्मीर सरकार का प्रमुख कार्यक्रम है, जो नौकरी ढूँढने वालों को कारोबारी बनाने के लिए है। इसके चार हिस्से हैं: नैनो उद्यम (₹10 लाख तक की लागत वाली छोटी इकाइयाँ, पहली बार कारोबार शुरू करने वालों के लिए भी), फ़ोकस और उभरते क्षेत्रों में नए MSME, पहले से चल रहे उद्यमों को बढ़ाने में मदद, और नए इनोवेटिव स्टार्टअप।",
      "लोन मुख्य रूप से J&K बैंक देता है और सरकार ब्याज में छूट देती है। ज़िला समितियाँ केस मंज़ूर करती हैं, और बिज़नेस हेल्प डेस्क, स्मॉल बिज़नेस डेवलपमेंट यूनिट और 'युवा दूत' प्रोजेक्ट रिपोर्ट बनाने में मदद करते हैं। मार्च 2026 तक मिशन के तहत बैंक कर्ज़ ₹1,000 करोड़ पार कर चुका था।",
    ],
  },
  benefits: {
    en: [
      "Nano enterprises: bank-linked support for small units with a project cost of up to ₹10 lakh, such as tailoring, grocery shops or street vending; no prior credit history needed.",
      "New MSMEs in focus and sunrise sectors: loans of up to ₹2 crore with 6% interest subvention for 5 years.",
      "Existing enterprises: 6% yearly interest subvention for 5 years, capped at ₹10 lakh.",
      "Neo-innovative start-ups: support through incubators and a ₹250 crore venture fund.",
      "Free help with project reports (DPRs), mentoring and market linkages.",
    ],
    hi: [
      "नैनो उद्यम: ₹10 लाख तक की लागत वाली छोटी इकाइयों, जैसे सिलाई, किराना दुकान या रेहड़ी के लिए बैंक से जुड़ी मदद; पहले का कोई लोन रिकॉर्ड ज़रूरी नहीं।",
      "फ़ोकस और उभरते क्षेत्रों के नए MSME: ₹2 करोड़ तक का लोन, 5 साल तक 6% ब्याज छूट के साथ।",
      "पहले से चल रहे उद्यम: 5 साल तक हर साल 6% ब्याज छूट, अधिकतम ₹10 लाख।",
      "नए इनोवेटिव स्टार्टअप: इनक्यूबेटर और ₹250 करोड़ के वेंचर फ़ंड से मदद।",
      "प्रोजेक्ट रिपोर्ट (DPR), मार्गदर्शन और बाज़ार से जोड़ने में मुफ़्त मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Residents of Jammu & Kashmir who want to start or expand a business.",
      "New MSMEs must register under Udyam (MSME registration).",
      "The business acceleration track is for registered enterprises that have been running for at least 5 years.",
      "Loans are subject to the bank's appraisal of your project.",
    ],
    hi: [
      "जम्मू-कश्मीर के निवासी जो कारोबार शुरू करना या बढ़ाना चाहते हैं।",
      "नए MSME का उद्यम (MSME) रजिस्ट्रेशन ज़रूरी है।",
      "कारोबार बढ़ाने वाला हिस्सा उन रजिस्टर्ड उद्यमों के लिए है जो कम से कम 5 साल से चल रहे हैं।",
      "लोन बैंक के आपके प्रोजेक्ट के मूल्यांकन पर निर्भर है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on missionyuva.jk.gov.in or the Mission YUVA mobile app.",
        "Choose the track that fits your business and use the portal's DPR generator to prepare your project report.",
        "Submit the application; it is checked by the district committee and sent to the bank for the loan.",
      ],
      hi: [
        "missionyuva.jk.gov.in या मिशन युवा मोबाइल ऐप पर रजिस्टर करें।",
        "अपने कारोबार के हिसाब से सही हिस्सा चुनें और पोर्टल के DPR जनरेटर से प्रोजेक्ट रिपोर्ट बनाएँ।",
        "आवेदन जमा करें; ज़िला समिति इसकी जाँच करके लोन के लिए बैंक भेजती है।",
      ],
    },
    offline: {
      en: [
        "Visit the Business Help Desk in your block or district, or meet your local Yuva Doot, for help with the form and report.",
        "You can also call the YUVA Business Helpline at 1800-180-4969.",
      ],
      hi: [
        "फ़ॉर्म और रिपोर्ट में मदद के लिए अपने ब्लॉक या ज़िले के बिज़नेस हेल्प डेस्क पर जाएँ, या अपने इलाक़े के युवा दूत से मिलें।",
        "आप युवा बिज़नेस हेल्पलाइन 1800-180-4969 पर भी कॉल कर सकते हैं।",
      ],
    },
  },

  officialUrl: "https://missionyuva.jk.gov.in/",
  sources: ["https://missionyuva.jk.gov.in/Home", "https://dipr.jk.gov.in/Prnv?n=25857", "https://dipr.jk.gov.in/Prnv?n=24983"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
