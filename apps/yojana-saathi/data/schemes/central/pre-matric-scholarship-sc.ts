import { all, incomeUpTo, isTrue, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pre-matric-scholarship-sc",
  name: { en: "Pre-Matric Scholarship for SC Students (Class 9 and 10)", hi: "SC छात्रों के लिए प्री-मैट्रिक छात्रवृत्ति (कक्षा 9 और 10)" },
  aka: ["Pre Matric Scholarship SC"],
  shortDescription: {
    en: "₹3,500 a year (₹7,000 if you live in a hostel) for Scheduled Caste students in class 9 and 10 whose family earns up to ₹2.5 lakh a year.",
    hi: "कक्षा 9 और 10 में पढ़ने वाले अनुसूचित जाति के छात्रों को हर साल ₹3,500 (हॉस्टल में रहने पर ₹7,000), अगर परिवार की सालाना आय ₹2.5 लाख तक है।",
  },
  level: "central",
  ministry: "social-justice-empowerment",
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "sc", "class 9", "class 10", "school", "pre matric"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 3500, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(when("caste", "eq", "sc"), isTrue("student"), incomeUpTo(250_000)),

  details: {
    en: [
      "This scholarship helps Scheduled Caste children finish class 9 and 10 without dropping out. It is part of the Pre-Matric Scholarships Scheme for SCs & Others of the Ministry of Social Justice & Empowerment.",
      "It is a centrally sponsored scheme run by states and UTs. The Centre and the state share the cost 60:40 (90:10 in North-Eastern states, Uttarakhand and Himachal Pradesh; the Centre pays all in UTs without a legislature).",
      "Students apply every year through the National Scholarship Portal or their state's portal. The money is paid directly into the student's Aadhaar-linked bank account.",
    ],
    hi: [
      "यह छात्रवृत्ति अनुसूचित जाति के बच्चों को बिना पढ़ाई छोड़े कक्षा 9 और 10 पूरी करने में मदद करती है। यह सामाजिक न्याय और अधिकारिता मंत्रालय की 'SC और अन्य के लिए प्री-मैट्रिक छात्रवृत्ति योजना' का हिस्सा है।",
      "यह केंद्र प्रायोजित योजना है जिसे राज्य और केंद्र शासित प्रदेश चलाते हैं। खर्च केंद्र और राज्य 60:40 में बाँटते हैं (पूर्वोत्तर राज्यों, उत्तराखंड और हिमाचल में 90:10; बिना विधानसभा वाले केंद्र शासित प्रदेशों में पूरा खर्च केंद्र का)।",
      "छात्र हर साल नेशनल स्कॉलरशिप पोर्टल या अपने राज्य के पोर्टल से आवेदन करते हैं। पैसा सीधे छात्र के आधार से जुड़े बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹3,500 a year for day scholars.",
      "₹7,000 a year for students living in a hostel.",
      "Paid by DBT into the student's bank account.",
    ],
    hi: [
      "घर से पढ़ने वाले छात्रों को हर साल ₹3,500।",
      "हॉस्टल में रहने वाले छात्रों को हर साल ₹7,000।",
      "DBT से सीधे छात्र के बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "Belongs to a Scheduled Caste.",
      "Studying full-time in class 9 or class 10.",
      "Parents' or guardian's income is up to ₹2.5 lakh a year.",
      "Satisfactory progress and at least 75% attendance are expected each year.",
    ],
    hi: [
      "अनुसूचित जाति से हों।",
      "कक्षा 9 या 10 में पूर्णकालिक पढ़ाई कर रहे हों।",
      "माता-पिता या अभिभावक की सालाना आय ₹2.5 लाख तक हो।",
      "हर साल संतोषजनक पढ़ाई और कम से कम 75% हाज़िरी ज़रूरी है।",
    ],
  },
  exclusions: {
    en: [
      "SC students in classes 1 to 8 are not covered by this part of the scheme.",
      "Families earning above ₹2.5 lakh a year are not eligible.",
    ],
    hi: [
      "कक्षा 1 से 8 के SC छात्र योजना के इस हिस्से में शामिल नहीं हैं।",
      "₹2.5 लाख से ज़्यादा सालाना आय वाले परिवार पात्र नहीं हैं।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check whether your state uses the National Scholarship Portal (scholarships.gov.in) or its own portal for this scholarship.",
        "Register with the student's Aadhaar and a mobile number.",
        "Fill in the pre-matric SC scholarship form and upload the caste and income certificates.",
        "The school verifies it, and the district or state approves it. Apply again every year.",
      ],
      hi: [
        "पता करें कि आपका राज्य इस छात्रवृत्ति के लिए नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) या अपना पोर्टल इस्तेमाल करता है।",
        "छात्र के आधार और मोबाइल नंबर से रजिस्टर करें।",
        "SC प्री-मैट्रिक छात्रवृत्ति का फ़ॉर्म भरें और जाति व आय प्रमाण पत्र अपलोड करें।",
        "स्कूल इसकी जाँच करता है और ज़िला या राज्य मंज़ूरी देता है। हर साल फिर से आवेदन करें।",
      ],
    },
  },
  documents: {
    en: ["Student's Aadhaar", "SC caste certificate", "Income certificate of parents/guardian", "Previous class mark sheet", "School bonafide or admission proof", "Aadhaar-linked bank account"],
    hi: ["छात्र का आधार", "SC जाति प्रमाण पत्र", "माता-पिता/अभिभावक का आय प्रमाण पत्र", "पिछली कक्षा की अंकतालिका", "स्कूल का बोनाफ़ाइड या दाख़िले का प्रमाण", "आधार से जुड़ा बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "My parents clean sewers. Is there help for younger children too?", hi: "मेरे माता-पिता सीवर सफ़ाई का काम करते हैं। क्या छोटे बच्चों के लिए भी मदद है?" },
      a: {
        en: "Yes. Another part of the same scheme pays children of manual scavengers, waste pickers and people doing hazardous cleaning in classes 1 to 10, of any caste and with no income limit. You need a certificate from the District Social Welfare Officer.",
        hi: "हाँ। इसी योजना का दूसरा हिस्सा हाथ से मैला ढोने वालों, कचरा बीनने वालों और ख़तरनाक सफ़ाई करने वालों के बच्चों को कक्षा 1 से 10 तक मदद देता है, किसी भी जाति के हों और बिना आय सीमा के। इसके लिए ज़िला समाज कल्याण अधिकारी का प्रमाण पत्र चाहिए।",
      },
    },
    {
      q: { en: "Do I have to apply again in class 10?", hi: "क्या कक्षा 10 में फिर से आवेदन करना होगा?" },
      a: {
        en: "Yes. The scholarship is given year by year, so apply again (renew) when you move to class 10.",
        hi: "हाँ। छात्रवृत्ति साल-दर-साल मिलती है, इसलिए कक्षा 10 में जाने पर फिर से आवेदन (नवीनीकरण) करें।",
      },
    },
  ],

  officialUrl: "https://socialjustice.gov.in/schemes/23",
  sources: [
    "https://socialjustice.gov.in/schemes/23",
    "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1960387",
    "https://dip.goa.gov.in/scholarship-schemes-applications-through-online-mode/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
