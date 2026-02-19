import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
