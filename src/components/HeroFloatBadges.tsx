import Image from "next/image";
import { doctor } from "@/data";

/**
 * Etiqueta de confianza superpuesta en la esquina inferior del marco
 * hexagonal del Hero — reemplaza las insignias flotantes tipo "bob" que
 * compartían la misma mecánica (solo cambiando íconos) con otros sitios
 * del registro (AGENTS.md §1, hallazgo 2026-11-24). Muestra el sello real
 * de certificación en vez de duplicar las cifras de la franja de stats.
 */
export default function HeroFloatBadges() {
  const cert = doctor.certifications[0];
  if (!cert) return null;

  return (
    <div
      className="absolute -bottom-3 left-1/2 z-10 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur"
      style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
        {cert.logo ? (
          <Image src={cert.logo} alt={cert.institution} width={32} height={32} className="h-full w-full object-contain" />
        ) : (
          <span className="text-[10px] font-black text-primary">{cert.institution.slice(0, 2).toUpperCase()}</span>
        )}
      </span>
      <div className="min-w-0">
        <p className="truncate text-[11px] font-bold uppercase tracking-wide text-primary">Médico certificado</p>
        <p className="truncate text-xs text-muted-foreground">{cert.institution}</p>
      </div>
    </div>
  );
}
