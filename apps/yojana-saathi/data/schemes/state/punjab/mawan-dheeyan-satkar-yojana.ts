import { all, female, labelled, minAge, notGovtEmployee, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "mawan-dheeyan-satkar-yojana",
  overlapGroup: "women-monthly",
  name: { en: "Mukh Mantri Mawan Dheeyan Satkar Yojana", hi: "मुख्यमंत्री मावां धीयां सत्कार योजना" },
  aka: ["Mawan Dheeyan Satkar", "Mawan Dhian Satikar Yojna", "Punjab ₹1000 women scheme", "Sanman Rashi"],
  shortDescription: {
    en: "Every woman voter in Punjab aged 18 or above gets ₹1,000 a month in her bank account (₹1,500 for Scheduled Caste women), even if she already gets a state pension.",
    hi: "पंजाब की 18 साल या उससे ज़्यादा उम्र की हर महिला वोटर को हर महीने ₹1,000 बैंक खाते में मिलते हैं (अनुसूचित जाति की महिलाओं को ₹1,500), भले ही उसे पहले से राज्य की पेंशन मिलती हो।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "1000 rupees", "dbt", "sc women", "punjab"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1000, period: "monthly", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("punjab"),
    female(),
    minAge(18),
    labelled(notGovtEmployee(), {
      en: "You are not a current or former permanent government employee",
      hi: "आप मौजूदा या पूर्व स्थायी सरकारी कर्मचारी नहीं हैं",
    }),
  ),

  details: {
    en: [
      "Mawan Dheeyan Satkar Yojana is Punjab's monthly cash support for adult women. It was announced in the 2026-27 state budget on 8 March 2026 and approved by the state cabinet soon after.",
      "Women get ₹1,000 a month, and women from Scheduled Castes get ₹1,500 a month, paid by Direct Benefit Transfer into their own bank account. The government expects more than 97% of adult women in the state to qualify.",
      "There is no limit on how many women from one family can join. Women already getting an old age, widow or disability pension from the state can also get this money on top of their pension.",
    ],
    hi: [
      "मावां धीयां सत्कार योजना पंजाब की बालिग महिलाओं के लिए हर महीने की नकद सहायता है। इसकी घोषणा 8 मार्च 2026 को राज्य के 2026-27 के बजट में हुई और उसके बाद कैबिनेट ने इसे मंज़ूरी दी।",
      "महिलाओं को हर महीने ₹1,000 और अनुसूचित जाति की महिलाओं को हर महीने ₹1,500 मिलते हैं, जो DBT से उनके अपने बैंक खाते में आते हैं। सरकार के अनुसार राज्य की 97% से ज़्यादा बालिग महिलाएँ इसकी पात्र होंगी।",
      "एक परिवार की कितनी भी महिलाएँ जुड़ सकती हैं। जिन महिलाओं को पहले से राज्य की बुढ़ापा, विधवा या दिव्यांग पेंशन मिलती है, उन्हें भी पेंशन के साथ यह पैसा मिलता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,000 every month, paid into your own bank account.",
      "₹1,500 every month if you belong to a Scheduled Caste.",
      "Paid in addition to any state social security pension you already get.",
      "You decide how to spend the money.",
    ],
    hi: [
      "हर महीने ₹1,000, सीधे आपके अपने बैंक खाते में।",
      "अगर आप अनुसूचित जाति से हैं तो हर महीने ₹1,500।",
      "पहले से मिल रही राज्य की सामाजिक सुरक्षा पेंशन के अलावा मिलता है।",
      "पैसा कैसे ख़र्च करना है, यह आप तय करती हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman aged 18 years or above.",
      "Registered as a voter in Punjab, with a valid voter ID card.",
      "Has an Aadhaar card that shows a Punjab address.",
      "Has a bank account in her own name.",
    ],
    hi: [
      "18 साल या उससे ज़्यादा उम्र की महिला।",
      "पंजाब में वोटर के रूप में दर्ज हो और उसके पास मान्य वोटर ID कार्ड हो।",
      "आधार कार्ड पर पंजाब का पता हो।",
      "उसके अपने नाम पर बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "Women who are, or have been, permanent government employees.",
      "Current or former MPs and MLAs.",
      "Women who pay income tax.",
    ],
    hi: [
      "जो महिलाएँ स्थायी सरकारी कर्मचारी हैं या रह चुकी हैं।",
      "मौजूदा या पूर्व सांसद और विधायक।",
      "जो महिलाएँ आयकर देती हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Go to your nearest Anganwadi centre or another registration centre set up by the government in your area.",
        "Take your Aadhaar card, voter ID card and bank account details.",
        "The staff will register you. Once approved, the money comes to your bank account every month.",
      ],
      hi: [
        "अपने नज़दीकी आंगनवाड़ी केंद्र या सरकार के बनाए किसी दूसरे पंजीकरण केंद्र पर जाएँ।",
        "आधार कार्ड, वोटर ID कार्ड और बैंक खाते का ब्योरा साथ ले जाएँ।",
        "वहाँ के कर्मचारी आपका पंजीकरण कर देंगे। मंज़ूरी के बाद हर महीने पैसा आपके बैंक खाते में आएगा।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card with a Punjab address",
      "Voter ID card issued by the Election Commission",
      "Bank passbook or account details in your own name",
    ],
    hi: [
      "पंजाब के पते वाला आधार कार्ड",
      "चुनाव आयोग का जारी किया वोटर ID कार्ड",
      "अपने नाम के बैंक खाते की पासबुक या ब्योरा",
    ],
  },
  faqs: [
    {
      q: { en: "I already get a widow pension. Can I still get this?", hi: "मुझे पहले से विधवा पेंशन मिलती है। क्या मुझे यह भी मिलेगा?" },
      a: {
        en: "Yes. The government has said that women getting old age, widow or disability pensions from the state will get this money in addition to their pension.",
        hi: "हाँ। सरकार ने कहा है कि राज्य से बुढ़ापा, विधवा या दिव्यांग पेंशन पाने वाली महिलाओं को यह पैसा पेंशन के अलावा मिलेगा।",
      },
    },
    {
      q: { en: "Is there an online form?", hi: "क्या इसका ऑनलाइन फ़ॉर्म है?" },
      a: {
        en: "Registration is done in person at Anganwadi and other government registration centres. Be careful of websites or people asking for money to register you.",
        hi: "पंजीकरण आंगनवाड़ी और सरकार के दूसरे पंजीकरण केंद्रों पर ख़ुद जाकर होता है। पंजीकरण के नाम पर पैसे माँगने वाली वेबसाइटों या लोगों से सावधान रहें।",
      },
    },
    {
      q: { en: "Can my mother, my sister and I all apply?", hi: "क्या मैं, मेरी माँ और मेरी बहन, तीनों आवेदन कर सकती हैं?" },
      a: {
        en: "Yes. There is no limit on the number of eligible women from one family.",
        hi: "हाँ। एक परिवार से कितनी भी पात्र महिलाएँ आवेदन कर सकती हैं।",
      },
    },
  ],

  officialUrl:
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/cm-bhagwant-singh-mann-led-punjab-cabinet-clears-mukh-mantri-mawan-dheeyan-satkar-yojna-over-97-women-to-receive-10001500-monthly/",
  sources: [
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/cm-bhagwant-singh-mann-led-punjab-cabinet-clears-mukh-mantri-mawan-dheeyan-satkar-yojna-over-97-women-to-receive-10001500-monthly/",
    "https://finance.punjab.gov.in/uploads/d7212a72-2d72-4506-9a47-064ff8f76b7c_Budget_Speech_English%202026-27.pdf",
    "https://ipr.punjab.gov.in/en/press-releases/hq-press-releases/bhagwant-mann-govts-mawan-dheeyan-satkar-yojana-empowers-women-even-beyond-100-years-of-age/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "active",
};

export default scheme;
