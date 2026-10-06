import { all, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pm-matsya-sampada-yojana",
  name: { en: "Pradhan Mantri Matsya Sampada Yojana", hi: "प्रधानमंत्री मत्स्य संपदा योजना" },
  aka: ["PMMSY", "Matsya Sampada"],
  shortDescription: {
    en: "Fishers and fish farmers get a 40% subsidy (60% for women, SC and ST) on approved units like fish ponds, cages, boats, nets and fish-selling vehicles.",
    hi: "मछुआरों और मछली पालकों को मछली तालाब, पिंजरे, नाव, जाल और मछली बेचने की गाड़ी जैसी मंज़ूर इकाइयों पर 40% सब्सिडी (महिलाओं, SC और ST को 60%)।",
  },
  level: "central",
  ministry: "fisheries-animal-husbandry-dairying",
  categories: ["agriculture", "business"],
  tags: ["fisheries", "fish farming", "fisher", "subsidy", "aquaculture", "matsya"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(
    when("occupation", "in", ["fisher"], { en: "You fish, farm fish or sell fish", hi: "आप मछली पकड़ते, पालते या बेचते हैं" }),
  ),

  details: {
    en: [
      "PMMSY is the Government of India's main scheme to grow the fisheries sector. It is run by the Department of Fisheries, with state fisheries departments handling applications from individuals.",
      "Under its beneficiary-oriented part, fishers, fish farmers, fish workers and vendors can get a subsidy on the approved cost of a project, such as new ponds, biofloc or recirculating tanks, cages, fishing boats and nets, ice boxes, or two-wheelers and three-wheelers with ice boxes for selling fish.",
      "The subsidy is 40% of the approved unit cost for general category applicants and 60% for women, Scheduled Castes and Scheduled Tribes. You arrange the rest from your own money or a bank loan. The scheme started in 2020, was extended to 2025-26, and has funds in the 2026-27 budget.",
    ],
    hi: [
      "PMMSY मत्स्य क्षेत्र को बढ़ाने के लिए भारत सरकार की मुख्य योजना है। इसे मत्स्यपालन विभाग चलाता है, और व्यक्तिगत आवेदन राज्य के मत्स्य विभाग लेते हैं।",
      "इसके लाभार्थी वाले हिस्से में मछुआरे, मछली पालक, मछली कामगार और विक्रेता किसी परियोजना की मंज़ूर लागत पर सब्सिडी पा सकते हैं, जैसे नया तालाब, बायोफ़्लॉक या रीसर्कुलेटिंग टैंक, पिंजरे, मछली पकड़ने की नाव और जाल, आइस बॉक्स, या मछली बेचने के लिए आइस बॉक्स वाली दोपहिया और तिपहिया गाड़ी।",
      "सामान्य वर्ग के आवेदकों को मंज़ूर इकाई लागत की 40% और महिलाओं, अनुसूचित जाति और अनुसूचित जनजाति को 60% सब्सिडी मिलती है। बाकी पैसा अपनी जेब से या बैंक कर्ज़ से लगाना होता है। योजना 2020 में शुरू हुई, 2025-26 तक बढ़ाई गई, और 2026-27 के बजट में भी इसके लिए पैसा रखा गया है।",
    ],
  },
  benefits: {
    en: [
      "40% subsidy on the approved unit cost for general category beneficiaries.",
      "60% subsidy for women, SC and ST beneficiaries.",
      "Support for fish ponds, cages, biofloc and RAS units, boats, nets, ice boxes and fish vending vehicles.",
      "Fishers can also be covered by group accident insurance and get help to get a Kisan Credit Card.",
    ],
    hi: [
      "सामान्य वर्ग के लाभार्थियों को मंज़ूर इकाई लागत पर 40% सब्सिडी।",
      "महिला, SC और ST लाभार्थियों को 60% सब्सिडी।",
      "मछली तालाब, पिंजरे, बायोफ़्लॉक और RAS इकाई, नाव, जाल, आइस बॉक्स और मछली बेचने की गाड़ी के लिए मदद।",
      "मछुआरों को समूह दुर्घटना बीमा और किसान क्रेडिट कार्ड दिलाने में भी मदद मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "Fishers, fish farmers, fish workers and fish vendors.",
      "Self-help groups, joint liability groups, fisheries cooperatives and fish farmer producer organisations.",
      "Entrepreneurs and private firms in fisheries.",
      "You need land, water area or a licence suitable for the unit you apply for.",
    ],
    hi: [
      "मछुआरे, मछली पालक, मछली कामगार और मछली विक्रेता।",
      "स्वयं सहायता समूह, संयुक्त देयता समूह, मत्स्य सहकारी समितियाँ और मछली पालक उत्पादक संगठन।",
      "मत्स्य क्षेत्र के उद्यमी और निजी कंपनियाँ।",
      "जिस इकाई के लिए आवेदन कर रहे हैं, उसके लिए ज़मीन, जल क्षेत्र या लाइसेंस होना चाहिए।",
    ],
  },
  exclusions: {
    en: [
      "Only the approved unit cost is subsidised; anything above it is your own cost.",
      "Projects not in your state's approved annual action plan cannot be funded.",
      "A beneficiary generally cannot get a subsidy twice for the same activity.",
    ],
    hi: [
      "सब्सिडी सिर्फ़ मंज़ूर इकाई लागत पर मिलती है; इससे ऊपर का खर्च आपका होगा।",
      "जो परियोजना राज्य की मंज़ूर सालाना कार्य योजना में नहीं है, उसे पैसा नहीं मिल सकता।",
      "आमतौर पर एक ही काम के लिए दो बार सब्सिडी नहीं मिलती।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Check your state fisheries department's website for a PMMSY online application window.",
        "Fill in the form with your activity, unit and bank details, and upload the documents and project report.",
        "After selection by the district committee, set up the unit; the subsidy is released in stages after inspection.",
      ],
      hi: [
        "अपने राज्य के मत्स्य विभाग की वेबसाइट पर PMMSY के ऑनलाइन आवेदन की जानकारी देखें।",
        "अपने काम, इकाई और बैंक की जानकारी के साथ फ़ॉर्म भरें और कागज़ व परियोजना रिपोर्ट अपलोड करें।",
        "ज़िला समिति के चुनने के बाद इकाई लगाएँ; जाँच के बाद सब्सिडी किस्तों में मिलती है।",
      ],
    },
    offline: {
      en: [
        "Visit the district fisheries office (Assistant/Deputy Director of Fisheries).",
        "Ask for the PMMSY application form for the unit you want and get a simple project report prepared.",
        "Submit the form with documents. The office will tell you about selection and subsidy release.",
      ],
      hi: [
        "ज़िले के मत्स्य कार्यालय (सहायक/उप निदेशक मत्स्य) जाएँ।",
        "जिस इकाई के लिए चाहते हैं, उसका PMMSY आवेदन फ़ॉर्म लें और एक सरल परियोजना रिपोर्ट बनवाएँ।",
        "कागज़ों के साथ फ़ॉर्म जमा करें। चयन और सब्सिडी के बारे में कार्यालय बताएगा।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Bank passbook", "Caste certificate (for 60% subsidy as SC/ST)", "Land/pond lease papers or fishing licence", "Detailed project report or quotation", "Passport-size photo"],
    hi: ["आधार कार्ड", "बैंक पासबुक", "जाति प्रमाणपत्र (SC/ST के रूप में 60% सब्सिडी के लिए)", "ज़मीन/तालाब पट्टे के कागज़ या मछली पकड़ने का लाइसेंस", "विस्तृत परियोजना रिपोर्ट या कोटेशन", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Do women get a higher subsidy?", hi: "क्या महिलाओं को ज़्यादा सब्सिडी मिलती है?" },
      a: {
        en: "Yes. Women, SC and ST beneficiaries get 60% of the approved unit cost, compared with 40% for others.",
        hi: "हाँ। महिला, SC और ST लाभार्थियों को मंज़ूर इकाई लागत का 60% मिलता है, बाकी को 40%।",
      },
    },
    {
      q: { en: "Can I take a bank loan for my share?", hi: "क्या अपने हिस्से के लिए बैंक कर्ज़ ले सकते हैं?" },
      a: {
        en: "Yes. Many beneficiaries fund their share through a bank loan or a Kisan Credit Card for fisheries.",
        hi: "हाँ। कई लाभार्थी अपना हिस्सा बैंक कर्ज़ या मत्स्य के लिए किसान क्रेडिट कार्ड से जुटाते हैं।",
      },
    },
  ],

  officialUrl: "https://pmmsy.dof.gov.in/",
  sources: [
    "https://pmmsy.dof.gov.in/",
    "https://www.myscheme.gov.in/schemes/pmmsy",
    "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc202599631001.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2020,
  status: "check-status",
};

export default scheme;
