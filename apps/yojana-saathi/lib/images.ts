/**
 * Photography for the site (generated for this project; see assets/images/README.md).
 * Static imports give next/image the size and a blur placeholder; it serves AVIF/WebP per device.
 */
import type { StaticImageData } from "next/image";
import catAgriculture from "@/assets/images/cat-agriculture.jpg";
import catBusiness from "@/assets/images/cat-business.jpg";
import catDisability from "@/assets/images/cat-disability.jpg";
import catEducation from "@/assets/images/cat-education.jpg";
import catEnergySavings from "@/assets/images/cat-energy-savings.jpg";
import catHealth from "@/assets/images/cat-health.jpg";
import catHousing from "@/assets/images/cat-housing.jpg";
import catMinority from "@/assets/images/cat-minority.jpg";
import catPensionInsurance from "@/assets/images/cat-pension-insurance.jpg";
import catSkillsEmployment from "@/assets/images/cat-skills-employment.jpg";
import catSocialWelfare from "@/assets/images/cat-social-welfare.jpg";
import catWomenChild from "@/assets/images/cat-women-child.jpg";
import heroDesktop from "@/assets/images/hero-desktop.jpg";
import heroMobile from "@/assets/images/hero-mobile.jpg";
import kundliStory from "@/assets/images/kundli-story.jpg";
import kundliWide from "@/assets/images/kundli-wide.jpg";
import type { CategorySlug } from "@/data/taxonomy";
import type { Localized } from "./types";

export interface Photo {
  src: StaticImageData;
  alt: Localized;
}

export const HERO = {
  desktop: {
    src: heroDesktop,
    alt: {
      en: "A young woman in a teal saree smiles at her phone in a mustard field at sunset while her mother looks on",
      hi: "सरसों के खेत में सूर्यास्त के समय हरी-नीली साड़ी में एक युवती मुस्कुराते हुए फ़ोन देख रही है, साथ में उसकी माँ",
    },
  },
  mobile: {
    src: heroMobile,
    alt: {
      en: "A schoolgirl shows her grandmother something on a phone as they sit laughing on their doorstep",
      hi: "दरवाज़े की सीढ़ी पर बैठी एक स्कूली छात्रा अपनी दादी को फ़ोन पर कुछ दिखा रही है और दोनों हँस रही हैं",
    },
  },
} satisfies Record<string, Photo>;

/** Night-sky backdrops for the Sarkari Kundli (decorative) */
export const COSMIC = { story: kundliStory, wide: kundliWide };

export const CATEGORY_PHOTOS: Record<CategorySlug, Photo> = {
  agriculture: {
    src: catAgriculture,
    alt: { en: "A farmer couple walks along a green wheat field with drip irrigation", hi: "ड्रिप सिंचाई वाले हरे गेहूँ के खेत की मेड़ पर चलता किसान दंपति" },
  },
  health: {
    src: catHealth,
    alt: { en: "A health worker checks an elderly man's blood pressure in a bright clinic", hi: "एक स्वास्थ्यकर्मी रोशन क्लिनिक में बुज़ुर्ग व्यक्ति का ब्लड प्रेशर जाँच रही है" },
  },
  housing: {
    src: catHousing,
    alt: { en: "A family celebrates in front of their newly built house with marigold garlands", hi: "गेंदे की मालाओं से सजे नए बने घर के सामने ख़ुशी मनाता परिवार" },
  },
  education: {
    src: catEducation,
    alt: { en: "A smiling schoolgirl rides her bicycle down a tree-lined village road", hi: "पेड़ों से घिरी गाँव की सड़क पर साइकिल चलाती मुस्कुराती छात्रा" },
  },
  "women-child": {
    src: catWomenChild,
    alt: { en: "A mother tenderly holds her newborn baby by a window", hi: "खिड़की के पास अपने नवजात शिशु को प्यार से गोद में लिए माँ" },
  },
  business: {
    src: catBusiness,
    alt: { en: "A woman entrepreneur stands proudly in her tailoring and textiles shop", hi: "अपनी सिलाई और कपड़े की दुकान में गर्व से खड़ी एक महिला उद्यमी" },
  },
  "pension-insurance": {
    src: catPensionInsurance,
    alt: { en: "An elderly couple shares tea and a laugh on a charpai in their courtyard", hi: "आँगन में चारपाई पर बैठकर चाय पीते और हँसते बुज़ुर्ग दंपति" },
  },
  "skills-employment": {
    src: catSkillsEmployment,
    alt: { en: "Trainees install a solar panel in a vocational training workshop", hi: "व्यावसायिक प्रशिक्षण कार्यशाला में सोलर पैनल लगाते प्रशिक्षु" },
  },
  "social-welfare": {
    src: catSocialWelfare,
    alt: { en: "A three-generation family shares a meal together at home", hi: "घर पर साथ बैठकर खाना खाता तीन पीढ़ियों का परिवार" },
  },
  disability: {
    src: catDisability,
    alt: { en: "A young man in a wheelchair works on a laptop in a bright office", hi: "रोशन दफ़्तर में व्हीलचेयर पर बैठकर लैपटॉप पर काम करता युवक" },
  },
  minority: {
    src: catMinority,
    alt: { en: "Students from diverse backgrounds study together in a college library", hi: "कॉलेज की लाइब्रेरी में साथ पढ़ते अलग-अलग समुदायों के विद्यार्थी" },
  },
  "energy-savings": {
    src: catEnergySavings,
    alt: { en: "A woman stands beside rooftop solar panels overlooking green hills", hi: "हरी पहाड़ियों की ओर देखती, छत पर लगे सोलर पैनल के पास खड़ी महिला" },
  },
};
