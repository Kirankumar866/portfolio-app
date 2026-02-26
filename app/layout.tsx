import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiran Kumar Parasa | Full Stack Developer",
  description: "Full-stack Software Engineer with 3+ years of experience building scalable microservices, cloud-native solutions, and responsive frontends. Explore my portfolio.",
  icons: "/logo.png",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Java", "Spring Boot", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-content`}
      >
        {/* Animated Background */}
        <div className="animated-bg" />
        <div className="grid-overlay" />
        <div className="noise-overlay" />

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
