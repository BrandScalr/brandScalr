import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import FloatingCTA from "@/components/ui/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "BRANDSCALR | Elite Growth & Scaling Engine",
  description: "We help modern brands scale with content systems, paid growth, and conversion-focused creative. Not an agency — your growth operators.",
  keywords: [
    "content agency",
    "social media marketing agency",
    "reel editing agency",
    "growth marketing agency",
    "SEO services",
    "ads management",
    "content creation services"
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-deep-black selection:bg-brand-orange selection:text-white">
        <ClientProviders>
          {children}
          <FloatingCTA />
        </ClientProviders>
      </body>
    </html>
  );
}
