import { all, female, isTrue, residentOf } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "saraswati-cycle-yojana",
  tier: "compact",
  name: { en: "Saraswati Cycle Yojana", hi: "सरस्वती साइकिल योजना" },
  aka: ["Saraswati Cycle Vitran Yojana", "free cycle for girls Chhattisgarh", "Saraswati Saikil"],
  shortDescription: {
    en: "Eligible girls studying in Class 9 in Chhattisgarh government schools get a free bicycle so they can reach school easily.",
    hi: "छत्तीसगढ़ के सरकारी स्कूलों में कक्षा 9वीं में पढ़ने वाली पात्र छात्राओं को मुफ़्त साइकिल मिलती है, ताकि वे आसानी से स्कूल पहुँच सकें।",
  },
  level: "state",
  state: "chhattisgarh",
  department: {
    en: "School Education Department, Government of Chhattisgarh",
    hi: "स्कूल शिक्षा विभाग, छत्तीसगढ़ सरकार",
  },
  categories: ["education", "women-child"],
  tags: ["bicycle", "cycle", "girls", "class 9", "school", "chhattisgarh"],
  benefitType: "in-kind",
  isDBT: false,
  kundliHouse: "education",
  eligibility: all(residentOf("chhattisgarh"), female(), isTrue("student")),

  details: {
    en: [
      "Saraswati Cycle Yojana gives free bicycles to girls who reach Class 9, so that distance does not stop them from going to high school. It matters most in villages and remote areas where school is far and buses are few.",
      "Cycles are handed out at the school, usually early in the school year.",
    ],
    hi: [
      "सरस्वती साइकिल योजना में कक्षा 9वीं में पहुँचने वाली छात्राओं को मुफ़्त साइकिल दी जाती है, ताकि दूरी की वजह से उनकी हाई स्कूल की पढ़ाई न छूटे। यह ख़ासकर गाँवों और दूर-दराज़ के इलाक़ों में काम आती है, जहाँ स्कूल दूर है और बसें कम हैं।",
      "साइकिलें स्कूल में ही, आमतौर पर सत्र की शुरुआत में बाँटी जाती हैं।",
    ],
  },
  benefits: {
    en: ["A free bicycle for the girl student.", "Saves walking time so more time is left for study."],
    hi: ["छात्रा को मुफ़्त साइकिल।", "पैदल चलने का समय बचता है, जिससे पढ़ाई के लिए ज़्यादा समय मिलता है।"],
  },
  eligibilityText: {
    en: [
      "A girl studying in Class 9 in a government school in Chhattisgarh.",
      "The school decides which girls are eligible under the department's rules; ask your school for the current conditions.",
    ],
    hi: [
      "छत्तीसगढ़ के सरकारी स्कूल में कक्षा 9वीं में पढ़ने वाली छात्रा।",
      "विभाग के नियमों के अनुसार कौन पात्र है, यह स्कूल तय करता है; मौजूदा शर्तें अपने स्कूल से पूछें।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Take admission in Class 9 at a government school.",
        "The school prepares the list of eligible girls; give the school any details it asks for.",
        "Collect the cycle at the distribution event held at your school.",
      ],
      hi: [
        "सरकारी स्कूल में कक्षा 9वीं में दाख़िला लें।",
        "स्कूल पात्र छात्राओं की सूची बनाता है; स्कूल जो जानकारी माँगे, वह दें।",
        "स्कूल में होने वाले वितरण कार्यक्रम में साइकिल लें।",
      ],
    },
  },
  officialUrl: "https://eduportal.cg.nic.in/",
  sources: [
    "https://dprcg.gov.in/post/1791212142/%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7-%E0%A4%B2%E0%A5%87%E0%A4%96-%E0%A4%AA%E0%A4%82%E0%A4%96%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%80-%E0%A4%B0%E0%A4%AB%E0%A5%8D%E0%A4%A4%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A4%B0%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%A4%E0%A5%80-%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A4%BF%E0%A4%B2-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%B8%E0%A5%87-%E0%A4%AC%E0%A5%87%E0%A4%9F%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%80-%E0%A4%B6%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-%E0%A4%95%E0%A5%80-%E0%A4%B0%E0%A4%BE%E0%A4%B9-%E0%A4%B9%E0%A5%81%E0%A4%88-%E0%A4%86%E0%A4%B8%E0%A4%BE%E0%A4%A8",
    "https://dprcg.gov.in/post/1785937167/%E0%A4%AC%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%B8%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B8%E0%A4%B0%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%A4%E0%A5%80-%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A4%BF%E0%A4%B2-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%95%E0%A5%87-%E0%A4%A4%E0%A4%B9%E0%A4%A4-37-%E0%A4%9B%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A5%80-%E0%A4%A8%E0%A4%BF%E0%A4%83%E0%A4%B6%E0%A5%81%E0%A4%B2%E0%A5%8D%E0%A4%95-%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%95%E0%A4%BF%E0%A4%B2%E0%A5%87%E0%A4%82",
  ],
  lastVerified: "2026-10-06",
  launchedYear: 2004,
  status: "active",
};

export default scheme;
