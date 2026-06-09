export const phoneDisplay = "0243-20 70 70";
export const phoneHref = "+46243207070";
export const bookingAppId = "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326";

export const siteConfig = {
  "folder": "taxihedemora.se",
  "packageName": "taxi-hedemora",
  "domain": "taxihedemora.se",
  "name": "Taxi Hedemora",
  "city": "Hedemora",
  "title": "Taxi Hedemora | Boka taxi dygnet runt",
  "description": "Taxi Hedemora erbjuder trygg och punktlig taxi i Hedemora. Ring 0243-20 70 70 eller boka online för lokala resor, tågtaxi, flygtaxi och företagsresor.",
  "areaServed": [
    "Hedemora",
    "Garpenberg",
    "Långshyttan",
    "Säter",
    "Dalarna"
  ],
  "intro": "Taxi Hedemora hjälper dig med lokala taxiresor, upphämtning vid stationen, företagsresor och längre transporter inom Dalarna.",
  "about": "Vi kombinerar lokal service med enkel tillgänglighet. Oavsett om resan är planerad eller brådskande kan du ringa direkt eller skicka bokningen online.",
  "routes": [
    "Hedemora station",
    "Garpenberg",
    "Långshyttan",
    "Säter",
    "Avesta",
    "Dala Airport"
  ],
  "mapQuery": "Hedemora,Dalarna,Sweden",
  "url": "https://taxihedemora.se",
  "phoneDisplay": "0243-20 70 70",
  "phoneHref": "+46243207070",
  "bookingAppId": "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326"
};

export const navItems = [
  { href: "/", label: "Startsida" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakta-oss", label: "Kontakta oss" },
];

export const taxiSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: phoneHref,
  priceRange: "$$",
  image: `${siteConfig.url}/assets/img/hero-taxi.webp`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: "Dalarna",
    addressCountry: "SE",
  },
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: "Cash, Credit Card, Swish, Invoice",
};
