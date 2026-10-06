import { all, incomeUpTo, isTrue, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-yasasvi-obc",
  name: { en: "PM YASASVI Post-Matric Scholarship for OBC, EBC and DNT Students", hi: "PM YASASVI: OBC, EBC और DNT छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति" },
  aka: ["PM YASASVI", "PM-YASASVI", "Post Matric Scholarship OBC"],
  shortDescription: {
    en: "₹5,000 to ₹20,000 a year (allowance plus tuition) for OBC, EBC and DNT students studying after class 10, if the family earns up to ₹2.5 lakh a year.",
    hi: "कक्षा 10 के बाद पढ़ने वाले OBC, EBC और DNT छात्रों को हर साल ₹5,000 से ₹20,000 (भत्ता और ट्यूशन फ़ीस), अगर परिवार की सालाना आय ₹2.5 लाख तक है।",
  },
  level: "central",
  ministry: "social-justice-empowerment",
  categories: ["education", "social-welfare"],
  tags: ["scholarship", "obc", "ebc", "dnt", "post matric", "yasasvi"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "yearly", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    labelled(when("caste", "in", ["obc", "general"]), {
      en: "Belongs to OBC, EBC (economically backward class) or a Denotified Tribe (DNT)",
      hi: "OBC, EBC (आर्थिक रूप से पिछड़ा वर्ग) या विमुक्त जनजाति (DNT) से हों",
    }),
    isTrue("student"),
    incomeUpTo(250_000),
  ),

  details: {
    en: [
      "PM YASASVI is the Ministry of Social Justice & Empowerment's umbrella scheme for students from Other Backward Classes (OBC), Economically Backward Classes (EBC) and Denotified, Nomadic and Semi-Nomadic Tribes (DNT). It has five parts: pre-matric scholarship (class 9–10), post-matric scholarship, Top Class School Education, Top Class College Education and hostels for OBC students.",
      "This page is about the post-matric scholarship, the biggest part. It covers any recognised course after class 10 at a recognised institution, and pays a yearly academic allowance plus tuition fees, depending on the course group. States run it and pay students by DBT.",
      "Eligible students can also get a Freeship Card from their state, which lets them take admission without paying tuition and hostel fees upfront.",
    ],
    hi: [
      "PM YASASVI सामाजिक न्याय और अधिकारिता मंत्रालय की अन्य पिछड़ा वर्ग (OBC), आर्थिक रूप से पिछड़ा वर्ग (EBC) और विमुक्त, घुमंतू व अर्ध-घुमंतू जनजाति (DNT) के छात्रों के लिए बड़ी योजना है। इसके पाँच हिस्से हैं: प्री-मैट्रिक छात्रवृत्ति (कक्षा 9–10), पोस्ट-मैट्रिक छात्रवृत्ति, टॉप क्लास स्कूल शिक्षा, टॉप क्लास कॉलेज शिक्षा और OBC छात्रों के लिए हॉस्टल।",
      "यह पेज पोस्ट-मैट्रिक छात्रवृत्ति के बारे में है, जो सबसे बड़ा हिस्सा है। इसमें कक्षा 10 के बाद किसी मान्यता प्राप्त संस्थान का कोई भी मान्य कोर्स आता है, और कोर्स समूह के हिसाब से सालाना शैक्षिक भत्ता और ट्यूशन फ़ीस मिलती है। इसे राज्य चलाते हैं और DBT से पैसा देते हैं।",
      "पात्र छात्रों को राज्य से फ़्रीशिप कार्ड भी मिल सकता है, जिससे वे पहले ट्यूशन और हॉस्टल फ़ीस भरे बिना दाख़िला ले सकते हैं।",
    ],
  },
  benefits: {
    en: [
      "Group 1 (degree and PG professional courses like engineering, medicine, MBA): ₹10,000 allowance + ₹10,000 tuition = ₹20,000 a year.",
      "Group 2 (other professional degree, diploma and certificate courses): ₹8,000 + ₹5,000 = ₹13,000 a year.",
      "Group 3 (other graduate and PG courses like BA, BSc, BCom): ₹6,000 + ₹2,000 = ₹8,000 a year.",
      "Group 4 (non-degree courses after class 10, including class 11–12): ₹5,000 a year.",
      "States may add a top-up from their own funds.",
    ],
    hi: [
      "समूह 1 (इंजीनियरिंग, मेडिकल, MBA जैसे डिग्री और PG प्रोफ़ेशनल कोर्स): ₹10,000 भत्ता + ₹10,000 ट्यूशन = हर साल ₹20,000।",
      "समूह 2 (अन्य प्रोफ़ेशनल डिग्री, डिप्लोमा और सर्टिफ़िकेट कोर्स): ₹8,000 + ₹5,000 = हर साल ₹13,000।",
      "समूह 3 (BA, BSc, BCom जैसे अन्य स्नातक और PG कोर्स): ₹6,000 + ₹2,000 = हर साल ₹8,000।",
      "समूह 4 (कक्षा 10 के बाद के गैर-डिग्री कोर्स, कक्षा 11–12 समेत): हर साल ₹5,000।",
      "राज्य अपने पैसे से अतिरिक्त राशि जोड़ सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Indian student belonging to OBC, EBC or DNT, as notified by the Centre or the state.",
      "Total family income is up to ₹2.5 lakh a year. For working students, their own income is added to their parents'.",
      "Has passed class 10 and is studying a recognised post-matric course at a recognised institution.",
      "Applies in the state or UT where they are permanently settled.",
    ],
    hi: [
      "केंद्र या राज्य द्वारा अधिसूचित OBC, EBC या DNT वर्ग के भारतीय छात्र।",
      "परिवार की कुल सालाना आय ₹2.5 लाख तक। नौकरी करने वाले छात्रों की अपनी आय माता-पिता की आय में जोड़ी जाती है।",
      "कक्षा 10 पास हों और मान्यता प्राप्त संस्थान में मान्य पोस्ट-मैट्रिक कोर्स कर रहे हों।",
      "उसी राज्य या केंद्र शासित प्रदेश में आवेदन करें जहाँ के स्थायी निवासी हों।",
    ],
  },
  exclusions: {
    en: [
      "Seats taken through management quota, NRI quota or spot admission outside the merit process are not covered.",
      "Students on correspondence or online courses get tuition fees only, not the academic allowance.",
      "You cannot hold another scholarship or stipend for the same course at the same time.",
    ],
    hi: [
      "मैनेजमेंट कोटा, NRI कोटा या मेरिट प्रक्रिया से बाहर स्पॉट एडमिशन वाली सीटें शामिल नहीं हैं।",
      "पत्राचार या ऑनलाइन कोर्स वाले छात्रों को सिर्फ़ ट्यूशन फ़ीस मिलती है, शैक्षिक भत्ता नहीं।",
      "एक ही कोर्स के लिए एक साथ दूसरी छात्रवृत्ति या वज़ीफ़ा नहीं ले सकते।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check whether your state uses the National Scholarship Portal (scholarships.gov.in) or its own portal for OBC/EBC/DNT post-matric scholarships.",
        "Register with Aadhaar and a mobile number (One Time Registration on NSP).",
        "Fill in the PM YASASVI post-matric form and upload your caste/category, income and marks documents.",
        "Your institution and then the state department verify it. Renew every year.",
      ],
      hi: [
        "पता करें कि आपका राज्य OBC/EBC/DNT पोस्ट-मैट्रिक छात्रवृत्ति के लिए नेशनल स्कॉलरशिप पोर्टल (scholarships.gov.in) या अपना पोर्टल इस्तेमाल करता है।",
        "आधार और मोबाइल नंबर से रजिस्टर करें (NSP पर वन टाइम रजिस्ट्रेशन)।",
        "PM YASASVI पोस्ट-मैट्रिक फ़ॉर्म भरें और जाति/वर्ग, आय और अंकों के दस्तावेज़ अपलोड करें।",
        "पहले आपका संस्थान और फिर राज्य का विभाग जाँच करता है। हर साल नवीनीकरण करें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar", "OBC, EBC or DNT certificate", "Family income certificate", "Class 10 and latest mark sheets", "Admission proof and fee receipt", "Aadhaar-linked bank account"],
    hi: ["आधार", "OBC, EBC या DNT प्रमाण पत्र", "परिवार का आय प्रमाण पत्र", "कक्षा 10 और ताज़ा अंकतालिका", "दाख़िले का प्रमाण और फ़ीस रसीद", "आधार से जुड़ा बैंक खाता"],
  },
  faqs: [
    {
      q: { en: "What do the other parts of PM YASASVI offer?", hi: "PM YASASVI के बाकी हिस्सों में क्या मिलता है?" },
      a: {
        en: "Pre-matric: ₹4,000 a year for class 9–10 students in government schools. Top Class School: fees for class 9–12 in selected schools, for students chosen through a test. Top Class College: full tuition (up to ₹2 lakh a year in private institutions), ₹3,000 a month for living costs, books and a laptop, for students at notified top institutions. All need family income up to ₹2.5 lakh.",
        hi: "प्री-मैट्रिक: सरकारी स्कूलों में कक्षा 9–10 के छात्रों को हर साल ₹4,000। टॉप क्लास स्कूल: टेस्ट से चुने गए छात्रों को चुनिंदा स्कूलों में कक्षा 9–12 की फ़ीस। टॉप क्लास कॉलेज: अधिसूचित बड़े संस्थानों के छात्रों को पूरी ट्यूशन फ़ीस (निजी संस्थानों में ₹2 लाख सालाना तक), रहने के लिए ₹3,000 महीना, किताबें और लैपटॉप। सबके लिए पारिवारिक आय ₹2.5 लाख तक होनी चाहिए।",
      },
    },
    {
      q: { en: "I am from the general category but my family is poor. Can I apply?", hi: "मैं सामान्य वर्ग से हूँ पर परिवार गरीब है। क्या आवेदन कर सकता/सकती हूँ?" },
      a: {
        en: "Possibly, if your state lists you as EBC (Economically Backward Class). You will need an EBC certificate from your state and family income up to ₹2.5 lakh.",
        hi: "हो सकता है, अगर आपका राज्य आपको EBC (आर्थिक रूप से पिछड़ा वर्ग) मानता है। इसके लिए राज्य का EBC प्रमाण पत्र और ₹2.5 लाख तक पारिवारिक आय चाहिए।",
      },
    },
  ],

  officialUrl: "https://socialjustice.gov.in/schemes/101",
  sources: [
    "https://socialjustice.gov.in/schemes/101",
    "https://socialjustice.gov.in/public/ckeditor/upload/65661651839791.pdf",
    "https://dip.goa.gov.in/scholarship-schemes-applications-through-online-mode/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
