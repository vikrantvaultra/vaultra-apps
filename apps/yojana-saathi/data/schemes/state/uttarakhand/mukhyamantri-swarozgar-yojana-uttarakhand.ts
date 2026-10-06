import { all, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-swarozgar-yojana-uttarakhand",
  name: { en: "Mukhyamantri Swarozgar Yojana 2.0 (Uttarakhand)", hi: "मुख्यमंत्री स्वरोजगार योजना 2.0 (उत्तराखंड)" },
  aka: ["MSY 2.0", "MSY Uttarakhand", "Mukhyamantri Swarojgar Yojana"],
  shortDescription: {
    en: "Bank loans for Uttarakhand residents to start a business, up to ₹25 lakh for manufacturing and ₹10 lakh for service or trade, with a 15–30% subsidy that becomes a grant after 2 years.",
    hi: "उत्तराखंड के निवासियों को अपना काम शुरू करने के लिए बैंक लोन: निर्माण के लिए ₹25 लाख तक और सेवा या व्यापार के लिए ₹10 लाख तक, साथ में 15–30% सब्सिडी जो 2 साल बाद अनुदान बन जाती है।",
  },
  level: "state",
  state: "uttarakhand",
  department: {
    en: "Directorate of Industries (MSME Department), Government of Uttarakhand",
    hi: "उद्योग निदेशालय (सूक्ष्म, लघु एवं मध्यम उद्यम विभाग), उत्तराखंड सरकार",
  },
  categories: ["business", "skills-employment"],
  tags: ["self employment", "business loan", "subsidy", "msy", "swarozgar", "startup", "uttarakhand"],
  benefitType: "loan",
  isDBT: false,
  value: { amount: 2500000, period: "one-time", kind: "loan" },
  ageRange: { min: 18 },
  kundliHouse: "business",
  eligibility: all(residentOf("uttarakhand"), minAge(18)),

  details: {
    en: [
      "Mukhyamantri Swarozgar Yojana 2.0 helps young people, women, artisans, returning migrants and the unemployed in Uttarakhand set up their own manufacturing, service or trading business. It runs from 2025-26 to 2029-30 and aims to reach over 50,000 people. The 2026-27 budget set aside ₹60 crore for it.",
      "Banks give the loan. The state pays a share of the project cost as margin money, which is adjusted as a grant once the unit has run successfully for 2 years. The subsidy rate depends on the project size and how remote your area is (hill areas in Categories A and B get more).",
      "You apply online on the MSY portal; applications are checked by the District Industries Centre and forwarded to banks digitally.",
    ],
    hi: [
      "मुख्यमंत्री स्वरोजगार योजना 2.0 उत्तराखंड के युवाओं, महिलाओं, कारीगरों, लौटे प्रवासियों और बेरोज़गारों को अपना निर्माण, सेवा या व्यापार का काम शुरू करने में मदद करती है। यह 2025-26 से 2029-30 तक चलेगी और 50,000 से ज़्यादा लोगों तक पहुँचने का लक्ष्य है। 2026-27 के बजट में इसके लिए ₹60 करोड़ रखे गए हैं।",
      "लोन बैंक देते हैं। राज्य परियोजना लागत का एक हिस्सा मार्जिन मनी के रूप में देता है, जो इकाई के 2 साल सफलतापूर्वक चलने पर अनुदान में बदल जाता है। सब्सिडी की दर परियोजना के आकार और आपके क्षेत्र के दुर्गम होने पर निर्भर करती है (श्रेणी A और B के पहाड़ी क्षेत्रों को ज़्यादा)।",
      "आवेदन MSY पोर्टल पर ऑनलाइन होता है; ज़िला उद्योग केंद्र जाँच करके आवेदन डिजिटल तरीके से बैंक को भेजता है।",
    ],
  },
  benefits: {
    en: [
      "Project cost up to ₹25 lakh for manufacturing and up to ₹10 lakh for service or trade, financed by banks.",
      "Category A and B areas (all of Pithoragarh, Uttarkashi, Chamoli, Champawat, Rudraprayag, Bageshwar, Almora and Pauri, and hill parts of Tehri, Nainital and Dehradun): 30% subsidy up to ₹60,000 for projects up to ₹2 lakh, 25% up to ₹2.5 lakh for ₹2–10 lakh, 20% up to ₹5 lakh for ₹10–25 lakh.",
      "Category C and D areas (plains and lower areas, including all of Haridwar and Udham Singh Nagar): 25% up to ₹50,000, 20% up to ₹2 lakh and 15% up to ₹3.75 lakh for the same project sizes.",
      "One extra 5% subsidy for units in rural or Nagar Panchayat areas, or for women or disabled entrepreneurs, or for ODOP/ODTP/GI-tag products.",
      "The subsidy becomes a grant after the unit runs successfully for 2 years.",
    ],
    hi: [
      "निर्माण के लिए ₹25 लाख तक और सेवा या व्यापार के लिए ₹10 लाख तक की परियोजना लागत, बैंक लोन से।",
      "श्रेणी A और B क्षेत्र (पूरा पिथौरागढ़, उत्तरकाशी, चमोली, चंपावत, रुद्रप्रयाग, बागेश्वर, अल्मोड़ा और पौड़ी, और टिहरी, नैनीताल व देहरादून के पहाड़ी हिस्से): ₹2 लाख तक की परियोजना पर 30% (अधिकतम ₹60,000), ₹2–10 लाख पर 25% (अधिकतम ₹2.5 लाख), ₹10–25 लाख पर 20% (अधिकतम ₹5 लाख) सब्सिडी।",
      "श्रेणी C और D क्षेत्र (मैदानी और निचले क्षेत्र, जिनमें पूरा हरिद्वार और ऊधम सिंह नगर शामिल है): इन्हीं परियोजना आकारों पर 25% (अधिकतम ₹50,000), 20% (अधिकतम ₹2 लाख) और 15% (अधिकतम ₹3.75 लाख)।",
      "ग्रामीण या नगर पंचायत क्षेत्र की इकाई, महिला या दिव्यांग उद्यमी, या ODOP/ODTP/GI टैग उत्पाद पर एक अतिरिक्त 5% सब्सिडी।",
      "इकाई के 2 साल सफलतापूर्वक चलने पर सब्सिडी अनुदान बन जाती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent or native resident of Uttarakhand, with a domicile certificate.",
      "At least 18 years old; no upper age limit and no minimum education.",
      "Not a defaulter of any bank or government financial body.",
      "Only one person per family (husband, wife and unmarried children under 21).",
      "Has not taken help under any central or state self-employment scheme in the last 5 financial years.",
      "General category applicants put in 10% of the project cost; SC, ST, OBC, minorities, ex-servicemen, women and disabled applicants put in 5%.",
    ],
    hi: [
      "उत्तराखंड का स्थायी या मूल निवासी, अधिवास प्रमाण पत्र के साथ।",
      "उम्र कम से कम 18 साल; ऊपरी उम्र सीमा और न्यूनतम पढ़ाई की कोई शर्त नहीं।",
      "किसी बैंक या सरकारी वित्तीय संस्था का डिफ़ॉल्टर न हो।",
      "एक परिवार (पति, पत्नी और 21 साल से कम उम्र के अविवाहित बच्चे) से एक ही व्यक्ति।",
      "पिछले 5 वित्तीय वर्षों में केंद्र या राज्य की किसी स्वरोजगार योजना से मदद न ली हो।",
      "सामान्य वर्ग को परियोजना लागत का 10% और SC, ST, OBC, अल्पसंख्यक, पूर्व सैनिक, महिला और दिव्यांग आवेदकों को 5% ख़ुद लगाना होता है।",
    ],
  },
  exclusions: {
    en: [
      "Bank or government loan defaulters.",
      "Anyone who got help from a government self-employment scheme in the last 5 years (except for expansion, if not a defaulter).",
      "A second member of the same family.",
      "The cost of buying land is not covered in the project cost.",
    ],
    hi: [
      "बैंक या सरकारी लोन के डिफ़ॉल्टर।",
      "पिछले 5 साल में किसी सरकारी स्वरोजगार योजना से मदद लेने वाले (डिफ़ॉल्टर न हों तो विस्तार के लिए छूट है)।",
      "एक ही परिवार का दूसरा सदस्य।",
      "ज़मीन ख़रीदने का ख़र्च परियोजना लागत में नहीं गिना जाता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to msy.uk.gov.in, open MSY 2.0 and register as an investor.",
        "Fill in the application and upload your documents and project report (DPR formats are on the portal).",
        "The District Industries Centre checks it and sends it to your chosen bank; track the status on the portal.",
      ],
      hi: [
        "msy.uk.gov.in पर जाएँ, MSY 2.0 खोलें और निवेशक (Investor) के रूप में पंजीकरण करें।",
        "आवेदन भरें और दस्तावेज़ व परियोजना रिपोर्ट अपलोड करें (DPR के प्रारूप पोर्टल पर हैं)।",
        "ज़िला उद्योग केंद्र जाँच करके आपके चुने बैंक को भेजेगा; स्थिति पोर्टल पर देखें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Domicile certificate",
      "Project report (self-attested or CA-certified)",
      "Recent photograph",
      "Category certificate, if applicable",
      "Affidavit of eligibility on stamp paper",
      "Rent agreement, if the workplace is rented",
      "Quotations for equipment or machinery",
    ],
    hi: [
      "आधार कार्ड",
      "अधिवास प्रमाण पत्र",
      "परियोजना रिपोर्ट (स्व-प्रमाणित या CA से प्रमाणित)",
      "हाल की फ़ोटो",
      "वर्ग प्रमाण पत्र, अगर लागू हो",
      "स्टाम्प पेपर पर पात्रता का हलफ़नामा",
      "किराया अनुबंध, अगर काम की जगह किराए पर है",
      "उपकरण या मशीनों के कोटेशन",
    ],
  },
  faqs: [
    {
      q: { en: "Do I get the subsidy in cash?", hi: "क्या सब्सिडी नकद मिलती है?" },
      a: {
        en: "No. It is kept with the bank as margin money against your loan and is adjusted as a grant after your business has run successfully for at least 2 years.",
        hi: "नहीं। यह आपके लोन के बदले बैंक में मार्जिन मनी के रूप में रहती है और आपका काम कम से कम 2 साल सफलतापूर्वक चलने पर अनुदान में बदल जाती है।",
      },
    },
    {
      q: { en: "Is there an education requirement?", hi: "क्या पढ़ाई की कोई शर्त है?" },
      a: {
        en: "No. There is no minimum qualification, but your project must be viable and backed by a proper project report.",
        hi: "नहीं। कोई न्यूनतम योग्यता नहीं है, पर आपकी परियोजना व्यावहारिक होनी चाहिए और उसकी ठीक परियोजना रिपोर्ट होनी चाहिए।",
      },
    },
  ],

  officialUrl: "https://msy.uk.gov.in/",
  sources: [
    "https://msy.uk.gov.in/frontend/web/index.php",
    "https://cdnbbsr.s3waas.gov.in/s3c65d7bd70fe3e5e3a2f3de681edc193d/uploads/2026/03/2026030981807180.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
