import Image from "next/image";
import { doctor } from "@/data";

interface LogoProps {
  /** Alto del isotipo en px. El ancho se ajusta solo (proporción real recortada). */
  height?: number;
  className?: string;
  /** Muestra el nombre del doctor como texto HTML real junto al isotipo. */
  withName?: boolean;
  nameClassName?: string;
}

/**
 * Logo real de marca: el archivo entregado es una composición horizontal
 * (isotipo + nombre completo + especialidad + cédulas incrustadas como
 * texto en la imagen), ilegible si se reduce completa a la altura de un
 * header (AGENTS.md §6). Solución aplicada: se recortó SOLO el isotipo
 * (medialuna + silueta de hueso fracturado, real de la guía de marca) a un
 * archivo aparte (`public/brand/icon.png`) y el nombre del doctor se muestra
 * como texto HTML real — así el nombre siempre es legible sin depender del
 * tamaño de render del isotipo.
 */
export default function Logo({ height = 40, className = "", withName = false, nameClassName = "" }: LogoProps) {
  const width = Math.round((height * 948) / 867);
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/icon.png"
        alt={`${doctor.title} ${doctor.name}`}
        width={width}
        height={height}
        style={{ height, width: "auto" }}
        priority
      />
      {withName && (
        <span className={`font-heading leading-none font-bold ${nameClassName || "text-foreground"}`}>
          {doctor.title} {doctor.name}
        </span>
      )}
    </span>
  );
}
