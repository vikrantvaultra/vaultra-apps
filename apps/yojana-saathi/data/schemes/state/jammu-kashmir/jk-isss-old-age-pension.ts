import { all, any, female, isTrue, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-isss-old-age-pension",
  overlapGroup: "old-age-pension",
  name: {
    en: "Old Age Pension under J&K Integrated Social Security Scheme (ISSS)",
    hi: "जम्मू-कश्मीर इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) के तहत वृद्धावस्था पेंशन",
  },
  aka: ["ISSS old age pension", "JK old age pension", "ISSS OAP"],
  shortDescription: {
    en: "Elderly people in Jammu & Kashmir from PHH or AAY ration-card families get a monthly pension of ₹1,250 to ₹2,000, depending on age, paid into their bank account.",
    hi: "जम्मू-कश्मीर में PHH या AAY राशन कार्ड वाले परिवारों के बुज़ुर्गों को उम्र के हिसाब से हर महीने ₹1,250 से ₹2,000 तक की पेंशन सीधे बैंक खाते में मिलती है।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Social Welfare Department, Government of Jammu and Kashmir", hi: "समाज कल्याण विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["old age pension", "senior citizen", "isss", "pension", "elderly", "jammu kashmir"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1250, period: "monthly", kind: "pension" },
  ageRange: { min: 55 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("jammu-kashmir"),
    labelled(any(all(female(), minAge(55)), minAge(60)), {
      en: "Aged 60 or above (55 or above for women)",
      hi: "उम्र 60 साल या उससे ज़्यादा (महिलाओं के लिए 55 साल या उससे ज़्यादा)",
    }),
    labelled(isTrue("bpl"), { en: "Family holds a PHH or AAY ration card", hi: "परिवार के पास PHH या AAY राशन कार्ड हो" }),
  ),

  details: {
    en: [
      "The Integrated Social Security Scheme (ISSS) is Jammu & Kashmir's own pension scheme, paid fully from the UT budget. Its old age pension is for elderly people from poor families who have little or no support.",
      "The current rules are the J&K Integrated Social Security Scheme Rules, 2022. From 1 April 2025 the government raised the pension: ₹1,250 a month below 60, ₹1,500 from 60 to 79, and ₹2,000 at 80 and above.",
      "You apply online through the Jan Sugam portal. The Tehsil and District Social Welfare Officers check the case, the Director of Social Welfare sanctions it, and the money is paid every month by DBT into your Aadhaar-linked bank account.",
    ],
    hi: [
      "इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) जम्मू-कश्मीर की अपनी पेंशन योजना है, जिसका पूरा पैसा UT के बजट से आता है। इसकी वृद्धावस्था पेंशन गरीब परिवारों के उन बुज़ुर्गों के लिए है जिनका कोई ख़ास सहारा नहीं है।",
      "अभी के नियम जम्मू-कश्मीर इंटीग्रेटेड सोशल सिक्योरिटी स्कीम नियम, 2022 हैं। 1 अप्रैल 2025 से सरकार ने पेंशन बढ़ा दी: 60 साल से कम उम्र पर ₹1,250 महीना, 60 से 79 साल पर ₹1,500 और 80 साल या उससे ज़्यादा पर ₹2,000।",
      "आवेदन जन सुगम पोर्टल पर ऑनलाइन होता है। तहसील और ज़िला समाज कल्याण अधिकारी जाँच करते हैं, समाज कल्याण निदेशक मंज़ूरी देते हैं, और पैसा हर महीने DBT से आपके आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,250 a month for women aged 55 to 59.",
      "₹1,500 a month for those aged 60 to 79.",
      "₹2,000 a month for those aged 80 and above.",
      "The higher rate starts automatically from the month after you enter the next age group.",
    ],
    hi: [
      "55 से 59 साल की महिलाओं को हर महीने ₹1,250।",
      "60 से 79 साल वालों को हर महीने ₹1,500।",
      "80 साल या उससे ज़्यादा वालों को हर महीने ₹2,000।",
      "अगले आयु वर्ग में पहुँचने के बाद वाले महीने से बढ़ी हुई राशि अपने-आप मिलने लगती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Domicile of Jammu & Kashmir.",
      "A man aged 60 or above, or a woman aged 55 or above.",
      "The family holds a PHH (priority household) or AAY (Antyodaya) ration card.",
      "Not getting any other pension or regular financial help from the government.",
    ],
    hi: [
      "जम्मू-कश्मीर का डोमिसाइल हो।",
      "60 साल या उससे ज़्यादा उम्र का पुरुष, या 55 साल या उससे ज़्यादा उम्र की महिला।",
      "परिवार के पास PHH (प्राथमिकता परिवार) या AAY (अंत्योदय) राशन कार्ड हो।",
      "सरकार से कोई दूसरी पेंशन या नियमित आर्थिक मदद न मिल रही हो।",
    ],
  },
  exclusions: {
    en: [
      "Families with only a non-priority (NPHH) ration card.",
      "People who already get another pension or monthly assistance from the government. You can't hold this and an NSAP old age pension together.",
    ],
    hi: [
      "जिन परिवारों के पास सिर्फ़ गैर-प्राथमिकता (NPHH) राशन कार्ड है।",
      "जिन्हें सरकार से पहले से कोई दूसरी पेंशन या मासिक सहायता मिल रही है। यह पेंशन और NSAP की वृद्धावस्था पेंशन एक साथ नहीं मिल सकती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on jansugam.jk.gov.in and log in.",
        "Under 'Apply for Services', choose 'Application for Sanction of Pension under JK-ISSS / GOI-NSAP'.",
        "Fill in the form, upload your documents and submit. Download the acknowledgement and track the status online.",
      ],
      hi: [
        "jansugam.jk.gov.in पर रजिस्टर करें और लॉग इन करें।",
        "'Apply for Services' में 'Application for Sanction of Pension under JK-ISSS / GOI-NSAP' चुनें।",
        "फ़ॉर्म भरें, दस्तावेज़ अपलोड करें और जमा करें। पावती डाउनलोड करें और स्थिति ऑनलाइन देखते रहें।",
      ],
    },
    offline: {
      en: [
        "If you need help, visit your Tehsil Social Welfare Office or a common service centre (kiosk).",
        "They will help you file the online application.",
        "Once sanctioned, upload your life certificate every January to keep the pension coming.",
      ],
      hi: [
        "मदद चाहिए तो अपने तहसील समाज कल्याण कार्यालय या कॉमन सर्विस सेंटर (कियोस्क) पर जाएँ।",
        "वहाँ ऑनलाइन आवेदन भरने में मदद मिलेगी।",
        "पेंशन मंज़ूर होने के बाद हर साल जनवरी में जीवन प्रमाण पत्र अपलोड करें, ताकि पेंशन आती रहे।",
      ],
    },
  },
  documents: {
    en: [
      "Domicile certificate",
      "Proof of residence (voter card, electricity bill or Aadhaar)",
      "Proof of age (school, municipal or medical board certificate)",
      "AAY or PHH ration card",
      "Aadhaar card",
      "First page of the passbook of an Aadhaar-linked bank account",
      "Affidavit attested by a Judicial Magistrate 1st Class that you get no other pension or financial help",
    ],
    hi: [
      "डोमिसाइल प्रमाण पत्र",
      "निवास का सबूत (वोटर कार्ड, बिजली बिल या आधार)",
      "उम्र का सबूत (स्कूल, नगरपालिका या मेडिकल बोर्ड का प्रमाण पत्र)",
      "AAY या PHH राशन कार्ड",
      "आधार कार्ड",
      "आधार से जुड़े बैंक खाते की पासबुक का पहला पन्ना",
      "प्रथम श्रेणी न्यायिक मजिस्ट्रेट से सत्यापित हलफ़नामा कि आपको कोई दूसरी पेंशन या आर्थिक मदद नहीं मिलती",
    ],
  },
  faqs: [
    {
      q: { en: "When does the pension start after it is sanctioned?", hi: "मंज़ूरी के बाद पेंशन कब से मिलती है?" },
      a: {
        en: "From the month after the Director of Social Welfare sanctions it. The rules give each office 15 days to process the case.",
        hi: "समाज कल्याण निदेशक की मंज़ूरी के अगले महीने से। नियमों के अनुसार हर दफ़्तर को केस निपटाने के लिए 15 दिन मिलते हैं।",
      },
    },
    {
      q: { en: "Is this different from the central old age pension (NSAP)?", hi: "क्या यह केंद्र की वृद्धावस्था पेंशन (NSAP) से अलग है?" },
      a: {
        en: "Yes. ISSS is paid by the J&K government. Both are applied for through the same Jan Sugam service and now pay the same monthly rates, but you get only one of them.",
        hi: "हाँ। ISSS का पैसा जम्मू-कश्मीर सरकार देती है। दोनों के लिए जन सुगम पर एक ही सेवा से आवेदन होता है और अब दोनों में मासिक राशि बराबर है, पर मिलती इनमें से एक ही है।",
      },
    },
  ],

  officialUrl: "https://jansugam.jk.gov.in/",
  sources: [
    "https://socialwelfare.jk.gov.in/orders/GO96(2025).pdf",
    "https://socialwelfare.jk.gov.in/orders/GO156(2022).pdf",
    "https://socialwelfare.jk.gov.in/schemes.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
