import { all, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "nagaland-cmhis",
  overlapGroup: "health-cover",
  name: { en: "Chief Minister's Health Insurance Scheme (CMHIS), Nagaland", hi: "मुख्यमंत्री स्वास्थ्य बीमा योजना (CMHIS), नागालैंड" },
  aka: ["CMHIS", "AB PM-JAY CMHIS", "Nagaland health insurance", "CMHIS General", "CMHIS EP"],
  shortDescription: {
    en: "Nagaland residents not covered by PM-JAY get cashless hospital treatment up to ₹5 lakh per family a year; state government employees and pensioners get up to ₹20 lakh.",
    hi: "PM-JAY में न आने वाले नागालैंड के निवासियों को हर परिवार को साल में ₹5 लाख तक का कैशलेस अस्पताल इलाज मिलता है; राज्य सरकार के कर्मचारियों और पेंशनभोगियों को ₹20 लाख तक।",
  },
  level: "state",
  state: "nagaland",
  department: {
    en: "Health and Family Welfare Department (Nagaland Health Protection Society), Government of Nagaland",
    hi: "स्वास्थ्य एवं परिवार कल्याण विभाग (नागालैंड हेल्थ प्रोटेक्शन सोसाइटी), नागालैंड सरकार",
  },
  categories: ["health", "pension-insurance"],
  tags: ["health insurance", "cashless treatment", "hospital", "cmhis", "government employee", "nagaland"],
  benefitType: "insurance",
  isDBT: false,
  value: { amount: 500000, period: "yearly", kind: "cover" },
  kundliHouse: "health",
  eligibility: all(residentOf("nagaland")),

  details: {
    en: [
      "The Chief Minister's Health Insurance Scheme (CMHIS) is Nagaland's flagship health insurance scheme. It works together with Ayushman Bharat PM-JAY and covers the people PM-JAY leaves out: indigenous inhabitants and permanent residents of Nagaland, and state government employees and pensioners.",
      "It has two parts. CMHIS General Category gives up to ₹5 lakh per family a year for cashless treatment in empanelled hospitals across India. CMHIS Employees & Pensioners (EP) gives up to ₹20 lakh per family a year, with the ward type based on pay level, and reimbursement for emergency treatment in hospitals that are not empanelled.",
      "The scheme is run by the Nagaland Health Protection Society. By October 2026 over 2 lakh people had cards under CMHIS (EP) and about 25,000 under CMHIS (General).",
    ],
    hi: [
      "मुख्यमंत्री स्वास्थ्य बीमा योजना (CMHIS) नागालैंड की मुख्य स्वास्थ्य बीमा योजना है। यह आयुष्मान भारत PM-JAY के साथ मिलकर चलती है और उन लोगों को कवर करती है जो PM-JAY से बाहर हैं: नागालैंड के मूल निवासी और स्थायी निवासी, और राज्य सरकार के कर्मचारी और पेंशनभोगी।",
      "इसके दो हिस्से हैं। CMHIS सामान्य श्रेणी में पूरे भारत के सूचीबद्ध अस्पतालों में हर परिवार को साल में ₹5 लाख तक का कैशलेस इलाज मिलता है। CMHIS कर्मचारी और पेंशनभोगी (EP) में हर परिवार को साल में ₹20 लाख तक मिलता है, वेतन स्तर के हिसाब से वार्ड मिलता है, और सूचीबद्ध न होने वाले अस्पताल में आपात इलाज का पैसा वापस मिलता है।",
      "यह योजना नागालैंड हेल्थ प्रोटेक्शन सोसाइटी चलाती है। अक्टूबर 2026 तक CMHIS (EP) में 2 लाख से ज़्यादा और CMHIS (सामान्य) में करीब 25,000 लोगों के कार्ड बन चुके थे।",
    ],
  },
  benefits: {
    en: [
      "General Category: cashless treatment up to ₹5 lakh per family per year, in general wards of empanelled hospitals across India.",
      "Employees & Pensioners: cashless treatment up to ₹20 lakh per family per year.",
      "Covers hospital stays and day-care procedures such as surgery, dialysis and chemotherapy, at fixed package rates.",
      "Employees and pensioners can claim reimbursement for emergency treatment in non-empanelled hospitals.",
    ],
    hi: [
      "सामान्य श्रेणी: पूरे भारत के सूचीबद्ध अस्पतालों के जनरल वार्ड में हर परिवार को साल में ₹5 लाख तक का कैशलेस इलाज।",
      "कर्मचारी और पेंशनभोगी: हर परिवार को साल में ₹20 लाख तक का कैशलेस इलाज।",
      "अस्पताल में भर्ती और डे-केयर इलाज, जैसे ऑपरेशन, डायलिसिस और कीमोथेरेपी, तय पैकेज दरों पर।",
      "कर्मचारी और पेंशनभोगी सूचीबद्ध न होने वाले अस्पताल में आपात इलाज का पैसा वापस माँग सकते हैं।",
    ],
  },
  eligibilityText: {
    en: [
      "General Category: indigenous inhabitants or permanent residents of Nagaland who are not covered by PM-JAY or another government health scheme.",
      "General Category also covers contractual, ad-hoc and fixed-pay state government staff with a valid PIMS code, and accredited journalists of Nagaland.",
      "Employees & Pensioners: regular state government employees, serving legislators, public sector employees, pensioners and ex-legislators, with their dependent family members.",
      "For the General Category, a household means people living together and sharing one kitchen.",
    ],
    hi: [
      "सामान्य श्रेणी: नागालैंड के मूल निवासी या स्थायी निवासी, जो PM-JAY या किसी दूसरी सरकारी स्वास्थ्य योजना में नहीं आते।",
      "सामान्य श्रेणी में वैध PIMS कोड वाले राज्य सरकार के ठेका, एड-हॉक और फ़िक्स्ड-पे कर्मचारी, और नागालैंड के मान्यता प्राप्त पत्रकार भी आते हैं।",
      "कर्मचारी और पेंशनभोगी: राज्य सरकार के नियमित कर्मचारी, मौजूदा विधायक, सार्वजनिक उपक्रमों के कर्मचारी, पेंशनभोगी और पूर्व विधायक, अपने आश्रित परिवार के साथ।",
      "सामान्य श्रेणी में परिवार का मतलब है साथ रहने वाले और एक ही रसोई साझा करने वाले लोग।",
    ],
  },
  exclusions: {
    en: [
      "Families already covered by PM-JAY use their Ayushman card instead of the CMHIS General Category.",
      "People who are neither indigenous inhabitants nor permanent residents of Nagaland (unless they are state employees or pensioners).",
      "Registering does not by itself make you eligible: every registration is verified.",
    ],
    hi: [
      "जो परिवार पहले से PM-JAY में हैं, वे CMHIS सामान्य श्रेणी की जगह अपने आयुष्मान कार्ड का इस्तेमाल करते हैं।",
      "जो न नागालैंड के मूल निवासी हैं न स्थायी निवासी (जब तक वे राज्य कर्मचारी या पेंशनभोगी न हों)।",
      "सिर्फ़ पंजीकरण से पात्रता नहीं मिलती: हर पंजीकरण की जाँच होती है।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Open cmhis.nagaland.gov.in and use the Register option to create an account with your mobile number.",
        "Follow the steps for your category (General, or Employees & Pensioners) and keep your certificate, Aadhaar, PIMS code or PPO ready.",
        "If you cannot finish online, complete the registration at a registration centre (see the offline steps).",
      ],
      hi: [
        "cmhis.nagaland.gov.in खोलें और Register विकल्प से अपने मोबाइल नंबर पर खाता बनाएँ।",
        "अपनी श्रेणी (सामान्य, या कर्मचारी और पेंशनभोगी) के चरण पूरे करें और प्रमाण पत्र, आधार, PIMS कोड या PPO तैयार रखें।",
        "अगर ऑनलाइन पूरा न हो पाए, तो किसी पंजीकरण केंद्र पर पंजीकरण पूरा करें (नीचे ऑफ़लाइन चरण देखें)।",
      ],
    },
    offline: {
      en: [
        "Go to an empanelled PHC or CHC, a designated private hospital, or an enrolment camp (pensioners can also go to the district or sub-divisional treasury office).",
        "Submit your documents; staff register you and you receive the Household ID by SMS after approval.",
      ],
      hi: [
        "किसी सूचीबद्ध PHC या CHC, तय निजी अस्पताल या नामांकन शिविर में जाएँ (पेंशनभोगी ज़िला या उप-मंडल कोषागार कार्यालय भी जा सकते हैं)।",
        "अपने दस्तावेज़ जमा करें; कर्मचारी आपका पंजीकरण करते हैं और मंज़ूरी के बाद SMS से घरेलू ID मिलती है।",
      ],
    },
  },
  documents: {
    en: [
      "Indigenous Inhabitant Certificate or Permanent Resident Certificate issued after 2016 (General Category)",
      "Aadhaar card and a working mobile number",
      "PIMS code (employees) or PPO book (pensioners)",
      "Proof for dependents, such as Aadhaar, birth certificate or disability certificate (Employees & Pensioners)",
    ],
    hi: [
      "2016 के बाद जारी मूल निवासी प्रमाण पत्र या स्थायी निवासी प्रमाण पत्र (सामान्य श्रेणी)",
      "आधार कार्ड और चालू मोबाइल नंबर",
      "PIMS कोड (कर्मचारी) या PPO बुक (पेंशनभोगी)",
      "आश्रितों का सबूत, जैसे आधार, जन्म प्रमाण पत्र या दिव्यांगता प्रमाण पत्र (कर्मचारी और पेंशनभोगी)",
    ],
  },
  faqs: [
    {
      q: { en: "I have an Ayushman (PM-JAY) card. Can I also join CMHIS General?", hi: "मेरे पास आयुष्मान (PM-JAY) कार्ड है। क्या मैं CMHIS सामान्य में भी जुड़ सकता हूँ?" },
      a: {
        en: "No. CMHIS General Category is for residents who are not covered by PM-JAY. Your PM-JAY card already gives ₹5 lakh a year in the same hospital network.",
        hi: "नहीं। CMHIS सामान्य श्रेणी उन निवासियों के लिए है जो PM-JAY में नहीं आते। आपका PM-JAY कार्ड पहले से उसी अस्पताल नेटवर्क में साल में ₹5 लाख देता है।",
      },
    },
    {
      q: { en: "Can I use the card outside Nagaland?", hi: "क्या कार्ड नागालैंड से बाहर चलता है?" },
      a: {
        en: "Yes. Treatment is available in empanelled hospitals across India; check the hospital list on the CMHIS portal before you go.",
        hi: "हाँ। पूरे भारत के सूचीबद्ध अस्पतालों में इलाज मिलता है; जाने से पहले CMHIS पोर्टल पर अस्पतालों की सूची देख लें।",
      },
    },
    {
      q: { en: "Whom do I contact for help?", hi: "मदद के लिए किससे संपर्क करें?" },
      a: {
        en: "Call the toll-free helpline 1800 202 3380 or email support-nhps@cmhis.nagaland.gov.in.",
        hi: "टोल-फ़्री हेल्पलाइन 1800 202 3380 पर फ़ोन करें या support-nhps@cmhis.nagaland.gov.in पर ईमेल करें।",
      },
    },
  ],

  officialUrl: "https://cmhis.nagaland.gov.in/",
  sources: [
    "https://cmhis.nagaland.gov.in/pages/cmhis",
    "https://cmhis.nagaland.gov.in/",
    "https://cmhis.nagaland.gov.in/storage/pageFiles/15.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2022,
  status: "active",
};

export default scheme;
