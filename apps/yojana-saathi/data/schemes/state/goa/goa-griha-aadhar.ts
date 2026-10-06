import { all, female, labelled, minAge, notGovtEmployee, residentOf, incomeUpTo, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "goa-griha-aadhar",
  tier: "full",
  overlapGroup: "women-monthly",
  name: { en: "Griha Aadhar Scheme", hi: "गृह आधार योजना" },
  aka: ["Griha Aadhaar", "Goa homemaker scheme", "Goa housewife ₹1500"],
  shortDescription: {
    en: "₹1,500 a month straight into the bank account of married, widowed or divorced homemakers in Goa whose household income is up to ₹3 lakh a year.",
    hi: "गोवा की शादीशुदा, विधवा या तलाकशुदा गृहिणियों को, जिनकी घरेलू आय ₹3 लाख सालाना तक है, हर महीने ₹1,500 सीधे बैंक खाते में।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Directorate of Women and Child Development, Government of Goa",
    hi: "महिला एवं बाल विकास निदेशालय, गोवा सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["homemaker", "housewife", "women", "monthly cash", "griha aadhar", "goa"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "cash" },
  ageRange: { min: 18 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("goa"),
    female(),
    minAge(18),
    labelled(when("marital", "in", ["married", "widowed", "divorced", "separated"]), {
      en: "You are married, widowed or divorced",
      hi: "आप शादीशुदा, विधवा या तलाकशुदा हैं",
    }),
    labelled(incomeUpTo(300_000), {
      en: "Income of husband and wife together is up to ₹3 lakh a year",
      hi: "पति-पत्नी की कुल आय ₹3 लाख सालाना तक है",
    }),
    labelled(notGovtEmployee(), {
      en: "You are not a regular government or bank employee",
      hi: "आप नियमित सरकारी या बैंक कर्मचारी नहीं हैं",
    }),
  ),

  details: {
    en: [
      "Griha Aadhar is the Goa government's monthly support for homemakers. It started in 2012 to help families cope with rising prices, and is run by the Directorate of Women and Child Development.",
      "An eligible woman gets ₹1,500 every month in her own savings account. Since March 2026 the state says the money is credited by the 10th of each month.",
      "To keep getting the money, you have to submit a life certificate and an income certificate once a year. If you miss it, payments stop until you submit them.",
    ],
    hi: [
      "गृह आधार गोवा सरकार की गृहिणियों के लिए मासिक सहायता योजना है। बढ़ती महँगाई में परिवारों की मदद के लिए यह 2012 में शुरू हुई और महिला एवं बाल विकास निदेशालय इसे चलाता है।",
      "पात्र महिला को हर महीने ₹1,500 उसके अपने बचत खाते में मिलते हैं। मार्च 2026 से सरकार के अनुसार पैसा हर महीने की 10 तारीख तक खाते में आ जाता है।",
      "पैसा मिलते रहने के लिए साल में एक बार जीवन प्रमाण पत्र और आय प्रमाण पत्र जमा करना होता है। ऐसा न करने पर, जमा करने तक भुगतान रुक जाता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month, paid directly into your savings bank account.",
      "Paid to the woman herself, not to the husband.",
      "Continues as long as you stay eligible and renew your papers every year.",
    ],
    hi: [
      "हर महीने ₹1,500, सीधे आपके बचत बैंक खाते में।",
      "पैसा खुद महिला को मिलता है, पति को नहीं।",
      "जब तक आप पात्र रहें और हर साल कागज़ नवीनीकृत करें, सहायता जारी रहती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A married woman above 18 years. Widows and divorced women also qualify.",
      "You have lived in Goa for the last 15 years. A woman from outside Goa married to a Goan who has lived in Goa for 15 years can apply after living in Goa for one year.",
      "The gross income of husband and wife together is not more than ₹3 lakh a year (for a widow or divorcee, her own income).",
      "Neither you nor your husband is a regular employee of the Goa government, the central or any state government, their corporations, or a scheduled bank.",
    ],
    hi: [
      "18 साल से ज़्यादा उम्र की शादीशुदा महिला। विधवा और तलाकशुदा महिलाएँ भी पात्र हैं।",
      "आप पिछले 15 साल से गोवा में रह रही हैं। गोवा से बाहर की महिला, जिसकी शादी 15 साल से गोवा में रह रहे गोवावासी से हुई है, गोवा में एक साल रहने के बाद आवेदन कर सकती है।",
      "पति-पत्नी की कुल सकल आय ₹3 लाख सालाना से ज़्यादा नहीं है (विधवा या तलाकशुदा के लिए उसकी अपनी आय)।",
      "न आप और न आपके पति गोवा सरकार, केंद्र या किसी राज्य सरकार, उनके निगमों या किसी अनुसूचित बैंक के नियमित कर्मचारी हैं।",
    ],
  },
  exclusions: {
    en: [
      "You or your husband are a regular employee of a government, government corporation or scheduled bank (contract and daily-wage work does not count).",
      "You or your husband already get the Dayanand Social Security Scheme pension. A widow with a child under 18 can get both until the child turns 18.",
      "Combined income above ₹3 lakh a year.",
    ],
    hi: [
      "आप या आपके पति किसी सरकार, सरकारी निगम या अनुसूचित बैंक के नियमित कर्मचारी हैं (ठेके और दिहाड़ी का काम इसमें नहीं गिना जाता)।",
      "आप या आपके पति पहले से दयानंद सामाजिक सुरक्षा योजना की पेंशन ले रहे हैं। 18 साल से छोटे बच्चे वाली विधवा बच्चे के 18 साल का होने तक दोनों ले सकती है।",
      "कुल आय ₹3 लाख सालाना से ज़्यादा।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Griha Aadhar application form from the Directorate of Women and Child Development or its taluka facilitation centre.",
        "Fill it in, get your photo and the form attested by a Gazetted Officer, MLA or MP, and attach the documents.",
        "Submit it to the Directorate. After checking, a sanction is issued and the money starts coming to your bank account.",
        "Every year, submit a life certificate and income certificate in the window the department announces (April to May in 2026).",
      ],
      hi: [
        "गृह आधार का आवेदन फ़ॉर्म महिला एवं बाल विकास निदेशालय या उसके तालुका सुविधा केंद्र से लें।",
        "फ़ॉर्म भरें, अपनी फ़ोटो और फ़ॉर्म किसी राजपत्रित अधिकारी, विधायक या सांसद से सत्यापित कराएँ और दस्तावेज़ लगाएँ।",
        "इसे निदेशालय में जमा करें। जाँच के बाद मंज़ूरी मिलती है और पैसा आपके बैंक खाते में आने लगता है।",
        "हर साल विभाग के बताए समय में (2026 में अप्रैल से मई) जीवन प्रमाण पत्र और आय प्रमाण पत्र जमा करें।",
      ],
    },
  },
  documents: {
    en: [
      "Aadhaar card",
      "Marriage certificate",
      "15-year residence certificate from the Mamlatdar",
      "Proof of present address, such as voter ID",
      "Income certificate from the Village Panchayat Secretary or Municipal Chief Officer, with a self-declaration attested by a Gazetted Officer",
      "Bank passbook copy with IFSC (account preferably linked to Aadhaar)",
    ],
    hi: [
      "आधार कार्ड",
      "विवाह प्रमाण पत्र",
      "मामलतदार से 15 साल का निवास प्रमाण पत्र",
      "मौजूदा पते का सबूत, जैसे वोटर ID",
      "ग्राम पंचायत सचिव या नगर परिषद के मुख्य अधिकारी से आय प्रमाण पत्र, राजपत्रित अधिकारी से सत्यापित स्व-घोषणा के साथ",
      "IFSC वाली बैंक पासबुक की कॉपी (खाता आधार से जुड़ा हो तो बेहतर)",
    ],
  },
  faqs: [
    {
      q: { en: "Has the ₹1,500 been increased?", hi: "क्या ₹1,500 की राशि बढ़ी है?" },
      a: {
        en: "The 2026-27 Goa budget said the amount will be raised, but as of October 2026 we have not seen an official order with a new figure. The notified amount is still ₹1,500 a month.",
        hi: "गोवा के 2026-27 बजट में राशि बढ़ाने की बात कही गई थी, पर अक्टूबर 2026 तक हमें नई राशि का कोई सरकारी आदेश नहीं मिला। अधिसूचित राशि अभी भी ₹1,500 महीना है।",
      },
    },
    {
      q: { en: "My payment stopped. Why?", hi: "मेरा पैसा आना बंद हो गया। क्यों?" },
      a: {
        en: "The most common reason is not submitting the yearly life certificate and income certificate. Once you submit them, payments restart from the next month (missed months are not paid back).",
        hi: "सबसे आम वजह है सालाना जीवन प्रमाण पत्र और आय प्रमाण पत्र जमा न करना। इन्हें जमा करने पर अगले महीने से भुगतान फिर शुरू हो जाता है (छूटे महीनों का पैसा वापस नहीं मिलता)।",
      },
    },
    {
      q: { en: "Can I get Griha Aadhar and the DSSS pension together?", hi: "क्या गृह आधार और DSSS पेंशन दोनों साथ मिल सकते हैं?" },
      a: {
        en: "Normally no. The only exception is a widow with a child under 18, who can get both until the child turns 18.",
        hi: "आम तौर पर नहीं। केवल 18 साल से छोटे बच्चे वाली विधवा को बच्चे के 18 साल होने तक दोनों मिल सकते हैं।",
      },
    },
  ],

  officialUrl: "https://www.goa.gov.in/government/schemes/",
  sources: [
    "https://www.goa.gov.in/wp-content/uploads/2021/01/Laadli-Laxmi-Scheme-Griha-Aadhar-Schme-Amendment-Notification.pdf",
    "https://www.goa.gov.in/wp-content/uploads/2021/01/Griha-Aadhar-Scheme.pdf",
    "https://dip.goa.gov.in/griha-aadhar-dss-assistance-to-be-credited-on-10th-of-every-month-cm/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2012,
  status: "active",
};

export default scheme;
