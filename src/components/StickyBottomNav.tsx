"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1, hallazgo
 * 2026-11-07): en vez de un solo dock/barra unificada (patrón ya usado por
 * 6+ sitios del registro, incluyendo variantes de píldora con FAB), aquí son
 * DOS elementos flotantes SEPARADOS — una píldora circular pequeña de
 * "Llamar" y, con espacio real entre ambas, una píldora más grande de
 * "Agendar por WhatsApp" — ninguno comparte contenedor.
 */
export default function StickyBottomNav() {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hola, Dr. ${doctor.name}. Vi su página web y me gustaría agendar una consulta.`
  );

  return (
    <div
      className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-between gap-3 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${doctor.phone}`}
        aria-label="Llamar al consultorio"
        onClick={() => trackEvent("clic_llamar", { source: "sticky_nav" })}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background/95 text-primary shadow-xl backdrop-blur"
      >
        <Phone size={19} aria-hidden="true" />
      </a>
      <a
        href={`https://wa.me/${cleanWhatsapp}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_nav" })}
        aria-label="Agendar por WhatsApp"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-xl"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Agendar por WhatsApp
      </a>
    </div>
  );
}
