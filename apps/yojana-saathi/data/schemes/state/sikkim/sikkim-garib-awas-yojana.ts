import { all, isFalse, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "sikkim-garib-awas-yojana",
  tier: "compact",
  name: { en: "Sikkim Garib Awas Yojana", hi: "सिक्किम गरीब आवास योजना" },
  aka: ["SGAY", "Sikkim Garib Aawas Yojana"],
  shortDescription: {
    en: "Poor families in Sikkim without a proper house get a free, fully built RCC house with two bedrooms, kitchen, toilet, furniture and a television.",
    hi: "सिक्किम के बिना पक्के घर वाले गरीब परिवारों को मुफ़्त में पूरा बना हुआ RCC घर मिलता है, जिसमें दो बेडरूम, रसोई, शौचालय, फ़र्नीचर और टीवी होता है।",
  },
  level: "state",
  state: "sikkim",
  department: {
    en: "Rural Development Department, Government of Sikkim",
    hi: "ग्रामीण विकास विभाग, सिक्किम सरकार",
  },
  categories: ["housing", "social-welfare"],
  tags: ["housing", "free house", "pucca house", "poor", "awas", "sikkim"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "home",
  eligibility: all(
    residentOf("sikkim"),
    labelled(isFalse("pucca"), { en: "Your family does not own a pucca house", hi: "आपके परिवार के पास पक्का घर नहीं है" }),
  ),

  details: {
    en: [
      "Sikkim Garib Awas Yojana is the state's own housing scheme for poor families, launched by the present government with the aim of making Sikkim free of kutcha houses. It is run through the Rural Development Department and Block Administrative Centres.",
      "Each house is a single-storey RCC building with a living room, two bedrooms, a kitchen and a toilet, handed over with furniture and a television. The state puts the cost at about ₹17.5 lakh per house. Keys to new houses were still being handed over in 2026.",
    ],
    hi: [
      "सिक्किम गरीब आवास योजना गरीब परिवारों के लिए राज्य की अपनी आवास योजना है, जिसे मौजूदा सरकार ने सिक्किम को कच्चे घरों से मुक्त करने के लक्ष्य से शुरू किया। इसे ग्रामीण विकास विभाग और ब्लॉक प्रशासनिक केंद्र चलाते हैं।",
      "हर घर एक मंज़िला RCC इमारत है जिसमें बैठक, दो बेडरूम, रसोई और शौचालय होते हैं, और यह फ़र्नीचर व टीवी के साथ सौंपा जाता है। राज्य के अनुसार एक घर की लागत लगभग ₹17.5 लाख है। 2026 में भी नए घरों की चाबियाँ दी जा रही थीं।",
    ],
  },
  benefits: {
    en: [
      "A free, fully built single-storey RCC house with two bedrooms, a living room, a kitchen and a toilet.",
      "Furniture and a television are provided with the house.",
    ],
    hi: [
      "मुफ़्त, पूरा बना हुआ एक मंज़िला RCC घर, जिसमें दो बेडरूम, बैठक, रसोई और शौचालय हैं।",
      "घर के साथ फ़र्नीचर और टीवी भी दिया जाता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Poor and deserving families of Sikkim who do not have a safe, permanent house.",
      "Beneficiaries are selected constituency-wise through the Block Administrative Centre; places are limited.",
    ],
    hi: [
      "सिक्किम के गरीब और ज़रूरतमंद परिवार जिनके पास सुरक्षित, पक्का घर नहीं है।",
      "लाभार्थियों का चयन ब्लॉक प्रशासनिक केंद्र के ज़रिए विधानसभा क्षेत्र के हिसाब से होता है; सीटें सीमित हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your Gram Panchayat or the Block Development Officer at your Block Administrative Centre (BAC).",
        "If selected, you receive an allotment order, and the house is built and handed over to you.",
      ],
      hi: [
        "अपनी ग्राम पंचायत या ब्लॉक प्रशासनिक केंद्र (BAC) के खंड विकास अधिकारी से संपर्क करें।",
        "चयन होने पर आपको आवंटन आदेश मिलता है, फिर घर बनाकर आपको सौंपा जाता है।",
      ],
    },
  },

  officialUrl: "https://www.sikkim.gov.in/scheme/scheme-info/30103",
  sources: [
    "https://www.sikkim.gov.in/scheme/schemecontent?schemeid=30103",
    "https://ipr.sikkim.gov.in/Home/KeyAchievements",
    "https://ipr.sikkim.gov.in/Home/News?slug=fifty-two-beneficiaries-of-yangthang-constituency-receives-house-keys-under-sikkim-garib-awas-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "active",
};

export default scheme;
