import "./globals.css";
import { Merriweather } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Blog di Edo",
  description: "Un blog multilingua fatto con Next e Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={merriweather.variable}>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
