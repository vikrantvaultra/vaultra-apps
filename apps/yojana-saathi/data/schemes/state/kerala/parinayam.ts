import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "parinayam",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Parinayam", hi: "परिणयम" },
  aka: ["Parinayam marriage assistance", "marriage assistance for disabled Kerala"],
  shortDescription: {
    en: "Marriage assistance in Kerala for the daughters of parents with disabilities, and for girls with disabilities, from families earning up to ₹1 lakh a year.",
    hi: "केरल में दिव्यांग माता-पिता की बेटियों और दिव्यांग लड़कियों की शादी के लिए आर्थिक मदद, जिनके परिवार की सालाना आय ₹1 लाख तक है।",
  },
  level: "state",
  state: "kerala",
  department: { en: "Social Justice Department, Government of Kerala", hi: "सामाजिक न्याय विभाग, केरल सरकार" },
  categories: ["disability", "women-child", "social-welfare"],
  tags: ["marriage assistance", "daughter marriage", "disability", "suneethi", "kerala"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(residentOf("kerala"), isTrue("disabled"), incomeUpTo(100_000)),

  details: {
    en: [
      "Parinayam has two parts. Parinayam I helps a parent with a disability pay for a daughter's wedding. Parinayam II helps a girl who herself has a disability with her own wedding.",
      "It is run by Kerala's Social Justice Department, and applications are made online on the Suneethi portal at least a month before the wedding. The criteria page does not state the current amount, so check it when you apply.",
    ],
    hi: [
      "परिणयम के दो हिस्से हैं। परिणयम I में दिव्यांग माता/पिता को बेटी की शादी के लिए मदद मिलती है। परिणयम II में ख़ुद दिव्यांग लड़की को अपनी शादी के लिए मदद मिलती है।",
      "इसे केरल का सामाजिक न्याय विभाग चलाता है, और आवेदन शादी से कम से कम एक महीना पहले सुनीति पोर्टल पर ऑनलाइन करना होता है। मानदंड पेज पर अभी की राशि नहीं लिखी है, इसलिए आवेदन करते समय पता कर लें।",
    ],
  },
  benefits: {
    en: [
      "One-time marriage assistance, paid into the bank account.",
      "A parent can get help for the weddings of up to 2 daughters, at least 3 years apart.",
    ],
    hi: [
      "शादी के लिए एक बार की आर्थिक सहायता, बैंक खाते में।",
      "माता/पिता 2 बेटियों तक की शादी के लिए मदद ले सकते हैं, दोनों के बीच कम से कम 3 साल का अंतर होना चाहिए।",
    ],
  },
  eligibilityText: {
    en: [
      "The applicant is a parent with a disability (for a daughter's wedding) or a girl with a disability (for her own wedding).",
      "Total family income from all sources is up to ₹1 lakh a year.",
      "The bride has completed 18 years on the date of application.",
      "Apply at least one month before the wedding date.",
    ],
    hi: [
      "आवेदक दिव्यांग माता/पिता है (बेटी की शादी के लिए) या दिव्यांग लड़की है (अपनी शादी के लिए)।",
      "परिवार की सभी स्रोतों से कुल सालाना आय ₹1 लाख तक है।",
      "आवेदन की तारीख़ पर दुल्हन की उम्र 18 साल पूरी हो चुकी हो।",
      "शादी की तारीख़ से कम से कम एक महीना पहले आवेदन करें।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the Suneethi portal (suneethi.sjd.kerala.gov.in).",
        "Choose Parinayam, fill in the form and upload the disability certificate, income certificate and the groom's affidavit.",
        "Submit at least a month before the wedding and track the status on the portal.",
      ],
      hi: [
        "सुनीति पोर्टल (suneethi.sjd.kerala.gov.in) पर रजिस्टर करें।",
        "परिणयम चुनें, फ़ॉर्म भरें और दिव्यांगता प्रमाण पत्र, आय प्रमाण पत्र और दूल्हे का शपथ पत्र अपलोड करें।",
        "शादी से कम से कम एक महीना पहले जमा करें और पोर्टल पर स्थिति देखें।",
      ],
    },
  },

  officialUrl: "https://suneethi.sjd.kerala.gov.in/",
  sources: ["https://suneethi.sjd.kerala.gov.in/Citizen_Platform/suneethi/criteria.php", "https://suneethi.sjd.kerala.gov.in/"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
