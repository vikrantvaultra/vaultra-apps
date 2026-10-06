import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "odisha-free-laptop-visually-impaired",
  tier: "compact",
  name: { en: "Free Laptop for Visually Impaired Students (Odisha)", hi: "दृष्टिबाधित विद्यार्थियों के लिए मुफ़्त लैपटॉप (ओडिशा)" },
  aka: ["laptop for blind students Odisha", "SSEPD free laptop", "JAWS laptop Odisha"],
  shortDescription: {
    en: "Visually impaired students in Odisha (40%+ disability) studying after Class 12, in UG, PG or professional courses, get a free branded laptop with JAWS screen-reader software.",
    hi: "ओडिशा के दृष्टिबाधित विद्यार्थियों (40% या ज़्यादा दिव्यांगता) को, जो 12वीं के बाद UG, PG या प्रोफ़ेशनल कोर्स कर रहे हैं, JAWS स्क्रीन-रीडर के साथ मुफ़्त ब्रांडेड लैपटॉप।",
  },
  level: "state",
  state: "odisha",
  department: {
    en: "Department of Social Security and Empowerment of Persons with Disabilities (SSEPD), Government of Odisha",
    hi: "सामाजिक सुरक्षा एवं दिव्यांगजन सशक्तिकरण विभाग (SSEPD), ओडिशा सरकार",
  },
  categories: ["disability", "education"],
  tags: ["laptop", "visually impaired", "blind", "students", "disability", "odisha"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(
    residentOf("odisha"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(isTrue("student"), {
      en: "You are a visually impaired student in a UG, PG or professional course after Class 12",
      hi: "आप 12वीं के बाद UG, PG या प्रोफ़ेशनल कोर्स में पढ़ने वाले दृष्टिबाधित विद्यार्थी हैं",
    }),
  ),

  details: {
    en: [
      "Under its special appliances scheme, the SSEPD Department gives free laptops to visually impaired students in higher education, so they can study with screen-reading software.",
      "The laptops are branded models with JAWS software installed, handed over at camps held in different regions of the state. A student can get a laptop only once.",
    ],
    hi: [
      "विशेष उपकरण योजना के तहत SSEPD विभाग उच्च शिक्षा ले रहे दृष्टिबाधित विद्यार्थियों को मुफ़्त लैपटॉप देता है, ताकि वे स्क्रीन-रीडर सॉफ़्टवेयर से पढ़ सकें।",
      "लैपटॉप ब्रांडेड होते हैं और उनमें JAWS सॉफ़्टवेयर लगा होता है; इन्हें राज्य के अलग-अलग इलाकों में लगने वाले शिविरों में दिया जाता है। एक विद्यार्थी को लैपटॉप सिर्फ़ एक बार मिलता है।",
    ],
  },
  benefits: {
    en: ["A free branded laptop.", "JAWS screen-reader software installed."],
    hi: ["एक मुफ़्त ब्रांडेड लैपटॉप।", "उसमें JAWS स्क्रीन-रीडर सॉफ़्टवेयर लगा हुआ।"],
  },
  eligibilityText: {
    en: [
      "You live in Odisha and have a visual disability of 40% or more, certified by the competent authority.",
      "You are in the first year or above of a UG, PG or professional course after +2 (including M.Phil, PhD, law, management and medicine).",
      "You have not received a free laptop before.",
    ],
    hi: [
      "आप ओडिशा में रहते हैं और सक्षम अधिकारी से प्रमाणित 40% या उससे ज़्यादा दृष्टि दिव्यांगता है।",
      "आप +2 के बाद UG, PG या प्रोफ़ेशनल कोर्स (M.Phil, PhD, कानून, मैनेजमेंट और मेडिकल समेत) के पहले या आगे के साल में हैं।",
      "आपको पहले मुफ़्त लैपटॉप नहीं मिला है।",
    ],
  },
  applicationProcess: {
    online: {
      en: ["Apply on the SSEPD portal (ssepd.gov.in) under the free laptop distribution scheme.", "Upload your disability certificate and a recommendation from your college principal."],
      hi: ["SSEPD पोर्टल (ssepd.gov.in) पर मुफ़्त लैपटॉप वितरण योजना में आवेदन करें।", "दिव्यांगता प्रमाण पत्र और कॉलेज प्रिंसिपल की सिफ़ारिश अपलोड करें।"],
    },
    offline: {
      en: [
        "Apply to the District Collector (through the District Social Security Officer) in the prescribed form.",
        "Attach your disability certificate and your principal's recommendation; proposals reach the department by 31 July each year.",
      ],
      hi: [
        "तय फ़ॉर्म में ज़िला कलेक्टर को (ज़िला सामाजिक सुरक्षा अधिकारी के ज़रिए) आवेदन दें।",
        "दिव्यांगता प्रमाण पत्र और प्रिंसिपल की सिफ़ारिश लगाएँ; प्रस्ताव हर साल 31 जुलाई तक विभाग पहुँचते हैं।",
      ],
    },
  },

  officialUrl: "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/free-laptop-visually-impaired-students",
  sources: [
    "https://ssepd.odisha.gov.in/sites/default/files/2026-03/GUIDELINES%20ON%20FREE%20LAPTOP.pdf",
    "https://ssepd.odisha.gov.in/en/schemes-programmes/schemes/free-laptop-visually-impaired-students",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
