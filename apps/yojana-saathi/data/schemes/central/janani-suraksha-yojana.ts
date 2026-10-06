import { all, any, female, isTrue, labelled, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "janani-suraksha-yojana",
  name: { en: "Janani Suraksha Yojana", hi: "जननी सुरक्षा योजना" },
  aka: ["JSY"],
  shortDescription: {
    en: "Cash of ₹600 to ₹1,400 for mothers who give birth in a government or accredited hospital, paid at the hospital, to make safe delivery the norm.",
    hi: "सरकारी या मान्यता प्राप्त अस्पताल में प्रसव कराने वाली माताओं को ₹600 से ₹1,400 तक की नकद मदद, जो अस्पताल में ही दी जाती है, ताकि सुरक्षित प्रसव हो।",
  },
  level: "central",
  ministry: "health-family-welfare",
  categories: ["women-child", "health"],
  tags: ["pregnant women", "delivery", "institutional delivery", "asha", "maternity", "mother"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 600, period: "one-time", kind: "cash" },
  kundliHouse: "women-family",
  eligibility: all(
    female(),
    isTrue("pregnantOrLactating"),
    labelled(
      any(
        when("state", "in", ["uttar-pradesh", "uttarakhand", "bihar", "jharkhand", "madhya-pradesh", "chhattisgarh", "assam", "rajasthan", "odisha", "jammu-kashmir"]),
        isTrue("bpl"),
        when("caste", "in", ["sc", "st", "pvtg"]),
      ),
      {
        en: "You live in a low-performing state (all mothers qualify there), or you are BPL, SC or ST",
        hi: "आप कम प्रदर्शन वाले राज्य में रहती हैं (वहाँ सभी माताएँ पात्र हैं), या आप BPL, SC या ST हैं",
      },
    ),
  ),

  details: {
    en: [
      "Janani Suraksha Yojana pays mothers for giving birth in a hospital instead of at home, to cut deaths of mothers and newborns. It runs under the National Health Mission of the Ministry of Health and Family Welfare.",
      "The amount depends on your state and whether you live in a village or a town. States with low hospital-delivery rates (UP, Uttarakhand, Bihar, Jharkhand, MP, Chhattisgarh, Assam, Rajasthan, Odisha and J&K) are called low-performing states and pay more.",
      "Your local ASHA worker helps you register, get check-ups and reach the hospital, and she also gets a small incentive. The cash is meant to be given to you at the hospital or sent to your bank account soon after delivery.",
    ],
    hi: [
      "जननी सुरक्षा योजना घर के बजाय अस्पताल में प्रसव कराने पर माताओं को पैसे देती है, ताकि माँ और नवजात की मौतें कम हों। यह स्वास्थ्य एवं परिवार कल्याण मंत्रालय के राष्ट्रीय स्वास्थ्य मिशन के तहत चलती है।",
      "राशि आपके राज्य और गाँव या शहर में रहने पर निर्भर करती है। जिन राज्यों में अस्पताल में प्रसव कम होते थे (उत्तर प्रदेश, उत्तराखंड, बिहार, झारखंड, मध्य प्रदेश, छत्तीसगढ़, असम, राजस्थान, ओडिशा और जम्मू-कश्मीर), उन्हें कम प्रदर्शन वाले राज्य कहा जाता है और वहाँ ज़्यादा पैसा मिलता है।",
      "आपकी स्थानीय आशा कार्यकर्ता पंजीकरण, जाँच और अस्पताल पहुँचने में मदद करती है, और उसे भी थोड़ा प्रोत्साहन मिलता है। पैसा अस्पताल में या प्रसव के कुछ समय बाद आपके बैंक खाते में दिया जाता है।",
    ],
  },
  benefits: {
    en: [
      "Low-performing states: ₹1,400 in rural areas and ₹1,000 in urban areas.",
      "Other states: ₹700 in rural areas and ₹600 in urban areas.",
      "BPL women who deliver at home may get ₹500 per delivery.",
      "Free help from an ASHA worker for check-ups and getting to the hospital.",
    ],
    hi: [
      "कम प्रदर्शन वाले राज्य: गाँव में ₹1,400 और शहर में ₹1,000।",
      "बाकी राज्य: गाँव में ₹700 और शहर में ₹600।",
      "घर पर प्रसव कराने वाली BPL महिलाओं को प्रति प्रसव ₹500 मिल सकते हैं।",
      "जाँच और अस्पताल पहुँचने के लिए आशा कार्यकर्ता की मुफ़्त मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "In low-performing states: every pregnant woman who delivers in a government health facility.",
      "In other states: pregnant women from BPL, SC or ST families who deliver in a government health facility.",
      "In all states: BPL, SC or ST women who deliver in an accredited private hospital.",
    ],
    hi: [
      "कम प्रदर्शन वाले राज्यों में: सरकारी स्वास्थ्य केंद्र में प्रसव कराने वाली हर गर्भवती महिला।",
      "बाकी राज्यों में: BPL, SC या ST परिवार की गर्भवती महिलाएँ जो सरकारी स्वास्थ्य केंद्र में प्रसव कराती हैं।",
      "सभी राज्यों में: मान्यता प्राप्त निजी अस्पताल में प्रसव कराने वाली BPL, SC या ST महिलाएँ।",
    ],
  },
  exclusions: {
    en: [
      "In high-performing states, women who are not BPL, SC or ST do not get the cash.",
      "Deliveries in private hospitals that are not accredited under JSY are not covered.",
    ],
    hi: [
      "अधिक प्रदर्शन वाले राज्यों में जो महिलाएँ BPL, SC या ST नहीं हैं, उन्हें नकद राशि नहीं मिलती।",
      "JSY में मान्यता न रखने वाले निजी अस्पतालों में प्रसव पर लाभ नहीं मिलता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Register your pregnancy with your ASHA worker, Anganwadi or nearest government health centre and get your MCP card.",
        "Go for your antenatal check-ups and plan the delivery at a government or accredited hospital.",
        "After delivery, give your bank details and documents at the hospital to receive the JSY payment.",
      ],
      hi: [
        "आशा कार्यकर्ता, आंगनवाड़ी या नज़दीकी सरकारी स्वास्थ्य केंद्र में गर्भावस्था दर्ज कराएँ और MCP कार्ड लें।",
        "प्रसव से पहले की जाँचें कराएँ और सरकारी या मान्यता प्राप्त अस्पताल में प्रसव की योजना बनाएँ।",
        "प्रसव के बाद अस्पताल में बैंक विवरण और दस्तावेज़ दें ताकि JSY का पैसा मिल सके।",
      ],
    },
  },
  documents: {
    en: ["MCP (Mother and Child Protection) card / JSY card", "Aadhaar card", "Bank account details", "BPL ration card or caste certificate (where needed)", "Hospital discharge slip"],
    hi: ["MCP (जच्चा-बच्चा सुरक्षा) कार्ड / JSY कार्ड", "आधार कार्ड", "बैंक खाते का विवरण", "BPL राशन कार्ड या जाति प्रमाण पत्र (जहाँ ज़रूरी हो)", "अस्पताल की छुट्टी पर्ची"],
  },
  faqs: [
    {
      q: { en: "Is JSY only for the first child?", hi: "क्या JSY सिर्फ़ पहले बच्चे के लिए है?" },
      a: {
        en: "No. JSY does not limit the number of births. Check with your ASHA or hospital for any local rules.",
        hi: "नहीं। JSY में बच्चों की संख्या की कोई सीमा नहीं है। स्थानीय नियमों के लिए अपनी आशा या अस्पताल से पूछें।",
      },
    },
    {
      q: { en: "Is delivery itself free in government hospitals?", hi: "क्या सरकारी अस्पताल में प्रसव मुफ़्त होता है?" },
      a: {
        en: "Yes. Under a separate scheme (JSSK), delivery, medicines, tests, food and transport are free in government hospitals. JSY cash is on top of that.",
        hi: "हाँ। एक अलग योजना (JSSK) के तहत सरकारी अस्पताल में प्रसव, दवाएँ, जाँच, खाना और आने-जाने की सुविधा मुफ़्त है। JSY का पैसा इसके अलावा मिलता है।",
      },
    },
  ],

  officialUrl: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309",
  sources: [
    "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309",
    "https://vikaspedia.in/health/nrhm/national-health-programmes-1/janani-suraksha-yojana",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2005,
  status: "active",
};

export default scheme;
