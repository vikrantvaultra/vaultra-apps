import { all, isTrue, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-old-age-pension",
  overlapGroup: "old-age-pension",
  name: { en: "Tamil Nadu Old Age Pension", hi: "तमिलनाडु वृद्धावस्था पेंशन" },
  aka: ["OAP Tamil Nadu", "Muthiyor Oyvoothiyam", "IGNOAPS Tamil Nadu", "TN social security pension"],
  shortDescription: {
    en: "Destitute senior citizens aged 60 and above from poor families in Tamil Nadu get a pension of ₹1,200 every month, mostly paid by the state.",
    hi: "तमिलनाडु के गरीब परिवारों के 60 साल या उससे ज़्यादा उम्र के बेसहारा बुज़ुर्गों को हर महीने ₹1,200 पेंशन, जिसका ज़्यादातर पैसा राज्य सरकार देती है।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Revenue and Disaster Management Department (Commissionerate of Revenue Administration), Government of Tamil Nadu",
    hi: "राजस्व एवं आपदा प्रबंधन विभाग (राजस्व प्रशासन आयुक्तालय), तमिलनाडु सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "pension", "elderly", "destitute", "1200 rupees"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1200, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("tamil-nadu"),
    minAge(60),
    labelled(isTrue("bpl"), { en: "Your family is below the poverty line (BPL)", hi: "आपका परिवार गरीबी रेखा से नीचे (BPL) है" }),
  ),

  details: {
    en: [
      "Tamil Nadu pays a monthly pension of ₹1,200 to destitute elderly people from poor families. It runs under the central Indira Gandhi National Old Age Pension Scheme, but the state adds most of the money: for people aged 60 to 79 the Centre pays ₹200 and the state ₹1,000; from age 80 the Centre pays ₹500 and the state ₹700.",
      "The scheme is handled by the Revenue Department through the Special Tahsildar (Social Security Scheme) in each taluk. Since September 2024 the pension is paid centrally, through banks or electronic money order.",
      "The government elected in 2026 has promised a higher pension for the elderly. Until a new order is issued, the amount stays at ₹1,200 a month.",
    ],
    hi: [
      "तमिलनाडु गरीब परिवारों के बेसहारा बुज़ुर्गों को हर महीने ₹1,200 पेंशन देता है। यह केंद्र की इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना के तहत चलती है, पर ज़्यादातर पैसा राज्य देता है: 60 से 79 साल वालों के लिए केंद्र ₹200 और राज्य ₹1,000 देता है; 80 साल से ऊपर केंद्र ₹500 और राज्य ₹700 देता है।",
      "यह योजना राजस्व विभाग हर तालुका में विशेष तहसीलदार (सामाजिक सुरक्षा योजना) के ज़रिए चलाता है। सितंबर 2024 से पेंशन एक जगह से, बैंक या इलेक्ट्रॉनिक मनी ऑर्डर से भेजी जाती है।",
      "2026 में चुनी गई सरकार ने बुज़ुर्गों की पेंशन बढ़ाने का वादा किया है। नया आदेश आने तक राशि ₹1,200 महीना ही है।",
    ],
  },
  benefits: {
    en: [
      "₹1,200 every month for life.",
      "Paid into your bank account, or by electronic money order.",
      "A free dhoti (for men) or saree (for women) twice a year, at Pongal and Deepavali.",
    ],
    hi: [
      "जीवन भर हर महीने ₹1,200।",
      "पैसा आपके बैंक खाते में या इलेक्ट्रॉनिक मनी ऑर्डर से आता है।",
      "साल में दो बार, पोंगल और दीपावली पर, मुफ़्त धोती (पुरुषों को) या साड़ी (महिलाओं को)।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Tamil Nadu and are 60 years or older.",
      "You are destitute, meaning you have no regular means of support.",
      "Your family is below the poverty line.",
      "If you own any property, its value is within the limit set by the government (a free house given under a government scheme is not counted).",
    ],
    hi: [
      "आप तमिलनाडु में रहते हैं और आपकी उम्र 60 साल या उससे ज़्यादा है।",
      "आप बेसहारा हैं, यानी आपके पास गुज़ारे का कोई नियमित सहारा नहीं है।",
      "आपका परिवार गरीबी रेखा से नीचे है।",
      "अगर आपके पास कोई संपत्ति है तो उसकी कीमत सरकार की तय सीमा के अंदर हो (सरकारी योजना में मिला मुफ़्त घर नहीं गिना जाता)।",
    ],
  },
  exclusions: {
    en: [
      "People below 60 years (separate pensions exist for widows, deserted women, unmarried women over 50 and persons with disabilities).",
      "People who are not destitute or not from a poor family.",
      "You can get only one social security pension at a time.",
    ],
    hi: [
      "60 साल से कम उम्र के लोग (विधवाओं, परित्यक्त महिलाओं, 50 साल से ऊपर की अविवाहित महिलाओं और दिव्यांगों के लिए अलग पेंशन हैं)।",
      "जो बेसहारा नहीं हैं या गरीब परिवार से नहीं हैं।",
      "एक समय में सिर्फ़ एक सामाजिक सुरक्षा पेंशन मिलती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Visit an e-Sevai centre, or apply on the TN e-Sevai portal (tnesevai.tn.gov.in) under social security pensions.",
        "Fill in the form and upload your Aadhaar, age proof, ration card and bank details.",
        "Revenue officials verify the application, and the Special Tahsildar (Social Security Scheme) sanctions the pension. Applications are meant to be decided within 30 days.",
      ],
      hi: [
        "किसी ई-सेवै केंद्र पर जाएँ, या TN ई-सेवै पोर्टल (tnesevai.tn.gov.in) पर सामाजिक सुरक्षा पेंशन में आवेदन करें।",
        "फ़ॉर्म भरें और आधार, उम्र का सबूत, राशन कार्ड और बैंक विवरण अपलोड करें।",
        "राजस्व अधिकारी आवेदन की जाँच करते हैं और विशेष तहसीलदार (सामाजिक सुरक्षा योजना) पेंशन मंज़ूर करते हैं। आवेदन पर 30 दिन में फ़ैसला होना चाहिए।",
      ],
    },
    offline: {
      en: [
        "Go to your Village Administrative Officer (VAO) or the taluk office.",
        "Ask for the old age pension form, fill it in and attach copies of your documents.",
        "Keep the acknowledgement to track your application.",
      ],
      hi: [
        "अपने ग्राम प्रशासनिक अधिकारी (VAO) या तालुका कार्यालय जाएँ।",
        "वृद्धावस्था पेंशन का फ़ॉर्म लें, भरें और दस्तावेज़ों की कॉपी लगाएँ।",
        "आवेदन की स्थिति जानने के लिए पावती संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Age proof (birth certificate, school certificate or a medical age certificate)", "Ration card / smart card", "Bank passbook", "Passport-size photo"],
    hi: ["आधार कार्ड", "उम्र का सबूत (जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या डॉक्टर का उम्र प्रमाण पत्र)", "राशन कार्ड / स्मार्ट कार्ड", "बैंक पासबुक", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Has the pension been raised to ₹3,000?", hi: "क्या पेंशन बढ़कर ₹3,000 हो गई है?" },
      a: {
        en: "Not yet. A higher pension was an election promise, but no order raising it had been issued as of October 2026. The amount paid is ₹1,200 a month.",
        hi: "अभी नहीं। ज़्यादा पेंशन चुनावी वादा था, पर अक्टूबर 2026 तक इसे बढ़ाने का कोई आदेश जारी नहीं हुआ है। अभी हर महीने ₹1,200 मिलते हैं।",
      },
    },
    {
      q: { en: "My pension has stopped. Where do I complain?", hi: "मेरी पेंशन रुक गई है। शिकायत कहाँ करूँ?" },
      a: {
        en: "Contact the Special Tahsildar (Social Security Scheme) at your taluk office. Check that your bank account is active and linked to Aadhaar.",
        hi: "अपने तालुका कार्यालय में विशेष तहसीलदार (सामाजिक सुरक्षा योजना) से मिलें। यह भी देखें कि आपका बैंक खाता चालू है और आधार से जुड़ा है।",
      },
    },
  ],

  officialUrl: "https://www.cra.tn.gov.in/about_schemes_t.php",
  sources: [
    "https://www.cra.tn.gov.in/about_schemes_t.php",
    "https://www.cra.tn.gov.in/pensioners_t.php",
    "https://www.tnesevai.tn.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
