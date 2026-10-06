import { all, female, incomeUpTo, labelled, minAge, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "deen-dayal-lado-lakshmi-yojana",
  overlapGroup: "women-monthly",
  name: { en: "Deen Dayal Lado Lakshmi Yojana", hi: "दीन दयाल लाडो लक्ष्मी योजना" },
  aka: ["Lado Lakshmi", "Lado Laxmi Yojana", "DDLLY"],
  shortDescription: {
    en: "Women in Haryana aged 23 or more from the poorest families get ₹2,100 a month: part paid into their bank account, part saved for them in a government deposit.",
    hi: "हरियाणा की 23 साल या उससे ज़्यादा उम्र की, सबसे गरीब परिवारों की महिलाओं को हर महीने ₹2,100 मिलते हैं: कुछ हिस्सा बैंक खाते में और कुछ सरकारी जमा खाते में उनके लिए बचत।",
  },
  level: "state",
  state: "haryana",
  department: {
    en: "Social Justice, Empowerment, Welfare of SCs & BCs and Antyodaya (SEWA) Department, Haryana",
    hi: "सामाजिक न्याय, अधिकारिता, अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण तथा अंत्योदय (सेवा) विभाग, हरियाणा",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "lado lakshmi", "dbt", "haryana", "2100"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2100, period: "monthly", kind: "cash" },
  ageRange: { min: 23 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("haryana"),
    female(),
    minAge(23),
    labelled(incomeUpTo(180_000), {
      en: "Verified family income up to ₹1 lakh a year (up to ₹1.8 lakh for some mothers)",
      hi: "परिवार की सत्यापित सालाना आय ₹1 लाख तक (कुछ माताओं के लिए ₹1.8 लाख तक)",
    }),
  ),

  details: {
    en: [
      "Deen Dayal Lado Lakshmi Yojana is Haryana's monthly support scheme for women from the poorest families. It was launched on 25 September 2025, and the current rules were notified in January 2026.",
      "The benefit is ₹2,100 a month. In the first month the full amount goes to your savings account. After that, ₹1,100 goes to your account and ₹1,000 is put in a government-run recurring or fixed deposit, which is paid back to you with interest when it matures (within five years).",
      "You apply only through the Lado Lakshmi mobile app. Your details are checked against your Family ID (Parivar Pehchan Patra) data, and then by the Gram Sabha or ward committee. There is no limit on how many eligible women in one family can get it.",
    ],
    hi: [
      "दीन दयाल लाडो लक्ष्मी योजना हरियाणा की सबसे गरीब परिवारों की महिलाओं के लिए मासिक सहायता योजना है। यह 25 सितंबर 2025 को शुरू हुई और इसके मौजूदा नियम जनवरी 2026 में जारी हुए।",
      "हर महीने ₹2,100 का लाभ मिलता है। पहले महीने पूरी राशि आपके बचत खाते में आती है। उसके बाद ₹1,100 आपके खाते में और ₹1,000 सरकारी रिकरिंग या फ़िक्स्ड डिपॉज़िट में जमा होते हैं, जो पकने पर (पाँच साल के अंदर) ब्याज के साथ आपको मिलते हैं।",
      "आवेदन सिर्फ़ लाडो लक्ष्मी मोबाइल ऐप से होता है। आपकी जानकारी परिवार पहचान पत्र (PPP) के डेटा से जाँची जाती है, फिर ग्राम सभा या वार्ड कमेटी भी पुष्टि करती है। एक परिवार की कितनी भी पात्र महिलाएँ लाभ ले सकती हैं।",
    ],
  },
  benefits: {
    en: [
      "₹2,100 a month in total.",
      "First month: the full ₹2,100 goes into your savings account.",
      "From the second month: ₹1,100 into your account and ₹1,000 into a government deposit in your name.",
      "The deposit is paid to you with interest when it matures.",
      "You can choose to take a smaller amount in your account if you wish; ₹1,000 still goes into the deposit.",
    ],
    hi: [
      "हर महीने कुल ₹2,100।",
      "पहले महीने: पूरे ₹2,100 आपके बचत खाते में।",
      "दूसरे महीने से: ₹1,100 आपके खाते में और ₹1,000 आपके नाम के सरकारी जमा खाते में।",
      "जमा राशि पकने पर ब्याज के साथ आपको मिलती है।",
      "चाहें तो खाते में कम राशि लेना चुन सकती हैं; फिर भी ₹1,000 जमा खाते में ही जाते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman aged 23 years or more.",
      "She, or her husband if she married into Haryana from another state, has lived in Haryana for at least the last 15 years.",
      "Her family's verified income is up to ₹1 lakh a year and the Gram Sabha or ward committee confirms the family is among the poorest.",
      "Mothers with family income up to ₹1.8 lakh also qualify if their child in a government school scored above 80% in the Class 10 or 12 board exam, reached grade level under NIPUN Bharat (Classes 1–4), or was brought out of severe or moderate malnutrition. Mothers with more than three children can't use this route.",
      "She has an active bank account in her own name.",
    ],
    hi: [
      "23 साल या उससे ज़्यादा उम्र की महिला।",
      "वह, या दूसरे राज्य से शादी होकर आई हो तो उसका पति, पिछले कम से कम 15 साल से हरियाणा में रह रहा हो।",
      "परिवार की सत्यापित सालाना आय ₹1 लाख तक हो और ग्राम सभा या वार्ड कमेटी परिवार को सबसे गरीब परिवारों में माने।",
      "₹1.8 लाख तक आय वाले परिवार की माँ भी पात्र है, अगर सरकारी स्कूल में पढ़ रहे उसके बच्चे ने 10वीं या 12वीं बोर्ड में 80% से ज़्यादा अंक पाए हों, निपुण भारत में कक्षा 1–4 का स्तर हासिल किया हो, या गंभीर/मध्यम कुपोषण से बाहर आया हो। तीन से ज़्यादा बच्चों वाली माताएँ इस रास्ते से पात्र नहीं हैं।",
      "उसके अपने नाम पर चालू बैंक खाता हो।",
    ],
  },
  exclusions: {
    en: [
      "She already gets a state social security pension, such as old-age, widow, Divyang, Ladli or widower/unmarried allowance.",
      "She gets any other pension, financial assistance or annuity from a government or government-owned body.",
      "She works (regular or contract) for a government body and her family income is above the limit.",
      "She pays income tax.",
    ],
    hi: [
      "उसे पहले से राज्य की कोई सामाजिक सुरक्षा पेंशन मिल रही हो, जैसे बुढ़ापा, विधवा, दिव्यांग, लाडली या विधुर/अविवाहित भत्ता।",
      "उसे किसी सरकारी या सरकारी स्वामित्व वाली संस्था से कोई और पेंशन, आर्थिक सहायता या एन्युटी मिलती हो।",
      "वह किसी सरकारी संस्था में (नियमित या ठेके पर) काम करती हो और परिवार की आय सीमा से ज़्यादा हो।",
      "वह आयकर देती हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Install the official Lado Lakshmi app (Android or iPhone). Don't use any other link or form.",
        "Register with your Family ID and Aadhaar, fill in your details and submit. Note your Registration ID.",
        "After verification (about 15 days) you get an SMS. Open the app, choose the amount you want and give your consent.",
        "Every month after the first payment, complete the face check in the app so payments keep coming.",
      ],
      hi: [
        "आधिकारिक लाडो लक्ष्मी ऐप (Android या iPhone) डाउनलोड करें। किसी और लिंक या फ़ॉर्म का इस्तेमाल न करें।",
        "परिवार पहचान पत्र और आधार से रजिस्टर करें, जानकारी भरें और जमा करें। अपना रजिस्ट्रेशन ID नोट कर लें।",
        "जाँच के बाद (लगभग 15 दिन में) SMS आएगा। ऐप खोलें, अपनी पसंद की राशि चुनें और सहमति दें।",
        "पहले भुगतान के बाद हर महीने ऐप में चेहरे से पहचान (फ़ेस ऑथेंटिकेशन) पूरी करें, ताकि पैसा आता रहे।",
      ],
    },
  },
  documents: {
    en: [
      "Family ID (Parivar Pehchan Patra) with verified income",
      "Aadhaar of yourself and your family members",
      "Residence certificate",
      "Bank account details in your name",
      "Electricity connection and vehicle details (asked in the app)",
    ],
    hi: [
      "सत्यापित आय वाला परिवार पहचान पत्र (PPP)",
      "अपना और परिवार के सदस्यों का आधार",
      "निवास प्रमाण पत्र",
      "अपने नाम के बैंक खाते का विवरण",
      "बिजली कनेक्शन और वाहन का विवरण (ऐप में पूछा जाता है)",
    ],
  },
  faqs: [
    {
      q: { en: "Why do I get only ₹1,100 in my account?", hi: "मेरे खाते में सिर्फ़ ₹1,100 ही क्यों आते हैं?" },
      a: {
        en: "Since January 2026, ₹1,000 of the ₹2,100 is saved every month in a government deposit in your name. You get that money back with interest when the deposit matures.",
        hi: "जनवरी 2026 से ₹2,100 में से ₹1,000 हर महीने आपके नाम के सरकारी जमा खाते में बचत के रूप में रखे जाते हैं। जमा पकने पर यह पैसा ब्याज के साथ आपको वापस मिलता है।",
      },
    },
    {
      q: { en: "My application was marked ineligible. Can I appeal?", hi: "मेरा आवेदन अपात्र हो गया। क्या दोबारा मौका मिलेगा?" },
      a: {
        en: "An ineligible application can't be reopened. Correct your details (for example in your Family ID) and submit a fresh application in the app. Complaints can be raised in the app's grievance section; they go to the District Social Welfare Officer.",
        hi: "अपात्र आवेदन दोबारा नहीं खुलता। अपनी जानकारी (जैसे परिवार पहचान पत्र में) ठीक करवाएँ और ऐप में नया आवेदन करें। शिकायत ऐप के शिकायत वाले हिस्से में कर सकती हैं; यह ज़िला समाज कल्याण अधिकारी के पास जाती है।",
      },
    },
    {
      q: { en: "What happens when I turn 60?", hi: "60 साल की होने पर क्या होगा?" },
      a: {
        en: "You are moved automatically to the old-age pension (or the widow or unmarried persons scheme, if that fits), as long as you meet its conditions.",
        hi: "शर्तें पूरी होने पर आपको अपने-आप बुढ़ापा पेंशन (या लागू हो तो विधवा या अविवाहित व्यक्ति योजना) में भेज दिया जाता है।",
      },
    },
  ],

  officialUrl: "https://socialjusticehry.gov.in/social-security-pension-schemes/",
  sources: [
    "https://cdnbbsr.s3waas.gov.in/s392bbd31f8e0e43a7da8a6295b251725f/uploads/2026/09/202609101742238244.pdf",
    "https://socialjusticehry.gov.in/document/regarding-notification-of-deen-dayal-lado-lakshmi-yojana-2025updated/",
    "https://cdnbbsr.s3waas.gov.in/s386e78499eeb33fb9cac16b7555b50767/uploads/2026/03/202603201031104005.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "active",
};

export default scheme;
