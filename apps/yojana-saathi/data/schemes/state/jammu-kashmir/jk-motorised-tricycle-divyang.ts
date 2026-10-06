import { all, ageBetween, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "jk-motorised-tricycle-divyang",
  tier: "compact",
  name: { en: "Motorised Tricycle for Persons with Disabilities (Jammu & Kashmir)", hi: "दिव्यांगजनों के लिए मोटराइज़्ड ट्राइसाइकिल (जम्मू-कश्मीर)" },
  aka: ["motorised scooty for divyang JK", "motorized tricycle Jammu Kashmir"],
  shortDescription: {
    en: "Adults aged 18 to 50 in Jammu & Kashmir with 40% or more locomotor disability of the lower limbs can apply to the Social Welfare Department for a motorised tricycle.",
    hi: "जम्मू-कश्मीर में 18 से 50 साल के जिन लोगों के पैरों में 40% या उससे ज़्यादा चलने-फिरने की दिव्यांगता है, वे समाज कल्याण विभाग से मोटराइज़्ड ट्राइसाइकिल के लिए आवेदन कर सकते हैं।",
  },
  level: "state",
  state: "jammu-kashmir",
  department: { en: "Social Welfare Department, Government of Jammu and Kashmir", hi: "समाज कल्याण विभाग, जम्मू और कश्मीर सरकार" },
  categories: ["disability", "social-welfare"],
  tags: ["motorised tricycle", "scooty", "divyang", "disability", "mobility", "jammu kashmir"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 18, max: 50 },
  kundliHouse: "health",
  eligibility: all(
    residentOf("jammu-kashmir"),
    ...ageBetween(18, 50),
    isTrue("disabled"),
    labelled(when("disabilityPct", "gte", 40), { en: "Locomotor disability of 40% or more", hi: "चलने-फिरने की 40% या उससे ज़्यादा दिव्यांगता" }),
  ),

  details: {
    en: [
      "The J&K Social Welfare Department gives motorised tricycles (scooties) to persons with locomotor disability so they can move around on their own. Applications are taken through the Jan Sugam portal.",
      "The disability must be in the lower limbs only, because the rider needs both hands to drive. The department also runs a separate service for high-end automatic wheelchairs for PHH and AAY ration-card holders aged 14 and above.",
    ],
    hi: [
      "जम्मू-कश्मीर का समाज कल्याण विभाग चलने-फिरने में दिव्यांग लोगों को मोटराइज़्ड ट्राइसाइकिल (स्कूटी) देता है, ताकि वे ख़ुद आ-जा सकें। आवेदन जन सुगम पोर्टल पर लिए जाते हैं।",
      "दिव्यांगता सिर्फ़ पैरों में होनी चाहिए, क्योंकि चलाने के लिए दोनों हाथ ज़रूरी हैं। विभाग PHH और AAY राशन कार्ड वाले 14 साल या उससे ज़्यादा उम्र के लोगों के लिए हाई-एंड ऑटोमैटिक व्हीलचेयर की अलग सेवा भी चलाता है।",
    ],
  },
  benefits: {
    en: ["A motorised tricycle (scooty) for independent travel."],
    hi: ["आज़ादी से आने-जाने के लिए एक मोटराइज़्ड ट्राइसाइकिल (स्कूटी)।"],
  },
  eligibilityText: {
    en: [
      "Domicile of Jammu & Kashmir.",
      "Aged 18 to 50 years.",
      "UDID certificate showing 40% or more locomotor disability, with the upper limbs not affected.",
      "Has not already received a motorised tricycle or scooty from Social Welfare or any other government department.",
    ],
    hi: [
      "जम्मू-कश्मीर का डोमिसाइल हो।",
      "उम्र 18 से 50 साल।",
      "UDID प्रमाण पत्र जिसमें 40% या उससे ज़्यादा चलने-फिरने की दिव्यांगता हो, और हाथ प्रभावित न हों।",
      "समाज कल्याण या किसी दूसरे सरकारी विभाग से पहले मोटराइज़्ड ट्राइसाइकिल या स्कूटी न मिली हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on jansugam.jk.gov.in and choose 'Application for Grant of Motorized Tricycle to Specially Abled Person'.",
        "Upload your domicile certificate, Aadhaar, UDID certificate, age proof, the prescribed medical certificate and an affidavit (attested by a Judicial Magistrate 1st Class) that you haven't received one before.",
        "Submit and track your application online.",
      ],
      hi: [
        "jansugam.jk.gov.in पर रजिस्टर करें और 'Application for Grant of Motorized Tricycle to Specially Abled Person' चुनें।",
        "डोमिसाइल प्रमाण पत्र, आधार, UDID प्रमाण पत्र, उम्र का सबूत, तय फ़ॉर्मेट का मेडिकल प्रमाण पत्र और प्रथम श्रेणी न्यायिक मजिस्ट्रेट से सत्यापित हलफ़नामा अपलोड करें कि आपको पहले यह नहीं मिली।",
        "जमा करें और आवेदन की स्थिति ऑनलाइन देखें।",
      ],
    },
  },

  officialUrl: "https://jansugam.jk.gov.in/",
  sources: ["https://jansugam.jk.gov.in/getServiceDesc.html?serviceId=19560004", "https://jansugam.jk.gov.in/getServiceDesc.html?serviceId=22960002"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
