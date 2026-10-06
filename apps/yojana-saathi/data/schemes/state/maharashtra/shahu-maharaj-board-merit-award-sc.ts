import { all, isTrue, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "shahu-maharaj-board-merit-award-sc",
  tier: "compact",
  overlapGroup: "scholarship",
  name: { en: "Rajarshi Shahu Maharaj Merit Award for SC Toppers (Class 10 and 12)", hi: "SC टॉपर्स के लिए राजर्षि शाहू महाराज गुणवत्ता पुरस्कार (कक्षा 10 और 12)" },
  shortDescription: {
    en: "SC students in Maharashtra who top their school, taluka, district or board in the class 10 or 12 exam get a one-time award of ₹5,000 to ₹1 lakh.",
    hi: "महाराष्ट्र के जो SC छात्र कक्षा 10 या 12 की परीक्षा में स्कूल, तालुका, ज़िला या बोर्ड में अव्वल आते हैं, उन्हें ₹5,000 से ₹1 लाख तक का एक बार का पुरस्कार मिलता है।",
  },
  level: "state",
  state: "maharashtra",
  department: { en: "Social Justice and Special Assistance Department, Government of Maharashtra", hi: "सामाजिक न्याय एवं विशेष सहायता विभाग, महाराष्ट्र सरकार" },
  categories: ["education", "social-welfare"],
  tags: ["merit award", "sc", "class 10", "class 12", "topper"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 5000, period: "one-time", kind: "cash" },
  kundliHouse: "education",
  eligibility: all(
    residentOf("maharashtra"),
    isTrue("student"),
    labelled(when("caste", "eq", "sc"), { en: "Belongs to a Scheduled Caste or is Neo-Buddhist", hi: "अनुसूचित जाति या नवबौद्ध समुदाय से हो" }),
  ),

  details: {
    en: ["This award recognises Scheduled Caste students who come first in the SSC (class 10) or HSC (class 12) board exams at different levels, from their own school up to the whole state board.", "There is no income limit. Applications go to the district office of the Social Welfare department."],
    hi: ["यह पुरस्कार SSC (कक्षा 10) या HSC (कक्षा 12) बोर्ड परीक्षा में अलग-अलग स्तर पर, अपने स्कूल से लेकर पूरे राज्य बोर्ड तक, पहला स्थान पाने वाले अनुसूचित जाति के छात्रों को दिया जाता है।", "इसमें आय की कोई सीमा नहीं है। आवेदन समाज कल्याण विभाग के ज़िला कार्यालय में जाता है।"],
  },
  benefits: {
    en: ["₹1,00,000 to the SC student who ranks first in the whole board.", "₹50,000 to each SC student on a divisional board merit list.", "₹25,000 for first in the district and ₹10,000 for first in the taluka.", "₹5,000 for first in each secondary school and junior college."],
    hi: ["पूरे बोर्ड में पहले स्थान पर आने वाले SC छात्र को ₹1,00,000।", "संभागीय बोर्ड की मेरिट सूची में आने वाले हर SC छात्र को ₹50,000।", "ज़िले में पहले स्थान पर ₹25,000 और तालुका में पहले स्थान पर ₹10,000।", "हर माध्यमिक स्कूल और जूनियर कॉलेज में पहले स्थान पर ₹5,000।"],
  },
  eligibilityText: {
    en: ["Scheduled Caste student from Maharashtra.", "Ranks first among SC students at school, taluka, district or board level in the class 10 or 12 exam, or appears on a divisional merit list.", "No income limit."],
    hi: ["महाराष्ट्र का अनुसूचित जाति का छात्र।", "कक्षा 10 या 12 की परीक्षा में स्कूल, तालुका, ज़िला या बोर्ड स्तर पर SC छात्रों में पहला स्थान, या संभागीय मेरिट सूची में नाम।", "आय की कोई सीमा नहीं।"],
  },
  applicationProcess: {
    online: { en: ["Get your result and a rank certificate from your school or junior college.", "Submit the application with your caste certificate to the Assistant Commissioner, Social Welfare in your district."], hi: ["अपने स्कूल या जूनियर कॉलेज से रिज़ल्ट और रैंक का प्रमाण पत्र लें।", "जाति प्रमाण पत्र के साथ आवेदन अपने ज़िले के सहायक आयुक्त, समाज कल्याण को जमा करें।"] },
  },

  officialUrl: "https://sjsa.maharashtra.gov.in/en/scheme/rajarshi-shahu-maharaj-merit-scholarship-scheme-for-10th-12th-std-students/",
  sources: ["https://sjsa.maharashtra.gov.in/en/scheme/rajarshi-shahu-maharaj-merit-scholarship-scheme-for-10th-12th-std-students/"],
  lastVerified: "2026-10-06",
  launchedYear: 2000,
  status: "active",
};

export default scheme;
