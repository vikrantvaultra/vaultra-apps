import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "krishak-unnati-yojana",
  overlapGroup: "farmer-income",
  name: { en: "Krishak Unnati Yojana", hi: "कृषक उन्नति योजना" },
  aka: ["Krishak Unnati", "dhan antar rashi", "paddy bonus Chhattisgarh"],
  shortDescription: {
    en: "Chhattisgarh farmers get input assistance: paddy sellers are topped up to ₹3,100 a quintal, and growers of pulses, oilseeds, maize, millets or cotton get ₹10,000 to ₹15,000 an acre.",
    hi: "छत्तीसगढ़ के किसानों को आदान सहायता: समर्थन मूल्य पर धान बेचने वालों को ₹3,100 प्रति क्विंटल तक अंतर राशि, और दलहन, तिलहन, मक्का, मिलेट्स या कपास उगाने वालों को ₹10,000 से ₹15,000 प्रति एकड़।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "Agriculture Development, Farmer Welfare and Biotechnology Department, Government of Chhattisgarh",
    hi: "कृषि विकास, किसान कल्याण तथा जैव प्रौद्योगिकी विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["agriculture"],
  tags: ["farmer", "paddy", "input assistance", "bonus", "pulses", "millets", "chhattisgarh"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("chhattisgarh"),
    labelled(when("occupation", "in", ["farmer"]), {
      en: "You are a farmer registered on the Integrated Farmer Portal",
      hi: "आप एकीकृत किसान पोर्टल पर पंजीकृत किसान हों",
    }),
  ),

  details: {
    en: [
      "Krishak Unnati Yojana is Chhattisgarh's main farmer support scheme. It aims to cut the cost of farming, raise farm income and push farmers towards crops other than paddy.",
      "Paddy farmers who sell at the support price through cooperative societies are paid the 'difference amount' (antar rashi) so that they get ₹3,100 a quintal in total. For the 2025-26 marketing year this was paid in one go before Holi 2026.",
      "From kharif 2026, the scheme also pays input assistance per acre: ₹15,000 an acre to farmers who grew paddy last kharif and switch to another crop, and ₹10,000 an acre to farmers already growing pulses, oilseeds, maize, kodo, kutki, ragi or cotton. The area is checked through the Digital Crop Survey or girdawari.",
    ],
    hi: [
      "कृषक उन्नति योजना छत्तीसगढ़ सरकार की किसानों के लिए सबसे बड़ी सहायता योजना है। इसका उद्देश्य खेती की लागत घटाना, आय बढ़ाना और धान के अलावा दूसरी फ़सलों को बढ़ावा देना है।",
      "जो किसान सहकारी समितियों में समर्थन मूल्य पर धान बेचते हैं, उन्हें 'अंतर की राशि' दी जाती है, ताकि उन्हें कुल ₹3,100 प्रति क्विंटल मिलें। विपणन वर्ष 2025-26 की यह राशि होली 2026 से पहले एकमुश्त दी गई।",
      "खरीफ 2026 से योजना प्रति एकड़ आदान सहायता भी देती है: पिछले खरीफ में धान लेने वाले जो किसान इस बार दूसरी फ़सल लेते हैं, उन्हें ₹15,000 प्रति एकड़, और जो किसान पहले से दलहन, तिलहन, मक्का, कोदो, कुटकी, रागी या कपास उगाते हैं, उन्हें ₹10,000 प्रति एकड़। रकबे की जाँच डिजिटल क्रॉप सर्वे या गिरदावरी से होती है।",
    ],
  },
  benefits: {
    en: [
      "Paddy sold at the support price: the difference up to ₹3,100 a quintal, paid into your bank account.",
      "Switching from paddy to another kharif crop: ₹15,000 an acre.",
      "Already growing pulses, oilseeds, maize, kodo, kutki, ragi or cotton in kharif: ₹10,000 an acre.",
      "All payments are made by DBT.",
    ],
    hi: [
      "समर्थन मूल्य पर बेचा गया धान: ₹3,100 प्रति क्विंटल तक की अंतर राशि, सीधे बैंक खाते में।",
      "धान छोड़कर दूसरी खरीफ फ़सल लेने पर: ₹15,000 प्रति एकड़।",
      "खरीफ में पहले से दलहन, तिलहन, मक्का, कोदो, कुटकी, रागी या कपास उगाने पर: ₹10,000 प्रति एकड़।",
      "सारा भुगतान DBT से होता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A farmer in Chhattisgarh registered on the Integrated Farmer Portal (kisan.cg.nic.in).",
      "Also registered on the AgriStack farmer registry.",
      "For the paddy amount: sold paddy at the support price through a cooperative society.",
      "For the per-acre amount: chose the crop option while registering, and the area is confirmed by the Digital Crop Survey or girdawari.",
    ],
    hi: [
      "छत्तीसगढ़ का किसान जो एकीकृत किसान पोर्टल (kisan.cg.nic.in) पर पंजीकृत हो।",
      "एग्रीस्टेक फ़ार्मर रजिस्ट्री में भी पंजीयन हो।",
      "धान की राशि के लिए: सहकारी समिति के ज़रिए समर्थन मूल्य पर धान बेचा हो।",
      "प्रति एकड़ राशि के लिए: पंजीयन के समय फ़सल का विकल्प चुना हो, और रकबे की पुष्टि डिजिटल क्रॉप सर्वे या गिरदावरी से हुई हो।",
    ],
  },
  exclusions: {
    en: [
      "Trusts, boards, private limited companies, school development committees, and central or state government institutions and colleges.",
      "Area not confirmed in the Digital Crop Survey or girdawari.",
      "Farmers not registered on the Integrated Farmer Portal and AgriStack.",
    ],
    hi: [
      "ट्रस्ट, मंडल, प्राइवेट लिमिटेड कंपनी, शाला विकास समिति, और केंद्र या राज्य सरकार की संस्थाएँ व महाविद्यालय।",
      "जिस रकबे की पुष्टि डिजिटल क्रॉप सर्वे या गिरदावरी में न हुई हो।",
      "जो किसान एकीकृत किसान पोर्टल और एग्रीस्टेक पर पंजीकृत न हों।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to your cooperative society (sewa sahkari samiti) to register or carry forward your registration on the Integrated Farmer Portal, and pick your crop option.",
        "For AgriStack registration, visit a Lok Seva Kendra or the society with Aadhaar, your land record (rin pustika / B-1, khasra) and your Aadhaar-linked mobile for the OTP.",
        "The patwari verifies and the tehsildar approves. After the crop survey confirms your area, the money comes to your bank account.",
      ],
      hi: [
        "अपनी सेवा सहकारी समिति में जाकर एकीकृत किसान पोर्टल पर नया पंजीयन या कैरी फ़ॉरवर्ड कराएँ और फ़सल का विकल्प चुनें।",
        "एग्रीस्टेक पंजीयन के लिए आधार, ऋण पुस्तिका / B-1, खसरा और आधार से जुड़ा मोबाइल (OTP के लिए) लेकर लोक सेवा केंद्र या समिति जाएँ।",
        "पटवारी सत्यापन करता है और तहसीलदार मंज़ूरी देता है। फ़सल सर्वे में रकबे की पुष्टि के बाद पैसा बैंक खाते में आता है।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Land record: rin pustika (B-1) and khasra",
      "Mobile number linked to Aadhaar",
      "Bank account details",
    ],
    hi: [
      "आधार कार्ड",
      "भूमि का रिकॉर्ड: ऋण पुस्तिका (B-1) और खसरा",
      "आधार से जुड़ा मोबाइल नंबर",
      "बैंक खाते का विवरण",
    ],
  },
  faqs: [
    {
      q: { en: "I grow only paddy. Do I still get something?", hi: "मैं सिर्फ़ धान उगाता हूँ। क्या मुझे भी कुछ मिलेगा?" },
      a: {
        en: "Yes. If you sell your paddy at the support price through a cooperative society, you get the difference amount so that your total comes to ₹3,100 a quintal.",
        hi: "हाँ। अगर आप सहकारी समिति में समर्थन मूल्य पर धान बेचते हैं, तो आपको अंतर की राशि मिलती है, ताकि कुल ₹3,100 प्रति क्विंटल हो जाए।",
      },
    },
    {
      q: { en: "Who gets ₹15,000 an acre?", hi: "₹15,000 प्रति एकड़ किसे मिलता है?" },
      a: {
        en: "A farmer who grew paddy in the last kharif season and this kharif grows another crop instead, after registering that choice on the Integrated Farmer Portal and having the area confirmed in the crop survey.",
        hi: "उस किसान को जिसने पिछले खरीफ में धान लिया था और इस खरीफ में उसकी जगह दूसरी फ़सल ली है, बशर्ते उसने एकीकृत किसान पोर्टल पर यह विकल्प चुना हो और फ़सल सर्वे में रकबे की पुष्टि हुई हो।",
      },
    },
  ],

  officialUrl: "https://agriportal.cg.nic.in/",
  sources: [
    "https://dprcg.gov.in/post/1786979517/%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A4%AC%E0%A4%BE-%E0%A4%96%E0%A4%B0%E0%A5%80%E0%A4%AB-2026-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%95-%E0%A4%89%E0%A4%A8%E0%A5%8D%E0%A4%A8%E0%A4%A4%E0%A4%BF-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%B2%E0%A4%BE%E0%A4%AD-%E0%A4%B2%E0%A5%87%E0%A4%A8%E0%A5%87-%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81-%E0%A4%AA%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%95-%E0%A4%8F%E0%A4%95%E0%A5%80%E0%A4%95%E0%A5%83%E0%A4%A4-%E0%A4%95%E0%A4%BF%E0%A4%B8%E0%A4%BE%E0%A4%A8-%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2-%E0%A4%8F%E0%A4%B5%E0%A4%82-%E0%A4%8F%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A5%8D%E0%A4%9F%E0%A5%87%E0%A4%95-%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%87-%E0%A4%B8%E0%A4%AE%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%A7%E0%A4%BF-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%AA%E0%A4%82%E0%A4%9C%E0%A5%80%E0%A4%AF%E0%A4%A8",
    "https://dprcg.gov.in/post/1772212437/Raipur-Smile-on-the-faces-of-food-donors-before-Holi-Under-Krishak-Unnati-Yojana-the-difference-amount-will-be-transferred-to-the-accounts-on-28th-February",
    "https://prsindia.org/budgets/states/chhattisgarh-budget-analysis-2026-27",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
