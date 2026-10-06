import { all, ageBetween, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "ddu-gky",
  name: { en: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana", hi: "दीन दयाल उपाध्याय ग्रामीण कौशल्य योजना" },
  aka: ["DDU-GKY", "DDU-GKY 2.0"],
  shortDescription: {
    en: "Free job-linked skill training for rural youth from poor families, with placement in a salaried job and support for the first months of work.",
    hi: "ग़रीब परिवारों के ग्रामीण युवाओं के लिए मुफ़्त, नौकरी से जुड़ा कौशल प्रशिक्षण, वेतन वाली नौकरी में प्लेसमेंट और काम के शुरुआती महीनों में मदद।",
  },
  level: "central",
  ministry: "rural-development",
  categories: ["skills-employment", "agriculture"],
  tags: ["skill training", "rural youth", "placement", "job", "free course", "gramin"],
  benefitType: "in-kind",
  isDBT: false,
  ageRange: { min: 15, max: 35 },
  kundliHouse: "career",
  eligibility: all(...ageBetween(15, 35), when("area", "eq", "rural")),

  details: {
    en: [
      "DDU-GKY trains young people from poor rural families for specific jobs and then places them in regular, salaried work. It is part of the Ministry of Rural Development's National Rural Livelihoods Mission.",
      "Training is free and is given by approved training partners, often in residential centres. Courses combine job skills with soft skills such as communication, basic computers and workplace basics. After training, the partner must help you get a job and stay in it.",
      "Since April 2025 the scheme runs under DDU-GKY 2.0 guidelines, which put more weight on keeping the job after placement, with tracking and support for a year. New batches across many states began in October 2026.",
    ],
    hi: [
      "DDU-GKY ग़रीब ग्रामीण परिवारों के युवाओं को किसी ख़ास काम के लिए प्रशिक्षण देती है और फिर उन्हें नियमित, वेतन वाली नौकरी दिलाती है। यह ग्रामीण विकास मंत्रालय के राष्ट्रीय ग्रामीण आजीविका मिशन का हिस्सा है।",
      "प्रशिक्षण मुफ़्त है और मान्य प्रशिक्षण संस्थाएँ देती हैं, अक्सर रहने की सुविधा वाले केंद्रों में। कोर्स में काम के हुनर के साथ बातचीत, बुनियादी कंप्यूटर और दफ़्तर के तौर-तरीक़े भी सिखाए जाते हैं। प्रशिक्षण के बाद संस्था को आपको नौकरी दिलाने और उसमें टिके रहने में मदद करनी होती है।",
      "अप्रैल 2025 से योजना DDU-GKY 2.0 के नियमों से चल रही है, जिनमें प्लेसमेंट के बाद नौकरी टिकाए रखने पर ज़्यादा ज़ोर है, और एक साल तक निगरानी और मदद मिलती है। अक्टूबर 2026 से कई राज्यों में नए बैच शुरू हुए हैं।",
    ],
  },
  benefits: {
    en: [
      "Free skill training, with no fees for course, study material or uniform.",
      "Free food and stay in residential training centres.",
      "Placement in a salaried job after you complete training.",
      "Post-placement support money for the first months of the job, and follow-up help for up to a year.",
    ],
    hi: [
      "मुफ़्त कौशल प्रशिक्षण, कोर्स, किताबों या वर्दी की कोई फ़ीस नहीं।",
      "आवासीय प्रशिक्षण केंद्रों में मुफ़्त खाना और रहना।",
      "प्रशिक्षण पूरा होने पर वेतन वाली नौकरी में प्लेसमेंट।",
      "नौकरी के शुरुआती महीनों में प्लेसमेंट के बाद की सहायता राशि, और एक साल तक मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "Rural youth aged 15 to 35 years from a poor household.",
      "The upper age limit is 45 years for women, PVTG members, persons with disabilities, transgender persons and other special groups (such as rescued bonded labourers and trafficking survivors).",
      "Poor households include those identified in the SECC data, rural employment guarantee worker families, families with an Antyodaya or BPL card, and Self-Help Group members' families under NRLM.",
    ],
    hi: [
      "ग़रीब परिवार के 15 से 35 साल के ग्रामीण युवा।",
      "महिलाओं, विशेष रूप से कमज़ोर जनजातीय समूहों (PVTG), दिव्यांगजनों, ट्रांसजेंडर और अन्य विशेष समूहों (जैसे छुड़ाए गए बंधुआ मज़दूर और मानव तस्करी से बचे लोग) के लिए ऊपरी उम्र सीमा 45 साल है।",
      "ग़रीब परिवारों में SECC आँकड़ों में पहचाने गए परिवार, रोज़गार गारंटी में काम करने वाले परिवार, अंत्योदय या BPL कार्ड वाले परिवार और NRLM के स्वयं सहायता समूह सदस्यों के परिवार शामिल हैं।",
    ],
  },
  exclusions: {
    en: [
      "Urban youth are not covered (look at PMKVY instead).",
      "Youth above 35 (or above 45 for the special groups) cannot join.",
    ],
    hi: [
      "शहरी युवा इसमें शामिल नहीं हैं (उनके लिए PMKVY देखें)।",
      "35 साल से ज़्यादा (विशेष समूहों के लिए 45 साल से ज़्यादा) उम्र के युवा नहीं जुड़ सकते।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your block or district NRLM office, gram panchayat or a local self-help group to learn about upcoming DDU-GKY batches.",
        "Attend a mobilisation camp or job mela run by a training partner and choose a course.",
        "Register with your documents and go through counselling before the batch starts.",
      ],
      hi: [
        "आने वाले DDU-GKY बैचों के बारे में जानने के लिए अपने ब्लॉक या ज़िले के NRLM दफ़्तर, ग्राम पंचायत या स्थानीय स्वयं सहायता समूह से संपर्क करें।",
        "प्रशिक्षण संस्था के शिविर या रोज़गार मेले में जाएँ और कोर्स चुनें।",
        "दस्तावेज़ों के साथ पंजीकरण करें और बैच शुरू होने से पहले काउंसलिंग में शामिल हों।",
      ],
    },
  },
  documents: {
    en: ["Aadhaar card", "Proof of age", "Proof of rural residence", "Proof of poor household (BPL/Antyodaya card, rural job card or SHG membership)", "Bank account details", "Passport-size photos"],
    hi: ["आधार कार्ड", "उम्र का प्रमाण", "ग्रामीण निवास का प्रमाण", "ग़रीब परिवार का प्रमाण (BPL/अंत्योदय कार्ड, रोज़गार गारंटी जॉब कार्ड या स्वयं सहायता समूह सदस्यता)", "बैंक खाते का विवरण", "पासपोर्ट साइज़ फ़ोटो"],
  },
  faqs: [
    {
      q: { en: "Will I have to move to another city?", hi: "क्या मुझे दूसरे शहर जाना होगा?" },
      a: {
        en: "Often yes. Many training centres are residential and many placements are in towns or cities, sometimes in other states. You can ask the training partner about the job location before you join.",
        hi: "अक्सर हाँ। कई प्रशिक्षण केंद्र आवासीय होते हैं और कई नौकरियाँ कस्बों या शहरों में, कभी-कभी दूसरे राज्यों में होती हैं। जुड़ने से पहले प्रशिक्षण संस्था से नौकरी की जगह के बारे में पूछ सकते हैं।",
      },
    },
    {
      q: { en: "Is there any fee?", hi: "क्या कोई फ़ीस है?" },
      a: {
        en: "No. The full cost of training is paid by the government. Do not pay any training partner or agent.",
        hi: "नहीं। प्रशिक्षण का पूरा ख़र्च सरकार देती है। किसी प्रशिक्षण संस्था या एजेंट को पैसे न दें।",
      },
    },
  ],

  officialUrl: "https://kaushal.rural.gov.in/",
  sources: [
    "https://kaushal.rural.gov.in/",
    "https://rural.gov.in/",
    "https://morungexpress.com/70000-rural-youth-to-begin-skill-training-under-ddu-gky-20-from-oct",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
