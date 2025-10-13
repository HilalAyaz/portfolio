import { Yrsa } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import PathScroll from "@/components/PathScroll";
const yrsa = Yrsa({
  variable: "--font-yrsa",
  subsets: ["latin"],
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
          </PreloaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
