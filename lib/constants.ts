import type { Metadata } from "next";

export const SITE_URL = "https://www.preciouscarealaska.com";

export const BUSINESS = {
  name: "Precious Care Assisted Living Facility",
  location: "Anchorage, Alaska",
  address: "3773 Scenic View Dr, Anchorage, AK 99504",
  verifiedFacts: [
    "Family-owned assisted living facility",
    "Warm, caring, home-like environment",
    "Personalized care, safety, comfort, and companionship",
    "Small residential-style care setting",
    "For families seeking care for elderly loved ones",
  ],
  contact: {
    phone: "(907) 227-5421",
    phoneHref: "tel:+19072275421",
    email: "preciouscare@gci.net",
    emailHref: "mailto:preciouscare@gci.net",
    formAction: "https://formspree.io/f/xykldnjy",
    mapUrl: "https://maps.app.goo.gl/GHdtsgYCdQ2ugNAS9",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=3773%20Scenic%20View%20Dr%2C%20Anchorage%2C%20AK%2099504&z=15&output=embed",
  },
} as const;

export const BRAND_ASSETS = {
  fullLogo: "/brand/precious-care-logo.svg",
  mark: "/brand/precious-care-mark.svg",
  logoPng: "/brand/precious-care-logo.png",
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Care Approach" },
  { href: "/contact", label: "Contact" },
] as const;

export const SEO_KEYWORDS = [
  "assisted living Anchorage Alaska",
  "family assisted living Anchorage",
  "senior care Anchorage",
];

const defaultDescription =
  "Precious Care Assisted Living Facility offers a warm, family-owned, home-like assisted living setting in Anchorage, Alaska focused on personalized support, comfort, safety, and companionship.";

export function buildMetadata(
  title: string,
  description: string = defaultDescription,
  path = "/",
): Metadata {
  return {
    title,
    description,
    keywords: SEO_KEYWORDS,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: BUSINESS.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: BRAND_ASSETS.logoPng,
          width: 2000,
          height: 2000,
          alt: `${BUSINESS.name} in Anchorage, Alaska`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [BRAND_ASSETS.logoPng],
    },
  };
}

export const HOME_HERO = {
  headline: "Compassionate Care, Close to Home",
  subheadline: "Family-owned, home-like care centered on comfort, safety, and companionship.",
} as const;

export const PLACEHOLDER_NOTES = [
  "Phone number: (907) 227-5421",
  "Email address: preciouscare@gci.net",
  "Formspree endpoint or other static-safe form handler: https://formspree.io/f/xykldnjy",
  "Map embed or linked map destination: https://maps.app.goo.gl/GHdtsgYCdQ2ugNAS9",
  "Basic support language added: assistance with bathing, dressing, grooming, meals, medication reminders, light housekeeping, mobility support, and companionship.",
] as const;
