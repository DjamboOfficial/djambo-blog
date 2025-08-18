import "./globals.css";
import { Inter } from "next/font/google";
import SeoProvider from "./seo-provider";
import { Merriweather } from "next/font/google";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

const Footer = dynamic(() => import("@components/Footer"), { ssr: false });

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"), // nota: SITE_URL maiuscolo
};

export default function RootLayout({ children }) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Djambo Blog",
    url: "https://www.tuo-sito.it",
    description: "Blog personale con articoli di musica e tecnologia",
    publisher: {
      "@type": "Organization",
      name: "Djambo Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tuo-sito.it/logo.png",
      },
    },
    author: {
      "@type": "Person",
      name: "Djambo",
    },
  };

  return (
    <html lang="it" className={merriweather.variable}>
      <head>
        <Script
          type="application/ld+json"
          id="schema-org"
          strategy="afterInteractive"
        >
          {JSON.stringify(schemaOrgJSONLD)}
        </Script>
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors min-h-screen flex flex-col">
        <SeoProvider />
        <Header />

        {/* Qui monti le pagine */}
        <main className="flex-grow">{children}</main>

        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
