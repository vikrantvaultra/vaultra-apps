import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-isss-disability-pension",
  overlapGroup: "disability-pension",
  name: {
    en: "Disability Pension under J&K Integrated Social Security Scheme (ISSS)",
    hi: "जम्मू-कश्मीर इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) के तहत दिव्यांग पेंशन",
  },
  aka: ["ISSS disability pension", "JK divyang pension", "handicapped pension Jammu Kashmir"],
  shortDescription: {
    en: "Persons with 40% or more disability in Jammu & Kashmir get a monthly pension of ₹1,250 to ₹2,000, depending on age, with no lower age limit.",
    hi: "जम्मू-कश्मीर में 40% या उससे ज़्यादा दिव्यांगता वाले लोगों को उम्र के हिसाब से हर महीने ₹1,250 से ₹2,000 की पेंशन मिलती है, कोई न्यूनतम उम्र नहीं है।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Social Welfare Department, Government of Jammu and Kashmir", hi: "समाज कल्याण विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["disability", "social-welfare", "pension-insurance"],
  tags: ["disability pension", "divyang", "handicapped", "isss", "udid", "jammu kashmir"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1250, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("jammu-kashmir"),
    isTrue("disabled"),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "40% या उससे ज़्यादा दिव्यांगता" }),
  ),

  details: {
    en: [
      "Jammu & Kashmir's Integrated Social Security Scheme (ISSS) pays a monthly pension to persons with physical or intellectual disability of 40% or more. The UT government funds it fully.",
      "Unlike the old age and widow pensions, families with any ration card category (NPHH, PHH or AAY) can apply. A UDID card is required. From 1 April 2025 the pension is ₹1,250 a month below 60, ₹1,500 from 60 to 79 and ₹2,000 at 80 and above.",
      "Apply online through the Jan Sugam portal. The pension is sanctioned by the Director of Social Welfare and paid monthly by DBT.",
    ],
    hi: [
      "जम्मू-कश्मीर की इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) 40% या उससे ज़्यादा शारीरिक या बौद्धिक दिव्यांगता वाले लोगों को मासिक पेंशन देती है। इसका पूरा पैसा UT सरकार देती है।",
      "वृद्धावस्था और विधवा पेंशन से अलग, इसमें किसी भी श्रेणी का राशन कार्ड (NPHH, PHH या AAY) रखने वाले परिवार आवेदन कर सकते हैं। UDID कार्ड ज़रूरी है। 1 अप्रैल 2025 से पेंशन 60 साल से कम पर ₹1,250 महीना, 60 से 79 साल पर ₹1,500 और 80 साल या उससे ज़्यादा पर ₹2,000 है।",
      "आवेदन जन सुगम पोर्टल पर ऑनलाइन करें। समाज कल्याण निदेशक पेंशन मंज़ूर करते हैं और पैसा हर महीने DBT से आता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,250 a month below age 60 (there is no lower age limit).",
      "₹1,500 a month from age 60 to 79.",
      "₹2,000 a month at 80 and above.",
    ],
    hi: [
      "60 साल से कम उम्र पर हर महीने ₹1,250 (कोई न्यूनतम उम्र नहीं)।",
      "60 से 79 साल की उम्र में हर महीने ₹1,500।",
      "80 साल या उससे ज़्यादा उम्र पर हर महीने ₹2,000।",
    ],
  },
  eligibilityText: {
    en: [
      "Domicile of Jammu & Kashmir.",
      "Physical or intellectual disability of 40% or more, certified by the district health authority.",
      "Holds a UDID card.",
      "The family holds a ration card (NPHH, PHH or AAY).",
      "Not getting any other pension or monthly help from the government.",
    ],
    hi: [
      "जम्मू-कश्मीर का डोमिसाइल हो।",
      "ज़िला स्वास्थ्य प्राधिकरण से प्रमाणित 40% या उससे ज़्यादा शारीरिक या बौद्धिक दिव्यांगता।",
      "UDID कार्ड हो।",
      "परिवार के पास राशन कार्ड हो (NPHH, PHH या AAY)।",
      "सरकार से कोई दूसरी पेंशन या मासिक मदद न मिल रही हो।",
    ],
  },
  exclusions: {
    en: [
      "Disability below 40%.",
      "People already getting another government pension, including the NSAP disability pension.",
    ],
    hi: [
      "40% से कम दिव्यांगता।",
      "जिन्हें पहले से कोई दूसरी सरकारी पेंशन मिल रही है, जिसमें NSAP की दिव्यांग पेंशन भी शामिल है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on jansugam.jk.gov.in and log in.",
        "Choose 'Application for Sanction of Pension under JK-ISSS / GOI-NSAP'.",
        "Upload your disability certificate, UDID card and other documents, and submit.",
      ],
      hi: [
        "jansugam.jk.gov.in पर रजिस्टर करें और लॉग इन करें।",
        "'Application for Sanction of Pension under JK-ISSS / GOI-NSAP' चुनें।",
        "दिव्यांगता प्रमाण पत्र, UDID कार्ड और बाक़ी दस्तावेज़ अपलोड करके जमा करें।",
      ],
    },
    offline: {
      en: [
        "For help, visit your Tehsil Social Welfare Office or a common service centre.",
        "Upload your life certificate every January once the pension starts.",
      ],
      hi: [
        "मदद के लिए अपने तहसील समाज कल्याण कार्यालय या कॉमन सर्विस सेंटर पर जाएँ।",
        "पेंशन शुरू होने के बाद हर साल जनवरी में जीवन प्रमाण पत्र अपलोड करें।",
      ],
    },
  },
  documents: {
    en: [
      "Domicile certificate",
      "Proof of residence",
      "Disability certificate (40% or more) and UDID card",
      "Ration card (NPHH, PHH or AAY)",
      "Aadhaar card and first page of an Aadhaar-linked bank passbook",
      "Affidavit that you get no other pension or financial help",
    ],
    hi: [
      "डोमिसाइल प्रमाण पत्र",
      "निवास का सबूत",
      "दिव्यांगता प्रमाण पत्र (40% या उससे ज़्यादा) और UDID कार्ड",
      "राशन कार्ड (NPHH, PHH या AAY)",
      "आधार कार्ड और आधार से जुड़ी बैंक पासबुक का पहला पन्ना",
      "हलफ़नामा कि आपको कोई दूसरी पेंशन या आर्थिक मदद नहीं मिलती",
    ],
  },
  faqs: [
    {
      q: { en: "Can a child with a disability get this pension?", hi: "क्या दिव्यांग बच्चे को यह पेंशन मिल सकती है?" },
      a: {
        en: "Yes. The ISSS disability pension has no lower age limit, so a child with 40% or more disability and a UDID card can be covered.",
        hi: "हाँ। ISSS दिव्यांग पेंशन में कोई न्यूनतम उम्र नहीं है, इसलिए 40% या उससे ज़्यादा दिव्यांगता और UDID कार्ड वाला बच्चा भी इसमें आ सकता है।",
      },
    },
    {
      q: { en: "How do I get a UDID card?", hi: "UDID कार्ड कैसे बनवाएँ?" },
      a: {
        en: "Apply on swavlambancard.gov.in. You'll be called for an assessment by a medical board, and the card is issued after that.",
        hi: "swavlambancard.gov.in पर आवेदन करें। मेडिकल बोर्ड जाँच के लिए बुलाएगा, उसके बाद कार्ड जारी होता है।",
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
