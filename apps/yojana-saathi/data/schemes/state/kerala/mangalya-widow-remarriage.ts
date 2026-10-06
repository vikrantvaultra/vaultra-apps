import { all, female, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mangalya-widow-remarriage",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Mangalya Scheme for Widow Remarriage", hi: "मांगल्य योजना (विधवा पुनर्विवाह)" },
  aka: ["Mangalya", "Mangalya scheme Kerala", "widow remarriage assistance Kerala"],
  shortDescription: {
    en: "Widows and divorced women from BPL / priority families in Kerala who remarry get a one-time grant of ₹25,000.",
    hi: "केरल में BPL / प्राथमिकता वाले परिवारों की विधवा और तलाक़शुदा महिलाओं को दोबारा शादी करने पर एक बार ₹25,000 मिलते हैं।",
  },
  level: "state",
  state: "kerala",
  department: { en: "Women and Child Development Department, Government of Kerala", hi: "महिला एवं बाल विकास विभाग, केरल सरकार" },
  categories: ["women-child", "social-welfare"],
  tags: ["widow remarriage", "marriage assistance", "widow", "divorced women", "mangalya", "kerala"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("kerala"),
    female(),
    labelled(isTrue("bpl"), { en: "Your family is BPL / priority category", hi: "आपका परिवार BPL / प्राथमिकता श्रेणी में है" }),
  ),

  details: {
    en: [
      "Mangalya encourages widows and divorced women to remarry by giving them a one-time grant. Kerala's Women and Child Development Department runs it.",
      "Women whose husbands deserted them more than 7 years ago can also apply. Applications go through the Child Development Project Officer (ICDS) to the District Women and Child Development Officer.",
    ],
    hi: [
      "मांगल्य योजना विधवा और तलाक़शुदा महिलाओं को एक बार की आर्थिक मदद देकर दोबारा शादी के लिए प्रोत्साहित करती है। इसे केरल का महिला एवं बाल विकास विभाग चलाता है।",
      "जिन महिलाओं को उनके पति 7 साल से ज़्यादा पहले छोड़ गए, वे भी आवेदन कर सकती हैं। आवेदन बाल विकास परियोजना अधिकारी (ICDS) के ज़रिए ज़िला महिला एवं बाल विकास अधिकारी को जाता है।",
    ],
  },
  benefits: {
    en: ["One-time grant of ₹25,000 after remarriage, paid into your bank account."],
    hi: ["दोबारा शादी के बाद एक बार ₹25,000, सीधे आपके बैंक खाते में।"],
  },
  eligibilityText: {
    en: [
      "You are a widow, a divorced woman, or a woman deserted by her husband for over 7 years, and you have remarried.",
      "Your family is in the BPL / priority category.",
    ],
    hi: [
      "आप विधवा हैं, तलाक़शुदा हैं, या आपके पति ने 7 साल से ज़्यादा समय से आपको छोड़ रखा था, और आपने दोबारा शादी की है।",
      "आपका परिवार BPL / प्राथमिकता श्रेणी में है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Mangalya application form from the WCD department website or your ICDS office.",
        "Attach proof of remarriage, the first husband's death certificate (or divorce papers, or the Village Officer's certificate of desertion), BPL proof, proof of age and bank passbook copy.",
        "Submit it to the Child Development Project Officer, who forwards it to the District Women and Child Development Officer.",
      ],
      hi: [
        "WCD विभाग की वेबसाइट या अपने ICDS कार्यालय से मांगल्य का आवेदन फ़ॉर्म लें।",
        "दोबारा शादी का सबूत, पहले पति का मृत्यु प्रमाण पत्र (या तलाक़ के काग़ज़, या पति के छोड़ जाने का विलेज ऑफ़िसर का प्रमाण पत्र), BPL का सबूत, उम्र का सबूत और बैंक पासबुक की कॉपी लगाएँ।",
        "इसे बाल विकास परियोजना अधिकारी को जमा करें, जो इसे ज़िला महिला एवं बाल विकास अधिकारी को भेजते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Proof of remarriage (marriage certificate)",
      "Death certificate of the first husband, divorce papers, or Village Officer's certificate of desertion for over 7 years",
      "Proof of BPL / priority category",
      "Proof of age",
      "Bank passbook copy",
    ],
    hi: [
      "दोबारा शादी का सबूत (विवाह प्रमाण पत्र)",
      "पहले पति का मृत्यु प्रमाण पत्र, तलाक़ के काग़ज़, या 7 साल से ज़्यादा समय से छोड़ जाने का विलेज ऑफ़िसर का प्रमाण पत्र",
      "BPL / प्राथमिकता श्रेणी का सबूत",
      "उम्र का सबूत",
      "बैंक पासबुक की कॉपी",
    ],
  },

  officialUrl: "https://wcd.kerala.gov.in/scheme-info.php?id=NQ==",
  sources: ["https://wcd.kerala.gov.in/scheme-info.php?id=NQ==", "https://wcd.kerala.gov.in/schemes.php"],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "check-status",
};

export default scheme;
