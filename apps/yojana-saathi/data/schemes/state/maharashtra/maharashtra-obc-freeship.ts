import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-obc-freeship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Tuition Fee and Exam Fee Freeship for OBC Students", hi: "OBC छात्रों के लिए ट्यूशन फ़ीस और परीक्षा फ़ीस फ़्रीशिप" },
  aka: ["OBC Freeship"],
  shortDescription: {
    en: "Non-creamy-layer OBC students in Maharashtra get their college tuition and exam fees paid: 100% in government and aided colleges and for girls, 50% for boys in unaided colleges.",
    hi: "महाराष्ट्र के नॉन-क्रीमी लेयर OBC छात्रों की कॉलेज की ट्यूशन और परीक्षा फ़ीस दी जाती है: सरकारी व अनुदानित कॉलेजों में और लड़कियों को 100%, बिना-अनुदान कॉलेजों में लड़कों को 50%।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["freeship", "obc", "fee reimbursement", "engineering", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    when("caste", "eq", "obc"),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["This freeship covers OBC students who are outside the ₹2.5 lakh income limit of the post-matric scholarship but are in the non-creamy layer. It pays tuition and exam fees for professional courses admitted through CAP, and for other post-matric courses.", "Since a July 2024 government decision, OBC girls get 100% of fees even in unaided colleges."],
    hi: ["यह फ़्रीशिप उन OBC छात्रों के लिए है जो पोस्ट-मैट्रिक छात्रवृत्ति की ₹2.5 लाख आय सीमा से बाहर हैं, पर नॉन-क्रीमी लेयर में आते हैं। इसमें CAP से दाख़िल प्रोफ़ेशनल कोर्स और दूसरे पोस्ट-मैट्रिक कोर्स की ट्यूशन व परीक्षा फ़ीस मिलती है।", "जुलाई 2024 के सरकारी निर्णय के बाद से OBC लड़कियों को बिना-अनुदान कॉलेजों में भी 100% फ़ीस मिलती है।"],
  },
  benefits: {
    en: ["Government or aided college: 100% of tuition and exam fees.", "Unaided college: 50% for boys and 100% for girls.", "Non-professional courses in unaided colleges are paid at aided-college fee rates."],
    hi: ["सरकारी या अनुदानित कॉलेज: ट्यूशन और परीक्षा फ़ीस का 100%।", "बिना-अनुदान कॉलेज: लड़कों को 50% और लड़कियों को 100%।", "बिना-अनुदान कॉलेजों के नॉन-प्रोफ़ेशनल कोर्स में अनुदानित कॉलेज की फ़ीस दर से भुगतान।"],
  },
  eligibilityText: {
    en: ["OBC student living in Maharashtra with a non-creamy layer certificate (family income up to ₹8 lakh).", "Studying a post-matric course in a government, aided or unaided institution in Maharashtra.", "For professional courses, admission through the CAP round; deemed university admissions are not covered.", "Can be claimed for one course at a time and for at most two professional courses.", "Must pass every year; no payment for a year you fail."],
    hi: ["महाराष्ट्र में रहने वाला OBC छात्र, जिसके पास नॉन-क्रीमी लेयर प्रमाण पत्र हो (परिवार की आय ₹8 लाख तक)।", "महाराष्ट्र के सरकारी, अनुदानित या बिना-अनुदान संस्थान में पोस्ट-मैट्रिक कोर्स कर रहा हो।", "प्रोफ़ेशनल कोर्स में CAP राउंड से दाख़िला; डीम्ड विश्वविद्यालय के दाख़िले शामिल नहीं।", "एक समय में एक कोर्स के लिए, और ज़्यादा से ज़्यादा दो प्रोफ़ेशनल कोर्स के लिए ली जा सकती है।", "हर साल पास होना ज़रूरी; फ़ेल होने वाले साल का पैसा नहीं मिलता।"],
  },
  documents: {
    en: ["Caste certificate", "Income or non-creamy layer certificate", "Last exam mark sheet", "CAP allotment letter and caste validity certificate (for professional courses)"],
    hi: ["जाति प्रमाण पत्र", "आय या नॉन-क्रीमी लेयर प्रमाण पत्र", "पिछली परीक्षा की मार्कशीट", "CAP अलॉटमेंट लेटर और जाति वैधता प्रमाण पत्र (प्रोफ़ेशनल कोर्स के लिए)"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Tuition Fees and Examination Fees to OBC Students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Tuition Fees and Examination Fees to OBC Students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A19A7691F3B40AD4EE0F3DDA5DE324AC54819922BB3D36B63"],
  lastVerified: "2026-10-06",
  launchedYear: 2007,
  status: "active",
};

export default scheme;
