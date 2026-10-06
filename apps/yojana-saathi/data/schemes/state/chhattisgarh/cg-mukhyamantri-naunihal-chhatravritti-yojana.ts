import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cg-mukhyamantri-naunihal-chhatravritti-yojana",
  tier: "compact",
  overlapGroup: "scholarship",
  name: {
    en: "Mukhyamantri Naunihal Chhatravritti Yojana (Chhattisgarh Construction Workers)",
    hi: "मुख्यमंत्री नौनिहाल छात्रवृत्ति योजना (छत्तीसगढ़ निर्माण श्रमिक)",
  },
  aka: ["Naunihal scholarship", "CG BOCW scholarship", "shramik bachchon ki chhatravritti"],
  shortDescription: {
    en: "Children of construction workers registered with the Chhattisgarh BOCW Board get a yearly scholarship from Class 1 up to higher education.",
    hi: "छत्तीसगढ़ भवन एवं अन्य सन्निर्माण कर्मकार कल्याण मंडल में पंजीकृत निर्माण श्रमिकों के बच्चों को कक्षा 1 से उच्च शिक्षा तक हर साल छात्रवृत्ति मिलती है।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Chhattisgarh Building and Other Construction Workers Welfare Board, Labour Department",
    hi: "छत्तीसगढ़ भवन एवं अन्य सन्निर्माण कर्मकार कल्याण मंडल, श्रम विभाग",
  },
  categories: ["education", "social-welfare"],
  tags: ["construction worker", "scholarship", "children", "bocw", "labour card", "chhattisgarh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("chhattisgarh"),
    labelled(when("occupation", "in", ["construction-worker"]), {
      en: "A parent is a construction worker registered with the Chhattisgarh BOCW Board",
      hi: "माता या पिता छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल में पंजीकृत निर्माण श्रमिक हों",
    }),
  ),

  details: {
    en: [
      "Naunihal Chhatravritti is the study help that the Chhattisgarh construction workers' welfare board gives to the children of its registered workers.",
      "A fixed scholarship is paid every year based on the child's class or course, from Class 1 up to college and higher studies. The money goes to the bank account by DBT.",
    ],
    hi: [
      "नौनिहाल छात्रवृत्ति छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल की ओर से पंजीकृत श्रमिकों के बच्चों को पढ़ाई के लिए दी जाने वाली मदद है।",
      "बच्चे की कक्षा या कोर्स के हिसाब से हर साल तय छात्रवृत्ति मिलती है, कक्षा 1 से कॉलेज और उच्च शिक्षा तक। पैसा DBT से बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "A yearly scholarship for each eligible child, with the amount fixed by class or course.",
      "Available from Class 1 to higher education.",
    ],
    hi: [
      "हर पात्र बच्चे को सालाना छात्रवृत्ति, राशि कक्षा या कोर्स के हिसाब से तय।",
      "कक्षा 1 से उच्च शिक्षा तक मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "The child's mother or father is a construction worker with a valid registration (labour card) with the Chhattisgarh BOCW Board.",
      "The child is studying in a recognised school, college or institute.",
    ],
    hi: [
      "बच्चे की माँ या पिता छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल में वैध पंजीयन (श्रम कार्ड) वाले निर्माण श्रमिक हों।",
      "बच्चा किसी मान्यता प्राप्त स्कूल, कॉलेज या संस्थान में पढ़ रहा हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply through the Chhattisgarh Labour Department portal (shramevjayate.cg.gov.in) or its mobile app using the worker's registration.",
        "Upload the child's admission or marks details and bank details.",
      ],
      hi: [
        "श्रमिक के पंजीयन से छत्तीसगढ़ श्रम विभाग के पोर्टल (shramevjayate.cg.gov.in) या उसके मोबाइल ऐप पर आवेदन करें।",
        "बच्चे के दाख़िले या अंकसूची और बैंक खाते का विवरण अपलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit the district labour office or a Lok Seva Kendra with the labour card and the child's school documents.",
        "Keep the acknowledgement to track the application.",
      ],
      hi: [
        "श्रम कार्ड और बच्चे के स्कूल के काग़ज़ लेकर ज़िला श्रम कार्यालय या लोक सेवा केंद्र जाएँ।",
        "आवेदन की स्थिति देखने के लिए पावती संभाल कर रखें।",
      ],
    },
  },
  officialUrl: "https://shramevjayate.cg.gov.in/",
  sources: [
    "https://dprcg.gov.in/post/1790853959/Education-of-children-from-labour-families-has-become-easier-with-the-Chief-Minister-Naunihal-Scholarship-Scheme",
    "https://shramevjayate.cg.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2014,
  status: "active",
};

export default scheme;
