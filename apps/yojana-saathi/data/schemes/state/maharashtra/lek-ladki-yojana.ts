import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "lek-ladki-yojana",
  name: { en: "Lek Ladki Yojana", hi: "लेक लाडकी योजना" },
  aka: ["Lek Ladki"],
  shortDescription: {
    en: "Girls born on or after 1 April 2023 in yellow or orange ration card families in Maharashtra get ₹1,01,000 in five stages, from birth to age 18.",
    hi: "महाराष्ट्र में पीले या केसरी राशन कार्ड वाले परिवारों में 1 अप्रैल 2023 या उसके बाद जन्मी बेटियों को जन्म से 18 साल तक पाँच किस्तों में कुल ₹1,01,000 मिलते हैं।",
  },
  level: "state",
  state: "maharashtra",
  department: {
    en: "Women and Child Development Department, Government of Maharashtra",
    hi: "महिला एवं बाल विकास विभाग, महाराष्ट्र सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "daughter", "beti", "ration card", "education", "maharashtra"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 101_000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("maharashtra"),
    labelled(isTrue("daughterUnder10"), { en: "Has a daughter born on or after 1 April 2023", hi: "1 अप्रैल 2023 या उसके बाद जन्मी बेटी हो" }),
    incomeUpTo(100_000),
  ),

  details: {
    en: [
      "Lek Ladki Yojana is Maharashtra's savings-style support for girls from poorer families. It replaced the older Majhi Kanya Bhagyashree scheme and applies to girls born on or after 1 April 2023.",
      "The family gets money at five points in the girl's life: at birth, on starting Class 1, Class 6 and Class 11, and a large final amount at 18. The total is ₹1,01,000.",
      "The scheme is run through Anganwadi centres under the Women and Child Development Department. Money is paid by DBT into a bank account held jointly by the girl and her mother.",
    ],
    hi: [
      "लेक लाडकी योजना महाराष्ट्र में गरीब परिवारों की बेटियों के लिए आर्थिक मदद की योजना है। इसने पुरानी माझी कन्या भाग्यश्री योजना की जगह ली है और 1 अप्रैल 2023 या उसके बाद जन्मी बेटियों पर लागू होती है।",
      "परिवार को बेटी के जीवन में पाँच मौकों पर पैसे मिलते हैं: जन्म पर, कक्षा 1, कक्षा 6 और कक्षा 11 में दाखिले पर, और 18 साल होने पर एक बड़ी राशि। कुल रकम ₹1,01,000 है।",
      "यह योजना महिला एवं बाल विकास विभाग के तहत आंगनवाड़ी केंद्रों से चलती है। पैसा DBT से बेटी और माँ के संयुक्त बैंक खाते में आता है।",
    ],
  },
  benefits: {
    en: [
      "₹5,000 after the girl is born.",
      "₹6,000 when she joins Class 1.",
      "₹7,000 when she joins Class 6.",
      "₹8,000 when she joins Class 11.",
      "₹75,000 when she turns 18 and is unmarried.",
    ],
    hi: [
      "बेटी के जन्म के बाद ₹5,000।",
      "कक्षा 1 में दाखिले पर ₹6,000।",
      "कक्षा 6 में दाखिले पर ₹7,000।",
      "कक्षा 11 में दाखिले पर ₹8,000।",
      "18 साल पूरे होने पर, अविवाहित रहने की शर्त पर ₹75,000।",
    ],
  },
  eligibilityText: {
    en: [
      "The family lives in Maharashtra and holds a yellow or orange ration card.",
      "Family income is up to ₹1 lakh a year.",
      "The girl was born on or after 1 April 2023.",
      "Applies to the first and second child: one or two daughters. If the first child is a son, the second-born daughter qualifies.",
      "After the second child, a parent must submit a family planning (sterilisation) certificate to keep getting later instalments.",
      "The bank account must be in Maharashtra.",
    ],
    hi: [
      "परिवार महाराष्ट्र में रहता हो और उसके पास पीला या केसरी राशन कार्ड हो।",
      "परिवार की सालाना आय ₹1 लाख तक हो।",
      "बेटी का जन्म 1 अप्रैल 2023 या उसके बाद हुआ हो।",
      "पहली और दूसरी संतान पर लागू: एक या दो बेटियाँ। अगर पहली संतान बेटा है, तो दूसरी संतान बेटी होने पर लाभ मिलेगा।",
      "दूसरी संतान के बाद आगे की किस्तों के लिए माता या पिता को परिवार नियोजन (नसबंदी) प्रमाण पत्र देना होगा।",
      "बैंक खाता महाराष्ट्र में होना चाहिए।",
    ],
  },
  exclusions: {
    en: [
      "Girls born before 1 April 2023.",
      "Families with a white ration card or income above ₹1 lakh a year.",
      "A girl who marries before 18 does not get the final ₹75,000.",
      "Third and later children (except twins in the second delivery).",
    ],
    hi: [
      "1 अप्रैल 2023 से पहले जन्मी बेटियाँ।",
      "सफ़ेद राशन कार्ड वाले या ₹1 लाख से ज़्यादा सालाना आय वाले परिवार।",
      "18 साल से पहले शादी होने पर आख़िरी ₹75,000 नहीं मिलते।",
      "तीसरी और उसके बाद की संतान (दूसरी डिलीवरी में जुड़वाँ बच्चों को छोड़कर)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the Lek Ladki form free from your Anganwadi centre or the District Programme Officer's office.",
        "Fill it in and give it to the Anganwadi worker with the documents for that stage.",
        "The application is checked by the supervisor and the Child Development Project Officer, and approved online by the District Programme Officer. The money then comes to the joint bank account.",
      ],
      hi: [
        "लेक लाडकी का फ़ॉर्म आंगनवाड़ी केंद्र या ज़िला कार्यक्रम अधिकारी के दफ़्तर से मुफ़्त लें।",
        "फ़ॉर्म भरकर उस किस्त के दस्तावेज़ों के साथ आंगनवाड़ी सेविका को दें।",
        "पर्यवेक्षिका और बाल विकास परियोजना अधिकारी आवेदन जाँचते हैं, और ज़िला कार्यक्रम अधिकारी ऑनलाइन मंज़ूरी देते हैं। फिर पैसा संयुक्त बैंक खाते में आता है।",
      ],
    },
  },
  documents: {
    en: [
      "Girl's birth certificate",
      "Aadhaar of the girl and her parents",
      "Yellow or orange ration card (attested copy)",
      "Income certificate from the Tehsildar (up to ₹1 lakh)",
      "Bank passbook of the girl and mother's joint account",
      "School bonafide certificate (for the Class 1, 6 and 11 instalments)",
      "Family planning certificate (when required) and the mother's self-declaration",
    ],
    hi: [
      "बेटी का जन्म प्रमाण पत्र",
      "बेटी और माता-पिता का आधार",
      "पीला या केसरी राशन कार्ड (सत्यापित कॉपी)",
      "तहसीलदार का आय प्रमाण पत्र (₹1 लाख तक)",
      "बेटी और माँ के संयुक्त खाते की बैंक पासबुक",
      "स्कूल का बोनाफ़ाइड प्रमाण पत्र (कक्षा 1, 6 और 11 की किस्तों के लिए)",
      "परिवार नियोजन प्रमाण पत्र (जहाँ ज़रूरी हो) और माँ का स्व-घोषणा पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "My daughter was born in 2022. Can she get it?", hi: "मेरी बेटी 2022 में पैदा हुई। क्या उसे लाभ मिलेगा?" },
      a: {
        en: "No. Only girls born on or after 1 April 2023 are covered. Older girls may have been covered by the earlier Majhi Kanya Bhagyashree scheme.",
        hi: "नहीं। सिर्फ़ 1 अप्रैल 2023 या उसके बाद जन्मी बेटियाँ इसमें आती हैं। इससे पहले जन्मी बेटियाँ पुरानी माझी कन्या भाग्यश्री योजना में आ सकती थीं।",
      },
    },
    {
      q: { en: "Do I apply once or at every stage?", hi: "क्या एक बार आवेदन करना है या हर किस्त पर?" },
      a: {
        en: "You register at birth, then submit the documents for each stage (school admission, age 18) through the Anganwadi worker when that stage comes.",
        hi: "जन्म पर रजिस्ट्रेशन होता है, फिर हर किस्त (स्कूल दाखिला, 18 साल) के समय उसके दस्तावेज़ आंगनवाड़ी सेविका के ज़रिए जमा करने होते हैं।",
      },
    },
  ],

  officialUrl: "https://womenchild.maharashtra.gov.in/",
  sources: [
    "https://www.zpsatara.gov.in/?p=8588",
    "https://icds.gov.in/mr/node/624",
    "https://womenchild.maharashtra.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
