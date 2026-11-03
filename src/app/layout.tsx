import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import { MobileNav } from "@/components/MobileNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const GA_ID = "G-8YRV11J4QN";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — India Guide`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Raxi Win",
    "RaxiWin",
    "Raxi Win Login",
    "Raxi Win Register",
    "Raxi Win APK",
    "Raxi Win Game",
    "raxiiwins.com",
  ],
  alternates: {
    canonical: site.url,
    types: {
      "application/rss+xml": `${site.url}/sitemap.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: "/images/rw-og.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/rw-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/rw-app-icon.png", type: "image/png", sizes: "192x192" },
      { url: "/images/rw-app-icon.webp", type: "image/webp" },
    ],
    apple: [{ url: "/images/rw-app-icon.png", sizes: "192x192" }],
    shortcut: ["/images/rw-app-icon.png"],
  },
  verification: {
    google: "p3XnAnSzmSHInbKNO0G8ERRTqiov-bmNHPnA7nsH7TM",
  },
  other: {
    "content-language": "en-IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#9f1239",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} h-full`}>
      <body className="page-with-bottom-nav flex min-h-full flex-col antialiased">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileNav />
      </body>
    </html>
  );
}
