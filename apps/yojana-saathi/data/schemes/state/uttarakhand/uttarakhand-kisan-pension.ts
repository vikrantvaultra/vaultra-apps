import { all, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "uttarakhand-kisan-pension",
  tier: "compact",
  overlapGroup: "old-age-pension",
  name: { en: "Uttarakhand Kisan Pension Scheme", hi: "उत्तराखंड किसान पेंशन योजना" },
  aka: ["Kisan Pension Uttarakhand", "Farmer pension Uttarakhand"],
  shortDescription: {
    en: "Small farmers in Uttarakhand above 60 who farm their own land of up to 2 hectares get a monthly pension, with no income limit.",
    hi: "उत्तराखंड के 60 साल से ज़्यादा उम्र के छोटे किसानों को, जो 2 हेक्टेयर तक की अपनी ज़मीन पर ख़ुद खेती करते हैं, हर महीने पेंशन मिलती है। आय की कोई सीमा नहीं है।",
  },
  level: "state",
  state: "uttarakhand",
  department: { en: "Social Welfare Department, Government of Uttarakhand", hi: "समाज कल्याण विभाग, उत्तराखंड सरकार" },
  categories: ["agriculture", "pension-insurance"],
  tags: ["kisan pension", "farmer", "old age", "pension", "uttarakhand"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 60 },
  kundliHouse: "farming",
  eligibility: all(residentOf("uttarakhand"), minAge(60), when("occupation", "eq", "farmer")),

  details: {
    en: [
      "The Kisan Pension Scheme gives a monthly pension to elderly small farmers in Uttarakhand who still farm their own land, including tenant farmers with a legal lease. There is no income limit.",
      "A December 2021 order raised the pension from ₹1,000 to ₹1,200 a month. We could not find a later order, so please check the current amount with the Social Welfare Department.",
    ],
    hi: [
      "किसान पेंशन योजना उत्तराखंड के उन बुज़ुर्ग छोटे किसानों को हर महीने पेंशन देती है जो अब भी अपनी ज़मीन पर खेती करते हैं, जिनमें क़ानूनी पट्टे वाले बटाईदार किसान भी शामिल हैं। आय की कोई सीमा नहीं है।",
      "दिसंबर 2021 के आदेश से पेंशन ₹1,000 से बढ़ाकर ₹1,200 महीना की गई थी। इसके बाद का कोई आदेश हमें नहीं मिला, इसलिए मौजूदा राशि समाज कल्याण विभाग से पता कर लें।",
    ],
  },
  benefits: {
    en: ["A monthly pension (₹1,200 a month as per the December 2021 order).", "No income limit."],
    hi: ["हर महीने पेंशन (दिसंबर 2021 के आदेश के अनुसार ₹1,200 महीना)।", "आय की कोई सीमा नहीं।"],
  },
  eligibilityText: {
    en: [
      "A farmer in Uttarakhand above 60 years of age.",
      "Farms their own land of up to 2 hectares themselves, or is a tenant farmer with a legal lease who farms personally.",
      "Has not been sanctioned any other pension by the Social Welfare Department or the government.",
      "Land certificate from the Revenue Officer or Assistant Agriculture Officer.",
    ],
    hi: [
      "उत्तराखंड का 60 साल से ज़्यादा उम्र का किसान।",
      "2 हेक्टेयर तक की अपनी ज़मीन पर ख़ुद खेती करता हो, या क़ानूनी पट्टे वाला बटाईदार किसान हो जो ख़ुद खेती करता हो।",
      "समाज कल्याण विभाग या सरकार से पहले कोई दूसरी पेंशन मंज़ूर न हुई हो।",
      "राजस्व अधिकारी या सहायक कृषि अधिकारी से ज़मीन का प्रमाण पत्र हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Fill in the Kisan Pension form with a certified copy of the khatauni, a ₹10 stamp-paper affidavit that you farm 2 hectares or less yourself, the land certificate, an attested photo, bank passbook and Aadhaar.",
        "Submit it through the Block Development Officer (villages) or the Sub-Divisional Magistrate (towns).",
      ],
      hi: [
        "किसान पेंशन का फ़ॉर्म भरें, साथ में खतौनी की प्रमाणित नकल, ₹10 के स्टाम्प पेपर पर हलफ़नामा कि आप 2 हेक्टेयर या कम ज़मीन पर ख़ुद खेती करते हैं, ज़मीन का प्रमाण पत्र, प्रमाणित फ़ोटो, बैंक पासबुक और आधार लगाएँ।",
        "गाँव में खंड विकास अधिकारी (BDO) और शहर में उपजिलाधिकारी (SDM) के ज़रिए जमा करें।",
      ],
    },
  },

  officialUrl: "https://ssp.uk.gov.in/",
  sources: [
    "https://socialwelfare.uk.gov.in/service/tourist-visa/",
    "https://cdnbbsr.s3waas.gov.in/s357bafb2c2dfeefba931bb03a835b1fa9/uploads/2025/06/20250618656866568.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "check-status",
};

export default scheme;
