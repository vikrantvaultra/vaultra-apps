import { all, female, isTrue, minAge, residentOf, labelled } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-konya-bibaha-yojana",
  overlapGroup: "marriage-assistance",
  name: { en: "Mukhyamantri Konya Bibaha Yojana (Tripura)", hi: "मुख्यमंत्री कन्या विवाह योजना (त्रिपुरा)" },
  aka: ["MKBY", "Mukhyamantri Kanya Vivah Yojana Tripura", "Tripura marriage assistance"],
  shortDescription: {
    en: "₹50,000 one-time marriage help for a girl aged 18 or above from an Antyodaya family in Tripura, for up to two daughters per family.",
    hi: "त्रिपुरा के अंत्योदय परिवार की 18 साल या उससे ज़्यादा उम्र की बेटी की शादी के लिए ₹50,000 की एकमुश्त मदद, हर परिवार की ज़्यादा से ज़्यादा दो बेटियों के लिए।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Social Welfare & Social Education Department, Government of Tripura",
    hi: "समाज कल्याण एवं समाज शिक्षा विभाग, त्रिपुरा सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["marriage", "kanya vivah", "daughter", "antyodaya", "50000", "tripura"],
  benefitType: "cash",
  isDBT: false,
  value: { amount: 50000, period: "one-time", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("tripura"),
    female(),
    minAge(18),
    labelled(isTrue("bpl"), { en: "Your family has an Antyodaya ration card", hi: "आपके परिवार के पास अंत्योदय राशन कार्ड है" }),
  ),

  details: {
    en: [
      "Mukhyamantri Konya Bibaha Yojana (MKBY) is a Tripura scheme notified in September 2025. It gives ₹50,000 to help poor families with the cost of a daughter's marriage.",
      "It is only for girls from Antyodaya families (the poorest households, as listed in the state's Antyodaya database). The bride must be at least 18 and the groom at least 21. Up to two girls in a family can get it, once each.",
      "The Sub-Divisional Magistrate (SDM) confirms that the marriage has taken place and then releases the money. SDMs may also hold group marriage events at the sub-division level, with marriage registration on the spot.",
    ],
    hi: [
      "मुख्यमंत्री कन्या विवाह योजना (MKBY) त्रिपुरा की योजना है, जो सितंबर 2025 में अधिसूचित हुई। इसमें बेटी की शादी के ख़र्च में मदद के लिए गरीब परिवारों को ₹50,000 मिलते हैं।",
      "यह सिर्फ़ अंत्योदय परिवारों (राज्य के अंत्योदय डेटाबेस में दर्ज सबसे गरीब परिवार) की बेटियों के लिए है। दुल्हन की उम्र कम से कम 18 और दूल्हे की कम से कम 21 साल होनी चाहिए। एक परिवार की ज़्यादा से ज़्यादा दो बेटियों को, एक-एक बार, यह मदद मिल सकती है।",
      "उप-मंडल मजिस्ट्रेट (SDM) शादी होने की पुष्टि करके पैसा जारी करते हैं। SDM उप-मंडल स्तर पर सामूहिक विवाह कार्यक्रम भी करा सकते हैं, जहाँ वहीं विवाह पंजीकरण होता है।",
    ],
  },
  benefits: {
    en: [
      "₹50,000 one-time marriage assistance per eligible girl.",
      "Available for up to two girls in the same Antyodaya family.",
      "Marriage registration and certificate can be done at SDM-organised marriage events.",
    ],
    hi: [
      "हर पात्र बेटी के लिए ₹50,000 की एकमुश्त विवाह सहायता।",
      "एक ही अंत्योदय परिवार की ज़्यादा से ज़्यादा दो बेटियों के लिए।",
      "SDM के कराए विवाह कार्यक्रमों में विवाह पंजीकरण और प्रमाण पत्र बन सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "The bride belongs to an Antyodaya family listed in Tripura's Antyodaya database.",
      "The bride is 18 or older and the groom is 21 or older on the date of marriage.",
      "The bride has a Permanent Resident of Tripura Certificate (PRTC).",
      "Neither the bride nor the groom has a living spouse from an earlier marriage that hasn't been legally dissolved.",
    ],
    hi: [
      "दुल्हन त्रिपुरा के अंत्योदय डेटाबेस में दर्ज अंत्योदय परिवार से हो।",
      "शादी के दिन दुल्हन की उम्र 18 साल या ज़्यादा और दूल्हे की 21 साल या ज़्यादा हो।",
      "दुल्हन के पास त्रिपुरा स्थायी निवासी प्रमाण पत्र (PRTC) हो।",
      "दुल्हन या दूल्हे की कोई पिछली शादी हो तो वह क़ानूनी रूप से ख़त्म हो चुकी हो।",
    ],
  },
  exclusions: {
    en: [
      "Families that are not in the Antyodaya list.",
      "A third or later daughter in the same family.",
      "Underage marriages (bride under 18 or groom under 21).",
    ],
    hi: [
      "जो परिवार अंत्योदय सूची में नहीं हैं।",
      "एक ही परिवार की तीसरी या उसके बाद की बेटी।",
      "कम उम्र में शादी (दुल्हन 18 से कम या दूल्हा 21 से कम)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "The bride or her guardian applies at the Child Development Project Office (CDPO) for the area where the family lives.",
        "The CDPO checks the papers and sends the application to the SDM within 15 days.",
        "Register the marriage at the venue or right after. Once the SDM confirms the marriage, the ₹50,000 is released.",
      ],
      hi: [
        "दुल्हन या उसके अभिभावक अपने इलाक़े के बाल विकास परियोजना कार्यालय (CDPO) में आवेदन करें।",
        "CDPO काग़ज़ों की जाँच करके 15 दिन के अंदर आवेदन SDM को भेजता है।",
        "शादी का पंजीकरण शादी की जगह पर या उसके तुरंत बाद कराएँ। SDM के शादी की पुष्टि करने पर ₹50,000 जारी किए जाते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card and PRTC of the bride",
      "Age proof of the bride (birth certificate or school leaving certificate)",
      "Antyodaya ration card of the bride's family",
      "Self-declaration by bride and groom that they have no existing spouse",
      "Passport-size photos of the bride and groom",
      "Aadhaar card, address proof and age proof of the groom",
    ],
    hi: [
      "दुल्हन का आधार कार्ड और PRTC",
      "दुल्हन की उम्र का सबूत (जन्म प्रमाण पत्र या स्कूल छोड़ने का प्रमाण पत्र)",
      "दुल्हन के परिवार का अंत्योदय राशन कार्ड",
      "दुल्हन और दूल्हे का स्व-घोषणा पत्र कि उनका कोई मौजूदा जीवनसाथी नहीं है",
      "दुल्हन और दूल्हे की पासपोर्ट साइज़ फ़ोटो",
      "दूल्हे का आधार कार्ड, पते का सबूत और उम्र का सबूत",
    ],
  },
  faqs: [
    {
      q: { en: "We have a BPL card but not an Antyodaya card. Can we apply?", hi: "हमारे पास BPL कार्ड है, पर अंत्योदय कार्ड नहीं। क्या हम आवेदन कर सकते हैं?" },
      a: {
        en: "No. The scheme is only for families in Tripura's Antyodaya database, the poorest group of ration card holders.",
        hi: "नहीं। यह योजना सिर्फ़ त्रिपुरा के अंत्योदय डेटाबेस में दर्ज परिवारों के लिए है, जो राशन कार्ड धारकों में सबसे गरीब वर्ग है।",
      },
    },
    {
      q: { en: "When is the money paid?", hi: "पैसा कब मिलता है?" },
      a: {
        en: "After the marriage. The SDM releases the ₹50,000 once the marriage has been confirmed.",
        hi: "शादी के बाद। SDM शादी की पुष्टि होने पर ₹50,000 जारी करते हैं।",
      },
    },
  ],

  officialUrl: "https://socialwelfare.tripura.gov.in/sites/default/files/Gezette_Notification_with_Scheme_Details_Mukhyamantri_Konya_Bibaho_Yojana_MKBY.pdf",
  sources: ["https://socialwelfare.tripura.gov.in/sites/default/files/Gezette_Notification_with_Scheme_Details_Mukhyamantri_Konya_Bibaho_Yojana_MKBY.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
