import type { Metadata } from "next";
import { roboto } from "@/lib/fonts";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: {
    default: "FitSleeps® | 100% Wake-Up Guarantee | Vibrating Alarm",
    template: "%s | FitSleeps®",
  },
  description:
    "The silent vibrating wristband alarm that guarantees you wake up — without disturbing your partner. Trusted by 175,000+ deep sleepers. 100-night money-back guarantee.",
  keywords: [
    "vibrating alarm",
    "silent alarm",
    "wake up alarm",
    "wristband alarm",
    "deep sleeper alarm",
    "partner-friendly alarm",
    "FitSleeps",
  ],
  openGraph: {
    title: "FitSleeps® | 100% Wake-Up Guarantee",
    description: "Silent vibrating alarm. Trusted by 175,000+ people. 100-night trial.",
    url: "https://fitsleeps.com",
    siteName: "FitSleeps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitSleeps® | 100% Wake-Up Guarantee",
    description: "Silent vibrating alarm. Trusted by 175,000+ people. 100-night trial.",
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
