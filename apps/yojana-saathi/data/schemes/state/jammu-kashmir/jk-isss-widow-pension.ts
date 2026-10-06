import { all, female, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-isss-widow-pension",
  overlapGroup: "widow-pension",
  name: {
    en: "Widow and Divorcee Pension under J&K Integrated Social Security Scheme (ISSS)",
    hi: "जम्मू-कश्मीर इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) के तहत विधवा और तलाक़शुदा पेंशन",
  },
  aka: ["ISSS widow pension", "JK widow pension", "divorcee pension Jammu Kashmir"],
  shortDescription: {
    en: "Widows and legally divorced women in Jammu & Kashmir from PHH or AAY ration-card families get ₹1,250 to ₹2,000 a month, depending on age, in their bank account.",
    hi: "जम्मू-कश्मीर में PHH या AAY राशन कार्ड वाले परिवारों की विधवा और क़ानूनी रूप से तलाक़शुदा महिलाओं को उम्र के हिसाब से हर महीने ₹1,250 से ₹2,000 बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Social Welfare Department, Government of Jammu and Kashmir", hi: "समाज कल्याण विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["social-welfare", "women-child", "pension-insurance"],
  tags: ["widow pension", "divorcee", "isss", "pension", "women", "jammu kashmir"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1250, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("jammu-kashmir"),
    female(),
    minAge(18),
    labelled(when("marital", "in", ["widowed", "divorced"]), {
      en: "You are a widow or legally divorced, and have not remarried",
      hi: "आप विधवा हैं या क़ानूनी रूप से तलाक़शुदा हैं, और दोबारा शादी नहीं की है",
    }),
    labelled(isTrue("bpl"), { en: "Family holds a PHH or AAY ration card", hi: "परिवार के पास PHH या AAY राशन कार्ड हो" }),
  ),

  details: {
    en: [
      "Under Jammu & Kashmir's Integrated Social Security Scheme (ISSS), widows and divorced women from poor families get a monthly pension paid fully by the UT government.",
      "The J&K Integrated Social Security Scheme Rules, 2022 set the conditions. From 1 April 2025 the pension is ₹1,250 a month below 60, ₹1,500 from 60 to 79 and ₹2,000 at 80 and above.",
      "You apply online through the Jan Sugam portal. After checks by the Tehsil and District Social Welfare Officers, the Director of Social Welfare sanctions the pension and it is paid monthly by DBT.",
    ],
    hi: [
      "जम्मू-कश्मीर की इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) में गरीब परिवारों की विधवा और तलाक़शुदा महिलाओं को मासिक पेंशन मिलती है, जिसका पूरा पैसा UT सरकार देती है।",
      "शर्तें जम्मू-कश्मीर इंटीग्रेटेड सोशल सिक्योरिटी स्कीम नियम, 2022 में तय हैं। 1 अप्रैल 2025 से पेंशन 60 साल से कम उम्र पर ₹1,250 महीना, 60 से 79 साल पर ₹1,500 और 80 साल या उससे ज़्यादा पर ₹2,000 है।",
      "आवेदन जन सुगम पोर्टल पर ऑनलाइन होता है। तहसील और ज़िला समाज कल्याण अधिकारियों की जाँच के बाद समाज कल्याण निदेशक पेंशन मंज़ूर करते हैं और पैसा हर महीने DBT से आता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,250 a month if you are below 60.",
      "₹1,500 a month from age 60 to 79.",
      "₹2,000 a month at 80 and above.",
      "Paid by DBT into your own Aadhaar-linked bank account.",
    ],
    hi: [
      "60 साल से कम उम्र पर हर महीने ₹1,250।",
      "60 से 79 साल की उम्र में हर महीने ₹1,500।",
      "80 साल या उससे ज़्यादा उम्र पर हर महीने ₹2,000।",
      "पैसा DBT से आपके अपने आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "Domicile of Jammu & Kashmir.",
      "A widow who has not remarried, or a woman who is legally divorced, gets no maintenance from her former husband and has not remarried.",
      "Older than the legal age of marriage.",
      "The family holds a PHH or AAY ration card.",
      "Not getting any other pension or monthly help from the government.",
    ],
    hi: [
      "जम्मू-कश्मीर का डोमिसाइल हो।",
      "ऐसी विधवा जिसने दोबारा शादी नहीं की, या क़ानूनी रूप से तलाक़शुदा महिला जिसे पूर्व पति से गुज़ारा भत्ता नहीं मिलता और जिसने दोबारा शादी नहीं की।",
      "उम्र शादी की क़ानूनी उम्र से ज़्यादा हो।",
      "परिवार के पास PHH या AAY राशन कार्ड हो।",
      "सरकार से कोई दूसरी पेंशन या मासिक मदद न मिल रही हो।",
    ],
  },
  exclusions: {
    en: [
      "Women who have remarried.",
      "Divorced women who receive maintenance from their former husband.",
      "Families with only a non-priority (NPHH) ration card.",
      "Women already getting another government pension, including the NSAP widow pension.",
    ],
    hi: [
      "जिन महिलाओं ने दोबारा शादी कर ली है।",
      "जिन तलाक़शुदा महिलाओं को पूर्व पति से गुज़ारा भत्ता मिलता है।",
      "जिन परिवारों के पास सिर्फ़ गैर-प्राथमिकता (NPHH) राशन कार्ड है।",
      "जिन्हें पहले से कोई दूसरी सरकारी पेंशन मिल रही है, जिसमें NSAP की विधवा पेंशन भी शामिल है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on jansugam.jk.gov.in and log in.",
        "Choose the service 'Application for Sanction of Pension under JK-ISSS / GOI-NSAP'.",
        "Fill in the form, upload your documents and submit. Keep the acknowledgement to track your case.",
      ],
      hi: [
        "jansugam.jk.gov.in पर रजिस्टर करें और लॉग इन करें।",
        "'Application for Sanction of Pension under JK-ISSS / GOI-NSAP' सेवा चुनें।",
        "फ़ॉर्म भरें, दस्तावेज़ अपलोड करें और जमा करें। केस देखने के लिए पावती संभाल कर रखें।",
      ],
    },
    offline: {
      en: [
        "For help, go to your Tehsil Social Welfare Office or a common service centre.",
        "After the pension starts, upload a life certificate every January.",
        "Every three years, also upload a certificate from a gazetted officer that you have not remarried.",
      ],
      hi: [
        "मदद के लिए अपने तहसील समाज कल्याण कार्यालय या कॉमन सर्विस सेंटर पर जाएँ।",
        "पेंशन शुरू होने के बाद हर साल जनवरी में जीवन प्रमाण पत्र अपलोड करें।",
        "हर तीन साल में किसी राजपत्रित अधिकारी का यह प्रमाण पत्र भी अपलोड करें कि आपने दोबारा शादी नहीं की है।",
      ],
    },
  },
  documents: {
    en: [
      "Domicile certificate",
      "Proof of residence and proof of age",
      "Husband's death certificate (widows) or legal proof of divorce with an affidavit that you get no maintenance (divorcees)",
      "Certificate from a gazetted officer that you have not remarried",
      "AAY or PHH ration card",
      "Aadhaar card and first page of an Aadhaar-linked bank passbook",
      "Affidavit that you get no other pension or financial help",
    ],
    hi: [
      "डोमिसाइल प्रमाण पत्र",
      "निवास और उम्र का सबूत",
      "पति का मृत्यु प्रमाण पत्र (विधवा के लिए) या तलाक़ का क़ानूनी सबूत और गुज़ारा भत्ता न मिलने का हलफ़नामा (तलाक़शुदा के लिए)",
      "राजपत्रित अधिकारी का प्रमाण पत्र कि आपने दोबारा शादी नहीं की",
      "AAY या PHH राशन कार्ड",
      "आधार कार्ड और आधार से जुड़ी बैंक पासबुक का पहला पन्ना",
      "हलफ़नामा कि आपको कोई दूसरी पेंशन या आर्थिक मदद नहीं मिलती",
    ],
  },
  faqs: [
    {
      q: { en: "Is there a minimum age?", hi: "क्या कोई न्यूनतम उम्र है?" },
      a: {
        en: "You only need to be older than the legal age of marriage. Unlike the central NSAP widow pension, which starts at 40, ISSS has no higher age floor.",
        hi: "आपकी उम्र बस शादी की क़ानूनी उम्र से ज़्यादा होनी चाहिए। केंद्र की NSAP विधवा पेंशन 40 साल से शुरू होती है, पर ISSS में ऐसी कोई ऊँची सीमा नहीं है।",
      },
    },
    {
      q: { en: "What happens if I remarry?", hi: "अगर मैं दोबारा शादी कर लूँ तो क्या होगा?" },
      a: {
        en: "The pension stops. Gram Sabhas and ward committees review the list every quarter and remove cases of remarriage.",
        hi: "पेंशन बंद हो जाती है। ग्राम सभा और वार्ड कमेटियाँ हर तिमाही सूची की जाँच करती हैं और दोबारा शादी वाले मामलों को हटा देती हैं।",
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
