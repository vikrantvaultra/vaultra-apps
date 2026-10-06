import { all, incomeUpTo, isFalse, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pmay-urban-2",
  name: { en: "Pradhan Mantri Awas Yojana – Urban 2.0", hi: "प्रधानमंत्री आवास योजना – शहरी 2.0" },
  aka: ["PMAY-U 2.0", "PMAY Urban", "PMAY-U"],
  shortDescription: {
    en: "Get ₹2.5 lakh to build or buy your first pucca home in a town or city, or up to ₹1.8 lakh interest subsidy on a home loan, if your family earns up to ₹9 lakh a year.",
    hi: "अगर परिवार की सालाना आय ₹9 लाख तक है, तो शहर या कस्बे में पहला पक्का घर बनाने या खरीदने के लिए ₹2.5 लाख, या होम लोन पर ₹1.8 लाख तक ब्याज सब्सिडी पाएँ।",
  },
  level: "central",
  ministry: "housing-urban-affairs",
  categories: ["housing"],
  tags: ["house", "awas", "urban housing", "home loan", "interest subsidy", "rental housing"],
  benefitType: "composite",
  isDBT: true,
  value: { amount: 250000, period: "one-time", kind: "cash" },
  kundliHouse: "home",
  eligibility: all(
    labelled(when("area", "eq", "urban"), { en: "You live in a town or city (urban area)", hi: "आप शहर या कस्बे (शहरी क्षेत्र) में रहते हैं" }),
    labelled(isFalse("pucca"), { en: "Your family has no pucca house anywhere in India", hi: "आपके परिवार के पास भारत में कहीं भी पक्का घर नहीं है" }),
    labelled(incomeUpTo(900_000), { en: "Annual family income up to ₹9 lakh", hi: "परिवार की सालाना आय ₹9 लाख तक" }),
  ),

  details: {
    en: [
      "PMAY-Urban 2.0 helps poor and middle-class families in towns and cities get their first pucca home. It runs from 2024-25 to 2028-29 with a goal of 1 crore houses, under the Ministry of Housing & Urban Affairs with states and urban local bodies.",
      "It has four parts (verticals). Beneficiary-Led Construction (BLC) helps EWS families build on their own land. Affordable Housing in Partnership (AHP) helps EWS families buy a flat in a government or private project. Affordable Rental Housing (ARH) creates low-rent homes for working women, migrants, industrial workers, students and others. The Interest Subsidy Scheme (ISS) cuts the interest on home loans for EWS, LIG and MIG families.",
      "Families are grouped by yearly income: EWS up to ₹3 lakh, LIG ₹3 lakh to ₹6 lakh, and MIG ₹6 lakh to ₹9 lakh. BLC and AHP are only for EWS; ISS is open to all three groups.",
    ],
    hi: [
      "PMAY-शहरी 2.0 शहरों और कस्बों के गरीब और मध्यम वर्ग के परिवारों को पहला पक्का घर दिलाने में मदद करती है। यह 2024-25 से 2028-29 तक 1 करोड़ घरों के लक्ष्य के साथ आवासन और शहरी कार्य मंत्रालय, राज्यों और नगर निकायों के ज़रिए चलती है।",
      "इसके चार हिस्से हैं। लाभार्थी आधारित निर्माण (BLC) में EWS परिवार अपनी ज़मीन पर घर बनाते हैं। भागीदारी में किफ़ायती आवास (AHP) में EWS परिवार सरकारी या निजी प्रोजेक्ट में फ़्लैट लेते हैं। किफ़ायती किराया आवास (ARH) कामकाजी महिलाओं, प्रवासियों, मज़दूरों, छात्रों और दूसरों के लिए कम किराए के घर बनाता है। ब्याज सब्सिडी योजना (ISS) EWS, LIG और MIG परिवारों के होम लोन का ब्याज घटाती है।",
      "परिवारों को सालाना आय से बाँटा जाता है: EWS ₹3 लाख तक, LIG ₹3 से ₹6 लाख, और MIG ₹6 से ₹9 लाख। BLC और AHP सिर्फ़ EWS के लिए हैं; ISS तीनों समूहों के लिए है।",
    ],
  },
  benefits: {
    en: [
      "BLC and AHP (EWS families): ₹2.5 lakh per house in government help (central plus state share).",
      "ISS: 4% interest subsidy on the first ₹8 lakh of a home loan (loan up to ₹25 lakh, house value up to ₹35 lakh), for up to 12 years.",
      "ISS subsidy of up to ₹1.80 lakh is credited to your loan account in 5 yearly instalments.",
      "ARH: a safe home on low rent for those who don't want to or can't buy a house yet.",
      "States and cities may add extra help on top of the central amount.",
    ],
    hi: [
      "BLC और AHP (EWS परिवार): हर घर के लिए ₹2.5 लाख सरकारी मदद (केंद्र और राज्य का हिस्सा मिलाकर)।",
      "ISS: होम लोन के पहले ₹8 लाख पर 4% ब्याज सब्सिडी (लोन ₹25 लाख तक, घर की कीमत ₹35 लाख तक), 12 साल तक।",
      "ISS में ₹1.80 लाख तक की सब्सिडी 5 सालाना किस्तों में आपके लोन खाते में आती है।",
      "ARH: जो अभी घर नहीं खरीदना चाहते या नहीं खरीद सकते, उनके लिए कम किराए पर सुरक्षित घर।",
      "राज्य और शहर केंद्र की राशि के ऊपर अतिरिक्त मदद दे सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Family lives in an urban area (statutory town or city).",
      "Family (husband, wife and unmarried children) does not own a pucca house anywhere in India.",
      "Annual family income: up to ₹3 lakh for EWS, ₹3–6 lakh for LIG, ₹6–9 lakh for MIG.",
      "BLC and AHP are only for EWS families; ISS is for EWS, LIG and MIG.",
      "Special focus on widows, single women, persons with disabilities, SC/ST, minorities, slum dwellers, street vendors, artisans, safai karmis, anganwadi and construction workers.",
    ],
    hi: [
      "परिवार शहरी क्षेत्र (वैधानिक शहर या कस्बे) में रहता है।",
      "परिवार (पति, पत्नी और अविवाहित बच्चे) के पास भारत में कहीं भी पक्का घर नहीं है।",
      "सालाना पारिवारिक आय: EWS के लिए ₹3 लाख तक, LIG के लिए ₹3–6 लाख, MIG के लिए ₹6–9 लाख।",
      "BLC और AHP सिर्फ़ EWS परिवारों के लिए; ISS EWS, LIG और MIG के लिए।",
      "विधवाओं, अकेली महिलाओं, दिव्यांगजनों, SC/ST, अल्पसंख्यकों, झुग्गीवासियों, रेहड़ी-पटरी वालों, कारीगरों, सफ़ाई कर्मियों, आंगनवाड़ी और निर्माण श्रमिकों पर ख़ास ध्यान।",
    ],
  },
  exclusions: {
    en: [
      "Families that already own a pucca house anywhere in India.",
      "Families who have already received a house under a central or state government housing scheme in the past (check the exact rule with your city office).",
      "Families earning more than ₹9 lakh a year.",
      "ISS benefit is only for home loans up to ₹25 lakh on houses worth up to ₹35 lakh.",
    ],
    hi: [
      "जिन परिवारों के पास भारत में कहीं भी पक्का घर है।",
      "जिन परिवारों को पहले किसी केंद्र या राज्य सरकार की आवास योजना में घर मिल चुका है (सही नियम अपने नगर कार्यालय से पता करें)।",
      "जिन परिवारों की सालाना आय ₹9 लाख से ज़्यादा है।",
      "ISS का फ़ायदा सिर्फ़ ₹35 लाख तक के घर पर ₹25 लाख तक के होम लोन के लिए है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Go to the PMAY-U 2.0 portal (pmaymis.gov.in) and choose 'Apply for PMAY-U 2.0'.",
        "Check your eligibility, verify your Aadhaar with OTP, and pick the vertical (BLC, AHP, ARH or ISS).",
        "Fill in family, income, address and bank details, upload documents and submit. For ISS, also apply for the home loan with a bank or housing finance company.",
      ],
      hi: [
        "PMAY-U 2.0 पोर्टल (pmaymis.gov.in) पर जाएँ और 'Apply for PMAY-U 2.0' चुनें।",
        "अपनी पात्रता जाँचें, OTP से आधार की पुष्टि करें और हिस्सा (BLC, AHP, ARH या ISS) चुनें।",
        "परिवार, आय, पता और बैंक की जानकारी भरें, दस्तावेज़ अपलोड करें और जमा करें। ISS के लिए किसी बैंक या हाउसिंग फ़ाइनेंस कंपनी में होम लोन के लिए भी आवेदन करें।",
      ],
    },
    offline: {
      en: [
        "Visit your municipal corporation or council office, or a Common Service Centre (CSC).",
        "Fill in the PMAY-U 2.0 form with help from the staff.",
        "Submit it with your Aadhaar, income proof and bank details, and keep the application number.",
      ],
      hi: [
        "अपने नगर निगम या नगर पालिका कार्यालय, या जन सेवा केंद्र (CSC) पर जाएँ।",
        "कर्मचारियों की मदद से PMAY-U 2.0 फ़ॉर्म भरें।",
        "आधार, आय प्रमाण और बैंक जानकारी के साथ जमा करें और आवेदन संख्या संभाल कर रखें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar of all family members", "Income certificate or proof of income", "Bank account details linked to Aadhaar", "Land documents (for BLC)", "Caste or disability certificate, if applicable"],
    hi: ["परिवार के सभी सदस्यों का आधार", "आय प्रमाण पत्र या आय का सबूत", "आधार से जुड़े बैंक खाते की जानकारी", "ज़मीन के कागज़ (BLC के लिए)", "जाति या दिव्यांगता प्रमाण पत्र, अगर लागू हो"],
  },
  faqs: [
    {
      q: { en: "I earn ₹7 lakh a year. Which part can I use?", hi: "मेरी सालाना आय ₹7 लाख है। मैं कौन सा हिस्सा ले सकता/सकती हूँ?" },
      a: {
        en: "You fall in the MIG group, so you can use the Interest Subsidy Scheme (ISS) on a home loan. BLC and AHP grants are only for EWS families earning up to ₹3 lakh.",
        hi: "आप MIG समूह में आते हैं, इसलिए होम लोन पर ब्याज सब्सिडी योजना (ISS) ले सकते हैं। BLC और AHP की मदद सिर्फ़ ₹3 लाख तक कमाने वाले EWS परिवारों के लिए है।",
      },
    },
    {
      q: { en: "I don't have land. Can I still get a house?", hi: "मेरे पास ज़मीन नहीं है। क्या फिर भी घर मिल सकता है?" },
      a: {
        en: "Yes. EWS families can apply under AHP to buy a flat in an approved project, or use rental housing under ARH. Some states also give land rights (patta) to landless families under BLC.",
        hi: "हाँ। EWS परिवार AHP में मंज़ूर प्रोजेक्ट में फ़्लैट के लिए आवेदन कर सकते हैं, या ARH में किराए का घर ले सकते हैं। कुछ राज्य BLC में बेज़मीन परिवारों को पट्टा भी देते हैं।",
      },
    },
  ],

  officialUrl: "https://pmaymis.gov.in/",
  sources: [
    "https://www.pmindia.gov.in/en/news_updates/cabinet-approves-pradhan-mantri-awas-yojana-urban-2-0-scheme/",
    "https://pmaymis.gov.in/PMAYMIS2_2024/PmayDefault.aspx",
    "https://pmay-urban.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
