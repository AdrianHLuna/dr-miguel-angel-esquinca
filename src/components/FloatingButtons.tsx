"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/**
 * Chrome persistente — variado a propósito (AGENTS.md §1, hallazgo
 * 2026-11-07). Posición y forma nuevas en el registro: una cápsula vertical
 * tipo "pestaña de expediente" fija al borde DERECHO, a la MITAD vertical
 * del viewport (no en una esquina inferior como el resto de sitios del
 * registro), con los dos botones apilados y una etiqueta de texto vertical.
 */
const FloatingButtons = () => {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = `Hola, Dr. ${doctor.name}. Vi su página web y me gustaría agendar una consulta.`;
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <div className="flex flex-col items-center gap-1 rounded-l-2xl border border-r-0 border-border bg-background/95 py-3 pl-2 pr-1 shadow-xl backdrop-blur">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar por WhatsApp"
          onClick={() => trackEvent("clic_whatsapp", { source: "floating" })}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-110"
        >
          <MessageCircle size={20} aria-hidden="true" />
        </a>
        <a
          href={`tel:${doctor.phone}`}
          aria-label="Llamar al consultorio"
          onClick={() => trackEvent("clic_llamar", { source: "floating" })}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-110"
        >
          <Phone size={18} aria-hidden="true" />
        </a>
        <span
          className="mt-1 text-[9px] font-black uppercase tracking-widest text-muted-foreground"
          style={{ writingMode: "vertical-rl" }}
          aria-hidden="true"
        >
          Agendar
        </span>
      </div>
    </div>
  );
};

export default FloatingButtons;
