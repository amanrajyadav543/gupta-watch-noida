export const company = {
  name: "Gupta Watch",
  fullName: "Gupta Watch Sales & Service",
  hindi: "गुप्ता वॉच सेल्स एंड सर्विस",
  addressLine1: "Shop No. 5, Besides New Vansh Medicos",
  addressLine2: "Durga Shakti Marg, Rasoolpur Nawada, Industrial Area",
  addressLine3: "Sector 62, Noida, Uttar Pradesh 201309",
  phone: "099991 92753",
  phoneTel: "+919999192753",
  whatsappBase: "https://wa.me/919999192753",
  mapsUrl:
    "https://www.google.com/maps/place/Gupta+watch+sales+and+service/@28.6198164,77.3703066,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5f8c0cff07f:0x5235735d0470e76d!8m2!3d28.6198164!4d77.3703066!16s%2Fg%2F11qpffjlf2",
  lat: 28.6198164,
  lng: 77.3703066,
  rating: "4.9",
  reviewCount: "1,823",
};

export const wa = (text) =>
  `${company.whatsappBase}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: "#shop", label: "Shop" },
  { href: "#repair", label: "Repair & Service" },
  { href: "#brands", label: "Brands" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit Store" },
];

export const stats = [
  { value: "4.9★", label: "Google rating" },
  { value: "1,823", label: "Customer reviews" },
  { value: "All brands", label: "Repaired in-store" },
  { value: "Genuine", label: "Replacement parts" },
];

export const categories = [
  {
    key: "analog",
    title: "Analog Watches",
    tag: "Classic & everyday",
    enquiry: "Hi Gupta Watch! I'm looking at analog watches. What do you have?",
  },
  {
    key: "smart",
    title: "Smart Watches",
    tag: "Connected & active",
    enquiry: "Hi Gupta Watch! I'm interested in smart watches. What's available?",
  },
  {
    key: "straps",
    title: "Straps & Bands",
    tag: "Leather · metal · silicone",
    enquiry: "Hi Gupta Watch! I need a new watch strap. Can you help?",
  },
  {
    key: "women",
    title: "For Her",
    tag: "Slim & elegant",
    enquiry: "Hi Gupta Watch! I'm looking for a watch for women. What do you have?",
  },
];

export const repairServices = [
  {
    key: "movement",
    title: "Not working? We'll fix it",
    desc: "Stopped, running slow or dead for years — one reviewer's watch was back running in 15 minutes.",
  },
  {
    key: "glass",
    title: "Watch glass replacement",
    desc: "Cracked or scratched glass replaced cleanly, with a finish that looks almost like new.",
  },
  {
    key: "battery",
    title: "Battery replacement",
    desc: "Quick cell swaps so your watch keeps perfect time again.",
  },
  {
    key: "strap",
    title: "Straps & size adjustment",
    desc: "New straps fitted and links resized so the watch sits right on your wrist.",
  },
  {
    key: "parts",
    title: "Genuine parts",
    desc: "Customers report original parts used in repairs — and reasonable charges.",
  },
  {
    key: "smart",
    title: "Smartwatch support",
    desc: "Smartwatches and bands handled alongside traditional watches.",
  },
];

export const brands = [
  "Titan",
  "Fastrack",
  "Sonata",
  "Casio",
  "Timex",
  "Fossil",
  "Citizen",
  "Seiko",
  "Tissot",
  "Daniel Wellington",
  "Samsung",
  "Apple",
  "Noise",
  "boAt",
  "G-Shock",
  "Orient",
];

export const steps = [
  {
    n: "01",
    title: "Bring it in or send a photo",
    desc: "Walk in at Sector 62, or WhatsApp a photo of the watch and the problem.",
  },
  {
    n: "02",
    title: "Quick diagnosis",
    desc: "The watch is checked on the bench and you're told what it needs.",
  },
  {
    n: "03",
    title: "Careful repair",
    desc: "Fixed with genuine parts, handled carefully, finished cleanly.",
  },
  {
    n: "04",
    title: "Back on your wrist",
    desc: "Collect it running properly — many customers leave the same day.",
  },
];

export const reviews = [
  {
    name: "neeraj singh",
    meta: "Local Guide · 336 reviews",
    text: "Excellent service at Gupta Watch Sales and Service, Noida Sector 62. One of the best watch repair shops in the area. My watch was not working for the last 2 years, and they fixed it within just 15 minutes.",
  },
  {
    name: "Ayush kumar",
    meta: "Local Guide",
    text: "Amazing watch collection and very affordable range of watches available at the store. I repaired my Titan watch and the service was really great, my watch is like new now. He used original parts for replacement and the charges are also very reasonable.",
  },
  {
    name: "Ravi Kumar",
    meta: "Local Guide · 26 reviews",
    text: "Got my watch glass changed from this shop and the work was clean and professional. The owner handled the watch carefully, replaced the glass properly, and the finishing looked almost like new. Service was quick, price was reasonable.",
  },
];

export const pullQuotes = [
  "Good experience and staff behavior is also nice with reasonable price",
  "Excellent selection, knowledgeable people, and a pleasant shopping experience.",
];
