import Link from "next/link";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header de 3 franjas apiladas (desktop) — composición nueva en el registro
 * (AGENTS.md §1, fila "Header"): credenciales arriba, LOGO SOLO en su
 * propia franja central, y una tercera franja completa debajo con el nav y
 * el CTA de WhatsApp a lo largo de todo el ancho. Ninguna composición
 * anterior del registro usa 3 filas horizontales apiladas — todas permutan
 * zonas dentro de una sola fila, o alternan a riel lateral. En mobile/tablet
 * las franjas 2 y 3 se fusionan en una sola fila (logo a la izquierda,
 * WhatsApp + hamburguesa a la derecha).
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-primary/10 px-4 py-1.5 text-center text-xs text-muted-foreground">
        {formatCredentials(doctor)}
      </div>

      {/* Franja 2: logo solo, centrado — fila propia, sin nav/CTA. Nombre y
          especialidad del doctor como texto real junto al isotipo (el
          ícono por sí solo no comunica esa información). */}
      <div className="hidden border-b border-border/70 py-4 md:block">
        <Link href="/" aria-label={`${doctor.title} ${doctor.name}`} className="flex flex-col items-center gap-1">
          <Logo height={78} withName nameClassName="text-xl" />
          <span className="text-xs text-muted-foreground">{doctor.specialistTitle}</span>
        </Link>
      </div>

      {/* Franja 3: nav completa + CTA, a todo el ancho (solo desktop). */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between px-4 py-3 md:flex">
        <nav aria-label="Principal" className="flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-foreground/70 transition-colors duration-150 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Agendar por WhatsApp
        </a>
      </div>

      {/* Mobile/tablet: una sola fila combinada bajo la franja de credenciales. */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 md:hidden">
        <Link href="/" aria-label={`${doctor.title} ${doctor.name}`}>
          <Logo height={54} withName nameClassName="text-base" />
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            WhatsApp
          </a>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
