import type { Localized } from "@/lib/types";

export interface SiteFAQ {
  id: string;
  q: Localized;
  a: Localized;
}

/** Site-wide FAQs. The first five appear on the home page. */
export const FAQS: SiteFAQ[] = [
  {
    id: "what-is",
    q: { en: "What is Yojana Saathi?", hi: "योजना साथी क्या है?" },
    a: {
      en: "A free, independent website that explains central and state government schemes in plain language and checks which ones you may be eligible for. We are not a government website and we never take applications. You always apply on the official portal.",
      hi: "यह एक मुफ़्त, स्वतंत्र वेबसाइट है जो केंद्र और राज्य सरकार की योजनाओं को आसान भाषा में समझाती है और बताती है कि आप किनके पात्र हो सकते हैं। यह सरकारी वेबसाइट नहीं है और हम कोई आवेदन नहीं लेते। आवेदन हमेशा आधिकारिक पोर्टल पर ही होता है।",
    },
  },
  {
    id: "cost",
    q: { en: "Does it cost anything?", hi: "क्या इसके लिए कोई पैसा लगता है?" },
    a: {
      en: "No. Yojana Saathi is completely free. Government schemes are free to apply for too. Be careful of anyone who asks for money to 'get' you a scheme.",
      hi: "नहीं। योजना साथी पूरी तरह मुफ़्त है। सरकारी योजनाओं में आवेदन भी मुफ़्त होता है। योजना 'दिलाने' के नाम पर पैसे माँगने वालों से सावधान रहें।",
    },
  },
  {
    id: "accuracy",
    q: { en: "How accurate is the eligibility check?", hi: "पात्रता जाँच कितनी सही है?" },
    a: {
      en: "We match your answers against each scheme's published rules. It's a strong first guide, but the final decision is always made by the department that runs the scheme, and some conditions (like land records or marks) can only be checked by them.",
      hi: "हम आपके जवाबों को हर योजना के प्रकाशित नियमों से मिलाते हैं। यह एक अच्छी शुरुआती जानकारी है, पर अंतिम फ़ैसला हमेशा योजना चलाने वाला विभाग ही करता है। कुछ शर्तें (जैसे ज़मीन के रिकॉर्ड या अंक) सिर्फ़ वही जाँच सकते हैं।",
    },
  },
  {
    id: "privacy",
    q: { en: "Do I need to share Aadhaar or my exact income?", hi: "क्या मुझे आधार या अपनी सटीक आय बतानी होगी?" },
    a: {
      en: "Never. We only ask for an income range, and your answers stay on your device unless you choose to sign in to sync them.",
      hi: "कभी नहीं। हम सिर्फ़ आय की एक सीमा पूछते हैं, और जब तक आप सिंक के लिए साइन इन न करें, आपके जवाब आपके ही फ़ोन या कंप्यूटर पर रहते हैं।",
    },
  },
  {
    id: "kundli",
    q: { en: "What is the Sarkari Kundli?", hi: "सरकारी कुंडली क्या है?" },
    a: {
      en: "A fun chart of every government benefit you could access across your life, from education to senior years, built from real scheme rules. No stars involved, just the rules of every scheme.",
      hi: "यह एक मज़ेदार चार्ट है जो पढ़ाई से लेकर बुढ़ापे तक, आपकी पूरी ज़िंदगी में मिल सकने वाले सरकारी लाभ दिखाता है, असली योजना-नियमों के आधार पर। इसमें कोई ग्रह-नक्षत्र नहीं, सिर्फ़ योजनाओं के नियम हैं।",
    },
  },
  {
    id: "login",
    q: { en: "Do I need to create an account?", hi: "क्या खाता बनाना ज़रूरी है?" },
    a: {
      en: "No. Everything works without signing in. Signing in (with a one-time code sent to your email) only lets you keep your profile, bookmarks and Kundli in sync across devices.",
      hi: "नहीं। बिना साइन इन के सब कुछ चलता है। ईमेल पर आए एक बार के कोड से साइन इन करने पर बस आपकी प्रोफ़ाइल, बुकमार्क और कुंडली दूसरे डिवाइस पर भी मिल जाती है।",
    },
  },
  {
    id: "apply",
    q: { en: "Can I apply for a scheme on this website?", hi: "क्या मैं इस वेबसाइट पर योजना के लिए आवेदन कर सकता/सकती हूँ?" },
    a: {
      en: "No. Each scheme page lists the steps and documents, and the 'Apply on official portal' button takes you to the government site where you actually apply.",
      hi: "नहीं। हर योजना पेज पर आवेदन के कदम और दस्तावेज़ दिए हैं, और 'आधिकारिक पोर्टल पर आवेदन करें' बटन आपको उस सरकारी साइट पर ले जाता है जहाँ असल में आवेदन होता है।",
    },
  },
  {
    id: "updated",
    q: { en: "How often is scheme information updated?", hi: "योजनाओं की जानकारी कितनी बार अपडेट होती है?" },
    a: {
      en: "Every scheme shows the date we last checked it against official sources. Schemes marked 'Check status' may have changed recently, so confirm on the official portal before applying.",
      hi: "हर योजना पर लिखा है कि हमने आख़िरी बार कब उसे आधिकारिक स्रोतों से जाँचा। 'स्थिति जाँचें' वाली योजनाओं में हाल में बदलाव हो सकता है, इसलिए आवेदन से पहले आधिकारिक पोर्टल पर पुष्टि कर लें।",
    },
  },
  {
    id: "almost",
    q: { en: "What does 'almost eligible' mean?", hi: "'लगभग पात्र' का क्या मतलब है?" },
    a: {
      en: "You meet every condition except one. We show which one, so you know whether it might change, for example once you reach a certain age.",
      hi: "आप एक को छोड़कर बाकी सभी शर्तें पूरी करते हैं। हम बताते हैं कि कौन सी शर्त बाकी है, ताकि आप जान सकें कि क्या वह आगे बदल सकती है, जैसे किसी उम्र तक पहुँचने पर।",
    },
  },
  {
    id: "state",
    q: { en: "Which states do you cover?", hi: "आप किन राज्यों की योजनाएँ दिखाते हैं?" },
    a: {
      en: "Every state and union territory, plus central schemes that apply everywhere. For each state we list its major schemes that we could confirm on official sources; some smaller schemes aren't listed yet. Pick your state on the States tab or in the search filters.",
      hi: "हर राज्य और केंद्रशासित प्रदेश, और पूरे देश में लागू केंद्रीय योजनाएँ। हर राज्य की वे मुख्य योजनाएँ दी गई हैं जिन्हें हम आधिकारिक स्रोतों पर पक्का कर पाए; कुछ छोटी योजनाएँ अभी नहीं जुड़ी हैं। 'राज्य' टैब या खोज के फ़िल्टर में अपना राज्य चुनें।",
    },
  },
  {
    id: "wrong",
    q: { en: "I found a mistake. How do I report it?", hi: "मुझे कोई गलती दिखी। कैसे बताऊँ?" },
    a: {
      en: "Use the 'Report an issue' button on any scheme page, or write to us from the Contact page. We review every report.",
      hi: "किसी भी योजना पेज पर 'समस्या बताएँ' बटन का इस्तेमाल करें या संपर्क पेज से हमें लिखें। हम हर रिपोर्ट देखते हैं।",
    },
  },
  {
    id: "agent",
    q: { en: "Someone offered to get me a scheme for a fee. Is that legitimate?", hi: "कोई पैसे लेकर योजना दिलाने की बात कर रहा है। क्या यह सही है?" },
    a: {
      en: "Be careful. Applying for government schemes is free. Official common service centres (CSCs) may charge a small notified fee for help with forms, but no one can guarantee approval for money.",
      hi: "सावधान रहें। सरकारी योजनाओं में आवेदन मुफ़्त होता है। आधिकारिक कॉमन सर्विस सेंटर (CSC) फ़ॉर्म भरने में मदद के लिए तय छोटा शुल्क ले सकते हैं, लेकिन पैसे लेकर मंज़ूरी की गारंटी कोई नहीं दे सकता।",
    },
  },
];
