import { all, incomeUpTo, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "pragyan-bharati-fee-waiver",
  name: { en: "Pragyan Bharati Fee Waiver Scheme", hi: "प्रज्ञान भारती फ़ीस माफ़ी योजना" },
  aka: ["Pragyan Bharati", "Free admission Assam", "Assam fee waiver"],
  shortDescription: {
    en: "Students in Assam whose parents earn under ₹4 lakh a year pay no admission or tuition fees for HS, BA/BSc/BCom and MA/MSc/MCom at government and provincialised colleges.",
    hi: "असम में जिन छात्रों के माता-पिता की सालाना आय ₹4 लाख से कम है, उन्हें सरकारी और प्रांतीयकृत कॉलेजों में HS, BA/BSc/BCom और MA/MSc/MCom में दाखिला और ट्यूशन फ़ीस नहीं देनी पड़ती।",
  },
  level: "state",
  state: "assam",
  department: { en: "Higher Education Department, Government of Assam", hi: "उच्च शिक्षा विभाग, असम सरकार" },
  categories: ["education"],
  tags: ["free admission", "fee waiver", "pragyan bharati", "college fees", "higher secondary", "assam"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("assam"), isTrue("student"), incomeUpTo(400_000)),

  details: {
    en: [
      "Under Pragyan Bharati, the Assam government waives the admission fee, tuition fee and other regular fees for students from families with modest incomes. The college does not charge you; the government pays the college back.",
      "The 2026-27 order covers new and continuing students in Higher Secondary, BA/BSc/BCom (including the 4th year) and MA/MSc/MCom at state universities, government, model and provincialised colleges.",
      "Professional, vocational and self-financing courses, private colleges and central universities are not covered.",
    ],
    hi: [
      "प्रज्ञान भारती के तहत असम सरकार कम आय वाले परिवारों के छात्रों की दाखिला फ़ीस, ट्यूशन फ़ीस और बाकी नियमित फ़ीस माफ़ करती है। कॉलेज आपसे पैसा नहीं लेता; सरकार कॉलेज को भुगतान करती है।",
      "2026-27 का आदेश राज्य विश्वविद्यालयों, सरकारी, मॉडल और प्रांतीयकृत कॉलेजों में हायर सेकेंडरी, BA/BSc/BCom (चौथे साल सहित) और MA/MSc/MCom के नए और पुराने छात्रों पर लागू है।",
      "प्रोफ़ेशनल, वोकेशनल और सेल्फ़-फ़ाइनेंसिंग कोर्स, प्राइवेट कॉलेज और केंद्रीय विश्वविद्यालय इसमें शामिल नहीं हैं।",
    ],
  },
  benefits: {
    en: [
      "No admission fee, tuition fee or other normal course fees at the time of admission.",
      "Continues each year or semester if you keep meeting the conditions.",
      "Being admitted under the fee waiver also makes boys eligible to apply for Nijut Babu.",
    ],
    hi: [
      "दाखिले के समय दाखिला फ़ीस, ट्यूशन फ़ीस या कोर्स की बाकी सामान्य फ़ीस नहीं।",
      "शर्तें पूरी करते रहने पर हर साल या सेमेस्टर में जारी रहती है।",
      "फ़ीस माफ़ी में दाखिला होने पर लड़के निजुत बाबू के लिए भी आवेदन कर सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "Permanent resident of Assam with Assam domicile.",
      "Parents' annual income from all sources is below ₹4 lakh.",
      "Neither parent is a central or state government, semi-government or PSU employee (parents in Grade IV/MTS posts are allowed).",
      "Taking admission in HS, BA/BSc/BCom or MA/MSc/MCom at a covered institution.",
      "To continue, at least 70% attendance, no backlog, and having sat the previous year's final exam.",
    ],
    hi: [
      "असम का स्थायी निवासी हो और असम का अधिवास हो।",
      "माता-पिता की सभी स्रोतों से सालाना आय ₹4 लाख से कम हो।",
      "माता-पिता में से कोई भी केंद्र या राज्य सरकार, अर्ध-सरकारी या सरकारी उपक्रम का कर्मचारी न हो (ग्रेड IV/MTS पद वाले माता-पिता चल सकते हैं)।",
      "शामिल संस्थान में HS, BA/BSc/BCom या MA/MSc/MCom में दाखिला ले रहा हो।",
      "जारी रखने के लिए कम से कम 70% हाज़िरी, कोई बैकलॉग नहीं, और पिछले साल की फ़ाइनल परीक्षा दी हो।",
    ],
  },
  exclusions: {
    en: [
      "Professional, vocational and self-financing courses.",
      "Private colleges, private universities and central universities in Assam.",
      "Students whose parent is a regular government or PSU employee above Grade IV.",
      "Students with backlogs, or who did not sit the previous final exam.",
      "False documents or declarations: the waiver is cancelled and the fee is recovered.",
    ],
    hi: [
      "प्रोफ़ेशनल, वोकेशनल और सेल्फ़-फ़ाइनेंसिंग कोर्स।",
      "असम के प्राइवेट कॉलेज, प्राइवेट विश्वविद्यालय और केंद्रीय विश्वविद्यालय।",
      "जिनके माता-पिता ग्रेड IV से ऊपर के नियमित सरकारी या सरकारी उपक्रम कर्मचारी हों।",
      "जिनका बैकलॉग हो या जिन्होंने पिछली फ़ाइनल परीक्षा न दी हो।",
      "झूठे दस्तावेज़ या घोषणा पर माफ़ी रद्द होगी और फ़ीस वसूली जाएगी।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Apply for admission through your college's or the state's online admission portal and choose the fee waiver category.",
        "Upload your Assam ration card (or a Circle Officer's income certificate if you have no ration card) and give your Aadhaar number.",
        "Submit the declaration that your parents are not government employees.",
      ],
      hi: [
        "अपने कॉलेज या राज्य के ऑनलाइन दाखिला पोर्टल से आवेदन करें और फ़ीस माफ़ी श्रेणी चुनें।",
        "असम का राशन कार्ड अपलोड करें (राशन कार्ड न हो तो सर्कल ऑफ़िसर का आय प्रमाण पत्र) और आधार नंबर दें।",
        "यह घोषणा जमा करें कि माता-पिता सरकारी कर्मचारी नहीं हैं।",
      ],
    },
    offline: {
      en: [
        "At the college admission desk, ask for admission under the fee waiver.",
        "Show your documents; the admission committee checks them before granting the waiver.",
        "Your marksheet gets a stamp showing you received free admission.",
      ],
      hi: [
        "कॉलेज के दाखिला काउंटर पर फ़ीस माफ़ी में दाखिला माँगें।",
        "अपने दस्तावेज़ दिखाएँ; दाखिला समिति जाँच के बाद माफ़ी देगी।",
        "आपकी मार्कशीट पर मुफ़्त दाखिले की मुहर लगेगी।",
      ],
    },
  },
  documents: {
    en: [
      "Ration card issued in Assam (main proof of income)",
      "Income certificate from the Revenue Circle Officer, only if there is no ration card",
      "Aadhaar number with signed consent",
      "Proof of Assam domicile",
      "Declaration that neither parent is a government employee",
      "Original marksheet of the last exam",
    ],
    hi: [
      "असम में जारी राशन कार्ड (आय का मुख्य सबूत)",
      "राशन कार्ड न हो तभी राजस्व सर्कल ऑफ़िसर का आय प्रमाण पत्र",
      "हस्ताक्षरित सहमति के साथ आधार नंबर",
      "असम के अधिवास का सबूत",
      "माता-पिता के सरकारी कर्मचारी न होने की घोषणा",
      "पिछली परीक्षा की मूल मार्कशीट",
    ],
  },
  faqs: [
    {
      q: { en: "Will the college return the fee if I already paid?", hi: "अगर मैंने फ़ीस भर दी है तो क्या कॉलेज लौटाएगा?" },
      a: {
        en: "The waiver is meant to be given at admission. If you paid by mistake, ask your college office; they decide based on the government order.",
        hi: "माफ़ी दाखिले के समय ही मिलती है। गलती से फ़ीस भर दी हो तो कॉलेज कार्यालय से पूछें; वे सरकारी आदेश के हिसाब से फ़ैसला करेंगे।",
      },
    },
    {
      q: { en: "I didn't have an income certificate at entry. Can I still get it later?", hi: "दाखिले के समय आय प्रमाण पत्र नहीं था। क्या बाद में मिल सकती है?" },
      a: {
        en: "Yes. Continuing students who show a valid income certificate at a later semester admission can be considered after verification.",
        hi: "हाँ। बाद के सेमेस्टर के दाखिले में मान्य आय प्रमाण पत्र दिखाने पर जाँच के बाद विचार किया जा सकता है।",
      },
    },
  ],

  officialUrl: "https://directorateofhighereducation.assam.gov.in/documents-detail/executive-order-regarding-scheme-for-fee-waiver-of-admission-fees-tuition-fees-etc",
  sources: [
    "https://directorateofhighereducation.assam.gov.in/documents-detail/executive-order-regarding-scheme-for-fee-waiver-of-admission-fees-tuition-fees-etc",
    "https://directorateofhighereducation.assam.gov.in/documents/notifications-2",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2017,
  status: "active",
};

export default scheme;
