import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "lado-protsahan-yojana",
  overlapGroup: "daughter-savings",
  name: { en: "Lado Protsahan Yojana", hi: "लाडो प्रोत्साहन योजना" },
  aka: ["Lado Yojana", "Laado Protsahan", "Rajshri Yojana"],
  shortDescription: {
    en: "A daughter born in a government or approved hospital in Rajasthan gets ₹1.5 lakh in seven instalments, from birth until she graduates at 21.",
    hi: "राजस्थान में सरकारी या मान्य अस्पताल में जन्मी बेटी को जन्म से लेकर 21 साल पर स्नातक होने तक सात किस्तों में ₹1.5 लाख मिलते हैं।",
  },
  level: "state",
  state: "rajasthan",
  department: {
    en: "Women and Child Development Department (Directorate of Women Empowerment), Government of Rajasthan",
    hi: "महिला एवं बाल विकास विभाग (महिला अधिकारिता निदेशालय), राजस्थान सरकार",
  },
  categories: ["women-child", "education"],
  tags: ["girl child", "daughter", "lado", "rajshri", "savings bond", "dbt", "rajasthan"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 150_000, period: "one-time", kind: "cash" },
  kundliHouse: "daughter",
  eligibility: all(
    residentOf("rajasthan"),
    labelled(isTrue("daughterUnder10"), {
      en: "You have a daughter born on or after 1 August 2024 in a government or JSY-approved hospital",
      hi: "आपकी बेटी 1 अगस्त 2024 या उसके बाद सरकारी या JSY से मान्य अस्पताल में जन्मी हो",
    }),
  ),

  details: {
    en: [
      "Lado Protsahan Yojana is Rajasthan's scheme for girl children. It has applied across the state since 1 August 2024. In March 2025 the total benefit was raised from ₹1 lakh to ₹1.5 lakh.",
      "When a girl is born, the family gets a 'sankalp patra' (commitment letter) for ₹1.5 lakh. The money is then paid in seven instalments by DBT as she grows: at birth, after vaccination, and when she joins Classes 1, 6, 10 and 12, with the largest amount after graduation at age 21.",
      "The older Rajshri Yojana has been merged into this scheme. Girls who were getting Rajshri instalments get their remaining instalments under Lado Protsahan if they qualify.",
    ],
    hi: [
      "लाडो प्रोत्साहन योजना राजस्थान की बेटियों के लिए योजना है। यह 1 अगस्त 2024 से पूरे राज्य में लागू है। मार्च 2025 में कुल राशि ₹1 लाख से बढ़ाकर ₹1.5 लाख की गई।",
      "बेटी के जन्म पर परिवार को ₹1.5 लाख का 'संकल्प पत्र' दिया जाता है। फिर यह पैसा बेटी के बड़े होने के साथ सात किस्तों में DBT से मिलता है: जन्म पर, टीकाकरण के बाद, और कक्षा 1, 6, 10 और 12 में दाख़िले पर, और सबसे बड़ी किस्त 21 साल पर स्नातक होने के बाद।",
      "पुरानी राजश्री योजना को इसी में मिला दिया गया है। जिन बेटियों को राजश्री की किस्तें मिल रही थीं, उन्हें पात्र होने पर बाक़ी किस्तें लाडो प्रोत्साहन योजना से मिलेंगी।",
    ],
  },
  benefits: {
    en: [
      "₹2,500 on the girl's birth in an eligible hospital.",
      "₹2,500 when all vaccinations due by 9–12 months are complete.",
      "₹4,000 on admission to Class 1 and ₹5,000 on admission to Class 6.",
      "₹11,000 on admission to Class 10 and ₹25,000 on admission to Class 12.",
      "₹1,00,000 after she passes graduation and turns 21, paid into her own bank account.",
    ],
    hi: [
      "मान्य अस्पताल में बेटी के जन्म पर ₹2,500।",
      "9–12 महीने तक के सभी टीके लगने पर ₹2,500।",
      "कक्षा 1 में दाख़िले पर ₹4,000 और कक्षा 6 में दाख़िले पर ₹5,000।",
      "कक्षा 10 में दाख़िले पर ₹11,000 और कक्षा 12 में दाख़िले पर ₹25,000।",
      "स्नातक पास करने और 21 साल की होने पर ₹1,00,000, सीधे बेटी के अपने बैंक खाते में।",
    ],
  },
  eligibilityText: {
    en: [
      "The mother lives in Rajasthan and has Aadhaar and a Jan Aadhaar card.",
      "The girl was born on or after 1 August 2024 in a government hospital or a private hospital approved under Janani Suraksha Yojana (JSY).",
      "For the school instalments, she must be studying in a government school or a state-recognised private school.",
      "For the last instalment, she must have graduated from a recognised institution and be 21 years old.",
    ],
    hi: [
      "माँ राजस्थान की निवासी हो और उसके पास आधार और जन आधार कार्ड हो।",
      "बेटी का जन्म 1 अगस्त 2024 या उसके बाद सरकारी अस्पताल या जननी सुरक्षा योजना (JSY) से मान्य निजी अस्पताल में हुआ हो।",
      "स्कूल वाली किस्तों के लिए बेटी सरकारी स्कूल या राज्य से मान्यता प्राप्त निजी स्कूल में पढ़ रही हो।",
      "आख़िरी किस्त के लिए बेटी ने मान्य संस्थान से स्नातक पास किया हो और उसकी उम्र 21 साल हो।",
    ],
  },
  exclusions: {
    en: [
      "Girls born at home or in a private hospital that is not approved under JSY.",
      "School instalments are not paid for girls in unrecognised schools.",
    ],
    hi: [
      "घर पर या JSY से मान्य न होने वाले निजी अस्पताल में जन्मी बेटियाँ।",
      "ग़ैर-मान्यता प्राप्त स्कूलों में पढ़ने वाली बेटियों को स्कूल वाली किस्तें नहीं मिलतीं।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "During pregnancy check-ups (ANC), give your Aadhaar, Jan Aadhaar and bank details to the health worker. They are entered on the PCTS portal.",
        "Deliver in a government or JSY-approved hospital. The first instalment is paid after the birth is recorded.",
        "Later instalments are processed through the health department (vaccination), the school and the higher education department, so keep the girl's records and bank details up to date.",
      ],
      hi: [
        "गर्भावस्था की जाँच (ANC) के समय स्वास्थ्य कर्मी को अपना आधार, जन आधार और बैंक विवरण दें। इन्हें PCTS पोर्टल पर दर्ज किया जाता है।",
        "प्रसव सरकारी या JSY से मान्य अस्पताल में कराएँ। जन्म दर्ज होने के बाद पहली किस्त मिलती है।",
        "आगे की किस्तें स्वास्थ्य विभाग (टीकाकरण), स्कूल और उच्च शिक्षा विभाग के ज़रिए आती हैं, इसलिए बेटी के रिकॉर्ड और बैंक विवरण सही रखें।",
      ],
    },
  },
  documents: {
    en: ["Mother's Aadhaar card", "Jan Aadhaar card", "Bank account details of the mother (or father/guardian)", "Birth and vaccination record of the girl", "School admission record for school instalments"],
    hi: ["माँ का आधार कार्ड", "जन आधार कार्ड", "माँ (या पिता/अभिभावक) के बैंक खाते का विवरण", "बेटी का जन्म और टीकाकरण रिकॉर्ड", "स्कूल वाली किस्तों के लिए दाख़िले का रिकॉर्ड"],
  },
  faqs: [
    {
      q: { en: "Is there a limit on the number of daughters?", hi: "क्या बेटियों की संख्या की कोई सीमा है?" },
      a: {
        en: "The guidelines say there is no limit on the number of children for the third and later instalments.",
        hi: "दिशा-निर्देशों के अनुसार तीसरी और आगे की किस्तों के लिए संतान की संख्या की कोई सीमा नहीं है।",
      },
    },
    {
      q: { en: "We missed one instalment. Do we lose the rest?", hi: "एक किस्त छूट गई, तो क्या बाक़ी भी नहीं मिलेंगी?" },
      a: {
        en: "No. After the first two instalments, if one stage is missed, the girl can still get the next instalment when she meets its condition.",
        hi: "नहीं। पहली दो किस्तें मिलने के बाद अगर कोई चरण छूट जाए, तब भी शर्त पूरी करने पर बेटी को अगली किस्त मिल सकती है।",
      },
    },
  ],

  officialUrl: "https://wcd.rajasthan.gov.in/",
  sources: [
    "https://ojspm.rajasthan.gov.in/Public/lpy.pdf",
    "https://wcd.rajasthan.gov.in/",
    "https://www.citizennest.com/scheme/laado-protsahan-yojana-apply-online-rajasthan",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
