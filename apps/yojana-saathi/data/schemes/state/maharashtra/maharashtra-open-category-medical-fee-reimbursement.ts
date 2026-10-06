import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-open-category-medical-fee-reimbursement",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Fee Reimbursement for Open-Category Medical and Dental Students Affected by SEBC and EWS Reservation", hi: "SEBC और EWS आरक्षण से प्रभावित ओपन वर्ग के मेडिकल और डेंटल छात्रों के लिए फ़ीस प्रतिपूर्ति" },
  shortDescription: {
    en: "A limited number of open-category students who had to take private unaided seats for MBBS, BDS or MD/MS get the difference between the private and government fee paid by the state.",
    hi: "ओपन वर्ग के सीमित संख्या में उन छात्रों को, जिन्हें MBBS, BDS या MD/MS के लिए प्राइवेट बिना-अनुदान सीट लेनी पड़ी, प्राइवेट और सरकारी फ़ीस का अंतर राज्य सरकार देती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Directorate of Medical Education and Research, Medical Education and Drugs Department, Government of Maharashtra", hi: "चिकित्सा शिक्षा एवं अनुसंधान निदेशालय, चिकित्सा शिक्षा एवं औषधि विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "health"],
  tags: ["mbbs", "bds", "medical fee", "open category", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "general"), { en: "Open (general) category", hi: "ओपन (सामान्य) वर्ग" }),
  ),

  details: {
    en: ["When SEBC and EWS reservations were introduced, some open-category students lost government medical seats and had to join private unaided colleges. This scheme compensates a fixed group of them (112 students as per MahaDBT).", "The state pays the gap between the fee approved for the private college and the government college fee. There is no income limit."],
    hi: ["SEBC और EWS आरक्षण आने पर ओपन वर्ग के कुछ छात्रों को सरकारी मेडिकल सीट नहीं मिली और उन्हें प्राइवेट बिना-अनुदान कॉलेज में जाना पड़ा। यह योजना उनके एक तय समूह (MahaDBT के अनुसार 112 छात्र) की भरपाई करती है।", "राज्य सरकार प्राइवेट कॉलेज की मंज़ूर फ़ीस और सरकारी कॉलेज की फ़ीस का अंतर देती है। इसमें आय की कोई सीमा नहीं है।"],
  },
  benefits: {
    en: ["Private college fee approved by the Fee Regulating Authority minus the government college fee, paid every year."],
    hi: ["शुल्क नियामक प्राधिकरण से मंज़ूर प्राइवेट कॉलेज फ़ीस में से सरकारी कॉलेज फ़ीस घटाकर बची राशि, हर साल।"],
  },
  eligibilityText: {
    en: ["Open-category student with Maharashtra domicile, in MBBS, BDS or MD/MS at a private unaided college.", "Admitted through CAP (not management quota, not a deemed university).", "No gap of 2 years or more; at least 50% attendance and passing each year (ATKT allowed)."],
    hi: ["महाराष्ट्र अधिवास वाला ओपन वर्ग का छात्र, जो प्राइवेट बिना-अनुदान कॉलेज में MBBS, BDS या MD/MS कर रहा हो।", "CAP से दाख़िला (मैनेजमेंट कोटा या डीम्ड विश्वविद्यालय नहीं)।", "2 साल या ज़्यादा का गैप न हो; कम से कम 50% हाज़िरी और हर साल पास (ATKT की छूट)।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4B35AA6BF0E14F175519B3FFB55DBFB0420845CFD04D6FA5"],
  lastVerified: "2026-10-06",
  launchedYear: 2019,
  status: "active",
};

export default scheme;
