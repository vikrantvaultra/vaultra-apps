import { all, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "maharashtra-ex-servicemen-children-education-concession",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Education Concession for Children of Ex-Servicemen", hi: "पूर्व सैनिकों के बच्चों के लिए शिक्षा शुल्क छूट" },
  shortDescription: {
    en: "Children, wives and widows of ex-servicemen studying in government or aided colleges in Maharashtra get admission, semester, library and laboratory fees fully waived.",
    hi: "महाराष्ट्र के सरकारी या अनुदानित कॉलेजों में पढ़ने वाले पूर्व सैनिकों के बच्चों, पत्नियों और विधवाओं की प्रवेश, सेमेस्टर, लाइब्रेरी और लैब फ़ीस पूरी माफ़ होती है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Directorate of Higher Education, Higher and Technical Education Department, Government of Maharashtra", hi: "उच्च शिक्षा निदेशालय, उच्च एवं तकनीकी शिक्षा विभाग, महाराष्ट्र सरकार" },
  categories: ["education"],
  tags: ["ex-servicemen", "fee concession", "defence families", "college fees", "mahadbt"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
  ),

  details: {
    en: ["This concession helps families of former soldiers by waiving the main college fees for their children, wives and widows.", "It applies only in government and aided colleges in Maharashtra. Eligibility is certified by the Collector and the District Sainik Welfare office."],
    hi: ["यह छूट पूर्व सैनिकों के परिवारों की मदद करती है, जिसमें उनके बच्चों, पत्नियों और विधवाओं की कॉलेज की मुख्य फ़ीस माफ़ होती है।", "यह सिर्फ़ महाराष्ट्र के सरकारी और अनुदानित कॉलेजों में लागू है। पात्रता का प्रमाण पत्र कलेक्टर और ज़िला सैनिक कल्याण कार्यालय देते हैं।"],
  },
  benefits: {
    en: ["100% of admission fee.", "100% of semester fee.", "100% of library and laboratory fees."],
    hi: ["प्रवेश फ़ीस का 100%।", "सेमेस्टर फ़ीस का 100%।", "लाइब्रेरी और लैब फ़ीस का 100%।"],
  },
  eligibilityText: {
    en: ["Son, daughter, wife or widow of an ex-serviceman.", "Studying in a government or aided college in Maharashtra.", "Maharashtra domicile."],
    hi: ["पूर्व सैनिक का बेटा, बेटी, पत्नी या विधवा।", "महाराष्ट्र के सरकारी या अनुदानित कॉलेज में पढ़ रहा/रही हो।", "महाराष्ट्र का अधिवास।"],
  },
  documents: {
    en: ["Eligibility certificate from the Collector and the District Sainik Welfare office", "Admission receipt", "Domicile certificate"],
    hi: ["कलेक्टर और ज़िला सैनिक कल्याण कार्यालय का पात्रता प्रमाण पत्र", "दाख़िला रसीद", "अधिवास प्रमाण पत्र"],
  },
  applicationProcess: {
    online: { en: ["Register on mahadbt.maharashtra.gov.in as a new applicant using Aadhaar OTP or biometric verification, then complete your profile and link an Aadhaar-seeded bank account.", "Under 'All Schemes', choose 'Education Concession to the Children of Ex-Servicemen', upload the documents and submit.", "Your school, college or institute checks the application before the department approves it. Renew it every year from the same login."], hi: ["mahadbt.maharashtra.gov.in पर आधार OTP या बायोमेट्रिक से नए आवेदक के रूप में रजिस्टर करें, फिर प्रोफ़ाइल पूरी करें और आधार से जुड़ा बैंक खाता जोड़ें।", "'All Schemes' में 'Education Concession to the Children of Ex-Servicemen' चुनें, दस्तावेज़ अपलोड करें और जमा करें।", "पहले आपका स्कूल, कॉलेज या संस्थान आवेदन जाँचता है, फिर विभाग मंज़ूरी देता है। हर साल उसी लॉगिन से नवीनीकरण करें।"] },
  },

  officialUrl: "https://mahadbt.maharashtra.gov.in/",
  sources: ["https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A7909EC2FB46546FC0ADC6852AEB8D3556C79D437D47E3A55"],
  lastVerified: "2026-10-06",
  launchedYear: 1965,
  status: "active",
};

export default scheme;
