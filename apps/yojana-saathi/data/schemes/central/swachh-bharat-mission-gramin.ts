import { all, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "swachh-bharat-mission-gramin",
  name: { en: "Swachh Bharat Mission (Gramin) – Toilet Incentive", hi: "स्वच्छ भारत मिशन (ग्रामीण) – शौचालय प्रोत्साहन राशि" },
  aka: ["SBM-G", "SBM Gramin", "IHHL", "Swachh Bharat toilet scheme"],
  shortDescription: {
    en: "Get ₹12,000 to build a toilet at home if your village household doesn't have one and is BPL or in an eligible group like SC/ST, small farmer or woman-headed family.",
    hi: "अगर गाँव में आपके घर में शौचालय नहीं है और परिवार BPL है या SC/ST, छोटे किसान, महिला मुखिया वाले परिवार जैसे पात्र समूह में है, तो शौचालय बनाने के लिए ₹12,000 पाएँ।",
  },
  level: "central",
  ministry: "jal-shakti",
  categories: ["housing", "health"],
  tags: ["toilet", "sanitation", "swachh bharat", "latrine", "village", "odf"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 12000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    labelled(when("area", "eq", "rural"), { en: "You live in a village (rural area)", hi: "आप गाँव (ग्रामीण क्षेत्र) में रहते हैं" }),
  ),

  details: {
    en: [
      "Under Swachh Bharat Mission (Gramin), rural families without a toilet can get money to build one at home, called an Individual Household Latrine (IHHL). It is run by the Department of Drinking Water and Sanitation, Ministry of Jal Shakti, through state governments and gram panchayats.",
      "Phase II of the mission started in April 2020. It focuses on keeping villages open-defecation free, plus managing solid and liquid waste. New or left-out households that still don't have a toilet can get the incentive.",
      "You build the toilet first (or alongside), and the ₹12,000 is paid into your bank account after the toilet is checked and geo-tagged. Some states add more money from their own funds.",
    ],
    hi: [
      "स्वच्छ भारत मिशन (ग्रामीण) में जिन गाँव के परिवारों के घर में शौचालय नहीं है, उन्हें घर में शौचालय बनाने के लिए पैसा मिलता है। इसे व्यक्तिगत घरेलू शौचालय (IHHL) कहते हैं। इसे जल शक्ति मंत्रालय का पेयजल और स्वच्छता विभाग राज्य सरकारों और ग्राम पंचायतों के ज़रिए चलाता है।",
      "मिशन का दूसरा चरण अप्रैल 2020 में शुरू हुआ। इसमें गाँवों को खुले में शौच से मुक्त बनाए रखने और ठोस व तरल कचरे के प्रबंधन पर ज़ोर है। जिन नए या छूटे हुए परिवारों के पास अब भी शौचालय नहीं है, उन्हें यह राशि मिल सकती है।",
      "शौचालय बनने और उसकी जाँच व जियो-टैगिंग के बाद ₹12,000 आपके बैंक खाते में आते हैं। कुछ राज्य अपनी ओर से ज़्यादा पैसा भी देते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹12,000 per household to build a toilet (central and state share together).",
      "Money paid directly into your bank account after the toilet is built and verified.",
      "Some states give a higher amount from their own funds.",
    ],
    hi: [
      "शौचालय बनाने के लिए हर परिवार को ₹12,000 (केंद्र और राज्य का हिस्सा मिलाकर)।",
      "शौचालय बनने और जाँच के बाद पैसा सीधे आपके बैंक खाते में।",
      "कुछ राज्य अपनी ओर से ज़्यादा राशि देते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Household lives in a rural area and does not have a toilet.",
      "Household is BPL, or is an identified APL household: SC/ST, small or marginal farmer, landless labourer with a homestead, family with a person with disability, or a woman-headed family.",
      "Household has not received money for a toilet under any other government programme before.",
    ],
    hi: [
      "परिवार गाँव में रहता है और घर में शौचालय नहीं है।",
      "परिवार BPL है, या चिह्नित APL परिवार है: SC/ST, छोटे या सीमांत किसान, घर की ज़मीन वाले भूमिहीन मज़दूर, दिव्यांग सदस्य वाला परिवार, या महिला मुखिया वाला परिवार।",
      "परिवार को पहले किसी और सरकारी योजना में शौचालय के लिए पैसा नहीं मिला है।",
    ],
  },
  exclusions: {
    en: [
      "Households that already have a toilet.",
      "Households that already got toilet money under SBM or any other government scheme.",
      "Households in urban areas (they are covered by Swachh Bharat Mission – Urban).",
    ],
    hi: [
      "जिन परिवारों के घर में पहले से शौचालय है।",
      "जिन परिवारों को SBM या किसी और सरकारी योजना में शौचालय का पैसा मिल चुका है।",
      "शहरी क्षेत्रों के परिवार (उनके लिए स्वच्छ भारत मिशन – शहरी है)।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the SBM-G website (swachhbharatmission.ddws.gov.in) and under 'Citizen Corner' choose 'Form for IHHL'.",
        "Register with your mobile number, then fill in your household, Aadhaar and bank details.",
        "Submit the form. The block or district office verifies it, and you can track the status online.",
      ],
      hi: [
        "SBM-G वेबसाइट (swachhbharatmission.ddws.gov.in) पर जाएँ और 'Citizen Corner' में 'Form for IHHL' चुनें।",
        "मोबाइल नंबर से पंजीकरण करें, फिर परिवार, आधार और बैंक की जानकारी भरें।",
        "फ़ॉर्म जमा करें। ब्लॉक या ज़िला कार्यालय इसकी जाँच करता है, और आप स्थिति ऑनलाइन देख सकते हैं।",
      ],
    },
    offline: {
      en: [
        "Go to your Gram Panchayat office or the block office.",
        "Fill in the IHHL application form and attach copies of your documents.",
        "After approval, build the toilet; the amount is paid once it is inspected and photographed.",
      ],
      hi: [
        "अपनी ग्राम पंचायत या ब्लॉक कार्यालय जाएँ।",
        "IHHL आवेदन फ़ॉर्म भरें और दस्तावेज़ों की कॉपी लगाएँ।",
        "मंज़ूरी के बाद शौचालय बनवाएँ; जाँच और फ़ोटो के बाद राशि मिलती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Bank account passbook", "BPL card or proof of eligible category (caste, disability, land or woman-headed household)", "Mobile number", "Passport-size photo"],
    hi: ["आधार कार्ड", "बैंक खाते की पासबुक", "BPL कार्ड या पात्र समूह का सबूत (जाति, दिव्यांगता, ज़मीन या महिला मुखिया परिवार)", "मोबाइल नंबर", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Do I get the money before building the toilet?", hi: "क्या शौचालय बनाने से पहले पैसा मिलता है?" },
      a: {
        en: "Usually no. The incentive is paid after the toilet is built and checked. Ask your Gram Panchayat if your state allows any advance or helps with materials.",
        hi: "आमतौर पर नहीं। शौचालय बनने और जाँच के बाद राशि मिलती है। अपनी ग्राम पंचायत से पूछें कि क्या आपका राज्य कोई अग्रिम देता है या सामान में मदद करता है।",
      },
    },
    {
      q: { en: "We are APL but a woman heads our family. Are we eligible?", hi: "हम APL हैं पर परिवार की मुखिया महिला है। क्या हम पात्र हैं?" },
      a: {
        en: "Yes. Woman-headed households are one of the identified APL groups that can get the incentive, as long as you don't already have a toilet.",
        hi: "हाँ। महिला मुखिया वाले परिवार उन चिह्नित APL समूहों में हैं जिन्हें यह राशि मिल सकती है, बशर्ते आपके घर में पहले से शौचालय न हो।",
      },
    },
  ],

  officialUrl: "https://swachhbharatmission.ddws.gov.in/",
  sources: [
    "https://swachhbharatmission.ddws.gov.in/",
    "https://swachhbharatmission.ddws.gov.in/faq",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1603628",
    "https://eparlib.sansad.in/bitstream/123456789/3020164/1/18_Water_Resources_10.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
