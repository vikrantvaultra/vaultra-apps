import { all, ageBetween, female, labelled, notGovtEmployee, notTaxPayer, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "indira-gandhi-pyari-behna-sukh-samman-nidhi",
  overlapGroup: "women-monthly",
  name: { en: "Indira Gandhi Pyari Behna Sukh-Samman Nidhi Yojana", hi: "इंदिरा गांधी प्यारी बहना सुख-सम्मान निधि योजना" },
  aka: ["Pyari Behna Yojana", "Sukh Samman Nidhi", "Indira Gandhi Mahila Samman Nidhi", "1500 rupees women Himachal"],
  shortDescription: {
    en: "Women of Himachal Pradesh aged 18 to 59 get ₹1,500 a month, if no one in the family is a government employee, pensioner or taxpayer. It is being rolled out in phases.",
    hi: "हिमाचल प्रदेश की 18 से 59 साल की महिलाओं को हर महीने ₹1,500 मिलते हैं, अगर परिवार में कोई सरकारी कर्मचारी, पेंशनभोगी या आयकरदाता न हो। यह चरणों में लागू की जा रही है।",
  },
  level: "state",
  state: "himachal-pradesh",
  department: {
    en: "Department of Social Justice and Empowerment (ESOMSA Directorate), Government of Himachal Pradesh",
    hi: "सामाजिक न्याय एवं अधिकारिता विभाग (ईसोमसा निदेशालय), हिमाचल प्रदेश सरकार",
  },
  categories: ["women-child", "social-welfare"],
  tags: ["women", "monthly allowance", "pyari behna", "1500", "sukh samman", "himachal"],
  benefitType: "cash",
  isDBT: true,
  value: { amount: 1500, period: "monthly", kind: "cash" },
  ageRange: { min: 18, max: 59 },
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("himachal-pradesh"),
    female(),
    ...ageBetween(18, 59),
    labelled(notGovtEmployee(), {
      en: "No one in the family is a government, PSU, contract, outsourced or daily-wage government worker or pensioner",
      hi: "परिवार में कोई सरकारी, उपक्रम, अनुबंध, आउटसोर्स या दैनिक वेतनभोगी सरकारी कर्मचारी या पेंशनभोगी न हो",
    }),
    labelled(notTaxPayer(), { en: "No one in the family pays income tax", hi: "परिवार में कोई आयकर न देता हो" }),
  ),

  details: {
    en: [
      "Indira Gandhi Pyari Behna Sukh-Samman Nidhi Yojana is Himachal Pradesh's monthly honorarium for women. It replaced the Indira Gandhi Mahila Samman Nidhi Yojana of 2023 through a notification of 13 March 2024.",
      "Eligible women get ₹1,500 a month. The state is paying it in phases: the 2026-27 budget says it will next be extended to women in the one lakh poorest 'Mukhya Mantri Apna Sukhi Parivar' families, and after that to all eligible women. So not every eligible woman is being paid yet.",
      "Applications go to the Tehsil Welfare Officer, and the Deputy Commissioner (or the Resident Commissioner/ADC/SDM in tribal areas) sanctions the payment.",
    ],
    hi: [
      "इंदिरा गांधी प्यारी बहना सुख-सम्मान निधि योजना हिमाचल प्रदेश में महिलाओं के लिए मासिक सम्मान राशि है। 13 मार्च 2024 की अधिसूचना से इसने 2023 की इंदिरा गांधी महिला सम्मान निधि योजना की जगह ली।",
      "पात्र महिलाओं को हर महीने ₹1,500 मिलते हैं। सरकार इसे चरणों में दे रही है: 2026-27 के बजट के अनुसार अगले चरण में यह एक लाख सबसे ग़रीब 'मुख्यमंत्री अपना सुखी परिवार' परिवारों की बहनों को मिलेगी, और उसके बाद सभी पात्र महिलाओं को। यानी अभी हर पात्र महिला को भुगतान नहीं हो रहा।",
      "आवेदन तहसील कल्याण अधिकारी के पास जाता है, और उपायुक्त (जनजातीय क्षेत्रों में आवासीय आयुक्त/ADC/SDM) भुगतान मंज़ूर करते हैं।",
    ],
  },
  benefits: {
    en: [
      "₹1,500 every month into your bank or post office account.",
      "That is ₹18,000 a year.",
      "Paid until you complete 59 years of age, as long as you stay eligible.",
    ],
    hi: [
      "हर महीने ₹1,500 आपके बैंक या डाकघर खाते में।",
      "साल भर में ₹18,000।",
      "जब तक पात्र रहें, 59 साल की उम्र पूरी होने तक मिलती है।",
    ],
  },
  eligibilityText: {
    en: [
      "A woman aged 18 to 59 who is a permanent resident (bonafide Himachali) of Himachal Pradesh.",
      "No member of her family (husband, children and unmarried daughters on the family register or ration card as of 31 March 2023) falls in the excluded groups listed below.",
      "Buddhist nuns (chomo) living permanently in monasteries are also eligible.",
    ],
    hi: [
      "18 से 59 साल की महिला जो हिमाचल प्रदेश की स्थायी निवासी (बोनाफ़ाइड हिमाचली) हो।",
      "उसके परिवार (31 मार्च 2023 को परिवार रजिस्टर या राशन कार्ड में दर्ज पति, बच्चे और अविवाहित बेटियाँ) का कोई सदस्य नीचे दिए बाहर रखे गए वर्गों में न हो।",
      "मठों में स्थायी रूप से रहने वाली बौद्ध भिक्षुणियाँ (चोमो) भी पात्र हैं।",
    ],
  },
  exclusions: {
    en: [
      "Families with a central or state government employee or pensioner, including contract, outsourced, daily-wage or part-time staff.",
      "Families with a serving or retired soldier, or a military widow.",
      "Families with an honorarium-paid Anganwadi worker or helper, ASHA worker, mid-day meal worker or multi-task worker.",
      "Families with a social security pension beneficiary.",
      "Families with an employee or pensioner of a panchayat, urban local body, PSU, board or corporation.",
      "Families with a GST-registered person or an income-tax payer.",
    ],
    hi: [
      "जिन परिवारों में केंद्र या राज्य सरकार का कर्मचारी या पेंशनभोगी हो, जिसमें अनुबंध, आउटसोर्स, दैनिक वेतन या अंशकालिक कर्मचारी भी शामिल हैं।",
      "जिन परिवारों में सेवारत या भूतपूर्व सैनिक, या सैनिक विधवा हो।",
      "जिन परिवारों में मानदेय पाने वाली आंगनवाड़ी कार्यकर्ता या सहायिका, आशा वर्कर, मिड-डे मील वर्कर या मल्टी टास्क वर्कर हो।",
      "जिन परिवारों में कोई सामाजिक सुरक्षा पेंशन ले रहा हो।",
      "जिन परिवारों में पंचायत, शहरी निकाय, सार्वजनिक उपक्रम, बोर्ड या निगम का कर्मचारी या पेंशनभोगी हो।",
      "जिन परिवारों में GST में पंजीकृत व्यक्ति या आयकरदाता हो।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Get Form-1 free from the District or Tehsil Welfare Officer's office (it is also on esomsa.hp.gov.in).",
        "Fill it in with a photo, attach the documents and submit it to the Tehsil Welfare Officer.",
        "Incomplete or ineligible forms are returned within 15 days with remarks; complete ones go to the Deputy Commissioner for sanction.",
      ],
      hi: [
        "ज़िला या तहसील कल्याण अधिकारी के कार्यालय से प्रपत्र-1 मुफ़्त लें (यह esomsa.hp.gov.in पर भी है)।",
        "फ़ोटो के साथ फ़ॉर्म भरें, दस्तावेज़ लगाएँ और तहसील कल्याण अधिकारी को जमा करें।",
        "अधूरे या अपात्र फ़ॉर्म 15 दिन में टिप्पणी के साथ लौटा दिए जाते हैं; पूरे फ़ॉर्म मंज़ूरी के लिए उपायुक्त को भेजे जाते हैं।",
      ],
    },
  },
  documents: {
    en: [
      "Valid proof of age",
      "Bonafide Himachali certificate",
      "Bank or post office passbook copy",
      "Aadhaar card copy",
      "Family register copy (villages) or ration card copy (towns)",
      "For Buddhist nuns: certificate from the panchayat or the head nun of the monastery",
    ],
    hi: [
      "उम्र का वैध प्रमाण पत्र",
      "हिमाचली बोनाफ़ाइड/मूल निवासी प्रमाण पत्र",
      "बैंक या डाकघर पासबुक की कॉपी",
      "आधार कार्ड की कॉपी",
      "परिवार रजिस्टर की कॉपी (गाँव) या राशन कार्ड की कॉपी (शहर)",
      "बौद्ध भिक्षुणियों के लिए: पंचायत या मठ की मुख्य भिक्षुणी का प्रमाण पत्र",
    ],
  },
  faqs: [
    {
      q: { en: "I am eligible but haven't received any money. Why?", hi: "मैं पात्र हूँ पर पैसा नहीं आया। क्यों?" },
      a: {
        en: "The government is paying the scheme in phases. As per the 2026-27 budget, the next phase covers women in the 'Apna Sukhi Parivar' families, and all eligible women after that. Keep your application on file with the Tehsil Welfare Officer.",
        hi: "सरकार यह योजना चरणों में दे रही है। 2026-27 के बजट के अनुसार अगले चरण में 'अपना सुखी परिवार' परिवारों की महिलाओं को और उसके बाद सभी पात्र महिलाओं को मिलेगी। अपना आवेदन तहसील कल्याण अधिकारी के पास दर्ज रखें।",
      },
    },
    {
      q: { en: "My mother-in-law gets a social security pension. Can I still apply?", hi: "मेरी सास को सामाजिक सुरक्षा पेंशन मिलती है। क्या मैं फिर भी आवेदन कर सकती हूँ?" },
      a: {
        en: "The family is counted as the husband, wife and children on the family register or ration card. Ask the Tehsil Welfare Officer whether your mother-in-law is counted in your family unit.",
        hi: "परिवार में परिवार रजिस्टर या राशन कार्ड पर दर्ज पति, पत्नी और बच्चे गिने जाते हैं। तहसील कल्याण अधिकारी से पूछें कि आपकी सास आपके परिवार में गिनी जाती हैं या नहीं।",
      },
    },
  ],

  officialUrl: "https://edistrict.hp.gov.in/HPeDistrict/",
  sources: [
    "https://ebudget.hp.nic.in/Aspx/Anonymous/pdf/FS_Eng_2026.pdf",
    "https://wcd.hp.gov.in/",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2024,
  status: "active",
};

export default scheme;
