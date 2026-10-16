import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://firozkhan.dev";
const TITLE = "Firoz Khan — Full-Stack Developer | Websites & Web Apps That Bring Customers";
const DESCRIPTION =
  "Firoz Khan is a full-stack developer in Palghar, India building fast, modern, SEO-ready websites and web apps for clients in India, the USA & UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Firoz Khan — Full-Stack Developer",
    images: [{ url: "/firoz-khan.webp", width: 1200, height: 1200, alt: "Firoz Khan — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/firoz-khan.webp"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#06060f",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Firoz Khan",
  jobTitle: "Full-Stack Developer",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/firoz-khan.webp`,
  email: "mailto:hello@fkdigitalmedia.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palghar",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/firoz-khan-1153358a/",
    "https://www.instagram.com/rtibyfiroz/",
    "https://fkdigitalmedia.com",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
