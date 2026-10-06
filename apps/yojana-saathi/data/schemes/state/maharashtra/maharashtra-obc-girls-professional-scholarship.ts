import { all, female, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-obc-girls-professional-scholarship",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Post-Matric Scholarship for OBC Girls in Professional Courses", hi: "प्रोफ़ेशनल कोर्स में पढ़ने वाली OBC लड़कियों के लिए पोस्ट-मैट्रिक छात्रवृत्ति" },
  shortDescription: {
    en: "OBC girls in Maharashtra in professional courses, from families earning up to ₹2.5 lakh, get 100% tuition and exam fees plus a monthly allowance of ₹90 to ₹425, in any type of college.",
    hi: "महाराष्ट्र में प्रोफ़ेशनल कोर्स करने वाली OBC लड़कियों को, जिनके परिवार की आय ₹2.5 लाख तक है, किसी भी तरह के कॉलेज में 100% ट्यूशन व परीक्षा फ़ीस और ₹90 से ₹425 महीने का भत्ता मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "women-child"],
  tags: ["girls scholarship", "obc", "professional course", "engineering", "medical", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    female(),
    when("caste", "eq", "obc"),
    incomeUpTo(250_000),
  ),

  details: {
    en: ["Under a July 2024 government decision, OBC girls in professional courses get the full post-matric scholarship benefit, including in private unaided colleges where boys get only half the fees.", "It pays tuition and exam fees and a monthly maintenance allowance from admission until the final exam."],
    hi: ["जुलाई 2024 के सरकारी निर्णय के तहत प्रोफ़ेशनल कोर्स की OBC लड़कियों को पोस्ट-मैट्रिक छात्रवृत्ति का पूरा लाभ मिलता है, प्राइवेट बिना-अनुदान कॉलेजों में भी, जहाँ लड़कों को आधी फ़ीस ही मिलती है।", "इसमें ट्यूशन व परीक्षा फ़ीस और दाख़िले से अंतिम परीक्षा तक मासिक निर्वाह भत्ता मिलता है।"],
  },
  benefits: {
    en: ["100% of tuition and exam fees in government, aided and unaided colleges.", "Maintenance allowance from admission until the exam: ₹150 to ₹425 a month for hostellers and ₹90 to ₹190 a month for day scholars, depending on the course group.", "Students staying in a government hostel get one-third of the hosteller allowance."],
    hi: ["सरकारी, अनुदानित और बिना-अनुदान कॉलेजों में ट्यूशन और परीक्षा फ़ीस का 100%।", "दाख़िले से परीक्षा तक निर्वाह भत्ता: कोर्स समूह के हिसाब से हॉस्टल वालों को ₹150 से ₹425 महीना और घर से आने वालों को ₹90 से ₹190 महीना।", "सरकारी हॉस्टल में रहने वाले छात्रों को हॉस्टल भत्ते का एक-तिहाई मिलता है।"],
  },
  eligibilityText: {
    en: ["OBC girl living in Maharashtra.", "Studying a government-approved professional course, admitted through CAP.", "Family income up to ₹2.5 lakh a year.", "At least 75% attendance, and no other scholarship or stipend at the same time."],
    hi: ["महाराष्ट्र में रहने वाली OBC लड़की।", "CAP से दाख़िला लेकर सरकार से मान्य प्रोफ़ेशनल कोर्स कर रही हो।", "परिवार की सालाना आय ₹2.5 लाख तक हो।", "कम से कम 75% हाज़िरी, और उसी समय कोई दूसरी छात्रवृत्ति या स्टाइपेंड न हो।"],
  },
  documents: {
    en: ["Caste certificate (also accepted as proof of residence)", "Income certificate", "Caste validity certificate (for professional degree and postgraduate courses)", "Class 10/12 or last exam mark sheet", "Ration card and parents' declaration about the number of children claiming"],
    hi: ["जाति प्रमाण पत्र (निवास के सबूत के रूप में भी मान्य)", "आय प्रमाण पत्र", "जाति वैधता प्रमाण पत्र (प्रोफ़ेशनल डिग्री और पोस्ट-ग्रेजुएट कोर्स के लिए)", "कक्षा 10/12 या पिछली परीक्षा की मार्कशीट", "राशन कार्ड और कितने बच्चे लाभ ले रहे हैं इसकी माता-पिता की घोषणा"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Post Matric Scholarship to the Girls Belonging to Other Backward Classes taking admission in Professional Courses', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Post Matric Scholarship to the Girls Belonging to Other Backward Classes taking admission in Professional Courses' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A20E2AADEC5FCAFCAA9EF15C9E7BE6DA49EFF8397D1CB5063"],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
