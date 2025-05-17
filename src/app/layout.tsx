import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import PremiumCursor from "@/components/premium/PremiumCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevDash - Ultimate Developer Dashboard",
  description: "All-in-one dashboard for developers to track, optimize, and improve their workflow",
  keywords: ["developer tools", "dashboard", "productivity", "metrics", "developer workflow"],
  authors: [{ name: "DevDash Team" }],
  creator: "DevDash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devdash.io",
    title: "DevDash - Ultimate Developer Dashboard",
    description: "All-in-one dashboard for developers to track, optimize, and improve their workflow",
    siteName: "DevDash",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevDash - Ultimate Developer Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDash - Ultimate Developer Dashboard",
    description: "All-in-one dashboard for developers to track, optimize, and improve their workflow",
    creator: "@devdash",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-icon.png"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300`}
      >
        <Providers>
          <div className="fixed inset-0 bg-grid-pattern-premium pointer-events-none z-0 opacity-50"></div>
          <PremiumCursor />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <div id="portal-root"></div>
        </Providers>
      </body>
    </html>
  );
}
