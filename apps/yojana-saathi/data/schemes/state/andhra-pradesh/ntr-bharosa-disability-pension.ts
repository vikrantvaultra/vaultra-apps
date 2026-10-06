import { all, incomeUpTo, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ntr-bharosa-disability-pension",
  overlapGroup: "disability-pension",
  name: { en: "NTR Bharosa Pension (Disability)", hi: "NTR भरोसा पेंशन (दिव्यांग)" },
  aka: ["AP disability pension", "divyang pension Andhra", "NTR Bharosa disabled"],
  shortDescription: {
    en: "People in Andhra Pradesh with 40% or more disability get ₹6,000 a month under NTR Bharosa. Those who are fully disabled or bedridden can get a higher pension of ₹10,000 or ₹15,000 a month (the official portal shows both figures).",
    hi: "आंध्र प्रदेश में 40% या उससे ज़्यादा दिव्यांगता वाले लोगों को NTR भरोसा के तहत हर महीने ₹6,000 मिलते हैं। पूरी तरह दिव्यांग या बिस्तर पर पड़े लोगों को ₹10,000 या ₹15,000 महीना तक मिल सकता है (आधिकारिक पोर्टल पर दोनों राशियाँ दिखती हैं)।",
  },
  level: "state",
  state: "andhra-pradesh",
  department: {
    en: "Panchayat Raj & Rural Development Department (SERP), Government of Andhra Pradesh",
    hi: "पंचायत राज एवं ग्रामीण विकास विभाग (SERP), आंध्र प्रदेश सरकार",
  },
  categories: ["disability", "pension-insurance", "social-welfare"],
  tags: ["disability pension", "divyang", "sadarem", "ntr bharosa", "6000", "bedridden", "andhra pradesh"],
  benefitType: "pension",
  isDBT: false,
  value: { amount: 6000, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("andhra-pradesh"),
    isTrue("disabled"),
    when("disabilityPct", "gte", 40),
    labelled(incomeUpTo(144_000), {
      en: "Family income up to ₹10,000 a month in villages or ₹12,000 a month in towns",
      hi: "परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक हो",
    }),
  ),

  details: {
    en: [
      "The disability pension is part of Andhra Pradesh's NTR Bharosa social security pension scheme. Under orders issued in June 2024 (G.O.Ms.No.43), it was raised to ₹6,000 a month from July 2024.",
      "People who are fully disabled, such as those who are bedridden or confined to a wheelchair, are paid a higher pension: ₹10,000 or ₹15,000 a month (the official portal shows both figures). People with multiple deformities caused by leprosy get ₹6,000 a month.",
      "Disability must be certified through SADAREM, the state's disability assessment system, at 40% or more. The pension is run by SERP and handed out each month by village or ward secretariat staff.",
    ],
    hi: [
      "दिव्यांग पेंशन आंध्र प्रदेश की NTR भरोसा सामाजिक सुरक्षा पेंशन योजना का हिस्सा है। जून 2024 के आदेश (G.O.Ms.No.43) से जुलाई 2024 से यह बढ़कर ₹6,000 महीना हो गई।",
      "जो लोग पूरी तरह दिव्यांग हैं, जैसे बिस्तर पर पड़े या व्हीलचेयर पर निर्भर, उन्हें ज़्यादा पेंशन मिलती है: ₹10,000 या ₹15,000 महीना (आधिकारिक पोर्टल पर दोनों राशियाँ दिखती हैं)। कुष्ठ रोग से कई अंगों में विकृति वाले लोगों को ₹6,000 महीना मिलते हैं।",
      "दिव्यांगता 40% या ज़्यादा होनी चाहिए और यह राज्य की दिव्यांगता जाँच प्रणाली SADAREM से प्रमाणित होनी चाहिए। योजना SERP चलाता है और पैसा हर महीने गाँव या वार्ड सचिवालय के कर्मचारी देते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹6,000 every month for 40% or more disability.",
      "A higher pension (₹10,000 or ₹15,000 a month; the portal shows both) if you are fully disabled (for example bedridden or wheelchair-bound).",
      "No minimum age.",
    ],
    hi: [
      "40% या ज़्यादा दिव्यांगता पर हर महीने ₹6,000।",
      "पूरी तरह दिव्यांग होने पर (जैसे बिस्तर पर पड़े या व्हीलचेयर पर निर्भर) ज़्यादा पेंशन (₹10,000 या ₹15,000 महीना; पोर्टल पर दोनों राशियाँ हैं)।",
      "कोई न्यूनतम उम्र नहीं।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Andhra Pradesh.",
      "You have a SADAREM certificate showing 40% or more disability.",
      "Your family income is up to ₹10,000 a month in a village or ₹12,000 a month in a town.",
      "Your family meets the other common welfare checks the secretariat verifies.",
    ],
    hi: [
      "आप आंध्र प्रदेश में रहते हैं।",
      "आपके पास 40% या ज़्यादा दिव्यांगता वाला SADAREM प्रमाण पत्र है।",
      "आपके परिवार की आय गाँव में ₹10,000 और शहर में ₹12,000 महीना तक है।",
      "आपका परिवार बाकी सामान्य कल्याण शर्तें पूरी करता है, जिनकी जाँच सचिवालय करता है।",
    ],
  },
  exclusions: {
    en: [
      "Disability below 40%, or no SADAREM certificate.",
      "You already get another NTR Bharosa pension.",
      "Your family is above the income limit.",
    ],
    hi: [
      "दिव्यांगता 40% से कम हो, या SADAREM प्रमाण पत्र न हो।",
      "आपको पहले से NTR भरोसा की कोई दूसरी पेंशन मिल रही हो।",
      "परिवार की आय सीमा से ज़्यादा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "If you don't have one, first get your disability assessed at a SADAREM camp or hospital to get the certificate.",
        "When the government opens a new pension window, go to your Swarna Grama or Swarna Wardu (secretariat) office with your documents.",
        "The digital assistant registers your form online and gives an acknowledgement. Staff then visit your home to verify.",
        "The MPDO or Municipal Commissioner recommends your case and SERP sanctions it. The pension starts from the month of sanction.",
      ],
      hi: [
        "अगर प्रमाण पत्र नहीं है, तो पहले SADAREM कैंप या अस्पताल में दिव्यांगता की जाँच कराकर प्रमाण पत्र लें।",
        "जब सरकार नई पेंशन के आवेदन खोले, दस्तावेज़ लेकर अपने स्वर्ण ग्राम या स्वर्ण वार्ड (सचिवालय) दफ़्तर जाएँ।",
        "डिजिटल असिस्टेंट आपका फ़ॉर्म ऑनलाइन दर्ज करके पावती देगा। फिर कर्मचारी घर आकर जाँच करेंगे।",
        "MPDO या नगर आयुक्त आपके मामले की सिफ़ारिश करते हैं और SERP मंज़ूरी देता है। पेंशन मंज़ूरी वाले महीने से शुरू होती है।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Rice card or income certificate", "SADAREM disability certificate (40% or more)"],
    hi: ["आधार कार्ड", "राइस कार्ड या आय प्रमाण पत्र", "SADAREM दिव्यांगता प्रमाण पत्र (40% या ज़्यादा)"],
  },
  faqs: [
    {
      q: { en: "Who gets the higher pension instead of ₹6,000?", hi: "₹6,000 की जगह ज़्यादा पेंशन किसे मिलती है?" },
      a: {
        en: "People who are fully disabled, such as those who are bedridden or cannot move without a wheelchair, after the government verifies their condition.",
        hi: "जो लोग पूरी तरह दिव्यांग हैं, जैसे बिस्तर पर पड़े या बिना व्हीलचेयर के चल न पाने वाले, सरकार की जाँच के बाद।",
      },
    },
    {
      q: { en: "Is there an age limit?", hi: "क्या उम्र की कोई सीमा है?" },
      a: {
        en: "No. A disabled person of any age can apply if the disability is 40% or more and the family meets the income limit.",
        hi: "नहीं। किसी भी उम्र का दिव्यांग व्यक्ति आवेदन कर सकता है, अगर दिव्यांगता 40% या ज़्यादा है और परिवार आय सीमा में है।",
      },
    },
  ],

  officialUrl: "https://sspensions.ap.gov.in/SSP",
  sources: [
    "https://sspensions.ap.gov.in/SSP",
    "https://sspensions.ap.gov.in/SSP/Downloads/Memo%20No.%203407491_New%20pension%20sanction%20guidelines_Signed.pdf",
    "https://www.deccanchronicle.com/amp/southern-states/andhra-pradesh/pensions-festival-expanded-new-opportunity-for-social-security-1985383",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "check-status",
};

export default scheme;
