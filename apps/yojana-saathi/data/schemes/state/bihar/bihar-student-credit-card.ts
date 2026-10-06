import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bihar-student-credit-card",
  tier: "full",
  name: { en: "Bihar Student Credit Card Yojana", hi: "बिहार स्टूडेंट क्रेडिट कार्ड योजना" },
  aka: ["BSCC", "Student Credit Card", "7 Nischay"],
  shortDescription: {
    en: "Bihar students who have passed Class 12 can get an interest-free education loan of up to ₹4 lakh for college, guaranteed by the state, with up to 10 years to repay.",
    hi: "12वीं पास बिहार के छात्र कॉलेज की पढ़ाई के लिए ₹4 लाख तक का बिना ब्याज का शिक्षा ऋण ले सकते हैं, जिसकी गारंटी राज्य सरकार देती है, और चुकाने के लिए 10 साल तक का समय मिलता है।",
  },
  level: "state",
  state: "bihar",
  department: {
    en: "Education Department, Government of Bihar (Bihar State Education Finance Corporation)",
    hi: "शिक्षा विभाग, बिहार सरकार (बिहार राज्य शिक्षा वित्त निगम)",
  },
  categories: ["education"],
  tags: ["education loan", "student credit card", "interest free", "college", "higher studies", "bihar"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 400000, period: "one-time", kind: "loan" },
  kundliHouse: "education",
  eligibility: all(residentOf("bihar")),

  details: {
    en: [
      "The Bihar Student Credit Card scheme started on 2 October 2016 as part of the state's Saat Nischay programme. It gives students who have passed Class 12 a loan for higher studies, so money is not the reason they stop studying.",
      "Loans of up to ₹4 lakh are given by the Bihar State Education Finance Corporation for courses at recognised institutions in Bihar or elsewhere in India. The loan can cover course fees and other study costs.",
      "From 2025 the loan is completely interest-free for all students, and the repayment period was made longer: up to 7 years for loans up to ₹2 lakh and up to 10 years for larger loans.",
    ],
    hi: [
      "बिहार स्टूडेंट क्रेडिट कार्ड योजना 2 अक्टूबर 2016 को राज्य के सात निश्चय कार्यक्रम के तहत शुरू हुई। यह 12वीं पास छात्रों को आगे की पढ़ाई के लिए कर्ज़ देती है, ताकि पैसों की कमी से पढ़ाई न छूटे।",
      "बिहार राज्य शिक्षा वित्त निगम बिहार या देश में कहीं भी मान्य संस्थानों के कोर्स के लिए ₹4 लाख तक का कर्ज़ देता है। इसमें कोर्स की फ़ीस और पढ़ाई का दूसरा खर्च शामिल हो सकता है।",
      "2025 से यह कर्ज़ सभी छात्रों के लिए पूरी तरह बिना ब्याज का है, और चुकाने का समय भी बढ़ा दिया गया: ₹2 लाख तक के कर्ज़ के लिए 7 साल तक और उससे बड़े कर्ज़ के लिए 10 साल तक।",
    ],
  },
  benefits: {
    en: [
      "Education loan of up to ₹4 lakh.",
      "No interest at all, for every student.",
      "Loans up to ₹2 lakh can be repaid in up to 84 monthly instalments (7 years).",
      "Loans above ₹2 lakh can be repaid in up to 120 monthly instalments (10 years).",
      "Repayment starts only after your course ends, so you can study first.",
    ],
    hi: [
      "₹4 लाख तक का शिक्षा ऋण।",
      "हर छात्र के लिए कोई ब्याज नहीं।",
      "₹2 लाख तक का कर्ज़ 84 मासिक किस्तों (7 साल) तक में चुकाया जा सकता है।",
      "₹2 लाख से ज़्यादा का कर्ज़ 120 मासिक किस्तों (10 साल) तक में चुकाया जा सकता है।",
      "कर्ज़ चुकाना कोर्स पूरा होने के बाद शुरू होता है, ताकि आप पहले पढ़ाई कर सकें।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Bihar.",
      "Passed Class 12 or an equivalent exam.",
      "Admitted to an approved course at a recognised institution in Bihar or elsewhere in India.",
      "Usually aged 25 years or less when applying (some courses allow more).",
    ],
    hi: [
      "बिहार के स्थायी निवासी।",
      "12वीं या उसके बराबर की परीक्षा पास।",
      "बिहार या देश में कहीं भी मान्य संस्थान के स्वीकृत कोर्स में दाखिला।",
      "आवेदन के समय आमतौर पर उम्र 25 साल तक (कुछ कोर्स में ज़्यादा की छूट है)।",
    ],
  },
  exclusions: {
    en: [
      "Courses or colleges not on the scheme's approved list.",
      "Students who are not permanent residents of Bihar.",
    ],
    hi: [
      "ऐसे कोर्स या कॉलेज जो योजना की स्वीकृत सूची में नहीं हैं।",
      "जो छात्र बिहार के स्थायी निवासी नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to 7nishchay-yuvaupmission.bihar.gov.in and register with your mobile number and email.",
        "Fill in the Student Credit Card form with your course and college details, and upload your documents.",
        "Choose a date and visit your District Registration and Counselling Centre (DRCC) with original documents for verification.",
        "After approval, the loan is paid to your college for fees and to you for other costs. Check the status on the same portal.",
      ],
      hi: [
        "7nishchay-yuvaupmission.bihar.gov.in पर जाएँ और मोबाइल नंबर व ईमेल से रजिस्टर करें।",
        "स्टूडेंट क्रेडिट कार्ड का फ़ॉर्म अपने कोर्स और कॉलेज के विवरण के साथ भरें और दस्तावेज़ अपलोड करें।",
        "तारीख चुनकर मूल दस्तावेज़ों के साथ अपने ज़िला निबंधन एवं परामर्श केंद्र (DRCC) पर जाँच के लिए जाएँ।",
        "मंज़ूरी के बाद फ़ीस का पैसा कॉलेज को और बाकी खर्च का पैसा आपको मिलता है। स्थिति उसी पोर्टल पर देखें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Residence certificate of Bihar",
      "Class 10 and 12 marksheets and certificates",
      "Admission letter and fee structure from the college",
      "Bank passbook of student and co-applicant (parent or guardian)",
      "Passport-size photographs of student and co-applicant",
    ],
    hi: [
      "आधार कार्ड",
      "बिहार का निवास प्रमाण पत्र",
      "10वीं और 12वीं की मार्कशीट और प्रमाण पत्र",
      "कॉलेज का दाखिला पत्र और फ़ीस का ब्यौरा",
      "छात्र और सह-आवेदक (माता-पिता या अभिभावक) के बैंक खाते की पासबुक",
      "छात्र और सह-आवेदक की पासपोर्ट साइज़ फ़ोटो",
    ],
  },
  faqs: [
    {
      q: { en: "Do I have to pay any interest now?", hi: "क्या अब कोई ब्याज देना होगा?" },
      a: {
        en: "No. Since 2025 the state has made the loan interest-free for every student. You repay only the amount you borrowed.",
        hi: "नहीं। 2025 से राज्य सरकार ने यह कर्ज़ हर छात्र के लिए बिना ब्याज का कर दिया है। आपको सिर्फ़ उतना ही लौटाना है जितना लिया है।",
      },
    },
    {
      q: { en: "Do I need a guarantor or property as security?", hi: "क्या गारंटर या ज़मीन-जायदाद गिरवी रखनी होगी?" },
      a: {
        en: "No property is needed. The state government stands as guarantor. A parent or guardian signs as co-applicant.",
        hi: "कोई संपत्ति गिरवी नहीं रखनी होती। राज्य सरकार गारंटी देती है। माता-पिता या अभिभावक सह-आवेदक के रूप में हस्ताक्षर करते हैं।",
      },
    },
  ],

  officialUrl: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
  sources: [
    "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    "https://betastate.bihar.gov.in/educationbihar/",
    "https://news.careers360.com/bihar-student-credit-card-scheme-revised-no-interest-longer-repayment-period-class-12-scholarship-7-nischay-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2016,
  status: "active",
};

export default scheme;
