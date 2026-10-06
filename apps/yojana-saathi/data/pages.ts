import type { Localized } from "@/lib/types";

export interface PageSection {
  heading: Localized;
  body: Localized<string[]>;
}

export interface StaticPageContent {
  title: Localized;
  intro: Localized;
  updated: string;
  sections: PageSection[];
}

const UPDATED = "2026-10-06";

export const PAGES = {
  about: {
    title: { en: "About Yojana Saathi", hi: "योजना साथी के बारे में" },
    intro: {
      en: "Yojana Saathi is a free, independent guide to Indian government schemes, built so that anyone can find what they're entitled to in a few minutes, in their own language.",
      hi: "योजना साथी भारतीय सरकारी योजनाओं की एक मुफ़्त, स्वतंत्र गाइड है, ताकि कोई भी कुछ ही मिनटों में अपनी भाषा में जान सके कि वह किन लाभों का हक़दार है।",
    },
    updated: UPDATED,
    sections: [
      {
        heading: { en: "Why we built it", hi: "हमने इसे क्यों बनाया" },
        body: {
          en: [
            "Thousands of welfare schemes exist across central and state governments, but the information is spread across many websites, written in official language, and often hard to apply to your own situation.",
            "Many families miss out on benefits they qualify for, or pay middlemen for help that should be free. We want to change that by putting the rules in plain words and checking them for you.",
          ],
          hi: [
            "केंद्र और राज्य सरकारों की हज़ारों कल्याण योजनाएँ हैं, लेकिन उनकी जानकारी कई वेबसाइटों पर बिखरी है, सरकारी भाषा में लिखी है और अपनी स्थिति पर लागू करना मुश्किल होता है।",
            "कई परिवार उन लाभों से चूक जाते हैं जिनके वे हक़दार हैं, या उस मदद के लिए बिचौलियों को पैसे देते हैं जो मुफ़्त होनी चाहिए। हम नियमों को आसान शब्दों में रखकर और आपके लिए उन्हें जाँचकर यह बदलना चाहते हैं।",
          ],
        },
      },
      {
        heading: { en: "What we do", hi: "हम क्या करते हैं" },
        body: {
          en: [
            "We read official guidelines, notifications and portals, and rewrite each scheme in our own simple words in English and Hindi.",
            "Our eligibility checker turns each scheme's rules into questions, so you see what you may qualify for, what you almost qualify for, and why.",
            "The Sarkari Kundli shows the benefits you could access across your whole life in one playful chart, built only from real scheme rules.",
          ],
          hi: [
            "हम आधिकारिक दिशानिर्देश, अधिसूचनाएँ और पोर्टल पढ़ते हैं और हर योजना को अपने आसान शब्दों में हिन्दी और अंग्रेज़ी में लिखते हैं।",
            "हमारा पात्रता जाँचने वाला टूल हर योजना के नियमों को सवालों में बदल देता है, ताकि आप देख सकें कि आप किसके पात्र हो सकते हैं, किसके लगभग पात्र हैं, और क्यों।",
            "सरकारी कुंडली एक मज़ेदार चार्ट में दिखाती है कि पूरी ज़िंदगी में आप कौन-कौन से लाभ ले सकते हैं, सिर्फ़ असली योजना-नियमों के आधार पर।",
          ],
        },
      },
      {
        heading: { en: "What we don't do", hi: "हम क्या नहीं करते" },
        body: {
          en: [
            "We are not a government website and we are not affiliated with any government department. We don't accept applications, payments or documents, and we never ask for Aadhaar, PAN or bank details.",
            "We always send you to the official portal to apply.",
          ],
          hi: [
            "हम सरकारी वेबसाइट नहीं हैं और किसी सरकारी विभाग से जुड़े नहीं हैं। हम न आवेदन लेते हैं, न भुगतान, न दस्तावेज़, और कभी आधार, पैन या बैंक विवरण नहीं माँगते।",
            "आवेदन के लिए हम आपको हमेशा आधिकारिक पोर्टल पर भेजते हैं।",
          ],
        },
      },
      {
        heading: { en: "How we keep information accurate", hi: "हम जानकारी सही कैसे रखते हैं" },
        body: {
          en: [
            "Every scheme lists the official sources we used and the date we last checked them. When we can't confirm that a detail is current, we mark the scheme 'Check status' instead of guessing.",
            "If you spot something outdated, please use 'Report an issue' on the scheme page.",
          ],
          hi: [
            "हर योजना के साथ वे आधिकारिक स्रोत दिए हैं जिनसे हमने जानकारी ली, और आख़िरी जाँच की तारीख भी। जब हम पक्का नहीं कर पाते कि कोई जानकारी अभी भी सही है, तो अंदाज़ा लगाने के बजाय योजना पर 'स्थिति जाँचें' लिख देते हैं।",
            "अगर आपको कुछ पुराना दिखे, तो योजना पेज पर 'समस्या बताएँ' का इस्तेमाल करें।",
          ],
        },
      },
    ],
  },

  disclaimer: {
    title: { en: "Disclaimer", hi: "अस्वीकरण" },
    intro: {
      en: "Yojana Saathi is an independent project. It is not affiliated with, endorsed by, or operated by the Government of India or any state government.",
      hi: "योजना साथी एक स्वतंत्र प्रोजेक्ट है। यह भारत सरकार या किसी राज्य सरकार से जुड़ा, उसके द्वारा समर्थित या संचालित नहीं है।",
    },
    updated: UPDATED,
    sections: [
      {
        heading: { en: "Information only", hi: "सिर्फ़ जानकारी के लिए" },
        body: {
          en: [
            "Everything on this site is general information to help you understand government schemes. It is not legal, financial or official advice.",
            "Scheme rules, amounts and deadlines change. Always confirm the details on the official portal or with the department before you apply or make decisions.",
          ],
          hi: [
            "इस साइट पर सब कुछ सामान्य जानकारी है, ताकि आप सरकारी योजनाओं को समझ सकें। यह कानूनी, वित्तीय या आधिकारिक सलाह नहीं है।",
            "योजनाओं के नियम, राशि और अंतिम तिथियाँ बदलती रहती हैं। आवेदन करने या कोई फ़ैसला लेने से पहले आधिकारिक पोर्टल या विभाग से जानकारी ज़रूर पक्की करें।",
          ],
        },
      },
      {
        heading: { en: "Eligibility results", hi: "पात्रता के नतीजे" },
        body: {
          en: [
            "Our eligibility check compares your answers with each scheme's published rules. It cannot verify documents, land records or other conditions, so a result of 'eligible' is not a guarantee and 'not eligible' is not a final decision.",
            "The department running a scheme makes the final decision.",
          ],
          hi: [
            "हमारी पात्रता जाँच आपके जवाबों को हर योजना के प्रकाशित नियमों से मिलाती है। यह दस्तावेज़, ज़मीन के रिकॉर्ड या दूसरी शर्तें नहीं जाँच सकती, इसलिए 'पात्र' का नतीजा कोई गारंटी नहीं है और 'पात्र नहीं' अंतिम फ़ैसला नहीं है।",
            "अंतिम फ़ैसला योजना चलाने वाला विभाग करता है।",
          ],
        },
      },
      {
        heading: { en: "Sarkari Kundli estimates", hi: "सरकारी कुंडली के अनुमान" },
        body: {
          en: [
            "The Sarkari Kundli is a playful way to see scheme data. It is not astrology. All amounts in it are rough estimates based on stated assumptions and today's rules, which may change.",
          ],
          hi: ["सरकारी कुंडली योजनाओं की जानकारी देखने का एक मज़ेदार तरीका है। यह ज्योतिष नहीं है। इसमें दी गई सभी राशियाँ बताई गई मान्यताओं और आज के नियमों पर आधारित मोटे अनुमान हैं, जो बदल सकते हैं।"],
        },
      },
      {
        heading: { en: "External links", hi: "बाहरी लिंक" },
        body: {
          en: ["We link to official and public websites for your convenience. We are not responsible for their content, availability or privacy practices."],
          hi: ["आपकी सुविधा के लिए हम आधिकारिक और सार्वजनिक वेबसाइटों के लिंक देते हैं। उनकी सामग्री, उपलब्धता या निजता नीतियों के लिए हम ज़िम्मेदार नहीं हैं।"],
        },
      },
    ],
  },

  terms: {
    title: { en: "Terms of use", hi: "उपयोग की शर्तें" },
    intro: {
      en: "By using Yojana Saathi you agree to these simple terms. We've kept them short and readable.",
      hi: "योजना साथी इस्तेमाल करके आप इन आसान शर्तों से सहमत होते हैं। हमने इन्हें छोटा और समझने लायक रखा है।",
    },
    updated: UPDATED,
    sections: [
      {
        heading: { en: "Using the site", hi: "साइट का इस्तेमाल" },
        body: {
          en: [
            "Yojana Saathi is free for personal, non-commercial use. You can browse, search, check eligibility and share links without an account.",
            "Please don't misuse the site: no attempts to break it, overload it, scrape it at scale, or use it to mislead others.",
          ],
          hi: [
            "योजना साथी निजी, गैर-व्यावसायिक इस्तेमाल के लिए मुफ़्त है। बिना खाते के आप योजनाएँ देख, खोज सकते हैं, पात्रता जाँच सकते हैं और लिंक शेयर कर सकते हैं।",
            "कृपया साइट का दुरुपयोग न करें: इसे तोड़ने, इस पर बोझ डालने, बड़े पैमाने पर डेटा निकालने या दूसरों को गुमराह करने की कोशिश न करें।",
          ],
        },
      },
      {
        heading: { en: "No guarantees", hi: "कोई गारंटी नहीं" },
        body: {
          en: [
            "We work hard to keep information accurate, but we can't guarantee it is complete or current. Use it as a guide and confirm with official sources (see the Disclaimer).",
            "We are not liable for decisions made, or benefits missed, based on information on this site.",
          ],
          hi: [
            "हम जानकारी सही रखने की पूरी कोशिश करते हैं, पर यह गारंटी नहीं दे सकते कि वह पूरी या ताज़ा है। इसे मार्गदर्शन की तरह इस्तेमाल करें और आधिकारिक स्रोतों से पक्का करें (अस्वीकरण देखें)।",
            "इस साइट की जानकारी के आधार पर लिए गए फ़ैसलों या छूटे हुए लाभों के लिए हम ज़िम्मेदार नहीं हैं।",
          ],
        },
      },
      {
        heading: { en: "Accounts", hi: "खाते" },
        body: {
          en: ["Signing in is optional and only used to sync your answers, saved schemes and Kundli. You can delete your account and all its data at any time from your profile page."],
          hi: ["साइन इन करना वैकल्पिक है और सिर्फ़ आपके जवाब, सेव योजनाएँ और कुंडली सिंक करने के लिए है। आप कभी भी प्रोफ़ाइल पेज से अपना खाता और उसका सारा डेटा हटा सकते हैं।"],
        },
      },
      {
        heading: { en: "Changes", hi: "बदलाव" },
        body: {
          en: ["We may update these terms. The date at the top shows the latest version."],
          hi: ["हम इन शर्तों को अपडेट कर सकते हैं। ऊपर दी गई तारीख नवीनतम संस्करण बताती है।"],
        },
      },
    ],
  },

  privacy: {
    title: { en: "Privacy", hi: "गोपनीयता" },
    intro: {
      en: "Short version: we ask for as little as possible, your answers stay on your device unless you choose to sync them, and you can delete everything instantly.",
      hi: "संक्षेप में: हम कम से कम जानकारी माँगते हैं, जब तक आप सिंक न चुनें, आपके जवाब आपके डिवाइस पर ही रहते हैं, और आप सब कुछ तुरंत हटा सकते हैं।",
    },
    updated: UPDATED,
    sections: [
      {
        heading: { en: "What we never ask for", hi: "हम क्या कभी नहीं माँगते" },
        body: {
          en: ["We never ask for your Aadhaar number, PAN, bank account, phone number or exact income. Income is only ever asked as a range."],
          hi: ["हम कभी आपका आधार नंबर, पैन, बैंक खाता, फ़ोन नंबर या सटीक आय नहीं माँगते। आय सिर्फ़ एक सीमा के रूप में पूछी जाती है।"],
        },
      },
      {
        heading: { en: "Your answers", hi: "आपके जवाब" },
        body: {
          en: [
            "When you answer the eligibility questions, your answers are saved in your browser's local storage on your device. They are not sent to our servers.",
            "If you sign in, your answers, saved schemes and Kundli ticks are stored in your account so they sync across devices. Only you can read them.",
          ],
          hi: [
            "जब आप पात्रता के सवालों के जवाब देते हैं, तो वे आपके डिवाइस पर ब्राउज़र के लोकल स्टोरेज में सेव होते हैं। वे हमारे सर्वर पर नहीं भेजे जाते।",
            "अगर आप साइन इन करते हैं, तो आपके जवाब, सेव योजनाएँ और कुंडली के निशान आपके खाते में रखे जाते हैं ताकि वे सभी डिवाइस पर सिंक हों। उन्हें सिर्फ़ आप देख सकते हैं।",
          ],
        },
      },
      {
        heading: { en: "Signing in", hi: "साइन इन" },
        body: {
          en: ["If you sign in, we store your email address to send you one-time sign-in codes. We don't send marketing emails and we don't share your email with anyone."],
          hi: ["साइन इन करने पर हम एक बार के कोड भेजने के लिए आपका ईमेल पता रखते हैं। हम मार्केटिंग ईमेल नहीं भेजते और आपका ईमेल किसी से साझा नहीं करते।"],
        },
      },
      {
        heading: { en: "Reports and messages", hi: "रिपोर्ट और संदेश" },
        body: {
          en: ["If you report an issue or contact us, we keep your message, the page it was about and, only if you give it, your email so we can reply."],
          hi: ["अगर आप कोई समस्या बताते हैं या हमसे संपर्क करते हैं, तो हम आपका संदेश, संबंधित पेज और, सिर्फ़ अगर आप दें तो, आपका ईमेल रखते हैं ताकि जवाब दे सकें।"],
        },
      },
      {
        heading: { en: "Sharing your Kundli", hi: "अपनी कुंडली शेयर करना" },
        body: {
          en: ["Your Kundli share image is created on your own device. It never includes your caste, income, disability or other sensitive answers. Your first name appears only if you type it in."],
          hi: ["आपकी कुंडली की शेयर इमेज आपके अपने डिवाइस पर बनती है। इसमें कभी आपकी जाति, आय, दिव्यांगता या दूसरे संवेदनशील जवाब नहीं होते। आपका पहला नाम तभी दिखता है जब आप उसे खुद लिखें।"],
        },
      },
      {
        heading: { en: "Deleting your data", hi: "अपना डेटा हटाना" },
        body: {
          en: ["Go to My profile and choose delete. Without an account, this clears everything from your device. With an account, it permanently deletes the account and all synced data straight away."],
          hi: ["'मेरी प्रोफ़ाइल' में जाकर हटाने का विकल्प चुनें। बिना खाते के, यह आपके डिवाइस से सब कुछ मिटा देता है। खाते के साथ, यह खाता और सिंक हुआ सारा डेटा तुरंत हमेशा के लिए हटा देता है।"],
        },
      },
      {
        heading: { en: "Cookies and tracking", hi: "कुकीज़ और ट्रैकिंग" },
        body: {
          en: ["We don't use advertising or tracking cookies. We store small preferences (language, theme, text size) on your device so the site remembers them."],
          hi: ["हम विज्ञापन या ट्रैकिंग कुकीज़ का इस्तेमाल नहीं करते। हम छोटी पसंद (भाषा, थीम, अक्षरों का आकार) आपके डिवाइस पर रखते हैं ताकि साइट उन्हें याद रखे।"],
        },
      },
    ],
  },

  accessibility: {
    title: { en: "Accessibility statement", hi: "सुगम्यता वक्तव्य" },
    intro: {
      en: "We want Yojana Saathi to work for everyone, including people who use screen readers, keyboards, magnifiers or older phones. We aim to meet WCAG 2.2 Level AA.",
      hi: "हम चाहते हैं कि योजना साथी सभी के लिए काम करे, जिनमें स्क्रीन रीडर, कीबोर्ड, मैग्नीफ़ायर या पुराने फ़ोन इस्तेमाल करने वाले लोग भी शामिल हैं। हमारा लक्ष्य WCAG 2.2 लेवल AA है।",
    },
    updated: UPDATED,
    sections: [
      {
        heading: { en: "What we've built in", hi: "हमने क्या-क्या शामिल किया है" },
        body: {
          en: [
            "Text size control (A−, A, A+) in the header or menu, which scales the whole page.",
            "Light and dark themes, with text colours chosen for strong contrast in both.",
            "A 'Skip to main content' link, visible focus outlines and full keyboard navigation.",
            "Screen-reader friendly structure: proper headings, labelled buttons and form fields, and announcements when results change.",
            "Large tap targets (at least 48 pixels) and layouts designed for small screens first.",
            "Animations that switch off when your device is set to reduce motion.",
            "Every chart on the dashboard also has a table view.",
            "Content in English and Hindi.",
          ],
          hi: [
            "हेडर या मेन्यू में अक्षरों का आकार बदलने का विकल्प (A−, A, A+), जो पूरे पेज को बड़ा-छोटा करता है।",
            "लाइट और डार्क थीम, दोनों में साफ़ पढ़ने लायक रंग।",
            "'मुख्य सामग्री पर जाएँ' लिंक, साफ़ दिखने वाला फ़ोकस और पूरा कीबोर्ड नेविगेशन।",
            "स्क्रीन रीडर के अनुकूल ढाँचा: सही शीर्षक, नाम वाले बटन और फ़ॉर्म, और नतीजे बदलने पर घोषणा।",
            "बड़े टैप करने लायक बटन (कम से कम 48 पिक्सेल) और पहले छोटी स्क्रीन के लिए बना डिज़ाइन।",
            "डिवाइस पर 'कम मोशन' चुनने पर एनिमेशन बंद हो जाते हैं।",
            "डैशबोर्ड के हर चार्ट को तालिका के रूप में भी देखा जा सकता है।",
            "सामग्री हिन्दी और अंग्रेज़ी में।",
          ],
        },
      },
      {
        heading: { en: "Known limitations", hi: "ज्ञात कमियाँ" },
        body: {
          en: [
            "Links to official government portals take you to sites we don't control, and their accessibility may vary.",
            "Shared preview images for scheme pages are in English only.",
          ],
          hi: [
            "आधिकारिक सरकारी पोर्टलों के लिंक आपको ऐसी साइटों पर ले जाते हैं जो हमारे नियंत्रण में नहीं हैं, और उनकी सुगम्यता अलग हो सकती है।",
            "योजना पेजों की शेयर होने वाली प्रीव्यू इमेज सिर्फ़ अंग्रेज़ी में हैं।",
          ],
        },
      },
      {
        heading: { en: "Tell us about a problem", hi: "हमें समस्या बताएँ" },
        body: {
          en: ["If something is hard to use, please tell us through the Contact page. Describe what you were trying to do and what device or assistive technology you use, and we'll work on a fix."],
          hi: ["अगर कुछ इस्तेमाल करना मुश्किल लगे, तो संपर्क पेज से हमें बताएँ। आप क्या करना चाह रहे थे और कौन सा डिवाइस या सहायक तकनीक इस्तेमाल करते हैं, यह लिखें, हम उसे ठीक करने पर काम करेंगे।"],
        },
      },
    ],
  },
} satisfies Record<string, StaticPageContent>;

export type StaticPageKey = keyof typeof PAGES;
