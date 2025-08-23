import "./globals.css";
import { Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ClientWrapper from "@/components/ClientWrapper";
import ThemeWrapper from "@/components/ThemeWrapper";
import SeoProvider from "@/components/SeoWrapper";

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
  return (
    <html lang="it" className={merriweather.variable}>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors min-h-screen flex flex-col">
        <ClientWrapper>
          <ThemeWrapper>
            <SeoProvider />
            <Header />
            <main className="flex-grow">{children}</main>
            <ScrollToTop />
            <Footer />
          </ThemeWrapper>
        </ClientWrapper>
      </body>
    </html>
  );
}
