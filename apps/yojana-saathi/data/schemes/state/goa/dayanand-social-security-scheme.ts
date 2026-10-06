import { all, any, female, isTrue, labelled, minAge, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "dayanand-social-security-scheme",
  tier: "compact",
  name: { en: "Dayanand Social Security Scheme (DSSS)", hi: "दयानंद सामाजिक सुरक्षा योजना (DSSS)" },
  aka: ["DSSS", "DDSSY pension", "Goa old age pension", "Goa widow pension"],
  shortDescription: {
    en: "Goa's monthly pension for senior citizens (60+), single women such as widows, persons with disabilities and people living with HIV/AIDS, paid into the bank account.",
    hi: "गोवा की मासिक पेंशन, वरिष्ठ नागरिकों (60+), विधवा जैसी अकेली महिलाओं, दिव्यांगजनों और HIV/AIDS से पीड़ित लोगों के लिए, सीधे बैंक खाते में।",
  },
  level: "state",
  state: "goa",
  department: {
    en: "Directorate of Social Welfare, Government of Goa",
    hi: "समाज कल्याण निदेशालय, गोवा सरकार",
  },
  categories: ["pension-insurance", "social-welfare", "disability"],
  tags: ["pension", "old age", "widow", "disability", "senior citizen", "dsss", "goa"],
  benefitType: "pension",
  isDBT: true,
  ageRange: { min: 60 },
  kundliHouse: "senior",
  eligibility: all(
    residentOf("goa"),
    labelled(
      any(
        minAge(60),
        isTrue("disabled"),
        all(female(), when("marital", "in", ["widowed", "divorced", "separated"])),
      ),
      {
        en: "You are 60 or older, a person with a disability, or a single woman (such as a widow)",
        hi: "आप 60 साल या उससे ज़्यादा के हैं, दिव्यांग हैं, या अकेली महिला (जैसे विधवा) हैं",
      },
    ),
  ),

  details: {
    en: [
      "The Dayanand Social Security Scheme is Goa's main social pension. It began on 2 October 2001 under the 'Freedom From Hunger' programme and is run by the Directorate of Social Welfare.",
      "It pays a monthly amount to senior citizens, single women including widows, persons with disabilities and people living with HIV/AIDS. Money is paid through the Aadhaar-based payment system, and the state says it is credited by the 10th of each month. The government launched enhanced assistance on 1 June 2026, but we could not find the new monthly amount on an official page, so none is shown here.",
    ],
    hi: [
      "दयानंद सामाजिक सुरक्षा योजना गोवा की मुख्य सामाजिक पेंशन है। यह 2 अक्टूबर 2001 को 'भूख से मुक्ति' कार्यक्रम के तहत शुरू हुई और समाज कल्याण निदेशालय इसे चलाता है।",
      "यह वरिष्ठ नागरिकों, विधवा समेत अकेली महिलाओं, दिव्यांगजनों और HIV/AIDS से पीड़ित लोगों को हर महीने राशि देती है। पैसा आधार आधारित भुगतान प्रणाली से आता है और सरकार के अनुसार हर महीने की 10 तारीख तक खाते में आ जाता है। सरकार ने 1 जून 2026 को बढ़ी हुई सहायता शुरू की, पर नई मासिक राशि हमें किसी सरकारी पेज पर नहीं मिली, इसलिए यहाँ राशि नहीं दिखाई गई है।",
    ],
  },
  benefits: {
    en: [
      "A monthly pension paid directly into your Aadhaar-linked bank account.",
      "Assistance was enhanced from June 2026; check the new amount with the Directorate of Social Welfare.",
    ],
    hi: [
      "हर महीने पेंशन, सीधे आपके आधार से जुड़े बैंक खाते में।",
      "जून 2026 से सहायता बढ़ाई गई है; नई राशि समाज कल्याण निदेशालय से पता करें।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Goa and belong to one of these groups: senior citizen (60 or older), single woman or widow, person with a disability, or person living with HIV/AIDS.",
      "Residence period, income limit and other conditions are set by the Directorate of Social Welfare; confirm them before applying.",
      "A woman who gets this pension (or whose husband does) usually cannot also get Griha Aadhar.",
    ],
    hi: [
      "आप गोवा में रहते हैं और इनमें से किसी समूह में आते हैं: वरिष्ठ नागरिक (60 साल या ज़्यादा), अकेली महिला या विधवा, दिव्यांग व्यक्ति, या HIV/AIDS से पीड़ित व्यक्ति।",
      "निवास की अवधि, आय सीमा और बाकी शर्तें समाज कल्याण निदेशालय तय करता है; आवेदन से पहले इन्हें पक्का कर लें।",
      "जिस महिला को (या उसके पति को) यह पेंशन मिलती है, उसे आम तौर पर गृह आधार साथ में नहीं मिल सकता।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact the Directorate of Social Welfare (or its taluka office) for the DSSS application form and the current list of documents.",
        "Submit the form with your Aadhaar, bank details and proof of your category (age, disability, widowhood).",
        "Once sanctioned, submit a life certificate and income certificate every year between 1 April and 30 May so the pension continues.",
      ],
      hi: [
        "DSSS आवेदन फ़ॉर्म और दस्तावेज़ों की मौजूदा सूची के लिए समाज कल्याण निदेशालय (या उसके तालुका दफ़्तर) से संपर्क करें।",
        "फ़ॉर्म अपने आधार, बैंक विवरण और अपनी श्रेणी के सबूत (उम्र, दिव्यांगता, वैधव्य) के साथ जमा करें।",
        "मंज़ूरी मिलने के बाद पेंशन जारी रखने के लिए हर साल 1 अप्रैल से 30 मई के बीच जीवन प्रमाण पत्र और आय प्रमाण पत्र जमा करें।",
      ],
    },
  },

  officialUrl: "https://www.goa.gov.in/government/schemes/",
  sources: [
    "https://dip.goa.gov.in/griha-aadhar-dss-assistance-to-be-credited-on-10th-of-every-month-cm/",
    "https://dip.goa.gov.in/goa-celebrates-40-years-of-progress-and-pride-on-statehood-day/",
    "https://dip.goa.gov.in/linking-of-aadhar-number-to-the-bank-account-for-dss-scheme/",
    "https://www.goa.gov.in/wp-content/uploads/2016/05/Dayanand-Social-Security-Scheme.pdf",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2001,
  status: "check-status",
};

export default scheme;
