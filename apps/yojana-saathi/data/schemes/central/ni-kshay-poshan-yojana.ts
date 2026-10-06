import { everyone } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ni-kshay-poshan-yojana",
  name: { en: "Ni-kshay Poshan Yojana", hi: "नि-क्षय पोषण योजना" },
  aka: ["NPY", "TB nutrition support", "Nikshay"],
  shortDescription: {
    en: "₹1,000 a month into the bank account of every notified TB patient for the whole treatment period, to help pay for better food during recovery.",
    hi: "हर दर्ज टीबी मरीज़ के बैंक खाते में पूरे इलाज के दौरान हर महीने ₹1,000, ताकि ठीक होने तक अच्छे खाने का ख़र्च निकल सके।",
  },
  level: "central",
  ministry: "health-family-welfare",
  categories: ["health"],
  tags: ["tb", "tuberculosis", "nutrition", "dbt", "nikshay", "patient support"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "health",
  eligibility: everyone(),

  details: {
    en: [
      "Ni-kshay Poshan Yojana gives cash to people being treated for tuberculosis (TB), because good nutrition helps patients recover and finish treatment. It is part of the National TB Elimination Programme of the Ministry of Health and Family Welfare.",
      "Since November 2024 the amount is ₹1,000 a month (up from ₹500), paid for as long as treatment lasts, so most patients get ₹3,000 to ₹6,000 in total. Money goes directly to the patient's bank account.",
      "This only applies if you or a family member has TB. Your TB case must be notified on the Ni-kshay portal, which your doctor or health centre does when treatment starts, whether at a government or private facility.",
    ],
    hi: [
      "नि-क्षय पोषण योजना टीबी (क्षय रोग) का इलाज करा रहे लोगों को नकद मदद देती है, क्योंकि अच्छा खाना मरीज़ को ठीक होने और इलाज पूरा करने में मदद करता है। यह स्वास्थ्य एवं परिवार कल्याण मंत्रालय के राष्ट्रीय टीबी उन्मूलन कार्यक्रम का हिस्सा है।",
      "नवंबर 2024 से राशि ₹1,000 प्रति माह है (पहले ₹500 थी), जो इलाज चलने तक मिलती है, इसलिए ज़्यादातर मरीज़ों को कुल ₹3,000 से ₹6,000 मिलते हैं। पैसा सीधे मरीज़ के बैंक खाते में जाता है।",
      "यह तभी लागू है जब आपको या परिवार में किसी को टीबी हो। आपका टीबी केस नि-क्षय पोर्टल पर दर्ज होना चाहिए, जो सरकारी या निजी, किसी भी जगह इलाज शुरू होने पर डॉक्टर या स्वास्थ्य केंद्र करता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 a month for the full duration of TB treatment.",
      "Usually ₹3,000 to ₹6,000 in total, depending on how long treatment lasts.",
      "Paid by Direct Benefit Transfer to the patient's bank account.",
    ],
    hi: [
      "टीबी के पूरे इलाज के दौरान हर महीने ₹1,000।",
      "इलाज की अवधि के हिसाब से आमतौर पर कुल ₹3,000 से ₹6,000।",
      "पैसा DBT से सीधे मरीज़ के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Any person diagnosed with TB and notified on the Ni-kshay portal, whether treated in a government or private facility.",
      "A bank account (preferably Aadhaar-linked) in the patient's name, or a family member's account where allowed.",
    ],
    hi: [
      "टीबी से पीड़ित कोई भी व्यक्ति जिसका केस नि-क्षय पोर्टल पर दर्ज है, चाहे इलाज सरकारी जगह हो या निजी।",
      "मरीज़ के नाम पर बैंक खाता (बेहतर हो आधार से जुड़ा), या जहाँ अनुमति हो वहाँ परिवार के सदस्य का खाता।",
    ],
  },
  exclusions: {
    en: [
      "Only for people currently on TB treatment. Other family members are not paid separately.",
      "Payments stop when the treatment ends.",
    ],
    hi: [
      "सिर्फ़ उन लोगों के लिए जिनका अभी टीबी का इलाज चल रहा है। परिवार के बाकी सदस्यों को अलग से पैसा नहीं मिलता।",
      "इलाज ख़त्म होने पर भुगतान बंद हो जाता है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Start TB treatment at a government health centre or a private doctor, who will notify your case on Ni-kshay.",
        "Give your bank account details and Aadhaar to the TB staff (STS/TB health visitor) or your doctor.",
        "Payments are released monthly once your details are verified. Call 1800-11-6666 for help.",
      ],
      hi: [
        "सरकारी स्वास्थ्य केंद्र या निजी डॉक्टर से टीबी का इलाज शुरू कराएँ, जो नि-क्षय पर आपका केस दर्ज करेंगे।",
        "अपना बैंक खाता विवरण और आधार टीबी कर्मचारी (STS/TB हेल्थ विज़िटर) या डॉक्टर को दें।",
        "जानकारी की जाँच के बाद हर महीने पैसा आता है। मदद के लिए 1800-11-6666 पर कॉल करें।",
      ],
    },
  },
  documents: {
    en: ["Bank account details (passbook or cancelled cheque)", "Aadhaar card", "TB diagnosis / treatment record"],
    hi: ["बैंक खाते का विवरण (पासबुक या रद्द चेक)", "आधार कार्ड", "टीबी जाँच / इलाज का रिकॉर्ड"],
  },
  faqs: [
    {
      q: { en: "I am treated by a private doctor. Can I still get the money?", hi: "मेरा इलाज निजी डॉक्टर कर रहे हैं। क्या फिर भी पैसा मिलेगा?" },
      a: {
        en: "Yes. Private patients qualify too, as long as the doctor notifies your case on Ni-kshay.",
        hi: "हाँ। निजी इलाज वाले मरीज़ भी पात्र हैं, बस डॉक्टर नि-क्षय पर आपका केस दर्ज करें।",
      },
    },
    {
      q: { en: "Is there other help for TB patients?", hi: "क्या टीबी मरीज़ों के लिए और कोई मदद है?" },
      a: {
        en: "Yes. TB tests and medicines are free at government centres, and under PM TB Mukt Bharat Abhiyaan volunteers called Ni-kshay Mitras give food baskets to patients.",
        hi: "हाँ। सरकारी केंद्रों में टीबी की जाँच और दवाएँ मुफ़्त हैं, और प्रधानमंत्री टीबी मुक्त भारत अभियान में नि-क्षय मित्र मरीज़ों को राशन किट देते हैं।",
      },
    },
  ],

  officialUrl: "https://nikshay.in/",
  sources: [
    "https://mohfw.gov.in/press-info/7783",
    "https://tbcindia.mohfw.gov.in/",
    "https://www.business-standard.com/health/govt-approves-rs-1-040-crore-boost-for-tb-patient-nutritional-support-124100701158_1.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
