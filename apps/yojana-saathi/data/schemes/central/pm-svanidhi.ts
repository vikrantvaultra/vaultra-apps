import { all, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-svanidhi",
  name: { en: "PM Street Vendor's AtmaNirbhar Nidhi", hi: "पीएम स्ट्रीट वेंडर्स आत्मनिर्भर निधि" },
  aka: ["PM SVANidhi", "SVANidhi"],
  shortDescription: {
    en: "Street vendors get collateral-free working-capital loans of ₹15,000, then ₹25,000, then ₹50,000, with a 7% interest subsidy and cashback for digital payments.",
    hi: "रेहड़ी-पटरी वालों को बिना गारंटी ₹15,000, फिर ₹25,000, फिर ₹50,000 का कामकाजी लोन, 7% ब्याज सब्सिडी और डिजिटल भुगतान पर कैशबैक।",
  },
  level: "central",
  ministry: "housing-urban-affairs",
  categories: ["business", "social-welfare"],
  tags: ["street vendor", "loan", "rehri", "hawker", "working capital", "svanidhi"],
  benefitType: "loan",
  isDBT: true,
  value: { amount: 50_000, period: "one-time", kind: "loan" },
  kundliHouse: "business",
  eligibility: all(when("occupation", "in", ["street-vendor"])),

  details: {
    en: [
      "PM SVANidhi gives small, collateral-free loans to street vendors so they can buy stock and keep their business running. It is run by the Ministry of Housing and Urban Affairs through urban local bodies and banks.",
      "Loans come in three steps. The first loan is up to ₹15,000. Repay it and you can take a second loan of up to ₹25,000, and after that a third of up to ₹50,000. Vendors who repay the second loan on time can also get a UPI-linked RuPay credit card.",
      "The scheme was restructured in August 2025: the first two loan amounts were raised and the lending period was extended to 31 March 2030. Vendors in census towns and peri-urban areas are also covered.",
    ],
    hi: [
      "पीएम स्वनिधि रेहड़ी-पटरी वालों को बिना गारंटी छोटे लोन देती है ताकि वे माल ख़रीद सकें और अपना काम चलाते रहें। इसे आवासन और शहरी कार्य मंत्रालय नगर निकायों और बैंकों के ज़रिए चलाता है।",
      "लोन तीन चरणों में मिलता है। पहला लोन ₹15,000 तक का होता है। इसे चुकाने पर ₹25,000 तक का दूसरा लोन, और उसके बाद ₹50,000 तक का तीसरा लोन मिल सकता है। दूसरा लोन समय पर चुकाने वालों को UPI से जुड़ा RuPay क्रेडिट कार्ड भी मिल सकता है।",
      "अगस्त 2025 में योजना में बदलाव हुआ: पहले दो लोन की राशि बढ़ाई गई और लोन देने की अवधि 31 मार्च 2030 तक बढ़ा दी गई। जनगणना कस्बों और शहर से सटे इलाक़ों के विक्रेता भी इसमें शामिल हैं।",
    ],
  },
  benefits: {
    en: [
      "First loan up to ₹15,000, second up to ₹25,000, third up to ₹50,000, all without collateral.",
      "7% yearly interest subsidy credited to your bank account when you repay on time.",
      "Cashback of up to ₹1,600 for using digital payments for sales and wholesale purchases.",
      "UPI-linked RuPay credit card for vendors who repay the second loan on time.",
      "No penalty for repaying early.",
    ],
    hi: [
      "पहला लोन ₹15,000 तक, दूसरा ₹25,000 तक, तीसरा ₹50,000 तक, सब बिना गारंटी।",
      "समय पर चुकाने पर 7% सालाना ब्याज सब्सिडी आपके बैंक खाते में आती है।",
      "बिक्री और थोक ख़रीद में डिजिटल भुगतान करने पर ₹1,600 तक कैशबैक।",
      "दूसरा लोन समय पर चुकाने वालों को UPI से जुड़ा RuPay क्रेडिट कार्ड।",
      "जल्दी चुकाने पर कोई जुर्माना नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "You sell goods or services on the street, footpath or in a market (vegetables, fruits, snacks, tea, clothes, repairs, barbers and similar).",
      "You hold a Certificate of Vending or ID card from your urban local body, or are in its survey list, or have a Letter of Recommendation from the ULB or town vending committee.",
      "Vendors in census towns and peri-urban or rural areas who sell in a town or city can also apply with a Letter of Recommendation.",
    ],
    hi: [
      "आप सड़क, फ़ुटपाथ या बाज़ार में सामान या सेवा बेचते हैं (सब्ज़ी, फल, नाश्ता, चाय, कपड़े, मरम्मत, नाई आदि)।",
      "आपके पास नगर निकाय का वेंडिंग प्रमाण पत्र या पहचान पत्र हो, या आपका नाम उसकी सर्वे सूची में हो, या नगर निकाय या टाउन वेंडिंग कमेटी का सिफ़ारिशी पत्र हो।",
      "जनगणना कस्बों और शहर से सटे या ग्रामीण इलाक़ों के विक्रेता जो किसी शहर या कस्बे में बेचते हैं, वे भी सिफ़ारिशी पत्र के साथ आवेदन कर सकते हैं।",
    ],
  },
  exclusions: {
    en: [
      "Shop owners with a fixed shop are not covered: the scheme is for street vendors.",
      "The second and third loans are given only after the earlier loan is fully repaid.",
    ],
    hi: [
      "पक्की दुकान वाले दुकानदार इसमें शामिल नहीं हैं: यह योजना रेहड़ी-पटरी वालों के लिए है।",
      "दूसरा और तीसरा लोन पिछला लोन पूरा चुकाने के बाद ही मिलता है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the PM SVANidhi portal (pmsvanidhi.mohua.gov.in) and choose 'Apply for Loan'.",
        "Verify your mobile number (linked to Aadhaar) with an OTP and fill in the form.",
        "Pick a lender and submit. The bank processes the loan and pays it into your account.",
      ],
      hi: [
        "पीएम स्वनिधि पोर्टल (pmsvanidhi.mohua.gov.in) पर जाकर 'लोन के लिए आवेदन' चुनें।",
        "आधार से जुड़े मोबाइल नंबर को OTP से सत्यापित करें और फ़ॉर्म भरें।",
        "बैंक चुनकर जमा करें। बैंक लोन मंज़ूर करके पैसा आपके खाते में भेजता है।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest Common Service Centre (CSC), urban local body office or a bank branch.",
        "Take your Aadhaar, vending certificate or ID card, and bank details.",
        "Staff will fill in the application for you on the portal.",
      ],
      hi: [
        "नज़दीकी कॉमन सर्विस सेंटर (CSC), नगर निकाय दफ़्तर या बैंक शाखा जाएँ।",
        "आधार, वेंडिंग प्रमाण पत्र या पहचान पत्र और बैंक का विवरण साथ ले जाएँ।",
        "वहाँ के कर्मचारी पोर्टल पर आपका आवेदन भर देंगे।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card with linked mobile number",
      "Certificate of Vending, vendor ID card or Letter of Recommendation",
      "Bank account details",
    ],
    hi: [
      "मोबाइल नंबर से जुड़ा आधार कार्ड",
      "वेंडिंग प्रमाण पत्र, विक्रेता पहचान पत्र या सिफ़ारिशी पत्र",
      "बैंक खाते का विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "I don't have a vending certificate. Can I still apply?", hi: "मेरे पास वेंडिंग प्रमाण पत्र नहीं है। क्या फिर भी आवेदन कर सकता/सकती हूँ?" },
      a: {
        en: "Yes. You can request a Letter of Recommendation from your urban local body through the portal, and apply with that.",
        hi: "हाँ। आप पोर्टल के ज़रिए अपने नगर निकाय से सिफ़ारिशी पत्र माँग सकते हैं और उसके साथ आवेदन कर सकते हैं।",
      },
    },
    {
      q: { en: "How does the interest subsidy work?", hi: "ब्याज सब्सिडी कैसे मिलती है?" },
      a: {
        en: "You pay your EMIs as usual. The 7% interest subsidy is credited to your bank account every quarter as long as you repay regularly.",
        hi: "आप सामान्य तरह से किस्तें भरते हैं। नियमित भुगतान करते रहने पर 7% ब्याज सब्सिडी हर तिमाही आपके बैंक खाते में आ जाती है।",
      },
    },
  ],

  officialUrl: "https://pmsvanidhi.mohua.gov.in/",
  sources: [
    "https://pmsvanidhi.mohua.gov.in/",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2161157&reg=3&lang=2",
    "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=156604&ModuleId=3&reg=3&lang=1",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
