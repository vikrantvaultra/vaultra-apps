import { all, when, labelled, notTaxPayer } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-kisan",
  name: { en: "PM Kisan Samman Nidhi", hi: "प्रधानमंत्री किसान सम्मान निधि" },
  aka: ["PM-KISAN", "PM Kisan", "Kisan Samman Nidhi"],
  shortDescription: {
    en: "Get ₹6,000 a year straight into your bank account, paid in three instalments of ₹2,000, if your family owns farmland.",
    hi: "अगर आपके परिवार के नाम खेती की ज़मीन है, तो हर साल ₹6,000 सीधे बैंक खाते में पाएँ, ₹2,000 की तीन किस्तों में।",
  },
  level: "central",
  ministry: "agriculture-farmers-welfare",
  categories: ["agriculture"],
  tags: ["farmer", "kisan", "income support", "6000", "installment", "dbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 6000, period: "yearly", kind: "cash" },
  kundliHouse: "farming",
  eligibility: all(
    when("occupation", "in", ["farmer"], { en: "Your family farms land it owns", hi: "आपका परिवार अपनी ज़मीन पर खेती करता है" }),
    labelled(notTaxPayer(), { en: "No one in the family paid income tax last year", hi: "पिछले साल परिवार में किसी ने आयकर नहीं भरा" }),
  ),

  details: {
    en: [
      "PM-KISAN gives farming families a fixed amount of money every year to help with seeds, fertiliser and other farm and household costs.",
      "The scheme is fully funded by the Government of India and run by the Ministry of Agriculture & Farmers Welfare. State governments check who is eligible using land records, and the Centre sends the money directly to the farmer's Aadhaar-linked bank account.",
      "A 'family' here means husband, wife and minor children. The family gets one benefit together, no matter how many members own land. Completing eKYC is compulsory to keep getting instalments.",
    ],
    hi: [
      "PM-KISAN खेती करने वाले परिवारों को हर साल तय रकम देती है, ताकि बीज, खाद और घर-खेती के दूसरे खर्च में मदद मिले।",
      "यह योजना पूरी तरह भारत सरकार के पैसे से चलती है और कृषि एवं किसान कल्याण मंत्रालय इसे चलाता है। राज्य सरकारें ज़मीन के रिकॉर्ड से पात्रता जाँचती हैं और केंद्र पैसा सीधे किसान के आधार से जुड़े बैंक खाते में भेजता है।",
      "यहाँ 'परिवार' का मतलब पति, पत्नी और नाबालिग बच्चे हैं। परिवार में कितने भी लोगों के नाम ज़मीन हो, लाभ एक ही मिलता है। किस्तें मिलती रहें, इसके लिए eKYC पूरा करना ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "₹6,000 a year per eligible farming family.",
      "Paid in three instalments of ₹2,000 each, roughly every four months.",
      "Money goes straight to your Aadhaar-seeded bank account, with no middleman.",
      "PM-KISAN beneficiaries can get a Kisan Credit Card through a simple one-page form at their bank.",
    ],
    hi: [
      "हर पात्र किसान परिवार को साल में ₹6,000।",
      "₹2,000 की तीन किस्तों में, लगभग हर चार महीने पर।",
      "पैसा बिना किसी बिचौलिये के सीधे आधार से जुड़े बैंक खाते में आता है।",
      "PM-KISAN लाभार्थी बैंक में एक पन्ने के आसान फ़ॉर्म से किसान क्रेडिट कार्ड ले सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family owns cultivable land that is recorded in your name in the state's land records.",
      "You have a bank account linked (seeded) with Aadhaar.",
      "You complete eKYC (OTP, fingerprint or face authentication).",
      "Your land details have been verified by the state government.",
    ],
    hi: [
      "आपके परिवार के पास खेती की ज़मीन है जो राज्य के भूमि रिकॉर्ड में आपके नाम दर्ज है।",
      "आपका बैंक खाता आधार से जुड़ा (सीडेड) है।",
      "आपने eKYC पूरा किया है (OTP, अंगूठे या चेहरे से)।",
      "राज्य सरकार ने आपकी ज़मीन की जानकारी जाँच ली है।",
    ],
  },
  exclusions: {
    en: [
      "Institutional landholders (land owned by trusts, companies, institutions).",
      "Families where any member holds or has held a constitutional post, or is a current or former minister, MP, MLA, MLC, mayor or district panchayat chairperson.",
      "Families with a serving or retired central/state government or PSU employee (Multi Tasking Staff, Class IV and Group D employees are not excluded).",
      "Families with a retired pensioner getting ₹10,000 or more a month (again, except Multi Tasking Staff, Class IV and Group D).",
      "Families where anyone paid income tax in the last assessment year.",
      "Doctors, engineers, lawyers, chartered accountants and architects registered with their professional body and practising.",
    ],
    hi: [
      "संस्थागत ज़मीन मालिक (ट्रस्ट, कंपनी या संस्था के नाम की ज़मीन)।",
      "ऐसे परिवार जिनका कोई सदस्य संवैधानिक पद पर है या रहा है, या मौजूदा/पूर्व मंत्री, सांसद, विधायक, विधान परिषद सदस्य, महापौर या ज़िला पंचायत अध्यक्ष है।",
      "जिस परिवार में केंद्र/राज्य सरकार या सरकारी उपक्रम का मौजूदा या रिटायर्ड कर्मचारी हो (मल्टी टास्किंग स्टाफ़, चतुर्थ श्रेणी और ग्रुप D कर्मचारी इसमें शामिल नहीं)।",
      "जिस परिवार में किसी को ₹10,000 या उससे ज़्यादा मासिक पेंशन मिलती हो (मल्टी टास्किंग स्टाफ़, चतुर्थ श्रेणी और ग्रुप D को छोड़कर)।",
      "जिस परिवार में किसी ने पिछले आकलन वर्ष में आयकर भरा हो।",
      "पेशेवर संस्था में पंजीकृत और प्रैक्टिस करने वाले डॉक्टर, इंजीनियर, वकील, चार्टर्ड अकाउंटेंट और आर्किटेक्ट।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to pmkisan.gov.in and choose 'New Farmer Registration' under Farmers Corner.",
        "Enter your Aadhaar number, mobile number and state, and verify with OTP.",
        "Fill in your personal, bank and land details and upload land documents if asked. Some states also ask for your Farmer ID.",
        "Submit, then complete eKYC on the portal or the PM-KISAN app. Track approval under 'Know Your Status'.",
      ],
      hi: [
        "pmkisan.gov.in पर जाएँ और Farmers Corner में 'New Farmer Registration' चुनें।",
        "आधार नंबर, मोबाइल नंबर और राज्य डालें और OTP से पुष्टि करें।",
        "अपनी निजी, बैंक और ज़मीन की जानकारी भरें, और माँगने पर ज़मीन के कागज़ अपलोड करें। कुछ राज्य किसान ID (Farmer ID) भी माँगते हैं।",
        "फ़ॉर्म जमा करें, फिर पोर्टल या PM-KISAN ऐप पर eKYC पूरा करें। 'Know Your Status' में मंज़ूरी देखें।",
      ],
    },
    offline: {
      en: [
        "Visit your nearest Common Service Centre (CSC), or contact the local patwari, revenue officer or the PM-KISAN nodal officer of your state.",
        "Give your Aadhaar, bank passbook and land papers for registration.",
        "Complete biometric eKYC at the CSC if you can't do OTP eKYC.",
      ],
      hi: [
        "नज़दीकी जन सेवा केंद्र (CSC) जाएँ, या स्थानीय पटवारी, राजस्व अधिकारी या राज्य के PM-KISAN नोडल अधिकारी से संपर्क करें।",
        "पंजीकरण के लिए आधार, बैंक पासबुक और ज़मीन के कागज़ दें।",
        "अगर OTP से eKYC नहीं हो पा रहा, तो CSC पर अंगूठे से (बायोमेट्रिक) eKYC कराएँ।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Bank account details (Aadhaar-seeded)", "Land ownership records (khatauni/record of rights)", "Mobile number linked to Aadhaar"],
    hi: ["आधार कार्ड", "बैंक खाते का विवरण (आधार से जुड़ा)", "ज़मीन के मालिकाना कागज़ (खतौनी/अधिकार अभिलेख)", "आधार से जुड़ा मोबाइल नंबर"],
  },
  faqs: [
    {
      q: { en: "My instalment has stopped. What should I check?", hi: "मेरी किस्त रुक गई है। क्या जाँचूँ?" },
      a: {
        en: "Check 'Know Your Status' on pmkisan.gov.in. The usual reasons are pending eKYC, a bank account not seeded with Aadhaar, or land records not verified by the state.",
        hi: "pmkisan.gov.in पर 'Know Your Status' देखें। आमतौर पर वजह होती है: eKYC बाकी होना, बैंक खाता आधार से न जुड़ा होना, या राज्य द्वारा ज़मीन के रिकॉर्ड की जाँच न होना।",
      },
    },
    {
      q: { en: "Can both husband and wife get PM-KISAN?", hi: "क्या पति और पत्नी दोनों को PM-KISAN मिल सकता है?" },
      a: {
        en: "No. The benefit is per family (husband, wife and minor children), so only one member gets it even if both own land.",
        hi: "नहीं। लाभ पूरे परिवार (पति, पत्नी और नाबालिग बच्चे) के लिए एक ही है, इसलिए दोनों के नाम ज़मीन हो तब भी एक ही सदस्य को मिलेगा।",
      },
    },
    {
      q: { en: "Can tenant farmers apply?", hi: "क्या बटाईदार या किराये पर खेती करने वाले किसान आवेदन कर सकते हैं?" },
      a: {
        en: "No. PM-KISAN is only for families whose name is on the land records as owners.",
        hi: "नहीं। PM-KISAN सिर्फ़ उन परिवारों के लिए है जिनका नाम ज़मीन के रिकॉर्ड में मालिक के रूप में दर्ज है।",
      },
    },
  ],

  officialUrl: "https://pmkisan.gov.in/",
  sources: [
    "https://pmkisan.gov.in/",
    "https://www.myscheme.gov.in/schemes/pm-kisan",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
