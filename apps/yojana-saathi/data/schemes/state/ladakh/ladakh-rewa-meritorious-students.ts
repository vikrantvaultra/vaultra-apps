import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ladakh-rewa-meritorious-students",
  tier: "compact",
  name: { en: "REWA: Lt Governor's Students Support Initiative (Ladakh)", hi: "रेवा: उपराज्यपाल छात्र सहायता पहल (लद्दाख)" },
  aka: ["REWA", "REWA scholarship Ladakh", "Lt Governor's Students Support Initiative"],
  shortDescription: {
    en: "Top Class 10 and 12 students from Ladakh can get coaching costs reimbursed for NEET, JEE, CLAT and NDA, and Ladakhis who clear the UPSC Civil Services Prelims can get help with Mains coaching.",
    hi: "लद्दाख के 10वीं और 12वीं के टॉप छात्रों को NEET, JEE, CLAT और NDA की कोचिंग का ख़र्च वापस मिल सकता है, और UPSC सिविल सेवा प्रारंभिक परीक्षा पास करने वाले लद्दाखियों को आगे की कोचिंग में मदद मिल सकती है।",
  },
  level: "state",
  state: "ladakh",
  department: { en: "Social Welfare Department, UT Administration of Ladakh", hi: "समाज कल्याण विभाग, केंद्र शासित प्रदेश लद्दाख प्रशासन" },
  categories: ["education"],
  tags: ["coaching", "neet", "jee", "scholarship", "meritorious students", "ladakh"],
  benefitType: "cash",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("ladakh")),

  details: {
    en: [
      "REWA is the Ladakh administration's scheme to pay for quality coaching for bright students. Under the scheme guidelines, 60 students selected on Class 10 board marks and 70 selected on Class 12 board marks (split equally between Leh and Kargil) can get coaching costs reimbursed for national entrance exams such as NEET, JEE, UG CLAT and NDA.",
      "Students from Ladakh who clear the Prelims of the Civil Services, Indian Forest Service or Indian Engineering Service exams can also claim coaching and boarding costs. Applications open online on the REWA portal after board results are declared.",
    ],
    hi: [
      "रेवा लद्दाख प्रशासन की योजना है, जो होनहार छात्रों की अच्छी कोचिंग का ख़र्च उठाती है। योजना के दिशानिर्देशों के अनुसार 10वीं बोर्ड के अंकों पर चुने गए 60 और 12वीं बोर्ड के अंकों पर चुने गए 70 छात्रों (लेह और कारगिल में बराबर बँटे) को NEET, JEE, UG CLAT और NDA जैसी राष्ट्रीय प्रवेश परीक्षाओं की कोचिंग का ख़र्च वापस मिल सकता है।",
      "सिविल सेवा, भारतीय वन सेवा या भारतीय इंजीनियरिंग सेवा की प्रारंभिक परीक्षा पास करने वाले लद्दाख के छात्र भी कोचिंग और रहने का ख़र्च माँग सकते हैं। बोर्ड नतीजे आने के बाद रेवा पोर्टल पर ऑनलाइन आवेदन खुलते हैं।",
    ],
  },
  benefits: {
    en: [
      "Class 10 and 12 toppers: up to ₹1 lakh for residential coaching, or up to ₹64,000 coaching fee plus up to ₹36,000 for boarding (₹3,000 a month) for day, online or correspondence coaching.",
      "Those who clear the UPSC Civil Services, IFS or IES Prelims: up to ₹1 lakh coaching fee plus up to ₹54,000 for boarding (₹3,000 a month, up to 18 months).",
    ],
    hi: [
      "10वीं और 12वीं के टॉपर: आवासीय कोचिंग के लिए ₹1 लाख तक, या डे-बोर्डिंग, ऑनलाइन या पत्राचार कोचिंग के लिए ₹64,000 तक फ़ीस और रहने के लिए ₹36,000 तक (₹3,000 महीना)।",
      "UPSC सिविल सेवा, IFS या IES प्रारंभिक परीक्षा पास करने वाले: ₹1 लाख तक कोचिंग फ़ीस और रहने के लिए ₹54,000 तक (₹3,000 महीना, 18 महीने तक)।",
    ],
  },
  eligibilityText: {
    en: [
      "Students belonging to the UT of Ladakh, including Ladakhi students who passed Class 12 outside Ladakh.",
      "Children of central government, All India Service, central PSU, public sector bank and statutory body officials studying in Ladakh can also apply.",
      "Selected on merit from Class 10 or Class 12 board marks, or after clearing the relevant UPSC Prelims.",
    ],
    hi: [
      "केंद्र शासित प्रदेश लद्दाख के छात्र, जिनमें लद्दाख से बाहर 12वीं पास करने वाले लद्दाखी छात्र भी शामिल हैं।",
      "लद्दाख में पढ़ रहे केंद्र सरकार, अखिल भारतीय सेवा, केंद्रीय सार्वजनिक उपक्रम, सरकारी बैंक और वैधानिक संस्थाओं के अधिकारियों के बच्चे भी आवेदन कर सकते हैं।",
      "10वीं या 12वीं बोर्ड के अंकों की मेरिट से, या संबंधित UPSC प्रारंभिक परीक्षा पास करने के बाद चयन।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "After board or Prelims results, register on socialwelfare.ladakh.gov.in/rewa when applications are open.",
        "Upload your result sheet and supporting documents. The merit list is published on the portal and selected students get an email.",
        "Join a coaching institute within two years and submit the fee receipt on the portal for reimbursement.",
      ],
      hi: [
        "बोर्ड या प्रारंभिक परीक्षा के नतीजों के बाद, आवेदन खुलने पर socialwelfare.ladakh.gov.in/rewa पर रजिस्टर करें।",
        "अपनी मार्कशीट और ज़रूरी दस्तावेज़ अपलोड करें। मेरिट सूची पोर्टल पर आती है और चुने गए छात्रों को ईमेल मिलता है।",
        "दो साल के अंदर किसी कोचिंग संस्थान में दाख़िला लें और ख़र्च वापस पाने के लिए फ़ीस की रसीद पोर्टल पर जमा करें।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.ladakh.gov.in/rewa/",
  sources: ["https://socialwelfare.ladakh.gov.in/faq.pdf", "https://socialwelfare.ladakh.gov.in/rewa/register_terms.php"],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
