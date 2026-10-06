import { all, ageBetween, incomeUpTo, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "bhorsha-karmasuchi",
  tier: "compact",
  overlapGroup: "unemployment-allowance",
  name: { en: "Bhorsha Karmasuchi", hi: "भरसा कर्मसूची" },
  aka: ["Bharsa Karmasuchi", "unemployment allowance West Bengal"],
  shortDescription: {
    en: "Monthly allowance for educated unemployed youth in West Bengal aged 21 to 45 from families earning under ₹1 lakh a year: ₹3,000 for graduates, ₹2,000 for others.",
    hi: "पश्चिम बंगाल के 21 से 45 साल के पढ़े-लिखे बेरोज़गार युवाओं को, जिनके परिवार की सालाना आय ₹1 लाख से कम है, हर महीने भत्ता: स्नातकों को ₹3,000, बाक़ी को ₹2,000।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Government of West Bengal", hi: "पश्चिम बंगाल सरकार" },
  categories: ["skills-employment"],
  tags: ["unemployment allowance", "youth", "graduate", "job seeker", "bhorsha", "west bengal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 2000, period: "monthly", kind: "cash" },
  ageRange: { min: 21, max: 45 },
  kundliHouse: "career",
  eligibility: all(
    residentOf("west-bengal"),
    ...ageBetween(21, 45),
    when("employment", "eq", "unemployed"),
    incomeUpTo(100_000),
  ),

  details: {
    en: [
      "Bhorsha Karmasuchi is a monthly allowance for educated unemployed young people, announced in West Bengal's 2026-27 budget on 22 June 2026. It is due to start from October 2026.",
      "Unemployed graduates get ₹3,000 a month and other eligible youth get ₹2,000 a month. Detailed rules, the application portal and the implementing department had not been published when this page was checked.",
    ],
    hi: [
      "भरसा कर्मसूची पढ़े-लिखे बेरोज़गार युवाओं के लिए मासिक भत्ता है, जिसकी घोषणा 22 जून 2026 को पश्चिम बंगाल के 2026-27 के बजट में हुई। इसे अक्टूबर 2026 से शुरू होना है।",
      "बेरोज़गार स्नातकों को हर महीने ₹3,000 और बाक़ी पात्र युवाओं को ₹2,000 मिलेंगे। यह पेज जाँचते समय विस्तृत नियम, आवेदन पोर्टल और लागू करने वाला विभाग घोषित नहीं हुए थे।",
    ],
  },
  benefits: {
    en: ["₹3,000 a month if you are an unemployed graduate.", "₹2,000 a month for other eligible educated unemployed youth."],
    hi: ["बेरोज़गार स्नातक हों तो हर महीने ₹3,000।", "बाक़ी पात्र पढ़े-लिखे बेरोज़गार युवाओं को हर महीने ₹2,000।"],
  },
  eligibilityText: {
    en: [
      "A resident of West Bengal aged 21 to 45.",
      "Educated and currently unemployed.",
      "Family income is less than ₹1 lakh a year.",
      "Not getting benefits from any other existing social protection scheme.",
    ],
    hi: [
      "पश्चिम बंगाल का निवासी, उम्र 21 से 45 साल।",
      "पढ़ा-लिखा हो और अभी बेरोज़गार हो।",
      "परिवार की सालाना आय ₹1 लाख से कम हो।",
      "किसी दूसरी चालू सामाजिक सुरक्षा योजना का लाभ न ले रहा हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Watch for the official notice on wb.gov.in or ask at your Block Development Office or municipality about when applications open.",
        "Keep ready your age proof, educational certificates, income certificate, Aadhaar and bank details.",
      ],
      hi: [
        "wb.gov.in पर आधिकारिक सूचना देखें, या ब्लॉक विकास कार्यालय या नगरपालिका में पूछें कि आवेदन कब शुरू होंगे।",
        "उम्र का सबूत, पढ़ाई के प्रमाण पत्र, आय प्रमाण पत्र, आधार और बैंक का ब्योरा तैयार रखें।",
      ],
    },
  },

  officialUrl: "https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf",
  sources: ["https://finance.wb.gov.in/writereaddata/Budget_Speech/2026_English.pdf"],
  lastVerified: "2026-10-06",
  launchedYear: 2026,
  status: "check-status",
};

export default scheme;
