import { all, any, isTrue, labelled, maxAge, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "goa-chief-ministers-rojgar-yojana",
  tier: "full",
  name: { en: "Chief Minister's Rojgar Yojana (CMRY), Goa", hi: "मुख्यमंत्री रोज़गार योजना (CMRY), गोवा" },
  aka: ["CMRY", "CMRY 2023", "EDC Goa self-employment loan"],
  shortDescription: {
    en: "Loans for Goan youth (18–50) to start or expand a business, for projects up to ₹20–25 lakh at 8% interest, with 75% of the interest paid back as a subsidy if you repay on time.",
    hi: "गोवा के युवाओं (18–50) को व्यवसाय शुरू करने या बढ़ाने के लिए ₹20–25 लाख तक के प्रोजेक्ट पर 8% ब्याज पर कर्ज़; समय पर चुकाने पर ब्याज का 75% सब्सिडी के रूप में वापस।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Economic Development Corporation of Goa (EDC Ltd.) with the Directorate of Industries, Trade & Commerce",
    hi: "गोवा आर्थिक विकास निगम (EDC लिमिटेड), उद्योग, व्यापार और वाणिज्य निदेशालय के साथ",
  },
  categories: ["business", "skills-employment"],
  tags: ["self employment", "business loan", "startup", "youth", "cmry", "edc", "goa"],
  benefitType: "loan",
  isDBT: false,
  ageRange: { min: 18, max: 55 },
  kundliHouse: "business",
  eligibility: all(
    residentOf("goa"),
    minAge(18),
    labelled(
      any(
        maxAge(50),
        all(
          maxAge(55),
          any(
            when("caste", "in", ["sc", "st", "pvtg", "obc"]),
            isTrue("disabled"),
            when("marital", "eq", "widowed"),
          ),
        ),
      ),
      {
        en: "You are 50 or younger (55 for SC, ST, OBC, disabled or widowed applicants)",
        hi: "आपकी उम्र 50 साल या कम है (SC, ST, OBC, दिव्यांग या विधवा/विधुर के लिए 55 साल)",
      },
    ),
  ),

  details: {
    en: [
      "The Chief Minister's Rojgar Yojana helps Goan youth become self-employed. It is sponsored by the Goa government and run by EDC Ltd. The current version started on 1 April 2023 and EDC says it has been extended to 31 March 2029.",
      "Your project is funded by a mix of share capital from the Directorate of Industries, a term loan from EDC and a small contribution from you. Both parts carry 8% interest, and 75% of the interest (6 percentage points) is credited back to your loan account as a subsidy if you pay your EMIs on time and the unit is running.",
      "Any legal, viable activity is allowed except dealing in alcohol and tobacco, including common service centres, start-ups, homestays and civil or electrical contracting (fixed assets only for the last three).",
    ],
    hi: [
      "मुख्यमंत्री रोज़गार योजना गोवा के युवाओं को स्वरोज़गार में मदद करती है। इसे गोवा सरकार प्रायोजित करती है और EDC लिमिटेड चलाता है। मौजूदा रूप 1 अप्रैल 2023 से शुरू हुआ और EDC के अनुसार इसे 31 मार्च 2029 तक बढ़ा दिया गया है।",
      "आपके प्रोजेक्ट का पैसा उद्योग निदेशालय की शेयर पूंजी, EDC के टर्म लोन और आपके छोटे योगदान से आता है। दोनों हिस्सों पर 8% ब्याज है, और समय पर EMI भरने तथा यूनिट चालू रहने पर ब्याज का 75% (6 प्रतिशत अंक) सब्सिडी के रूप में आपके लोन खाते में वापस जमा होता है।",
      "शराब और तंबाकू के कारोबार को छोड़कर कोई भी वैध और व्यवहार्य काम चलेगा, जिसमें कॉमन सर्विस सेंटर, स्टार्ट-अप, होमस्टे और सिविल या इलेक्ट्रिकल ठेकेदारी शामिल हैं (आख़िरी तीन के लिए सिर्फ़ स्थायी संपत्ति)।",
    ],
  },
  benefits: {
    en: [
      "Project cost up to ₹25 lakh if you have a professional degree, diploma or ITI training, and up to ₹20 lakh for others.",
      "Interest of 8% a year, with 75% of it refunded as a subsidy for regular repayers.",
      "You put in only 10% of the project cost (5% for women, OBC, disabled, SC and ST applicants).",
      "SC/ST applicants get 80% of the cost as share capital and only 15% as a term loan.",
      "Up to one year's moratorium, then repayment over 5 years (vehicles) or 5–7 years (other projects).",
    ],
    hi: [
      "प्रोफ़ेशनल डिग्री, डिप्लोमा या ITI वालों के लिए ₹25 लाख तक, बाकी के लिए ₹20 लाख तक का प्रोजेक्ट।",
      "सालाना 8% ब्याज, नियमित भुगतान करने वालों को उसका 75% सब्सिडी के रूप में वापस।",
      "आपको प्रोजेक्ट लागत का सिर्फ़ 10% लगाना होता है (महिला, OBC, दिव्यांग, SC और ST के लिए 5%)।",
      "SC/ST आवेदकों को लागत का 80% शेयर पूंजी के रूप में और सिर्फ़ 15% टर्म लोन के रूप में।",
      "एक साल तक की मोहलत, फिर 5 साल (वाहन) या 5–7 साल (अन्य प्रोजेक्ट) में भुगतान।",
    ],
  },
  eligibilityText: {
    en: [
      "Aged 18 to 50 (up to 55 for widows, disabled persons, SC, ST and OBC). The loan must be repaid before you turn 60.",
      "Passed class 8 (can be relaxed). Preference for people with technical or professional training.",
      "Permanent resident of Goa for at least 15 years, or married to a Goan with 15 years' residence and settled in Goa for at least a year.",
      "No income limit.",
      "Not a defaulter with any bank or financial institution.",
    ],
    hi: [
      "उम्र 18 से 50 साल (विधवा, दिव्यांग, SC, ST और OBC के लिए 55 साल तक)। कर्ज़ 60 साल की उम्र से पहले चुकाना होगा।",
      "कक्षा 8 पास (छूट मिल सकती है)। तकनीकी या प्रोफ़ेशनल प्रशिक्षण वालों को प्राथमिकता।",
      "कम से कम 15 साल से गोवा के स्थायी निवासी, या 15 साल से गोवा में रह रहे गोवावासी से विवाहित और कम से कम एक साल से गोवा में बसे हुए।",
      "कोई आय सीमा नहीं।",
      "किसी बैंक या वित्तीय संस्था के डिफ़ॉल्टर न हों।",
    ],
  },
  exclusions: {
    en: [
      "Units that already got a government subsidy under PMEGP, PMRY, REGP, CMEGP or similar schemes.",
      "Projects without fixed assets; working capital is capped at 40% of the project cost and land cost is not covered.",
      "More than one CMRY loan per family.",
      "Takeover of existing loans.",
    ],
    hi: [
      "जिन यूनिटों को पहले से PMEGP, PMRY, REGP, CMEGP या ऐसी योजनाओं में सरकारी सब्सिडी मिल चुकी है।",
      "बिना स्थायी संपत्ति वाले प्रोजेक्ट; कार्यशील पूंजी प्रोजेक्ट लागत के 40% तक सीमित है और ज़मीन की लागत शामिल नहीं।",
      "एक परिवार को एक से ज़्यादा CMRY लोन।",
      "पुराने कर्ज़ों का अधिग्रहण।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Download the CMRY application form (and the project report format for loans above ₹10 lakh) from edc-goa.com.",
        "Fill in your project details and attach the documents.",
      ],
      hi: [
        "edc-goa.com से CMRY आवेदन फ़ॉर्म (और ₹10 लाख से ज़्यादा के लोन के लिए प्रोजेक्ट रिपोर्ट का प्रारूप) डाउनलोड करें।",
        "अपने प्रोजेक्ट का विवरण भरें और दस्तावेज़ लगाएँ।",
      ],
    },
    offline: {
      en: [
        "Submit the form to EDC Ltd. with the processing fee (₹500 plus GST for loans up to ₹5 lakh, ₹5,000 plus GST above that; ₹200 plus GST for SC/ST).",
        "A Task Force Committee reviews your proposal and sanctions the loan.",
        "Attend the short entrepreneurship training (up to 3 days) before the money is released to your suppliers.",
      ],
      hi: [
        "प्रोसेसिंग फ़ीस (₹5 लाख तक के लोन पर ₹500 + GST, उससे ऊपर ₹5,000 + GST; SC/ST के लिए ₹200 + GST) के साथ फ़ॉर्म EDC लिमिटेड में जमा करें।",
        "टास्क फ़ोर्स कमेटी आपके प्रस्ताव की जाँच करके लोन मंज़ूर करती है।",
        "पैसा आपके सप्लायरों को जारी होने से पहले छोटा उद्यमिता प्रशिक्षण (3 दिन तक) लें।",
      ],
    },
  },
  documents: {
    en: [
      "Proof of 15 years' residence in Goa (residence certificate, school leaving certificate or Goa Board/Goa University certificate)",
      "Educational and training certificates",
      "Caste certificate or disability certificate, if claiming a relaxation",
      "Quotations or proforma invoices for machinery, vehicles or furniture",
      "Project report, for loans of ₹10 lakh or more",
      "Guarantor documents as required for the loan amount",
    ],
    hi: [
      "गोवा में 15 साल रहने का सबूत (निवास प्रमाण पत्र, स्कूल छोड़ने का प्रमाण पत्र या गोवा बोर्ड/गोवा विश्वविद्यालय का प्रमाण पत्र)",
      "शैक्षिक और प्रशिक्षण प्रमाण पत्र",
      "छूट माँगने पर जाति या दिव्यांगता प्रमाण पत्र",
      "मशीन, वाहन या फ़र्नीचर के कोटेशन या प्रोफ़ॉर्मा इनवॉइस",
      "₹10 लाख या ज़्यादा के लोन के लिए प्रोजेक्ट रिपोर्ट",
      "लोन राशि के अनुसार ज़मानतदार के दस्तावेज़",
    ],
  },
  faqs: [
    {
      q: { en: "Do I need a guarantor?", hi: "क्या ज़मानतदार चाहिए?" },
      a: {
        en: "For loans up to ₹2 lakh, your own and your spouse's or parent's guarantee is enough. From ₹2 lakh to ₹6 lakh you also need a third-party guarantor such as a government employee or property owner. Above ₹6 lakh the guarantor must show unencumbered property in Goa.",
        hi: "₹2 लाख तक के लोन पर आपकी और जीवनसाथी या माता-पिता की गारंटी काफ़ी है। ₹2 से ₹6 लाख तक किसी तीसरे ज़मानतदार, जैसे सरकारी कर्मचारी या संपत्ति मालिक, की भी ज़रूरत है। ₹6 लाख से ऊपर ज़मानतदार को गोवा में बिना गिरवी वाली संपत्ति दिखानी होगी।",
      },
    },
    {
      q: { en: "When do I get the interest subsidy?", hi: "ब्याज सब्सिडी कब मिलती है?" },
      a: {
        en: "It is credited to your loan account only if you pay every EMI on time and the unit is fully working. If you default, you pay the full 8% plus penal interest.",
        hi: "यह आपके लोन खाते में तभी जमा होती है जब आप हर EMI समय पर भरें और यूनिट पूरी तरह चालू हो। डिफ़ॉल्ट करने पर पूरा 8% और जुर्माना ब्याज देना होगा।",
      },
    },
  ],

  officialUrl: "https://edc-goa.com/chief-ministers-rojgar-yojana/",
  sources: [
    "https://edc-goa.com/chief-ministers-rojgar-yojana/",
    "https://www.goa.gov.in/wp-content/uploads/2023/12/CMRY-SCHEME.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
