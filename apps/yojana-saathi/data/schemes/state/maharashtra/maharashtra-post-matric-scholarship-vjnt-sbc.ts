import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-post-matric-scholarship-vjnt-sbc",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Post-Matric Scholarship for VJNT and SBC Students", hi: "VJNT और SBC छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति" },
  shortDescription: {
    en: "VJNT and SBC students in Maharashtra from families earning up to ₹2.5 lakh get full tuition and exam fees plus a monthly allowance of ₹90 to ₹425 for courses after class 10.",
    hi: "महाराष्ट्र के ₹2.5 लाख तक आय वाले परिवारों के VJNT और SBC छात्रों को कक्षा 10 के बाद के कोर्स के लिए पूरी ट्यूशन व परीक्षा फ़ीस और ₹90 से ₹425 महीने का भत्ता मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "OBC Bahujan Welfare Department (OBC, SEBC, VJNT and SBC Welfare), Government of Maharashtra", hi: "इतर मागास बहुजन कल्याण विभाग (OBC, SEBC, VJNT और SBC कल्याण), महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "vjnt", "nomadic tribes", "sbc", "post matric", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "obc"), { en: "Belongs to the VJNT (Vimukta Jati / Nomadic Tribes) or SBC category", hi: "VJNT (विमुक्त जाति / घुमंतू जनजाति) या SBC वर्ग से हो" }),
    incomeUpTo(250_000),
  ),

  details: {
    en: ["Maharashtra runs separate post-matric scholarships for Vimukta Jati and Nomadic Tribes (VJNT) and for Special Backward Class (SBC) students, with the same rules. Both pay fees and a monthly maintenance allowance.", "Unlike the OBC scheme, fees are paid in full in government, aided and unaided institutions, for professional and non-professional courses."],
    hi: ["महाराष्ट्र विमुक्त जाति व घुमंतू जनजाति (VJNT) और विशेष पिछड़ा वर्ग (SBC) के छात्रों के लिए एक जैसे नियमों वाली अलग-अलग पोस्ट-मैट्रिक छात्रवृत्ति चलाता है। दोनों में फ़ीस और मासिक निर्वाह भत्ता मिलता है।", "OBC योजना से अलग, इसमें सरकारी, अनुदानित और बिना-अनुदान संस्थानों में प्रोफ़ेशनल और नॉन-प्रोफ़ेशनल, दोनों कोर्स की पूरी फ़ीस मिलती है।"],
  },
  benefits: {
    en: ["100% of tuition and exam fees in government, aided and unaided institutions.", "Maintenance allowance from admission until the exam: ₹150 to ₹425 a month for hostellers and ₹90 to ₹190 a month for day scholars, depending on the course group.", "Students staying in a government hostel get one-third of the hosteller allowance."],
    hi: ["सरकारी, अनुदानित और बिना-अनुदान संस्थानों में ट्यूशन और परीक्षा फ़ीस का 100%।", "दाख़िले से परीक्षा तक निर्वाह भत्ता: कोर्स समूह के हिसाब से हॉस्टल वालों को ₹150 से ₹425 महीना और घर से आने वालों को ₹90 से ₹190 महीना।", "सरकारी हॉस्टल में रहने वाले छात्रों को हॉस्टल भत्ते का एक-तिहाई मिलता है।"],
  },
  eligibilityText: {
    en: ["Belongs to the VJNT (Vimukta Jati / Nomadic Tribes) or SBC category and lives in Maharashtra.", "Family income up to ₹2.5 lakh a year.", "Studying a government-approved post-matric course (class 11 onwards); CAP admission for professional courses.", "Any number of girls in a family can apply; for boys, at most two from the same parents.", "At least 75% attendance, and no other scholarship or stipend at the same time."],
    hi: ["VJNT (विमुक्त जाति / घुमंतू जनजाति) या SBC वर्ग से हो और महाराष्ट्र में रहता हो।", "परिवार की सालाना आय ₹2.5 लाख तक हो।", "सरकार से मान्य पोस्ट-मैट्रिक कोर्स (कक्षा 11 से आगे) कर रहा हो; प्रोफ़ेशनल कोर्स में CAP से दाख़िला।", "परिवार की कितनी भी लड़कियाँ आवेदन कर सकती हैं; लड़के एक ही माता-पिता के ज़्यादा से ज़्यादा दो।", "कम से कम 75% हाज़िरी, और उसी समय कोई दूसरी छात्रवृत्ति या स्टाइपेंड न हो।"],
  },
  documents: {
    en: ["Caste certificate (also accepted as proof of residence)", "Income certificate", "Caste validity certificate (for professional degree and postgraduate courses)", "Class 10/12 or last exam mark sheet", "Ration card and parents' declaration about the number of children claiming"],
    hi: ["जाति प्रमाण पत्र (निवास के सबूत के रूप में भी मान्य)", "आय प्रमाण पत्र", "जाति वैधता प्रमाण पत्र (प्रोफ़ेशनल डिग्री और पोस्ट-ग्रेजुएट कोर्स के लिए)", "कक्षा 10/12 या पिछली परीक्षा की मार्कशीट", "राशन कार्ड और कितने बच्चे लाभ ले रहे हैं इसकी माता-पिता की घोषणा"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Post Matric Scholarship to VJNT Students / Post Matric Scholarship to SBC Students', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Post Matric Scholarship to VJNT Students / Post Matric Scholarship to SBC Students' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFD83FFC8C5199983E26D3BE9645241F26E1947ED73B2823D", "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ABD801C85A5E1070827B2230746448BA9CCB9B577565F338F"],
  lastVerified: "2026-10-06",
  launchedYear: 2003,
  status: "active",
};

export default scheme;
