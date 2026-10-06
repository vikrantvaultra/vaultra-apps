import { all, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-social-security-disability-pension",
  tier: "compact",
  overlapGroup: "disability-pension",
  name: { en: "Social Security Disability Pension (Madhya Pradesh)", hi: "सामाजिक सुरक्षा नि:शक्त पेंशन (मध्य प्रदेश)" },
  aka: ["MP divyang pension", "viklang pension MP", "disability pension MP"],
  shortDescription: {
    en: "Persons with 40% or more disability aged 18 and above in Madhya Pradesh get a state pension of ₹600 a month, with no BPL condition.",
    hi: "मध्य प्रदेश में 40% या ज़्यादा दिव्यांगता वाले 18 साल या उससे ज़्यादा उम्र के लोगों को, बिना BPL शर्त के, राज्य से हर महीने ₹600 पेंशन मिलती है।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Social Justice and Empowerment of Persons with Disabilities Department, Government of Madhya Pradesh",
    hi: "सामाजिक न्याय एवं दिव्यांगजन कल्याण विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["disability", "pension-insurance"],
  tags: ["disability pension", "divyang", "handicapped", "pension", "pwd", "madhya pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 600, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "health",
  eligibility: all(
    residentOf("madhya-pradesh"),
    minAge(18),
    labelled(isTrue("disabled"), { en: "You have a disability", hi: "आप दिव्यांग हैं" }),
    labelled(when("disabilityPct", "gte", 40), { en: "Disability of 40% or more", hi: "दिव्यांगता 40% या उससे ज़्यादा" }),
  ),

  details: {
    en: [
      "Madhya Pradesh's own Social Security Disability Pension, started in 2016, gives ₹600 a month to adults with a disability of 40% or more. It does not require a BPL card.",
      "BPL persons with severe (80%+) disability are covered under the central Indira Gandhi disability pension through the same portal. You can get only one disability pension.",
    ],
    hi: [
      "2016 में शुरू हुई मध्य प्रदेश की अपनी सामाजिक सुरक्षा नि:शक्त पेंशन 40% या ज़्यादा दिव्यांगता वाले वयस्कों को हर महीने ₹600 देती है। इसमें BPL कार्ड ज़रूरी नहीं है।",
      "गंभीर (80% से ज़्यादा) दिव्यांगता वाले BPL लोग इसी पोर्टल से केंद्र की इंदिरा गांधी नि:शक्त पेंशन में आते हैं। एक ही दिव्यांग पेंशन मिल सकती है।",
    ],
  },
  benefits: {
    en: ["₹600 every month, paid into your bank account."],
    hi: ["हर महीने ₹600, आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "A native of Madhya Pradesh aged above 18.",
      "Disability of 40% or more, with a disability certificate.",
      "Name is on the Samagra portal.",
    ],
    hi: [
      "मध्य प्रदेश के मूल निवासी, उम्र 18 साल से ज़्यादा।",
      "40% या ज़्यादा दिव्यांगता, दिव्यांगता प्रमाण पत्र के साथ।",
      "नाम समग्र पोर्टल पर दर्ज हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the Samagra pension portal (socialsecurity.mp.gov.in) with your 9-digit Samagra ID."],
      hi: ["अपनी 9 अंकों की समग्र ID से समग्र पेंशन पोर्टल (socialsecurity.mp.gov.in) पर आवेदन करें।"],
    },
    offline: {
      en: [
        "Fill in the form at your gram panchayat or janpad panchayat (villages) or municipal office (towns).",
        "Attach three photos, your disability certificate and age proof.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत, और शहर में नगर निगम / नगर पालिका / नगर परिषद कार्यालय में फ़ॉर्म भरें।",
        "तीन फ़ोटो, दिव्यांगता प्रमाण पत्र और उम्र का प्रमाण साथ लगाएँ।",
      ],
    },
  },

  officialUrl: "https://socialsecurity.mp.gov.in/Scheme/SSDP.aspx",
  sources: ["https://socialsecurity.mp.gov.in/Scheme/SSDP.aspx", "https://socialsecurity.mp.gov.in/Scheme/IGNDPS.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
