import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhya-mantri-matritva-sahayta-yojana",
  tier: "compact",
  overlapGroup: "maternity-cash",
  name: { en: "Mukhya Mantri Matritva Sahayta Yojana (Haryana)", hi: "मुख्यमंत्री मातृत्व सहायता योजना (हरियाणा)" },
  aka: ["MMMSY", "Matritav Sahayta Yojana"],
  shortDescription: {
    en: "Haryana mothers get ₹5,000 in one instalment when their second child is a boy, covering the gap left by PM Matru Vandana Yojana.",
    hi: "हरियाणा में दूसरी संतान बेटा होने पर माँ को एक किस्त में ₹5,000 मिलते हैं, जो प्रधानमंत्री मातृ वंदना योजना में शामिल नहीं है।",
  },
  level: "state",
  state: "haryana",
  department: { en: "Women and Child Development Department, Haryana", hi: "महिला एवं बाल विकास विभाग, हरियाणा" },
  categories: ["women-child", "health"],
  tags: ["maternity", "pregnant women", "second child", "anganwadi", "haryana"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("haryana"), female(), isTrue("pregnantOrLactating")),

  details: {
    en: [
      "Under PM Matru Vandana Yojana, the central scheme pays for the first child and for a second child only if it is a girl. Haryana's Mukhya Mantri Matritva Sahayta Yojana pays ₹5,000 when the second child is a boy, so that mothers can rest before and after delivery.",
      "It covers children born on or after 8 March 2022. The money is paid through the Family ID (PPP) system by DBT into the mother's bank account.",
    ],
    hi: [
      "प्रधानमंत्री मातृ वंदना योजना में केंद्र सरकार पहली संतान के लिए और दूसरी संतान बेटी होने पर ही पैसा देती है। हरियाणा की मुख्यमंत्री मातृत्व सहायता योजना दूसरी संतान बेटा होने पर ₹5,000 देती है, ताकि माँ प्रसव से पहले और बाद में आराम कर सके।",
      "यह 8 मार्च 2022 या उसके बाद जन्मे बच्चों के लिए है। पैसा परिवार पहचान पत्र (PPP) प्रणाली से DBT द्वारा माँ के बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: ["₹5,000 in one instalment after the birth of the second child (boy)."],
    hi: ["दूसरी संतान (बेटा) के जन्म के बाद एक किस्त में ₹5,000।"],
  },
  eligibilityText: {
    en: [
      "A Haryana mother whose second child, a boy, was born on or after 8 March 2022.",
      "She belongs to one of these groups: SC or ST; 40% or more disability; BPL ration card; PM-JAY (Ayushman) beneficiary; e-Shram card; PM-KISAN woman farmer; MGNREGA job card; family income under ₹8 lakh a year; or Anganwadi worker, helper or ASHA.",
      "Pregnancy registered with at least one antenatal check-up within six months of the last period, birth registered, and the first round of BCG, OPV, DPT and Hepatitis-B given to the baby.",
    ],
    hi: [
      "हरियाणा की वह माँ जिसकी दूसरी संतान, बेटा, 8 मार्च 2022 या उसके बाद पैदा हुआ।",
      "वह इनमें से किसी समूह में हो: SC या ST; 40% या ज़्यादा दिव्यांगता; BPL राशन कार्ड; PM-JAY (आयुष्मान) लाभार्थी; ई-श्रम कार्ड; PM-KISAN महिला किसान; मनरेगा जॉब कार्ड; परिवार की सालाना आय ₹8 लाख से कम; या आंगनवाड़ी कार्यकर्ता, सहायिका या आशा।",
      "गर्भ का पंजीकरण और आख़िरी माहवारी के छह महीने के अंदर कम से कम एक जाँच, जन्म का पंजीकरण, और बच्चे को BCG, OPV, DPT और हेपेटाइटिस-B की पहली ख़ुराक लगी हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Use the 'Click here to apply' link on the WCD Haryana scheme page, or ask your Anganwadi worker to register you."],
      hi: ["WCD हरियाणा की योजना वाले पेज पर 'Click here to apply' लिंक से आवेदन करें, या अपनी आंगनवाड़ी कार्यकर्ता से पंजीकरण करवाएँ।"],
    },
    offline: {
      en: ["Register your pregnancy at the Anganwadi centre and give your Aadhaar, Family ID and bank details."],
      hi: ["आंगनवाड़ी केंद्र पर अपने गर्भ का पंजीकरण कराएँ और आधार, परिवार पहचान पत्र व बैंक विवरण दें।"],
    },
  },

  officialUrl: "https://wcdhry.gov.in/mukhya-mantri-matritav-sahayta-yojana/",
  sources: [
    "https://wcdhry.gov.in/mukhya-mantri-matritav-sahayta-yojana/",
    "https://cdnbbsr.s3waas.gov.in/s34c144c47ecba6f8318128703ca9e2601/uploads/2024/11/20241125232046895.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
