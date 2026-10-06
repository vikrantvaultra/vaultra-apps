import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-pratigya-yojana",
  tier: "compact",
  name: { en: "Mukhyamantri Pratigya Yojana (CM-PRATIGYA internship)", hi: "मुख्यमंत्री प्रतिज्ञा योजना (इंटर्नशिप)" },
  aka: ["CM Pratigya", "Bihar internship scheme"],
  shortDescription: {
    en: "Bihar youth aged 18 to 28 who have passed Class 12 get paid internships of 3 to 12 months with a monthly stipend of ₹4,000 to ₹6,000 from the state.",
    hi: "12वीं पास 18 से 28 साल के बिहार के युवाओं को 3 से 12 महीने की इंटर्नशिप और राज्य सरकार से हर महीने ₹4,000 से ₹6,000 तक का भत्ता मिलता है।",
  },
  level: "state",
  state: "bihar",
  department: {
    en: "Youth, Employment and Skill Development Department, Government of Bihar (Bihar Skill Development Mission)",
    hi: "युवा, रोज़गार एवं कौशल विकास विभाग, बिहार सरकार (बिहार कौशल विकास मिशन)",
  },
  categories: ["skills-employment"],
  tags: ["internship", "stipend", "youth", "job training", "pratigya", "bihar"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 4000, period: "monthly", kind: "cash", maxMonths: 12 },
  ageRange: { min: 18, max: 28 },
  kundliHouse: "career",
  eligibility: all(residentOf("bihar"), ...ageBetween(18, 28)),

  details: {
    en: [
      "Mukhyamantri Pratigya Yojana gives young people in Bihar real work experience through internships at public sector companies, large industries, MSMEs, NGOs and government departments. The cabinet approved it in June 2025, and it is run by the Bihar Skill Development Mission.",
      "Interns get a monthly stipend from the state based on their qualification, plus extra help for the first three months if the internship is outside their home district.",
    ],
    hi: [
      "मुख्यमंत्री प्रतिज्ञा योजना बिहार के युवाओं को सरकारी कंपनियों, बड़े उद्योगों, MSME, गैर-सरकारी संस्थाओं और सरकारी विभागों में इंटर्नशिप के ज़रिए असली काम का अनुभव देती है। कैबिनेट ने इसे जून 2025 में मंज़ूरी दी, और बिहार कौशल विकास मिशन इसे चलाता है।",
      "इंटर्न को योग्यता के हिसाब से राज्य सरकार से हर महीने भत्ता मिलता है, और अगर इंटर्नशिप गृह ज़िले से बाहर हो तो पहले तीन महीने अतिरिक्त मदद मिलती है।",
    ],
  },
  benefits: {
    en: [
      "₹4,000 a month for Class 12 pass interns.",
      "₹5,000 a month for those with an ITI, diploma or a skill-training certificate of six months or more.",
      "₹6,000 a month for graduates and postgraduates.",
      "₹2,000 a month extra for the first three months if the internship is in another district of Bihar.",
      "Internships last 3 to 12 months.",
    ],
    hi: [
      "12वीं पास इंटर्न को हर महीने ₹4,000।",
      "ITI, डिप्लोमा या छह महीने या उससे ज़्यादा के कौशल प्रशिक्षण प्रमाण पत्र वालों को हर महीने ₹5,000।",
      "स्नातक और स्नातकोत्तर को हर महीने ₹6,000।",
      "इंटर्नशिप बिहार के किसी दूसरे ज़िले में हो तो पहले तीन महीने हर महीने ₹2,000 अतिरिक्त।",
      "इंटर्नशिप 3 से 12 महीने की होती है।",
    ],
  },
  eligibilityText: {
    en: ["Resident of Bihar.", "Aged 18 to 28 years.", "Passed at least Class 12.", "Willing to do an internship at the workplace offered."],
    hi: ["बिहार के निवासी।", "उम्र 18 से 28 साल।", "कम से कम 12वीं पास।", "दी गई जगह पर इंटर्नशिप करने को तैयार हों।"],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on cmpratigya.bihar.gov.in and complete your profile.",
        "Apply for at least three internship openings listed on the portal.",
        "If a company shortlists you, get your documents verified at the District Registration and Counselling Centre.",
        "Accept the internship offer letter on the portal and join on the given date.",
      ],
      hi: [
        "cmpratigya.bihar.gov.in पर रजिस्टर करें और अपनी प्रोफ़ाइल पूरी करें।",
        "पोर्टल पर दी गई कम से कम तीन इंटर्नशिप के लिए आवेदन करें।",
        "किसी कंपनी के शॉर्टलिस्ट करने पर ज़िला निबंधन एवं परामर्श केंद्र पर दस्तावेज़ों की जाँच कराएँ।",
        "पोर्टल पर इंटर्नशिप का प्रस्ताव पत्र स्वीकार करें और तय तारीख पर जॉइन करें।",
      ],
    },
  },

  officialUrl: "https://cmpratigya.bihar.gov.in/",
  sources: [
    "https://betastate.bihar.gov.in/file_2/FileUpload/2026/Jun/17-Jun-2026/48/Highlights/134261501659371385.pdf",
    "https://cmpratigya.bihar.gov.in/",
    "https://www.theweek.in/wire-updates/national/2025/07/01/cal21-bh-cabinet-scheme.html",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
