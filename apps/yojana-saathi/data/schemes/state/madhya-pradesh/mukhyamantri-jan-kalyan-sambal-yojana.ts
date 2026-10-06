import { all, ageBetween, labelled, notGovtEmployee, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-jan-kalyan-sambal-yojana",
  name: { en: "Mukhyamantri Jan Kalyan (Sambal 2.0) Yojana", hi: "मुख्यमंत्री जन कल्याण (संबल 2.0) योजना" },
  aka: ["Sambal", "Sambal 2.0", "Sambal Card", "Jan Kalyan Yojana MP"],
  shortDescription: {
    en: "Registered unorganised workers in Madhya Pradesh get a Sambal card: ₹4 lakh to the family on accidental death, ₹2 lakh on normal death, disability help and ₹5,000 for funeral costs.",
    hi: "मध्य प्रदेश के पंजीकृत असंगठित श्रमिकों को संबल कार्ड मिलता है: दुर्घटना में मृत्यु पर परिवार को ₹4 लाख, सामान्य मृत्यु पर ₹2 लाख, दिव्यांगता पर सहायता और अंतिम संस्कार के लिए ₹5,000।",
  },
  level: "state",
  state: "madhya-pradesh",
  department: {
    en: "Labour Department, Government of Madhya Pradesh",
    hi: "श्रम विभाग, मध्य प्रदेश सरकार",
  },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["sambal", "unorganised worker", "labour", "death benefit", "accident", "funeral", "madhya pradesh"],
  benefitType: "insurance",
  isDBT: true,
  value: { amount: 200000, period: "one-time", kind: "cover" },
  ageRange: { min: 18, max: 60 },
  kundliHouse: "insurance",
  eligibility: all(
    residentOf("madhya-pradesh"),
    ...ageBetween(18, 60),
    labelled(
      when("occupation", "in", [
        "agri-labourer",
        "farmer",
        "fisher",
        "livestock-dairy",
        "artisan",
        "street-vendor",
        "construction-worker",
        "domestic-worker",
        "unorganised-worker",
        "small-business",
      ]),
      { en: "You work in the unorganised sector", hi: "आप असंगठित क्षेत्र में काम करते हैं" },
    ),
    labelled(notGovtEmployee(), { en: "You are not a government employee", hi: "आप सरकारी कर्मचारी नहीं हैं" }),
  ),

  details: {
    en: [
      "Sambal is Madhya Pradesh's social security scheme for unorganised workers, started in 2018 and relaunched as Sambal 2.0 in 2022. The Labour Department runs it through sambal.mp.gov.in.",
      "Once you are registered, you get a Sambal card. If the worker dies or is disabled, the family can claim ex-gratia help (anugrah sahayata) from the panchayat or urban body, and the money is paid into the bank account.",
      "Sambal card holders can also get benefits run by other departments, such as maternity help for women workers and higher-education fee support for their children, and they are covered for free treatment under Ayushman Bharat Niramayam.",
    ],
    hi: [
      "संबल मध्य प्रदेश सरकार की असंगठित श्रमिकों के लिए सामाजिक सुरक्षा योजना है। यह 2018 में शुरू हुई और 2022 में संबल 2.0 के रूप में दोबारा शुरू की गई। श्रम विभाग इसे sambal.mp.gov.in से चलाता है।",
      "पंजीयन होने पर आपको संबल कार्ड मिलता है। श्रमिक की मृत्यु या दिव्यांगता होने पर परिवार पंचायत या नगरीय निकाय से अनुग्रह सहायता का दावा कर सकता है, और पैसा बैंक खाते में आता है।",
      "संबल कार्ड वालों को दूसरे विभागों के लाभ भी मिलते हैं, जैसे महिला श्रमिकों को प्रसूति सहायता और बच्चों को कॉलेज की फ़ीस में मदद, और वे आयुष्मान भारत निरामयम में मुफ़्त इलाज के भी पात्र हैं।",
    ],
  },
  benefits: {
    en: [
      "₹4 lakh to the family if the worker dies in an accident.",
      "₹2 lakh to the family on a normal death.",
      "₹2 lakh for permanent disability and ₹1 lakh for partial permanent disability.",
      "₹5,000 for funeral expenses, paid quickly through the panchayat or ward.",
      "Access to linked benefits such as maternity help for women workers and free treatment under Ayushman Bharat Niramayam.",
    ],
    hi: [
      "दुर्घटना में श्रमिक की मृत्यु पर परिवार को ₹4 लाख।",
      "सामान्य मृत्यु पर परिवार को ₹2 लाख।",
      "स्थायी दिव्यांगता पर ₹2 लाख और आंशिक स्थायी दिव्यांगता पर ₹1 लाख।",
      "अंतिम संस्कार के लिए ₹5,000, जो पंचायत या वार्ड से जल्दी मिलते हैं।",
      "जुड़े हुए लाभ, जैसे महिला श्रमिकों को प्रसूति सहायता और आयुष्मान भारत निरामयम में मुफ़्त इलाज।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Madhya Pradesh aged 18 to 60.",
      "Works in the unorganised sector, such as farm labour, construction, domestic work, vending or small self-employment.",
      "Is not a government employee and does not pay income tax.",
      "Is listed in the Samagra database with Aadhaar e-KYC done.",
    ],
    hi: [
      "मध्य प्रदेश के 18 से 60 साल के निवासी।",
      "असंगठित क्षेत्र में काम करते हों, जैसे खेतिहर मज़दूरी, निर्माण, घरेलू काम, फेरी या छोटा स्वरोज़गार।",
      "सरकारी कर्मचारी न हों और आयकर न देते हों।",
      "समग्र डेटाबेस में नाम हो और आधार e-KYC हो चुकी हो।",
    ],
  },
  exclusions: {
    en: [
      "Government employees and income-tax payers.",
      "People covered by EPF or ESIC through a regular job.",
      "People with more than the landholding limit set in the rules.",
    ],
    hi: [
      "सरकारी कर्मचारी और आयकरदाता।",
      "नियमित नौकरी के ज़रिए EPF या ESIC में शामिल लोग।",
      "नियमों में तय सीमा से ज़्यादा ज़मीन वाले लोग।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to sambal.mp.gov.in and choose 'apply for registration'.",
        "Enter your Samagra member ID, complete the Aadhaar e-KYC and submit the form.",
        "After verification by the panchayat or urban body, download your Sambal card from the portal.",
      ],
      hi: [
        "sambal.mp.gov.in पर जाएँ और 'पंजीयन हेतु आवेदन करें' चुनें।",
        "अपनी समग्र सदस्य ID डालें, आधार e-KYC पूरी करें और फ़ॉर्म जमा करें।",
        "पंचायत या नगरीय निकाय की जाँच के बाद पोर्टल से संबल कार्ड डाउनलोड करें।",
      ],
    },
    offline: {
      en: [
        "Visit your gram panchayat, janpad panchayat or urban body office, or an MP Online / CSC centre.",
        "For a death or disability claim, the family applies at the same office with the Sambal card and certificate.",
      ],
      hi: [
        "अपनी ग्राम पंचायत, जनपद पंचायत या नगरीय निकाय कार्यालय, या MP Online / CSC केंद्र पर जाएँ।",
        "मृत्यु या दिव्यांगता के दावे के लिए परिवार उसी कार्यालय में संबल कार्ड और प्रमाण पत्र के साथ आवेदन करता है।",
      ],
    },
  },
  documents: {
    en: ["Samagra member ID", "Aadhaar card (for e-KYC)", "Bank account details", "Death or disability certificate (for claims)"],
    hi: ["समग्र सदस्य ID", "आधार कार्ड (e-KYC के लिए)", "बैंक खाते का विवरण", "मृत्यु या दिव्यांगता प्रमाण पत्र (दावे के लिए)"],
  },
  faqs: [
    {
      q: { en: "Is there any fee to register?", hi: "क्या पंजीयन की कोई फ़ीस है?" },
      a: {
        en: "No. Registration under Sambal is free.",
        hi: "नहीं। संबल में पंजीयन मुफ़्त है।",
      },
    },
    {
      q: { en: "My Sambal registration was rejected earlier. Can I apply again?", hi: "पहले मेरा संबल पंजीयन निरस्त हो गया था। क्या दोबारा आवेदन कर सकता हूँ?" },
      a: {
        en: "Yes. Sambal 2.0 lets workers who were found ineligible earlier apply again, and the portal also has an appeal option.",
        hi: "हाँ। संबल 2.0 में पहले अपात्र किए गए श्रमिक दोबारा आवेदन कर सकते हैं, और पोर्टल पर अपील का विकल्प भी है।",
      },
    },
  ],

  officialUrl: "https://sambal.mp.gov.in/",
  sources: [
    "https://sambal.mp.gov.in/",
    "https://www.drishtiias.com/state-pcs-current-affairs/sambal-2-0-scheme",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2018,
  status: "active",
};

export default scheme;
