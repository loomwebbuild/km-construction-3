import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BUSINESS_CONFIG } from '@/lib/business-config';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.name} | Home Builders in Maduravoyal, Chennai`,
  description: `${BUSINESS_CONFIG.name} brings 20+ years of trusted residential construction, custom homes, villas, apartments, and renovation work across Chennai. Built exactly the way you want.`,
  keywords: [
    'KM Constructions',
    'K.M. Constructions Chennai',
    'Home Builders Maduravoyal',
    'Residential Construction Chennai',
    'Custom Home Builders Chennai',
    'Individual House Builders Chennai',
    'Building Contractors Maduravoyal',
    'House Construction Chennai',
    'Villa Construction Chennai',
    'Home Renovation Chennai',
  ],
  authors: [{ name: 'K.M. Constructions' }],
  creator: 'K.M. Constructions',
  publisher: 'K.M. Constructions',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kmconstructions.com',
    siteName: 'K.M. Constructions',
    title: 'K.M. Constructions | Home Builders in Maduravoyal, Chennai',
    description: 'We build your dream home the way you want. Over two decades of trusted construction work across Chennai.',
    images: [
      {
        url: '/images/hero_chennai_residential_1790236153257.jpg',
        width: 1200,
        height: 630,
        alt: 'K.M. Constructions - Custom Home Builders in Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K.M. Constructions | Home Builders in Maduravoyal, Chennai',
    description: 'Over two decades of trusted residential construction work across Chennai. Custom homes built to your plan and taste.',
    images: ['/images/hero_chennai_residential_1790236153257.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: BUSINESS_CONFIG.name,
    image: 'https://kmconstructions.com/images/hero_chennai_residential_1790236153257.jpg',
    telephone: BUSINESS_CONFIG.contact.phonePlaceholder,
    email: BUSINESS_CONFIG.contact.emailPlaceholder,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_CONFIG.location.street,
      addressLocality: BUSINESS_CONFIG.location.area,
      addressRegion: BUSINESS_CONFIG.location.state,
      postalCode: BUSINESS_CONFIG.location.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0642,
      longitude: 80.1583,
    },
    url: 'https://kmconstructions.com',
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      BUSINESS_CONFIG.socials.instagram,
      BUSINESS_CONFIG.socials.facebook,
    ],
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
    },
    description: BUSINESS_CONFIG.taglineSecondary,
  };

  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B1F3A] text-[#1A1A1A] font-sans antialiased selection:bg-[#C9A24B] selection:text-[#0B1F3A]">
        {children}
      </body>
    </html>
  );
}
