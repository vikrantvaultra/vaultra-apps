import { all, any, incomeUpTo, isTrue, labelled, minAge } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "rashtriya-vayoshri-yojana",
  name: { en: "Rashtriya Vayoshri Yojana", hi: "राष्ट्रीय वयोश्री योजना" },
  aka: ["RVY", "Vayoshri"],
  shortDescription: {
    en: "Free walking sticks, wheelchairs, hearing aids, spectacles, dentures and other aids for senior citizens aged 60+ who are BPL or earn up to ₹15,000 a month.",
    hi: "60 साल से ऊपर के BPL या ₹15,000 महीने तक कमाने वाले बुज़ुर्गों को मुफ़्त छड़ी, व्हीलचेयर, सुनने की मशीन, चश्मा, नकली दाँत और दूसरे सहायक उपकरण।",
  },
  level: "central",
  ministry: "social-justice-empowerment",
  categories: ["social-welfare", "disability", "health"],
  tags: ["senior citizen", "wheelchair", "hearing aid", "walking stick", "spectacles", "assistive devices"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    minAge(60),
    labelled(any(isTrue("bpl"), incomeUpTo(180_000)), {
      en: "BPL, or monthly income up to ₹15,000",
      hi: "BPL हों, या मासिक आय ₹15,000 तक हो",
    }),
  ),

  details: {
    en: [
      "Rashtriya Vayoshri Yojana gives free physical aids to older people who find it hard to walk, hear, see or chew because of age. It is fully paid for by the Ministry of Social Justice and Empowerment and is now part of the Atal Vayo Abhyuday Yojana (AVYAY) for senior citizens.",
      "The devices are made and handed out by ALIMCO, a government company, at special camps held district by district. Seniors are first checked at an assessment camp, and the right devices are given at a later distribution camp.",
      "Since 2020–21 the scheme also covers seniors who are not BPL but have a monthly income of up to ₹15,000.",
    ],
    hi: [
      "राष्ट्रीय वयोश्री योजना उन बुज़ुर्गों को मुफ़्त सहायक उपकरण देती है जिन्हें उम्र के कारण चलने, सुनने, देखने या चबाने में दिक़्क़त होती है। इसका पूरा ख़र्च सामाजिक न्याय एवं अधिकारिता मंत्रालय उठाता है और यह अब बुज़ुर्गों के लिए अटल वयो अभ्युदय योजना (AVYAY) का हिस्सा है।",
      "उपकरण सरकारी कंपनी ALIMCO बनाती है और ज़िलेवार ख़ास शिविरों में बाँटती है। पहले जाँच शिविर में बुज़ुर्गों की जाँच होती है, फिर बाद के वितरण शिविर में सही उपकरण दिए जाते हैं।",
      "2020–21 से यह योजना उन बुज़ुर्गों को भी कवर करती है जो BPL नहीं हैं, लेकिन जिनकी मासिक आय ₹15,000 तक है।",
    ],
  },
  benefits: {
    en: [
      "Free devices such as walking sticks, elbow crutches, walkers, tripods and quadpods.",
      "Free wheelchairs.",
      "Free hearing aids, spectacles and artificial dentures.",
      "Devices are matched to your needs after a check-up by doctors at the camp.",
    ],
    hi: [
      "मुफ़्त उपकरण जैसे छड़ी, कोहनी वाली बैसाखी, वॉकर, तिपाई और चार पैर वाली छड़ी।",
      "मुफ़्त व्हीलचेयर।",
      "मुफ़्त सुनने की मशीन, चश्मा और नकली दाँत।",
      "शिविर में डॉक्टरों की जाँच के बाद आपकी ज़रूरत के हिसाब से उपकरण।",
    ],
  },
  eligibilityText: {
    en: [
      "Senior citizens aged 60 or above.",
      "From a BPL household, or with a monthly income of up to ₹15,000.",
      "Suffering from an age-related disability or weakness such as low vision, hearing loss, loss of teeth or difficulty walking, confirmed at the assessment camp.",
    ],
    hi: [
      "60 साल या उससे अधिक उम्र के वरिष्ठ नागरिक।",
      "BPL परिवार से हों, या मासिक आय ₹15,000 तक हो।",
      "उम्र से जुड़ी कोई कमज़ोरी हो, जैसे कम दिखना, कम सुनना, दाँत न होना या चलने में दिक़्क़त, जिसकी पुष्टि जाँच शिविर में हो।",
    ],
  },
  exclusions: {
    en: [
      "People below 60 years (they may get aids under the ADIP scheme for persons with disabilities).",
      "Seniors with a monthly income above ₹15,000 who are not BPL.",
    ],
    hi: [
      "60 साल से कम उम्र के लोग (उन्हें दिव्यांगजनों की ADIP योजना से उपकरण मिल सकते हैं)।",
      "₹15,000 महीने से ज़्यादा आय वाले बुज़ुर्ग जो BPL नहीं हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Ask your district social welfare office or the District Collector's office when the next RVY assessment camp is in your area.",
        "Go to the camp with your documents. Doctors will check you and note which devices you need.",
        "Collect the devices free of cost at the distribution camp held later.",
      ],
      hi: [
        "ज़िला समाज कल्याण कार्यालय या ज़िलाधिकारी कार्यालय से पूछें कि आपके क्षेत्र में अगला RVY जाँच शिविर कब है।",
        "दस्तावेज़ लेकर शिविर में जाएँ। डॉक्टर जाँच करके लिखेंगे कि आपको कौन से उपकरण चाहिए।",
        "बाद में होने वाले वितरण शिविर में मुफ़्त उपकरण ले लें।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card (or other ID with age proof)", "BPL card, old age pension proof or income certificate showing up to ₹15,000 a month", "Medical certificate of age-related disability (usually given at the camp)", "Passport-size photograph"],
    hi: ["आधार कार्ड (या उम्र के प्रमाण वाला कोई और पहचान पत्र)", "BPL कार्ड, वृद्धावस्था पेंशन का प्रमाण या ₹15,000 महीने तक आय का प्रमाण पत्र", "उम्र से जुड़ी कमज़ोरी का मेडिकल प्रमाण पत्र (आमतौर पर शिविर में ही मिलता है)", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Do I have to pay anything for the devices?", hi: "क्या उपकरणों के लिए कुछ पैसा देना होगा?" },
      a: {
        en: "No. The devices are given completely free to eligible seniors.",
        hi: "नहीं। पात्र बुज़ुर्गों को उपकरण पूरी तरह मुफ़्त दिए जाते हैं।",
      },
    },
    {
      q: { en: "I'm already getting the old age pension. Can that be my proof?", hi: "मुझे पहले से वृद्धावस्था पेंशन मिलती है। क्या वह प्रमाण चल सकता है?" },
      a: {
        en: "Yes. Proof that you receive the government old age pension is accepted as proof of being in the BPL category.",
        hi: "हाँ। सरकारी वृद्धावस्था पेंशन मिलने का प्रमाण BPL श्रेणी के प्रमाण के रूप में माना जाता है।",
      },
    },
  ],

  officialUrl: "https://alimco.in/",
  sources: [
    "https://alimco.in/WriteReadData/UserFiles/file/Rashtriya%20Vayoshri%20Yojana.pdf",
    "https://newsonair.gov.in/over-8-53-lakh-senior-citizens-benefit-from-more-than-46-lakh-assistive-devices-under-rashtriya-vayoshri-yojana/",
    "https://vikaspedia.in/social-welfare/senior-citizens-welfare/rashtriya-vayoshri-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
