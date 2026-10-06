import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mukhyamantri-matrupushti-uphar",
  tier: "compact",
  name: { en: "Mukhyamantri Matrupushti Uphar (Tripura)", hi: "मुख्यमंत्री मातृपुष्टि उपहार (त्रिपुरा)" },
  aka: ["MMUS", "Mukhyamantri Matru Pushti Uphar", "Tripura pregnancy cash"],
  shortDescription: {
    en: "₹500 into a pregnant woman's bank account after each antenatal check-up, up to four times (₹2,000 in all), in Tripura. No income limit.",
    hi: "त्रिपुरा में गर्भवती महिला को हर प्रसव-पूर्व जाँच के बाद ₹500, चार बार तक (कुल ₹2,000), सीधे बैंक खाते में। कोई आय सीमा नहीं।",
  },
  level: "state",
  state: "tripura",
  department: {
    en: "Social Welfare & Social Education Department, Government of Tripura",
    hi: "समाज कल्याण एवं समाज शिक्षा विभाग, त्रिपुरा सरकार",
  },
  categories: ["women-child", "health"],
  tags: ["pregnant women", "antenatal checkup", "maternity", "nutrition", "anganwadi", "tripura"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2000, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(residentOf("tripura"), female(), isTrue("pregnantOrLactating")),

  details: {
    en: [
      "Mukhyamantri Matrupushti Uphar is a Tripura scheme notified in August 2021 to encourage regular check-ups during pregnancy. After each antenatal check-up at any health facility, ₹500 is paid into the woman's bank account, up to four times.",
      "You register at your nearest Anganwadi centre. The CDPO of the ICDS project sanctions the payment after each check-up. We could not find a recent official notice confirming the scheme still runs the same way, so please check at your Anganwadi centre.",
    ],
    hi: [
      "मुख्यमंत्री मातृपुष्टि उपहार त्रिपुरा की योजना है, जो अगस्त 2021 में अधिसूचित हुई, ताकि गर्भावस्था में नियमित जाँच को बढ़ावा मिले। किसी भी स्वास्थ्य केंद्र पर हर प्रसव-पूर्व जाँच के बाद महिला के बैंक खाते में ₹500 आते हैं, चार बार तक।",
      "पंजीकरण नज़दीकी आंगनवाड़ी केंद्र पर होता है। ICDS परियोजना के CDPO हर जाँच के बाद भुगतान मंज़ूर करते हैं। हमें कोई ताज़ा सरकारी सूचना नहीं मिली जो पुष्टि करे कि योजना अब भी इसी तरह चल रही है, इसलिए अपने आंगनवाड़ी केंद्र पर पूछ लें।",
    ],
  },
  benefits: {
    en: [
      "₹500 after each antenatal check-up, up to 4 check-ups (₹2,000 in total).",
      "Paid by DBT into your bank account.",
    ],
    hi: [
      "हर प्रसव-पूर्व जाँच के बाद ₹500, 4 जाँच तक (कुल ₹2,000)।",
      "DBT से सीधे आपके बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "A pregnant woman who has had an antenatal check-up at any health facility.",
      "Registered at her nearest Anganwadi centre.",
      "There is no income limit.",
    ],
    hi: [
      "गर्भवती महिला जिसने किसी भी स्वास्थ्य केंद्र पर प्रसव-पूर्व जाँच कराई हो।",
      "नज़दीकी आंगनवाड़ी केंद्र पर पंजीकृत हो।",
      "कोई आय सीमा नहीं है।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register your pregnancy at the nearest Anganwadi centre.",
        "Give a plain-paper application with your health card (showing the check-up date), bank details and address proof.",
        "The Anganwadi worker records each check-up and sends it to the ICDS project office, which pays ₹500 for each one.",
      ],
      hi: [
        "नज़दीकी आंगनवाड़ी केंद्र पर अपनी गर्भावस्था का पंजीकरण कराएँ।",
        "सादे काग़ज़ पर आवेदन दें, साथ में हेल्थ कार्ड (जिसमें जाँच की तारीख़ हो), बैंक की जानकारी और पते का सबूत लगाएँ।",
        "आंगनवाड़ी कार्यकर्ता हर जाँच दर्ज करके ICDS परियोजना कार्यालय भेजती हैं, जो हर जाँच के लिए ₹500 देता है।",
      ],
    },
  },

  officialUrl: "https://socialwelfare.tripura.gov.in/sites/default/files/Mukhamantri%20Matrupushti%20Uphar.pdf",
  sources: [
    "https://socialwelfare.tripura.gov.in/sites/default/files/Mukhamantri%20Matrupushti%20Uphar.pdf",
    "https://ica.tripura.gov.in/sites/default/files/9052_22.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "check-status",
};

export default scheme;
