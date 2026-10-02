// ─────────────────────────────────────────────────────────────────────────────
// DEAL POOL — edit freely. Every round picks 6 random GOOD + 6 random TRAPS.
//
//   e     emoji shown as the product "photo"
//   n     product name (keep it fictional — no real brands or stores)
//   p     sale price on the card (₹)
//   m     "MRP" shown struck-through (₹) — % OFF is computed from p/m
//   b     hype badge on the card
//   v     what it's REALLY worth / normal street price (₹)
//   why   one-line Hinglish reveal
//   fee   (optional) hidden extra paid on Buy — EMI fee, pre-ticked add-on…
//   type  (traps only) key of TRAP_TYPES
//   trick (optional, traps) custom label; defaults to TRAP_TYPES[type].label
//
// Buying gives (v − p − fee). Keep GOOD deals positive and TRAPS negative.
// Re-ordering this file changes which deck an old challenge seed produces.
// ─────────────────────────────────────────────────────────────────────────────

export type TrapType =
  | "mrp" | "emi" | "urgency" | "fineprint" | "gift"
  | "addon" | "sponsored" | "countdown" | "combo" | "exchange";

export interface Deal {
  e: string;
  n: string;
  p: number;
  m: number;
  b: string;
  v: number;
  why: string;
  fee?: number;
  type?: TrapType;
  trick?: string;
}

export const TRAP_TYPES: Record<TrapType, { label: string; icon: string }> = {
  mrp: { label: "Fake MRP", icon: "🏷️" },
  emi: { label: "No Cost EMI", icon: "💳" },
  urgency: { label: "Fake urgency", icon: "⏳" },
  fineprint: { label: "Fine print", icon: "🔍" },
  gift: { label: "Fake free gift", icon: "🎁" },
  addon: { label: "Pre-ticked extras", icon: "☑️" },
  sponsored: { label: "Sponsored #1", icon: "📢" },
  countdown: { label: "Fake countdown", icon: "⏱️" },
  combo: { label: "Combo trap", icon: "📦" },
  exchange: { label: "Exchange offer", icon: "🔄" },
};

export const GOOD: Deal[] = [
  { e: "🫙", n: "Mixer grinder 750W", p: 2499, m: 3999, b: "Sab cards pe ₹250 off", v: 3399, why: "Pichle 3 mahine ₹3,399 se neeche nahi gaya. Asli loot!" },
  { e: "🍲", n: "Pressure cooker 5L", p: 1099, m: 1800, b: "Diwali special", v: 1650, why: "Normally ₹1,650. Mummy proud hongi." },
  { e: "🔋", n: "Power bank 20000mAh", p: 899, m: 1999, b: "Top rated", v: 1399, why: "Saal bhar ₹1,399 rehta hai. Sahi pakda." },
  { e: "✂️", n: "Beard trimmer", p: 1199, m: 2499, b: "Limited deal", v: 1599, why: "Normal price ₹1,599. Genuine discount." },
  { e: "🛏️", n: "Double bedsheet set", p: 499, m: 1499, b: "Combo of 2 pillow covers", v: 799, why: "Usually ₹799. Ghar ke kaam ki cheez, smart buy." },
  { e: "🎒", n: "Laptop backpack", p: 699, m: 2199, b: "Water resistant", v: 1099, why: "Ye ₹1,099 se kam pehli baar aaya hai." },
  { e: "🖱️", n: "Gaming mouse", p: 549, m: 1499, b: "Deal of the day", v: 899, why: "Normal price ₹899. Badiya loot." },
  { e: "☕", n: "Instant coffee, pack of 3", p: 449, m: 690, b: "Daily essentials", v: 630, why: "Roz ka saman sale mein stock karna = asli bachat." },
  { e: "🫖", n: "Electric kettle 1.5L", p: 699, m: 1495, b: "Bestseller", v: 999, why: "Usually ₹999. Real discount hai." },
  { e: "👟", n: "Running shoes", p: 1799, m: 4999, b: "Your size available", v: 2799, why: "Isi model ka normal price ₹2,799. Seedha ₹1,000 bache." },
  { e: "🧴", n: "Sunscreen SPF 50, pack of 2", p: 399, m: 798, b: "Daily essentials", v: 598, why: "Ek tube ₹299 ki aati hai. Do ki ₹399 = seedha ₹199 bache." },
  { e: "🍳", n: "Non-stick tawa 28cm", p: 599, m: 1290, b: "Induction friendly", v: 949, why: "Normally ₹949. Roti gol bane na bane, deal gol hai." },
  { e: "🎮", n: "Wireless game controller", p: 1299, m: 2999, b: "Lowest in 6 months", v: 1899, why: "6 mahine se ₹1,899 pe atka tha. Pehli baar itna gira." },
  { e: "🔌", n: "Extension board, 4 socket", p: 349, m: 899, b: "Bestseller", v: 549, why: "Har ghar mein ek aur chahiye hi. Normal ₹549." },
  { e: "🧳", n: "Cabin trolley bag", p: 1999, m: 6499, b: "Limited deal", v: 2999, why: "Is size ka normal ₹2,999. Goa trip sorted." },
  { e: "🌀", n: "BLDC ceiling fan", p: 2799, m: 4990, b: "5 star rated", v: 3599, why: "BLDC fan normally ₹3,599. Bijli ka bill bhi kam." },
  { e: "🧼", n: "Detergent powder 6kg", p: 699, m: 1050, b: "Monthly saver", v: 899, why: "Mahine ka saman sale mein lena = pakki bachat. Normal ₹899." },
  { e: "🪔", n: "Diya + fairy lights set", p: 349, m: 999, b: "Festive pick", v: 549, why: "Diwali se ek hafta pehle yahi ₹549 ka hoga." },
  { e: "📷", n: "Webcam 1080p", p: 1199, m: 3499, b: "Deal of the day", v: 1799, why: "Normal ₹1,799. WFH waalon, ye lo." },
  { e: "🧘", n: "Yoga mat 6mm", p: 399, m: 1499, b: "Top rated", v: 699, why: "Saal bhar ₹699. Fitness resolution ab January ka wait nahi karega." },
];

export const TRAPS: Deal[] = [
  // Fake MRP
  { e: "🎧", n: "BassBoom Pro earbuds", p: 1299, m: 4999, b: "Lowest price ever!", v: 999, type: "mrp", why: "Pichle mahine ₹999 tha. ₹4,999 MRP sirf drama hai." },
  { e: "💡", n: "Smart bulb, pack of 4", p: 1299, m: 3196, b: "Lowest price of the year", v: 999, type: "mrp", trick: "Fake 'lowest'", why: "Pichli sale mein ₹999 tha. 'Year' matlab sirf January se." },
  // No Cost EMI
  { e: "⌚", n: "FitPulse smartwatch", p: 1999, m: 6999, b: "No Cost EMI", v: 1799, fee: 236, type: "emi", why: "₹199 processing fee + GST alag lagta hai. Aur normal price ₹1,799 hai." },
  { e: "📹", n: "ZoomX action camera", p: 3499, m: 9999, b: "No Cost EMI from ₹292/mo", v: 2999, fee: 353, type: "emi", why: "'No cost' tha, par ₹299 fee + GST lag gaya. Bahar ₹2,999 ka." },
  // Fake urgency
  { e: "🍟", n: "Air fryer 4L", p: 3999, m: 9999, b: "Sirf 2 bache hain!", v: 3299, type: "urgency", why: "'2 left' 3 din se dikha raha hai. Diwali sale mein ₹3,299 hoga." },
  { e: "🧥", n: "Puffer jacket", p: 1899, m: 5999, b: "🔥 486 log abhi dekh rahe hain", v: 1399, type: "urgency", why: "Ye number har product pe random dikhta hai. Normal ₹1,399." },
  // Bank-offer fine print
  { e: "👗", n: "Cotton kurta set", p: 799, m: 2999, b: "Extra 10% off on cards*", v: 599, type: "fineprint", why: "*Min order ₹5,000. Extra discount mila hi nahi. Normal price ₹599." },
  { e: "🎙️", n: "Gaming headset 7.1", p: 1499, m: 3999, b: "Extra ₹400 off on credit card*", v: 1099, type: "fineprint", why: "*Sirf ₹4,999+ ke EMI order pe. Tumhe ₹0 mila. Normal ₹1,099." },
  // Fake free gift
  { e: "🌈", n: "RGB LED strip 5m", p: 1499, m: 3999, b: "FREE gift worth ₹999!", v: 1099, type: "gift", why: "'Gift' ek ₹49 ka keychain hai. Strip akeli ₹1,099 ki milti hai." },
  { e: "💨", n: "Hair dryer 1200W", p: 1299, m: 2999, b: "FREE comb set worth ₹599!", v: 849, type: "gift", why: "'₹599 ka' comb set ₹40 ka plastic hai. Dryer akela ₹849 mein milta hai." },
  // Pre-ticked add-ons
  { e: "💧", n: "RO water purifier", p: 6999, m: 15999, b: "No Cost EMI + Protection", v: 6499, fee: 799, type: "addon", why: "Cart mein ₹799 ka extended warranty pehle se tick tha. Dekha hi nahi." },
  { e: "📺", n: "Streaming stick 4K", p: 2799, m: 4999, b: "+ 1 year Screen Protect", v: 2599, fee: 399, type: "addon", why: "₹399 ka 'Screen Protect' plan pehle se ticked tha. Stick ki screen hi nahi hai!" },
  // Sponsored "#1"
  { e: "🤳", n: "Ring light 18 inch", p: 799, m: 2999, b: "#1 Bestseller (Sponsored)", v: 449, type: "sponsored", why: "'#1' ad ka paisa dekar bana. Same light ₹449 mein milti hai." },
  { e: "🛋️", n: "Bean bag XXXL", p: 999, m: 3499, b: "#1 in Furniture (Sponsored)", v: 599, type: "sponsored", why: "'#1' tag ad tha. Same bean bag ₹599 mein mil raha tha." },
  // Fake countdown
  { e: "🔊", n: "Party speaker 40W", p: 2499, m: 7999, b: "Price badhega in 00:59!", v: 1999, type: "countdown", why: "Ye timer har refresh pe 00:59 se shuru hota hai. Normal price ₹1,999." },
  { e: "🥘", n: "Induction cooktop", p: 2199, m: 5499, b: "Deal khatam in 04:59", v: 1699, type: "countdown", why: "Kal bhi 04:59 tha, parso bhi. Normal ₹1,699." },
  // Unnecessary combos
  { e: "📱", n: "Phone covers, buy 3 get 2 free", p: 599, m: 2495, b: "5 covers!", v: 150, type: "combo", why: "5 covers? Phone toh ek hi hai. Kaam ka sirf ek, ₹150 ka." },
  { e: "🧦", n: "Socks, pack of 12", p: 699, m: 2388, b: "12 pairs combo!", v: 299, type: "combo", why: "Pehnoge 3, baaki 9 almari mein. Kaam ka ₹299 ka hi." },
  // Exchange-offer tricks
  { e: "📲", n: "Nova 5G phone 128GB", p: 8499, m: 14999, b: "Exchange pe extra ₹2,000 off*", v: 7499, type: "exchange", why: "Purane phone ki value sirf ₹450 lagayi. Offline yahi ₹7,499 mein." },
  { e: "⌨️", n: "Mechanical keyboard", p: 2299, m: 5999, b: "Purana keyboard do, ₹700 off*", v: 1599, type: "exchange", why: "*Sirf working wireless keyboard pe. Tumhara wired tha, ₹0 mila. Bahar ₹1,599." },
];
