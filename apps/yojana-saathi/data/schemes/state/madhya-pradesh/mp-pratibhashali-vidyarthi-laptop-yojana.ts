import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mp-pratibhashali-vidyarthi-laptop-yojana",
  tier: "compact",
  name: { en: "Pratibhashali Vidyarthi Protsahan Yojana (Laptop Assistance, Madhya Pradesh)", hi: "प्रतिभाशाली विद्यार्थी प्रोत्साहन योजना (लैपटॉप सहायता, मध्य प्रदेश)" },
  aka: ["MP laptop yojana", "laptop scheme MP", "laptop ke liye 25000"],
  shortDescription: {
    en: "Students who score 75% or more in the MP Board Class 12 exam get ₹25,000 in their bank account to buy a laptop.",
    hi: "MP बोर्ड 12वीं की परीक्षा में 75% या ज़्यादा अंक लाने वाले विद्यार्थियों को लैपटॉप ख़रीदने के लिए ₹25,000 बैंक खाते में मिलते हैं।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: { en: "School Education Department, Government of Madhya Pradesh", hi: "स्कूल शिक्षा विभाग, मध्य प्रदेश सरकार" },
  categories: ["education"],
  tags: ["laptop", "class 12", "meritorious", "topper", "students", "madhya pradesh"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 25000, period: "one-time", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("madhya-pradesh"),
    labelled(isTrue("student"), { en: "You are a student", hi: "आप विद्यार्थी हैं" }),
  ),

  details: {
    en: [
      "To help bright students move to higher studies with a computer, Madhya Pradesh gives ₹25,000 to each student who scores 75% or more in the MP Board Class 12 exam. The money is sent by DBT so the student can buy a laptop.",
      "The School Education Department pays it once a year after results. In September 2026 about 1.22 lakh students from the 2026 board exam received the amount.",
    ],
    hi: [
      "होनहार विद्यार्थियों को कंप्यूटर के साथ आगे की पढ़ाई में मदद के लिए मध्य प्रदेश सरकार MP बोर्ड 12वीं में 75% या ज़्यादा अंक लाने वाले हर विद्यार्थी को ₹25,000 देती है। पैसा DBT से भेजा जाता है ताकि विद्यार्थी लैपटॉप ख़रीद सके।",
      "स्कूल शिक्षा विभाग नतीजों के बाद साल में एक बार यह राशि देता है। सितंबर 2026 में 2026 की बोर्ड परीक्षा के लगभग 1.22 लाख विद्यार्थियों को यह राशि मिली।",
    ],
  },
  benefits: {
    en: ["₹25,000 one-time, paid into the student's bank account to buy a laptop."],
    hi: ["लैपटॉप ख़रीदने के लिए विद्यार्थी के बैंक खाते में एक बार ₹25,000।"],
  },
  eligibilityText: {
    en: [
      "Passed the MP Board (MPBSE) Class 12 exam with 75% or more marks.",
      "Studied in a school in Madhya Pradesh.",
      "Has a bank account linked to Aadhaar, with details correct in the school records.",
    ],
    hi: [
      "MP बोर्ड (माध्यमिक शिक्षा मंडल) की 12वीं परीक्षा 75% या ज़्यादा अंकों से पास की हो।",
      "मध्य प्रदेश के किसी स्कूल में पढ़ाई की हो।",
      "आधार से जुड़ा बैंक खाता हो और उसकी जानकारी स्कूल के रिकॉर्ड में सही हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "There is usually no separate form. The list of eligible students is made from the board results.",
        "Make sure your school has your correct bank account and Aadhaar details on the Education Portal 3.0.",
        "If your name is missing, contact your school principal or the district education officer.",
      ],
      hi: [
        "आमतौर पर अलग से फ़ॉर्म नहीं भरना होता। पात्र विद्यार्थियों की सूची बोर्ड के नतीजों से बनती है।",
        "देखें कि आपके स्कूल ने एजुकेशन पोर्टल 3.0 पर आपका सही बैंक खाता और आधार दर्ज किया है।",
        "सूची में नाम न हो तो अपने स्कूल के प्राचार्य या ज़िला शिक्षा अधिकारी से संपर्क करें।",
      ],
    },
  },

  officialUrl: "https://educationportal3.in/",
  sources: [
    "https://newsonair.gov.in/madhya-pradesh-to-provide-25-thousand-rupees-for-laptops-to-meritorious-class-12-students/",
    "https://educationportal3.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
