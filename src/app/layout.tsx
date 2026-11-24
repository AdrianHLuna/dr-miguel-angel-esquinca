import type { Metadata, Viewport } from "next";
import { Figtree, Hanken_Grotesk } from "next/font/google";
import { doctor } from "@/data";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

// Sustitutos libres de Acumin Pro (de paga, usada en la guía de marca real
// del doctor: ver PALETA DE COLORES.pdf, página 2) — Figtree y Hanken
// Grotesk son grotescas geométricas gratuitas con un carácter muy cercano,
// ninguna repetida en el registro de diseños del proyecto.
const figtree = Figtree({ subsets: ["latin"], weight: ["600", "700", "800", "900"], display: "swap", variable: "--font-figtree" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-hanken" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.title} ${doctor.name}, ${doctor.specialistTitle} con alta especialidad en ${doctor.subspecialty} en ${doctor.city}, ${doctor.state}. Fracturas, artrosis, lesiones deportivas y tumores óseos.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
    locale: "es_MX",
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: `${doctor.title} ${doctor.name} — ${doctor.specialty}` }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0795a5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${figtree.variable} ${hanken.variable} font-sans`}>
      <body className="pb-20 md:pb-0">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
