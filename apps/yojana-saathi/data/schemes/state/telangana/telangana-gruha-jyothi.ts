import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "telangana-gruha-jyothi",
  name: { en: "Gruha Jyothi (Telangana)", hi: "गृह ज्योति (तेलंगाना)" },
  aka: ["Gruha Jyothi", "Griha Jyoti Telangana", "200 units free electricity", "zero bill"],
  shortDescription: {
    en: "Telangana households with a white ration card that use up to 200 units of electricity a month get a zero electricity bill.",
    hi: "तेलंगाना के सफ़ेद राशन कार्ड वाले जिन घरों में हर महीने 200 यूनिट तक बिजली ख़र्च होती है, उनका बिजली बिल शून्य आता है।",
  },
  level: "state",
  state: "telangana",
  department: {
    en: "Energy Department (TGSPDCL and TGNPDCL), Government of Telangana",
    hi: "ऊर्जा विभाग (TGSPDCL और TGNPDCL), तेलंगाना सरकार",
  },
  categories: ["energy-savings", "social-welfare"],
  tags: ["free electricity", "200 units", "zero bill", "power", "white ration card", "telangana"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "energy-savings",
  eligibility: all(
    residentOf("telangana"),
    labelled(isTrue("bpl"), { en: "Family has a white ration card (Food Security Card)", hi: "परिवार के पास सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड) हो" }),
  ),

  details: {
    en: [
      "Gruha Jyothi is one of the Telangana government's six guarantees. It started in March 2024.",
      "If your home is eligible and uses 200 units or less in a month, the power company issues a 'zero' bill for that month. The state government pays the power companies for these bills.",
      "Over 53 lakh families were getting free power under the scheme by September 2026.",
    ],
    hi: [
      "गृह ज्योति तेलंगाना सरकार की छह गारंटियों में से एक है। यह मार्च 2024 में शुरू हुई।",
      "अगर आपका घर पात्र है और महीने में 200 यूनिट या उससे कम बिजली ख़र्च होती है, तो बिजली कंपनी उस महीने का 'शून्य' बिल देती है। इन बिलों का पैसा राज्य सरकार बिजली कंपनियों को देती है।",
      "सितंबर 2026 तक 53 लाख से ज़्यादा परिवारों को इस योजना से मुफ़्त बिजली मिल रही थी।",
    ],
  },
  benefits: {
    en: [
      "Zero electricity bill in any month your home uses 200 units or less.",
      "Above 200 units, the normal tariff applies.",
      "Applies to domestic (household) connections.",
    ],
    hi: [
      "जिस महीने घर में 200 यूनिट या उससे कम बिजली ख़र्च हो, उस महीने का बिल शून्य।",
      "200 यूनिट से ज़्यादा होने पर सामान्य दर से बिल लगता है।",
      "यह घरेलू बिजली कनेक्शन पर लागू है।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family has a white ration card (Food Security Card).",
      "You have a domestic electricity connection in Telangana.",
      "Your monthly use is within 200 units.",
      "You applied during Praja Palana or later at a Praja Palana Seva Kendra / MPDO office.",
    ],
    hi: [
      "आपके परिवार के पास सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड) है।",
      "तेलंगाना में आपका घरेलू बिजली कनेक्शन है।",
      "आपकी मासिक खपत 200 यूनिट के अंदर है।",
      "आपने प्रजा पालना के दौरान या बाद में प्रजा पालना सेवा केंद्र / MPDO दफ़्तर में आवेदन किया है।",
    ],
  },
  exclusions: {
    en: ["Families without a white ration card.", "Commercial or non-domestic connections."],
    hi: ["जिन परिवारों के पास सफ़ेद राशन कार्ड नहीं है।", "व्यावसायिक या ग़ैर-घरेलू कनेक्शन।"],
  },
  applicationProcess: {
    offline: {
      en: [
        "If you did not apply during Praja Palana, apply at the Praja Palana Seva Kendra in your MPDO office, municipal office or GHMC circle office.",
        "Give your white ration card number and your electricity service (consumer) number correctly.",
        "If you were left out because of a wrong card or connection number, get it corrected at the electricity bill collection or service centre.",
      ],
      hi: [
        "अगर आपने प्रजा पालना में आवेदन नहीं किया, तो अपने MPDO दफ़्तर, नगरपालिका दफ़्तर या GHMC सर्कल दफ़्तर के प्रजा पालना सेवा केंद्र में आवेदन करें।",
        "सफ़ेद राशन कार्ड नंबर और बिजली सर्विस (कंज़्यूमर) नंबर सही-सही दें।",
        "अगर ग़लत कार्ड या कनेक्शन नंबर की वजह से नाम छूट गया हो, तो बिजली बिल वसूली या सेवा केंद्र पर उसे ठीक कराएँ।",
      ],
    },
  },
  documents: {
    en: ["White ration card (Food Security Card)", "Electricity bill showing your service number", "Aadhaar card"],
    hi: ["सफ़ेद राशन कार्ड (फ़ूड सिक्योरिटी कार्ड)", "सर्विस नंबर वाला बिजली बिल", "आधार कार्ड"],
  },
  faqs: [
    {
      q: { en: "What if I use 210 units in a month?", hi: "अगर किसी महीने 210 यूनिट ख़र्च हो जाएँ तो?" },
      a: {
        en: "The zero bill is only for months within 200 units. In a month above 200 units, you are billed at the normal tariff.",
        hi: "शून्य बिल सिर्फ़ उन महीनों में आता है जब खपत 200 यूनिट के अंदर हो। 200 से ज़्यादा यूनिट वाले महीने में सामान्य दर से बिल आता है।",
      },
    },
    {
      q: { en: "I have a white ration card but still get a bill. Why?", hi: "मेरे पास सफ़ेद राशन कार्ड है, फिर भी बिल आता है। क्यों?" },
      a: {
        en: "Your ration card or electricity service number may not be linked correctly in the application. Visit your electricity service centre or Praja Palana Seva Kendra to fix it.",
        hi: "हो सकता है आवेदन में आपका राशन कार्ड या बिजली सर्विस नंबर सही से न जुड़ा हो। इसे ठीक कराने के लिए बिजली सेवा केंद्र या प्रजा पालना सेवा केंद्र जाएँ।",
      },
    },
  ],

  officialUrl: "https://www.telangana.gov.in/government-initiatives/",
  sources: [
    "https://www.telangana.gov.in/government-initiatives/",
    "https://www.telangana.gov.in/news/press-releases/2024/02/state-government-ready-to-implement-two-more-guarantees/",
    "https://www.telangana.gov.in/news/press-releases/2026/09/honble-cm-sri-a-revanth-reddy-participated-in-telangana-praja-palana-dinotsavam-2026-celebrations-at-public-gardens-hyderabad/",
    "https://www.telangana.gov.in/wp-content/uploads/2024/07/Telangana-Socio-Economic-Outlook-2024.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
