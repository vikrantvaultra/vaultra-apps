import { all, incomeUpTo, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "manipur-cmflss",
  tier: "compact",
  name: { en: "Chief Minister's Farmer Livelihood Support Scheme (CMFLSS)", hi: "मुख्यमंत्री किसान आजीविका सहायता योजना (CMFLSS)" },
  aka: ["CMFLSS", "CMFLS card", "Manipur farmer livelihood scheme"],
  shortDescription: {
    en: "Landless tenant farmers and small farmers in Manipur can get help for farm inputs, with up to ₹20,000 without a loan or up to ₹40,000 with a bank loan under the 2024 guidelines.",
    hi: "मणिपुर के बिना ज़मीन वाले बटाईदार और छोटे किसानों को खेती के सामान के लिए मदद मिल सकती है: 2024 के दिशानिर्देशों में बिना कर्ज़ ₹20,000 तक या बैंक कर्ज़ के साथ ₹40,000 तक।",
  },
  level: "state",
  state: "manipur",
  department: {
    en: "Planning Department, Government of Manipur",
    hi: "योजना विभाग, मणिपुर सरकार",
  },
  categories: ["agriculture"],
  tags: ["farmer", "tenant farmer", "landless", "farm inputs", "livelihood", "manipur"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "farming",
  eligibility: all(
    residentOf("manipur"),
    when("occupation", "in", ["farmer", "agri-labourer", "livestock-dairy"], {
      en: "You earn your living from farming, poultry, piggery or similar work",
      hi: "आपकी रोज़ी-रोटी खेती, मुर्गी पालन, सुअर पालन या इसी तरह के काम से चलती है",
    }),
    labelled(incomeUpTo(240_000), {
      en: "Family income is ₹2.4 lakh a year (₹20,000 a month) or less",
      hi: "परिवार की आय साल में ₹2.4 लाख (महीने में ₹20,000) या उससे कम है",
    }),
  ),

  details: {
    en: [
      "CMFLSS was started by the Government of Manipur in March 2024 to give quick, short-term help for farming and allied work where other schemes leave gaps. The Planning Department is the nodal department, working with the Agriculture, Horticulture, Veterinary, Sericulture and irrigation departments.",
      "Individual farmers get money by DBT for inputs and implements, and farmers are also helped to form Village Farmer Organisations for marketing and credit links. Eligible families get a CMFLS smart card. It is not confirmed that new applications are being taken in 2026.",
    ],
    hi: [
      "CMFLSS मणिपुर सरकार ने मार्च 2024 में शुरू की, ताकि जहाँ दूसरी योजनाएँ नहीं पहुँचतीं वहाँ खेती और उससे जुड़े कामों में जल्दी, थोड़े समय की मदद मिल सके। योजना विभाग इसका नोडल विभाग है, जो कृषि, बागवानी, पशुपालन, रेशम और सिंचाई विभागों के साथ काम करता है।",
      "अकेले किसानों को खेती के सामान और औज़ारों के लिए DBT से पैसा मिलता है, और किसानों को बिक्री और कर्ज़ से जोड़ने के लिए ग्राम किसान संगठन बनाने में भी मदद दी जाती है। पात्र परिवारों को CMFLS स्मार्ट कार्ड मिलता है। 2026 में नए आवेदन लिए जा रहे हैं या नहीं, यह पक्का नहीं है।",
    ],
  },
  benefits: {
    en: [
      "Landless tenant farmers: up to ₹20,000 for farm activities without a bank loan.",
      "With a bank loan: up to ₹40,000 or the matching loan amount, whichever is less.",
      "Support for forming and running a Village Farmer Organisation (₹1,500 a month for 3 years).",
      "Help with marketing, training and links to other farm schemes.",
    ],
    hi: [
      "बिना ज़मीन वाले बटाईदार किसान: बिना बैंक कर्ज़ के खेती के काम के लिए ₹20,000 तक।",
      "बैंक कर्ज़ के साथ: ₹40,000 तक या कर्ज़ के बराबर राशि, जो भी कम हो।",
      "ग्राम किसान संगठन बनाने और चलाने में मदद (3 साल तक हर महीने ₹1,500)।",
      "बिक्री, प्रशिक्षण और दूसरी कृषि योजनाओं से जुड़ने में मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Manipur, with a permanent residency certificate from the District Magistrate or Additional District Magistrate.",
      "A landless tenant farmer (certified by the land owner and the Sub-Divisional Officer), or a farmer with less than 1 hectare of land.",
      "Family income up to ₹20,000 a month (₹2.4 lakh a year) from all sources.",
      "You have not used any state agriculture or allied scheme in the last 3 financial years.",
      "Not eligible: families with 1 hectare or more, present or former MLAs, MPs and local body members, and government employees (except Group D and contract staff within the income limit).",
    ],
    hi: [
      "मणिपुर के स्थायी निवासी, ज़िला मजिस्ट्रेट या अतिरिक्त ज़िला मजिस्ट्रेट के स्थायी निवास प्रमाण पत्र के साथ।",
      "बिना ज़मीन वाले बटाईदार किसान (ज़मीन मालिक और SDO से प्रमाणित), या 1 हेक्टेयर से कम ज़मीन वाले किसान।",
      "सभी स्रोतों से परिवार की आय महीने में ₹20,000 (साल में ₹2.4 लाख) तक।",
      "पिछले 3 वित्त वर्षों में आपने राज्य की कोई कृषि या उससे जुड़ी योजना नहीं ली हो।",
      "पात्र नहीं: 1 हेक्टेयर या ज़्यादा ज़मीन वाले परिवार, मौजूदा या पूर्व विधायक, सांसद और स्थानीय निकाय सदस्य, और सरकारी कर्मचारी (आय सीमा के अंदर Group D और ठेका कर्मचारी छोड़कर)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Planning Department's Farmer Support Cell or your district Agriculture, Horticulture or Veterinary office to ask whether registration is open.",
        "Get your tenant-farmer or land document verified by the allied department and the SDO.",
        "Register on the CMFLSS portal after verification and collect your CMFLS card.",
      ],
      hi: [
        "योजना विभाग के किसान सहायता प्रकोष्ठ या अपने ज़िले के कृषि, बागवानी या पशुपालन कार्यालय से पूछें कि पंजीकरण खुला है या नहीं।",
        "अपने बटाईदार होने या ज़मीन के कागज़ की जाँच संबंधित विभाग और SDO से करवाएँ।",
        "जाँच के बाद CMFLSS पोर्टल पर पंजीकरण करें और अपना CMFLS कार्ड लें।",
      ],
    },
  },
  documents: {
    en: [
      "Permanent residency certificate (DM/ADM)",
      "Land document (Jamabandi), or tenant-farmer certificate from the land owner authenticated by the SDO",
      "Income certificate from the SDC",
      "Aadhaar and bank passbook",
    ],
    hi: [
      "स्थायी निवास प्रमाण पत्र (DM/ADM)",
      "ज़मीन का कागज़ (जमाबंदी), या ज़मीन मालिक का बटाईदार प्रमाण पत्र जिसे SDO ने प्रमाणित किया हो",
      "SDC का आय प्रमाण पत्र",
      "आधार और बैंक पासबुक",
    ],
  },

  officialUrl: "https://manipur.gov.in/?p=30237",
  sources: [
    "https://manipur.gov.in/wp-content/uploads/2024/07/cmflss.pdf",
    "https://manipur.gov.in/wp-content/uploads/2024/10/CMFLSS_Sep.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
