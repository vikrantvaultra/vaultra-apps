import { all, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "arunachal-atmanirbhar-krishi-bagwani-yojana",
  name: { en: "Atmanirbhar Krishi and Bagwani Yojana (Arunachal Pradesh)", hi: "आत्मनिर्भर कृषि और बागवानी योजना (अरुणाचल प्रदेश)" },
  aka: ["ANKY", "ANBY", "Atma Nirbhar Krishi Yojana", "Atma Nirbhar Bagwani Yojana", "Atmanirbhar Yojana Arunachal"],
  shortDescription: {
    en: "Arunachal farmers, SHGs and FPOs get a 45% government subsidy on farm and orchard projects, with 45% as a bank loan and just 10% from their own pocket.",
    hi: "अरुणाचल के किसानों, SHG और FPO को खेती और बागवानी परियोजनाओं पर 45% सरकारी सब्सिडी मिलती है, 45% बैंक लोन से और सिर्फ़ 10% अपनी जेब से।",
  },
  level: "state",
  state: "arunachal-pradesh",
  department: {
    en: "Department of Agriculture and Department of Horticulture, Government of Arunachal Pradesh",
    hi: "कृषि विभाग और बागवानी विभाग, अरुणाचल प्रदेश सरकार",
  },
  categories: ["agriculture", "business"],
  tags: ["farmer", "subsidy", "horticulture", "farm machinery", "tractor", "loan", "shg", "arunachal"],
  benefitType: "composite",
  isDBT: false,
  kundliHouse: "farming",
  eligibility: all(residentOf("arunachal-pradesh"), when("occupation", "in", ["farmer"])),

  details: {
    en: [
      "Atmanirbhar Krishi Yojana (ANKY, agriculture) and Atmanirbhar Bagwani Yojana (ANBY, horticulture) were launched by the Chief Minister in September 2021. They replaced many small handouts with one bank-linked subsidy model.",
      "For an approved project, the state pays 45% of the cost as a front-ended subsidy, a bank lends 45%, and the farmer or group puts in the remaining 10%. Banks include SBI, Arunachal Pradesh Rural Bank and the Arunachal Pradesh State Co-operative Apex Bank.",
      "ANKY covers things like land terracing, double cropping, farm machinery, tea, rubber and beekeeping. ANBY covers fruit orchards, plantation crops and related farm machinery. Sister schemes for livestock (ANPPY) and fisheries run on the same portal.",
    ],
    hi: [
      "आत्मनिर्भर कृषि योजना (ANKY, खेती) और आत्मनिर्भर बागवानी योजना (ANBY, बागवानी) मुख्यमंत्री ने सितंबर 2021 में शुरू कीं। इनमें कई छोटी मददों की जगह एक बैंक से जुड़ा सब्सिडी मॉडल लाया गया।",
      "मंज़ूर परियोजना की लागत का 45% राज्य सरकार अग्रिम सब्सिडी के रूप में देती है, 45% बैंक लोन देता है, और बाक़ी 10% किसान या समूह ख़ुद लगाता है। बैंकों में SBI, अरुणाचल प्रदेश ग्रामीण बैंक और अरुणाचल प्रदेश राज्य सहकारी एपेक्स बैंक शामिल हैं।",
      "ANKY में ज़मीन की सीढ़ीनुमा कटाई, दोहरी फ़सल, खेती की मशीनें, चाय, रबर और मधुमक्खी पालन जैसे काम आते हैं। ANBY में फलों के बाग़, बागान फ़सलें और उनसे जुड़ी मशीनें आती हैं। पशुपालन (ANPPY) और मछली पालन की मिलती-जुलती योजनाएँ भी इसी पोर्टल पर हैं।",
    ],
  },
  benefits: {
    en: [
      "45% of the project cost paid by the state government as a subsidy.",
      "45% of the cost as a bank loan; you put in only 10%.",
      "No collateral needed for individual loans up to ₹1.6 lakh, or SHG loans up to ₹10 lakh.",
      "Support for farm machinery, plantations, orchards, terracing and similar projects.",
    ],
    hi: [
      "परियोजना लागत का 45% राज्य सरकार सब्सिडी के रूप में देती है।",
      "लागत का 45% बैंक लोन; आपको सिर्फ़ 10% लगाना होता है।",
      "व्यक्तिगत लोन ₹1.6 लाख तक और SHG लोन ₹10 लाख तक बिना गारंटी (कोलैटरल) के।",
      "खेती की मशीनें, बागान, फलों के बाग़, सीढ़ीनुमा खेत जैसी परियोजनाओं के लिए मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Individual farmers, Self-Help Groups (SHGs) and Farmer Producer Organisations (FPOs) in Arunachal Pradesh.",
      "You need land for the project; SHGs can use a simple certificate from the EAC, Circle Officer or BDO instead of a land possession certificate.",
      "A detailed project report (DPR) for the activity you want to take up.",
    ],
    hi: [
      "अरुणाचल प्रदेश के व्यक्तिगत किसान, स्वयं सहायता समूह (SHG) और किसान उत्पादक संगठन (FPO)।",
      "परियोजना के लिए ज़मीन होनी चाहिए; SHG ज़मीन के क़ब्ज़े के प्रमाण पत्र की जगह EAC, सर्कल ऑफ़िसर या BDO का सादा प्रमाण पत्र दे सकते हैं।",
      "जिस काम को करना है उसकी विस्तृत परियोजना रिपोर्ट (DPR)।",
    ],
  },
  exclusions: {
    en: [
      "Bank loan defaulters cannot apply.",
      "Government servants cannot take the benefit.",
      "Loans above ₹1.6 lakh (individuals) or ₹10 lakh (SHGs/FPOs) need collateral or a guarantee.",
    ],
    hi: [
      "बैंक लोन न चुकाने वाले (डिफ़ॉल्टर) आवेदन नहीं कर सकते।",
      "सरकारी कर्मचारी इसका लाभ नहीं ले सकते।",
      "₹1.6 लाख (व्यक्ति) या ₹10 लाख (SHG/FPO) से ज़्यादा के लोन के लिए गारंटी या कोलैटरल देना होगा।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Register on the Atmanirbhar Yojana portal (agri.arunachal.gov.in/atmanirbhar_yojana) and choose ANKY, ANBY or the scheme for your activity.",
        "Fill in the form and upload your documents and project report.",
        "The District Level Screening Committee approves projects, then the bank sanctions the loan and the subsidy is released.",
      ],
      hi: [
        "आत्मनिर्भर योजना पोर्टल (agri.arunachal.gov.in/atmanirbhar_yojana) पर रजिस्टर करें और अपने काम के हिसाब से ANKY, ANBY या दूसरी योजना चुनें।",
        "फ़ॉर्म भरें और दस्तावेज़ व परियोजना रिपोर्ट अपलोड करें।",
        "ज़िला स्तरीय जाँच समिति परियोजना मंज़ूर करती है, फिर बैंक लोन मंज़ूर करता है और सब्सिडी जारी होती है।",
      ],
    },
    offline: {
      en: [
        "Collect the form from your District Agriculture Officer (ANKY) or District Horticulture Officer (ANBY).",
        "Submit it with land documents, the project report and bank details.",
      ],
      hi: [
        "अपने ज़िला कृषि अधिकारी (ANKY) या ज़िला बागवानी अधिकारी (ANBY) से फ़ॉर्म लें।",
        "ज़मीन के दस्तावेज़, परियोजना रिपोर्ट और बैंक विवरण के साथ जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card and PAN card",
      "Bank passbook (front page) and a no-dues certificate from the bank",
      "Land availability certificate (format on the portal)",
      "Detailed project report (DPR)",
      "ST certificate, if applicable, and SHG registration certificate for groups",
    ],
    hi: [
      "आधार कार्ड और PAN कार्ड",
      "बैंक पासबुक (पहला पन्ना) और बैंक से नो-ड्यूज़ प्रमाण पत्र",
      "ज़मीन उपलब्धता प्रमाण पत्र (फ़ॉर्मेट पोर्टल पर)",
      "विस्तृत परियोजना रिपोर्ट (DPR)",
      "लागू हो तो ST प्रमाण पत्र, और समूहों के लिए SHG पंजीकरण प्रमाण पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "Do I get the 45% subsidy in cash?", hi: "क्या 45% सब्सिडी नक़द मिलती है?" },
      a: {
        en: "No. It is front-ended: the subsidy goes into the project through the bank along with the loan, so you only pay your 10% share and repay the loan part.",
        hi: "नहीं। यह अग्रिम सब्सिडी है: यह लोन के साथ बैंक के ज़रिए परियोजना में लगती है, इसलिए आपको सिर्फ़ अपना 10% हिस्सा देना और लोन वाला हिस्सा चुकाना होता है।",
      },
    },
    {
      q: { en: "Can I buy farm machinery under this?", hi: "क्या इसमें खेती की मशीनें ख़रीद सकते हैं?" },
      a: {
        en: "Yes, farm mechanisation is one of the supported activities. Which machines are allowed in a given year is set in the guidelines, and the district committee must approve your project.",
        hi: "हाँ, खेती का मशीनीकरण इसमें शामिल कामों में से एक है। किसी साल कौन-सी मशीनें मिलेंगी यह दिशानिर्देशों में तय होता है, और ज़िला समिति की मंज़ूरी ज़रूरी है।",
      },
    },
  ],

  officialUrl: "https://agri.arunachal.gov.in/atmanirbhar_yojana/",
  sources: [
    "https://arunachalipr.gov.in/post/atma-nirbhar-krishi-yojana-anky",
    "https://tawang.nic.in/scheme/atmanirbhar-krishi-bagwani-yojana/",
    "https://agri.arunachal.gov.in/atmanirbhar_yojana/",
    "https://lohit.nic.in/schemes/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
