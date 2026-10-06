/**
 * Every slug the app knows about, with English and Hindi labels.
 * Scheme files reference these slugs; the type system rejects anything else.
 */

type L = { en: string; hi: string };

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export const CATEGORIES = {
  agriculture: {
    name: { en: "Agriculture & Rural", hi: "कृषि और ग्रामीण" },
    blurb: { en: "Income support, crop insurance, credit and inputs for farmers and fishers.", hi: "किसानों और मछुआरों के लिए आय सहायता, फ़सल बीमा, कर्ज़ और खेती की ज़रूरतें।" },
    icon: "Wheat",
  },
  health: {
    name: { en: "Health & Wellness", hi: "स्वास्थ्य और कल्याण" },
    blurb: { en: "Free treatment, health cover, maternity support and medicines.", hi: "मुफ़्त इलाज, स्वास्थ्य बीमा, मातृत्व सहायता और दवाइयाँ।" },
    icon: "HeartPulse",
  },
  housing: {
    name: { en: "Housing & Sanitation", hi: "आवास और स्वच्छता" },
    blurb: { en: "Help to build or buy a home, and toilets for every household.", hi: "घर बनाने या खरीदने में मदद और हर घर के लिए शौचालय।" },
    icon: "Home",
  },
  education: {
    name: { en: "Education & Scholarships", hi: "शिक्षा और छात्रवृत्ति" },
    blurb: { en: "Scholarships, fee support and education loans from school to college.", hi: "स्कूल से कॉलेज तक छात्रवृत्ति, फ़ीस सहायता और शिक्षा ऋण।" },
    icon: "GraduationCap",
  },
  "women-child": {
    name: { en: "Women & Child", hi: "महिला और बाल" },
    blurb: { en: "Monthly support for women, savings for daughters and care for mothers.", hi: "महिलाओं के लिए मासिक सहायता, बेटियों के लिए बचत और माताओं की देखभाल।" },
    icon: "Baby",
  },
  business: {
    name: { en: "Business & Loans", hi: "व्यवसाय और ऋण" },
    blurb: { en: "Collateral-free loans and subsidies to start or grow a business.", hi: "व्यवसाय शुरू करने या बढ़ाने के लिए बिना गारंटी ऋण और सब्सिडी।" },
    icon: "Store",
  },
  "pension-insurance": {
    name: { en: "Pension & Insurance", hi: "पेंशन और बीमा" },
    blurb: { en: "Low-cost life and accident cover, and pensions for old age.", hi: "कम प्रीमियम वाला जीवन और दुर्घटना बीमा, और बुढ़ापे के लिए पेंशन।" },
    icon: "ShieldCheck",
  },
  "skills-employment": {
    name: { en: "Skills & Jobs", hi: "कौशल और रोज़गार" },
    blurb: { en: "Free training, internships, apprenticeships and guaranteed work.", hi: "मुफ़्त प्रशिक्षण, इंटर्नशिप, अप्रेंटिसशिप और काम की गारंटी।" },
    icon: "Briefcase",
  },
  "social-welfare": {
    name: { en: "Social Welfare", hi: "सामाजिक कल्याण" },
    blurb: { en: "Food security, welfare pensions and support for families in need.", hi: "खाद्य सुरक्षा, कल्याण पेंशन और ज़रूरतमंद परिवारों की सहायता।" },
    icon: "HandHeart",
  },
  disability: {
    name: { en: "Persons with Disabilities", hi: "दिव्यांगजन" },
    blurb: { en: "Assistive devices, scholarships and pensions for persons with disabilities.", hi: "दिव्यांगजनों के लिए सहायक उपकरण, छात्रवृत्ति और पेंशन।" },
    icon: "Accessibility",
  },
  minority: {
    name: { en: "Minority Welfare", hi: "अल्पसंख्यक कल्याण" },
    blurb: { en: "Scholarships and skilling for notified minority communities.", hi: "अधिसूचित अल्पसंख्यक समुदायों के लिए छात्रवृत्ति और कौशल विकास।" },
    icon: "Users",
  },
  "energy-savings": {
    name: { en: "Energy, Banking & Savings", hi: "ऊर्जा, बैंकिंग और बचत" },
    blurb: { en: "Free electricity, clean cooking gas, bank accounts and safe savings.", hi: "मुफ़्त बिजली, रसोई गैस, बैंक खाते और सुरक्षित बचत।" },
    icon: "Zap",
  },
} as const satisfies Record<string, { name: L; blurb: L; icon: string }>;

export type CategorySlug = keyof typeof CATEGORIES;

/* ------------------------------------------------------------------ */
/* States and Union Territories                                        */
/* ------------------------------------------------------------------ */

export const STATES = {
  "andhra-pradesh": { name: { en: "Andhra Pradesh", hi: "आंध्र प्रदेश" }, type: "state" },
  "arunachal-pradesh": { name: { en: "Arunachal Pradesh", hi: "अरुणाचल प्रदेश" }, type: "state" },
  assam: { name: { en: "Assam", hi: "असम" }, type: "state" },
  bihar: { name: { en: "Bihar", hi: "बिहार" }, type: "state" },
  chhattisgarh: { name: { en: "Chhattisgarh", hi: "छत्तीसगढ़" }, type: "state" },
  goa: { name: { en: "Goa", hi: "गोवा" }, type: "state" },
  gujarat: { name: { en: "Gujarat", hi: "गुजरात" }, type: "state" },
  haryana: { name: { en: "Haryana", hi: "हरियाणा" }, type: "state" },
  "himachal-pradesh": { name: { en: "Himachal Pradesh", hi: "हिमाचल प्रदेश" }, type: "state" },
  jharkhand: { name: { en: "Jharkhand", hi: "झारखंड" }, type: "state" },
  karnataka: { name: { en: "Karnataka", hi: "कर्नाटक" }, type: "state" },
  kerala: { name: { en: "Kerala", hi: "केरल" }, type: "state" },
  "madhya-pradesh": { name: { en: "Madhya Pradesh", hi: "मध्य प्रदेश" }, type: "state" },
  maharashtra: { name: { en: "Maharashtra", hi: "महाराष्ट्र" }, type: "state" },
  manipur: { name: { en: "Manipur", hi: "मणिपुर" }, type: "state" },
  meghalaya: { name: { en: "Meghalaya", hi: "मेघालय" }, type: "state" },
  mizoram: { name: { en: "Mizoram", hi: "मिज़ोरम" }, type: "state" },
  nagaland: { name: { en: "Nagaland", hi: "नागालैंड" }, type: "state" },
  odisha: { name: { en: "Odisha", hi: "ओडिशा" }, type: "state" },
  punjab: { name: { en: "Punjab", hi: "पंजाब" }, type: "state" },
  rajasthan: { name: { en: "Rajasthan", hi: "राजस्थान" }, type: "state" },
  sikkim: { name: { en: "Sikkim", hi: "सिक्किम" }, type: "state" },
  "tamil-nadu": { name: { en: "Tamil Nadu", hi: "तमिलनाडु" }, type: "state" },
  telangana: { name: { en: "Telangana", hi: "तेलंगाना" }, type: "state" },
  tripura: { name: { en: "Tripura", hi: "त्रिपुरा" }, type: "state" },
  "uttar-pradesh": { name: { en: "Uttar Pradesh", hi: "उत्तर प्रदेश" }, type: "state" },
  uttarakhand: { name: { en: "Uttarakhand", hi: "उत्तराखंड" }, type: "state" },
  "west-bengal": { name: { en: "West Bengal", hi: "पश्चिम बंगाल" }, type: "state" },
  "andaman-nicobar": { name: { en: "Andaman & Nicobar Islands", hi: "अंडमान और निकोबार द्वीपसमूह" }, type: "ut" },
  chandigarh: { name: { en: "Chandigarh", hi: "चंडीगढ़" }, type: "ut" },
  "dadra-nagar-haveli-daman-diu": { name: { en: "Dadra & Nagar Haveli and Daman & Diu", hi: "दादरा और नगर हवेली और दमन और दीव" }, type: "ut" },
  delhi: { name: { en: "Delhi", hi: "दिल्ली" }, type: "ut" },
  "jammu-kashmir": { name: { en: "Jammu & Kashmir", hi: "जम्मू और कश्मीर" }, type: "ut" },
  ladakh: { name: { en: "Ladakh", hi: "लद्दाख" }, type: "ut" },
  lakshadweep: { name: { en: "Lakshadweep", hi: "लक्षद्वीप" }, type: "ut" },
  puducherry: { name: { en: "Puducherry", hi: "पुडुचेरी" }, type: "ut" },
} as const satisfies Record<string, { name: L; type: "state" | "ut" }>;

export type StateSlug = keyof typeof STATES;

/* ------------------------------------------------------------------ */
/* Central ministries / departments                                    */
/* ------------------------------------------------------------------ */

export const MINISTRIES = {
  "agriculture-farmers-welfare": { name: { en: "Ministry of Agriculture & Farmers Welfare", hi: "कृषि एवं किसान कल्याण मंत्रालय" } },
  "fisheries-animal-husbandry-dairying": { name: { en: "Ministry of Fisheries, Animal Husbandry & Dairying", hi: "मत्स्यपालन, पशुपालन और डेयरी मंत्रालय" } },
  "health-family-welfare": { name: { en: "Ministry of Health & Family Welfare", hi: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" } },
  "chemicals-fertilizers": { name: { en: "Ministry of Chemicals & Fertilizers", hi: "रसायन एवं उर्वरक मंत्रालय" } },
  "rural-development": { name: { en: "Ministry of Rural Development", hi: "ग्रामीण विकास मंत्रालय" } },
  "housing-urban-affairs": { name: { en: "Ministry of Housing & Urban Affairs", hi: "आवासन और शहरी कार्य मंत्रालय" } },
  "jal-shakti": { name: { en: "Ministry of Jal Shakti", hi: "जल शक्ति मंत्रालय" } },
  education: { name: { en: "Ministry of Education", hi: "शिक्षा मंत्रालय" } },
  "women-child-development": { name: { en: "Ministry of Women & Child Development", hi: "महिला एवं बाल विकास मंत्रालय" } },
  finance: { name: { en: "Ministry of Finance", hi: "वित्त मंत्रालय" } },
  msme: { name: { en: "Ministry of Micro, Small & Medium Enterprises", hi: "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय" } },
  "labour-employment": { name: { en: "Ministry of Labour & Employment", hi: "श्रम एवं रोज़गार मंत्रालय" } },
  "skill-development-entrepreneurship": { name: { en: "Ministry of Skill Development & Entrepreneurship", hi: "कौशल विकास एवं उद्यमशीलता मंत्रालय" } },
  "corporate-affairs": { name: { en: "Ministry of Corporate Affairs", hi: "कॉरपोरेट कार्य मंत्रालय" } },
  "social-justice-empowerment": { name: { en: "Ministry of Social Justice & Empowerment", hi: "सामाजिक न्याय एवं अधिकारिता मंत्रालय" } },
  "empowerment-persons-disabilities": { name: { en: "Department of Empowerment of Persons with Disabilities", hi: "दिव्यांगजन सशक्तिकरण विभाग" } },
  "tribal-affairs": { name: { en: "Ministry of Tribal Affairs", hi: "जनजातीय कार्य मंत्रालय" } },
  "minority-affairs": { name: { en: "Ministry of Minority Affairs", hi: "अल्पसंख्यक कार्य मंत्रालय" } },
  "consumer-affairs-food-public-distribution": { name: { en: "Ministry of Consumer Affairs, Food & Public Distribution", hi: "उपभोक्ता मामले, खाद्य और सार्वजनिक वितरण मंत्रालय" } },
  "petroleum-natural-gas": { name: { en: "Ministry of Petroleum & Natural Gas", hi: "पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय" } },
  "new-renewable-energy": { name: { en: "Ministry of New & Renewable Energy", hi: "नवीन और नवीकरणीय ऊर्जा मंत्रालय" } },
} as const satisfies Record<string, { name: L }>;

export type MinistrySlug = keyof typeof MINISTRIES;

/* ------------------------------------------------------------------ */
/* Sarkari Kundli houses (1–12)                                        */
/* ------------------------------------------------------------------ */

export const KUNDLI_HOUSES = {
  education: { n: 1, name: { en: "Education", hi: "शिक्षा" }, icon: "GraduationCap" },
  career: { n: 2, name: { en: "Career & Skills", hi: "करियर और कौशल" }, icon: "Briefcase" },
  business: { n: 3, name: { en: "Business", hi: "व्यवसाय" }, icon: "Store" },
  farming: { n: 4, name: { en: "Farming", hi: "खेती" }, icon: "Wheat" },
  home: { n: 5, name: { en: "Home", hi: "घर" }, icon: "Home" },
  "energy-savings": { n: 6, name: { en: "Energy & Savings", hi: "ऊर्जा और बचत" }, icon: "Zap" },
  health: { n: 7, name: { en: "Health", hi: "स्वास्थ्य" }, icon: "HeartPulse" },
  "women-family": { n: 8, name: { en: "Women & Family", hi: "महिला और परिवार" }, icon: "Users" },
  daughter: { n: 9, name: { en: "Daughter's Future", hi: "बेटी का भविष्य" }, icon: "Baby" },
  insurance: { n: 10, name: { en: "Insurance", hi: "बीमा" }, icon: "ShieldCheck" },
  retirement: { n: 11, name: { en: "Retirement", hi: "सेवानिवृत्ति" }, icon: "PiggyBank" },
  senior: { n: 12, name: { en: "Senior Years", hi: "वरिष्ठ वर्ष" }, icon: "Armchair" },
} as const satisfies Record<string, { n: number; name: L; icon: string }>;

export type KundliHouse = keyof typeof KUNDLI_HOUSES;

/* ------------------------------------------------------------------ */
/* Annual family income bands.                                         */
/* Each band is (min, max] in rupees. Boundaries sit on the caps that  */
/* schemes actually use (₹1L, 2L, 2.5L, 3L, 4.5L, 6L, 8L, 12L), so a   */
/* rule like "income ≤ ₹2.5 lakh" can be decided without exact income. */
/* ------------------------------------------------------------------ */

export const INCOME_RANGES = {
  "upto-1l": { min: 0, max: 100_000, label: { en: "Up to ₹1 lakh", hi: "₹1 लाख तक" } },
  "1l-2l": { min: 100_000, max: 200_000, label: { en: "₹1 – 2 lakh", hi: "₹1 – 2 लाख" } },
  "2l-2.5l": { min: 200_000, max: 250_000, label: { en: "₹2 – 2.5 lakh", hi: "₹2 – 2.5 लाख" } },
  "2.5l-3l": { min: 250_000, max: 300_000, label: { en: "₹2.5 – 3 lakh", hi: "₹2.5 – 3 लाख" } },
  "3l-4.5l": { min: 300_000, max: 450_000, label: { en: "₹3 – 4.5 lakh", hi: "₹3 – 4.5 लाख" } },
  "4.5l-6l": { min: 450_000, max: 600_000, label: { en: "₹4.5 – 6 lakh", hi: "₹4.5 – 6 लाख" } },
  "6l-8l": { min: 600_000, max: 800_000, label: { en: "₹6 – 8 lakh", hi: "₹6 – 8 लाख" } },
  "8l-12l": { min: 800_000, max: 1_200_000, label: { en: "₹8 – 12 lakh", hi: "₹8 – 12 लाख" } },
  "above-12l": { min: 1_200_000, max: Number.POSITIVE_INFINITY, label: { en: "Above ₹12 lakh", hi: "₹12 लाख से अधिक" } },
} as const satisfies Record<string, { min: number; max: number; label: L }>;

export type IncomeRange = keyof typeof INCOME_RANGES;

/* ------------------------------------------------------------------ */
/* Occupations                                                         */
/* ------------------------------------------------------------------ */

export const OCCUPATIONS = {
  farmer: { en: "Farmer (cultivator)", hi: "किसान (खेती करने वाले)" },
  "agri-labourer": { en: "Farm labourer", hi: "खेतिहर मज़दूर" },
  fisher: { en: "Fisher / fish farmer", hi: "मछुआरा / मछली पालक" },
  "livestock-dairy": { en: "Livestock or dairy", hi: "पशुपालन या डेयरी" },
  artisan: { en: "Artisan or craftsperson (weaver, carpenter, potter…)", hi: "कारीगर या शिल्पकार (बुनकर, बढ़ई, कुम्हार…)" },
  "street-vendor": { en: "Street vendor", hi: "रेहड़ी-पटरी विक्रेता" },
  "construction-worker": { en: "Construction worker", hi: "निर्माण श्रमिक" },
  "domestic-worker": { en: "Domestic worker", hi: "घरेलू कामगार" },
  "unorganised-worker": { en: "Other daily-wage / gig / unorganised work", hi: "अन्य दिहाड़ी / गिग / असंगठित काम" },
  "small-business": { en: "Shop or small business owner", hi: "दुकान या छोटे व्यवसाय के मालिक" },
  "salaried-private": { en: "Salaried (private sector)", hi: "वेतनभोगी (निजी क्षेत्र)" },
  "ex-servicemen": { en: "Ex-serviceman", hi: "पूर्व सैनिक" },
  homemaker: { en: "Homemaker", hi: "गृहिणी / गृहस्थ" },
  none: { en: "None of these", hi: "इनमें से कोई नहीं" },
} as const satisfies Record<string, L>;

export type Occupation = keyof typeof OCCUPATIONS;

/** Occupations that count as unorganised-sector work for schemes like PM-SYM and e-Shram */
export const UNORGANISED_OCCUPATIONS: Occupation[] = [
  "agri-labourer",
  "fisher",
  "livestock-dairy",
  "artisan",
  "street-vendor",
  "construction-worker",
  "domestic-worker",
  "unorganised-worker",
];
