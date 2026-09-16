import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.headline.line1} ${portfolioData.personal.headline.line2}`,
  description: `${portfolioData.personal.tagline}. ${portfolioData.personal.bio}`,
  keywords: [
    "AI Engineer",
    "Creative AI",
    "Machine Learning",
    "Deep Learning",
    "Full-Stack",
    "Next.js",
    "Rasuwan Kalhara",
  ],
  authors: [
    {
      name: portfolioData.personal.name,
      url: `https://${portfolioData.personal.domain}`,
    },
  ],
  openGraph: {
    title: `${portfolioData.personal.name} | Creative AI Engineer`,
    description: portfolioData.personal.bio,
    url: `https://${portfolioData.personal.domain}`,
    siteName: portfolioData.personal.domain,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiased`}>
      <body
        className={`flex flex-col min-h-screen bg-[#cffe00] text-black ${inter.className} ${spaceGrotesk.variable}`}
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
