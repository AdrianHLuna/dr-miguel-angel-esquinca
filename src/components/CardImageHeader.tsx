"use client";

import Image from "next/image";
import { useState } from "react";
import { Bone } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  aspect?: "video" | "16/10" | "4/3";
  /** Número de folio mostrado como tipografía grande sobre la imagen. */
  badge?: number;
}

const aspectClass: Record<NonNullable<CardImageHeaderProps["aspect"]>, string> = {
  video: "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
};

/**
 * Tarjeta "radiográfica": imagen con folio numerado tipográfico en la
 * esquina (no sello circular) y un divisor en forma de línea de fractura
 * (SVG quebrado) entre la imagen y el cuerpo de texto, que se ilumina en
 * hover — identidad de tarjeta propia de este sitio (tema de traumatología),
 * análoga conceptualmente al trazo EKG de otro sitio del registro pero
 * mecánicamente distinta (quiebre geométrico, no onda continua).
 */
export default function CardImageHeader({ src, alt, aspect = "video", badge }: CardImageHeaderProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div>
      <div className="relative">
        {typeof badge === "number" && (
          <span
            className="xray-badge absolute right-3 top-3 z-10 font-heading text-2xl font-black text-background/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]"
            aria-hidden="true"
          >
            {String(badge).padStart(2, "0")}
          </span>
        )}
        {failed ? (
          <div
            className={`${aspectClass[aspect]} flex items-center justify-center bg-gradient-to-br from-primary/15 to-secondary/15`}
            role="img"
            aria-label={alt}
          >
            <Bone className="h-10 w-10 text-primary/50" aria-hidden="true" />
          </div>
        ) : (
          <div className={`${aspectClass[aspect]} relative overflow-hidden bg-muted`}>
            <Image
              src={src as string}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              onError={() => setFailed(true)}
            />
          </div>
        )}
      </div>
      <svg
        className="crack-divider block h-3 w-full"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,6 L40,6 L48,1 L56,10 L64,3 L72,9 L80,6 L200,6"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
