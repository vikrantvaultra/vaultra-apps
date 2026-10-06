import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-social-security-old-age-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Social Security Old Age Pension (Madhya Pradesh)", hi: "सामाजिक सुरक्षा वृद्धावस्था पेंशन (मध्य प्रदेश)" },
  aka: ["MP old age pension", "vriddhavastha pension MP", "budhapa pension"],
  shortDescription: {
    en: "Destitute people aged 60 and above in Madhya Pradesh get a state pension of ₹600 a month, even without a BPL card.",
    hi: "मध्य प्रदेश के 60 साल या उससे ज़्यादा उम्र के निराश्रित लोगों को, BPL कार्ड न होने पर भी, राज्य से हर महीने ₹600 पेंशन मिलती है।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Social Justice and Empowerment of Persons with Disabilities Department, Government of Madhya Pradesh",
    hi: "सामाजिक न्याय एवं दिव्यांगजन कल्याण विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["pension-insurance", "social-welfare"],
  tags: ["old age pension", "senior citizen", "destitute", "pension", "elderly", "madhya pradesh"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 600, period: "monthly", kind: "pension" },
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(residentOf("madhya-pradesh"), minAge(60)),

  details: {
    en: [
      "Madhya Pradesh pays ₹600 a month to elderly people who have no one to support them. This is the state's own Social Security Old Age Pension, running since 1981, for destitute people who may not be on the BPL list.",
      "Elderly people from BPL families get the same ₹600 under the Indira Gandhi National Old Age Pension, through the same portal. You can get only one of the two.",
    ],
    hi: [
      "मध्य प्रदेश उन बुज़ुर्गों को हर महीने ₹600 देता है जिनका कोई सहारा नहीं है। यह 1981 से चल रही राज्य की अपनी सामाजिक सुरक्षा वृद्धावस्था पेंशन है, उन निराश्रित लोगों के लिए जो शायद BPL सूची में न हों।",
      "BPL परिवारों के बुज़ुर्गों को इसी पोर्टल से इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन में वही ₹600 मिलते हैं। दोनों में से एक ही मिल सकती है।",
    ],
  },
  benefits: {
    en: ["₹600 every month, paid into your bank account."],
    hi: ["हर महीने ₹600, आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "A native of Madhya Pradesh aged 60 or older.",
      "Destitute, with no means of support (a destitution certificate is needed).",
      "Name is on the Samagra portal.",
    ],
    hi: [
      "मध्य प्रदेश के मूल निवासी, उम्र 60 साल या उससे ज़्यादा।",
      "निराश्रित हों, गुज़ारे का कोई सहारा न हो (निराश्रित प्रमाण पत्र ज़रूरी)।",
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
        "Attach three photos, a destitution certificate and age proof. A decision is due within 15 working days.",
      ],
      hi: [
        "गाँव में ग्राम पंचायत या जनपद पंचायत, और शहर में नगर निगम / नगर पालिका / नगर परिषद कार्यालय में फ़ॉर्म भरें।",
        "तीन फ़ोटो, निराश्रित प्रमाण पत्र और उम्र का प्रमाण साथ लगाएँ। 15 कार्य दिवस में फ़ैसला होना चाहिए।",
      ],
    },
  },

  officialUrl: "https://socialsecurity.mp.gov.in/Scheme/IGNOAP.aspx",
  sources: ["https://socialsecurity.mp.gov.in/Scheme/IGNOAP.aspx", "https://socialsecurity.mp.gov.in/Scheme/SSOAP.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 1981,
  status: "active",
};

export default scheme;
