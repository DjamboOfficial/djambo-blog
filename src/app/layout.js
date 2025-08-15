import "./globals.css";
import SeoProvider from "./seo-provider";
import { Merriweather } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"), // nota: SITE_URL maiuscolo
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={merriweather.variable}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Il mio blog"
          href="/rss.xml"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
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
