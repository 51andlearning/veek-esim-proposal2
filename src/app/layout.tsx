import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteTitle = "Veek · Travel eSIM Opportunity";
const siteDescription =
  "Your-branded, itinerary-aware travel eSIM with loyalty earn and burn.";

export const metadata: Metadata = {
  metadataBase: new URL("https://veek-esim-proposal2.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: "Veek",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
