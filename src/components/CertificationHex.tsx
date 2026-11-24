import Image from "next/image";

interface CertificationHexProps {
  name: string;
  institution: string;
  year?: string;
  logoSrc?: string;
  offset?: boolean;
}

function initials(text: string): string {
  return text
    .split(/\s+/)
    .filter((w) => w.length > 2 || /^[A-ZÁÉÍÓÚÑ]/.test(w))
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Celda hexagonal de certificación/formación — reemplaza por completo la
 * tarjeta redonda+texto (`InstitutionBadge.tsx`) compartida sin cambios
 * entre todos los sitios del proyecto desde que se introdujo (AGENTS.md §1,
 * hallazgo 2026-11-24: "componentes congelados"). Disposición en panal con
 * desfase vertical alterno (`offset`), no una lista/grid simple.
 */
export default function CertificationHex({ name, institution, year, logoSrc, offset }: CertificationHexProps) {
  return (
    <div className={`flex w-40 flex-col items-center text-center ${offset ? "md:mt-10" : ""}`}>
      <div className="hex-cell flex h-28 w-28 items-center justify-center border border-primary/25 bg-background p-4 shadow-sm">
        {logoSrc ? (
          <Image src={logoSrc} alt={institution} width={64} height={64} className="h-full w-full object-contain" />
        ) : (
          <span className="text-lg font-black text-primary">{initials(institution)}</span>
        )}
      </div>
      <p className="mt-4 text-sm font-semibold text-foreground">{name}</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {institution}
        {year ? ` · ${year}` : ""}
      </p>
    </div>
  );
}
