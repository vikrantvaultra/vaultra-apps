import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indira-gandhi-sukh-suraksha-yojana",
  overlapGroup: "daughter-savings",
  name: { en: "Indira Gandhi Sukh Suraksha Yojana", hi: "इंदिरा गांधी सुख सुरक्षा योजना" },
  aka: ["Sukh Suraksha Yojana", "Beti Hai Anmol (new)", "Beti Hai Anmol Yojana"],
  shortDescription: {
    en: "For daughters born on or after 1 April 2026 in BPL families of Himachal, ₹25,000 is deposited with LIC at birth and each parent gets ₹2 lakh life cover. Replaces Beti Hai Anmol.",
    hi: "हिमाचल के BPL परिवारों में 1 अप्रैल 2026 या उसके बाद जन्मी बेटियों के लिए जन्म पर LIC में ₹25,000 जमा होते हैं और माता-पिता दोनों को ₹2-2 लाख का जीवन बीमा मिलता है। यह बेटी है अनमोल की जगह है।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Directorate of Women and Child Development, Government of Himachal Pradesh",
    hi: "महिला एवं बाल विकास निदेशालय, हिमाचल प्रदेश सरकार",
  },
  categories: ["women-child", "pension-insurance"],
  tags: ["daughter", "girl child", "bpl", "lic", "beti hai anmol", "himachal"],
  benefitType: "composite",
  isDBT: false,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("himachal-pradesh"),
    isTrue("bpl"),
    labelled(isTrue("daughterUnder10"), {
      en: "You have a daughter born on or after 1 April 2026 (first or second daughter)",
      hi: "आपकी बेटी 1 अप्रैल 2026 या उसके बाद जन्मी हो (पहली या दूसरी बेटी)",
    }),
  ),

  details: {
    en: [
      "Indira Gandhi Sukh Suraksha Yojana was notified on 30 March 2026 and started on 1 April 2026. It replaces the Beti Hai Anmol Yojana of 2010 for girls born from that date.",
      "At the birth of a daughter in a BPL family, the government deposits ₹25,000 with the Life Insurance Corporation (LIC) to build a corpus for her. Both parents also get life insurance of ₹2 lakh each, which lasts until the girl turns 18 or the parent turns 55.",
      "The aims are to remove the bias against the birth of girls, improve the sex ratio, protect the girl's future if a parent dies, and help her finish her education.",
    ],
    hi: [
      "इंदिरा गांधी सुख सुरक्षा योजना 30 मार्च 2026 को अधिसूचित हुई और 1 अप्रैल 2026 से शुरू हुई। उस तारीख़ से जन्मी लड़कियों के लिए इसने 2010 की बेटी है अनमोल योजना की जगह ली है।",
      "BPL परिवार में बेटी के जन्म पर सरकार उसके लिए भारतीय जीवन बीमा निगम (LIC) में ₹25,000 जमा करती है। माता-पिता दोनों को ₹2-2 लाख का जीवन बीमा भी मिलता है, जो बेटी के 18 साल की होने या माता/पिता के 55 साल के होने तक चलता है।",
      "मकसद है बेटी के जन्म को लेकर भेदभाव ख़त्म करना, लिंग अनुपात सुधारना, माता-पिता की मृत्यु होने पर भी बेटी का भविष्य सुरक्षित रखना और उसकी पढ़ाई पूरी कराना।",
    ],
  },
  benefits: {
    en: [
      "₹25,000 deposited with LIC in the daughter's name at birth.",
      "Life insurance of ₹2 lakh for each parent (or legal guardian), until the girl turns 18 or the parent turns 55.",
      "Available for the first two daughters of a BPL family.",
    ],
    hi: [
      "जन्म पर बेटी के नाम LIC में ₹25,000 जमा।",
      "माता और पिता (या क़ानूनी अभिभावक) दोनों को ₹2-2 लाख का जीवन बीमा, बेटी के 18 साल या माता/पिता के 55 साल का होने तक।",
      "BPL परिवार की पहली दो बेटियों को लाभ।",
    ],
  },
  eligibilityText: {
    en: [
      "The family is BPL and permanently lives in Himachal Pradesh.",
      "The girl is the first or second daughter in the family.",
      "She was born on or after 1 April 2026.",
      "The parents have not already used the scheme for two daughters.",
      "The girl must not be married before 18 (or the legal age).",
    ],
    hi: [
      "परिवार BPL हो और हिमाचल प्रदेश का स्थायी निवासी हो।",
      "बेटी परिवार की पहली या दूसरी बेटी हो।",
      "उसका जन्म 1 अप्रैल 2026 या उसके बाद हुआ हो।",
      "माता-पिता ने पहले से दो बेटियों के लिए यह लाभ न लिया हो।",
      "बेटी की शादी 18 साल (या क़ानूनी उम्र) से पहले न हो।",
    ],
  },
  exclusions: {
    en: [
      "Families that are not BPL.",
      "Daughters born before 1 April 2026 (they come under the old Beti Hai Anmol rules).",
      "A third or later daughter.",
      "The benefit is lost if the girl is married before the legal age.",
    ],
    hi: [
      "जो परिवार BPL नहीं हैं।",
      "1 अप्रैल 2026 से पहले जन्मी बेटियाँ (उन पर पुरानी बेटी है अनमोल के नियम लागू हैं)।",
      "तीसरी या उसके बाद की बेटी।",
      "क़ानूनी उम्र से पहले शादी होने पर लाभ नहीं मिलता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the Himachal e-District portal (edistrict.hp.gov.in) or through the scheme page on wcd.hp.gov.in.",
        "Upload the documents and submit; download the confirmation receipt.",
        "You can also ask your Anganwadi worker or the CDPO office for help.",
      ],
      hi: [
        "हिमाचल ई-डिस्ट्रिक्ट पोर्टल (edistrict.hp.gov.in) पर या wcd.hp.gov.in पर योजना पेज से आवेदन करें।",
        "दस्तावेज़ अपलोड करके जमा करें; पुष्टि की रसीद डाउनलोड करें।",
        "मदद के लिए अपनी आंगनवाड़ी कार्यकर्ता या CDPO कार्यालय से भी पूछ सकते हैं।",
      ],
    },
  },
  documents: {
    en: ["Bonafide Himachali certificate", "BPL certificate", "Proof of the daughter's date of birth", "Ration card", "Anganwadi report"],
    hi: ["हिमाचली बोनाफ़ाइड प्रमाण पत्र", "BPL प्रमाण पत्र", "बेटी की जन्म तिथि का प्रमाण", "राशन कार्ड", "आंगनवाड़ी रिपोर्ट"],
  },
  faqs: [
    {
      q: { en: "My daughter was born in 2025. Which scheme applies?", hi: "मेरी बेटी 2025 में पैदा हुई। कौन-सी योजना लागू होगी?" },
      a: {
        en: "Sukh Suraksha covers girls born on or after 1 April 2026. For earlier births, ask the CDPO office about the old Beti Hai Anmol benefits.",
        hi: "सुख सुरक्षा 1 अप्रैल 2026 या उसके बाद जन्मी लड़कियों के लिए है। पहले जन्मी बेटियों के लिए पुरानी बेटी है अनमोल के लाभ के बारे में CDPO कार्यालय से पूछें।",
      },
    },
    {
      q: { en: "Is the ₹25,000 paid to us in cash?", hi: "क्या ₹25,000 हमें नकद मिलते हैं?" },
      a: {
        en: "No. It is deposited with LIC as a corpus for your daughter, not paid to the family.",
        hi: "नहीं। यह बेटी के लिए LIC में जमा पूँजी के रूप में रखा जाता है, परिवार को नकद नहीं मिलता।",
      },
    },
  ],

  officialUrl: "https://wcd.hp.gov.in/schemes/view?schemeId=30",
  sources: ["https://wcd.hp.gov.in/schemes/view?schemeId=30", "https://wcd.hp.gov.in/schemes/view?schemeId=33"],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
