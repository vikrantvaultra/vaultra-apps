import { all, ageBetween, female, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "cg-mukhyamantri-noni-sashaktikaran-sahayata-yojana",
  tier: "compact",
  name: {
    en: "Mukhyamantri Noni Sashaktikaran Sahayata Yojana (Chhattisgarh Construction Workers)",
    hi: "मुख्यमंत्री नोनी सशक्तिकरण सहायता योजना (छत्तीसगढ़ निर्माण श्रमिक)",
  },
  aka: ["Noni Sashaktikaran Yojana", "Noni scheme", "CG BOCW daughter help"],
  shortDescription: {
    en: "The first two unmarried daughters of registered construction workers in Chhattisgarh get a one-time ₹20,000 when they are 18 to 21 and have passed Class 10.",
    hi: "छत्तीसगढ़ के पंजीकृत निर्माण श्रमिकों की पहली दो अविवाहित बेटियों को 18 से 21 साल की उम्र में और 10वीं पास होने पर एक बार ₹20,000 मिलते हैं।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Chhattisgarh Building and Other Construction Workers Welfare Board, Labour Department",
    hi: "छत्तीसगढ़ भवन एवं अन्य सन्निर्माण कर्मकार कल्याण मंडल, श्रम विभाग",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["daughter", "girls", "construction worker", "bocw", "one-time grant", "chhattisgarh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 20000, period: "one-time", kind: "cash" },
  ageRange: { min: 18, max: 21 },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("chhattisgarh"),
    female(),
    ...ageBetween(18, 21),
    labelled(when("marital", "eq", "never-married"), { en: "Unmarried", hi: "अविवाहित हो" }),
  ),

  details: {
    en: [
      "This scheme of the Chhattisgarh construction workers' welfare board helps the daughters of registered workers become self-reliant.",
      "A one-time grant of ₹20,000 is paid to the daughter's bank account. She can use it for studies, a job, starting her own work, or her wedding.",
    ],
    hi: [
      "छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल की यह योजना पंजीकृत श्रमिकों की बेटियों को आत्मनिर्भर बनाने में मदद करती है।",
      "बेटी के बैंक खाते में एक बार ₹20,000 दिए जाते हैं। वह इसे पढ़ाई, रोज़गार, अपना काम शुरू करने या शादी में लगा सकती है।",
    ],
  },
  benefits: {
    en: ["₹20,000 one-time grant in the daughter's bank account."],
    hi: ["बेटी के बैंक खाते में एक बार ₹20,000।"],
  },
  eligibilityText: {
    en: [
      "Daughter of a construction worker registered with the Chhattisgarh BOCW Board.",
      "Only the first two unmarried daughters of the worker.",
      "Aged 18 to 21 years.",
      "Has passed at least Class 10.",
    ],
    hi: [
      "छत्तीसगढ़ निर्माण श्रमिक कल्याण मंडल में पंजीकृत निर्माण श्रमिक की बेटी।",
      "श्रमिक की सिर्फ़ पहली दो अविवाहित बेटियाँ।",
      "उम्र 18 से 21 साल।",
      "कम से कम 10वीं पास हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the Chhattisgarh Labour Department portal (shramevjayate.cg.gov.in) or app using the parent's labour registration.",
        "Upload the daughter's age proof, Class 10 marksheet and bank details.",
      ],
      hi: [
        "माता या पिता के श्रम पंजीयन से छत्तीसगढ़ श्रम विभाग के पोर्टल (shramevjayate.cg.gov.in) या ऐप पर आवेदन करें।",
        "बेटी की उम्र का प्रमाण, 10वीं की अंकसूची और बैंक खाते का विवरण अपलोड करें।",
      ],
    },
    offline: {
      en: [
        "Or visit the district labour office or a Lok Seva Kendra with these documents.",
        "Keep the acknowledgement to track the application.",
      ],
      hi: [
        "या ये दस्तावेज़ लेकर ज़िला श्रम कार्यालय या लोक सेवा केंद्र जाएँ।",
        "आवेदन की स्थिति देखने के लिए पावती संभाल कर रखें।",
      ],
    },
  },
  officialUrl: "https://shramevjayate.cg.gov.in/",
  sources: [
    "https://dprcg.gov.in/post/1791127913/%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%AA%E0%A5%81%E0%A4%B0-%E2%80%99%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%95%E0%A5%80-%E0%A4%95%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A5%80%E2%80%99-%E2%80%99%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%A8%E0%A5%8B%E0%A4%A8%E0%A5%80-%E0%A4%B8%E0%A4%B6%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%B0%E0%A4%A3-%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A4%BE-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%B8%E0%A5%87-%E0%A4%AE%E0%A4%BE%E0%A4%A7%E0%A5%81%E0%A4%B0%E0%A5%80-%E0%A4%B9%E0%A5%81%E0%A4%88%E0%A4%82-%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%BF%E0%A4%95-%E0%A4%B0%E0%A5%82%E0%A4%AA-%E0%A4%B8%E0%A5%87-%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%B2%E2%80%99",
    "https://shramevjayate.cg.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
