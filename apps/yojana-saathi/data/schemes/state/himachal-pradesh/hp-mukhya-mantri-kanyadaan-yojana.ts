import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "hp-mukhya-mantri-kanyadaan-yojana",
  tier: "compact",
  overlapGroup: "marriage-assistance",
  name: { en: "Mukhya Mantri Kanyadaan Yojana (Himachal Pradesh)", hi: "मुख्यमंत्री कन्यादान योजना (हिमाचल प्रदेश)" },
  aka: ["Kanyadan Yojana Himachal", "Shubh Vivah Yojana", "Shagun Yojana Himachal"],
  shortDescription: {
    en: "Marriage grant of ₹51,000 in Himachal for a girl whose father has died or cannot earn, or who is an orphan, or a deserted or divorced woman, from a poor family.",
    hi: "हिमाचल में उस लड़की की शादी के लिए ₹51,000 का अनुदान, जिसके पिता नहीं हैं या कमा नहीं सकते, या जो अनाथ है, या पति द्वारा छोड़ी गई या तलाकशुदा महिला है, ग़रीब परिवार से।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Directorate of Women and Child Development, Government of Himachal Pradesh",
    hi: "महिला एवं बाल विकास निदेशालय, हिमाचल प्रदेश सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "kanyadan", "daughter marriage", "shagun", "grant", "himachal"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "daughter",
  eligibility: all(residentOf("himachal-pradesh")),

  details: {
    en: [
      "Mukhya Mantri Kanyadaan Yojana gives a marriage grant to parents or guardians of destitute girls in Himachal Pradesh. The department's scheme page lists the grant as ₹51,000.",
      "In the 2026-27 budget, the government announced that this scheme and the Mukhya Mantri Shagun Yojana (₹31,000 for BPL girls) will be merged into a new Shubh Vivah Yojana, giving ₹51,000 at the marriage of eligible girls or women above 21 from BPL families and Kanyadaan-eligible families. Check which scheme is open before applying.",
    ],
    hi: [
      "मुख्यमंत्री कन्यादान योजना हिमाचल प्रदेश में निराश्रित लड़कियों के माता-पिता या अभिभावकों को शादी के लिए अनुदान देती है। विभाग के योजना पेज पर अनुदान ₹51,000 लिखा है।",
      "2026-27 के बजट में सरकार ने घोषणा की कि यह योजना और मुख्यमंत्री शगुन योजना (BPL लड़कियों के लिए ₹31,000) मिलाकर नई शुभ विवाह योजना बनेगी, जिसमें BPL परिवारों और कन्यादान के पात्र परिवारों की 21 साल से ज़्यादा उम्र की लड़कियों/महिलाओं की शादी पर ₹51,000 मिलेंगे। आवेदन से पहले पता करें कि कौन-सी योजना खुली है।",
    ],
  },
  benefits: {
    en: [
      "Marriage grant of ₹51,000.",
      "Under the announced Shubh Vivah Yojana, the grant stays ₹51,000 and is also open to BPL families.",
    ],
    hi: ["शादी के लिए ₹51,000 का अनुदान।", "घोषित शुभ विवाह योजना में भी अनुदान ₹51,000 रहेगा और BPL परिवारों को भी मिलेगा।"],
  },
  eligibilityText: {
    en: [
      "A girl whose father has died, or who is an orphan, or a woman deserted or divorced by her husband, or a girl whose father cannot earn because of physical or mental disability or long illness.",
      "Family income up to the limit set by the department (the scheme page shows ₹50,000 a year in one place and ₹35,000 in another; confirm with the CDPO).",
      "Under Shubh Vivah Yojana, the girl or woman must be above 21 and not get marriage help from any other government scheme.",
    ],
    hi: [
      "वह लड़की जिसके पिता नहीं हैं, या जो अनाथ है, या पति द्वारा छोड़ी गई या तलाकशुदा महिला, या वह लड़की जिसके पिता शारीरिक/मानसिक दिव्यांगता या लंबी बीमारी के कारण कमा नहीं सकते।",
      "परिवार की आय विभाग की तय सीमा तक हो (योजना पेज पर एक जगह ₹50,000 और दूसरी जगह ₹35,000 सालाना लिखा है; CDPO से पुष्टि करें)।",
      "शुभ विवाह योजना में लड़की/महिला 21 साल से ज़्यादा उम्र की हो और उसे किसी दूसरी सरकारी योजना से शादी की मदद न मिल रही हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the Himachal e-District portal (edistrict.hp.gov.in) and submit the form.", "Download the confirmation receipt and track the status."],
      hi: ["हिमाचल ई-डिस्ट्रिक्ट पोर्टल (edistrict.hp.gov.in) पर आवेदन करके फ़ॉर्म जमा करें।", "पुष्टि की रसीद डाउनलोड करें और स्थिति देखें।"],
    },
  },

  officialUrl: "https://wcd.hp.gov.in/schemes/view?schemeId=34",
  sources: [
    "https://wcd.hp.gov.in/schemes/view?schemeId=34",
    "https://wcd.hp.gov.in/schemes/view?schemeId=35",
    "https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "check-status",
};

export default scheme;
