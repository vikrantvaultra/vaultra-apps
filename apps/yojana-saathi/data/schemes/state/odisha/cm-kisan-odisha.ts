import { all, labelled, minAge, notGovtEmployee, notTaxPayer, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cm-kisan-odisha",
  overlapGroup: "farmer-income",
  name: { en: "CM-KISAN Yojana (Odisha)", hi: "सीएम-किसान योजना (ओडिशा)" },
  aka: ["CM KISAN", "CM-KISAN", "Odisha CM Kisan", "KALIA replacement", "Mukhyamantri Kisan Odisha"],
  shortDescription: {
    en: "Small and marginal farmers and sharecroppers in Odisha get ₹4,000 a year (₹2,000 each for Kharif and Rabi); landless farm households get ₹12,500 for a livelihood unit.",
    hi: "ओडिशा के छोटे-सीमांत किसानों और बटाईदारों को हर साल ₹4,000 (खरीफ़ और रबी में ₹2,000-₹2,000); भूमिहीन खेतिहर परिवारों को आजीविका के लिए ₹12,500।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Agriculture and Farmers' Empowerment, Government of Odisha",
    hi: "कृषि एवं किसान सशक्तिकरण विभाग, ओडिशा सरकार",
  },
  categories: ["agriculture"],
  tags: ["farmer", "cm kisan", "income support", "landless", "sharecropper", "dbt", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 4000, period: "yearly", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("odisha"),
    minAge(18),
    labelled(when("occupation", "in", ["farmer", "agri-labourer"]), {
      en: "You are a small or marginal farmer, a sharecropper, or a landless farm worker",
      hi: "आप छोटे या सीमांत किसान, बटाईदार या भूमिहीन खेतिहर मज़दूर हैं",
    }),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
    labelled(notGovtEmployee(), {
      en: "No one in the family is a serving or retired government/PSU employee",
      hi: "परिवार में कोई मौजूदा या रिटायर सरकारी/सरकारी उपक्रम कर्मचारी न हो",
    }),
  ),

  details: {
    en: [
      "CM-KISAN is Odisha's own farmer support scheme, launched on Nuakhai (8 September 2024) in place of the earlier KALIA scheme. It adds to the central PM-KISAN money, so an eligible small farmer gets ₹10,000 a year in all from the two schemes.",
      "Small and marginal farmers and sharecroppers (actual cultivators) get ₹2,000 before each of the Kharif and Rabi seasons, to spend as they choose on seeds, fertiliser, pesticide or labour. Landless agricultural households get one-time help of ₹12,500, paid in three instalments, to start a livelihood unit such as goats, poultry, ducks, fishery, mushrooms, bee-keeping, dairy or tasar farming.",
      "The Agriculture and Farmers' Empowerment Department runs the scheme. The 2026-27 budget provides ₹2,030 crore; in 2025-26 it reached about 51.6 lakh farmers. The portal reopened for new farmer registration on 6 July 2026, and an AgriStack Farmer ID is now needed to enrol.",
    ],
    hi: [
      "सीएम-किसान ओडिशा सरकार की अपनी किसान सहायता योजना है, जो पुरानी KALIA योजना की जगह नुआखाई (8 सितंबर 2024) पर शुरू हुई। यह केंद्र की पीएम-किसान राशि के ऊपर मिलती है, यानी पात्र छोटे किसान को दोनों योजनाओं से साल में कुल ₹10,000 मिलते हैं।",
      "छोटे-सीमांत किसानों और बटाईदारों (असल में खेती करने वालों) को खरीफ़ और रबी, दोनों सीज़न से पहले ₹2,000-₹2,000 मिलते हैं, जिन्हें वे बीज, खाद, कीटनाशक या मज़दूरी पर अपनी मर्ज़ी से खर्च कर सकते हैं। भूमिहीन खेतिहर परिवारों को बकरी, मुर्गी, बत्तख, मछली पालन, मशरूम, मधुमक्खी, डेयरी या तसर जैसी आजीविका इकाई शुरू करने के लिए तीन किस्तों में एक बार ₹12,500 मिलते हैं।",
      "यह योजना कृषि एवं किसान सशक्तिकरण विभाग चलाता है। 2026-27 के बजट में ₹2,030 करोड़ रखे गए हैं; 2025-26 में लगभग 51.6 लाख किसानों को लाभ मिला। नए किसानों का रजिस्ट्रेशन 6 जुलाई 2026 से फिर खुला है, और अब जुड़ने के लिए एग्रीस्टैक फ़ार्मर ID ज़रूरी है।",
    ],
  },
  benefits: {
    en: [
      "Small and marginal farmers and sharecroppers: ₹4,000 a year, as ₹2,000 for Kharif and ₹2,000 for Rabi.",
      "Landless agricultural households: ₹12,500 one time, in three instalments, for a livelihood unit of your choice.",
      "Children of CM-KISAN families studying technical or professional courses can apply for the Krushi Vidya Nidhi scholarship.",
      "Money is paid by DBT into your Aadhaar-linked bank account.",
    ],
    hi: [
      "छोटे-सीमांत किसान और बटाईदार: साल में ₹4,000, यानी खरीफ़ के लिए ₹2,000 और रबी के लिए ₹2,000।",
      "भूमिहीन खेतिहर परिवार: अपनी पसंद की आजीविका इकाई के लिए तीन किस्तों में एक बार ₹12,500।",
      "सीएम-किसान परिवारों के तकनीकी या प्रोफ़ेशनल कोर्स पढ़ रहे बच्चे कृषि विद्या निधि छात्रवृत्ति के लिए आवेदन कर सकते हैं।",
      "पैसा DBT से आपके आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a permanent resident of Odisha and at least 18 years old.",
      "You are a small or marginal farmer or a sharecropper who actually cultivates the land, or a rural landless household that depends mainly on farm work.",
      "Your family has a valid ration card.",
      "Only one member per family can be a beneficiary.",
    ],
    hi: [
      "आप ओडिशा के स्थायी निवासी हैं और कम से कम 18 साल के हैं।",
      "आप छोटे या सीमांत किसान या बटाईदार हैं जो खुद खेती करते हैं, या ऐसे ग्रामीण भूमिहीन परिवार से हैं जो मुख्य रूप से खेती के काम पर निर्भर है।",
      "आपके परिवार के पास मान्य राशन कार्ड है।",
      "एक परिवार से सिर्फ़ एक सदस्य लाभार्थी हो सकता है।",
    ],
  },
  exclusions: {
    en: [
      "Medium and large farmers.",
      "Families where the farmer, spouse or any member pays income tax, or is a serving or retired government or PSU employee or pensioner.",
      "Current or former ministers, MPs, MLAs, mayors, zilla parishad chairpersons and holders of constitutional posts.",
      "Doctors, engineers, lawyers, chartered accountants and architects registered with professional bodies.",
      "Applicants whose name doesn't match their Aadhaar, or who don't have a valid ration card.",
      "The 2024 guideline also excludes farmers living in urban areas; check with your agriculture office.",
    ],
    hi: [
      "मध्यम और बड़े किसान।",
      "ऐसे परिवार जिनमें किसान, जीवनसाथी या कोई सदस्य आयकर देता है, या मौजूदा/रिटायर सरकारी या सरकारी उपक्रम कर्मचारी या पेंशनभोगी है।",
      "मौजूदा या पूर्व मंत्री, सांसद, विधायक, महापौर, ज़िला परिषद अध्यक्ष और संवैधानिक पदों पर रहे लोग।",
      "पेशेवर संस्थाओं में पंजीकृत डॉक्टर, इंजीनियर, वकील, चार्टर्ड अकाउंटेंट और आर्किटेक्ट।",
      "जिनका नाम आधार से मेल नहीं खाता, या जिनके पास मान्य राशन कार्ड नहीं है।",
      "2024 की गाइडलाइन शहरी इलाकों के किसानों को भी बाहर रखती है; अपने कृषि कार्यालय से पता करें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Get your AgriStack Farmer ID first if you don't have one.",
        "Go to cmkisan.odisha.gov.in and choose new farmer registration.",
        "Enter your Aadhaar, ration card, bank and land (or MGNREGS job card) details and upload the documents.",
        "Complete e-KYC. Village and block agriculture officers verify the application and the Collector approves it.",
      ],
      hi: [
        "अगर एग्रीस्टैक फ़ार्मर ID नहीं है तो पहले बनवाएँ।",
        "cmkisan.odisha.gov.in पर जाएँ और नए किसान का रजिस्ट्रेशन चुनें।",
        "आधार, राशन कार्ड, बैंक और ज़मीन (या मनरेगा जॉब कार्ड) की जानकारी भरें और दस्तावेज़ अपलोड करें।",
        "e-KYC पूरी करें। गाँव और ब्लॉक के कृषि अधिकारी आवेदन जाँचते हैं और कलेक्टर मंज़ूरी देते हैं।",
      ],
    },
    offline: {
      en: [
        "Visit your Village Agriculture Worker or block agriculture office for help registering on the portal.",
        "Paper applications are no longer accepted; the registration is done online on your behalf.",
      ],
      hi: [
        "पोर्टल पर रजिस्ट्रेशन में मदद के लिए अपने ग्राम कृषि कार्यकर्ता या ब्लॉक कृषि कार्यालय जाएँ।",
        "अब कागज़ी आवेदन नहीं लिया जाता; आपकी ओर से ऑनलाइन रजिस्ट्रेशन किया जाता है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Ration card",
      "First page of your savings bank passbook",
      "Land records (for small and marginal farmers) or MGNREGS job card (for landless households)",
      "AgriStack Farmer ID",
    ],
    hi: [
      "आधार कार्ड",
      "राशन कार्ड",
      "बचत खाते की पासबुक का पहला पन्ना",
      "ज़मीन के कागज़ (छोटे-सीमांत किसानों के लिए) या मनरेगा जॉब कार्ड (भूमिहीन परिवारों के लिए)",
      "एग्रीस्टैक फ़ार्मर ID",
    ],
  },
  faqs: [
    {
      q: { en: "Is KALIA still running?", hi: "क्या KALIA योजना अब भी चल रही है?" },
      a: {
        en: "No. CM-KISAN replaced KALIA in September 2024. Former KALIA farmers who meet the CM-KISAN rules are covered under CM-KISAN.",
        hi: "नहीं। सितंबर 2024 में KALIA की जगह सीएम-किसान आ गई। KALIA के जो किसान सीएम-किसान की शर्तें पूरी करते हैं, वे सीएम-किसान में शामिल हैं।",
      },
    },
    {
      q: { en: "I get PM-KISAN. Can I also get CM-KISAN?", hi: "मुझे पीएम-किसान मिलता है। क्या सीएम-किसान भी मिलेगा?" },
      a: {
        en: "Yes. CM-KISAN is a state top-up to PM-KISAN, so an eligible small farmer gets ₹6,000 from the Centre and ₹4,000 from the state.",
        hi: "हाँ। सीएम-किसान, पीएम-किसान के ऊपर राज्य की अतिरिक्त राशि है, यानी पात्र छोटे किसान को केंद्र से ₹6,000 और राज्य से ₹4,000 मिलते हैं।",
      },
    },
    {
      q: { en: "I am a sharecropper without land papers. Can I apply?", hi: "मैं बटाईदार हूँ, मेरे नाम ज़मीन के कागज़ नहीं हैं। क्या आवेदन कर सकता हूँ?" },
      a: {
        en: "Yes, sharecroppers who actually cultivate are covered. Field officers verify your claim; ask your Village Agriculture Worker what proof is accepted in your area.",
        hi: "हाँ, असल में खेती करने वाले बटाईदार शामिल हैं। फ़ील्ड अधिकारी आपके दावे की जाँच करते हैं; अपने ग्राम कृषि कार्यकर्ता से पूछें कि आपके इलाके में कौन-सा सबूत माना जाता है।",
      },
    },
  ],

  officialUrl: "https://cmkisan.odisha.gov.in/",
  sources: [
    "https://cmkisan.odisha.gov.in/pdf/CM-KISAN-Guideline.pdf",
    "https://cmkisan.odisha.gov.in/",
    "https://finance.odisha.gov.in/sites/default/files/2025-08/02-BUDGET_SPEECH_ENGLISH-PART-1.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
