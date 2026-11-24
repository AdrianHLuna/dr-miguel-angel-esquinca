"use client";

import Image from "next/image";
import { useState } from "react";
import { Bone } from "lucide-react";

interface HeroBlobPhotoProps {
  src?: string;
  alt: string;
}

/**
 * Retrato del Hero recortado en HEXÁGONO ("tuerca/perno ortopédico", `.hex-frame`
 * en globals.css) con un anillo exterior del mismo hexágono rotando
 * lentísimo y continuo (`.hex-ring`, `hex-spin` 40s) — reemplaza por
 * completo el blob orgánico heredado de `dra-ana-laura-romero-constantino`
 * (AGENTS.md §1, hallazgo 2026-11-24: ningún "valor agregado" de un sitio
 * se hereda tal cual al siguiente). Con fallback cálido cuando aún no hay
 * foto real del doctor.
 */
export default function HeroBlobPhoto({ src, alt }: HeroBlobPhotoProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative aspect-square w-full">
      <div className="hex-ring absolute inset-0 border-2 border-dashed border-primary/30" aria-hidden="true" />
      <div className="absolute inset-[6%]">
        {failed ? (
          <div
            className="hex-frame flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25"
            role="img"
            aria-label={alt}
          >
            <Bone className="h-16 w-16 text-primary/60" aria-hidden="true" />
          </div>
        ) : (
          <div className="hex-frame relative h-full w-full overflow-hidden bg-muted">
            <Image
              src={src as string}
              alt={alt}
              fill
              className="object-cover object-[56%_center]"
              sizes="(max-width: 1024px) 90vw, 45vw"
              priority
              onError={() => setFailed(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
