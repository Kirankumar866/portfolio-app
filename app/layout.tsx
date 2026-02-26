import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiran Parasa | Full Stack Developer",
  description: "Portfolio of Kiran Parasa, Full Stack Developer.",
  icons: "/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-content min-h-screen relative selection:bg-white selection:text-black">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
