import { all, incomeUpTo, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "punjab-disability-pension",
  overlapGroup: "disability-pension",
  name: { en: "Punjab Financial Assistance to Disabled Persons", hi: "पंजाब दिव्यांगजन वित्तीय सहायता" },
  aka: ["Punjab disability pension", "Divyang pension Punjab", "Handicapped pension Punjab"],
  shortDescription: {
    en: "₹1,500 a month for people in Punjab with 50% or more disability (any level for mental disability) who can't earn a living and have yearly income up to ₹60,000.",
    hi: "पंजाब में 50% या ज़्यादा दिव्यांगता वाले (मानसिक दिव्यांगता में कोई भी प्रतिशत) उन लोगों को हर महीने ₹1,500, जो कमा नहीं सकते और जिनकी सालाना आय ₹60,000 तक है।",
  },
  level: "state",
  state: "punjab",
  department: {
    en: "Department of Social Security and Women & Child Development, Government of Punjab",
    hi: "सामाजिक सुरक्षा और महिला एवं बाल विकास विभाग, पंजाब सरकार",
  },
  categories: ["disability", "social-welfare", "pension-insurance"],
  tags: ["disability pension", "divyang", "handicapped", "blind", "deaf", "punjab"],
  benefitType: "pension",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "pension" },
  kundliHouse: "health",
  eligibility: all(
    residentOf("punjab"),
    labelled(isTrue("disabled"), {
      en: "You have a disability (50% or more; any level for mental disability)",
      hi: "आप दिव्यांग हैं (50% या ज़्यादा; मानसिक दिव्यांगता में कोई भी प्रतिशत)",
    }),
    labelled(incomeUpTo(60_000), { en: "Your yearly income from all sources is up to ₹60,000", hi: "सभी स्रोतों से आपकी सालाना आय ₹60,000 तक हो" }),
  ),

  details: {
    en: [
      "This is Punjab's own monthly pension for persons with disabilities who are unable to earn a living. It covers people who are blind, physically disabled, deaf and mute, or have an intellectual or mental disability.",
      "The rate is ₹1,500 a month and has been since 1 July 2021. About 2.76 lakh people receive it.",
      "If a beneficiary is a child under 21 and the parent or guardian dies, the SDM can name a close relative as the new guardian, and the payments carry on without a break.",
    ],
    hi: [
      "यह पंजाब की अपनी मासिक पेंशन है, जो उन दिव्यांगजनों के लिए है जो अपनी रोज़ी-रोटी नहीं कमा सकते। इसमें नेत्रहीन, शारीरिक रूप से दिव्यांग, मूक-बधिर और बौद्धिक या मानसिक दिव्यांगता वाले लोग शामिल हैं।",
      "1 जुलाई 2021 से इसकी दर ₹1,500 महीना है। लगभग 2.76 लाख लोगों को यह मिलती है।",
      "अगर लाभार्थी 21 साल से कम उम्र का बच्चा है और माता-पिता या अभिभावक की मृत्यु हो जाए, तो SDM किसी नज़दीकी रिश्तेदार को नया अभिभावक बना सकता है और पैसा बिना रुके मिलता रहता है।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month, paid into your bank account.",
      "Payments continue through a new guardian if a disabled child's parent dies.",
    ],
    hi: [
      "हर महीने ₹1,500, सीधे बैंक खाते में।",
      "दिव्यांग बच्चे के माता-पिता की मृत्यु होने पर नए अभिभावक के ज़रिए पैसा मिलता रहता है।",
    ],
  },
  eligibilityText: {
    en: [
      "A resident of Punjab who is unable to earn a living because of disability.",
      "Physical disability of 50% or more. People with a mental or intellectual disability qualify at any percentage.",
      "Total yearly income up to ₹60,000, including business, rent or interest income.",
    ],
    hi: [
      "पंजाब का निवासी जो दिव्यांगता के कारण कमा नहीं सकता।",
      "50% या ज़्यादा शारीरिक दिव्यांगता। मानसिक या बौद्धिक दिव्यांगता वाले किसी भी प्रतिशत पर पात्र हैं।",
      "कारोबार, किराए या ब्याज समेत कुल सालाना आय ₹60,000 तक।",
    ],
  },
  exclusions: {
    en: [
      "Physical disability below 50%.",
      "Yearly income above ₹60,000 from any source.",
      "You have a job, run your own business, or pay income tax.",
    ],
    hi: [
      "50% से कम शारीरिक दिव्यांगता।",
      "किसी भी स्रोत से सालाना आय ₹60,000 से ज़्यादा।",
      "आपकी नौकरी है, अपना काम-धंधा है, या आप आयकर देते हैं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get the form from a Sewa Kendra, Anganwadi centre, CDPO office, District Social Security Office, SDM office, panchayat or BDPO office.",
        "Fill it in and attach your disability certificate, age proof and the signed self-declaration.",
        "Submit it. The CDPO verifies it within a month and the District Social Security Officer sanctions the pension.",
      ],
      hi: [
        "फ़ॉर्म सेवा केंद्र, आंगनवाड़ी केंद्र, CDPO दफ़्तर, ज़िला सामाजिक सुरक्षा दफ़्तर, SDM दफ़्तर, पंचायत या BDPO दफ़्तर से लें।",
        "फ़ॉर्म भरें और दिव्यांगता प्रमाण पत्र, उम्र का सबूत और दस्तख़त की हुई स्व-घोषणा लगाएँ।",
        "फ़ॉर्म जमा करें। CDPO एक महीने में जाँच करता है और ज़िला सामाजिक सुरक्षा अधिकारी पेंशन मंज़ूर करता है।",
      ],
    },
  },
  documents: {
    en: [
      "Disability certificate",
      "Age proof: Aadhaar, voter card, matriculation certificate or birth certificate (any one)",
      "Self-declaration about income, job and property",
      "Aadhaar number, mobile number and bank account number",
    ],
    hi: [
      "दिव्यांगता प्रमाण पत्र",
      "उम्र का सबूत: आधार, वोटर कार्ड, मैट्रिक प्रमाण पत्र या जन्म प्रमाण पत्र (कोई एक)",
      "आय, नौकरी और संपत्ति के बारे में स्व-घोषणा",
      "आधार नंबर, मोबाइल नंबर और बैंक खाता नंबर",
    ],
  },
  faqs: [
    {
      q: { en: "My son has an intellectual disability of 40%. Is he eligible?", hi: "मेरे बेटे की बौद्धिक दिव्यांगता 40% है। क्या वह पात्र है?" },
      a: {
        en: "Yes. The 50% minimum does not apply to mental or intellectual disability, as long as the income and other conditions are met.",
        hi: "हाँ। मानसिक या बौद्धिक दिव्यांगता पर 50% की न्यूनतम सीमा लागू नहीं होती, बशर्ते आय और बाक़ी शर्तें पूरी हों।",
      },
    },
    {
      q: { en: "Is there an age limit?", hi: "क्या उम्र की कोई सीमा है?" },
      a: {
        en: "The department's rules don't set a minimum age; children with disabilities are covered through a parent or guardian.",
        hi: "विभाग के नियमों में न्यूनतम उम्र तय नहीं है; दिव्यांग बच्चों को माता-पिता या अभिभावक के ज़रिए लाभ मिलता है।",
      },
    },
  ],

  officialUrl: "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
  sources: [
    "https://sswcd.punjab.gov.in/en/social-security/pensionsfinancial-assistance",
    "https://finance.punjab.gov.in/uploads/acdc31d7-1fc6-4290-823e-d5e5bea4c16a_Gender%20Budget%202026-27.pdf",
    "https://finance.punjab.gov.in/uploads/9abf7814-c6c6-4933-963a-bcb650c10a3e_Economic%20Survey%202025-26.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2021,
  status: "active",
};

export default scheme;
