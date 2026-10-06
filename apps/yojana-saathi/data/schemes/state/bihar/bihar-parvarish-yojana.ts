import { all, incomeUpTo, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-parvarish-yojana",
  tier: "compact",
  name: { en: "Parvarish Yojana (Bihar)", hi: "परवरिश योजना (बिहार)" },
  aka: ["Parwarish Yojana", "Bihar orphan child support"],
  shortDescription: {
    en: "Monthly support from the Bihar government for the upbringing of orphaned or destitute children, and children affected by HIV/AIDS or leprosy, living with relatives in poor families.",
    hi: "अनाथ या बेसहारा बच्चों, और HIV/AIDS या कुष्ठ रोग से प्रभावित बच्चों की परवरिश के लिए बिहार सरकार से हर महीने मदद, जो गरीब परिवारों में रिश्तेदारों के साथ रहते हैं।",
  },
  level: "state",
  state: "bihar",
  department: { en: "Social Welfare Department, Government of Bihar", hi: "समाज कल्याण विभाग, बिहार सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["orphan", "child", "foster care", "hiv", "monthly support", "bihar"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "women-family",
  eligibility: all(residentOf("bihar"), incomeUpTo(60_000)),

  details: {
    en: [
      "Parvarish Yojana is a fully state-funded Bihar scheme that helps relatives or foster families raise children who have lost their parents or have no one to care for them. It also covers children who have HIV/AIDS or leprosy, or whose parents do.",
      "The Social Welfare Department pays a monthly amount through the Anganwadi (ICDS) network into a joint bank account of the child and the caregiver, until the child turns 18.",
    ],
    hi: [
      "परवरिश योजना बिहार सरकार की पूरी तरह राज्य के पैसे से चलने वाली योजना है, जो उन बच्चों को पालने में रिश्तेदारों या पालक परिवारों की मदद करती है जिनके माता-पिता नहीं हैं या जिनकी देखभाल करने वाला कोई नहीं है। इसमें वे बच्चे भी शामिल हैं जिन्हें खुद या जिनके माता-पिता को HIV/AIDS या कुष्ठ रोग है।",
      "समाज कल्याण विभाग आंगनवाड़ी (ICDS) नेटवर्क के ज़रिए बच्चे और देखभाल करने वाले के संयुक्त बैंक खाते में 18 साल की उम्र तक हर महीने राशि भेजता है।",
    ],
  },
  benefits: {
    en: [
      "Monthly money for the child's upbringing, paid until age 18 (listed at ₹1,000 a month in recent official listings).",
      "Paid into a joint account of the child and caregiver.",
    ],
    hi: [
      "18 साल की उम्र तक बच्चे की परवरिश के लिए हर महीने पैसा (हाल की आधिकारिक सूची में ₹1,000 महीना)।",
      "बच्चे और देखभाल करने वाले के संयुक्त खाते में भुगतान।",
    ],
  },
  eligibilityText: {
    en: [
      "Child aged 0 to 18, living in Bihar.",
      "Orphaned or destitute and living with relatives or a foster family, or has HIV/AIDS or leprosy, or has parents with these illnesses.",
      "The caring family's annual income is ₹60,000 or less, or it is a BPL family.",
    ],
    hi: [
      "0 से 18 साल का बच्चा, जो बिहार में रहता हो।",
      "अनाथ या बेसहारा हो और रिश्तेदारों या पालक परिवार के साथ रहता हो, या उसे HIV/AIDS या कुष्ठ रोग हो, या उसके माता-पिता को ये बीमारियाँ हों।",
      "देखभाल करने वाले परिवार की सालाना आय ₹60,000 या उससे कम हो, या परिवार BPL हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your Anganwadi worker or the Child Development Project Officer (CDPO) of your block.",
        "Submit the form with the child's documents and the caregiver's income proof.",
        "After approval, open a joint bank account for the child and caregiver to receive the money.",
      ],
      hi: [
        "अपनी आंगनवाड़ी सेविका या प्रखंड के बाल विकास परियोजना पदाधिकारी (CDPO) से संपर्क करें।",
        "बच्चे के दस्तावेज़ों और देखभाल करने वाले के आय प्रमाण के साथ फ़ॉर्म जमा करें।",
        "मंज़ूरी के बाद पैसा पाने के लिए बच्चे और देखभाल करने वाले का संयुक्त बैंक खाता खुलवाएँ।",
      ],
    },
  },

  officialUrl: "https://betastate.bihar.gov.in/SocialWelfare/",
  sources: ["https://myscheme.gov.in/schemes/pybihar", "https://betastate.bihar.gov.in/SocialWelfare/"],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "check-status",
};

export default scheme;
