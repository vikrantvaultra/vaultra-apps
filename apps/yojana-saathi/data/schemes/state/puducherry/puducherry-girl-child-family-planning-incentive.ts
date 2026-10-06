import { all, incomeUpTo, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "puducherry-girl-child-family-planning-incentive",
  tier: "compact",
  overlapGroup: "daughter-savings",
  name: {
    en: "Incentive to Families with One or Two Girl Children after Family Planning (Puducherry)",
    hi: "परिवार नियोजन के बाद एक या दो बेटियों वाले परिवारों को प्रोत्साहन (पुडुचेरी)",
  },
  aka: ["Puducherry girl child incentive", "Two girl child scheme Puducherry"],
  shortDescription: {
    en: "Poor parents in Puducherry with only one or two daughters, where one parent has had a sterilisation operation, get a savings deposit in the girls' names that pays out at 18.",
    hi: "पुडुचेरी के वे गरीब माता-पिता जिनकी केवल एक या दो बेटियाँ हैं और जिनमें से एक ने नसबंदी करा ली है, बेटियों के नाम बचत जमा पाते हैं, जो 18 साल पर मिलती है।",
  },
  level: "state",
  state: "puducherry",
  department: {
    en: "Department of Women and Child Development, Government of Puducherry",
    hi: "महिला एवं बाल विकास विभाग, पुडुचेरी सरकार",
  },
  categories: ["women-child"],
  tags: ["girl child", "daughter", "family planning", "sterilisation", "deposit", "puducherry"],
  benefitType: "savings",
  isDBT: false,
  kundliHouse: "daughter",
  eligibility: all(residentOf("puducherry"), labelled(incomeUpTo(75_000), { en: "Annual income up to ₹75,000", hi: "सालाना आय ₹75,000 तक" })),

  details: {
    en: [
      "This Puducherry scheme aims to raise the status of the girl child. Parents who have only one or two daughters and in which one parent has undergone family planning get an amount deposited in the girls' names, payable when each girl turns 18.",
      "The department's page lists ₹30,000 for one girl or ₹15,000 for each of two girls, but the May 2026 beneficiary list shows ₹50,000 against each girl. Check the current amount with the department.",
    ],
    hi: [
      "पुडुचेरी की इस योजना का मक़सद बेटी का दर्जा बढ़ाना है। जिन माता-पिता की केवल एक या दो बेटियाँ हैं और जिनमें से एक ने परिवार नियोजन (नसबंदी) करा लिया है, उनकी बेटियों के नाम राशि जमा की जाती है, जो हर बेटी को 18 साल की होने पर मिलती है।",
      "विभाग के पेज पर एक बेटी के लिए ₹30,000 या दो बेटियों के लिए ₹15,000-₹15,000 लिखा है, पर मई 2026 की लाभार्थी सूची में हर बेटी के आगे ₹50,000 दिखाए गए हैं। मौजूदा राशि विभाग से पता करें।",
    ],
  },
  benefits: {
    en: ["A deposit in each girl's name that she receives at age 18."],
    hi: ["हर बेटी के नाम जमा राशि, जो उसे 18 साल की उम्र पर मिलती है।"],
  },
  eligibilityText: {
    en: [
      "Parents with only one girl child or only two girl children.",
      "Either parent has undergone a family planning (sterilisation) operation at a Central or State Government hospital.",
      "Annual income not more than ₹75,000; father at least 21 and mother at least 18; marriage registered.",
      "Indian citizens, with at least one parent a native of Puducherry by birth or five years' residence.",
    ],
    hi: [
      "ऐसे माता-पिता जिनकी केवल एक बेटी या केवल दो बेटियाँ हैं।",
      "माता-पिता में से किसी एक ने केंद्र या राज्य सरकार के अस्पताल में परिवार नियोजन (नसबंदी) ऑपरेशन कराया हो।",
      "सालाना आय ₹75,000 से ज़्यादा न हो; पिता कम से कम 21 और माँ कम से कम 18 साल की हो; शादी पंजीकृत हो।",
      "भारतीय नागरिक हों, और माता-पिता में से कम से कम एक जन्म से या पाँच साल रहने से पुडुचेरी का निवासी हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Apply to the Deputy Director (Women Development), Department of Women and Child Development, Puducherry; in Karaikal to the Child Development Project Officer; in Mahe or Yanam to the Welfare Officer.",
        "Attach income and residence certificates, the marriage registration certificate, the sterilisation certificate, age proof of parents, the girls' birth certificates, the ration card and a family photo.",
      ],
      hi: [
        "उप निदेशक (महिला विकास), महिला एवं बाल विकास विभाग, पुडुचेरी को आवेदन दें; कराईकल में बाल विकास परियोजना अधिकारी को और माहे या यानम में कल्याण अधिकारी को।",
        "आय और निवास प्रमाण पत्र, विवाह पंजीकरण प्रमाण पत्र, नसबंदी प्रमाण पत्र, माता-पिता की उम्र का सबूत, बेटियों के जन्म प्रमाण पत्र, राशन कार्ड और परिवार की फ़ोटो लगाएँ।",
      ],
    },
  },

  officialUrl: "https://wcd.py.gov.in/grant-incentive-family-having-one-girl-childtwo-girl-children-and-parents-who-have-undergone-family",
  sources: [
    "https://wcd.py.gov.in/grant-incentive-family-having-one-girl-childtwo-girl-children-and-parents-who-have-undergone-family",
    "https://wcd.py.gov.in/sites/default/files/2-girl-child-may-2026.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
