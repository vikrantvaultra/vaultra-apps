import { all, labelled, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nagaland-cmmfi",
  name: { en: "Chief Minister's Micro Finance Initiative (CMMFI), Nagaland", hi: "मुख्यमंत्री माइक्रो फ़ाइनेंस इनिशिएटिव (CMMFI), नागालैंड" },
  aka: ["CMMFI", "CMMFI 2.0", "CM Micro Finance Initiative", "Nagaland credit portal"],
  shortDescription: {
    en: "Nagaland entrepreneurs, farmers and SHGs get a bank loan for a new project with a 30% government subsidy: you put in 10%, the bank lends 60%, and the state covers interest for the first 6 months.",
    hi: "नागालैंड के उद्यमियों, किसानों और SHG को नए काम के लिए बैंक कर्ज़ पर 30% सरकारी सब्सिडी मिलती है: आप 10% लगाते हैं, बैंक 60% कर्ज़ देता है, और पहले 6 महीने का ब्याज राज्य भरता है।",
  },
  level: "state",
  state: "nagaland",
  department: {
    en: "Finance Department, Government of Nagaland",
    hi: "वित्त विभाग, नागालैंड सरकार",
  },
  categories: ["business", "agriculture", "skills-employment"],
  tags: ["loan", "subsidy", "self employment", "business", "shg", "farmer", "cmmfi", "nagaland"],
  benefitType: "loan",
  isDBT: false,
  kundliHouse: "business",
  eligibility: all(
    residentOf("nagaland"),
    labelled(notGovtEmployee(), {
      en: "You are not a serving government employee",
      hi: "आप सेवारत सरकारी कर्मचारी नहीं हैं",
    }),
  ),

  details: {
    en: [
      "The Chief Minister's Micro Finance Initiative (CMMFI) is the Government of Nagaland's bank-credit-linked subsidy scheme to help people start farm, allied and small business projects. The Finance Department is the nodal department, and banks, district committees and technical departments take part.",
      "For each approved project the borrower puts in at least 10% of the cost, a bank lends up to 60%, and the state gives a fixed 30% back-ended subsidy through the bank. There is a 6-month moratorium during which the state pays the interest, and the state pays the credit guarantee fee so that micro and small enterprise loans need no collateral.",
      "The current version, CMMFI 2.0, is handled online through the Nagaland Credit Portal, where you can check eligibility, prepare a project report (DPR) and apply. No fee is charged by the government for processing.",
    ],
    hi: [
      "मुख्यमंत्री माइक्रो फ़ाइनेंस इनिशिएटिव (CMMFI) नागालैंड सरकार की बैंक कर्ज़ से जुड़ी सब्सिडी योजना है, जो खेती, उससे जुड़े कामों और छोटे कारोबार शुरू करने में मदद करती है। वित्त विभाग इसका नोडल विभाग है, और बैंक, ज़िला समितियाँ और तकनीकी विभाग इसमें साथ काम करते हैं।",
      "हर मंज़ूर प्रोजेक्ट में कर्ज़ लेने वाला कम से कम 10% लागत खुद लगाता है, बैंक 60% तक कर्ज़ देता है, और राज्य बैंक के ज़रिए तय 30% सब्सिडी देता है। 6 महीने की मोहलत होती है जिसमें ब्याज राज्य भरता है, और राज्य क्रेडिट गारंटी फ़ीस भी भरता है ताकि सूक्ष्म और लघु उद्यम कर्ज़ बिना गिरवी के मिल सके।",
      "अभी का रूप, CMMFI 2.0, नागालैंड क्रेडिट पोर्टल पर ऑनलाइन चलता है, जहाँ आप पात्रता देख सकते हैं, प्रोजेक्ट रिपोर्ट (DPR) बना सकते हैं और आवेदन कर सकते हैं। सरकार इसके लिए कोई फ़ीस नहीं लेती।",
    ],
  },
  benefits: {
    en: [
      "30% of the project cost as a back-ended subsidy from the Government of Nagaland.",
      "Bank loan for up to 60% of the project cost; you pay only 10% upfront.",
      "6-month moratorium, with the state paying the interest during that time.",
      "Collateral-free loans for micro and small enterprises, with the state paying the 0.37% annual CGTMSE guarantee fee.",
      "An extra 4% interest subvention on fresh KCC loans and on credit to NSRLM self-help groups.",
    ],
    hi: [
      "प्रोजेक्ट लागत का 30% नागालैंड सरकार की ओर से सब्सिडी के रूप में (बाद में समायोजित)।",
      "प्रोजेक्ट लागत के 60% तक बैंक कर्ज़; आपको शुरू में सिर्फ़ 10% लगाना है।",
      "6 महीने की मोहलत, जिसमें ब्याज राज्य भरता है।",
      "सूक्ष्म और लघु उद्यमों के लिए बिना गिरवी कर्ज़, और 0.37% सालाना CGTMSE गारंटी फ़ीस राज्य भरता है।",
      "नए KCC कर्ज़ और NSRLM स्वयं सहायता समूहों के कर्ज़ पर 4% अतिरिक्त ब्याज छूट।",
    ],
  },
  eligibilityText: {
    en: [
      "Individuals (farmers and entrepreneurs), self-help groups and farmer producer organisations in Nagaland.",
      "You must not be a defaulter with any bank, and you must not be a serving government employee.",
      "For land-based activities, you need enough land in your name or on lease for at least the loan period (in non-cadastral areas, a Village Council certificate countersigned by the area administrative officer works).",
      "You should have experience or training in the activity you choose.",
      "SHGs must follow the Panchasutra norms; FPOs need 3 years of audited accounts, at least 100 shareholders and ₹1 lakh paid-up capital.",
    ],
    hi: [
      "नागालैंड के व्यक्ति (किसान और उद्यमी), स्वयं सहायता समूह और किसान उत्पादक संगठन।",
      "आप किसी बैंक के डिफ़ॉल्टर न हों, और सेवारत सरकारी कर्मचारी न हों।",
      "ज़मीन से जुड़े काम के लिए, आपके नाम पर या कम से कम कर्ज़ की अवधि तक के पट्टे पर पर्याप्त ज़मीन हो (बिना भू-अभिलेख वाले इलाकों में ग्राम परिषद का प्रमाण पत्र, जिस पर क्षेत्र के प्रशासनिक अधिकारी के दस्तख़त हों, चल जाता है)।",
      "आपको चुने हुए काम का अनुभव या प्रशिक्षण होना चाहिए।",
      "SHG पंचसूत्र नियमों का पालन करें; FPO के पास 3 साल का ऑडिट किया हिसाब, कम से कम 100 शेयरधारक और ₹1 लाख की चुकता पूँजी हो।",
    ],
  },
  exclusions: {
    en: [
      "Serving government employees.",
      "Bank defaulters.",
      "Foreclosing the loan within the 2-year lock-in period is not allowed.",
    ],
    hi: [
      "सेवारत सरकारी कर्मचारी।",
      "बैंक के डिफ़ॉल्टर।",
      "2 साल की लॉक-इन अवधि में कर्ज़ पहले चुकाकर बंद करने की अनुमति नहीं है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on credit.nagaland.gov.in and use Check Eligibility to see which projects fit you.",
        "Prepare your Detailed Project Report (DPR) with the portal's DPR tool.",
        "Apply for the loan on the portal and track the status; the bank and the district committee (DLIMC) review it.",
        "For help, call the CMMFI Facilitation Cell (9077175990) or visit the Swavalamban Connect Kendra (SCK) in your district.",
      ],
      hi: [
        "credit.nagaland.gov.in पर पंजीकरण करें और Check Eligibility से देखें कि कौन-से प्रोजेक्ट आपके लिए हैं।",
        "पोर्टल के DPR टूल से अपनी विस्तृत प्रोजेक्ट रिपोर्ट (DPR) बनाएँ।",
        "पोर्टल पर कर्ज़ के लिए आवेदन करें और स्थिति देखते रहें; बैंक और ज़िला समिति (DLIMC) इसकी जाँच करते हैं।",
        "मदद के लिए CMMFI फ़ैसिलिटेशन सेल (9077175990) पर फ़ोन करें या अपने ज़िले के स्वावलंबन कनेक्ट केंद्र (SCK) जाएँ।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card and bank account details",
      "Detailed Project Report (DPR)",
      "Land document or lease agreement, or Village Council certificate (for land-based activities)",
      "Proof of experience or training in the activity, if any",
    ],
    hi: [
      "आधार कार्ड और बैंक खाते का विवरण",
      "विस्तृत प्रोजेक्ट रिपोर्ट (DPR)",
      "ज़मीन का कागज़ या पट्टा, या ग्राम परिषद का प्रमाण पत्र (ज़मीन से जुड़े काम के लिए)",
      "काम के अनुभव या प्रशिक्षण का सबूत, अगर हो",
    ],
  },
  faqs: [
    {
      q: { en: "How much EMI will I pay?", hi: "मुझे कितनी EMI भरनी होगी?" },
      a: {
        en: "Your EMI is worked out on 60% of the total loan amount, because you pay 10% upfront and the state's 30% is put in advance. EMIs start after the 6-month moratorium. If your bank charged more, it must refund the excess.",
        hi: "आपकी EMI कुल कर्ज़ के 60% पर तय होती है, क्योंकि 10% आप शुरू में देते हैं और राज्य का 30% पहले से जमा होता है। EMI 6 महीने की मोहलत के बाद शुरू होती है। अगर बैंक ने ज़्यादा काटा है तो उसे लौटाना होगा।",
      },
    },
    {
      q: { en: "Do I have to pay anyone to make my DPR or process the loan?", hi: "क्या DPR बनवाने या कर्ज़ पास करवाने के लिए किसी को पैसे देने हैं?" },
      a: {
        en: "No. The government charges nothing. Report anyone asking for money to the CMMFI Facilitation Cell at 9077175990.",
        hi: "नहीं। सरकार कुछ नहीं लेती। अगर कोई पैसे माँगे तो CMMFI फ़ैसिलिटेशन सेल को 9077175990 पर बताएँ।",
      },
    },
  ],

  officialUrl: "https://credit.nagaland.gov.in/cmmfi",
  sources: [
    "https://credit.nagaland.gov.in/cmmfi",
    "https://credit.nagaland.gov.in/",
    "https://ipr.nagaland.gov.in/THE-FINANCE-DEPARTMENT-ADDRESSES-CONCERNS-RAISED-BY-BENEFICIARIES-OF-CMMFI",
    "https://ipr.nagaland.gov.in/AWARENESS-CUM-SENSITIZATION-ON-CMMFI-PROGRAMME-HELD-AT-MELURI",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
