import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StickyCTA from "@/components/StickyCTA";
import DemoLayoutWrapper from "@/components/DemoLayoutWrapper";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const baseUrl = "https://acquisitionsystems.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "New Wave Acquisitions | acquisitionsystems.io",
    template: "%s | New Wave Acquisitions",
  },
  description:
    "Acquire high-ticket clients with an AI SDR twin embedded in your book. Intellibook captures reader intent. CoreText shows what converts.",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "New Wave Acquisitions",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body className="bg-white text-gray-900 antialiased overflow-x-hidden">
        <DemoLayoutWrapper
          nav={<Nav />}
          footer={<Footer />}
          stickyCta={<StickyCTA />}
          scrollReveal={<ScrollReveal />}
        >
          {children}
        </DemoLayoutWrapper>
      </body>
    </html>
  );
}
