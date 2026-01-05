import type { Metadata } from "next";
import { baskerville, poppins } from "@/lib/fonts";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vario Advisors - Retire With Confidence. Plan With Alternatives.",
  description: "We help retirees unlock a modern retirement strategy built on stability, real assets, and smarter diversification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baskerville.variable} ${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

