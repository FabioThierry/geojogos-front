import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getNavigationData, getFooterData } from "@/lib/data-access";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: {
    default: "GeoJogos - Jogos Educacionais para Geografia",
    template: "%s | GeoJogos",
  },
  description:
    "Criamos jogos digitais e analógicos personalizados para transformar a educação em Geografia nas escolas. Estúdio de jogos educacionais especializado em desenvolvimento de jogos personalizados para professores e instituições.",
  keywords: [
    "jogos educacionais",
    "educação em geografia",
    "jogos de tabuleiro",
    "jogos digitais",
    "jogos personalizados",
    "escolas",
    "professores",
  ],
  authors: [{ name: "GeoJogos" }],
  generator: "Fábio Thierry",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "GeoJogos",
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon-16x16.png", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", type: "image/png" },
      { url: "/images/favicon/android-chrome-192x192.png", type: "image/png" },
      { url: "/images/favicon/android-chrome-512x512.png", type: "image/png" },
      { url: "/images/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#2d7a3a",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navData = await getNavigationData();
  const footerData = await getFooterData();

  return (
    <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">
        <Header navData={navData} />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer footerData={footerData} />
        <Analytics />
      </body>
    </html>
  );
}
