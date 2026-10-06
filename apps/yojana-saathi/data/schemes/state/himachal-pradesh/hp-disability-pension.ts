import { all, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "hp-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Himachal Pradesh Disability Pension (Social Security Pension)", hi: "हिमाचल प्रदेश दिव्यांग पेंशन (सामाजिक सुरक्षा पेंशन)" },
  aka: ["Disability Relief Allowance Himachal", "Divyang pension HP"],
  shortDescription: {
    en: "Monthly social security pension for persons with disabilities in Himachal; the 2026-27 budget says people with 100% disability will get ₹3,000 a month instead of ₹1,700.",
    hi: "हिमाचल में दिव्यांगजनों के लिए मासिक सामाजिक सुरक्षा पेंशन; 2026-27 के बजट के अनुसार 100% दिव्यांगता वालों को ₹1,700 की जगह ₹3,000 महीना मिलेगा।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Department of Social Justice and Empowerment (ESOMSA), Government of Himachal Pradesh",
    hi: "सामाजिक न्याय एवं अधिकारिता विभाग (ईसोमसा), हिमाचल प्रदेश सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "divyang", "social security pension", "pension", "himachal"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "health",
  eligibility: all(residentOf("himachal-pradesh"), isTrue("disabled"), when("disabilityPct", "gte", 40)),

  details: {
    en: [
      "Himachal Pradesh pays a monthly social security pension to persons with disabilities under its Social Security Pension Rules. The ESOMSA directorate runs it through Tehsil Welfare Officers.",
      "The 2026-27 budget speech says about 7,000 people with 100% disability were getting ₹1,700 a month, and announced that their pension will rise to ₹3,000 a month. Rates for other disability levels and the income limit are set in the pension rules; confirm them with your Tehsil Welfare Officer.",
    ],
    hi: [
      "हिमाचल प्रदेश अपने सामाजिक सुरक्षा पेंशन नियमों के तहत दिव्यांगजनों को मासिक पेंशन देता है। ईसोमसा निदेशालय इसे तहसील कल्याण अधिकारियों के ज़रिए चलाता है।",
      "2026-27 के बजट भाषण के अनुसार 100% दिव्यांगता वाले लगभग 7,000 लोगों को ₹1,700 महीना मिल रहा था, और उनकी पेंशन ₹3,000 महीना करने की घोषणा हुई। दूसरे दिव्यांगता स्तरों की दर और आय सीमा पेंशन नियमों में तय हैं; इनकी पुष्टि अपने तहसील कल्याण अधिकारी से करें।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension paid into your bank or post office account.",
      "₹3,000 a month announced for people with 100% disability (earlier ₹1,700).",
    ],
    hi: ["हर महीने पेंशन, बैंक या डाकघर खाते में।", "100% दिव्यांगता वालों के लिए ₹3,000 महीना घोषित (पहले ₹1,700)।"],
  },
  eligibilityText: {
    en: [
      "A bonafide resident of Himachal Pradesh with a disability certificate (usually 40% or more).",
      "Income and other conditions as per the HP Social Security Pension Rules.",
    ],
    hi: [
      "हिमाचल प्रदेश का बोनाफ़ाइड निवासी, जिसके पास दिव्यांगता प्रमाण पत्र हो (आमतौर पर 40% या ज़्यादा)।",
      "आय और बाकी शर्तें हिमाचल प्रदेश सामाजिक सुरक्षा पेंशन नियमों के अनुसार।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply for the social security pension on the Himachal e-District portal (edistrict.hp.gov.in).",
        "Or submit the pension form to the Tehsil Welfare Officer with your disability certificate, bonafide certificate, age proof, Aadhaar and bank passbook.",
      ],
      hi: [
        "हिमाचल ई-डिस्ट्रिक्ट पोर्टल (edistrict.hp.gov.in) पर सामाजिक सुरक्षा पेंशन के लिए आवेदन करें।",
        "या दिव्यांगता प्रमाण पत्र, बोनाफ़ाइड प्रमाण पत्र, उम्र का प्रमाण, आधार और बैंक पासबुक के साथ पेंशन फ़ॉर्म तहसील कल्याण अधिकारी को दें।",
      ],
    },
  },

  officialUrl: "https://edistrict.hp.gov.in/HPeDistrict/",
  sources: ["https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "check-status",
};

export default scheme;
