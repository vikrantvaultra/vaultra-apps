import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-state-minority-scholarship-part-2",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "State Minority Scholarship Part II (Arts, Commerce, Science, Law, Education)", hi: "राज्य अल्पसंख्यक छात्रवृत्ति भाग II (आर्ट्स, कॉमर्स, साइंस, लॉ, शिक्षा)" },
  shortDescription: {
    en: "Minority students in Maharashtra studying graduate or postgraduate arts, commerce, science, law or education get their annual fee up to ₹5,000, if family income is up to ₹8 lakh.",
    hi: "महाराष्ट्र में ग्रेजुएट या पोस्ट-ग्रेजुएट आर्ट्स, कॉमर्स, साइंस, लॉ या शिक्षा पढ़ने वाले अल्पसंख्यक छात्रों को सालाना फ़ीस ₹5,000 तक मिलती है, अगर परिवार की आय ₹8 लाख तक है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Minority Development Department, Government of Maharashtra", hi: "अल्पसंख्यक विकास विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "minority"],
  tags: ["minority scholarship", "muslim", "graduation", "arts", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    isTrue("minority"),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["This state scholarship supports minority students in regular degree and postgraduate courses. It is handled by the Directorate of Higher Education for the Minority Development Department.", "About 2,000 new scholarships are given each year."],
    hi: ["यह राज्य छात्रवृत्ति सामान्य डिग्री और पोस्ट-ग्रेजुएट कोर्स के अल्पसंख्यक छात्रों की मदद करती है। अल्पसंख्यक विकास विभाग के लिए इसे उच्च शिक्षा निदेशालय चलाता है।", "हर साल लगभग 2,000 नई छात्रवृत्तियाँ दी जाती हैं।"],
  },
  benefits: {
    en: ["Total annual course fee or ₹5,000, whichever is less."],
    hi: ["कोर्स की कुल सालाना फ़ीस या ₹5,000, इनमें जो भी कम हो।"],
  },
  eligibilityText: {
    en: ["Minority student with Maharashtra domicile, studying in Maharashtra.", "Studying a graduate or postgraduate course in arts, commerce, science, law or education.", "Family income up to ₹8 lakh a year."],
    hi: ["महाराष्ट्र अधिवास वाला अल्पसंख्यक छात्र, जो महाराष्ट्र में पढ़ता हो।", "आर्ट्स, कॉमर्स, साइंस, लॉ या शिक्षा में ग्रेजुएट या पोस्ट-ग्रेजुएट कोर्स कर रहा हो।", "परिवार की सालाना आय ₹8 लाख तक हो।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'State Minority Scholarship Part II (DHE)', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'State Minority Scholarship Part II (DHE)' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0D73B666D1DADFB476AD7228CCFCCECE862BCF76CF63E6DB"],
  lastVerified: "2026-10-06",
  launchedYear: 2011,
  status: "active",
};

export default scheme;
