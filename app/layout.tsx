import { Yrsa } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import PathScroll from "@/components/PathScroll";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const yrsa = Yrsa({
  variable: "--font-yrsa",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Clear, keyword-heavy title
  title: {
    default: "Hilal Ayaz | Full Stack Developer & Next.js Expert",
    template: "%s | Hilal Ayaz",
  },
  description:
    "Full Stack Developer specializing in Next.js 16, and high-performance web applications. Explore Hilal Ayaz's portfolio for custom software engineering and modern web solutions.",
  keywords: [
    "Hilal Ayaz",
    "Full Stack Developer Pakistan",
    "Next.js 15 Expert",
    "Sanity.io Developer",
    "Headless CMS Specialist",
    "React Engineer",
    "TypeScript Developer",
    "MERN Stack Portfolio",
    "Tailwind CSS Expert",
    "Software Engineer Mardan",
    "On-Demand ISR",
    "Modern Web Architecture",
    "Custom Web Applications",
  ],
  authors: [{ name: "Hilal Ayaz", url: "https://hilalayaz.vercel.app" }],
  creator: "Hilal Ayaz",

  // OpenGraph for LinkedIn/Socials
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hilalayaz.vercel.app",
    title: "Hilal Ayaz | Modern Full Stack Developer",
    description:
      "Crafting blazing-fast web experiences with Next.js and React.js. View my latest projects and technical expertise.",
    siteName: "Hilal Ayaz Portfolio",
    images: [
      {
        url: "/portfolio-image-share.png",
        width: 1200,
        height: 630,
        alt: "Hilal Ayaz Portfolio - Full Stack Web Development",
      },
    ],
  },

  // Twitter/X specific metadata
  twitter: {
    card: "summary_large_image",
    title: "Hilal Ayaz | Full Stack Developer",
    description: "Web Development Expert. Building the future of the web.",
    images: ["/portfolio-image-share.png"],
  },

  // Verification for Search Consoles
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Simplified preconnects - Next/Font handles most of this automatically */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${yrsa.variable} antialiased font-serif`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <PathScroll />
          {/* Consider if you want the PreloaderWrapper here too */}
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
