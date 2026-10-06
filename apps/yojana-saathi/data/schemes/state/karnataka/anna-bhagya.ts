import { all, isTrue, labelled, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "anna-bhagya",
  name: { en: "Anna Bhagya", hi: "अन्न भाग्य योजना" },
  aka: ["Annabhagya", "free rice Karnataka"],
  shortDescription: {
    en: "Free rice at ration shops for Antyodaya and BPL card holders in Karnataka: the state adds 5 kg per person on top of the central free ration.",
    hi: "कर्नाटक में अंत्योदय और BPL कार्ड वालों को राशन दुकान पर मुफ़्त चावल: केंद्र के मुफ़्त राशन के ऊपर राज्य हर व्यक्ति को 5 किलो और देता है।",
  },
  level: "state",
  state: "karnataka",
  department: {
    en: "Department of Food, Civil Supplies and Consumer Affairs, Government of Karnataka",
    hi: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, कर्नाटक सरकार",
  },
  categories: ["social-welfare"],
  tags: ["free rice", "ration", "bpl", "antyodaya", "food security", "guarantee scheme"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "women-family",
  eligibility: all(
    residentOf("karnataka"),
    labelled(isTrue("bpl"), { en: "Your family has a BPL (priority household) or Antyodaya ration card", hi: "आपके परिवार के पास BPL (प्राथमिक परिवार) या अंत्योदय राशन कार्ड है" }),
  ),

  details: {
    en: [
      "Anna Bhagya is Karnataka's free food grain scheme and one of its five guarantees. Families with Antyodaya or BPL ration cards already get 5 kg of free rice per person each month under the national food security law; the state adds 5 kg more per person.",
      "For a while the state paid cash instead of the extra rice because it could not buy enough grain. Since early 2025 the extra 5 kg has been given as rice again through ration shops.",
      "The state has approved replacing the extra rice with an 'Indira food kit' (dal, oil, sugar, salt), but in September 2026 it cancelled the kit tender to redesign it. Until the new kit starts, the extra rice continues.",
    ],
    hi: [
      "अन्न भाग्य कर्नाटक की मुफ़्त अनाज योजना है और पाँच गारंटी योजनाओं में से एक है। अंत्योदय या BPL राशन कार्ड वाले परिवारों को राष्ट्रीय खाद्य सुरक्षा क़ानून के तहत हर महीने प्रति व्यक्ति 5 किलो मुफ़्त चावल पहले से मिलता है; राज्य प्रति व्यक्ति 5 किलो और जोड़ता है।",
      "कुछ समय तक राज्य ने पर्याप्त अनाज न मिलने पर अतिरिक्त चावल की जगह नक़द पैसा दिया। 2025 की शुरुआत से अतिरिक्त 5 किलो फिर से चावल के रूप में राशन दुकानों से मिल रहा है।",
      "राज्य ने अतिरिक्त चावल की जगह 'इंदिरा फ़ूड किट' (दाल, तेल, चीनी, नमक) देने को मंज़ूरी दी है, लेकिन सितंबर 2026 में किट का टेंडर रद्द कर उसे दोबारा तैयार करने का फ़ैसला किया। नई किट शुरू होने तक अतिरिक्त चावल मिलता रहेगा।",
    ],
  },
  benefits: {
    en: [
      "5 kg of extra free rice per person each month from the state, on top of the 5 kg central free ration (about 10 kg per person in total).",
      "Collected from your usual fair price (ration) shop after biometric check.",
      "This extra rice may be replaced by an Indira food kit once the redesigned kit is launched.",
    ],
    hi: [
      "केंद्र के 5 किलो मुफ़्त राशन के ऊपर राज्य से हर महीने प्रति व्यक्ति 5 किलो अतिरिक्त मुफ़्त चावल (कुल लगभग 10 किलो प्रति व्यक्ति)।",
      "बायोमेट्रिक जाँच के बाद अपनी सामान्य राशन दुकान से मिलता है।",
      "नई इंदिरा फ़ूड किट शुरू होने पर यह अतिरिक्त चावल उससे बदला जा सकता है।",
    ],
  },
  eligibilityText: {
    en: [
      "You live in Karnataka.",
      "Your family has an Antyodaya (AAY) or BPL / priority household ration card issued by the Karnataka Food and Civil Supplies Department.",
      "Your family members are listed on the card with Aadhaar linked (eKYC done).",
    ],
    hi: [
      "आप कर्नाटक में रहते हैं।",
      "आपके परिवार के पास कर्नाटक खाद्य एवं नागरिक आपूर्ति विभाग का अंत्योदय (AAY) या BPL / प्राथमिक परिवार राशन कार्ड है।",
      "परिवार के सदस्य आधार जोड़कर (eKYC करके) कार्ड में दर्ज हैं।",
    ],
  },
  exclusions: {
    en: [
      "APL ration card holders do not get the free rice.",
      "Members whose Aadhaar eKYC is not done on the ration card may not get their share.",
    ],
    hi: [
      "APL राशन कार्ड वालों को मुफ़्त चावल नहीं मिलता।",
      "जिन सदस्यों का राशन कार्ड पर आधार eKYC नहीं हुआ है, उन्हें उनका हिस्सा नहीं मिल सकता।",
    ],
  },
  applicationProcess: {
    online: {
      en: [
        "If you don't have a BPL card, apply for a new ration card on the Ahara portal (ahara.karnataka.gov.in) when applications are open.",
        "Track your ration card status and eKYC on the same portal.",
      ],
      hi: [
        "अगर आपके पास BPL कार्ड नहीं है, तो आवेदन खुले होने पर आहार पोर्टल (ahara.karnataka.gov.in) पर नए राशन कार्ड के लिए आवेदन करें।",
        "राशन कार्ड की स्थिति और eKYC इसी पोर्टल पर देखें।",
      ],
    },
    offline: {
      en: [
        "With a valid Antyodaya or BPL card, you don't need to apply separately.",
        "Go to your fair price shop each month, give your fingerprint and collect the rice.",
        "For card corrections or eKYC, visit a Grama One, Karnataka One or Bangalore One centre or the taluk food office.",
      ],
      hi: [
        "मान्य अंत्योदय या BPL कार्ड होने पर अलग से आवेदन की ज़रूरत नहीं है।",
        "हर महीने अपनी राशन दुकान जाएँ, अंगूठा लगाएँ और चावल लें।",
        "कार्ड में सुधार या eKYC के लिए ग्राम वन, कर्नाटक वन या बैंगलोर वन केंद्र या तालुक खाद्य कार्यालय जाएँ।",
      ],
    },
  },
  documents: {
    en: ["Antyodaya or BPL ration card", "Aadhaar of each family member (linked to the card)", "Fingerprint authentication at the ration shop"],
    hi: ["अंत्योदय या BPL राशन कार्ड", "परिवार के हर सदस्य का आधार (कार्ड से जुड़ा)", "राशन दुकान पर अंगूठे से पहचान"],
  },
  faqs: [
    {
      q: { en: "Do I still get cash instead of the extra rice?", hi: "क्या अब भी अतिरिक्त चावल की जगह नक़द पैसा मिलता है?" },
      a: {
        en: "No. The cash payment was a stop-gap. The extra 5 kg is now given as rice. A food kit may replace it later; watch for official announcements.",
        hi: "नहीं। नक़द भुगतान अस्थायी व्यवस्था थी। अब अतिरिक्त 5 किलो चावल के रूप में मिलता है। आगे इसकी जगह फ़ूड किट आ सकती है; सरकारी घोषणा पर नज़र रखें।",
      },
    },
    {
      q: { en: "Is there a separate application for Anna Bhagya?", hi: "क्या अन्न भाग्य के लिए अलग आवेदन करना होता है?" },
      a: {
        en: "No. Anyone on a valid Antyodaya or BPL card is covered automatically and collects the rice from the ration shop.",
        hi: "नहीं। मान्य अंत्योदय या BPL कार्ड में दर्ज हर व्यक्ति अपने-आप शामिल है और राशन दुकान से चावल ले सकता है।",
      },
    },
  ],

  officialUrl: "https://ahara.karnataka.gov.in/",
  sources: [
    "https://ahara.karnataka.gov.in/",
    "https://www.deccanherald.com/india/karnataka/karnataka-cabinet-modifies-anna-bhagya-scheme-will-provide-indira-kit-in-lieu-of-5-kg-rice-3758767",
    "https://www.etvbharat.com/en/state/from-rice-to-food-kits-then-a-rethink-karnataka-to-redesign-indira-kit-scheme-before-fresh-tender-enn26092103722",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2023,
  status: "check-status",
};

export default scheme;
