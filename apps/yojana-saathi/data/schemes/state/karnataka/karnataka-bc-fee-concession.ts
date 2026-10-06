import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "karnataka-bc-fee-concession",
  tier: "compact",
  name: { en: "Karnataka Backward Classes Fee Concession", hi: "कर्नाटक पिछड़ा वर्ग फ़ीस छूट" },
  aka: ["Shulka Vinayithi", "BCWD fee reimbursement", "fee concession Karnataka"],
  shortDescription: {
    en: "Backward Classes students in Karnataka on government-quota seats in post-matric courses get their tuition, lab, exam, sports and library fees paid back by the state.",
    hi: "कर्नाटक के पिछड़ा वर्ग के जो छात्र 10वीं के बाद के कोर्स में सरकारी कोटे की सीट पर पढ़ते हैं, उनकी ट्यूशन, लैब, परीक्षा, खेल और लाइब्रेरी फ़ीस राज्य लौटाता है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Backward Classes Welfare Department, Government of Karnataka",
    hi: "पिछड़ा वर्ग कल्याण विभाग, कर्नाटक सरकार",
  },
  categories: ["education", "social-welfare"],
  tags: ["fee reimbursement", "fee concession", "obc", "backward classes", "student", "karnataka"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("karnataka"),
    when("caste", "eq", "obc"),
    isTrue("student"),
    labelled(incomeUpTo(250_000), {
      en: "Family income up to ₹2.5 lakh a year (Category-1) or ₹1 lakh (other categories)",
      hi: "परिवार की सालाना आय ₹2.5 लाख तक (श्रेणी-1) या ₹1 लाख तक (बाक़ी श्रेणियाँ)",
    }),
  ),

  details: {
    en: [
      "Under this scheme, Karnataka's Backward Classes Welfare Department pays back the main college fees of poor Backward Classes students who got a government-quota seat after Class 10.",
      "The money is the lower of the actual fee or the department's fixed rate, and it is paid into the student's Aadhaar-linked bank account after you apply on the State Scholarship Portal.",
    ],
    hi: [
      "इस योजना में कर्नाटक का पिछड़ा वर्ग कल्याण विभाग उन ग़रीब पिछड़ा वर्ग छात्रों की मुख्य कॉलेज फ़ीस लौटाता है जिन्हें 10वीं के बाद सरकारी कोटे की सीट मिली है।",
      "राशि असल फ़ीस या विभाग की तय दर में से जो कम हो, वह होती है, और राज्य छात्रवृत्ति पोर्टल पर आवेदन के बाद छात्र के आधार से जुड़े बैंक खाते में आती है।",
    ],
  },
  benefits: {
    en: [
      "Reimbursement of five fees: tuition, laboratory (where required), examination, sports and library.",
      "You get the actual fee or the department's fixed rate, whichever is lower.",
    ],
    hi: [
      "पाँच फ़ीस की वापसी: ट्यूशन, लैब (जहाँ ज़रूरी हो), परीक्षा, खेल और लाइब्रेरी।",
      "असल फ़ीस या विभाग की तय दर, जो भी कम हो, वह मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Backward Classes (OBC) student and permanent resident of Karnataka.",
      "Family income up to ₹2.5 lakh a year for Category-1, or up to ₹1 lakh for other categories.",
      "Studies a regular post-matric course on a government-quota seat at a recognised institution.",
      "At least 50% marks in the last exam for Category-1 and blind students, 60% for other categories.",
      "At most two boys per family; no limit for girls.",
    ],
    hi: [
      "पिछड़ा वर्ग (OBC) का छात्र और कर्नाटक का स्थायी निवासी।",
      "परिवार की सालाना आय श्रेणी-1 के लिए ₹2.5 लाख तक, बाक़ी श्रेणियों के लिए ₹1 लाख तक।",
      "किसी मान्य संस्थान में सरकारी कोटे की सीट पर 10वीं के बाद का नियमित कोर्स कर रहा हो।",
      "पिछली परीक्षा में श्रेणी-1 और दृष्टिहीन छात्रों के लिए कम से कम 50%, बाक़ी श्रेणियों के लिए 60% अंक।",
      "एक परिवार के ज़्यादा से ज़्यादा दो लड़के; लड़कियों के लिए कोई सीमा नहीं।",
    ],
  },
  exclusions: {
    en: [
      "Management-quota, private, COMEDK, distance, open-university and evening-college seats.",
      "Students covered by the Social Welfare, Tribal Welfare or Minority Welfare departments' schemes.",
    ],
    hi: [
      "मैनेजमेंट कोटा, प्राइवेट, COMEDK, दूरस्थ शिक्षा, ओपन यूनिवर्सिटी और शाम के कॉलेज की सीटें।",
      "जो छात्र समाज कल्याण, आदिवासी कल्याण या अल्पसंख्यक कल्याण विभाग की योजनाओं में आते हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to the post-matric section of the State Scholarship Portal (ssp.karnataka.gov.in) with the student's Aadhaar.",
        "Enter the caste and income certificate numbers, SSLC registration number and college details.",
        "Submit before the Backward Classes Welfare Department's last date and track the status on SSP.",
      ],
      hi: [
        "छात्र के आधार से राज्य छात्रवृत्ति पोर्टल (ssp.karnataka.gov.in) के पोस्ट-मैट्रिक सेक्शन में लॉग इन करें।",
        "जाति और आय प्रमाण पत्र के नंबर, SSLC रजिस्ट्रेशन नंबर और कॉलेज की जानकारी भरें।",
        "पिछड़ा वर्ग कल्याण विभाग की आख़िरी तारीख़ से पहले जमा करें और SSP पर स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://bcwd.karnataka.gov.in/45/fee-concession/kn",
  sources: ["https://bcwd.karnataka.gov.in/45/fee-concession/kn", "https://ssp.karnataka.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2010,
  status: "active",
};

export default scheme;
