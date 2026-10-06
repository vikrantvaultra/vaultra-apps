import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "tamil-nadu-girl-child-protection",
  tier: "compact",
  overlapGroup: "daughter-savings",
  name: { en: "Chief Minister's Girl Child Protection Scheme", hi: "मुख्यमंत्री बालिका संरक्षण योजना (तमिलनाडु)" },
  aka: ["CMGCPS", "Girl Child Protection Scheme Tamil Nadu", "Sivagami Ammaiyar Ninaivu Girl Child Protection Scheme"],
  shortDescription: {
    en: "Tamil Nadu families with only one or two daughters (income up to ₹1.2 lakh) get a fixed deposit of ₹50,000 for one girl or ₹25,000 each for two, paid with interest at 18.",
    hi: "तमिलनाडु में सिर्फ़ एक या दो बेटियों वाले परिवारों (आय ₹1.2 लाख तक) के लिए एक बेटी पर ₹50,000 या दो बेटियों पर ₹25,000-₹25,000 की FD, जो 18 साल पर ब्याज समेत मिलती है।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Social Welfare and Women Empowerment Department, Government of Tamil Nadu",
    hi: "समाज कल्याण एवं महिला सशक्तिकरण विभाग, तमिलनाडु सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "daughter", "fixed deposit", "savings", "family planning", "education"],
  benefitType: "savings",
  isDBT: false,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("tamil-nadu"),
    labelled(isTrue("daughterUnder10"), { en: "You have a young daughter", hi: "आपकी एक छोटी बेटी है" }),
    incomeUpTo(120_000),
  ),

  details: {
    en: [
      "Started in 1992, this scheme invests money in the name of girl children from poor families that have only daughters and no son. It aims to keep girls in school, discourage marriage before 18 and encourage small families.",
      "The government places a fixed deposit with the Tamil Nadu Power Finance and Infrastructure Development Corporation. It is renewed every 5 years, and when the girl turns 18 she receives the deposit with interest, provided she has appeared for the Class 10 public exam. From the sixth year of the deposit she also gets ₹1,800 a year for education costs.",
    ],
    hi: [
      "1992 में शुरू हुई यह योजना उन गरीब परिवारों की बेटियों के नाम पर पैसा जमा करती है, जिनमें सिर्फ़ बेटियाँ हैं, बेटा नहीं। इसका मक़सद लड़कियों को स्कूल में बनाए रखना, 18 से पहले शादी रोकना और छोटे परिवार को बढ़ावा देना है।",
      "सरकार तमिलनाडु पावर फ़ाइनेंस एंड इंफ़्रास्ट्रक्चर डेवलपमेंट कॉर्पोरेशन में FD करती है। यह हर 5 साल पर नवीनीकृत होती है, और 18 साल की होने पर बेटी को ब्याज समेत पूरी राशि मिलती है, बशर्ते उसने कक्षा 10 की बोर्ड परीक्षा दी हो। FD के छठे साल से उसे पढ़ाई के ख़र्च के लिए हर साल ₹1,800 भी मिलते हैं।",
    ],
  },
  benefits: {
    en: [
      "Family with one girl child only: ₹50,000 fixed deposit in her name.",
      "Family with two girl children only: ₹25,000 fixed deposit in the name of each girl.",
      "₹1,800 a year for education from the sixth year of the deposit.",
      "The full matured amount with interest is paid to the girl at 18.",
    ],
    hi: [
      "सिर्फ़ एक बेटी वाला परिवार: उसके नाम पर ₹50,000 की FD।",
      "सिर्फ़ दो बेटियों वाला परिवार: हर बेटी के नाम पर ₹25,000 की FD।",
      "FD के छठे साल से पढ़ाई के लिए हर साल ₹1,800।",
      "18 साल की होने पर बेटी को ब्याज समेत पूरी राशि मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Your family lives in Tamil Nadu and has only one or two daughters and no son.",
      "Annual family income is up to ₹1,20,000.",
      "One of the parents has undergone family planning (sterilisation) before the age of 40.",
      "The girl must appear for the Class 10 public exam to receive the matured amount.",
    ],
    hi: [
      "आपका परिवार तमिलनाडु में रहता है और उसमें सिर्फ़ एक या दो बेटियाँ हैं, बेटा नहीं।",
      "परिवार की सालाना आय ₹1,20,000 तक है।",
      "माता या पिता में से किसी एक ने 40 साल की उम्र से पहले नसबंदी (परिवार नियोजन) करवाई है।",
      "पूरी राशि पाने के लिए बेटी को कक्षा 10 की बोर्ड परीक्षा देनी होगी।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the application form from the District Social Welfare Office or the Social Welfare Extension Officer at your block office, or apply through an e-Sevai centre.",
        "Attach the documents and submit it. Apply as early as possible after the girl's birth, as there is an age limit for the child.",
        "After approval you receive a copy of the fixed deposit receipt; keep it safe until she turns 18.",
      ],
      hi: [
        "ज़िला समाज कल्याण कार्यालय या ब्लॉक कार्यालय के समाज कल्याण विस्तार अधिकारी से फ़ॉर्म लें, या ई-सेवै केंद्र से आवेदन करें।",
        "दस्तावेज़ लगाकर जमा करें। बेटी के जन्म के बाद जितनी जल्दी हो सके आवेदन करें, क्योंकि बच्ची की उम्र की सीमा है।",
        "मंज़ूरी के बाद आपको FD रसीद की कॉपी मिलती है; उसे बेटी के 18 साल की होने तक संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Birth certificate of the girl(s)", "Family planning (sterilisation) certificate of a parent", "Income certificate"],
    hi: ["बेटी/बेटियों का जन्म प्रमाण पत्र", "माता या पिता का नसबंदी प्रमाण पत्र", "आय प्रमाण पत्र"],
  },

  officialUrl: "https://www.tnsocialwelfare.tn.gov.in/en/specilisationschild-welfare/chief-ministers-girl-child-protection-scheme",
  sources: [
    "https://www.tnsocialwelfare.tn.gov.in/en/specilisationschild-welfare/chief-ministers-girl-child-protection-scheme",
    "https://www.tnsocialwelfare.tn.gov.in/en",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1992,
  status: "active",
};

export default scheme;
