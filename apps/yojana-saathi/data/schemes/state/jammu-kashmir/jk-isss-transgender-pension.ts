import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-isss-transgender-pension",
  tier: "compact",
  name: {
    en: "Transgender Pension under J&K Integrated Social Security Scheme (ISSS)",
    hi: "जम्मू-कश्मीर इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) के तहत ट्रांसजेंडर पेंशन",
  },
  aka: ["ISSS transgender pension", "JK transgender pension"],
  shortDescription: {
    en: "Transgender persons in Jammu & Kashmir with a District Magistrate's identity certificate get a monthly pension of ₹1,250 to ₹2,000, depending on age.",
    hi: "जम्मू-कश्मीर में ज़िला मजिस्ट्रेट से पहचान प्रमाण पत्र रखने वाले ट्रांसजेंडर व्यक्तियों को उम्र के हिसाब से हर महीने ₹1,250 से ₹2,000 की पेंशन मिलती है।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Social Welfare Department, Government of Jammu and Kashmir", hi: "समाज कल्याण विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["transgender", "pension", "isss", "kinner", "jammu kashmir"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1250, period: "monthly", kind: "pension" },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("jammu-kashmir"),
    labelled(when("gender", "eq", "transgender"), { en: "You are a transgender person", hi: "आप ट्रांसजेंडर व्यक्ति हैं" }),
  ),

  details: {
    en: [
      "Jammu & Kashmir's Integrated Social Security Scheme (ISSS) includes a monthly pension for transgender persons, including trans men, trans women, persons with intersex variations and those who identify as kinner or hijra. There is no lower age limit.",
      "From 1 April 2025 the pension is ₹1,250 a month below 60, ₹1,500 from 60 to 79 and ₹2,000 at 80 and above, paid by DBT. You need a transgender identity certificate from the District Magistrate.",
    ],
    hi: [
      "जम्मू-कश्मीर की इंटीग्रेटेड सोशल सिक्योरिटी स्कीम (ISSS) में ट्रांसजेंडर व्यक्तियों के लिए मासिक पेंशन है, जिसमें ट्रांस पुरुष, ट्रांस महिला, इंटरसेक्स व्यक्ति और ख़ुद को किन्नर या हिजड़ा मानने वाले लोग शामिल हैं। कोई न्यूनतम उम्र नहीं है।",
      "1 अप्रैल 2025 से पेंशन 60 साल से कम पर ₹1,250 महीना, 60 से 79 साल पर ₹1,500 और 80 साल या उससे ज़्यादा पर ₹2,000 है, जो DBT से मिलती है। ज़िला मजिस्ट्रेट का ट्रांसजेंडर पहचान प्रमाण पत्र ज़रूरी है।",
    ],
  },
  benefits: {
    en: ["₹1,250 a month below age 60.", "₹1,500 a month from age 60 to 79.", "₹2,000 a month at 80 and above."],
    hi: ["60 साल से कम उम्र पर हर महीने ₹1,250।", "60 से 79 साल की उम्र में हर महीने ₹1,500।", "80 साल या उससे ज़्यादा उम्र पर हर महीने ₹2,000।"],
  },
  eligibilityText: {
    en: [
      "Domicile of Jammu & Kashmir.",
      "Holds a certificate of identity as a transgender person from the District Magistrate.",
      "Holds a ration card (NPHH, PHH or AAY).",
      "Not getting any other pension or monthly help from the government.",
    ],
    hi: [
      "जम्मू-कश्मीर का डोमिसाइल हो।",
      "ज़िला मजिस्ट्रेट से ट्रांसजेंडर व्यक्ति के रूप में पहचान प्रमाण पत्र हो।",
      "राशन कार्ड हो (NPHH, PHH या AAY)।",
      "सरकार से कोई दूसरी पेंशन या मासिक मदद न मिल रही हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on jansugam.jk.gov.in and choose 'Application for Sanction of Pension under JK-ISSS / GOI-NSAP'.",
        "Upload your domicile certificate, transgender identity certificate, ration card, Aadhaar, bank passbook and an affidavit that you get no other pension.",
        "Submit and keep the acknowledgement. Upload a life certificate every January once the pension starts.",
      ],
      hi: [
        "jansugam.jk.gov.in पर रजिस्टर करें और 'Application for Sanction of Pension under JK-ISSS / GOI-NSAP' चुनें।",
        "डोमिसाइल प्रमाण पत्र, ट्रांसजेंडर पहचान प्रमाण पत्र, राशन कार्ड, आधार, बैंक पासबुक और दूसरी पेंशन न मिलने का हलफ़नामा अपलोड करें।",
        "जमा करें और पावती रखें। पेंशन शुरू होने के बाद हर साल जनवरी में जीवन प्रमाण पत्र अपलोड करें।",
      ],
    },
  },

  officialUrl: "https://jansugam.jk.gov.in/",
  sources: ["https://socialwelfare.jk.gov.in/orders/GO96(2025).pdf", "https://socialwelfare.jk.gov.in/orders/GO156(2022).pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
