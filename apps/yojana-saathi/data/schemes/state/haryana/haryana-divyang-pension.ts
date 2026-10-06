import { all, isTrue, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "haryana-divyang-pension",
  overlapGroup: "disability-pension",
  name: { en: "Haryana Divyang Pension", hi: "हरियाणा दिव्यांग पेंशन" },
  aka: ["Haryana disability pension", "Viklang Pension Haryana"],
  shortDescription: {
    en: "Persons with 60% or more disability in Haryana, aged 18 or above with low income, get a pension of ₹3,200 a month in their bank account.",
    hi: "हरियाणा में 60% या उससे ज़्यादा दिव्यांगता वाले, 18 साल या उससे ऊपर के कम आय वाले लोगों को हर महीने ₹3,200 पेंशन बैंक खाते में मिलती है।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Social Justice, Empowerment, Welfare of SCs & BCs and Antyodaya (SEWA) Department, Haryana",
    hi: "सामाजिक न्याय, अधिकारिता, अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण तथा अंत्योदय (सेवा) विभाग, हरियाणा",
  },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "divyang", "handicapped", "pension", "haryana"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 3200, period: "monthly", kind: "pension" },
  ageRange: { min: 18 },
  kundliHouse: "health",
  eligibility: all(residentOf("haryana"), minAge(18), isTrue("disabled"), when("disabilityPct", "gte", 60)),

  details: {
    en: [
      "Haryana Divyang Pension gives a monthly pension to persons with disabilities who can't support themselves. The current rules are the Haryana Divyang Pension Rules, 2025, and the rate is ₹3,200 a month from 1 November 2025.",
      "It covers the disabilities listed in the RPwD Act, 2016, such as locomotor disability, blindness, low vision, hearing and speech disability, intellectual disability, autism, mental illness, cerebral palsy and multiple disabilities.",
      "Eligible people are identified from Family ID (Parivar Pehchan Patra) data, contacted for consent by the District Social Welfare Officer, and paid every month through PFMS.",
    ],
    hi: [
      "हरियाणा दिव्यांग पेंशन उन दिव्यांगजनों को हर महीने पेंशन देती है जो खुद अपना गुज़ारा नहीं कर पाते। अभी हरियाणा दिव्यांग पेंशन नियम, 2025 लागू हैं और 1 नवंबर 2025 से दर ₹3,200 महीना है।",
      "इसमें RPwD अधिनियम, 2016 में दर्ज दिव्यांगताएँ शामिल हैं, जैसे चलने-फिरने में अक्षमता, अंधापन, कम दृष्टि, सुनने और बोलने में अक्षमता, बौद्धिक अक्षमता, ऑटिज़्म, मानसिक बीमारी, सेरेब्रल पाल्सी और बहु-दिव्यांगता।",
      "पात्र लोगों की पहचान परिवार पहचान पत्र (PPP) डेटा से होती है, ज़िला समाज कल्याण अधिकारी सहमति लेते हैं, और हर महीने PFMS से भुगतान होता है।",
    ],
  },
  benefits: {
    en: [
      "₹3,200 every month for life, paid into your bank account.",
      "People with haemophilia, thalassemia or sickle cell disease get it in addition to any other social security pension.",
    ],
    hi: [
      "जीवन भर हर महीने ₹3,200, सीधे बैंक खाते में।",
      "हीमोफ़ीलिया, थैलेसीमिया या सिकल सेल रोग वालों को यह किसी दूसरी सामाजिक सुरक्षा पेंशन के साथ भी मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 years or more (no age limit for haemophilia, thalassemia and sickle cell disease).",
      "Domicile of Haryana, living in the state for at least three years.",
      "Disability of 60% to 100%, certified by the Health Department.",
      "Your own yearly income is not more than the minimum wage for unskilled labour, and close relatives (parents, sons, grandsons) are not supporting you. For haemophilia, thalassemia and sickle cell the income limit is ₹3 lakh.",
    ],
    hi: [
      "उम्र 18 साल या उससे ज़्यादा (हीमोफ़ीलिया, थैलेसीमिया और सिकल सेल रोग में कोई उम्र सीमा नहीं)।",
      "हरियाणा के अधिवासी हों और कम से कम तीन साल से राज्य में रह रहे हों।",
      "स्वास्थ्य विभाग से प्रमाणित 60% से 100% तक दिव्यांगता।",
      "आपकी अपनी सालाना आय अकुशल मज़दूर की न्यूनतम मज़दूरी से ज़्यादा न हो, और नज़दीकी रिश्तेदार (माता-पिता, बेटे, पोते) आपकी मदद न कर रहे हों। हीमोफ़ीलिया, थैलेसीमिया और सिकल सेल में आय सीमा ₹3 लाख है।",
    ],
  },
  exclusions: {
    en: [
      "Your own income rises above the limit (the pension stops).",
      "You have more than one bank account registered on PFMS for the pension.",
      "An FIR for serious crimes against women or children is registered against you.",
    ],
    hi: [
      "आपकी अपनी आय सीमा से ज़्यादा हो जाए (पेंशन बंद हो जाती है)।",
      "पेंशन के लिए PFMS में आपके एक से ज़्यादा बैंक खाते दर्ज हों।",
      "आपके ख़िलाफ़ महिलाओं या बच्चों के प्रति गंभीर अपराध की FIR दर्ज हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Get your disability certificate (UDID) from the Health Department and make sure it is updated in your Family ID (PPP).",
        "The department identifies eligible people from PPP data and contacts them for consent; you can also apply on saralharyana.gov.in.",
        "Once your pension ID is made and your bank account is validated, payments start.",
      ],
      hi: [
        "स्वास्थ्य विभाग से दिव्यांगता प्रमाण पत्र (UDID) बनवाएँ और पक्का करें कि यह आपके परिवार पहचान पत्र (PPP) में अपडेट हो।",
        "विभाग PPP डेटा से पात्र लोगों को पहचानकर सहमति के लिए संपर्क करता है; आप saralharyana.gov.in पर भी आवेदन कर सकते हैं।",
        "पेंशन ID बनने और बैंक खाते की पुष्टि होने के बाद भुगतान शुरू हो जाता है।",
      ],
    },
    offline: {
      en: [
        "Visit a SARAL Kendra, CSC or the District Social Welfare Officer's office.",
        "Carry your disability certificate, Family ID and Aadhaar.",
      ],
      hi: ["SARAL केंद्र, CSC या ज़िला समाज कल्याण अधिकारी के कार्यालय जाएँ।", "दिव्यांगता प्रमाण पत्र, परिवार पहचान पत्र और आधार साथ ले जाएँ।"],
    },
  },
  documents: {
    en: ["Disability certificate / UDID card (60% or more)", "Family ID (Parivar Pehchan Patra)", "Aadhaar card", "Bank account details"],
    hi: ["दिव्यांगता प्रमाण पत्र / UDID कार्ड (60% या ज़्यादा)", "परिवार पहचान पत्र (PPP)", "आधार कार्ड", "बैंक खाते का विवरण"],
  },
  faqs: [
    {
      q: { en: "My disability is 50%. Can I get it?", hi: "मेरी दिव्यांगता 50% है। क्या मुझे मिलेगी?" },
      a: {
        en: "No. The department lists 60% to 100% disability for this pension. Other schemes, such as aids and appliances, may still help.",
        hi: "नहीं। इस पेंशन के लिए विभाग 60% से 100% दिव्यांगता मांगता है। सहायक उपकरण जैसी दूसरी योजनाएँ फिर भी काम आ सकती हैं।",
      },
    },
    {
      q: { en: "Is there a separate scheme for disabled children?", hi: "क्या दिव्यांग बच्चों के लिए अलग योजना है?" },
      a: {
        en: "Yes. Haryana has a separate financial assistance scheme for disabled children under 18 who can't go to school. Ask the District Social Welfare Officer.",
        hi: "हाँ। स्कूल न जा पाने वाले 18 साल से कम उम्र के दिव्यांग बच्चों के लिए हरियाणा में अलग आर्थिक सहायता योजना है। ज़िला समाज कल्याण अधिकारी से पूछें।",
      },
    },
  ],

  officialUrl: "https://socialjusticehry.gov.in/haryana-divyang-pension-schemes/",
  sources: [
    "https://socialjusticehry.gov.in/haryana-divyang-pension-schemes/",
    "https://cdnbbsr.s3waas.gov.in/s392bbd31f8e0e43a7da8a6295b251725f/uploads/2025/03/20250307141030342.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 1982,
  status: "active",
};

export default scheme;
