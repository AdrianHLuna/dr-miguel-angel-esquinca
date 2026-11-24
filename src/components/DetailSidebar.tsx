import Link from "next/link";
import type { Route } from "next";
import { Clock, MapPin, MessageCircle, Phone, ShieldAlert } from "lucide-react";
import { doctor } from "@/data";
import Logo from "./Logo";

interface RelatedItem {
  name: string;
  href: Route;
}

interface DetailSidebarProps {
  related?: RelatedItem[];
}

/**
 * Sidebar fijo (sticky en desktop) a la DERECHA del artículo — variación
 * deliberada frente a sitios con sidebar a la izquierda del registro.
 * Tratamiento visual propio: borde punteado tipo "sutura quirúrgica" en vez
 * de borde sólido o brackets de esquina.
 */
export default function DetailSidebar({ related = [] }: DetailSidebarProps) {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="xray-card border-2 border-dashed border-primary/30 bg-surface p-6 text-center">
        <Logo height={36} className="mx-auto" />
        <p className="mt-3 font-heading text-lg font-semibold text-foreground">
          {doctor.title} {doctor.name}
        </p>
        <p className="text-sm text-muted-foreground">{doctor.specialistTitle}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Agendar por WhatsApp
        </a>
        <a
          href={`tel:${doctor.phone}`}
          className="mt-3 flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Llamar al consultorio
        </a>
      </div>

      <div className="xray-card border-2 border-dashed border-border bg-background p-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">{doctor.address}</p>
        </div>
        <div className="mt-4 flex items-start gap-3">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">{doctor.schedule}</p>
        </div>
        <a
          href={doctor.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
        >
          Cómo llegar
        </a>
      </div>

      {doctor.emergencyPhone && (
        <div className="xray-card border-2 border-dashed border-secondary/50 bg-secondary/10 p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-foreground">¿Es una urgencia?</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Esto no sustituye al 911 ni a una sala de urgencias si tu salud está en riesgo inmediato.
              </p>
              <a href={`tel:${doctor.emergencyPhone}`} className="mt-2 block text-sm font-semibold text-secondary">
                Llamar ahora: {doctor.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="bg-background p-6">
          <p className="font-heading text-sm font-semibold text-foreground">Relacionados</p>
          {/* Lista sin bordes con barra de acento que crece en hover
              (.related-row) — reemplaza la grilla de cajas con borde
              repetida en el resto del proyecto (AGENTS.md §1, hallazgo
              2026-11-24). */}
          <div className="mt-4 divide-y divide-border/70">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="related-row group flex items-center justify-between py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
                <span aria-hidden="true" className="translate-x-0 text-primary/50 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
