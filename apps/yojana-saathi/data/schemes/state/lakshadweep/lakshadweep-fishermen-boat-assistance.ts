import { all, labelled, residentOf, when } from "@/lib/engine/build";
import type { Scheme } from "@/lib/types";

const scheme: Scheme = {
  slug: "lakshadweep-fishermen-boat-assistance",
  tier: "compact",
  name: { en: "Lakshadweep Fisheries Assistance Schemes (UT, DBT)", hi: "लक्षद्वीप मत्स्य सहायता योजनाएँ (केंद्र शासित प्रदेश, DBT)" },
  aka: ["Lakshadweep fishing boat subsidy", "Lakshadweep fisheries DBT schemes"],
  shortDescription: {
    en: "Lakshadweep fishers can get UT financial help, paid by DBT, to build or upgrade fishing boats and buy deep freezers, ice or fish boxes and processing units.",
    hi: "लक्षद्वीप के मछुआरों को मछली पकड़ने की नाव बनाने या सुधारने, डीप फ़्रीज़र, बर्फ़ या मछली के बक्से और प्रोसेसिंग यूनिट के लिए केंद्र शासित प्रदेश से DBT के ज़रिए आर्थिक मदद मिल सकती है।",
  },
  level: "state",
  state: "lakshadweep",
  department: {
    en: "Department of Fisheries, Lakshadweep Administration",
    hi: "मत्स्य विभाग, लक्षद्वीप प्रशासन",
  },
  categories: ["agriculture", "business"],
  tags: ["fishermen", "fishing boat", "subsidy", "fisheries", "dbt", "lakshadweep"],
  benefitType: "cash",
  isDBT: true,
  kundliHouse: "business",
  eligibility: all(
    residentOf("lakshadweep"),
    labelled(when("occupation", "in", ["fisher"]), { en: "You work in fishing", hi: "आप मछली पकड़ने का काम करते हैं" }),
  ),

  details: {
    en: [
      "Besides the central PMMSY scheme, the Lakshadweep Department of Fisheries runs its own beneficiary schemes, paid by Direct Benefit Transfer. They help island fishers build pole-and-line, gill-net or long-line vessels and other fishing craft, and upgrade or renovate old ones.",
      "The same set of UT schemes also supports hygienic fish processing platforms (such as mass-making yards), deep freezers and ice or fish boxes. The department invites applications each year; the share of cost it pays is set in that year's notice, so check with your island's fisheries unit.",
    ],
    hi: [
      "केंद्र की PMMSY योजना के अलावा लक्षद्वीप का मत्स्य विभाग अपनी लाभार्थी योजनाएँ भी चलाता है, जिनका पैसा DBT से दिया जाता है। ये द्वीप के मछुआरों को पोल-एंड-लाइन, गिल-नेट या लॉन्ग-लाइन जहाज़ और दूसरी नावें बनाने, और पुरानी नावों को सुधारने या नया करने में मदद करती हैं।",
      "इन्हीं योजनाओं में साफ़-सुथरे मछली प्रोसेसिंग प्लेटफ़ॉर्म (जैसे मास मेकिंग यार्ड), डीप फ़्रीज़र और बर्फ़ या मछली के बक्सों के लिए भी मदद मिलती है। विभाग हर साल आवेदन माँगता है; ख़र्च का कितना हिस्सा मिलेगा, यह उस साल की सूचना में तय होता है, इसलिए अपने द्वीप की मत्स्य इकाई से पूछें।",
    ],
  },
  benefits: {
    en: [
      "Help to build a fishing vessel (pole-and-line, gill-netter or long-liner) or other fishing craft.",
      "Help to upgrade or renovate an existing fishing boat.",
      "Help for hygienic fish processing units, deep freezers, and ice or fish boxes.",
    ],
    hi: [
      "मछली पकड़ने का जहाज़ (पोल-एंड-लाइन, गिल-नेटर या लॉन्ग-लाइनर) या दूसरी नाव बनाने में मदद।",
      "मौजूदा नाव को सुधारने या नया करने में मदद।",
      "साफ़-सुथरी मछली प्रोसेसिंग यूनिट, डीप फ़्रीज़र और बर्फ़ या मछली के बक्सों के लिए मदद।",
    ],
  },
  eligibilityText: {
    en: [
      "A fisher living in Lakshadweep.",
      "Applies when the Department of Fisheries invites applications for the year.",
      "Meets the conditions in that year's notice (such as boat registration and own share of cost).",
    ],
    hi: [
      "लक्षद्वीप में रहने वाला मछुआरा।",
      "जब मत्स्य विभाग उस साल के लिए आवेदन माँगे, तब आवेदन करे।",
      "उस साल की सूचना की शर्तें पूरी करे (जैसे नाव का पंजीकरण और अपने हिस्से का ख़र्च)।",
    ],
  },
  applicationProcess: {
    offline: {
      en: [
        "Watch for the Department of Fisheries notice inviting applications for beneficiary schemes (posted on lakshadweep.gov.in).",
        "Get the form from the fisheries unit on your island and fill it in for the item you need.",
        "Submit it with your documents and bank details to the fisheries unit before the last date.",
      ],
      hi: [
        "लाभार्थी योजनाओं के लिए आवेदन माँगने वाली मत्स्य विभाग की सूचना पर नज़र रखें (lakshadweep.gov.in पर आती है)।",
        "अपने द्वीप की मत्स्य इकाई से फ़ॉर्म लें और जिस चीज़ की ज़रूरत है उसके लिए भरें।",
        "आख़िरी तारीख़ से पहले दस्तावेज़ और बैंक की जानकारी के साथ मत्स्य इकाई में जमा करें।",
      ],
    },
  },

  officialUrl: "https://lakshadweep.gov.in/departments/fisheries/",
  sources: ["https://lakshadweep.gov.in/departments/fisheries/"],
  lastVerified: "2026-10-06",
  launchedYear: 2025,
  status: "check-status",
};

export default scheme;
