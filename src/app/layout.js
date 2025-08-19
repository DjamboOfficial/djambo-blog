import "./globals.css";
import { Merriweather } from "next/font/google";
import SeoProvider from "./seo-provider";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <SeoProvider />
          <Header />
          <main className="flex-grow">{children}</main>
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
