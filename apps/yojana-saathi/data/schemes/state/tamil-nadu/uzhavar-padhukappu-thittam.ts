import { all, ageBetween, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "uzhavar-padhukappu-thittam",
  tier: "compact",
  name: { en: "Chief Minister's Uzhavar Padhukappu Thittam (Farmers' Protection Scheme)", hi: "मुख्यमंत्री उऴवर पादुकाप्पु तिट्टम (किसान सुरक्षा योजना)" },
  aka: ["CM Uzhavar Padhukappu Thittam", "CM farmers protection scheme", "UPT", "Uzhavar Pathukappu"],
  shortDescription: {
    en: "Farm workers and small farmers in Tamil Nadu who enrol get marriage help (₹8,000–₹10,000), education aid for children, accident and death relief, and a ₹1,200 pension in old age.",
    hi: "तमिलनाडु में जुड़ने वाले खेतिहर मज़दूरों और छोटे किसानों को शादी में मदद (₹8,000–₹10,000), बच्चों की पढ़ाई में मदद, दुर्घटना और मृत्यु पर राहत, और बुढ़ापे में ₹1,200 पेंशन।",
  },
  level: "state",
  state: "tamil-nadu",
  department: {
    en: "Revenue and Disaster Management Department (Commissioner, Social Security Scheme), Government of Tamil Nadu",
    hi: "राजस्व एवं आपदा प्रबंधन विभाग (आयुक्त, सामाजिक सुरक्षा योजना), तमिलनाडु सरकार",
  },
  categories: ["agriculture", "social-welfare", "pension-insurance"],
  tags: ["farm labourer", "small farmer", "marriage assistance", "accident relief", "education aid", "uzhavar"],
  benefitType: "composite",
  isDBT: true,
  ageRange: { min: 18, max: 65 },
  kundliHouse: "farming",
  eligibility: all(
    residentOf("tamil-nadu"),
    ...ageBetween(18, 65),
    labelled(when("occupation", "in", ["farmer", "agri-labourer", "fisher", "livestock-dairy"]), {
      en: "You work in farming or allied work (farm labour, small farming, inland fishing, dairy, livestock)",
      hi: "आप खेती या उससे जुड़े काम में हैं (खेत मज़दूरी, छोटी खेती, अंतर्देशीय मछली पकड़ना, डेयरी, पशुपालन)",
    }),
  ),

  details: {
    en: [
      "Uzhavar Padhukappu Thittam is a social security scheme for farm workers and small farmers, set up under the Tamil Nadu Agricultural Labourers-Farmers (Social Security and Welfare) Act, 2006. Members and their dependants get help at key moments: marriage, children's education, illness, accidents, old age and death.",
      "Workers aged 18 to 65 enrol as main members; family members who depend on them are enrolled as dependants. Since 2022 the scheme is run by the Commissioner (Social Security Scheme) under the Revenue Department, and the old member registers kept by Village Administrative Officers are being digitised.",
    ],
    hi: [
      "उऴवर पादुकाप्पु तिट्टम खेतिहर मज़दूरों और छोटे किसानों के लिए सामाजिक सुरक्षा योजना है, जो तमिलनाडु कृषि मज़दूर-किसान (सामाजिक सुरक्षा और कल्याण) अधिनियम, 2006 के तहत बनी है। सदस्यों और उन पर निर्भर लोगों को ज़रूरी मौक़ों पर मदद मिलती है: शादी, बच्चों की पढ़ाई, बीमारी, दुर्घटना, बुढ़ापा और मृत्यु।",
      "18 से 65 साल के कामगार मुख्य सदस्य बनते हैं; उन पर निर्भर परिवार वाले आश्रित सदस्य के रूप में जुड़ते हैं। 2022 से यह योजना राजस्व विभाग के तहत आयुक्त (सामाजिक सुरक्षा योजना) चलाते हैं, और ग्राम प्रशासनिक अधिकारियों के पास रखे पुराने सदस्य रजिस्टर डिजिटल किए जा रहे हैं।",
    ],
  },
  benefits: {
    en: [
      "Marriage assistance for a member or a dependant: ₹10,000 for a woman, ₹8,000 for a man.",
      "Education assistance for dependent children: ₹1,250 to ₹6,750 a year, from ITI or polytechnic up to postgraduate professional courses. This is given even if the student gets other government scholarships.",
      "Old age pension of ₹1,200 a month for destitute landless farm workers aged 60 and above.",
      "₹1,000 a month while a member cannot work due to serious illness (such as TB, cancer, kidney failure, heart disease or fractures), and ₹50,000 relief for paralysis.",
      "Accident relief: ₹1 lakh on death, ₹20,000 to ₹1 lakh for injuries. ₹20,000 on natural death and ₹2,500 for funeral expenses.",
      "₹1,000 a month until age 18 for orphaned children of a member who died of HIV.",
    ],
    hi: [
      "सदस्य या आश्रित की शादी में मदद: महिला को ₹10,000, पुरुष को ₹8,000।",
      "आश्रित बच्चों की पढ़ाई में मदद: ITI या पॉलिटेक्निक से लेकर पोस्ट-ग्रेजुएट प्रोफ़ेशनल कोर्स तक, साल में ₹1,250 से ₹6,750। दूसरी सरकारी छात्रवृत्ति मिलने पर भी यह मिलती है।",
      "60 साल या उससे ज़्यादा उम्र के बेसहारा भूमिहीन खेत मज़दूरों को हर महीने ₹1,200 पेंशन।",
      "गंभीर बीमारी (जैसे TB, कैंसर, किडनी फ़ेल, दिल की बीमारी या हड्डी टूटना) से काम न कर पाने तक हर महीने ₹1,000, और लकवे पर ₹50,000 की राहत।",
      "दुर्घटना राहत: मृत्यु पर ₹1 लाख, चोट के हिसाब से ₹20,000 से ₹1 लाख। सामान्य मृत्यु पर ₹20,000 और अंतिम संस्कार के लिए ₹2,500।",
      "HIV से मरे सदस्य के अनाथ बच्चों को 18 साल की उम्र तक हर महीने ₹1,000।",
    ],
  },
  eligibilityText: {
    en: [
      "You work as a farm labourer, or in allied work such as local fishing, dairy, horticulture, sericulture, livestock, poultry or tree growing.",
      "Small and marginal farmers who personally cultivate up to 2.5 acres of wet land or 5 acres of dry land, and cultivating tenants, can also join.",
      "Main members must be aged 18 to 65.",
      "The old age pension part is only for destitute landless farm workers aged 60 or above with property worth no more than ₹1 lakh.",
    ],
    hi: [
      "आप खेत मज़दूर हैं, या उससे जुड़ा काम करते हैं, जैसे स्थानीय मछली पकड़ना, डेयरी, बाग़वानी, रेशम कीट पालन, पशुपालन, मुर्गी पालन या पेड़ उगाना।",
      "2.5 एकड़ तक सिंचित या 5 एकड़ तक असिंचित ज़मीन ख़ुद जोतने वाले छोटे और सीमांत किसान, और बटाईदार भी जुड़ सकते हैं।",
      "मुख्य सदस्य की उम्र 18 से 65 साल हो।",
      "पेंशन वाला हिस्सा सिर्फ़ 60 साल या उससे ज़्यादा उम्र के बेसहारा भूमिहीन खेत मज़दूरों के लिए है, जिनकी संपत्ति ₹1 लाख से ज़्यादा की न हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Contact your Village Administrative Officer (VAO) to enrol yourself and your dependants as members.",
        "To claim a benefit (marriage, education, accident, death), apply through the VAO or the taluk office with the member card and supporting documents.",
        "The Special Tahsildar (Social Security Scheme) checks and sanctions the claim.",
      ],
      hi: [
        "ख़ुद को और आश्रितों को सदस्य बनवाने के लिए अपने ग्राम प्रशासनिक अधिकारी (VAO) से संपर्क करें।",
        "किसी लाभ (शादी, पढ़ाई, दुर्घटना, मृत्यु) के लिए सदस्य कार्ड और ज़रूरी दस्तावेज़ों के साथ VAO या तालुका कार्यालय के ज़रिए आवेदन करें।",
        "विशेष तहसीलदार (सामाजिक सुरक्षा योजना) जाँच कर दावा मंज़ूर करते हैं।",
      ],
    },
  },

  officialUrl: "https://www.cra.tn.gov.in/CM_UPT_t.php",
  sources: ["https://www.cra.tn.gov.in/CM_UPT_t.php", "https://www.cra.tn.gov.in/about_schemes_t.php"],
  lastVerified: "2026-10-06",
  launchedYear: 2011,
  status: "active",
};

export default scheme;
