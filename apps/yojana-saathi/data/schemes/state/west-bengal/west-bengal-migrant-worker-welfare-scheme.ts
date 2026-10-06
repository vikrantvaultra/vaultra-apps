import { all, ageBetween, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "west-bengal-migrant-worker-welfare-scheme",
  tier: "compact",
  name: { en: "West Bengal Migrant Worker Welfare Scheme", hi: "पश्चिम बंगाल प्रवासी श्रमिक कल्याण योजना" },
  aka: ["Karmasathi Parijayee Shramik", "migrant worker scheme"],
  shortDescription: {
    en: "Free cover for West Bengal workers aged 14 to 60 who work in other states or abroad: up to ₹2 lakh to the family on death and up to ₹1 lakh for disability.",
    hi: "दूसरे राज्यों या विदेश में काम करने वाले पश्चिम बंगाल के 14 से 60 साल के मज़दूरों के लिए मुफ़्त सुरक्षा: मृत्यु पर परिवार को ₹2 लाख तक और दिव्यांगता पर ₹1 लाख तक।",
  },
  level: "state",
  state: "west-bengal",
  department: { en: "Labour Department, Government of West Bengal", hi: "श्रम विभाग, पश्चिम बंगाल सरकार" },
  categories: ["social-welfare", "pension-insurance"],
  tags: ["migrant worker", "accident", "death benefit", "labour", "parijayee shramik", "west bengal"],
  benefitType: "composite",
  isDBT: false,
  ageRange: { min: 14, max: 60 },
  kundliHouse: "insurance",
  eligibility: all(residentOf("west-bengal"), ...ageBetween(14, 60)),

  details: {
    en: [
      "This scheme protects workers from West Bengal who go to other states, union territories or abroad for work. Workers register on the state's Karmasathi Parijayee Shramik portal and get a Migrant Worker ID (MWIN).",
      "If a registered worker dies or is disabled, the family can claim financial help online. There is extra help to bring the body home if the death happens outside the state.",
    ],
    hi: [
      "यह योजना पश्चिम बंगाल के उन मज़दूरों की सुरक्षा करती है जो काम के लिए दूसरे राज्यों, केंद्र शासित प्रदेशों या विदेश जाते हैं। मज़दूर राज्य के कर्मसाथी परिजायी श्रमिक पोर्टल पर पंजीकरण करके प्रवासी श्रमिक ID (MWIN) पाते हैं।",
      "पंजीकृत मज़दूर की मृत्यु या दिव्यांगता होने पर परिवार ऑनलाइन मदद का दावा कर सकता है। राज्य के बाहर मृत्यु होने पर शव घर लाने के लिए अलग मदद मिलती है।",
    ],
  },
  benefits: {
    en: [
      "₹50,000 to the nominee on natural death and ₹2 lakh on accidental death.",
      "₹25,000 to bring the body home if death happens outside the state.",
      "₹50,000 to ₹1 lakh for disability.",
      "A general benefit of ₹3,000.",
    ],
    hi: [
      "सामान्य मृत्यु पर नॉमिनी को ₹50,000 और दुर्घटना में मृत्यु पर ₹2 लाख।",
      "राज्य के बाहर मृत्यु होने पर शव घर लाने के लिए ₹25,000।",
      "दिव्यांगता पर ₹50,000 से ₹1 लाख तक।",
      "₹3,000 की सामान्य सहायता।",
    ],
  },
  eligibilityText: {
    en: [
      "Resident of West Bengal aged 14 to 60.",
      "Works, or is likely to work, outside West Bengal in another state, union territory or country.",
    ],
    hi: [
      "पश्चिम बंगाल का निवासी, उम्र 14 से 60 साल।",
      "पश्चिम बंगाल के बाहर किसी दूसरे राज्य, केंद्र शासित प्रदेश या देश में काम करता हो या करने वाला हो।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "Log in to the Karmasathi Parijayee Shramik portal and register with your mobile number and OTP.",
        "Fill in your personal, address and job details, upload documents and submit to get your MWIN.",
        "To claim a benefit, log in again, fill in the claim, upload supporting papers and submit.",
      ],
      hi: [
        "कर्मसाथी परिजायी श्रमिक पोर्टल पर मोबाइल नंबर और OTP से पंजीकरण करें।",
        "अपनी निजी जानकारी, पता और काम का ब्योरा भरें, दस्तावेज़ अपलोड करें और MWIN पाने के लिए जमा करें।",
        "लाभ का दावा करने के लिए फिर लॉग इन करें, दावा भरें, ज़रूरी काग़ज़ अपलोड करें और जमा करें।",
      ],
    },
  },

  officialUrl: "https://wb.gov.in/government-schemes-details-west-bengal-migrant-worker-welfare-scheme.aspx",
  sources: ["https://wb.gov.in/government-schemes-details-west-bengal-migrant-worker-welfare-scheme.aspx"],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "active",
};

export default scheme;
