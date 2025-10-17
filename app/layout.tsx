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
  title: "Hilal Ayaz - Full Stack Developer",
  description:
    "Hilal Ayaz's personal portfolio website showcasing projects, skills, and services as a Full Stack Developer.",
  keywords: [
    "Hilal Ayaz",
    "Full Stack Developer",
    "MERN Stack",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Frontend",
    "Backend",
    "Software Engineer",
    "Web Applications",
    "Programming",
    "Tech Blog",
  ],
  authors: [
    { name: "Hilal Ayaz", url: "https://hilalayaz-webdev.netlify.app" },
  ],
  creator: "Hilal Ayaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hilalayaz-webdev.netlify.app",
    title: "Hilal Ayaz - Full Stack Developer",
    description:
      "Hilal Ayaz's personal portfolio website showcasing projects, skills, and services as a Full Stack Developer.",
    siteName: "Hilal Ayaz Portfolio",
    images: [
      {
        url: "/portfolio-image-share.png",
        width: 1200,
        height: 630,
        alt: "Hilal Ayaz Portfolio Preview",
      },
    ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" as=" font" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
          as=""
        />
        <link rel="preload" href="/hilal.jpg" as="image" />
      </head>
      <body className={`${yrsa.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PreloaderWrapper>
            <Toaster />
            <PathScroll />
            {children}
            <Analytics />
            <SpeedInsights />
          </PreloaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
