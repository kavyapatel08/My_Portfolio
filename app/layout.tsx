import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Starfield } from "@/components/layout/Starfield";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { ClientEffects } from "@/components/layout/ClientEffects";
import { site } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: `${site.name} | AI/ML Engineer`,
  description: site.description,
  openGraph: {
    title: `${site.name} | AI/ML Engineer`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <ClientEffects />
        <Starfield />
        <NoiseOverlay />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
