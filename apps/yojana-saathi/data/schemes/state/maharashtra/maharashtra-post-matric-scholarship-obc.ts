import { all, incomeUpTo, isTrue, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-post-matric-scholarship-obc",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Post-Matric Scholarship for OBC Students (Maharashtra)", hi: "OBC छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति (महाराष्ट्र)" },
  shortDescription: {
    en: "OBC students in Maharashtra from families earning up to ₹2.5 lakh get tuition and exam fees plus a monthly allowance of ₹90 to ₹425, from class 11 to postgraduate study. Girls get 100% of fees.",
    hi: "महाराष्ट्र के ₹2.5 लाख तक आय वाले परिवारों के OBC छात्रों को कक्षा 11 से पोस्ट-ग्रेजुएशन तक ट्यूशन व परीक्षा फ़ीस और ₹90 से ₹425 महीने का भत्ता मिलता है। लड़कियों को 100% फ़ीस।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "obc", "post matric", "maintenance allowance", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    when("caste", "eq", "obc"),
    incomeUpTo(250_000),
  ),

  details: {
    en: ["This is the main post-matric scholarship for OBC students in Maharashtra, run by the OBC Bahujan Welfare Department on MahaDBT. It pays fees and a monthly maintenance allowance for courses after class 10.", "Students in government and aided colleges get 100% of fees. In unaided colleges boys get 50% of tuition and exam fees, while girls get 100% under a July 2024 government decision."],
    hi: ["यह महाराष्ट्र में OBC छात्रों की मुख्य पोस्ट-मैट्रिक छात्रवृत्ति है, जिसे इतर मागास बहुजन कल्याण विभाग MahaDBT पर चलाता है। इसमें कक्षा 10 के बाद के कोर्स के लिए फ़ीस और मासिक निर्वाह भत्ता मिलता है।", "सरकारी और अनुदानित कॉलेजों में 100% फ़ीस मिलती है। बिना-अनुदान कॉलेजों में लड़कों को ट्यूशन व परीक्षा फ़ीस का 50% और लड़कियों को जुलाई 2024 के सरकारी निर्णय के तहत 100% मिलता है।"],
  },
  benefits: {
    en: ["Government or aided college: 100% of tuition and exam fees.", "Unaided college: 50% of tuition and exam fees for boys, 100% for girls.", "Maintenance allowance from admission until the exam: ₹150 to ₹425 a month for hostellers and ₹90 to ₹190 a month for day scholars, depending on the course group.", "Students staying in a government hostel get one-third of the hosteller allowance."],
    hi: ["सरकारी या अनुदानित कॉलेज: ट्यूशन और परीक्षा फ़ीस का 100%।", "बिना-अनुदान कॉलेज: लड़कों को ट्यूशन और परीक्षा फ़ीस का 50%, लड़कियों को 100%।", "दाख़िले से परीक्षा तक निर्वाह भत्ता: कोर्स समूह के हिसाब से हॉस्टल वालों को ₹150 से ₹425 महीना और घर से आने वालों को ₹90 से ₹190 महीना।", "सरकारी हॉस्टल में रहने वाले छात्रों को हॉस्टल भत्ते का एक-तिहाई मिलता है।"],
  },
  eligibilityText: {
    en: ["OBC student living in Maharashtra.", "Family income up to ₹2.5 lakh a year.", "Studying a government-approved post-matric course (class 11 onwards); CAP admission for professional courses.", "Any number of girls in a family can apply; for boys, at most two from the same parents.", "At least 75% attendance, and no other scholarship or stipend at the same time."],
    hi: ["महाराष्ट्र में रहने वाला OBC छात्र।", "परिवार की सालाना आय ₹2.5 लाख तक हो।", "सरकार से मान्य पोस्ट-मैट्रिक कोर्स (कक्षा 11 से आगे) कर रहा हो; प्रोफ़ेशनल कोर्स में CAP से दाख़िला।", "परिवार की कितनी भी लड़कियाँ आवेदन कर सकती हैं; लड़के एक ही माता-पिता के ज़्यादा से ज़्यादा दो।", "कम से कम 75% हाज़िरी, और उसी समय कोई दूसरी छात्रवृत्ति या स्टाइपेंड न हो।"],
  },
  documents: {
    en: ["Caste certificate (also accepted as proof of residence)", "Income certificate", "Caste validity certificate (for professional degree and postgraduate courses)", "Class 10/12 or last exam mark sheet", "Ration card and parents' declaration about the number of children claiming"],
    hi: ["जाति प्रमाण पत्र (निवास के सबूत के रूप में भी मान्य)", "आय प्रमाण पत्र", "जाति वैधता प्रमाण पत्र (प्रोफ़ेशनल डिग्री और पोस्ट-ग्रेजुएट कोर्स के लिए)", "कक्षा 10/12 या पिछली परीक्षा की मार्कशीट", "राशन कार्ड और कितने बच्चे लाभ ले रहे हैं इसकी माता-पिता की घोषणा"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Post Matric Scholarship to OBC Students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Post Matric Scholarship to OBC Students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB02E984835E89FEFDB316E301CE6A991F41C5D42B01A7D7E"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
