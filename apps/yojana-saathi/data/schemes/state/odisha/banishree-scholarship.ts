import { all, isTrue, labelled, notTaxPayer, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "banishree-scholarship",
  tier: "compact",
  name: { en: "Banishree Scholarship for Students with Disabilities (Odisha)", hi: "बाणीश्री छात्रवृत्ति, दिव्यांग विद्यार्थियों के लिए (ओडिशा)" },
  aka: ["Banishree", "Odisha disability scholarship", "Students with special needs scholarship"],
  shortDescription: {
    en: "Students with a disability (UDID card) in Odisha get ₹400 to ₹700 a month from Class 1 to college, plus reader and transport allowances, on top of other scholarships.",
    hi: "ओडिशा में दिव्यांग विद्यार्थियों (UDID कार्ड वाले) को कक्षा 1 से कॉलेज तक हर महीने ₹400 से ₹700, साथ में रीडर और आने-जाने का भत्ता, दूसरी छात्रवृत्तियों के अलावा।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Social Security and Empowerment of Persons with Disabilities (SSEPD), Government of Odisha",
    hi: "सामाजिक सुरक्षा एवं दिव्यांगजन सशक्तिकरण विभाग (SSEPD), ओडिशा सरकार",
  },
  categories: ["disability", "education"],
  tags: ["scholarship", "disability", "divyang", "udid", "students", "odisha"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 400, period: "monthly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    isTrue("disabled"),
    isTrue("student"),
    labelled(notTaxPayer(), { en: "Neither parent pays income tax", hi: "माता-पिता में से कोई आयकर न देता हो" }),
  ),

  details: {
    en: [
      "Banishree is Odisha's integrated scholarship for students with disabilities, revised in December 2025. It now covers all 21 disability types for which UDID cards are issued, and is available on the State Scholarship Portal.",
      "The scholarship is paid for every month from admission to the end of the session, including the exam month, whether or not the student passes that year. It is given over and above any other State or Central scholarship.",
    ],
    hi: [
      "बाणीश्री ओडिशा की दिव्यांग विद्यार्थियों के लिए एकीकृत छात्रवृत्ति है, जिसे दिसंबर 2025 में संशोधित किया गया। अब इसमें वे सभी 21 तरह की दिव्यांगताएँ शामिल हैं जिनके लिए UDID कार्ड बनता है, और यह राज्य छात्रवृत्ति पोर्टल पर उपलब्ध है।",
      "छात्रवृत्ति दाखिले से सत्र के अंत तक, परीक्षा के महीने समेत, हर महीने के लिए मिलती है, चाहे विद्यार्थी उस साल पास हो या नहीं। यह राज्य या केंद्र की किसी भी दूसरी छात्रवृत्ति के अलावा मिलती है।",
    ],
  },
  benefits: {
    en: [
      "Class 1 to 5: ₹400 a month. Class 6 to 10: ₹500 a month.",
      "+2 and +3 college: ₹600 a month. PG, and technical or vocational training: ₹700 a month. Courses outside Odisha that aren't available in the state: ₹700 a month.",
      "Reader's allowance for visually impaired students: ₹200 to ₹400 a month, depending on the level.",
      "Transport allowance of ₹200 a month for students with 75% or more orthopaedic disability.",
    ],
    hi: [
      "कक्षा 1 से 5: ₹400 महीना। कक्षा 6 से 10: ₹500 महीना।",
      "+2 और +3 कॉलेज: ₹600 महीना। PG, और तकनीकी या व्यावसायिक प्रशिक्षण: ₹700 महीना। राज्य में उपलब्ध न होने वाले, ओडिशा के बाहर के कोर्स: ₹700 महीना।",
      "दृष्टिबाधित विद्यार्थियों को रीडर भत्ता: स्तर के हिसाब से ₹200 से ₹400 महीना।",
      "75% या उससे ज़्यादा अस्थि दिव्यांगता वाले विद्यार्थियों को आने-जाने के लिए ₹200 महीना।",
    ],
  },
  eligibilityText: {
    en: [
      "You are a bona fide resident of Odisha and a regular student at a recognised school, college, special school or training institute (distance courses are also covered).",
      "You have a valid UDID card.",
      "Neither of your parents pays income tax.",
      "The school/college rates apply only where no Government of India scholarship covers you.",
    ],
    hi: [
      "आप ओडिशा के वास्तविक निवासी हैं और किसी मान्यता प्राप्त स्कूल, कॉलेज, विशेष स्कूल या प्रशिक्षण संस्थान के नियमित विद्यार्थी हैं (दूरस्थ शिक्षा कोर्स भी शामिल हैं)।",
      "आपके पास मान्य UDID कार्ड है।",
      "माता-पिता में से कोई आयकर नहीं देता।",
      "स्कूल/कॉलेज की दरें वहीं लागू हैं जहाँ भारत सरकार की कोई छात्रवृत्ति नहीं मिलती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply on the State Scholarship Portal (scholarship.odisha.gov.in) or the SSEPD portal (ssepd.gov.in), yourself or through your school or college.",
        "Upload your UDID certificate and other documents.",
        "The head of your institution verifies enrolment and attendance, and the District Social Security Officer sanctions the scholarship.",
      ],
      hi: [
        "राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) या SSEPD पोर्टल (ssepd.gov.in) पर खुद या अपने स्कूल/कॉलेज के ज़रिए आवेदन करें।",
        "अपना UDID प्रमाण पत्र और दूसरे दस्तावेज़ अपलोड करें।",
        "संस्थान के प्रमुख दाखिले और हाज़िरी की पुष्टि करते हैं, और ज़िला सामाजिक सुरक्षा अधिकारी छात्रवृत्ति मंज़ूर करते हैं।",
      ],
    },
  },
  documents: {
    en: ["UDID card / certificate", "Aadhaar card", "Bank account (a joint account with a parent if you are under 18)", "Proof of admission"],
    hi: ["UDID कार्ड / प्रमाण पत्र", "आधार कार्ड", "बैंक खाता (18 साल से कम हों तो माता-पिता के साथ संयुक्त खाता)", "दाखिले का सबूत"],
  },

  officialUrl: "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/banishree-scholarship-0",
  sources: [
    "https://ssepd.odisha.gov.in/sites/default/files/2026-08/Banishree%20-%20A%20Scheme%20of%20Scholarship%20for%20Students%20with%20Special%20Needs._3.pdf",
    "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/banishree-scholarship-0",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
