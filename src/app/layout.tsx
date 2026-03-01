import type { Metadata } from "next";
import { roboto } from "@/lib/fonts";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: {
    default: "MAXL ONE® | Never Wash Your Vehicle Again | Multi-Surface Spray",
    template: "%s | MAXL ONE®",
  },
  description:
    "MAXL ONE is the all-purpose, multi-surface clean, shine, and protect spray that makes everything look NEW again — effortlessly. Trusted by thousands of vehicle owners.",
  keywords: [
    "car cleaning spray",
    "vehicle detailing",
    "car shine spray",
    "multi-surface cleaner",
    "MAXL ONE",
    "car wash alternative",
    "vehicle protectant",
  ],
  openGraph: {
    title: "MAXL ONE® | Never Wash Your Vehicle Again",
    description: "The all-purpose spray that cleans, shines, and protects every surface. Make everything look NEW again.",
    url: "https://maxl.com",
    siteName: "MAXL ONE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAXL ONE® | Never Wash Your Vehicle Again",
    description: "The all-purpose spray that cleans, shines, and protects every surface.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${roboto.className} antialiased`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
