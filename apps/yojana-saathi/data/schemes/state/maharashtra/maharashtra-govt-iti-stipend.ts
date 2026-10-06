import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-govt-iti-stipend",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "₹500 Monthly Stipend for Trainees in Government ITIs", hi: "सरकारी ITI के प्रशिक्षुओं के लिए ₹500 मासिक स्टाइपेंड" },
  aka: ["ITI Stipend"],
  shortDescription: {
    en: "Trainees of all categories in Maharashtra's government ITIs get a stipend of ₹500 a month, if family income is up to ₹8 lakh and attendance is at least 80%.",
    hi: "महाराष्ट्र के सरकारी ITI में सभी वर्गों के प्रशिक्षुओं को ₹500 महीने का स्टाइपेंड मिलता है, अगर परिवार की आय ₹8 लाख तक है और हाज़िरी कम से कम 80% है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Skill Development, Employment and Entrepreneurship Department, Government of Maharashtra", hi: "कौशल विकास, रोज़गार और उद्यमिता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "skills-employment"],
  tags: ["iti", "stipend", "vocational training", "craftsman training", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 500, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    incomeUpTo(800_000),
  ),

  details: {
    en: ["From the 2023-24 session, Maharashtra raised the old ₹40–₹60 ITI stipend to ₹500 a month and extended it to all trainees in government ITIs under the Craftsmen Training Scheme, across all categories.", "The stipend is paid in two instalments through MahaDBT into an Aadhaar-seeded bank account."],
    hi: ["2023-24 सत्र से महाराष्ट्र ने ITI का पुराना ₹40–₹60 का स्टाइपेंड बढ़ाकर ₹500 महीना किया, और इसे क्राफ़्ट्समैन ट्रेनिंग स्कीम के तहत सरकारी ITI के सभी वर्गों के सभी प्रशिक्षुओं तक बढ़ाया।", "स्टाइपेंड MahaDBT से आधार से जुड़े बैंक खाते में दो किस्तों में मिलता है।"],
  },
  benefits: {
    en: ["₹500 a month for the duration of training, paid in two instalments a year."],
    hi: ["प्रशिक्षण के दौरान ₹500 महीना, साल में दो किस्तों में।"],
  },
  eligibilityText: {
    en: ["Trainee in a government ITI in Maharashtra, with Maharashtra domicile (private ITI trainees are not covered).", "Family income up to ₹8 lakh a year (non-creamy layer rules apply).", "At least 80% average attendance; for 2-year trades, must pass the first year.", "Only two siblings of a family can get it; needs an Aadhaar-seeded account in a nationalised bank."],
    hi: ["महाराष्ट्र के सरकारी ITI का प्रशिक्षु, जिसका महाराष्ट्र अधिवास हो (प्राइवेट ITI के प्रशिक्षु शामिल नहीं)।", "परिवार की सालाना आय ₹8 लाख तक (नॉन-क्रीमी लेयर के नियम लागू)।", "औसत हाज़िरी कम से कम 80%; 2 साल के ट्रेड में पहला साल पास करना ज़रूरी।", "परिवार के दो भाई-बहनों को ही मिलता है; राष्ट्रीयकृत बैंक में आधार से जुड़ा खाता ज़रूरी।"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Stipend of Rs. 500 per month for trainees in Craftsman Training Scheme in Govt ITI', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Stipend of Rs. 500 per month for trainees in Craftsman Training Scheme in Govt ITI' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A8D6E1E4E8866EE600571B0A841AF768C93C24C5AEB049B3D"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
