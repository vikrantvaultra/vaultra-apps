import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "arunachal-cm-social-security-scheme",
  tier: "compact",
  name: { en: "Chief Minister's Social Security Scheme (Arunachal Pradesh)", hi: "मुख्यमंत्री सामाजिक सुरक्षा योजना (अरुणाचल प्रदेश)" },
  aka: ["CMSSS", "CM Old Age Pension Arunachal", "CM Widow Pension Arunachal", "Arunachal divyang pension"],
  shortDescription: {
    en: "Arunachal Pradesh's own monthly pensions for elderly people above 60, widows and persons with disabilities, paid by the state government.",
    hi: "अरुणाचल प्रदेश सरकार की अपनी मासिक पेंशन, 60 साल से ज़्यादा उम्र के बुज़ुर्गों, विधवाओं और दिव्यांगजनों के लिए।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Department of Social Justice, Empowerment & Tribal Affairs, Government of Arunachal Pradesh",
    hi: "सामाजिक न्याय, अधिकारिता एवं जनजातीय कार्य विभाग, अरुणाचल प्रदेश सरकार",
  },
  categories: ["social-welfare", "pension-insurance", "disability"],
  tags: ["old age pension", "widow pension", "disability pension", "divyang", "senior citizen", "arunachal"],
  benefitType: "pension",
  isDBT: true,
  kundliHouse: "senior",
  eligibility: all(residentOf("arunachal-pradesh")),

  details: {
    en: [
      "The Chief Minister's Social Security Scheme (CMSSS) is the state's umbrella pension programme. It has three parts: the CM Old Age Pension for people above 60, the CM Widow Pension, and a pension for persons with disabilities (divyangjan).",
      "Tens of thousands of people receive these pensions, and the government releases funds district by district. We could not find an official page giving the current monthly amounts or the full eligibility rules, so please check with your district social welfare office.",
    ],
    hi: [
      "मुख्यमंत्री सामाजिक सुरक्षा योजना (CMSSS) राज्य की मुख्य पेंशन योजना है। इसके तीन हिस्से हैं: 60 साल से ज़्यादा उम्र वालों के लिए CM वृद्धावस्था पेंशन, CM विधवा पेंशन, और दिव्यांगजनों के लिए पेंशन।",
      "हज़ारों लोगों को यह पेंशन मिलती है, और सरकार ज़िलेवार पैसा जारी करती है। मौजूदा मासिक रकम और पूरी पात्रता शर्तें किसी सरकारी पेज पर हमें नहीं मिलीं, इसलिए अपने ज़िला समाज कल्याण दफ़्तर से पता कर लें।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension for elderly people above 60, widows and persons with disabilities.",
      "Paid by the state government into the beneficiary's bank account.",
    ],
    hi: [
      "60 साल से ज़्यादा उम्र के बुज़ुर्गों, विधवाओं और दिव्यांगजनों को हर महीने पेंशन।",
      "राज्य सरकार पैसा लाभार्थी के बैंक खाते में भेजती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Arunachal Pradesh.",
      "Old age pension: above 60 years of age.",
      "Widow pension: a widow (news reports say the minimum age was lowered to 18).",
      "Disability pension: a person with a certified disability.",
    ],
    hi: [
      "अरुणाचल प्रदेश के निवासी।",
      "वृद्धावस्था पेंशन: 60 साल से ज़्यादा उम्र।",
      "विधवा पेंशन: विधवा महिला (ख़बरों के मुताबिक़ न्यूनतम उम्र घटाकर 18 कर दी गई है)।",
      "दिव्यांग पेंशन: प्रमाणित दिव्यांगता वाले व्यक्ति।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Visit your District Social Welfare Officer or the Deputy Commissioner's office and ask for the CMSSS pension form.",
        "Submit it with your age or disability proof, Aadhaar and bank details.",
        "Keep the receipt and follow up with the district office until the pension is sanctioned.",
      ],
      hi: [
        "अपने ज़िला समाज कल्याण अधिकारी या डिप्टी कमिश्नर दफ़्तर जाएँ और CMSSS पेंशन फ़ॉर्म माँगें।",
        "उम्र या दिव्यांगता का सबूत, आधार और बैंक विवरण के साथ जमा करें।",
        "रसीद संभाल कर रखें और पेंशन मंज़ूर होने तक ज़िला दफ़्तर से संपर्क बनाए रखें।",
      ],
    },
  },

  officialUrl: "https://arunachalpradesh.gov.in/",
  sources: [
    "https://www.theweek.in/wire-updates/national/2024/07/12/ces3-ar-social-security.html",
    "https://www.deccanherald.com/amp/story/india%2Farunachal-pradesh%2Farunachal-govt-allocates-rs-150-crore-for-cms-social-security-scheme-3102776",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "check-status",
};

export default scheme;
